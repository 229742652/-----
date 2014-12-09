define(function (require, exports, module) {

    var iHeight = innerHeight;
    var oIndex = $("#index");
    var xuyan = $("#xuyan");
    xuyan.height(iHeight);
    var oNav = $("#nav");
    var wrap = $("#wrap");
    $("#hannue").height(iHeight);
    oNav.css({ top: iHeight - oNav.height() });
    wrap.height(iHeight).swipeUp(function (e) {
        xuyan.css({ top: 0, opacity: 1 }).on("webkitTransitionEnd", function () {
            oNav.show();
            $("#nav ul").setCss3({ transform: "scale(1)" });
            wrap.setCss3({ transform: "scale(0)" }).css({ opacity: 0 })
        });
    });
    localStorage.clear();
    loadImgByLocalStorage("images/logo.png", function (data) {
        if (isSupportBezier()) {
            $("#logo").attr("src", data).setCss3({ transform: "scale(1)", transition: "1s cubic-bezier(0.390, 1.650, 1.000, 1.650) 500ms" }).css({ opacity: 1 });
        }
        else {
            $("#logo").attr("src", data).setCss3({ transform: "scale(1)" }).css({ opacity: 1 });
        }
    });
    var shihun_img = $("#shihun img");
    loadImgByLocalStorage("images/shihun.png", function (data) {
        if (isSupportBezier()) {
            shihun_img.attr("src", data).setCss3({ transform: "scale(1)", transition: "1s cubic-bezier(0.390, 1.650, 1.000, 1.650) 1s" }).css({ opacity: 1 });
        }
        else {
            shihun_img.attr("src", data).setCss3({ transform: "scale(1)" }).css({ opacity: 1 });
        }
    });

    var sign = $("#main_nav .sign");
    shihun_img.on("webkitTransitionEnd", function () {
        if (isSupportBezier()) {
            sign.setCss3({ transform: "scale(1)" });
        }
        else {
            sign.each(function (i) {
                $(this).setCss3({ transform: "scale(1)", transition: "1s -webkit-transform " + (i * 300) + "ms" });
            });
        }
        seajs.use("linten-zepto-touch.js", function () {
            sign.tap(function (e) {
                var index = $(e.target).index();
                $("#nav ul li").removeClass("active");
                switch (index) {
                    case 0://旱虐
                        seajs.use("tapclick.js", function (ex) {
                            ex.hannue();
                        });
                        $("#nav ul li").eq(index).addClass("active");
                        break;
                    case 1://寻水
                        $("#nav ul li").eq(2).addClass("active");
                        seajs.use("tapclick.js", function (ex) {
                            ex.xunshui();
                        });
                        break;
                    case 2://账本
                        seajs.use("tapclick.js", function (ex) {
                            ex.zhangben();
                        });
                        $("#nav ul li").eq(3).addClass("active");
                        break;
                    case 3://问路
                        seajs.use("tapclick.js", function (ex) {
                            ex.wenlu();
                        });
                        $("#nav ul li").eq(4).addClass("active");
                        break;
                    case 4://往事
                        seajs.use("tapclick.js", function (ex) {
                            ex.wangshi();
                        });
                        $("#nav ul li").eq(1).addClass("active");
                        break;
                    case 5: //反馈。
                        seajs.use("tapclick.js", function (ex) {
                            ex.fankui();
                        });
                        break;
                }
                
            });
        });
    });
    $("#nav ul").tap(function (e) {
        if (e && e.target && e.target.nodeName.toLowerCase() === "li") {
            var index = $(e.target).index();
            tap(index);
            setLight(index);
        }
    });

    function setLight(index) {
        var aLi = $("#nav ul li");
        aLi.removeClass("active");
        aLi.eq(index).addClass("active");
    }


    var aSection = $(".section");
    function tap(index, obj) {

        switch (index) {

            case 0:
                seajs.use("tapclick.js", function (ex) {
                    ex.hannueEnd();
                });
                break;
            case 1:
                seajs.use("tapclick.js", function (ex) {
                    ex.loadCss("wangshi");
                    ex.wangshiEnd();
                });
                seajs.use("wangshi.js", function () { });
                break;
            case 2:
                seajs.use("tapclick.js", function (ex) {
                    ex.loadCss("xunshui");
                    ex.xunshuiEnd();
                });
                seajs.use("xunshui.js", function () { });
                break;
            case 3:
                seajs.use("tapclick.js", function (ex) {
                    ex.loadCss("zhangben");
                    ex.zhangbenEnd();
                });
                seajs.use("zhangben.js", function () { });
                break;
            case 4:
                seajs.use("tapclick.js", function (ex) {
                    ex.loadCss("wenlu");
                    ex.wenluEnd();
                });
                seajs.use("wenlu.js", function () { });
                break;
            case 5:
                seajs.use("tapclick.js", function (ex) {
                    ex.loadCss("fankui");
                    ex.fankuiEnd();
                });
                seajs.use("fankui.js", function () { });
                break;

        }

        aSection.hide();
        aSection.setCss3({ transform: "translateY(100%)" }).on("webkitTransitionEnd", function () {
        });

        aSection.eq(index).show();
        setTimeout(function () {
            aSection.eq(index).setCss3({ transform: "translateY(0)" });
        }, 300);

    }

    var code = $("#code");
    var code_img = $("#code img");
    var codeWidth = code.width();
    loadImgByLocalStorage("images/code.png", function (data) {
        code_img.attr("src", data).css({ width: codeWidth });
    });

    setTimeout(function () {
        code.width(0)
    }, 1000);

    loadImgByLocalStorage("images/jt1.png", function (data) {
        $("#code_nav").css("background", "url(" + data + ") no-repeat;");
    });
    var play = $("#play");

    var isIOS = /iphone|ipod|ipad/i.test(navigator.userAgent.toLowerCase());
    loadImgByLocalStorage("images/play.png", function (data) {
        if (isIOS) {
            play.css("background", "url(" + data + ") no-repeat;");
        }
        else {
            play.css("background", "url(" + data + ") no-repeat -36px 0;");
        }

    });

    var flag = true;
    $("#code_nav").tap(function () {
        if (flag) {
            code.width(codeWidth);
            loadImgByLocalStorage("images/jt2.png", function (data) {
                $("#code_nav").css("background", "url(" + data + ") no-repeat;");
            });
        }
        else {
            code.width(0);
            loadImgByLocalStorage("images/jt1.png", function (data) {
                $("#code_nav").css("background", "url(" + data + ") no-repeat;");
            });
        }
        flag = !flag;
    });


    var isStart = true;
    var audio = $("#audio");

    play.tap(function () {
        if (isIOS) {//苹果的设备
            if (isStart) {//
                audio[0].play();
                play.css({ backgroundPositionX: -36 });
            }
            else {
                audio[0].pause();
                play.css({ backgroundPositionX: 0 });
            }
            isStart = !isStart;
        }
        else {

            if (isStart) {//
                audio[0].pause();
                play.css({ backgroundPositionX: 0 });

            }
            else {
                audio[0].play();
                play.css({ backgroundPositionX: -36 });
            }
            isStart = !isStart;
        }

    });

});