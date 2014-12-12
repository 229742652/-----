$(function () {

    var data = {
        iWidth: document.documentElement.clientWidth,
        iHeight: document.documentElement.clientHeight,
        canvas: $("#canvas"),
        index: $("#index"),
        goupiao: $("#goupiao"),
        main: $("#main"),
        gonglue: $("#gonglue"),
        person: $("#index .person"),
        xiaoxin: $("#index .xiaoxin"),
        home: $("#home"),
        talk: $("#index .talk"),
        ticket: $("#ticket"),
        xhIn: $("#index .xhIn"),
        cus: $("#cus"),
        nav: $("#main .nav"),
        info: $("#index .info"),
        personChangeTimer: null,
        talkChangeTimer: null,
        xiaoxinTalk: $("#xiaoxinTalk"),
        xxxinTalk: $("#xxxinTalk"),
        xdjTalk: $("#xdjTalk"),
        reunion: $("#reunion"),
        back: $(".back"),
        continues: $(".continue"),

        team:$("#team"),
        copyright: $("#copyright"),
        introduce: $("#main .introduce"),
        ellipse: $("#ellipse")[0],
        imgArr: [
            "images/1.png",
            "images/2.png",
            "images/3.png",
            "images/4.png",
            "images/continue.png",
            "images/copr.png",
            "images/cus.png",
            "images/diagram-link.png",
            "images/ellipse.png",
            "images/gonglue.png",
            "images/goupiao.png",
            "images/index.png",
            "images/info.png",
            "images/link.png",
            "images/lt_loading.png",
            "images/nav-bj.png",
            "images/person.png",
            "images/rail.png",
            "images/return.png",
            "images/rub.png",
            "images/scene2-talk1.png",
            "images/scene2-talk2.png",
            "images/scene2-talk3.png",
            "images/scene2-talk4.png",
            "images/scene3-talk1.png",
            "images/scene3-talk2.png",
            "images/scene3-talk3.png",
            "images/scene3-talk4.png",
            "images/scene3-talk5.png",
            "images/scene3-talk6.png",
            "images/scene-talk1.png",
            "images/scene-talk2.png",
            "images/scene-talk3.png",
            "images/scene-talk4.png",
            "images/start.png",
            "images/talk1.png",
            "images/talk2.png",
            "images/talk3.png",
            "images/ticket.png",
            "images/ticket1.png",
            "images/ticket-seller1.png",
            "images/ticket-seller2.png",
            "images/ticket-seller3.png",
            "images/ticket-seller4.png",
            "images/ticket-seller5.png",
            "images/ticket-seller6.png",
            "images/train.png",
            "images/xdj1.png",
            "images/xdj2.png",
            "images/xdj-summary.png",
            "images/xh-1.png",
            "images/xh-2.png",
            "images/xh-3.png",
            "images/xiaoxin.png",
            "images/xx-summary.png",
            "images/xxx1.png",
            "images/xxx2.png",
            "images/xxx-summary.png"
        ],
        diagram:$("#diagram"),
        animate: ["lightSpeedIn", "slideDown", "slideUp", "slideLeft", "slideRight",
                  "slideExpandUp", "expandUp", "fadeIn", "expandOpen", "bigEntrance",
                  "hatch", "bounce", "pulse", "floating", "pullUp", "pullDown",
                  "stretchLeft", "stretchRight", "tada", "flip", "rubberBand", "zoomOutUp"] //22种动画效果。
    }
     

    var key = sessionStorage.getItem("key");
    if (key === "tujie") {
        data.reunion.css("-webkit-transform", "translate3d(0,0,0)").css({ zIndex: 10 });
        $("#loading").css({ opacity: 0 });
    }
    else {
        var count = 100000 + Math.floor(Math.random() * 1000);
        $("meta[name='sharecontent']").data("msgContent", "你是小新购票手册，我是第" + count + "位浏览者。");
        init(data.reunion[0], innerWidth, innerHeight, 'rgba(0,0,0,.8)', function () {
            data.reunion.find("span").html(count);
            
            setTimeout(function () {
                data.team.css({ zIndex: 10 })
                $("#canvasTag").remove();
                $("#diagram").css({ zIndex: 10 });
            }, 10000);
        });
    }
    sessionStorage.setItem("key", "");
    data.diagram.tap(function () {
        sessionStorage.setItem("key", "tujie");
    });

    ltUtil.ltLoading(data.imgArr, function () {//加载动画
        $("#loading").css("-webkit-transform", "translate3d(0,-100%,0)").off("webkitTransitionEnd").on("webkitTransitionEnd", function () {
            $("img").each(function () {
                if ($(this).attr("src") !== $(this).data("_src")) {
                    $(this).attr("src", $(this).data("_src"));
                }
            });
            indexIn();
        });
        
    }, { id: "loading" })
 

    setSize(data.iWidth, data.iHeight);
    
    $(data.ellipse).css({ left: (data.iWidth - data.canvas.width()) / 2 });
    data.ellipse.width = data.canvas.width();
    data.ellipse.height = data.canvas.width() - 90;
    var context = data.ellipse.getContext("2d");
    var img = new Image();
    img.onload = function () {
        context.drawImage(this, 0, 0, data.ellipse.width, data.ellipse.height);
    }
    img.src = "images/ellipse.png";
    

    data.back.each(function () {
        $(this).tap(function (e,_this) {
            data.main.css("-webkit-transform", "translate3d(0,0,0)");
            $(_this).parent().css("-webkit-transform", "translate3d(0,-100%,0)");
        });
    });


    data.team.tap(function (e, _this) {
        $(_this).css({ zIndex: 10 });
        data.reunion.css("-webkit-transform", "translate3d(0,-100%,0)");
        $("#copyright").addClass("show").css({ zIndex: 11});
    });
     
    data.continues.each(function () {
        $(this).tap(function (e,_this) {
            
            $(_this).parent().css("-webkit-transform", "translate3d(0,-100%,0)");
            data.reunion.css("-webkit-transform", "translate3d(0,0,0)");
            
             
        });
    });
     
    function indexIn() {//首页进场动画.
        $(data.ellipse).css({ opacity: 1 }).addClass("fadeIn");
        data.goupiao.css({ opacity: 1 }).addClass("animated lightSpeedIn").css("-webkit-animation-delay", "1100ms");
        data.gonglue.css({ opacity: 1 }).addClass("animated lightSpeedIn1").css("-webkit-animation-delay", "1100ms").off("webkitAnimationEnd").on("webkitAnimationEnd", function () {
            //data.person.css({ opacity: 1 }).addClass("animated bounceInDown");
            data.ticket.css({ opacity: 1 }).addClass("tic_move");
            data.goupiao.removeClass("animated lightSpeedIn");//动画完成时,移除动画
            data.gonglue.removeClass("animated lightSpeedIn1");//动画完成时,移除动画
            data.cus.css({ opacity: 1 }).addClass("cus_move").off("webkitTransitionEnd").on("webkitTransitionEnd", function () {
                data.index.find(".info span").css({ opacity: 1 }).css("-webkit-animation", "shake1 1s ease-out infinite alternate")
            });
        }) 
    }

    var isIndex = true;
    data.info.tap(function () {
        if (isIndex) {
            indexOut();
            data.info.find("span").css("-webkit-animation-play-state", "paused");
            data.info.css({ opacity: 0 }).css("-webkit-transition", "1s opacity linear");
        }
        else {//进入导航。
            data.index.css("-webkit-transform", "translate3d(0,-100%,0)")
            data.main.addClass("show");
            navIn()
        }

        isIndex = !isIndex;

    });

    data.nav.each(function (i) {
        $(this).tap(function (e,_this) {
            //navOut();
            data.main.css("-webkit-transform","translate3d(0,-100%,0)")
            switch (i) {
                case 0:
                    data.xiaoxinTalk.css("-webkit-transform", "translate3d(0,0,0)")
                    xxTalkIn();
                    break;
                case 1:
                    data.xxxinTalk.css("-webkit-transform", "translate3d(0,0,0)")
                    xxxTalkIn()
                    break;
                case 2:
                    data.xdjTalk.css("-webkit-transform", "translate3d(0,0,0)")
                    xdjTalkIn();
                    break;
            }
        }); 
    });

    function indexOut(fn) {//封面出场
         
        data.goupiao.css("-webkit-transform", "translate3d(" + data.iWidth + "px,0,0)");
        data.gonglue.css("-webkit-transform", "translate3d(-" + data.iWidth + "px,0,0)");
        $(data.ellipse).css("-webkit-transform", "scale(0)").css({ opacity: 0 });
        data.ticket.css({ opacity: 0 }).css("-webkit-transition", "1200ms 2s").css("-webkit-transform", "translate3d(-" + data.iWidth + "px,0,0)");
        data.cus.css("-webkit-transition", "1200ms 2100ms").css("-webkit-transform", "translate3d(-" + data.iWidth + "px,0,0)").css({ opacity: 0 }).on("webkitTransitionEnd", function () {
            
        });

        setTimeout(function () {
            xiaoxinIn(function () {
                Introduction();//小新说话
            });
        },3300)
       
    }

    $(document).on("touchmove", function () {
        return false;
    })

    function setSize(iW, iH) {
        //data.main.height(iH);
        //data.xiaoxinTalk.height(iH);
        //data.xxxinTalk.height(iH);
        //data.xdjTalk.height(iH);
        //data.reunion.height(iH);
        //data.copyright.height(iH);
    }


    //小新入场动画
    function xiaoxinIn(fn) {
        data.xhIn.each(function (i) {
            $(this).addClass("active").css("-webkit-transition-delay", (i * 200) + "ms");
        });
        data.xhIn.eq(1).on("webkitTransitionEnd", function () {
            data.xhIn.eq(1).off("webkitTransitionEnd");
            fn && fn();
        })
    }
    //介绍进场动画
    function Introduction() {

        var count = 0;
        var img = data.xiaoxin.find("img");
        //data.personChangeTimer = setInterval(function () {
        //    count++;
        //    img.attr("src", "images/xh-" + (count % 3 === 0 ? 1 : count % 3 + 1) + ".png");
            
        //}, 200);

        var i = 0;
        data.talkChangeTimer = setInterval(function () {
            i++;
            data.talk.css("-webkit-transform", "translate3d(0,-200%,0)").css({ background: "url(images/talk" + (i+1) + ".png) no-repeat center", backgroundSize: "contain" });
           
            if (i >= 2) {
                clearInterval(data.talkChangeTimer);
                clearInterval(data.personChangeTimer);
                img.attr("src", "images/xh-1.png");
                data.info.find("span").css("-webkit-animation-play-state", "running");
                data.info.css({ opacity: 1 });
                data.info.find("img").attr("src", data.info.find("img").data("src"));
                data.info.css({ opacity: 1 }).css("-webkit-transition", "1s opacity linear");
            }
            setTimeout(function () {
                data.talk.css("-webkit-transform", "translate3d(0,0,0)")
            }, 500)
        }, 4000);
    }

    //导航进场动画
   
    function navIn() {
        data.main.find("p").css({ opacity: 1 }).addClass("animated bigEntrance");
        data.main.find(".link").css({ opacity: 1 }).addClass("slideRight").css("-webkit-animation-delay", "200ms").off("webkitAnimationEnd").on("webkitAnimationEnd", function () {
            data.nav.each(function (i) {
                $(this).css({ opacity: 1 }).addClass("animated bigEntrance").css("-webkit-animation-delay", (i * 500) + "ms");
            });
            data.nav.eq(-1).on("webkitAnimationEnd", function () {
                data.nav.each(function (i) {
                    $(this).removeClass("animated bigEntrance");
                });
            });
        });

        
    }

    //导航出场动画
    
   
    function navOut() {
        data.nav.each(function (i) {
            $(this).css({ opacity: 0 }).css("-webkit-transition-delay", (3000-i * 500) + "ms");
        });
        data.main.find(".link").css({ opacity: 0 }).css("-webkit-transition-delay", (3500) + "ms");
        data.main.find("p").css({ opacity: 0 }).css("-webkit-transition-delay", (3800) + "ms").on("webkitTransitionEnd", function () {
            data.main.find("p").off("webkitTransitionEnd");
            data.main.css("-webkit-transform", "translate3d(0,-100%,0)");
        });
    }
     
    //与小新谈话的进场动画
    //xxTalkIn();

    function In(obj,index,src) {
        if (obj===data.xiaoxinTalk) {
            obj.find(".train").css({ opacity: 1 }).find("img").css("-webkit-animation", "train_move 5s linear infinite !important");
        }
        var ticker = obj.find(".ticker");
        var customer = obj.find(".customer");
        var talk_content = obj.find(".talk_content img").css({ opacity: 1 });
        talk_content.attr("src", talk_content.data("_src"))
        var _continue = obj.find(".continue");
        _continue.css({ opacity: 0 })
        var back = obj.find(".back");
        var minWidth = customer.width();
        var minWidth = customer.width();
        var tickerTimer = null;
        if (obj === data.xiaoxinTalk) {

        }
        else {
            var customerTimer = setInterval(function () {
                change(customer)
            }, 300);
        }
         
        ticker.width(minWidth * 0.8);
        var i = 0;
        var changeTimer = setInterval(function () {

            if (i > index) {
                clearInterval(changeTimer);
                clearInterval(tickerTimer);
                clearInterval(customerTimer);
                talk_content.css({ opacity: 0 });
                ticker.width(minWidth);
                customer.width(minWidth);
                _continue.css({ opacity: 1 });
                i = 0;
                back.css({ opacity: 1 }).css("-webkit-animation", "shake1 1s linear infinite alternate");
                return false;
            }
            talk_content.css({ opacity: 1 })
            if (i % 2 === 0) {
                if (obj === data.xiaoxinTalk) {
                    customer.find("img").attr("src", "images/xh-2.png")
                }
                else {
                    clearInterval(customerTimer);
                }
                
                tickerTimer = setInterval(function () {
                    change(ticker)
                }, 300);
                ticker.width(minWidth);
                customer.width(minWidth * 0.8);
            }
            else {
                clearInterval(tickerTimer);
                if (obj === data.xiaoxinTalk) {
                    customer.find("img").attr("src", "images/xx.gif")
                } else {
                    customerTimer = setInterval(function () {
                        change(customer);
                    }, 300);
                }
                
                ticker.width(minWidth * .8);
                customer.width(minWidth);
            }
            //scene-talk
            talk_content.attr("src", "images/" + src + (i + 2) + ".png");
            i++;
        }, 4000);


        function change(Xobj) {
            var img = Xobj.find("img");
            if (img.attr("src") !== img.data("src")) {
                var temp = img.attr("src");
                img.attr("src", img.data("src"));
                img.data("src", temp);
            }
        }
    }

    function xxTalkIn() {
        In(data.xiaoxinTalk, 2, "scene-talk");
        
    }

    //与小新谈话的出场动画
    
    function xxxTalkIn() {
        In(data.xxxinTalk, 2, "scene2-talk");
    }

    function xdjTalkIn() {
        In(data.xdjTalk, 4, "scene3-talk");
    }

});

(function () {

    window.onload = function () {
        /**禁止拖动设置*/
        document.ontouchmove = function (e) {
            e.preventDefault();
        };

        /**判断浏览器是否支持canvas**/

        try {
            document.createElement('canvas').getContext('2d');

        } catch (e) {
            var addDiv = document.createElement('div');
            alert('您的手机不支持刮刮卡效果哦~!');
        }
    };

    var u = navigator.userAgent,
        mobile = 'PC';

    if (u.indexOf('iPhone') > -1) mobile = 'iphone';

    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) mobile = 'Android';

    function createCanvas(parent, width, height) {
        var canvas = {};
        canvas.node = document.createElement('canvas');
        canvas.context = canvas.node.getContext('2d');
        //此处可以自己给标签添加
        canvas.node.width = width || 320;

        canvas.node.height = height || 480;
        //给canvas标签添加Id
        canvas.node.id = 'canvasTag';

        parent.appendChild(canvas.node);

        return canvas;

    }

    function init(container, width, height, fillColor,fn) {

        var canvas = createCanvas(container, width, height);
        var ctx = canvas.context;
        // define a custom fillCircle method
        ctx.fillCircle = function (x, y, radius, fillColor) {
            this.fillStyle = fillColor;
            this.beginPath();
            this.moveTo(x, y);
            this.arc(x, y, radius, 0, Math.PI * 2, false);
            this.fill();

        };

        ctx.clearTo = function (fillColor) {
            var img = new Image();
            //ctx.fillStyle = fillColor;
            img.onload = function () {
                //ctx.fillRect(0, 0, width, height);
                ctx.drawImage(this, 0, 0, width, height);
            }
            
            img.src = "images/rub.png";

            //ctx.fillRect(0, 0, width, height);
        };
        ctx.clearTo(fillColor || "#ddd");
        var i = 0;
        canvas.node.addEventListener("touchstart", function (e) {
            i++;
            if (i === 1) {
                fn && fn();
            }
            canvas.isDrawing = true;
        }, false);
        canvas.node.addEventListener("touchend", function (e) {
            canvas.isDrawing = false;
        }, false);

        canvas.node.addEventListener("touchmove", function (e) {
            e.preventDefault && e.preventDefault();
            if (!canvas.isDrawing) {
                return;
            }
            var x = e.changedTouches[0].pageX - this.offsetLeft;
            var y = e.changedTouches[0].pageY - this.offsetTop;

            var radius = 20;
            var fillColor = '#ff0000';
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillCircle(x, y, radius, fillColor);

        }, false);
    }
    var container = document.getElementById('reunion');

    window.init = init;
   // init(container, innerWidth, innerHeight, 'rgba(0,0,0,.8)');

})();