import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const translations = {
    contact: { ar: 'تواصل معنا', en: 'Contact Us' },
    getInTouch: { ar: 'ابقى على تواصل', en: 'Get In Touch' },
    name: { ar: 'الاسم', en: 'Name' },
    email: { ar: 'البريد الإلكتروني', en: 'Email' },
    phone: { ar: 'رقم الهاتف', en: 'Phone Number' },
    message: { ar: 'الرسالة', en: 'Message' },
    send: { ar: 'إرسال', en: 'Send Message' },
    success: { ar: 'تم إرسال رسالتك بنجاح!', en: 'Your message has been sent successfully!' },
    contactInfo: { ar: 'معلومات التواصل', en: 'Contact Information' },
    address: { ar: 'العنوان', en: 'Address' },
    openingHours: { ar: 'ساعات العمل', en: 'Opening Hours' },
    everyday: { ar: 'يومياً', en: 'Every Day' },
    hours: { ar: '10:00 صباحاً - 11:00 مساءً', en: '10:00 AM - 11:00 PM' }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page py-5">
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">{t(translations.contact)}</h1>
          <p className="lead text-muted">{t(translations.getInTouch)}</p>
        </div>

        <Row className="g-5">
          <Col lg={6}>
            {showAlert && (
              <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                {t(translations.success)}
              </Alert>
            )}
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>{t(translations.name)}</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t(translations.name)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t(translations.email)}</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t(translations.email)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t(translations.phone)}</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t(translations.phone)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t(translations.message)}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t(translations.message)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" size="lg" className="w-100">
                <i className="fas fa-paper-plane me-2"></i>
                {t(translations.send)}
              </Button>
            </Form>
          </Col>

          <Col lg={6}>
            <div className="contact-info">
              <h3 className="fw-bold mb-4">{t(translations.contactInfo)}</h3>
              
              <div className="info-item mb-4 p-3 bg-light rounded">
                <h5 className="fw-bold">
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  {t(translations.address)}
                </h5>
                <p className="mb-0 text-muted">123 Street Name, Cairo, Egypt</p>
              </div>

              <div className="info-item mb-4 p-3 bg-light rounded">
                <h5 className="fw-bold">
                  <i className="fas fa-phone text-primary me-2"></i>
                  {t(translations.phone)}
                </h5>
                <p className="mb-0 text-muted">+20 123 456 7890</p>
              </div>

              <div className="info-item mb-4 p-3 bg-light rounded">
                <h5 className="fw-bold">
                  <i className="fas fa-envelope text-primary me-2"></i>
                  {t(translations.email)}
                </h5>
                <p className="mb-0 text-muted">info@restaurant.com</p>
              </div>

              <div className="info-item p-3 bg-light rounded">
                <h5 className="fw-bold">
                  <i className="fas fa-clock text-primary me-2"></i>
                  {t(translations.openingHours)}
                </h5>
                <p className="mb-0 text-muted">
                  {t(translations.everyday)}: {t(translations.hours)}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
