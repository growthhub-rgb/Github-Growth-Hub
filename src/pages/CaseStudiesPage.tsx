import React, { useState } from 'react';
import { PageId, CaseStudy } from '../types';
import { CASE_STUDIES } from '../data/mockData';
import { CodeBlock } from '../components/CodeBlock';
import {
  Star,
  GitBranch,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Award,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface CaseStudiesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  onNavigate,
  onOpenAuditModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedStudyId, setExpandedStudyId] = useState<string | null>('vectorflow');

  const categories = ['All', 'AI & Data', 'Fullstack & Web', 'CLI & Systems', 'Developer Tools'];

  const filteredStudies =
    selectedCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedStudyId(expandedStudyId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
          Verified Case Studies
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          How 4 Engineering Teams Achieved Compounding GitHub Traction
        </h1>
        <p className="text-base text-[#9CA3AF] leading-relaxed">
          Zero bots, zero purchased engagement. Every star and contributor documented below was earned through precise repository architecture, clear technical communication, and targeted developer distribution.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-[#22C55E]/20 text-[#4ADE80] border border-[#22C55E]/40 font-semibold shadow-sm'
                : 'bg-[#111827] text-[#9CA3AF] hover:text-white border border-[#1F2937]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Case Studies List */}
      <div className="space-y-10">
        {filteredStudies.map((study) => {
          const isExpanded = expandedStudyId === study.id;
          return (
            <div
              key={study.id}
              className="rounded-2xl border border-[#1F2937] bg-[#111827] overflow-hidden shadow-xl"
            >
              {/* Top Banner Overview */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs">
                      <span
                        className="w-2.5 h-2.5 rounded-full inline-block"
                        style={{ backgroundColor: study.languageColor }}
                      />
                      <span className="font-mono text-[#9CA3AF]">
                        {study.language} · {study.category}
                      </span>
                      <span>·</span>
                      <span className="text-[#6B7280]">
                        {study.durationMonths} Month Trajectory
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                      <span>{study.owner}</span>
                      <span className="text-[#4B5563]">/</span>
                      <span className="text-[#58A6FF]">{study.repoName}</span>
                    </h2>

                    <p className="text-sm text-[#9CA3AF] max-w-2xl leading-relaxed">
                      {study.tagline}
                    </p>
                  </div>

                  {/* Quantitative Metric Pill Box */}
                  <div className="flex items-center gap-6 p-4 rounded-xl bg-[#0D1117] border border-[#1F2937] self-start lg:self-auto">
                    <div>
                      <div className="text-[11px] text-[#9CA3AF]">Starting Stars</div>
                      <div className="font-mono text-xl font-bold text-[#6B7280] tabular-nums">
                        {study.beforeStars}
                      </div>
                    </div>
                    <div className="text-[#4B5563]">→</div>
                    <div>
                      <div className="text-[11px] text-[#22C55E] font-medium">Final Stars</div>
                      <div className="font-mono text-2xl font-bold text-white tabular-nums">
                        {study.afterStars.toLocaleString()}
                      </div>
                    </div>
                    <div className="pl-4 border-l border-[#1F2937]">
                      <div className="text-[11px] text-[#9CA3AF]">Velocity Surge</div>
                      <div className="font-mono text-lg font-bold text-[#4ADE80] tabular-nums">
                        {study.featuredStat}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Wins Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {study.keyWins.map((win, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#0D1117] border border-[#1F2937] flex items-start gap-2.5 text-xs text-[#D1D5DB]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                      <span>{win}</span>
                    </div>
                  ))}
                </div>

                {/* Maintainer Testimonial */}
                <div className="p-4 rounded-xl bg-[#0D1117] border border-[#1F2937] text-xs space-y-2">
                  <div className="text-[#D1D5DB] italic leading-relaxed">
                    "{study.quote.text}"
                  </div>
                  <div className="flex items-center justify-between text-[#9CA3AF] text-[11px] not-italic pt-1 border-t border-[#1F2937]/50">
                    <span className="font-semibold text-white">{study.quote.author}</span>
                    <span>{study.quote.role}</span>
                  </div>
                </div>

                {/* Launch Channels Used */}
                <div className="flex items-center gap-2 text-xs text-[#9CA3AF] flex-wrap">
                  <span className="font-semibold text-white">Channels:</span>
                  {study.launchChannels.map((ch, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#161B22] border border-[#30363D] font-mono text-[11px]"
                    >
                      {ch}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expand / Collapse Details Drawer */}
              <div className="border-t border-[#1F2937] bg-[#0D1117] px-6 py-3 flex items-center justify-between">
                <button
                  onClick={() => toggleExpand(study.id)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#22C55E] hover:text-[#4ADE80] transition-colors"
                >
                  <span>{isExpanded ? 'Hide Before & After Teardown' : 'View Before & After README Teardown'}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <button
                  onClick={onOpenAuditModal}
                  className="text-xs text-[#9CA3AF] hover:text-white transition-colors"
                >
                  Request Similar Audit →
                </button>
              </div>

              {isExpanded && (
                <div className="p-6 bg-[#090D13] border-t border-[#1F2937] space-y-6 animate-in fade-in duration-150">
                  <div className="text-xs font-semibold uppercase tracking-wider text-white">
                    README Architecture Comparison
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Before */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-[#EF4444]">
                        <span className="font-semibold">Before Audit (High Drop-off)</span>
                        <span className="font-mono text-[11px]">Bounce Rate: 82%</span>
                      </div>
                      <CodeBlock
                        code={study.readmeChanges.beforeHighlight}
                        filename="README.md (Before)"
                        language="markdown"
                      />
                    </div>

                    {/* After */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-[#22C55E]">
                        <span className="font-semibold">After Audit (High Conversion)</span>
                        <span className="font-mono text-[11px] text-[#4ADE80]">Bounce Rate: 24%</span>
                      </div>
                      <CodeBlock
                        code={study.readmeChanges.afterHighlight}
                        filename="README.md (After - Growth Hub)"
                        language="markdown"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Block */}
      <div className="rounded-2xl border border-[#22C55E]/30 bg-[#111827] p-8 sm:p-12 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          Ready to Turn Your Repository Into the Next Success Story?
        </h3>
        <p className="text-sm text-[#9CA3AF] max-w-xl mx-auto leading-relaxed">
          We perform the entire audit for free. Discover the specific friction points preventing developers from starring and adopting your project.
        </p>
        <button
          onClick={onOpenAuditModal}
          className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#0B0F14] bg-[#22C55E] hover:bg-[#16A34A] rounded-xl transition-colors shadow-lg"
        >
          <span>Claim Free Repository Audit</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
