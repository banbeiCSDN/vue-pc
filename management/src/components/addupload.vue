<template>
	<div class="addupload">
		<h2 class="">
文件上传</h2>
		<h3>xxx项目</h3>
		<div class="addessential1">
			<ul>
				<li>文件名</li>
				<li>xxx</li>
				<li>xxx</li>
				<li>xxx</li>
				<li>xxx</li>
			</ul>
			<ul>
				<li>文件路径</li>
				<li>
					<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList" style="display: flex;justify-content: space-between;">
						<el-button size="small" type="primary">点击上传</el-button>
					</el-upload>
				</li>
				<li>
					<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList" style="display: flex;justify-content: space-between;">
						<el-button size="small" type="primary">点击上传</el-button>
					</el-upload>
				</li>
				<li>
					<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList" style="display: flex;justify-content: space-between;">
						<el-button size="small" type="primary">点击上传</el-button>
					</el-upload>
				</li>
				<li>
					<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList" style="display: flex;justify-content: space-between;">
						<el-button size="small" type="primary">点击上传</el-button>
					</el-upload>
				</li>
			</ul>
			<ul>
				<li>添加文件|删除文件</li>
			</ul>

		</div>
		<el-form ref="form" :model="form" label-width="80px">
			<el-button type="primary" @click="onSubmit">保存</el-button>
			<el-button>返回</el-button>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'addupload',
		data() {
			return {
				form: {},
				fileList: []
			};
		},
		methods: {
			handleChange(file, fileList) {
				this.fileList = fileList.slice(-3);
			},
			onSubmit() {
				console.log('submit!');
			}
		}

	}
</script>

<style scoped="scoped">
	@import url("../../static/css/addupload.css");
</style>