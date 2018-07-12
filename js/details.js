//获取url上的id,请求对应json数据
var getData = (function(){
    return {
        init : function(){
            this.getinfor()
            this.event()
        },
        getinfor : function () {
            var details_box = $('.details_box')
            var id = location.search.substring(1).split('=')[1]
            $.ajax({
                url : '../json/data.json',
                        dataType : 'json',
                        success : function (json) {
                            var json = json.xsg
                            for(var i = 0; i < json.length; i++){
                                if(id == json[i].id){
                                    var str = `
                                        <div class="showImg_box fl">
                                            <div class="showImg">
                                                <div class="glass"></div>
                                                <img class="big_pic" src="${json[i].img}" alt="">
                                            </div>
                                            <ul class="small_pic">
                                                <li class="fl">
                                                    <img src="../images/details/1.1.jpg" alt="">
                                                </li>
                                                <li class="fl">
                                                    <img src="../images/details/2.1.jpg" alt="">
                                                </li>
                                            </ul>
                                        </div>
                                        <ul class="cont_box fl">
                                            <li class="title">
                                                ${json[i].intro}
                                            </li>
                                            <li class="priceBox">
                                                <div class="price clearfix">
                                                    <span class="selling fl">售价</span>
                                                    <div class="sales">
                                                        <span class="sales_l">
                                                            ￥<span>${json[i].price}</span>
                                                        </span>
                                                        <span class="sales_c">6.7折</span>
                                                        <span class="sales_r">
                                                            参考价<span>${json[i].del}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="vipCard">
                                                    <div class="msg">
                                                        <img class="vPic" src="../images/details/96zhe.png" alt="">
                                                        <span class="txt">
                                                            黑卡下单再享96折&ensp;预计省63.9元
                                                        </span>
                                                        <a class="dredge" href="##">开通黑卡</a>
                                                    </div>
                                                    <div class="msg">
                                                        <img class="vPic" src="../images/details/zhuangxiang.png" alt="">
                                                        <span class="txt">
                                                            黑卡满2000减300
                                                        </span>
                                                        <a class="dredge" href="##">点击领取</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="taxes_box clearfix">
                                                <span class="taxes_l fl">税费</span>
                                                <div class="taxe_r">
                                                    预估￥<b>179.09</b>,实际税费请以提交订单时为准
                                                    <span class="regulation">
                                                        <a href="##">税费收取规则</a>
                                                    </span>
                                                </div>
                                            </li>
                                            <li class="taxes_box clearfix">
                                                <span class="taxes_l fl">运费</span>
                                                <div class="taxe_r">
                                                    至<b>广东/深圳/龙华区</b>&ensp;满88元包邮
                                                </div>
                                            </li>
                                            <li class="taxes_box clearfix">
                                                <span class="taxes_l fl">服务</span>
                                                <div class="taxe_r">
                                                    <span>本商品由&ensp;<b>自营保税仓</b>&ensp;发货</span><br />
                                                    <span>24:00前完成支付，预计<b>7月13日(周五)&ensp;</b>&ensp;送达</span>
                                                </div>
                                            </li>
                                            <li class="taxes_box checkColorBox clearfix">
                                                <span class="taxes_l fl checkColor_title">颜色</span>
                                                <div class="taxe_r checkColor">
                                                    <ul class="clearfix">
                                                        <li class="imgBox">
                                                            <a href="##">
                                                                <img src="../images/details/1.1.1.jpg" alt="">
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="taxes_box clearfix">
                                                <span class="taxes_l fl">数量</span>
                                                <div class="taxe_r">
                                                    <nav aria-label="Page navigation">
                                                        <ul class="pagination" id="nomagin">
                                                            <li>
                                                                <a href="##" aria-label="Previous" id="reduce">
                                                                    -
                                                                </a>
                                                            </li>
                                                            <li><a href="##" id="a_width">1</a></li>
                                                            <li>
                                                                <a href="##" aria-label="Next" id="add">
                                                                    +
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </li>
                                            <li class="btns">
                                                <a href="##" class="btn_buy">立即购买</a>
                                                <a href="shopping.html" class="btn_join"><i class="demo_case-gouwucheman Down_arrow"></i>加入购物车</a> 
                                                <a href="##" class="collect"><i class="demo_case-shoucang Down_arrow"></i>收藏</a>
                                            </li>
                                        </ul>
                                            `
                                }
                            }
                            details_box.html(str)
                        }
            })          
        },
        event : function () {
            var count = 1;
            $('.details_box').on('click','#add',function(){
                count++
                $('#a_width').html(count)
            })
            $('.details_box').on('click','#reduce',function(){
                count--
                $('#a_width').html(count)
            })
            $('.details_box').on('click','.btn_join',function(){
                var id = location.search.substring(1).split('=')[1]
                var val = localStorage.getItem(id)
                localStorage.setItem(id,Number(val)+Number($('#a_width').html()))                
            })
        }
    }
})()        
getData.init()