import React from 'react';
import { Button } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button 
      variant="outline-light" 
      size="sm" 
      onClick={toggleLanguage}
      className="ms-3"
    >
      {language === 'ar' ? 'EN' : 'العربية'}
    </Button>
  );
};

export default LanguageToggle;
