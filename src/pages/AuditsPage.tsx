import React, { useState } from 'react';
import { PageId, AuditReport, AuditCheckItem } from '../types';
import { PRESET_AUDITS } from '../data/mockData';
import {
  Search,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  GitBranch,
  Layers,
  Award,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';

interface AuditsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const AuditsPage: React.FC<AuditsPageProps> = ({
  onNavigate,
  onOpenAuditModal,
}) => {
  const [repoInput, setRepoInput] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [currentReport, setCurrentReport] = useState<AuditReport>(
    PRESET_AUDITS['typical-stagnant-repo']
  );
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'failed' | 'passed'>('all');

  const runAudit = (targetUrl: string) => {
    setIsScanning(true);
    setTimeout(() => {
      const lower = targetUrl.toLowerCase();
      // If it contains "react" or "stellar" or "vector", give high score
      if (lower.includes('stellar') || lower.includes('vector') || lower.includes('react') || lower.includes('shadcn')) {
        setCurrentReport(PRESET_AUDITS['optimized-growth-repo']);
      } else {
        // Generate custom evaluated report
        const parts = targetUrl.replace('https://github.com/', '').split('/');
        const owner = parts[0] || 'developer';
        const repo = parts[1] || 'custom-project';

        const customReport: AuditReport = {
          repoUrl: targetUrl.startsWith('http') ? targetUrl : `https://github.com/${targetUrl}`,
          owner,
          repo,
          stars: Math.floor(Math.random() * 200) + 40,
          forks: Math.floor(Math.random() * 20) + 2,
          overallScore: 54,
          grade: 'C',
          summary: `Audit complete for ${owner}/${repo}. The repository has functional code, but lacks a high-converting first-fold hook, has missing GitHub topics tags, and has an empty custom social preview card.`,
          categories: {
            firstFoldScore: 50,
            ogImageScore: 20,
            seoTopicsScore: 35,
            communityScore: 70,
            releasesScore: 60,
            dxScore: 55,
          },
          checks: [
            {
              id: 'c1',
              category: 'first-fold',
              categoryLabel: 'First Fold & README Hook',
              label: '10-Second Value Proposition Statement',
              description: 'The top of README does not immediately communicate why a developer should choose this tool.',
              impact: 'High',
              passed: false,
              recommendation: 'Rewrite title heading with a single bold sentence stating concrete performance or DX gains.',
            },
            {
              id: 'c2',
              category: 'first-fold',
              categoryLabel: 'First Fold & README Hook',
              label: 'Copy-Paste Quickstart Code Snippet (< 60s)',
              description: 'Installation requires navigating multiple subfolders or manual build steps.',
              impact: 'High',
              passed: false,
              recommendation: 'Add a 3-line terminal snippet that executes immediately with zero prerequisite setup.',
            },
            {
              id: 'c3',
              category: 'og-image',
              categoryLabel: 'Social Preview Card',
              label: 'Custom OpenGraph Social Preview Image',
              description: 'Currently using GitHub generic dark template without custom branding.',
              impact: 'High',
              passed: false,
              recommendation: 'Upload a 1280x640 custom SVG/PNG in Repository Settings -> General -> Social Preview.',
            },
            {
              id: 'c4',
              category: 'seo-topics',
              categoryLabel: 'GitHub Topics & SEO',
              label: 'Repository Topic Tags (min 8)',
              description: 'Only 1 or 2 topics tagged. Missing high-intent search keywords.',
              impact: 'High',
              passed: false,
              recommendation: 'Add 8-12 search tags (e.g. devtools, cli, typescript, productivity, automation).',
            },
            {
              id: 'c5',
              category: 'community',
              categoryLabel: 'Community Readiness',
              label: 'CONTRIBUTING.md & Bug Templates',
              description: 'Issue templates and contributor guidelines are properly configured.',
              impact: 'Medium',
              passed: true,
              recommendation: 'Structure looks good. Consider adding a curated "good-first-issue" label link.',
            },
            {
              id: 'c6',
              category: 'dx',
              categoryLabel: 'Developer Experience',
              label: 'Live Browser Playground / Sandbox Link',
              description: 'No browser interactive demo link found in the README.',
              impact: 'Medium',
              passed: false,
              recommendation: 'Provide a StackBlitz or web demo badge right below the main install snippet.',
            },
          ],
        };
        setCurrentReport(customReport);
      }
      setIsScanning(false);
    }, 700);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!repoInput.trim()) return;
    runAudit(repoInput);
  };

  const loadPreset = (presetKey: string) => {
    setIsScanning(true);
    setTimeout(() => {
      setCurrentReport(PRESET_AUDITS[presetKey]);
      setRepoInput(PRESET_AUDITS[presetKey].repoUrl);
      setIsScanning(false);
    }, 400);
  };

  const filteredChecks = currentReport.checks.filter((check) => {
    if (selectedFilter === 'failed') return !check.passed;
    if (selectedFilter === 'passed') return check.passed;
    return true;
  });

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+':
      case 'A':
        return 'text-[#22C55E] border-[#22C55E]/40 bg-[#22C55E]/10';
      case 'B+':
      case 'B':
        return 'text-[#60A5FA] border-[#60A5FA]/40 bg-[#60A5FA]/10';
      case 'C':
        return 'text-[#F59E0B] border-[#F59E0B]/40 bg-[#F59E0B]/10';
      default:
        return 'text-[#EF4444] border-[#EF4444]/40 bg-[#EF4444]/10';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
          Automated & Human Audits
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          GitHub Repository Visibility Auditor
        </h1>
        <p className="text-base text-[#9CA3AF] leading-relaxed">
          Inspect your repository against the 6 core pillars of developer discoverability. Uncover why visitors bounce and get instant prioritized action items.
        </p>
      </div>

      {/* Interactive Scan Bar */}
      <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6 space-y-4 shadow-xl">
        <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6B7280]">
              <GitBranch className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Paste repository URL: github.com/owner/repo"
              value={repoInput}
              onChange={(e) => setRepoInput(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-[#0D1117] border border-[#1F2937] rounded-xl text-white placeholder-[#6B7280] font-mono focus:outline-none focus:border-[#22C55E]"
            />
          </div>

          <button
            type="submit"
            disabled={isScanning}
            className="flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-[#0B0F14] bg-[#22C55E] hover:bg-[#16A34A] rounded-xl transition-colors whitespace-nowrap shadow-lg disabled:opacity-50"
          >
            {isScanning ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Auditing Repo...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Run Visibility Audit</span>
              </>
            )}
          </button>
        </form>

        {/* Quick Sample Presets */}
        <div className="flex items-center gap-2 flex-wrap text-xs text-[#9CA3AF] pt-1">
          <span>Or load benchmark preset:</span>
          <button
            onClick={() => loadPreset('typical-stagnant-repo')}
            className="px-2.5 py-1 rounded bg-[#0D1117] border border-[#1F2937] hover:border-[#22C55E]/40 text-[#D1D5DB] transition-colors font-mono text-[11px]"
          >
            Sample: Unoptimized Repo (Grade C)
          </button>
          <button
            onClick={() => loadPreset('optimized-growth-repo')}
            className="px-2.5 py-1 rounded bg-[#0D1117] border border-[#1F2937] hover:border-[#22C55E]/40 text-[#4ADE80] transition-colors font-mono text-[11px]"
          >
            Sample: High-Growth Repo (Grade A+)
          </button>
        </div>
      </div>

      {/* Main Audit Report Display */}
      <div className="space-y-8">
        {/* Top Summary Card */}
        <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#1F2937]">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#9CA3AF]">
                <span>Repository Target</span>
                <span>·</span>
                <span className="text-white font-semibold">{currentReport.repoUrl}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {currentReport.owner} / {currentReport.repo}
              </h2>
              <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-xl leading-relaxed">
                {currentReport.summary}
              </p>
            </div>

            {/* Score & Grade Display */}
            <div className="flex items-center gap-4 self-start md:self-auto">
              <div
                className={`w-20 h-20 rounded-2xl border flex flex-col items-center justify-center font-mono font-bold ${getGradeColor(
                  currentReport.grade
                )}`}
              >
                <span className="text-2xl leading-none">{currentReport.grade}</span>
                <span className="text-[10px] mt-1 uppercase tracking-wider font-sans">
                  Grade
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-[#9CA3AF]">Overall Visibility Score</div>
                <div className="font-mono text-3xl font-extrabold text-white tabular-nums">
                  {currentReport.overallScore}
                  <span className="text-sm font-normal text-[#6B7280]">/100</span>
                </div>
                <div className="text-[11px] text-[#22C55E]">
                  {currentReport.overallScore > 80 ? 'High Discoverability' : 'Action Recommended'}
                </div>
              </div>
            </div>
          </div>

          {/* 6 Category Progress Bars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-3.5 rounded-xl bg-[#0D1117] border border-[#1F2937] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#9CA3AF]">First Fold & Hook</span>
                <span className="font-mono font-bold text-white tabular-nums">
                  {currentReport.categories.firstFoldScore}%
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#1F2937] overflow-hidden">
                <div
                  className="h-full bg-[#22C55E] rounded-full transition-all duration-500"
                  style={{ width: `${currentReport.categories.firstFoldScore}%` }}
                />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0D1117] border border-[#1F2937] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#9CA3AF]">Social Preview Card</span>
                <span className="font-mono font-bold text-white tabular-nums">
                  {currentReport.categories.ogImageScore}%
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#1F2937] overflow-hidden">
                <div
                  className="h-full bg-[#22C55E] rounded-full transition-all duration-500"
                  style={{ width: `${currentReport.categories.ogImageScore}%` }}
                />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0D1117] border border-[#1F2937] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#9CA3AF]">GitHub Topics SEO</span>
                <span className="font-mono font-bold text-white tabular-nums">
                  {currentReport.categories.seoTopicsScore}%
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#1F2937] overflow-hidden">
                <div
                  className="h-full bg-[#22C55E] rounded-full transition-all duration-500"
                  style={{ width: `${currentReport.categories.seoTopicsScore}%` }}
                />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0D1117] border border-[#1F2937] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#9CA3AF]">Community Readiness</span>
                <span className="font-mono font-bold text-white tabular-nums">
                  {currentReport.categories.communityScore}%
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#1F2937] overflow-hidden">
                <div
                  className="h-full bg-[#22C55E] rounded-full transition-all duration-500"
                  style={{ width: `${currentReport.categories.communityScore}%` }}
                />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0D1117] border border-[#1F2937] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#9CA3AF]">Release Hygiene</span>
                <span className="font-mono font-bold text-white tabular-nums">
                  {currentReport.categories.releasesScore}%
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#1F2937] overflow-hidden">
                <div
                  className="h-full bg-[#22C55E] rounded-full transition-all duration-500"
                  style={{ width: `${currentReport.categories.releasesScore}%` }}
                />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0D1117] border border-[#1F2937] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#9CA3AF]">Developer Experience (DX)</span>
                <span className="font-mono font-bold text-white tabular-nums">
                  {currentReport.categories.dxScore}%
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#1F2937] overflow-hidden">
                <div
                  className="h-full bg-[#22C55E] rounded-full transition-all duration-500"
                  style={{ width: `${currentReport.categories.dxScore}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Itemized Checklist */}
        <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">Itemized Findings & Recommendations</h3>
              <p className="text-xs text-[#9CA3AF]">
                Showing actionable items ordered by discovery impact.
              </p>
            </div>

            {/* Filter */}
            <div className="flex items-center p-1 bg-[#0D1117] border border-[#1F2937] rounded-lg">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                  selectedFilter === 'all'
                    ? 'bg-[#1F2937] text-white shadow-sm'
                    : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                All Checks ({currentReport.checks.length})
              </button>
              <button
                onClick={() => setSelectedFilter('failed')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                  selectedFilter === 'failed'
                    ? 'bg-[#EF4444]/20 text-[#F87171] border border-[#EF4444]/30'
                    : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                Needs Action ({currentReport.checks.filter((c) => !c.passed).length})
              </button>
              <button
                onClick={() => setSelectedFilter('passed')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                  selectedFilter === 'passed'
                    ? 'bg-[#22C55E]/20 text-[#4ADE80] border border-[#22C55E]/30'
                    : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                Passed ({currentReport.checks.filter((c) => c.passed).length})
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {filteredChecks.map((item) => (
              <div
                key={item.id}
                className={`p-4 rounded-xl border transition-all ${
                  item.passed
                    ? 'bg-[#0D1117]/60 border-[#1F2937]'
                    : 'bg-[#161214] border-[#EF4444]/30'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    {item.passed ? (
                      <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-white">{item.label}</span>
                        <span className="text-[10px] font-mono text-[#9CA3AF] border border-[#30363D] px-1.5 py-0.5 rounded">
                          {item.categoryLabel}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                            item.impact === 'High'
                              ? 'text-[#F59E0B] bg-[#F59E0B]/10'
                              : 'text-[#9CA3AF] bg-[#1F2937]'
                          }`}
                        >
                          {item.impact} Impact
                        </span>
                      </div>
                      <p className="text-xs text-[#9CA3AF]">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Recommendation Callout */}
                <div className="mt-3 pt-3 border-t border-[#1F2937] flex items-start gap-2 text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#22C55E] shrink-0 mt-0.5" />
                  <span className="text-[#D1D5DB]">
                    <strong className="text-white">Action:</strong> {item.recommendation}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sprint Implementation CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-[#111827] via-[#161B22] to-[#111827] border border-[#22C55E]/40 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <h4 className="text-xl font-bold text-white">
              Want Our Senior Engineers to Fix These Items for You?
            </h4>
            <p className="text-xs text-[#9CA3AF] max-w-lg leading-relaxed">
              We write the README, build the custom SVG graphics, configure the GitHub Actions, and submit the complete pull request in a 5-day sprint.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAuditModal}
              className="px-5 py-3 text-xs font-semibold text-[#0B0F14] bg-[#22C55E] hover:bg-[#16A34A] rounded-xl transition-colors whitespace-nowrap shadow-lg"
            >
              Book Human Sprint Teardown
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
