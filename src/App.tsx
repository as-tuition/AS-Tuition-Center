import React from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import HeroSection from './components/HeroSection';
import ProgramsSection from './components/ProgramsSection';
import FeaturesSection from './components/FeaturesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import './App.css';

function AppContent() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ta' : 'en');
  };

  return (
    <div className="App">
      <header className="main-header">
        <img src="images/logo.png" alt="A S Tuition Center Logo" className="App-logo" />
        <h1>{t('tuition_center_name')}</h1>
      </header>

      <HeroSection />
      <ProgramsSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
