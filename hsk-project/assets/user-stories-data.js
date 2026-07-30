// Hai truyện song ngữ do người dùng cung cấp, đã chuẩn hóa pinyin và bản dịch.
(function () {
  const stories = [
    {
      id: "user-first-chinese-home",
      level: 2,
      type: "user-story",
      emoji: "🏠",
      title: "Lần đầu đến nhà bạn Trung Quốc",
      chineseTitle: "第一次去中国朋友家",
      synopsis: "Rose lần đầu đến thăm gia đình Thường, học cách chào hỏi, tặng quà và dùng bữa cùng gia đình người Trung Quốc.",
      characters: [
        { name: "露丝", pinyin: "Lùsī", vi: "Rose - sinh viên Việt Nam" },
        { name: "常", pinyin: "Cháng", vi: "Thường" },
        { name: "李妈妈", pinyin: "Lǐ Māma", vi: "Mẹ của Thường" },
        { name: "李爸爸", pinyin: "Lǐ Bàba", vi: "Bố của Thường" },
      ],
      scenes: [
        {
          heading: "放学以后 - Sau giờ học",
          sentences: [
            { hanzi: "今天下午，露丝和常一起下课。", pinyin: "Jīntiān xiàwǔ, Lùsī hé Cháng yìqǐ xiàkè.", vi: "Chiều hôm nay, Rose và Thường cùng tan học." },
            { speaker: "常", hanzi: "露丝，今天你有时间吗？", pinyin: "Lùsī, jīntiān nǐ yǒu shíjiān ma?", vi: "Rose, hôm nay bạn có thời gian không?" },
            { speaker: "露丝", hanzi: "有啊，怎么了？", pinyin: "Yǒu a, zěnme le?", vi: "Có chứ, sao vậy?" },
            { speaker: "常", hanzi: "今天是星期六，我爸爸妈妈都在家。你想来我家吗？", pinyin: "Jīntiān shì xīngqīliù, wǒ bàba māma dōu zài jiā. Nǐ xiǎng lái wǒ jiā ma?", vi: "Hôm nay là thứ Bảy, bố mẹ mình đều ở nhà. Bạn muốn đến nhà mình chơi không?" },
            { speaker: "露丝", hanzi: "真的吗？我很想去。", pinyin: "Zhēn de ma? Wǒ hěn xiǎng qù.", vi: "Thật à? Mình rất muốn đi." },
            { speaker: "常", hanzi: "太好了！我们一起坐公交车回家。", pinyin: "Tài hǎo le! Wǒmen yìqǐ zuò gōngjiāochē huí jiā.", vi: "Tuyệt quá! Chúng ta cùng đi xe buýt về nhà." },
            { hanzi: "他们先去水果店。", pinyin: "Tāmen xiān qù shuǐguǒ diàn.", vi: "Trước tiên, họ ghé cửa hàng trái cây." },
            { speaker: "常", hanzi: "第一次去别人家，带一点水果比较好。", pinyin: "Dì yī cì qù biérén jiā, dài yìdiǎn shuǐguǒ bǐjiào hǎo.", vi: "Lần đầu đến nhà người khác, mang một ít trái cây sẽ phù hợp hơn." },
            { hanzi: "露丝买了一些苹果和橙子。", pinyin: "Lùsī mǎi le yìxiē píngguǒ hé chéngzi.", vi: "Rose mua một ít táo và cam." },
          ],
        },
        {
          heading: "到家以后 - Sau khi đến nhà",
          sentences: [
            { hanzi: "李妈妈打开门。", pinyin: "Lǐ Māma dǎkāi mén.", vi: "Mẹ Thường mở cửa." },
            { speaker: "李妈妈", hanzi: "欢迎欢迎！", pinyin: "Huānyíng, huānyíng!", vi: "Hoan nghênh, hoan nghênh!" },
            { speaker: "露丝", hanzi: "阿姨您好！", pinyin: "Āyí nín hǎo!", vi: "Cháu chào cô ạ!" },
            { hanzi: "她把水果送给李妈妈。", pinyin: "Tā bǎ shuǐguǒ sòng gěi Lǐ Māma.", vi: "Cô ấy tặng trái cây cho mẹ Thường." },
            { speaker: "李妈妈", hanzi: "谢谢，你太客气了。", pinyin: "Xièxie, nǐ tài kèqi le.", vi: "Cảm ơn cháu, cháu khách sáo quá." },
            { speaker: "李爸爸", hanzi: "欢迎来到我们家。", pinyin: "Huānyíng láidào wǒmen jiā.", vi: "Chào mừng cháu đến nhà chúng tôi." },
            { hanzi: "大家一起坐在客厅聊天。", pinyin: "Dàjiā yìqǐ zuò zài kètīng liáotiān.", vi: "Mọi người cùng ngồi trò chuyện trong phòng khách." },
            { speaker: "李爸爸", hanzi: "露丝，你学习中文多久了？", pinyin: "Lùsī, nǐ xuéxí Zhōngwén duōjiǔ le?", vi: "Rose, cháu học tiếng Trung bao lâu rồi?" },
            { speaker: "露丝", hanzi: "我学习中文六个月了。", pinyin: "Wǒ xuéxí Zhōngwén liù ge yuè le.", vi: "Cháu học tiếng Trung được sáu tháng rồi." },
            { speaker: "李爸爸", hanzi: "你的中文很好！", pinyin: "Nǐ de Zhōngwén hěn hǎo!", vi: "Tiếng Trung của cháu rất tốt!" },
            { hanzi: "露丝不好意思地笑了。", pinyin: "Lùsī bù hǎoyìsi de xiào le.", vi: "Rose ngượng ngùng mỉm cười." },
          ],
        },
        {
          heading: "一起吃晚饭 - Cùng ăn tối",
          sentences: [
            { hanzi: "晚上六点，大家一起吃晚饭。", pinyin: "Wǎnshang liù diǎn, dàjiā yìqǐ chī wǎnfàn.", vi: "Sáu giờ tối, mọi người cùng ăn tối." },
            { hanzi: "桌上有米饭、鱼、鸡肉、青菜，还有汤。", pinyin: "Zhuō shàng yǒu mǐfàn, yú, jīròu, qīngcài, hái yǒu tāng.", vi: "Trên bàn có cơm, cá, thịt gà, rau xanh và canh." },
            { speaker: "李妈妈", hanzi: "多吃一点。", pinyin: "Duō chī yìdiǎn.", vi: "Ăn thêm một chút nhé." },
            { speaker: "露丝", hanzi: "很好吃，谢谢阿姨。", pinyin: "Hěn hǎochī, xièxie āyí.", vi: "Ngon lắm ạ, cháu cảm ơn cô." },
            { hanzi: "吃完饭以后，他们一起拍照。", pinyin: "Chīwán fàn yǐhòu, tāmen yìqǐ pāizhào.", vi: "Sau khi ăn xong, họ cùng chụp ảnh." },
            { speaker: "露丝", hanzi: "今天谢谢你们。", pinyin: "Jīntiān xièxie nǐmen.", vi: "Hôm nay cảm ơn mọi người." },
            { speaker: "李妈妈", hanzi: "以后常来。", pinyin: "Yǐhòu cháng lái.", vi: "Sau này thường xuyên đến chơi nhé." },
            { hanzi: "露丝觉得今天很开心。", pinyin: "Lùsī juéde jīntiān hěn kāixīn.", vi: "Rose cảm thấy hôm nay rất vui." },
          ],
        },
      ],
      vocabulary: [
        { hanzi: "同学", pinyin: "tóngxué", vi: "bạn học" }, { hanzi: "欢迎", pinyin: "huānyíng", vi: "chào đón" },
        { hanzi: "水果", pinyin: "shuǐguǒ", vi: "trái cây" }, { hanzi: "苹果", pinyin: "píngguǒ", vi: "quả táo" },
        { hanzi: "橙子", pinyin: "chéngzi", vi: "quả cam" }, { hanzi: "客厅", pinyin: "kètīng", vi: "phòng khách" },
        { hanzi: "聊天", pinyin: "liáotiān", vi: "trò chuyện" }, { hanzi: "晚饭", pinyin: "wǎnfàn", vi: "bữa tối" },
        { hanzi: "一起", pinyin: "yìqǐ", vi: "cùng nhau" }, { hanzi: "开心", pinyin: "kāixīn", vi: "vui vẻ" },
      ],
      keyPoints: [
        { pattern: "第一次 + động từ", explanation: "Diễn tả lần đầu làm một việc.", example: "第一次去别人家 - lần đầu đến nhà người khác." },
        { pattern: "把 + tân ngữ + động từ", explanation: "Nhấn mạnh cách xử lý hoặc tác động lên tân ngữ.", example: "她把水果送给李妈妈。 - Cô ấy tặng trái cây cho mẹ Thường." },
        { pattern: "Động từ + 了 + khoảng thời gian", explanation: "Diễn tả hành động đã kéo dài trong một khoảng thời gian.", example: "我学习中文六个月了。 - Tôi học tiếng Trung được sáu tháng rồi." },
      ],
      questions: [
        { hanzi: "露丝为什么去常家？", vi: "Vì sao Rose đến nhà Thường?" }, { hanzi: "她买了什么？", vi: "Cô ấy đã mua gì?" },
        { hanzi: "谁做晚饭？", vi: "Ai chuẩn bị bữa tối?" }, { hanzi: "李爸爸问了什么？", vi: "Bố Thường đã hỏi điều gì?" },
        { hanzi: "露丝开心吗？", vi: "Rose có vui không?" },
      ],
      source: { label: "Nội dung truyện do người dùng cung cấp; pinyin và bản dịch được chuẩn hóa cho ứng dụng." },
    },
    {
      id: "user-first-beijing-trip",
      level: 3,
      type: "user-story",
      emoji: "🏯",
      title: "Chuyến du lịch Bắc Kinh đầu tiên",
      chineseTitle: "第一次去北京旅行",
      synopsis: "Rose lần đầu đến Bắc Kinh, tham quan Cố Cung, thưởng thức vịt quay và chuẩn bị đi Vạn Lý Trường Thành.",
      characters: [
        { name: "露丝", pinyin: "Lùsī", vi: "Rose" }, { name: "常", pinyin: "Cháng", vi: "Thường" },
        { name: "导游", pinyin: "dǎoyóu", vi: "Hướng dẫn viên" }, { name: "王小姐", pinyin: "Wáng Xiǎojiě", vi: "Nhân viên khách sạn" },
      ],
      scenes: [
        {
          heading: "到北京 - Đến Bắc Kinh",
          sentences: [
            { hanzi: "今天早上，露丝第一次来到北京。", pinyin: "Jīntiān zǎoshang, Lùsī dì yī cì láidào Běijīng.", vi: "Sáng hôm nay, Rose lần đầu đến Bắc Kinh." },
            { hanzi: "飞机上午九点到机场。", pinyin: "Fēijī shàngwǔ jiǔ diǎn dào jīchǎng.", vi: "Máy bay đến sân bay lúc chín giờ sáng." },
            { hanzi: "常已经在那里等她。", pinyin: "Cháng yǐjīng zài nàli děng tā.", vi: "Thường đã đợi cô ở đó." },
            { speaker: "常", hanzi: "欢迎来到北京！", pinyin: "Huānyíng láidào Běijīng!", vi: "Chào mừng bạn đến Bắc Kinh!" },
            { hanzi: "他们一起坐地铁去酒店。", pinyin: "Tāmen yìqǐ zuò dìtiě qù jiǔdiàn.", vi: "Họ cùng đi tàu điện ngầm đến khách sạn." },
            { hanzi: "酒店离天安门很近。", pinyin: "Jiǔdiàn lí Tiān'ānmén hěn jìn.", vi: "Khách sạn ở rất gần Thiên An Môn." },
            { hanzi: "王小姐帮助他们办理入住。", pinyin: "Wáng Xiǎojiě bāngzhù tāmen bànlǐ rùzhù.", vi: "Cô Vương giúp họ làm thủ tục nhận phòng." },
            { speaker: "王小姐", hanzi: "早餐在一楼，明天七点开始。", pinyin: "Zǎocān zài yì lóu, míngtiān qī diǎn kāishǐ.", vi: "Bữa sáng ở tầng một, ngày mai bắt đầu lúc bảy giờ." },
          ],
        },
        {
          heading: "参观故宫 - Tham quan Cố Cung",
          sentences: [
            { hanzi: "下午，他们来到故宫。", pinyin: "Xiàwǔ, tāmen láidào Gùgōng.", vi: "Buổi chiều, họ đến Cố Cung." },
            { speaker: "导游", hanzi: "这里有六百多年的历史。", pinyin: "Zhèlǐ yǒu liùbǎi duō nián de lìshǐ.", vi: "Nơi đây có lịch sử hơn sáu trăm năm." },
            { hanzi: "露丝一直拍照片。", pinyin: "Lùsī yìzhí pāi zhàopiàn.", vi: "Rose liên tục chụp ảnh." },
            { hanzi: "常告诉她很多中国历史。", pinyin: "Cháng gàosu tā hěn duō Zhōngguó lìshǐ.", vi: "Thường kể cho cô nghe nhiều điều về lịch sử Trung Quốc." },
            { hanzi: "他们慢慢走，一边听，一边看。", pinyin: "Tāmen mànmàn zǒu, yìbiān tīng, yìbiān kàn.", vi: "Họ vừa đi chậm rãi, vừa nghe, vừa tham quan." },
          ],
        },
        {
          heading: "晚上吃北京烤鸭 - Ăn vịt quay Bắc Kinh",
          sentences: [
            { hanzi: "晚上，他们去一家有名的饭店。", pinyin: "Wǎnshang, tāmen qù yì jiā yǒumíng de fàndiàn.", vi: "Buổi tối, họ đến một nhà hàng nổi tiếng." },
            { speaker: "常", hanzi: "今天一定要吃北京烤鸭。", pinyin: "Jīntiān yídìng yào chī Běijīng kǎoyā.", vi: "Hôm nay nhất định phải ăn vịt quay Bắc Kinh." },
            { hanzi: "露丝第一次吃北京烤鸭，她觉得很好吃。", pinyin: "Lùsī dì yī cì chī Běijīng kǎoyā, tā juéde hěn hǎochī.", vi: "Rose lần đầu ăn vịt quay Bắc Kinh và thấy rất ngon." },
            { hanzi: "饭后，他们一起去王府井。", pinyin: "Fànhòu, tāmen yìqǐ qù Wángfǔjǐng.", vi: "Sau bữa tối, họ cùng đến Vương Phủ Tỉnh." },
            { hanzi: "街上有很多人。", pinyin: "Jiē shàng yǒu hěn duō rén.", vi: "Trên phố có rất nhiều người." },
            { hanzi: "露丝买了熊猫玩具、中国茶，还有很多小礼物。", pinyin: "Lùsī mǎi le xióngmāo wánjù, Zhōngguó chá, hái yǒu hěn duō xiǎo lǐwù.", vi: "Rose mua đồ chơi gấu trúc, trà Trung Quốc và nhiều món quà nhỏ." },
            { speaker: "露丝", hanzi: "今天虽然很累，但是我特别开心。", pinyin: "Jīntiān suīrán hěn lèi, dànshì wǒ tèbié kāixīn.", vi: "Hôm nay tuy rất mệt nhưng mình đặc biệt vui." },
            { speaker: "常", hanzi: "明天我们去长城。", pinyin: "Míngtiān wǒmen qù Chángchéng.", vi: "Ngày mai chúng ta sẽ đi Vạn Lý Trường Thành." },
            { speaker: "露丝", hanzi: "太好了！", pinyin: "Tài hǎo le!", vi: "Tuyệt quá!" },
          ],
        },
      ],
      vocabulary: [
        { hanzi: "北京", pinyin: "Běijīng", vi: "Bắc Kinh" }, { hanzi: "机场", pinyin: "jīchǎng", vi: "sân bay" },
        { hanzi: "酒店", pinyin: "jiǔdiàn", vi: "khách sạn" }, { hanzi: "导游", pinyin: "dǎoyóu", vi: "hướng dẫn viên" },
        { hanzi: "历史", pinyin: "lìshǐ", vi: "lịch sử" }, { hanzi: "故宫", pinyin: "Gùgōng", vi: "Cố Cung, Tử Cấm Thành" },
        { hanzi: "照片", pinyin: "zhàopiàn", vi: "ảnh, tấm ảnh" }, { hanzi: "长城", pinyin: "Chángchéng", vi: "Vạn Lý Trường Thành" },
        { hanzi: "礼物", pinyin: "lǐwù", vi: "quà tặng" }, { hanzi: "开心", pinyin: "kāixīn", vi: "vui vẻ" },
      ],
      keyPoints: [
        { pattern: "离 + địa điểm + 很近/远", explanation: "Diễn tả khoảng cách từ một nơi đến nơi khác.", example: "酒店离天安门很近。 - Khách sạn rất gần Thiên An Môn." },
        { pattern: "一边……，一边……", explanation: "Hai hành động diễn ra đồng thời.", example: "一边听，一边看。 - Vừa nghe vừa xem." },
        { pattern: "虽然……，但是……", explanation: "Diễn tả quan hệ nhượng bộ: tuy... nhưng...", example: "虽然很累，但是很开心。 - Tuy rất mệt nhưng rất vui." },
      ],
      questions: [
        { hanzi: "谁去机场接露丝？", vi: "Ai ra sân bay đón Rose?" }, { hanzi: "酒店离哪里很近？", vi: "Khách sạn gần nơi nào?" },
        { hanzi: "露丝在哪里拍了很多照片？", vi: "Rose đã chụp nhiều ảnh ở đâu?" }, { hanzi: "晚上他们吃了什么？", vi: "Buổi tối họ đã ăn gì?" },
        { hanzi: "第二天他们准备去哪里？", vi: "Ngày hôm sau họ dự định đi đâu?" },
      ],
      source: { label: "Nội dung truyện do người dùng cung cấp; pinyin và bản dịch được chuẩn hóa cho ứng dụng." },
    },
  ];
  window.BILINGUAL_STORIES = [...(window.BILINGUAL_STORIES || []), ...stories];
})();



