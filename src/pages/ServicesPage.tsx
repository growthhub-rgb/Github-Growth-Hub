import React, { useState } from 'react';
import { PageId, ServiceTier } from '../types';
import { SERVICES_DATA } from '../data/mockData';
import {
  Layers,
  Search,
  TrendingUp,
  Users,
  CheckCircle2,
  Clock,
  Target,
  ArrowRight,
  Shield,
  FileCheck,
  Terminal,
  Sparkles,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenAuditModal,
}) => {
  const [selectedStage, setSelectedStage] = useState<'early' | 'stagnant' | 'scaling'>('stagnant');

  const getIconForTier = (id: string) => {
    switch (id) {
      case 'foundation':
        return <Layers className="w-5 h-5 text-[#22C55E]" />;
      case 'algorithmic-growth':
        return <Search className="w-5 h-5 text-[#60A5FA]" />;
      case 'omni-launch':
        return <TrendingUp className="w-5 h-5 text-[#FBBF24]" />;
      case 'enterprise-contributor':
        return <Users className="w-5 h-5 text-[#A78BFA]" />;
      default:
        return <Layers className="w-5 h-5 text-[#22C55E]" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
          Engineering Sprints & Retainers
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Systematic Growth Sprints for Open Source & Developer Tools
        </h1>
        <p className="text-base text-[#9CA3AF] leading-relaxed">
          We treat repository growth as a rigorous engineering discipline: first-principles copywriting, conversion-rate optimization for READMEs, search taxonomy design, and synchronized developer distribution.
        </p>
      </div>

      {/* Interactive Repository Stage Selector */}
      <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-white">
              Identify Your Repository's Current Stage
            </h2>
            <p className="text-xs text-[#9CA3AF]">
              Select your repository trajectory to see the high-leverage growth path.
            </p>
          </div>

          {/* Segmented Control */}
          <div className="flex items-center p-1 bg-[#0D1117] border border-[#1F2937] rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setSelectedStage('early')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                selectedStage === 'early'
                  ? 'bg-[#1F2937] text-white shadow-sm'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              Early Prototype (&lt; 50 stars)
            </button>
            <button
              onClick={() => setSelectedStage('stagnant')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                selectedStage === 'stagnant'
                  ? 'bg-[#22C55E]/20 text-[#4ADE80] border border-[#22C55E]/40 font-semibold'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              Stuck in Trough (50 - 500 stars)
            </button>
            <button
              onClick={() => setSelectedStage('scaling')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                selectedStage === 'scaling'
                  ? 'bg-[#1F2937] text-white shadow-sm'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              Scaling (500 - 5,000+ stars)
            </button>
          </div>
        </div>

        {/* Dynamic Stage Advice Box */}
        <div className="p-5 rounded-xl bg-[#0D1117] border border-[#1F2937] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div>
            <div className="font-semibold text-white mb-1">Diagnosis</div>
            <p className="text-[#9CA3AF] leading-relaxed">
              {selectedStage === 'early' &&
                'Your codebase is functional, but early visitors do not understand why your tool is 10x better than existing alternatives. Missing copy-paste quickstart causes high dropoff.'}
              {selectedStage === 'stagnant' &&
                'You experienced an initial burst of stars from friends or a tweet, but organic growth flatlined. GitHub search does not index your repository due to absent topics and weak README keyword clustering.'}
              {selectedStage === 'scaling' &&
                'You have solid star momentum, but you are drowning in unassigned issues and unanswered PRs. You need contributor onboarding pipelines and recurring enterprise sponsorships to avoid maintainer burnout.'}
            </p>
          </div>

          <div>
            <div className="font-semibold text-white mb-1">Primary Bottleneck</div>
            <div className="text-[#EF4444] font-mono text-[11px] mb-2">
              {selectedStage === 'early' && 'First-Fold Bounce Rate (> 75%)'}
              {selectedStage === 'stagnant' && 'Zero Algorithmic Search Discovery'}
              {selectedStage === 'scaling' && 'Contributor Churn & Maintenance Debt'}
            </div>
            <p className="text-[#9CA3AF]">
              {selectedStage === 'early' && 'Fixing this requires an immediate 10-second value prop rewrite.'}
              {selectedStage === 'stagnant' && 'Fixing this requires topic taxonomy tuning and a synchronized Show HN push.'}
              {selectedStage === 'scaling' && 'Fixing this requires automated PR triage and enterprise backer tiers.'}
            </p>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="font-semibold text-white mb-1">Recommended Sprint</div>
              <div className="text-[#22C55E] font-semibold text-sm">
                {selectedStage === 'early' && 'README Architecture Overhaul'}
                {selectedStage === 'stagnant' && 'GitHub SEO & Trending Sprint'}
                {selectedStage === 'scaling' && 'Contributor Engine & Sponsorship Program'}
              </div>
            </div>
            <button
              onClick={onOpenAuditModal}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#22C55E] hover:text-[#4ADE80]"
            >
              <span>Get Free Visibility Audit for this Stage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {SERVICES_DATA.map((tier) => (
          <div
            key={tier.id}
            className={`rounded-2xl border p-8 flex flex-col justify-between space-y-6 relative ${
              tier.recommended
                ? 'border-[#22C55E]/50 bg-[#111827] shadow-[0_0_30px_rgba(34,197,94,0.12)]'
                : 'border-[#1F2937] bg-[#111827]'
            }`}
          >
            {tier.recommended && (
              <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-[#22C55E] text-[#0B0F14] text-[11px] font-bold uppercase tracking-wider">
                Most Popular Sprint
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D1117] border border-[#1F2937] flex items-center justify-center">
                  {getIconForTier(tier.id)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{tier.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-[#9CA3AF] mt-0.5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#22C55E]" />
                      <span>{tier.turnaroundTime}</span>
                    </span>
                    <span>·</span>
                    <span className="text-[#D1D5DB]">{tier.bestFor}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                {tier.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-white">
                  Sprint Deliverables
                </div>
                <div className="space-y-2">
                  {tier.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#D1D5DB]">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Artifact Highlight */}
              <div className="p-3.5 rounded-xl bg-[#0D1117] border border-[#1F2937] text-xs space-y-1">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>Key Sprint Output:</span>
                </div>
                <p className="text-[#9CA3AF] font-mono text-[11px]">
                  {tier.sampleArtifact}
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="pt-4 border-t border-[#1F2937] flex items-center justify-between">
              <button
                onClick={onOpenAuditModal}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-[#0B0F14] bg-[#22C55E] hover:bg-[#16A34A] rounded-xl transition-colors"
              >
                <span>Request Free Audit For This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Deliverable Quality Commitment */}
      <div className="rounded-2xl border border-[#1F2937] bg-[#0E131B] p-8 text-center space-y-4">
        <Shield className="w-8 h-8 text-[#22C55E] mx-auto" />
        <h3 className="text-xl font-bold text-white">
          Our Pull-Request Guarantee
        </h3>
        <p className="text-sm text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
          All copy, diagrams, configuration workflows, and issue templates are delivered directly as a comprehensive GitHub Pull Request on your repository. You review every line of code, markdown, and SVG before merging.
        </p>
      </div>
    </div>
  );
};
