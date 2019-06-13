<template>
	<div class="working">
		<div class="chakan-top">
			<i class="el-icon-search"></i>
			<span>年月：</span>
	<el-cascader :options="options"></el-cascader>

			<el-button type="primary" round>查询</el-button>
			<span style="margin-left: 100px;">
				<el-button type="primary" round >高级搜索</el-button>
			</span>
<div class="chakan-top1">
			<span>选择 <a href="#">全选</a>-<a href="#">反选</a></span>
				 <el-button type="primary" disabled>删除所选人员信息</el-button>
				  <el-button type="primary" disabled>添加人员信息</el-button>
			</div>
		</div>

		<div class="chakan-ce">
			<h2>       员工月工资列表   </h2>
			<el-table :data="tableData" style="width: 100%">
<el-table-column label="序列" width="60" >
	1
				</el-table-column>
				<el-table-column prop="name1" label="员工姓名" width="80">
				</el-table-column>

				<el-table-column prop="mone" label="年份" width="80">
				</el-table-column>
			

				
				<el-table-column prop="renshu" label="月份" width="70">
					
					
				</el-table-column>
				
				
				
				<el-table-column prop="shijian2" label="总工资" width="80">
				</el-table-column>
				<el-table-column prop="shijian3" label="扣除工资" width="110">
				</el-table-column>
				<el-table-column prop="shijian4" label="实发工资" width="100">
				</el-table-column>
				
				<el-table-column prop="shijian5" label="状态" width="100">
				</el-table-column>
				
				<el-table-column prop="shijian6" label="发款人" width="100">
				</el-table-column>
				
					
				
				
				
				
				<el-table-column label="详情">
					<template slot-scope="scope">
						<!--<el-button size="mini" @click="handleEdit(scope.$index, scope.row)"style="margin: 0px;">编辑</el-button>-->
						<!--<el-button size="mini" type="danger"style="margin: 0px;">发工资</el-button>-->
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)"style="margin: 0px;">查看</el-button>
						<el-button size="mini" type="danger"style="margin: 0px;">发放</el-button>
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
		name: 'working',
		data() {
			return {
				
			 options: [{
          value: 'zhinan',
          label: '2017',
          disabled: true,
          children: [{
            value: 'shejiyuanze',
            label: '1'
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '2018',
          children: [{
            value: '1',
            label: '1'
          }, {
            value: '2',
            label: '2'
          }, {
            value: '3',
            label: '3'
          }, {
            value: '4',
            label: '4'
          }, {
            value: '5',
            label: '5'
          }, {
            value: '6',
            label: '6'
          }, {
            value: '7',
            label: '7'
          },
           {
            value: '8',
            label: '8'
          },
          {
            value: '9',
            label: '9'
          },
          {
            value: '10',
            label: '10'
          },
          {
            value: '11',
            label: '11'
          },
          {
            value: '12',
            label: '12'
          }
          
          
          
          
          
          
          ]
        }, {
          value: 'zujian',
          label: '2019',
          children: [{
            value: '1',
            label: '1'
          }, {
            value: '2',
            label: '2'
          }, {
            value: '3',
            label: '3'
          }, {
            value: '4',
            label: '4'
          }, {
            value: '5',
            label: '5'
          }, {
            value: '6',
            label: '6'
          }, {
            value: '7',
            label: '7'
          },
           {
            value: '8',
            label: '8'
          },
          {
            value: '9',
            label: '9'
          },
          {
            value: '10',
            label: '10'
          },
          {
            value: '11',
            label: '11'
          },
          {
            value: '12',
            label: '12'
          }
          
          
          
          
          
          
          ]
        }],
     

				startTime: '',
				endTime: '',
				tableData: [{
					date: '2016-05-02',
					name1: '张三',
					name: '张三',
					name2: '张三',
					mone:'2008年',
					renshu:'8月',
					zhichu:'300万',
					
					shijian2:'5000',
					shijian3:'500',
					shijian4:'4500',
					shijian5:'未发放',
					shijian6:'韦华'
					
				}, {
					date: '2016-05-02',
					name1: '张三',
					name: '张三',
					name2: '张三',
					mone:'2008年',
					renshu:'8月',
					zhichu:'300万',
					
					shijian2:'5000',
					shijian3:'500',
					shijian4:'4500',
					shijian5:'已发放',
					shijian6:'韦华'
				}, {
					date: '2016-05-02',
					name1: '张三',
					name: '张三',
					name2: '张三',
					mone:'2008年',
					renshu:'8月',
					zhichu:'300万',
					
					shijian2:'5000',
					shijian3:'500',
					shijian4:'4500',
					shijian5:'未发放',
					shijian6:'韦华'
				}, {
					date: '2016-05-02',
					name1: '张三',
					name: '张三',
					name2: '张三',
					mone:'2008年',
					renshu:'8月',
					zhichu:'300万',
					
					shijian2:'5000',
					shijian3:'500',
					shijian4:'4500',
					shijian5:'已发放',
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
	.working {
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