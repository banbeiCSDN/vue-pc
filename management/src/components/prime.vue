<template>
	<div class="prime">
		<div class="chakan-top">
			<i class="el-icon-search"></i>
			<span>查询内容</span>
		<input type="text" id="" value="" />
			<el-button type="primary" round>查询</el-button>
			<span style="margin-left: 100px;">
				<el-button type="primary" round >高级搜索</el-button>
			</span>
<div class="chakan-top1">
			<span>选择 <a href="#">全选</a>-<a href="#">反选</a></span>
				 <el-button type="primary" disabled>删除所选项目信息</el-button>
				  <el-button type="primary" disabled>
				  		<router-link to="/addessential" style="text-decoration: none;" >添加项目
					</router-link></el-button>
			</div>
		</div>

		<div class="chakan-ce">
			<h2>  成本信息列表  </h2>
			<el-table :data="tableData" style="width: 100%">
<el-table-column label="选择" width="60" >
	<input type="checkbox">
				</el-table-column>
				<el-table-column prop="name1" label="项目名称" width="80">
				</el-table-column>
<el-table-column prop="name2" label="单位" width="60">
				</el-table-column>
				<el-table-column prop="mone" label="项目总金额" width="100">
				</el-table-column>
			

				<el-table-column label="项目负责人" width="100">
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
				<el-table-column prop="renshu" label="项目开发人数" width="110">
				</el-table-column>
				<el-table-column prop="zhichu" label="成本总支出" width="100">
				</el-table-column>
				<el-table-column prop="shijian" label="开始时间" width="100">
				</el-table-column>
				<el-table-column prop="shijian1" label="计划完成时间" width="110">
				</el-table-column>
				
				<el-table-column prop="shijian2" label="实际完成时间" width="110">
				</el-table-column>
				
				
				
				<el-table-column prop="name3" label="优先级" width="70">
				</el-table-column>
				
				
				<el-table-column prop="name4" label="完成状态" width="80">
				</el-table-column>
				
			
				
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)"style="margin: 0px;">编辑</el-button>
						<!--<el-button size="mini" type="danger"style="margin: 0px;">查看</el-button>-->
						<!--<el-button size="mini" @click="handleEdit(scope.$index, scope.row)"style="margin: 0px;">变更</el-button>-->
						<!--<el-button size="mini" type="danger"style="margin: 0px;">需求</el-button>-->
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
		name: 'prime',
		data() {
			return {

				startTime: '',
				endTime: '',
				tableData: [{
					date: '2016-05-02',
					name1: '模块XXX',
					name: '张三',
					name2: '电信',
					mone:'500万',
					renshu:'5',
					zhichu:'300万',
					shijian:'2007-11-11',
					shijian1:'2008-1-1',
					shijian2:'2007-12-12',
					name3: '急',
					name4:'已完成',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name1: '模块XXX',
					name: '张三',
					name2: '电信',
					mone:'500万',
					renshu:'5',
					zhichu:'300万',
					shijian:'2007-11-11',
					shijian1:'2008-1-1',
					shijian2:'2007-12-12',
					name3: '急',
					name4:'已完成',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name1: '模块XXX',
					name: '张三',
					name2: '电信',
					mone:'500万',
					renshu:'5',
					zhichu:'300万',
					shijian:'2007-11-11',
					shijian1:'2008-1-1',
					shijian2:'2007-12-12',
					name3: '急',
					name4:'已完成',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name1: '模块XXX',
					name: '张三',
					name2: '电信',
					mone:'500万',
					renshu:'5',
					zhichu:'300万',
					shijian:'2007-11-11',
					shijian1:'2008-1-1',
					shijian2:'2007-12-12',
					name3: '急',
					name4:'已完成',
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
	h2{
		color:#54AADC;
	}
	.prime {
		width: 82%;
	background-image: url(../assets/u=1054619021,813196258&fm=15&gp=0.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	padding-left: 5%;
	padding-top: 20px;
	}
	
	.chakan-ce {
		width:95%;
	}
	
	.chakan-top {
		/*padding-top: -100px;*/
		padding-top: 10px;
		/*padding-bottom: 100px;*/
		/*margin-top: -33%;*/
		width: 70%;
		text-align: start;
		margin-left: 20%;
	}
	.chakan-top1{
		margin-top: 20px;
		
	}
</style>