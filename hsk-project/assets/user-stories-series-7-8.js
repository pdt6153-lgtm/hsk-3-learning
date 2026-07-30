// Phần tiếp theo của series Rose tại Trung Quốc, biên tập theo HSK1-HSK2.
(function(){
const source={label:"Nội dung do người dùng cung cấp; Trung–Pinyin–Việt được biên tập và chuẩn hóa cho ứng dụng."};
const stories=[
{id:"user-first-bank-visit",level:2,type:"user-story",emoji:"🏦",title:"Lần đầu đến ngân hàng",chineseTitle:"第一次去银行",synopsis:"Thường giúp Rose làm thẻ ngân hàng và học cách cung cấp thông tin cá nhân an toàn.",
characters:[{name:"露丝",pinyin:"Lùsī",vi:"Rose – du học sinh Việt Nam"},{name:"常",pinyin:"Cháng",vi:"Thường – bạn cùng lớp"},{name:"银行工作人员",pinyin:"yínháng gōngzuò rényuán",vi:"Nhân viên ngân hàng"}],
scenes:[
{heading:"需要银行卡 - Cần làm thẻ ngân hàng",sentences:[
{hanzi:"今天上午，露丝和常一起去银行。",pinyin:"Jīntiān shàngwǔ, Lùsī hé Cháng yìqǐ qù yínháng.",vi:"Sáng nay, Rose và Thường cùng đến ngân hàng."},
{hanzi:"露丝刚来到中国，一个星期前才开始上课。",pinyin:"Lùsī gāng láidào Zhōngguó, yí ge xīngqī qián cái kāishǐ shàngkè.",vi:"Rose vừa đến Trung Quốc và mới bắt đầu đi học một tuần trước."},
{speaker:"王老师",hanzi:"如果你们想用手机付款，可以先办一张银行卡。",pinyin:"Rúguǒ nǐmen xiǎng yòng shǒujī fùkuǎn, kěyǐ xiān bàn yì zhāng yínhángkǎ.",vi:"Nếu các em muốn thanh toán bằng điện thoại, trước tiên có thể làm một thẻ ngân hàng."},
{hanzi:"所以今天常陪露丝来到银行。银行里很安静，也很干净。",pinyin:"Suǒyǐ jīntiān Cháng péi Lùsī láidào yínháng. Yínháng lǐ hěn ānjìng, yě hěn gānjìng.",vi:"Vì vậy hôm nay Thường đi cùng Rose đến ngân hàng. Trong ngân hàng rất yên tĩnh và sạch sẽ."},
{speaker:"银行工作人员",hanzi:"你好，请问需要帮助吗？",pinyin:"Nǐ hǎo, qǐngwèn xūyào bāngzhù ma?",vi:"Xin chào, bạn có cần giúp đỡ không?"},
{speaker:"露丝",hanzi:"我想办一张银行卡。",pinyin:"Wǒ xiǎng bàn yì zhāng yínhángkǎ.",vi:"Tôi muốn làm một thẻ ngân hàng."},
{speaker:"银行工作人员",hanzi:"好的，请跟我来。",pinyin:"Hǎo de, qǐng gēn wǒ lái.",vi:"Được, mời bạn đi theo tôi."}]},
{heading:"填写资料 - Điền thông tin",sentences:[
{hanzi:"工作人员拿出一张表。",pinyin:"Gōngzuò rényuán ná chū yì zhāng biǎo.",vi:"Nhân viên lấy ra một tờ biểu mẫu."},
{speaker:"银行工作人员",hanzi:"请写你的名字和电话号码。",pinyin:"Qǐng xiě nǐ de míngzi hé diànhuà hàomǎ.",vi:"Vui lòng viết tên và số điện thoại của bạn."},
{hanzi:"露丝认真地填写资料。",pinyin:"Lùsī rènzhēn de tiánxiě zīliào.",vi:"Rose nghiêm túc điền thông tin."},
{speaker:"银行工作人员",hanzi:"你住在哪里？",pinyin:"Nǐ zhù zài nǎli?",vi:"Bạn sống ở đâu?"},
{speaker:"露丝",hanzi:"我住在学校宿舍。",pinyin:"Wǒ zhù zài xuéxiào sùshè.",vi:"Tôi sống trong ký túc xá của trường."},
{hanzi:"露丝听不懂的时候，常就轻轻地告诉她。",pinyin:"Lùsī tīngbudǒng de shíhou, Cháng jiù qīngqīng de gàosu tā.",vi:"Khi Rose không hiểu, Thường nhẹ nhàng giải thích cho cô."}]},
{heading:"办好了 - Làm xong thẻ",sentences:[
{hanzi:"二十分钟以后，工作人员把银行卡交给露丝。",pinyin:"Èrshí fēnzhōng yǐhòu, gōngzuò rényuán bǎ yínhángkǎ jiāo gěi Lùsī.",vi:"Hai mươi phút sau, nhân viên trao thẻ ngân hàng cho Rose."},
{speaker:"银行工作人员",hanzi:"密码不要告诉别人。",pinyin:"Mìmǎ bú yào gàosu biérén.",vi:"Đừng cho người khác biết mật khẩu."},
{speaker:"银行工作人员",hanzi:"如果银行卡丢了，请马上联系我们。",pinyin:"Rúguǒ yínhángkǎ diū le, qǐng mǎshàng liánxì wǒmen.",vi:"Nếu làm mất thẻ, hãy liên hệ với chúng tôi ngay."},
{speaker:"露丝",hanzi:"谢谢您。今天我学会了很多新的中文。",pinyin:"Xièxie nín. Jīntiān wǒ xuéhuì le hěn duō xīn de Zhōngwén.",vi:"Cảm ơn chị. Hôm nay tôi đã học được rất nhiều tiếng Trung mới."},
{speaker:"常",hanzi:"以后我们还可以一起学习。",pinyin:"Yǐhòu wǒmen hái kěyǐ yìqǐ xuéxí.",vi:"Sau này chúng ta vẫn có thể cùng học."}]}
],
vocabulary:[{hanzi:"银行",pinyin:"yínháng",vi:"ngân hàng"},{hanzi:"银行卡",pinyin:"yínhángkǎ",vi:"thẻ ngân hàng"},{hanzi:"电话号码",pinyin:"diànhuà hàomǎ",vi:"số điện thoại"},{hanzi:"宿舍",pinyin:"sùshè",vi:"ký túc xá"},{hanzi:"填写",pinyin:"tiánxiě",vi:"điền thông tin"},{hanzi:"工作人员",pinyin:"gōngzuò rényuán",vi:"nhân viên"},{hanzi:"密码",pinyin:"mìmǎ",vi:"mật khẩu"},{hanzi:"帮助",pinyin:"bāngzhù",vi:"giúp đỡ"},{hanzi:"联系",pinyin:"liánxì",vi:"liên hệ"},{hanzi:"学习",pinyin:"xuéxí",vi:"học tập"}],
keyPoints:[{pattern:"如果……，就/可以……",explanation:"Nêu điều kiện và kết quả: nếu... thì...",example:"如果银行卡丢了，请马上联系我们。 - Nếu mất thẻ, hãy liên hệ ngay."},{pattern:"请 + động từ",explanation:"Yêu cầu hoặc lời mời lịch sự.",example:"请跟我来。 - Mời đi theo tôi."},{pattern:"把 + tân ngữ + động từ",explanation:"Nhấn mạnh cách xử lý đồ vật.",example:"把银行卡交给露丝。 - Trao thẻ cho Rose."}],
questions:[{hanzi:"露丝为什么去银行？",vi:"Vì sao Rose đến ngân hàng?"},{hanzi:"谁帮助露丝？",vi:"Ai giúp Rose?"},{hanzi:"她填写了什么资料？",vi:"Cô ấy điền thông tin gì?"},{hanzi:"工作人员提醒了什么？",vi:"Nhân viên nhắc nhở điều gì?"},{hanzi:"露丝今天学到了什么？",vi:"Hôm nay Rose học được gì?"}],source},
{id:"user-first-spring-festival",level:2,type:"user-story",emoji:"🧧",title:"Đón Tết đầu tiên ở Trung Quốc",chineseTitle:"第一次过春节",synopsis:"Rose cùng gia đình Thường trang trí nhà, gói sủi cảo và đón giao thừa.",
characters:[{name:"露丝",pinyin:"Lùsī",vi:"Rose – du học sinh Việt Nam"},{name:"常",pinyin:"Cháng",vi:"Thường – bạn cùng lớp"},{name:"李妈妈",pinyin:"Lǐ Māma",vi:"Mẹ của Thường"},{name:"李爸爸",pinyin:"Lǐ Bàba",vi:"Bố của Thường"},{name:"李小雨",pinyin:"Lǐ Xiǎoyǔ",vi:"Em gái Thường"}],
scenes:[
{heading:"春节快到了 - Tết sắp đến",sentences:[
{hanzi:"一月快结束了，学校放寒假。",pinyin:"Yīyuè kuài jiéshù le, xuéxiào fàng hánjià.",vi:"Tháng Một sắp kết thúc, trường bắt đầu nghỉ đông."},
{hanzi:"常邀请露丝去家里过春节。",pinyin:"Cháng yāoqǐng Lùsī qù jiālǐ guò Chūnjié.",vi:"Thường mời Rose đến nhà đón Tết."},
{hanzi:"露丝以前只在电视上看过春节。",pinyin:"Lùsī yǐqián zhǐ zài diànshì shàng kàn guo Chūnjié.",vi:"Trước đây Rose chỉ xem Tết Trung Quốc trên truyền hình."},
{hanzi:"这是她第一次真正过中国的新年，她非常期待。",pinyin:"Zhè shì tā dì yī cì zhēnzhèng guò Zhōngguó de Xīnnián, tā fēicháng qīdài.",vi:"Đây là lần đầu cô thực sự đón năm mới Trung Quốc nên rất mong đợi."},
{hanzi:"去常家以前，露丝买了水果、茶叶和越南咖啡。",pinyin:"Qù Cháng jiā yǐqián, Lùsī mǎi le shuǐguǒ, cháyè hé Yuènán kāfēi.",vi:"Trước khi đến nhà Thường, Rose mua trái cây, trà và cà phê Việt Nam."}]},
{heading:"贴春联 - Dán câu đối Tết",sentences:[
{hanzi:"上午九点，一家人开始贴春联。",pinyin:"Shàngwǔ jiǔ diǎn, yì jiā rén kāishǐ tiē chūnlián.",vi:"Chín giờ sáng, cả nhà bắt đầu dán câu đối Tết."},
{hanzi:"李爸爸站在梯子上，常在下面帮忙。",pinyin:"Lǐ Bàba zhàn zài tīzi shàng, Cháng zài xiàmiàn bāngmáng.",vi:"Bố Lý đứng trên thang, Thường giúp ở phía dưới."},
{hanzi:"露丝负责拿春联，李小雨一直笑。",pinyin:"Lùsī fùzé ná chūnlián, Lǐ Xiǎoyǔ yìzhí xiào.",vi:"Rose phụ trách cầm câu đối, Lý Tiểu Vũ cứ cười mãi."},
{speaker:"李小雨",hanzi:"姐姐，你贴得很好！",pinyin:"Jiějie, nǐ tiē de hěn hǎo!",vi:"Chị ơi, chị dán đẹp lắm!"},
{hanzi:"大家一起把红灯笼挂在门口，房子越来越漂亮。",pinyin:"Dàjiā yìqǐ bǎ hóng dēnglong guà zài ménkǒu, fángzi yuèláiyuè piàoliang.",vi:"Mọi người cùng treo đèn lồng đỏ trước cửa; ngôi nhà ngày càng đẹp."},
{speaker:"李妈妈",hanzi:"春节就是一家人在一起。",pinyin:"Chūnjié jiùshì yì jiā rén zài yìqǐ.",vi:"Tết chính là lúc cả gia đình ở bên nhau."}]},
{heading:"年夜饭 - Bữa cơm tất niên",sentences:[
{hanzi:"下午四点，大家一起准备年夜饭。",pinyin:"Xiàwǔ sì diǎn, dàjiā yìqǐ zhǔnbèi niányèfàn.",vi:"Bốn giờ chiều, mọi người cùng chuẩn bị bữa cơm tất niên."},
{hanzi:"李妈妈做鱼，李爸爸包饺子，常炒菜。",pinyin:"Lǐ Māma zuò yú, Lǐ Bàba bāo jiǎozi, Cháng chǎo cài.",vi:"Mẹ Lý làm cá, bố Lý gói sủi cảo, Thường xào món ăn."},
{hanzi:"露丝也学习包饺子。开始的时候，她包得不好。",pinyin:"Lùsī yě xuéxí bāo jiǎozi. Kāishǐ de shíhou, tā bāo de bù hǎo.",vi:"Rose cũng học gói sủi cảo. Lúc đầu, cô gói chưa đẹp."},
{hanzi:"后来，她越包越漂亮。",pinyin:"Hòulái, tā yuè bāo yuè piàoliang.",vi:"Sau đó, cô càng gói càng đẹp."},
{hanzi:"晚上七点，一家人坐在一起吃饭。",pinyin:"Wǎnshang qī diǎn, yì jiā rén zuò zài yìqǐ chīfàn.",vi:"Bảy giờ tối, cả nhà ngồi cùng nhau ăn cơm."},
{speaker:"大家",hanzi:"新年快乐！",pinyin:"Xīnnián kuàilè!",vi:"Chúc mừng năm mới!"},
{hanzi:"吃完饭以后，大家一起看春节晚会。十二点的时候，外面响起烟花。",pinyin:"Chīwán fàn yǐhòu, dàjiā yìqǐ kàn Chūnjié Wǎnhuì. Shí'èr diǎn de shíhou, wàimiàn xiǎngqǐ yānhuā.",vi:"Sau bữa ăn, mọi người cùng xem Gala Tết. Lúc mười hai giờ, bên ngoài vang lên tiếng pháo hoa."},
{speaker:"露丝",hanzi:"这是我最难忘的春节。",pinyin:"Zhè shì wǒ zuì nánwàng de Chūnjié.",vi:"Đây là cái Tết đáng nhớ nhất của mình."}]}
],
vocabulary:[{hanzi:"春节",pinyin:"Chūnjié",vi:"Tết Nguyên đán"},{hanzi:"寒假",pinyin:"hánjià",vi:"kỳ nghỉ đông"},{hanzi:"礼物",pinyin:"lǐwù",vi:"quà tặng"},{hanzi:"春联",pinyin:"chūnlián",vi:"câu đối Tết"},{hanzi:"灯笼",pinyin:"dēnglong",vi:"đèn lồng"},{hanzi:"饺子",pinyin:"jiǎozi",vi:"sủi cảo"},{hanzi:"烟花",pinyin:"yānhuā",vi:"pháo hoa"},{hanzi:"新年",pinyin:"Xīnnián",vi:"năm mới"},{hanzi:"团圆",pinyin:"tuányuán",vi:"đoàn viên"},{hanzi:"热闹",pinyin:"rènao",vi:"nhộn nhịp"}],
keyPoints:[{pattern:"越……越……",explanation:"Diễn tả càng... càng...",example:"她越包越漂亮。 - Cô ấy càng gói càng đẹp."},{pattern:"一起 + động từ",explanation:"Nhiều người cùng làm một việc.",example:"大家一起吃饭。 - Mọi người cùng ăn cơm."},{pattern:"Động từ + 得 + tính từ",explanation:"Nhận xét cách thực hiện hành động.",example:"你贴得很好。 - Bạn dán rất đẹp."}],
questions:[{hanzi:"露丝第一次过什么节？",vi:"Rose lần đầu đón dịp lễ gì?"},{hanzi:"她买了哪些礼物？",vi:"Cô ấy mua những món quà nào?"},{hanzi:"谁包饺子？",vi:"Ai gói sủi cảo?"},{hanzi:"大家什么时候吃年夜饭？",vi:"Mọi người ăn cơm tất niên lúc nào?"},{hanzi:"露丝为什么觉得春节难忘？",vi:"Vì sao Rose thấy cái Tết này đáng nhớ?"}],source}
];
window.BILINGUAL_STORIES=[...(window.BILINGUAL_STORIES||[]),...stories];
})();



