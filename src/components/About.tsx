import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <span className="section-label">{t('about.label')}</span>
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="about-description">
              {t('about.description1')}
            </p>
            <p className="about-description">
              {t('about.description2')}
            </p>
            <p className="about-description">
              {t('about.description3')}
            </p>
            <div className="chairman-speech">
              <h3 className="speech-title">{t('about.chairman')}</h3>
              <p className="speech-text">
                {t('about.chairman.speech')}
              </p>
              <div className="chairman-signature">
                <p className="chairman-name">{t('about.chairman')}</p>
              </div>
            </div>
            <div className="about-quote">
              <div className="quote-icon">"</div>
              <p className="quote-text">
                {t('about.quote')}
              </p>
            </div>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h4>{t('about.feature.team.title')}</h4>
                  <p>{t('about.feature.team.desc')}</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h4>{t('about.feature.quality.title')}</h4>
                  <p>{t('about.feature.quality.desc')}</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h4>{t('about.feature.innovation.title')}</h4>
                  <p>{t('about.feature.innovation.desc')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="visual-card">
              <img 
                src="/images/39.JPG" 
                alt="Company Building"
                className="visual-card-bg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="card-content">
                <h3>{t('about.vision.title')}</h3>
                <p>
                  {t('about.vision.text')}
                </p>
                <button className="btn btn-primary">{t('about.vision.button')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

