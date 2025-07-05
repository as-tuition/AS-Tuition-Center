import React from 'react';
import { useLanguage } from '../LanguageContext';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=10%C2%B034%2742.2%22N+77%C2%B021%2735.3%22E";

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ta' : 'en');
  };

  return (
    <section className="contact-section">
      <button onClick={toggleLanguage} className="language-toggle-button">
        {language === 'en' ? 'தமிழ்' : 'English'}
      </button>
      <h2>{t('contact_information')}</h2>
      <div className="contact-details">
        <p><strong>{t('location')}:</strong> {t('location_address')}</p>
        <p><strong>Coordinates:</strong> 10°34'42.2"N 77°21'35.3"E</p>
        <p><a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">{t('view_on_map')}</a></p>
        <p><strong>{t('class_timings')}:</strong> 4:00 PM – 9:00 PM</p>
        
        <a href="upi://pay?pa=9524863508@okbizaxis&pn=AS%20Tuition%20Center&cu=INR" className="gpay-button" target="_blank" rel="noopener noreferrer">
          {t('gpay_button_text')}
        </a>

        <p>📞 <strong>{t('call')}:</strong> +91 95248 63508</p>
        <p>📱 <strong>{t('whatsapp')}:</strong> +91 95248 63508</p>
      </div>
    </section>
  );
};

export default ContactSection;