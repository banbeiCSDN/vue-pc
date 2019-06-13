<template>
	<div class="reighter">
		<img src="../assets/reight.png"/>
		<el-form ref="form" :model="form" label-width="120px">
			<el-form-item label="用户名">
	    		<el-input v-model="form.name 

" style="width: 70%;"></el-input>
	  		</el-form-item>
	  		<el-form-item label="用户姓名" >
	    		<el-input v-model="form.name1" style="width: 70%;"></el-input>
	  		</el-form-item>
	  	</el-form>
		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
		  <el-form-item label="密码" prop="pass">
		    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"style="width: 70%;"></el-input>
		  </el-form-item>
		  <el-form-item label="确认密码" prop="checkPass">
		    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"style="width: 70%;"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
		    <el-button @click="resetForm('ruleForm')">取消</el-button>
		  </el-form-item>
		</el-form>
		
		<el-form ref="form" :model="form" label-width="100px">
			<el-form-item label="">
			    <el-checkbox-group v-model="form.type">
			      	<el-checkbox label="所有统计" name="type"></el-checkbox>
			      	<el-checkbox label="公安局管理权限" name="type"></el-checkbox>
			      	<el-checkbox label="人口和计划生育管理权限" name="type"></el-checkbox>
			     	<el-checkbox label="教育管理权限" name="type"></el-checkbox>
			       	<el-checkbox label="劳动保障管理权限" name="type"></el-checkbox>
			        <el-checkbox label="建设管理权限" name="type"></el-checkbox>
			        <el-checkbox label="卫生管理权限" name="type"></el-checkbox>
			        <el-checkbox label="工商管理权限" name="type"></el-checkbox>
			    </el-checkbox-group>
			 </el-form-item>
   		</el-form>
	</div>
</template>
<script>
export default {
	name:'reighter',
// 	data(){
// 		return{
// 		
// 		}
// 	},
// 	methods:{
//	
//	},
//	props:{
//	
//	}
	
	
	data() {
      	var validatePass = (rule, value, callback) => {
        	if (value === '') {
          		callback(new Error('请输入密码'));
        	} else {
          	if (this.ruleForm.checkPass !== '') {
            	this.$refs.ruleForm.validateField('checkPass');
          	}
          	callback();
        	}
     	 };
      	var validatePass2 = (rule, value, callback) => {
        	if (value === '') {
          		callback(new Error('请再次输入密码'));
        	} else if (value !== this.ruleForm.pass) {
          		callback(new Error('两次输入密码不一致!'));
        	} else {
          		callback();
        	}
      	};
      	return {
        	ruleForm: {
          		pass: '',
          		checkPass: '',
        	},
        	rules: {
         	 	pass: [
            		{ validator: validatePass, trigger: 'blur' }
          		],
          		checkPass: [
            		{ validator: validatePass2, trigger: 'blur' }
          		],
        	},
        	
        	
        	form: {
          		name: '',
          		name1: '',
          		type: [],
       		},
//     		form1: {
////        		type: [],
//     		}
      	};
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('注册成功');
          } else {
            console.log('no!!');
            return false;
          }
        });
      },
    }
}
</script>
<style scoped="scoped">
.reighter{border: 1px solid gainsboro;
	width: 600px;
	height: 600px;
	margin-left: 150px;
	margin-top: 25px;
	border-radius: 20px;
	margin-right: 30%;
}
.reighter>img{
	width: 600px;
	height:120px;
	border-radius: 20px;
}
input{
	width: 80%;
}
</style>
