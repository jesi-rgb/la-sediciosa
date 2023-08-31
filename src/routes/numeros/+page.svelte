<script>
	import Title from '../../lib/Components/Title.svelte';

	let dataEdiciones = ['la-sediciosa-01-marzo.pdf', 'la-sediciosa-02-agosto.pdf'];

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

<div class="flex flex-col md:flex-row items-start gap-8">
	<div>
		<div class="text-xl">
			Una lista exhaustiva de las diferentes ediciones de <span class="caps">La Sediciosa</span>
		</div>

		<ul class="mt-10 mb-20 md:mb-0">
			{#each ediciones as n, i}
				<a href="/numeros/{n}">
					<li class="flex space-x-1 text-2xl md:text-3xl mb-2">
						<div class="font-ornament">[</div>
						<div class="caps">La Sediciosa</div>
						<div>—</div>
						<div class="font-bold">{edicionesDisplay[i]}</div>
					</li>
				</a>
			{/each}
		</ul>
	</div>
	<img
		class="border-black border hover:blur-sm w-[80%] md:w-1/3 transition-all mx-auto md:mx-0"
		src="/assets/text.jpg"
		alt="text"
	/>
</div>

<style>
	.caps {
		font-variant: small-caps;
	}
</style>
