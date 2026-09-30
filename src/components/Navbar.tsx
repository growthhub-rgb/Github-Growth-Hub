import React, { useState } from 'react';
import { PageId } from '../types';
import { GitBranch, Star, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenAuditModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'audits', label: 'Audits' },
    { id: 'resources', label: 'Resources' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1F2937] bg-[#0B0F14]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark with subtle git mark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]"
          aria-label="GitHub Growth Hub Home"
        >
          <div className="w-8 h-8 rounded-lg bg-[#111827] border border-[#30363D] flex items-center justify-center text-[#22C55E] group-hover:border-[#22C55E]/50 transition-colors">
            <GitBranch className="w-4 h-4 stroke-[2.2]" />
          </div>
          <span className="text-base font-semibold tracking-tight text-white group-hover:text-white/90">
            GitHub Growth Hub
          </span>
        </button>

        {/* Zone 2: Clean text navigation links (anti-pill, subtle active underline) */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative text-sm font-medium transition-colors py-1 focus:outline-none focus-visible:text-white ${
                  isActive
                    ? 'text-white'
                    : 'text-[#9CA3AF] hover:text-[#E5E7EB]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#22C55E] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA action */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenAuditModal}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0B0F14] bg-[#22C55E] hover:bg-[#16A34A] rounded-lg transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(34,197,94,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#22C55E]"
          >
            <span>Get A Free Visibility Review</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#9CA3AF] hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#1F2937] bg-[#0B0F14] px-4 pt-3 pb-6 space-y-2">
          <div className="grid grid-cols-2 gap-2 pb-3">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#111827] text-[#22C55E] border border-[#22C55E]/30'
                      : 'text-[#9CA3AF] hover:text-white hover:bg-[#111827]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
          <div className="pt-2 border-t border-[#1F2937]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#0B0F14] bg-[#22C55E] hover:bg-[#16A34A] rounded-lg transition-colors"
            >
              <span>Get A Free Visibility Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
