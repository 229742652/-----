(function ($) {
    $.fn.tap = function (fn, opt) {

        var _default = { resposetime: 200 };
        var config = $.extend(_default, opt);
        var startTime = 0;
        var startX = 0;
        var startY = 0;
        var device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
        if (device) {
            this.on("touchstart", function (e) {
                e = e.changedTouches[0];
                startX = e.pageX;
                startY = e.pageY;
                startTime = Date.now()
            }).on("touchend", function (e) {
                var endTime = Date.now();
                e = e.changedTouches[0];
                var endX = e.pageX;
                var endY = e.pageY;
                if (Math.abs(endY - startY) < 6 && Math.abs(endX - startX) < 6 && endTime - startTime <= config.resposetime) {
                    if (fn) {
                        fn();
                    }
                }
            });
        }
        else {
            this.on("click", function () {
                if (fn) {
                    fn();
                }
            });
        }
        return this
    }
})(Zepto);
 
(function (b) {
    b.fn.setCss3 = function (e) {
        for (var d in e) {
            var c = d;
            if (0 < c.indexOf("-")) var a = c.indexOf("-"),
				c = c.replace(c.substr(a, 2), c.substr(a + 1, 1).toUpperCase());
            a = this[0];
            a.style[c] = e[d];
            c = c.replace(c.charAt(0), c.charAt(0).toUpperCase());
            a.style["webkit" + c] = e[d];
            a.style["moz" + c] = e[d];
            a.style["ms" + c] = e[d];
            a.style["o" + c] = e[d]
        }
        return b(a)
    }
})(Zepto);