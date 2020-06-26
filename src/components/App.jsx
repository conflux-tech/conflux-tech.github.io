import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import About2 from './About2/About2';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  about2Data,
  servicesData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [about2, setAbout2] = useState({});
  const [services, setServices] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setAbout2({ ...about2Data });
    setServices([...servicesData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, about2, services, contact, footer }}>
      <Hero />
      <About />
      <About2 />
      <Services />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
