<script>
	import '../app.postcss';
	import Footer from '../lib/Components/Footer.svelte';
	import Header from '../lib/Components/Header.svelte';
</script>

<div class="m-20 font-serif max-w-sm sm:max-w-xl lg:max-w-3xl mx-auto">
	<Header />
	<slot />
	<Footer />
</div>
