import { CaseStudy, ServiceTier, FaqItem, ReadmeTemplate, AuditReport } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'vectorflow',
    repoName: 'vectorflow',
    owner: 'tensor-ops',
    tagline: 'High-throughput embedded vector index for local LLM inference engines',
    category: 'AI & Data',
    language: 'Rust',
    languageColor: '#DEA584',
    beforeStars: 142,
    afterStars: 5240,
    durationMonths: 3,
    featuredStat: '+3,590%',
    featuredStatLabel: 'Star Velocity in 90 Days',
    quote: {
      text: 'Our Rust vector database had incredible performance, but nobody knew we existed. GitHub Growth Hub re-architected our README to lead with a 15-second executable benchmark, rewrote our topics taxonomy, and timed our Show HN launch to perfection. We hit #1 overall on GitHub Trending.',
      author: 'Nikolay Sorenson',
      role: 'Creator & Lead Maintainer',
      avatarInitials: 'NS',
    },
    keyWins: [
      '#1 GitHub Trending overall for 48 consecutive hours',
      '48 merged community PRs from external contributors',
      'Adopted by 3 enterprise AI startups for production RAG pipelines',
      'Featured on Console.dev, Rust Weekly, and Bytes',
    ],
    launchChannels: ['Hacker News Show HN (#2 frontpage)', 'Reddit r/rust & r/MachineLearning', 'Changelog Podcast mention'],
    readmeChanges: {
      beforeHighlight: `# VectorFlow
An engine for vector embeddings.
Build instructions:
git clone ...
cargo build --release
Usage: refer to /examples folder.`,
      afterHighlight: `## VectorFlow
⚡ **Zero-dependency vector search engine delivering 180k QPS on Apple Silicon and Linux x86.**

\`\`\`bash
# 1-line instant benchmark (1M vectors in 4.2s)
cargo install vectorflow-cli && vectorflow benchmark --size 1m
\`\`\`

- **Sub-millisecond P99 latency** via SIMD AVX-512 & NEON intrinsics
- **Single static binary**, 0 external dependencies
- **Native bindings**: Python, TypeScript, Go, C#`,
    },
  },
  {
    id: 'hyperstate',
    repoName: 'hyperstate',
    owner: 'reactive-kit',
    tagline: 'Predictable atomic state container for TypeScript with zero boilerplate',
    category: 'Fullstack & Web',
    language: 'TypeScript',
    languageColor: '#3178C6',
    beforeStars: 28,
    afterStars: 2180,
    durationMonths: 2,
    featuredStat: '2.1k',
    featuredStatLabel: 'Organic Stars in 6 Weeks',
    quote: {
      text: 'We were competing against giants like Redux, Zustand, and MobX. Growth Hub helped us define an undeniable niche: state management optimized for micro-frontends with zero bundle baggage. The interactive stackblitz demo in the README doubled our conversion rate.',
      author: 'Elena Rostova',
      role: 'Co-founder & Frontend Architect',
      avatarInitials: 'ER',
    },
    keyWins: [
      'Frontpage #3 on Hacker News with 320+ comments',
      'Featured as headline tool in JavaScript Weekly #642',
      'Over 22,000 monthly npm downloads within 60 days',
      'Zero bot stars — 100% organic developer interest',
    ],
    launchChannels: ['Hacker News (#3)', 'Reddit r/javascript', 'Twitter/X Tech influencer amplification'],
    readmeChanges: {
      beforeHighlight: `# Hyperstate
State library for JS apps.
npm install hyperstate
Check index.d.ts for API details.`,
      afterHighlight: `## HyperState
🎯 **Atomic state management for modern TypeScript under 680 bytes.**

\`\`\`ts
import { createStore } from 'hyperstate';

const count = createStore(0);
count.subscribe((val) => console.log('count:', val));
count.set((prev) => prev + 1); // 680B gzipped, zero dependencies
\`\`\`

[![Live Interactive Sandbox](https://img.shields.io/badge/StackBlitz-Open_Playground-22c55e?logo=stackblitz)](https://example.com)
`,
    },
  },
  {
    id: 'authshield',
    repoName: 'authshield',
    owner: 'defense-labs',
    tagline: 'Self-hosted zero-trust identity and privilege escalation proxy',
    category: 'CLI & Systems',
    language: 'Go',
    languageColor: '#00ADD8',
    beforeStars: 64,
    afterStars: 6920,
    durationMonths: 4,
    featuredStat: '3 Pilots',
    featuredStatLabel: 'Enterprise Pilot Inquiries Closed',
    quote: {
      text: 'Most security projects look intimidating and tedious to configure. GitHub Growth Hub created a single terminal GIF demo that showed our zero-trust tunnel initializing in 8 seconds. That visual alone drove thousands of GitHub stars and legitimate enterprise pilot inquiries.',
      author: 'Marcus Vance',
      role: 'Principal Security Engineer',
      avatarInitials: 'MV',
    },
    keyWins: [
      '#1 GitHub Trending in Go for 5 days',
      '14 enterprise DevSecOps teams deployed proof-of-concepts',
      'Invited to present at KubeCon and DEF CON Cloud Village',
      'Grew active Discord community from 12 to 1,480 developers',
    ],
    launchChannels: ['Hacker News Show HN', 'Lobste.rs Front Page', 'Reddit r/netsec & r/golang'],
    readmeChanges: {
      beforeHighlight: `# authshield
Go daemon for perimeter access.
Configuration:
Edit config.yaml with mutual TLS keys.`,
      afterHighlight: `## AuthShield
🛡️ **Self-hosted Zero Trust access proxy. Protect internal services without maintaining a VPN.**

\`\`\`bash
# Spin up ephemeral secure gateway with Let's Encrypt TLS
curl -sSL https://get.authshield.dev | sh
authshield tunnel --to localhost:8080 --domain preview.internal.team
\`\`\`

- ✅ **WireGuard + mTLS core** with sub-5ms overhead
- ✅ **SSO out-of-the-box**: Google, GitHub, Okta, Authentik
- ✅ **Single Go binary** — zero Docker requirement for edge nodes`,
    },
  },
  {
    id: 'queryforge',
    repoName: 'queryforge',
    owner: 'db-craft',
    tagline: 'Type-safe SQL dialect compiler with visual schema inspector',
    category: 'Developer Tools',
    language: 'TypeScript',
    languageColor: '#3178C6',
    beforeStars: 95,
    afterStars: 3410,
    durationMonths: 2,
    featuredStat: '+420%',
    featuredStatLabel: 'NPM Download Growth',
    quote: {
      text: 'GitHub Growth Hub systematically fixed our issues pipeline, created standardized CONTRIBUTING guides, and added GitHub issue templates. Contributors started solving issues without us hand-holding them. Our star growth went exponential because users trusted the repo was maintained.',
      author: 'Akira Tanaka',
      role: 'Creator & Maintainer',
      avatarInitials: 'AT',
    },
    keyWins: [
      '18 recurring GitHub Sponsors supporting full-time maintenance',
      '+420% increase in weekly npm package downloads',
      'Adopted by Drizzle ORM and Supabase ecosystem guides',
      'Average issue resolution time dropped from 14 days to 36 hours',
    ],
    launchChannels: ['Hacker News', 'Reddit r/webdev', 'TypeScript Weekly'],
    readmeChanges: {
      beforeHighlight: `# QueryForge
SQL generation tool.
npm i queryforge
See docs for usage.`,
      afterHighlight: `## QueryForge
⚡ **Type-safe SQL compiler with instant schema diffing and visual AST tree.**

\`\`\`typescript
const query = forge
  .select('users', ['id', 'email', 'created_at'])
  .where('status', '=', 'active')
  .toSQL(); // Fully typed, zero SQL injection surface
\`\`\`

- **Compile-time query verification** against real PostgreSQL schemas
- **Zero runtime dependencies** (< 12kB bundle)`,
    },
  },
];

export const SERVICES_DATA: ServiceTier[] = [
  {
    id: 'foundation',
    title: 'README & Repository Architecture Overhaul',
    headline: 'Transform your repository into a clear, compelling developer product in 5 days.',
    description:
      'Developers spend an average of 4 seconds on a GitHub repo before bouncing. We reconstruct your repository from the top down: high-converting first-fold hook, copy-pasteable 60-second quickstarts, visual architecture assets, badges, and frictionless setup.',
    turnaroundTime: '5-Day Sprint',
    bestFor: 'Projects with solid tech that struggle with high bounce rates and low stars',
    deliverables: [
      'Complete README.md rewrite with proven developer hook architecture',
      'Custom SVG architecture diagram & branded social preview card (1280x640)',
      'Executable copy-paste quickstart & terminal demo preview',
      'Standardized Shields.io badge layout (build, license, version, stars)',
      'GitHub About section optimization (tagline, URL, and 12-topic SEO mapping)',
      'Automated issue templates (bug, feature request) & CONTRIBUTING.md guide',
    ],
    sampleArtifact: 'Interactive README overhaul + SVG visual architecture diagram',
  },
  {
    id: 'algorithmic-growth',
    title: 'GitHub Search & Trending Optimization',
    headline: 'Engineer your repository discoverability inside GitHub’s internal search and Trending algorithms.',
    description:
      'GitHub’s discovery engine uses specific signal weights: release frequency, topic clustering, star acceleration velocity, and search index density. We audit your codebase structure and optimize your repository to rank for high-intent search queries.',
    turnaroundTime: '10-Day Sprint',
    bestFor: 'Repositories ready to rank in GitHub search and break into GitHub Trending',
    recommended: true,
    deliverables: [
      'Comprehensive GitHub Search Keyword & Topic taxonomy strategy',
      'Star acceleration cadence modeling (daily velocity thresholds for Trending)',
      'GitHub Releases & automated changelog workflow (.github/workflows)',
      'GitHub Discussions & Community profile badge setup',
      'GitHub Topics competitor gap analysis & category dominance mapping',
      'GitHub Actions CI badge integration and build stability review',
    ],
    sampleArtifact: 'GitHub SEO taxonomy map + Trending velocity readiness scorecard',
  },
  {
    id: 'omni-launch',
    title: 'Developer Distribution & Launch Campaign',
    headline: 'Coordinate high-impact launches across Hacker News, Reddit, and elite dev newsletters.',
    description:
      'A great tool launched poorly fades into obscurity. We script, refine, and orchestrate authentic developer launches on Show HN, r/programming, specialized Discord servers, and developer newsletter sponsorships. Zero spam, zero bots — just genuine engineering respect.',
    turnaroundTime: '2-Week Campaign',
    bestFor: 'New major releases (v1.0, v2.0) or battle-tested tools seeking rapid star adoption',
    deliverables: [
      'Show HN post crafting: engineering-first title, compelling founder comment, objection handling',
      'Reddit distribution strategy for r/programming, r/webdev, r/rust, r/golang, etc.',
      'Outreach to top curated developer publications (Console.dev, Changelog, JavaScript Weekly)',
      'Launch day real-time monitoring and comment reply strategy',
      'Interactive Web Sandbox setup (StackBlitz / CodeSandbox / Stackblitz WebContainers)',
      'Post-launch retention funnel setup to turn casual star gazers into real users',
    ],
    sampleArtifact: 'Full Launch Kit: Show HN script, Reddit threads, pitch copy & timing schedule',
  },
  {
    id: 'enterprise-contributor',
    title: 'Contributor Engine & Sponsorship Readiness',
    headline: 'Convert casual stars into active contributors and recurring enterprise sponsors.',
    description:
      'Stars are vanity if your issues rot and maintainers burn out. We build a self-sustaining open-source contributor pipeline: Good First Issue labeling systems, automated triage bots, developer documentation portals, and enterprise sponsorship tiers.',
    turnaroundTime: '3-Week Program',
    bestFor: 'Popular repositories seeking sustainable maintenance and enterprise sponsorship',
    deliverables: [
      'Curated "good first issue" & "help wanted" triage system setup',
      'Automated contributor acknowledgment bots and PR welcome messages',
      'GitHub Sponsors tier structure (Individual vs Enterprise tier benefits)',
      'FUNDING.yml configuration and corporate backer showcase card',
      'Comprehensive security policy (SECURITY.md) and Code of Conduct',
      'Enterprise procurement-ready dual-license review & trademark guidelines',
    ],
    sampleArtifact: 'Contributor onboarding matrix + Enterprise GitHub Sponsors playbook',
  },
];

export const PRESET_AUDITS: Record<string, AuditReport> = {
  'typical-stagnant-repo': {
    repoUrl: 'https://github.com/developer/stagnant-tool',
    owner: 'developer',
    repo: 'stagnant-tool',
    stars: 34,
    forks: 4,
    overallScore: 48,
    grade: 'C',
    summary: 'High bounce rate likely due to missing quickstart, absent social preview card, zero GitHub topics, and code-only README with no visual hook.',
    categories: {
      firstFoldScore: 42,
      ogImageScore: 10,
      seoTopicsScore: 25,
      communityScore: 60,
      releasesScore: 65,
      dxScore: 45,
    },
    checks: [
      {
        id: 'f1',
        category: 'first-fold',
        categoryLabel: 'First Fold & README Hook',
        label: '10-Second Value Proposition',
        description: 'Does the top of the README clearly explain what problem this solves in one sentence?',
        impact: 'High',
        passed: false,
        recommendation: 'Replace generic title with an unmistakable 1-line statement highlighting real developer outcomes.',
      },
      {
        id: 'f2',
        category: 'first-fold',
        categoryLabel: 'First Fold & README Hook',
        label: 'Copy-Paste Quickstart Code Snippet',
        description: 'Can a developer run this tool in under 60 seconds from the README code block?',
        impact: 'High',
        passed: false,
        recommendation: 'Add a 3-line terminal snippet demonstrating instant CLI or package execution.',
      },
      {
        id: 'o1',
        category: 'og-image',
        categoryLabel: 'Social Preview Card',
        label: 'Custom Repository Social Preview Image',
        description: 'GitHub defaults to a generic gray box when shared on Twitter/X, Discord, or Slack.',
        impact: 'High',
        passed: false,
        recommendation: 'Upload a 1280x640 high-contrast branded OpenGraph visual in Repository Settings -> General.',
      },
      {
        id: 's1',
        category: 'seo-topics',
        categoryLabel: 'GitHub Topics & SEO',
        label: 'Repository Topic Tags (min 8)',
        description: 'GitHub Search indexing weighs repository topics heavily for explore page curation.',
        impact: 'High',
        passed: false,
        recommendation: 'Tag the repo with 8-12 precise topics matching developer search intent (e.g. cli, rust, devtools).',
      },
      {
        id: 'c1',
        category: 'community',
        categoryLabel: 'Community Readiness',
        label: 'CONTRIBUTING.md & Issue Templates',
        description: 'Guides external developers on how to report bugs, suggest features, or submit pull requests.',
        impact: 'Medium',
        passed: true,
        recommendation: 'Issue templates are present, but could benefit from a Good First Issue tag query link.',
      },
      {
        id: 'd1',
        category: 'dx',
        categoryLabel: 'Developer Experience',
        label: 'Interactive Sandbox or Demo Link',
        description: 'Allows developers to test the library directly in the browser without installing locally.',
        impact: 'Medium',
        passed: false,
        recommendation: 'Include a StackBlitz or live playground button right below the quickstart.',
      },
    ],
  },
  'optimized-growth-repo': {
    repoUrl: 'https://github.com/growth-engine/stellar-db',
    owner: 'growth-engine',
    repo: 'stellar-db',
    stars: 4890,
    forks: 340,
    overallScore: 94,
    grade: 'A+',
    summary: 'Exceptional repository architecture. Irresistible first-fold hook, instant copy-paste demo, branded social card, comprehensive topics, and active contributor pipeline.',
    categories: {
      firstFoldScore: 96,
      ogImageScore: 98,
      seoTopicsScore: 92,
      communityScore: 95,
      releasesScore: 90,
      dxScore: 93,
    },
    checks: [
      {
        id: 'f1',
        category: 'first-fold',
        categoryLabel: 'First Fold & README Hook',
        label: '10-Second Value Proposition',
        description: 'README hook immediately answers "Why does this exist?" with benchmark metrics.',
        impact: 'High',
        passed: true,
        recommendation: 'Perfect. Bold single-line value proposition with concrete speed comparisons.',
      },
      {
        id: 'f2',
        category: 'first-fold',
        categoryLabel: 'First Fold & README Hook',
        label: 'Copy-Paste Quickstart Code Snippet',
        description: 'Working 2-line snippet with syntax highlighting and expected console output.',
        impact: 'High',
        passed: true,
        recommendation: 'Optimal developer onboarding path under 30 seconds.',
      },
      {
        id: 'o1',
        category: 'og-image',
        categoryLabel: 'Social Preview Card',
        label: 'Custom Repository Social Preview Image',
        description: '1280x640 branded card with dark aesthetic, terminal snippet, and key capability list.',
        impact: 'High',
        passed: true,
        recommendation: 'Consistently generates 3.2x higher click-through on Twitter/X and Reddit threads.',
      },
      {
        id: 's1',
        category: 'seo-topics',
        categoryLabel: 'GitHub Topics & SEO',
        label: 'Repository Topic Tags (min 8)',
        description: '14 curated topics matching top-ranking keywords in developer search.',
        impact: 'High',
        passed: true,
        recommendation: 'Covers category keywords, language tags, and target use case queries.',
      },
      {
        id: 'c1',
        category: 'community',
        categoryLabel: 'Community Readiness',
        label: 'CONTRIBUTING.md & Issue Templates',
        description: 'Standardized PR checklists, code style requirements, and active Good First Issues.',
        impact: 'Medium',
        passed: true,
        recommendation: 'Healthy pipeline of external contributors handling 40% of maintenance workload.',
      },
      {
        id: 'd1',
        category: 'dx',
        categoryLabel: 'Developer Experience',
        label: 'Interactive Sandbox or Demo Link',
        description: 'One-click WebContainer demo opens directly in browser tab.',
        impact: 'Medium',
        passed: true,
        recommendation: 'Eliminates developer installation friction completely.',
      },
    ],
  },
};

export const README_TEMPLATES: ReadmeTemplate[] = [
  {
    id: 'cli-tool',
    name: 'High-Velocity CLI Tool',
    category: 'CLI & Systems',
    description: 'Engineered for instant terminal comprehension, ASCII/terminal demo GIF, single-line curl/brew install, and flags reference.',
    starsRecommended: '0 - 5,000+ stars',
    markdownContent: `<div align="center">

# ⚡ FastTunnel

**Instant, self-hosted WireGuard tunnels with automated Let's Encrypt TLS.**

[![Build](https://img.shields.io/github/actions/workflow/status/owner/fasttunnel/ci.yml?branch=main&style=flat-square&color=22c55e)](https://github.com)
[![Release](https://img.shields.io/github/v/release/owner/fasttunnel?style=flat-square&color=22c55e)](https://github.com)
[![License](https://img.shields.io/github/license/owner/fasttunnel?style=flat-square&color=6B7280)](LICENSE)

[Quickstart](#quickstart) · [Features](#features) · [Benchmarks](#benchmarks) · [Docs](#documentation)

</div>

---

### Quickstart

Install the single static binary in one command:

\`\`\`bash
# Install via Homebrew
brew install owner/tap/fasttunnel

# Or via install script
curl -sSL https://fasttunnel.dev/install.sh | bash

# Expose local port 3000 securely
fasttunnel share 3000
\`\`\`

### Why FastTunnel?

- **Zero configuration required**: Auto-provisions TLS certs in under 2 seconds
- **Single static binary**: Built in Rust, sub-12MB memory footprint
- **No account needed**: Completely decentralized and self-hostable
- **P99 latency < 3ms**: Kernel-level WireGuard routing

### CLI Usage

\`\`\`
Usage: fasttunnel [COMMAND] [OPTIONS]

Commands:
  share <PORT>       Expose local server to public URL
  daemon             Run the routing daemon in background
  status             View active tunnel statistics and bandwidth
\`\`\`
`,
  },
  {
    id: 'typescript-sdk',
    name: 'TypeScript Library / SDK',
    category: 'Frontend & Libraries',
    description: 'Prioritizes bundle size badges, TypeScript type safety demonstration, interactive playground link, and framework adapters.',
    starsRecommended: '50 - 10,000+ stars',
    markdownContent: `<div align="center">

# 🎯 MicroSchema

**Type-safe runtime validation under 420 bytes. 10x faster than Zod.**

[![npm](https://img.shields.io/npm/v/microschema?style=flat-square&color=22c55e)](https://npmjs.com)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/microschema?style=flat-square&color=22c55e)](https://bundlephobia.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square)](https://typescriptlang.org)

[Live Playground](https://stackblitz.com) · [Documentation](https://microschema.dev) · [Changelog](CHANGELOG.md)

</div>

---

### Installation

\`\`\`bash
npm install microschema
# or
pnpm add microschema
\`\`\`

### Example

\`\`\`typescript
import { s, type Infer } from 'microschema';

// 1. Define schema
const UserSchema = s.object({
  id: s.string().uuid(),
  email: s.string().email(),
  role: s.enum(['admin', 'member']),
});

// 2. Infer TypeScript type automatically
type User = Infer<typeof UserSchema>;

// 3. Validate with zero overhead
const result = UserSchema.parse(inputData);
\`\`\`

### Features

- 🪶 **Ultra Lightweight**: Under 420 bytes minzipped
- ⚡ **Blazing Performance**: JIT-compiled validator functions
- 🛡️ **Zero Dependencies**: Pure TypeScript with no external sub-trees
`,
  },
  {
    id: 'developer-saas',
    name: 'Open Core / Developer App',
    category: 'Full-Stack Apps',
    description: 'Structured for open-core architectures, docker-compose quickstarts, enterprise sponsorship, and self-hosted deployment guides.',
    starsRecommended: '100 - 20,000+ stars',
    markdownContent: `<div align="center">

# 🚢 ShipBoard

**The modern open-source feature flag and remote configuration engine.**

[![Docker Pulls](https://img.shields.io/docker/pulls/owner/shipboard?style=flat-square&color=22c55e)](https://hub.docker.com)
[![Discord](https://img.shields.io/discord/123456789?style=flat-square&color=5865F2&label=discord)](https://discord.gg)
[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL_3.0-blue.svg?style=flat-square)](LICENSE)

[Live Demo](https://demo.shipboard.dev) · [Documentation](https://docs.shipboard.dev) · [Self Hosting](#docker-compose)

</div>

---

### Run in 30 Seconds with Docker Compose

\`\`\`yaml
# docker-compose.yml
version: '3.8'
services:
  shipboard:
    image: shipboard/engine:latest
    ports:
      - "8080:8080"
    environment:
      - SECRET_KEY=replace-with-secure-random-string
\`\`\`

\`\`\`bash
docker compose up -d
# Open http://localhost:8080 in your browser
\`\`\`

### Key Capabilities

- **Zero-Latency Evaluation**: Edge SDKs evaluate flags locally in < 1ms
- **Multi-Tenant Permissions**: Granular RBAC and audit logging for security teams
- **Real-Time WebSockets**: Toggle feature rollouts globally in under 200ms
- **Self-Hosted & Privacy-Preserving**: No telemetry leaves your infrastructure
`,
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Ethics & Policy',
    question: 'Do you buy GitHub stars, use bots, or create fake accounts?',
    answer:
      'Absolutely NOT. We have a strict zero-bot, zero-fake-engagement policy. Buying GitHub stars is unethical, violates GitHub’s Terms of Service, risks having your repository or organization banned, and provides zero actual users. Our entire methodology is built on authentic developer engineering: professional README copywriting, high-converting visual assets, GitHub search & topics optimization, and real community distribution to genuine developers on Hacker News, Reddit, and curated newsletters.',
  },
  {
    id: 'faq-2',
    category: 'Trending & Distribution',
    question: 'How does a repository get on the GitHub Trending page?',
    answer:
      'GitHub’s Trending algorithm evaluates short-term star velocity relative to repository language and category over 24-hour and 7-day rolling windows. A repo gaining 80-150 organic stars in a 12-hour period will almost always break into the language-specific Trending list, which generates a compounding flywheel of organic discovery. We engineer the launch timing, announcement copy, and multi-channel synchronization so your organic stars arrive in concentrated, high-velocity windows.',
  },
  {
    id: 'faq-3',
    category: 'Audits & Strategy',
    question: 'What is included in the Free Repository Visibility Review?',
    answer:
      'Our free review is a thorough, human-conducted teardown of your repository across 6 core criteria: (1) First-Fold README Hook & 10-second comprehension, (2) Social Preview OpenGraph asset check, (3) GitHub Search keyword & topic tags taxonomy, (4) Developer Experience & Quickstart friction, (5) Contributor readiness & issue templates, and (6) Release cadence signals. You receive a structured report with prioritized fixes you can implement immediately.',
  },
  {
    id: 'faq-4',
    category: 'Audits & Strategy',
    question: 'My project is still in early alpha. Is it too early for Growth Hub?',
    answer:
      'Not at all. In fact, launching with pristine README architecture and clear positioning from day one prevents the common trap of getting "burned" on Hacker News with a confusing, unfinished pitch. Even if your API is evolving, setting up a crystal-clear problem statement, demo GIF, and roadmap attracts early design partners and open-source co-maintainers right away.',
  },
  {
    id: 'faq-5',
    category: 'Pricing & Process',
    question: 'How long does a typical repository overhaul sprint take?',
    answer:
      'Our core README & Repository Architecture sprint takes 5 business days from kickoff to final pull request. During this time, we write the new README, design the custom SVG architecture diagram, craft the 1280x640 social preview card, configure the GitHub topic tags, and open a ready-to-merge pull request on your repository.',
  },
  {
    id: 'faq-6',
    category: 'Trending & Distribution',
    question: 'What is the difference between GitHub SEO and traditional Google SEO?',
    answer:
      'Traditional Google SEO relies on backlinks, schema markup, and long-form web content. GitHub SEO operates inside GitHub’s internal search engine and recommendations graph. GitHub ranks repos based on exact keyword matches in the repo name, the About tagline, repository Topics, release note headlines, and recent commit velocity. We optimize specifically for how developers search inside GitHub’s search bar and Explore tabs.',
  },
  {
    id: 'faq-7',
    category: 'Pricing & Process',
    question: 'Do you offer ongoing retainer partnerships for devtool startups?',
    answer:
      'Yes. For venture-backed developer startups and commercial open-source companies (COSS), we offer ongoing Growth Retainers. These cover bi-weekly release launch coordination, community triage workflows, Hacker News & Reddit distribution, and technical developer advocacy content.',
  },
];
