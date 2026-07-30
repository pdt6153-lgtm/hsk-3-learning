// Truyện HSK1-HSK2 do người dùng cung cấp ý tưởng, biên tập mới cho ứng dụng.
(function () {
  const source = { label: "Nội dung và ý tưởng do người dùng cung cấp; Trung–Pinyin–Việt được biên tập, chuẩn hóa cho ứng dụng." };
  const stories = [
    {
      id: "user-first-high-speed-rail", level: 2, type: "user-story", emoji: "🚄",
      title: "Chuyến đi tàu cao tốc đầu tiên", chineseTitle: "第一次坐高铁",
      synopsis: "Rose và Thường mua vé đi Thượng Hải và trải nghiệm chuyến tàu cao tốc đầu tiên.",
      characters: [
        { name: "露丝", pinyin: "Lùsī", vi: "Rose" }, { name: "常", pinyin: "Cháng", vi: "Thường" },
        { name: "售票员", pinyin: "shòupiàoyuán", vi: "Nhân viên bán vé" }, { name: "列车员", pinyin: "lièchēyuán", vi: "Tiếp viên tàu" },
      ],
      scenes: [
        { heading: "买票 - Mua vé", sentences: [
          { hanzi: "星期天早上，露丝和常准备去上海旅游。", pinyin: "Xīngqītiān zǎoshang, Lùsī hé Cháng zhǔnbèi qù Shànghǎi lǚyóu.", vi: "Sáng Chủ nhật, Rose và Thường chuẩn bị đi du lịch Thượng Hải." },
          { hanzi: "他们来到高铁站，车站里有很多人。", pinyin: "Tāmen láidào gāotiězhàn, chēzhàn lǐ yǒu hěn duō rén.", vi: "Họ đến ga tàu cao tốc; trong ga có rất nhiều người." },
          { speaker: "露丝", hanzi: "这里的人真多！", pinyin: "Zhèlǐ de rén zhēn duō!", vi: "Ở đây đông người thật!" },
          { speaker: "常", hanzi: "今天是周末，所以很多人出去玩。", pinyin: "Jīntiān shì zhōumò, suǒyǐ hěn duō rén chūqù wán.", vi: "Hôm nay là cuối tuần nên nhiều người đi chơi." },
          { speaker: "售票员", hanzi: "你们去哪里？", pinyin: "Nǐmen qù nǎli?", vi: "Hai bạn đi đâu?" },
          { speaker: "常", hanzi: "我们去上海，要两张票。", pinyin: "Wǒmen qù Shànghǎi, yào liǎng zhāng piào.", vi: "Chúng tôi đi Thượng Hải, mua hai vé." },
          { speaker: "售票员", hanzi: "上午九点有一班车，还有两个座位。", pinyin: "Shàngwǔ jiǔ diǎn yǒu yì bān chē, hái yǒu liǎng ge zuòwèi.", vi: "Chín giờ sáng có một chuyến, vẫn còn hai chỗ." },
          { speaker: "露丝", hanzi: "这是我第一次坐中国的高铁！", pinyin: "Zhè shì wǒ dì yī cì zuò Zhōngguó de gāotiě!", vi: "Đây là lần đầu tiên mình đi tàu cao tốc Trung Quốc!" },
        ]},
        { heading: "在高铁上 - Trên tàu cao tốc", sentences: [
          { hanzi: "列车很干净，也很安静。", pinyin: "Lièchē hěn gānjìng, yě hěn ānjìng.", vi: "Tàu rất sạch và yên tĩnh." },
          { speaker: "露丝", hanzi: "风景真漂亮！", pinyin: "Fēngjǐng zhēn piàoliang!", vi: "Phong cảnh đẹp thật!" },
          { speaker: "常", hanzi: "中国很多城市都有高铁，非常方便。", pinyin: "Zhōngguó hěn duō chéngshì dōu yǒu gāotiě, fēicháng fāngbiàn.", vi: "Nhiều thành phố ở Trung Quốc có tàu cao tốc, rất thuận tiện." },
          { speaker: "列车员", hanzi: "你们要喝点什么吗？", pinyin: "Nǐmen yào hē diǎn shénme ma?", vi: "Hai bạn muốn uống gì không?" },
          { speaker: "露丝", hanzi: "我要一瓶水。", pinyin: "Wǒ yào yì píng shuǐ.", vi: "Tôi muốn một chai nước." },
          { speaker: "常", hanzi: "我要一杯咖啡。", pinyin: "Wǒ yào yì bēi kāfēi.", vi: "Tôi muốn một cốc cà phê." },
          { hanzi: "他们一边聊天，一边看风景。两个小时以后，列车到了上海。", pinyin: "Tāmen yìbiān liáotiān, yìbiān kàn fēngjǐng. Liǎng ge xiǎoshí yǐhòu, lièchē dào le Shànghǎi.", vi: "Họ vừa trò chuyện vừa ngắm cảnh. Hai giờ sau, tàu đến Thượng Hải." },
          { speaker: "露丝", hanzi: "今天的旅行真开心！", pinyin: "Jīntiān de lǚxíng zhēn kāixīn!", vi: "Chuyến đi hôm nay thật vui!" },
        ]},
      ],
      vocabulary: [
        { hanzi: "高铁", pinyin: "gāotiě", vi: "tàu cao tốc" }, { hanzi: "车站", pinyin: "chēzhàn", vi: "nhà ga" },
        { hanzi: "车票", pinyin: "chēpiào", vi: "vé tàu" }, { hanzi: "座位", pinyin: "zuòwèi", vi: "chỗ ngồi" },
        { hanzi: "方便", pinyin: "fāngbiàn", vi: "thuận tiện" }, { hanzi: "风景", pinyin: "fēngjǐng", vi: "phong cảnh" },
        { hanzi: "咖啡", pinyin: "kāfēi", vi: "cà phê" }, { hanzi: "旅行", pinyin: "lǚxíng", vi: "du lịch" },
        { hanzi: "周末", pinyin: "zhōumò", vi: "cuối tuần" }, { hanzi: "漂亮", pinyin: "piàoliang", vi: "xinh đẹp" },
      ],
      keyPoints: [
        { pattern: "所以……", explanation: "Nêu kết quả từ một nguyên nhân đã biết.", example: "今天是周末，所以很多人出去玩。 - Hôm nay là cuối tuần nên nhiều người đi chơi." },
        { pattern: "一边……，一边……", explanation: "Hai hành động diễn ra đồng thời.", example: "一边聊天，一边看风景。 - Vừa trò chuyện vừa ngắm cảnh." },
        { pattern: "张、瓶、杯", explanation: "Lượng từ cho vé, chai và cốc.", example: "两张票、一瓶水、一杯咖啡。 - Hai vé, một chai nước, một cốc cà phê." },
      ],
      questions: [
        { hanzi: "他们去哪里？", vi: "Họ đi đâu?" }, { hanzi: "今天为什么有很多人？", vi: "Vì sao hôm nay có nhiều người?" },
        { hanzi: "露丝第一次坐什么？", vi: "Rose lần đầu đi phương tiện gì?" }, { hanzi: "列车员卖什么？", vi: "Tiếp viên bán gì?" },
        { hanzi: "露丝觉得旅行怎么样？", vi: "Rose thấy chuyến đi thế nào?" },
      ], source,
    },
    {
      id: "user-cooking-together", level: 2, type: "user-story", emoji: "🍳",
      title: "Cùng nhau nấu ăn", chineseTitle: "一起做饭",
      synopsis: "Bốn người cùng mua nguyên liệu, chia nhau nấu một bữa cơm Trung Quốc.",
      characters: [
        { name: "露丝", pinyin: "Lùsī", vi: "Rose" }, { name: "常", pinyin: "Cháng", vi: "Thường" },
        { name: "王丽", pinyin: "Wáng Lì", vi: "Vương Lệ" }, { name: "张老师", pinyin: "Zhāng Lǎoshī", vi: "Thầy Trương" },
      ],
      scenes: [
        { heading: "买菜 - Mua nguyên liệu", sentences: [
          { hanzi: "今天下午，四个人决定一起做晚饭。", pinyin: "Jīntiān xiàwǔ, sì ge rén juédìng yìqǐ zuò wǎnfàn.", vi: "Chiều nay, bốn người quyết định cùng nấu bữa tối." },
          { speaker: "张老师", hanzi: "今天我们自己做中国菜。", pinyin: "Jīntiān wǒmen zìjǐ zuò Zhōngguó cài.", vi: "Hôm nay chúng ta tự nấu món Trung Quốc." },
          { hanzi: "他们一起去超市买菜。", pinyin: "Tāmen yìqǐ qù chāoshì mǎi cài.", vi: "Họ cùng đi siêu thị mua nguyên liệu." },
          { hanzi: "王丽拿了西红柿，常买了鸡蛋。", pinyin: "Wáng Lì ná le xīhóngshì, Cháng mǎi le jīdàn.", vi: "Vương Lệ lấy cà chua, Thường mua trứng." },
          { hanzi: "露丝买了青菜，张老师买了牛肉。", pinyin: "Lùsī mǎi le qīngcài, Zhāng Lǎoshī mǎi le niúròu.", vi: "Rose mua rau xanh, thầy Trương mua thịt bò." },
          { speaker: "露丝", hanzi: "这些菜够吗？", pinyin: "Zhèxiē cài gòu ma?", vi: "Chỗ thức ăn này đủ chưa?" },
          { speaker: "常", hanzi: "还要买一点水果。", pinyin: "Hái yào mǎi yìdiǎn shuǐguǒ.", vi: "Cần mua thêm một ít trái cây." },
        ]},
        { heading: "做饭 - Nấu ăn", sentences: [
          { hanzi: "回到家以后，大家开始做饭。", pinyin: "Huídào jiā yǐhòu, dàjiā kāishǐ zuòfàn.", vi: "Sau khi về nhà, mọi người bắt đầu nấu ăn." },
          { hanzi: "常洗菜，露丝切西红柿。", pinyin: "Cháng xǐ cài, Lùsī qiē xīhóngshì.", vi: "Thường rửa rau, Rose cắt cà chua." },
          { hanzi: "王丽做汤，张老师炒牛肉。", pinyin: "Wáng Lì zuò tāng, Zhāng Lǎoshī chǎo niúròu.", vi: "Vương Lệ nấu canh, thầy Trương xào thịt bò." },
          { hanzi: "厨房里很热闹，大家一边做饭，一边聊天。", pinyin: "Chúfáng lǐ hěn rènao, dàjiā yìbiān zuòfàn, yìbiān liáotiān.", vi: "Trong bếp rất nhộn nhịp; mọi người vừa nấu vừa trò chuyện." },
          { speaker: "露丝", hanzi: "这是我第一次做中国菜。", pinyin: "Zhè shì wǒ dì yī cì zuò Zhōngguó cài.", vi: "Đây là lần đầu mình nấu món Trung Quốc." },
          { speaker: "张老师", hanzi: "没关系，我教你。", pinyin: "Méi guānxi, wǒ jiāo nǐ.", vi: "Không sao, thầy dạy em." },
          { hanzi: "过了一会儿，饭做好了。", pinyin: "Guò le yíhuìr, fàn zuò hǎo le.", vi: "Một lúc sau, thức ăn đã nấu xong." },
          { speaker: "露丝", hanzi: "真好吃！", pinyin: "Zhēn hǎochī!", vi: "Ngon thật!" },
        ]},
      ],
      vocabulary: [
        { hanzi: "做饭", pinyin: "zuòfàn", vi: "nấu ăn" }, { hanzi: "超市", pinyin: "chāoshì", vi: "siêu thị" },
        { hanzi: "西红柿", pinyin: "xīhóngshì", vi: "cà chua" }, { hanzi: "鸡蛋", pinyin: "jīdàn", vi: "trứng gà" },
        { hanzi: "牛肉", pinyin: "niúròu", vi: "thịt bò" }, { hanzi: "厨房", pinyin: "chúfáng", vi: "nhà bếp" },
        { hanzi: "切", pinyin: "qiē", vi: "cắt, thái" }, { hanzi: "洗", pinyin: "xǐ", vi: "rửa" },
        { hanzi: "炒", pinyin: "chǎo", vi: "xào" }, { hanzi: "热闹", pinyin: "rènao", vi: "nhộn nhịp" },
      ],
      keyPoints: [
        { pattern: "一起 + động từ", explanation: "Nhiều người cùng làm một việc.", example: "我们一起做晚饭。 - Chúng ta cùng nấu bữa tối." },
        { pattern: "Động từ + 好 + 了", explanation: "Một việc đã được làm xong.", example: "饭做好了。 - Thức ăn đã nấu xong." },
        { pattern: "还要……", explanation: "Còn cần hoặc muốn thêm.", example: "还要买一点水果。 - Còn cần mua thêm trái cây." },
      ],
      questions: [
        { hanzi: "谁买了鸡蛋？", vi: "Ai mua trứng?" }, { hanzi: "露丝买了什么？", vi: "Rose mua gì?" },
        { hanzi: "谁炒牛肉？", vi: "Ai xào thịt bò?" }, { hanzi: "露丝第一次做什么？", vi: "Rose lần đầu làm gì?" },
        { hanzi: "饭做好了吗？", vi: "Thức ăn đã nấu xong chưa?" },
      ], source,
    },
  ];
  window.BILINGUAL_STORIES = [...(window.BILINGUAL_STORIES || []), ...stories];
})();



