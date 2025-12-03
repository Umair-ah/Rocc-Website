import { useLanguage } from '../contexts/LanguageContext';
import './Clients.css';

const Clients = () => {
  const { t } = useLanguage();
  const clients = [
    { name: 'Finance Ministry', logo: '', fallback: '🏛️' },
    { name: 'Ministry of Hajj', logo: '', fallback: '🕌' },
    { name: 'General Security', logo: '', fallback: '🛡️' },
    { name: 'Department of Defense', logo: '', fallback: '⚔️' },
    { name: 'Social Security', logo: '', fallback: '🏦' },
    { name: 'Chamber of Commerce', logo: '', fallback: '🏢' },
    { name: 'Kingdom Dates', logo: '', fallback: '🌴' },
    { name: 'Al-Qahtani Transport', logo: '', fallback: '🚛' },
    { name: 'Qassim Gardens', logo: '', fallback: '🌳' },
    { name: 'Ministry of Education', logo: '', fallback: '📚' },
    { name: 'Establishment Security', logo: '', fallback: '🔒' },
    { name: 'Roads Security', logo: '', fallback: '🛣️' },
    { name: 'Dammam Hospital', logo: '', fallback: '🏥' },
    { name: 'Ruboua Al-Qassim', logo: '', fallback: '🏢' },
    { name: 'Amwaj Al Khaleej', logo: '', fallback: '🌊' },
    { name: 'Al-Hawadi', logo: '', fallback: '🏢' },
    { name: 'Al Ammar', logo: '', fallback: '🏗️' },
    { name: 'Cyber Security', logo: '', fallback: '🔐' },
  ];

  return (
    <section className="section clients-section">
      <div className="container">
        <span className="section-label">{t('clients.label')}</span>
        <h2 className="section-title">{t('clients.title')}</h2>
        <p className="section-subtitle">
          {t('clients.subtitle')}
        </p>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <div className="client-logo-wrapper">
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="client-logo-img"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className="client-logo" style={{ display: client.logo ? 'none' : 'flex' }}>
                  {client.fallback}
                </div>
              </div>
              <p className="client-name">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

