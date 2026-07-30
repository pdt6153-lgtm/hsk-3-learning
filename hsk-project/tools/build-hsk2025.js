const fs = require('fs');
global.window = {};
require('../assets/hsk30-full.js');
const old = window.HSK30_FULL_DATA;
const official = require('../assets/hsk30-2025-source.json');
const lexicon = require('../assets/complete-hsk-source.json');
const normalize = s => (s || '').replace(/[（(][^）)]*[）)]/g, '').split(/[｜|]/)[0].replace(/\s/g, '');
const oldMap = new Map();
for (const item of old) if (!oldMap.has(normalize(item.hanzi))) oldMap.set(normalize(item.hanzi), item);
const lexMap = new Map(lexicon.map(item => [normalize(item.s), item]));
const rows = [];
for (let level = 1; level <= 5; level++) {
  official['hsk' + level].forEach((hanzi, index) => {
    const prior = oldMap.get(normalize(hanzi));
    const lex = lexMap.get(normalize(hanzi));
    const form = lex?.f?.[0];
    rows.push({ level, number:index + 1, hanzi, pinyin: prior?.pinyin || form?.i?.y || '', meaning: prior?.meaning || '', pos: lex?.p?.[0] || '', english: form?.m?.slice(0,3).join('; ') || '', source: prior ? 'verified-existing' : 'translated-lexicon' });
  });
}
const missing = rows.filter(row => !row.meaning);
async function translate(text, sourceLanguage = 'en') {
  if (!text) return 'Chưa có nghĩa đối chiếu';
  const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' + sourceLanguage + '&tl=vi&dt=t&q=' + encodeURIComponent(text);
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(String(response.status));
      const json = await response.json();
      return json[0].map(part => part[0]).join('').replace(/\s+/g, ' ').trim();
    } catch (error) { if (attempt === 2) return 'Chưa có nghĩa đối chiếu'; await new Promise(r => setTimeout(r, 500 * (attempt + 1))); }
  }
}
(async () => {
  for (let i = 0; i < missing.length; i += 12) {
    const batch = missing.slice(i, i + 12);
    const meanings = await Promise.all(batch.map(row => translate(row.english || row.hanzi, row.english ? 'en' : 'zh-CN')));
    batch.forEach((row, idx) => row.meaning = meanings[idx]);
    process.stdout.write(`\rTranslated ${Math.min(i + 12, missing.length)}/${missing.length}`);
  }
  const missingPinyin = rows.filter(row => !row.pinyin);
  async function romanize(text) {
    const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-CN&tl=vi&dt=t&dt=rm&q=' + encodeURIComponent(text);
    try { const response = await fetch(url); const json = await response.json(); return (json?.[0]?.find(part => part?.[3])?.[3] || '').toLocaleLowerCase('vi'); } catch { return ''; }
  }
  for (let i = 0; i < missingPinyin.length; i += 12) {
    const batch = missingPinyin.slice(i, i + 12); const values = await Promise.all(batch.map(row => romanize(row.hanzi)));
    batch.forEach((row, idx) => row.pinyin = values[idx]);
  }
  const cleaned = rows.map(({english, ...row}) => row);
  fs.writeFileSync('assets/hsk30-2025.js', 'window.HSK30_2025_DATA = ' + JSON.stringify(cleaned) + ';', 'utf8');
  const report = {generatedAt:new Date().toISOString(), total:cleaned.length, counts:Object.fromEntries([1,2,3,4,5].map(level => [level, cleaned.filter(x=>x.level===level).length])), translated:cleaned.filter(x=>x.source==='translated-lexicon').length, unresolved:cleaned.filter(x=>x.meaning==='Chưa có nghĩa đối chiếu').length, blankPinyin:cleaned.filter(x=>!x.pinyin).length};
  fs.writeFileSync('assets/hsk30-2025-report.json', JSON.stringify(report,null,2), 'utf8');
  console.log('\n' + JSON.stringify(report));
})();