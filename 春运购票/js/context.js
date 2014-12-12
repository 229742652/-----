!function () {
    CanvasRenderingContext2D.prototype.drawEllipse = function (x, y, w, h, type, color) {
        var k = 0.55228475; //画椭圆
        var ox = (w / 2) * k;
        var oy = (h / 2) * k;
        var xe = x + w;
        var ye = y + h;
        var xm = x + w / 2;
        var ym = y + h / 2;
        var context = this;
        context.beginPath();
        context.moveTo(x, ym);
        context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
        context.closePath();
        if (type === "fill") {
            context.fillStyle = color || "#f90";
            context.fill();
        } else {
            context.strokeStyle = color || "#f90";
            context.stroke();
        }
    }

    CanvasRenderingContext2D.prototype.drawStar = function (x, y, r, num, type, rotation, color) {
        var angle = 360 / (num * 2);
        var arr = [];
        var context = this;
        for (var i = 0; i < num * 2; i++) {
            var starObj = {};
            if (i % 2 === 0) {
                starObj.x = x + r * Math.cos((angle * i + rotation) * Math.PI / 180);
                starObj.y = y + r * Math.sin((angle * i + rotation) * Math.PI / 180);
            } else {
                starObj.x = x + r / 2 * Math.cos((angle * i + rotation) * Math.PI / 180);
                starObj.y = y + r / 2 * Math.sin((angle * i + rotation) * Math.PI / 180);
            }
            arr.push(starObj);
        }
        context.beginPath();
        context.strokeStyle = color || "#c98218";
        context.fillStyle = color || "#c98218";
        context.moveTo(arr[0].x, arr[0].y);
        for (var i = 1; i < arr.length; i++) {
            context.lineTo(arr[i].x, arr[i].y);
        }
        context.closePath();
        if (type === "stroke") {
            context.stroke();
        }
        else {
            context.fill();
        }

    }
}()