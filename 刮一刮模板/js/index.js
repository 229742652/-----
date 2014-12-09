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

});
(function (doc) {

    

    doc.ontouchmove = function (e) {
        e.preventDefault();
    };

    /**判断浏览器是否支持canvas**/

    try {
        doc.createElement('canvas').getContext('2d');

    } catch (e) {
        var addDiv = doc.createElement('div');
        alert('您的手机不支持刮刮卡效果哦~!');
    }

    var u = navigator.userAgent,
        mobile = 'PC';

    if (u.indexOf('iPhone') > -1) mobile = 'iphone';

    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) mobile = 'Android';

    function createCanvas(parent, width, height) {
        var canvas = {};
        canvas.node = doc.createElement('canvas');
        canvas.context = canvas.node.getContext('2d');
        //此处可以自己给标签添加
        canvas.node.width = width || 320;

        canvas.node.height = height || 480;
        //给canvas标签添加Id
        /// canvas.node.id = 'canvasTag';
        
        parent.appendChild(canvas.node);
        return canvas;

    }

    function init(container, width, height, imgSrc) {

        var canvas = createCanvas(container, width, height);
        var ctx = canvas.context;
        // define a custom fillCircle method
        ctx.fillCircle = function (x, y, radius) {
            this.beginPath();
            this.moveTo(x, y);
            this.arc(x, y, radius, 0, Math.PI * 2, false);
            this.fill();

        };

        ctx.clearTo = function (imgSrc) {
            var img = new Image();
            img.onload = function () {
                ctx.drawImage(this, 0, 0, width, height);
            }
            img.src = imgSrc;
        };
        ctx.clearTo(imgSrc);
        canvas.node.addEventListener(mobile == "PC" ? "mousedown" : "touchstart", function (e) {
            canvas.isDrawing = true;
        }, false);
        canvas.node.addEventListener(mobile == "PC" ? "mouseup" : "touchend", function (e) {
            canvas.isDrawing = false;
        }, false);

        canvas.node.addEventListener(mobile == "PC" ? "mousemove" : "touchmove", function (e) {
            e.preventDefault && e.preventDefault();
            if (!canvas.isDrawing) {
                return;
            }
            if (mobile === 'Android' || mobile === "iphone") {
                var x = e.changedTouches[0].pageX - this.offsetLeft;
                var y = e.changedTouches[0].pageY - this.offsetTop;

            } else {
                var x = e.pageX - this.offsetLeft;
                var y = e.pageY - this.offsetTop;
            }
            var radius = 20;
            var fillColor = '#ff0000';
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillCircle(x, y, radius, fillColor);

        }, false);
    }

    var boxes = $("#main li");
    boxes.each(function () {
        init($(this)[0], innerWidth, innerHeight, "images/2.jpg");
    }); 
})(document)