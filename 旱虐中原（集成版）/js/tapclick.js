define(function (require, exports, module) {
    var mainSection = $("#main_nav section");
    var oNavUl = $("#nav ul");
    var wrap = $("#wrap");
    var xuyan = $("#xuyan");
    function hannue() {
        navMove();
        mainSection.eq(5).on("webkitAnimationEnd", function () {
            hannueEnd();
        }).on("webkitTransitionEnd", function () { hannueEnd() });
    }
     
    function wangshi() {
        loadCss("wangshi");
        navMove();
        seajs.use("wangshi.js", function () { });
        mainSection.eq(5).on("webkitAnimationEnd", function () {
            wangshiEnd()
        }).on("webkitTransitionEnd", function () { wangshiEnd() });
    }

    function xunshui() {
        loadCss("xunshui");
        navMove();
        setNavBg()
        seajs.use("xunshui.js", function () { });
        mainSection.eq(5).on("webkitAnimationEnd", function () {
            xunshuiEnd();
        }).on("webkitTransitionEnd", function () { xunshuiEnd(); });
    }

    function zhangben() {
        loadCss("zhangben");
        navMove();
        setNavBg()
        seajs.use("zhangben.js", function () { });
        mainSection.eq(5).on("webkitAnimationEnd", function () {
            zhangbenEnd();
        }).on("webkitTransitionEnd", function () { zhangbenEnd(); });
    }

    function wenlu() {
        loadCss("wenlu")
        navMove();
        setNavBg()
        seajs.use("wenlu.js", function () { });
        mainSection.eq(5).on("webkitAnimationEnd", function () {
            wenluEnd();
        }).on("webkitTransitionEnd", function () { wenluEnd(); });
    }

    function fankui() {
        loadCss("fankui");
        navMove();
        setNavBg()
        seajs.use("fankui.js", function () { });
        mainSection.eq(5).on("webkitAnimationEnd", function () {
            fankuiEnd();
        }).on("webkitTransitionEnd", function () { fankuiEnd(); });
    }

   
    function fankuiEnd() {
        wrap.hide();
        $("#fankui").show().setCss3({ transform: "translateY(0)" });;
        xuyan.hide();
        oNavUl.setCss3({ transform: "scale(1)" });
    }

    var head = $("head");
    function loadCss(cssName) {
        if (head.html().indexOf(cssName) <= -1) {
            head.append('<link href="css/' + cssName + '.css" rel="stylesheet" />');
        }
    }
     
    function wenluEnd() {
        wrap.hide();
        $("#wenlu").show().setCss3({ transform: "translateY(0)" });;
        xuyan.hide();
        oNavUl.setCss3({ transform: "scale(1)" });
    }

    
    function zhangbenEnd() {
        wrap.hide();
        $("#zhangben").show().setCss3({ transform: "translateY(0)" });;
        xuyan.hide();
        oNavUl.setCss3({ transform: "scale(1)" });
    }

    function xunshuiEnd() {
        wrap.hide();
        $("#xunshui").show().setCss3({ transform: "translateY(0)" });;
        xuyan.hide();
        oNavUl.setCss3({ transform: "scale(1)" });
    }

  
    function wangshiEnd() {
        wrap.hide();
        xuyan.hide();
        $("#wangshi").show().setCss3({ transform: "translateY(0)" });;
        
        oNavUl.setCss3({ transform: "scale(1)" });
    }

    var oHannue = $("#hannue");
    function hannueEnd() {
        wrap.hide();
        xuyan.hide();
        oHannue.show();
        seajs.use("hannue.js");
        setTimeout(function () {
            oHannue.setCss3({ transform: "translateY(0)" });
            $("#c1").setCss3({ transform: "translateX(0)", transition: "1200ms" }).css({ opacity: 1 });
            $("#c2").setCss3({ transform: "translateX(0)", transition: "700ms 600ms" }).css({ opacity: 1 });
            $(".block1 .first").setCss3({ transform: "scale(1)", transition: "1s 700ms" }).css({ opacity: 1 });
            $("#c3").css({ opacity: 1 }).setCss3({ transition: "800ms 1s" });
            $("#c4").css({ opacity: 1 }).setCss3({ transition: "1s 2s" });
            $(".block1 .b_text").setCss3({ transform: "translateY(0)", transition: "1s 3s" });
            oNavUl.setCss3({ transform: "scale(1)" });
        }, 200);
    }

    function setNavBg() {
        oNavUl.css({ background: "rgba(255,255,255,.7)" });
    }
    function navMove() {
        mainSection.each(function (i) {
            if (isSupportBezier()) {
                $(this).setCss3({ transition: "2s cubic-bezier(0.260, -0.600, 0.795, 0.800) " + (i * 200) + "ms" }).css({ top: -600 });
                //$(this).setCss3({ transitionOrigin: "0 0", animation: "rotateDowBounce 2s ease-in forwards " + (i * 200) + " ms" });
            }
            else {
                var _this = this;
                setTimeout(function () {
                    $(_this).addClass("rotate-down-bounce");
                }, i * 100);
                // $(this).setCss3({ transitionOrigin: "0 0", animation: "rotateDowBounce 2s ease-in forwards " + (i * 200) + " ms" });
            }
        });
    }

    exports.hannueEnd = hannueEnd;
    exports.wangshiEnd = wangshiEnd;
    exports.loadCss = loadCss;
    exports.fankui = fankui;//提供对外的接口。
    exports.fankuiEnd = fankuiEnd;//提供对外的接口。
    exports.wenlu = wenlu;//提供对外的接口。
    exports.wenluEnd = wenluEnd;//提供对外的接口。
    exports.zhangben = zhangben;//提供对外的接口。
    exports.zhangbenEnd = zhangbenEnd;//提供对外的接口。
    exports.xunshui = xunshui;//提供对外的接口。
    exports.xunshuiEnd = xunshuiEnd;//提供对外的接口。
    exports.wangshi = wangshi;//提供对外的接口。
    exports.hannue = hannue;//提供对外的接口。


});