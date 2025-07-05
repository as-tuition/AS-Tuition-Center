import React from 'react';
import { useLanguage } from '../LanguageContext';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="hero-section">
      <h1>{t('hero_banner_title')}</h1>
      <p>{t('hero_banner_subtitle')}</p>
      <div className="hero-details">
        <span>{t('class_timings_short')}</span>
        <span>{t('location_short')}</span>
      </div>
      <a href="https://wa.me/919524863508" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        {t('whatsapp_button_text')}
      </a>
    </section>
  );
};

export default HeroSection;
