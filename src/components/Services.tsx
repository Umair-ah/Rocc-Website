import { useLanguage } from '../contexts/LanguageContext';
import './Services.css';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      image: '/images/36.JPG',
      fallback: '🏗️',
      titleKey: 'services.construction.title',
      descKey: 'services.construction.desc',
    },
    {
      image: '/images/37.JPG',
      fallback: '🪨',
      titleKey: 'services.stone.title',
      descKey: 'services.stone.desc',
    },
    {
      image: '/images/38.JPG',
      fallback: '🎨',
      titleKey: 'services.decoration.title',
      descKey: 'services.decoration.desc',
    },
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        {/* <span className="section-label">{t('services.label')}</span> */}
        <h2 className="section-title">{t('services.title')}</h2>
        <p className="section-subtitle">
          {t('services.subtitle')}
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image-wrapper">
                <img 
                  src={service.image} 
                  alt={t(service.titleKey)}
                  className="service-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="service-icon" style={{ display: 'none' }}>
                  {service.fallback}
                </div>
              </div>
              <h3 className="service-title">{t(service.titleKey)}</h3>
              <p className="service-description">{t(service.descKey)}</p>
              <a href="#contact" className="service-link">
                {t('services.learnMore')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

