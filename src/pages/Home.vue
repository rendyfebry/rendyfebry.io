<template>
	<div>
		<header>
			<b-container>
				<b-row>
					<b-col sm="12" lg="7" class="main-title-wrapper">
						<h1 class="main-title">
							&lt;Hello&gt;<br />
							&nbsp;&nbsp;&nbsp;&nbsp; My name is
							<b>Rendy Febry</b>,
							<br />
							&lt;/Hello&gt;
						</h1>
					</b-col>
					<b-col sm="12" lg="5" class="drawing-wrapper">
						<img
							class="img-fluid drawing"
							src="../assets/images/undraw_dev_productivity_umsq.svg"
						/>
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
							My name is Rendy Febry, 30 years old. I am a Fullstack Software
							Engineer, based on Bandung, Indonesia. I have more than 6 years
							experience in Software Development, and almost 10 years in IT
							industry.
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
							<i class="fa fa-cog " />
						</div>
						<h4 class="text-center">
							Back End
						</h4>
						<p>
							GoLang, NodeJS, Python, ExpressJS, Flask, PHP, Laravel, etc.
						</p>
					</b-col>
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
							<i class="fa fa-database " />
						</div>
						<h4 class="text-center">
							Others
						</h4>
						<p>
							AWS, GCP, MySQL, MongoDB, ElasticSearch, Docker, ECS, Kubernetes,
							Jenkins, ELK Stack, etc.
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
		<section class="bg-light pb-0 pt-4">
			<b-container>
				<b-row>
					<b-col xs="12" lg="4">
						<b-btn
							size="lg"
							variant="primary"
							block
							to="/experience"
							class="mb-4"
						>
							<i class="fa fa-briefcase" /> Experience
						</b-btn>
					</b-col>
					<b-col xs="12" lg="4">
						<b-btn
							size="lg"
							variant="outline-secondary"
							block
							to="/project"
							class="mb-4"
						>
							<i class="fa fa-object-group" /> Project
						</b-btn>
					</b-col>
					<b-col xs="12" lg="4">
						<a
							class="btn mb-4 btn-success btn-lg btn-block"
							href="/static/cv-rendy.pdf"
							target="_blank"
						>
							<i class="fa fa-download" /> Download CV
						</a>
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
						'JavaScript/NodeJS',
						'Golang',
						'Python',
						'Java',
						'SQL',
						'Docker',
						'AWS',
						'GIT',
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
						data: [6, 4, 3, 1.5, 5, 4, 4.5, 5],
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

.main-title-wrapper {
	display: flex;
	align-items: center;
}

.drawing-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
}

@media screen and (max-width: 767px) {
	header .drawing {
		display: none;
	}
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
