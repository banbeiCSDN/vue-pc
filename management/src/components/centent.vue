<template>
	<div class="centent">
		<div class="top-centent">
			<div class="top-left">
				<p><i class="el-icon-user-solid"></i> <span>你好，King </span>
					<p>[退出]</p>
				</p>
				<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
					<el-radio-button :label="false">展开</el-radio-button>
					<el-radio-button :label="true">收起</el-radio-button>
				</el-radio-group>
				<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-caret-right"></i>
							<span slot="title">任务管理</span>
						</template>
						<el-menu-item-group>
							<!--<span slot="title">分组一</span>-->
							<el-menu-item index="1-1">
								<el-checkbox v-model="checked">
									<router-link to="/add1" style="text-decoration: none;">创建任务
									</router-link>
								</el-checkbox>
							</el-menu-item>
							<el-menu-item index="1-2">
								<el-checkbox v-model="checked">
									<router-link to="/chakan" style="text-decoration: none;">任务信息查看
									</router-link>
								</el-checkbox>
							</el-menu-item>

						</el-menu-item-group>

					</el-submenu>

					<el-submenu index="2">
						<template slot="title">
							<i class="el-icon-caret-right"></i>
							<span slot="title">消息管理</span>
						</template>
						<el-menu-item-group>
							<!--<span slot="title">分组一</span>-->
							<el-menu-item index="1-1">
								<el-checkbox v-model="checked">
									<router-link to="/transmission" style="text-decoration: none;">发送信息
									</router-link>
								</el-checkbox>
							</el-menu-item>
							<el-menu-item index="1-2">
								<el-checkbox v-model="checked">
									<router-link to="/addressee" style="text-decoration: none;">收件信息查看
									</router-link>
								</el-checkbox>
							</el-menu-item>
							<el-menu-item index="1-1">
								<el-checkbox v-model="checked">
									<router-link to="/addresseelook" style="text-decoration: none;">发送信息查看
									</router-link>
								</el-checkbox>
							</el-menu-item>
							<el-menu-item index="1-2">
								<el-checkbox v-model="checked">
									<router-link to="/ressee" style="text-decoration: none;">消息信息列表
									</router-link>
								</el-checkbox>
							</el-menu-item>

						</el-menu-item-group>

					</el-submenu>
					<el-submenu index="3">
						<template slot="title">
							<i class="el-icon-caret-right"></i>
							<span slot="title">项目系统</span>
						</template>
						<el-menu-item-group>
							<!--<span slot="title">分组一</span>-->
							<el-menu-item index="1-1">
								<el-checkbox v-model="checked">
									<router-link to="/essential" style="text-decoration: none;">项目基本信息查看
									</router-link>
								</el-checkbox>
							</el-menu-item>
							<el-menu-item index="1-2">
								<el-checkbox v-model="checked">
									<router-link to="/propectus" style="text-decoration: none;">项目计划信息查看
									</router-link>
								</el-checkbox>
							</el-menu-item>
							<el-menu-item index="1-1">
								<el-checkbox v-model="checked">
									<router-link to="/need" style="text-decoration: none;">项目计划需求查看
									</router-link>
								</el-checkbox>
							</el-menu-item>
							<el-menu-item index="1-2">
								<el-checkbox v-model="checked">
									<router-link to="/module" style="text-decoration: none;">项目模块信息查看
									</router-link>
								</el-checkbox>
							</el-menu-item>
							<el-menu-item index="1-1">
								<el-checkbox v-model="checked">
									<router-link to="/functional" style="text-decoration: none;">项目功能信息查看
									</router-link>
								</el-checkbox>
							</el-menu-item>
							<el-menu-item index="1-2">
								<el-checkbox v-model="checked">
									<router-link to="/upload" style="text-decoration: none;">项目上传信息查看
									</router-link>
								</el-checkbox>
							</el-menu-item>
							<el-menu-item index="1-1">
								<el-checkbox v-model="checked">
									<router-link to="/prime" style="text-decoration: none;">项目成本信息查看
									</router-link>
								</el-checkbox>
							</el-menu-item>

						</el-menu-item-group>

					</el-submenu>

					<el-submenu index="4">
						<template slot="title">
							<i class="el-icon-caret-right"></i>
							<span slot="title">客户系统</span>
						</template>
						<el-menu-item-group>
							<!--<span slot="title">分组一</span>-->
							<el-menu-item index="1-1">
								<el-checkbox v-model="checked">
									<router-link to="/client" style="text-decoration: none;">客户信息查看
									</router-link>
								</el-checkbox>
							</el-menu-item>

						</el-menu-item-group>

					</el-submenu>
					<el-submenu index="5">
						<template slot="title">
							<i class="el-icon-caret-right"></i>
							<span slot="title">人员系统</span>
						</template>
						<el-menu-item-group>
							<!--<span slot="title">分组一</span>-->
							<el-menu-item index="1-1">
								<el-checkbox v-model="checked">
									<router-link to="/staff" style="text-decoration: none;">人员信息查看
									</router-link>
								</el-checkbox>
							</el-menu-item>
							<el-menu-item index="1-2">
								<el-checkbox v-model="checked">
									<router-link to="/job" style="text-decoration: none;">职务信息查看
									</router-link>
								</el-checkbox>
							</el-menu-item>
							<el-menu-item index="1-1">
								<el-checkbox v-model="checked">
									<router-link to="/working" style="text-decoration: none;">员工工作情况查看
									</router-link>
								</el-checkbox>
							</el-menu-item>
						</el-menu-item-group>

					</el-submenu>
					<el-submenu index="6">
						<template slot="title">
							<i class="el-icon-caret-right"></i>
							<span slot="title">考勤系统</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1">
								<el-checkbox v-model="checked">
									<router-link to="/mold" style="text-decoration: none;">考勤类型查看
									</router-link>
								</el-checkbox>
							</el-menu-item>
							<el-menu-item index="1-2">
								<el-checkbox v-model="checked">
									<router-link to="/check" style="text-decoration: none;">员工考勤信息查看
									</router-link>
								</el-checkbox>
							</el-menu-item>
						</el-menu-item-group>

					</el-submenu>
					<el-submenu index="7">
						<template slot="title">
							<i class="el-icon-caret-right"></i>
							<span slot="title">系统管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1">
								<el-checkbox v-model="checked">
									<router-link to="/reighter" style="text-decoration: none;">添加用户
									</router-link>

								</el-checkbox>
							</el-menu-item>
							<el-menu-item index="1-2">
								<el-checkbox v-model="checked">添加角色</el-checkbox>
							</el-menu-item>
						</el-menu-item-group>

					</el-submenu>
					<el-submenu index="8">
						<template slot="title">
							<i class="el-icon-caret-right"></i>
							<span slot="title">系统帮助 </span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1">
								<el-checkbox v-model="checked">用户手册</el-checkbox>
							</el-menu-item>
							<el-menu-item index="1-2">
								<el-checkbox v-model="checked">规章制度</el-checkbox>
							</el-menu-item>
						</el-menu-item-group>

					</el-submenu>
					<el-submenu index="9">
						<template slot="title">
							<i class="el-icon-caret-right"></i>
							<span slot="title">个人管理 </span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1">
								<el-checkbox v-model="checked">
									<router-link to="/chakan" style="text-decoration: none;">个人信息查看
									</router-link>
								</el-checkbox>
							</el-menu-item>
							<el-menu-item index="1-2">
								<el-checkbox v-model="checked">规章制度</el-checkbox>
							</el-menu-item>
						</el-menu-item-group>

					</el-submenu>

				</el-menu>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'centent',
		data() {
			return {
				isCollapse: true,
				checked: false
			}
		},
		props: {

		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>
	@import url("../../static/css/centent.css");
</style>