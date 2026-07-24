const http = require('node:http');
const fs = require('node:fs');
const fsp = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const crypto = require('node:crypto');

const HOST = '127.0.0.1';
const PORT = 4174;
const CACHE_DIR = path.join(os.tmpdir(), 'hsk-chinese-tts-cache');
const pending = new Map();

function sendJson(response, status, body) {
    response.writeHead(status, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8'
    });
    response.end(JSON.stringify(body));
}

function audioSources(text) {
    const encoded = encodeURIComponent(text);
    return [
        `https://fanyi.baidu.com/gettts?lan=zh&text=${encoded}&spd=5&source=web`,
        `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=zh-CN&q=${encoded}`
    ];
}

async function downloadAudio(text) {
    let lastError;
    for (const source of audioSources(text)) {
        try {
            const response = await fetch(source, {
                headers: {
                    Accept: 'audio/mpeg,audio/*;q=0.9,*/*;q=0.1',
                    'User-Agent': 'Mozilla/5.0 HSK-Learning-App/1.0'
                },
                signal: AbortSignal.timeout(15000)
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const bytes = Buffer.from(await response.arrayBuffer());
            if (bytes.length < 512) throw new Error('Audio response is empty');
            return bytes;
        } catch (error) {
            lastError = error;
        }
    }
    throw lastError || new Error('No audio source is available');
}

async function getAudioFile(text) {
    await fsp.mkdir(CACHE_DIR, { recursive: true });
    const key = crypto.createHash('sha256').update(text).digest('hex');
    const filePath = path.join(CACHE_DIR, `${key}.mp3`);
    try {
        const stat = await fsp.stat(filePath);
        if (stat.size >= 512) return filePath;
    } catch {}

    if (!pending.has(key)) {
        pending.set(key, (async () => {
            const bytes = await downloadAudio(text);
            await fsp.writeFile(filePath, bytes);
            return filePath;
        })().finally(() => pending.delete(key)));
    }
    return pending.get(key);
}

const server = http.createServer(async (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    if (request.method === 'OPTIONS') {
        response.writeHead(204);
        response.end();
        return;
    }

    const url = new URL(request.url, `http://${HOST}:${PORT}`);
    if (url.pathname === '/health') {
        sendJson(response, 200, { ok: true, cache: CACHE_DIR });
        return;
    }
    if (url.pathname !== '/tts' || request.method !== 'GET') {
        sendJson(response, 404, { error: 'Not found' });
        return;
    }

    const text = (url.searchParams.get('text') || '').trim();
    if (!text || text.length > 80 || !/[\p{Script=Han}]/u.test(text)) {
        sendJson(response, 400, { error: 'Invalid Chinese text' });
        return;
    }

    try {
        const filePath = await getAudioFile(text);
        const stat = await fsp.stat(filePath);
        response.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'public, max-age=31536000, immutable',
            'Content-Length': stat.size,
            'Content-Type': 'audio/mpeg'
        });
        fs.createReadStream(filePath).pipe(response);
    } catch (error) {
        sendJson(response, 502, { error: 'TTS source unavailable', detail: error.message });
    }
});

server.listen(PORT, HOST, () => {
    console.log(`HSK TTS proxy listening on http://${HOST}:${PORT}`);
});
