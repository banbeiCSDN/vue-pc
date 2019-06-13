<!--//子组件./components/Hello.vue
//通过props接收信息-->
<template>
	<div class="shejishi">
		<img src="../assets/b3.png" width="100%" />
		<div class="shejishi-ce">
			<ul class="shejishi-ceul">
				<li><img src="../assets/a14.png" width="98%" />
					<div class="shejishi-celi">
						<p style="color: yellow;"> 王天天</p>
						<p>主任设计师</p>
						<p> <span style="color: black;">
   				擅长风格：
   			</span><span>欧式古典 现代简约</span></p>
						<p> <span style="color: black;">
   				从业经验：
   			</span><span>7年 &nbsp; &nbsp;  代表作品：8套</span></p>
						<p class="p3"> <span class="span1">
   				免费设计
   			</span> <span class="span1">
   				TA的案例
   			</span></p>
					</div>
				</li>
				<li><img src="../assets/a15.png" width="98%" />
					<div class="shejishi-celi">
						<p class="p2"> 王天天</p>
						<p>主任设计师</p>
						<p> <span style="color: black;">
   				擅长风格：
   			</span><span>欧式古典 现代简约</span></p>
						<p> <span style="color: black;">
   				从业经验：
   			</span><span>7年 &nbsp; &nbsp;  代表作品：8套</span></p>
						<p class="p3"> <span class="span1">
   				免费设计
   			</span> <span class="span1">
   				TA的案例
   			</span></p>
					</div>
				</li>
			</ul>
			<ul class="shejishi-ceul">
				<li><img src="../assets/a16.png" width="98%" />
					<div class="shejishi-celi">
						<p style="color: yellow;"> 王天天</p>
						<p>主任设计师</p>
						<p> <span style="color: black;">
   				擅长风格：
   			</span><span>欧式古典 现代简约</span></p>
						<p> <span style="color: black;">
   				从业经验：
   			</span><span>7年 &nbsp; &nbsp;  代表作品：8套</span></p>
						<p class="p3"> <span class="span1">
   				免费设计
   			</span> <span class="span1">
   				TA的案例
   			</span></p>
					</div>
				</li>
				<li><img src="../assets/a17.png" width="98%" />
					<div class="shejishi-celi">
						<p class="p2"> 王天天</p>
						<p>主任设计师</p>
						<p> <span style="color: black;">
   				擅长风格：
   			</span><span>欧式古典 现代简约</span></p>
						<p> <span style="color: black;">
   				从业经验：
   			</span><span>7年 &nbsp; &nbsp;  代表作品：8套</span></p>
						<p class="p3"> <span class="span1">
   				免费设计
   			</span> <span class="span1">
   				TA的案例
   			</span></p>
					</div>
				</li>
			</ul>

		</div>

	</div>

</template>

<script>
	export default {
		name: 'shejishi',
		data() {
			return {}
		},
		/*props:['msgFather']*/
		props: {
			list: {
				type: Array
			},
			msgFather: {
				type: String
			},
			topul: {
				type: Array

			},
			top2: {
				type: Array

			},
			top3: {
				type: Array

			},
			imgUrl: {
				type: Array
			}
		}
	}
</script>

<style scoped>
	@import url("../../static/css/shijishi.css");
</style>