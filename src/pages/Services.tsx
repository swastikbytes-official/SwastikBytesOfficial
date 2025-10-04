import React from 'react';
import { ArrowRight, CheckCircle, Code, Database, Zap, RefreshCw, Shield, Headphones } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Services: React.FC = () => {
  const mainServices = [
    {
      icon: Code,
      title: 'Sitecore Development',
      description: 'Enterprise-grade Sitecore solutions from implementation to optimization. Complete lifecycle management for your digital experience platform.',
      features: [
        'Sitecore XP/XM Implementation',
        'Sitecore Commerce Solutions',
        'Headless Sitecore with JSS',
        'Sitecore Cloud Migration',
        'Performance Optimization',
        'Third-party Integrations'
      ],
      gradient: 'from-blue-600 to-indigo-600',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Database,
      title: 'WordPress Development',
      description: 'Custom WordPress solutions that scale. From simple websites to complex enterprise applications with advanced functionality.',
      features: [
        'Custom Theme Development',
        'Plugin Development',
        'WooCommerce Solutions',
        'Headless WordPress',
        'Performance Optimization',
        'Security Hardening'
      ],
      gradient: 'from-emerald-600 to-teal-600',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Zap,
      title: 'Umbraco Development',
      description: 'Flexible Umbraco CMS solutions tailored to your content management needs. User-friendly interfaces with powerful functionality.',
      features: [
        'Umbraco CMS Implementation',
        'Custom Property Editors',
        'Multi-site Management',
        'Umbraco Cloud Setup',
        'Content Migration',
        'Performance Tuning'
      ],
      gradient: 'from-orange-600 to-red-600',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const additionalServices = [
    {
      icon: RefreshCw,
      title: 'CMS Migration',
      description: 'Seamless migration between CMS platforms with zero downtime and complete data integrity.',
      features: ['Legacy System Analysis', 'Data Migration', 'Content Restructuring', 'SEO Preservation']
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Comprehensive security audits and ongoing maintenance to keep your CMS secure and updated.',
      features: ['Security Audits', 'Regular Updates', 'Backup Solutions', '24/7 Monitoring']
    },
    {
      icon: Headphones,
      title: 'Support & Training',
      description: 'Ongoing support and comprehensive training to empower your team to manage content effectively.',
      features: ['Technical Support', 'User Training', 'Documentation', 'Best Practices']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, current systems, and business goals to create a comprehensive project roadmap.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs the optimal solution architecture and creates detailed technical specifications.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing ensures quality and allows for iterative improvements.'
    },
    {
      step: '04',
      title: 'Deployment & Launch',
      description: 'Careful deployment process with thorough testing and seamless go-live support.'
    },
    {
      step: '05',
      title: 'Support & Optimization',
      description: 'Ongoing support, monitoring, and optimization to ensure peak performance and user satisfaction.'
    }
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>Our Services - Swastikbytes</title>
        <meta name="description" content="Explore our comprehensive CMS services including Sitecore, WordPress, and Umbraco development." />
        <meta name="keywords" content="CMS Development Services, Headless CMS, XM Cloud, Sitecore Development, WordPress Development, Umbraco Development, AI CMS Solutions"/>
        <meta property="og:title" content="Our Services - Swastikbytes" />
        <meta property="og:description" content="Comprehensive CMS solutions for Sitecore, WordPress, and Umbraco." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.swastikbytes.com/services" />
        {/* <meta property="og:image" content="https://www.swastikbytes.com/images/services.jpg" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services - Swastikbytes" />
        <meta name="twitter:description" content="Explore our CMS services including Sitecore, WordPress, and Umbraco development." />
        {/* <meta name="twitter:image" content="https://www.swastikbytes.com/images/services.jpg" /> */}
        <link rel="canonical" href="https://www.swastikbytes.com/services" />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="CMS Development Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/85 to-accent-teal/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/20 to-accent-indigo/20"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent-teal/30 to-accent-indigo/30 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent-indigo/30 to-accent-teal/30 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '1.5s'}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-white mb-6">
            CMS Services
          </h1>
          <p className="font-inter text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
            Comprehensive CMS solutions for Sitecore, WordPress, and Umbraco. 
            From implementation to optimization, we deliver results that drive business growth.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''} data-aos="fade-right">
                  <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl w-fit mb-6`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-950 mb-6">
                    {service.title}
                  </h2>
                  
                  <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="font-inter text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="bg-gradient-to-r from-accent-teal to-accent-indigo text-white px-8 py-4 rounded-2xl font-poppins font-semibold hover:shadow-2xl transition-all duration-300 ease-out-quart transform hover:scale-105 group">
                    Learn More
                    <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''} data-aos="fade-left">
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-3xl shadow-2xl w-full h-96 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20 rounded-3xl`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-950 mb-6">
              Additional Services
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to ensure your CMS performs optimally throughout its lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out-quart transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-accent-teal to-accent-indigo p-4 rounded-2xl w-fit mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="font-poppins font-semibold text-2xl text-primary-950 mb-4">
                  {service.title}
                </h3>
                
                <p className="font-inter text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-accent-teal to-accent-indigo rounded-full mr-3"></div>
                      <span className="font-inter text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-950 mb-6">
              Our Process
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to launch and beyond.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="flex items-start space-x-6 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-accent-teal to-accent-indigo text-white font-poppins font-bold text-xl w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-2xl text-primary-950 mb-3">
                    {step.title}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 lg:p-16 border border-gray-200 shadow-2xl text-center">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-950 mb-6">
              Ready to Transform Your CMS?
            </h2>
            <p className="font-inter text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href='/contact' className="bg-gradient-to-r from-accent-teal to-accent-indigo text-white px-8 py-4 rounded-2xl font-poppins font-semibold text-lg hover:shadow-2xl transition-all duration-300 ease-out-quart transform hover:scale-105">
                Get Free Consultation
              </a>
              {/* <button className="bg-white text-primary-950 px-8 py-4 rounded-2xl font-poppins font-semibold text-lg border-2 border-gray-200 hover:border-accent-teal hover:shadow-xl transition-all duration-300 ease-out-quart transform hover:scale-105">
                View Our Work
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;