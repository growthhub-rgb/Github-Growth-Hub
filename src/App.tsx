import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuditReviewModal } from './components/AuditReviewModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { AuditsPage } from './pages/AuditsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  // Sync with browser URL hash for realistic multi-page navigation and back/forward history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'services',
        'case-studies',
        'audits',
        'resources',
        'about',
        'contact',
        'faq',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openAuditModal = () => {
    setIsAuditModalOpen(true);
  };

  const closeAuditModal = () => {
    setIsAuditModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#D1D5DB] flex flex-col selection:bg-[#22C55E]/20 selection:text-[#22C55E]">
      {/* Sticky Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenAuditModal={openAuditModal}
      />

      {/* Main Page Body */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenAuditModal={openAuditModal}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenAuditModal={openAuditModal}
          />
        )}
        {currentPage === 'case-studies' && (
          <CaseStudiesPage
            onNavigate={navigateTo}
            onOpenAuditModal={openAuditModal}
          />
        )}
        {currentPage === 'audits' && (
          <AuditsPage
            onNavigate={navigateTo}
            onOpenAuditModal={openAuditModal}
          />
        )}
        {currentPage === 'resources' && (
          <ResourcesPage
            onNavigate={navigateTo}
            onOpenAuditModal={openAuditModal}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenAuditModal={openAuditModal}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            onOpenAuditModal={openAuditModal}
          />
        )}
        {currentPage === 'faq' && (
          <FaqPage
            onNavigate={navigateTo}
            onOpenAuditModal={openAuditModal}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenAuditModal={openAuditModal}
      />

      {/* Free Visibility Review Modal */}
      <AuditReviewModal
        isOpen={isAuditModalOpen}
        onClose={closeAuditModal}
      />
    </div>
  );
}
