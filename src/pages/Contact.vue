<template>
	<div>
		<header>
			<b-container>
				<b-row>
					<b-col sm="12" lg="5">
						<h1 class="main-title">
							Get in <b>touch</b>?
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
					<b-col class="text-center">
						<h3>Thanks for taking the time,</h3>
						<p class="mb-0">
							For job offer, partnership or other works, please fill the form.
						</p>
					</b-col>
				</b-row>
			</b-container>
		</section>
		<section>
			<b-container>
				<b-row>
					<b-col sm="12" lg="8" offset-lg="2">
						<form
							accept-charset="UTF-8"
							action="https://usebasin.com/f/147b955d4022"
							enctype="multipart/form-data"
							method="POST"
						>
							<b-form-group
								id="nameGroup"
								label="Name"
								label-for="name"
							>
								<b-form-input
									id="name"
									name="name"
									type="text"
									required
								></b-form-input>
							</b-form-group>
							<b-form-group
								id="emailGroup"
								label="Email address:"
								label-for="email"
							>
								<b-form-input
									id="email"
									name="email"
									type="email"
									required
								></b-form-input>
							</b-form-group>
							<b-form-group
								id="messageGroup"
								label="Message"
								label-for="comment"
							>
								<b-form-textarea
									id="comment"
									name="comment"
									v-model="comment"
									:rows="3"
									:max-rows="10"
								></b-form-textarea>
							</b-form-group>
							<div class="text-center">
								<b-button type="submit" variant="primary">
									Submit
								</b-button>
							</div>
						</form>
					</b-col>
				</b-row>
			</b-container>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			comment: '',
		}
	},
}
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

ul.listed-item {
	list-style: disc;
	padding-left: 1.8rem;
}

.text-blue-soft {
	color: #3a95ee;
}
</style>
