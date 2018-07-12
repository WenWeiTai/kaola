var getData = (function(){
    return {
        init : function () {
            this.event()
            this.sendAjax()
        },
        sendAjax : function() {
            $.ajax({
                url : '../json/data.json',
                dataType : 'json',
                success : function(json){
                    var arr = []
                    // console.log(json)
                    for(var i = 0; i < localStorage.length; i++){
                        var id = localStorage.key(i)
                        for(var j = 0; j < json.xsg.length; j++){
                            if(id == json.xsg[j].id){
                                var str =
                                        `
                                        <div class="shopBox main">
                                        <div class="shopTop">
                                        <label>
                                            <input type="checkbox" name="" id="">
                                            <span>自营保税仓</span>
                                        </label>
                                        </div>
                                        <div class="shopCont clearfix">
                                            <input type="checkbox" class="checkbox fl">
                                        <img class="shopImg fl" src="${json.xsg[j].img}" alt="">
                                        <div class="intro fl">
                                            <b class="intro_t">${json.xsg[j].intro}</b>
                                            <p class="intro_b">不支持7天无理由退货</p>
                                        </div>
                                        <div class="color fl"><j>颜色：黑色</j></div>
                                        <div class="price fl">
                                            <del>￥${json.xsg[j].del}</del>
                                            <p>￥${json.xsg[j].price}</p>
                                        </div>
                                        <div class="numBtn fl" data-id="${json.xsg[j].id}">
                                            <a href="##" class="num_sub fl">-</a>
                                            <input type="text" value="${localStorage[id]}" class="fl num">
                                            <a href="##" class="num_add fl">+</a>
                                        </div>
                                        <div class="money fl">
                                            <span>${localStorage[id]*json.xsg[j].price}</span>
                                        </div>
                                        <div class="btns fl">
                                            <a href="##" class="del_shop">删除</a>
                                            <a href="##">移入我的收藏</a>
                                        </div>
                                        </div>
                                        `
                                arr.push(str)
                            }
                        }   
                        $('.allShop').html(arr.join(''))
                    }
                }
            })
        },
        event : function () {
            $('.allShop').on('click','.num_add',function () {
                var num = $('.num').val()
                num++
                $('.num').val(num)
                var ls_val = localStorage.getItem($(this).parent().attr('data-id'))
            })
        }
    }
})()
getData.init()


/* 


*/