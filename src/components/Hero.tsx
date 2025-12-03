import { useLanguage } from '../contexts/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img 
          src="/images/64.jpg" 
          alt="Riyadh Skyline"
          className="hero-bg-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge fade-in">
            <span>{t('hero.established')}</span>
          </div>
          <h1 className="hero-title fade-in-up">
            {t('hero.title.line1')}
            <br />
            <span className="highlight">{t('hero.title.line2')}</span>
          </h1>
          <p className="hero-subtitle fade-in-up">
            {t('hero.subtitle')}
          </p>
          <div className="hero-buttons fade-in-up">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              {t('hero.button.projects')}
            </button>
            <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
              {t('hero.button.quote')}
            </button>
          </div>
          <div className="hero-stats fade-in">
            <div className="stat-item">
              <div className="stat-number">12+</div>
              <div className="stat-label">{t('hero.stat.years')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">{t('hero.stat.projects')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">{t('hero.stat.satisfaction')}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        {/* <div className="scroll-indicator">
          <span>{t('hero.scroll')}</span>
          <div className="scroll-line"></div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;

