define(function (require, exports, module) {
    var iHeight = innerHeight;

    var iWidth = innerWidth;
    $("#wenlu").height(innerHeight);
    var aLi = $("#wenlu ul li").height(iHeight);

    var device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));



    var iNow = 0;
    var len = aLi.size();
    var oUl = $("#wenlu ul");

    if (device && innerWidth / innerHeight > .8) {
        var nav = $("#nav")
        oUl.on("touchstart", function () {
            nav.hide();
        }).on("touchend", function () {
            nav.show().css({ top: iHeight - 30 });
        });
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