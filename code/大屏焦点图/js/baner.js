$(function () {

    var timer;
    var index = 0;
    var length = $("li").length;
    var oUl = $("ul")


    autoPlayer();

    //下一张
    $("span:last").click(next)

    //上一张
    $("span:first").click(prev)

    //当鼠标移入的时候,停止自动播放,否则恢复
    $(".baner").hover(function () {
        clearInterval(timer);
    }, function () {
        autoPlayer();
    });

    function next() {
        index++;
        if (index >= length) {
            $("ul").css("left", 0);
            index = 1;
        }
        $("ul").stop().animate({
            "left": -(index * 100) + "%"
        })
    }



    function autoPlayer() {
        timer = setInterval(function () {
            next();
        }, 2000)
    }
    //生成三个span
    for (var i = 0; i < length - 1; i++) $(".butt").append('<span class="conret">' + ("") + '</span>')
    //拿到所有span标签
    var oSpn = $(".butt").children("span")
    oSpn.first().addClass("act");

    //点击图标切换图片
    oSpn.click(function () {
        $(this).addClass("act").siblings("span").removeClass("act");

        var left = $(this).index() * parseInt(oUl.children("li").width());



    })

    function prev() {
        index--;
        if (index < 0) {
            $("ul").css("left", -((length - 1) * 100) + "%");
            index = length - 2;
        }
        $("ul").stop().animate({
            "left": -(index * 100) + "%"
        })
        oSpan.eq(Index).addClass("act").siblings("span").removeClass("act");
    }


})