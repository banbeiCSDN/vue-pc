<template>
	<div class="addjob">
		<h2 class="">职位信息</h2>

		<div class="addessential1">

			<div class="addessential-left">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="职位名:" prop="name">
						<el-input v-model="ruleForm.name"></el-input>
					</el-form-item>

					<el-form-item label="优先级:" prop="region">
						<el-select v-model="ruleForm.region" placeholder="==请选择==">
							<el-option label="低级" value="shanghai"></el-option>
							<el-option label="中级" value="beijing"></el-option>
							<el-option label="高级" value="shanghai"></el-option>
						</el-select>
					</el-form-item>

					</el-col>
					</el-form-item>

				</el-form>
			</div>
			<div class="addessential-right">

			</div>
		</div>

		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

			<el-form-item label="备注:	">
				<el-input type="textarea" v-model="form.desc" :rows="6" style="width:80%;"></el-input>
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
		name: 'addjob',
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
					name: [{
							required: true,
							message: '请输入活动名称',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 5,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						}
					],
					region: [{
						required: true,
						message: '请选择活动区域',
						trigger: 'change'
					}],
					date1: [{
						type: 'date',
						required: true,
						message: '请选择日期',
						trigger: 'change'
					}],
					date2: [{
						type: 'date',
						required: true,
						message: '请选择时间',
						trigger: 'change'
					}],
					type: [{
						type: 'array',
						required: true,
						message: '请至少选择一个活动性质',
						trigger: 'change'
					}],
					resource: [{
						required: true,
						message: '请选择活动资源',
						trigger: 'change'
					}],
					desc: [{
						required: true,
						message: '请填写活动形式',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
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
	@import url("../../static/css/addjob.css");
</style>