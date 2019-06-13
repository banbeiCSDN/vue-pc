<template>
	<div class="add">
		<div class="add-top">
			<p>添加页面</p>
			
			<el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
 
 <el-form-item label="任务标题">
    <el-input v-model="sizeForm.name"></el-input>
  </el-form-item>
  <el-form-item label="工期">
    <el-input v-model="sizeForm.name"></el-input>
  </el-form-item>
  <el-form-item label="执行人">
    <el-select v-model="sizeForm.region" placeholder="==请选择==">
      <el-option label="暂不" value="shanghai"></el-option>
      <el-option label="一般" value="beijing"></el-option>
      <el-option label="需要" value="shanghai"></el-option>
      <el-option label="急" value="beijing"></el-option>
      <el-option label="很急" value="shanghai"></el-option>
      
    </el-select>
  </el-form-item>
  <el-form-item label="优先级">
    <el-select v-model="sizeForm.region" placeholder="==请选择==">
     <el-option label="暂不" value="shanghai"></el-option>
      <el-option label="一般" value="beijing"></el-option>
      <el-option label="需要" value="shanghai"></el-option>
      <el-option label="急" value="beijing"></el-option>
      <el-option label="很急" value="shanghai"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  
  <el-form-item size="large">
    <el-button type="primary" @click="onSubmit">保存成功</el-button>
    <el-button><router-link to="/" style="text-decoration: none; color: gray;" >返回
					</router-link></el-button>
  </el-form-item>
</el-form>
		</div>
		
	</div>
</template>

<script>
	export default {
  name: 'add',
  data(){
  	return{
  		sizeForm: {
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
        alert("保存成功");
      }
    }
  
}
</script>

<style scoped="scoped">
	@import url("../../static/css/add.css");
</style>