<script>
	import { ArrowBendLeftUp, ArrowUpRight, FilePdf } from 'phosphor-svelte';

	export let data;
	let edicion = data.edicion;
	let edicionDisplay = edicion.split('-').slice(-1);
</script>

<svelte:head>
	<title>{edicionDisplay[0].toUpperCase()} — La Sediciosa</title>

	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />

	<meta property="og:title" content={edicionDisplay[0] + ' — La Sediciosa'} />
	<meta property="og:type" content="magazine" />
	<meta property="og:url" content={'https://la-sediciosa.vercel.app/numeros/' + edicion} />
	<meta property="og:image" content="https://la-sediciosa.vercel.app/sediciosa-banner.png" />
	<meta property="og:description" content={'Edición ' + edicionDisplay[0].toUpperCase()} />
</svelte:head>

<div>
	<div class="flex justify-between items-end">
		<div class="text-3xl font-bold caps">Edición {edicionDisplay[0]}</div>
		<a target="_blank" class="group" href="/ediciones/{edicion}.pdf"
			>Abrir en una pestaña nueva <span
				class="inline-block align-middle group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
				><ArrowUpRight /></span
			>
		</a>
	</div>

	<div class="mx-auto">
		<iframe
			class="mx-auto my-5 border-4 rounded-xl border-black"
			width="100%"
			height="auto"
			style="aspect-ratio: 210/297"
			src="/ediciones/{edicion}.pdf"
		/>
	</div>
</div>

<style>
	.caps {
		font-variant: small-caps;
	}
</style>
