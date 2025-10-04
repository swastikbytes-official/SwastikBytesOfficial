import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Expertise from '../components/Expertise';
import TechStack from '../components/TechStack';
// import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const Home: React.FC = () => (
  <>
    <Helmet>
      <title>Swastikbytes - Your IT Solutions</title>
      <meta name="title" content="CMS Development Company | Headless CMS, Sitecore, WordPress, Umbraco & AI Solutions | Swastikbytes" />
      <meta name="description" content="Professional CMS development services specializing in headless CMS, XM Cloud, Sitecore, WordPress, and Umbraco with advanced AI implementation for scalable, modern digital experiences."/>
      <meta name="keywords" content="CMS development and its Services | XM cloud, sitecore, umbraco, wordpress, headless development " />
      <meta property="og:title" content="CMS Development Company | Headless CMS, Sitecore, WordPress, Umbraco & AI Solutions | Swastikbytes" />
      <meta property="og:description" content="Professional CMS development services specializing in headless CMS, XM Cloud, Sitecore, WordPress, and Umbraco with advanced AI implementation for scalable, modern digital experiences." />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://www.swastikbytes.com/" />
    </Helmet>
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

export default Home;