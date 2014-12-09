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
                  "stretchLeft", "stretchRight", "tada", "flip", "rubberBand", "zoomOutUp"], //22种动画效果。

        shape: $("#main li .shape"),
        meeting: $("#main li .meeting"),
        nav: $("#main li .nav"),
        block: $("#main li .block"),
        box: $("#main li .box"),
        back: $("#back"),
        video: $("#video"),
        mask: $("#mask"),
        mask1: $("#mask1")
        

    }


    data.nav.find("div").each(function (i,n) {
        $(this).tap(function () {
            switch (i) {
                case 0:
                    iNow = 1;
                    break;
                case 1:
                    iNow = 6;
                    break;
                case 2:
                    iNow = 13;
                    break;

            }
            dec = true;
            go(iNow, function () {
                end(iNow)
            })
        });
    });

    setSize(data.iWidth, data.iHeight);
    function setSize(iW, iH) {
        data.aLi.width(iW).height(iH);
        data.container.height(iH);
    }

    data.back.tap(function () {
        iNow = 0;
        go(iNow);
    });

    var iNow = 0;
    var dec = true;
    data.main.swipe("up", function () {
        iNow++;
        dec = true;
        if (iNow!==16) {
            data.video[0].pause();
        }
        data.back.css({opacity:0})
        if (iNow >= data.len - 1) {
            iNow = data.len - 1;
        }
        go(iNow, function () {
            end(iNow)
            data.back.css({ opacity: 1 });
             
        });
    }).swipe("down", function () {
        iNow--;
        dec = false;
        if (iNow !== 16) {
            data.video[0].pause();
        }
        data.back.css({ opacity: 0 })
        if (iNow <= 0) {
            iNow = 0;
        }
        go(iNow, function () {
            end(iNow)
            data.back.css({ opacity: 1 })
        });
    });

    
     
    function end(iNow) {
        switch (iNow) {
            case 1:
                if (dec) {
                    data.mask.css({ opacity: 1, zIndex: 100 })
                    setTimeout(function () {
                        data.mask.css({ opacity: 0, zIndex: 0 })
                        data.shape.eq(1).addClass("bounceInUp");
                        data.block.eq(0).addClass("slideLeft");
                        data.block.eq(1).addClass("slideRight").off("webkitAnimationEnd").on("webkitAnimationEnd", function () {
                            data.box.eq(0).addClass("opacity_1 bigEntrance")
                        });
                    }, 2000)
                }
                else {
                    data.mask.css({ opacity: 0, zIndex: 0 })
                    data.shape.eq(1).addClass("bounceInUp");
                    data.block.eq(0).addClass("slideLeft");
                    data.block.eq(1).addClass("slideRight").off("webkitAnimationEnd").on("webkitAnimationEnd", function () {
                        data.box.eq(0).addClass("opacity_1 bigEntrance")
                    });
                }
                
                
                break;
            case 2:
                data.aLi.eq(2).find(".rect").addClass("animated lightSpeedIn")
                data.aLi.eq(2).find(".rect1").addClass("animated lightSpeedIn1")
                data.aLi.eq(2).find(".rect2").addClass("animated lightSpeedIn")
                data.box.eq(1).addClass("opacity_1 bigEntrance")
                break;
            case 3:
                data.aLi.eq(3).find(".block1").addClass("slideLeft");
                data.aLi.eq(3).find(".block2").addClass("slideRight").off("webkitAnimationEnd").on("webkitAnimationEnd", function () {
                    data.aLi.eq(3).find(".box").addClass("opacity_1 bigEntrance")
                });
                break;

            case 4:
                data.aLi.eq(4).find(".block").addClass("slideLeft");
                data.aLi.eq(4).find(".count").addClass("slideRight")
                break;
            case 6:
               
                break;
        }
    }
   
    function go(i, fn) {
        data.main.css("-webkit-transform", "translate3d(0," + (-i * data.iHeight) + "px,0)").off("webkitTransitionEnd").on("webkitTransitionEnd", function () {
            fn && typeof fn === "function" && fn();
        });

        data.aLi.eq(i).find("img").each(function () {
            if ($(this).attr("src") !== $(this).data("src")) {
                $(this).attr("src", $(this).data("src"))
            }
        })
    }
     

    var arrImage = ["images/1.jpg","images/1/2014.png","images/1/link.png"];
    LoadImages(arrImage, function () {
        data.shape.eq(0).addClass("opacity_1 bounceInDown");
        data.meeting.css({opacity:1}).addClass("bounceInUp").off("webkitAnimationEnd").on("webkitAnimationEnd", function () {
            data.nav.css({ opacity: 1 }).addClass("bounceInUp");

        });
    });
    function LoadImages(arr,fn) {
        var len = arr.length;
        var count = 0;
        var i = 0;
        loadimg();
        function loadimg() {
            if (i === len) {
                return;
            }
            var img = new Image();
            img.onload = function () {
                count++;
                if (i < len - 1) {
                    i++;
                    loadimg();
                };
                if (count/len>=1) {
                    fn && fn();
                }
            };
            img.onerror = function () {
                count++;
                if (i < len - 1) {
                    i++;
                    loadimg();
                };
                if (count / len >= 1) {
                    fn && fn();
                }
            }
            img.src = arr[i];
        }
    }

});