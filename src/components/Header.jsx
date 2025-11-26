import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const { language, t } = useLanguage();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const translations = {
    home: { ar: 'الرئيسية', en: 'Home' },
    menu: { ar: 'قائمة الطعام', en: 'Menu' },
    about: { ar: 'من نحن', en: 'About Us' },
    contact: { ar: 'تواصل معنا', en: 'Contact' },
    restaurantName: { ar: 'مطعم قائمة الطعام', en: 'Food Menu Restaurant' }
  };

  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      fixed="top" 
      expanded={expanded}
      className="shadow"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          <i className="fas fa-utensils me-2"></i>
          {t(translations.restaurantName)}
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link 
              as={Link} 
              to="/" 
              active={location.pathname === '/'}
              onClick={() => setExpanded(false)}
              className="mx-2"
            >
              {t(translations.home)}
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/menu" 
              active={location.pathname === '/menu'}
              onClick={() => setExpanded(false)}
              className="mx-2"
            >
              {t(translations.menu)}
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              active={location.pathname === '/about'}
              onClick={() => setExpanded(false)}
              className="mx-2"
            >
              {t(translations.about)}
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              active={location.pathname === '/contact'}
              onClick={() => setExpanded(false)}
              className="mx-2"
            >
              {t(translations.contact)}
            </Nav.Link>
            <LanguageToggle />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
