<template>
	<div>
		<header>
			<h1 class="font-bold uppercase p-4 border-b border-gray-100 md:col-span-1">FOOD NINJA</h1>
			<Nav />
		</header>
	</div>
</template>
<script>
	import Nav from "@/components/Nav.vue";
	export default {
		components: {
			Nav
		}
	};
</script>
<style lang="scss" scoped>>
header {
	color: #fff;
	padding: 20px;
	background-color: #527b8e;
}
</style>
