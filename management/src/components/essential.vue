<template>
	<div class="essential">
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
				 <el-button type="primary" disabled>删除所选项目信息</el-button>
				  <el-button type="primary" disabled>
				  	<router-link to="/addessential" style="text-decoration: none;" >添加项目
					</router-link>
				  	</el-button>
			</div>
		</div>

		<div class="chakan-ce">
			
			<el-table :data="tableData" style="width: 100%">
 <el-table-column
		      type="selection"
		      width="40"> 
		    </el-table-column>
				<el-table-column prop="name1" label="项目名称" width="100">
				</el-table-column>

			

				<el-table-column label="客户名称" width="80">
					<template slot-scope="scope">
						<el-popover trigger="hover" placement="top">

							<p>姓名: {{ scope.row.name }}</p>
							<p>住址: {{ scope.row.address }}</p>
							<div slot="reference" class="name-wrapper">
								<el-tag size="medium">{{ scope.row.name }}</el-tag>
							</div>
						</el-popover>
					</template>
				</el-table-column>
				<el-table-column prop="name2" label="项目经理" width="100">
				</el-table-column>
				<!--<el-table-column prop="name3" label="优先级" width="100">
				</el-table-column>-->
				<el-table-column prop="renshu" label="开发人数" width="80">
				</el-table-column>
					<el-table-column label="立项日期" width="130">
					<template slot-scope="scope">
						<i class="el-icon-time"></i>
						<span style="margin-left: 10px">{{ scope.row.date }}</span>
					</template>
				</el-table-column>
				<el-table-column label="更新日期" width="130">
					<template slot-scope="scope">
						<i class="el-icon-time"></i>
						<span style="margin-left: 10px">{{ scope.row.date }}</span>
					</template>
				</el-table-column>
				<el-table-column prop="name3" label="优先级" width="70">
				</el-table-column>
				<el-table-column prop="name4" label="状态" width="70">
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button size="mini" type="danger">查看</el-button>
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
		name: 'essential',
		data() {
			return {

				startTime: '',
				endTime: '',
				tableData: [{
					date: '2016-05-02',
					name1: '种子0A系统',
					name: '种子公司',
					name2: '张三',
					renshu:'13人',
					name3: '急',
					name4:'完成',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name1: '种子0A系统',
					name: '种子公司',
					name2: '张三',
					renshu:'13人',
					name3: '急',
					name4:'完成',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name1: '种子0A系统',
					name: '种子公司',
					name2: '张三',
					renshu:'13人',
					name3: '急',
					name4:'完成',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name1: '种子0A系统',
					name: '种子公司',
					name2: '张三',
					renshu:'13人',
					name3: '急',
					name4:'完成',
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
	.essential {
		width: 80%;
	background-image: url(../assets/u=1054619021,813196258&fm=15&gp=0.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	padding-left: 5%;
	padding-top: 20px;
	}
	
	.chakan-ce {
		width:78%;
	}
	
	.chakan-top {
		/*padding-top: -100px;*/
		padding-top: 10px;
		/*padding-bottom: 100px;*/
		/*margin-top: -33%;*/
		width: 100%;
		text-align: start;
	}
	.chakan-top1{
		margin-top: 20px;
		
	}
</style>