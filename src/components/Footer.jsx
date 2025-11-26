import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import "./Footer.css"

const Footer = () => {
  const { t } = useLanguage();

  const translations = {
    restaurantName: { ar: 'المطعم ', en: 'elmat3am' },
    description: { 
      ar: 'نقدم أفضل الأطباق العربية والعالمية بجودة عالية وخدمة ممتازة في قلب الرياض',
      en: 'We serve the best Arabic and international dishes with high quality and excellent service in the heart of Riyadh'
    },
    
    quickLinks: { ar: 'روابط سريعة', en: 'Quick Links' },
    home: { ar: 'الرئيسية', en: 'Home' },
    menu: { ar: 'القائمة', en: 'Menu' },
    about: { ar: 'من نحن', en: 'About Us' },
    contact: { ar: 'تواصل معنا', en: 'Contact' },
    
    contactInfo: { ar: 'معلومات الاتصال', en: 'Contact Info' },
    address: { ar: 'العنوان', en: 'Address' },
    addressFull: { 
      ar: 'طريق الملك فهد، حي العليا، الرياض 12211، المملكة العربية السعودية',
      en: 'King Fahd Road, Al Olaya District, Riyadh 12211, Saudi Arabia'
    },
    phone: { ar: 'الهاتف', en: 'Phone' },
    email: { ar: 'البريد الإلكتروني', en: 'Email' },
    whatsapp: { ar: 'واتساب', en: 'WhatsApp' },
    
    openingHours: { ar: 'ساعات العمل', en: 'Opening Hours' },
    everyday: { ar: 'يومياً', en: 'Every Day' },
    hours: { ar: '10:00 صباحاً - 12:00 منتصف الليل', en: '10:00 AM - 12:00 AM' },
    friday: { ar: 'الجمعة', en: 'Friday' },
    fridayHours: { ar: '2:00 ظهراً - 12:00 منتصف الليل', en: '2:00 PM - 12:00 AM' },
    
    followUs: { ar: 'تابعنا', en: 'Follow Us' },
    socialText: { 
      ar: 'تابعنا على وسائل التواصل الاجتماعي',
      en: 'Follow us on social media'
    },
    
    ourLocation: { ar: 'موقعنا', en: 'Our Location' },
    viewMap: { ar: 'عرض الخريطة', en: 'View Map' },
    
    rights: { ar: 'جميع الحقوق محفوظة', en: 'All Rights Reserved' },
    designedBy: { ar: 'تصميم وتطوير بواسطة', en: 'Designed & Developed by' },
    team: { ar: ' ابراهيم صابر', en: 'Ibrahim Saber' }
  };

  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <Container>
        <Row className="g-4">
          {/* About Section */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="fw-bold mb-3 footer-heading">
              <i className="fas fa-utensils me-2 text-warning"></i>
              {t(translations.restaurantName)}
            </h5>
            <p className=" small">{t(translations.description)}</p>
            <div className="social-icons mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-4 social-link">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-4 social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-4 social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4 social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </Col>
          
          {/* Quick Links */}
          <Col lg={2} md={6} className="mb-4">
            <h5 className="fw-bold mb-3 footer-heading">{t(translations.quickLinks)}</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link to="/" className=" text-decoration-none">
                  <i className="fas fa-chevron-right me-2 small"></i>
                  {t(translations.home)}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/menu" className=" text-decoration-none">
                  <i className="fas fa-chevron-right me-2 small"></i>
                  {t(translations.menu)}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className=" text-decoration-none">
                  <i className="fas fa-chevron-right me-2 small"></i>
                  {t(translations.about)}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className=" text-decoration-none">
                  <i className="fas fa-chevron-right me-2 small"></i>
                  {t(translations.contact)}
                </Link>
              </li>
            </ul>
          </Col>
          
          {/* Contact Info */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="fw-bold mb-3 footer-heading">{t(translations.contactInfo)}</h5>
            <ul className="list-unstyled  footer-contact">
              <li className="mb-3">
                <i className="fas fa-map-marker-alt me-2 text-warning"></i>
                <small>{t(translations.addressFull)}</small>
              </li>
              <li className="mb-2">
                <i className="fas fa-phone me-2 text-warning"></i>
                <a href="tel:+201027624649" className=" text-decoration-none">
                  +20 1027624649
                </a>
              </li>
              <li className="mb-2">
                <i className="fab fa-whatsapp me-2 text-warning"></i>
                <a href="https://wa.me/01027624649" target="_blank" rel="noopener noreferrer" className=" text-decoration-none">
                  +201027624649
                </a>
              </li>
              <li className="mb-2">
                <i className="fas fa-envelope me-2 text-warning"></i>
                <a href="mailto:ibrahimsaber622.com" className=" text-decoration-none">
                  ibrahimsaber622.com
                </a>
              </li>
            </ul>
          </Col>
          
          {/* Opening Hours */}
          <Col lg={4} md={6} className="mb-4">
            <h5 className="fw-bold mb-3 footer-heading">{t(translations.openingHours)}</h5>
            <ul className="list-unstyled ">
              <li className="mb-2 d-flex justify-content-between">
                <span>
                  <i className="far fa-clock me-2 text-warning"></i>
                  {t(translations.everyday)}
                </span>
                <span className="fw-bold">{t(translations.hours)}</span>
              </li>
              <li className="mb-3 d-flex justify-content-between">
                <span>
                  <i className="far fa-clock me-2 text-warning"></i>
                  {t(translations.friday)}
                </span>
                <span className="fw-bold">{t(translations.fridayHours)}</span>
              </li>
            </ul>
            
            {/* Newsletter or CTA */}
            <div className="mt-3">
              <Link to="/contact" className="btn btn-warning btn-sm w-100 fw-bold">
                <i className="fas fa-calendar-check me-2"></i>
                {t({ ar: 'احجز طاولة الآن', en: 'Book a Table Now' })}
              </Link>
            </div>
          </Col>
        </Row>
        
        <hr className="border-secondary my-4" />
        
        {/* Map Section */}
        <Row className="mb-4">
          <Col md={12}>
            <h5 className="fw-bold mb-3 text-center footer-heading">
              <i className="fas fa-map-marked-alt me-2 text-warning"></i>
              {t(translations.ourLocation)}
            </h5>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.0978686305855!2d46.67293857532896!3d24.713552778081843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sKing%20Fahd%20Road%2C%20Al%20Olaya%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
              ></iframe>
            </div>
          </Col>
        </Row>
        
        <hr className="border-secondary my-4" />
        
        {/* Copyright */}
        <Row>
          <Col className="text-center ">
            <p className="mb-1">
              © 2024 {t(translations.restaurantName)} - {t(translations.rights)}
            </p>
            <p className="mb-0 small">
              {t(translations.designedBy)} <span className="text-warning fw-bold">{t(translations.team)}</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
