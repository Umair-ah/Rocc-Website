import { useLanguage } from '../contexts/LanguageContext';
import './Values.css';
const Values = () => {
  const { t } = useLanguage();

  const values = [
    { 
      key: 'values.trust', 
      image: '/images/trust.jpg',
      fallback: '🤝'
    },
    { 
      key: 'values.excellence', 
      image: '/images/excellence.jpg',
      fallback: '⭐'
    },
    { 
      key: 'values.accountability', 
      image: '/images/accountability.jpg',
      fallback: '📊'
    },
    { 
      key: 'values.collaboration', 
      image: '/images/collaboration.jpg',
      fallback: '👥'
    },
    { 
      key: 'values.service', 
      image: '/images/service.jpg',
      fallback: '💼'
    },
    { 
      key: 'values.innovation', 
      image: '/images/innovation.jpg',
      fallback: '💡'
    },
    { 
      key: 'values.gratitude', 
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop&auto=format',
      fallback: '🙏'
    },
  ];

  return (
    <section className="section values-section">
      <div className="container">
        {/* <span className="section-label">{t('values.label')}</span> */}
        <h2 className="section-title">{t('values.title')}</h2>
        <p className="section-subtitle">
          {t('values.subtitle')}
        </p>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon-wrapper">
                <img 
                  src={value.image} 
                  alt={t(value.key)}
                  className="value-icon-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="value-icon" style={{ display: 'none' }}>
                  {value.fallback}
                </div>
              </div>
              <h3 className="value-name">{t(value.key)}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

