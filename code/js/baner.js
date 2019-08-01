$(function () {

    var timer;
    var index = 0;
    var length = $(".baner-list>li").length;
    var oBtn = $('.btn')


    autoPlayer();

    //下一张
    $(".span").click(next)


    //上一张
    $(".span1").click(prev)

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

    function prev() {
        console.log(123);

        index--;
        if (index < 0) {
            $("ul").css("left", -((length - 1) * 100) + "%");
            index = length - 2;
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

    for (let i = 0; i < length - 1; i++) oBtn.append(`<span class="control"> <span>`);
    let oSpan = oBtn.children("control")


    oSpan.


})