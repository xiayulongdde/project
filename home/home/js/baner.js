$(function () {

    var timer;
    var index = 0;
    var length = $(".baner-list-li").length;
    var oUl = $(".baner-list")


    autoPlayer();

    //下一张
    $(".span:last").click(next)

    //上一张
    $(".span:first").click(prev)

    //当鼠标移入的时候,停止自动播放,否则恢复
    $(".baner").hover(function () {
        clearInterval(timer);
    }, function () {
        autoPlayer();
    });

    function next() {
        index++;
        if (index >= length) {
            $(".baner-list").css("left", 0);
            index = 1;
        }
        $(".baner-list").stop().animate({
            "left": -(index * 100) + "%"
        })
    }


    function prev() {
        index--;
        console.log(index);
        if (index < 0) {
            $(".baner-list").css("left", -((length - 1) * 100) + "%");
            index = length - 2;
        }
        $(".baner-list").stop().animate({
            "left": -(index * 100) + "%"

        })
        oSpan.eq(index).addClass("act").siblings("span").removeClass("act");

    }




    function autoPlayer() {
        timer = setInterval(function () {
            next();
        }, 2000)
    }
    //生成三个span
    for (var i = 0; i < length - 1; i++) $(".butt").append('<span class="conret">' + ("") + '</span>')
    //拿到所有span标签


    var oSpn = $(".butt").children("span");

    oSpn.first().addClass("act");

    //点击图标切换图片
    oSpn.click(function () {
        imgindex = $(this).index();
        $(this).addClass("act").siblings("span").removeClass("act");
        var left = $(this).index() * parseInt($(".baner-bar").children("li").width());

    })

    // //鼠标进入baner出现切换图标
    $(".baner").mouseenter(function () {
        // console.log(123);

        $(".baner-button").removeClass("banerhover").addClass("baner-hove")

    }).mouseleave(function () {
        $(".baner-button").addClass("banerhover")
    });






})