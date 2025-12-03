import { useLanguage } from '../contexts/LanguageContext';
import './Certificates.css';

const Certificates = () => {
  const { t } = useLanguage();
  const certificates = [
    { name: 'Commercial Register', icon: '📜', number: '1010798697' },
    { name: 'VAT Registration', icon: '💰', number: '311278860600003' },
    { name: 'Saudization Certificate', icon: '✅', number: '171728-17984411' },
    { name: 'Social Insurance', icon: '🛡️', number: '632619588' },
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
              <h3 className="certificate-name">{cert.name}</h3>
              {cert.number && <p className="certificate-number">{cert.number}</p>}
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

