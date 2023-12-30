<script>
	import Sediciosa from '../../lib/Components/Sediciosa.svelte';
	import Title from '../../lib/Components/Title.svelte';
	import Palette from 'phosphor-svelte/lib/Palette';
	import Wrench from 'phosphor-svelte/lib/Wrench';
</script>

<svelte:head>
	<title>Sobre nosotros — La Sediciosa</title>

	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />

	<meta property="og:title" content={'Sobre nosotros — La Sediciosa'} />
	<meta property="og:type" content="magazine" />
	<meta property="og:url" content={'https://la-sediciosa.vercel.app/sobre-nosotros'} />
	<meta property="og:image" content="https://la-sediciosa.vercel.app/sediciosa-banner.png" />
	<meta
		property="og:description"
		content="La Sediciosa no es un movimiento emergente, no es una publicación literaria al uso, no es una emulación deforme de las vanguardias del siglo pasado ni una encrucijada de tendencias filosóficas."
	/>
</svelte:head>

<Title>Sobre nosotros</Title>

<div class="relative">
	<img
		align="right"
		class="border border-black hover:invert transition-all ml-5"
		width={200}
		vspace="11"
		src="/assets/silla.jpg"
		alt="chair"
	/>
	<p class="text-xl text-justify">
		<Sediciosa /> no es un movimiento emergente, no es una publicación literaria al uso, no es una emulación
		deforme de las vanguardias del siglo pasado ni una encrucijada de tendencias filosóficas. Mediante
		esta autodeterminación negativa, pretendemos desprendernos de las categorías más complejas y de las
		identidades más simples, devenir el horizonte crítico que se opone a lo existente como su <Sediciosa
		/> es, como reza la biografía de la única red social en la que se publicita y difunde, una revista
		literaria. Se trata de una publicación que acoge textos de cualquier género y de cualquier temática,
		con el fin de ofrecer un espacio de visibilidad a todas las creaciones particulares, <Sediciosa
		/>
		es la cristalización textual de la vanguardia teórica que constituye el sedicionismo, escisión del
		insurreccionalismo <Sediciosa /> no es una lista de la compra ni las notas del móvil ni un cuaderno
		de anillas <Sediciosa />
		es un dispositivo textual al servicio de <Sediciosa /> es la hoguera perdida que señaliza el camino
		hacia el olvido que recorren los fragmentos de nuestras almas <Sediciosa /> es un proyecto libre
		y autogestionado de publicación y difusión de textos de diversa índole, de promoción de la creatividad
		literaria y de subversión de los estándares actuales.
	</p>
</div>

<div class="mt-10">
	<span class="inline-block -my-0.5"><Wrench weight="fill" /></span> Desarrollo de la plataforma y
	<span class="inline-block -my-1 mr-0.5"><Palette weight="fill" /></span>diseño por
	<a class="underline hover:text-neutral-400 transition-colors" href="https://jesirgb.com"
		>Jesús Rascón</a
	>.
</div>
