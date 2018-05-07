<template>
	<b-navbar toggleable="md" type="dark" variant="info" class="home-navbar">
		<b-container>
			<b-navbar-brand to="/">
				RENDYFEBRY.IO
			</b-navbar-brand>

			<b-navbar-toggle target="nav_collapse" />

			<b-collapse is-nav id="nav_collapse">
				<b-navbar-nav class="ml-auto">
					<b-nav-item to="/contact">
						Contact
					</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-container>
	</b-navbar>
</template>

<script>
export default {}
</script>

<style scoped>
.home-navbar {
	background-color: transparent !important;
}

@media screen and (min-width: 768px) {
	.home-navbar {
		position: absolute;
		left: 0;
		right: 0;
	}
}
</style>
