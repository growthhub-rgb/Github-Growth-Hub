import React from 'react';
import { PageId } from '../types';
import {
  ShieldCheck,
  GitBranch,
  Terminal,
  Heart,
  Target,
  ArrowRight,
  Code,
  Users,
  Award,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenAuditModal,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
          Our Mission & Philosophy
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Leveling the Playing Field for Brilliant Open-Source Engineers
        </h1>
        <p className="text-base text-[#9CA3AF] leading-relaxed">
          The best code does not automatically win. We exist to ensure that exceptional open-source libraries and developer tools get the global recognition and adoption they deserve.
        </p>
      </div>

      {/* The Story & Origin */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5 text-sm text-[#9CA3AF] leading-relaxed">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Why We Founded GitHub Growth Hub
          </h2>
          <p>
            Every week, brilliant software engineers spend hundreds of unpaid hours crafting high-performance libraries, elegant CLI utilities, and revolutionary developer frameworks. Yet 95% of these repositories languish under 50 stars, unseen by the developers who desperately need them.
          </p>
          <p>
            Meanwhile, hype-heavy projects with superficial code capture thousands of stars simply because their authors understand marketing, first-impression visual design, and algorithmic timing.
          </p>
          <p>
            We founded GitHub Growth Hub to close that gap. We combine deep systems engineering knowledge with high-conversion developer copywriting and algorithmic distribution to give serious open-source tools an undeniable voice.
          </p>
        </div>

        <div className="lg:col-span-5 rounded-2xl border border-[#1F2937] bg-[#111827] p-6 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#22C55E]">
            <Terminal className="w-4 h-4" />
            <span>git-growth-manifesto.md</span>
          </div>
          <div className="space-y-3 text-xs text-[#D1D5DB] font-mono leading-relaxed bg-[#0D1117] p-4 rounded-xl border border-[#1F2937]">
            <p className="text-[#4ADE80]"># The Developer Traction Principle</p>
            <p>1. Great code without clear onboarding is dead code.</p>
            <p>2. A developer will decide to install or bounce in 5 seconds.</p>
            <p>3. Stars are vanity unless they translate to active users and PR contributors.</p>
            <p>4. Authenticity is the only defensible developer marketing strategy.</p>
          </div>
        </div>
      </div>

      {/* The Strict Zero-Bot Pledge */}
      <div className="rounded-2xl border border-[#22C55E]/40 bg-[#111827] p-8 sm:p-10 space-y-6 shadow-2xl relative overflow-hidden">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E]">
            <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              The Strict Zero-Bot & Integrity Pledge
            </h3>
            <p className="text-xs text-[#9CA3AF]">
              Why artificial engagement is toxic to developer ecosystems
            </p>
          </div>
        </div>

        <p className="text-sm text-[#D1D5DB] leading-relaxed max-w-3xl">
          We categorically reject star farms, bot networks, click rings, and synthetic upvotes. Buying GitHub stars violates GitHub's Terms of Service, ruins maintainer reputation, and results in zero community pull requests, zero bug reports, and zero enterprise users.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-[#0D1117] border border-[#1F2937] space-y-1.5">
            <div className="text-xs font-bold text-white">100% Real Developers</div>
            <p className="text-xs text-[#9CA3AF]">
              Every star earned through our campaigns comes from genuine engineers discovering your tool.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#0D1117] border border-[#1F2937] space-y-1.5">
            <div className="text-xs font-bold text-white">ToS Compliance</div>
            <p className="text-xs text-[#9CA3AF]">
              All strategies comply with GitHub, Hacker News, and Reddit community policies.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#0D1117] border border-[#1F2937] space-y-1.5">
            <div className="text-xs font-bold text-white">Long-Term Retention</div>
            <p className="text-xs text-[#9CA3AF]">
              We build contributor funnels and documentation that keep users active for years.
            </p>
          </div>
        </div>
      </div>

      {/* The 5 Pillars of Repository Visibility */}
      <div className="space-y-6">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
            Framework
          </div>
          <h2 className="text-2xl font-bold text-white mt-1">
            The 5 Pillars of Open-Source Repository Visibility
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-[#1F2937] bg-[#111827] space-y-3">
            <div className="text-xs font-mono text-[#22C55E]">PILLAR 01</div>
            <h3 className="text-base font-bold text-white">First-Fold README Hook</h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Clear, unmistakable explanation of the core problem, sub-60-second copy-paste execution, and visual schematics.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#1F2937] bg-[#111827] space-y-3">
            <div className="text-xs font-mono text-[#22C55E]">PILLAR 02</div>
            <h3 className="text-base font-bold text-white">GitHub Search & Topics SEO</h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Exact keyword clustering across repo description, topic tags, and release notes to capture organic search intent.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#1F2937] bg-[#111827] space-y-3">
            <div className="text-xs font-mono text-[#22C55E]">PILLAR 03</div>
            <h3 className="text-base font-bold text-white">Frictionless Quickstart UX</h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Eliminating multi-step compilation friction via pre-compiled binaries, Homebrew taps, Docker images, and browser playgrounds.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#1F2937] bg-[#111827] space-y-3">
            <div className="text-xs font-mono text-[#22C55E]">PILLAR 04</div>
            <h3 className="text-base font-bold text-white">Social Preview & Visual Polish</h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Branded 1280x640 OpenGraph social cards, terminal SVG recordings, and architecture schematics that stand out on social feeds.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#1F2937] bg-[#111827] space-y-3">
            <div className="text-xs font-mono text-[#22C55E]">PILLAR 05</div>
            <h3 className="text-base font-bold text-white">Synchronized Distribution</h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Precision launch timing across Hacker News Show HN, specialized subreddits, and technical newsletters to trigger GitHub Trending.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#1F2937] bg-[#111827] space-y-3 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#22C55E]">OUTCOME</div>
              <h3 className="text-base font-bold text-white">Sustainable Adoption</h3>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                A flywheel of active contributors, corporate sponsors, and organic stars that compound over time.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#22C55E] hover:text-[#4ADE80]"
            >
              <span>Explore Sprints</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Action Banner */}
      <div className="rounded-2xl border border-[#1F2937] bg-[#0E131B] p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">
          Ready to Work With Engineers Who Speak Your Language?
        </h3>
        <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-lg mx-auto">
          We don't do marketing buzzwords. We review code, craft technical documentation, and build organic developer traction.
        </p>
        <button
          onClick={onOpenAuditModal}
          className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#0B0F14] bg-[#22C55E] hover:bg-[#16A34A] rounded-xl transition-colors shadow-lg"
        >
          <span>Get Your Free Visibility Review</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
