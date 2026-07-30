const http = require('node:http');
const fs = require('node:fs');
const fsp = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const crypto = require('node:crypto');
const zlib = require('node:zlib');

const HOST = String(process.env.HSK_TTS_HOST || (process.env.RENDER ? '0.0.0.0' : '127.0.0.1')).trim() || '127.0.0.1';
const PORT = Number(process.env.HSK_TTS_PORT || process.env.PORT) || 4174;
const PROJECT_ROOT = path.resolve(__dirname, '..');
const CACHE_DIR = path.join(os.tmpdir(), 'hsk-chinese-tts-cache');
const MAX_CACHE_FILES = 400;
const MAX_CACHE_BYTES = 128 * 1024 * 1024;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 120;
const AZURE_SPEECH_KEY = String(process.env.AZURE_SPEECH_KEY || '').trim();
const AZURE_SPEECH_REGION = String(process.env.AZURE_SPEECH_REGION || '').trim();
const AZURE_ENABLED = Boolean(AZURE_SPEECH_KEY && AZURE_SPEECH_REGION);
const DEFAULT_VOICE = 'zh-CN-XiaoyiNeural';
const ALLOWED_VOICES = new Set([
    'zh-CN-XiaoyiNeural',
    'zh-CN-XiaoxiaoNeural',
    'zh-CN-YunxiNeural',
    'zh-CN-YunjianNeural',
    'zh-CN-XiaoshuangNeural',
    'zh-CN-YunxiaNeural',
    'zh-CN-XiaoruiNeural',
    'zh-CN-YunyeNeural',
    'zh-CN-YunyangNeural'
]);
const DEFAULT_RATE = 1;
const DEFAULT_PITCH = 1;
const MIN_RATE = 0.65;
const MAX_RATE = 1.15;
const MIN_PITCH = 0.7;
const MAX_PITCH = 1.3;
const STATIC_MIME_TYPES = Object.freeze({
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
    '.woff2': 'font/woff2'
});
const pending = new Map();
const rateLimits = new Map();

function sendJson(response, status, body) {
    response.writeHead(status, {'Content-Type': 'application/json; charset=utf-8'});
    response.end(JSON.stringify(body));
}

function configuredOrigins() {
    return String(process.env.HSK_TTS_ALLOWED_ORIGINS || '')
        .split(',')
        .map(value => value.trim())
        .filter(Boolean);
}

function isAllowedOrigin(origin, requestHost = '') {
    if (!origin || origin === 'null') return true;
    try {
        const url = new URL(origin);
        if (['localhost', '127.0.0.1'].includes(url.hostname)) return true;
        if (requestHost && url.host === requestHost) return true;
        return configuredOrigins().includes(origin);
    } catch {
        return false;
    }
}

function applyCors(request, response) {
    const origin = request.headers.origin || '';
    if (origin) {
        response.setHeader('Access-Control-Allow-Origin', origin);
        response.setHeader('Vary', 'Origin');
    }
    response.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Range');
    response.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    if (request.headers['access-control-request-private-network'] === 'true') {
        response.setHeader('Access-Control-Allow-Private-Network', 'true');
    }
}

function consumeRateLimit(request) {
    const now = Date.now();
    const key = (request.socket.remoteAddress || 'local') + '|' + (request.headers.origin || 'direct');
    const state = rateLimits.get(key);
    if (!state || now - state.startedAt >= RATE_LIMIT_WINDOW_MS) {
        rateLimits.set(key, {startedAt: now, count: 1});
        return true;
    }
    state.count++;
    return state.count <= RATE_LIMIT_MAX;
}

function escapeXml(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function normalizeVoice(value) {
    const voice = String(value || '').trim();
    return ALLOWED_VOICES.has(voice) ? voice : DEFAULT_VOICE;
}

function normalizeNumber(value, fallback, minimum, maximum) {
    if (value === null || value === undefined || value === '') return fallback;
    const number = Number(value);
    return Number.isFinite(number) ? Math.min(maximum, Math.max(minimum, number)) : fallback;
}

function normalizeRate(value) {
    return normalizeNumber(value, DEFAULT_RATE, MIN_RATE, MAX_RATE);
}

function normalizePitch(value) {
    return normalizeNumber(value, DEFAULT_PITCH, MIN_PITCH, MAX_PITCH);
}

function normalizeStyle(value) {
    const style = String(value || '').trim().toLowerCase();
    return /^[a-z][a-z0-9-]{0,31}$/.test(style) ? style : '';
}

function formatProsodyRatio(value) {
    const percentage = Math.round((value - 1) * 100);
    return `${percentage >= 0 ? '+' : ''}${percentage}%`;
}

function buildAzureSsml(text, voice, options = {}) {
    const rate = normalizeRate(options.rate);
    const pitch = normalizePitch(options.pitch);
    const style = normalizeStyle(options.style);
    const prosody = `<prosody rate="${formatProsodyRatio(rate)}" pitch="${formatProsodyRatio(pitch)}">${escapeXml(text)}</prosody>`;
    const speech = style ? `<mstts:express-as style="${escapeXml(style)}">${prosody}</mstts:express-as>` : prosody;
    return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="zh-CN"><voice name="${escapeXml(voice)}">${speech}</voice></speak>`;
}
function audioSources(text) {
    const encoded = encodeURIComponent(text);
    return [
        `https://fanyi.baidu.com/gettts?lan=zh&text=${encoded}&spd=5&source=web`,
        `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=zh-CN&q=${encoded}`,
        `https://dict.youdao.com/dictvoice?audio=${encoded}&le=zh`
    ];
}

async function requestAzureAudio(ssml) {
    const endpoint = `https://${AZURE_SPEECH_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`;
    return fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/ssml+xml',
            'Ocp-Apim-Subscription-Key': AZURE_SPEECH_KEY,
            'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3',
            'User-Agent': 'HSK-Learning-App'
        },
        body: ssml,
        signal: AbortSignal.timeout(20000)
    });
}

async function downloadAzureAudio(text, voice, options = {}) {
    let response = await requestAzureAudio(buildAzureSsml(text, voice, options));
    if (response.status === 400 && normalizeStyle(options.style)) {
        response = await requestAzureAudio(buildAzureSsml(text, voice, {...options, style: ''}));
    }
    if (!response.ok) throw new Error(`Azure HTTP ${response.status}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length < 512) throw new Error('Azure audio response is empty');
    return bytes;
}
async function fetchPublicAudio(source, controller) {
    const timer = setTimeout(() => controller.abort(), 9000);
    try {
        const response = await fetch(source, {
            headers: {
                Accept: 'audio/mpeg,audio/*;q=0.9,*/*;q=0.1',
                'User-Agent': 'Mozilla/5.0 HSK-Learning-App/1.0'
            },
            signal: controller.signal
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const bytes = Buffer.from(await response.arrayBuffer());
        if (bytes.length < 512) throw new Error('Audio response is empty');
        return bytes;
    } finally {
        clearTimeout(timer);
    }
}

async function downloadPublicAudio(text) {
    const controllers = audioSources(text).map(() => new AbortController());
    try {
        return await Promise.any(audioSources(text).map((source, index) => fetchPublicAudio(source, controllers[index])));
    } catch (error) {
        throw error?.errors?.find(Boolean) || error || new Error('No audio source is available');
    } finally {
        controllers.forEach(controller => controller.abort());
    }
}

async function downloadAudio(text, voice, options = {}) {
    if (AZURE_ENABLED) {
        try {
            return {bytes: await downloadAzureAudio(text, voice, options), engine: 'azure'};
        } catch (error) {
            console.warn('Azure TTS unavailable; using the compatible fallback source.');
        }
    }
    return {bytes: await downloadPublicAudio(text), engine: 'fallback'};
}
async function pruneCache(keepPath) {
    const entries = await fsp.readdir(CACHE_DIR, {withFileTypes: true});
    const files = [];
    for (const entry of entries) {
        if (!entry.isFile() || !entry.name.endsWith('.mp3')) continue;
        const filePath = path.join(CACHE_DIR, entry.name);
        const stat = await fsp.stat(filePath);
        files.push({filePath, size: stat.size, mtimeMs: stat.mtimeMs});
    }
    let totalBytes = files.reduce((sum, file) => sum + file.size, 0);
    let totalFiles = files.length;
    for (const file of files.filter(item => item.filePath !== keepPath).sort((a, b) => a.mtimeMs - b.mtimeMs)) {
        if (totalFiles <= MAX_CACHE_FILES && totalBytes <= MAX_CACHE_BYTES) break;
        try {
            await fsp.unlink(file.filePath);
            totalFiles--;
            totalBytes -= file.size;
        } catch {}
    }
}

function audioCachePath(text, voice, engine, options = {}) {
    const keyData = engine === 'azure'
        ? {text, engine, voice, rate: normalizeRate(options.rate), pitch: normalizePitch(options.pitch), style: normalizeStyle(options.style)}
        : {text, engine, voice: 'shared-fallback'};
    const key = crypto.createHash('sha256').update(JSON.stringify(keyData)).digest('hex');
    return path.join(CACHE_DIR, `${key}.mp3`);
}
async function validCachedPath(filePath) {
    try {
        const stat = await fsp.stat(filePath);
        return stat.size >= 512;
    } catch {
        return false;
    }
}

async function getAudioFile(text, voice, options = {}) {
    await fsp.mkdir(CACHE_DIR, {recursive: true});
    const preferredEngine = AZURE_ENABLED ? 'azure' : 'fallback';
    const preferredPath = audioCachePath(text, voice, preferredEngine, options);
    if (await validCachedPath(preferredPath)) return preferredPath;

    const requestKey = path.basename(preferredPath, '.mp3');
    if (!pending.has(requestKey)) {
        pending.set(requestKey, (async () => {
            const result = await downloadAudio(text, voice, options);
            const filePath = audioCachePath(text, voice, result.engine, options);
            if (!(await validCachedPath(filePath))) await fsp.writeFile(filePath, result.bytes);
            await pruneCache(filePath);
            return filePath;
        })().finally(() => pending.delete(requestKey)));
    }
    return pending.get(requestKey);
}
function safeStaticPath(pathname) {
    let relativePath;
    try {
        relativePath = decodeURIComponent(pathname === '/' ? '/index.html' : pathname).replace(/^[/\\]+/, '');
    } catch {
        return null;
    }
    if (!relativePath || relativePath.includes('\0') || relativePath.split(/[\\/]/).includes('..')) return null;
    if (relativePath.startsWith('.git/') || relativePath.startsWith('tools/')) return null;
    const filePath = path.resolve(PROJECT_ROOT, relativePath);
    if (filePath !== PROJECT_ROOT && !filePath.startsWith(PROJECT_ROOT + path.sep)) return null;
    return STATIC_MIME_TYPES[path.extname(filePath).toLowerCase()] ? filePath : null;
}

async function serveStatic(request, response, url) {
    if (!['GET', 'HEAD'].includes(request.method)) return false;
    const filePath = safeStaticPath(url.pathname);
    if (!filePath) return false;
    let stat;
    try {
        stat = await fsp.stat(filePath);
    } catch {
        return false;
    }
    if (!stat.isFile()) return false;

    const extension = path.extname(filePath).toLowerCase();
    const contentType = STATIC_MIME_TYPES[extension];
    const etag = `"${stat.size.toString(16)}-${Math.trunc(stat.mtimeMs).toString(16)}"`;
    const lastModified = stat.mtime.toUTCString();
    const versioned = url.searchParams.has('v');
    const cacheControl = extension === '.html'
        ? 'no-cache'
        : versioned
            ? 'public, max-age=31536000, immutable'
            : filePath.startsWith(path.join(PROJECT_ROOT, 'assets') + path.sep)
                ? 'public, max-age=86400'
                : 'no-cache';

    if (request.headers['if-none-match'] === etag
        || (!request.headers['if-none-match'] && request.headers['if-modified-since'] === lastModified)) {
        response.writeHead(304, {'Cache-Control': cacheControl, ETag: etag, 'Last-Modified': lastModified});
        response.end();
        return true;
    }

    const acceptsGzip = /(?:^|,)\s*gzip\s*(?:,|$)/i.test(String(request.headers['accept-encoding'] || ''));
    const compressible = stat.size > 1024 && /^(?:text\/|application\/(?:json|javascript))/.test(contentType);
    const useGzip = acceptsGzip && compressible;
    const headers = {
        'Cache-Control': cacheControl,
        'Content-Type': contentType,
        ETag: etag,
        'Last-Modified': lastModified,
        'X-Content-Type-Options': 'nosniff'
    };
    if (useGzip) {
        headers['Content-Encoding'] = 'gzip';
        headers.Vary = 'Accept-Encoding';
    } else {
        headers['Content-Length'] = stat.size;
    }

    response.writeHead(200, headers);
    if (request.method === 'HEAD') {
        response.end();
    } else if (useGzip) {
        fs.createReadStream(filePath)
            .pipe(zlib.createGzip({level: 5}))
            .pipe(response);
    } else {
        fs.createReadStream(filePath).pipe(response);
    }
    return true;
}

function sendRuntimeConfig(response) {
    const script = [
        "window.HSK_TTS_ENDPOINT = '/tts';",
        `window.HSK_TTS_SUPPORTS_VOICES = ${AZURE_ENABLED};`,
        `window.HSK_TTS_ENGINE = '${AZURE_ENABLED ? 'azure' : 'compatible'}';`
    ].join('\n');
    response.writeHead(200, {
        'Cache-Control': 'no-store',
        'Content-Length': Buffer.byteLength(script),
        'Content-Type': 'text/javascript; charset=utf-8'
    });
    response.end(script);
}
function streamAudioFile(request, response, filePath, voice, stat) {
    const commonHeaders = {
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Type': 'audio/mpeg',
        'X-HSK-Voice': voice
    };
    const range = String(request.headers.range || '');
    if (!range) {
        response.writeHead(200, {...commonHeaders, 'Content-Length': stat.size});
        fs.createReadStream(filePath).pipe(response);
        return;
    }

    const match = range.match(/^bytes=(\d*)-(\d*)$/);
    if (!match) {
        response.writeHead(416, {...commonHeaders, 'Content-Range': `bytes */${stat.size}`});
        response.end();
        return;
    }
    let start = match[1] ? Number(match[1]) : 0;
    let end = match[2] ? Number(match[2]) : stat.size - 1;
    if (!match[1] && match[2]) start = Math.max(0, stat.size - Number(match[2]));
    if (!Number.isFinite(start) || !Number.isFinite(end) || start < 0 || end < start || start >= stat.size) {
        response.writeHead(416, {...commonHeaders, 'Content-Range': `bytes */${stat.size}`});
        response.end();
        return;
    }
    end = Math.min(end, stat.size - 1);
    response.writeHead(206, {
        ...commonHeaders,
        'Content-Length': end - start + 1,
        'Content-Range': `bytes ${start}-${end}/${stat.size}`
    });
    fs.createReadStream(filePath, {start, end}).pipe(response);
}

const server = http.createServer(async (request, response) => {
    const origin = request.headers.origin || '';
    if (!isAllowedOrigin(origin, request.headers.host || '')) {
        sendJson(response, 403, {error: 'Origin not allowed'});
        return;
    }
    applyCors(request, response);
    if (request.method === 'OPTIONS') {
        response.writeHead(204);
        response.end();
        return;
    }

    const url = new URL(request.url, `http://${HOST}:${PORT}`);
    if (url.pathname === '/health') {
        sendJson(response, 200, {
            ok: true,
            mode: AZURE_ENABLED ? 'azure-multivoice' : 'compatible-fallback',
            servesApp: true
        });
        return;
    }
    if (url.pathname === '/tts-config.js' && request.method === 'GET') {
        sendRuntimeConfig(response);
        return;
    }
    if (url.pathname === '/tts' && request.method === 'GET') {
        if (!consumeRateLimit(request)) {
            response.setHeader('Retry-After', '60');
            sendJson(response, 429, {error: 'Too many requests'});
            return;
        }

        const text = (url.searchParams.get('text') || '').trim();
        const requestedVoice = (url.searchParams.get('voice') || '').trim();
        const requestedStyle = (url.searchParams.get('style') || '').trim();
        const rate = normalizeRate(url.searchParams.get('rate'));
        const pitch = normalizePitch(url.searchParams.get('pitch'));
        const style = normalizeStyle(requestedStyle);
        if (!text || text.length > 120 || !/[\p{Script=Han}]/u.test(text)) {
            sendJson(response, 400, {error: 'Invalid Chinese text'});
            return;
        }
        if (requestedVoice && !ALLOWED_VOICES.has(requestedVoice)) {
            sendJson(response, 400, {error: 'Unsupported voice'});
            return;
        }
        if (requestedStyle && !style) {
            sendJson(response, 400, {error: 'Unsupported voice style'});
            return;
        }

        const voice = normalizeVoice(requestedVoice);
        try {
            const filePath = await getAudioFile(text, voice, {rate, pitch, style});
            const stat = await fsp.stat(filePath);
            streamAudioFile(request, response, filePath, voice, stat);
        } catch (error) {
            sendJson(response, 502, {error: 'TTS source unavailable'});
        }
        return;
    }

    if (await serveStatic(request, response, url)) return;
    sendJson(response, 404, {error: 'Not found'});
});

function startServer() {
    return new Promise((resolve, reject) => {
        const onError = error => {
            server.off('listening', onListening);
            reject(error);
        };
        const onListening = () => {
            server.off('error', onError);
            console.log(`HSK learning app: http://${HOST}:${PORT}/`);
            console.log(`TTS mode: ${AZURE_ENABLED ? 'Azure multi-voice' : 'compatible fallback'}`);
            resolve(server);
        };
        server.once('error', onError);
        server.once('listening', onListening);
        server.listen(PORT, HOST);
    });
}

if (require.main === module) {
    startServer().catch(error => {
        console.error(error.message);
        process.exitCode = 1;
    });
}

module.exports = {
    server,
    startServer,
    normalizeVoice,
    normalizeRate,
    normalizePitch,
    normalizeStyle,
    buildAzureSsml,
    audioCachePath,
    safeStaticPath,
    getAudioFile
};
