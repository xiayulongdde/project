$(function () {
    class Miancont {
        constructor(tada) {
            this.data = tada
        }



        createhtml() {
            let html1 = this.data.map(function (e) {

                let html2 = e.bar.map(function (e2) {
                    return `
              <li class="mian-content-li"><a href="" class="mian-content-a">${e2}</a></li>
                  `
                }).join("")
                let html3 = e.img.map(function (e3) {
                    console.log(e3);
                    return `   
                     <li><a href=""><img src=${e3} alt=""></a></li>
                   `
                }).join("")
                return ` <div class="main-significance wianp"> 
                 <div class="mian-content">
                   <h2 class="mian-content-title">${e.title}</h2>
                   <ul class="mian-content-list">
                  ${html2}
                  </ul>
                <div class="mian-content-img">
                <div class="mian-content-big-img">
                      <a href=""> <img src=${e.src} alt=""></a>
                </div>
                <div class="mian-content-small-img">
                <ul>
                    ${html3}
                    </ul>
                   </div> </div>
                  </div>
                   </div>`
            }).join("")
            $("#main").append(html1);




        }
    }


    $.getJSON("./server/mian.json", json => (new Miancont(json).createhtml()));
});