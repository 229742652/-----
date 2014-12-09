 
(function ($) {
    loadImgByCanvas("http://xinhuatone.com/zt/xwjjc/m/01/images/news.png", $("#logo canvas")[0], 0, 0, 278, 240);//
    var device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
    if (innerWidth/innerHeight>.75 && device) {//4s 
        loadImgByCanvas("http://xinhuatone.com/zt/xwjjc/m/01/images/news.png", $("#logo canvas")[0], 0, 0, 185, 160);//
    }
    $("#remark p").html(shuoming);
    $("#remark h3").html(title);

    var scrore = 0;
    var timer = null;
    var iNow = 0;//当前是第几道题目。。。
    var isLastQuestion = false;
    var question = $("#question");
    $("#qishu").html(qishu);
    $("a[data-prve='true']").attr("href", prevHref);
    $("#start_btn").tap(function () {
        $("#remark").show();
        $("#index").hide();
    });
    var time = $('#time');
    var seconds1 = time.find("span").eq(-1);
    var seconds2 = time.find("span").eq(-2);
    $("#all_page").html(questionData.length);//
    var iNum1 = 0;
    var iNum2 = 0;
    var question_mian = $("#question_mian");
    var question_content = $("#question_content");
    var result = $("#result");
    //var result_text = $("#result_text");
    var oRight_anwser = $("#right_anwser");
    var anwser_box = $("#anwser_box");
    var question_num = $("#question_num");
    var current_page = $("#current_page");
    var level_count = $("#level_count");
    var oScrore = $("#scrore");
    var gonglue = $("#gonglue");
    var isTrue = false;

    var iCount = 0;

    var allScrore = 0;

    question_mian.html(questionData[iNow].question);
    $("#start").tap(function () {
        //开始竞技
        loadImgByCanvas("http://xinhuatone.com/zt/xwjjc/m/01/images/right.png", $("#w_r_img")[0], 0, 0, 120, 120);//
        $("#remark").hide();
        
        question.show();
         
        //question_num.html(titleData[iNow]);
        current_page.html(iNow + 1);
        for (var i = 0; i < 3; i++) {
            anwser_box.find("li").eq(i).find("div").eq(1).html(questionData[iNow].anwser[i]);
        } 
    }, { resposetime: 300 });

    $("#anwser_box li").each(function (i) {
        var _this = this;
        $(this).setCss3({ animation: "rotate .4s " + (isSupportBezier() ? " cubic-bezier(0.005, -0.555, 0.900, 1.650) " : "linear") + " forwards " + (i * 120) + "ms" }).tap(function (e) {

            if (i === anwser[iNow]) {//回答正确

                $(_this).addClass("shadow");
                loadImgByCanvas("http://xinhuatone.com/zt/xwjjc/m/01/images/right.png", $("#w_r_img")[0], 0, 0, 120, 120);// 
                //result_text.html("恭喜你，答对了！");
                gonglue.find("p").html(questionData[iNow].gonglue);
                gonglue.show();
                
                $("#next span").html("下一题");

                //oRight_anwser.html("");
                var positionY = parseInt(question_num.find("span").eq(1).css("background-position-y"));

                if (iCount === 0) {
                    allScrore += 3;
                    question_num.find("span").eq(1).css({ backgroundPositionY: -65 * 3 + positionY });
                    scrore++;
                }
                else {
                    allScrore += 1;
                    question_num.find("span").eq(1).css({ backgroundPositionY: -65 + positionY });
                }

                if (allScrore > 9) {
                    question_num.find("span").eq(0).css({ backgroundPositionY: -65 });
                    question_num.find("span").eq(1).css({ backgroundPositionY: -(allScrore - 10) * 65 });
                }
                isTrue = true;
            }
            else {
                $(_this).addClass("shadow1");
                loadImgByCanvas("http://xinhuatone.com/zt/xwjjc/m/01/images/wrong.png", $("#w_r_img")[0], 0, 0, 120, 120);//回答错误
                //result_text.html("不好意思，答错了！");
                $("#next span").html("重选");
                gonglue.hide();
                //oRight_anwser.html("正确答案：<span>" + right_anwser + "</span>");
                isTrue = false;
                iCount++;

            }
            setTimeout(function () {
                question_content.hide();
                result.show();
                $("#anwser_box li").removeClass("shadow shadow1");
            }, 100);

            if (iNow >= questionData.length - 1 && isTrue) {//最后一道题目
                clearInterval(timer);
                // $("#next span").html("查看等级");
                isLastQuestion = true;
                loadImgByCanvas("http://xinhuatone.com/zt/xwjjc/m/01/images/level.png", $("#share_logo")[0], 0, 0, 180, 180);//
                $("#question_time").html("<label>时间</label>" + $("#time").html());
                $("#scrore span").eq(0).html(scrore)
                var img = new Image();
                img.src = "images/arron.png";
            }
            
           

        });

    }, { responetime: 500 });


    $("#next").tap(function () {
        question.show();
        if (isTrue) {

            if (!isLastQuestion) {
                iNow++;
                iCount = 0;
                if (iNow >= questionData.length - 1) {
                    iNow = questionData.length - 1;
                }
                question_content.show();
                result.hide();
                question_mian.html(questionData[iNow].question);
                //question_num.html(titleData[iNow]);
                current_page.html(iNow + 1);
                for (var i = 0; i < 4; i++) {
                    anwser_box.find("li").eq(i).find("div").eq(1).html(questionData[iNow].anwser[i]);
                }
            }
            else {//最后一道题目。
                $("#share").show();
                result.hide();
                for (var i = 0; i < scroreArr.length; i++) {
                    if (allScrore <= scroreArr[i].scrore) {
                        level_count.html(scroreArr[i].level);//等级判断
                        oScrore.find("span").eq(-1).html(scroreArr[i].level);
                    }
                }
                $("#question div").eq(0).css({ opacity: 0 }).hide();
                gonglue.hide();
                $("#prev").height(52).css({ marginTop: 0, opacity: 1 });
            }
        }
        else {//回答错误
            result.hide();
            question_content.show();
        }
    }, { responetime: 500 });

     
    $("#share_btn").tap(function () {
        var device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
        if (device) {//移动端
            var title = '你答对了' + scrore + '道题，获得' + oScrore.find("span").eq(-1).html() + '称号';
            document.title = title;

            $("body").css({ overflow: "hidden" }).append("<div class='mask' id='mask' style=\"height:" + (innerHeight + 60) + "px\"><img width='122'  height='122' src='images/arron.png'><p>请点击右上角<br/>点击【分享到朋友圈】<br/>与好友共分享吧</p></div>");

            setTimeout(function () {
                $("#mask").remove();
            }, 5000)
        }
        else {//pc 
            $("#jiathis").show();
        }
        //alert(1);

    }, { responetime: 500 });

    timer = setInterval(function () {
        iNum1++;
        var num = addZero(iNum1);
        if (iNum1 > 59) {
            iNum1 = 0;
            seconds1.html("00");
            iNum2++
            var num1 = addZero(iNum2);
            seconds2.html(num1);
        }
        else {
            seconds1.html(num);
        }

    }, 1000);

    function addZero(num) {
        return num < 10 ? "0" + num : num;
    };

})(Zepto);


