import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;