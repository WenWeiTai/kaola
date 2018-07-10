// 获取JSON数据

//今日限时购
function XSG(){
    this.getJson()
    this.ul = $('.bodyTopContBox_l')
}
$.extend (XSG.prototype,{
    getJson : function () {
        var _this = this
        $.ajax({
            url : '../json/data.json',
            dataType : 'json',
            success : function (json) {
                // console.log(json)
                var arr = [];
                var data = json.xsg
                for(var i = 0; i < json.xsg.length; i++){
                    var str = `<li class="bodyTopContBox_l__list">
                                    <a href="##" class="pic">
                                         <img src="${data[i].img}">
                                    </a>
                                    <div class="detail">
                                        <h3 class="detailTile"><a href="##">${data[i].title}</a></h3>
                                        <h3 class="introduce"><a href="##">${data[i].intro}</a></h3>
                                        <p class="price">
                                            <b>￥${data[i].price}</b>
                                            <span>￥</span>
                                            <del>${data[i].del}</del>
                                        </p>
                                        <div class="bar"></div>
                                        <p class="surplus">
                                            剩余${data[i].inventory}件
                                        </p>
                                        <a href="${data[i].url}" class="btn">立即抢购</a>
                                    </div>
                                </li>`
                    arr.push(str)
                }               
                _this.ul.html(arr.join(''))
            }
        })
    }
})
new XSG()
