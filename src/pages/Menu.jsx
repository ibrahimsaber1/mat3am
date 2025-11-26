import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import MenuCard from '../components/MenuCard';

// Import all JSON files
import bbqsData from '../data/bbqs_bilingual.json';
import bestFoodsData from '../data/best-foods_bilingual.json';
import breadsData from '../data/breads_bilingual.json';
import chocolatesData from '../data/chocolates_bilingual.json';
import dessertsData from '../data/desserts_bilingual.json';
import drinksData from '../data/drinks_bilingual.json';
import sandwichesData from '../data/sandwiches_bilingual.json';
import steaksData from '../data/steaks_bilingual.json';

const Menu = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');

  const categories = {
    all: { ar: 'الكل', en: 'All', data: [] },
    bbqs: { ar: 'مشويات', en: 'BBQ', data: bbqsData },
    steaks: { ar: 'شرائح اللحم', en: 'Steaks', data: steaksData },
    bestFoods: { ar: 'الأطباق المميزة', en: 'Best Foods', data: bestFoodsData },
    sandwiches: { ar: 'سندويتشات', en: 'Sandwiches', data: sandwichesData },
    breads: { ar: 'معجنات', en: 'Breads', data: breadsData },
    desserts: { ar: 'حلويات', en: 'Desserts', data: dessertsData },
    chocolates: { ar: 'شوكولاتة', en: 'Chocolates', data: chocolatesData },
    drinks: { ar: 'مشروبات', en: 'Drinks', data: drinksData }
  };

  // Combine all data for "All" tab
  categories.all.data = [
    ...bbqsData.slice(0, 6),
    ...steaksData.slice(0, 6),
    ...bestFoodsData.slice(0, 6),
    ...sandwichesData.slice(0, 6),
    ...breadsData.slice(0, 3),
    ...dessertsData.slice(0, 3),
    ...chocolatesData.slice(0, 3),
    ...drinksData.slice(0, 3)
  ];

  const translations = {
    ourMenu: { ar: 'قائمة الطعام', en: 'Our Menu' },
    subtitle: { ar: 'اختر من بين أشهى الأطباق', en: 'Choose from our delicious dishes' }
  };

  const currentData = categories[activeTab]?.data || [];

  return (
    <div className="menu-page py-5">
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">{t(translations.ourMenu)}</h1>
          <p className="lead text-muted">{t(translations.subtitle)}</p>
        </div>

        <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <Nav variant="pills" className="justify-content-center mb-5 flex-wrap">
            {Object.entries(categories).map(([key, value]) => (
              <Nav.Item key={key} className="m-1">
                <Nav.Link eventKey={key} className="px-4">
                  {t(value)}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          <Row className="g-4">
            {currentData.map((item) => (
              <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
                <MenuCard item={item} />
              </Col>
            ))}
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default Menu;
