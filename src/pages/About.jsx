import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const translations = {
    aboutUs: { ar: 'من نحن', en: 'About Us' },
    story: { ar: 'قصتنا', en: 'Our Story' },
    storyText: { 
      ar: 'نحن مطعم متخصص في تقديم أشهى الأطباق العربية والعالمية. بدأت رحلتنا منذ سنوات بحلم بسيط: تقديم طعام لذيذ وصحي في أجواء مريحة. اليوم، نفخر بخدمة آلاف العملاء الراضين.',
      en: 'We are a restaurant specializing in serving the most delicious Arabic and international dishes. Our journey started years ago with a simple dream: to serve delicious and healthy food in a comfortable atmosphere. Today, we are proud to serve thousands of satisfied customers.'
    },
    mission: { ar: 'مهمتنا', en: 'Our Mission' },
    missionText: { 
      ar: 'مهمتنا هي تقديم أفضل تجربة طعام ممكنة من خلال استخدام أجود المكونات وتقديم خدمة عملاء استثنائية. نسعى لأن نكون الخيار الأول لكل من يبحث عن طعام لذيذ وجودة عالية.',
      en: 'Our mission is to provide the best possible dining experience through using the finest ingredients and providing exceptional customer service. We strive to be the first choice for anyone looking for delicious food and high quality.'
    },
    values: { ar: 'قيمنا', en: 'Our Values' },
    value1: { ar: 'الجودة', en: 'Quality' },
    value1Desc: { ar: 'نستخدم أفضل المكونات', en: 'We use the best ingredients' },
    value2: { ar: 'النظافة', en: 'Cleanliness' },
    value2Desc: { ar: 'معايير نظافة عالية', en: 'High cleanliness standards' },
    value3: { ar: 'الخدمة', en: 'Service' },
    value3Desc: { ar: 'خدمة عملاء ممتازة', en: 'Excellent customer service' }
  };

  return (
    <div className="about-page py-5">
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">{t(translations.aboutUs)}</h1>
        </div>

        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <h2 className="fw-bold mb-3">{t(translations.story)}</h2>
            <p className="lead">{t(translations.storyText)}</p>
          </Col>
          <Col md={6} className="mb-4">
            <h2 className="fw-bold mb-3">{t(translations.mission)}</h2>
            <p className="lead">{t(translations.missionText)}</p>
          </Col>
        </Row>

        <div className="values-section">
          <h2 className="text-center fw-bold mb-5">{t(translations.values)}</h2>
          <Row className="g-4">
            <Col md={4}>
              <div className="value-card text-center p-4 bg-light rounded">
                <i className="fas fa-gem fs-1 text-primary mb-3"></i>
                <h4 className="fw-bold">{t(translations.value1)}</h4>
                <p className="text-muted">{t(translations.value1Desc)}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="value-card text-center p-4 bg-light rounded">
                <i className="fas fa-broom fs-1 text-primary mb-3"></i>
                <h4 className="fw-bold">{t(translations.value2)}</h4>
                <p className="text-muted">{t(translations.value2Desc)}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="value-card text-center p-4 bg-light rounded">
                <i className="fas fa-hands-helping fs-1 text-primary mb-3"></i>
                <h4 className="fw-bold">{t(translations.value3)}</h4>
                <p className="text-muted">{t(translations.value3Desc)}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
