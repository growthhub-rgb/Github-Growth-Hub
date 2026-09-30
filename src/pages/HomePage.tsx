import React, { useState } from 'react';
import { PageId } from '../types';
import { RepoVisualizer } from '../components/RepoVisualizer';
import { StarVelocityChart } from '../components/StarVelocityChart';
import { CASE_STUDIES } from '../data/mockData';
import {
  ArrowRight,
  TrendingUp,
  Search,
  Users,
  Layers,
  Sparkles,
  GitBranch,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Zap,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenAuditModal }) => {
  const [quickAuditInput, setQuickAuditInput] = useState('');

  const handleQuickAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickAuditInput.trim()) {
      onNavigate('audits');
    }
  };

  return (
    <div className="space-y-24 py-8">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#22C55E]/30 text-xs text-[#22C55E]">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
              <span className="font-medium">2026 Repository Visibility Engine</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              Turn Your Repositories Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] via-[#4ADE80] to-[#86EFAC]">Developer Magnets</span>
            </h1>

            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-xl">
              GitHub Growth Hub helps developers, open-source creators, startups, and indie hackers increase repository visibility, master GitHub search, and attract active, high-value contributors.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenAuditModal}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#0B0F14] bg-[#22C55E] hover:bg-[#16A34A] rounded-xl transition-all shadow-[0_0_28px_rgba(34,197,94,0.3)] hover:shadow-[0_0_36px_rgba(34,197,94,0.45)] whitespace-nowrap"
              >
                <span>Get A Free Visibility Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('case-studies')}
                className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-white hover:text-[#22C55E] bg-[#111827] hover:bg-[#161B22] border border-[#1F2937] hover:border-[#22C55E]/40 rounded-xl transition-colors whitespace-nowrap"
              >
                <span>View Case Studies</span>
                <ChevronRight className="w-4 h-4 text-[#9CA3AF]" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-[#1F2937] flex items-center gap-6 text-xs text-[#6B7280]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                <span>Zero Bot Engagement</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#22C55E]" />
                <span>100% Organic Developer Adoption</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code-Inspired Interactive Visual */}
          <div className="lg:col-span-6">
            <RepoVisualizer />
          </div>
        </div>
      </section>

      {/* 2. Proof Metrics Ribbon (Tabular Figures) */}
      <section className="border-y border-[#1F2937] bg-[#0E131B]/70 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#1F2937]">
            <div className="pt-4 md:pt-0">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-white tabular-nums">
                18,400+
              </div>
              <div className="text-xs text-[#9CA3AF] mt-1">
                Organic Stars Generated
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-[#4ADE80] tabular-nums">
                4.2M+
              </div>
              <div className="text-xs text-[#9CA3AF] mt-1">
                Developer Impressions
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-white tabular-nums">
                94%
              </div>
              <div className="text-xs text-[#9CA3AF] mt-1">
                Contributor Retention Rate
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-white tabular-nums">
                120+
              </div>
              <div className="text-xs text-[#9CA3AF] mt-1">
                Repositories Accelerated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
            Core Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How We Make Your Repository Irresistible
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] max-w-2xl leading-relaxed">
            Developers decide whether to star, install, or bounce in under 5 seconds. We optimize every touchpoint in the open-source developer funnel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Bento span 2 */}
          <div className="md:col-span-2 rounded-2xl border border-[#1F2937] bg-[#111827] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#22C55E]/40 transition-colors">
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                01. First-Fold README Architecture
              </h3>
              <p className="text-sm text-[#9CA3AF] max-w-xl leading-relaxed">
                Most READMEs fail because they bury the value proposition beneath build instructions. We craft ruthless 10-second hooks, 60-second copy-pasteable execution snippets, and custom high-contrast architecture diagrams.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#D1D5DB] font-mono">
                <span className="px-2.5 py-1 rounded bg-[#0D1117] border border-[#1F2937]">
                  10-Second Hook
                </span>
                <span className="px-2.5 py-1 rounded bg-[#0D1117] border border-[#1F2937]">
                  One-Line Quickstart
                </span>
                <span className="px-2.5 py-1 rounded bg-[#0D1117] border border-[#1F2937]">
                  SVG Architecture Schematics
                </span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#1F2937] flex items-center justify-between text-xs">
              <span className="text-[#9CA3AF]">Bounce rate reduction across clients</span>
              <span className="font-mono text-[#4ADE80] font-semibold">Average -68%</span>
            </div>
          </div>

          {/* Card 2: GitHub Algorithm & Topics SEO */}
          <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-8 flex flex-col justify-between group hover:border-[#22C55E]/40 transition-colors">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center text-[#60A5FA]">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                02. GitHub Search & Topics SEO
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                GitHub’s internal search engine processes millions of technical queries weekly. We reverse-engineer query intent to rank your repository for primary keywords.
              </p>
              <div className="space-y-2 text-xs text-[#9CA3AF]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>Topic cluster tagging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>Release cadence signals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>Explore page curation triggers</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#22C55E] hover:text-[#4ADE80] transition-colors"
            >
              <span>Explore Search Strategy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Multi-Channel Launch */}
          <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-8 flex flex-col justify-between group hover:border-[#22C55E]/40 transition-colors">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#FBBF24]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                03. High-Impact Developer Launches
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                We coordinate disciplined launches across Hacker News Show HN, specialized subreddits, and top developer email newsletters to create dense, organic star velocity.
              </p>
              <div className="p-3 rounded-lg bg-[#0D1117] border border-[#1F2937] text-xs font-mono text-[#D1D5DB]">
                <span>Show HN: VectorFlow (#2 Frontpage)</span>
                <div className="text-[10px] text-[#22C55E] mt-1">+1,200 stars in 18 hours</div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('case-studies')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#22C55E] hover:text-[#4ADE80] transition-colors"
            >
              <span>Read Launch Breakdowns</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4: Bento span 2 - Contributor Engine */}
          <div className="md:col-span-2 rounded-2xl border border-[#1F2937] bg-[#111827] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#22C55E]/40 transition-colors">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center text-[#A78BFA]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                04. Contributor Pipelines & Enterprise Readiness
              </h3>
              <p className="text-sm text-[#9CA3AF] max-w-xl leading-relaxed">
                Turn passive stars into active contributors who handle bug fixes, translations, and feature additions. We install automated triage systems, good first issue tagging, and enterprise sponsorship tiers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#0D1117] border border-[#1F2937]">
                  <div className="text-white font-medium">Issue & PR Automation</div>
                  <div className="text-[#9CA3AF] text-[11px]">Structured templates eliminate vague bug reports</div>
                </div>
                <div className="p-3 rounded-lg bg-[#0D1117] border border-[#1F2937]">
                  <div className="text-white font-medium">Enterprise Sponsors Funnel</div>
                  <div className="text-[#9CA3AF] text-[11px]">FUNDING.yml and corporate sponsorship tiers</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#1F2937] flex items-center justify-between text-xs">
              <span className="text-[#9CA3AF]">Average community contributions</span>
              <span className="font-mono text-[#4ADE80] font-semibold">+340% within 60 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Star Velocity Chart Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StarVelocityChart />
      </section>

      {/* 5. Featured Case Study Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
              Demonstrated Results
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-1">
              Case Studies in Organic Growth
            </h2>
          </div>
          <button
            onClick={() => onNavigate('case-studies')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#22C55E] hover:text-[#4ADE80] transition-colors"
          >
            <span>View all 4 in-depth case studies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.slice(0, 2).map((study) => (
            <div
              key={study.id}
              className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6 space-y-5 hover:border-[#22C55E]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ backgroundColor: study.languageColor }}
                    />
                    <span className="text-xs font-mono text-[#9CA3AF]">
                      {study.language} · {study.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#4ADE80] bg-[#22C55E]/10 border border-[#22C55E]/30 px-2 py-0.5 rounded">
                    {study.featuredStat} {study.featuredStatLabel}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {study.owner} / {study.repoName}
                  </h3>
                  <p className="text-xs text-[#9CA3AF] mt-1 leading-relaxed">
                    {study.tagline}
                  </p>
                </div>

                {/* Quote */}
                <div className="p-4 rounded-xl bg-[#0D1117] border border-[#1F2937] text-xs text-[#D1D5DB] italic leading-relaxed">
                  "{study.quote.text}"
                  <div className="mt-2 text-[#9CA3AF] not-italic font-sans flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-white">{study.quote.author}</span>
                    <span>{study.quote.role}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1F2937] flex items-center justify-between text-xs">
                <div className="font-mono text-[#9CA3AF] tabular-nums">
                  <span className="text-[#6B7280]">{study.beforeStars} stars</span>
                  <span className="mx-2">→</span>
                  <span className="text-white font-bold">{study.afterStars.toLocaleString()} stars</span>
                </div>
                <button
                  onClick={() => onNavigate('case-studies')}
                  className="text-[#22C55E] hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <span>Read Breakdown</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Quick Interactive Audit Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#111827] via-[#161B22] to-[#111827] border border-[#22C55E]/40 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#22C55E]">
              Instant Teardown
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Curious Where Your Repository Is Leaking Stars?
            </h2>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              Use our interactive visibility engine to evaluate your README, social card, topic tags, and developer onboarding in under 10 seconds.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <form onSubmit={handleQuickAudit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="github.com/owner/repository"
                value={quickAuditInput}
                onChange={(e) => setQuickAuditInput(e.target.value)}
                className="flex-1 px-4 py-3 text-xs bg-[#0D1117] border border-[#1F2937] rounded-xl text-white placeholder-[#6B7280] font-mono focus:outline-none focus:border-[#22C55E]"
              />
              <button
                type="submit"
                className="px-5 py-3 text-xs font-semibold text-[#0B0F14] bg-[#22C55E] hover:bg-[#16A34A] rounded-xl transition-colors whitespace-nowrap"
              >
                Inspect Repository
              </button>
            </form>
            <div className="flex items-center justify-center gap-2 text-[11px] text-[#6B7280] mt-3">
              <span>Free instant check</span>
              <span>·</span>
              <span>Zero credentials required</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
