//字符串的拼接。用法类似于C#和StringBuilder类，
function StringBuilder() {
    this.data = [];
}

StringBuilder.prototype = {
    append: function () {
        this.data.push(arguments[0]);
        return this;
    },
    toString: function () {
        return this.data.join("");
    },
    constructor:StringBuilder
};
 
 

function loadImgByCanvas(aImgSrc, canvas, x, y, w, h) {//通过canvas加载图片。通过硬件加速来渲染图，比传统的浏览器渲染效果要高。
    var img = new Image();
    img.onload = function () {
        canvas.width = w || document.documentElement.clientWidth;
        canvas.height = h || this.height;
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(this, x, y, canvas.width, canvas.height);
        
    };
   
    img.src = aImgSrc;
}
 

function setCss3(obj, attr) {
    if (typeof arguments[1] === "string") {
        var attr = arguments[1];
        return obj.style["webkit" + attr.charAt(0).toUpperCase() + attr.substr(1)] || obj.style[attr];
    }
    else {
        for (var i in attr) {
            var newI = i;
            if (newI.indexOf('-') > 0) {
                var num = newI.indexOf('-');
                newI = newI.replace(newI.substr(num, 2), newI.substr(num + 1, 1).toUpperCase());
            }
            obj.style[newI] = attr[i];
            newI = newI.replace(newI.charAt(0), newI.charAt(0).toUpperCase());
            obj.style["webkit" + newI] = attr[i];
            obj.style["moz" + newI] = attr[i];
            obj.style["ms" + newI] = attr[i];
            obj.style["o" + newI] = attr[i];
        }
        return obj;
    }
}

function isSupportTransition() {
    var oDiv = document.createElement("div");
    var transition = oDiv.style.webkitTransition || oDiv.style.transition;
    if (transition === undefined) {
        return false;
    }
    return true;
}

function isSupportBezier() {//浏览器是否支持贝赛尔曲线。
    var oDiv = document.createElement("div");
    setCss3(oDiv, { transition: ".8s -webkit-transform cubic-bezier(0.265, -0.600, 0.730, 1.650)" });
    if (oDiv.style.WebkitTransition !== "") {
        return true;
    }
    return false;
}