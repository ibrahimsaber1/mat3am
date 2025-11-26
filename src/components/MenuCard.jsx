import React from 'react';
import { Card } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

const MenuCard = ({ item }) => {
  const { t } = useLanguage();

  return (
    <Card className="menu-card h-100 shadow-sm">
      <div className="menu-card-img-wrapper">
        <Card.Img 
          variant="top" 
          src={item.img} 
          alt={t(item.name)}
          loading="lazy"
        />
        <div className="menu-card-overlay">
          <span className="badge bg-warning text-dark">
            <i className="fas fa-star"></i> {item.rate}
          </span>
        </div>
      </div>
      <Card.Body>
        <Card.Title className="fw-bold">{t(item.name)}</Card.Title>
        <Card.Text className="text-muted small">
          {t(item.dsc)}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <span className="badge bg-secondary">{t(item.category)}</span>
          <span className="fs-5 fw-bold text-primary">${item.price}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MenuCard;
