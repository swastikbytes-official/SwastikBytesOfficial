import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Sitecore', 'WordPress', 'Umbraco', 'Headless'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(texts[currentIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      } else {
        setCurrentText(texts[currentIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === texts[currentIndex].length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, charIndex, isDeleting, texts]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/10 to-accent-indigo/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent-teal/20 to-accent-indigo/20 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent-indigo/20 to-accent-teal/20 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '1.5s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-12 lg:pt-16">
        <div className="animate-fade-up">
          {/* Main Headline */}
          <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-950 leading-tight mb-6">
            Powering digital experiences with{' '}
            <span className="bg-gradient-to-r from-accent-teal to-accent-indigo bg-clip-text text-transparent">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-inter text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Professional CMS development services • 10+ years expertise • Enterprise delivery with boutique care
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="group bg-gradient-to-r from-accent-teal to-accent-indigo text-white px-8 py-4 rounded-2xl font-poppins font-semibold text-lg hover:shadow-2xl transition-all duration-300 ease-out-quart transform hover:scale-105 hover:-translate-y-1">
              Book a Demo
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            {/* <Link to="/services" className="group bg-white/80 backdrop-blur-sm text-primary-950 px-8 py-4 rounded-2xl font-poppins font-semibold text-lg border border-gray-200 hover:shadow-xl transition-all duration-300 ease-out-quart transform hover:scale-105">
              <Play className="inline-block mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              See Our Work
            </Link> */}
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            {[
              { number: '30+', label: 'Enterprise Launches' },
              { number: '10+', label: 'Years Average Experience' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="font-poppins font-bold text-3xl lg:text-4xl text-primary-950 mb-2">
                  {stat.number}
                </div>           
                <div className="font-inter text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;