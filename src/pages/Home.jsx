import React from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import MenuCard from '../components/MenuCard';
import steaksData from '../data/steaks_bilingual.json';

const Home = () => {
  const { t } = useLanguage();

  // Get featured steaks (first 4 items)
  const featuredSteaks = steaksData.slice(0, 4);

  const translations = {
    welcome: { ar: 'مرحباً بكم في مطعمنا', en: 'Welcome to Our Restaurant' },
    subtitle: { 
      ar: 'استمتع بأفضل الأطباق العربية والعالمية في أجواء فاخرة',
      en: 'Enjoy the Best Arabic and International Dishes in a Luxurious Atmosphere'
    },
    viewMenu: { ar: 'عرض القائمة', en: 'View Menu' },
    bookTable: { ar: 'احجز طاولة', en: 'Book a Table' },
    
    // Special Offers
    specialOffers: { ar: 'العروض الخاصة', en: 'Special Offers' },
    offersSubtitle: { ar: 'عروض حصرية لفترة محدودة', en: 'Exclusive Offers for Limited Time' },
    
    offer1Title: { ar: 'خصم 25%', en: '25% OFF' },
    offer1Desc: { ar: 'على جميع أطباق المشويات', en: 'On All BBQ Dishes' },
    
    offer2Title: { ar: 'وجبة عائلية', en: 'Family Meal' },
    offer2Desc: { ar: 'لـ 4 أشخاص بسعر خاص', en: 'For 4 People at Special Price' },
    
    offer3Title: { ar: 'توصيل مجاني', en: 'Free Delivery' },
    offer3Desc: { ar: 'للطلبات أكثر من 150 ريال', en: 'For Orders Over 150 SAR' },
    
    // Featured Menu
    featuredMenu: { ar: 'قائمة مميزة', en: 'Featured Menu' },
    featuredSubtitle: { ar: 'أشهى أطباق اللحوم المشوية', en: 'The Most Delicious Grilled Steaks' },
    viewAllMenu: { ar: 'عرض القائمة الكاملة', en: 'View Full Menu' },
    
    // Why Choose Us
    whyUs: { ar: 'لماذا نحن؟', en: 'Why Choose Us?' },
    quality: { ar: 'جودة عالية', en: 'Premium Quality' },
    qualityDesc: { 
      ar: 'نستخدم أجود أنواع اللحوم والمكونات الطازجة',
      en: 'We use the finest meats and fresh ingredients'
    },
    chef: { ar: 'طهاة محترفون', en: 'Expert Chefs' },
    chefDesc: { 
      ar: 'طهاة ذوي خبرة عالمية في فن الطهي',
      en: 'Chefs with international experience in culinary arts'
    },
    ambiance: { ar: 'أجواء فاخرة', en: 'Luxury Ambiance' },
    ambianceDesc: { 
      ar: 'تصميم داخلي راقي وأجواء مريحة',
      en: 'Elegant interior design and comfortable atmosphere'
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section with Background Image */}
      <section className="hero-section-new">
        <div className="hero-overlay">
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col lg={7} className="text-center text-lg-start text-white">
                <h1 className="display-2 fw-bold mb-4 hero-title">
                  {t(translations.welcome)}
                </h1>
                <p className="lead mb-5 fs-4">
                  {t(translations.subtitle)}
                </p>
                <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">
                  <Button 
                    as={Link} 
                    to="/menu" 
                    variant="warning" 
                    size="lg"
                    className="px-5 py-3 fw-bold"
                  >
                    <i className="fas fa-book-open me-2"></i>
                    {t(translations.viewMenu)}
                  </Button>
                  <Button 
                    as={Link} 
                    to="/contact" 
                    variant="outline-light" 
                    size="lg"
                    className="px-5 py-3 fw-bold"
                  >
                    <i className="fas fa-calendar-check me-2"></i>
                    {t(translations.bookTable)}
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="offers-section py-5 bg-dark text-white">
        <Container>
          <div className="text-center mb-5">
            <Badge bg="warning" text="dark" className="px-4 py-2 fs-6 mb-3">
              <i className="fas fa-fire me-2"></i>
              {t(translations.specialOffers)}
            </Badge>
            <h2 className="display-5 fw-bold">{t(translations.offersSubtitle)}</h2>
          </div>
          
          <Row className="g-4">
            <Col md={4}>
              <Card className="offer-card h-100 bg-gradient-primary text-white border-0">
                <Card.Body className="text-center p-4">
                  <div className="offer-icon mb-3">
                    <i className="fas fa-percent fa-3x"></i>
                  </div>
                  <h3 className="fw-bold mb-3">{t(translations.offer1Title)}</h3>
                  <p className="fs-5">{t(translations.offer1Desc)}</p>
                  <Button variant="warning" className="mt-3 fw-bold">
                    {t(translations.viewMenu)}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="offer-card h-100 bg-gradient-success text-white border-0">
                <Card.Body className="text-center p-4">
                  <div className="offer-icon mb-3">
                    <i className="fas fa-users fa-3x"></i>
                  </div>
                  <h3 className="fw-bold mb-3">{t(translations.offer2Title)}</h3>
                  <p className="fs-5">{t(translations.offer2Desc)}</p>
                  <Button variant="warning" className="mt-3 fw-bold">
                    {t(translations.bookTable)}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="offer-card h-100 bg-gradient-danger text-white border-0">
                <Card.Body className="text-center p-4">
                  <div className="offer-icon mb-3">
                    <i className="fas fa-motorcycle fa-3x"></i>
                  </div>
                  <h3 className="fw-bold mb-3">{t(translations.offer3Title)}</h3>
                  <p className="fs-5">{t(translations.offer3Desc)}</p>
                  <Button variant="warning" className="mt-3 fw-bold">
                    {t(translations.viewMenu)}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Menu Section */}
      <section className="featured-menu-section py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">{t(translations.featuredMenu)}</h2>
            <p className="lead text-muted">{t(translations.featuredSubtitle)}</p>
          </div>
          
          <Row className="g-4 mb-5">
            {featuredSteaks.map((steak) => (
              <Col key={steak.id} xs={12} sm={6} lg={3}>
                <MenuCard item={steak} />
              </Col>
            ))}
          </Row>
          
          <div className="text-center">
            <Button 
              as={Link} 
              to="/menu" 
              variant="primary" 
              size="lg"
              className="px-5 py-3"
            >
              {t(translations.viewAllMenu)}
              <i className="fas fa-arrow-right ms-2"></i>
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="features-section py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5 display-5">{t(translations.whyUs)}</h2>
          <Row className="g-4">
            <Col md={4}>
              <div className="feature-card-new text-center p-5">
                <div className="feature-icon-new mb-4">
                  <i className="fas fa-gem fa-4x text-warning"></i>
                </div>
                <h4 className="fw-bold mb-3">{t(translations.quality)}</h4>
                <p className="text-muted fs-6">{t(translations.qualityDesc)}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card-new text-center p-5">
                <div className="feature-icon-new mb-4">
                  <i className="fas fa-user-chef fa-4x text-warning"></i>
                </div>
                <h4 className="fw-bold mb-3">{t(translations.chef)}</h4>
                <p className="text-muted fs-6">{t(translations.chefDesc)}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card-new text-center p-5">
                <div className="feature-icon-new mb-4">
                  <i className="fas fa-crown fa-4x text-warning"></i>
                </div>
                <h4 className="fw-bold mb-3">{t(translations.ambiance)}</h4>
                <p className="text-muted fs-6">{t(translations.ambianceDesc)}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
