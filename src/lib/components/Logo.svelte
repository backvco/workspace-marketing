<script>
	let { size = 'md' } = $props();
	const imgSize = size === 'sm' ? 'h-7 w-7' : 'h-8 w-8';
	const textSize = size === 'sm' ? 'text-sm' : 'text-base';
</script>

<a href="/" class="flex items-center gap-2.5 no-underline">
	<img src="/icon.svg" alt="Workspace ai" class="{imgSize} rounded-lg" />
	<span class="{textSize} font-semibold text-white">
		Workspace<span class="text-[#2f81f7]">ai</span>
	</span>
</a>
