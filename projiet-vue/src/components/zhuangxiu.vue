<!--//子组件./components/Hello.vue
//通过props接收信息-->
<template>
	<div class="zhuangxiu">
		<img src="../../static/img/b 2.png" width="100%" />
		<div class="zhongxiu-cen">
			<div class="zhongxiu-cenleft">
				<ul class="zhongxiu-cenleft1">
					<li>
						欧式
					</li>
					<li>
						中式
					</li>
					<li>
						现代简约
					</li>
					<li>
						地中海
					</li>
					<li>混搭</li>

				</ul>
			</div>
			<div class="zhongxiu-cenright">
				<ul class="zhongxiu-cenright1">
					<li><img src="../assets/a 20.png" />
						<p>上河湾110㎡中式风格装修</p>
					</li>
					<li><img src="../assets/a 5.png" />
						<p>天华美地105㎡现代简约风格装修</p>
					</li>
					<li><img src="../assets/a 20.png" />
						<p>上河湾110㎡中式风格装修</p>
					</li>
					<li><img src="../assets/a 5.png" />
						<p>天华美地105㎡现代简约风格装修</p>
					</li>
				</ul>
				<ul class="zhongxiu-cenright2">
					<li><img src="../assets/a 20.png" />
						<p>上河湾110㎡中式风格装修</p>
					</li>
					<li><img src="../assets/a 5.png" />
						<p>天华美地105㎡现代简约风格装修</p>
					</li>

				</ul>
			</div>

		</div>
	</div>

</template>

<script>
	export default {
		name: 'zhuangxiu',
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
	@import url("../../static/css/zhuangxiu.css");
</style>