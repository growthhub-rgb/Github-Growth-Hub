import React, { useState } from 'react';
import { PageId } from '../types';
import { FAQS } from '../data/mockData';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Shield,
  Sparkles,
} from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({
  onNavigate,
  onOpenAuditModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const categories = [
    'All',
    'Ethics & Policy',
    'Trending & Distribution',
    'Audits & Strategy',
    'Pricing & Process',
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
          Knowledge Base & Questions
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-[#9CA3AF] leading-relaxed">
          Everything you need to know about our organic open-source growth methodology, the GitHub Trending algorithm, ethics, and sprint deliverables.
        </p>
      </div>

      {/* Search and Category Filters */}
      <div className="space-y-4">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6B7280]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search questions (e.g. bots, Trending, pricing)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#111827] border border-[#1F2937] rounded-xl text-white placeholder-[#6B7280] focus:outline-none focus:border-[#22C55E]"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#22C55E]/20 text-[#4ADE80] border border-[#22C55E]/40 font-semibold shadow-sm'
                  : 'bg-[#111827] text-[#9CA3AF] hover:text-white border border-[#1F2937]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FAQs Accordion List */}
      <div className="space-y-4 max-w-4xl">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 rounded-2xl border border-[#1F2937] bg-[#111827] text-center text-xs text-[#9CA3AF]">
            No questions matched your search query. Try searching for "Trending" or "SEO".
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-[#1F2937] bg-[#111827] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-[#22C55E] uppercase tracking-wider">
                      {faq.category}
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-[#0D1117] border border-[#1F2937] flex items-center justify-center text-[#9CA3AF] shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#22C55E]" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed border-t border-[#1F2937]/50 bg-[#0E131B]/50 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions CTA */}
      <div className="rounded-2xl border border-[#1F2937] bg-[#0E131B] p-8 max-w-4xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="text-lg font-bold text-white">Have a Specific Question About Your Repository?</h4>
          <p className="text-xs text-[#9CA3AF]">
            Schedule a conversation with our engineering team or submit your repository for an immediate free audit.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2.5 text-xs font-semibold text-white bg-[#1F2937] hover:bg-[#374151] rounded-xl transition-colors whitespace-nowrap"
          >
            Contact Maintainers
          </button>
          <button
            onClick={onOpenAuditModal}
            className="px-4 py-2.5 text-xs font-semibold text-[#0B0F14] bg-[#22C55E] hover:bg-[#16A34A] rounded-xl transition-colors whitespace-nowrap"
          >
            Get Free Review
          </button>
        </div>
      </div>
    </div>
  );
};
