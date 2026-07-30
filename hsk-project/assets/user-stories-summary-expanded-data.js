// Hai truyện HSK2 phát triển từ ý tưởng tóm tắt của người dùng.
(function () {
  const source = { label: "Phát triển từ ý tưởng do người dùng cung cấp; nội dung Trung–Pinyin–Việt được biên tập mới cho ứng dụng." };
  const stories = [
    {
      id: "user-chinese-speaking-contest", level: 2, type: "user-story", emoji: "🎤", title: "Cuộc thi tiếng Trung", chineseTitle: "中文比赛",
      synopsis: "Rose vượt qua lo lắng nhờ luyện tập và tự tin tham gia cuộc thi nói tiếng Trung.",
      characters: [{name:"露丝",pinyin:"Lùsī",vi:"Rose"},{name:"常",pinyin:"Cháng",vi:"Thường"},{name:"王老师",pinyin:"Wáng Lǎoshī",vi:"Cô Vương"},{name:"小王",pinyin:"Xiǎo Wáng",vi:"Tiểu Vương"},{name:"小李",pinyin:"Xiǎo Lǐ",vi:"Tiểu Lý"}],
      scenes: [
        { heading: "准备比赛 - Chuẩn bị cuộc thi", sentences: [
          {hanzi:"学校下个星期要举行中文比赛。",pinyin:"Xuéxiào xià ge xīngqī yào jǔxíng Zhōngwén bǐsài.",vi:"Tuần sau trường sẽ tổ chức cuộc thi tiếng Trung."},
          {speaker:"王老师",hanzi:"露丝，你想参加吗？",pinyin:"Lùsī, nǐ xiǎng cānjiā ma?",vi:"Rose, em có muốn tham gia không?"},
          {speaker:"露丝",hanzi:"我想参加，但是我有一点紧张。",pinyin:"Wǒ xiǎng cānjiā, dànshì wǒ yǒu yìdiǎn jǐnzhāng.",vi:"Em muốn tham gia nhưng hơi lo lắng."},
          {speaker:"常",hanzi:"别担心，我每天陪你练习。",pinyin:"Bié dānxīn, wǒ měitiān péi nǐ liànxí.",vi:"Đừng lo, mỗi ngày mình sẽ luyện cùng bạn."},
          {hanzi:"他们练习介绍自己、家人、爱好和梦想。",pinyin:"Tāmen liànxí jièshào zìjǐ, jiārén, àihào hé mèngxiǎng.",vi:"Họ luyện giới thiệu bản thân, gia đình, sở thích và ước mơ."}
        ]},
        { heading: "比赛那天 - Ngày thi", sentences: [
          {speaker:"露丝",hanzi:"大家好，我叫露丝，来自越南。",pinyin:"Dàjiā hǎo, wǒ jiào Lùsī, láizì Yuènán.",vi:"Xin chào mọi người, mình tên Rose, đến từ Việt Nam."},
          {hanzi:"她说得很流利，也回答了所有问题。",pinyin:"Tā shuō de hěn liúlì, yě huídá le suǒyǒu wèntí.",vi:"Cô nói rất lưu loát và trả lời được tất cả câu hỏi."},
          {hanzi:"最后，露丝得了第二名。",pinyin:"Zuìhòu, Lùsī dé le dì èr míng.",vi:"Cuối cùng, Rose đạt giải Nhì."},
          {speaker:"王老师",hanzi:"祝贺你！你进步很大。",pinyin:"Zhùhè nǐ! Nǐ jìnbù hěn dà.",vi:"Chúc mừng em! Em tiến bộ rất nhiều."},
          {speaker:"露丝",hanzi:"只要每天认真练习，大家都能学好中文。",pinyin:"Zhǐyào měitiān rènzhēn liànxí, dàjiā dōu néng xuéhǎo Zhōngwén.",vi:"Chỉ cần chăm chỉ luyện tập mỗi ngày, ai cũng có thể học tốt tiếng Trung."}
        ]}
      ],
      vocabulary: [{hanzi:"比赛",pinyin:"bǐsài",vi:"cuộc thi"},{hanzi:"参加",pinyin:"cānjiā",vi:"tham gia"},{hanzi:"紧张",pinyin:"jǐnzhāng",vi:"lo lắng"},{hanzi:"练习",pinyin:"liànxí",vi:"luyện tập"},{hanzi:"介绍",pinyin:"jièshào",vi:"giới thiệu"},{hanzi:"爱好",pinyin:"àihào",vi:"sở thích"},{hanzi:"回答",pinyin:"huídá",vi:"trả lời"},{hanzi:"问题",pinyin:"wèntí",vi:"câu hỏi"},{hanzi:"祝贺",pinyin:"zhùhè",vi:"chúc mừng"},{hanzi:"进步",pinyin:"jìnbù",vi:"tiến bộ"}],
      keyPoints: [{pattern:"有一点 + tính từ",explanation:"Diễn tả hơi hoặc có một chút.",example:"我有一点紧张。 - Tôi hơi lo lắng."},{pattern:"Động từ + 得 + tính từ",explanation:"Mô tả cách thực hiện hành động.",example:"她说得很流利。 - Cô ấy nói rất lưu loát."},{pattern:"只要……，就/都……",explanation:"Chỉ cần có điều kiện này thì có kết quả.",example:"只要认真练习，大家都能学好。 - Chỉ cần chăm chỉ, ai cũng có thể học tốt."}],
      questions: [{hanzi:"学校要举行什么比赛？",vi:"Trường tổ chức cuộc thi gì?"},{hanzi:"谁每天陪露丝练习？",vi:"Ai luyện cùng Rose mỗi ngày?"},{hanzi:"他们练习介绍什么？",vi:"Họ luyện giới thiệu gì?"},{hanzi:"露丝得了第几名？",vi:"Rose đạt hạng mấy?"},{hanzi:"怎么才能学好中文？",vi:"Làm thế nào để học tốt tiếng Trung?"}], source
    },
    {
      id: "user-lost-on-the-way", level: 2, type: "user-story", emoji: "🗺️", title: "Bị lạc đường", chineseTitle: "迷路了",
      synopsis: "Rose bị lạc sau khi mua sách, chủ động hỏi đường và tìm được ga tàu điện.",
      characters: [{name:"露丝",pinyin:"Lùsī",vi:"Rose"},{name:"常",pinyin:"Cháng",vi:"Thường"},{name:"警察",pinyin:"jǐngchá",vi:"Cảnh sát"},{name:"阿姨",pinyin:"āyí",vi:"Một cô lớn tuổi"}],
      scenes: [
        { heading: "走错路 - Đi nhầm đường", sentences: [
          {hanzi:"星期六下午，露丝一个人去书店买书。",pinyin:"Xīngqīliù xiàwǔ, Lùsī yí ge rén qù shūdiàn mǎi shū.",vi:"Chiều thứ Bảy, Rose đi một mình đến hiệu sách mua sách."},
          {hanzi:"她走了十分钟，发现自己走错路了。",pinyin:"Tā zǒu le shí fēnzhōng, fāxiàn zìjǐ zǒucuò lù le.",vi:"Cô đi mười phút rồi phát hiện mình đi nhầm đường."},
          {speaker:"露丝",hanzi:"不好，我迷路了。",pinyin:"Bù hǎo, wǒ mílù le.",vi:"Không ổn rồi, mình bị lạc."},
          {speaker:"露丝",hanzi:"阿姨，请问地铁站怎么走？",pinyin:"Āyí, qǐngwèn dìtiězhàn zěnme zǒu?",vi:"Cô ơi, xin hỏi đi đến ga tàu điện như thế nào?"},
          {speaker:"阿姨",hanzi:"你先往前走，再向左转。",pinyin:"Nǐ xiān wǎng qián zǒu, zài xiàng zuǒ zhuǎn.",vi:"Cháu đi thẳng trước, sau đó rẽ trái."},
          {hanzi:"阿姨说得很快，露丝没有完全听懂。",pinyin:"Āyí shuō de hěn kuài, Lùsī méiyǒu wánquán tīngdǒng.",vi:"Cô ấy nói khá nhanh nên Rose không hiểu hoàn toàn."}
        ]},
        { heading: "找到地铁站 - Tìm được ga tàu điện", sentences: [
          {hanzi:"这时，一位警察走过来帮助她。",pinyin:"Zhèshí, yí wèi jǐngchá zǒu guòlái bāngzhù tā.",vi:"Lúc này, một cảnh sát đi tới giúp cô."},
          {speaker:"警察",hanzi:"地铁站离这里不远。一直走，在第二个路口右转。",pinyin:"Dìtiězhàn lí zhèlǐ bù yuǎn. Yìzhí zǒu, zài dì èr ge lùkǒu yòu zhuǎn.",vi:"Ga tàu điện không xa đây. Đi thẳng rồi rẽ phải ở giao lộ thứ hai."},
          {speaker:"露丝",hanzi:"谢谢您！我明白了。",pinyin:"Xièxie nín! Wǒ míngbai le.",vi:"Cảm ơn chú! Cháu hiểu rồi."},
          {hanzi:"露丝按照警察说的方向走，终于找到地铁站。",pinyin:"Lùsī ànzhào jǐngchá shuō de fāngxiàng zǒu, zhōngyú zhǎodào dìtiězhàn.",vi:"Rose đi theo hướng cảnh sát chỉ và cuối cùng tìm được ga tàu điện."},
          {speaker:"露丝",hanzi:"下次我会先看地图。",pinyin:"Xià cì wǒ huì xiān kàn dìtú.",vi:"Lần sau mình sẽ xem bản đồ trước."},
          {speaker:"常",hanzi:"没关系，今天你学会用中文问路了。",pinyin:"Méi guānxi, jīntiān nǐ xuéhuì yòng Zhōngwén wènlù le.",vi:"Không sao, hôm nay bạn đã học được cách hỏi đường bằng tiếng Trung."}
        ]}
      ],
      vocabulary: [{hanzi:"迷路",pinyin:"mílù",vi:"lạc đường"},{hanzi:"书店",pinyin:"shūdiàn",vi:"hiệu sách"},{hanzi:"发现",pinyin:"fāxiàn",vi:"phát hiện"},{hanzi:"问路",pinyin:"wènlù",vi:"hỏi đường"},{hanzi:"警察",pinyin:"jǐngchá",vi:"cảnh sát"},{hanzi:"地铁站",pinyin:"dìtiězhàn",vi:"ga tàu điện"},{hanzi:"一直",pinyin:"yìzhí",vi:"cứ, đi thẳng"},{hanzi:"路口",pinyin:"lùkǒu",vi:"giao lộ"},{hanzi:"地图",pinyin:"dìtú",vi:"bản đồ"},{hanzi:"方向",pinyin:"fāngxiàng",vi:"phương hướng"}],
      keyPoints: [{pattern:"先……，再……",explanation:"Diễn tả thứ tự trước, sau.",example:"先往前走，再向左转。 - Đi thẳng trước, sau đó rẽ trái."},{pattern:"离 + địa điểm + 近/远",explanation:"Diễn tả khoảng cách.",example:"地铁站离这里不远。 - Ga tàu điện không xa đây."},{pattern:"Động từ + 懂/到/会",explanation:"Bổ ngữ kết quả: hiểu, tìm thấy hoặc học được.",example:"听懂、找到、学会。 - Nghe hiểu, tìm thấy, học được."}],
      questions: [{hanzi:"露丝为什么去书店？",vi:"Vì sao Rose đến hiệu sách?"},{hanzi:"露丝向谁问路？",vi:"Rose hỏi đường ai?"},{hanzi:"露丝为什么没有完全听懂？",vi:"Vì sao Rose không hiểu hoàn toàn?"},{hanzi:"警察让露丝在哪里右转？",vi:"Cảnh sát bảo Rose rẽ phải ở đâu?"},{hanzi:"露丝下次会先做什么？",vi:"Lần sau Rose sẽ làm gì trước?"}], source
    }
  ];
  window.BILINGUAL_STORIES = [...(window.BILINGUAL_STORIES || []), ...stories];
})();



