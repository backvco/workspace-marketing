export const site = {
	name: 'Workspace',
	domain: 'workspaceai.dev',
	tagline: 'Your dev environment, from any device.',
	oneLiner:
		'A self-hosted browser workspace that keeps your terminals, editors, and projects running — so you can pick up from your iPhone, iPad, or desktop without losing a thing.'
};

export const ctaPrimary = { label: 'View on GitHub', href: 'https://github.com/backvco/workspace', external: true };
export const ctaSecondary = { label: 'Read the docs', href: '/docs' };

// The one-line installer shown in the hero "Try it" box.
export const installCommand = 'curl -fsSL https://raw.githubusercontent.com/backvco/workspace/master/install.sh | bash';

export const nav = [
	{ label: 'Features', href: '/#features' },
	{ label: 'Projects', href: '/#projects' },
	{ label: 'Open source', href: '/#open-source' },
	{ label: 'Docs', href: '/docs' }
];

export const footerNav = [
	{
		heading: 'Product',
		links: [
			{ label: 'Features', href: '/#features' },
			{ label: 'Projects', href: '/#projects' },
			{ label: 'Open source', href: '/#open-source' },
			{ label: 'Docs', href: '/docs' }
		]
	},
	{
		heading: 'Resources',
		links: [
			{ label: 'GitHub', href: 'https://github.com/backvco/workspace' },
			{ label: 'Changelog', href: '/changelog' },
			{ label: 'Privacy', href: '/privacy' },
			{ label: 'Terms', href: '/terms' }
		]
	},
	{
		heading: 'Company',
		links: [
			{ label: 'BACK Ventures — Studio Project', href: 'https://backv.co' },
			{ label: 'Contact', href: 'mailto:info@workspaceai.dev' }
		]
	}
];
