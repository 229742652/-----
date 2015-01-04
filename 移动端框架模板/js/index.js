$(function () {
    var data = {
        iWidth: document.documentElement.clientWidth,
        iHeight: document.documentElement.clientHeight,
        container: $("#container"),
        index: $("#index"),
        transitionEnd: "onwebkittransitionend" in window ? "webkitTransitionEnd" : "transitionend",
        main: $("#main"),
        aLi: $("#main li"),
        len: $("#main li").size(),
        animate: ["lightSpeedIn", "slideDown", "slideUp", "slideLeft", "slideRight",
                  "slideExpandUp", "expandUp", "fadeIn", "expandOpen", "bigEntrance",
                  "hatch", "bounce", "pulse", "floating", "pullUp", "pullDown",
                  "stretchLeft", "stretchRight", "tada", "flip", "rubberBand", "zoomOutUp"] //22种动画效果。
    }
    $(document).on("touchmove", function (e) { e.preventDefault() }).on("DOMMouseScroll", function (e) { e.preventDefault(); }).on("mousewheel", function (e) { e.preventDefault(); })
    setSize(data.iWidth, data.iHeight);
    function setSize(iW, iH) {
        data.aLi.width(iW).height(iH);
        data.container.height(iH);
    }

    var iNow = 0;
    data.main.swipe("up", function () {
        iNow++;
        if (iNow >= data.len - 1) {
            iNow = data.len - 1;
        }
        go(iNow, function () {
            data.aLi.eq(iNow).find("img").addClass("flip");
        });
    }).swipe("down", function () {
        iNow--;
        if (iNow <= 0) {
            iNow = 0;
        }
        go(iNow, function () {
            data.aLi.eq(iNow).find("img").addClass("flip");
        });
    });

    function go(i, fn) {
        data.main.css("-webkit-transform", "translate3d(0," + (-i * data.iHeight) + "px,0)").off("webkitTransitionEnd").on("webkitTransitionEnd", function () {
            fn && typeof fn === "function" && fn();
        });
    }

    function setBg() {
        var html = "#index{background:url(images/index.png) no-repeat center center;background-size:cover}";
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