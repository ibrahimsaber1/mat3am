// import { Navbar, Container, Nav, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function Navigation({ lang, setLang, t }) {
//   return (
//     <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
//       <Container>
//         <Navbar.Brand as={Link} to="/" className="fw-bold text-danger">Restaurant</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/">{t[lang].home}</Nav.Link>
//             <Nav.Link as={Link} to="/menu">{t[lang].menu}</Nav.Link>
//             <Nav.Link as={Link} to="/contact">{t[lang].contact}</Nav.Link>
//           </Nav>
//           <Button 
//             variant="outline-danger" 
//             onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
//           >
//             {lang === 'ar' ? 'English' : 'عربي'}
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
// export default Navigation;
