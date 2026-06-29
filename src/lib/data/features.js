export const pillars = [
	{
		eyebrow: 'Continue from anywhere',
		title: 'Leave your desk. Your work stays running.',
		body: 'Every session is a tmux process on your own server. Close the laptop, switch to your phone, sit down at a different machine — everything is exactly where you left it. No reconnecting, no restarting, no lost context.',
		under: 'Backed by tmux. Reconnect from any device in under a second.'
	},
	{
		eyebrow: 'Projects, not sessions',
		title: 'Organized work instead of a mess of sessions.',
		body: 'Raw tmux gives you a pile of unnamed windows with no sense of what belongs together. Workspace groups terminals, editors, and plans into projects — so you always know what you\'re looking at and where to pick up.',
		under: 'Tabs persist per project. Switch projects, the whole environment swaps.'
	},
	{
		eyebrow: 'Always moving forward',
		title: 'Check in from anywhere. Projects don\'t wait for you.',
		body: 'Break work into plans and tickets. Long-running processes, builds, and tools keep going whether you\'re at a desk or not. Glance at progress from your phone, jump in on your iPad, finish on your desktop.',
		under: 'Plans → tickets → execution. Every project has a clear next step.'
	}
];

export const tools = [
	{ label: 'Terminal', desc: 'Persistent tmux-backed sessions, grouped by project' },
	{ label: 'VS Code', desc: 'Full embedded editor — not a stripped-down alternative' },
	{ label: 'Files', desc: 'Browse and edit any file on your server' },
	{ label: 'Changes', desc: 'Git diff, branch management, and commits' },
	{ label: 'Plans & Tickets', desc: 'Break work into structured, executable tickets' },
	{ label: 'MCP Manager', desc: 'Install and configure MCP tools per project' },
	{ label: 'Tool Builder', desc: 'Scaffold and manage custom MCP servers' },
	{ label: 'Overview', desc: 'Cross-project status — see everything at a glance' }
];

export const compatibleTools = [
	'Claude Code', 'Gemini CLI', 'OpenAI CLI', 'Aider', 'Continue',
	'Any npm/pip script', 'Docker builds', 'Test runners', 'Dev servers'
];
