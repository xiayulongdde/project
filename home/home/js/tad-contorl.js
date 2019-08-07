$(function () {

    class Banercontorl {
        constructor(data) {
            this.data = data
            this.root = null
            this.types = ["微量元素", "营养补充", "健身运动", "美妆/个护", "妈咪宝贝", "家居/数码"]
            this.scr = " https://b2cstatic.baiyangwang.com/shop/common/logo.png"
        }



        init() {
            this.createtabs();
            this.creele();
            this.exclusive()
        }

        //创建侧标蓝
        createtabs() {
            let html1 = this.types.map((ele) => {
                return `  <dd class="tabs-list-dd"> <a href="" class="anlian"> ${ele}</a> </dd>`
            }).join("");
            $(".res").html(html1);

        }

        //创建选项卡
        creele() {
            let html1 = this.data.map(function (e) {
                let html2 = e.list.map(function (e1) {
                    let html3 = e1.lis.map(function (e2) {
                        // console.log(e2)
                        return `<a href="" class="select-multiseriate-a">${e2}</a>`
                    }).join("");
                    return `<dl class="select-list">
                                 <dt class="select-list-ber">
                                      <a href="" class="select-list-ber-leit">${e1.title} ></a>
                                 </dt>
                                <dd class="select-multiseriate ">
                                        ${html3}
                                 </dd>
                            </dl>`
                }).join("");

                return `<div class="select">
                     ${html2}
                    </div>`
            }).join("");
            $("#nav").append(html1)


        }

        //页面排他效果
        exclusive() {

            $(".tabs-list-dd").mouseenter(function (index, i) {
                var index = $(this).index()
                $("#nav>.select").eq(index).addClass("acton").siblings().removeClass("acton");

                $("#nav").mouseleave(function () {
                    $("#nav>.select").removeClass("acton")

                })
            });

        }






    }




























    $.getJSON("./server/rolling.json", json => (new Banercontorl(json).init()));
    // $.ajax({
    //     type: "post",
    //     url: "./server/rolling.json",
    //     dataType: "json",
    //     success: function (response) {

    //     }
    // });
})