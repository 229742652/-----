﻿var anwser = [0,1, 2, 2,0];//正确答案。0 对应 A ，1 对应 B ，2 对应 C;
var scroreArr = [ //分数得从高到低往来下排。
    { scrore: 15, level: "司令员" },
    { scrore: 14, level: "军长" },
    { scrore: 11, level: "独立团团长" },
    { scrore: 7, level: "游击队队长" }
];
var title = "兵法小测";
var shuoming = "抗日战争中，敌我双方武器装备优劣悬殊，如何谋兵布阵成为中国军队取胜的一个重要因素。你对抗战期间中国军队所创造和运用的战术了解多少？来做个测验吧，看你能成为“总司令”吗？";
var qishu = 1;//当前期数。
var prevHref = "";//上一期的链接地址
var questionData = [
    {
        question: "1、“三五成群、忽聚忽散、时隐时现、出没无常，从四面八方灵活机动地杀伤、消耗、迷惑、疲惫敌人••••••”。这描述的是哪种战术？",
        anwser: [
            "麻雀战术",
            "破袭战术",
            "蛙跳战术",
        ],
        gonglue: "【兵法书】麻雀战术，是刘伯承元帅在总结群众作战经验的基础上发明的一种游击战术。抗战中，各地游击队和民兵经常三五成群、忽聚忽散、时隐时现、出没无常，从四面八方灵活机动地杀伤、消耗、迷惑、疲惫敌人，打得日军防不胜防，惶惶不可终日。"
    },
    {
        question: "2、1941年12月，日军第三次进攻长沙。薛岳总结前两次会战的经验教训，提出了_________战法，共歼灭日军５万多人。",
        anwser: [
            "倒八字口袋",
            "天炉",
            "狼群"
        ],
        gonglue: "【兵法书】“天炉战法”由国民党著名将领薛岳所创，是一种“后退决战”的战术，要领就是诱敌深入，然后予以包围歼灭。"
    },
    {
        question: "3、有一首歌谣这样唱道:“海阳的铁西瓜,威名传天下……直把那日军,打发回‘老家’!”。这首歌谣中所指的作战方式是：",
        anwser: [
            "黄蜂战",
            "钓鱼战",
            "地雷战"
        ],
        gonglue: "【兵法书】地雷战是晋察冀根据地的民兵在反“扫荡”中创造的。1941年春，大泽山高家村的民兵在村头埋设了三颗地雷，炸死了8个日伪军，由此揭开了“地雷爆炸战”的序幕。"
    },
    {
        question: "4、1939年1月，粟裕指挥部队奇袭皖南芜湖的官陡门，取得了以30分钟战斗全歼守敌300余名的战果，成为新四军的一个模范战例。在这次战斗中，粟裕运用的战术是____。",
        anwser: [
            "推磨战术",
            "伏击战术",
            "长途奔袭战术"
        ],
        gonglue: "【兵法书】1939年1月18日清晨，粟裕率领部队轻装出发，经过三天疾进，于21日凌晨神不知鬼不觉地抵达距官陡门约2公里的王石桥。此时，据点里的敌人正在睡觉，粟裕果断命令部队出击，大获全胜。"
    },
    {
        question: "5、______战术是为了应对日军的“囚笼”政策，即神不知鬼不觉地在敌人疲惫之时潜入其据点和营地附近，抓住时机以迅雷不及掩耳之势一举击敌要害，得手后迅速撤离。",
        anwser: [
            "狐狸咬鸡",
            "苍蝇",
            "渗透"
        ],
        gonglue: "【兵法书】为拔除日军据点而采用的一种战术。游击队轮流派出便衣队，潜入敌人据点附近，当遇敌外出时，进行火力袭击，能歼灭就歼灭，不能歼灭则迅速撤走。"
    }

];