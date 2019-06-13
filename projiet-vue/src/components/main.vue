<template>
	<div class="main">
		<div class="main-cen">
			<div class="main-cen1" v-for="cen in maincen">
				<p>{{cen.firsttul}}</p>
				<span>{{cen.secondtul}}</span>
				<span>{{cen.threetul}}</span>
			</div>

		</div>

		<div class="main-ce">

			<div class="main-CModulePA" v-for="ce in maince">
				<p>{{ce.firsttul}}</p>
				<p>
					<hr style="width: 6%;margin-bottom: 50px; margin-left: 47%;background-color: gainsboro;border: 0px;margin-top: 10px;height: 3px;" />
				</p>
				<ul>
					<li>
						<img :src="ce.imgone" />
						<p>{{ce.secondtul}}</p>
						<h1>
						<span>{{ce.threetul}}</span></h1>
					</li>
					<li>
						<img :src="ce.imgtwo" />
						<p>{{ce.fourtul}}</p>
						<h1>
						<span>{{ce.threetul}}</span></h1>
					</li>
					<li>
						<img :src="ce.imgthree" />
						<p>{{ce.fivetul}}</p>
						<h1>
						<span>{{ce.threetul}}</span></h1>
					</li>
				</ul>
			</div>
		</div>
		<div class="main-wvmo">

		</div>
		<div class="main-CModulePA1" style="">
			<p>三荣誉资质</p>
			<p>
				<hr style="width: 6%;margin-bottom: 50px; margin-left: 47%;background-color: gainsboro;border: 0px;margin-top: 10px;height: 3px;" />
			</p>
			<ul v-for="img1 in mainUrl">
				<li>
					<img :src="img1.imgone" width="100%" />

				</li>
				<li>
					<img :src="img1.imgtwo" width="100%" />

				</li>
				<li>
					<img :src="img1.imgthree" width="100%" />

				</li>
				<li>
					<img :src="img1.imgfour" width="100%" />

				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'zhuangxiu',
		data() {
			return {

			}
		},
		props: {
			maincen: {
				type: Array
			},
			maince: {
				type: Array
			},
			mainUrl: {
				type: Array
			}
		}

	}
</script>

<style>
	@import url("../../static/css/main.css");
</style>