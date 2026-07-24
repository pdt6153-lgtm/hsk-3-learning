// ==================== DATA ====================
const HSK_DATA = {
    1: {
        name: "HSK 1",
        totalWords: 301,
        categories: {
            "Chào hỏi": [
                {hanzi:"你好",pinyin:"nǐ hǎo",meaning:"Xin chào",example:{zh:"你好，我是小明。",py:"Nǐ hǎo, wǒ shì Xiǎo Míng.",vi:"Xin chào, tôi là Tiểu Minh."}},
                {hanzi:"谢谢",pinyin:"xiè xie",meaning:"Cảm ơn",example:{zh:"谢谢你的帮助。",py:"Xiè xie nǐ de bāng zhù.",vi:"Cảm ơn sự giúp đỡ của bạn."}},
                {hanzi:"再见",pinyin:"zài jiàn",meaning:"Tạm biệt",example:{zh:"明天再见！",py:"Míng tiān zài jiàn!",vi:"Ngày mai gặp lại!"}},
                {hanzi:"对不起",pinyin:"duì bu qǐ",meaning:"Xin lỗi",example:{zh:"对不起，我迟到了。",py:"Duì bu qǐ, wǒ chí dào le.",vi:"Xin lỗi, tôi đến muộn rồi."}},
                {hanzi:"没关系",pinyin:"méi guān xi",meaning:"Không sao",example:{zh:"没关系，不用担心。",py:"Méi guān xi, bú yòng dān xīn.",vi:"Không sao, đừng lo lắng."}},
                {hanzi:"请",pinyin:"qǐng",meaning:"Mời, xin",example:{zh:"请进！",py:"Qǐng jìn!",vi:"Mời vào!"}},
            ],
            "Đại từ": [
                {hanzi:"我",pinyin:"wǒ",meaning:"Tôi",example:{zh:"我是学生。",py:"Wǒ shì xué shēng.",vi:"Tôi là học sinh."}},
                {hanzi:"你",pinyin:"nǐ",meaning:"Bạn",example:{zh:"你叫什么名字？",py:"Nǐ jiào shén me míng zi?",vi:"Bạn tên gì?"}},
                {hanzi:"他",pinyin:"tā",meaning:"Anh ấy",example:{zh:"他是我的朋友。",py:"Tā shì wǒ de péng yǒu.",vi:"Anh ấy là bạn của tôi."}},
                {hanzi:"她",pinyin:"tā",meaning:"Cô ấy",example:{zh:"她很漂亮。",py:"Tā hěn piào liang.",vi:"Cô ấy rất đẹp."}},
                {hanzi:"我们",pinyin:"wǒ men",meaning:"Chúng tôi",example:{zh:"我们是好朋友。",py:"Wǒ men shì hǎo péng yǒu.",vi:"Chúng tôi là bạn tốt."}},
                {hanzi:"他们",pinyin:"tā men",meaning:"Họ",example:{zh:"他们都是中国人。",py:"Tā men dōu shì Zhōng guó rén.",vi:"Họ đều là người Trung Quốc."}},
                {hanzi:"这",pinyin:"zhè",meaning:"Đây, này",example:{zh:"这是我的书。",py:"Zhè shì wǒ de shū.",vi:"Đây là sách của tôi."}},
                {hanzi:"那",pinyin:"nà",meaning:"Đó, kia",example:{zh:"那是什么？",py:"Nà shì shén me?",vi:"Đó là cái gì?"}},
            ],
            "Số đếm": [
                {hanzi:"一",pinyin:"yī",meaning:"Một (1)",example:{zh:"我有一个妹妹。",py:"Wǒ yǒu yī gè mèi mei.",vi:"Tôi có một em gái."}},
                {hanzi:"二",pinyin:"èr",meaning:"Hai (2)",example:{zh:"我有二十块钱。",py:"Wǒ yǒu èr shí kuài qián.",vi:"Tôi có 20 đồng."}},
                {hanzi:"三",pinyin:"sān",meaning:"Ba (3)",example:{zh:"三个人。",py:"Sān gè rén.",vi:"Ba người."}},
                {hanzi:"四",pinyin:"sì",meaning:"Bốn (4)",example:{zh:"四月很美。",py:"Sì yuè hěn měi.",vi:"Tháng tư rất đẹp."}},
                {hanzi:"五",pinyin:"wǔ",meaning:"Năm (5)",example:{zh:"五点了。",py:"Wǔ diǎn le.",vi:"5 giờ rồi."}},
                {hanzi:"六",pinyin:"liù",meaning:"Sáu (6)",example:{zh:"六月一号是儿童节。",py:"Liù yuè yī hào shì ér tóng jié.",vi:"Ngày 1 tháng 6 là tết thiếu nhi."}},
                {hanzi:"七",pinyin:"qī",meaning:"Bảy (7)",example:{zh:"一个星期有七天。",py:"Yī gè xīng qī yǒu qī tiān.",vi:"Một tuần có 7 ngày."}},
                {hanzi:"八",pinyin:"bā",meaning:"Tám (8)",example:{zh:"八点上课。",py:"Bā diǎn shàng kè.",vi:"8 giờ vào lớp."}},
                {hanzi:"九",pinyin:"jiǔ",meaning:"Chín (9)",example:{zh:"九月开学。",py:"Jiǔ yuè kāi xué.",vi:"Tháng 9 khai giảng."}},
                {hanzi:"十",pinyin:"shí",meaning:"Mười (10)",example:{zh:"十全十美。",py:"Shí quán shí měi.",vi:"Thập toàn thập mỹ."}},
            ],
            "Gia đình": [
                {hanzi:"爸爸",pinyin:"bà ba",meaning:"Bố",example:{zh:"我爸爸是老师。",py:"Wǒ bà ba shì lǎo shī.",vi:"Bố tôi là giáo viên."}},
                {hanzi:"妈妈",pinyin:"mā ma",meaning:"Mẹ",example:{zh:"妈妈做的菜很好吃。",py:"Mā ma zuò de cài hěn hǎo chī.",vi:"Món ăn mẹ nấu rất ngon."}},
                {hanzi:"哥哥",pinyin:"gē ge",meaning:"Anh trai",example:{zh:"我哥哥二十岁。",py:"Wǒ gē ge èr shí suì.",vi:"Anh trai tôi 20 tuổi."}},
                {hanzi:"姐姐",pinyin:"jiě jie",meaning:"Chị gái",example:{zh:"姐姐在北京工作。",py:"Jiě jie zài Běi jīng gōng zuò.",vi:"Chị gái làm việc ở Bắc Kinh."}},
                {hanzi:"弟弟",pinyin:"dì di",meaning:"Em trai",example:{zh:"弟弟在上学。",py:"Dì di zài shàng xué.",vi:"Em trai đang đi học."}},
                {hanzi:"妹妹",pinyin:"mèi mei",meaning:"Em gái",example:{zh:"妹妹很可爱。",py:"Mèi mei hěn kě ài.",vi:"Em gái rất đáng yêu."}},
                {hanzi:"家",pinyin:"jiā",meaning:"Nhà, gia đình",example:{zh:"我爱我的家。",py:"Wǒ ài wǒ de jiā.",vi:"Tôi yêu gia đình tôi."}},
            ],
            "Thời gian": [
                {hanzi:"今天",pinyin:"jīn tiān",meaning:"Hôm nay",example:{zh:"今天天气很好。",py:"Jīn tiān tiān qì hěn hǎo.",vi:"Hôm nay thời tiết rất đẹp."}},
                {hanzi:"明天",pinyin:"míng tiān",meaning:"Ngày mai",example:{zh:"明天我去学校。",py:"Míng tiān wǒ qù xué xiào.",vi:"Ngày mai tôi đi học."}},
                {hanzi:"昨天",pinyin:"zuó tiān",meaning:"Hôm qua",example:{zh:"昨天我很忙。",py:"Zuó tiān wǒ hěn máng.",vi:"Hôm qua tôi rất bận."}},
                {hanzi:"现在",pinyin:"xiàn zài",meaning:"Bây giờ",example:{zh:"现在几点？",py:"Xiàn zài jǐ diǎn?",vi:"Bây giờ mấy giờ?"}},
                {hanzi:"年",pinyin:"nián",meaning:"Năm",example:{zh:"今年是2024年。",py:"Jīn nián shì 2024 nián.",vi:"Năm nay là năm 2024."}},
                {hanzi:"月",pinyin:"yuè",meaning:"Tháng",example:{zh:"一年有十二个月。",py:"Yī nián yǒu shí èr gè yuè.",vi:"Một năm có 12 tháng."}},
            ],
            "Động từ cơ bản": [
                {hanzi:"是",pinyin:"shì",meaning:"Là",example:{zh:"我是越南人。",py:"Wǒ shì Yuè nán rén.",vi:"Tôi là người Việt Nam."}},
                {hanzi:"有",pinyin:"yǒu",meaning:"Có",example:{zh:"我有一本书。",py:"Wǒ yǒu yī běn shū.",vi:"Tôi có một quyển sách."}},
                {hanzi:"吃",pinyin:"chī",meaning:"Ăn",example:{zh:"我们吃午饭吧。",py:"Wǒ men chī wǔ fàn ba.",vi:"Chúng ta ăn trưa đi."}},
                {hanzi:"喝",pinyin:"hē",meaning:"Uống",example:{zh:"你想喝什么？",py:"Nǐ xiǎng hē shén me?",vi:"Bạn muốn uống gì?"}},
                {hanzi:"去",pinyin:"qù",meaning:"Đi",example:{zh:"我去商店买东西。",py:"Wǒ qù shāng diàn mǎi dōng xi.",vi:"Tôi đi cửa hàng mua đồ."}},
                {hanzi:"来",pinyin:"lái",meaning:"Đến",example:{zh:"请来我家。",py:"Qǐng lái wǒ jiā.",vi:"Mời đến nhà tôi."}},
                {hanzi:"看",pinyin:"kàn",meaning:"Xem, nhìn",example:{zh:"我在看电视。",py:"Wǒ zài kàn diàn shì.",vi:"Tôi đang xem TV."}},
                {hanzi:"听",pinyin:"tīng",meaning:"Nghe",example:{zh:"我喜欢听音乐。",py:"Wǒ xǐ huān tīng yīn yuè.",vi:"Tôi thích nghe nhạc."}},
                {hanzi:"说",pinyin:"shuō",meaning:"Nói",example:{zh:"请你说慢一点。",py:"Qǐng nǐ shuō màn yī diǎn.",vi:"Xin bạn nói chậm một chút."}},
                {hanzi:"读",pinyin:"dú",meaning:"Đọc",example:{zh:"我每天读书。",py:"Wǒ měi tiān dú shū.",vi:"Tôi đọc sách mỗi ngày."}},
                {hanzi:"写",pinyin:"xiě",meaning:"Viết",example:{zh:"请写你的名字。",py:"Qǐng xiě nǐ de míng zi.",vi:"Xin viết tên của bạn."}},
                {hanzi:"学",pinyin:"xué",meaning:"Học",example:{zh:"我在学中文。",py:"Wǒ zài xué zhōng wén.",vi:"Tôi đang học tiếng Trung."}},
                {hanzi:"做",pinyin:"zuò",meaning:"Làm",example:{zh:"你在做什么？",py:"Nǐ zài zuò shén me?",vi:"Bạn đang làm gì?"}},
                {hanzi:"买",pinyin:"mǎi",meaning:"Mua",example:{zh:"我想买这个。",py:"Wǒ xiǎng mǎi zhè ge.",vi:"Tôi muốn mua cái này."}},
                {hanzi:"爱",pinyin:"ài",meaning:"Yêu",example:{zh:"我爱你。",py:"Wǒ ài nǐ.",vi:"Tôi yêu bạn."}},
                {hanzi:"想",pinyin:"xiǎng",meaning:"Muốn, nghĩ",example:{zh:"我想回家。",py:"Wǒ xiǎng huí jiā.",vi:"Tôi muốn về nhà."}},
            ],
            "Danh từ thường dùng": [
                {hanzi:"人",pinyin:"rén",meaning:"Người",example:{zh:"这个人很好。",py:"Zhè ge rén hěn hǎo.",vi:"Người này rất tốt."}},
                {hanzi:"水",pinyin:"shuǐ",meaning:"Nước",example:{zh:"请给我一杯水。",py:"Qǐng gěi wǒ yī bēi shuǐ.",vi:"Xin cho tôi một cốc nước."}},
                {hanzi:"饭",pinyin:"fàn",meaning:"Cơm",example:{zh:"你吃饭了吗？",py:"Nǐ chī fàn le ma?",vi:"Bạn ăn cơm chưa?"}},
                {hanzi:"茶",pinyin:"chá",meaning:"Trà",example:{zh:"中国茶很有名。",py:"Zhōng guó chá hěn yǒu míng.",vi:"Trà Trung Quốc rất nổi tiếng."}},
                {hanzi:"书",pinyin:"shū",meaning:"Sách",example:{zh:"这本书很好看。",py:"Zhè běn shū hěn hǎo kàn.",vi:"Quyển sách này rất hay."}},
                {hanzi:"学校",pinyin:"xué xiào",meaning:"Trường học",example:{zh:"我们的学校很大。",py:"Wǒ men de xué xiào hěn dà.",vi:"Trường chúng tôi rất lớn."}},
                {hanzi:"中国",pinyin:"Zhōng guó",meaning:"Trung Quốc",example:{zh:"我想去中国。",py:"Wǒ xiǎng qù Zhōng guó.",vi:"Tôi muốn đi Trung Quốc."}},
                {hanzi:"钱",pinyin:"qián",meaning:"Tiền",example:{zh:"这个多少钱？",py:"Zhè ge duō shǎo qián?",vi:"Cái này bao nhiêu tiền?"}},
            ],
        }
    },
    2: {
        name: "HSK 2",
        totalWords: 203,
        categories: {
            "Giao thông": [
                {hanzi:"公共汽车",pinyin:"gōng gòng qì chē",meaning:"Xe buýt",example:{zh:"我坐公共汽车去上班。",py:"Wǒ zuò gōng gòng qì chē qù shàng bān.",vi:"Tôi đi xe buýt đi làm."}},
                {hanzi:"出租车",pinyin:"chū zū chē",meaning:"Taxi",example:{zh:"我们打出租车吧。",py:"Wǒ men dǎ chū zū chē ba.",vi:"Chúng ta đi taxi đi."}},
                {hanzi:"飞机",pinyin:"fēi jī",meaning:"Máy bay",example:{zh:"我坐飞机去北京。",py:"Wǒ zuò fēi jī qù Běi jīng.",vi:"Tôi đi máy bay đến Bắc Kinh."}},
                {hanzi:"火车",pinyin:"huǒ chē",meaning:"Tàu hỏa",example:{zh:"火车站在哪儿？",py:"Huǒ chē zhàn zài nǎr?",vi:"Nhà ga ở đâu?"}},
                {hanzi:"地铁",pinyin:"dì tiě",meaning:"Tàu điện ngầm",example:{zh:"坐地铁很方便。",py:"Zuò dì tiě hěn fāng biàn.",vi:"Đi tàu điện ngầm rất tiện."}},
                {hanzi:"船",pinyin:"chuán",meaning:"Thuyền, tàu",example:{zh:"我们坐船去。",py:"Wǒ men zuò chuán qù.",vi:"Chúng ta đi thuyền."}},
            ],
            "Thời tiết": [
                {hanzi:"天气",pinyin:"tiān qì",meaning:"Thời tiết",example:{zh:"今天天气怎么样？",py:"Jīn tiān tiān qì zěn me yàng?",vi:"Hôm nay thời tiết thế nào?"}},
                {hanzi:"下雨",pinyin:"xià yǔ",meaning:"Mưa",example:{zh:"明天会下雨。",py:"Míng tiān huì xià yǔ.",vi:"Ngày mai sẽ mưa."}},
                {hanzi:"下雪",pinyin:"xià xuě",meaning:"Tuyết rơi",example:{zh:"冬天经常下雪。",py:"Dōng tiān jīng cháng xià xuě.",vi:"Mùa đông thường xuyên tuyết rơi."}},
                {hanzi:"冷",pinyin:"lěng",meaning:"Lạnh",example:{zh:"今天很冷。",py:"Jīn tiān hěn lěng.",vi:"Hôm nay rất lạnh."}},
                {hanzi:"热",pinyin:"rè",meaning:"Nóng",example:{zh:"夏天很热。",py:"Xià tiān hěn rè.",vi:"Mùa hè rất nóng."}},
                {hanzi:"晴天",pinyin:"qíng tiān",meaning:"Ngày nắng",example:{zh:"今天是晴天。",py:"Jīn tiān shì qíng tiān.",vi:"Hôm nay là ngày nắng."}},
            ],
            "Mua sắm": [
                {hanzi:"商店",pinyin:"shāng diàn",meaning:"Cửa hàng",example:{zh:"这家商店很大。",py:"Zhè jiā shāng diàn hěn dà.",vi:"Cửa hàng này rất lớn."}},
                {hanzi:"便宜",pinyin:"pián yi",meaning:"Rẻ",example:{zh:"这个太贵了，有便宜的吗？",py:"Zhè ge tài guì le, yǒu pián yi de ma?",vi:"Cái này đắt quá, có cái rẻ không?"}},
                {hanzi:"贵",pinyin:"guì",meaning:"Đắt",example:{zh:"这件衣服很贵。",py:"Zhè jiàn yī fú hěn guì.",vi:"Bộ quần áo này rất đắt."}},
                {hanzi:"卖",pinyin:"mài",meaning:"Bán",example:{zh:"这里卖水果。",py:"Zhè lǐ mài shuǐ guǒ.",vi:"Ở đây bán hoa quả."}},
                {hanzi:"颜色",pinyin:"yán sè",meaning:"Màu sắc",example:{zh:"你喜欢什么颜色？",py:"Nǐ xǐ huān shén me yán sè?",vi:"Bạn thích màu gì?"}},
            ],
            "Tính từ": [
                {hanzi:"高兴",pinyin:"gāo xìng",meaning:"Vui vẻ",example:{zh:"见到你很高兴。",py:"Jiàn dào nǐ hěn gāo xìng.",vi:"Gặp bạn rất vui."}},
                {hanzi:"快乐",pinyin:"kuài lè",meaning:"Hạnh phúc",example:{zh:"祝你生日快乐！",py:"Zhù nǐ shēng rì kuài lè!",vi:"Chúc bạn sinh nhật vui vẻ!"}},
                {hanzi:"忙",pinyin:"máng",meaning:"Bận",example:{zh:"你最近忙吗？",py:"Nǐ zuì jìn máng ma?",vi:"Gần đây bạn bận không?"}},
                {hanzi:"累",pinyin:"lèi",meaning:"Mệt",example:{zh:"工作了一天，我很累。",py:"Gōng zuò le yī tiān, wǒ hěn lèi.",vi:"Làm việc cả ngày, tôi rất mệt."}},
                {hanzi:"漂亮",pinyin:"piào liang",meaning:"Đẹp",example:{zh:"这朵花很漂亮。",py:"Zhè duǒ huā hěn piào liang.",vi:"Bông hoa này rất đẹp."}},
                {hanzi:"好吃",pinyin:"hǎo chī",meaning:"Ngon",example:{zh:"越南菜很好吃。",py:"Yuè nán cài hěn hǎo chī.",vi:"Món Việt rất ngon."}},
            ],
        }
    },
    3: {
        name: "HSK 3",
        totalWords: 506,
        categories: {
            "Công việc": [
                {hanzi:"工作",pinyin:"gōng zuò",meaning:"Công việc, làm việc",example:{zh:"你在哪儿工作？",py:"Nǐ zài nǎr gōng zuò?",vi:"Bạn làm việc ở đâu?"}},
                {hanzi:"公司",pinyin:"gōng sī",meaning:"Công ty",example:{zh:"我在一家中国公司工作。",py:"Wǒ zài yī jiā Zhōng guó gōng sī gōng zuò.",vi:"Tôi làm việc ở một công ty Trung Quốc."}},
                {hanzi:"经理",pinyin:"jīng lǐ",meaning:"Giám đốc",example:{zh:"他是我们公司的经理。",py:"Tā shì wǒ men gōng sī de jīng lǐ.",vi:"Anh ấy là giám đốc công ty chúng tôi."}},
                {hanzi:"会议",pinyin:"huì yì",meaning:"Cuộc họp",example:{zh:"下午有一个会议。",py:"Xià wǔ yǒu yī gè huì yì.",vi:"Buổi chiều có một cuộc họp."}},
                {hanzi:"工资",pinyin:"gōng zī",meaning:"Lương",example:{zh:"他的工资很高。",py:"Tā de gōng zī hěn gāo.",vi:"Lương của anh ấy rất cao."}},
                {hanzi:"面试",pinyin:"miàn shì",meaning:"Phỏng vấn",example:{zh:"明天我有一个面试。",py:"Míng tiān wǒ yǒu yī gè miàn shì.",vi:"Ngày mai tôi có một cuộc phỏng vấn."}},
            ],
            "Sức khỏe": [
                {hanzi:"医院",pinyin:"yī yuàn",meaning:"Bệnh viện",example:{zh:"你应该去医院看看。",py:"Nǐ yīng gāi qù yī yuàn kàn kàn.",vi:"Bạn nên đến bệnh viện khám."}},
                {hanzi:"医生",pinyin:"yī shēng",meaning:"Bác sĩ",example:{zh:"医生说我需要休息。",py:"Yī shēng shuō wǒ xū yào xiū xi.",vi:"Bác sĩ nói tôi cần nghỉ ngơi."}},
                {hanzi:"药",pinyin:"yào",meaning:"Thuốc",example:{zh:"你吃药了吗？",py:"Nǐ chī yào le ma?",vi:"Bạn uống thuốc chưa?"}},
                {hanzi:"感冒",pinyin:"gǎn mào",meaning:"Cảm cúm",example:{zh:"我感冒了。",py:"Wǒ gǎn mào le.",vi:"Tôi bị cảm."}},
                {hanzi:"发烧",pinyin:"fā shāo",meaning:"Sốt",example:{zh:"孩子发烧了。",py:"Hái zi fā shāo le.",vi:"Con bị sốt rồi."}},
                {hanzi:"健康",pinyin:"jiàn kāng",meaning:"Khỏe mạnh",example:{zh:"健康是最重要的。",py:"Jiàn kāng shì zuì zhòng yào de.",vi:"Sức khỏe là quan trọng nhất."}},
            ],
            "Giáo dục": [
                {hanzi:"大学",pinyin:"dà xué",meaning:"Đại học",example:{zh:"我在大学学习中文。",py:"Wǒ zài dà xué xué xí zhōng wén.",vi:"Tôi học tiếng Trung ở đại học."}},
                {hanzi:"考试",pinyin:"kǎo shì",meaning:"Thi cử",example:{zh:"下周有考试。",py:"Xià zhōu yǒu kǎo shì.",vi:"Tuần sau có thi."}},
                {hanzi:"成绩",pinyin:"chéng jì",meaning:"Thành tích",example:{zh:"他的成绩很好。",py:"Tā de chéng jì hěn hǎo.",vi:"Thành tích của anh ấy rất tốt."}},
                {hanzi:"毕业",pinyin:"bì yè",meaning:"Tốt nghiệp",example:{zh:"我明年毕业。",py:"Wǒ míng nián bì yè.",vi:"Năm sau tôi tốt nghiệp."}},
                {hanzi:"复习",pinyin:"fù xí",meaning:"Ôn tập",example:{zh:"考试前要好好复习。",py:"Kǎo shì qián yào hǎo hǎo fù xí.",vi:"Trước khi thi phải ôn tập tốt."}},
            ],
        }
    },
    4: {
        name: "HSK 4",
        totalWords: 1016,
        categories: {
            "Kinh tế": [
                {hanzi:"经济",pinyin:"jīng jì",meaning:"Kinh tế",example:{zh:"中国经济发展很快。",py:"Zhōng guó jīng jì fā zhǎn hěn kuài.",vi:"Kinh tế Trung Quốc phát triển rất nhanh."}},
                {hanzi:"市场",pinyin:"shì chǎng",meaning:"Thị trường",example:{zh:"这个市场很大。",py:"Zhè ge shì chǎng hěn dà.",vi:"Thị trường này rất lớn."}},
                {hanzi:"价格",pinyin:"jià gé",meaning:"Giá cả",example:{zh:"价格太高了。",py:"Jià gé tài gāo le.",vi:"Giá quá cao."}},
                {hanzi:"投资",pinyin:"tóu zī",meaning:"Đầu tư",example:{zh:"他想投资房地产。",py:"Tā xiǎng tóu zī fáng dì chǎn.",vi:"Anh ấy muốn đầu tư bất động sản."}},
                {hanzi:"贸易",pinyin:"mào yì",meaning:"Thương mại",example:{zh:"中越贸易发展迅速。",py:"Zhōng Yuè mào yì fā zhǎn xùn sù.",vi:"Thương mại Trung - Việt phát triển nhanh chóng."}},
            ],
            "Văn hóa": [
                {hanzi:"文化",pinyin:"wén huà",meaning:"Văn hóa",example:{zh:"中国文化历史悠久。",py:"Zhōng guó wén huà lì shǐ yōu jiǔ.",vi:"Văn hóa Trung Quốc có lịch sử lâu đời."}},
                {hanzi:"传统",pinyin:"chuán tǒng",meaning:"Truyền thống",example:{zh:"这是一个传统节日。",py:"Zhè shì yī gè chuán tǒng jié rì.",vi:"Đây là một lễ hội truyền thống."}},
                {hanzi:"艺术",pinyin:"yì shù",meaning:"Nghệ thuật",example:{zh:"他对艺术很感兴趣。",py:"Tā duì yì shù hěn gǎn xìng qù.",vi:"Anh ấy rất quan tâm đến nghệ thuật."}},
                {hanzi:"历史",pinyin:"lì shǐ",meaning:"Lịch sử",example:{zh:"我喜欢学习历史。",py:"Wǒ xǐ huān xué xí lì shǐ.",vi:"Tôi thích học lịch sử."}},
                {hanzi:"风俗",pinyin:"fēng sú",meaning:"Phong tục",example:{zh:"每个地方有不同的风俗。",py:"Měi ge dì fāng yǒu bù tóng de fēng sú.",vi:"Mỗi nơi có phong tục khác nhau."}},
            ],
            "Cảm xúc": [
                {hanzi:"感动",pinyin:"gǎn dòng",meaning:"Cảm động",example:{zh:"这个故事让我很感动。",py:"Zhè ge gù shì ràng wǒ hěn gǎn dòng.",vi:"Câu chuyện này khiến tôi rất cảm động."}},
                {hanzi:"失望",pinyin:"shī wàng",meaning:"Thất vọng",example:{zh:"他对结果很失望。",py:"Tā duì jié guǒ hěn shī wàng.",vi:"Anh ấy rất thất vọng về kết quả."}},
                {hanzi:"紧张",pinyin:"jǐn zhāng",meaning:"Căng thẳng",example:{zh:"考试前我很紧张。",py:"Kǎo shì qián wǒ hěn jǐn zhāng.",vi:"Trước khi thi tôi rất căng thẳng."}},
                {hanzi:"自信",pinyin:"zì xìn",meaning:"Tự tin",example:{zh:"你要对自己有自信。",py:"Nǐ yào duì zì jǐ yǒu zì xìn.",vi:"Bạn phải tự tin vào bản thân."}},
                {hanzi:"后悔",pinyin:"hòu huǐ",meaning:"Hối hận",example:{zh:"我后悔没有好好学习。",py:"Wǒ hòu huǐ méi yǒu hǎo hǎo xué xí.",vi:"Tôi hối hận đã không học hành chăm chỉ."}},
            ],
        }
    },
    5: {
        name: "HSK 5",
        totalWords: 1632,
        categories: {
            "Xã hội": [
                {hanzi:"社会",pinyin:"shè huì",meaning:"Xã hội",example:{zh:"社会在不断发展。",py:"Shè huì zài bú duàn fā zhǎn.",vi:"Xã hội không ngừng phát triển."}},
                {hanzi:"环境",pinyin:"huán jìng",meaning:"Môi trường",example:{zh:"保护环境是我们的责任。",py:"Bǎo hù huán jìng shì wǒ men de zé rèn.",vi:"Bảo vệ môi trường là trách nhiệm của chúng ta."}},
                {hanzi:"政策",pinyin:"zhèng cè",meaning:"Chính sách",example:{zh:"政府出台了新政策。",py:"Zhèng fǔ chū tái le xīn zhèng cè.",vi:"Chính phủ ban hành chính sách mới."}},
                {hanzi:"制度",pinyin:"zhì dù",meaning:"Chế độ",example:{zh:"我们需要完善制度。",py:"Wǒ men xū yào wán shàn zhì dù.",vi:"Chúng ta cần hoàn thiện chế độ."}},
                {hanzi:"改革",pinyin:"gǎi gé",meaning:"Cải cách",example:{zh:"改革开放四十多年了。",py:"Gǎi gé kāi fàng sì shí duō nián le.",vi:"Cải cách mở cửa đã hơn 40 năm."}},
            ],
            "Khoa học công nghệ": [
                {hanzi:"科技",pinyin:"kē jì",meaning:"Khoa học công nghệ",example:{zh:"科技改变了我们的生活。",py:"Kē jì gǎi biàn le wǒ men de shēng huó.",vi:"Khoa học công nghệ thay đổi cuộc sống."}},
                {hanzi:"互联网",pinyin:"hù lián wǎng",meaning:"Internet",example:{zh:"互联网让世界变小了。",py:"Hù lián wǎng ràng shì jiè biàn xiǎo le.",vi:"Internet khiến thế giới nhỏ lại."}},
                {hanzi:"人工智能",pinyin:"rén gōng zhì néng",meaning:"Trí tuệ nhân tạo",example:{zh:"人工智能发展很快。",py:"Rén gōng zhì néng fā zhǎn hěn kuài.",vi:"AI phát triển rất nhanh."}},
                {hanzi:"数据",pinyin:"shù jù",meaning:"Dữ liệu",example:{zh:"大数据很重要。",py:"Dà shù jù hěn zhòng yào.",vi:"Big data rất quan trọng."}},
                {hanzi:"研究",pinyin:"yán jiū",meaning:"Nghiên cứu",example:{zh:"他在研究中国历史。",py:"Tā zài yán jiū Zhōng guó lì shǐ.",vi:"Anh ấy đang nghiên cứu lịch sử Trung Quốc."}},
            ],
            "Thành ngữ": [
                {hanzi:"一举两得",pinyin:"yī jǔ liǎng dé",meaning:"Một công đôi việc",example:{zh:"学中文可以一举两得。",py:"Xué zhōng wén kě yǐ yī jǔ liǎng dé.",vi:"Học tiếng Trung có thể một công đôi việc."}},
                {hanzi:"半途而废",pinyin:"bàn tú ér fèi",meaning:"Bỏ nửa chừng",example:{zh:"做事不能半途而废。",py:"Zuò shì bù néng bàn tú ér fèi.",vi:"Làm việc không thể bỏ nửa chừng."}},
                {hanzi:"入乡随俗",pinyin:"rù xiāng suí sú",meaning:"Nhập gia tùy tục",example:{zh:"到了中国要入乡随俗。",py:"Dào le Zhōng guó yào rù xiāng suí sú.",vi:"Đến Trung Quốc phải nhập gia tùy tục."}},
                {hanzi:"自言自语",pinyin:"zì yán zì yǔ",meaning:"Tự nói tự nghe",example:{zh:"他常常自言自语。",py:"Tā cháng cháng zì yán zì yǔ.",vi:"Anh ấy thường tự nói chuyện một mình."}},
                {hanzi:"爱不释手",pinyin:"ài bú shì shǒu",meaning:"Yêu thích không rời tay",example:{zh:"这本书让人爱不释手。",py:"Zhè běn shū ràng rén ài bú shì shǒu.",vi:"Quyển sách này khiến người ta mê mẩn không rời."}},
            ],
        }
    }
};

// Finalized HSK 3.0 (2025 syllabus / 2026 rollout) learning roadmap.
const ROADMAP_DATA = {
    1: {weeks:8, words:300, newWords:300, characters:246, band:'Sơ cấp A1', daily:35, outcome:'Tự giới thiệu, hỏi đáp và xử lý các tình huống sinh hoạt rất cơ bản.', stages:[
        {title:'Khởi động nền tảng', time:'Tuần 1–2', tasks:['Nắm pinyin, 4 thanh điệu và quy tắc biến điệu cơ bản','Học 75 từ đầu tiên theo chủ đề chào hỏi, số đếm, gia đình','Luyện nghe–nhắc lại câu ngắn 10 phút mỗi ngày']},
        {title:'Xây vốn từ và mẫu câu', time:'Tuần 3–4', tasks:['Tích lũy đến 150 từ và nhận mặt khoảng 120 chữ','Dùng được câu 是, 有, 在, 不, 没 và câu hỏi 吗/呢','Viết đúng nét các chữ cơ bản thường gặp']},
        {title:'Giao tiếp hằng ngày', time:'Tuần 5–6', tasks:['Tích lũy đến 240 từ về thời gian, ăn uống, mua sắm','Nghe hiểu hội thoại chậm và đọc đoạn 2–3 câu','Tự nói 1 phút về bản thân và gia đình']},
        {title:'Củng cố và đánh giá', time:'Tuần 7–8', tasks:['Hoàn tất 300 từ mục tiêu và ôn bằng flashcard','Làm 3 bài kiểm tra tổng hợp đạt ít nhất 80%','Ghi âm bài tự giới thiệu và sửa phát âm']}
    ]},
    2: {weeks:8, words:500, newWords:200, characters:371, band:'Sơ cấp A1+', daily:45, outcome:'Giao tiếp độc lập trong các tình huống quen thuộc và viết câu ngắn.', stages:[
        {title:'Ôn chắc HSK 1', time:'Tuần 1', tasks:['Ôn 300 từ nền tảng bằng kiểm tra nhanh','Sửa các thanh điệu và chữ thường viết sai','Đọc lại 5 hội thoại HSK 1 không cần dịch']},
        {title:'Mở rộng 100 từ mới', time:'Tuần 2–3', tasks:['Học từ về đi lại, sức khỏe, học tập và công việc','Luyện bổ ngữ kết quả, so sánh và câu đang diễn ra','Viết câu từ pinyin bằng bộ gõ tiếng Trung']},
        {title:'Đạt mốc 500 từ', time:'Tuần 4–6', tasks:['Hoàn tất 200 từ mới của cấp 2','Đọc đoạn văn 80–120 chữ và trả lời câu hỏi','Hội thoại 2 phút về kế hoạch và trải nghiệm']},
        {title:'Luyện đề và đầu ra', time:'Tuần 7–8', tasks:['Làm 3 đề mô phỏng đạt từ 80%','Viết đoạn 5–7 câu về sinh hoạt hằng ngày','Ôn tập cách quãng toàn bộ từ yếu']}
    ]},
    3: {weeks:16, words:1000, newWords:500, characters:655, band:'Sơ cấp A2', daily:60, outcome:'Xử lý phần lớn tình huống đời sống, trình bày trải nghiệm và ý kiến đơn giản.', stages:[
        {title:'Chuyển cấp và chẩn đoán', time:'Tuần 1–2', tasks:['Kiểm tra lại 500 từ HSK 1–2 và lập danh sách từ yếu','Chuẩn hóa phát âm, tốc độ nghe và khả năng gõ chữ','Bắt đầu luyện nói theo định dạng HSKK']},
        {title:'Tăng tốc vốn từ', time:'Tuần 3–7', tasks:['Học 250 từ mới theo cụm và câu ví dụ','Nắm 把, 被, bổ ngữ xu hướng và liên từ thường gặp','Đọc bài 150–250 chữ, tóm tắt ý chính']},
        {title:'Tích hợp bốn kỹ năng', time:'Tuần 8–12', tasks:['Hoàn tất 500 từ mới, đạt tổng 1.000 từ','Nghe hội thoại tốc độ tự nhiên vừa và ghi từ khóa','Nói 2–3 phút, viết đoạn 100 chữ có mở–thân–kết']},
        {title:'Luyện thi HSK 3', time:'Tuần 13–16', tasks:['Làm tối thiểu 5 đề mô phỏng có giới hạn thời gian','Luyện HSKK và sửa lỗi phát âm qua bản ghi','Duy trì điểm ổn định từ 80% trước khi lên HSK 4']}
    ]},
    4: {weeks:24, words:2000, newWords:1000, characters:1096, band:'Trung cấp B1', daily:75, outcome:'Trao đổi khá trôi chảy, đọc bài phổ thông và viết đoạn văn có lập luận.', stages:[
        {title:'Củng cố trung cấp', time:'Tuần 1–4', tasks:['Ôn 1.000 từ cấp dưới bằng lặp lại ngắt quãng','Đánh giá riêng nghe, đọc, viết và nói để tìm điểm yếu','Đọc tin ngắn và truyện phân cấp mỗi ngày']},
        {title:'Mở rộng theo chủ đề', time:'Tuần 5–12', tasks:['Học 500 từ mới về xã hội, giáo dục, công việc, văn hóa','Học từ theo cụm kết hợp thay vì từng từ rời','Viết nhật ký 120–150 chữ ba lần mỗi tuần']},
        {title:'Đạt mốc 2.000 từ', time:'Tuần 13–19', tasks:['Hoàn tất 1.000 từ mới của cấp 4','Nghe podcast/video 5–10 phút và tóm tắt','Thảo luận 4–5 phút, nêu lý do và ví dụ']},
        {title:'Luyện đề chuyên sâu', time:'Tuần 20–24', tasks:['Làm 6 đề mô phỏng, phân loại lỗi sau mỗi đề','Luyện HSKK trung cấp song song','Đạt 80% ở hai đề liên tiếp trước khi chuyển cấp']}
    ]},
    5: {weeks:32, words:3600, newWords:1600, characters:1527, band:'Trung cấp B2', daily:90, outcome:'Đọc hiểu nội dung dài, thảo luận chủ đề trừu tượng và diễn đạt mạch lạc.', stages:[
        {title:'Thiết lập nền trung cấp cao', time:'Tuần 1–5', tasks:['Ôn chọn lọc 2.000 từ HSK 1–4 và xử lý lỗ hổng','Đọc 15 phút/ngày không dùng pinyin','Xây sổ cụm từ, thành ngữ và từ đồng nghĩa']},
        {title:'Mở rộng 800 từ', time:'Tuần 6–15', tasks:['Học từ mới qua báo chí, đời sống và văn hóa','Nghe nội dung 10–15 phút ở tốc độ tự nhiên','Viết bài 180–250 chữ mỗi tuần']},
        {title:'Hoàn tất 3.600 từ', time:'Tuần 16–25', tasks:['Học 800 từ còn lại và ôn theo chu kỳ 1–3–7–14 ngày','Trình bày 5–7 phút về chủ đề xã hội','Luyện dịch ý và diễn đạt lại câu phức']},
        {title:'Về đích HSK 5', time:'Tuần 26–32', tasks:['Làm 8 đề mô phỏng có bấm giờ và nhật ký lỗi','Luyện nói nâng cao/HSKK theo yêu cầu điểm thi','Ổn định điểm từ 80%, duy trì đọc và nghe hằng ngày']}
    ]}
};

HSK_DATA[6] = {name:"HSK 6", totalWords:1810, categories:{}};
HSK_DATA[7] = {name:"HSK 7-9", totalWords:5605, categories:{}};

ROADMAP_DATA[6] = {weeks:40,words:5400,newWords:1800,characters:1800,band:'Trung cấp cao C1',daily:110,outcome:'Hiểu nội dung dài và phức tạp, trình bày lập luận rõ ràng, giao tiếp linh hoạt trong học tập và công việc.',stages:[
{title:'Củng cố nền HSK 5',time:'Tuần 1-4',tasks:['Chẩn đoán bốn kỹ năng và ôn có chọn lọc 3.600 từ nền','Đọc bài 800-1.000 chữ, xác định luận điểm và bằng chứng','Nghe nội dung 15 phút ở tốc độ tự nhiên và lập bản đồ ý']},
{title:'Ngôn ngữ báo chí và xã hội',time:'Tuần 5-14',tasks:['Học từ theo cụm về xã hội, kinh tế, giáo dục và công nghệ','Phân biệt từ đồng nghĩa, sắc thái trang trọng và khẩu ngữ','Viết tóm tắt 250-300 chữ, không dịch từng câu từ tiếng Việt']},
{title:'Lập luận và diễn đạt chính xác',time:'Tuần 15-25',tasks:['Luyện cấu trúc phức, liên kết đoạn và phương tiện nhấn mạnh','Thuyết trình 8-10 phút, phản hồi câu hỏi không chuẩn bị trước','Viết bài 350-450 chữ có luận đề, dẫn chứng và kết luận']},
{title:'Tích hợp bốn kỹ năng',time:'Tuần 26-34',tasks:['Nghe rồi ghi chú, thuật lại và bình luận cùng một chủ đề','Đọc chéo hai văn bản, so sánh quan điểm và độ tin cậy','Hoàn tất 1.800 mục mới, ôn theo chu kỳ 1-3-7-14-30 ngày']},
{title:'Luyện thi HSK 6',time:'Tuần 35-40',tasks:['Làm tối thiểu 8 đề có bấm giờ và nhật ký lỗi','Luyện phần nói tương ứng theo yêu cầu kỳ thi mới','Duy trì ít nhất 80% ở ba đề liên tiếp trước khi chuyển cấp']}
]};
ROADMAP_DATA[7] = {weeks:72,words:11000,newWords:5600,characters:3000,band:'Cao cấp HSK 7-9',daily:140,outcome:'Sử dụng tiếng Trung trong nghiên cứu, nghề nghiệp và giao tiếp liên văn hóa; cấp 7, 8 hoặc 9 được xác định bằng kết quả kỳ thi chung.',stages:[
{title:'Cầu nối lên cao cấp',time:'Tuần 1-10',tasks:['Ôn 5.400 từ nền và xác định lĩnh vực chuyên môn ưu tiên','Đọc báo chí, tiểu luận và văn bản chuyên ngành mỗi ngày','Xây sổ thuật ngữ gồm định nghĩa, kết hợp từ và ngữ cảnh']},
{title:'Đọc sâu và tư duy phản biện',time:'Tuần 11-26',tasks:['Phân tích lập trường, hàm ý, phép tu từ và cấu trúc diễn ngôn','Đối chiếu nhiều nguồn rồi viết tổng thuật 500-700 chữ','Mỗi tuần đọc một văn bản văn học và một văn bản học thuật']},
{title:'Nghe nói học thuật-nghề nghiệp',time:'Tuần 27-40',tasks:['Nghe bài giảng hoặc phỏng vấn 20-30 phút và ghi chú có cấu trúc','Thuyết trình 12-15 phút, tranh biện và xử lý câu hỏi phản biện','Luyện phiên dịch nối tiếp ngắn theo chủ đề quen thuộc']},
{title:'Viết và dịch nâng cao',time:'Tuần 41-56',tasks:['Viết báo cáo, thư trang trọng, bài nghị luận và tóm tắt học thuật','Luyện chuyển đổi phong cách khẩu ngữ-văn viết và Trung-Việt','Biên tập bài viết theo tiêu chí chính xác, mạch lạc và phù hợp đối tượng']},
{title:'Phân hóa HSK 7, 8 và 9',time:'Tuần 57-66',tasks:['HSK 7: bảo đảm hiểu đúng và diễn đạt rõ nội dung chuyên sâu','HSK 8: tăng độ tinh tế, tốc độ xử lý và khả năng tổng hợp nguồn','HSK 9: đạt diễn đạt gần chuyên gia, dịch và phản biện phức tạp']},
{title:'Mô phỏng kỳ thi chung 7-9',time:'Tuần 67-72',tasks:['Làm 10 đề tích hợp có bấm giờ, phân tích lỗi theo kỹ năng','Hoàn thiện chiến thuật phân bổ thời gian và kiểm tra chéo đáp án','Đánh giá cấp mục tiêu bằng kết quả nhiều đề, không chỉ số lượng từ']}
]};

// Grammar Data
const GRAMMAR_DATA = {
    1: [
        {title:"是...的 (shì...de)",desc:"Cấu trúc nhấn mạnh",structure:"主语 + 是 + [nhấn mạnh] + 的",examples:[
            {zh:"我是在北京学的中文。",py:"Wǒ shì zài Běi jīng xué de zhōng wén.",vi:"Tôi học tiếng Trung ở Bắc Kinh (nhấn mạnh nơi)."},
            {zh:"他是坐飞机来的。",py:"Tā shì zuò fēi jī lái de.",vi:"Anh ấy đến bằng máy bay (nhấn mạnh cách)."}
        ]},
        {title:"...吗？ (ma)",desc:"Câu hỏi Yes/No",structure:"陈述句 + 吗？",examples:[
            {zh:"你是学生吗？",py:"Nǐ shì xué shēng ma?",vi:"Bạn là học sinh à?"},
            {zh:"你喜欢中国菜吗？",py:"Nǐ xǐ huān Zhōng guó cài ma?",vi:"Bạn thích món Trung không?"}
        ]},
        {title:"不 / 没 (bù / méi)",desc:"Phủ định",structure:"不 + động từ/tính từ (hiện tại/tương lai) | 没 + động từ (quá khứ)",examples:[
            {zh:"我不喜欢吃辣。",py:"Wǒ bù xǐ huān chī là.",vi:"Tôi không thích ăn cay."},
            {zh:"他没去学校。",py:"Tā méi qù xué xiào.",vi:"Anh ấy không đi học."}
        ]},
        {title:"在 (zài)",desc:"Đang (tiến hành)",structure:"主语 + 在 + 动词",examples:[
            {zh:"我在吃饭。",py:"Wǒ zài chī fàn.",vi:"Tôi đang ăn cơm."},
            {zh:"她在看书。",py:"Tā zài kàn shū.",vi:"Cô ấy đang đọc sách."}
        ]},
    ],
    2: [
        {title:"比 (bǐ)",desc:"So sánh hơn",structure:"A + 比 + B + tính từ",examples:[
            {zh:"今天比昨天冷。",py:"Jīn tiān bǐ zuó tiān lěng.",vi:"Hôm nay lạnh hơn hôm qua."},
            {zh:"他比我高。",py:"Tā bǐ wǒ gāo.",vi:"Anh ấy cao hơn tôi."}
        ]},
        {title:"虽然...但是... (suīrán...dànshì)",desc:"Mặc dù...nhưng...",structure:"虽然 + mệnh đề 1，但是 + mệnh đề 2",examples:[
            {zh:"虽然很累，但是很开心。",py:"Suī rán hěn lèi, dàn shì hěn kāi xīn.",vi:"Mặc dù rất mệt, nhưng rất vui."},
        ]},
        {title:"因为...所以... (yīnwèi...suǒyǐ)",desc:"Vì...nên...",structure:"因为 + nguyên nhân，所以 + kết quả",examples:[
            {zh:"因为下雨，所以我没去。",py:"Yīn wèi xià yǔ, suǒ yǐ wǒ méi qù.",vi:"Vì trời mưa nên tôi không đi."},
        ]},
    ],
    3: [
        {title:"把 (bǎ)",desc:"Cấu trúc BÃ - nhấn mạnh tác động lên đối tượng",structure:"主语 + 把 + 宾语 + 动词 + 补语",examples:[
            {zh:"请把门关上。",py:"Qǐng bǎ mén guān shàng.",vi:"Xin hãy đóng cửa lại."},
            {zh:"他把作业做完了。",py:"Tā bǎ zuò yè zuò wán le.",vi:"Anh ấy đã làm xong bài tập."}
        ]},
        {title:"被 (bèi)",desc:"Câu bị động",structure:"主语 + 被 + (tác nhân) + 动词",examples:[
            {zh:"我的手机被偷了。",py:"Wǒ de shǒu jī bèi tōu le.",vi:"Điện thoại tôi bị trộm rồi."},
            {zh:"蛋糕被他吃了。",py:"Dàn gāo bèi tā chī le.",vi:"Bánh bị anh ấy ăn rồi."}
        ]},
    ],
    4: [
        {title:"不但...而且... (búdàn...érqiě)",desc:"Không những...mà còn...",structure:"不但 + A，而且 + B",examples:[
            {zh:"他不但会说中文，而且会说日文。",py:"Tā bú dàn huì shuō zhōng wén, ér qiě huì shuō rì wén.",vi:"Anh ấy không những nói tiếng Trung mà còn nói tiếng Nhật."}
        ]},
        {title:"越...越... (yuè...yuè...)",desc:"Càng...càng...",structure:"越 + A + 越 + B",examples:[
            {zh:"天气越来越冷了。",py:"Tiān qì yuè lái yuè lěng le.",vi:"Thời tiết ngày càng lạnh."},
            {zh:"我越学越喜欢中文。",py:"Wǒ yuè xué yuè xǐ huān zhōng wén.",vi:"Tôi càng học càng thích tiếng Trung."}
        ]},
    ],
    5: [
        {title:"与其...不如... (yǔqí...bùrú...)",desc:"Thà...còn hơn...",structure:"与其 + A，不如 + B",examples:[
            {zh:"与其浪费时间，不如好好学习。",py:"Yǔ qí làng fèi shí jiān, bù rú hǎo hǎo xué xí.",vi:"Thà dành thời gian học tập còn hơn lãng phí."}
        ]},
        {title:"无论...都... (wúlùn...dōu...)",desc:"Bất luận...đều...",structure:"无论 + điều kiện，都 + kết quả",examples:[
            {zh:"无论多难，我都不会放弃。",py:"Wú lùn duō nán, wǒ dōu bú huì fàng qì.",vi:"Bất luận khó thế nào, tôi đều không bỏ cuộc."}
        ]},
    ]
};

// Align the guided examples with the first level where the 2025 syllabus introduces them.
GRAMMAR_DATA[3].push(...GRAMMAR_DATA[4]);
GRAMMAR_DATA[4] = [GRAMMAR_DATA[5][1]];
GRAMMAR_DATA[5] = [
    {title:"哪怕...也... (nǎpà...yě...)",desc:"Dù cho...vẫn...",structure:"哪怕 + điều kiện giả định，也 + kết quả",examples:[
        {zh:"哪怕下雨，我们也要按时出发。",py:"Nǎpà xià yǔ, wǒmen yě yào ànshí chūfā.",vi:"Dù trời mưa, chúng tôi vẫn phải xuất phát đúng giờ."}
    ]},
    {title:"不但不...反而... (búdàn bù...fǎn'ér...)",desc:"Không những không...mà trái lại...",structure:"不但不/没有 + A，反而 + B",examples:[
        {zh:"他不但没有放弃，反而更加努力了。",py:"Tā búdàn méiyǒu fàngqì, fǎn'ér gèngjiā nǔlì le.",vi:"Anh ấy không những không bỏ cuộc mà còn nỗ lực hơn."}
    ]}
];
GRAMMAR_DATA[6] = [
{title:'既然...就...',desc:'Nêu tiền đề đã rõ để dẫn tới kết luận hợp lý',structure:'既然 + tiền đề，就 + kết luận',examples:[{zh:'既然决定了，就应该坚持到底。',py:'Jìrán juédìng le, jiù yīnggāi jiānchí dàodǐ.',vi:'Đã quyết định rồi thì nên kiên trì đến cùng.'}]},
{title:'之所以...是因为...',desc:'Nhấn mạnh nguyên nhân của một kết quả',structure:'之所以 + kết quả，是因为 + nguyên nhân',examples:[{zh:'他之所以进步快，是因为每天都复习。',py:'Tā zhīsuǒyǐ jìnbù kuài, shì yīnwèi měitiān dōu fùxí.',vi:'Anh ấy tiến bộ nhanh là vì ngày nào cũng ôn tập.'}]},
{title:'与其...不如...',desc:'So sánh hai lựa chọn và đề xuất phương án tốt hơn',structure:'与其 + A，不如 + B',examples:[{zh:'与其担心结果，不如认真准备。',py:'Yǔqí dānxīn jiéguǒ, bùrú rènzhēn zhǔnbèi.',vi:'Thay vì lo kết quả, chi bằng chuẩn bị nghiêm túc.'}]}
];
GRAMMAR_DATA[7] = [
{title:'无论如何...',desc:'Khẳng định lập trường không thay đổi trước mọi điều kiện',structure:'无论如何 + kết luận',examples:[{zh:'无论如何，我们都要尊重事实。',py:'Wúlùn rúhé, wǒmen dōu yào zūnzhòng shìshí.',vi:'Dù thế nào, chúng ta cũng phải tôn trọng sự thật.'}]},
{title:'就...而言',desc:'Giới hạn phạm vi của nhận xét hoặc lập luận',structure:'就 + phạm vi + 而言',examples:[{zh:'就目前的数据而言，这个结论还需要验证。',py:'Jiù mùqián de shùjù ér yán, zhège jiélùn hái xūyào yànzhèng.',vi:'Xét theo dữ liệu hiện tại, kết luận này vẫn cần được kiểm chứng.'}]},
{title:'毋庸置疑',desc:'Khẳng định điều không cần nghi ngờ trong văn phong trang trọng',structure:'毋庸置疑，+ nhận định',examples:[{zh:'毋庸置疑，技术进步改变了我们的生活。',py:'Wúyōng zhìyí, jìshù jìnbù gǎibiàn le wǒmen de shēnghuó.',vi:'Không thể nghi ngờ rằng tiến bộ công nghệ đã thay đổi cuộc sống.'}]}
];

const HSK_LEVELS = [1,2,3,4,5,6,7];
function levelLabel(level) { return level === 7 ? 'HSK 7-9' : 'HSK ' + level; }

const DAILY_SENTENCES = [
    {zh:"千里之行，始于足下。",py:"Qiān lǐ zhī xíng, shǐ yú zú xià.",vi:"Hành trình ngàn dặm bắt đầu từ một bước chân."},
    {zh:"学而不思则罔，思而不学则殆。",py:"Xué ér bù sī zé wǎng, sī ér bù xué zé dài.",vi:"Học mà không suy nghĩ thì uổng, nghĩ mà không học thì nguy."},
    {zh:"有志者事竟成。",py:"Yǒu zhì zhě shì jìng chéng.",vi:"Có chí thì nên."},
    {zh:"活到老，学到老。",py:"Huó dào lǎo, xué dào lǎo.",vi:"Sống đến già, học đến già."},
    {zh:"书山有路勤为径。",py:"Shū shān yǒu lù qín wéi jìng.",vi:"Núi sách có đường, siêng năng là lối."},
    {zh:"知识就是力量。",py:"Zhī shi jiù shì lì liàng.",vi:"Kiến thức là sức mạnh."},
    {zh:"熟能生巧。",py:"Shú néng shēng qiǎo.",vi:"Quen tay hay việc."},
];

// ==================== STATE ====================
let currentLevel = 1;
let currentCategory = 'all';
const LEARNED_ENTRY_PREFIX = 'hsk3-2025:';
let learned = readStoredObject('hsk_learned');
const vocabularyCacheByLevel = new Map();
let fcIndex = 0;
let fcFlipped = false;
let fcWords = [];
let quizQuestions = [];
let quizCurrent = 0;
let quizScore = 0;
let quizAnswered = false;
let quizMode = 'meaning';
let pronunciationWords = [], pronunciationIndex = 0, pronunciationScore = 0;
let recognition = null, isListening = false;
let currentSpeechAudio = null;
let chineseVoice = null;
let writingCharacters = [], writingCharIndex = 0, writingMode = 'watch', hanziWriter = null, allWritingCharactersCache = null, writingPinyinByCharCache = null;
let writingStrokeLoopEnabled = false, writingStrokeLoopTimer = null, writingStrokeLoopRunId = 0, writingStrokeLoopPlayCount = 0;
let currentLessonIndex = 0;
let vocabVisibleLimit = 120;
let grammarCategory = 'all';
let grammarSearch = '';
let grammarVisibleLimit = 60;
let lastFocusedElement = null;

// ==================== UTILITIES ====================
function readStoredObject(key) {
    try {
        const value = JSON.parse(localStorage.getItem(key) || '{}');
        return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
    } catch {
        return {};
    }
}

function getCuratedWords(level) {
    const words = [];
    const cats = HSK_DATA[level].categories;
    for (const cat in cats) cats[cat].forEach(word => words.push({...word, category: cat}));
    return words;
}

function normalizeHSKWordKey(hanzi) {
    return (hanzi || '').replace(/[（(][^）)]*[）)]/g, '').split(/[｜|]/)[0].replace(/\s/g, '');
}

function createVocabularyEntryId(level, number) {
    return LEARNED_ENTRY_PREFIX + level + ':' + number;
}

function getWordProgressKey(word) {
    if (word?.entryId) return word.entryId;
    return createVocabularyEntryId(Number(word?.level || currentLevel), Number(word?.number || 0));
}

function isWordLearned(word) {
    return !!learned[getWordProgressKey(word)];
}

function invalidateVocabularyCache(level) {
    if (Number.isFinite(Number(level))) vocabularyCacheByLevel.delete(Number(level));
    else vocabularyCacheByLevel.clear();
    allWritingCharactersCache = null;
    writingPinyinByCharCache = null;
}

let coreExampleMap = null;
function getCoreWordExamples(level, hanzi) {
    if (!coreExampleMap) coreExampleMap = new Map((window.HSK30_CORE_EXAMPLES || []).map(item => [`${item.level}|${normalizeHSKWordKey(item.hanzi)}`, item.examples]));
    return coreExampleMap.get(`${level}|${normalizeHSKWordKey(hanzi)}`) || [];
}

function getAllWords(level) {
    const numericLevel = Number(level);
    if (vocabularyCacheByLevel.has(numericLevel)) return vocabularyCacheByLevel.get(numericLevel);
    const curated = getCuratedWords(numericLevel);
    const curatedByKey = new Map(curated.map(word => [normalizeHSKWordKey(word.hanzi), word]));
    const syllabus2025 = (window.HSK30_2025_DATA || []).filter(item => item.level === numericLevel);
    const advanced = (window.HSK30_ADVANCED_DATA || []).filter(item => item.level === numericLevel);
    const source = syllabus2025.length ? syllabus2025 : (advanced.length ? advanced : (window.HSK30_FULL_DATA || []).filter(item => item.level === numericLevel));
    if (!source.length) {
        const fallback = curated.map((word, index) => ({
            ...word,
            level: numericLevel,
            number: index + 1,
            entryId: createVocabularyEntryId(numericLevel, index + 1)
        }));
        vocabularyCacheByLevel.set(numericLevel, fallback);
        return fallback;
    }
    const words = source.map((item, index) => {
        const number = Number(item.number || index + 1);
        const entryId = createVocabularyEntryId(numericLevel, number);
        const saved = curatedByKey.get(normalizeHSKWordKey(item.hanzi));
        const aiSaved = getAIContentCache()[entryId] || null;
        const generatedExamples = numericLevel <= 5 ? getCoreWordExamples(numericLevel, item.hanzi) : (item.examples || []);
        const baseExamples = saved?.example ? [saved.example, ...generatedExamples.slice(0, 2)] : generatedExamples;
        const examples = aiSaved?.examples?.length ? aiSaved.examples : baseExamples;
        return {
            ...item,
            level: numericLevel,
            number,
            entryId,
            hanzi: item.hanzi.replace(/｜/g, ' / '),
            pinyin: saved?.pinyin || item.pinyin,
            meaning: aiSaved?.meaning || saved?.meaning || item.meaning,
            example: saved?.example,
            examples,
            category: saved?.category || 'Đề cương HSK 3.0 (2025)'
        };
    });
    vocabularyCacheByLevel.set(numericLevel, words);
    return words;
}

function migrateLegacyLearnedEntries() {
    const allWords = HSK_LEVELS.flatMap(level => getAllWords(level));
    const lowestEntryByLegacyKey = new Map();
    allWords.forEach(word => {
        [word.hanzi, getSpeakableHanzi(word.hanzi)].forEach(key => {
            if (key && !lowestEntryByLegacyKey.has(key)) lowestEntryByLegacyKey.set(key, word);
        });
    });

    const migrated = {};
    let changed = false;
    Object.entries(learned).forEach(([key, value]) => {
        if (!value) { changed = true; return; }
        if (key.startsWith(LEARNED_ENTRY_PREFIX)) {
            migrated[key] = true;
            return;
        }
        const word = lowestEntryByLegacyKey.get(key) || lowestEntryByLegacyKey.get(getSpeakableHanzi(key));
        if (word) migrated[getWordProgressKey(word)] = true;
        changed = true;
    });
    learned = migrated;
    if (changed) localStorage.setItem('hsk_learned', JSON.stringify(learned));
}
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function normalizeSearchText(value) {
    return String(value || '').normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase('vi').trim();
}
function getMeaningSearchScore(meaning, normalizedQuery) {
    const senses = normalizeSearchText(meaning).split(/[;,/|]/).map(sense => sense.trim()).filter(Boolean);
    if (senses.some(sense => sense === normalizedQuery)) return 4;
    if (normalizedQuery.length >= 4 && senses.some(sense => sense.startsWith(normalizedQuery))) return 3;
    return 0;
}
function meaningMatchesSearch(meaning, normalizedQuery) {
    return getMeaningSearchScore(meaning, normalizedQuery) > 0;
}
function getWordSearchScore(word, normalizedQuery) {
    if (!normalizedQuery) return 1;
    const hanzi = normalizeSearchText(word.hanzi);
    const pinyin = normalizeSearchText(word.pinyin);
    const compactPinyin = pinyin.replace(/[^a-zv0-9]/g, '');
    const compactQuery = normalizedQuery.replace(/[^a-zv0-9]/g, '');
    const pinyinTokens = pinyin.split(/[^a-zv0-9]+/).filter(Boolean);
    let score = 0;
    if (hanzi === normalizedQuery) score = 4;
    else if (hanzi.startsWith(normalizedQuery)) score = 3;
    else if (hanzi.includes(normalizedQuery)) score = 2;
    if (compactQuery && compactPinyin === compactQuery) score = Math.max(score, 4);
    else if (compactQuery && compactPinyin.startsWith(compactQuery)) score = Math.max(score, 3);
    else if (pinyinTokens.some(token => token.startsWith(normalizedQuery))) score = Math.max(score, 2);
    return Math.max(score, getMeaningSearchScore(word.meaning, normalizedQuery));
}
function wordMatchesSearch(word, normalizedQuery) {
    return getWordSearchScore(word, normalizedQuery) > 0;
}
function getAllHSKWords() {
    return HSK_LEVELS.flatMap(level => getAllWords(level));
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
}

function findChineseVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    return voices.find(voice => /^zh[-_]CN$/i.test(voice.lang)) || voices.find(voice => /^zh/i.test(voice.lang)) || null;
}
function setAudioFeedback(message, type = 'neutral', feedbackId = '') {
    const feedback = feedbackId && document.getElementById(feedbackId);
    if (feedback) { feedback.className = `practice-feedback ${type}`; feedback.textContent = message; }
}
function stopSpeechPlayback() {
    if (currentSpeechAudio) {
        try { currentSpeechAudio.pause(); } catch {}
        currentSpeechAudio = null;
    }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}
function getChineseAudioUrls(text) {
    const encoded = encodeURIComponent(getSpeakableHanzi(text));
    const urls = [];
    const configuredEndpoint = String(window.HSK_TTS_ENDPOINT || '').trim();
    if (configuredEndpoint) urls.push(`${configuredEndpoint}${configuredEndpoint.includes('?') ? '&' : '?'}text=${encoded}`);
    if (['localhost', '127.0.0.1'].includes(window.location.hostname)) urls.push(`http://127.0.0.1:4174/tts?text=${encoded}`);
    urls.push(
        `https://fanyi.baidu.com/gettts?lan=zh&text=${encoded}&spd=5&source=web`,
        `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=zh-CN&q=${encoded}`
    );
    return [...new Set(urls)];
}
function showPronunciationAudioPlayer(text, feedbackId, urls = getChineseAudioUrls(text)) {
    const feedback = feedbackId && document.getElementById(feedbackId);
    if (!feedback) return;
    feedback.className = 'practice-feedback neutral';
    feedback.innerHTML = '<div class="audio-fallback-copy">Trình duyệt không thể tự phát. Hãy nhấn ▶ trong trình phát bên dưới.</div><audio class="pronunciation-audio-fallback" controls preload="metadata"></audio>';
    const audio = feedback.querySelector('audio');
    let sourceIndex = 0;
    const loadSource = () => { audio.src = urls[sourceIndex]; audio.load(); };
    audio.addEventListener('error', () => {
        if (sourceIndex < urls.length - 1) { sourceIndex++; loadSource(); return; }
        feedback.className = 'practice-feedback wrong';
        feedback.querySelector('.audio-fallback-copy').textContent = 'Không tải được âm mẫu. Hãy kiểm tra kết nối mạng hoặc thử trên Chrome/Edge.';
    });
    audio.addEventListener('play', () => { currentSpeechAudio = audio; });
    audio.addEventListener('ended', () => { currentSpeechAudio = null; });
    loadSource();
}
function playOnlineChineseAudio(text, feedbackId = '') {
    stopSpeechPlayback();
    const urls = getChineseAudioUrls(text);
    let sourceIndex = 0;
    const audio = new Audio(urls[sourceIndex]); currentSpeechAudio = audio;
    audio.onplay = () => setAudioFeedback('🔊 Đang phát âm mẫu. Hãy nghe và đọc theo.', 'neutral', feedbackId);
    audio.onended = () => { currentSpeechAudio = null; setAudioFeedback('Đã phát xong. Hãy đọc lại từ trên.', 'neutral', feedbackId); };
    audio.onerror = () => {
        if (sourceIndex < urls.length - 1) { sourceIndex++; audio.src = urls[sourceIndex]; audio.load(); audio.play().catch(() => showPronunciationAudioPlayer(text, feedbackId, urls)); return; }
        currentSpeechAudio = null; showPronunciationAudioPlayer(text, feedbackId, urls);
    };
    audio.play().catch(() => { currentSpeechAudio = null; showPronunciationAudioPlayer(text, feedbackId, urls); });
}
function speak(text, feedbackId = '') {
    const spokenText = getSpeakableHanzi(text);
    if (!spokenText) return;
    stopSpeechPlayback();
    if (!('speechSynthesis' in window)) { playOnlineChineseAudio(spokenText, feedbackId); return; }
    chineseVoice = findChineseVoice();
    if (!chineseVoice) { playOnlineChineseAudio(spokenText, feedbackId); return; }
    const utterance = new SpeechSynthesisUtterance(spokenText);
    utterance.lang = chineseVoice.lang || 'zh-CN'; utterance.voice = chineseVoice; utterance.rate = 0.78; utterance.pitch = 1;
    utterance.onstart = () => setAudioFeedback(`🔊 Đang phát bằng giọng ${chineseVoice.name}.`, 'neutral', feedbackId);
    utterance.onend = () => setAudioFeedback('Đã phát xong. Hãy đọc lại và so sánh thanh điệu.', 'neutral', feedbackId);
    utterance.onerror = () => playOnlineChineseAudio(spokenText, feedbackId);
    window.speechSynthesis.speak(utterance);
}
if ('speechSynthesis' in window) window.speechSynthesis.addEventListener('voiceschanged', () => { chineseVoice = findChineseVoice(); });
function updateStats() {
    const wordsByLevel = new Map(HSK_LEVELS.map(level => [level, getAllWords(level)]));
    const total = [...wordsByLevel.values()].flat().filter(isWordLearned).length;
    document.getElementById('learnedCount').textContent = total;

    // Update progress bars
    for (const lv of HSK_LEVELS) {
        const words = wordsByLevel.get(lv);
        const done = words.filter(isWordLearned).length;
        const pct = words.length > 0 ? (done / words.length * 100) : 0;
        const el = document.getElementById('prog' + lv);
        if (el) {
            el.style.width = pct + '%';
            el.setAttribute('role', 'progressbar');
            el.setAttribute('aria-valuemin', '0');
            el.setAttribute('aria-valuemax', '100');
            el.setAttribute('aria-valuenow', String(Math.round(pct)));
        }
    }

    // Streak
    const today = new Date().toDateString();
    let streak = parseInt(localStorage.getItem('hsk_streak') || '0');
    const lastDay = localStorage.getItem('hsk_lastDay');
    if (lastDay !== today && total > 0) {
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        streak = (lastDay === yesterday) ? streak + 1 : 1;
        localStorage.setItem('hsk_streak', streak);
        localStorage.setItem('hsk_lastDay', today);
    }
    document.getElementById('streakCount').textContent = streak;
    window.renderLearningDashboard?.();
}

// ==================== NAVIGATION ====================
function showPage(page) {
    const target = document.getElementById('page-' + page);
    if (!target) return;
    if (page !== 'writing') stopWritingStrokeLoop();
    const nextHash = '#' + page;
    if (window.location.hash !== nextHash && window.history?.pushState) window.history.pushState({page}, '', nextHash);
    document.querySelectorAll('.page').forEach(section => { section.classList.remove('active'); section.setAttribute('aria-hidden', 'true'); });
    document.querySelectorAll('.nav-btn').forEach(button => { button.classList.remove('active'); button.removeAttribute('aria-current'); });
    target.classList.add('active');
    target.setAttribute('aria-hidden', 'false');
    const navBtns = document.querySelectorAll('.nav-btn');
    const idx = {home:0, study:1, flashcard:2, quiz:3, writing:4, pronunciation:5, roadmap:6, grammar:7}[page];
    if (navBtns[idx]) { navBtns[idx].classList.add('active'); navBtns[idx].setAttribute('aria-current', 'page'); }
    document.querySelectorAll('.side-link[data-page]').forEach(button => {
        const active = button.dataset.page === page;
        button.classList.toggle('active', active);
        if (active) button.setAttribute('aria-current','page'); else button.removeAttribute('aria-current');
    });
    if (window.innerWidth <= 980) window.toggleAppSidebar?.(false);
    if (page === 'study') renderStudyPage();
    if (page === 'flashcard') renderFlashcardPage();
    if (page === 'quiz') renderQuizPage();
    if (page === 'writing') renderWritingPage();
    if (page === 'pronunciation') renderPronunciationPage();
    if (page === 'roadmap') renderRoadmapPage();
    if (page === 'grammar') renderGrammarPage();
    if (page === 'home') window.renderLearningDashboard?.();
    if (page === 'listening') window.renderListeningPage?.();
    if (page === 'translation') window.renderTranslationPage?.();

    window.scrollTo(0, 0);
}
function startStudy(level) {
    currentLevel = level;
    currentCategory = 'all';
    showPage('study');
}

// ==================== STUDY PAGE ====================
function renderStudyPage() {
    document.getElementById('studyTitle').textContent = `📖 Từ vựng ${HSK_DATA[currentLevel].name}`;

    // Category tabs
    const cats = [...new Set(getAllWords(currentLevel).map(word => word.category))];
    const totalWords = getAllWords(currentLevel).length;
    document.getElementById('studyTitle').textContent = `📖 Từ vựng đề cương 2025 ${HSK_DATA[currentLevel].name} (${totalWords.toLocaleString('vi-VN')} mục)`;
    let tabsHtml = `<button class="cat-tab ${currentCategory === 'all' ? 'active' : ''}" onclick="setCategory('all')">Tất cả</button>`;
    cats.forEach(c => {
        tabsHtml += `<button class="cat-tab ${currentCategory === c ? 'active' : ''}" onclick="setCategory('${c}')">${c}</button>`;
    });
    document.getElementById('categoryTabs').innerHTML = tabsHtml;

    renderVocabGrid();
}

function setCategory(cat) {
    currentCategory = cat;
    vocabVisibleLimit = 120;
    renderStudyPage();
}

function filterVocab() {
    vocabVisibleLimit = 120;
    renderVocabGrid();
}

function getSpeakableHanzi(text) {
    return (text || '').split(/[\/｜|、]/)[0].replace(/[（(][^）)]*[）)]/g, '').trim();
}
function getSpeakablePinyin(text) {
    return (text || '').split(/[\/｜|、]/)[0].replace(/[（(][^）)]*[）)]/g, '').trim();
}

function loadMoreVocab() {
    vocabVisibleLimit += 120;
    renderVocabGrid();
}

function renderVocabGrid() {
    const rawSearch = document.getElementById('searchInput').value.trim();
    const search = normalizeSearchText(rawSearch);
    const searchingAllLevels = Boolean(search);
    let words = searchingAllLevels ? getAllHSKWords() : getAllWords(currentLevel);
    if (!searchingAllLevels && currentCategory !== 'all') words = words.filter(word => word.category === currentCategory);
    if (searchingAllLevels) words = words.filter(word => wordMatchesSearch(word, search));
    const grid = document.getElementById('vocabGrid');
    if (words.length === 0) {
        grid.innerHTML = `<div class="empty-state vocab-full-row"><div class="emoji">🔍</div><h3>Không tìm thấy trong HSK 1–9</h3><p>Hãy thử chữ Hán, pinyin không dấu hoặc một nghĩa tiếng Việt khác.</p></div>`;
        return;
    }
    const visibleWords = words.slice(0, vocabVisibleLimit);
    const scope = searchingAllLevels ? 'Tất cả HSK 1–9' : levelLabel(currentLevel);
    let html = `<div class="vocab-results-meta vocab-full-row"><span>Hiển thị <strong>${visibleWords.length.toLocaleString('vi-VN')}</strong> / ${words.length.toLocaleString('vi-VN')} từ · ${scope}</span>${searchingAllLevels ? `<span>Kết quả cho “${escapeHtml(rawSearch)}”</span>` : ''}</div>`;
    visibleWords.forEach(word => {
        const isLearned = isWordLearned(word);
        const encoded = encodeURIComponent(JSON.stringify(word)).replace(/'/g, '%27');
        const spoken = getSpeakableHanzi(word.hanzi).replace(/'/g, '');
        html += `<article class="vocab-card ${isLearned ? 'learned' : ''}" role="button" tabindex="0" onkeydown="if(event.target===this&&(event.key==='Enter'||event.key===' ')){event.preventDefault();this.click()}" onclick="openModal('${encoded}')">${searchingAllLevels ? `<span class="vocab-level-tag">${levelLabel(word.level)}</span>` : ''}<div class="vocab-hanzi">${word.hanzi}</div><div class="vocab-pinyin">${word.pinyin}</div><div class="vocab-meaning">${word.meaning}</div><div class="vocab-actions"><button class="vocab-action-btn btn-speak" onclick="event.stopPropagation();speak('${spoken}')" aria-label="Nghe phát âm ${spoken}">🔊</button><button class="vocab-action-btn btn-learn ${isLearned ? 'done' : ''}" onclick="event.stopPropagation();toggleLearn('${word.entryId}','${encodeURIComponent(word.hanzi).replace(/'/g, '%27')}')" aria-label="${isLearned ? 'Bỏ đánh dấu' : 'Đánh dấu đã học'} ${spoken}">${isLearned ? '✅' : '📌'}</button></div></article>`;
    });
    if (visibleWords.length < words.length) html += `<div class="vocab-full-row load-more-wrap"><button class="load-more-btn" onclick="loadMoreVocab()">Xem thêm ${Math.min(120, words.length - visibleWords.length)} từ ↓</button></div>`;
    grid.innerHTML = html;
}
function toggleLearn(entryId, encodedHanzi = '') {
    const hanzi = encodedHanzi ? decodeURIComponent(encodedHanzi) : entryId;
    if (learned[entryId]) {
        delete learned[entryId];
        showToast('❌ Đã bỏ đánh dấu: ' + hanzi);
    } else {
        learned[entryId] = true;
        showToast('✅ Đã học: ' + hanzi);
    }
    localStorage.setItem('hsk_learned', JSON.stringify(learned));
    updateStats();
    renderVocabGrid();
}

// ==================== MODAL ====================
const DAILY_EXAMPLE_OVERRIDES = {
    '的':[{zh:'这是我的书。',py:'Zhè shì wǒ de shū.',vi:'Đây là sách của tôi.'},{zh:'你喜欢红的还是蓝的？',py:'Nǐ xǐhuan hóng de háishi lán de?',vi:'Bạn thích cái màu đỏ hay màu xanh?'},{zh:'这是我昨天买的。',py:'Zhè shì wǒ zuótiān mǎi de.',vi:'Đây là thứ tôi mua hôm qua.'}],
    '了':[{zh:'我吃饭了。',py:'Wǒ chīfàn le.',vi:'Tôi ăn cơm rồi.'},{zh:'天冷了。',py:'Tiān lěng le.',vi:'Trời lạnh rồi.'},{zh:'我到家了。',py:'Wǒ dào jiā le.',vi:'Tôi về đến nhà rồi.'}],
    '在':[{zh:'我在家。',py:'Wǒ zài jiā.',vi:'Tôi đang ở nhà.'},{zh:'他在看书。',py:'Tā zài kàn shū.',vi:'Anh ấy đang đọc sách.'},{zh:'你在哪儿工作？',py:'Nǐ zài nǎr gōngzuò?',vi:'Bạn làm việc ở đâu?'}],
    '是':[{zh:'我是越南人。',py:'Wǒ shì Yuènán rén.',vi:'Tôi là người Việt Nam.'},{zh:'今天是星期一。',py:'Jīntiān shì xīngqīyī.',vi:'Hôm nay là thứ Hai.'},{zh:'这是你的手机吗？',py:'Zhè shì nǐ de shǒujī ma?',vi:'Đây có phải điện thoại của bạn không?'}],
    '有':[{zh:'我有时间。',py:'Wǒ yǒu shíjiān.',vi:'Tôi có thời gian.'},{zh:'附近有超市吗？',py:'Fùjìn yǒu chāoshì ma?',vi:'Gần đây có siêu thị không?'},{zh:'你有问题吗？',py:'Nǐ yǒu wèntí ma?',vi:'Bạn có câu hỏi không?'}],
    '不':[{zh:'我不喝咖啡。',py:'Wǒ bù hē kāfēi.',vi:'Tôi không uống cà phê.'},{zh:'今天不冷。',py:'Jīntiān bù lěng.',vi:'Hôm nay không lạnh.'},{zh:'别担心，不会有事的。',py:'Bié dānxīn, bú huì yǒu shì de.',vi:'Đừng lo, sẽ không sao đâu.'}],
    '和':[{zh:'我和朋友去吃饭。',py:'Wǒ hé péngyou qù chīfàn.',vi:'Tôi đi ăn cùng bạn.'},{zh:'茶和咖啡，你要哪个？',py:'Chá hé kāfēi, nǐ yào nǎge?',vi:'Trà và cà phê, bạn muốn loại nào?'},{zh:'我想和你谈谈。',py:'Wǒ xiǎng hé nǐ tántan.',vi:'Tôi muốn nói chuyện với bạn.'}],
    '也':[{zh:'我也喜欢中文。',py:'Wǒ yě xǐhuan Zhōngwén.',vi:'Tôi cũng thích tiếng Trung.'},{zh:'他会说英语，也会说汉语。',py:'Tā huì shuō Yīngyǔ, yě huì shuō Hànyǔ.',vi:'Anh ấy biết nói tiếng Anh và cũng biết nói tiếng Trung.'},{zh:'明天我也去。',py:'Míngtiān wǒ yě qù.',vi:'Ngày mai tôi cũng đi.'}],
    '会':[{zh:'我会说一点儿中文。',py:'Wǒ huì shuō yìdiǎnr Zhōngwén.',vi:'Tôi biết nói một chút tiếng Trung.'},{zh:'明天会下雨吗？',py:'Míngtiān huì xiàyǔ ma?',vi:'Ngày mai trời có mưa không?'},{zh:'我不会开车。',py:'Wǒ bú huì kāichē.',vi:'Tôi không biết lái xe.'}],
    '要':[{zh:'我要一杯茶。',py:'Wǒ yào yì bēi chá.',vi:'Tôi muốn một cốc trà.'},{zh:'你要去哪儿？',py:'Nǐ yào qù nǎr?',vi:'Bạn muốn đi đâu?'},{zh:'明天要上班。',py:'Míngtiān yào shàngbān.',vi:'Ngày mai phải đi làm.'}],
    '很':[{zh:'今天天气很好。',py:'Jīntiān tiānqì hěn hǎo.',vi:'Thời tiết hôm nay rất đẹp.'},{zh:'我很喜欢这家饭店。',py:'Wǒ hěn xǐhuan zhè jiā fàndiàn.',vi:'Tôi rất thích nhà hàng này.'},{zh:'认识你很高兴。',py:'Rènshi nǐ hěn gāoxìng.',vi:'Rất vui được biết bạn.'}],
    '去':[{zh:'我去上班。',py:'Wǒ qù shàngbān.',vi:'Tôi đi làm.'},{zh:'周末我们去看电影吧。',py:'Zhōumò wǒmen qù kàn diànyǐng ba.',vi:'Cuối tuần chúng ta đi xem phim nhé.'},{zh:'你想去哪儿？',py:'Nǐ xiǎng qù nǎr?',vi:'Bạn muốn đi đâu?'}],
    '来':[{zh:'欢迎你来我家。',py:'Huānyíng nǐ lái wǒ jiā.',vi:'Hoan nghênh bạn đến nhà tôi.'},{zh:'他明天来公司。',py:'Tā míngtiān lái gōngsī.',vi:'Ngày mai anh ấy đến công ty.'},{zh:'请进来坐吧。',py:'Qǐng jìnlái zuò ba.',vi:'Mời vào ngồi.'}],
    '想':[{zh:'我想喝水。',py:'Wǒ xiǎng hē shuǐ.',vi:'Tôi muốn uống nước.'},{zh:'你在想什么？',py:'Nǐ zài xiǎng shénme?',vi:'Bạn đang nghĩ gì?'},{zh:'我很想家。',py:'Wǒ hěn xiǎng jiā.',vi:'Tôi rất nhớ nhà.'}]
};

function buildDailyExampleCandidates(word) {
    const hanzi = getSpeakableHanzi(word.hanzi), pinyin = word.pinyin || hanzi;
    const meaning = word.meaning || 'từ này', shortMeaning = meaning.split(/[;,]/)[0].trim().toLocaleLowerCase('vi');
    const signal = `${hanzi} ${meaning}`.toLocaleLowerCase('vi');
    if (/(茶|咖啡|水|牛奶|饮料|奶茶|trà|cà phê|nước|sữa|đồ uống)/.test(signal)) return [
        {zh:`我想喝${hanzi}。`,py:`Wǒ xiǎng hē ${pinyin}.`,vi:`Tôi muốn uống ${shortMeaning}.`},
        {zh:`请给我一杯${hanzi}。`,py:`Qǐng gěi wǒ yì bēi ${pinyin}.`,vi:`Vui lòng cho tôi một cốc ${shortMeaning}.`},
        {zh:`你喜欢喝${hanzi}吗？`,py:`Nǐ xǐhuan hē ${pinyin} ma?`,vi:`Bạn có thích uống ${shortMeaning} không?`}
    ];
    if (/(饭|菜|果|面包|饺子|包子|鸡蛋|đồ ăn|thức ăn|trái cây|hoa quả)/.test(signal)) return [
        {zh:`我想吃点儿${hanzi}。`,py:`Wǒ xiǎng chī diǎnr ${pinyin}.`,vi:`Tôi muốn dùng một chút ${shortMeaning}.`},
        {zh:`你喜欢${hanzi}吗？`,py:`Nǐ xǐhuan ${pinyin} ma?`,vi:`Bạn có thích ${shortMeaning} không?`},
        {zh:`这个${hanzi}很好吃。`,py:`Zhège ${pinyin} hěn hǎochī.`,vi:`Món ${shortMeaning} này rất ngon.`}
    ];
    if (/(学校|医院|商店|饭店|公司|车站|机场|公园|图书馆|电影院|超市|địa điểm|trường|bệnh viện|cửa hàng|công ty|nhà ga|sân bay|công viên)/.test(signal)) return [
        {zh:`${hanzi}在哪儿？`,py:`${pinyin} zài nǎr?`,vi:`${word.meaning} ở đâu?`},
        {zh:`我们去${hanzi}吧。`,py:`Wǒmen qù ${pinyin} ba.`,vi:`Chúng ta đến ${shortMeaning} nhé.`},
        {zh:`${hanzi}离这儿远吗？`,py:`${pinyin} lí zhèr yuǎn ma?`,vi:`${word.meaning} có xa đây không?`}
    ];
    if (/(车|飞机|火车|地铁|船|公交|交通|xe|máy bay|tàu|thuyền)/.test(signal)) return [
        {zh:`我每天坐${hanzi}上班。`,py:`Wǒ měitiān zuò ${pinyin} shàngbān.`,vi:`Mỗi ngày tôi đi làm bằng ${shortMeaning}.`},
        {zh:`${hanzi}几点到？`,py:`${pinyin} jǐ diǎn dào?`,vi:`${word.meaning} mấy giờ đến?`},
        {zh:`我们坐${hanzi}去吧。`,py:`Wǒmen zuò ${pinyin} qù ba.`,vi:`Chúng ta đi bằng ${shortMeaning} nhé.`}
    ];
    if (/(爸爸|妈妈|哥哥|姐姐|弟弟|妹妹|老师|同学|朋友|医生|学生|经理|người|bố|mẹ|anh|chị|em|giáo viên|bạn|bác sĩ|học sinh)/.test(signal)) return [
        {zh:`${hanzi}今天来吗？`,py:`${pinyin} jīntiān lái ma?`,vi:`Hôm nay ${shortMeaning} có đến không?`},
        {zh:`我跟${hanzi}一起吃饭。`,py:`Wǒ gēn ${pinyin} yìqǐ chīfàn.`,vi:`Tôi ăn cơm cùng ${shortMeaning}.`},
        {zh:`请帮我联系${hanzi}。`,py:`Qǐng bāng wǒ liánxì ${pinyin}.`,vi:`Hãy giúp tôi liên hệ với ${shortMeaning}.`}
    ];
    if (/^v/.test(word.pos || '')) return [
        {zh:`我正在${hanzi}。`,py:`Wǒ zhèngzài ${pinyin}.`,vi:`Tôi đang ${shortMeaning}.`},
        {zh:`你会${hanzi}吗？`,py:`Nǐ huì ${pinyin} ma?`,vi:`Bạn có biết ${shortMeaning} không?`},
        {zh:`我们一起${hanzi}吧。`,py:`Wǒmen yìqǐ ${pinyin} ba.`,vi:`Chúng ta cùng ${shortMeaning} nhé.`}
    ];
    if (/^a/.test(word.pos || '')) return [
        {zh:`这个很${hanzi}。`,py:`Zhège hěn ${pinyin}.`,vi:`Cái này rất ${shortMeaning}.`},
        {zh:`你觉得${hanzi}吗？`,py:`Nǐ juéde ${pinyin} ma?`,vi:`Bạn có thấy ${shortMeaning} không?`},
        {zh:`今天比昨天更${hanzi}。`,py:`Jīntiān bǐ zuótiān gèng ${pinyin}.`,vi:`Hôm nay ${shortMeaning} hơn hôm qua.`}
    ];
    if (/^n/.test(word.pos || '')) return [
        {zh:`这是我的${hanzi}。`,py:`Zhè shì wǒ de ${pinyin}.`,vi:`Đây là ${shortMeaning} của tôi.`},
        {zh:`请问，${hanzi}在哪儿？`,py:`Qǐngwèn, ${pinyin} zài nǎr?`,vi:`Xin hỏi, ${shortMeaning} ở đâu?`},
        {zh:`我需要一个${hanzi}。`,py:`Wǒ xūyào yí ge ${pinyin}.`,vi:`Tôi cần một ${shortMeaning}.`}
    ];
    return [
        {zh:`我在日常对话中听到“${hanzi}”。`,py:`Wǒ zài rìcháng duìhuà zhōng tīngdào “${pinyin}”.`,vi:`Tôi nghe thấy “${hanzi}” trong hội thoại hằng ngày.`},
        {zh:`这里可以用“${hanzi}”吗？`,py:`Zhèlǐ kěyǐ yòng “${pinyin}” ma?`,vi:`Ở đây có thể dùng “${hanzi}” không?`},
        {zh:`请再说一遍“${hanzi}”。`,py:`Qǐng zài shuō yí biàn “${pinyin}”.`,vi:`Hãy nói lại “${hanzi}” một lần nữa.`}
    ];
}

function getMeaningSenses(meaning) {
    return String(meaning || '').split(';').map(item => item.trim()).filter(Boolean).slice(0, 3);
}
function attachExampleSenses(examples, word) {
    const senses = getMeaningSenses(word.meaning);
    if (senses.length <= 1) return examples;
    return examples.map((example, index) => {
        if (example.sense) return example;
        const senseIndex = Math.min(index, senses.length - 1);
        return {...example, sense:senses[senseIndex], senseIndex:senseIndex + 1, senseCount:senses.length};
    });
}
function getVocabularyExamples(word) {
    const hanzi = getSpeakableHanzi(word.hanzi);
    const fixed = (DAILY_EXAMPLE_OVERRIDES[hanzi] || []).map(example => ({...example,sourceLabel:'Ví dụ biên tập · HSK cơ bản'}));
    if (fixed.length) return attachExampleSenses(fixed.slice(0,3), word);
    if (word.examples?.length) return attachExampleSenses(word.examples.slice(0,3), word);
    if (word.example) return attachExampleSenses([{...word.example,curated:true,sourceLabel:'Ví dụ đã biên tập'}], word);
    return [];
}
function isTemplateVocabularyExample(example) {
    return example?.sourceLabel === 'Ví dụ giao tiếp biên soạn' && /[“”]/.test(example.zh || '');
}
function getNaturalVocabularyExamples(word) {
    return getVocabularyExamples(word).filter(example => !isTemplateVocabularyExample(example));
}
function renderVocabularyExamples(word) {
    const examples = word._loadedExamples || getNaturalVocabularyExamples(word);
    if (!examples.length) return '<div class="no-verified-example">Chưa có câu ví dụ đạt tiêu chí kiểm chứng.</div>';
    return examples.map((example, index) => {
        const audio = example.zh.replace(/'/g, '');
        return `<article class="modal-example"><div class="example-head"><span>${example.sense ? `Nghĩa ${example.senseIndex || index + 1}: ${escapeHtml(example.sense)}` : (example.sourceLabel || (example.curated ? 'Ví dụ theo ngữ cảnh' : `Câu luyện ${index + 1}`))}</span><button onclick="speak('${audio}')" aria-label="Nghe câu ${index + 1}">🔊 Nghe</button></div><div class="zh">${escapeHtml(example.zh)}</div><div class="py">${escapeHtml(example.py)}</div><div class="vi">${escapeHtml(example.vi)}</div></article>`;
    }).join('');
}
const AI_CONTENT_CACHE_KEY = 'hsk_ai_content_v2';
let aiLanguageSession = null;
let aiContentCacheMemory = null;
function getAIContentCache() {
    if (aiContentCacheMemory) return aiContentCacheMemory;
    try { aiContentCacheMemory = JSON.parse(localStorage.getItem(AI_CONTENT_CACHE_KEY) || '{}'); }
    catch { aiContentCacheMemory = {}; }
    return aiContentCacheMemory;
}
function saveAIContent(wordKey, content) {
    const cache = getAIContentCache(); cache[wordKey] = content;
    const keys = Object.keys(cache); if (keys.length > 500) keys.slice(0, keys.length - 500).forEach(key => delete cache[key]);
    try { localStorage.setItem(AI_CONTENT_CACHE_KEY, JSON.stringify(cache)); } catch {}
    invalidateVocabularyCache();
    window.practiceSentenceCache?.clear();

}
async function getBrowserAISession() {
    if (aiLanguageSession) return aiLanguageSession;
    if (window.LanguageModel?.create) {
        const availability = window.LanguageModel.availability ? await window.LanguageModel.availability() : 'available';
        if (availability === 'unavailable') return null;
        aiLanguageSession = await window.LanguageModel.create({temperature:0.2,topK:3}); return aiLanguageSession;
    }
    if (window.ai?.languageModel?.create) {
        const capabilities = window.ai.languageModel.capabilities ? await window.ai.languageModel.capabilities() : {available:'readily'};
        if (capabilities.available === 'no') return null;
        aiLanguageSession = await window.ai.languageModel.create({temperature:0.2,topK:3}); return aiLanguageSession;
    }
    return null;
}
function parseAIWordContent(response, hanzi) {
    try {
        const cleaned = String(response).replace(/```(?:json)?|```/gi,'').trim();
        const start = cleaned.indexOf('{'), end = cleaned.lastIndexOf('}');
        const data = JSON.parse(cleaned.slice(start,end+1));
        const meaning = typeof data.meaning === 'string' ? data.meaning.trim() : '';
        const seen = new Set();
        const examples = (Array.isArray(data.examples) ? data.examples : []).filter(item => item && typeof item.zh === 'string' && item.zh.includes(hanzi) && item.py && item.vi)
            .filter(item => { const key=normalizeChinese(item.zh); if(seen.has(key)) return false; seen.add(key); return true; })
            .slice(0,3).map(item => ({zh:item.zh.trim(),py:item.py.trim(),vi:item.vi.trim(),sourceLabel:'Ví dụ giao tiếp do AI biên soạn'}));
        return meaning && examples.length === 3 ? {meaning,examples} : null;
    } catch { return null; }
}
async function generateAIWordContent(word) {
    const hanzi = getSpeakableHanzi(word.hanzi), cache = getAIContentCache();
    const cacheKey = getWordProgressKey(word);
    if (cache[cacheKey]?.meaning && cache[cacheKey]?.examples?.length === 3) return cache[cacheKey];
    const session = await getBrowserAISession(); if (!session) return null;
    const prompt = `Bạn là giáo viên tiếng Trung-Việt trình độ HSK. Với từ "${hanzi}" (pinyin: ${word.pinyin}, cấp ${levelLabel(word.level || currentLevel)}), hãy: (1) viết nghĩa tiếng Việt ngắn gọn, chính xác, nêu các nghĩa thông dụng cách nhau bằng dấu chấm phẩy; (2) tạo đúng 3 câu giao tiếp hằng ngày riêng biệt. Mỗi câu phải chứa nguyên vẹn từ "${hanzi}", dùng chữ giản thể, tự nhiên và đúng ngữ pháp; pinyin có dấu thanh; bản dịch Việt sát nghĩa. Nếu từ mang sắc thái văn viết/chuyên ngành, dùng tình huống đời sống hoặc công việc tự nhiên, không ép câu vô lý. Chỉ trả JSON: {"meaning":"...","examples":[{"zh":"...","py":"...","vi":"..."}]}`;
    const result = parseAIWordContent(await session.prompt(prompt),hanzi);
    if (result) saveAIContent(cacheKey,result); return result;
}
async function loadUniqueExamples(word) {
    const container = document.getElementById('modalExamples'); if (!container) return;
    const hanzi = getSpeakableHanzi(word.hanzi);
    const needsMeaning = /ý nghĩa của(?: từ)?|AI thêm nghĩa|Hán Điển|chưa có/i.test(word.meaning || '') || /[\u3400-\u9fff]/.test(word.pinyin || '');
    const existingExamples = getVocabularyExamples(word);
    const needsExamples = existingExamples.some(isTemplateVocabularyExample);
    if (!needsMeaning && !needsExamples && existingExamples.length) return;
    container.insertAdjacentHTML('beforebegin','<div class="example-loading" id="exampleLoading">AI đang biên soạn nghĩa và câu giao tiếp riêng cho từ này…</div>');
    try {
        const content = await generateAIWordContent(word), modal = document.getElementById('modalContent');
        if (modal.dataset.wordKey !== hanzi) return;
        if (content) {
            word.meaning = content.meaning; word._loadedExamples = content.examples;
            const meaningEl = document.getElementById('modalWordMeaning'); if (meaningEl) meaningEl.textContent = content.meaning;
            container.innerHTML = renderVocabularyExamples(word);
        } else if (!getNaturalVocabularyExamples(word).length) container.innerHTML = '<div class="no-verified-example">Chưa có ví dụ riêng đã biên soạn cho mục này và trình duyệt chưa hỗ trợ AI cục bộ. Hãy dùng liên kết Hán Điển để đối chiếu.</div>';
    } catch {
        if (!getNaturalVocabularyExamples(word).length) container.innerHTML = '<div class="no-verified-example">AI chưa thể biên soạn nội dung trên thiết bị này. Vui lòng thử lại hoặc đối chiếu Hán Điển.</div>';
    } finally { document.getElementById('exampleLoading')?.remove(); }
}
function openModal(encoded) {
    const word = JSON.parse(decodeURIComponent(encoded));
    const spoken = getSpeakableHanzi(word.hanzi).replace(/'/g, '');
    lastFocusedElement = document.activeElement; speak(spoken);
    let html = `<div class="modal-hanzi">${word.hanzi}</div><div class="modal-pinyin">${word.pinyin}</div><div class="modal-meaning" id="modalWordMeaning">${word.meaning}</div>${word.source === 'translated-lexicon' ? '<div class="translation-note">Bản dịch tiếng Việt hỗ trợ · nên đối chiếu ngữ cảnh khi học chuyên sâu</div>' : ''}`;
    html += `<section class="modal-section"><div class="example-title-row"><h4>📝 Ví dụ đặt câu</h4><div class="example-source-links"><a href="https://hanzii.net/search/word/${encodeURIComponent(getSpeakableHanzi(word.hanzi))}?hl=vi" target="_blank" rel="noopener">Xem trên Hanzii ↗</a><a href="https://www.zdic.net/hans/${encodeURIComponent(getSpeakableHanzi(word.hanzi))}" target="_blank" rel="noopener">Hán Điển ↗</a></div></div><div class="modal-examples" id="modalExamples">${renderVocabularyExamples(word)}</div></section>`;
    html += `<button class="hero-btn modal-audio-btn" onclick="speak('${spoken}')">🔊 Nghe phát âm từ</button><button class="modal-close" onclick="hideModal()">Đóng</button>`;
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = html;
    modalContent.dataset.wordKey = getSpeakableHanzi(word.hanzi);
    modalContent.scrollTop = 0;
    const modal = document.getElementById('vocabModal'); modal.classList.add('show'); modal.setAttribute('aria-hidden', 'false');
    setModalBackgroundInert(true);
    loadUniqueExamples(word);
    setTimeout(() => modal.querySelector('.modal-close')?.focus(), 0);
}

function setModalBackgroundInert(inert) {
    ['mainContent','appSidebar'].forEach(id => { const element = document.getElementById(id); if (element) element.inert = inert; });
    document.body.classList.toggle('modal-open', inert);
}

function hideModal() {
    const modal = document.getElementById('vocabModal');
    modal.classList.remove('show'); modal.setAttribute('aria-hidden', 'true');
    document.getElementById('modalContent').dataset.wordKey = '';
    setModalBackgroundInert(false);
    lastFocusedElement?.focus?.();
}
function closeModal(event) { if (event.target === event.currentTarget) hideModal(); }
// ==================== FLASHCARD ====================
function renderFlashcardPage() {
    // Level buttons
    let btns = '';
    for (const i of HSK_LEVELS) btns += `<button class="ctrl-btn ${currentLevel===i?'active':''}" onclick="currentLevel=${i};renderFlashcardPage()">${levelLabel(i)}</button>`;
    document.getElementById('fcLevelBtns').innerHTML = btns;

    fcWords = shuffle(getAllWords(currentLevel));
    fcIndex = 0;
    fcFlipped = false;
    renderFlashcard();
}

function renderFlashcard() {
    if (fcWords.length === 0) {
        document.getElementById('flashcardArea').innerHTML = `<div class="empty-state"><div class="emoji">📭</div><h3>Chưa có từ vựng</h3></div>`;
        return;
    }

    const w = fcWords[fcIndex];
    const example = getNaturalVocabularyExamples(w)[0];
    document.getElementById('flashcardArea').innerHTML = `
        <div class="flashcard-progress">Thẻ ${fcIndex + 1} / ${fcWords.length}</div>
        <div class="flashcard ${fcFlipped ? 'flipped' : ''}" role="button" tabindex="0" aria-label="Lật flashcard" onkeydown="if(event.target===this&&(event.key==='Enter'||event.key===' ')){event.preventDefault();this.click()}" onclick="fcFlipped=!fcFlipped;renderFlashcard()">
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <div class="hanzi">${w.hanzi}</div>
                    <div class="hint">👆 Nhấn để lật thẻ</div>
                </div>
                <div class="flashcard-back">
                    <div class="pinyin">${w.pinyin}</div>
                    <div class="hanzi">${w.hanzi}</div>
                    <div class="meaning">${w.meaning}</div>
                    ${example ? `<div class="example">${escapeHtml(example.zh)}<br>${escapeHtml(example.vi)}</div>` : ''}
                </div>
            </div>
        </div>
        <div class="flashcard-nav">
            <button class="fc-nav-btn fc-prev" onclick="fcPrev()" ${fcIndex === 0 ? 'disabled' : ''}>← Trước</button>
            <button class="fc-nav-btn fc-know" onclick="fcKnow()">✅ Đã biết</button>
            <button class="fc-nav-btn fc-next" onclick="fcNext()">Tiếp →</button>
        </div>
    `;
    speak(w.hanzi);
}

function fcNext() {
    if (fcIndex < fcWords.length - 1) { fcIndex++; fcFlipped = false; renderFlashcard(); }
    else showToast('🎉 Đã hết thẻ! Bạn thật giỏi!');
}

function fcPrev() {
    if (fcIndex > 0) { fcIndex--; fcFlipped = false; renderFlashcard(); }
}

function fcKnow() {
    const w = fcWords[fcIndex];
    learned[getWordProgressKey(w)] = true;
    localStorage.setItem('hsk_learned', JSON.stringify(learned));
    updateStats();
    showToast('✅ Đã ghi nhớ: ' + w.hanzi);
    fcNext();
}

// ==================== QUIZ ====================
function renderQuizPage() {
    let btns = '';
    for (const i of HSK_LEVELS) btns += `<button class="ctrl-btn ${currentLevel===i?'active':''}" onclick="currentLevel=${i};startQuiz()">${levelLabel(i)}</button>`;
    document.getElementById('quizLevelBtns').innerHTML = btns;
    startQuiz();
}
function setQuizMode(mode) { quizMode = mode; startQuiz(); }
function getQuizValue(word) { return quizMode === 'pinyin' ? word.pinyin : word.meaning; }
function startQuiz() {
    const words = shuffle(getAllWords(currentLevel).filter(word => word.hanzi && word.pinyin && word.meaning));
    const count = Math.min(10, words.length); quizQuestions = []; quizCurrent = 0; quizScore = 0; quizAnswered = false;
    for (let i = 0; i < count; i++) {
        const correct = words[i]; const answer = getQuizValue(correct);
        const others = shuffle(words.filter(word => getQuizValue(word) !== answer));
        const options = shuffle([answer, ...others.slice(0, 3).map(getQuizValue)]);
        quizQuestions.push({word:correct, options, correctAnswer:answer});
    }
    renderQuizQuestion();
}
function renderQuizModeTabs() {
    return `<div class="quiz-mode-tabs" aria-label="Chọn dạng kiểm tra"><button class="ctrl-btn ${quizMode==='meaning'?'active':''}" onclick="setQuizMode('meaning')">Hán tự → nghĩa</button><button class="ctrl-btn ${quizMode==='pinyin'?'active':''}" onclick="setQuizMode('pinyin')">Hán tự → pinyin</button><button class="ctrl-btn ${quizMode==='listening'?'active':''}" onclick="setQuizMode('listening')">Nghe → nghĩa</button></div>`;
}
function renderQuizQuestion() {
    if (quizCurrent >= quizQuestions.length) { renderQuizResult(); return; }
    const q = quizQuestions[quizCurrent];
    if (quizMode === 'listening') setTimeout(() => speak(q.word.hanzi), 150);
    const optionsHtml = q.options.map((opt, idx) => `<button class="quiz-option" id="qopt${idx}" onclick="answerQuiz(${idx},'${encodeURIComponent(opt)}')">${escapeHtml(opt)}</button>`).join('');
    const prompt = quizMode === 'listening' ? `<button class="quiz-listen-prompt" onclick="speak('${q.word.hanzi.replace(/'/g,'')}')" aria-label="Nghe lại từ cần chọn">🔊<span>Nhấn để nghe</span></button>` : `<div class="quiz-hanzi">${q.word.hanzi}</div>${quizMode === 'meaning' ? `<div class="quiz-pinyin">${q.word.pinyin}</div>` : ''}`;
    document.getElementById('quizArea').innerHTML = `${renderQuizModeTabs()}<div class="quiz-question-card"><div class="quiz-q-number">Câu ${quizCurrent+1} / ${quizQuestions.length}</div>${prompt}</div><div class="quiz-options">${optionsHtml}</div><div class="quiz-audio-actions"><button class="fc-nav-btn fc-prev" onclick="speak('${q.word.hanzi.replace(/'/g,'')}')">🔊 Nghe phát âm</button></div>`;
    quizAnswered = false;
}
function answerQuiz(idx, encodedOpt) {
    if (quizAnswered) return; quizAnswered = true;
    const opt = decodeURIComponent(encodedOpt), q = quizQuestions[quizCurrent], correct = q.correctAnswer;
    document.querySelectorAll('.quiz-option').forEach(el => { el.classList.add('disabled'); if (el.textContent === correct) el.classList.add('correct'); });
    if (opt === correct) { quizScore++; document.getElementById('qopt'+idx).classList.add('correct'); showToast('✅ Chính xác!'); }
    else { document.getElementById('qopt'+idx).classList.add('wrong'); showToast('❌ Đáp án: '+correct); }
    setTimeout(() => { quizCurrent++; renderQuizQuestion(); }, 1400);
}
function renderQuizResult() {
    const pct = quizQuestions.length ? Math.round(quizScore/quizQuestions.length*100) : 0;
    const [emoji, label] = pct>=90 ? ['🏆','Xuất sắc!'] : pct>=70 ? ['😊','Khá tốt!'] : pct>=50 ? ['💪','Hãy ôn thêm các câu sai.'] : ['📚','Cần củng cố lại từ vựng.'];
    document.getElementById('quizArea').innerHTML = `${renderQuizModeTabs()}<div class="quiz-score"><h3>${emoji} Kết quả</h3><div class="score-number">${pct}%</div><div class="score-text">${quizScore}/${quizQuestions.length} câu đúng — ${label}</div><button class="hero-btn" onclick="startQuiz()">🔄 Làm bộ mới</button></div>`;
}
// ==================== WRITING PRACTICE ====================
function renderLevelButtons(targetId, startFunction) {
    let html = '';
    for (const i of HSK_LEVELS) html += `<button class="ctrl-btn ${currentLevel===i?'active':''}" onclick="currentLevel=${i};${startFunction}()">${levelLabel(i)}</button>`;
    document.getElementById(targetId).innerHTML = html;
}

function getWritingCharacters(allLevels = false) {
    if (allLevels && allWritingCharactersCache) return allWritingCharactersCache;
    const byChar = new Map();
    const levels = allLevels ? HSK_LEVELS : [currentLevel];
    levels.flatMap(level => getAllWords(level)).forEach(word => {
        const variants = word.hanzi.replace(/[（(][^）)]*[）)]/g, '').split(/[｜|、]/).filter(Boolean);
        variants.forEach(variant => Array.from(variant).forEach(char => {
            if (!/\p{Script=Han}/u.test(char)) return;
            if (!byChar.has(char)) byChar.set(char, {char, word, words: []});
            const item = byChar.get(char);
            if (!item.words.some(existing => existing.entryId === word.entryId)) item.words.push(word);
        }));
    });
    const result = Array.from(byChar.values()).map(item => ({...item, levels:[...new Set(item.words.map(word => word.level))].sort((a,b)=>a-b)}));
    if (allLevels) allWritingCharactersCache = result;
    return result;
}
function writingItemMatches(item, query) {
    if (!query) return true;
    return normalizeSearchText(item.char).includes(query) || item.words.some(word => wordMatchesSearch(word, query));
}
function formatWritingLevels(item) {
    return (item.levels || [item.word.level]).map(levelLabel).join(' · ');
}
const PINYIN_SYLLABLES = new Set(`a ai an ang ao ba bai ban bang bao bei ben beng bi bian biao bie bin bing bo bu ca cai can cang cao ce cen ceng cha chai chan chang chao che chen cheng chi chong chou chu chua chuai chuan chuang chui chun chuo ci cong cou cu cuan cui cun cuo da dai dan dang dao de dei den deng di dia dian diao die ding diu dong dou du duan dui dun duo e ei en eng er fa fan fang fei fen feng fo fou fu ga gai gan gang gao ge gei gen geng gong gou gu gua guai guan guang gui gun guo ha hai han hang hao he hei hen heng hong hou hu hua huai huan huang hui hun huo ji jia jian jiang jiao jie jin jing jiong jiu ju juan jue jun ka kai kan kang kao ke ken keng kong kou ku kua kuai kuan kuang kui kun kuo la lai lan lang lao le lei leng li lia lian liang liao lie lin ling liu long lou lu luan lun luo lv lve ma mai man mang mao me mei men meng mi mian miao mie min ming miu mo mou mu na nai nan nang nao ne nei nen neng ni nian niang niao nie nin ning niu nong nou nu nuan nuo nv nve o ou pa pai pan pang pao pei pen peng pi pian piao pie pin ping po pou pu qi qia qian qiang qiao qie qin qing qiong qiu qu quan que qun ran rang rao re ren reng ri rong rou ru rua ruan rui run ruo sa sai san sang sao se sen seng sha shai shan shang shao she shei shen sheng shi shou shu shua shuai shuan shuang shui shun shuo si song sou su suan sui sun suo ta tai tan tang tao te teng ti tian tiao tie ting tong tou tu tuan tui tun tuo wa wai wan wang wei wen weng wo wu xi xia xian xiang xiao xie xin xing xiong xiu xu xuan xue xun ya yan yang yao ye yi yin ying yo yong you yu yuan yue yun za zai zan zang zao ze zei zen zeng zha zhai zhan zhang zhao zhe zhei zhen zheng zhi zhong zhou zhu zhua zhuai zhuan zhuang zhui zhun zhuo zi zong zou zu zuan zui zun zuo`.split(' '));
function normalizePinyinSyllable(value) {
    return String(value || '').toLocaleLowerCase('vi').normalize('NFD').replace(/u\u0308/g, 'v').replace(/\p{M}/gu, '').replace(/[^a-zv]/g, '');
}
function splitPinyinSyllables(value, expectedCount) {
    const clean = String(value || '').replace(/[（(][^）)]*[）)]/g, ' ');
    const groups = clean.match(/[\p{Script=Latin}üÜ]+/gu) || [];
    if (!groups.length || expectedCount < 1) return null;
    if (groups.length === expectedCount && groups.every(group => PINYIN_SYLLABLES.has(normalizePinyinSyllable(group)))) return groups;
    const original = Array.from(groups.join(''));
    const base = original.map(letter => normalizePinyinSyllable(letter)).join('');
    const memo = new Map();
    function findSplit(position, remaining) {
        const key = position + ':' + remaining;
        if (memo.has(key)) return memo.get(key);
        if (remaining === 0) return position === base.length ? [] : null;
        const maxEnd = Math.min(base.length, position + 6);
        for (let end = maxEnd; end > position; end--) {
            if (!PINYIN_SYLLABLES.has(base.slice(position, end))) continue;
            const rest = findSplit(end, remaining - 1);
            if (rest) { const result = [end, ...rest]; memo.set(key, result); return result; }
        }
        memo.set(key, null); return null;
    }
    const boundaries = findSplit(0, expectedCount);
    if (!boundaries) return null;
    let start = 0;
    return boundaries.map(end => { const syllable = original.slice(start, end).join(''); start = end; return syllable; });
}
function getWritingPinyinFromWord(word, char) {
    const variants = word.hanzi.replace(/[（(][^）)]*[）)]/g, '').split(/[｜|、]/).filter(Boolean);
    for (const variant of variants) {
        const chars = Array.from(variant).filter(value => /\p{Script=Han}/u.test(value));
        const index = chars.indexOf(char);
        if (index < 0) continue;
        const syllables = splitPinyinSyllables(word.pinyin, chars.length);
        if (syllables?.[index]) return syllables[index];
    }
    return '';
}
function getWritingCharacterPinyin(item) {
    if (writingPinyinByCharCache?.has(item.char)) return writingPinyinByCharCache.get(item.char);
    if (!writingPinyinByCharCache) writingPinyinByCharCache = new Map();
    for (const word of item.words) {
        const pinyin = getWritingPinyinFromWord(word, item.char);
        if (pinyin) { writingPinyinByCharCache.set(item.char, pinyin); return pinyin; }
    }
    const fallback = (String(item.word.pinyin || '').replace(/[（(][^）)]*[）)]/g, ' ').match(/[\p{Script=Latin}üÜ]+/u) || [''])[0];
    writingPinyinByCharCache.set(item.char, fallback);
    return fallback;
}
function renderWritingPage() {
    renderLevelButtons('writingLevelBtns', 'startWriting');
    startWriting(false);
}
function startWriting(refreshButtons = true) {
    stopWritingStrokeLoop();
    if (hanziWriter) { try { hanziWriter.cancelQuiz(); } catch (e) {} }
    if (refreshButtons) renderLevelButtons('writingLevelBtns', 'startWriting');
    writingCharacters = getWritingCharacters(false); writingCharIndex = 0; writingMode = 'watch';
    document.getElementById('writingArea').innerHTML = `<div class="writing-studio">
        <aside class="character-panel"><input id="writingSearch" class="character-search" aria-label="Tìm chữ luyện viết trong HSK 1–9" placeholder="Tìm trên tất cả HSK 1–9…" oninput="filterWritingCharacters()"><div class="character-search-note">Nhập chữ Hán, pinyin hoặc nghĩa tiếng Việt để tìm toàn bộ cấp độ.</div><div class="character-count" id="writingCharCount"></div><div class="character-list" id="writingCharList"></div></aside>
        <section class="writer-card"><div class="writing-mode-tabs"><button class="writing-mode active" data-mode="watch" onclick="setWritingMode('watch')">▶ Xem</button><button class="writing-mode" data-mode="trace" onclick="setWritingMode('trace')">✍ Tô lại</button><button class="writing-mode" data-mode="test" onclick="setWritingMode('test')">✓ Kiểm tra</button></div>
        <div class="hanzi-stage"><div id="hanziWriterTarget"></div></div><div class="writer-info"><div class="writer-char" id="writerChar"></div><div class="writer-meta"><span id="writerPinyin"></span><span class="writer-level" id="writerLevel"></span></div><div class="writer-meaning" id="writerMeaning"></div></div><div class="writer-feedback" id="writerFeedback"></div>
        <div class="writer-toolbar"><button class="practice-btn practice-secondary" onclick="previousWritingChar()">← Trước</button><button class="practice-btn practice-secondary" onclick="replayWriting()">↻ Phát lại nét</button><button class="practice-btn practice-secondary" onclick="speakCurrentWritingChar()">🔊 Phát âm</button><button class="practice-btn practice-secondary writing-loop-btn" id="writingLoopBtn" type="button" aria-pressed="false" onclick="toggleWritingStrokeLoop()">🔁 Lặp nét chữ</button><button class="practice-btn practice-primary" onclick="nextWritingChar()">Tiếp →</button></div>
        <div class="writing-tip"><strong>Mẹo:</strong> Viết từ trên xuống, trái sang phải và ngoài vào trong. Chế độ <strong>Xem</strong> minh họa thứ tự nét; <strong>Tô lại</strong> có nét mờ; <strong>Kiểm tra</strong> không hiển thị gợi ý.</div></section></div>`;
    renderWritingCharacterList(); selectWritingCharacter(0);
}
function renderWritingCharacterList(filtered = writingCharacters) {
    const search = document.getElementById('writingSearch');
    const searchingAllLevels = Boolean(normalizeSearchText(search?.value));
    document.getElementById('writingCharCount').textContent = `${filtered.length.toLocaleString('vi-VN')} chữ · ${searchingAllLevels ? 'Tất cả HSK 1–9' : levelLabel(currentLevel)}`;
    document.getElementById('writingCharList').innerHTML = filtered.map(item => {
        const index = writingCharacters.indexOf(item), levelText = formatWritingLevels(item), chipPinyin = getWritingCharacterPinyin(item);
        return `<button class="character-chip ${index === writingCharIndex ? 'active' : ''}" onclick="selectWritingCharacter(${index})" title="${escapeHtml(chipPinyin)} · ${levelText}"><span>${item.char}</span><small>${escapeHtml(chipPinyin)}</small></button>`;
    }).join('');
}
function filterWritingCharacters() {
    const input = document.getElementById('writingSearch'), query = normalizeSearchText(input.value);
    if (hanziWriter) { try { hanziWriter.cancelQuiz(); } catch (e) {} }
    if (query) {
        const allCharacters = getWritingCharacters(true);
        const exactCharacter = allCharacters.find(item => normalizeSearchText(item.char) === query);
        if (exactCharacter) writingCharacters = [exactCharacter];
        else {
            const directMatches = allCharacters.map(item => {
                const words = item.words.filter(word => normalizeHSKWordKey(word.hanzi) === item.char && wordMatchesSearch(word, query));
                return words.length ? {...item, word:words[0], words, levels:[...new Set(words.map(word => word.level))].sort((a,b)=>a-b)} : null;
            }).filter(Boolean);
            if (directMatches.length) writingCharacters = directMatches;
            else {
                const scoredCharacters = allCharacters.map(item => ({item, matches:item.words.map(word => ({word, score:getWordSearchScore(word, query)})).filter(match => match.score > 0)}));
                const bestScore = Math.max(0, ...scoredCharacters.flatMap(entry => entry.matches.map(match => match.score)));
                writingCharacters = scoredCharacters.map(({item, matches}) => {
                    const words = matches.filter(match => match.score === bestScore).map(match => match.word);
                    return words.length ? {...item, word:words[0], words, levels:[...new Set(words.map(word => word.level))].sort((a,b)=>a-b)} : null;
                }).filter(Boolean);
            }
        }
    } else writingCharacters = getWritingCharacters(false);
    writingCharIndex = 0;
    if (!writingCharacters.length) {
        stopWritingStrokeLoop();
        renderWritingCharacterList([]);
        document.getElementById('hanziWriterTarget').innerHTML = '';
        document.getElementById('writerChar').textContent = '—';
        document.getElementById('writerPinyin').textContent = '';
        document.getElementById('writerLevel').textContent = '';
        document.getElementById('writerMeaning').textContent = 'Không tìm thấy chữ phù hợp trong HSK 1–9.';
        document.getElementById('writerFeedback').textContent = 'Hãy thử chữ Hán, pinyin không dấu hoặc một nghĩa khác.';
        return;
    }
    selectWritingCharacter(0);
}
function selectWritingCharacter(index) {
    if (!writingCharacters.length) return;
    writingCharIndex = Math.max(0, Math.min(index, writingCharacters.length - 1));
    const item = writingCharacters[writingCharIndex];
    document.getElementById('writerChar').textContent = item.char;
    document.getElementById('writerPinyin').textContent = item.word.pinyin;
    document.getElementById('writerLevel').textContent = formatWritingLevels(item);
    document.getElementById('writerMeaning').textContent = item.word.meaning;
    renderWritingCharacterList();
    if (writingStrokeLoopEnabled) {
        writingStrokeLoopRunId++;
        writingStrokeLoopPlayCount = 0;
        clearWritingStrokeLoopTimer();
        updateWritingStrokeLoopButton();
    }
    initializeHanziWriter();
}

function initializeHanziWriter() {
    const item = writingCharacters[writingCharIndex], target = document.getElementById('hanziWriterTarget');
    if (!item || !target) return;
    target.innerHTML = '';
    const feedback = document.getElementById('writerFeedback');
    if (!window.HanziWriter) { feedback.className = 'writer-feedback error'; feedback.textContent = 'Không tải được dữ liệu nét chữ. Hãy kiểm tra kết nối mạng và tải lại trang.'; return; }
    const size = Math.max(180, Math.min(380, target.parentElement.clientWidth - 8));
    hanziWriter = HanziWriter.create('hanziWriterTarget', item.char, {
        width: size, height: size, padding: 18, strokeColor: '#1f2937', radicalColor: '#dc2626', outlineColor: '#d7cfc7', highlightColor: '#dc2626', strokeAnimationSpeed: 1, delayBetweenStrokes: 250, showCharacter: false, showOutline: writingMode !== 'test', drawingWidth: 5, showHintAfterMisses: 2,
        charDataLoader: (char, onComplete, onError) => fetch(`https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/${char}.json`).then(r => { if (!r.ok) throw new Error('character data'); return r.json(); }).then(onComplete).catch(onError)
    });
    startCurrentWritingMode();
}

function startCurrentWritingMode() {
    const feedback = document.getElementById('writerFeedback');
    feedback.className = 'writer-feedback';
    if (writingMode === 'watch') { feedback.textContent = 'Quan sát thứ tự và hướng đi của từng nét.'; animateWritingCharacter(); return; }
    feedback.textContent = writingMode === 'trace' ? 'Tô theo nét mờ. Hệ thống sẽ nhắc khi sai thứ tự.' : 'Tự viết chữ mà không có nét gợi ý.';
    hanziWriter.quiz({
        onMistake: data => { feedback.className = 'writer-feedback error'; feedback.textContent = `Chưa đúng nét ${data.strokeNum + 1}. Hãy thử lại theo thứ tự.`; },
        onCorrectStroke: data => { feedback.className = 'writer-feedback'; feedback.textContent = `Đúng ${data.strokesRemaining === 0 ? 'tất cả các nét' : 'nét này'}! Còn ${data.strokesRemaining} nét.`; },
        onComplete: data => { feedback.className = 'writer-feedback success'; feedback.textContent = `🎉 Hoàn thành! Bạn đã viết đúng chữ ${writingCharacters[writingCharIndex].char}${data.totalMistakes ? ` với ${data.totalMistakes} lần sửa.` : '.'}`; }
    });
}

function animateWritingCharacter() {
    if (!hanziWriter) return;
    const runId = writingStrokeLoopRunId;
    hanziWriter.animateCharacter({
        onComplete: () => {
            if (!writingStrokeLoopEnabled || runId !== writingStrokeLoopRunId) return;
            writingStrokeLoopPlayCount++;
            updateWritingStrokeLoopButton();
            clearWritingStrokeLoopTimer();
            writingStrokeLoopTimer = window.setTimeout(() => {
                if (writingStrokeLoopEnabled && runId === writingStrokeLoopRunId) animateWritingCharacter();
            }, 700);
        }
    });
}
function setWritingMode(mode) {
    if (mode !== 'watch') stopWritingStrokeLoop();
    writingMode = mode;
    document.querySelectorAll('.writing-mode').forEach(btn => btn.classList.toggle('active', btn.dataset.mode === mode));
    initializeHanziWriter();
}
function replayWriting() {
    if (writingStrokeLoopEnabled) { writingStrokeLoopRunId++; clearWritingStrokeLoopTimer(); }
    initializeHanziWriter();
}
function nextWritingChar() { selectWritingCharacter((writingCharIndex + 1) % writingCharacters.length); }
function previousWritingChar() { selectWritingCharacter((writingCharIndex - 1 + writingCharacters.length) % writingCharacters.length); }
function speakCurrentWritingChar() { if (writingCharacters[writingCharIndex]) speak(writingCharacters[writingCharIndex].char); }
function updateWritingStrokeLoopButton() {
    const button = document.getElementById('writingLoopBtn');
    if (!button) return;
    button.classList.toggle('active', writingStrokeLoopEnabled);
    button.setAttribute('aria-pressed', String(writingStrokeLoopEnabled));
    button.dataset.loopCount = String(writingStrokeLoopPlayCount);
    button.textContent = writingStrokeLoopEnabled ? '⏹ Dừng lặp nét' : '🔁 Lặp nét chữ';
}
function clearWritingStrokeLoopTimer() {
    if (writingStrokeLoopTimer) window.clearTimeout(writingStrokeLoopTimer);
    writingStrokeLoopTimer = null;
}
function toggleWritingStrokeLoop() {
    if (writingStrokeLoopEnabled) { stopWritingStrokeLoop(); return; }
    writingStrokeLoopEnabled = true;
    writingStrokeLoopPlayCount = 0;
    writingStrokeLoopRunId++;
    writingMode = 'watch';
    document.querySelectorAll('.writing-mode').forEach(button => button.classList.toggle('active', button.dataset.mode === 'watch'));
    updateWritingStrokeLoopButton();
    initializeHanziWriter();
}
function stopWritingStrokeLoop() {
    writingStrokeLoopEnabled = false;
    writingStrokeLoopPlayCount = 0;
    writingStrokeLoopRunId++;
    clearWritingStrokeLoopTimer();
    updateWritingStrokeLoopButton();
}
// ==================== PRONUNCIATION PRACTICE ====================
function renderPronunciationPage() {
    stopRecognition(); renderLevelButtons('pronunciationLevelBtns', 'startPronunciation'); startPronunciation(false);
}

function startPronunciation(refreshButtons = true) {
    stopRecognition();
    if (refreshButtons) renderLevelButtons('pronunciationLevelBtns', 'startPronunciation');
    pronunciationWords = shuffle(getAllWords(currentLevel)).slice(0, 10);
    pronunciationIndex = 0; pronunciationScore = 0; renderPronunciationQuestion();
}

function renderPronunciationQuestion() {
    stopRecognition();
    stopSpeechPlayback();
    if (pronunciationIndex >= pronunciationWords.length) {
        const pct = pronunciationWords.length ? Math.round(pronunciationScore / pronunciationWords.length * 100) : 0;
        document.getElementById('pronunciationArea').innerHTML = `<div class="quiz-score"><h3>🎤 Hoàn thành luyện phát âm</h3><div class="score-number">${pct}%</div><div class="score-text">${pronunciationScore}/${pronunciationWords.length} từ được nhận dạng hoặc tự chấm đạt</div><button class="hero-btn" onclick="startPronunciation()">🔄 Luyện lượt mới</button></div>`;
        return;
    }
    const w = pronunciationWords[pronunciationIndex], hanzi = getSpeakableHanzi(w.hanzi), pinyin = getSpeakablePinyin(w.pinyin);
    const supported = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    const micAction = supported
        ? '<button class="practice-btn practice-mic" id="micBtn" onclick="startRecognition()">🎙️ Bắt đầu nói</button><button class="practice-btn practice-self-check" onclick="completePronunciationSelfCheck(this)">✅ Tự chấm đạt</button>'
        : '<button class="practice-btn practice-mic practice-self-check" id="micBtn" onclick="completePronunciationSelfCheck(this)">✅ Tôi tự chấm đạt</button>';
    document.getElementById('pronunciationArea').innerHTML = `<div class="practice-card">
        <div class="practice-progress">Từ ${pronunciationIndex + 1} / ${pronunciationWords.length} · Đạt ${pronunciationScore}</div><div class="pronounce-hanzi">${escapeHtml(hanzi)}</div><div class="practice-pinyin">${escapeHtml(pinyin)}</div><div class="practice-meaning">${escapeHtml(w.meaning)}</div>
        <div class="practice-actions"><button class="practice-btn practice-secondary" onclick="speak('${hanzi.replace(/'/g, '')}','pronunciationFeedback')">🔊 Nghe mẫu</button>${micAction}<button class="practice-btn practice-secondary" onclick="nextPronunciation()">Bỏ qua →</button></div>
        <div class="practice-feedback neutral" id="pronunciationFeedback">${supported ? 'Nghe mẫu, sau đó nhấn micro và đọc rõ từ trên.' : 'Trình duyệt này không có nhận dạng giọng nói. Hãy nghe mẫu, đọc theo rồi tự chấm đạt hoặc bỏ qua.'}</div></div>`;
}

function normalizeChinese(text) { return (text || '').toLowerCase().replace(/[\s，。！？、,.!?]/g, ''); }

function startRecognition() {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition || isListening) return;
    const target = pronunciationWords[pronunciationIndex]; recognition = new Recognition();
    recognition.lang = 'zh-CN'; recognition.interimResults = false; recognition.maxAlternatives = 5;
    recognition.onstart = () => {
        isListening = true; const btn = document.getElementById('micBtn');
        if (btn) { btn.classList.add('listening'); btn.textContent = '🔴 Đang nghe...'; }
        const f = document.getElementById('pronunciationFeedback'); if (f) f.textContent = 'Hãy đọc ngay bây giờ...';
    };
    recognition.onresult = event => {
        const alternatives = Array.from(event.results[0]).map(r => r.transcript);
        const expected = normalizeChinese(getSpeakableHanzi(target.hanzi));
        const matched = alternatives.some(t => normalizeChinese(t) === expected || normalizeChinese(t).includes(expected));
        const heard = alternatives[0] || '', f = document.getElementById('pronunciationFeedback');
        if (matched) { pronunciationScore++; f.className = 'practice-feedback correct'; f.innerHTML = `✅ Rất tốt! Máy nghe được: <strong>${escapeHtml(heard)}</strong>`; }
        else { f.className = 'practice-feedback wrong'; f.innerHTML = `Máy nghe được: <strong>${escapeHtml(heard || 'không rõ')}</strong>. Hãy nghe mẫu và thử lại.`; }
        const btn = document.getElementById('micBtn');
        if (btn) { btn.classList.remove('listening'); btn.textContent = matched ? 'Tiếp theo →' : '🎙️ Thử lại'; btn.onclick = matched ? nextPronunciation : startRecognition; }
    };
    recognition.onerror = event => {
        isListening = false;
        const messages = {'not-allowed':'Bạn chưa cấp quyền micro. Hãy cho phép micro trong trình duyệt rồi thử lại.','service-not-allowed':'Dịch vụ nhận dạng giọng nói bị chặn. Hãy mở trang qua localhost hoặc HTTPS.','network':'Nhận dạng giọng nói cần Internet nhưng hiện không kết nối được.','no-speech':'Chưa nghe thấy giọng nói. Hãy đưa micro gần hơn và thử lại.','audio-capture':'Không tìm thấy micro trên thiết bị.'};
        const f = document.getElementById('pronunciationFeedback');
        if (f) { f.className = 'practice-feedback wrong'; f.textContent = messages[event.error] || 'Không thể nhận dạng lúc này. Hãy thử lại.'; }
        const btn = document.getElementById('micBtn');
        if (btn) { btn.classList.remove('listening'); btn.textContent = '🎙️ Thử lại'; }
    };
    recognition.onend = () => { isListening = false; const btn = document.getElementById('micBtn'); if (btn && btn.classList.contains('listening')) { btn.classList.remove('listening'); btn.textContent = '🎙️ Thử lại'; } };
    try { recognition.start(); } catch (e) { isListening = false; showToast('Không thể khởi động micro. Hãy thử lại.'); }
}

function stopRecognition() { if (recognition) { try { recognition.abort(); } catch {} } recognition = null; isListening = false; }
function completePronunciationSelfCheck(button) {
    if (button?.dataset.completed === 'true') return;
    pronunciationScore++;
    const feedback = document.getElementById('pronunciationFeedback');
    if (feedback) { feedback.className = 'practice-feedback correct'; feedback.textContent = '✅ Đã tự chấm đạt. Nhấn Tiếp theo để sang từ mới.'; }
    const micBtn = document.getElementById('micBtn');
    if (micBtn && micBtn !== button) micBtn.disabled = true;
    if (button) { button.dataset.completed = 'true'; button.textContent = 'Tiếp theo →'; button.onclick = nextPronunciation; }
}
function nextPronunciation() { stopSpeechPlayback(); pronunciationIndex++; renderPronunciationQuestion(); }
// ==================== ROADMAP LESSONS ====================
const LESSON_TYPES = [
    {icon:'📚', title:'Từ vựng trọng tâm', focus:'Nhận biết, phát âm và ghi nhớ từ mới'},
    {icon:'字', title:'Hán tự và luyện viết', focus:'Nhận mặt chữ, cấu tạo và thứ tự nét'},
    {icon:'📝', title:'Ngữ pháp trong ngữ cảnh', focus:'Dùng mẫu câu với từ vựng của bài'},
    {icon:'🎧', title:'Nghe – nói thực hành', focus:'Nghe mẫu, nhắc lại và phản xạ nói'},
    {icon:'✅', title:'Ôn tập và tự kiểm tra', focus:'Củng cố kiến thức và đánh giá đầu ra'}
];

function buildRoadmapLessons(level) {
    const words = getAllWords(level);
    const wordsPerLesson = level <= 2 ? 20 : level === 3 ? 24 : level <= 5 ? 25 : level === 6 ? 30 : 36;
    const lessonCount = Math.max(1, Math.ceil(words.length / wordsPerLesson));
    const stageCount = ROADMAP_DATA[level].stages.length;
    return Array.from({length:lessonCount}, (_, index) => {
        const stageIndex = Math.min(stageCount - 1, Math.floor(index * stageCount / lessonCount));
        const typeIndex = index % LESSON_TYPES.length, type = LESSON_TYPES[typeIndex];
        return {index, stageIndex, typeIndex, ...type, words:words.slice(index*wordsPerLesson,(index+1)*wordsPerLesson), stage:ROADMAP_DATA[level].stages[stageIndex]};
    });
}
function openRoadmapLessons(stageIndex) {
    const lessons = buildRoadmapLessons(currentLevel);
    currentLessonIndex = Math.max(0, lessons.findIndex(lesson => lesson.stageIndex === stageIndex));
    showPage('lesson');
    renderLessonPage();
}

function selectRoadmapLesson(index) {
    currentLessonIndex = index;
    renderLessonPage();
    window.scrollTo(0, 0);
}

function renderLessonPage() {
    const lessons = buildRoadmapLessons(currentLevel);
    const lesson = lessons[currentLessonIndex] || lessons[0];
    if (!lesson) return;
    const progress = JSON.parse(localStorage.getItem('hsk_lesson_progress') || '{}');
    const lessonKey = `${currentLevel}-${lesson.index}`;
    const isDone = !!progress[lessonKey];
    document.getElementById('lessonPageTitle').textContent = `📘 HSK ${currentLevel} · Bài ${lesson.index + 1}/${lessons.length}`;
    const listHtml = lessons.map(item => {
        const done = !!progress[`${currentLevel}-${item.index}`];
        return `<button class="lesson-list-btn ${item.index === lesson.index ? 'active' : ''} ${done ? 'done' : ''}" onclick="selectRoadmapLesson(${item.index})"><strong>${item.icon} Bài ${item.index + 1}</strong><br>${item.title}</button>`;
    }).join('');
    const wordHtml = lesson.words.length ? lesson.words.map(word => `<button class="lesson-word" onclick="speak('${word.hanzi.replace(/'/g, '')}')"><div class="zh">${word.hanzi}</div><div class="py">${word.pinyin}</div><div class="vi">${word.meaning}</div></button>`).join('') : '<p>Phần này tập trung ôn lại từ của các bài trước.</p>';
    const grammarRules = GRAMMAR_DATA[currentLevel] || [];
    const grammar = grammarRules[lesson.stageIndex % Math.max(1, grammarRules.length)];
    const grammarHtml = grammar ? `<div class="lesson-activity"><strong>${grammar.title}</strong><br>${grammar.desc}<br><code>${grammar.structure}</code></div>` : `<div class="lesson-activity">Đặt 5 câu mới bằng từ vựng trong bài và đọc thành tiếng.</div>`;
    const activities = getLessonActivities(lesson);
    const completedCount = lessons.filter(item => progress[`${currentLevel}-${item.index}`]).length;
    document.getElementById('lessonContent').innerHTML = `<div class="lesson-layout"><aside class="lesson-sidebar"><div class="lesson-sidebar-title">HSK ${currentLevel} · ${completedCount}/${lessons.length} bài</div><div class="lesson-list">${listHtml}</div></aside><main class="lesson-main"><section class="lesson-hero"><div class="lesson-kicker">Chặng ${lesson.stageIndex + 1} · ${lesson.stage.title}</div><h3>${lesson.icon} Bài ${lesson.index + 1}: ${lesson.title}</h3><p>${lesson.focus}. Học theo thứ tự các hoạt động bên dưới rồi đánh dấu hoàn thành.</p><div class="lesson-objectives"><span class="lesson-objective">📚 ${lesson.words.length} từ</span><span class="lesson-objective">⏱️ ${Math.max(25, Math.round(ROADMAP_DATA[currentLevel].daily * .75))} phút</span><span class="lesson-objective">🎯 HSK ${currentLevel}</span></div></section><section class="lesson-section"><h4>📚 Từ vựng của bài</h4><div class="lesson-vocab-grid">${wordHtml}</div></section>${lesson.typeIndex === 2 ? `<section class="lesson-section"><h4>📝 Điểm ngữ pháp</h4>${grammarHtml}</section>` : ''}<section class="lesson-section"><h4>🎯 Hoạt động cần hoàn thành</h4><div class="lesson-activity-list">${activities.map((activity, i) => `<div class="lesson-activity"><strong>${i + 1}.</strong> ${activity}</div>`).join('')}</div></section><section class="lesson-complete ${isDone ? 'done' : ''}"><div><strong>${isDone ? '✅ Bài học đã hoàn thành' : 'Hoàn thành tất cả hoạt động?'}</strong><br><small>Tiến độ được lưu tự động trên thiết bị này.</small></div><button class="practice-btn ${isDone ? 'practice-secondary' : 'practice-primary'}" onclick="toggleLessonComplete(${lesson.index})">${isDone ? 'Học lại / bỏ đánh dấu' : '✓ Hoàn thành bài'}</button></section></main></div>`;
}

function getLessonActivities(lesson) {
    const firstWords = lesson.words.slice(0, 5).map(word => word.hanzi).join('、');
    const activitiesByType = [
        [`Nghe và đọc to từng từ trong danh sách ít nhất 2 lần.`, `Chọn 5 từ (${firstWords || 'từ đã học'}) và đặt câu ngắn.`, `Ôn lại bằng flashcard, đánh dấu những từ chưa nhớ.`],
        [`Chọn 8 chữ trong bài và quan sát hoạt ảnh thứ tự nét.`, `Tô lại mỗi chữ 3 lần, sau đó viết một lần không gợi ý.`, `Đọc âm Hán của chữ sau khi viết xong.`],
        [`Đọc điểm ngữ pháp và tìm 3 ví dụ trong danh sách từ.`, `Viết 5 câu, mỗi câu dùng ít nhất một từ mới.`, `Đọc to các câu và tự sửa trật tự từ.`],
        [`Nghe phát âm từng từ mà không nhìn pinyin ở lượt thứ hai.`, `Ghi âm 60–120 giây dùng ít nhất 8 từ của bài.`, `Nghe lại bản ghi, sửa thanh điệu và nói lại lần cuối.`],
        [`Ôn nhanh toàn bộ từ, tách thành nhóm đã nhớ/chưa nhớ.`, `Làm kiểm tra trắc nghiệm của cấp hiện tại.`, `Đạt ít nhất 80%; nếu chưa đạt, ôn lại các từ sai.`]
    ];
    return activitiesByType[lesson.typeIndex];
}

function toggleLessonComplete(index) {
    const progress = readStoredObject('hsk_lesson_progress');
    const key = currentLevel + '-' + index;
    if (progress[key]) delete progress[key]; else progress[key] = true;
    localStorage.setItem('hsk_lesson_progress', JSON.stringify(progress));

    const lessons = buildRoadmapLessons(currentLevel);
    const lesson = lessons.find(item => item.index === index);
    if (lesson) {
        const stageLessons = lessons.filter(item => item.stageIndex === lesson.stageIndex);
        const stageComplete = stageLessons.length > 0 && stageLessons.every(item => progress[currentLevel + '-' + item.index]);
        const roadmap = readStoredObject('hsk_roadmap_progress');
        const stageKey = currentLevel + '-' + lesson.stageIndex;
        if (stageComplete) roadmap[stageKey] = true; else delete roadmap[stageKey];
        localStorage.setItem('hsk_roadmap_progress', JSON.stringify(roadmap));
    }

    renderLessonPage();
    showToast(progress[key] ? '✅ Đã hoàn thành bài học!' : 'Đã bỏ đánh dấu bài học');
}
// ==================== HSK ROADMAP ====================
function renderRoadmapPage() {
    renderLevelButtons('roadmapLevelBtns', 'renderRoadmapPage');
    const data = ROADMAP_DATA[currentLevel];
    const saved = JSON.parse(localStorage.getItem('hsk_roadmap_progress') || '{}');
    const completed = data.stages.filter((_, i) => saved[`${currentLevel}-${i}`]).length;
    const percent = Math.round(completed / data.stages.length * 100);
    const stagesHtml = data.stages.map((stage, index) => {
        const done = !!saved[`${currentLevel}-${index}`];
        return `<article class="roadmap-stage ${done ? 'done' : ''}"><div class="roadmap-stage-head"><input class="roadmap-check" type="checkbox" aria-label="Đánh dấu hoàn thành: ${escapeHtml(stage.title)}" ${done ? 'checked' : ''} onchange="toggleRoadmapStage(${index}, this.checked)"><div><h4>${index + 1}. ${stage.title}</h4><div class="roadmap-stage-time">${stage.time}</div></div></div><ul class="roadmap-task-list">${stage.tasks.map(task => `<li>${task}</li>`).join('')}</ul><button class="stage-lesson-btn" onclick="openRoadmapLessons(${index})">📘 Mở các bài của chặng này</button></article>`;
    }).join('');
    const vocabMinutes = currentLevel <= 2 ? 12 : currentLevel === 3 ? 18 : 25;
    const inputMinutes = currentLevel <= 2 ? 10 : currentLevel === 3 ? 15 : 25;
    const outputMinutes = Math.max(10, data.daily - vocabMinutes - inputMinutes - 5);
    document.getElementById('roadmapContent').innerHTML = `<section class="roadmap-summary"><div class="roadmap-summary-top"><div><h3>HSK ${currentLevel} · ${data.band}</h3><p>${data.outcome}</p><div class="roadmap-targets"><span class="roadmap-target">📚 ${data.words.toLocaleString('vi-VN')} từ tích lũy</span><span class="roadmap-target">➕ ${data.newWords.toLocaleString('vi-VN')} từ mới</span><span class="roadmap-target">字 ${data.characters.toLocaleString('vi-VN')} chữ nhận đọc</span><span class="roadmap-target">🗓️ ${data.weeks} tuần</span><span class="roadmap-target">⏱️ ${data.daily} phút/ngày</span></div></div><div class="roadmap-progress-ring"><strong>${percent}%</strong><span>${completed}/${data.stages.length} chặng</span></div></div><div class="roadmap-progress-bar"><div class="roadmap-progress-fill" id="roadmapProgressFill"></div></div></section>
    <div class="roadmap-grid"><div class="roadmap-timeline">${stagesHtml}</div><aside class="roadmap-side"><div class="roadmap-side-card"><h4>⏱️ Buổi học ${data.daily} phút</h4><div class="daily-plan"><div class="daily-row"><span>Ôn từ cũ</span><span>${vocabMinutes} phút</span></div><div class="daily-row"><span>Nghe hoặc đọc</span><span>${inputMinutes} phút</span></div><div class="daily-row"><span>Nói hoặc viết</span><span>${outputMinutes} phút</span></div><div class="daily-row"><span>Kiểm tra nhanh</span><span>5 phút</span></div></div></div><div class="roadmap-side-card"><h4>⚡ Học ngay</h4><div class="roadmap-quick"><button onclick="showPage('study')">📖 Từ vựng</button><button onclick="showPage('flashcard')">🃏 Flashcard</button><button onclick="showPage('writing')">🖊️ Luyện viết</button><button onclick="showPage('pronunciation')">🎙️ Phát âm</button><button onclick="showPage('quiz')">✍️ Kiểm tra</button><button onclick="showPage('grammar')">📝 Ngữ pháp</button></div><p class="standard-note">Lộ trình dùng mục tiêu tích lũy theo đề cương HSK 3.0 chính thức công bố cuối 2025, triển khai trong năm 2026. Danh sách học hiện dùng trực tiếp bộ từ 2025; số mục có thể cao hơn chỉ tiêu do đề cương gộp một số biến thể trong cùng một mục.</p></div></aside></div>`;
    document.getElementById('roadmapProgressFill').style.width = percent + '%';
}

function toggleRoadmapStage(index, checked) {
    const saved = JSON.parse(localStorage.getItem('hsk_roadmap_progress') || '{}');
    const key = `${currentLevel}-${index}`;
    if (checked) saved[key] = true; else delete saved[key];
    localStorage.setItem('hsk_roadmap_progress', JSON.stringify(saved));
    renderRoadmapPage();
    showToast(checked ? '✅ Đã hoàn thành chặng học!' : 'Đã bỏ đánh dấu chặng học');
}
// ==================== GRAMMAR ====================
function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
}

function renderGrammarPage() {
    let btns = '';
    for (const i of HSK_LEVELS) btns += `<button class="ctrl-btn ${currentLevel===i?'active':''}" onclick="selectGrammarLevel(${i})">${levelLabel(i)}</button>`;
    document.getElementById('grammarLevelBtns').innerHTML = btns;

    const rules = GRAMMAR_DATA[currentLevel] || [];
    const officialRules = (window.HSK30_GRAMMAR_DATA || []).filter(rule => rule.level === currentLevel);
    const categories = [...new Set(officialRules.map(rule => rule.category))];
    const normalizedQuery = grammarSearch.trim().toLocaleLowerCase('vi');
    const filteredRules = officialRules.filter(rule => {
        const matchesCategory = grammarCategory === 'all' || rule.category === grammarCategory;
        const haystack = `${rule.category} ${rule.name} ${rule.detail} ${rule.content}`.toLocaleLowerCase('vi');
        return matchesCategory && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
    const visibleRules = filteredRules.slice(0, grammarVisibleLimit);
    const categoryLabels = {
        '语素':'Hình vị', '词类':'Từ loại', '短语':'Cụm từ', '句子成分':'Thành phần câu',
        '句子的类型':'Loại câu', '特殊表达法':'Cách biểu đạt đặc biệt',
        '固定格式':'Cấu trúc cố định', '动作的态':'Thể của động tác'
    };

    let html = `
        <section class="grammar-overview" aria-labelledby="grammar-catalog-title">
            <div><span class="grammar-kicker">Đề cương HSK 3.0 mới</span><h2 id="grammar-catalog-title">${officialRules.length} mục ngữ pháp HSK ${currentLevel}</h2><p>Danh mục đầy đủ theo đề cương HSK mới (2025), được phân nhóm để tra cứu và theo dõi.</p></div>
            <div class="grammar-total"><strong>${officialRules.length}</strong><span>mục</span></div>
        </section>
        <div class="grammar-tools">
            <label class="grammar-search"><span class="sr-only">Tìm ngữ pháp</span><input type="search" value="${escapeHtml(grammarSearch)}" placeholder="Tìm cấu trúc, từ khóa tiếng Trung…" oninput="filterGrammar(this.value)"></label>
            <div class="grammar-category-filters" aria-label="Lọc nhóm ngữ pháp">
                <button class="category-chip ${grammarCategory==='all'?'active':''}" onclick="setGrammarCategory('all')">Tất cả</button>
                ${categories.map(category => `<button class="category-chip ${grammarCategory===category?'active':''}" onclick="setGrammarCategory('${category}')">${categoryLabels[category] || category}</button>`).join('')}
            </div>
        </div>
        <div class="section-heading grammar-section-heading"><div><span class="grammar-kicker">Học có hướng dẫn</span><h2>Bài giảng trọng tâm</h2></div><span>${rules.length} bài có giải thích và ví dụ Việt</span></div>`;
    rules.forEach(r => {
        const exHtml = r.examples.map(ex => `<div class="example-sentence"><div class="zh">${ex.zh}</div><div class="py">${ex.py}</div><div class="vi">${ex.vi}</div></div>`).join('');
        html += `<div class="grammar-card"><h3>📌 ${r.title}</h3><p class="grammar-description">${r.desc}</p><div class="structure">${r.structure}</div>${exHtml}</div>`;
    });
    html += `<div class="section-heading grammar-section-heading grammar-catalog-heading"><div><span class="grammar-kicker">Tra cứu đầy đủ</span><h2>Danh mục ngữ pháp chính thức</h2></div><span>Hiển thị ${visibleRules.length}/${filteredRules.length} mục</span></div><div class="grammar-catalog">`;
    if (!visibleRules.length) {
        html += `<div class="empty-state"><div class="emoji">🔎</div><h3>Không tìm thấy</h3><p>Thử từ khóa hoặc nhóm ngữ pháp khác.</p></div>`;
    } else {
        visibleRules.forEach(rule => {
            html += `<article class="grammar-item"><div class="grammar-item-number">${String(rule.number).padStart(2, '0')}</div><div class="grammar-item-body"><div class="grammar-item-meta"><span>${categoryLabels[rule.category] || rule.category}</span>${rule.name ? `<span>${rule.name}</span>` : ''}${rule.detail ? `<span>${rule.detail}</span>` : ''}</div><div class="grammar-item-content">${rule.content}</div></div></article>`;
        });
    }
    html += `</div>`;
    if (visibleRules.length < filteredRules.length) html += `<div class="load-more-wrap"><button class="primary-btn" onclick="loadMoreGrammar()">Xem thêm ${Math.min(60, filteredRules.length-visibleRules.length)} mục</button></div>`;
    html += `<p class="grammar-source-note">Nguồn đối chiếu: đề cương chính thức Chinese Test và bảng ngữ pháp New HSK (2025). Nội dung tiếng Trung được giữ nguyên để bảo đảm thuật ngữ.</p>`;
    document.getElementById('grammarContent').innerHTML = html;
}

function selectGrammarLevel(level) {
    currentLevel = level; grammarCategory = 'all'; grammarSearch = ''; grammarVisibleLimit = 60; renderGrammarPage();
}
function setGrammarCategory(category) { grammarCategory = category; grammarVisibleLimit = 60; renderGrammarPage(); }
function filterGrammar(value) {
    grammarSearch = value; grammarVisibleLimit = 60; renderGrammarPage();
    const input = document.querySelector('.grammar-search input');
    if (input) { input.focus(); input.setSelectionRange(input.value.length, input.value.length); }
}
function loadMoreGrammar() { grammarVisibleLimit += 60; renderGrammarPage(); }
// ==================== HASH ROUTER ====================
function navigateFromHash() {
    const page = window.location.hash.replace(/^#\/?/, '').split('?')[0];
    const target = page && document.getElementById('page-' + page);
    if (target && !target.classList.contains('active')) showPage(page);
}

// ==================== INIT ====================
function init() {
    // Daily sentence
    const dayIdx = new Date().getDate() % DAILY_SENTENCES.length;
    const ds = DAILY_SENTENCES[dayIdx];
    document.getElementById('dailyZh').textContent = ds.zh;
    document.getElementById('dailyPy').textContent = ds.py;
    document.getElementById('dailyVi').textContent = ds.vi;

    migrateLegacyLearnedEntries();
    updateStats();
    document.querySelectorAll('.page').forEach(page => page.setAttribute('aria-hidden', page.classList.contains('active') ? 'false' : 'true'));
    document.querySelector('.nav-btn.active')?.setAttribute('aria-current', 'page');
    document.addEventListener('keydown', event => {
        const modal = document.getElementById('vocabModal');
        if (event.key === 'Escape' && modal.classList.contains('show')) hideModal();
        if (event.key === 'Tab' && modal.classList.contains('show')) {
            const focusable = [...modal.querySelectorAll('button, a[href], input, textarea, [tabindex]:not([tabindex="-1"])')].filter(element => !element.disabled);
            if (focusable.length) {
                const first = focusable[0], last = focusable[focusable.length - 1];
                if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
                else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
            }
        }
    });
    document.querySelectorAll('[onclick]:not(button):not(a):not(input)').forEach(element => {
        if (!element.hasAttribute('tabindex')) element.tabIndex = 0;
        if (!element.hasAttribute('role')) element.setAttribute('role', 'button');
        element.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); element.click(); }
        });
    });
    window.addEventListener('popstate', navigateFromHash);
    window.addEventListener('hashchange', navigateFromHash);
    navigateFromHash();
}

init();
