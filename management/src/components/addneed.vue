<template>
	<div class="addneed">
		<h2 class="">添加需求</h2>
		<select>
			<option>xxx项目</option>
			<option>xxx项目</option>
			<option>xxx项目</option>
			<option>xxx项目</option>

		</select>
		<div class="addessential1">

			<div class="addessential-left">
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item label="需求标题:">
						<el-input v-model="form.name"></el-input>
					</el-form-item>

					<el-form-item label="需求描述:">
						<el-input type="textarea" v-model="form.desc" :rows="6" style="width:80%;"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">保存</el-button>
						<el-button>返回</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div class="addessential-right">

			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'addneed',
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
	@import url("../../static/css/addneed.css");
</style>