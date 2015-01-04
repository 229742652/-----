


$(function () {

    var data = {
        iWidth: document.documentElement.clientWidth,
        iHeight: document.documentElement.clientHeight,
        container: $("#container"),
        main: $("#main"),
        aLi: $("#main figure"),
        anwsers: $("#main figure .anwsers"),
        transitionEnd: "onwebkittransitionend" in window ? "webkitTransitionEnd" : "transitionend",
        len: $("#main figure").size(),
        iNow: 0,
        index: $("#index"),
        shiji: $("#index .shiji"),
        fen: $("#index .fen"),
        action1: $("#action1"),
        action2: $("#action2"),
        action3: $("#action3"),
        action4: $("#action4"),
        action5: $("#action5"),
        action6: $("#action6"),
        imgLoadingArr: [
            "images/1.png",
            "images/2.png",
            "images/3.png",
            "images/4.png",
            "images/5.png",
            "images/6.png",
            "images/7.png",
            "images/8.png",
            "images/action1.png",
            "images/index.png",
            "images/info.png",
            "images/lt_loading.png",
            "images/text.png",
            "images/xm.jpg",
            "images/arron.png",
            "images/text.png",
            "images/1-1.jpg",
            "images/2-1.jpg",
            "images/2-2.jpg",
            "images/1.jpg",
            "images/3.jpg",

        ],
        action: $(".action"),
        score: 0,
        result: $("#result"),
        result_text: $("#result_text"),
        share: $("#share"),
        team: $("#team"),
        audio: $("#audio"),
        play: $("#play"),
        level: [0.1, 0.1, 0.2, 2.6, 5.7, 11.3, 53.6, 15.1, 6.7, 3.5, 1.1]
    }
    
    data.iWidth = data.index.width();

    ltUtil.ltLoading(data.imgLoadingArr, function () {
        data.action.find("img").each(function () {
            if ($(this).attr("src") !== $(this).data("src")) {
                $(this).attr("src", $(this).data("src"))
            }
        });
        setSize(data.iWidth, data.iHeight);
        setBg();
        setTrans3d($("#loading"), [0, "-100%", 0]).off(data.transitionEnd).on(data.transitionEnd, function () {
            indexIn();
        });

    }, { id: "loading" })

    //anwserShow(data.iNow);
    $(document).on("touchmove", function () { return false; }).on("DOMMouseScroll", function (e) { e.preventDefault(); }).on("mousewheel", function (e) { e.preventDefault();})

    function indexIn() {//封面入场动画。
        setTrans3d(data.shiji.find("div"))
        data.shiji.find("div").eq(-1).off(data.transitionEnd).on(data.transitionEnd, function () {
            setTrans3d(data.fen).off(data.transitionEnd).on(data.transitionEnd, function () {
                setTrans3d(data.fen.find("div").eq(1))
                setTrans3d(data.fen.find("div").eq(0)).off(data.transitionEnd).on(data.transitionEnd, function () {
                    setTrans3d(data.index.find(".test")).off(data.transitionEnd).on(data.transitionEnd, function () {
                        setTrans3d(data.index.find(".test p span")).css({ opacity: 1 }).off(data.transitionEnd).on(data.transitionEnd, function () {
                            ltUtil.setCss3($(".info").css({ opacity: 1 })[0], { animation: "shake 1s linear infinite" });
                        });
                    })
                });
            });
        });
    }

    $(document).one("touchstart", function () {
        data.audio[0].play();
        isStop = false;
    });

    var isStop = true;
    data.play.tap(function (e, _this) {
        if (isStop) {
            data.audio[0].play();
        }
        else {
            data.audio[0].pause();
            $(_this).css({ backgroundPosition: "0 0" })
        }
        isStop = !isStop;
    });

    data.audio.on("play", function () {
        data.play.css({ backgroundPosition: "-36px 0" })
    });
    data.audio.on("pause", function () {
        data.play.css({ backgroundPosition: "0 0" })
    });


    data.index.swipe("up", function () {
        indexOut()
    });

    data.share.tap(function () {
        var html = "您的心里已经开启“中国世纪”！ 这是一个与您息息相关、一同进步的世纪。“中国世纪”，有你才精彩！";
        if (data.score < 5) {
            html = "您正在奔向 “中国世纪”的道路上！这是一个给予我们美好愿景、需要我们为之共同奋斗的世纪。“中国世纪”，让我们一起向它奔跑吧！";
        }
        document.title = html;
        $("body").css({ overflow: "hidden" }).append("<div class='mask' id='mask' style=\"height:" + (data.iHeight) + "px\"><img width='122'  height='122' src='images/arron.png'><p>请点击右上角<br/>点击【分享到朋友圈】<br/>与好友共分享吧</p></div>");
        setTimeout(function () {
            $("#mask").remove();
        }, 5000)
    });

    function indexOut() {
        ltUtil.setCss3(setTrans3d(data.index, [0, "-100%", 0])[0], { transition: "1.4s" });
        ltUtil.setCss3(setTrans3d(data.action1)[0], { transition: ".8s" });
    }

    function action1Out() {
        ltUtil.setCss3(setTrans3d(data.action1, [0, "-100%", 0])[0], { transition: "1.4s" });
        ltUtil.setCss3(setTrans3d(data.action2)[0], { transition: ".8s" });
    }

    function action2Out() {
        ltUtil.setCss3(setTrans3d(data.action2, [0, "-100%", 0])[0], { transition: "1.4s" });
        ltUtil.setCss3(setTrans3d(data.action3)[0], { transition: ".8s" });
    }
    function action3Out() {
        ltUtil.setCss3(setTrans3d(data.action3, [0, "-100%", 0])[0], { transition: "1.4s" });
        ltUtil.setCss3(setTrans3d(data.action4)[0], { transition: ".8s" });
    }

    function action4Out() {
        ltUtil.setCss3(setTrans3d(data.action4, [0, "-100%", 0])[0], { transition: "1.4s" });
        ltUtil.setCss3(setTrans3d(data.action5)[0], { transition: ".8s" });
    }

    function action5Out() {
        ltUtil.setCss3(setTrans3d(data.action5, [0, "-100%", 0])[0], { transition: "1.4s" });
        ltUtil.setCss3(setTrans3d(data.action6)[0], { transition: ".8s" });
    }

    function action6Out() {
        ltUtil.setCss3(setTrans3d(data.action6, [0, "-100%", 0])[0], { transition: "1.4s" });
        ltUtil.setCss3(setTrans3d(data.container)[0], { transition: ".8s" });
        setTimeout(function () {
            anwserShow(data.iNow);
        }, 1000);
    }

    data.action1.swipe("up", function () {
        action1Out()
    });
    data.action2.swipe("up", function () {
        action2Out()
    });
    data.action3.swipe("up", function () {
        action3Out()
    });
    data.action4.swipe("up", function () {
        action4Out()
    });
    data.action5.swipe("up", function () {
        action5Out()
    });
    data.action6.swipe("up", function () {
        action6Out()
    });
    function anwserShow(i) {//答案入场动画。
        ltUtil.setCss3(data.anwsers.eq(i).find(".anwser").eq(0)[0], { transform: "none" });
        ltUtil.setCss3(data.anwsers.eq(i).find(".anwser").eq(1)[0], { transform: "none" });
    }

    function nextAction() {//下一道题目
        data.iNow++;
        if (data.iNow > data.len - 1) {
            data.iNow = data.len - 1;
            if (data.score < 5) {
                data.result_text.hide();
                $("#result_text1").show();
            }
           // data.result.find(".score span").html(data.score);
            data.result.find(".title span").html(data.level[data.score * 1]);
            setTrans3d(data.result);
        }
        data.aLi.eq(data.iNow - 1).removeClass("active").addClass("prev");
        data.aLi.eq(data.iNow).addClass("active");
        data.aLi.eq(data.iNow).off(data.transitionEnd).on(data.transitionEnd, function () {
            anwserShow(data.iNow);
        });

    }
    data.result.swipe("up", function () {
        setTrans3d(data.result, [0, "-100%", 0]);
        setTrans3d(data.team);
    });

    data.anwsers.each(function () {
        $(this).tap(function (e, _this) {
            if (e.target.nodeName !== "SPAN") {
                return;
            }
            data.score += $(e.target).data("score") * 1;
            $(e.target).addClass("shadow");
            nextAction()
        });
    });

    function setSize(iW, iH) {
        data.aLi.width(iW).height(iH);
        data.container.height(iH);
        data.main.height(iH);
        data.index.height(iH);

    }

    function setBg() {

        var html = "#index{background:url(images/index.png) no-repeat center center;background-size:cover} \
            #action1{background:url(images/action1.png) no-repeat center center;background-size:cover}\
            #action3{background:url(images/1-1.jpg) no-repeat center center;background-size:cover}\
            #action4{background:url(images/2-1.jpg) no-repeat center center;background-size:cover}\
            #action5{background:url(images/2-2.jpg) no-repeat center center;background-size:cover}\
            #action6{background:url(images/3.jpg) no-repeat center center;background-size:cover}\
            #main figure{background:url(images/1.jpg) no-repeat center center;background-size:cover}\
            #team{background:url(images/team.jpg) no-repeat center center;background-size:cover}\
            #result{background:url(images/1.jpg) no-repeat center center;background-size:cover}";
   
        $("head").append("<style>" + html + "</style>"); 

    }

    function setTrans3d(obj, arr) {
        if (arguments.length === 1) {
            obj.css("-webkit-transform", "translate3d(0,0,0)");
            obj.css("transform", "translate3d(0,0,0)");
        }
        else {
            obj.css("-webkit-transform", "translate3d(" + arr[0] + "," + arr[1] + "," + arr[2] + ")");
            obj.css("transform", "translate3d(" + arr[0] + "," + arr[1] + "," + arr[2] + ")");
        }
        return obj;
    }
});