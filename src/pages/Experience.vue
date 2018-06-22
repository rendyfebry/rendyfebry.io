<template>
	<div>
		<header>
			<b-container>
				<b-row>
					<b-col sm="12" lg="5">
						<h1 class="main-title">
							Where I have <b>been</b>
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
								Head of Software Engineering - Pixel House Studio
							</h4>
							<p class="text-blue-soft">
								<small>Nov, 2017 - Present</small>
							</p>
							<ul class="listed-item">
								<li>
									Lead our Software Engineering Team
								</li>
								<li>
									Front-end with ReactJS, VueJS, and Vanilla JavaScript
								</li>
								<li>
									Back-end with Python, NodeJS and Go
								</li>
								<li>
									Database and Search with MongoDB, ElasticSearch and SQL
								</li>
								<li>
									Server and Deployment with Docker,
									Gitlab-CI, Kubernetes, Jenkins, etc
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
					<b-row class="mb-5">
						<b-col sm="12" lg="3">
							<img
								class="img-fluid"
								src="../assets/images/pixel-logo-square.jpg"
							>
						</b-col>
						<b-col sm="12" lg="9">
							<h4 class="mb-0">
								Senior Software Engineer - Pixel House Studio
							</h4>
							<p class="text-blue-soft">
								<small>Nov, 2016 - Nov, 2017</small>
							</p>
							<ul class="listed-item">
								<li>
									Develop Front-end application with ReactJS,
									Vanilla JavaScript, and Laravel
								</li>
								<li>
									Build back-end service with NodeJS & Python
								</li>
								<li>
									Database and Search with MongoDB
								</li>
								<li>
									CI/CD with Jenkins
								</li>
							</ul>
						</b-col>
					</b-row>
					<b-row class="mb-5">
						<b-col sm="12" lg="9">
							<h4 class="mb-0">
								Software Developer - PT Bosung Indonesia
							</h4>
							<p class="text-blue-soft">
								<small>Jun, 2012 - Sep, 2016</small>
							</p>
							<ul class="listed-item">
								<li>
									Develop internal application (ERP) to control
									our company business that include multiple modules,
									like: manufacturing, HR and Finance
								</li>
								<li>
									Manage on-site servers in multiple location
								</li>
								<li>
									Build VPN between our factory and office plans
								</li>
								<li>
									Build better more secure network (LAN) for our office
								</li>
							</ul>
						</b-col>
						<b-col sm="12" lg="3">
							<img
								class="img-fluid"
								src="../assets/images/bosung-logo.gif"
							>
						</b-col>
					</b-row>
					<b-row>
						<b-col sm="12" lg="3">
							<img
								class="img-fluid"
								src="../assets/images/bosung-logo.gif"
							>
						</b-col>
						<b-col sm="12" lg="9">
							<h4 class="mb-0">
								IT Technician - PT Bosung Indonesia
							</h4>
							<p class="text-blue-soft">
								<small>Aug, 2009 - Jun, 2012</small>
							</p>
							<ul class="listed-item">
								<li>
									General IT Support Task
								</li>
								<li>
									Buy & upgrade hardware
								</li>
								<li>
									Install OS & Software
								</li>
								<li>
									Install devices (Printer, Scanner, Fingerprint Reader)
								</li>
								<li>
									Build network (LAN)
								</li>
								<li>
									Setup & fix internet connection
								</li>
							</ul>
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
