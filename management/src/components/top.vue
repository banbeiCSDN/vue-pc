<template>
	<div class="top">
		
  <header><p class="p1">种子软件项目管理系统</p> 
  	<p class="p2">->zhong zi ruan jian xiang mu guan li xi tong </p>
  	 <p class="p3">@2009 
  	 <el-link type="success" href="http://demo1.mycodes.net/houtai/xiangmuguanli/">www.mycodes.net </el-link>
  	 123456@qq.com
  	 </p>
  </header>
 
 
	</div>
	
</template>

<script>
		export default {
		name: 'top',
		data() {
			return {
				 isCollapse: true,
				  checked: false
			}
		},
		methods:{
			
		},
		/*props:['msgFather']*/
		props: {
			
		},
		
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
		



	}
</script>

<style  scoped="scoped">
	p{
		margin: 0px;
	}
header {
    background-color: #E6F5FF;
    color: #333;
    text-align:center;
    
   
  }
  .p1{
  	color: #799FD9;
  	font-size: 18px;
  	font-weight: 600;
  	margin-bottom: 10px;
  	padding-top: 10px;
  }
  .p2{
  	color: #799FD9;
  }
  .p3{
  	text-align: end;
  }
  
  
</style>