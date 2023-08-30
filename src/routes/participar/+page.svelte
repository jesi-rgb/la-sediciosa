<script>
	import Title from '../../lib/Components/Title.svelte';
	import Sediciosa from '../../lib/Components/Sediciosa.svelte';
	import { At, Envelope, EnvelopeOpen, MicrosoftWordLogo, TextAa } from 'phosphor-svelte';
</script>

<svelte:head>
	<title>Cómo participar — La Sediciosa</title>

	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />

	<meta property="og:title" content={'Cómo participar — La Sediciosa'} />
	<meta property="og:type" content="magazine" />
	<meta property="og:url" content={'https://la-sediciosa.vercel.app/participar'} />
	<meta property="og:image" content="https://la-sediciosa.vercel.app/sediciosa-banner.png" />
	<meta
		property="og:description"
		content="Breves instrucciones acerca de cómo participar en La Sediciosa"
	/>
</svelte:head>

<Title>Cómo participar</Title>

<div class="text-2xl xl:text-3xl font-medium mb-10">
	Algunas guías relativamente relajadas acerca de cómo exponer tu trabajo en <Sediciosa />.
</div>

<ul class="text-2xl list-none flex flex-col space-y-4 relative">
	<li>
		Envía dos documentos <span class="inline-block -my-1"
			><MicrosoftWordLogo weight="duotone" /></span
		>
		Word (uno con nombre o pseudónimo + texto y otro con texto sin nombre o pseudónimo) al correo
		<span class="inline-block -my-1"><EnvelopeOpen weight="duotone" /></span>
		<a
			class="underline font-bold hover:text-neutral-400 transition-colors"
			href="mailto:lasediciosa@gmail.com">lasediciosa@gmail.com</a
		>
	</li>
	<li>
		<span class="inline-block -my-1"><TextAa weight="fill" /></span> Fuente:
		<a
			class="underline hover:text-neutral-400 transition-colors"
			href="https://fonts.google.com/specimen/EB+Garamond">EB Garamond</a
		>, tamaño 12 puntos, interlineado 1.15.
	</li>
	<li>
		<span class="font-ornament">[</span> Tema, forma, estilo y género literario libres.
		<span class="font-ornament">\</span>
	</li>
</ul>

<style>
	ul li::before {
		position: absolute;
		content: '8'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
		display: inline-block; /* Needed to add space between the bullet and the text */

		font-family: 'Bodoni Ornaments';
		font-size: 0.7em;
		font-weight: 800;

		width: 1em; /* Also needed for space (tweak if needed) */
		left: -0.6em;
	}
</style>
