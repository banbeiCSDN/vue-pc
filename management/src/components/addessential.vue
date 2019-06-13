<template>
	<div class="addessential">
	<h2 class="">
项目添加录入</h2>
<select>
			<option>按录入时间</option>
				<option>按注销时间</option>
					
		</select>
	<div class="addessential1">
		
	
		<div class="addessential-left">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="项目名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="项目金额" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="项目经理" prop="region">
    <el-select v-model="ruleForm.region" placeholder="项目经理1">
      <el-option label="项目经理2" value="shanghai"></el-option>
      <el-option label="项目经理3" value="beijing"></el-option>
      <el-option label="项目经理4" value="shanghai"></el-option>
      <el-option label="项目经理5" value="beijing"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="预算总成本" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="计划完成期" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
 
 
  <el-form style="margin-left: 20%; width: 201%;">
  	<el-input type="textarea" :rows="8" placeholder="请输入内容"v-model="textarea">
  	
</el-input>
  <el-form-item >
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
  </el-form>
</el-form>
		</div>
		<div class="addessential-right">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="所属单位" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="开发人数" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="完成状态" prop="region">
    <el-select v-model="ruleForm.region" placeholder="完成状态1">
      <el-option label="完成状态2" value="shanghai"></el-option>
      <el-option label="完成状态3" value="beijing"></el-option>
      <el-option label="完成状态4" value="shanghai"></el-option>
      <el-option label="完成状态5" value="beijing"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="计划开发期" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
 <el-form-item label="优先级" prop="region">
    <el-select v-model="ruleForm.region" placeholder="==请选择==">
      <el-option label="优先级" value="shanghai"></el-option>
      <el-option label="优先级" value="beijing"></el-option>
      <el-option label="优先级" value="shanghai"></el-option>
      <el-option label="优先级" value="beijing"></el-option>
    </el-select>
  </el-form-item>
 
</el-form>
		</div>
	</div>
	
	</div>
</template>

<script>
	export default {
  name: 'addessential',
   data() {
      return {
      	 textarea: '',
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  
}
</script>

<style scoped="scoped">
@import url("../../static/css/addessential.css");
</style>