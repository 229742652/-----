!function () {
    var data = {
        port: $("#port"),
        iHeight: document.documentElement.clientHeight,
        iWidth: document.documentElement.clientWidth,
        aLi: $("#port ul li"),
        len: $("#port ul li").size(),
        container: $("#port ul"),
        menuIoc: $("#menu div"),
        menu: $("#menu"),
        mask: $("#mask"),
        content: $("#port .content"),
        nav:$("#nav"),
        navMenu: $("#nav ul"),
        role: '制作团队',
        roleArr: [ "中国梦", "全面深化改革 ",
       "依法治国", "新常态", "文化强国", "生态文明", "强军梦",
       "大国外交", "党建反腐", "人民情怀","制作团队"
        ],
        indexArr: [2,4,6,8,10,12,14,16,18,23],
        index: $("#index"),
        box: $("#box"),
        preLoadImgArr: [
            "images/lt_loading.png",
               "images/bg.jpg",
               "images/1.jpg",
               "images/2.jpg",
               "images/3.jpg",
               "images/4.jpg",
               "images/5.jpg",
               "images/6.jpg",
               "images/7.jpg",
               "images/8.jpg",
               "images/9.jpg",
               "images/10.jpg",
               "images/11.jpg",
               "images/12.jpg",
               "images/13.jpg",
               "images/14.jpg",
               "images/15.jpg",
               "images/16.jpg" 

        ],
        isMobile: navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad|windows phone)/i)
    };
    
    data.navMenu.slider(null, {isNeedProcess:false});
    function setHtml(iNow) {
        
        var index = -1;
        if (data.aLi.eq(iNow).attr("class")) {
            index = data.aLi.eq(iNow).attr("class").split("_")[1];
            data.menu.find("span").html(data.roleArr[index - 2]);
        }
         
        if (iNow === data.len-1) {
            data.menu.find("span").html(data.role);
        } else if (iNow < data.indexArr[0]) {
            data.menu.find("span").html("");
        }
    }
    
    ltUtil.ltLoading(data.preLoadImgArr, function () {
        var style = new StringBuilder();
        style.append("<style>");
        for (var i = 1 ; i <= data.len; i++) {
            style.append("#port .content ul li:nth-of-type(" + i + "){background:#fff url(images/" + i + ".jpg) no-repeat center center;background-size:cover}");
        }
        
        if (data.isMobile) {
            style.append("body{background:url(images/bg.jpg) no-repeat center center;background-size:cover}");
        }
        
        style.append("</style>");
        
        $("head").append(style.toString());
        setTimeout(function () {
            data.box.css({ opacity: 0, zIndex: -1 });
        },400)
    }, { id: "box" });

    data.index.swipe("up", function (e,_this) {
        $(_this).css("-webkit-transform", "translateY(-100%)");
    });
 

    data.nav.find("li").each(function (i) {
        $(this).tap(function (e,_this) {
            //alert(i);
            //
            iNow = data.indexArr[i];
            contanierMove(iNow);
            data.mask.tap();
        })
    });
 
     
    setHeight(data.iHeight);
   
    function setHeight(h) {
        data.port.height(h);
        data.aLi.height(h);
        data.mask.height(h);
        data.box.height(h);
        data.menuIoc.css({ background: "url(" + ltUtil.getMenuIcon() + ") no-repeat 5px 5px" });
    }

    var iNow = 0;
    data.container.swipe("up", function () {
        iNow++;
        setHtml(iNow)
        if (iNow > data.len - 1) {
            iNow = data.len - 1;
            return;
        }
        contanierMove(iNow);
    }).swipe("down", function () {
        iNow--;
        setHtml(iNow)
        if (iNow < 0) {
            iNow = 0;
            return;
        }
        contanierMove(iNow);
    });

    
    function contanierMove(i) {
        setHtml(i);
        data.menu.css({ opacity: 0 }).css("-webkit-transform", "translateY(-20px)").css("-webkit-transition","none");
        data.container.css("-webkit-transform", "translateY(" + (-i * data.iHeight) + "px)").off("webkitTransitionEnd").on("webkitTransitionEnd", function () {
            data.menu.css({ opacity: 1 }).css("-webkit-transform", "translateY(0)").css("-webkit-transition",".4s all ease-out");
        });
    }

    data.menuIoc.tap(function (e, _this) {//左上角菜单单击事件。
        // data.body.css({ background: "url(images/bg.jpg) no-repeat center center",backgroundSize:"cover"});
        data.aLi.css({ opacity: 0 });
        data.aLi.find("span").css({ opacity: 0 })
        data.aLi.eq(iNow).css({ opacity: 1 });
        data.content.css("-webkit-transform", "rotateY(-50deg) translateX(20%)").off("webkitTransitionEnd").on("webkitTransitionEnd", function () {
            data.mask.css({ opacity: 1, zIndex: 123 });
            data.nav.show().css({ opacity: 1 }).css("-webkit-transform", "translateX(0)");
        }); 
    });

    var cache = window.applicationCache;
    ltUtil.clearCache(cache);

    data.mask.tap(function (e, _this) {
       // data.body.css({ background: "none" });
        data.nav.css({ opacity: 0 }).css("-webkit-transform", "translateX(-150px)").hide();
        data.content.css("-webkit-transform", "rotateY(0) translateX(0)").off("webkitTransitionEnd").on("webkitTransitionEnd", function () {
            data.mask.css({ opacity: 0 ,zIndex:-1});
            data.aLi.css({ opacity: 1 });
            data.aLi.find("span").css({ opacity: 1 })
        });
        
    });

    if (!data.isMobile) {
        data.nav.show().css({left:data.port.offset().left})
        data.aLi.on("click", function () {
            iNow++;

            if (iNow > data.len - 1) {
                iNow = data.len - 1;
                return;
            }
             
            //  contanierMove(iNow);
            ltUtil.startMove(data.container[0], { top: -iNow * data.iHeight }, 500, "easeIn", function () {
                data.mask.css({ opacity: 0, zIndex: -1 });
                data.aLi.css({ opacity: 1 });
                data.aLi.find("span").css({ opacity: 1 })
            });

        });

        data.navMenu.find("li").click(function () {
       
            iNow = data.indexArr[$(this).index()];
            document.title = iNow
            ltUtil.startMove(data.container[0], { top: -iNow * data.iHeight }, 500, "easeIn", function () {
                data.mask.css({ opacity: 0, zIndex: -1 });
                data.aLi.css({ opacity: 1 });
                data.aLi.find("span").css({ opacity: 1 })
            });
            data.menu.find("span").html("");
            data.mask.click();
        });
        
        data.box.find("div").hide();
    }
}();