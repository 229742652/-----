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
                        fn(e);
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

(function ($) {
    $.fn.swipeUp = function (fn, d) {
        var c = $.extend({
            resposetime: 200,
            disY: 200
        }, d);
        this.on("touchstart", function (e) {
            e = e.changedTouches[0];
            var d = e.pageX,
				startY = e.pageY,
				startTime = Date.now();
            $(document).on("touchmove", function (e) {
                return !1
            });
            $(document).on("touchend", function (e) {
                e = e.changedTouches[0];
                var endY = e.pageY;
            
                var f = Math.abs(startY - endY);
                Date.now() - startTime < c.resposetime && f < c.disY && endY < startY && 1 < Math.abs(f / Math.abs(d - e.pageX)) && fn && fn(e);
                $(this).off("touchend").off("touchmove")
            });
            return !1
        });
        return this
    }
})(Zepto);

(function (b) {
    b.fn.swipeDown = function (e, d) {
        var c = b.extend({
            resposetime: 200,
            disY: 200
        }, d);
        this.on("touchstart", function (a) {
            a = a.changedTouches[0];
            var d = a.pageX,
				g = a.pageY,
				l = Date.now();
            
            b(document).on("touchmove", function (a) {
                return !1
            });
            b(document).on("touchend", function (a) {
                a = a.changedTouches[0];
                var k = a.pageY;
                x = Math.abs(d - a.pageX);
                var f = Math.abs(g - k);
                Date.now() - l < c.resposetime && f < c.disY && k >= g && 1 < Math.abs(f / x) && e && e(a);
                b(this).off("touchend").off("touchmove");
            });
            return !1
        });
        return this
    }
})(Zepto);