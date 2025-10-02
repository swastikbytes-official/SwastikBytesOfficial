import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    // { name: 'Case Studies', href: '/case-studies' },
    // { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Sitecore Implementation', href: '/services' },
    { name: 'Umbraco Development', href: '/services' },
    { name: 'CMS Migration', href: '/services' },
    { name: 'Performance Tuning', href: '/services' },
    { name: 'Headless CMS', href: '/services' }
  ];

  return (
    <footer id="contact" className="bg-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="font-poppins font-bold text-2xl bg-gradient-to-r from-accent-teal to-accent-indigo bg-clip-text text-transparent mb-6">
                Swastikbytes
              </h3>
              <p className="font-inter text-gray-300 leading-relaxed mb-6">
                Empowering businesses with professional CMS solutions. 
                10+ years of expertise in Sitecore & Umbraco development.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-white/10 p-3 rounded-2xl hover:bg-gradient-to-r hover:from-accent-teal hover:to-accent-indigo transition-all duration-300 ease-out-quart transform hover:scale-110 hover:-translate-y-1 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 group-hover:animate-bounce-micro" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-poppins font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="font-inter text-gray-300 hover:text-accent-teal transition-colors duration-300 ease-out-quart hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-poppins font-semibold text-lg mb-6">Services</h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="font-inter text-gray-300 hover:text-accent-teal transition-colors duration-300 ease-out-quart hover:translate-x-1 transform inline-block"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-poppins font-semibold text-lg mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-accent-teal mt-1 flex-shrink-0" />
                  <div>
                    <a href="mailto:info@swastikbytes.com" className="font-inter text-gray-300">info@swastikbytes.com</a>
                    {/* <p className="font-inter text-gray-300">careers@swastikbytes.com</p> */}
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-accent-teal mt-1 flex-shrink-0" />
                  <div>
                    <a href='tel:919104194043' className="font-inter text-gray-300">+91 9104194043</a><br />
                    <a href='tel:919104965667' className="font-inter text-gray-300">+91 9104965667</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-accent-teal mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-inter text-gray-300">
                      09, Alka shopping Center<br />
                      Near mangal park BRTS stop, Kankaria, Ahmedabad 380022<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-8">
                <h5 className="font-poppins font-medium text-sm mb-4 text-gray-400 uppercase tracking-wide">
                  Certifications
                </h5>
                <div className="flex flex-wrap gap-2">
                  {['Sitecore MVP', 'Umbraco Certified'].map((cert, index) => (
                    <span
                      key={index}
                      className="bg-white/10 text-accent-teal px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-inter text-gray-400 text-sm">
              © 2024 Swastikbytes. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-inter text-gray-400 hover:text-accent-teal text-sm transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;