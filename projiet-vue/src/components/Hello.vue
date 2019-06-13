<!--//子组件./components/Hello.vue
//通过props接收信息-->
<template>
	<div class="Hello">
		<div class="top">
			<div class="top1">
				<ul class="top-ul">
					<li v-for=" top1 in topul">{{top1.topvue}}</li>

				</ul>
				<ul class="top-ul2">
					<li v-for=" top2 in top2">{{top2.topvue}}</li>

				</ul>
			</div>
		</div>
		<!--中间-->
		<div class="top-center">
			<img :src="imgUrl[0]" align="absmiddle" />
			<ul class="top-ul3" >
				
				<li v-for=" top3 in top3"><router-link to="/" style="text-decoration: none;" >{{top3.topvue1}}
					</router-link></li>
				<li id="li"  v-for=" top3 in top3">
					<router-link to="/zhuangxiu" style="text-decoration: none;"  >{{top3.topvue2}}
					</router-link>
					</li>
				<li  v-for=" top3 in top3"><router-link to="/shejishi" style="text-decoration: none;">{{top3.topvue3}}
					</router-link></li>
				<li  v-for=" top3 in top3"> <router-link to="/zhuangzhi"style="text-decoration: none;">{{top3.topvue4}}
					</router-link></li>
				<li  v-for=" top3 in top3"><router-link to="/main"style="text-decoration: none;">{{top3.topvue5}}
					</router-link></li>
				<li  v-for=" top3 in top3"><router-link to="/wrapper1"style="text-decoration: none;">{{top3.topvue6}}
					</router-link></li>

			</ul>
			<input type="text" id="inp1" value="" placeholder="请输入关键字" v-myfocus="true"/>
		</div>

		<img :src="imgUrl[8]" id="editInfo" style="float:left;width:300px; height:200px; background-color:#a10000;position:absolute;top:200px;width:3%;height: 200px;right: 0px;z-index: 80;" />
		<div class="fix" style="position: fixed; top:90%;left:96%"><img :src="imgUrl[7]"></div>
	</div>
	
</template>

<script>
 $(".router-link-active").click(function(){
 	$(this).css({" color":"#FF9C00"});
 	$(this).siblings(".router-link-active").css({" color":"gray"});
 })

	
	
	
	
	
	export default {
		name: 'Hello',
		data() {
			return {
				
			}
		},
		methods:{
			/*asd(){
				if (this.isA == true) {
					this.isA===false;
					
				} 
			}*/
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
				type:Array

			},
			imgUrl: {
				type: Array
			}
		},
		/*获取焦点*/
	 directives: {	
	 	    myfocus: {	
	 		        inserted: function (el, {value}) {	
	 			        	console.log(el,{value})	   
	 			        if (value) {	       
	 				        el.focus();	      
	 				      }	    
	 				    }	 
	 				  }
	 	}



	}
</script>

<style scoped>
@import url("../../static/css/hellow.css");
</style>