// Learning tools backed by the same synchronized HSK vocabulary repository.
var practiceSentenceCache=new Map();
var listeningSession=[],listeningIndex=0,listeningAnswered=false,listeningScore=0;
var translationItem=null,translationDirection='zh-vi';
function isSafePracticeSentence(example) {
    if (!example?.zh || !example?.py || !example?.vi) return false;
    if (/[㐀-鿿]/.test(example.py) || /ý nghĩa của|AI thêm nghĩa|chưa có nghĩa/i.test(example.vi)) return false;
    if (example.sourceLabel === 'Ví dụ giao tiếp biên soạn') return false;
    return example.zh.length <= 90 && example.vi.length <= 180;
}
function getPracticeExamples(word) {
    const reviewed = typeof getNaturalVocabularyExamples === 'function' ? getNaturalVocabularyExamples(word) : [];
    if (reviewed.length) return reviewed;
    return (typeof getVocabularyExamples === 'function' ? getVocabularyExamples(word) : [])
        .filter(isSafePracticeSentence);
}
function getPracticeSentencePool(level = currentLevel) {
    if (practiceSentenceCache.has(level)) return practiceSentenceCache.get(level);
    const pool = [];
    const seen = new Set();
    getAllWords(level).forEach(word => getPracticeExamples(word).forEach((example, index) => {
        const key = `${example.zh}|${example.vi}`;
        if (seen.has(key)) return;
        seen.add(key);
        pool.push({word, level, index, ...example});
    }));
    practiceSentenceCache.set(level, pool);
    return pool;
}

function renderModuleLevelButtons(targetId, moduleName) {
    const target = document.getElementById(targetId); if (!target) return;
    target.innerHTML = HSK_LEVELS.map(level => `<button class="ctrl-btn ${currentLevel===level?'active':''}" aria-pressed="${currentLevel===level}" onclick="setModuleLevel(${level},'${moduleName}')">${levelLabel(level)}</button>`).join('');
}

async function setModuleLevel(level, moduleName) {
    currentLevel = level;
    try { await ensureLevelData(level); }
    catch { showToast('⚠️ Không tải được dữ liệu HSK nâng cao.'); return; }
    if (moduleName === 'listening') { listeningSession=[]; startListeningSession(); }
    else if (moduleName === 'translation') { translationItem=null; nextTranslation(); }
}

function pickOptions(pool, correct, field='vi') {
    const values = [...new Set(pool.map(item => item[field]).filter(value => value && value !== correct[field]))];
    return shuffle([correct[field], ...shuffle(values).slice(0, 3)]);
}

function startBeginner() { currentLevel=1; showPage('roadmap'); }

function toggleAppSidebar(force) {
    const sidebar=document.getElementById('appSidebar'); if(!sidebar)return;
    const open=typeof force==='boolean'?force:!sidebar.classList.contains('open');
    sidebar.classList.toggle('open',open); document.getElementById('sidebarBackdrop')?.classList.toggle('show',open);
    document.querySelector('.sidebar-toggle')?.setAttribute('aria-expanded',String(open));
    document.body.classList.toggle('sidebar-open',open && window.innerWidth<=980);
}

function wordIsLearned(word) {
    if (typeof isWordLearned==='function') return isWordLearned(word);
    if (typeof getWordProgressKey==='function') return !!learned[getWordProgressKey(word)];
    return !!learned[word.hanzi];
}

async function setDashboardLevel(level) { currentLevel=level; try { await ensureLevelData(level); renderLearningDashboard(); } catch { showToast('⚠️ Không tải được dữ liệu HSK nâng cao.'); } }

function getLevelCompletedLessons(level) {
    const progress=readStoredObject('hsk_lesson_progress');
    return Object.keys(progress).filter(key=>progress[key]&&key.startsWith(level+'-')).length;
}

function renderLearningDashboard() {
    const root=document.getElementById('learningDashboard'); if(!root)return;
    const words=getAllWords(currentLevel),done=words.filter(wordIsLearned).length,remaining=Math.max(0,words.length-done);
    root.innerHTML=`<section class="dashboard-overview"><div><span class="dashboard-kicker">TIẾP TỤC HỌC</span><h2>Hôm nay bạn muốn luyện gì?</h2><p>Kho ${levelLabel(currentLevel)} có ${words.length.toLocaleString('vi-VN')} mục · ${getPracticeSentencePool(currentLevel).length.toLocaleString('vi-VN')} câu nghe và dịch đã kiểm tra.</p></div><div class="dashboard-levels">${HSK_LEVELS.map(level=>`<button class="${currentLevel===level?'active':''}" aria-pressed="${currentLevel===level}" onclick="setDashboardLevel(${level})">${levelLabel(level)}</button>`).join('')}</div></section><div class="dashboard-metrics"><article><span>📚</span><strong>${done.toLocaleString('vi-VN')}</strong><small>Mục đã đánh dấu</small></article><article><span>📘</span><strong>${getLevelCompletedLessons(currentLevel)}</strong><small>Bài đã hoàn thành</small></article><article><span>🧩</span><strong>${remaining.toLocaleString('vi-VN')}</strong><small>Mục chưa đánh dấu</small></article><article><span>🎯</span><strong>${words.length?Math.round(done/words.length*100):0}%</strong><small>Tiến độ cấp hiện tại</small></article></div><div class="dashboard-actions"><button onclick="showPage('flashcard')"><span>🃏</span><b>Ôn từ vựng</b><small>Flashcard đồng bộ</small></button><button onclick="showPage('listening')"><span>🎧</span><b>Luyện nghe</b><small>Nghe và chọn nghĩa</small></button><button onclick="showPage('translation')"><span>译</span><b>Luyện dịch</b><small>Trung ↔ Việt</small></button></div>`;
}

function renderListeningPage(){if(!ensureCurrentLevelData('listeningArea',renderListeningPage)||!ensurePracticeDataReady('listeningArea',renderListeningPage))return;renderModuleLevelButtons('listeningLevelBtns','listening');if(!listeningSession.length||listeningSession[0]?.level!==currentLevel)startListeningSession();else renderListeningQuestion();}

function startListeningSession(){const pool=getPracticeSentencePool(currentLevel);listeningSession=shuffle(pool).slice(0,Math.min(10,pool.length));listeningIndex=0;listeningAnswered=false;listeningScore=0;renderListeningQuestion();renderModuleLevelButtons('listeningLevelBtns','listening');}

function renderListeningQuestion(){const root=document.getElementById('listeningArea');if(!root)return;if(!listeningSession.length){root.innerHTML='<div class="module-result"><span>📭</span><h3>Chưa có câu nghe hợp lệ ở cấp này</h3></div>';return;}if(listeningIndex>=listeningSession.length){root.innerHTML=`<div class="module-result"><span>🎉</span><h3>Đúng ${listeningScore}/${listeningSession.length} câu</h3><button class="hero-btn" onclick="startListeningSession()">Luyện bộ mới</button></div>`;return;}const item=listeningSession[listeningIndex],options=pickOptions(getPracticeSentencePool(currentLevel),item);root.innerHTML=`<div class="module-card"><div class="module-progress">Câu ${listeningIndex+1}/${listeningSession.length}</div><button class="listen-orb" onclick="speak(decodeURIComponent('${encodeURIComponent(item.zh)}'))" aria-label="Nghe câu tiếng Trung">🔊<span>Nghe câu</span></button><p class="module-hint">Nghe và chọn bản dịch đúng</p><div class="module-options">${options.map(option=>`<button onclick="answerListening('${encodeURIComponent(option)}')">${escapeHtml(option)}</button>`).join('')}</div><div id="listeningFeedback" aria-live="polite"></div></div>`;}

function answerListening(encoded){if(listeningAnswered)return;listeningAnswered=true;const answer=decodeURIComponent(encoded),item=listeningSession[listeningIndex],ok=answer===item.vi;if(ok)listeningScore++;document.getElementById('listeningFeedback').innerHTML=`<div class="module-feedback ${ok?'correct':'wrong'}"><strong>${ok?'Chính xác':'Chưa đúng'}</strong><div class="zh" lang="zh-Hans">${item.zh}</div><div class="py">${item.py}</div><div>${item.vi}</div><button onclick="listeningIndex++;listeningAnswered=false;renderListeningQuestion()">Câu tiếp theo →</button></div>`;}

function renderTranslationPage(){if(!ensureCurrentLevelData('translationArea',renderTranslationPage)||!ensurePracticeDataReady('translationArea',renderTranslationPage))return;renderModuleLevelButtons('translationLevelBtns','translation');if(!translationItem||translationItem.level!==currentLevel)nextTranslation();else drawTranslation();}

function nextTranslation(){translationItem=shuffle(getPracticeSentencePool(currentLevel))[0]||null;translationDirection=Math.random()>.5?'zh-vi':'vi-zh';drawTranslation();renderModuleLevelButtons('translationLevelBtns','translation');}

function drawTranslation(){const root=document.getElementById('translationArea');if(!root)return;if(!translationItem){root.innerHTML='<div class="module-result"><span>📭</span><h3>Chưa có câu dịch hợp lệ</h3></div>';return;}const source=translationDirection==='zh-vi'?translationItem.zh:translationItem.vi;root.innerHTML=`<div class="module-card translation-card"><span class="module-badge">${translationDirection==='zh-vi'?'TRUNG → VIỆT':'VIỆT → TRUNG'}</span><div class="translation-source" ${translationDirection==='zh-vi'?'lang="zh-Hans"':''} >${escapeHtml(source)}</div>${translationDirection==='zh-vi'?`<div class="translation-py">${translationItem.py}</div>`:''}<label class="sr-only" for="translationInput">Bản dịch của bạn</label><textarea id="translationInput" placeholder="Nhập bản dịch của bạn..."></textarea><div class="module-actions"><button onclick="revealTranslation()">Đối chiếu đáp án</button><button onclick="nextTranslation()">Câu khác →</button></div><div id="translationAnswer" aria-live="polite"></div></div>`;}

function revealTranslation(){const expected=translationDirection==='zh-vi'?translationItem.vi:translationItem.zh;document.getElementById('translationAnswer').innerHTML=`<div class="module-feedback correct"><strong>Đáp án tham khảo</strong><p>${escapeHtml(expected)}</p><small>Đối chiếu ý nghĩa và trật tự từ; không bắt buộc giống hoàn toàn từng chữ.</small></div>`;}

function initLearningFeatures(){
    renderLearningDashboard();
    const toggle=document.querySelector('.sidebar-toggle');
    toggle?.setAttribute('aria-controls','appSidebar');toggle?.setAttribute('aria-expanded','false');
    document.querySelectorAll('.side-link').forEach(button=>button.addEventListener('click',()=>toggleAppSidebar(false)));
    document.addEventListener('keydown',event=>{if(event.key==='Escape')toggleAppSidebar(false);});
    const routedPage=window.location.hash.replace(/^#\/?/,'').split('?')[0];
    if(routedPage&&document.getElementById('page-'+routedPage))showPage(routedPage);
    else if(routedPage)showPage('home');
}

initLearningFeatures();
