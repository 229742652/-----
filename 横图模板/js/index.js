$(function () {
    var data = {
        iWidth: document.documentElement.clientWidth,
        iHeight: document.documentElement.clientHeight,
        contaniner: $("#container"),
        content : $("#container ul"),
        aLi: $("#container li"),
        len: $("#container li").size(),
        text: $("#container li p")
    }
    
    setHeight(data.iWidth, data.iHeight);
    function setHeight(iW, iH) {
        data.aLi.width(iW).height(iH);
        data.contaniner.height(iH);
        data.content.width(data.iWidth * data.len);
    }
  
    var iNow = 0;
    data.content.swipe("left", function (e,_this) {
        iNow++;
        if (iNow >= data.len - 1) {
            iNow = data.len - 1;
        }
        data.aLi.eq(iNow - 1)[0].className = "left";
        data.aLi.eq(iNow)[0].className = "active";

    }).swipe("right", function (e, _this) {
        iNow--;
        if (iNow<=0) {
            iNow = 0;
        }
        data.aLi.eq(iNow + 1)[0].className = "right";
        data.aLi.eq(iNow)[0].className = "active";
         
    });

});