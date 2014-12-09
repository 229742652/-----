define(function (require, exports, module) {
    var iHeight = innerHeight;
    var device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
    var iWidth = innerWidth;
    $("#wangshi").height(iHeight);

    var len = $("#wangshi ul li").height(iHeight).size();
    
    loadImgByLocalStorage("images/wangshi/2.jpg", function (data) {
        $("#wangshi_c2").attr("src", data);
    });
    
    if (iWidth / iHeight > .8 && device) {
        loadImgByCanvas("images/wangshi/3.png", $("#wangshi_c3")[0], 0, 0, 522 / 2, 709 / 2 - 20);
    }
    else {
        loadImgByCanvas("images/wangshi/3.png", $("#wangshi_c3")[0], 0, 0, 522 / 1.8, 709 /1.8);
    }
     
    var iNow = 0;
    
    var oUl = $("#wangshi ul");

    if (device && innerWidth / innerHeight > .8) {
        var nav = $("#nav")
        oUl.on("touchstart", function () {
            nav.hide();
        }).on("touchend", function () {
            nav.show().css({ top: iHeight - 30 });
        });
        $("#wangshi_c2").addClass("flip-bottom");
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
                                 oUl.on("webkitTransitionEnd", function () {
                                     $(this).off("webkitTransitionEnd");
                                     $("#wangshi_c2").addClass("flip-bottom");
                                 });
                                 break;
                             case 2:
                                 
                                 oUl.on("webkitTransitionEnd", function () {
                                     $(this).off("webkitTransitionEnd");
                                     $("#wangshi_c3").addClass("dance");
                                 });
                                 break;
                             case 3:
                                 oUl.on("webkitTransitionEnd", function () {
                                     $(this).off("webkitTransitionEnd");
                                 });
                                 break;
                             case 4:
                                 oUl.on("webkitTransitionEnd", function () {
                                     $(this).off("webkitTransitionEnd");
                                 });
                                 break;
                             case 5:
                                 oUl.on("webkitTransitionEnd", function () {
                                     $(this).off("webkitTransitionEnd");
                                 });
                                 break;
                             case 6:
                                 break;
                         }
                     }
                     if (endY >= startY && Math.abs(disY / disX) > 1 && disY > 20) {
                         iNow--;
                         if (iNow < 0) {
                             iNow = 0;
                         }
                         oUl.setCss3({ transform: "translateY(-" + (iNow * iHeight) + "px)" });
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