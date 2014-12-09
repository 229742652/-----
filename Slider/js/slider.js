function Slider(option) {

    this.slider = (option && option.slider) ? option.slider : {};//声明要滑动的对象。
    this.transY = 0;
    this.callback = (option && option.callback) ? option.callback : function () { };
    this.isEnableDefaultMove = (option && option.isEnableDefaultMove) ? option.isEnableDefaultMove : true;
    this.isNeedProcess = option.isNeedProcess === undefined ? true : option.isNeedProcess;
    this.slipping(this);
    this.barHeight = option.barHeight;//
    this.ps = $(".ps");


}

Slider.prototype.creatProcessBar = function (parentHeight) {//生成滚动条
    var maxHeight = this.slider.offset().height;//获取可移动元素的最大高度。
    var parentHeight = this.slider.parent().offset().height;//获取可视区的最大高度
    var style = "";
    style = "<style>.ps{position:absolute;right:4%;height:" + parentHeight + "px;width:2px;background:#f90;top:0;opacity:0;-webkit-transition:400ms opacity;}\
                 .cs{position:absolute;top:0;height:" + (parentHeight * parentHeight / maxHeight) + "px;width:2px;background:green;}\
                </style>";
    $("head").append(style);
    this.slider.parent().css({ position: "absolute" }).append("<div class='ps'><div class='cs'></div></div>");
};

Slider.prototype.slipping = function (_this) {
    var self = _this;

    self.isEnableDefaultMove && $(document).on("touchmove", function (e) {
        e.preventDefault && e.preventDefault()
    });

    var maxHeight = self.slider.offset().height;//获取可移动元素的最大高度。
    var parentHeight = self.slider.parent().offset().height;//获取可视区的最大高度

    if (parentHeight - maxHeight >= 0) {
        return;
    }

    if (self.isNeedProcess) {//判断是否需要滚动条；
        this.creatProcessBar(parentHeight);//生成滚动条
    }

    self.slider.on("touchstart", function (e) {
        self.ps.css({ opacity: 1 });
        var currentY = self.transY;
        var e = e.changedTouches[0];
        var startY = e.pageY;
        self.slider.on("touchmove", function (e) {
            e.preventDefault && e.preventDefault();
            var e = e.changedTouches[0];
            var endY = e.pageY;
            var t = endY - startY + currentY;
            if (t >= 0) {
                t = 0;
            }
            else if (t <= parentHeight - maxHeight) {
                t = parentHeight - maxHeight;
            }
            self.slider.css("-webkit-transform", "translate3d(0," + t + "px,0)");
            self.transY = t;
            var scale = self.transY / (parentHeight - maxHeight);//
            self.slider.parent().find(".cs").css("-webkit-transform", "translate3d(0," + (parentHeight - parentHeight * parentHeight / maxHeight) * scale + "px,0)");
            self.callback && self.callback(t);
            return false;
        }).on("touchend", function () {
            self.ps.css({ opacity: 0 });
        });
    });


}