$(function () {
    var data = {
        iWidth: document.documentElement.clientWidth,
        iHeight: document.documentElement.clientHeight, 
        index: $("#index"),
        xu: $("#xu"),
        iNow:0,
        action: $(".action"),
        mask: $("#mask"),
        look: $(".look"),
        person: $(".person"),
        team:$("#team"),
        len: $(".action").size(),//11
        mydesire: $("#mydesire"),
        share:$("#share"),
        transitionEnd: "onwebkittransitionend" in window ? "webkitTransitionEnd" : "transitionend",
        imgLoadingArr: [
           "images/1.jpg",
            "images/1.png",
            "images/1-1.png",
            "images/2.jpg",
            "images/2.png",
            "images/2-1.png",
            "images/3.jpg",
            "images/3.png",
            "images/3-1.png",
            "images/4.jpg",
            "images/4.png",
            "images/4-1.png",
            "images/5.jpg",
            "images/5.png",
            "images/5-1.png",
            "images/6.jpg",
            "images/6.png",
            "images/6-1.png",
            "images/7.jpg",
            "images/7.png",
            "images/7-1.png",
            "images/8.jpg",
            "images/8.png",
            "images/8-1.png",
            "images/9.jpg",
            "images/9.png",
            "images/9-1.png",
            "images/10.jpg",
            "images/10.png",
            "images/10-1.png",
            "images/arron.png",
            "images/bg.jpg",
            "images/bottle.png",
            "images/denglong.png",
            "images/hand.png",
            "images/index.png",
            "images/info.png",
            "images/ioc.png",
            "images/lt_loading.png",
            "images/snow.png",
            "images/tap.png",
            "images/team.png",
            "images/title.png",
            "images/tree.png",
            "images/xu.jpg",
            "images/xy.png",
            "images/yw.png"
        ]
    }
    data.iWidth = data.index.width();
    $(document).on("touchmove", function (e) { e.preventDefault() }).on("DOMMouseScroll", function (e) { e.preventDefault(); }).on("mousewheel", function (e) { e.preventDefault(); });

    ltUtil.ltLoading(data.imgLoadingArr, function () {
        data.index.find("img").each(function () {
            if ($(this).attr("src") !== $(this).data("src")) {
                $(this).attr("src", $(this).data("src"))
            }
        });
        data.action.find("img").each(function () {
            if ($(this).attr("src") !== $(this).data("src")) {
                $(this).attr("src", $(this).data("src"))
            }
        });
        $("#cloud img").attr("src", $("#cloud img").data("src"));
        setSize(data.iWidth, data.iHeight);
        setBg();
        setTrans3d(data.index);
        setTrans3d($("#loading"), [0, "-100%", 0]).off(data.transitionEnd).on(data.transitionEnd, function () {
            indexIn();
        });

    }, { id: "loading" })
    
    data.mydesire.find("textarea").on("focus", function () {//获取焦点
        data.share.hide();
    }).on("blur", function () {//失去焦点
        data.share.show();
        
    });

    data.share.tap(function () {
        var value = data.mydesire.find("textarea").val();
        document.title = "我的愿望是：" + value;
        $("body").append("<div class='mask1' id='mask1' style=\"height:" + (data.iHeight) + "px\"><img width='122'  height='122' src='images/arron.png'><p>请点击右上角<br/>点击【分享到朋友圈】<br/>与好友共分享吧</p></div>");
        setTimeout(function () {
            $("#mask1").remove();
        }, 5000);
    });
    data.mydesire.swipe("up", function () {
        setTrans3d(data.mydesire, [0, "-100%", 0]);
        setTrans3d(data.team);
    })
    

    function indexIn() {
        setTrans3d(data.index.find(".title"));
        setTrans3d(data.index.find(".denglong"));
        ltUtil.setCss3(data.index.find(".tap").css({ top: "3%" })[0], { transform: "scale(.5) translate3d(0,0,0)" });
        
        data.index.find(".person").each(function (i) {
            ltUtil.setCss3($(this)[0], { transitionDelay: (i * 200 + 1200) + "ms", transform: "scale(.7)" });
        });

        fnEnd(data.index.find(".person").eq(-1), function () {
            data.index.find(".person").each(function (i) {
                ltUtil.setCss3($(this)[0], { transform: "scale(1)", transition: "1s", transitionTimingFunction: "cubic-bezier(0.215, -0.540, 0.895, 1.650)" });
            });
            data.index.find(".tree").css({ opacity: 1 });
            ltUtil.setCss3(data.index.find(".tap").addClass("animation").css({ top: "13%" })[0], { transform: "translateY(10%)" });
        });
        fnEnd(data.index.find(".tree"), function () { 
            ltUtil.setCss3($(".info").css({ opacity: 1 })[0], { animation: "shake 1s linear infinite" });
            data.index.find(".hand").css({ opacity: 1 });
            setTimeout(function () {
                data.index.find(".hand").remove();
            },6000);
        }); 
    }

    data.index.swipe("up", function () {
        xuIn();
    }).tap(function (e, _this) {
        var parent = $(e.target).parent();
        if (parent.attr("class").indexOf("person") > -1) {
            var id = parent.data("id");
           
            setTrans3d(data.index, [0, "-100%", 0]);
            setTrans3d(data.xu, [0, "-100%", 0]);
            setTrans3d(data.action.eq(id));
            data.iNow = id+1;
        }
    });

    function xuIn() {
        
        ltUtil.setCss3(setTrans3d(data.index, [0, "-100%", 0])[0], { transition: "1s" });
        ltUtil.setCss3(setTrans3d(data.xu)[0], { transition: ".7s" });
        data.iNow++;
    } 
    
    data.action.each(function (i) {
        data.action.eq(i).swipe("up",function () {
            actionIn(data.iNow);
        });
    });

    data.look.each(function () {///查看愿望
        $(this).tap(function (e, _this) {
            setTrans3d(data.mask); 
            data.mask.find("div img").attr("src", "images/" + (data.iNow-1) + "-1.png");
            setTrans3d(data.mask.find("div")).css({ opacity: 1 });
        });
    });

    data.mask.tap(function (e) {
        if (e.target.nodeName === "SPAN" ) {
            setTrans3d(data.mask,["100%",0,0]);
            setTrans3d(data.mask.find("div"), ["100%", 0, 0]).css({ opacity: 0 });
        }
    });
     
    function actionIn(iNow) { 
        if (iNow<=data.len-1) {
            ltUtil.setCss3(setTrans3d(data.action.eq(iNow - 1), [0, "-100%", 0])[0], { transition: "1s" });
            ltUtil.setCss3(setTrans3d(data.action.eq(iNow))[0], { transition: ".7s" });
            data.iNow++;
        }
        else {
            data.iNow = data.len - 1;
            data.iNow = data.len - 1;
            setTrans3d(data.mydesire);
            setTrans3d(data.action.eq(-1), [0, "-100%", 0]);
        }
        
    }

    function fnEnd(obj,fn) {
        obj.off(data.transitionEnd).on(data.transitionEnd, function () {
            fn && fn();
        })
    }


    function setSize(iW, iH) { 
    }
     
    function setBg() {
        
        var html = "#index{background:url(images/index.png) no-repeat center center;background-size:cover} \
            #xu{background:url(images/xu.jpg) no-repeat center center;background-size:cover}";
        
        data.action.each(function (i) {
            if (i > 0) {
                //  $(this).css({ background: "url(images/" + i + ".jpg) no-repeat center center", backgroundSize: "cover" });
                html += ".action:nth-of-type("+(i+3)+"){\
                    background:url(images/" + (i) + ".jpg) no-repeat center center;\
                    background-size:cover;\
                }";
            }
        });
        html += "#mask{background:url(images/bg.jpg) no-repeat center center;background-size:cover}";
        html += "#mydesire{background:url(images/yw.png) no-repeat center center;background-size:cover}";
        html += "#team{background:url(images/team.png) no-repeat center center;background-size:cover}";
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