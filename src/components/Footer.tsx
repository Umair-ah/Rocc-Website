import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">GWTH</span>
              <span className="logo-subtitle">Gulf Wealth Trading</span>
            </div>
            <p className="footer-description">
              {t('footer.description')}
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">{t('footer.quickLinks')}</h3>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>{t('nav.home')}</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>{t('nav.about')}</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>{t('nav.services')}</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>{t('nav.projects')}</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">{t('footer.services')}</h3>
            <ul className="footer-links">
              <li><a href="#services">{t('services.construction.title')}</a></li>
              <li><a href="#services">{t('services.stone.title')}</a></li>
              <li><a href="#services">{t('services.decoration.title')}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">{t('footer.contactInfo')}</h3>
            <div className="footer-contact">
              <p><strong>{t('contact.email')}:</strong> altharwahcompany@gmail.com</p>
              <p><strong>{t('contact.phone')}:</strong> 00966533418617</p>
              <p className="footer-address">
                <strong>{t('contact.address')}:</strong><br />
                Sheikh Mubarak Al-Sabah<br />
                Al-Olayya District 3872<br />
                Riyadh 12313, Saudi Arabia
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
          <div className="footer-bottom-links">
            <a href="#contact">{t('nav.contact')}</a>
            <span>|</span>
            <a href="#">{t('footer.privacy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

