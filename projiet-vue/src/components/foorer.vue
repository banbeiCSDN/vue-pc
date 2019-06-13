<!--//子组件./components/Hello.vue
//通过props接收信息-->
<template>
	<div class="foorer">
		<div class="foorer-1">
			<ul>
				<li>
					<h5>关于我们</h5>
					<p>公司简介</p>
					<p>联系我们</p>
					<p>人才招聘</p>
				</li>
				<li>
					<h5>网站帮助</h5>
					<p>帮助中心</p>
					<p>网站地图</p>
					<p>意见反馈</p>
				</li>
				<li>
					<h5>网站协议</h5>
					<p>版权声明</p>
				</li>
				<li>
					<img src="../assets/a23.png" />
				</li>
				<li style="text-align: center;">
					<p style="font-size: 22px; margin-top: 48px;">400-000-0000</p>
					<p style="font-size: 12px;">周一至周日：08：00-22：00</p>
					<p style="width: 80px; height: 40px; text-align: center; line-height: 40px; background-color: #FF9C00;
   							font-size: 13px; margin-left: 30%; color: white;">在线客服</p>
				</li>
			</ul>
			<p style="text-align: center; font-size: 12px; color: darkgray;">COPYRIGHT 2014-2025 ALL RIGHTS RESERVED</p>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'foorer',
		data() {
			return {}
		},
		/*props:['msgFather']*/
		props: {

		}
	}
</script>

<style scoped>
	@import url("../../static/css/foorer.css");
</style>