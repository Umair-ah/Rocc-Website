import { useLanguage } from '../contexts/LanguageContext';
import './Clients.css';

const Clients = () => {
  const { t } = useLanguage();
  const clients = [
    { nameKey: 'clients.financeMinistry', logo: '', fallback: '🏛️' },
    { nameKey: 'clients.ministryHajj', logo: '', fallback: '🕌' },
    { nameKey: 'clients.generalSecurity', logo: '', fallback: '🛡️' },
    { nameKey: 'clients.defense', logo: '', fallback: '⚔️' },
    { nameKey: 'clients.socialSecurity', logo: '', fallback: '🏦' },
    { nameKey: 'clients.chamberCommerce', logo: '', fallback: '🏢' },
    { nameKey: 'clients.kingdomDates', logo: '', fallback: '🌴' },
    { nameKey: 'clients.alQahtaniTransport', logo: '', fallback: '🚛' },
    { nameKey: 'clients.qassimGardens', logo: '', fallback: '🌳' },
    { nameKey: 'clients.ministryEducation', logo: '', fallback: '📚' },
    { nameKey: 'clients.establishmentSecurity', logo: '', fallback: '🔒' },
    { nameKey: 'clients.roadsSecurity', logo: '', fallback: '🛣️' },
    { nameKey: 'clients.dammamHospital', logo: '', fallback: '🏥' },
    { nameKey: 'clients.rubouaQassim', logo: '', fallback: '🏢' },
    { nameKey: 'clients.amwajKhaleej', logo: '', fallback: '🌊' },
    { nameKey: 'clients.alHawadi', logo: '', fallback: '🏢' },
    { nameKey: 'clients.alAmmar', logo: '', fallback: '🏗️' },
    { nameKey: 'clients.cyberSecurity', logo: '', fallback: '🔐' },
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
                    alt={t(client.nameKey)}
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
              <p className="client-name">{t(client.nameKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

