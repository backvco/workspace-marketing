<script>
	import MockWindow from './MockWindow.svelte';

	const lines = [
		{ delay: 0,    cls: 'text-slate-500', text: '$ claude --dangerously-skip-permissions' },
		{ delay: 300,  cls: 'text-ws-400',    text: '  Claude Code  ·  resuming session' },
		{ delay: 600,  cls: 'text-slate-500', text: '' },
		{ delay: 700,  cls: 'text-slate-400', text: '  ↩  Continuing from where you left off...' },
		{ delay: 1000, cls: 'text-slate-500', text: '' },
		{ delay: 1100, cls: 'text-run-400',   text: '  ✓ auth-refresh middleware  (in progress)' },
		{ delay: 1300, cls: 'text-slate-300', text: '  → Writing server/auth.js…' },
		{ delay: 1700, cls: 'text-run-400',   text: '  ✓ server/auth.js  (+47 lines)' },
		{ delay: 1900, cls: 'text-run-400',   text: '  ✓ tests passing' },
		{ delay: 2100, cls: 'text-slate-500', text: '' },
		{ delay: 2300, cls: 'text-slate-400', text: '  Next: WS-16 · MCP tool: git status summary' },
	];

	let visible = $state(0);

	$effect(() => {
		lines.forEach((l, i) => {
			setTimeout(() => { visible = i + 1; }, l.delay + 400);
		});
	});
</script>

<MockWindow title="auth-service  ·  project: api-backend">
	<div class="border-b border-ink-800 px-4 py-2 flex items-center gap-3">
		<span class="text-xs text-slate-600 font-mono">ws_api-backend-1</span>
		<span class="ml-auto flex items-center gap-1.5 text-xs text-run-400">
			<span class="h-1.5 w-1.5 rounded-full bg-run-400 shadow-[0_0_6px_currentColor]"></span>
			running · 4h 22m
		</span>
	</div>
	<div class="min-h-[220px] p-5 font-mono text-xs leading-relaxed">
		{#each lines.slice(0, visible) as line}
			<div class="line-in {line.cls}">{line.text || ' '}</div>
		{/each}
		{#if visible >= lines.length}
			<span class="inline-block h-3.5 w-1.5 cursor-blink bg-ws-400 align-middle"></span>
		{/if}
	</div>
</MockWindow>
