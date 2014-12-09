(function ($) {
    $.fn.swipe = function (type, fn, option) {
        var setting = {
            disX: 30,
            disY: 30,
            responseTime: 200
        };
        this[0].listener = this[0].listener || {};
        this[0].listener[type] = this[0].listener[type] || [];
        this[0].listener[type].push(fn);
        var _this = this[0];
        var self =this;
        var config = $.extend(setting, option);
        this.on("touchstart", function (e) {
            e = e.changedTouches[0];
            var startX = e.pageX, startY = e.pageY, startTime = Date.now();
            self.on("touchmove", function () {
                return !1;
            }).on("touchend", function (e) {
                e = e.changedTouches[0];
                var endX = e.pageX, endY = e.pageY, endTime = Date.now();
                if (endTime - startTime >= config.responseTime) {
                    return;
                }
                switch (type.toLowerCase()) {
                    case "left":
                        if ((startX - endX) > config.disX && Math.abs((endY - startY) / (endX - startX)) <= 1) {
                            for (var i = 0; i < _this.listener[type].length; i++) {
                                _this.listener[type][i]&&_this.listener[type][i](e, _this);
                            }
                        }
                        break;
                    case "right":
                        if ((endX - startX) > config.disX && Math.abs((endY - startY) / (endX - startX)) <= 1) {
                            for (var i = 0; i < _this.listener[type].length; i++) {
                                _this.listener[type][i] && _this.listener[type][i](e, _this);
                            }
                        }
                        break;
                    case "down":
                        if ((endY - startY) > config.disY && Math.abs((endY - startY) / (endX - startX)) > 1) {
                            for (var i = 0; i < _this.listener[type].length; i++) {
                                _this.listener[type][i] && _this.listener[type][i](e, _this);
                            }
                        }
                        break;
                    case "up":
                        if ((startY - endY) > config.disY && Math.abs((endY - startY) / (endX - startX)) > 1) {
                            for (var i = 0; i < _this.listener[type].length; i++) {
                                _this.listener[type][i] && _this.listener[type][i](e, _this);
                            }
                        }
                        break;

                }
            });
        });

        return this;
    }

})(Zepto);


(function ($) {
    $.fn.tap = function (fn, opt) {

        var _default = {
            resposetime: 200
        };
        var config = $.extend(_default, opt);
        var startTime = 0;
        var startX = 0;
        var startY = 0; 
        var device = "ontouchstart" in document;
        if (device) {
            var id = this.attr("id") || "";

            this[0].listener = this[0].listener || {};
            this[0].listener["tap"] = this[0].listener["tap"] || [];
            this[0].listener["type"] = this[0].listener["type"] || [];
            this[0].listener["tap"].push(fn);
            this[0].listener["type"].push(id)
            var _this = this[0];

            if (arguments.length === 0) {
                for (var i = 0; i < this[0].listener["type"].length; i++) {
                    if (this.attr("id") === this[0].listener["type"][i]) {
                        _this.listener["tap"][i] && _this.listener["tap"][i]();
                    }
                }
            }
            else {
                this.on("touchstart", function (e) {
                    e = e.changedTouches[0];
                    startX = e.pageX;
                    startY = e.pageY;
                    startTime = Date.now();
                }).on("touchend", function (e) {
                    var endTime = Date.now();
                    e = e.changedTouches[0];
                    var endX = e.pageX;
                    var endY = e.pageY;
                    if (endTime - startTime <= config.resposetime && Math.abs(endY - startY) < 6 && Math.abs(endX - startX) < 6 && fn) {
                        for (var i = 0; i < this.listener["tap"].length; i++) {
                            this.listener["tap"][i] && this.listener["tap"][i](e,this);
                        }

                    }
                });
            }

        } else {
            this.on("click", function (e) {
                if (fn) {
                    fn(e,this);
                }
            });
        }

        return this;
    };
})(Zepto);

