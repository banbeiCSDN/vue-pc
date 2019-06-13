<template>
	<div class="mold">
		<div class="chakan-top">
			<i class="el-icon-search"></i>
			<span>年月：</span>
		<select>
			<option>按录入时间</option>
				<option>按注销时间</option>
					
		</select>
		<input type="text" />至
<input type="text" />
			<el-button type="primary" round>查询</el-button>
			<span style="margin-left: 100px;">
				<el-button type="primary" round >高级搜索</el-button>
			</span>
<div class="chakan-top1">
			<span>选择 <a href="#">全选</a>-<a href="#">反选</a></span>
				 <el-button type="primary" disabled>删除所选类型</el-button>
				  <el-button type="primary" disabled>
				  	<router-link to="/addmold" style="text-decoration: none;" >添加记录
					</router-link></el-button>
			</div>
		</div>

		<div class="chakan-ce">
			<h2>        工资类型列表   </h2>
			<el-table :data="tableData" style="width: 100%">
<el-table-column label="序列" width="140" >
	 <el-table-column
		      type="selection"
		      width="40"> 
		    </el-table-column>
				</el-table-column>
				<el-table-column prop="name1" label="工资类型" width="140">
				</el-table-column>

				<el-table-column prop="mone" label="金额" width="150">
				</el-table-column>
			

				
				<el-table-column prop="renshu" label="备注" width="150">
					
					
				</el-table-column>
				
				
				
				<el-table-column prop="shijian2" label="添加时间" width="100">
				</el-table-column>
				<el-table-column prop="shijian3" label="编辑时间" width="110">
				</el-table-column>
				<el-table-column prop="shijian4" label="状态" width="100" style="color: red;">
					
				</el-table-column>
				
				<el-table-column prop="shijian5" label="优先级" width="100" style="color: red;">
				</el-table-column>
				
				
				
				
				
				
				<el-table-column label="详情">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)"style="margin: 0px;">编辑</el-button>
						<!--<el-button size="mini" type="danger"style="margin: 0px;">发工资</el-button>-->
						<!--<el-button size="mini" @click="handleEdit(scope.$index, scope.row)"style="margin: 0px;">查看</el-button>-->
						<!--<el-button size="mini" type="danger"style="margin: 0px;">发放</el-button>-->
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
		name: 'mold',
		data() {
			return {
				
		
     

				startTime: '',
				endTime: '',
				tableData: [{
					date: '2016-05-02',
					name1: '正式工工资',
					name: '张三',
					name2: '张三',
					mone:'1000-1500',
					renshu:'试用满三个月',
					zhichu:'300万',
					
					shijian2:'2008-08-08',
					shijian3:'2008-08-08',
					shijian4:'未知',
					shijian5:'未知',
					shijian6:'韦华'
					
				}, {
					date: '2016-05-02',
					name1: '旷工扣资',
					name: '张三',
					name2: '张三',
					mone:'2008年',
					renshu:'超过半天按一天算',
					zhichu:'300万',
					
					shijian2:'5000',
					shijian3:'500',
					shijian4:'4500',
					shijian5:'已发放',
					shijian6:'韦华'
				}, {
					date: '2016-05-02',
					name1: '旷工扣资',
					name: '张三',
					name2: '张三',
					mone:'2008年',
					renshu:'超过半天按一天算',
					zhichu:'300万',
					
					shijian2:'5000',
					shijian3:'500',
					shijian4:'4500',
					shijian5:'已发放',
					shijian6:'韦华'
				}, {
					date: '2016-05-02',
					name1: '正式工工资',
					name: '张三',
					name2: '张三',
					mone:'1000-1500',
					renshu:'试用满三个月',
					zhichu:'300万',
					
					shijian2:'2008-08-08',
					shijian3:'2008-08-08',
					shijian4:'未知',
					shijian5:'未知',
					shijian6:'韦华'
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
	.mold {
		width: 81%;
	background-image: url(../assets/timg4.jpg);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	padding-left: 5%;
	padding-top: 20px;
	}
	
	.chakan-ce {
		width:85%;
		
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