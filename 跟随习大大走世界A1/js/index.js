
$(function () {
    var data = {
        iWidth: document.documentElement.clientWidth,
        iHeight: document.documentElement.clientHeight,
        container: $("#container"),
        main: $("#main"),
        aLi: $("#main li"),
        len: $("#main li").size(),
        json: {},
        xidada: $("#xidada"),
        index:0,//当前是哪个国家
        content:$("#content"),
        imgList: $("#imgList"),
        mask: $("#mask"),
        index1:$("#index"),
        next: $("#next"),
        xjp2014: $("#xjp2014"),
        earth: $("#earth"),
        xdd: $("#xdd"),
        go: $("#go"),
        xu: $("#xu"),
        isStart:true,
        c1: $("#c1"),
        transitionEnd: "onwebkittransitionend" in window ? "webkitTransitionEnd" : "transitionend",
        isMobile:"ontouchstart" in window,
        frameId:true,
        imgContainer: $("#imgList ul"),
        loadImgsArr: [
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
            "images/16.jpg",
            "images/17.jpg",
            "images/18.jpg",
            "images/2014.png",
            "images/aw.png",
            "images/aw1.png",
            "images/bg1.png",
            "images/bg2.png",
            "images/bg2-line1.png",
            "images/bg2-line2.png",
            "images/bg2-line3.png",
            "images/bg3.png",
            "images/bg4.png",
            "images/bg4-line1.png",
            "images/bg4-line2.png",
            "images/bg4-line3.png",
            "images/bg5.png",
            "images/bg6.png",
            "images/bg6-line1.png",
            "images/bg6-line2.png",
            "images/bg6-line3.png",
            "images/bg7.png",
            "images/bg7-line1.png",
            "images/bg7-line2.png",
            "images/close.png",
            "images/copyright.png",
            "images/diqiu.png",
            "images/gxddz.png",
            "images/index.jpg",
            "images/info.png",
            "images/lt_loading.png",
            "images/next.png",
            "images/point.png",
            "images/xidada.png",
            "images/xidada1.png",
            "images/xu.png",
            "images/zoushijie.png",
            "images/go.png"
        ],
        pos: []
    }

    //data.index = 1;
    //init();
    //render();
    //setTrans3d($("#loading"), [0, -data.iHeight + "px", 0]);
    //setTrans3d(data.index1, [0, -data.iHeight + "px", 0]);
    //setTrans3d(data.xu, [0, -data.iHeight + "px", 0]);
   
    ltUtil.ltLoading(data.loadImgsArr, function () {
        setSize(data.iWidth, data.iHeight);
        init();
        render();
        setTrans3d($("#loading"), [0, -data.iHeight + "px", 0]);
    }, { id: "loading" });
    
    function init() {
        data.index1.css({ background: "url(images/index.jpg) no-repeat center center", backgroundSize: "cover" });
        data.xu.css({ background: "url(images/xu.png) no-repeat center center", backgroundSize: "cover" ,opacity:1});
        data.aLi.eq(1).css({ background: "url(images/copyright.png) no-repeat center center", backgroundSize: "cover" });
         
        data.index1.swipe("up", function () {
            //if (data.isMobile) {
            
            //}
            //else {
            //    data.index1.css("-webkit-transition", "none").css("transition", "none")
                
            //}
            ltUtil.startMove(data.index1[0], { transformY: -data.iHeight + "px" }, 800, "easeOut")
            //setTrans3d(data.index1, [0, -data.iHeight + "px", 0]);
            
            
            data.frameId = !data.frameId;//清除习大大摆手的动画。
            data.xu.find(".info").css({ opacity: 1 }).css("-webkit-animation", "shake 1s ease-in-out infinite alternate 2s").css("animation", "shake 1s ease-in-out infinite alternate 2s");

            data.aLi.find("img").each(function () {
                if ($(this).attr("src") !== $(this).data("src")) {
                    $(this).attr("src", $(this).data("src"));
                }
            });
        });

        data.xu.swipe("up", function () {
           ltUtil.startMove(data.xu[0], { transformY: -data.iHeight + "px" }, 800, "easeOut")
            //setTrans3d(data.xu, [0, -data.iHeight + "px", 0]);
        });
       
        setTimeout(function () {
             
            ltUtil.startMove(data.xjp2014.addClass("active")[0], { transformY: data.iHeight / 2.5 + "px" }, 2300, "elasticOut", function () {
                ltUtil.startMove(data.xjp2014.addClass("active")[0], { transformY:0 }, 2100, "elasticOut");
                ltUtil.startMove(data.earth.addClass("active")[0], { scale: 1 }, 2000, "elasticOut", function () {
                    //data.earth.addClass("rotate");
                });
                ltUtil.startMove(data.go.addClass("active")[0], { scale: 1 }, 2000, "elasticBoth", function () {
                    setTrans3d(data.xdd.addClass("active"));
                    setTrans3d(data.c1.addClass("active"));
                    loadImgs(["images/xidada1.png"], function (json) {
                        var c1 = $("#c1")[0];
                        var context = c1.getContext("2d");

                        var width = json["xidada1"].width/2;
                      
                        c1.width = width;
                        c1.height = 571 / 2;
                        var i = 0;
                        function change() {
                            i += 0.1;
                            i = i <= 4 ? i : 0;
                            context.clearRect(0, 0, c1.width, c1.height);
                            context.drawImage(json["xidada1"], 0, 571 * parseInt(i), 500, 571, 0, 0, 500 / 2, 571 / 2);
                            data.frameId && window.requestNextAnimationFrame(change);
                        }
                        data.frameId &&  window.requestNextAnimationFrame(change);
                       
                    });
                    data.index1.find(".info").css("-webkit-animation", "shake 1s ease-in-out infinite alternate 2s").css("animation", "shake 1s ease-in-out infinite alternate 2s");
                    $("#waijiao").css({opacity:1});

                })
            });
            
        },1000); 
           
    } 
     
    var isTap = true;
    data.next.tap(function (e, _this) {
        if (isTap) {
            data.index++;
            if (data.index >= dialogData.length) {
                closeMask($(_this).parent());
                setTrans3d(data.main, [0, -data.iHeight + "px", 0]).css("-webkit-transition", "-webkit-transform 600ms").css("transition", "transform 600ms");
            }
            else {
                closeMask($(_this).parent())
                render();
            }
        }
        isTap = false;
        setTimeout(function () {
            isTap = true;
        },1000);
    });
     

    function setSize(iW, iH) {
        data.aLi.height(iH);
        data.container.height(iH);

        data.mask.height(iH);
        var img = new Image();
        img.onload = function () {
            var iheight = this.height / this.width * data.iWidth;
            if ("ontouchstart" in window) {
                data.mask.find(".textContainer").height(data.iHeight - iheight - 40);
                data.imgContainer.height(iheight);
            }
            else {
                data.imgContainer.height(482);
            }
            data.content.slider(function () { }, { isNeedProcess: true });
            
        }
        img.src = "images/1.jpg";
         
    }
     
    function createImgList(imgs) {
        var len = imgs.length;
        var html = "";
        for (var i = 0; i < len; i++) {
            html += "<li><img src=" + imgs[i] + " alt=''/></li>";
        }
        data.imgContainer.empty();
        data.imgContainer.append(html).width(len * data.index1.width());
        data.imgContainer.find("li").width(data.index1.width());
        if (dialogData[data.index].imgs.length > 1) {
            var html1 = '<div class="aw left"><img src="images/aw1.png" alt="" /></div>\
                     <div class="aw right"><img src="images/aw.png" alt="" /></div>'
         
            data.imgList.find(".aw").size()>0 &&  data.imgList.find(".aw").remove();
            data.imgList.append(html1);
            data.imgList.find(".left").tap(function () {
                 leftMove();
            });

            data.imgList.find(".right").tap(function () {
                 rightMove()
            });
        }
        else {
            data.imgList.find(".aw").size() > 0 && data.imgList.find(".aw").remove();
        }
        
        var iNow = 0;
        setTrans3d(data.imgContainer);
        data.imgContainer.swipe("left", function (e, _this) {
            "ontouchstart" in window && rightMove()
        }).swipe("right", function (e, _this) {
            "ontouchstart" in window && leftMove()
        });
         
        

        function rightMove() {
            iNow++;
            if (iNow >= len - 1) {
                iNow = len - 1;
            }
           setTrans3d(data.imgContainer, [-iNow * data.index1.width() + "px", 0, 0]);
           
            
        }
        function leftMove(){
            iNow--;
            if (iNow <= 0) {
                iNow = 0;
            }
            setTrans3d(data.imgContainer, [-iNow * data.index1.width() + "px", 0, 0]);
            
        }


        $(document).on("touchstart", function () { return false});
         

        data.aLi.find(".map").attr("src", dialogData[data.index].bg);
        data.content.empty();
        data.content.append(dialogData[data.index].text);
        data.xidada.css(dialogData[data.index].pos[0]);
        data.aLi.find(".opacity0").css({ opacity: 0 });
        data.aLi.find(".point").css({ opacity: 0 });
         

        switch (data.index) {
            case 0://俄罗斯
            case 2://韩国
            case 4://韩国
                data.aLi.find(".point").css({ opacity: 1 });
                break;
            case 1://荷兰 法国 德国 比利时 
                move("line")
                break;
            case 3://巴西 阿根廷 委内瑞拉 古巴
                move("bg4-line");
                break;
            case 5:
                move("bg6-line");
                break;
            case 6:
                move("bg7-line",3);
                break;
        } 


        function move(className, index) {
            var i = 0;
            data.isStart = !data.isStart;
            index = index === undefined ? 4 : index;
            var timer = setInterval(function () {
                i++;
                if (i >= index) {
                    i = 0;
                    clearInterval(timer);
                    data.isStart = !data.isStart;
                    data.aLi.find(".point").css({ opacity: 1 });
                }
                else {
                   
                    data.aLi.find("." + className).eq(i - 1).size() > 0 && data.aLi.find("." + className).eq(i - 1).css({ opacity: 1 }).off(data.transitionEnd).on(data.transitionEnd, function () {
                         data.xidada.css(dialogData[data.index].pos[i]);
                    });
                }
            }, 2000);
        }
    };

    //alert(data.transitionEnd === "webkitTransitionEnd")
    
    
    function render() { 
        createImgList(dialogData[data.index].imgs);

    }
     
    data.mask.tap(function (e,_this) {
        if ($(e.target).attr("class") === "close") {//关闭弹出层。
            closeMask(_this);
           //data.next.tap();
        }
    });

    function closeMask(_this) {
        setTrans3d($(_this), ["100%", 0, 0]).css({ opacity: 0 });;
    }
  
    function openMask() {
        if (data.index === dialogData.length-1) {
            data.next.find("img").attr("src", data.next.find("img").data("src"));
        }
        data.content.slider(function () { }, { isNeedProcess: true });
        setTrans3d(data.mask).css({opacity:1});
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
    
    


    data.aLi.tap(function (e, _this) {
        //changeSrc($(_this));
        if (data.isStart && $(_this).index()===0) {
            openMask();
        }
        
    })
      

   

     
    function changeSrc(_this) {
        //_this.find(".map").attr("src", dialogData[data.index].bgActive);
    }


    function loadImgs(arr, fnSuccess) {
        var len = arr.length;
        var loaded = 0;
        
        for (var i = 0; i < len; i++) {
            var img = new Image();
            img.onload = function () {
                loaded++;
                if (loaded === len) {
                    fnSuccess && fnSuccess(data.json);
                }
            };
            img.src = arr[i];
            var name = arr[i].split('.')[0].split('/')[1];
            data.json[name] = img;
        }
    }
       
});