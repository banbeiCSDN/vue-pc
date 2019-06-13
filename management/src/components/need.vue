<template>
	<div class="need">
		<div class="chakan-top">
			<i class="el-icon-search"></i>
			<span>查询内容</span>
			<el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
			</el-time-select>
			<el-time-select placeholder="结束时间" v-model="endTime" :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }">
			</el-time-select>
			<el-button type="primary" round>查询</el-button>
			<span style="margin-left: 100px;">
				<el-button type="primary" round >高级搜索</el-button>
			</span>
			<div class="chakan-top1">
				<span>选择 <a href="#">全选</a>-<a href="#">反选</a></span>
				<el-button type="primary" disabled>删除所选需求信息</el-button>
				<el-button type="primary" disabled>
					<router-link to="/addneed" style="text-decoration: none;" >添加需求信息
					</router-link></el-button>
			</div>
		</div>

		<div class="chakan-ce">

			<el-table :data="tableData" style="width: 100%">
				<el-table-column label="选择" width="150">
					<input type="checkbox">
				</el-table-column>
				<el-table-column prop="name1" label="需求主题" width="150">
				</el-table-column>

			
			
				<el-table-column label="创建日期" width="190">
					<template slot-scope="scope">
						<i class="el-icon-time"></i>
						<span style="margin-left: 10px">{{ scope.row.date }}</span>
					</template>
				</el-table-column>
				<el-table-column label="更新日期" width="190">
					<template slot-scope="scope">
						<i class="el-icon-time"></i>
						<span style="margin-left: 10px">{{ scope.row.date }}</span>
					</template>
				</el-table-column>
				
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button size="mini" type="danger">查看</el-button>
						<!--<el-button size="mini" type="danger">发任务</el-button>-->
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
		name: 'need',
		data() {
			return {

				startTime: '',
				endTime: '',
				tableData: [{
					date: '2016-05-02',
					name1: '需求主题一',
					name: '电信',
					name2: '500万',
					fuze:'张三',
					gq:'13月',
					renshu: '13人',
					name3: '急',
					name4: '完成',
					gq1:'否',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name1: '需求主题一',
					name: '电信',
					name2: '500万',
					fuze:'张三',
					gq:'13月',
					renshu: '13人',
					name3: '急',
					name4: '完成',
					gq1:'否',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name1: '需求主题一',
					name: '电信',
					name2: '500万',
					fuze:'张三',
					gq:'13月',
					renshu: '13人',
					name3: '急',
					name4: '完成',
					gq1:'否',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name1: '需求主题一',
					name: '电信',
					name2: '500万',
					fuze:'张三',
					gq:'13月',
					renshu: '13人',
					name3: '急',
					name4: '完成',
					gq1:'否',
					address: '上海市普陀区金沙江路 1518 弄'
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
	.need {
		width: 82%;
		background-image: url(../assets/timg6.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		padding-left: 5%;
		padding-top: 20px;
	}
	
	.chakan-ce {
		width: 78%;
	}
	
	.chakan-top {
		/*padding-top: -100px;*/
		padding-top: 10px;
		/*padding-bottom: 100px;*/
		/*margin-top: -33%;*/
		width: 100%;
		text-align: start;
	}
	
	.chakan-top1 {
		margin-top: 20px;
	}
</style>