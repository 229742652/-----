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
        text_content1: $("#text_content1"),
        text_content2: $("#text_content2"),
        text_content3: $("#text_content3"),
        text_content4: $("#text_content4"),
        text_content5: $("#text_content5"),
        endText:$("#end_text"),
        time: $("#time"),
        audio: $("#audio"),
        play: $("#play"),
        imgLoadingArr: [
            "images/1.png",
            "images/2.png",
            "images/3.png",
            "images/4.jpg",
            "images/5.jpg",
            "images/6.jpg",
            "images/7.jpg",
            "images/8.jpg",
            "images/9.jpg",
            "images/10.jpg",
            "images/300.jpg",
            "images/hmx.png",
            "images/index.jpg",
            "images/info.png",
            "images/lt_loading.png",
            "images/team.jpg",
            "images/text.png",
            "images/time.jpg", 
            "images/title.png"
        ]
    }

    data.iWidth = data.index.width();
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

    $(document).on("touchmove", function (e) { e.preventDefault() }).on("DOMMouseScroll", function (e) { e.preventDefault(); }).on("mousewheel", function (e) { e.preventDefault(); })

    ltUtil.ltLoading(data.imgLoadingArr, function () {
        setSize(data.iWidth, data.iHeight);
      
        setBg();
        data.aLi.find("img").each(function () {
            if ($(this).attr("src") !== $(this).data("src")) {
                $(this).attr("src", $(this).data("src"));
            }
        });

        setTrans3d($("#loading"), [0, "-100%", 0]).off(data.transitionEnd).on(data.transitionEnd, function () {
            indexIn();
            $(".text_content").height(data.iHeight - $(".text_content").offset().top);
            data.text_content1.find("div").slider({ isNeedProcess: true });
            data.text_content2.find("div").slider({ isNeedProcess: true });
            data.text_content3.find("div").slider({ isNeedProcess: true });
            data.text_content4.find("div").slider({ isNeedProcess: true });
            data.text_content5.find("div").slider({ isNeedProcess: true });
        });
        
    }, {id:"loading"});
     
    
  
    var iNow = 0;
    function indexIn() {
        data.index.find("figure").each(function () {
            setTrans3d($(this));
        }); 
        var arr = data.endText.html().split('');
        var len = arr.length;
        var html = "";

        for (var i = 0; i < len; i++) {
            if (arr[i] !== "\n" && arr[i] !== " ") {
                html += "<span>" + arr[i] + "</span>";
            }
        }
        data.endText.html(html);
    }
    //setTrans3d(data.index, [0, "-100%", 0]);
    data.index.swipe("up", function () {
        setTrans3d(data.index, [0, "-100%", 0]);
    });
    
    function textAnimation() {
        data.endText.find("span").each(function (i) {
            var _this = this; 
            ltUtil.setCss3(setTrans3d($(_this)).css({ opacity: 1 })[0], { transition: "250ms " + (100 * i) + "ms" });
        });
    }

    //
    data.main.tap(function (e,_this) {
        if (e.target.className.indexOf("active") > -1) {
            data.time.css({ zIndex: 1000, opacity: 1 });
            setTimeout(function () {
                iNow = 3;
                go(iNow);
            }, 1000);
            data.time.find("img").css("-webkit-transform", "translate3d(0,0,300px) rotate(0deg)").css("transform", "translate3d(0,0,300px) rotate(0deg)").off(data.transitionEnd).on(data.transitionEnd, function () {
                data.time.css({ opacity: 0 }).off(data.transitionEnd).on(data.transitionEnd, function () {
                    setTimeout(function () {
                        data.time.css({ zIndex: 0 });
                    },1000);
                });
                data.time.find("img").off(data.transitionEnd).css("-webkit-transform", "translate3d(0,0,0) rotate(-360deg)").css("transform", "translate3d(0,0,0) rotate(-360deg)");
                
            });
        }
    });
    
   
    function setSize(iW, iH) {
        data.aLi.width(iW).height(iH);
        data.container.height(iH);
    }
     
    data.main.swipe("up", function () {
        iNow++;
        if (iNow >= data.len - 1) {
            iNow = data.len - 1;
        }
        if (iNow===3 || iNow === 9) {
            data.time.css({ zIndex: 1000, opacity: 1 });
            data.time.find("img").css("-webkit-transform", "translate3d(0,0,300px) rotate(0deg)").css("transform", "translate3d(0,0,300px) rotate(0deg)").off(data.transitionEnd).on(data.transitionEnd, function () {
                data.time.css({ opacity: 0 }).off(data.transitionEnd).on(data.transitionEnd, function () {
                    setTimeout(function () {
                        data.time.css({ zIndex: 0 });
                    }, 1000);
                });
                data.time.find("img").off(data.transitionEnd).css("-webkit-transform", "translate3d(0,0,0) rotate(-360deg)").css("transform", "translate3d(0,0,0) rotate(-360deg)");

            });
            setTimeout(function () {
                go(iNow, function () {
                    data.aLi.eq(iNow).find("img").addClass("flip");
                });
            },1000);
        }
        else {
            go(iNow, function () {
                data.aLi.eq(iNow).find("img").addClass("flip");
            });
        }
        
    }).swipe("down", function () {
        iNow--;
        if (iNow <= 0) {
            iNow = 0;
        }
        //if (iNow === 3) {
        //    data.time.css({ zIndex: 1000, opacity: 1 });
        //    data.time.find("img").css("-webkit-transform", "translate3d(0,0,300px) rotate(0deg)").css("transform", "translate3d(0,0,300px) rotate(0deg)").off(data.transitionEnd).on(data.transitionEnd, function () {
        //        data.time.css({ opacity: 0 }).off(data.transitionEnd).on(data.transitionEnd, function () {
        //            setTimeout(function () {
        //                data.time.css({ zIndex: 0 });
        //            }, 1000);
        //        });
        //        data.time.find("img").off(data.transitionEnd).css("-webkit-transform", "translate3d(0,0,0) rotate(-360deg)").css("transform", "translate3d(0,0,0) rotate(-360deg)");

        //    });
        //    setTimeout(function () {
        //        go(iNow, function () {
        //            data.aLi.eq(iNow).find("img").addClass("flip");
        //        });
        //    }, 1000);
        //} else {
        //    go(iNow, function () {
        //        data.aLi.eq(iNow).find("img").addClass("flip");
        //    });
        //}
        go(iNow, function () {
          
        });
        
    });

    function go(i, fn) {
        setTrans3d(data.main, [0, (-i * data.iHeight) + "px", 0]).off(data.transitionEnd).on(data.transitionEnd, function () {
            if (i === 9) {
                setTimeout(function () {
                    textAnimation();
                },2000);
            }
             
            fn && typeof fn === "function" && fn();
        });
    }

    function setBg() {
        var html = "#index{background:url(images/index.jpg) no-repeat center center;background-size:cover}";
        html += ".ps{opacity:1}";
        html += "#container li:nth-of-type(10){background:url(images/10.jpg) no-repeat center center;background-size:cover}\
                 #container li:nth-of-type(11){background:url(images/team.jpg) no-repeat center center;background-size:cover}\
               ";
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