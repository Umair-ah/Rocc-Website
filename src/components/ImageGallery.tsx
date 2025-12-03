import { useLanguage } from '../contexts/LanguageContext';
import './ImageGallery.css';

const ImageGallery = () => {
  const { t } = useLanguage();

  // All remaining images from 40-74 (excluding 71.jpg used in Hero)
  const galleryImages = [
    '/images/40.JPG', '/images/41.JPG', '/images/42.JPG', '/images/43.JPG',
    '/images/44.JPG', '/images/45.JPG', '/images/46.JPG', '/images/47.JPG',
    '/images/48.JPG', '/images/49.JPG', '/images/50.JPG', '/images/51.JPG',
    '/images/52.JPG', '/images/53.JPG', '/images/54.JPG', '/images/55.JPG',
    '/images/56.JPG', '/images/57.JPG', '/images/58.JPG', '/images/59.JPG',
    '/images/60.JPG', '/images/61.JPG', '/images/62.JPG', '/images/63.jpg',
    '/images/64.jpg', '/images/65.jpg', '/images/66.jpg', '/images/67.jpg',
    '/images/68.jpg', '/images/69.jpg', '/images/70.jpg', '/images/72.jpg',
    '/images/73.jpg', '/images/74.jpg',
  ];

  return (
    <section className="section gallery-section">
      <div className="container">
        <span className="section-label">{t('gallery.label')}</span>
        <h2 className="section-title">{t('gallery.title')}</h2>
        <p className="section-subtitle">
          {t('gallery.subtitle')}
        </p>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img 
                src={image} 
                alt={`Project Gallery ${index + 1}`}
                className="gallery-image"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;

