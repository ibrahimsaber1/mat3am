import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const translations = {
    aboutUs: { ar: 'من نحن', en: 'About Us' },
    subtitle: { ar: 'تعرف على قصتنا ورحلتنا', en: 'Discover Our Story and Journey' },
    
    story: { ar: 'قصتنا', en: 'Our Story' },
    storyText: { 
      ar: 'بدأت رحلتنا في قلب المملكة العربية السعودية بحلم بسيط: تقديم أفضل تجربة طعام ممكنة. نحن مطعم متخصص في تقديم أشهى الأطباق العربية والعالمية، مع التركيز على اللحوم المشوية الفاخرة والأطباق التقليدية المحضرة بطرق عصرية. اليوم، أصبحنا وجهة مفضلة لعشاق الطعام الفاخر.',
      en: 'Our journey began in the heart of Saudi Arabia with a simple dream: to provide the best dining experience possible. We are a restaurant specializing in serving the most delicious Arabic and international dishes, focusing on premium grilled meats and traditional dishes prepared in modern ways. Today, we have become a preferred destination for lovers of fine dining.'
    },
    
    mission: { ar: 'مهمتنا', en: 'Our Mission' },
    missionText: { 
      ar: 'مهمتنا هي إحياء تراث الطعام العربي الأصيل وتقديمه بأسلوب عصري يحترم الجودة والتميز. نسعى لأن نكون الخيار الأول لكل من يبحث عن تجربة طعام لا تُنسى، مع خدمة عملاء استثنائية وأجواء فاخرة تجمع بين الأصالة والحداثة.',
      en: 'Our mission is to revive authentic Arabic food heritage and present it in a modern style that respects quality and excellence. We strive to be the first choice for anyone looking for an unforgettable dining experience, with exceptional customer service and luxurious atmosphere that combines authenticity and modernity.'
    },
    
    location: { ar: 'موقعنا', en: 'Our Location' },
    locationText: { 
      ar: 'يقع مطعمنا في موقع متميز في الرياض، بتصميم معماري يجمع بين الطابع العربي التقليدي والحداثة. نوفر مساحات داخلية فاخرة ومنطقة خارجية ساحرة لتناول الطعام في أجواء مميزة.',
      en: 'Our restaurant is located in a prime location in Riyadh, with an architectural design that combines traditional Arabic character with modernity. We offer luxurious interior spaces and a charming outdoor area for dining in a distinctive atmosphere.'
    },
    
    values: { ar: 'قيمنا', en: 'Our Values' },
    
    value1: { ar: 'الجودة الفائقة', en: 'Superior Quality' },
    value1Desc: { ar: 'نختار أفضل المكونات من مصادر موثوقة', en: 'We select the best ingredients from trusted sources' },
    
    value2: { ar: 'الأصالة', en: 'Authenticity' },
    value2Desc: { ar: 'نحافظ على الطعم الأصيل والتقاليد العريقة', en: 'We preserve authentic taste and ancient traditions' },
    
    value3: { ar: 'الضيافة العربية', en: 'Arabic Hospitality' },
    value3Desc: { ar: 'نستقبلكم بكرم الضيافة العربية الأصيلة', en: 'We welcome you with authentic Arabic hospitality' },
    
    value4: { ar: 'الابتكار', en: 'Innovation' },
    value4Desc: { ar: 'نطور أطباقنا بأساليب طهي عصرية', en: 'We develop our dishes with modern cooking methods' },
    
    address: { ar: 'عنواننا', en: 'Our Address' },
    fullAddress: { 
      ar: 'طريق الملك فهد، حي العليا، الرياض 12211، المملكة العربية السعودية',
      en: 'King Fahd Road, Al Olaya District, Riyadh 12211, Saudi Arabia'
    }
  };

  return (
    <div className="about-page">
      {/* Hero Section with Outside Image */}
      <section className="about-hero-section">
        <div className="about-hero-overlay">
          <Container>
            <div className="text-center text-white py-5">
              <h1 className="display-3 fw-bold mb-3">{t(translations.aboutUs)}</h1>
              <p className="lead fs-4">{t(translations.subtitle)}</p>
            </div>
          </Container>
        </div>
      </section>

      {/* Story and Mission Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5 align-items-center">
            <Col md={6} className="mb-4">
              <h2 className="fw-bold mb-4 display-6">
                <i className="fas fa-book-open text-primary me-3"></i>
                {t(translations.story)}
              </h2>
              <p className="lead text-muted">{t(translations.storyText)}</p>
            </Col>
            <Col md={6} className="mb-4">
              <h2 className="fw-bold mb-4 display-6">
                <i className="fas fa-bullseye text-primary me-3"></i>
                {t(translations.mission)}
              </h2>
              <p className="lead text-muted">{t(translations.missionText)}</p>
            </Col>
          </Row>
          
          <Row className="mb-5">
            <Col md={12}>
              <div className="location-card p-5 bg-white rounded shadow-sm">
                <h2 className="fw-bold mb-4 display-6">
                  <i className="fas fa-map-marker-alt text-primary me-3"></i>
                  {t(translations.location)}
                </h2>
                <p className="lead text-muted mb-4">{t(translations.locationText)}</p>
                <div className="bg-light p-4 rounded">
                  <h5 className="fw-bold mb-2">
                    <i className="fas fa-location-dot text-danger me-2"></i>
                    {t(translations.address)}
                  </h5>
                  <p className="fs-5 mb-0 text-muted">{t(translations.fullAddress)}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="values-section py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5 display-5">{t(translations.values)}</h2>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="value-card-new text-center p-4 h-100">
                <div className="value-icon mb-3">
                  <i className="fas fa-certificate fa-3x text-warning"></i>
                </div>
                <h4 className="fw-bold mb-3">{t(translations.value1)}</h4>
                <p className="text-muted">{t(translations.value1Desc)}</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="value-card-new text-center p-4 h-100">
                <div className="value-icon mb-3">
                  <i className="fas fa-history fa-3x text-warning"></i>
                </div>
                <h4 className="fw-bold mb-3">{t(translations.value2)}</h4>
                <p className="text-muted">{t(translations.value2Desc)}</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="value-card-new text-center p-4 h-100">
                <div className="value-icon mb-3">
                  <i className="fas fa-handshake fa-3x text-warning"></i>
                </div>
                <h4 className="fw-bold mb-3">{t(translations.value3)}</h4>
                <p className="text-muted">{t(translations.value3Desc)}</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="value-card-new text-center p-4 h-100">
                <div className="value-icon mb-3">
                  <i className="fas fa-lightbulb fa-3x text-warning"></i>
                </div>
                <h4 className="fw-bold mb-3">{t(translations.value4)}</h4>
                <p className="text-muted">{t(translations.value4Desc)}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
