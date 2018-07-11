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

// 今日上新
function Jrsx() {
    this.getJson()
    this.ul = $('.jrsx')
}
$.extend (Jrsx.prototype,{
    getJson : function () {
        var _this = this
        $.ajax({
            url : '../json/data.json',
            dataType : 'json',
            success : function (json) {
                var json = json.jrsx
                var arr = []
                for(var i = 0; i < json.length; i++){
                    var str =  
                    `<li class="itm">
                        <a href="##" class="itmPic">
                            <img src="${json[i].img}">
                        </a>
                        <a href="##" class="itmCont">
                           ${json[i].intro}
                        </a>
                        <p class="price	align_left">
                            <b>￥${json[i].price}</b>
                            <del>￥${json[i].del}</del>
                        </p>
                    </li>`
                    arr.push(str)
                }
                _this.ul.html(arr.join(''))
            }
        })
    }
})
new Jrsx()

//  楼层
function Floor() {
    this.getJson()
    this.section = $('.bodyMainList')
}
$.extend (Floor.prototype,{
    getJson : function () {
        var _this = this
        $.ajax({
            url : '../json/data.json',
            dataType : 'json',
            success : function (json) {
                var json = json.floor
                var arr = []
                for(var i = 0; i < json.length; i++){
                    var str =  
                    `<article class="mainListBox">
					<div class="title clearfix">
						<h2 class="title_l fl">
							<span>${json[i][0].title}</span>
						</h2>
						<ul class="title_c fl">
							<li class="first fl">热搜词：</li>
							<li class="last fl">
								<a href="##">花王旗舰</a>
							</li>
							<li class="last fl">
								<a href="##">家具出行</a>
							</li>
							<li class="last fl">
								<a href="##">童装童鞋</a>
							</li>
							<li class="last fl">
								<a href="##">辅食任选</a>
							</li>
							<li class="last fl">
								<a href="##">夏季童装</a>
							</li>
							<li class="last fl">
								<a href="##">孕妈塑身</a>
							</li>
							<li class="last fl">
								<a href="##">防妊娠纹</a>
							</li>
						</ul>
						<a href="##" class="title_r">
							更多好货
							<i>></i>
						</a>
					</div>
					<div class="cont clearfix">
						<!-- 母婴专区左边 -->
						<div class="cont_l myzq_l fl">
							<a href="##">
								<img src="${json[i][0].img}" alt="">
							</a>
							<ul class="cont_l_cont">
								<li><a href="##" class="item">
									<span class="txt">大牌奶粉</span>
								</a></li>
								<li><a href="##" class="item">
									<span class="txt">纸尿裤</span>
								</a></li>
								<li><a href="##" class="item">
									<span class="txt">洗护喂养</span>
								</a></li>
								<li><a href="##" class="item">
									<span class="txt">营养辅食</span>
								</a></li>
								<li><a href="##" class="item">
									<span class="txt">孕妈专区</span>
								</a></li>
								<li><a href="##" class="item">
									<span class="txt">玩具专区</span>
								</a></li>
							</ul>
						</div>
						<div class="cont_c fl">
							<!-- 母婴专区中间 -->
							<ul class="cont_c_cont myzq">
								<li class="item">
									<a href="##" class="itemCont">
										<h3 class="title">${json[i][1].title}</h3>
										<p class="intro">${json[i][1].max}</p>
										<img class="pic" src="${json[i][1].img}" alt="">
									</a>
								</li>
								<li class="item">
									<a href="##" class="itemCont">
										<h3 class="title">${json[i][2].title}</h3>
										<p class="intro">${json[i][2].max}</p>
										<img class="pic" src="${json[i][2].img}" alt="">
									</a>
								</li>
								<li class="item noborder_b">
									<a href="##" class="itemCont">
										<h3 class="title">${json[i][3].title}</h3>
										<p class="intro">${json[i][3].max}</p>
										<img class="pic" src="${json[i][3].img}" alt="">
									</a>
								</li>
								<li class="item noborder_b">
									<a href="##" class="itemCont">
										<h3 class="title">${json[i][4].title}</h3>
										<p class="intro">${json[i][4].max}</p>
										<img class="pic" src="${json[i][4].img}" alt="">
									</a>
								</li>
							</ul>
						</div>
						<!-- 母婴专区右边 -->
						<div class="cont_r fl">
							<h3 class="title">
								最新热卖
							</h3>
							<div class="listBox myzq_r">
								<div class="list">
									<div class="item">
										<a class="itemCont" href="##">
											<img class="pic" src="${json[i][5].img}" alt="">
										</a>
										<div class="intro">
											<h3 class="txt">
												<a href="##">${json[i][5].intro}</a>
											</h3>										
											<p class="price">
												<b>￥${json[i][5].price}</b>
												<span>￥</span>
												<del>${json[i][5].del}</del>
											</p>
										</div>
									</div>
								</div>
								<div class="list">
									<div class="item">
										<a class="itemCont" href="##">
											<img class="pic" src="${json[i][6].img}" alt="">
										</a>
										<div class="intro">
											<h3 class="txt">
												<a href="##">${json[i][6].intro}</a>
											</h3>										
											<p class="price">
												<b>￥${json[i][6].price}</b>
												<span>￥</span>
												<del>${json[i][6].del}</del>
											</p>
										</div>
									</div>
								</div>
								<div class="list">
									<div class="item">
										<a class="itemCont" href="##">
											<img class="pic" src="${json[i][7].img}" alt="">
										</a>
										<div class="intro">
											<h3 class="txt">
												<a href="##">${json[i][7].intro}</a>
											</h3>										
											<p class="price">
												<b>￥${json[i][7].price}</b>
												<span>￥</span>
												<del>${json[i][7].del}</del>
											</p>
										</div>
									</div>
								</div>
								<div class="list">
									<div class="item">
										<a class="itemCont" href="##">
											<img class="pic" src="${json[i][8].img}" alt="">
										</a>
										<div class="intro">
											<h3 class="txt">
												<a href="##">${json[i][8].intro}</a>
											</h3>										
											<p class="price">
												<b>￥${json[i][8].price}</b>
												<span>￥</span>
												<del>${json[i][8].del}</del>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- 热卖品牌 -->
					<div class="hot">
						<div class="title">热卖品牌</div>
						<div class="list clearfix myzq_b">
							<a class="pic noBorder_l" href="##">
								<img src="${json[i][9].img}" alt="">
							</a>
							<a class="pic" href="##">
								<img src="${json[i][10].img}" alt="">
							</a>
							<a class="pic" href="##">
								<img src="${json[i][11].img}" alt="">
							</a>
							<a class="pic" href="##">
								<img src="${json[i][12].img}" alt="">
							</a>
							<a class="pic" href="##">
								<img src="${json[i][13].img}" alt="">
							</a>
						</div>
					</div>
				</article>`
                    arr.push(str)
                }
                _this.section.html(arr.join(''))
            }
        })
    }
})
new Floor()

//  猜你喜欢
function Like () {
    this.getJson()
    this.like = $('.like')
}
$.extend(Like.prototype,{
    getJson : function () {
        var _this = this
        $.ajax({
            url : '../json/data.json',
            dataType : 'json',
            success : function (json) {
                var json = json.like
                console.log(json)
                var arr = []
                for(var i = 0; i < json.length; i++){
                    var str =  `
                    <li class="itm">
                        <a href="##" class="itmPic">
                            <img src="${json[i].img}" alt="">
                        </a>
                        <a href="##" class="itmCont">
                        ${json[i].intro}
                        </a>
                        <p class="price	align_left">
                            <b>￥${json[i].price}</b>
                            <span>￥</span>
                            <del>${json[i].del}</del>
                        </p>
                    </li>`
                    arr.push(str)
                }
                _this.like.html(arr.join(''))
            }
        })
    }
})
new Like()