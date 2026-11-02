import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import InquiryModal from './components/InquiryModal';

import HomePage from './pages/HomePage';
import PuppiesPage from './pages/PuppiesPage';
import PuppyDetailPage from './pages/PuppyDetailPage';
import GoneHomePage from './pages/GoneHomePage';
import HappyFamiliesPage from './pages/HappyFamiliesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';

const getNormalizedPath = () => {
  let p = window.location.pathname;
  if (p.startsWith('/teddypups-uae-clone')) {
    p = p.replace('/teddypups-uae-clone', '') || '/';
  }
  return p;
};

const getBasePath = () => {
  return window.location.pathname.startsWith('/teddypups-uae-clone') ? '/teddypups-uae-clone' : '';
};

export default function App() {
  const [currentPath, setCurrentPath] = useState(getNormalizedPath());
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPuppyForInquiry, setSelectedPuppyForInquiry] = useState(null);

  // Synchronize browser history and back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getNormalizedPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    const fullPath = getBasePath() + path;
    if (window.location.pathname !== fullPath) {
      window.history.pushState({}, '', fullPath);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectPuppy = (puppy) => {
    navigate(`/puppies/${puppy.slug}`);
  };

  const handleOpenInquiry = (puppy = null) => {
    setSelectedPuppyForInquiry(puppy);
    setModalOpen(true);
  };

  // Determine current active page
  let PageComponent = null;

  if (currentPath === '/' || currentPath === '') {
    PageComponent = (
      <HomePage
        navigate={navigate}
        onSelectPuppy={handleSelectPuppy}
        onInquire={handleOpenInquiry}
      />
    );
  } else if (currentPath === '/puppies' || currentPath.startsWith('/puppies?')) {
    // Extract query params if any
    const params = new URLSearchParams(window.location.search);
    const initialFilter = {
      breed: params.get('breed') || 'All',
      origin: params.get('origin') ? (params.get('origin') === 'imported' ? 'Imported for you' : 'Downtown Dubai') : 'All',
      gender: params.get('gender') || 'All',
    };
    PageComponent = (
      <PuppiesPage
        onSelectPuppy={handleSelectPuppy}
        onInquire={handleOpenInquiry}
        initialFilter={initialFilter}
      />
    );
  } else if (currentPath.startsWith('/puppies/')) {
    const slug = currentPath.replace('/puppies/', '').split('?')[0].split('#')[0];
    PageComponent = (
      <PuppyDetailPage
        puppySlug={slug}
        navigate={navigate}
        onSelectPuppy={handleSelectPuppy}
        onInquire={handleOpenInquiry}
      />
    );
  } else if (currentPath === '/gone-home') {
    PageComponent = (
      <GoneHomePage
        navigate={navigate}
        onSelectPuppy={handleSelectPuppy}
      />
    );
  } else if (currentPath === '/happy-families') {
    PageComponent = (
      <HappyFamiliesPage
        navigate={navigate}
      />
    );
  } else if (currentPath === '/how-it-works') {
    PageComponent = (
      <HowItWorksPage
        navigate={navigate}
      />
    );
  } else if (currentPath === '/faq') {
    PageComponent = (
      <FaqPage />
    );
  } else if (currentPath === '/contact') {
    PageComponent = (
      <ContactPage />
    );
  } else {
    // Default fallback to Home
    PageComponent = (
      <HomePage
        navigate={navigate}
        onSelectPuppy={handleSelectPuppy}
        onInquire={handleOpenInquiry}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fffdf8] text-[#2c221a]">
      {/* Navigation */}
      <Navbar currentPath={currentPath} navigate={navigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {PageComponent}
      </main>

      {/* Footer */}
      <Footer navigate={navigate} />

      {/* Floating Actions (WhatsApp desktop & Mobile Sticky Bar) */}
      <FloatingActions />

      {/* Inquiry Dialog Modal */}
      <InquiryModal
        isOpen={modalOpen}
        puppy={selectedPuppyForInquiry}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
