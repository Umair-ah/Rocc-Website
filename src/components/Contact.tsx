import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert(t('contact.form.success'));
    setFormData({
      name: '',
      email: '',
      phone: '',
      department: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <span className="section-label">{t('contact.label')}</span>
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="section-subtitle">
          {t('contact.subtitle')}
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>{t('contact.email')}</h3>
              <p>altharwahcompany@gmail.com</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>{t('contact.phone')}</h3>
              <p>00966533418617</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>{t('contact.address')}</h3>
              <p>
                Sheikh Mubarak Al-Sabah<br />
                Al-Olayya District 3872<br />
                Riyadh 12313, Saudi Arabia
              </p>
            </div>
     
     
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.form.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('contact.form.namePlaceholder')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contact.form.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('contact.form.emailPlaceholder')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t('contact.form.phone')}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('contact.form.phonePlaceholder')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">{t('contact.form.department')}</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">{t('contact.form.departmentSelect')}</option>
                <option value="business">{t('contact.form.departmentBusiness')}</option>
                <option value="personal">{t('contact.form.departmentPersonal')}</option>
                <option value="support">{t('contact.form.departmentSupport')}</option>
                <option value="others">{t('contact.form.departmentOthers')}</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.form.message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t('contact.form.messagePlaceholder')}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              {t('contact.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

