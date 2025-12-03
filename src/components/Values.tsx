import { useLanguage } from '../contexts/LanguageContext';
import './Values.css';

const Values = () => {
  const { t } = useLanguage();

  const values = [
    { key: 'values.trust', icon: '🤝' },
    { key: 'values.excellence', icon: '⭐' },
    { key: 'values.accountability', icon: '📊' },
    { key: 'values.collaboration', icon: '👥' },
    { key: 'values.service', icon: '💼' },
    { key: 'values.innovation', icon: '💡' },
    { key: 'values.gratitude', icon: '🙏' },
  ];

  return (
    <section className="section values-section">
      <div className="container">
        <span className="section-label">{t('values.label')}</span>
        <h2 className="section-title">{t('values.title')}</h2>
        <p className="section-subtitle">
          {t('values.subtitle')}
        </p>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-name">{t(value.key)}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

