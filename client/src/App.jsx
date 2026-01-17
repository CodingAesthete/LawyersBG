import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Candidates from './pages/Candidates';
import PracticeAreas from './pages/PracticeAreas';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();

  const setMetaTags = () => {
    if (i18n.language === 'bg') {
      return (
        <>
          <title>Висш адвокатски съвет - професионални правни услуги</title>
          <meta name="description" content="Висш адвокатски съвет специализирано в корпоративно право, трудово право, административно право и литигация. Висококачествени правни услуги с опит от 15+ години." />
          <meta name="keywords" content="адвокат, правни услуги, корпоративно право, трудово право, администрирано право, България" />
          <meta property="og:title" content="Висш адвокатски съвет" />
          <meta property="og:description" content="Професионално адвокатско бюро за висококачествени правни услуги" />
          <meta property="og:type" content="website" />
        </>
      );
    } else {
      return (
        <>
          <title>Supreme Bar Council - Professional Legal Services</title>
          <meta name="description" content="Supreme Bar Council specialized in corporate law, labor law, administrative law and litigation. High-quality legal services with 15+ years of experience." />
          <meta name="keywords" content="lawyer, legal services, corporate law, labor law, administrative law, Bulgaria" />
          <meta property="og:title" content="Supreme Bar Council" />
          <meta property="og:description" content="Professional legal council for high-quality legal services" />
          <meta property="og:type" content="website" />
        </>
      );
    }
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <div className="pt-36 extrasmall:pt-32 header-sm:pt-32 sm:pt-32 md:pt-40 header-special:pt-24 lg:pt-40 xl:pt-20" style={{ minHeight: '100vh' }}>
          <Helmet>
            {setMetaTags()}
          </Helmet>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
