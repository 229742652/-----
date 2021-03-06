﻿!function () {
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

    CanvasRenderingContext2D.prototype.drawDetail = function (color) {
        var context = this;
        context.strokeStyle = color || "#000";
        
        for (var i = 0; i < 3; i++) {
            context.moveTo(5, 10 + i * 8);
            context.lineTo(8, 10 + i * 8);
            context.stroke();
            context.moveTo(13, 10 + i * 8);
            context.lineTo(31, 10 + i * 8);
            context.stroke();
        }
    }

    CanvasRenderingContext2D.prototype.audioPause = function (color) {
        var context = this;
        context.canvas.width = 32;
        context.canvas.height = 34;
        context.lineWidth = 1;
        context.strokeStyle = color || "#fff";
        context.drawStar(18, 17, 10, 3, "stroke", 120, color || "#fff");
    }

    CanvasRenderingContext2D.prototype.audioPlay = function (color) {

        var context = this;
        context.canvas.width = 44;
        context.canvas.height = 43;
        context.strokeStyle = color || "#fff";
        context.lineWidth = 3;
        context.moveTo(12, 9);
        context.lineTo(12, 26);
        context.stroke();
        context.lineWidth = 4;
        context.moveTo(23, 9);
        context.lineTo(23, 26);
        context.stroke();
    }

    CanvasRenderingContext2D.prototype.audioNext = function (color) {
        var context = this;
        this.audioPause(color);
        context.lineWidth = 1;
        context.moveTo(27, 6);
        context.lineTo(27, 25);
        context.stroke();
    }
    CanvasRenderingContext2D.prototype.stackBlurImage = function (src, radius, blurAlphaChannel,fn) {//图片模糊特效。
        var img = new Image();
        var context = this;
        img.onload = function () {
            var w = context.canvas.width;// img.naturalWidth;
            var h =context.canvas.height;//img.naturalHeight;
            context.clearRect(0, 0, w, h);
            context.drawImage(this, 0, 0, w, h);

            if (isNaN(radius) || radius < 1) return;

            if (blurAlphaChannel)
                stackBlurCanvasRGBA(context, 0, 0, w, h, radius);
            else
                stackBlurCanvasRGB(context, 0, 0, w, h, radius);

            fn && typeof fn === "function" && fn();
        };
        img.src = src;


        var mul_table = [
        512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512,
        454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512,
        482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456,
        437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512,
        497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328,
        320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456,
        446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335,
        329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512,
        505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405,
        399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328,
        324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271,
        268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456,
        451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388,
        385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335,
        332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292,
        289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];


        var shg_table = [
                 9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17,
                17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19,
                19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
                20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22,
                22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
                22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23,
                23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
                23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
                23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
                23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
                24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
                24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
                24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
                24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
        function stackBlurCanvasRGBA(cxt, top_x, top_y, width, height, radius) {
            if (isNaN(radius) || radius < 1) return;
            radius |= 0;

            var context = cxt;
            var imageData;

            try {
                try {
                    imageData = context.getImageData(top_x, top_y, width, height);
                } catch (e) {
                    try {
                        netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
                        imageData = context.getImageData(top_x, top_y, width, height);
                    } catch (e) {
                        throw new Error("unable to access local image data: " + e);
                        return;
                    }
                }
            } catch (e) {
                throw new Error("unable to access image data: " + e);
            }

            var pixels = imageData.data;

            var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum,
            r_out_sum, g_out_sum, b_out_sum, a_out_sum,
            r_in_sum, g_in_sum, b_in_sum, a_in_sum,
            pr, pg, pb, pa, rbs;

            var div = radius + radius + 1;
            var w4 = width << 2;
            var widthMinus1 = width - 1;
            var heightMinus1 = height - 1;
            var radiusPlus1 = radius + 1;
            var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

            var stackStart = new BlurStack();
            var stack = stackStart;
            for (i = 1; i < div; i++) {
                stack = stack.next = new BlurStack();
                if (i == radiusPlus1) var stackEnd = stack;
            }
            stack.next = stackStart;
            var stackIn = null;
            var stackOut = null;

            yw = yi = 0;

            var mul_sum = mul_table[radius];
            var shg_sum = shg_table[radius];

            for (y = 0; y < height; y++) {
                r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;

                r_out_sum = radiusPlus1 * (pr = pixels[yi]);
                g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
                b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
                a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);

                r_sum += sumFactor * pr;
                g_sum += sumFactor * pg;
                b_sum += sumFactor * pb;
                a_sum += sumFactor * pa;

                stack = stackStart;

                for (i = 0; i < radiusPlus1; i++) {
                    stack.r = pr;
                    stack.g = pg;
                    stack.b = pb;
                    stack.a = pa;
                    stack = stack.next;
                }

                for (i = 1; i < radiusPlus1; i++) {
                    p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
                    r_sum += (stack.r = (pr = pixels[p])) * (rbs = radiusPlus1 - i);
                    g_sum += (stack.g = (pg = pixels[p + 1])) * rbs;
                    b_sum += (stack.b = (pb = pixels[p + 2])) * rbs;
                    a_sum += (stack.a = (pa = pixels[p + 3])) * rbs;

                    r_in_sum += pr;
                    g_in_sum += pg;
                    b_in_sum += pb;
                    a_in_sum += pa;

                    stack = stack.next;
                }


                stackIn = stackStart;
                stackOut = stackEnd;
                for (x = 0; x < width; x++) {
                    pixels[yi + 3] = pa = (a_sum * mul_sum) >> shg_sum;
                    if (pa != 0) {
                        pa = 255 / pa;
                        pixels[yi] = ((r_sum * mul_sum) >> shg_sum) * pa;
                        pixels[yi + 1] = ((g_sum * mul_sum) >> shg_sum) * pa;
                        pixels[yi + 2] = ((b_sum * mul_sum) >> shg_sum) * pa;
                    } else {
                        pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
                    }

                    r_sum -= r_out_sum;
                    g_sum -= g_out_sum;
                    b_sum -= b_out_sum;
                    a_sum -= a_out_sum;

                    r_out_sum -= stackIn.r;
                    g_out_sum -= stackIn.g;
                    b_out_sum -= stackIn.b;
                    a_out_sum -= stackIn.a;

                    p = (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;

                    r_in_sum += (stackIn.r = pixels[p]);
                    g_in_sum += (stackIn.g = pixels[p + 1]);
                    b_in_sum += (stackIn.b = pixels[p + 2]);
                    a_in_sum += (stackIn.a = pixels[p + 3]);

                    r_sum += r_in_sum;
                    g_sum += g_in_sum;
                    b_sum += b_in_sum;
                    a_sum += a_in_sum;

                    stackIn = stackIn.next;

                    r_out_sum += (pr = stackOut.r);
                    g_out_sum += (pg = stackOut.g);
                    b_out_sum += (pb = stackOut.b);
                    a_out_sum += (pa = stackOut.a);

                    r_in_sum -= pr;
                    g_in_sum -= pg;
                    b_in_sum -= pb;
                    a_in_sum -= pa;

                    stackOut = stackOut.next;

                    yi += 4;
                }
                yw += width;
            }


            for (x = 0; x < width; x++) {
                g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;

                yi = x << 2;
                r_out_sum = radiusPlus1 * (pr = pixels[yi]);
                g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
                b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
                a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);

                r_sum += sumFactor * pr;
                g_sum += sumFactor * pg;
                b_sum += sumFactor * pb;
                a_sum += sumFactor * pa;

                stack = stackStart;

                for (i = 0; i < radiusPlus1; i++) {
                    stack.r = pr;
                    stack.g = pg;
                    stack.b = pb;
                    stack.a = pa;
                    stack = stack.next;
                }

                yp = width;

                for (i = 1; i <= radius; i++) {
                    yi = (yp + x) << 2;

                    r_sum += (stack.r = (pr = pixels[yi])) * (rbs = radiusPlus1 - i);
                    g_sum += (stack.g = (pg = pixels[yi + 1])) * rbs;
                    b_sum += (stack.b = (pb = pixels[yi + 2])) * rbs;
                    a_sum += (stack.a = (pa = pixels[yi + 3])) * rbs;

                    r_in_sum += pr;
                    g_in_sum += pg;
                    b_in_sum += pb;
                    a_in_sum += pa;

                    stack = stack.next;

                    if (i < heightMinus1) {
                        yp += width;
                    }
                }

                yi = x;
                stackIn = stackStart;
                stackOut = stackEnd;
                for (y = 0; y < height; y++) {
                    p = yi << 2;
                    pixels[p + 3] = pa = (a_sum * mul_sum) >> shg_sum;
                    if (pa > 0) {
                        pa = 255 / pa;
                        pixels[p] = ((r_sum * mul_sum) >> shg_sum) * pa;
                        pixels[p + 1] = ((g_sum * mul_sum) >> shg_sum) * pa;
                        pixels[p + 2] = ((b_sum * mul_sum) >> shg_sum) * pa;
                    } else {
                        pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
                    }

                    r_sum -= r_out_sum;
                    g_sum -= g_out_sum;
                    b_sum -= b_out_sum;
                    a_sum -= a_out_sum;

                    r_out_sum -= stackIn.r;
                    g_out_sum -= stackIn.g;
                    b_out_sum -= stackIn.b;
                    a_out_sum -= stackIn.a;

                    p = (x + (((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width)) << 2;

                    r_sum += (r_in_sum += (stackIn.r = pixels[p]));
                    g_sum += (g_in_sum += (stackIn.g = pixels[p + 1]));
                    b_sum += (b_in_sum += (stackIn.b = pixels[p + 2]));
                    a_sum += (a_in_sum += (stackIn.a = pixels[p + 3]));

                    stackIn = stackIn.next;

                    r_out_sum += (pr = stackOut.r);
                    g_out_sum += (pg = stackOut.g);
                    b_out_sum += (pb = stackOut.b);
                    a_out_sum += (pa = stackOut.a);

                    r_in_sum -= pr;
                    g_in_sum -= pg;
                    b_in_sum -= pb;
                    a_in_sum -= pa;

                    stackOut = stackOut.next;

                    yi += width;
                }
            }

            context.putImageData(imageData, top_x, top_y);

        }

        function stackBlurCanvasRGB(cxt, top_x, top_y, width, height, radius) {
            if (isNaN(radius) || radius < 1) return;
            radius |= 0;


            var context = cxt;
            var imageData;

            try {
                try {
                    imageData = context.getImageData(top_x, top_y, width, height);
                } catch (e) {
                    try {
                        netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
                        imageData = context.getImageData(top_x, top_y, width, height);
                    } catch (e) {
                        throw new Error("unable to access local image data: " + e);
                        return;
                    }
                }
            } catch (e) {
                throw new Error("unable to access image data: " + e);
            }

            var pixels = imageData.data;

            var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum,
            r_out_sum, g_out_sum, b_out_sum,
            r_in_sum, g_in_sum, b_in_sum,
            pr, pg, pb, rbs;

            var div = radius + radius + 1;
            var w4 = width << 2;
            var widthMinus1 = width - 1;
            var heightMinus1 = height - 1;
            var radiusPlus1 = radius + 1;
            var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

            var stackStart = new BlurStack();
            var stack = stackStart;
            for (i = 1; i < div; i++) {
                stack = stack.next = new BlurStack();
                if (i == radiusPlus1) var stackEnd = stack;
            }
            stack.next = stackStart;
            var stackIn = null;
            var stackOut = null;

            yw = yi = 0;

            var mul_sum = mul_table[radius];
            var shg_sum = shg_table[radius];

            for (y = 0; y < height; y++) {
                r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;

                r_out_sum = radiusPlus1 * (pr = pixels[yi]);
                g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
                b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);

                r_sum += sumFactor * pr;
                g_sum += sumFactor * pg;
                b_sum += sumFactor * pb;

                stack = stackStart;

                for (i = 0; i < radiusPlus1; i++) {
                    stack.r = pr;
                    stack.g = pg;
                    stack.b = pb;
                    stack = stack.next;
                }

                for (i = 1; i < radiusPlus1; i++) {
                    p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
                    r_sum += (stack.r = (pr = pixels[p])) * (rbs = radiusPlus1 - i);
                    g_sum += (stack.g = (pg = pixels[p + 1])) * rbs;
                    b_sum += (stack.b = (pb = pixels[p + 2])) * rbs;

                    r_in_sum += pr;
                    g_in_sum += pg;
                    b_in_sum += pb;

                    stack = stack.next;
                }


                stackIn = stackStart;
                stackOut = stackEnd;
                for (x = 0; x < width; x++) {
                    pixels[yi] = (r_sum * mul_sum) >> shg_sum;
                    pixels[yi + 1] = (g_sum * mul_sum) >> shg_sum;
                    pixels[yi + 2] = (b_sum * mul_sum) >> shg_sum;

                    r_sum -= r_out_sum;
                    g_sum -= g_out_sum;
                    b_sum -= b_out_sum;

                    r_out_sum -= stackIn.r;
                    g_out_sum -= stackIn.g;
                    b_out_sum -= stackIn.b;

                    p = (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;

                    r_in_sum += (stackIn.r = pixels[p]);
                    g_in_sum += (stackIn.g = pixels[p + 1]);
                    b_in_sum += (stackIn.b = pixels[p + 2]);

                    r_sum += r_in_sum;
                    g_sum += g_in_sum;
                    b_sum += b_in_sum;

                    stackIn = stackIn.next;

                    r_out_sum += (pr = stackOut.r);
                    g_out_sum += (pg = stackOut.g);
                    b_out_sum += (pb = stackOut.b);

                    r_in_sum -= pr;
                    g_in_sum -= pg;
                    b_in_sum -= pb;

                    stackOut = stackOut.next;

                    yi += 4;
                }
                yw += width;
            }


            for (x = 0; x < width; x++) {
                g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;

                yi = x << 2;
                r_out_sum = radiusPlus1 * (pr = pixels[yi]);
                g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
                b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);

                r_sum += sumFactor * pr;
                g_sum += sumFactor * pg;
                b_sum += sumFactor * pb;

                stack = stackStart;

                for (i = 0; i < radiusPlus1; i++) {
                    stack.r = pr;
                    stack.g = pg;
                    stack.b = pb;
                    stack = stack.next;
                }

                yp = width;

                for (i = 1; i <= radius; i++) {
                    yi = (yp + x) << 2;

                    r_sum += (stack.r = (pr = pixels[yi])) * (rbs = radiusPlus1 - i);
                    g_sum += (stack.g = (pg = pixels[yi + 1])) * rbs;
                    b_sum += (stack.b = (pb = pixels[yi + 2])) * rbs;

                    r_in_sum += pr;
                    g_in_sum += pg;
                    b_in_sum += pb;

                    stack = stack.next;

                    if (i < heightMinus1) {
                        yp += width;
                    }
                }

                yi = x;
                stackIn = stackStart;
                stackOut = stackEnd;
                for (y = 0; y < height; y++) {
                    p = yi << 2;
                    pixels[p] = (r_sum * mul_sum) >> shg_sum;
                    pixels[p + 1] = (g_sum * mul_sum) >> shg_sum;
                    pixels[p + 2] = (b_sum * mul_sum) >> shg_sum;

                    r_sum -= r_out_sum;
                    g_sum -= g_out_sum;
                    b_sum -= b_out_sum;

                    r_out_sum -= stackIn.r;
                    g_out_sum -= stackIn.g;
                    b_out_sum -= stackIn.b;

                    p = (x + (((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width)) << 2;

                    r_sum += (r_in_sum += (stackIn.r = pixels[p]));
                    g_sum += (g_in_sum += (stackIn.g = pixels[p + 1]));
                    b_sum += (b_in_sum += (stackIn.b = pixels[p + 2]));

                    stackIn = stackIn.next;

                    r_out_sum += (pr = stackOut.r);
                    g_out_sum += (pg = stackOut.g);
                    b_out_sum += (pb = stackOut.b);

                    r_in_sum -= pr;
                    g_in_sum -= pg;
                    b_in_sum -= pb;

                    stackOut = stackOut.next;

                    yi += width;
                }
            }

            context.putImageData(imageData, top_x, top_y);

        }

        function BlurStack() {
            this.r = 0;
            this.g = 0;
            this.b = 0;
            this.a = 0;
            this.next = null;
        }

        
    }

}();
