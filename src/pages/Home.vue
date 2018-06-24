<template>
	<div>
		<header>
			<b-container>
				<b-row>
					<b-col sm="12" lg="6">
						<h1 class="main-title">
							&lt;Hello&gt;<br />
							&nbsp;&nbsp;&nbsp;&nbsp;
							My name is <b>Rendy Febry</b>,
							<br />
							&lt;/Hello&gt;
						</h1>
					</b-col>
					<b-col sm="12" lg="7">
					</b-col>
				</b-row>
			</b-container>
		</header>
		<section>
			<b-container>
				<b-row>
					<b-col col lg="8" offset-lg="2" class="pt-4 pb-4 text-center">
						<h3>Nice to meet you</h3>
						<p class="mb-0">
							My name is Rendy Febry, 27 years old. I am a Fullstack Software Engineer, based on Bandung, Indonesia.
							I have more than 6 years experience in Software Development, and almost 10 years in IT industry.
						</p>
					</b-col>
				</b-row>
			</b-container>
		</section>
		<section class="bg-light">
			<b-container>
				<b-row>
					<b-col sm="12" lg="4">
						<div class="text-center skill-icon">
							<i class="fa fa-code " />
						</div>
						<h4 class="text-center">
							Front End
						</h4>
						<p>
							JavaScript, ReactJS, VueJS, JQuery, HTML, CSS, etc.
						</p>
					</b-col>
					<b-col sm="12" lg="4">
						<div class="text-center skill-icon">
							<i class="fa fa-cog " />
						</div>
						<h4 class="text-center">
							Back End
						</h4>
						<p>
							NodeJS, Python, GoLang, ExpressJS, Flask, PHP, Laravel, etc.
						</p>
					</b-col>
					<b-col sm="12" lg="4">
						<div class="text-center skill-icon">
							<i class="fa fa-database " />
						</div>
						<h4 class="text-center">
							Others
						</h4>
						<p>
							MongoDB, MySQL, ElasticSearch, Docker, Kubernetes,
							Gitlab CI, ELK Stack, etc.
						</p>
					</b-col>
				</b-row>
			</b-container>
		</section>
		<!-- <section>
			<b-container>
				<b-row class="">
					<b-col col sm="12" lg="6" class="text-center">
						<b-link to="/project" class="btn btn-outline-primary">
							My Portfolio
						</b-link>
					</b-col>
					<b-col col sm="12" lg="6" class="text-center">
						<b-link to="/experience" class="btn btn-primary">
							My Professional Experiences
						</b-link>
					</b-col>
				</b-row>
			</b-container>
		</section> -->
		<section>
			<b-container>
				<b-row>
					<b-col>
						<highcharts :options="graphOpt"></highcharts>
					</b-col>
				</b-row>
			</b-container>
		</section>
		<section class="bg-light">
			<b-container>
				<b-row>
					<b-col xs="12" lg="4">
						<b-btn size="lg" variant="outline-secondary" block to="/project">
							<i class="fa fa-object-group"/> Project
						</b-btn>
					</b-col>
					<b-col xs="12" lg="4">
						<b-btn size="lg" variant="primary" block to="/experience">
							<i class="fa fa-briefcase"/> Experience
						</b-btn>
					</b-col>
					<b-col xs="12" lg="4">
						<b-btn size="lg" variant="success" block>
							<i class="fa fa-download"/> Download CV
						</b-btn>
					</b-col>
				</b-row>
			</b-container>
		</section>
		<!-- <section class="mb-5">
			<b-container>
				<b-row class="mb-4">
					<b-col sm="12">
						<h3 class="text-center">
							<u>Professional Experiences</u>
						</h3>
					</b-col>
				</b-row>
			</b-container>
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
		</section> -->
	</div>
</template>

<script>
export default {
	computed: {
		graphOpt() {
			const options = {
				chart: {
					type: 'column',
				},
				title: {
					text: 'Years of Experience',
				},
				xAxis: {
					categories: [
						'JavaScript',
						'React',
						'VueJS',
						'PHP & SQL',
						'NodeJS',
						'Python',
						'Go',
						'MongoDB',
						'Linux & Server',
						'GIT',
						'Docker',
					],
					title: {
						text: null,
					},
				},
				yAxis: {
					min: 0,
					title: {
						text: 'Total Experience (years)',
						align: 'high',
					},
					labels: {
						overflow: 'justify',
					},
				},
				tooltip: {
					valueSuffix: ' years',
				},
				plotOptions: {
					bar: {
						dataLabels: {
							enabled: true,
						},
					},
				},
				credits: {
					enabled: false,
				},
				series: [
					{
						name: 'Skills',
						showInLegend: false,
						data: [5, 3, 2, 5.5, 3.5, 2.5, 1.5, 3.5, 5, 4, 2],
					},
				],
			}

			return options
		},
	},
}
</script>

<style scoped>
header {
	background: linear-gradient(315deg, #56ccf2 0, #3a95ee 73%, #2f80ed 100%);
	/* min-height: 40rem; */
	min-height: 100vh;
	padding-top: 3.5rem;
	padding-bottom: 2rem;
	color: #fff;
	display: flex;
	align-items: center;
}

h1 {
	font-size: 1.5rem;
}

@media screen and (min-width: 768px) {
	h1 {
		font-size: 2rem;
	}
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
