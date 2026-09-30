import React, { useState } from 'react';
import { PageId, ReadmeTemplate } from '../types';
import { README_TEMPLATES } from '../data/mockData';
import { CodeBlock } from '../components/CodeBlock';
import {
  FileText,
  Copy,
  Check,
  Download,
  BookOpen,
  Compass,
  ArrowRight,
  ExternalLink,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onNavigate,
  onOpenAuditModal,
}) => {
  const [selectedTemplate, setSelectedTemplate] = useState<ReadmeTemplate>(
    README_TEMPLATES[0]
  );
  const [badgeLabel, setBadgeLabel] = useState('build');
  const [badgeMessage, setBadgeMessage] = useState('passing');
  const [badgeColor, setBadgeColor] = useState('22c55e');

  const generatedBadgeUrl = `https://img.shields.io/badge/${encodeURIComponent(
    badgeLabel
  )}-${encodeURIComponent(badgeMessage)}-${badgeColor}?style=flat-square`;

  const generatedBadgeMarkdown = `![${badgeLabel}](${generatedBadgeUrl})`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
          Open Source Growth Toolkit
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Developer Resources, Frameworks & README Templates
        </h1>
        <p className="text-base text-[#9CA3AF] leading-relaxed">
          Production-tested README architectures, algorithmic launch playbooks, and developer community indexes. Free to fork, copy, and implement.
        </p>
      </div>

      {/* 1. Production README Templates Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
              <FileText className="w-4 h-4" />
              <span>Production README Templates</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-1">
              Battle-Tested First-Fold Architectures
            </h2>
          </div>

          {/* Template Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {README_TEMPLATES.map((tmpl) => (
              <button
                key={tmpl.id}
                onClick={() => setSelectedTemplate(tmpl)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedTemplate.id === tmpl.id
                    ? 'bg-[#22C55E]/20 text-[#4ADE80] border border-[#22C55E]/40 font-semibold'
                    : 'bg-[#111827] text-[#9CA3AF] hover:text-white border border-[#1F2937]'
                }`}
              >
                {tmpl.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Template Display */}
        <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6 space-y-4 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1F2937]">
            <div className="space-y-1">
              <div className="flex items-center gap-3 text-xs text-[#9CA3AF]">
                <span className="font-semibold text-white">{selectedTemplate.name}</span>
                <span>·</span>
                <span className="font-mono text-[11px] text-[#22C55E]">
                  Target: {selectedTemplate.starsRecommended}
                </span>
                <span>·</span>
                <span>{selectedTemplate.category}</span>
              </div>
              <p className="text-xs text-[#9CA3AF] max-w-xl">
                {selectedTemplate.description}
              </p>
            </div>
          </div>

          <CodeBlock
            code={selectedTemplate.markdownContent}
            filename={`${selectedTemplate.id}-README.md`}
            language="markdown"
            showLineNumbers={true}
          />
        </div>
      </section>

      {/* 2. Interactive Shields.io Badge Builder */}
      <section className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
            <Shield className="w-4 h-4" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="text-2xl font-bold text-white">
            Developer Badge Generator
          </h2>
          <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-xl leading-relaxed">
            Clean, consistent badges establish immediate trust for CI status, package versions, and test coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-white">Left Label</label>
            <input
              type="text"
              value={badgeLabel}
              onChange={(e) => setBadgeLabel(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-[#0D1117] border border-[#1F2937] rounded-lg text-white font-mono focus:outline-none focus:border-[#22C55E]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-white">Right Status / Message</label>
            <input
              type="text"
              value={badgeMessage}
              onChange={(e) => setBadgeMessage(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-[#0D1117] border border-[#1F2937] rounded-lg text-white font-mono focus:outline-none focus:border-[#22C55E]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-white">Color Hex</label>
            <select
              value={badgeColor}
              onChange={(e) => setBadgeColor(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-[#0D1117] border border-[#1F2937] rounded-lg text-white font-mono focus:outline-none focus:border-[#22C55E]"
            >
              <option value="22c55e">Green (#22c55e)</option>
              <option value="3178c6">TypeScript Blue (#3178c6)</option>
              <option value="f59e0b">Amber (#f59e0b)</option>
              <option value="ef4444">Red (#ef4444)</option>
              <option value="4b5563">Dark Slate (#4b5563)</option>
            </select>
          </div>
        </div>

        {/* Badge Preview Box */}
        <div className="p-4 rounded-xl bg-[#0D1117] border border-[#1F2937] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#9CA3AF]">Live Render:</span>
            <img
              src={generatedBadgeUrl}
              alt="Generated Badge"
              className="h-5"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={generatedBadgeMarkdown}
              className="px-3 py-1.5 text-xs bg-[#161B22] border border-[#30363D] rounded-lg text-[#9CA3AF] font-mono select-all w-64"
            />
          </div>
        </div>
      </section>

      {/* 3. The 2026 GitHub Trending Playbook Highlights */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
            <BookOpen className="w-4 h-4" />
            <span>Algorithmic Guide</span>
          </div>
          <h2 className="text-2xl font-bold text-white mt-1">
            The GitHub Trending Mechanics Breakdown
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-[#1F2937] bg-[#111827] space-y-3">
            <div className="font-mono text-xs text-[#22C55E]">RULE 01</div>
            <h3 className="text-lg font-bold text-white">Velocity Acceleration Window</h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              GitHub does not reward raw star count; it rewards first-derivative star velocity. Gaining 90 stars in 10 hours will outrank a repository with 50,000 stars gaining 30 stars that day.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#1F2937] bg-[#111827] space-y-3">
            <div className="font-mono text-xs text-[#22C55E]">RULE 02</div>
            <h3 className="text-lg font-bold text-white">Language-Specific Flywheels</h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              It is 4x easier to hit #1 Trending in Rust, Go, or Zig than in JavaScript or Python. Once you trend in your primary language, your repo feeds into the overall Trending page.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#1F2937] bg-[#111827] space-y-3">
            <div className="font-mono text-xs text-[#22C55E]">RULE 03</div>
            <h3 className="text-lg font-bold text-white">Synchronized Launch Windows</h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Launch on Hacker News Show HN on Tuesday or Wednesday at 13:00 UTC (9:00 AM EST). Coordinate Reddit and Twitter mentions within a 4-hour window to trigger the algorithm.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Curated Launch Communities Directory */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
            <Compass className="w-4 h-4" />
            <span>Distribution Directory</span>
          </div>
          <h2 className="text-2xl font-bold text-white mt-1">
            Where High-Intent Developers Discover New Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border border-[#1F2937] bg-[#111827] space-y-2">
            <div className="text-sm font-semibold text-white">Hacker News (Show HN)</div>
            <p className="text-xs text-[#9CA3AF]">
              Highest technical critique density. Requires strict honesty, technical architecture focus, and no marketing fluff.
            </p>
            <div className="text-[11px] font-mono text-[#22C55E]">Expected Stars: 400 - 2,500</div>
          </div>

          <div className="p-4 rounded-xl border border-[#1F2937] bg-[#111827] space-y-2">
            <div className="text-sm font-semibold text-white">Reddit r/programming</div>
            <p className="text-xs text-[#9CA3AF]">
              Best for deep technical blog posts, benchmark comparisons, and architectural explanations of novel systems.
            </p>
            <div className="text-[11px] font-mono text-[#22C55E]">Expected Stars: 200 - 1,200</div>
          </div>

          <div className="p-4 rounded-xl border border-[#1F2937] bg-[#111827] space-y-2">
            <div className="text-sm font-semibold text-white">Curated Newsletters</div>
            <p className="text-xs text-[#9CA3AF]">
              JavaScript Weekly, Rust Weekly, Golang Weekly, Console.dev, Bytes. Extremely high conversion to active users.
            </p>
            <div className="text-[11px] font-mono text-[#22C55E]">Expected Stars: 300 - 1,500</div>
          </div>

          <div className="p-4 rounded-xl border border-[#1F2937] bg-[#111827] space-y-2">
            <div className="text-sm font-semibold text-white">Lobste.rs</div>
            <p className="text-xs text-[#9CA3AF]">
              Invitation-only developer community focused on systems programming, compilers, and elegant software design.
            </p>
            <div className="text-[11px] font-mono text-[#22C55E]">Expected Stars: 150 - 600</div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <div className="rounded-2xl border border-[#22C55E]/40 bg-[#111827] p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Need a Tailored Launch Strategy?</h3>
        <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-lg mx-auto">
          We draft your Show HN submission, prepare your benchmark graphs, and schedule your launch calendar.
        </p>
        <button
          onClick={onOpenAuditModal}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#0B0F14] bg-[#22C55E] hover:bg-[#16A34A] rounded-xl transition-colors"
        >
          <span>Request Custom Launch Plan</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
