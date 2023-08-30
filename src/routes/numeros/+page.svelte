<script>
	import Title from '../../lib/Components/Title.svelte';

	let dataEdiciones = ['la-sediciosa-01-marzo.pdf'];

	let ediciones = dataEdiciones.map((x) => x.replace('.pdf', ''));

	let edicionesDisplay = ediciones.map((x) =>
		x.split('-').slice(-1)[0].split('.')[0].toUpperCase()
	);
</script>

<svelte:head>
	<title>Números — La Sediciosa</title>

	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />

	<meta property="og:title" content="Números — La Sediciosa" />
	<meta property="og:type" content="magazine" />
	<meta property="og:url" content="https://la-sediciosa.vercel.app/numeros" />
	<meta property="og:image" content="https://la-sediciosa.vercel.app/sediciosa-banner.png" />
	<meta
		property="og:description"
		content="Lista exhaustiva de los números publicados hasta ahora"
	/>
</svelte:head>

<Title>Números</Title>

<div class="text-xl">
	Una lista exhaustiva de las diferentes ediciones de <span class="caps">La Sediciosa</span>
</div>
<div class="mt-10 text-xl text-gray-400 w-1/2">
	Nota: ahora mismo todas apuntan a la de marzo, pero así se deja entrever cómo esta lustrosa lista
	de ediciones podría lucir en el futuro
</div>

<ul class="mt-10 text-xl">
	{#each ediciones as n, i}
		<a href="/numeros/{n}">
			<li class="flex space-x-1 text-3xl">
				<div class="caps">La Sediciosa</div>
				<div>—</div>
				<div class="font-bold">{edicionesDisplay[i]}</div>
			</li>
		</a>
	{/each}
</ul>

<style>
	.caps {
		font-variant: small-caps;
	}
</style>
