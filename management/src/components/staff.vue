<template>
	<div class="staff">
		<div class="chakan-top">
			<i class="el-icon-search"></i>
			<span>公司名称</span>
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
				 <el-button type="primary" disabled>删除所选人员信息</el-button>
				  <el-button type="primary" disabled>
				  		<router-link to="/addstaff" style="text-decoration: none;" >添加人员信息
					</router-link>
				  	
				  	</el-button>
			</div>
		</div>

		<div class="chakan-ce">
			<h2>  工资详细列表  </h2>
			<el-table :data="tableData" style="width: 100%">
<el-table-column label="选择" width="60" >
	<input type="checkbox">
				</el-table-column>
				<el-table-column prop="name1" label="唯一编号" width="80">
				</el-table-column>
<!--<el-table-column prop="name2" label="联系人" width="60">
				</el-table-column>-->
				<el-table-column prop="mone" label="真实姓名" width="80">
				</el-table-column>
			

				<!--<el-table-column label="联系人" width="100">
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
				-->
				
				<el-table-column prop="renshu" label="职位" width="70">
					
					
				</el-table-column>
				
				
				
				<el-table-column prop="shijian2" label="员工类型" width="80">
				</el-table-column>
				<el-table-column prop="shijian3" label="省份证号码" width="110">
				</el-table-column>
				<el-table-column prop="shijian4" label="性别" width="60">
				</el-table-column>
				
				<el-table-column prop="shijian5" label="年龄" width="60">
				</el-table-column>
				
				<el-table-column prop="shijian6" label="出生年月" width="100">
				</el-table-column>
				
					<el-table-column prop="shijian7" label="联系电话" width="100">
				</el-table-column>
				
				
				
				
				
				
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)"style="margin: 0px;">编辑</el-button>
						<el-button size="mini" type="danger"style="margin: 0px;">发工资</el-button>
						<!--<el-button size="mini" @click="handleEdit(scope.$index, scope.row)"style="margin: 0px;">变更</el-button>-->
						<el-button size="mini" type="danger"style="margin: 0px;">项目</el-button>
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
		name: 'staff',
		data() {
			return {

				startTime: '',
				endTime: '',
				tableData: [{
					date: '2016-05-02',
					name1: '1235',
					name: '张三',
					name2: '张三',
					mone:'张三',
					renshu:'程序员',
					zhichu:'300万',
					
					shijian2:'实习',
					shijian3:'1111111111111',
					shijian4:'男',
					shijian5:'22',
					shijian6:'1985-04-06',
					shijian7:'123456789',
					address: '深圳经济技术开发区'
				}, {
					date: '2016-05-02',
					name1: '1235',
					name: '张三',
					name2: '张三',
					mone:'张三',
					renshu:'程序员',
					zhichu:'300万',
					
					shijian2:'实习',
					shijian3:'1111111111111',
					shijian4:'男',
					shijian5:'22',
					shijian6:'1985-04-06',
					shijian7:'123456789',
					address: '深圳经济技术开发区'
				}, {
					date: '2016-05-02',
					name1: '1235',
					name: '张三',
					name2: '张三',
					mone:'张三',
					renshu:'程序员',
					zhichu:'300万',
					
					shijian2:'实习',
					shijian3:'1111111111111',
					shijian4:'男',
					shijian5:'22',
					shijian6:'1985-04-06',
					shijian7:'123456789',
					address: '深圳经济技术开发区'
				}, {
					date: '2016-05-02',
					name1: '1235',
					name: '张三',
					name2: '张三',
					mone:'张三',
					renshu:'程序员',
					zhichu:'300万',
					
					shijian2:'实习',
					shijian3:'1111111111111',
					shijian4:'男',
					shijian5:'22',
					shijian6:'1985-04-06',
					shijian7:'123456789',
					address: '深圳经济技术开发区'
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
	.staff {
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