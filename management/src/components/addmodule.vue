<template>
	<div class="addmodule">
		<h2 class="">项目模块添加页面</h2>
		<select>
			<option>xxx项目</option>
			<option>xxx项目</option>
			<option>xxx项目</option>
			<option>xxx项目</option>

		</select>
		<p><span>+添加模块+ </span> <span>-删除模块-</span> </p>
		<div class="addessential2">
			<h3 class="">模块一</h3>
			<div class="addessential1">

				<div class="addessential-left">
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="模块名字:" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
						<el-form-item label="模块标识:" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
						<el-form-item label="所属需求:" prop="region">
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

						<el-form-item label="	所属项目:" prop="region">
							<el-select v-model="ruleForm.region" placeholder="==请选择==">
								<el-option label="暂不" value="shanghai"></el-option>
								<el-option label="一般" value="beijing"></el-option>
								<el-option label="急" value="shanghai"></el-option>
								<el-option label="很急" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="优先级:	" prop="region">
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

					<el-form-item label="模块描述:	">
						<el-input type="textarea" v-model="form.desc" :rows="3" style="width:80%;"></el-input>
					</el-form-item>
					<el-form-item label="需求描述:">
						<el-input type="textarea" v-model="form.desc" :rows="3" style="width:80%;"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">保存</el-button>
						<el-button>返回</el-button>
					</el-form-item>
				</el-form>

			</div>
		</div>
		<div class="addessential2">
			<h3 class="">模块二</h3>
			<div class="addessential1">

				<div class="addessential-left">
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="模块名字:" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
						<el-form-item label="模块标识:" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
						<el-form-item label="所属需求:" prop="region">
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

						<el-form-item label="	所属项目:" prop="region">
							<el-select v-model="ruleForm.region" placeholder="==请选择==">
								<el-option label="暂不" value="shanghai"></el-option>
								<el-option label="一般" value="beijing"></el-option>
								<el-option label="急" value="shanghai"></el-option>
								<el-option label="很急" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="优先级:	" prop="region">
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

					<el-form-item label="模块描述:	">
						<el-input type="textarea" v-model="form.desc" :rows="3" style="width:80%;"></el-input>
					</el-form-item>
					<el-form-item label="需求描述:">
						<el-input type="textarea" v-model="form.desc" :rows="3" style="width:80%;"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">保存</el-button>
						<el-button>返回</el-button>
					</el-form-item>
				</el-form>

			</div>
		</div>
		<div class="addessential2">
			<h3 class="">模块三</h3>
			<div class="addessential1">

				<div class="addessential-left">
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="模块名字:" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
						<el-form-item label="模块标识:" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
						<el-form-item label="所属需求:" prop="region">
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

						<el-form-item label="	所属项目:" prop="region">
							<el-select v-model="ruleForm.region" placeholder="==请选择==">
								<el-option label="暂不" value="shanghai"></el-option>
								<el-option label="一般" value="beijing"></el-option>
								<el-option label="急" value="shanghai"></el-option>
								<el-option label="很急" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="优先级:	" prop="region">
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

					<el-form-item label="模块描述:	">
						<el-input type="textarea" v-model="form.desc" :rows="3" style="width:80%;"></el-input>
					</el-form-item>
					<el-form-item label="需求描述:">
						<el-input type="textarea" v-model="form.desc" :rows="3" style="width:80%;"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">保存</el-button>
						<el-button>返回</el-button>
					</el-form-item>
				</el-form>

			</div>
		</div>
		<div class="addessential2">
			<h3 class="">模块四</h3>
			<div class="addessential1">

				<div class="addessential-left">
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="模块名字:" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
						<el-form-item label="模块标识:" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
						<el-form-item label="所属需求:" prop="region">
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

						<el-form-item label="	所属项目:" prop="region">
							<el-select v-model="ruleForm.region" placeholder="==请选择==">
								<el-option label="暂不" value="shanghai"></el-option>
								<el-option label="一般" value="beijing"></el-option>
								<el-option label="急" value="shanghai"></el-option>
								<el-option label="很急" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="优先级:	" prop="region">
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

					<el-form-item label="模块描述:	">
						<el-input type="textarea" v-model="form.desc" :rows="3" style="width:80%;"></el-input>
					</el-form-item>
					<el-form-item label="需求描述:">
						<el-input type="textarea" v-model="form.desc" :rows="3" style="width:80%;"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">保存</el-button>
						<el-button>返回</el-button>
					</el-form-item>
				</el-form>

			</div>
		</div>
		<div class="addessential2">
			<h3 class="">模块五</h3>
			<div class="addessential1">

				<div class="addessential-left">
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="模块名字:" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
						<el-form-item label="模块标识:" prop="name">
							<el-input v-model="ruleForm.name"></el-input>
						</el-form-item>
						<el-form-item label="所属需求:" prop="region">
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

						<el-form-item label="	所属项目:" prop="region">
							<el-select v-model="ruleForm.region" placeholder="==请选择==">
								<el-option label="暂不" value="shanghai"></el-option>
								<el-option label="一般" value="beijing"></el-option>
								<el-option label="急" value="shanghai"></el-option>
								<el-option label="很急" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="优先级:	" prop="region">
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

					<el-form-item label="模块描述:	">
						<el-input type="textarea" v-model="form.desc" :rows="3" style="width:80%;"></el-input>
					</el-form-item>
					<el-form-item label="需求描述:">
						<el-input type="textarea" v-model="form.desc" :rows="3" style="width:80%;"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">保存</el-button>
						<el-button>返回</el-button>
					</el-form-item>
				</el-form>

			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'addmodule',
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
	@import url("../../static/css/addmodule.css");
</style>