import { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import menuData from '../data/menu.json';

function Menu({ lang, t }) {
  const [filter, setFilter] = useState('all');

  // Filter logic
  const filteredItems = filter === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === filter);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 text-danger fw-bold">{t[lang].menu}</h2>
      
      {/* Filter Buttons */}
      <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
        <Button variant={filter === 'all' ? 'danger' : 'outline-danger'} onClick={() => setFilter('all')}>{t[lang].filterAll}</Button>
        <Button variant={filter === 'chicken' ? 'danger' : 'outline-danger'} onClick={() => setFilter('chicken')}>{t[lang].filterChicken}</Button>
        <Button variant={filter === 'grill' ? 'danger' : 'outline-danger'} onClick={() => setFilter('grill')}>{t[lang].filterGrill}</Button>
      </div>

      {/* Menu Grid */}
      <Row>
        {filteredItems.map((item) => (
          <Col key={item.id} xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <Card.Img variant="top" src={item.image} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
              </div>
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">{lang === 'ar' ? item.titleAr : item.titleEn}</Card.Title>
                <Card.Text className="text-muted small">
                  {lang === 'ar' ? item.descriptionAr : item.descriptionEn}
                </Card.Text>
                <h5 className="text-danger mt-3">
                  {item.price} <small>{t[lang].currency}</small>
                </h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Menu;
