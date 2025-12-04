import { useLanguage } from '../contexts/LanguageContext';
import './Clients.css';

const Clients = () => {
  const { t } = useLanguage();
  const clients = [
    { nameKey: 'clients.financeMinistry', logo: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=400&fit=crop&auto=format' },
    { nameKey: 'clients.ministryHajj', logo: 'https://images.pexels.com/photos/34999026/pexels-photo-34999026.jpeg' },
    { nameKey: 'clients.generalSecurity', logo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop&auto=format' },
    { nameKey: 'clients.defense', logo: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=400&fit=crop&auto=format' },
    { nameKey: 'clients.socialSecurity', logo: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=400&fit=crop&auto=format' },
    { nameKey: 'clients.chamberCommerce', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop&auto=format' },
    { nameKey: 'clients.kingdomDates', logo: 'https://images.pexels.com/photos/14962778/pexels-photo-14962778.jpeg' },
    { nameKey: 'clients.alQahtaniTransport', logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&auto=format' },
    { nameKey: 'clients.qassimGardens', logo: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&auto=format' },
    { nameKey: 'clients.ministryEducation', logo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop&auto=format' },
    { nameKey: 'clients.establishmentSecurity', logo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop&auto=format' },
    { nameKey: 'clients.roadsSecurity', logo: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop&auto=format' },
    { nameKey: 'clients.dammamHospital', logo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=400&fit=crop&auto=format' },
    { nameKey: 'clients.rubouaQassim', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop&auto=format' },
    { nameKey: 'clients.amwajKhaleej', logo: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=400&fit=crop&auto=format' },
    { nameKey: 'clients.alHawadi', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop&auto=format' },
    { nameKey: 'clients.alAmmar', logo: 'https://images.pexels.com/photos/443399/pexels-photo-443399.jpeg' },
    { nameKey: 'clients.cyberSecurity', logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop&auto=format' },
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

