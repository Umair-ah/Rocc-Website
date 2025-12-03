import { useLanguage } from '../contexts/LanguageContext';
import './Certificates.css';

const Certificates = () => {
  const { t } = useLanguage();
  const certificates = [
    { nameKey: 'certificates.commercialRegister', icon: '📜', numberKey: 'certificates.commercialRegisterNumber' },
    { nameKey: 'certificates.vatRegistration', icon: '💰', numberKey: 'certificates.vatNumber' },
    { nameKey: 'certificates.saudization', icon: '✅', numberKey: 'certificates.saudizationNumber' },
    { nameKey: 'certificates.socialInsurance', icon: '🛡️', numberKey: 'certificates.socialInsuranceNumber' },
  ];

  return (
    <section className="section certificates-section">
      <div className="container">
        <span className="section-label">{t('certificates.label')}</span>
        <h2 className="section-title">{t('certificates.title')}</h2>
        <p className="section-subtitle">
          {t('certificates.subtitle')}
        </p>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-icon">{cert.icon}</div>
              <h3 className="certificate-name">{t(cert.nameKey)}</h3>
              {cert.numberKey && <p className="certificate-number">{t(cert.numberKey)}</p>}
            </div>
          ))}
        </div>
        <div className="certificates-cta">
          {/* <button className="btn btn-outline">{t('certificates.viewAll')}</button> */}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

