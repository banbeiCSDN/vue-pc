<template>
	<div class="addstaff">
	<h2 class="">
员工基本信息录入</h2>
<h3>员工信息</h3>
	<div class="addessential1">
		
	
		<div class="addessential-left">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="唯一编号:" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="真实姓名:	" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="出生日期:" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="电子邮箱:	" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="居住地址:	" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="员工类型:" prop="region">
    <el-select v-model="ruleForm.region" placeholder="==请选择==">
      <el-option label="实习" value="shanghai"></el-option>
      <el-option label="试用" value="beijing"></el-option>
      <el-option label="正式工" value="shanghai"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="银行账户：" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="奖金：" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="入职时间：" required>
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

</el-form>
		</div>
		<div class="addessential-right">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="密码：" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="性别：" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="身份证号：" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="电话号码：" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="职位:" prop="region">
    <el-select v-model="ruleForm.region" placeholder="==请选择==">
      <el-option label="程序员" value="shanghai"></el-option>
      <el-option label="项目经理" value="beijing"></el-option>
      <el-option label="经理" value="shanghai"></el-option>
    </el-select>
  </el-form-item>
   
   <el-form-item label="基本工资：" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="其它补助：" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
 
 
</el-form>
		</div>
	</div>
		
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				
						 <el-form-item label="描述:	">
    <el-input type="textarea" v-model="form.desc"  :rows="6" style="width:80%;" ></el-input>
  </el-form-item>
						<el-form-item>
							<el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
							<el-button @click="resetForm('ruleForm')">返回</el-button>
						</el-form-item>
		</el-form>
		
	
	</div>
</template>

<script>
	export default {
  name: 'addstaff',
   data() {
      return {
      		 form: {
    
          desc: ''
       },
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
	@import url("../../static/css/addstaff.css");
</style>