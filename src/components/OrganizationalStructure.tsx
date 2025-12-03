import { useLanguage } from '../contexts/LanguageContext';
import './OrganizationalStructure.css';

const OrganizationalStructure = () => {
  const { t } = useLanguage();

  return (
    <section className="section org-section">
      <div className="container">
        <span className="section-label">{t('org.label')}</span>
        <h2 className="section-title">{t('org.title')}</h2>
        <p className="section-subtitle">
          {t('org.subtitle')}
        </p>
        <div className="org-content">
          <div className="org-level">
            <h3 className="org-level-title">{t('org.management')}</h3>
            <div className="org-item">
              <div className="org-role">{t('org.chairman')}</div>
              <div className="org-name">{t('org.chairmanName')}</div>
            </div>
          </div>

          <div className="org-level">
            <h3 className="org-level-title">{t('org.administrators')}</h3>
            <div className="org-grid">
              <div className="org-item">
                <div className="org-role">{t('org.costAccountant')}</div>
                <div className="org-count">(1)</div>
              </div>
              <div className="org-item">
                <div className="org-role">{t('org.publicAccountant')}</div>
                <div className="org-count">(4)</div>
              </div>
              <div className="org-item">
                <div className="org-role">{t('org.financialManager')}</div>
                <div className="org-count">(1)</div>
              </div>
              <div className="org-item">
                <div className="org-role">{t('org.executiveSecretary')}</div>
                <div className="org-count">(1)</div>
              </div>
            </div>
          </div>

          <div className="org-level">
            <h3 className="org-level-title">{t('org.engineers')}</h3>
            <div className="org-grid">
              <div className="org-item">
                <div className="org-role">{t('org.foreman')}</div>
                <div className="org-count">(5)</div>
              </div>
              <div className="org-item">
                <div className="org-role">{t('org.surveyor')}</div>
                <div className="org-count">(2)</div>
              </div>
              <div className="org-item">
                <div className="org-role">{t('org.architect')}</div>
                <div className="org-count">(4)</div>
              </div>
              <div className="org-item">
                <div className="org-role">{t('org.civilEngineer')}</div>
                <div className="org-count">(2)</div>
              </div>
            </div>
          </div>

          <div className="org-level">
            <h3 className="org-level-title">{t('org.technicians')}</h3>
            <div className="org-item org-total">
              <div className="org-role">{t('org.total')}</div>
              <div className="org-count">(56)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationalStructure;

