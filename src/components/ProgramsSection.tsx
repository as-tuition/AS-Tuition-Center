import React from 'react';
import { useLanguage } from '../LanguageContext';
import './ProgramsSection.css';

const ProgramsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="programs-section">
      <h2>{t('programs_courses_offered')}</h2>
      <div className="program-grid">
        <div className="program-card">
          <h3>{t('lkg_ukg')}</h3>
          <p>{t('lkg_ukg_subjects')}</p>
        </div>
        <div className="program-card">
          <h3>{t('first_fifth_std')}</h3>
          <p>{t('first_fifth_subjects')}</p>
        </div>
        <div className="program-card">
          <h3>{t('sixth_eighth_std')}</h3>
          <p>{t('sixth_eighth_subjects')}</p>
        </div>
        <div className="program-card">
          <h3>{t('ninth_twelfth_std')}</h3>
          <p>{t('ninth_twelfth_subjects')}</p>
        </div>
        <div className="program-card">
          <h3>{t('skill_courses')}</h3>
          <p>{t('spoken_english')}, {t('basic_cs')}, {t('typing_ms_office')}</p>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
