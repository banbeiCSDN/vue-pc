<template>
	<div class="job">
		<div class="chakan-top">
			
<div class="chakan-top1">
			<span>选择 <a href="#">全选</a>-<a href="#">反选</a></span>
				 <el-button type="primary" disabled>删除所选人员信息</el-button>
				  <el-button type="primary" disabled>
				  		<router-link to="/addjob" style="text-decoration: none;" >添加职位
					</router-link></el-button>
			</div>
		</div>

		<div class="chakan-ce">
			<h2>      职位列表   </h2>
			<el-table :data="tableData" style="width: 100%">
<el-table-column label="选择" width="260" >
	<input type="checkbox">
				</el-table-column>
				<el-table-column prop="name1" label="职位名称" width="280">
				</el-table-column>

				<el-table-column prop="mone" label="备注" width="280">
				</el-table-column>
			
				
				
				
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)"style="margin: 0px;">编辑</el-button>
						
					</template>
				</el-table-column>
			</el-table>
			<el-pagination background layout="prev, pager, next" :total="50">
			</el-pagination>

		</div>
	</div>
</template>

<script>
	
	
	export default {
		name: 'job',
		data() {
			return {

				startTime: '',
				endTime: '',
				tableData: [{
					date: '2016-05-02',
					name1: '正式员工',
					
				}, {
					date: '2016-05-02',
					name1: '正式员工',
					
				}, {
					date: '2016-05-02',
					name1: '正式员工',
					
				}, {
					date: '2016-05-02',
					name1: '正式员工',
					
				}]
			}
		},
		methods: {
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			}
			
			

		}

	}
</script>

<style scoped="scoped">
	@import url("../../static/css/job.css");
	
</style>