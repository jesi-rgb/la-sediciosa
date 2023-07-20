<script>
	import '../app.postcss';
	import Footer from '../lib/Components/Footer.svelte';
	import Header from '../lib/Components/Header.svelte';
</script>

<div class="m-20 font-serif">
	<Header />
	<slot />
	<Footer />
</div>
