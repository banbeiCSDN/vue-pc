<!--//子组件./components/Hello.vue
//通过props接收信息-->
<template>
	<div class="centent">

		<div class="centent-en">
			<!--轮播-->
			<div class="centent-ene" style="width: 100%;height: 300px;">
				<div id="myCarousel" class="carousel slide">
					<ol class="carousel-indicators">
						<li data-target='#myCarousel' data-slide-to="0" class="active"></li>
						<li data-target='#myCarousel' data-slide-to="1"></li>
						<li data-target='#myCarousel' data-slide-to="2"></li>
					</ol>
					<div class="carousel-inner">
						<div class="item active">
							<img src="../assets/tmp1541139566_1783434_s.jpg" alt="first slide" width="100%" />
						</div>
						<div class="item">
							<img src="../assets/b 2.png" alt="second slide" width="100%" />
						</div>
						<div class="item">
							<img src="../assets/tmp1541139566_1783434_s.jpg" alt="third slide" width="100%" />
						</div>
					</div>
				</div>
			</div>

			<div class="centent-en1" v-for=" en in cententen1">
				<h3>{{en.firsttul}}</h3>
				<p>{{en.secondtul}}</p>
				<input type="text" name="" class="inp2" value="" placeholder="您的姓名" />
				<p>
					<select name="" id="province" class="inp3">
						<option value="-1">{{en.threetul}}</option>
						<option value="41">{{en.fourtul}}</option>
						<option value="31">{{en.fivetul}}</option>

					</select>
					<select name="" id="province" class="inp3">
						<option value="-1">{{en.threetul}}</option>
						<option value="41">{{en.fourtul}}</option>
						<option value="31">{{en.fivetul}}</option>

					</select>
					<!--<select name="" id="city">	</select>-->
				</p>
				<input type="text" name="" class="inp2" value="" placeholder="您的手机号" />

				<p><button value="" class="inp4">{{en.sixtul}}</button></p>
				<p style="color: gainsboro;">{{en.seventul}}<span style="color: #FF9C00;">{{en.eighttul}}</span>{{en.ninetul}}</p>
			</div>
		</div>
		<!--单-->
		<div class="centent-ul" v-for="tul in cententul">

			<ul class="centent-ul1">
				<li>
					<p>{{tul.firsttul}}</p>
					<p>{{tul.secondtul}}</p>
				</li>
				<li>
					<p>{{tul.threetul}}</p>
					<p>{{tul.fourtul}} </p>
				</li>
				<li>
					<p>{{tul.fivetul}}</p>
					<p> {{tul.sixtul}}</p>
				</li>
				<li>
					<p>{{tul.seventul}}</p>
					<p> {{tul.eighttul}}</p>
				</li>
				<li style="border-right: 0px;">
					<p>{{tul.ninetul}}</p>
					<p> {{tul.tentul}}</p>
				</li>
			</ul>
		</div>
		<!--装修-->
		<div class="centent-zhuang" v-for="cz in centerzhuang">
			<h1 style="font-weight: 100;color: black;">{{cz.firstword}}</h1>
			<hr style="width: 5%; margin: auto; margin-top: 10px; background-color: gray;" />
			<p style="margin-bottom: 20px;">{{cz.secondword}}</p>
			<ul style="display: flex; justify-content: space-around;">
				<li><img :src="cz.imgone" width="98%" /></li>
				<li><img :src="cz.imgtwo" width="98%" /></li>
				<li><img :src="cz.imgthree" width="99%" /></li>

			</ul>
			<ul style="display: flex; justify-content: space-around;" class="centent-ul3">
				<li style="display: flex;justify-content: space-around;"><img src="../assets/a 8.png" width="49%" /><img src="../assets/a9.png" width="49%" /></li>

				<li><img :src="cz.imgfour" width="99%" /></li>
				<li><img :src="cz.imgfive" width="99%" /></li>
			</ul>
		</div>
		<!--装修-->
		<div class="centent-zhuang11" v-for="zhuang11 in cententzhuang11">
			<h1 style="font-weight: 100;color: black;">{{zhuang11.firsttul}} </h1>
			<hr style="width: 5%; margin: auto; margin-top: 10px; background-color: gray;" />
			<p style="margin-bottom: 20px;">{{zhuang11.secondtul}}</p>
			<ul style="display: flex; justify-content: space-around;">
				<li><img src="../assets/a14.png" width="98%" />
					<div class="centent-zhuang11ul">
						<p class="p2">{{zhuang11.threetul}} </p>
						<p>{{zhuang11.fourtul}}</p>
						<p> <span style="color: black;">
   				{{zhuang11.fivetul}}
   			</span><span>{{zhuang11.sixtul}}</span></p>
						<p> <span style="color: black;">
   				{{zhuang11.eighttul}}
   			</span><span>7年 &nbsp; &nbsp; {{zhuang11.ninetul}} </span></p>
						<p class="p3"> <span class="span1">
   				{{zhuang11.tentul}}
   			</span> <span class="span1">
   				{{zhuang11.eleventul}}
   			</span></p>
					</div>
				</li>
				<li><img src="../assets/a15.png" width="98%" />
					<div class="centent-zhuang11ul">
						<p class="p2">{{zhuang11.twelvetul}} </p>
						<p>{{zhuang11.thirteentul}}</p>
						<p> <span style="color: black;">
   				{{zhuang11.fourteentul}}
   			</span><span>{{zhuang11.fifteentul}}</span></p>
						<p> <span style="color: black;">
   				{{zhuang11.sixteentul}}
   			</span><span>7年 &nbsp; &nbsp;  {{zhuang11.ninetul}}</span></p>
						<p class="p3"> <span class="span1">
   				{{zhuang11.tentul}}
   			</span> <span class="span1">
   				{{zhuang11.eleventul}}
   			</span></p>
					</div>
				</li>
				<!--<li><img :src="imgUrl[5]" width="99%" />-->
				<li><img src="../assets/a16.png" width="99%" />
					<div class="centent-zhuang11ul">
						<p class="p2"> {{zhuang11.seventeentul}}</p>
						<p>{{zhuang11.thirteentul}}</p>
						<p> <span style="color: black;">
   				{{zhuang11.fourteentul}}
   			</span><span>{{zhuang11.fifteentul}}</span></p>
						<p> <span style="color: black;">
   				{{zhuang11.sixteentul}}
   			</span><span>7年 &nbsp; &nbsp;  {{zhuang11.ninetul}}</span></p>
						<p class="p3"> <span class="span1">
   				{{zhuang11.tentul}}
   			</span> <span class="span1">
   				{{zhuang11.eleventul}}
   			</span></p>
					</div>
				</li>
				<!--<li><img :src="imgUrl[6]" width="99%" />-->
				<li><img src="../assets/a16.png" width="99%" />
					<div class="centent-zhuang11ul">
						<p class="p2"> {{zhuang11.eightteentul}}</p>
						<p>{{zhuang11.thirteentul}}</p>
						<p> <span style="color: black;">
   				{{zhuang11.fourteentul}}
   			</span><span>{{zhuang11.fifteentul}}</span></p>
						<p> <span style="color: black;">
   				{{zhuang11.sixteentul}}
   			</span><span>7年 &nbsp; &nbsp;  {{zhuang11.ninetul}}</span></p>
						<p class="p3"> <span class="span1">
   				{{zhuang11.tentul}}
   			</span> <span class="span1">
   				{{zhuang11.eleventul}}
   			</span></p>
					</div>
				</li>

			</ul>

		</div>

		<p><span style="margin: auto; padding: 6px; position: relative; top: 100px; border: 1px solid gainsboro;">查看更多设计师</span></p>
		<!---->
		<div class="centent-xiu" v-for="xiu in cententxiu">
			<h1 style="font-weight: 100;color: black;"> {{xiu.firsttul}}</h1>
			<hr style="width: 5%; margin: auto; margin-top: 10px; background-color: gray;" />
			<p style="margin-bottom: 20px;"> {{xiu.secondtul}}</p>
			<div class="centent-xiu11">
				<div class="centent-xiu1">

					<img :src="xiu.imgone" width="90%" />

				</div>
				<div class="centent-xiu2">
					<ul>
						<li><img :src="xiu.imgtwo" align="absmiddle" width="95%" />
							<div style="width: 95%;">
								<p>{{xiu.threetul}}</p>
								<p>
									{{xiu.fourtul}}
								</p>
							</div>

						</li>
						<li><img :src="xiu.imgthree" align="absmiddle" width="95%" />
							<div style="width: 100%;">
								<p>{{xiu.threetul}}</p>
								<p>
									{{xiu.fourtul}}
								</p>
							</div>

						</li>
						<li><img :src="xiu.imgfour" align="absmiddle" width="95%" />
							<div style="width: 100%;">
								<p>{{xiu.threetul}}</p>
								<p>
									{{xiu.fourtul}}
								</p>
							</div>

						</li>
						<li><img :src="xiu.imgfive" align="absmiddle" width="95%" />
							<div style="width: 100%;">
								<p>{{xiu.threetul}}</p>
								<p>
									{{xiu.fourtul}}
								</p>
							</div>

						</li>
					</ul>
				</div>
			</div>
		</div>
		<p><span style="margin: auto; padding: 6px; position: relative; top: -20px; border: 1px solid gainsboro;">查看更多设计师</span></p>

		<!--装修-->
		<div class="centent-gong">
			<h1 style="font-weight: 100;color: black;"> 装修攻略</h1>
			<hr style="width: 5%; margin: auto; margin-top: 10px; background-color: gray;" />
			<p style="margin-bottom: 20px;"> 1300+客户案例，帮您找到喜欢的风格</p>
			<div class="centent-gong1">
				<ul class="centent-gong1ul">
					<li><img src="../assets/a24.png" width="98%" />
						<ul>
							<li>[装修材料]屋面新型防水材料的选购技巧是什么呢?</li>
							<li>[家具]帝美家具怎么样，帝美家具选购技巧</li>
							<li>[装修材料]装修房子需要哪些材料？按空间区域来阐述</li>
							<li>[装修材料]装修房子需要哪些材料？按空间区域来阐述</li>
							<li>[饰品]怎么选择沙发靠垫抱枕</li>
							<li>[厨卫电器]家庭燃气改造时的注意事项有哪些?</li>
							<li>[饰品]13个个性时尚照片装饰墙设计和分类保养详解</li>
						</ul>
					</li>
					<li><img src="../assets/a24.png" width="98%" />
						<ul>
							<li>[装修材料]屋面新型防水材料的选购技巧是什么呢?</li>
							<li>[家具]帝美家具怎么样，帝美家具选购技巧</li>
							<li>[装修材料]装修房子需要哪些材料？按空间区域来阐述</li>
							<li>[装修材料]装修房子需要哪些材料？按空间区域来阐述</li>
							<li>[饰品]怎么选择沙发靠垫抱枕</li>
							<li>[厨卫电器]家庭燃气改造时的注意事项有哪些?</li>
							<li>[饰品]13个个性时尚照片装饰墙设计和分类保养详解</li>
						</ul>
					</li>
					<li><img src="../assets/a24.png" width="98%" />
						<ul>
							<li>[装修材料]屋面新型防水材料的选购技巧是什么呢?</li>
							<li>[家具]帝美家具怎么样，帝美家具选购技巧</li>
							<li>[装修材料]装修房子需要哪些材料？按空间区域来阐述</li>
							<li>[装修材料]装修房子需要哪些材料？按空间区域来阐述</li>
							<li>[饰品]怎么选择沙发靠垫抱枕</li>
							<li>[厨卫电器]家庭燃气改造时的注意事项有哪些?</li>
							<li>[饰品]13个个性时尚照片装饰墙设计和分类保养详解</li>
						</ul>
					</li>
				</ul>
			</div>

		</div>
		<!--装修-->
		<div class="centent-gong">
			<h1 style="font-weight: 100;color: black;"> 服务流程</h1>
			<hr style="width: 5%; margin: auto; margin-top: 10px; background-color: gray;" />
			<p style="margin-bottom: 20px;">一站式服务流程，让您省心省事又省力</p>

			<img src="../assets/a27.png" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'centent',
		data() {
			return {}
		},
		/*props:['msgFather']*/
		props: {
			imgUrl: {
				type: Array
			},
			centerzhuang: {
				type: Array
			},
			cententul: {
				type: Array
			},
			cententen1: {
				type: Array
			},
			cententzhuang11: {
				type: Array
			},
			cententxiu: {
				type: Array
			}
		}
	}
</script>

<style scoped>
	@import url("../../static/css/centent.css");
</style>