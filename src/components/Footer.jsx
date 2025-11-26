import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const translations = {
    restaurantName: { ar: 'مطعم قائمة الطعام', en: 'Food Menu Restaurant' },
    description: { 
      ar: 'نقدم أفضل الأطباق العربية والعالمية بجودة عالية وخدمة ممتازة',
      en: 'We serve the best Arabic and international dishes with high quality and excellent service'
    },
    quickLinks: { ar: 'روابط سريعة', en: 'Quick Links' },
    contactInfo: { ar: 'معلومات الاتصال', en: 'Contact Info' },
    followUs: { ar: 'تابعنا', en: 'Follow Us' },
    rights: { ar: 'جميع الحقوق محفوظة', en: 'All Rights Reserved' }
  };

  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">
              <i className="fas fa-utensils me-2"></i>
              {t(translations.restaurantName)}
            </h5>
            <p className="text-muted">{t(translations.description)}</p>
          </Col>
          
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">{t(translations.contactInfo)}</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i>
                123 Street Name, City
              </li>
              <li className="mb-2">
                <i className="fas fa-phone me-2"></i>
                +20 123 456 7890
              </li>
              <li className="mb-2">
                <i className="fas fa-envelope me-2"></i>
                info@restaurant.com
              </li>
            </ul>
          </Col>
          
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">{t(translations.followUs)}</h5>
            <div className="social-icons">
              <a href="#" className="text-light me-3 fs-4">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-light me-3 fs-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light me-3 fs-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </Col>
        </Row>
        
        <hr className="border-secondary" />
        
        <Row>
          <Col className="text-center text-muted">
            <p className="mb-0">
              © 2024 {t(translations.restaurantName)} - {t(translations.rights)}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
