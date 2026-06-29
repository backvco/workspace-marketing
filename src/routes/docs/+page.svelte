<script>
  import Section from '$lib/components/Section.svelte';
  import Eyebrow from '$lib/components/Eyebrow.svelte';

  const navItems = [
    { id: 'quick-start', label: 'Quick Start' },
    { id: 'requirements', label: 'Requirements' },
    { id: 'installation', label: 'Installation' },
    { id: 'configuration', label: 'Configuration' },
    { id: 'connecting', label: 'Connecting from other devices' },
    { id: 'projects', label: 'Projects' },
    { id: 'plans', label: 'Plans & Tickets' },
  ];
</script>

<svelte:head>
  <title>Documentation — Workspace AI</title>
  <meta name="description" content="Get Workspace AI running on your server in minutes. Self-hosted, open source dev environment accessible from any device." />
  <link rel="canonical" href="https://workspaceai.dev/docs" />
  <meta property="og:title" content="Documentation — Workspace AI" />
  <meta property="og:description" content="Get Workspace AI running on your server in minutes. Self-hosted, open source dev environment accessible from any device." />
  <meta property="og:url" content="https://workspaceai.dev/docs" />
  <meta name="twitter:title" content="Documentation — Workspace AI" />
  <meta name="twitter:description" content="Get Workspace AI running on your server in minutes. Self-hosted, open source dev environment accessible from any device." />
</svelte:head>

<Section cls="pt-24 pb-8">
  <Eyebrow>Documentation</Eyebrow>
  <h1 class="mt-5 text-4xl font-bold tracking-tight text-white">Get up and running in minutes</h1>
  <p class="mt-4 text-lg text-slate-400">Self-host Workspace on any Linux server and access your dev environment from any device.</p>
</Section>

<Section cls="pb-24">
  <div class="grid gap-12 lg:grid-cols-[220px_1fr] [&>*]:min-w-0">

    <!-- Left nav -->
    <nav class="lg:sticky lg:top-8 lg:self-start">
      <ul class="space-y-1">
        {#each navItems as item}
          <li>
            <a href="#{item.id}" class="block rounded-lg px-3 py-1.5 text-sm text-slate-400 transition-colors hover:bg-ink-800 hover:text-white">{item.label}</a>
          </li>
        {/each}
      </ul>
    </nav>

    <!-- Content -->
    <div class="space-y-16 text-slate-400">

      <!-- Quick Start -->
      <section id="quick-start">
        <h2 class="text-2xl font-bold text-white">Quick Start</h2>
        <p class="mt-3 leading-relaxed">One command on a fresh Ubuntu or macOS box installs everything (git, Node, tmux, a Postgres container), writes your config, and walks you through the prompts.</p>
        <div class="mt-5 overflow-hidden rounded-xl border border-ink-700 bg-ink-950">
          <div class="flex h-9 items-center gap-2 border-b border-ink-700 px-4">
            <span class="h-2.5 w-2.5 rounded-full bg-ink-700"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-ink-700"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-ink-700"></span>
            <span class="ml-2 font-mono text-xs text-slate-600">terminal</span>
          </div>
          <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-slate-300"><code><span class="text-slate-500"># One-line install — only needs curl + sudo</span>
curl -fsSL https://raw.githubusercontent.com/backvco/workspace/master/install.sh | bash

<span class="text-slate-500"># …then start it in two terminals:</span>
node server/index.js   <span class="text-slate-500"># API on :5301</span>
npm run dev            <span class="text-slate-500"># UI on :5300</span>

<span class="text-ws-400"># Open http://localhost:5300</span></code></pre>
        </div>
        <p class="mt-4 leading-relaxed text-sm">Prefer to do it by hand? The manual steps are below.</p>
      </section>

      <!-- Requirements -->
      <section id="requirements">
        <h2 class="text-2xl font-bold text-white">Requirements</h2>
        <p class="mt-3 leading-relaxed">Workspace runs on any modern Linux server. You don't need anything exotic.</p>
        <ul class="mt-4 space-y-2">
          {#each [
            ['Node.js 22+ and git', 'Installed for you by the one-line installer if missing (Node via nvm, no sudo)'],
            ['Postgres 14+', 'Stores projects, tabs, agents, and events — the installer can run it in Docker'],
            ['tmux', 'Persistent terminal sessions — installed for you if missing'],
            ['Ubuntu / macOS', 'Also Amazon Linux, RHEL, Fedora, Arch, Alpine'],
            ['An agent CLI (optional)', 'Claude Code, Gemini CLI, Aider, … on your PATH to drive agents'],
          ] as [name, desc]}
            <li class="rounded-lg border border-ink-700 bg-ink-900/50 px-5 py-3">
              <span class="text-sm font-semibold text-white">{name}</span>
              <span class="ml-2 text-sm">{desc}</span>
            </li>
          {/each}
        </ul>
        <p class="mt-4 leading-relaxed">Optional but recommended: a <strong class="text-slate-300">private mesh tunnel</strong> (NetBird, Tailscale, ZeroTier) so you can reach the server from any device without exposing any ports.</p>
      </section>

      <!-- Installation -->
      <section id="installation">
        <h2 class="text-2xl font-bold text-white">Installation</h2>
        <p class="mt-3 leading-relaxed">Install dependencies, then copy and configure the environment file.</p>

        <h3 class="mt-6 text-lg font-semibold text-white">1. Clone the repository</h3>
        <div class="mt-3 overflow-hidden rounded-xl border border-ink-700 bg-ink-950">
          <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-slate-300"><code>git clone https://github.com/backvco/workspace
cd workspace</code></pre>
        </div>

        <h3 class="mt-6 text-lg font-semibold text-white">2. Install Node dependencies</h3>
        <div class="mt-3 overflow-hidden rounded-xl border border-ink-700 bg-ink-950">
          <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-slate-300"><code>npm install</code></pre>
        </div>

        <h3 class="mt-6 text-lg font-semibold text-white">3. Install tmux (if not already installed)</h3>
        <div class="mt-3 overflow-hidden rounded-xl border border-ink-700 bg-ink-950">
          <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-slate-300"><code><span class="text-slate-500"># Ubuntu / Debian</span>
sudo apt install tmux

<span class="text-slate-500"># Arch</span>
sudo pacman -S tmux</code></pre>
        </div>

        <h3 class="mt-6 text-lg font-semibold text-white">4. Set up Postgres</h3>
        <p class="mt-2 leading-relaxed">Workspace stores projects, tabs, agents, and events in a Postgres database. You'll need a running Postgres instance and a dedicated database.</p>
        <div class="mt-3 overflow-hidden rounded-xl border border-ink-700 bg-ink-950">
          <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-slate-300"><code><span class="text-slate-500"># Create the database (run as the postgres user)</span>
createdb workspace

<span class="text-slate-500"># Or using Docker (named volume keeps data outside the container)</span>
docker run -d --name workspace-db \
  -e POSTGRES_DB=workspace \
  -e POSTGRES_PASSWORD=workspace \
  -p 5432:5432 \
  -v workspace-db-data:/var/lib/postgresql/data postgres:16</code></pre>
        </div>
        <div class="mt-4 flex gap-3 rounded-xl border border-ws-500/20 bg-ws-500/5 px-4 py-3">
          <span class="mt-0.5 text-ws-400">ℹ</span>
          <p class="text-sm leading-relaxed">The database schema is created automatically on first start. No migrations, no <code class="rounded bg-ink-800 px-1 py-0.5 text-xs">CREATE TABLE</code> commands — just point Workspace at an empty database and it sets itself up.</p>
        </div>

        <h3 class="mt-6 text-lg font-semibold text-white">5. Start the API and the UI</h3>
        <p class="mt-2 leading-relaxed">The API serves <code class="rounded bg-ink-800 px-1 py-0.5 text-xs">/api</code> and the terminal websocket on :5301; the UI runs separately on :5300 and proxies to it in dev.</p>
        <div class="mt-3 overflow-hidden rounded-xl border border-ink-700 bg-ink-950">
          <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-slate-300"><code><span class="text-slate-500"># Terminal 1 — API (creates the DB schema on first start)</span>
node server/index.js

<span class="text-slate-500"># Terminal 2 — UI, then open http://localhost:5300</span>
npm run dev</code></pre>
        </div>
        <div class="mt-4 flex gap-3 rounded-xl border border-ws-500/20 bg-ws-500/5 px-4 py-3">
          <span class="mt-0.5 text-ws-400">ℹ</span>
          <p class="text-sm leading-relaxed">For a permanent deployment, build the UI (<code class="rounded bg-ink-800 px-1 py-0.5 text-xs">npm run build</code> → <code class="rounded bg-ink-800 px-1 py-0.5 text-xs">node build</code>) behind a reverse proxy, and use <code class="rounded bg-ink-800 px-1 py-0.5 text-xs">bin/setup-tls</code> (Caddy + Let's Encrypt) and <code class="rounded bg-ink-800 px-1 py-0.5 text-xs">bin/setup-service</code> (systemd) — the installer offers both.</p>
        </div>
      </section>

      <!-- Configuration -->
      <section id="configuration">
        <h2 class="text-2xl font-bold text-white">Configuration</h2>
        <p class="mt-3 leading-relaxed">Configuration is through environment variables in <code class="rounded bg-ink-800 px-1 py-0.5 text-xs">.env</code>. Required values have no defaults — the server refuses to start without them. Auth is <strong class="text-slate-300">optional</strong>: off by default (front the server with a private mesh or firewall), or turn on a username/password login from the in-app Settings tab.</p>
        <div class="mt-5 overflow-hidden rounded-xl border border-ink-700 bg-ink-950">
          <div class="flex h-9 items-center gap-2 border-b border-ink-700 px-4">
            <span class="font-mono text-xs text-slate-600">.env</span>
          </div>
          <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-slate-300"><code><span class="text-slate-500"># Server</span>
WORKSPACE_HOST=127.0.0.1
WORKSPACE_PORT=5301

<span class="text-slate-500"># Postgres — required</span>
WORKSPACE_DATABASE_URL=postgresql://user:password@localhost:5432/workspace

<span class="text-slate-500"># Where your project directories live</span>
WORKSPACE_PROJECT_ROOTS=/home/user/projects

<span class="text-slate-500"># Where terminals open by default</span>
WORKSPACE_TERM_CWD=/home/user

<span class="text-slate-500"># Data dir for tab state and clipboard images (defaults to &lt;app&gt;/data)</span>
WORKSPACE_DATA_DIR=/home/user/.workspace/data

<span class="text-slate-500"># The agent CLI to drive (any CLI-based LLM)</span>
WORKSPACE_CLAUDE_BIN=claude

<span class="text-slate-500"># Only needed if you enable auth — sign session cookies (openssl rand -hex 32)</span>
WORKSPACE_SESSION_KEY=

<span class="text-slate-500"># Optional embedded VS Code (code-server) URL</span>
VITE_CODE_SERVER_URL=</code></pre>
        </div>
      </section>

      <!-- Connecting from other devices -->
      <section id="connecting">
        <h2 class="text-2xl font-bold text-white">Connecting from other devices</h2>
        <p class="mt-3 leading-relaxed">Once the server is running, you can reach it from any device on the same network at <code class="rounded bg-ink-800 px-1.5 py-0.5 text-xs text-slate-300">http://&lt;server-ip&gt;:5300</code>.</p>
        <div class="mt-4 flex gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3">
          <span class="mt-0.5 text-amber-400">⚠</span>
          <p class="text-sm leading-relaxed"><strong class="text-slate-300">HTTPS is required for anything other than localhost.</strong> Image paste, clipboard sync, and installing the app to your home screen (PWA) only work in a browser secure context — that's HTTPS, or <code class="rounded bg-ink-800 px-1 py-0.5 text-xs">http://localhost</code>. Use a mesh tunnel that provides TLS (e.g. <code class="rounded bg-ink-800 px-1 py-0.5 text-xs">tailscale serve</code>) or a reverse proxy that terminates HTTPS.</p>
        </div>

        <h3 class="mt-6 text-lg font-semibold text-white">Using a private mesh tunnel (recommended)</h3>
        <p class="mt-2 leading-relaxed">Tools like <strong class="text-slate-300">Tailscale</strong>, <strong class="text-slate-300">NetBird</strong>, or <strong class="text-slate-300">ZeroTier</strong> create an encrypted private network between your devices so you can reach the server from your phone or tablet without exposing any ports to the internet.</p>
        <div class="mt-4 overflow-hidden rounded-xl border border-ink-700 bg-ink-950">
          <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-slate-300"><code><span class="text-slate-500"># Example: Tailscale</span>
curl -fsSL https://tailscale.com/install.sh | sh
tailscale up

<span class="text-slate-500"># Install Tailscale (or NetBird / ZeroTier) on your phone</span>
<span class="text-slate-500"># Sign in with the same account</span>
<span class="text-slate-500"># Access Workspace at http://&lt;tunnel-ip&gt;:5300</span></code></pre>
        </div>

        <h3 class="mt-6 text-lg font-semibold text-white">Using a reverse proxy (a domain with HTTPS)</h3>
        <p class="mt-2 leading-relaxed">On a public domain, one command installs Caddy and serves HTTPS with automatic, auto-renewing Let's Encrypt certificates. This runs the production build, so Caddy routes <code class="rounded bg-ink-800 px-1 py-0.5 text-xs">/api</code> + <code class="rounded bg-ink-800 px-1 py-0.5 text-xs">/ws</code> to the API and everything else to the UI:</p>
        <div class="mt-4 overflow-hidden rounded-xl border border-ink-700 bg-ink-950">
          <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-slate-300"><code>./bin/setup-tls workspace.yourdomain.com</code></pre>
        </div>
        <p class="mt-3 leading-relaxed text-sm">Already running nginx? Use <code class="rounded bg-ink-800 px-1 py-0.5 text-xs">bin/print-proxy nginx &lt;domain&gt;</code> to print a config to add (then <code class="rounded bg-ink-800 px-1 py-0.5 text-xs">certbot</code>) instead — it won't fight your proxy for ports 80/443.</p>
      </section>

      <!-- Projects -->
      <section id="projects">
        <h2 class="text-2xl font-bold text-white">Projects</h2>
        <p class="mt-3 leading-relaxed">A project in Workspace maps to a directory on your server. Add a project by clicking "+ Add project" in the left sidebar and providing the path.</p>
        <p class="mt-3 leading-relaxed">Projects group all your work: terminals, VS Code, git, plans, and MCP tools are all scoped to the active project. Switching projects switches context — your tabs and sessions are saved and restored automatically.</p>
        <div class="mt-5 rounded-xl border border-ink-700 bg-ink-900/50 p-6">
          <div class="text-sm font-semibold text-white">Typical project layout</div>
          <pre class="mt-3 font-mono text-sm text-slate-400"><code>PROJECTS_ROOT/
  my-api/          ← one project
  my-frontend/     ← another project
  docs-site/       ← another project</code></pre>
        </div>
      </section>

      <!-- Plans & Tickets -->
      <section id="plans">
        <h2 class="text-2xl font-bold text-white">Plans & Tickets</h2>
        <p class="mt-3 leading-relaxed">Each project has a built-in ticket board. Tickets are stored in Workspace's Postgres database — no external service required.</p>
        <p class="mt-3 leading-relaxed">Use the planning chat to have the AI analyse the codebase and generate a prioritised backlog. Tickets can be assigned to agents (a CLI coding agent such as Claude Code) which implement them automatically in a git worktree in the background.</p>
        <ul class="mt-5 space-y-2 text-sm">
          {#each [
            'Kanban board view: To Do → Working → Needs You → Done',
            'Epics group related tickets with a shared progress bar',
            'Each ticket tracks which model and agent role implemented it',
            'Open a PR directly from the ticket with one click',
          ] as item}
            <li class="flex gap-3">
              <span class="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ws-400 shadow-[0_0_6px_currentColor]"></span>
              {item}
            </li>
          {/each}
        </ul>
      </section>

    </div>
  </div>
</Section>
