$(function () {
    var data = {
        iWidth: document.documentElement.clientWidth,
        iHeight: document.documentElement.clientHeight,
        container: $("#container"),
        main: $("#main"),
        aLi: $("#main li"),
        len: $("#main li").size(),
        animate: ["lightSpeedIn", "slideDown", "slideUp", "slideLeft", "slideRight",
                  "slideExpandUp", "expandUp", "fadeIn", "expandOpen", "bigEntrance",
                  "hatch", "bounce", "pulse", "floating", "pullUp", "pullDown",
                  "stretchLeft", "stretchRight", "tada", "flip", "rubberBand", "zoomOutUp"] //22种动画效果。
    }
    setSize(data.iWidth, data.iHeight);
    function setSize(iW, iH) {
        data.aLi.width(iW).height(iH);
        data.container.height(iH);
    }

    function go(i, fn) {
        data.main.css("-webkit-transform", "translate3d(0," + (-i * data.iHeight) + "px,0)").off("webkitTransitionEnd").on("webkitTransitionEnd", function () {
            fn && typeof fn === "function" && fn();
        });
        
    }

    //new Slider({ slider: $("#lt_slider") });
    var iNow = 0;
    data.main.slider({
        isNeedProcess: false,
        sliderMove: function (t) {
            data.main.css("-webkit-transition", "none")
        },
        sliderEnd: function (t) {//t表示为手指移动的距离/
            if (t > 0) {//手指向上滑动.
                if (t >= data.iHeight / 3) {
                    iNow++;
                    data.main.css("-webkit-transition", "200ms -webkit-transform");
                    go(iNow);
                }
            }else if (t < 0) {//手指向下滑动

            }
        },
        updateY: function (lastY) {
            lastY = -iNow * data.iHeight;
            return lastY;
        }

        
    });
});
 
 

 