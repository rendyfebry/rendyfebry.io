<template>
	<div>
		<header>
			<b-container>
				<b-row>
					<b-col sm="12" lg="5">
						<h1 class="main-title">
							What I have <b>done</b>
						</h1>
					</b-col>
					<b-col sm="12" lg="7">
					</b-col>
				</b-row>
			</b-container>
		</header>
		<section class="mb-5">
			<b-container>
				<b-col sm="12" lg="10" offset-lg="1">
					<b-row class="mb-5">
						<b-col sm="12" lg="9">
							<h4 class="mb-0">
								Managix
							</h4>
							<p class="text-blue-soft">
								<small>Pixel House Studio</small>
							</p>
							<p>
								Managix is aim to become the best and most complete Facebook Ads companion app.
								With Managix user can easily create, manage and optimize their ads more efficiently.
							</p>
							<ul class="listed-item">
								<li>
									Python and Golang for the backend side
								</li>
								<li>
									ReactJS, VueJS, & Laravel for the front end side
								</li>
								<li>
									Other technology that worth to mention is MongoDB, Docker, GitlabCI & ELK Stack
								</li>
							</ul>
						</b-col>
						<b-col sm="12" lg="3">
							<img
								class="img-fluid"
								src="../assets/images/pixel-logo-square.jpg"
							>
						</b-col>
					</b-row>
				</b-col>
			</b-container>
		</section>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
header {
	background: linear-gradient(315deg, #56ccf2 0, #3a95ee 73%, #2f80ed 100%);
	min-height: 20rem;
	padding-top: 3.5rem;
	padding-bottom: 2rem;
	color: #fff;
	display: flex;
	align-items: center;
}

h1 {
	font-size: 2rem;
}

h2 {
	font-size: 1rem;
}

section {
	padding-top: 2rem;
	padding-bottom: 2rem;
}

.skill-icon {
	font-size: 4rem;
}

ul.listed-item {
	list-style: disc;
	padding-left: 1.8rem;
}

.text-blue-soft {
	color: #3a95ee;
}
</style>
