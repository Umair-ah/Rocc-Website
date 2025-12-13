import { useLanguage } from '../contexts/LanguageContext';
import './Certificates.css';

const Certificates = () => {
  const { t } = useLanguage();
  const certificates = [
    { 
      nameKey: 'certificates.commercialRegister', 
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=400&fit=crop&auto=format',
      numberKey: 'certificates.commercialRegisterNumber' 
    },
    { 
      nameKey: 'certificates.vatRegistration', 
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop&auto=format',
      numberKey: 'certificates.vatNumber' 
    },
    { 
      nameKey: 'certificates.saudization', 
      image: 'https://images.pexels.com/photos/15483696/pexels-photo-15483696.jpeg',
      numberKey: 'certificates.saudizationNumber' 
    },
    { 
      nameKey: 'certificates.socialInsurance', 
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop&auto=format',
      numberKey: 'certificates.socialInsuranceNumber' 
    },
    { 
      nameKey: 'certificates.certificatesShadah', 
      image: '/images/cert-shadah.jpg',
      numberKey: 'certificates.certificatesShadahNumber' 
    },
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
              <div className="certificate-icon">
                <img 
                  src={cert.image} 
                  alt={t(cert.nameKey)}
                  className="certificate-icon-image"
                />
              </div>
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

