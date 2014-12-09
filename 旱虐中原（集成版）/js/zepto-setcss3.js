(function ($) {
    $.fn.setCss3 = function (attr) {
        for (var i in attr) {
            var newI = i;
            if (newI.indexOf('-') > 0) {
                var num = newI.indexOf('-');
                newI = newI.replace(newI.substr(num, 2), newI.substr(num + 1, 1).toUpperCase())
            }
            this.css(newI, attr[i]);
           // newI = newI.replace(newI.charAt(0), newI.charAt(0).toUpperCase());
            this.css("-webkit-" + newI, attr[i]);
            this.css("-moz" + newI, attr[i]);
            this.css("-ms-" + newI, attr[i]);
            this.css("-o-" + newI, attr[i]);
            
        }
        return this;//返回当前操作对象，方便链式操作。
    }
})(Zepto);