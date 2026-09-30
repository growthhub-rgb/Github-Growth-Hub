import React, { useState } from 'react';
import { PageId } from '../types';
import { GitBranch, Shield, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAuditModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="w-full bg-[#080B0F] border-t border-[#1F2937] text-[#9CA3AF] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#111827] border border-[#30363D] flex items-center justify-center text-[#22C55E]">
                <GitBranch className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="text-base font-semibold tracking-tight text-white">
                GitHub Growth Hub
              </span>
            </div>
            <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-sm">
              Helping developers, open-source maintainers, startups, and indie hackers turn brilliant code into high-visibility, widely adopted GitHub repositories.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#6B7280]">
              <Shield className="w-4 h-4 text-[#22C55E]" />
              <span>Strict Zero-Bot Policy · 100% Organic Developer Adoption</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Platform
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Services & Sprints
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('case-studies')}
                  className="hover:text-white transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('audits')}
                  className="hover:text-white transition-colors"
                >
                  Visibility Audits
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  className="hover:text-white transition-colors"
                >
                  README Templates
                </button>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Company
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAuditModal}
                  className="text-[#22C55E] hover:text-[#16A34A] transition-colors"
                >
                  Free Review Request
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Maintainer Dispatch
            </div>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Bi-weekly engineering breakdowns on what triggers GitHub Trending and how top repos scale.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#111827] border border-[#22C55E]/40 text-xs text-[#22C55E]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed! Check your inbox for the Trending Playbook.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="maintainer@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-[#111827] border border-[#1F2937] rounded-lg text-white placeholder-[#6B7280] focus:outline-none focus:border-[#22C55E]"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0B0F14] bg-[#22C55E] hover:bg-[#16A34A] rounded-lg transition-colors"
                >
                  <span>Subscribe to Dispatch</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom hairline & copyright */}
        <div className="pt-8 border-t border-[#1F2937] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <div>
            © {new Date().getFullYear()} GitHub Growth Hub. Independent developer consultancy. Not officially affiliated with or endorsed by GitHub, Inc.
          </div>
          <div className="flex items-center gap-4">
            <span>Built for open-source maintainers</span>
            <span>·</span>
            <span>Zero-bot verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
