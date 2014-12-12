!function () {
    var data = {
        iWidth: document.documentElement.clientWidth,
        iHeight: document.documentElement.clientHeight,
        container: $("#container"),
        content: $("#content"),
        tujie:$(".tujie")
    }
    setSize(data.iWidth, data.iHeight);
    function setSize(iW, iH) {
       // data.container.height(iH);
    
    }

    if (navigator.userAgent.match(/(iPhone|iPod)/i) && navigator.userAgent.match(/(version\/7)/i)) {
        data.tujie.each(function () {
            $(this).removeClass("default");
        });
    }



    var top = 0;
    rotate()
    $(document).on("scroll", function () {
        top = document.documentElement.scrollTop || document.body.scrollTop;
        rotate();
    });

    function rotate() {
        data.tujie.each(function () {
            if ($(this).offset().top <= top + data.iHeight / 2) {
                $(this).addClass("active");
            }
        });
    }
   
    
 
}()