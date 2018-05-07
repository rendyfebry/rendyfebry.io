<template>
	<div>
		<section v-if="1 === 2">
			<b-container>
				<b-row>
					<b-col class="text-center">
						<h3>Let's build things together and make impact.</h3>
						<p>
							Thousands of developers are already trusting and
							using Strapi to build their APIs.
						</p>
					</b-col>
				</b-row>
			</b-container>
		</section>
		<footer>
			<b-container>
				<b-row>
					<b-col sm="12" lg="3">
						<h3>RENDYFEBRY.IO</h3>
						<p>Full Stack Software Engineer</p>
					</b-col>
					<b-col sm="12" lg="9">
						<b-row>
							<b-col sm="6" lg="3" offset-lg="9">
								<ul>
									<li>
										<b-link href="mailto:rendyfebry@gmail.com">
											<i class="fa fa-envelope" /> &nbsp; Email
										</b-link>
									</li>
									<li>
										<b-link href="https://www.linkedin.com/in/rendyfebry/">
											<i class="fa fa-linkedin" /> &nbsp; Linkedin
										</b-link>
									</li>
									<li>
										<b-link href="https://github.com/rendyfebry">
											<i class="fa fa-github" /> &nbsp; Github
										</b-link>
									</li>
								</ul>
							</b-col>
						</b-row>
					</b-col>
				</b-row>
			</b-container>
		</footer>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
section {
	padding-top: 1rem;
	padding-bottom: 1rem;
}

footer {
	background: linear-gradient(315deg, #10192a 0, #161d29 100%);
	color: #ffffff;
	min-height: 10rem;
	padding-top: 2rem;
	padding-bottom: 2rem;
}

footer li {
	line-height: 2rem;
}

footer li a {
	color: #ffffff;
	font-size: 0.8rem;
	position: relative;
}

footer li a:hover {
	text-decoration: none;
}

footer li a:after {
	opacity: 0.2;
	position: absolute;
	bottom: -0.5rem;
	right: 0;
	content: '';
	width: 0%;
	height: 0.2rem;
	background: #4883e7;
	-webkit-transition: width 0.3s ease;
	transition: width 0.3s ease;
}

footer li a:hover:after {
	left: 0;
	right: auto;
	width: 100%;
}
</style>
