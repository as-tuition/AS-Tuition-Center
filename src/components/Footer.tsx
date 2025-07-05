import React from 'react';
import { useLanguage } from '../LanguageContext';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="app-footer">
      <p>{t('copyright')}</p>
      <p>{t('working_hours')}: 4:00 PM – 9:00 PM</p>
      <p>{t('contact_number_again')}: +91 95248 63508</p>
      <div className="social-media-links">
        <h3>{t('follow_us')}</h3>
        <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer">{t('facebook')}</a>
        <a href="https://www.instagram.com/your-page" target="_blank" rel="noopener noreferrer">{t('instagram')}</a>
        <a href="https://twitter.com/your-page" target="_blank" rel="noopener noreferrer">{t('twitter')}</a>
        <a href="https://www.youtube.com/your-channel" target="_blank" rel="noopener noreferrer">{t('youtube')}</a>
      </div>
    </footer>
  );
};

export default Footer;