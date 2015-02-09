(function ($) {
    $.fn.extend({
        setCss3: function (attr) {
            for (var i in attr) {
                var newI = i;
                if (newI.indexOf('-') > 0) {
                    var num = newI.indexOf('-');
                    newI = newI.replace(newI.substr(num, 2), newI.substr(num + 1, 1).toUpperCase())
                }
                this.css(newI, attr[i]);
                newI = newI.replace(newI.charAt(0), newI.charAt(0).toUpperCase());
                this.css("webkit" + newI, attr[i]);
                this.css("moz" + newI, attr[i]);
                this.css("ms" + newI, attr[i]);
                this.css("o" + newI, attr[i])
            }
            return this;
        }
    })
})(jQuery);

(function () {
    //$(document).on("mousewheel", function (e) { e.preventDefault && e.preventDefault(); }).on("DOMMouseScroll", function () { e.preventDefault && e.preventDefault(); });
    var data = {
        container: $("#container"),
        column: $("#container .column"),
        transitionEnd: "onwebkittransitionend" in window ? "webkitTransitionEnd" : "transitionend",
        item: $("#container .column ul li"),
        border: $("#border"),
        iHeight:document.documentElement.clientHeight,
        content: $("#container .column .content"),
        isShow: false,
        loadImgArr: [
            "http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-2.png",
            "http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-3.png",
            "http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-4.png",
            "http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-5.png",
            "http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-6.png",
            "http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-7.png",
            "http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-7-1.png",
            "http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-8.png",
            "http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-9.png",
            "http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-10.png",
            "http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-11.png",
            "http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-12.png",
            "http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-13.png",
            "http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-14.png",
            "http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-15.png",
            "http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-16.png",
            "http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-17.png",
            "http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-logo.png",
        ]
    };

    window.data = data;
})();

!function ($, doc, win) {
    ltUtil.imgLoader(data.loadImgArr, function () {//图片加载完成。
        init();
    })
    
    function init() {
        setTrans3d(data.item.css({ opacity: 1 }));
        setAnimation(2);
        setTimeout(function () {
            removeAnmation();
            data.container.find(".brand").on("mouseover", function () {
                setAnimation(1);
            }).on("mouseout", function () {
                removeAnmation();
            });
        }, 5500);


        data.column.on("click", function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;
            if ($(target).parent().hasClass("tag")) {
                if (!data.isShow) {
                    data.isShow = true;
                    var target = $(target).parent();
                    var index = target.index(".tag");
                    data.content.hide();
                    data.content.eq(index).show();
                    pannelShow(data.content.eq(index)[0]);
                }
            }
            else if ($(target).hasClass("close")) {
                var index = $(target).index(".close");
                data.isShow = false;
                pannelHide(data.content.eq(index)[0]);

            }
        });



        !function () {
            var canvas = document.getElementById("canvas");
            canvas.width = document.documentElement.clientWidth * .8;
            canvas.height = document.documentElement.clientHeight * .4;
            var context = canvas.getContext("2d");
            $(canvas).css({ marginLeft: -canvas.width / 2 });
            var w = canvas.width, h = canvas.height;
            var targetImg = null;
            imgLoader("http://images1.wenming.cn/web_wenming/images/hr365-nzch2014-logo.png", loaded);
            var defaultPos = [];
            var lastPos = [];
            var m = Math;
            function loaded(img) {
                targetImg = img;
                var imgW = img.width, imgH = img.height;
                var pixX = 100, pixY = 50;
                var oneW = imgW / pixX, oneH = imgH / pixY;
                var left = (w - imgW) / 2, top = $("#hidden").height()// (h - imgH) / 2;
                for (var i = 0; i < pixX; i++) {
                    for (var j = 0; j < pixY; j++) {
                        var pos = {
                            sx: i * oneW,
                            sy: j * oneH,
                            sw: oneW,
                            sh: oneH,
                            x: i * oneW + left,
                            y: j * oneH + top,
                            ew: oneW,
                            eh: oneH
                        };
                        defaultPos.push(pos);

                    }
                }

                for (var i = 0; i < defaultPos.length; i++) {
                    context.save();
                    var endX = w * m.sin(m.random() * m.PI) + m.sin(m.random() * 2 * m.PI) * 100, endY = h * 1 * m.sin(m.random() * m.PI) + m.sin(m.random() * 2 * m.PI) * 100;
                    context.drawImage(img, defaultPos[i].sx, defaultPos[i].sy, defaultPos[i].sw, defaultPos[i].sh, endX, endY, defaultPos[i].ew, defaultPos[i].eh);
                    lastPos.push({ x: endX, y: endY });
                    context.restore();
                }
            }
            var isStart = false;
            setTimeout(function () {
                startMove(targetImg, lastPos, defaultPos, 2000, "easeBothStrong", function () {
                    isStart = true;
                });
            }, 500);
            
            $("#canvas").on("mouseover", function () {
                if (isStart) {
                    isStart = false;
                    startMove(targetImg, defaultPos, lastPos, 2000, "easeBothStrong", function () {
                        startMove(targetImg, lastPos, defaultPos, 2000, "easeBothStrong", function () {
                            isStart = true;
                        });
                    });
                }
                
            });

            var timer = null;

            function startMove(img, sourceArr, targetArr, times, fx, fn) {
                var len = lastPos.length;

                var startTime = now();
                timer && window.cancelNextAnimationFrame(timer);
                timer = window.requestNextAnimationFrame(move);
                context.fillStyle = "#f00";

                function move() {
                    context.clearRect(0, 0, w, h);
                    var changeTime = now();

                    var scale = 1 - Math.max(0, startTime - changeTime + times) / times;

                    var i = 0
                    for (; i < len; i++) {
                        var valueX = ltTween[fx](scale * times, parseFloat(sourceArr[i]["x"]), parseFloat(targetArr[i]["x"]) - parseFloat(sourceArr[i]["x"]), times);
                        var valueY = ltTween[fx](scale * times, parseFloat(sourceArr[i]["y"]), parseFloat(targetArr[i]["y"]) - parseFloat(sourceArr[i]["y"]), times);

                        context.drawImage(img, defaultPos[i].sx, defaultPos[i].sy, defaultPos[i].sw, defaultPos[i].sh, valueX, valueY, defaultPos[i].ew, defaultPos[i].eh);
                    }

                    if (scale === 1) {
                        window.cancelNextAnimationFrame(timer);
                        fn && fn();
                    }
                    else {
                        timer = window.requestNextAnimationFrame(move);
                    }
                }
                function now() {
                    return (new Date()).getTime();
                }
            }
            function imgLoader(src, fn) {
                var img = new Image();
                img.onload = function () {
                    fn && fn(this);
                }
                img.src = src;
            }
        }();
    }

    function pannelShow(obj) {
        data.column.find("li").off(data.transitionEnd).setCss3({transitionDuration:"1s" /*1s*/}).css({ opacity: .5 });
        data.column.find("li").eq(-1).off(data.transitionEnd).on(data.transitionEnd, function () {
            ltUtil.startMove(obj, { scaleX: 1 }, 1200/*1200*/, "elasticBoth", function () {
                ltUtil.startMove(obj, { height: data.iHeight ,top:-50}, 1000, "elasticBoth", function () {
                    $("html,body").animate({ scrollTop: data.iHeight-200 }, 800/*800*/);
                });
            });
        })
      
    }

    function pannelHide(obj) {
        ltUtil.startMove(obj, { height: 200,top:0 }, 1200, "elasticBoth", function () {
            ltUtil.startMove(obj, { scaleX: 0 }, 1000, "elasticBoth");
            data.column.find("li").off(data.transitionEnd).css({ opacity: 1 });
        });
    }
    function setAnimation(count) {
        data.container.find(".item").each(function (i) {
            $(this).setCss3({ animation: "shake 2s " + (i * 250) + "ms  " + count + "  ease-in-out  alternate" });
        });
        data.container.find(".brand ul li").each(function (i) {
            $(this).setCss3({ animation: "shadow 2s " + (i * 250) + "ms " + count + "  ease-in-out  alternate" });
        });

    }

    function removeAnmation() {
        data.container.find(".item").each(function (i) {
            $(this).setCss3({ animation: "none" });
        });
        data.container.find(".brand ul li").each(function (i) {
            $(this).setCss3({ animation: "none" });
        });
    }
         
    

}(jQuery, document, window);
   
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

!function () { //canvas 动画
    var timer = true;
    particle_no = 25;


    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) {
              window.setTimeout(callback, 1000 / 60);
          };
    })();

    var canvas = data.border[0];
    var ctx = canvas.getContext("2d");

    var counter = 0;
    var particles = [];

    var w = data.border.width(), h = 100;
    canvas.width = w;
    canvas.height = h;

    function reset() {

        ctx.clearRect(0, 0, w, h);

        //ctx.fillStyle = "#cc3333";
        //ctx.fillRect(25, 80, 350, 25);
    }

    function progressbar() {
        this.widths = 0;
        this.hue = 0;

        this.draw = function () {
            ctx.fillStyle = "#cc3333";
            ctx.fillRect(25, 92, this.widths, 8);
        }
    }

    function particle() {
        this.x = 23 + bar.widths;
        this.y = 92;

        this.vx = 0.8 + Math.random() * 1;
        this.v = Math.random() * 5;
        this.g = 1 + Math.random() * 3;
        this.down = false;

        this.draw = function () {
            ctx.fillStyle = 'hsla(' + (bar.hue + 0.3) + ', 100%, 40%, 1)';;
            var size = Math.random() * 2;
            ctx.fillRect(this.x, this.y, size, size);
        }
    }

    bar = new progressbar();

    function draw() {
        reset();
        counter++

        // bar.hue += 0.8;

        bar.widths += 6;
        if (bar.widths > w) {
            timer = false;
            data.border.css({ zIndex: -1 });
            if (counter > 400) {
                reset();
                bar.hue = 0;
                bar.widths = w;
                counter = 0;
                particles = [];
            }
            else {
                bar.hue = 126;
                bar.widths = w;
                bar.draw();
            }
        }
        else {
            bar.draw();
            for (var i = 0; i < particle_no; i += 10) {
                particles.push(new particle());
            }
            update();
        }

    }

    function update() {
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            p.x -= p.vx;
            if (p.down == true) {
                p.g += 0.1;
                p.y += p.g;
            }
            else {
                if (p.g < 0) {
                    p.down = true;
                    p.g += 0.1;
                    p.y += p.g;
                }
                else {
                    p.y -= p.g;
                    p.g -= 0.1;
                }
            }
            p.draw();
        }
    }

    function animloop() {
        draw();
        timer && requestAnimFrame(animloop);
    }
    animloop();
}(); //canvas动画。


