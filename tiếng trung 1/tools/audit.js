const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const scriptFiles=['app.js',...(fs.existsSync('features.js')?['features.js']:[])];
const js=scriptFiles.map(file=>fs.readFileSync(file,'utf8')).join('\n');
const idList=[...html.matchAll(/id="([^"]+)"/g)].map(m=>m[1]);
const ids=new Set(idList);
const dynamicMarkupIds=new Set([...js.matchAll(/id=[\"']([^\"'$<{]+)[\"']/g)].map(m=>m[1]));
const refs=[...js.matchAll(/getElementById\(['"]([^'"]+)['"]\)/g)].map(m=>m[1]);
const dynamic=new Set(['prog1','prog2','prog3','prog4','prog5','prog6','prog7']);
const calls=[...html.matchAll(/onclick="([A-Za-z_$][\w$]*)\(/g)].map(m=>m[1]);
const defs=new Set([...js.matchAll(/function\s+([A-Za-z_$][\w$]*)\s*\(/g)].map(m=>m[1]));
console.log({htmlIds:ids.size,jsIdRefs:new Set(refs).size,missingStaticIds:[...new Set(refs.filter(x=>!ids.has(x)&&!dynamic.has(x)&&!dynamicMarkupIds.has(x)))],missingInlineFunctions:[...new Set(calls.filter(x=>!defs.has(x)))],duplicateIds:idList.filter((x,i,a)=>a.indexOf(x)!==i)});

global.window={};
require('../assets/hsk30-2025.js');
require('../assets/hsk30-advanced.js');
require('../assets/hsk30-core-examples.js');
const data=[...(window.HSK30_2025_DATA||[]),...(window.HSK30_ADVANCED_DATA||[])];
const hasHanzi=value=>/\p{Script=Han}/u.test(String(value||''));
const isPlaceholder=value=>/^\s*(?:ý nghĩa của(?: từ)?|AI thêm nghĩa|Chưa có nghĩa|Nhấn để AI)|Hán Điển/i.test(String(value||''));
const counts=Object.fromEntries([1,2,3,4,5,6,7].map(level=>[level,data.filter(item=>item.level===level).length]));
const entryIds=data.map(item=>'hsk3-2025:'+item.level+':'+item.number);
const coreExampleMap=new Map((window.HSK30_CORE_EXAMPLES||[]).map(item=>[item.level+'|'+item.hanzi,item.examples||[]]));
const examplesForEntry=item=>item.level<=5?(coreExampleMap.get(item.level+'|'+item.hanzi)||[]):(Array.isArray(item.examples)?item.examples:[]);
const examples=data.flatMap(examplesForEntry);
console.log({
    total:data.length,
    counts,
    blankHanzi:data.filter(item=>!item.hanzi).length,
    blankPinyin:data.filter(item=>!item.pinyin).length,
    blankMeaning:data.filter(item=>!item.meaning).length,
    pinyinContainsHanzi:data.filter(item=>hasHanzi(item.pinyin)).length,
    meaningPlaceholder:data.filter(item=>isPlaceholder(item.meaning)).length,
    duplicateEntryIds:entryIds.length-new Set(entryIds).size,
    examples:examples.length,
    examplePinyinContainsHanzi:examples.filter(item=>hasHanzi(item.py)).length,
    exampleMeaningPlaceholder:examples.filter(item=>isPlaceholder(item.vi)).length,
    templateExamples:examples.filter(item=>item.sourceLabel==='Ví dụ giao tiếp biên soạn'&&/[“”]/.test(item.zh||'')).length,
    entriesWithNaturalExamples:data.filter(item=>examplesForEntry(item).some(example=>!(example.sourceLabel==='Ví dụ giao tiếp biên soạn'&&/[“”]/.test(example.zh||'')))).length
});
