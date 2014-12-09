define(function (require, exports, module) {
    var iHeight = innerHeight;
    var iWidth = innerWidth;
    var aLi = $("#hannue ul li").height(iHeight);
       
    var device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
    if (iWidth / iHeight > .8 && device || iWidth <= 320) {
        loadImgByCanvas("images/hannue/hanqing.png", $("#c1")[0], 0, 0, 190, 45);
        loadImgByCanvas("images/hannue/shuiku.png", $("#c2")[0], 0, 0, 141, 47);
        loadImgByCanvas("images/hannue/1.jpg", $("#c3")[0], 0, 0, 250 / 1.5, 176 / 1.5);
        loadImgByCanvas("images/hannue/2.jpg", $("#c4")[0], 0, 0, 125 / 1.5, 88 / 1.5);
    }
    
    else {
        loadImgByCanvas("images/hannue/hanqing.png", $("#c1")[0], 0, 0, 250, 60);
        loadImgByCanvas("images/hannue/shuiku.png", $("#c2")[0], 0, 0, 282, 93);
        loadImgByCanvas("images/hannue/1.jpg", $("#c3")[0], 0, 0, 300 / 1.5, 212 / 1.5);
        loadImgByCanvas("images/hannue/2.jpg", $("#c4")[0], 0, 0, 150 / 2, 106 / 2);
    } 
    var iNow = 0;
    var len = aLi.size();
    function loadImg1() {
        loadImgByLocalStorage("images/hannue/he.png", function (data) {
            if (iWidth / iHeight > .8 && device || iWidth <= 320) {
                $("#c5").attr("src", data).css({ width: 268 / 1.5, height: 82 / 1.5 });
            }
            else {
                $("#c5").attr("src", data).css({ width: 268, height: 82 });
            }

            
        });
        loadImgByLocalStorage("images/hannue/3.jpg", function (data) {
            $("#c6").attr("src", data).css({ width: 169 * 2 / 1.5, height: 180 / 1.5 });
        });

        loadImgByLocalStorage("images/hannue/4.jpg", function (data) {
            $("#c7").attr("src", data).css({ width: 53, height: 72 });
        });

     
    }

    function loadImg2() {
         
        loadImgByLocalStorage("images/hannue/ganhan.png", function (data) {
            $("#c14").attr("src", data).css({ width: 518 / 2, height: 156 / 2 });
        });
    }
    var oUl = $("#hannue ul");
    if (device && innerWidth / innerHeight > .8) {
        loadImg1();
        loadImg2();
        aLi.css({padding:"20px 0"});
        var nav = $("#nav")
        oUl.on("touchstart", function () {
            nav.hide();
        }).on("touchend", function () {
            nav.show().css({ top: iHeight + 40 });
        });
        $("#c5").css({ opacity: 1 }).setCss3({ transition: "800ms", transform: "translateY(0)" });
        $(".block2 .first").eq(0).setCss3({ transform: "scale(1) translateX(0)", transition: "1s 700ms" }).css({ opacity: 1 });
        $(".block2 .first").eq(1).setCss3({ transform: "scale(1) translateX(0)", transition: "1s 1000ms" }).css({ opacity: 1 });
        $("#c6").css({ opacity: 1 }).setCss3({ transition: "800ms 1.7s" });
        $("#c7").css({ opacity: 1 }).setCss3({ transition: "800ms 2.5s" });
        $(".block2 .b_text").css({ opacity: 1 }).setCss3({ transform: "translateX(0)", transition: "1s 3.2s" });
        return;
    }
   
    oUl.on("touchstart",
         function (e) {
             var e = e.changedTouches[0];
             var startX = e.pageX;
             var startY = e.pageY;
             var startTime = Date.now();
             $(document).on("touchmove",
             function () {
                 return false
             });

             $(document).on("touchend",
             function (e) {
                 var e = e.changedTouches[0];
                 var endX = e.pageX;
                 var endY = e.pageY;
                 var disX = Math.abs(startX - endX);
                 var disY = Math.abs(startY - endY);
                 if (Date.now() - startTime < 400) {
                     if (endY < startY && Math.abs(disY / disX) > 1 && disY > 20) {
                         iNow++;//上
                         if (iNow >= len) {
                             iNow = len - 1;
                         }
                         oUl.setCss3({ transform: "translateY(-" + (iNow * iHeight) + "px)" });
                         switch (iNow) {
                             case 1://滑动的第一次。
                                 loadImg1();
                                 oUl.on("webkitTransitionEnd", function () {
                                     $(this).off("webkitTransitionEnd");
                                     $("#c5").css({ opacity: 1 }).setCss3({ transition: "800ms", transform: "translateY(0)" });
                                     $(".block2 .first").eq(0).setCss3({ transform: "scale(1) translateX(0)", transition: "1s 700ms" }).css({ opacity: 1 });
                                     $(".block2 .first").eq(1).setCss3({ transform: "scale(1) translateX(0)", transition: "1s 1000ms" }).css({ opacity: 1 });
                                     $("#c6").css({ opacity: 1 }).setCss3({ transition: "800ms 1.7s"});
                                     $("#c7").css({ opacity: 1 }).setCss3({ transition: "800ms 2.5s" });
                                     $(".block2 .b_text").css({ opacity: 1 }).setCss3({ transform: "translateX(0)", transition: "1s 3.2s" });
                                 });
                                 break;
                             case 2:
                                 loadImg2();
                                 oUl.on("webkitTransitionEnd", function () {
                                     $(this).off("webkitTransitionEnd");
                                     $("#c9").addClass("dance");
                                 });
                                 break;
                             case 3:
                                 oUl.on("webkitTransitionEnd", function () {
                                     $(this).off("webkitTransitionEnd");
                                     $("#c11").addClass("journal");
                                 });
                                 break;
                             case 4:
                                 oUl.on("webkitTransitionEnd", function () {
                                     $(this).off("webkitTransitionEnd");
                                     $("#c13").addClass("dance");
                                 });
                                 break;
                             case 5:
                                 oUl.on("webkitTransitionEnd", function () {
                                 $(this).off("webkitTransitionEnd");
                                 $("#c14").addClass("journal");
                             });
                                 break;
                             case 6:
                                 break;
                         }
                     }
                     if (endY >= startY && Math.abs(disY / disX) > 1 && disY > 20) {
                         iNow--;
                         if (iNow<0) {
                             iNow = 0;
                         }
                         $("#hannue ul").setCss3({ transform: "translateY(-" + (iNow * iHeight) + "px)" });
                     }
                 }
                 $(this).off("touchend").off("touchmove");
             });
              
             function upEnd() {
                  
                 //上滑结束
             }
             function downEnd() {
                 //下滑结束
               
             }
             return false
         });
 
  
});