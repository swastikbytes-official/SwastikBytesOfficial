import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Expertise from '../components/Expertise';
import TechStack from '../components/TechStack';
// import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Expertise />
      {/* <CaseStudies /> */}
      <TechStack />
      {/* <Testimonials /> */}
      <CTASection />
    </>
  );
};

export default Home;