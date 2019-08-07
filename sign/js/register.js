$(function () {

    //图形验证码
    var imgCoodtext = "";
    //短信验证码
    var masgtext = ""
    //密码
    let passwordText = ""
    //用户名
    let usnameText = ""
    //机号码
    let phoneText = ""

    //拿到页面中的标签
    let phone = $(".text")
    let ident = $(".identifying")
    console.log(ident);
    let mane = $(".mane")
    let paw = $(".password")
    let idend = $("#sms_captcha")

    /*不传值，统一走默认值*/
    let captcha1 = new CaptchaMini();
    captcha1.draw(document.querySelector('#captcha1'), r => {
        console.log(r, '验证码1');
        //失去焦点后自动触发事件
        imgCoodtext = r;
        //自动触发失去焦点事件
        ident.trigger("blur")



    });
    //正则表达式
    let regUsername = /^[A-Za-z]{6,8}$/; //用户名正则
    let regPhone = /^1[3-9]\d{9}$/; /* 1开头 第二位3-9 后面全都是数字   11位 手机号码正则  */
    let regPassword = /^[a-zA-Z0-9]{6,16}$/; //密码正则


    function borfomr() {
        //页面换取焦点时添加一个边框
        $(".image_captcha").focus(function () {
            $(this).val("")
            return arr = $(this).parent().parent().css(
                "border", "1px solid  #EF3C79"
            )
        })
        //页面失去焦点时
        $(".image_captcha").blur(function () {
            $(this).parent().parent().css(
                "border", "1px solid  #E6E6E6"
            )
        })
    }

    borfomr()


    //监听用户名失去焦点的事件
    mane.blur(function (e) {
        let text = $.trim($(this).val())
        usernameText = text;
        let parnt = $(this).parents(".code-div-dl")
        let msg = parnt.children(".form-group__message")
        if (text == 0) {
            parnt.addClass("form-group-error");
            msg.html("用户名不能为空")
        } else if (!regUsername.test(text)) {
            parnt.addClass("form-group-error")
            msg.html("用户名不符合规范")
        } else {
            parnt.removeClass("form-group-error");
        }

    });

    //监听手机验证码的正则事件
    phone.blur(function (e) {
        let text = $.trim($(this).val());
        phoneText = text;
        let parnt = $(this).parents(".code-div-dl")
        let msg = parnt.children(".form-group__message")
        if (text.length == 0) {
            parnt.addClass("form-group-error");
            msg.html("手机号码不能为空");
        } else if (!regPhone.test(text)) {
            parnt.addClass("form-group-error");
            msg.html("请输入正确的手机号码！");
        } else {
            parnt.removeClass("form-group-error");
        }
    });

    //监听密码的事件
    paw.blur(function (e) {
        let text = $.trim($(this).val());
        passwordText = text;
        let parnt = $(this).parents(".code-div-dl")
        let msg = parnt.children(".form-group__message")
        if (text.length == 0) {
            parnt.addClass("form-group-error");
            msg.html("密码不能为空");
        } else if (!regPassword.test(text)) {
            parnt.addClass("form-group-error");
            msg.html("请设置正确密码");
        } else {
            parnt.removeClass("form-group-error");
        }
    });

    ident.blur(function (e) {
        let text = $.trim($(this).val());
        msgText = text;
        let parnt = $(this).parents(".code-div-dl")
        let msg = parnt.children(".form-group__message")
        if (text.length == 0) {
            parnt.addClass("form-group-error");
            msg.html("短信验证码不能为空");
        } else if (text != imgCoodtext) {
            parnt.addClass("form-group-error");
            msg.html("短信验证码不正确");
        } else {
            parnt.removeClass("form-group-error");
        }
    });












})








// })

// $.ajax({
//     ty: "post",
//     url: "./server/register.php",
//     dataTyue: "json",
//     data: `username=${usernameText}&password=${passwordText}&phone=${phoneText}`,
//     success: function (response) {
//         //先检查请求的结果6


//     }