import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Mail,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  GitBranch,
  Terminal,
  MessageSquare,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenAuditModal,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [repoUrl, setRepoUrl] = useState('');
  const [stars, setStars] = useState('< 100 stars');
  const [goal, setGoal] = useState('First 1,000 Organic Stars');
  const [timezone, setTimezone] = useState('Americas (UTC-8 to UTC-4)');
  const [preferredChannel, setPreferredChannel] = useState('Email');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !repoUrl.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
          Consultation & Inquiries
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Request a Custom Repository Review & Growth Proposal
        </h1>
        <p className="text-base text-[#9CA3AF] leading-relaxed">
          Tell us about your repository, current hurdles, and milestones. We review every submission individually and respond within 24 business hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-10 space-y-6 animate-in fade-in duration-200">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#22C55E]/15 border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E]">
                  <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-sm text-[#9CA3AF] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{name}</strong>. Our senior maintainers have begun analyzing <strong className="text-[#4ADE80] font-mono">{repoUrl}</strong>. We will send your comprehensive audit and growth roadmap to <strong className="text-white">{email}</strong> within 24 hours.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0D1117] border border-[#1F2937] text-left text-xs max-w-md mx-auto space-y-2">
                  <div className="text-white font-semibold">Immediate Next Steps:</div>
                  <ul className="text-[#9CA3AF] space-y-1 list-disc list-inside">
                    <li>Repo static analysis of README readability & search topics</li>
                    <li>OpenGraph social preview asset check</li>
                    <li>Review of issue template completeness & Quickstart friction</li>
                  </ul>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-semibold text-[#0B0F14] bg-[#22C55E] hover:bg-[#16A34A] rounded-xl transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white">
                      Your Name <span className="text-[#EF4444]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Reed"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#0D1117] border border-[#1F2937] rounded-lg text-white placeholder-[#6B7280] focus:outline-none focus:border-[#22C55E]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white">
                      Email Address <span className="text-[#EF4444]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@acme.dev"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#0D1117] border border-[#1F2937] rounded-lg text-white placeholder-[#6B7280] focus:outline-none focus:border-[#22C55E]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white">
                    GitHub Repository URL <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://github.com/organization/repository"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#0D1117] border border-[#1F2937] rounded-lg text-white placeholder-[#6B7280] font-mono focus:outline-none focus:border-[#22C55E]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white">
                      Current Stars
                    </label>
                    <select
                      value={stars}
                      onChange={(e) => setStars(e.target.value)}
                      className="w-full px-2.5 py-2 text-xs bg-[#0D1117] border border-[#1F2937] rounded-lg text-[#D1D5DB] focus:outline-none focus:border-[#22C55E]"
                    >
                      <option value="< 100 stars">&lt; 100 stars</option>
                      <option value="100 - 500 stars">100 - 500 stars</option>
                      <option value="500 - 2,500 stars">500 - 2,500 stars</option>
                      <option value="2,500+ stars">2,500+ stars</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white">
                      Primary Target Outcome
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full px-2.5 py-2 text-xs bg-[#0D1117] border border-[#1F2937] rounded-lg text-[#D1D5DB] focus:outline-none focus:border-[#22C55E]"
                    >
                      <option value="First 1,000 Organic Stars">First 1,000 Organic Stars</option>
                      <option value="GitHub Trending Launch Push">GitHub Trending Launch Push</option>
                      <option value="Attract Active PR Contributors">Attract Active PR Contributors</option>
                      <option value="Enterprise Sponsorship Readiness">Enterprise Sponsorship</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white">Timezone</label>
                    <select
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      className="w-full px-2.5 py-2 text-xs bg-[#0D1117] border border-[#1F2937] rounded-lg text-[#D1D5DB] focus:outline-none focus:border-[#22C55E]"
                    >
                      <option value="Americas (UTC-8 to UTC-4)">Americas (UTC-8 to UTC-4)</option>
                      <option value="Europe / Africa (UTC+0 to UTC+3)">Europe / Africa (UTC+0 to UTC+3)</option>
                      <option value="Asia / Pacific (UTC+5 to UTC+12)">Asia / Pacific (UTC+5 to UTC+12)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white">Preferred Channel</label>
                    <select
                      value={preferredChannel}
                      onChange={(e) => setPreferredChannel(e.target.value)}
                      className="w-full px-2.5 py-2 text-xs bg-[#0D1117] border border-[#1F2937] rounded-lg text-[#D1D5DB] focus:outline-none focus:border-[#22C55E]"
                    >
                      <option value="Email">Email</option>
                      <option value="GitHub Discussions">GitHub Discussions / Issue</option>
                      <option value="Discord">Discord Voice / Chat</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white">
                    Tell us about your project & biggest bottleneck
                  </label>
                  <textarea
                    rows={3}
                    placeholder="We recently open-sourced our indexing engine. We have high benchmark speeds but developers drop off on our README..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#0D1117] border border-[#1F2937] rounded-lg text-white placeholder-[#6B7280] focus:outline-none focus:border-[#22C55E]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-[#0B0F14] bg-[#22C55E] hover:bg-[#16A34A] rounded-xl transition-colors shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmitting Repository Data...</span>
                  ) : (
                    <>
                      <span>Submit For Free Visibility Review</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right: Contact Highlights & Assurances */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl border border-[#1F2937] bg-[#111827] space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
              <Clock className="w-4 h-4" />
              <span>Response Timeline</span>
            </div>
            <h3 className="text-lg font-bold text-white">24-Hour Review Turnaround</h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Every request is assigned to a senior open-source engineer. We do not use automated generic form replies—we personally read your README, test your installation snippet, and inspect your repository topics.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#1F2937] bg-[#111827] space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
              <Shield className="w-4 h-4" />
              <span>Privacy & Security</span>
            </div>
            <h3 className="text-lg font-bold text-white">Zero Public Repository Noise</h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              We never open unsolicited issues or comment spam on your public repository. All audit communications occur strictly through your chosen private channel.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#1F2937] bg-[#0E131B] space-y-2">
            <div className="text-xs font-mono text-[#9CA3AF]">Direct Maintainer Email:</div>
            <div className="text-sm font-semibold text-white font-mono flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#22C55E]" />
              <span>githubgrowthhub@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
