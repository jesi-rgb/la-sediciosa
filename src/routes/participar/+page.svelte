<script>
	import Title from '../../lib/Components/Title.svelte';
	import Sediciosa from '../../lib/Components/Sediciosa.svelte';
	import { At, Envelope, EnvelopeOpen, MicrosoftWordLogo, TextAa } from 'phosphor-svelte';
</script>

<svelte:head>
	<title>Cómo participar — La Sediciosa</title>
</svelte:head>

<Title>Cómo participar</Title>

<div class="text-2xl xl:text-3xl font-medium mb-10">
	Algunas guías relativamente relajadas acerca de cómo exponer tu trabajo en <Sediciosa />.
</div>

<ul class="text-2xl list-none flex flex-col space-y-4">
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
		<span class="ornaments">[</span> Tema, forma, estilo y género literario libres.
		<span class="ornaments">\</span>
	</li>
</ul>

<style>
	.ornaments {
		font-family: 'Bodoni Ornaments';
	}

	ul li::before {
		content: '8'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
		display: inline-block; /* Needed to add space between the bullet and the text */

		font-family: 'Bodoni Ornaments';
		font-size: 0.8em;

		width: 1em; /* Also needed for space (tweak if needed) */

		margin-left: -1em; /* Also needed for space (tweak if needed) */
		margin-right: 0em;
	}
</style>
