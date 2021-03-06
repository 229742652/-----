﻿$(function () {
    var data = {
        iWidth: document.documentElement.clientWidth,
        iHeight: document.documentElement.clientHeight,
        header: $("#header"),
        block: $(".block"),
        user: $("#user"),
        found: $("#found"),
        downLoad: $("#download"),
        search: $("#search"),
        banner: $("#found .port .banner ol"),
        timer: null,
        bannerLen: $("#found .port .banner ol li").size(),
        bannerLine: $("#found .port .banner_line div"),
        detailBtn: $("#footer .detail"),
        playBtn: $("#play"),
        nextBtn: $("#footer .next"),
        music_anim: $("#footer .music_anim"),
        audio:$("#audio"),
        footer:$("#footer"),
        process: $("#footer .process span"),
        list: $("#list"),
        audioName: $("#footer .title section"),
        audioList: $("#audio_list")
    }
    $(document).on("touchmove", function (e) { e.preventDefault() });

    data.header.tap(function (e,_this) {//头部导航点击事件。
        var index = $(e.target).parent().index();
        data.header.find("li").removeClass("active");
        data.header.find("li").eq(index).addClass("active");
         
        data.block.hide();
        data.block.eq(index).show();
    });

    data.found.find("nav").tap(function (e, _this) {//发现模块的导航点击事件。
        if (e.target.nodeName === "LI") {
            var i = $(e.target).index();
            navChange(i);

            data.found.find(".port .bigBanner").dragSwipe({
                max: .2,
                iNow: i,
                fnComplate: function (iNow) {
                    navChange(iNow);
                }
            });
        }
    });

    function navChange(i) {//发现模块滑动切换的。
        data.found.find("nav li").removeClass("active")
        data.found.find("nav li").eq(i).addClass("active");
    }

    window.navChange = navChange;

    setSize(data.iWidth, data.iHeight);
    var iNow = 0;
    data.banner.dragSwipe({//banner滑动
        fnComplate: function (iNow) {
            bannerLineMove(iNow)
        },
        iNow:iNow

    }).on("touchstart", function () {
        data.banner.css("-webkit-transition", "none");
        clearInterval(data.timer);
        data.timer = null;
    }).on("touchend", function () {
        setTimeout(function () {
            data.timer === null && (data.timer = setInterval(function () {
                bannerMove(iNow);
                data.banner.dragSwipe({//banner滑动
                    iNow: iNow,
                    isOff: true,
                    fnComplate: function (iNow) {
                        bannerLineMove(iNow)
                    }
                });
            }, 3000));
        }, 3000);
    });

   
    data.timer === null && (data.timer = setInterval(function () {
        bannerMove(iNow)
    }, 3000));


    function bannerLineMove(i) {
        data.bannerLine.removeClass("active");
        data.bannerLine.eq(i).addClass("active");
    }

    function bannerMove() {
        iNow++;
        if (iNow > data.bannerLen - 1) {
            iNow = 0;
        }
        bannerLineMove(iNow)
        data.banner.css("-webkit-transform", "translate3d(-" + (iNow * data.iWidth) + "px,0,0)").css("-webkit-transition", "500ms -webkit-transform ease-in-out");
    }
    //data.found.find(".port .bigBanner").dragSwipe({
    //    max: .2,
    //    iNow: 0,
    //    fnComplate: function (iNow) {
    //        navChange(iNow);
    //    }
    //});
     
    function setSize(iW, iH) {
        data.found.find(".port .bigBanner").width(iW * data.found.find("nav li").size()).find(".banner_item").width(data.iWidth).height(data.iHeight - 155);
        data.found.find(".port .bigBanner li").width(iW);
        data.banner.find("li").width(iW);
        data.banner.width(iW * data.bannerLen);
        data.audioList.find(".list_port").height(iH - 70);
    }

    /*=========================底部播放器============================*/
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    context.drawDetail("#fff");
    data.detailBtn.find("section").css("background", "url(" + canvas.toDataURL() + ")");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.audioPause();
    data.playBtn.find("section").css("background", "url(" + canvas.toDataURL() + ")");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.audioNext();
    data.nextBtn.find("section").css("background", "url(" + canvas.toDataURL() + ")");
     
    var isPlay = true;
    data.playBtn.tap(function (e, _this) {
        if (!isPlay) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.audioPause();
            $(_this).find("section").css("background", "url(" + canvas.toDataURL() + ")");
            data.music_anim.addClass("pause").removeClass("played");
            data.audio[0].pause();
        }
        else {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.audioPlay();
            data.playBtn.find("section").css("background", "url(" + canvas.toDataURL() + ")");
            data.music_anim.addClass("played").removeClass("pause");
            data.audio[0].play();
        }
        
        isPlay = !isPlay;

    });
    
    data.audio.on("play", function () {//播放
        data.audio[0].totleTime = data.audio[0].duration * 1;

        // setTrans3d(data.process, ["-100%", 0, 0]);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.audioPlay();
        data.playBtn.find("section").css("background", "url(" + canvas.toDataURL() + ")");
        data.music_anim.addClass("played").removeClass("pause");
    }).on("pause", function () {//暂停
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.audioPause();
        data.playBtn.find("section").css("background", "url(" + canvas.toDataURL() + ")");
        data.music_anim.addClass("pause").removeClass("played");
    }).on("end", function () {//结束
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.audioPause();
        data.playBtn.find("section").css("background", "url(" + canvas.toDataURL() + ")");
        data.music_anim.addClass("pause").removeClass("played");
        isPlay = !isPlay;
    }).on("timeupdate", function () {//播放的时候不断的触发的事件。
        var currentTime = data.audio[0].currentTime * 1;
        setTrans3d(data.process, [(parseInt(currentTime / (data.audio[0].totleTime * 1) * 100 - 100) + "%"), 0, 0]);
    }).on("loadedmetadata", function () {//成功获取资源长度 
        data.audio[0].totleTime = data.audio[0].duration * 1;
    }).on("seeking", function () {//资源寻找中……

    }).on("seeked", function () {//资源寻找完毕。

    }).on("canplaythrough", function () {//可以播放，歌曲全部加载完毕

    }).on("waiting", function () {////等待数据，并非错误 

    });

    function setTrans3d(obj, arr) {

        if (arguments.length === 1) {
            obj.css("-webkit-transform", "translate3d(0,0,0)");
            obj.css("transform", "translate3d(0,0,0)");
        }
        else {
            obj.css("-webkit-transform", "translate3d(" + arr[0] + "," + arr[1] + "," + arr[2] + ")");
            obj.css("transform", "translate3d(" + arr[0] + "," + arr[1] + "," + arr[2] + ")");
        }
        return obj;
    }

    //发现模块每一个图片的点击事件
    data.list.tap(function (e, _this) {
        if (e.target.nodeName === "IMG" && $(e.target).data("audiosrc") !== undefined) {
            data.audio[0].pause();
            data.audio.attr("src", $(e.target).data("audiosrc"));
            data.audio[0].play(); 
            data.audioName.html($(e.target).data("name"))
        }
    });

    //利用canvas生成音频列表背景图
    createBg();
    function createBg() {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        canvas.width = data.iWidth;
        canvas.height = data.iHeight;
        context.stackBlurImage("images/jingxuan/news/1.jpg", 100, false, function () {
            data.audioList.css({ background: "url(" + canvas.toDataURL() + ")" });
        }); 
    }

    data.footer.find(".detail").tap(function () {
        setTrans3d(data.audioList);
    });
    data.audioList.tap(function (e,_this) {
        if (e.target.className.indexOf('close')>-1) {
            setTrans3d(data.audioList,[0,"100%",0]);
        }
    }); 

    function setTrans3d(obj, arr) {
        if (arguments.length === 1) {
            obj.css("-webkit-transform", "translate3d(0,0,0)");
            obj.css("transform", "translate3d(0,0,0)");
        }
        else {
            obj.css("-webkit-transform", "translate3d(" + arr[0] + "," + arr[1] + "," + arr[2] + ")");
            obj.css("transform", "translate3d(" + arr[0] + "," + arr[1] + "," + arr[2] + ")");
        }
        return obj;
    }
});

(function () {
    var jingxuanScroll;
    var audiuListScroll;
    //function loaded() {
    //    jingxuanScroll = new iScroll('wrapper', { hScroll: false });//发现－精选模块自定义的滚动条
    //    audiuListScroll = new iScroll('list_port', {hScroll:false});//发现－精选模块自定义的滚动条
    //}
    var myScroll,
	pullDownEl, pullDownOffset,
	pullUpEl, pullUpOffset,
	generatedCount = 0;

    /**
     * 下拉刷新 （自定义实现此方法）
     * myScroll.refresh();		// 数据加载完成后，调用界面更新方法
     */
    function pullDownAction() {
        setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
            var el, li, i;
            el = document.getElementById('thelist');
            
            for (i = 0; i < 3; i++) {
                li = document.createElement('li');
                li.innerHTML = '<p class="title">宋小宝搞笑大全《中奖了》'+i+'</p><p class="timeline">时长：<span>49分3秒</span></p>';
                el.insertBefore(li, el.childNodes[0]);
            }
            myScroll.refresh();		//数据加载完成后，调用界面更新方法   Remember to refresh when contents are loaded (ie: on ajax completion)
        }, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
        //这里面的settimeout是用来模拟ajax加载数据等待的时间。
    }

    /**
     * 滚动翻页 （自定义实现此方法）
     * myScroll.refresh();		// 数据加载完成后，调用界面更新方法
     */
    function pullUpAction() {
        setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
            var el, li, i;
            el = document.getElementById('thelist');

            for (i = 0; i < 3; i++) {
                li = document.createElement('li');
                li.innerHTML = '<p class="title">宋小宝搞笑大全《中奖了》' + i + '</p><p class="timeline">时长：<span>40分3秒</span></p>';
                el.appendChild(li, el.childNodes[0]);
            }

            myScroll.refresh();		// 数据加载完成后，调用界面更新方法 Remember to refresh when contents are loaded (ie: on ajax completion)
        }, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
    }

    /**
     * 初始化iScroll控件
     */
    function loaded() {
        pullDownEl = document.getElementById('pullDown');
        pullDownOffset = pullDownEl.offsetHeight;
        pullUpEl = document.getElementById('pullUp');
        pullUpOffset = pullUpEl.offsetHeight;

        myScroll = new iScroll('list_port', {
            scrollbarClass: 'myScrollbar', /* 重要样式 */
            useTransition: false, /* 此属性不知用意，本人从true改为false */
            topOffset: pullDownOffset,
            onRefresh: function () {
                if (pullDownEl.className.match('loading')) {
                    pullDownEl.className = '';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
                } else if (pullUpEl.className.match('loading')) {
                    pullUpEl.className = '';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
                }
            },
            onScrollMove: function () {
                if (this.y > 5 && !pullDownEl.className.match('flip')) {
                    pullDownEl.className = 'flip';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '松手开始更新...';
                    this.minScrollY = 0;
                } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                    pullDownEl.className = '';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
                    this.minScrollY = -pullDownOffset;
                } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                    pullUpEl.className = 'flip';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
                    this.maxScrollY = this.maxScrollY;
                } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                    pullUpEl.className = '';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
                    this.maxScrollY = pullUpOffset;
                }
            },
            onScrollEnd: function () {
                if (pullDownEl.className.match('flip')) {
                    pullDownEl.className = 'loading';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';
                    pullDownAction();	// Execute custom function (ajax call?)
                } else if (pullUpEl.className.match('flip')) {
                    pullUpEl.className = 'loading';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
                    pullUpAction();	// Execute custom function (ajax call?)
                }
            }
        });

        setTimeout(function () { document.getElementById('list_port').style.left = '0'; }, 800);
    }

    //初始化绑定iScroll控件 
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
   // document.addEventListener('DOMContentLoaded', loaded, false);    
     
   window.addEventListener('load', loaded, false);
})();


(function () {

    var myScroll;

    function loaded() {
        myScroll = new iScroll('port_wrapper', {
            snap: true,
            momentum: false,
            hScrollbar: false,
            onScrollMove: function () {
                return false;
            },
            onScrollEnd: function () { 
                navChange(this.currPageX)
            },
            onScrollStart: function (e) {
              
            }
        });
    }

    document.addEventListener('DOMContentLoaded', loaded, false);

   
})();