<template>
  <div id="app">
   <top></top>
   
   
  
    <div class="zhong">
    	<centent></centent>
    	
    		<router-view/>
    	
    		
    </div>
   
  </div>
</template>

<script>
	import top from './components/top'
	import centent from './components/centent'
	/*import footere from './components/footere'*/
export default {
  name: 'App',
  data(){
  	return{
  		
  	}
  }
  ,
  components:{
     'top':top,
     'centent':centent
     
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 /* display: flex;
  justify-content: space-between;*/
}
body{
	margin: 0px;
	/*background-image: url(../assets/timg6.jpg);
		background-repeat: no-repeat;*/
		
}
.zhong{
	width: 100%;
	display: flex;
	justify-content: space-between;
		
	
}

</style>
