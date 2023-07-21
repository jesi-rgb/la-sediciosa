<script>
	export let data;
	let edicion = data.edicion;
	let edicionDisplay = edicion.split('-').slice(-1);

	console.log(edicionDisplay);
</script>

<div>
	<div class="flex justify-between items-end">
		<div class="text-3xl font-bold caps">Edición {edicionDisplay}</div>
		<a target="_blank" href="/ediciones/{edicion}.pdf">Abrir en una pestaña nueva</a>
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
