<template>
	<div class="vip">
		<h1>111111</h1>
		<h1>111111</h1>
		<h1>111111</h1>
		<h1>{{app}}</h1>
	</div>
</template>
<script>
	import qs from 'qs'
	export default {
		name: 'vip',
		data() {
			return {
				app: ""
			}
		},
		/*created(){
    	this.$axios.get("/v1/bpi/currentprice.json").then(response=>{
    		console.log(response);
    		this.app=response.data.time.updated;
    	}).catch(error=>{
    		console.log(error);
    	})
  
}*/
		created() {
			this.$axios.post("http://www.wwtliu.com/sxtstu/blueberrypai/login.php", qs.stringify({
				user_id: "iwen@qq.com",
				password: "iwen123",
				verification_code: "crfvw"

			})).then(res => {
				console.log(res)
			}).catch(error => {
				console.log(error);
			})
		}
	}
</script>

<style>

</style>