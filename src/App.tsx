import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { PageLoader } from './components/PageLoader';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { AboutPage } from './pages/AboutPage';
import { ExpertisePage } from './pages/ExpertisePage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleOpenContact = () => {
    setContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setContactModalOpen(false);
  };

  return (
    <div className="bg-[#0B0D0E] text-[#F3F4F6] min-h-screen flex flex-col font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      <Header onOpenContact={handleOpenContact} />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenContact={handleOpenContact} />} />
          <Route path="/work" element={<WorkPage onOpenContact={handleOpenContact} />} />
          <Route path="/work/:slug" element={<CaseStudyPage onOpenContact={handleOpenContact} />} />
          <Route path="/about" element={<AboutPage onOpenContact={handleOpenContact} />} />
          <Route path="/expertise" element={<ExpertisePage onOpenContact={handleOpenContact} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage onOpenContact={handleOpenContact} />} />
        </Routes>
      </div>

      <Footer onOpenContact={handleOpenContact} />
      <ContactModal isOpen={contactModalOpen} onClose={handleCloseContact} />
    </div>
  );
}

export default function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    let minDelayDone = false;
    let pageLoaded = document.readyState === 'complete';

    const finishIfReady = () => {
      if (minDelayDone && pageLoaded) {
        setIsInitialLoading(false);
      }
    };

    const minTimer = window.setTimeout(() => {
      minDelayDone = true;
      finishIfReady();
    }, 1350);

    const maxSafetyTimer = window.setTimeout(() => {
      setIsInitialLoading(false);
    }, 2600);

    const handleLoad = () => {
      pageLoaded = true;
      finishIfReady();
    };

    if (!pageLoaded) {
      window.addEventListener('load', handleLoad, { once: true });
    }

    return () => {
      window.clearTimeout(minTimer);
      window.clearTimeout(maxSafetyTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <PageLoader isVisible={isInitialLoading} />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </MotionConfig>
  );
}
