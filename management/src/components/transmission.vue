<template>
	<div class="transmission">
		<h1 class="">新建信息</h1>
		<div class="transmission-top">
			<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="消息标题">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
   <el-form-item label="接收者">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="选择">
    <el-select v-model="form.region" placeholder="==选择==">
      <el-option label="低级级" value="shanghai"></el-option>
       <el-option label="中级" value="shanghai"></el-option>
      <el-option label="高级" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="发送时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <!--<el-form-item label="即时配送">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>-->
 <!-- <el-form-item label="活动性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>-->
  <!--<el-form-item label="特殊资源">
    <el-radio-group v-model="form.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>-->
  <el-form-item label="内容">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即发送</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
		</div>
	</div>
</template>

<script>
	export default {
  name: 'transmission',
  data(){
  	return{
  		form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
  	}
  },
  
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  
}
</script>

<style scoped="scoped">
	.transmission{
		margin-right: 27%;
		color: #5E5E5E;
		
	}
	.transmission-top{
		margin-right: 10%;
		border: 1px solid #C5E2FF;
background: #FBFBFB;
-webkit-box-shadow:inset 0px 1px 6px #ECF3F5;
box-shadow: inset 0px 1px 6px #ECF3F5;
font: 200 12px/25px Arial, Helvetica, sans-serif;
	}
	h1{
	font: 24px "Trebuchet MS", Arial, Helvetica, sans-serif;
padding: 10px 10px 10px 20px;
display: block;
background: #C0E1FF;
border-bottom: 1px solid #B8DDFF;
margin-right: 10%;
	
	}
</style>