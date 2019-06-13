<template>
	<div class="addfunctional">
		<h2 class="">项目功能添加页面</h2>
		<select>
			<option>xxx项目</option>
			<option>xxx项目</option>
			<option>xxx项目</option>
			<option>xxx项目</option>

		</select>
		<p><span>+添加功能+ </span> <span>-删除功能-</span> </p>
		<div class="addessential2">
			<h3 class="">功能一</h3>
			<div class="addessential1">

				<div class="addessential-left">
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="功能名称:" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>

						<el-form-item label="优先级:" prop="region">
							<el-select v-model="ruleForm.region" placeholder="==请选择==">
								<el-option label="暂不" value="shanghai"></el-option>
								<el-option label="一般" value="beijing"></el-option>
								<el-option label="急" value="shanghai"></el-option>
								<el-option label="很急" value="beijing"></el-option>
							</el-select>
						</el-form-item>

					</el-form>
				</div>
				<div class="addessential-right">
					<el-form ref="form" :model="form" label-width="80px">

						<el-form-item label="版本号:" prop="name">
							<el-input v-model="ruleForm.name" vlue="x.001"></el-input>
						</el-form-item>
						<el-form-item label="	所属模块:" prop="region">
							<el-select v-model="ruleForm.region" placeholder="==请选择==">
								<el-option label="暂不" value="shanghai"></el-option>
								<el-option label="一般" value="beijing"></el-option>
								<el-option label="急" value="shanghai"></el-option>
								<el-option label="很急" value="beijing"></el-option>
							</el-select>
						</el-form-item>

					</el-form>
				</div>
			</div>
			<div class="addessential2-zong">
				<el-form ref="form" :model="form" label-width="80px">

					<el-form-item label="功能描述:	">
						<el-input type="textarea" v-model="form.desc" :rows="3" style="width:80%;"></el-input>
					</el-form-item>

				</el-form>

			</div>
		</div>

		<div class="addessential2">
			<h3 class="">功能二</h3>
			<div class="addessential1">

				<div class="addessential-left">
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="功能名称:" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>

						<el-form-item label="优先级:" prop="region">
							<el-select v-model="ruleForm.region" placeholder="==请选择==">
								<el-option label="暂不" value="shanghai"></el-option>
								<el-option label="一般" value="beijing"></el-option>
								<el-option label="急" value="shanghai"></el-option>
								<el-option label="很急" value="beijing"></el-option>
							</el-select>
						</el-form-item>

					</el-form>
				</div>
				<div class="addessential-right">
					<el-form ref="form" :model="form" label-width="80px">

						<el-form-item label="版本号:" prop="name">
							<el-input v-model="ruleForm.name" vlue="x.001"></el-input>
						</el-form-item>
						<el-form-item label="	所属模块:" prop="region">
							<el-select v-model="ruleForm.region" placeholder="==请选择==">
								<el-option label="暂不" value="shanghai"></el-option>
								<el-option label="一般" value="beijing"></el-option>
								<el-option label="急" value="shanghai"></el-option>
								<el-option label="很急" value="beijing"></el-option>
							</el-select>
						</el-form-item>

					</el-form>
				</div>
			</div>
			<div class="addessential2-zong">
				<el-form ref="form" :model="form" label-width="80px">

					<el-form-item label="功能描述:	">
						<el-input type="textarea" v-model="form.desc" :rows="3" style="width:80%;"></el-input>
					</el-form-item>

				</el-form>

			</div>
		</div>
		<div class="addessential2">
			<h3 class="">功能三</h3>
			<div class="addessential1">

				<div class="addessential-left">
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="功能名称:" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>

						<el-form-item label="优先级:" prop="region">
							<el-select v-model="ruleForm.region" placeholder="==请选择==">
								<el-option label="暂不" value="shanghai"></el-option>
								<el-option label="一般" value="beijing"></el-option>
								<el-option label="急" value="shanghai"></el-option>
								<el-option label="很急" value="beijing"></el-option>
							</el-select>
						</el-form-item>

					</el-form>
				</div>
				<div class="addessential-right">
					<el-form ref="form" :model="form" label-width="80px">

						<el-form-item label="版本号:" prop="name">
							<el-input v-model="ruleForm.name" vlue="x.001"></el-input>
						</el-form-item>
						<el-form-item label="	所属模块:" prop="region">
							<el-select v-model="ruleForm.region" placeholder="==请选择==">
								<el-option label="暂不" value="shanghai"></el-option>
								<el-option label="一般" value="beijing"></el-option>
								<el-option label="急" value="shanghai"></el-option>
								<el-option label="很急" value="beijing"></el-option>
							</el-select>
						</el-form-item>

					</el-form>
				</div>
			</div>
			<div class="addessential2-zong">
				<el-form ref="form" :model="form" label-width="80px">

					<el-form-item label="功能描述:	">
						<el-input type="textarea" v-model="form.desc" :rows="3" style="width:80%;"></el-input>
					</el-form-item>

				</el-form>

			</div>
		</div>
		<div class="addessential2">
			<h3 class="">功能四</h3>
			<div class="addessential1">

				<div class="addessential-left">
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="功能名称:" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>

						<el-form-item label="优先级:" prop="region">
							<el-select v-model="ruleForm.region" placeholder="==请选择==">
								<el-option label="暂不" value="shanghai"></el-option>
								<el-option label="一般" value="beijing"></el-option>
								<el-option label="急" value="shanghai"></el-option>
								<el-option label="很急" value="beijing"></el-option>
							</el-select>
						</el-form-item>

					</el-form>
				</div>
				<div class="addessential-right">
					<el-form ref="form" :model="form" label-width="80px">

						<el-form-item label="版本号:" prop="name">
							<el-input v-model="ruleForm.name" vlue="x.001"></el-input>
						</el-form-item>
						<el-form-item label="	所属模块:" prop="region">
							<el-select v-model="ruleForm.region" placeholder="==请选择==">
								<el-option label="暂不" value="shanghai"></el-option>
								<el-option label="一般" value="beijing"></el-option>
								<el-option label="急" value="shanghai"></el-option>
								<el-option label="很急" value="beijing"></el-option>
							</el-select>
						</el-form-item>
	

					</el-form>
				</div>
			</div>
			<div class="addessential2-zong">
				<el-form ref="form" :model="form" label-width="80px">

					<el-form-item label="功能描述:	">
						<el-input type="textarea" v-model="form.desc" :rows="3" style="width:80%;"></el-input>
					</el-form-item>
					
				</el-form>

			</div>
		</div>

		<el-form ref="form" :model="form" label-width="80px">
			<el-button type="primary" @click="onSubmit">保存</el-button>
			<el-button>返回</el-button>
		</el-form>

	</div>
</template>

<script>
	export default {
		name: 'addfunctional',
		data() {
			return {

				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				ruleForm: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			};
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			}
		}

	}
</script>

<style scoped="scoped">
	@import url("../../static/css/addfunctional.css");
</style>