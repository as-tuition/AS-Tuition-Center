import React from 'react';
import { useLanguage } from '../LanguageContext';
import './FeaturesSection.css';

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="features-section">
      <h2>{t('why_choose_us')}</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>{t('qualified_teachers')}</h3>
        </div>
        <div className="feature-card">
          <h3>{t('daily_classwork')}</h3>
        </div>
        <div className="feature-card">
          <h3>{t('monthly_reports')}</h3>
        </div>
        <div className="feature-card">
          <h3>{t('parent_feedback')}</h3>
        </div>
        <div className="feature-card">
          <h3>{t('special_care_lkg_ukg')}</h3>
        </div>
        <div className="feature-card">
          <h3>{t('digital_learning_tools')}</h3>
        </div>
        <div className="feature-card">
          <h3>{t('mr_aravindh_teaching')}</h3>
        </div>
        <div className="feature-card">
          <h3>{t('mrs_sangeetha_teaching')}</h3>
        </div>
      </div>
      <div className="daily-video-feature">
        <h3>{t('daily_learning_video_feature')}</h3>
        <p>{t('daily_learning_video_text')}</p>
        <p>{t('builds_trust')}</p>
      </div>
    </section>
  );
};

export default FeaturesSection;