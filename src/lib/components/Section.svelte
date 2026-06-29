<script>
	let { children, cls = '', wide = false, id = undefined } = $props();
</script>

<section {id} class="px-6 {cls}">
	<div class="mx-auto {wide ? 'max-w-7xl' : 'max-w-6xl'}">
		{@render children()}
	</div>
</section>
