import { useLanguage } from '../contexts/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    { titleKey: 'projects.ministryFinance', categoryKey: 'projects.commercial', image: '/images/1.JPG', fallback: '🏛️' },
    { titleKey: 'projects.ministryHajj', categoryKey: 'projects.commercial', image: '/images/2.JPG', fallback: '🕌' },
    { titleKey: 'projects.holyMosque', categoryKey: 'projects.commercial', image: '/images/3.JPG', fallback: '🕌' },
    { titleKey: 'projects.militaryCommand', categoryKey: 'projects.commercial', image: '/images/4.JPG', fallback: '⚔️' },
    { titleKey: 'projects.socialSecurity', categoryKey: 'projects.commercial', image: '/images/5.JPG', fallback: '🏦' },
    { titleKey: 'projects.generalSecurity', categoryKey: 'projects.commercial', image: '/images/6.JPG', fallback: '🛡️' },
    { titleKey: 'projects.defense', categoryKey: 'projects.commercial', image: '/images/7.JPG', fallback: '🏛️' },
    { titleKey: 'projects.kingdomDates', categoryKey: 'projects.commercial', image: '/images/8.JPG', fallback: '🌴' },
    { titleKey: 'projects.kyrgyzEmbassy', categoryKey: 'projects.commercial', image: '/images/9.JPG', fallback: '🏛️' },
    { titleKey: 'projects.cayanTower', categoryKey: 'projects.commercial', image: '/images/10.JPG', fallback: '🏢' },
    { titleKey: 'projects.chamberCommerce', categoryKey: 'projects.commercial', image: '/images/11.JPG', fallback: '🏢' },
    { titleKey: 'projects.reefVillage', categoryKey: 'projects.commercial', image: '/images/12.JPG', fallback: '🏬' },
    { titleKey: 'projects.saadeddin', categoryKey: 'projects.commercial', image: '/images/13.JPG', fallback: '☕' },
    { titleKey: 'projects.sheikhFahdVilla', categoryKey: 'projects.residential', image: '/images/14.JPG', fallback: '🏡' },
    { titleKey: 'projects.coffeeLisibland', categoryKey: 'projects.entertainment', image: '/images/15.JPG', fallback: '☕' },
    { titleKey: 'projects.tatelRestaurant', categoryKey: 'projects.entertainment', image: '/images/16.JPG', fallback: '🍽️' },
    { titleKey: 'projects.coffeeSintra', categoryKey: 'projects.entertainment', image: '/images/17.JPG', fallback: '☕' },
    { titleKey: 'projects.coffeeFlamo', categoryKey: 'projects.entertainment', image: '/images/18.JPG', fallback: '☕' },
    { titleKey: 'projects.coffeeTVM', categoryKey: 'projects.entertainment', image: '/images/19.JPG', fallback: '☕' },
    { titleKey: 'projects.fifaFitClub', categoryKey: 'projects.entertainment', image: '/images/20.JPG', fallback: '💪' },
    { titleKey: 'projects.alMakanOffices', categoryKey: 'projects.commercial', image: '/images/21.JPG', fallback: '🏢' },
    { titleKey: 'projects.electricityTowers', categoryKey: 'projects.commercial', image: '/images/22.JPG', fallback: '⚡' },
    { titleKey: 'projects.alFadhili', categoryKey: 'projects.commercial', image: '/images/23.JPG', fallback: '🏗️' },
    { titleKey: 'projects.ibrahimVillas', categoryKey: 'projects.residential', image: '/images/24.JPG', fallback: '🏡' },
    { titleKey: 'projects.princeAhmedRest', categoryKey: 'projects.residential', image: '/images/25.JPG', fallback: '🏡' },
    { titleKey: 'projects.drFahdRest', categoryKey: 'projects.residential', image: '/images/26.JPG', fallback: '🏡' },
    { titleKey: 'projects.sheikhAliRest', categoryKey: 'projects.residential', image: '/images/27.JPG', fallback: '🏡' },
    { titleKey: 'projects.reefCenter', categoryKey: 'projects.commercial', image: '/images/28.JPG', fallback: '🪨' },
    { titleKey: 'projects.officeHouses', categoryKey: 'projects.commercial', image: '/images/29.JPG', fallback: '🏢' },
    { titleKey: 'projects.sheikhAhmedVilla', categoryKey: 'projects.residential', image: '/images/30.JPG', fallback: '🏡' },
    { titleKey: 'projects.fatimaMosque', categoryKey: 'projects.commercial', image: '/images/31.JPG', fallback: '🕌' },
    { titleKey: 'projects.saadEddeinNahdha', categoryKey: 'projects.entertainment', image: '/images/32.JPG', fallback: '🍰' },
    // { titleKey: 'projects.saadEddeinMurabaa', categoryKey: 'projects.entertainment', image: '/images/33.JPG', fallback: '🍰' },
    // { titleKey: 'projects.saadeddinUniversity', categoryKey: 'projects.entertainment', image: '/images/34.JPG', fallback: '☕' },
    // { titleKey: 'projects.bajaShopes', categoryKey: 'projects.commercial', image: '/images/35.JPG', fallback: '🏪' },
    { titleKey: 'projects.roshanAlDurah', categoryKey: 'projects.residential', image: '/images/روشن1.jpeg', fallback: '🏡' },
    { titleKey: 'projects.roshanAlDurah', categoryKey: 'projects.residential', image: '/images/روشن1.jpeg', fallback: '🏡' },
    { titleKey: 'projects.roshanAlDurah', categoryKey: 'projects.residential', image: '/images/روشن2.jpeg', fallback: '🏡' },
    { titleKey: 'projects.roshanAlDurah', categoryKey: 'projects.residential', image: '/images/روشن1.jpeg', fallback: '🏡' },
    { titleKey: 'projects.roshanAlDurah', categoryKey: 'projects.residential', image: '/images/روشن4.jpeg', fallback: '🏡' },
    { titleKey: 'projects.roshanAlDurah', categoryKey: 'projects.residential', image: '/images/روشن5.jpeg', fallback: '🏡' },
    { titleKey: 'projects.roshanAlDurah', categoryKey: 'projects.residential', image: '/images/روشن6.jpeg', fallback: '🏡' },
    { titleKey: 'projects.roshanAlDurah', categoryKey: 'projects.residential', image: '/images/روشن7.jpeg', fallback: '🏡' },
    { titleKey: 'projects.roshanAlDurah', categoryKey: 'projects.residential', image: '/images/روشن8.jpeg', fallback: '🏡' },
    { titleKey: 'projects.roshanAlDurah', categoryKey: 'projects.residential', image: '/images/روشن9.jpeg', fallback: '🏡' },
 
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <span className="section-label">{t('projects.label')}</span>
        <h2 className="section-title">{t('projects.title')}</h2>
        <p className="section-subtitle">
          {t('projects.subtitle')}
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={t(project.titleKey)}
                  className="project-img"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="project-placeholder" style={{ display: 'none' }}>
                  {project.fallback}
                </div>
                <div className="project-overlay">
                  <span className="project-category">{t(project.categoryKey)}</span>
                  <h3 className="project-title">{t(project.titleKey)}</h3>
                  {/* <button className="btn btn-primary">{t('projects.viewDetails')}</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="projects-cta">
          {/* <button className="btn btn-outline">{t('projects.viewAll')}</button> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;

