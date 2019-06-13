<template>
  <div id="app">
  	
    <hello  :list="list" :topul="topul" :top2="top2" :top3="top3" :imgUrl="imgUrl">
    	
    	</hello>
    
						<router-view :centerzhuang="centerzhuang" :cententul="cententul" :cententen1="cententen1" :cententzhuang11="cententzhuang11" :cententxiu="cententxiu" :maincen="maincen" :maince="maince" :mainUrl="mainUrl"/>
  
					
   <foorer></foorer>
   <router-link to="/vip"style="text-decoration: none;">联系我们
					</router-link>
  
    
  </div>
</template>

<script>
	import hello from './components/Hello'
	import centent from './components/centent'
	import foorer from './components/foorer'
export default {
  name: 'app',
  data () {
    return {
    	list:[
    	{ id:2,name:'banbebe2'},
    	{ id:3,name:'banbebe3'},
    	{ id:4,name:'banbebe4'}
    	],
    	topul:[
    	{topvue:'登录'},
    	{topvue:'|'},
    	{topvue:'注册'}
    	],
    	top2:[
    	{topvue:'设为首页'},
    	{topvue:'|'},
    	{topvue:'加入收藏'},
    	{topvue:'|'},
    	{topvue:'留言板'},
    	{topvue:'|'},
    	{topvue:'手机站'}
    	],
    	top3:[
    	{topvue1:'首页',topvue2:'装修案例',topvue3:'设计师',topvue4:'装修知识',topvue5:'关于我们',topvue6:'联系我们'}
    	]
    	
    	,
    	imgUrl:[
    	require("./assets/a1.png"),
    	require("./assets/a2.png"),
    	require("./assets/a13.png"),
    	require("./assets/a14.png"),
    	require("./assets/a15.png"),
    	require("./assets/a16.png"),
    	require("./assets/a17.png"),
    	require("./assets/c1.png"),
    	require("./assets/b1.png")
    	],
    	indexsrc:[
    		{src:'../../static/img/b 2.png'}
    	],
    	/*中间centent*/
    	centerzhuang:[
    		{
    			firstword:'装修案例',
    			secondword:' 1300+客户案例，帮您找到喜欢的风格',
    			imgone:'../../static/img/a3.png',
    			imgtwo:'../../static/img/a3.png',
    			imgthree:'../../static/img/a 5.png',
    			imgfour:'../../static/img/a10.png',
    			imgfive:'../../static/img/a4.png'
    		}
    	],
    	cententul:[
    	{
    		firsttul:'3000+',
    		secondtul:'日均订单',
    		threetul:'500+',
    		fourtul:'城市分站',
    		fivetul:'100%',
    		sixtul:'完美的口碑',
    		seventul:'800人',
    		eighttul:'专业运营团队',
    		ninetul:'13000+',
    		tentul:'日均订单'
    		
    	}
    	],
    	cententen1:[
    	{
    		firsttul:'免费获取报价',
    		secondtul:'专业测量，免费报价',
    		threetul:'北京',
    		fourtul:'河南',
    		fivetul:'河北',
    		sixtul:'立即申请',
    		seventul:'已有',
    		eighttul:'688',
    		ninetul:'位业主免费领取'
    		
    	}
    	],
    	cententzhuang11:[
    	{
    		firsttul:'家装设计师',
    		secondtul:' 1300+客户案例，帮您找到喜欢的风格',
    		threetul:'王天天',
    		fourtul:'主任设计师',
    		fivetul:'擅长风格：',
    		sixtul:'完美的口碑',
    		seventul:'欧式古典 现代简约',
    		eighttul:'从业经验：',
    		ninetul:'代表作品：8套',
    		tentul:'免费设计',
    		eleventul:'TA的案例',
    		twelvetul:"李天天",
    		thirteentul:'主任设计师',
    		fourteentul:'擅长风格：',
    		fifteentul:'欧式古典 现代简约',
    		sixteentul:'从业经验：',
    		seventeentul:'孙天天',
    		eightteentul:'李木木'
    		
    		
    		
    	}
    	],
    	cententxiu:[
    	{
    		firsttul:'装修案例',
    		secondtul:' 1300+客户案例，帮您找到喜欢的风格',
    		threetul:'别墅大门颜色及禁忌盘点',
    		fourtul:'别墅大门颜色及禁忌盘点 你不知道的别...',
    		fivetul:'别墅大门颜色及禁忌盘点',
    		sixtul:'别墅大门颜色及禁忌盘点 你不知道的别...',
    		imgone:'../../static/img/a18.png',
    			imgtwo:'../../static/img/a19.png',
    			imgthree:'../../static/img/a 20.png',
    			imgfour:'../../static/img/a21.png',
    			imgfive:'../../static/img/a22.png'
    		
    	}
    	],
    	cententgong:[
    	{
    		firsttul:'装修案例',
    		secondtul:' 1300+客户案例，帮您找到喜欢的风格',
    		threetul:'别墅大门颜色及禁忌盘点',
    		fourtul:'别墅大门颜色及禁忌盘点 你不知道的别...',
    		fivetul:'别墅大门颜色及禁忌盘点',
    		sixtul:'别墅大门颜色及禁忌盘点 你不知道的别...',
    		imgone:'../../static/img/a18.png',
    			imgtwo:'../../static/img/a19.png',
    			imgthree:'../../static/img/a 20.png',
    			imgfour:'../../static/img/a21.png',
    			imgfive:'../../static/img/a22.png'
    		
    		
    	}
    	],
    	/*main.vue*/
    	maincen:[{
    		firsttul:'××装饰工程有限公司',
    		secondtul:'xx装饰工程有限公司是一家从事工装、家装、别墅、会所等高端设计、预算、施工售后于一体的专业机构,并且实现主材、软装、家具的整体配套服务。全体员工始终以客户需求为核心,追求客户最大满意度为宗旨,秉承着品质奠定基础,信誉铸就品牌的发展原则,先做人后做事,踏踏实实为客户倾心打造着每一个良心工程,我们致力于为每位客户提供物超所值的装修服务。自公司成立以来,始终把公司全体员工的专业素养、配套施工和完善的售后体系,放在为客户提供高品质服务的第一位，因此公司精心聘请并打造了一支专业素养极高的设计团队,精准细心的标准南方施工队伍。',
    		threetul:'我们本着诚信,专业,创新,透明价格的理念,始终把三个“专注”服务贯彻到底。'
    	}
    	],
    	
    	maince:[
    	{
    		firsttul:'三个“专注”服务',
    		secondtul:' 专注设计',
    		threetul:'我们始终以最专业的设计团队,以独特超前的设计理念,倾心为客户量身打造专属于自己气质文化,高端品位的创新设计方案。',
    		fourtul:'专注品质',
    		fivetul:'专注服务',
    		imgone:'../../static/img/ab3.png',
    			imgtwo:'../../static/img/ab4.png',
    			imgthree:'../../static/img/ab5.png'
    			
    		
    		
    	}
    	],
    	mainUrl:[
    	{
    		
    		imgone:'../../static/img/ab6.png',
    			imgtwo:'../../static/img/ab7.png',
    			imgthree:'../../static/img/ab8.png',
    			imgfour:'../../static/img/ab9.png'
    			
    		
    	}
    	]
    	
    	
    	
    	
    	
    }
  },
  components:{
     'hello':hello,
     'centent':centent,
     'foorer':foorer
  }
  
}

</script>

<style scoped="scoped">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
