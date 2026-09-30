import React, { useState } from 'react';
import { X, CheckCircle2, Shield, ArrowRight, GitBranch, Star, Sparkles } from 'lucide-react';

interface AuditReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRepoUrl?: string;
}

export const AuditReviewModal: React.FC<AuditReviewModalProps> = ({
  isOpen,
  onClose,
  initialRepoUrl = '',
}) => {
  const [repoUrl, setRepoUrl] = useState(initialRepoUrl);
  const [email, setEmail] = useState('');
  const [starCount, setStarCount] = useState('< 100 stars');
  const [primaryGoal, setPrimaryGoal] = useState('First 1,000 Organic Stars');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!repoUrl.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg rounded-2xl border border-[#1F2937] bg-[#111827] shadow-2xl overflow-hidden text-[#D1D5DB]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 bg-[#0D1117] border-b border-[#1F2937] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
              <GitBranch className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Free Visibility Review</h3>
              <p className="text-xs text-[#9CA3AF]">
                Comprehensive 6-point repository audit delivered to your inbox
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#9CA3AF] hover:text-white hover:bg-[#1F2937] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="space-y-5 text-center py-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#22C55E]/15 border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E]">
                <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">Review Request Queued!</h4>
                <p className="text-xs text-[#9CA3AF] max-w-sm mx-auto leading-relaxed">
                  We have queued <span className="text-[#4ADE80] font-mono">{repoUrl || 'your repository'}</span> for a full human audit. Expect your prioritized teardown and action plan within 24 hours at <span className="text-white font-medium">{email}</span>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0D1117] border border-[#1F2937] text-left text-xs space-y-2">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>What we are analyzing right now:</span>
                </div>
                <ul className="text-[#9CA3AF] space-y-1.5 list-disc list-inside">
                  <li>First-fold README hook & 10-second value comprehension</li>
                  <li>Social preview card OpenGraph high-resolution assets</li>
                  <li>GitHub Topics taxonomy & search index density</li>
                  <li>Friction points in copy-paste quickstart code</li>
                </ul>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 text-xs font-semibold text-[#0B0F14] bg-[#22C55E] hover:bg-[#16A34A] rounded-lg transition-colors"
              >
                Close & Return to Hub
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-white">
                  GitHub Repository URL <span className="text-[#EF4444]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="url"
                    required
                    placeholder="https://github.com/organization/repo"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#0D1117] border border-[#1F2937] rounded-lg text-white placeholder-[#6B7280] focus:outline-none focus:border-[#22C55E] font-mono"
                  />
                </div>
                <p className="text-[11px] text-[#6B7280]">
                  Public repositories only. Works for tools, libraries, frameworks, and apps.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-white">
                  Your Developer / Maintainer Email <span className="text-[#EF4444]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="maintainer@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-[#0D1117] border border-[#1F2937] rounded-lg text-white placeholder-[#6B7280] focus:outline-none focus:border-[#22C55E]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-white">
                    Current Stars
                  </label>
                  <select
                    value={starCount}
                    onChange={(e) => setStarCount(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs bg-[#0D1117] border border-[#1F2937] rounded-lg text-[#D1D5DB] focus:outline-none focus:border-[#22C55E]"
                  >
                    <option value="< 100 stars">&lt; 100 stars</option>
                    <option value="100 - 500 stars">100 - 500 stars</option>
                    <option value="500 - 2,500 stars">500 - 2,500 stars</option>
                    <option value="2,500+ stars">2,500+ stars</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-white">
                    Primary Goal
                  </label>
                  <select
                    value={primaryGoal}
                    onChange={(e) => setPrimaryGoal(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs bg-[#0D1117] border border-[#1F2937] rounded-lg text-[#D1D5DB] focus:outline-none focus:border-[#22C55E]"
                  >
                    <option value="First 1,000 Organic Stars">First 1k Stars</option>
                    <option value="GitHub Trending Push">GitHub Trending Push</option>
                    <option value="More Contributors">Attract Contributors</option>
                    <option value="Enterprise Adoption">Enterprise Adoption</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#0B0F14] bg-[#22C55E] hover:bg-[#16A34A] rounded-lg transition-colors shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Queuing Repository Audit...</span>
                  ) : (
                    <>
                      <span>Generate My Free Teardown Report</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#6B7280] pt-1">
                <Shield className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>Zero spam · No sales pressure · Pure engineering critique</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
