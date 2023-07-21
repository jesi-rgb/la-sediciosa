<script>
	import Title from '../../lib/Components/Title.svelte';
	export let data;
	let ediciones = data.ediciones;
	ediciones = ediciones.map((x) => x.replace('.pdf', ''));

	console.log(ediciones);

	let edicionesDisplay = ediciones.map((x) =>
		x.split('-').slice(-1)[0].split('.')[0].toUpperCase()
	);
</script>

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
