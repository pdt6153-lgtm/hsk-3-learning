const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const dictionaryPath = process.argv[2] || 'C:\\tmp\\CVDICT.u8';
const shouldWrite = process.argv.includes('--write');
const reportPath = path.join(root, 'assets', 'hsk30-meaning-report.json');

function loadBrowserArray(relativePath, globalName) {
    const context = {window: {}};
    vm.createContext(context);
    vm.runInContext(fs.readFileSync(path.join(root, relativePath), 'utf8'), context);
    if (!Array.isArray(context.window[globalName])) throw new Error(`Không đọc được ${globalName}`);
    return context.window[globalName];
}

function normalizeWord(value) {
    return String(value || '')
        .replace(/[（(][^）)]*[）)]/g, '')
        .split(/[｜|/]/)[0]
        .replace(/\s+/g, '')
        .trim();
}

function normalizePinyin(value) {
    const toneMarks = {'\\u0304':'1','\\u0301':'2','\\u030c':'3','\\u0300':'4'};
    let output = '';
    for (const char of String(value || '').toLocaleLowerCase('vi').replace(/u:/g, 'v').normalize('NFD')) {
        if (/[a-z]/.test(char)) output += char;
        else if (char === '\\u0308' && output.endsWith('u')) output = output.slice(0, -1) + 'v';
        else if (toneMarks[char]) output += toneMarks[char];
        else if (/[1-4]/.test(char)) output += char;
    }
    return output;
}

function numberedPinyinToMarks(value) {
    const marks = {
        a:['ā','á','ǎ','à'], e:['ē','é','ě','è'], i:['ī','í','ǐ','ì'],
        o:['ō','ó','ǒ','ò'], u:['ū','ú','ǔ','ù'], v:['ǖ','ǘ','ǚ','ǜ'], ü:['ǖ','ǘ','ǚ','ǜ']
    };
    return String(value || '').replace(/([A-Za-züÜvV:]+)([1-5])/g, (_, raw, toneText) => {
        const tone = Number(toneText);
        let syllable = raw.toLocaleLowerCase('vi').replace(/u:|v/g, 'ü');
        if (tone === 5) return syllable;
        const plain = syllable.replace('ü', 'v');
        let index = plain.indexOf('a');
        if (index < 0) index = plain.indexOf('e');
        if (index < 0 && plain.includes('ou')) index = plain.indexOf('o');
        if (index < 0) {
            for (let i = plain.length - 1; i >= 0; i--) {
                if ('aeiouv'.includes(plain[i])) { index = i; break; }
            }
        }
        if (index < 0) return syllable;
        const vowel = syllable[index];
        return syllable.slice(0, index) + (marks[vowel]?.[tone - 1] || vowel) + syllable.slice(index + 1);
    }).replace(/\s+/g, ' ').trim();
}

function parseDictionary(filePath) {
    const map = new Map();
    const content = fs.readFileSync(filePath, 'utf8');
    for (const line of content.split(/\r?\n/)) {
        if (!line || line.startsWith('#') || line.startsWith('%')) continue;
        const match = line.match(/^(\S+)\s+(\S+)\s+\[([^\]]+)\]\s+\/(.+)\/$/);
        if (!match) continue;
        const [, traditional, simplified, pinyin, body] = match;
        const entry = {
            traditional,
            simplified,
            pinyin,
            pinyinKey: normalizePinyin(pinyin),
            senses: body.split('/').map(value => value.trim()).filter(Boolean)
        };
        for (const key of new Set([traditional, simplified])) {
            if (!map.has(key)) map.set(key, []);
            map.get(key).push(entry);
        }
    }
    return map;
}

function cleanSense(value) {
    return String(value || '')
        .replace(/(?:LT|Lượng từ):\s*[^;]+/gi, '')
        .replace(/[\u3400-\u9fff|]+(?:\[[^\]]+\])?/gu, '')
        .replace(/\[[A-Za-züÜvV:0-9\s]+\]/g, '')
        .replace(/\b(?:abbr\.|classifier)\s*(?:cho|của|:)?\s*/gi, 'viết tắt của ')
        .replace(/\s+/g, ' ')
        .replace(/\s+([,.;:])/g, '$1')
        .replace(/\(viết tắt [^)]+\)$/i, '')
        .replace(/^[;,\s]+|[;,\s.]+$/g, '')
        .replace(/;\s*;/g, ';')
        .trim();
}

function isCrossReference(value) {
    return /^(xem|xem thêm|cũng viết là|còn viết là|biến thể của|biến thể cũ của|dạng viết cũ của|dạng cổ của|giản thể của|phồn thể của|viết tắt của|tên cũ của)\b/i.test(value);
}

function isLowValueSense(value, hasOtherSenses) {
    if (!value) return true;
    if (/^(CL|classifier):/i.test(value)) return true;
    if (/^used in |^see also /i.test(value)) return true;
    if (hasOtherSenses && isCrossReference(value)) return true;
    if (/^(họ|một họ của người Trung Quốc)\b/i.test(value) && hasOtherSenses) return true;
    return false;
}

function dedupeSenses(senses) {
    const kept = [];
    const normalized = [];
    for (const raw of senses) {
        const value = cleanSense(raw);
        if (!value) continue;
        const key = value.toLocaleLowerCase('vi').replace(/[()[\]“”"'’]/g, '').trim();
        if (normalized.some(existing => existing === key || (key.length > 12 && existing.includes(key)))) continue;
        kept.push(value);
        normalized.push(key);
    }
    return kept;
}

const MANUAL_OVERRIDES = {
    '的': 'của; trợ từ nối định ngữ với danh từ; dùng để danh từ hóa',
    '地': 'đất, mặt đất; trợ từ nối trạng ngữ với động từ',
    '得': 'được; đạt được; trợ từ bổ ngữ chỉ mức độ hoặc kết quả',
    '了': 'rồi; trợ từ chỉ hành động hoàn thành hoặc tình trạng thay đổi',
    '着': 'đang; trợ từ chỉ trạng thái hoặc hành động tiếp diễn; chạm, tiếp xúc',
    '过': 'đi qua; vượt qua; trợ từ chỉ kinh nghiệm đã từng có',
    '把': 'cầm, nắm; giới từ đưa tân ngữ lên trước động từ; lượng từ cho vật có cán',
    '被': 'bị, được; giới từ dùng trong câu bị động; chăn, mền',
    '给': 'cho, đưa; cung cấp; giới từ chỉ đối tượng hoặc dùng trong câu bị động',
    '才': 'mới; mãi mới; chỉ, chỉ có; tài năng',
    '就': 'liền, ngay; thì; chỉ; đến gần, theo',
    '还': 'vẫn, còn; lại; cũng; khá; trả lại, hoàn trả',
    '都': 'đều; tất cả; đã (nhấn mạnh mức độ hoặc thời gian)',
    '又': 'lại, lại còn; vừa… vừa…',
    '再': 'lại, thêm lần nữa; rồi mới; hơn nữa',
    '却': 'nhưng, vậy mà, trái lại',
    '只': 'chỉ, chỉ có; một mình; lượng từ cho một số con vật hoặc đồ vật',
    '所': 'nơi, chỗ; lượng từ cho cơ quan, trường học, bệnh viện; trợ từ trong cấu trúc “所 + động từ”',
    '于': 'ở, tại, vào; đối với; từ; hơn; do, bởi',
    '而': 'mà, và; nhưng; rồi; dùng để nối hai thành phần',
    '以': 'dùng, lấy; bằng, theo; để; vì',
    '其': 'của nó, của họ; người/vật ấy; đó',
    '之': 'của; nó, người/vật ấy; đi, đến (văn viết)',
    '为': 'làm, trở thành; là; vì, vì mục đích; bị (văn viết)',
    '与': 'và, với; cùng; cho; tham gia',
    '并': 'và, đồng thời; gộp lại; hoàn toàn (dùng với phủ định)',
    '将': 'sẽ; đem, lấy; dẫn dắt; tướng',
    '由': 'do, bởi; từ; theo; để cho',
    '则': 'thì, liền; còn, nhưng; quy tắc, chuẩn mực',
    '可': 'có thể; được phép; đáng; nhưng, quả thật',
    '会': 'biết, có khả năng; sẽ; có thể; gặp, họp; hội',
    '要': 'muốn; cần, phải; sắp; nếu',
    '让': 'để, cho phép; khiến; nhường',
    '使': 'làm cho, khiến; sử dụng; sai khiến; sứ giả',
    '叫': 'gọi, kêu; tên là; bảo, khiến; tiếng kêu',
    '当': 'làm, đảm nhiệm; coi là; khi, lúc; nên; ngay trước/đối diện',
    '中': 'giữa, trong; trung tâm; đang trong quá trình; trúng, đạt',
    '上': 'trên; lên; đi/đến; bắt đầu; đang trong; trước, vừa qua',
    '下': 'dưới; xuống; rời khỏi; kết thúc; tiếp theo; lượng từ cho động tác',
    '起来': 'đứng dậy; bắt đầu; hướng lên; xét theo, có vẻ',
    '出来': 'đi/ra ngoài; xuất hiện; nhận ra, thể hiện ra',
    '下去': 'đi xuống; tiếp tục; kéo dài về sau',
    '一点儿': 'một chút, một ít',
    '有点儿': 'hơi, có chút (thường nói điều không như ý)',
    '还是': 'hay là (câu hỏi lựa chọn); vẫn, vẫn nên',
    '或者': 'hoặc, hoặc là',
    '关于': 'về, liên quan đến',
    '对于': 'đối với',
    '按照': 'theo, căn cứ theo',
    '通过': 'đi qua; thông qua; vượt qua/đạt (kỳ thi, kiểm tra); bằng cách',
    '作为': 'với tư cách là; coi là, dùng làm; hành vi, việc làm',
    '发生': 'xảy ra, phát sinh',
    '进行': 'tiến hành; đang diễn ra',
    '成为': 'trở thành',
    '认为': 'cho rằng, nhận định',
    '表示': 'biểu thị, thể hiện; bày tỏ; cho biết',
    '情况': 'tình hình, hoàn cảnh, trường hợp',
    '问题': 'vấn đề; câu hỏi; sự cố',
    '方面': 'phương diện, mặt; phía, bên',
    '关系': 'quan hệ, mối liên hệ; liên quan; ảnh hưởng',
    '意思': 'ý nghĩa; ý định, ý muốn; sự thú vị',
    '地方': 'nơi, chỗ; địa phương; phương diện',
    '东西': 'đồ vật, thứ; vật phẩm',
    '时候': 'thời gian, lúc, khi',
    '事情': 'sự việc, chuyện',
    '一定': 'nhất định, chắc chắn; một mức độ nhất định',
    '一般': 'thông thường, nói chung; bình thường; giống nhau',
    '左右': 'trái và phải; khoảng, xấp xỉ; chi phối, tác động',
    '前后': 'trước và sau; khoảng (thời gian); đầu đuôi',
    '本来': 'vốn dĩ, ban đầu; lẽ ra',
    '原来': 'ban đầu, trước đây; hóa ra; vốn là',
    '不过': 'nhưng, có điều; chỉ, chẳng qua; không hơn',
    '不但': 'không những, không chỉ',
    '甚至': 'thậm chí',
    '因此': 'vì thế, do đó',
    '于是': 'thế là, do đó, rồi thì',
    '否则': 'nếu không thì',
    '虽然': 'tuy, mặc dù',
    '然而': 'tuy nhiên, thế nhưng',
    '而且': 'hơn nữa, mà còn',
    '另外': 'ngoài ra; khác, thêm',
    '其中': 'trong đó',
    '其他': 'khác, những… khác',
    '各': 'mỗi, từng; các',
    '某': 'nào đó, một… nào đó; họ Mỗ',
    '该': 'nên, cần phải; này/đó (chỉ người hoặc đơn vị đã nói tới)',
    '等': 'đợi, chờ; bằng nhau; vân vân; hạng, cấp',
    '次': 'lần; thứ tự; kém hơn; lượng từ cho số lần',
    '种': 'loại, giống; hạt giống; trồng, gieo',
    '名': 'tên; nổi tiếng; lượng từ cho người',
    '家': 'nhà, gia đình; chuyên gia; lượng từ cho cơ sở, doanh nghiệp',
    '位': 'vị trí; vị, ngài; lượng từ lịch sự cho người',
    '件': 'món, việc; lượng từ cho quần áo, sự việc, hành lý',
    '份': 'phần, suất; bản; lượng từ cho tài liệu, công việc, quà',
    '条': 'dải, thanh; điều khoản; lượng từ cho vật dài, tin tức, đường, cá',
    '张': 'mở, căng; họ Trương; lượng từ cho vật phẳng, bàn, giường',
    '本': 'gốc, vốn; quyển/cuốn; lượng từ cho sách; bản thân',
    '场': 'sân, nơi diễn ra; trận, buổi; lượng từ cho sự kiện',
    '遍': 'khắp; một lượt từ đầu đến cuối',
    '趟': 'chuyến, lượt đi',
    '顿': 'bữa; trận/lần; ngừng; lượng từ cho bữa ăn hoặc sự trách mắng',
    '和': 'và, với; cùng; hòa, hòa hợp; tổng',
    '个': 'cái, chiếc, người…; lượng từ thông dụng; cá nhân, riêng lẻ',
    '也': 'cũng; cả… lẫn…; trợ từ cuối câu trong văn viết',
    '吗': 'à, ư, phải không (trợ từ nghi vấn)',
    '行': 'được, ổn; có thể; đi; làm, thực hiện; hành vi',
    '打': 'đánh, đập; gọi điện thoại; chơi; mở, dựng; lấy, múc; từ, kể từ',
    '来': 'đến, tới; lại đây; từ; khoảng; dùng để chỉ mục đích hoặc hướng về phía người nói',
    '好玩儿': 'vui, thú vị, hay ho',
    '聊天儿': 'trò chuyện, tán gẫu',
    '嘛': 'trợ từ biểu thị điều hiển nhiên hoặc dùng để ngắt, nhấn mạnh giọng điệu',
    '粥': 'cháo, cháo loãng',
    '夸': 'khen ngợi; khoe khoang, khoác lác; phóng đại',
    '哈': 'ha! (thán từ); tiếng cười; thở hơi; cúi mình, khom lưng',
    '藏': 'giấu, che giấu; cất giữ, lưu trữ; chứa đựng',
    '斗': 'đấu, đánh nhau; đấu tranh; thi đấu, so tài',
    '恶': 'xấu, ác; dữ tợn; làm điều ác; ghét, căm ghét',
    '虾': 'tôm',
    '动不动': 'hơi một tí là…, cứ… là…; thường xuyên, dễ dàng',
    '立功': 'lập công, lập thành tích; có đóng góp xứng đáng',
    '和平': 'hòa bình; hòa thuận, ôn hòa',
    '雷': 'sấm sét; mìn; gây sốc hoặc kinh ngạc (khẩu ngữ); tiết lộ nội dung phim',
    '人家': 'người ta; người khác; nhà người khác; bản thân người nói (cách nói thân mật)',
    '落': 'rơi, rụng; hạ xuống; tụt lại; ở lại; thuộc về; nơi ở, làng xóm',
    '结果': 'kết quả, kết cục; kết trái; cuối cùng, rốt cuộc',
    '作用': 'tác dụng, chức năng; ảnh hưởng, hiệu quả; tác động lên',
    '左右': 'bên trái và bên phải; khoảng, xấp xỉ; chi phối, tác động',
    '得了': 'được rồi, thôi; xong, hoàn thành; mắc phải',
    '为止': 'cho đến, tính đến; đến… thì dừng',
    '之所以': 'sở dĩ, lý do mà…',
    '与其': 'thay vì… (thường dùng trong cấu trúc “与其…不如…”)',
    '即可': 'là có thể, là được; chỉ cần… là đủ',
    '非得': 'nhất định phải, buộc phải',
    '致辞': 'phát biểu, đọc lời chào/lời cảm ơn; bài phát biểu',
    '逊色': 'kém hơn, thua kém',
    '喜怒哀乐': 'vui, giận, buồn, mừng; mọi cung bậc cảm xúc',
    '无可奈何': 'không biết làm sao, đành chịu; không còn cách nào khác',
    '大厦': 'tòa nhà lớn, cao ốc',
    '师父': 'sư phụ; thầy dạy nghề hoặc người có tay nghề cao',
    '理科': 'khối/khoa khoa học tự nhiên',
    '科普': 'phổ biến kiến thức khoa học; khoa học phổ thông',
    '科幻': 'khoa học viễn tưởng',
    '酒精': 'cồn, rượu etylic; ethanol',
    '评委': 'giám khảo; thành viên hội đồng đánh giá',
    '入手': 'bắt đầu từ; có được, mua được; bắt tay vào',
    '浓缩': 'cô đặc; cô đọng, thu gọn; chất cô đặc',
    '卫视': 'truyền hình vệ tinh; đài truyền hình vệ tinh',
    '霸道': 'ngang ngược, độc đoán; bá đạo; con đường cai trị bằng quyền lực',
    '汇集': 'tập hợp, hội tụ; thu thập',
    '状元': 'trạng nguyên; người đứng đầu, người đạt thành tích cao nhất',
    '先天': 'bẩm sinh, tiên thiên; có sẵn từ khi sinh ra',
    '沧桑': 'thăng trầm, biến đổi lớn của cuộc đời hoặc thời thế',
    '荡漾': 'gợn sóng, lay động; lan tỏa, dâng lên',
    '健美': 'khỏe đẹp, cân đối; thể hình',
    '立方': 'lập phương; khối lập phương',
    '泰斗': 'bậc thầy, nhân vật có uy tín lớn trong một lĩnh vực',
    '开天辟地': 'khai thiên lập địa; mở ra thời đại hoặc sự nghiệp chưa từng có',
    '简体字': 'chữ Hán giản thể',
    '挂钩': 'móc vào; liên kết, gắn với; móc, chốt nối',
    '面条儿': 'mì sợi, mì; cách nói có âm uốn lưỡi của 面条',
    '女孩儿': 'bé gái, cô gái',
    '小孩儿': 'trẻ em, đứa trẻ',
    '男孩儿': 'bé trai, cậu bé',
    '小偷儿': 'kẻ trộm, tên trộm',
    '打盹儿': 'chợp mắt, ngủ gật',
    '体检': 'khám sức khỏe, kiểm tra sức khỏe'
};

const MANUAL_PINYIN = {
    '与':'yǔ', '趟':'tàng', '嘛':'ma', '粥':'zhōu', '夸':'kuā', '哈':'hā',
    '藏':'cáng', '打':'dǎ', '行':'xíng', '斗':'dòu', '恶':'è', '虾':'xiā',
    '尺':'chǐ', '着':'zhe', '得':'de', '地':'de', '为':'wéi', '还':'hái',
    '当':'dāng', '将':'jiāng', '数':'shù', '空':'kōng', '重':'zhòng',
    '长':'cháng', '相':'xiāng', '处':'chǔ', '传':'chuán', '称':'chēng'
};

function readingGroupScore(group, sourcePinyinKey, manualPinyinKey) {
    const all = dedupeSenses(group.flatMap(candidate => candidate.senses));
    const direct = all.filter(sense => !isLowValueSense(sense, all.length > 1) && !/^dùng trong\b/i.test(sense));
    let score = direct.length * 12 + Math.min(12, direct.join(' ').length / 25);
    if (!direct.length) score -= 45;
    if (group.some(candidate => /^[A-Z]/.test(candidate.pinyin))) score -= 12;
    if (group[0].pinyinKey === sourcePinyinKey) score += 10;
    if (manualPinyinKey && group[0].pinyinKey === manualPinyinKey) score += 100;
    return score;
}

function chooseDictionaryMeaning(item, dictionary) {
    const word = normalizeWord(item.hanzi);
    const directCandidates = dictionary.get(word) || [];
    const baseCandidates = word.endsWith('儿') ? (dictionary.get(word.slice(0, -1)) || []) : [];
    const candidates = [...directCandidates, ...baseCandidates];
    if (!candidates.length) {
        if (MANUAL_OVERRIDES[word]) return {meaning: MANUAL_OVERRIDES[word], source: 'manual-reviewed', pinyin: item.pinyin};
        return null;
    }

    const groups = new Map();
    candidates.forEach(candidate => {
        if (!groups.has(candidate.pinyinKey)) groups.set(candidate.pinyinKey, []);
        groups.get(candidate.pinyinKey).push(candidate);
    });
    const sourcePinyinKey = normalizePinyin(item.pinyin);
    const manualPinyinKey = normalizePinyin(MANUAL_PINYIN[word] || '');
    const ranked = [...groups.values()].sort((a, b) =>
        readingGroupScore(b, sourcePinyinKey, manualPinyinKey) - readingGroupScore(a, sourcePinyinKey, manualPinyinKey)
    );
    const selected = ranked[0];
    let senses = dedupeSenses(selected.flatMap(candidate => candidate.senses));
    const hasOtherSenses = senses.length > 1;
    senses = senses.filter(sense => !isLowValueSense(sense, hasOtherSenses) && !/^dùng trong\b/i.test(sense));
    if (!senses.length) senses = dedupeSenses(selected.flatMap(candidate => candidate.senses));

    const concise = [];
    let length = 0;
    for (const sense of senses) {
        if (concise.length >= 8) break;
        if (length + sense.length > 360 && concise.length >= 2) break;
        concise.push(sense);
        length += sense.length;
    }
    const meaning = MANUAL_OVERRIDES[word] || concise.join('; ');
    if (!meaning) return null;
    return {
        meaning,
        source: MANUAL_OVERRIDES[word] ? 'manual-reviewed' : (selected[0].pinyinKey === sourcePinyinKey ? 'cvdict-reading-match' : 'cvdict-word-match'),
        pinyin: MANUAL_PINYIN[word] || numberedPinyinToMarks(selected[0].pinyin)
    };
}

function looksSuspicious(value) {
    const meaning = String(value || '');
    return !meaning
        || /^(nghĩa của|ý nghĩa của|chưa có nghĩa|hán điển)/i.test(meaning)
        || /AI thêm nghĩa|meaning of|undefined|null/i.test(meaning)
        || /[\u3400-\u9fff]/u.test(meaning)
        || /\b(?:LT:|abbr\.|classifier)\b/i.test(meaning)
        || /^(?:dùng trong|biến thể cũ của)\b/i.test(meaning)
        || meaning.length > 500;
}

function rebuildDataset(items, dictionary) {
    let matchedReading = 0;
    let matchedWord = 0;
    let manual = 0;
    let retained = 0;
    let changed = 0;
    const unresolved = [];
    const suspiciousBefore = [];
    const suspiciousAfter = [];

    const output = items.map(item => {
        if (looksSuspicious(item.meaning)) suspiciousBefore.push({level: item.level, hanzi: item.hanzi, meaning: item.meaning});
        const resolved = chooseDictionaryMeaning(item, dictionary);
        if (!resolved) {
            retained++;
            unresolved.push({level: item.level, number: item.number, hanzi: item.hanzi, pinyin: item.pinyin, meaning: item.meaning});
            if (looksSuspicious(item.meaning)) suspiciousAfter.push({level: item.level, hanzi: item.hanzi, meaning: item.meaning});
            return item;
        }
        if (resolved.source === 'manual-reviewed') manual++;
        else if (resolved.source === 'cvdict-reading-match') matchedReading++;
        else matchedWord++;
        if (resolved.meaning !== item.meaning) changed++;
        const next = {...item, pinyin: resolved.pinyin || item.pinyin, meaning: resolved.meaning, meaningSource: resolved.source};
        if (looksSuspicious(next.meaning)) suspiciousAfter.push({level: next.level, hanzi: next.hanzi, meaning: next.meaning});
        if (next.source === 'translated-lexicon') next.source = 'cvdict-reviewed';
        return next;
    });

    return {
        output,
        stats: {total: items.length, changed, matchedReading, matchedWord, manual, retained, suspiciousBefore: suspiciousBefore.length, suspiciousAfter: suspiciousAfter.length},
        unresolved,
        suspiciousBefore: suspiciousBefore.slice(0, 100),
        suspiciousAfter: suspiciousAfter.slice(0, 100)
    };
}

function writeBrowserArray(relativePath, globalName, value) {
    fs.writeFileSync(path.join(root, relativePath), `window.${globalName} = ${JSON.stringify(value)};\n`, 'utf8');
}

const dictionary = parseDictionary(dictionaryPath);
const core = loadBrowserArray('assets/hsk30-2025.js', 'HSK30_2025_DATA');
const advanced = loadBrowserArray('assets/hsk30-advanced.js', 'HSK30_ADVANCED_DATA');
const coreResult = rebuildDataset(core, dictionary);
const advancedResult = rebuildDataset(advanced, dictionary);
const all = [...coreResult.output, ...advancedResult.output];
const report = {
    generatedAt: new Date().toISOString(),
    dictionary: {
        name: 'CVDICT',
        source: 'https://github.com/ph0ngp/CVDICT',
        license: 'CC BY-SA 4.0',
        headwords: dictionary.size
    },
    total: all.length,
    counts: Object.fromEntries([1, 2, 3, 4, 5, 6, 7].map(level => [level, all.filter(item => item.level === level).length])),
    core: coreResult.stats,
    advanced: advancedResult.stats,
    unresolvedCount: coreResult.unresolved.length + advancedResult.unresolved.length,
    unresolved: [...coreResult.unresolved, ...advancedResult.unresolved],
    suspiciousBefore: [...coreResult.suspiciousBefore, ...advancedResult.suspiciousBefore].slice(0, 150),
    suspiciousAfter: [...coreResult.suspiciousAfter, ...advancedResult.suspiciousAfter].slice(0, 150)
};

if (shouldWrite) {
    writeBrowserArray('assets/hsk30-2025.js', 'HSK30_2025_DATA', coreResult.output);
    writeBrowserArray('assets/hsk30-advanced.js', 'HSK30_ADVANCED_DATA', advancedResult.output);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
}

console.log(JSON.stringify(report, null, 2));
