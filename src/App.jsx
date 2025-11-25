import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Menu from './pages/Menu';
import { translations } from './data/translations';

// Placeholder components for Home/Contact
const Home = ({t, lang}) => <div className="text-center mt-5"><h1>{t[lang].home}</h1></div>;
const Contact = ({t, lang}) => <div className="text-center mt-5"><h1>{t[lang].contact}</h1></div>;

function App() {
  const [lang, setLang] = useState('ar'); // Default to Arabic

  // Automatically switch document direction based on language
  useEffect(() => {
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.lang = lang;
  }, [lang]);

  return (
    <Router>
      <div className={lang === 'ar' ? 'rtl-font' : 'ltr-font'}>
        <Navigation lang={lang} setLang={setLang} t={translations} />
        
        <Routes>
          <Route path="/" element={<Home lang={lang} t={translations} />} />
          <Route path="/menu" element={<Menu lang={lang} t={translations} />} />
          <Route path="/contact" element={<Contact lang={lang} t={translations} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
