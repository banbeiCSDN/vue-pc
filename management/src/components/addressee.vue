<template>
	<div class="addressee">
		<div class="chakan-top">
			<i class="el-icon-search"></i>
			<span>查询内容</span>
			<el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{start: '08:30',   step: '00:15',  end: '18:30' }">
			</el-time-select>
			<el-time-select placeholder="结束时间" v-model="endTime" :picker-options="{    start: '08:30',     step: '00:15',     end: '18:30',     minTime: startTime  }">
			</el-time-select>
			<el-button type="primary" round>查询</el-button>
			<span style="margin-left: 100px;">
				<el-button type="primary" round >高级搜索</el-button>
			</span>
			<div class="chakan-top1">
				<span>选择 <a href="#">全选</a>-<a href="#">反选</a></span>
				<el-button type="primary" disabled>删除所选信息</el-button>
				<el-button type="primary" disabled>
					<router-link to="/transmission" style="text-decoration: none;">添加信息
					</router-link>
				</el-button>
			</div>
		</div>

		<div class="chakan-ce">

			<el-table :data="tableData" style="width: 100%">
				<el-table-column label="选择" width="160">
					<input type="checkbox">
				</el-table-column>
				<el-table-column prop="name1" label="标题" width="160">
				</el-table-column>
				

				<el-table-column label="发信人" width="160">
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
				<el-table-column prop="name11" label="查看时间" width="160">
				</el-table-column>

				<el-table-column label="操作">
					<template slot-scope="scope">
						<!--<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
						<el-button size="mini" type="danger">查看</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
		name: 'addressee',
		data() {
			return {
				startTime: '',
				endTime: '',
				tableData: [{

					name1: '套餐费用',
					name: '中国电信',

					name11: '500万',
					address: '中国电信有限公司'
				}, {
					name1: '套餐费用',
					name: '中国电信',

					name11: '500万',
					address: '中国电信有限公司'
				}, {
					name1: '套餐费用',
					name: '中国电信',

					name11: '500万',
					address: '中国电信有限公司'
				}, {
					name1: '套餐费用',
					name: '中国电信',

					name11: '500万',
					address: '中国电信有限公司'
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

<style>
	@import url("../../static/css/addressee.css");
</style>