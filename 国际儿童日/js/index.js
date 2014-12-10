$(function () {
    var data = {
        iWidth: document.documentElement.clientWidth,
        iHeight: document.documentElement.clientHeight,
        container: $("#container"),
        clip: $("#container .clip"),
        hand: $("#container .hand"),
        mask: $("#mask"),
        colse: $("#mask .close"),
        alert: $("#container .alert"),
        index: $("#index"),
        children: $("#index .children"),
        circle: $("#index .circle"),
        face: $("#index .face"),
        cloud: $("#index .cloud"),
        xu: $("#xu").height(document.documentElement.clientHeight),
        text: $("#mask .text").height(document.documentElement.clientHeight),
        td:$("#td")
    }
     
    function init(i) {
        data.clip.eq(i).find("img").eq(0).css({ clip: "rect(0, "+data.iWidth+"px, "+data.iWidth+"px, 0)" });
        data.clip.eq(i).find("img").eq(1).css({ clip: " rect(0," + data.iWidth + "px, " + data.iWidth + "px, " + (data.iWidth / 2) + "px)" });
    }

    //设置手指的位置。
    data.clip.each(function (i, n) {
        init(i)
        var src = $(this).find("img").eq(0).attr("src")
        loadImg(src, function (_this) {
            var h = _this.height / _this.width * data.iWidth;
            data.hand.eq(i).height(h).css({ left: data.iWidth / 2 - data.hand.width() / 2 });
            data.clip.eq(i).height(h);

            data.hand.each(function (i, n) {
                var _this = this;
                $(this).on("touchstart", function (e) {
                    e.preventDefault && e.preventDefault();
                    var e = e.changedTouches[0];
                    var disX = e.pageX - $(this).offset().left;
                    $(_this).on("touchmove", function (e) {
                        e.preventDefault && e.preventDefault();
                        var e = e.changedTouches[0];
                        var left = e.pageX - disX;
                        if (left < -data.hand.width() / 2) {
                            left = -data.hand.width() / 2;
                        }
                        if (left>data.iWidth-data.hand.width()/2) {
                            left = data.iWidth - data.hand.width() / 2;
                        }
                        $(_this).css({ left:left}); 

                        data.clip.eq(i).find("img").eq(1).css({ clip: " rect(0," + data.iWidth + "px, " + data.iWidth + "px, " + (left + data.hand.width() / 2) + "px)" });

                    }).on("touchend", function (e) {
                       
                    });
                });
            });
            return false;
        })
    });

    

    data.colse.tap(function () {
        data.mask.css("display", "none");
        data.container.show();
    });

    data.alert.each(function (i,n) {
        $(this).tap(function (e, _this) {
            data.container.hide();
            data.mask.css("display","block");
            data.text.html(text[i]);
        });
    });

    function loadImg(src,fn) {
        var img = new Image();
        img.onload = function () {
            fn && fn(this);
        }

        img.src = src;
    }
    

    var text = [
    "<h2>中国：娜荷芽——蒙古族小姑娘的英语梦</h2>"+
    "<p>７岁的娜荷芽去年在“国际艺术周——青少年英语口语展示”活动中夺得学龄前组的金奖，还被选为奥林匹克之旅中国少年形象大使，今年年底将受奥林匹克之旅组委会之邀去英国学习交流一个半月。 </p>" +
    "<p>娜荷芽是内蒙古自治区西乌珠穆沁旗蒙古族第一小学一年级的学生，从３岁起她就在做一个英语梦。在她看来，“最幸福的事是跟妈妈一起在电脑上玩化妆游戏”，而最感兴趣的事则是跟妈妈学英语，她盼望着有一天能成为像妈妈一样的英语教师。（摘自《通讯：三个孩子三个梦》，2009年11月17日，记者勿日汗）</p>",

    "<h2>中国：娜荷芽——蒙古族小姑娘的英语梦</h2>" +
    "<p>娜荷芽已经获得全国青少年英语口语大赛金奖及最佳表现奖。娜荷芽特别会利用时间。她说，“人生必须要有计划，没有规划就没有前途”。她说，长大后要上哈佛大学，将来有一天到大学讲台讲哲学课。（摘自《记者手记：“长大我要飞出草原去深造”》，2014年11月9日，记者张领）</p>",

    

    "<h2>乌干达：奥帕卡——“小家长”的上学梦</h2>" +
    "<p>奥帕卡一家住在古卢城以东40多公里的阿朱卢村，饱受二十年战乱之苦的重灾区。2005年，父母惨遭叛军杀害，年幼的奥帕卡就担负起照顾弟妹的重担。</p>" +
    "<p>奥帕卡最大的理想就是上完初中进技校，学一门手艺赚钱养家，今后让弟弟妹妹有机会上大学。（摘自《通讯：丹尼斯•奥帕卡：乌干达茅草屋里的“小家长”》，2009年11月17日，记者田野）</p>",

    "<h2>乌干达：奥帕卡——“小家长”的上学梦</h2>" +
    "<p>奥帕卡今年19岁，身材瘦小，四处打零工，哪里有活就去哪干。他去年被一家企业看中，进行跑步训练并参加比赛，但这份“工作”也是临时的。</p>"+
    "<p>奥帕卡的梦想没有变。他希望自己和妹妹可以继续上学，他的弟弟可以去技校学习。（摘自《记者手记：奥帕卡一家的上学梦》，2014年10月17日，记者袁卿）</p>",

    "<h2>美国：汉娜•鲁道夫——华裔小女孩的中国梦</h2>" +
    "<p>2008年6月2日，《人民日报》海外版刊登了一名美国小女孩写给中国国家主席胡锦涛、总理温家宝的信，信中为四川汶川小朋友遭遇地震而难过。 </p>" +
    "<p>美国华裔小女孩汉娜•鲁道夫最大的梦想就是“把中国的好东西介绍给美国，把美国的好东西介绍给中国”。</p>" +
    "<p>汉娜1995年出生在中国苏州，1岁半被养父母带到美国俄勒冈州波特兰市。（摘自《通讯：三个孩子三个梦》，2009年11月17日，记者乔继红、杨晴川）</p>",

    "<h2>美国：汉娜•鲁道夫——华裔小女孩的中国梦</h2>" +
    "<p>汉娜•鲁道夫现年19岁，美国加利福尼亚州立大学伯克利分校二年级学生，主修经济和国际关系。</p>" +
    "<p>与5年前相同，凭借语言能力，她梦想某一天能够在美国与中国之间做些事情；或许，大学本科毕业以后，她可以到中国继续学业深造。</p>" +
    "<p>阳光、清纯、直率，汉娜由美国父母抚养长大，却显现不少中国元素。（摘自《记者手记：汉娜——美国女孩、中国元素》，2014年11月19日，记者徐勇）</p>",

    "<h2>阿富汗：艾莎•哈利姆——“悬壶济世”梦</h2>" +
    "<p>“我长大后想当医生，帮助那些可怜的女孩，帮助所有需要帮助的女性。但我知道作为一个女孩，特别是阿富汗女孩，会面临很多困难，但是我相信真主会帮助坚持信念的人。”</p>" +
    "<p>13岁的艾莎正就读于阿富汗首都喀布尔爱莎•杜兰尼女子学校7年级。她所说的新闻发生在2008年11月。当时，几名塔利班武装人员在阿南部坎大哈省向女学生脸上泼酸液，造成至少13名女生脸部重度烧伤。（摘自《通讯：心怀济世救人之梦——阿富汗儿童艾莎•哈利姆》，2009年11月17日，记者林晶、颜亮）</p>",

    "<h2>阿富汗：艾莎•哈利姆——“悬壶济世”梦</h2>" +
    "<p>“我正在读医学院，还有４年我就可以正式成为一名医生。”艾莎说，“我儿时的梦想没有变过，而且快要实现了。”五年前那个“悬壶济世”的梦，如今的她正一步一个脚印地将其变成现实。</p>" +
    "<p>五年过去了，阿富汗确实在变化。孩子和女性受到更多关注，机会也更多。（摘自《记者手记：岁月不能改变的梦想》，2014年11月16日，记者陈杉）</p>",
    "<h2>印尼：陈健安——“海啸幸运儿”的考古梦</h2>" +
    "<p>2004年12月26日早晨，陈健安一家正准备去附近海边享受周末。……年仅8岁的陈健安被卷入了一股洪流。搭救陈健安的是一名印尼土著妇女。“他在海啸后第四天就跟我说，眼镜被海水冲走了，问我能不能找一副，好让他看书。”干妈很快为陈健安找到了一副旧眼镜。孩子就靠着这副眼镜坚持学习，直到最终与亲人团聚。（摘自《通讯：“帮我找副眼镜，我要读书！”》，２００９年１１月１６日，记者李晓渝）</p>",

    "<h2>印尼：陈健安——“海啸幸运儿”的考古梦</h2>" +
    "<p>陈健安是印度尼西亚班达亚齐市的第四代华人。在2004年的印度洋大海啸中，年仅8岁的陈健安被冲走，后被当地人救起，8天后才与家人团聚，因此成为亚齐人耳熟能详的“海啸幸运儿”。</p>" +
    "<p>除了看书，他还有一个爱好就是收集与恐龙有关的书籍和图片。“我小时候梦想长大能够成为一名考古学家，这样就能淘到恐龙蛋，放在家里自己玩。”陈健安高中毕业后选择了ＩＴ专业，离童年考古学家的梦想越来越远，不过他依然保留着他的爱好。（摘自《记者手记：“海啸幸运儿”的考古梦》，2014年11月17日电，记者郑世波）</p>"
        
        
    ];

    var arr = ["images/index.jpg", "images/ertong.png", "images/tianshi.png", "images/circle.png", "images/cloud1.png", "images/cloud2.png", "images/cloud3.png", "images/cloud4.png"];

    for (var i = 1; i <= 10; i++) {
        arr.push("images/" + i + ".jpg");
    }


    var isEnd = false;
    LoadImages(arr, function () {
        data.index.find("div").eq(0).addClass("lightSpeedIn");
        data.index.find("div").eq(1).addClass("lightSpeedIn1").off("webkitAnimationEnd").on("webkitAnimationEnd", function () {
            data.children.css({ opacity: 1 }).addClass("pullDown").off("webkitAnimationEnd").on("webkitAnimationEnd", function () {
                data.circle.css({ opacity: 1 }).addClass("slideExpandUp").off("webkitAnimationEnd").on("webkitAnimationEnd", function () {
                    data.circle.css("-webkit-animation", "rotation 15s linear infinite");
                    
                    data.face.css({ opacity: 1 }).addClass("bigEntrance").off("webkitAnimationEnd").on("webkitAnimationEnd", function () {
                        data.cloud.each(function (i) {
                            $(this).css({ opacity: 1 }).addClass(i % 2 == 0 ? "slideLeft" : "slideRight").css("-webkit-animation-delay", "" + (i * 300) + "ms");
                     
                           
                        });
                    });

                }); 
            });

        });
    });

    data.index.swipe("up", function () {
        data.index.css("-webkit-transform", "translateY(-100%)").off("webkitTransitionEnd").on("webkitTransitionEnd", function () {
            data.index.css({ opacity: 0 });
        });

        data.clip.find("img").each(function () {
            if ($(this).attr("src") !== $(this).data("src")) {
                $(this).attr("src", $(this).data("src"))

            }
        });

    });

    data.xu.swipe("up", function (e,_this) {
        $(_this).css("-webkit-transform", "translateY(-100%)").off("webkitTransitionEnd").on("webkitTransitionEnd", function () {
            $(_this).css({opacity:0})
        });
        data.td.attr("src", data.td.data("src"));
    })

    function LoadImages(arr,fn) {
        var len = arr.length;
        var count = 0;
        var i = 0;
        loadimg();
        function loadimg() {
            if (i === len) {
                return;
            }
            var img = new Image();
            img.onload = function () {
                count++;
                if (i < len - 1) {
                    i++;
                    loadimg();
                };
                if (count/len>=1) {
                    fn && fn();
                }
            };
            img.onerror = function () {
                count++;
                if (i < len - 1) {
                    i++;
                    loadimg();
                };
                if (count / len >= 1) {
                    fn && fn();
                }
            }
            img.src = arr[i];
        }
    }

});