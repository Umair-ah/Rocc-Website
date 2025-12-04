import { useLanguage } from '../contexts/LanguageContext';
import './Clients.css';

const Clients = () => {
  const { t } = useLanguage();
  const clients = [
    { nameKey: 'clients.financeMinistry', logo: '/images/ministry-of-finance.png' },
    { nameKey: 'clients.ministryHajj', logo: 'https://images.pexels.com/photos/34999026/pexels-photo-34999026.jpeg' },
    { nameKey: 'clients.generalSecurity', logo: '/images/general-security.png' },
    { nameKey: 'clients.defense', logo: '/images/department-of-defense.png' },
    { nameKey: 'clients.socialSecurity', logo: '/images/Social-Security-1.jpg' },
    { nameKey: 'clients.chamberCommerce', logo: '/images/chamber-of-commerce.png' },
    { nameKey: 'clients.kingdomDates', logo: '/images/kingdom-dates.jpg' },
    { nameKey: 'clients.alQahtaniTransport', logo: '/images/qahtani-transport.jpg' },
    { nameKey: 'clients.qassimGardens', logo: '/images/qassim-gardens.jpg' },
    { nameKey: 'clients.ministryEducation', logo: '/images/ministry-of-education.png' },
    { nameKey: 'clients.establishmentSecurity', logo: '/images/establishment-security.png' },
    { nameKey: 'clients.roadsSecurity', logo: '/images/roads-security.jpg' },
    { nameKey: 'clients.dammamHospital', logo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=400&fit=crop&auto=format' },
    { nameKey: 'clients.rubouaQassim', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop&auto=format' },
    { nameKey: 'clients.amwajKhaleej', logo: '/images/amwaj-khaleej.jpg' },
    { nameKey: 'clients.alHawadi', logo: '/images/al-hwadi.jpg' },
    { nameKey: 'clients.alAmmar', logo: '/images/al-ammar.png' },
    { nameKey: 'clients.cyberSecurity', logo: '/images/cybersecurity.jpg' },
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
                <img 
                  src={client.logo} 
                  alt={t(client.nameKey)}
                  className="client-logo-img"
                />
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

