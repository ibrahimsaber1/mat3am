import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  const translations = {
    welcome: { ar: 'مرحباً بكم في مطعمنا', en: 'Welcome to Our Restaurant' },
    subtitle: { 
      ar: 'استمتع بأفضل الأطباق العربية والعالمية',
      en: 'Enjoy the Best Arabic and International Dishes'
    },
    viewMenu: { ar: 'عرض القائمة', en: 'View Menu' },
    contactUs: { ar: 'تواصل معنا', en: 'Contact Us' },
    whyUs: { ar: 'لماذا نحن؟', en: 'Why Choose Us?' },
    quality: { ar: 'جودة عالية', en: 'High Quality' },
    qualityDesc: { 
      ar: 'نستخدم أجود المكونات لضمان أفضل مذاق',
      en: 'We use the finest ingredients to ensure the best taste'
    },
    fastService: { ar: 'خدمة سريعة', en: 'Fast Service' },
    fastServiceDesc: { 
      ar: 'نقدم خدمة سريعة وفعالة لراحتكم',
      en: 'We provide fast and efficient service for your comfort'
    },
    variety: { ar: 'تنوع كبير', en: 'Great Variety' },
    varietyDesc: { 
      ar: 'قائمة متنوعة تناسب جميع الأذواق',
      en: 'A diverse menu that suits all tastes'
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="text-center text-lg-start">
              <h1 className="display-3 fw-bold mb-4">
                {t(translations.welcome)}
              </h1>
              <p className="lead mb-4">
                {t(translations.subtitle)}
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                <Button 
                  as={Link} 
                  to="/menu" 
                  variant="primary" 
                  size="lg"
                  className="px-4"
                >
                  {t(translations.viewMenu)}
                </Button>
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="outline-primary" 
                  size="lg"
                  className="px-4"
                >
                  {t(translations.contactUs)}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5">{t(translations.whyUs)}</h2>
          <Row className="g-4">
            <Col md={4}>
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-award fs-1 text-primary"></i>
                </div>
                <h4 className="fw-bold">{t(translations.quality)}</h4>
                <p className="text-muted">{t(translations.qualityDesc)}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-bolt fs-1 text-primary"></i>
                </div>
                <h4 className="fw-bold">{t(translations.fastService)}</h4>
                <p className="text-muted">{t(translations.fastServiceDesc)}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-list fs-1 text-primary"></i>
                </div>
                <h4 className="fw-bold">{t(translations.variety)}</h4>
                <p className="text-muted">{t(translations.varietyDesc)}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
