import React from 'react';
import { Rocket, RefreshCw, Zap, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Rocket,
      title: 'Implementation',
      description: 'Full-scale CMS implementations tailored to your business needs. From architecture planning to go-live support.',
      features: ['Custom Development', 'Third-party Integrations', 'Performance Optimization', 'Training & Support'],
      gradient: 'from-blue-500 to-cyan-500',
      hoverColor: 'hover:bg-blue-50'
    },
    {
      icon: RefreshCw,
      title: 'Migration',
      description: 'Seamless migrations from legacy systems to modern CMS platforms. Zero downtime, complete data integrity.',
      features: ['Legacy System Analysis', 'Data Migration', 'Content Restructuring', 'SEO Preservation'],
      gradient: 'from-emerald-500 to-teal-500',
      hoverColor: 'hover:bg-emerald-50'
    },
    {
      icon: Zap,
      title: 'Performance Tuning',
      description: 'Optimize your CMS for lightning-fast performance. Improve user experience and search rankings.',
      features: ['Speed Optimization', 'Caching Strategies', 'Database Tuning', 'CDN Implementation'],
      gradient: 'from-violet-500 to-purple-500',
      hoverColor: 'hover:bg-violet-50'
    }
  ];

  return (
    <section id="services" className="lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl lg:text-5xl text-primary-950 mb-4">
            CMS Services
          </h2>
          <p className="font-inter text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized CMS services for Sitecore, WordPress, and Umbraco. 
            From implementation to optimization, we deliver solutions that drive business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out-quart transform hover:-translate-y-2 ${service.hoverColor}`}
            >
              {/* Icon */}
              <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-poppins font-semibold text-2xl text-primary-950 mb-4">
                {service.title}
              </h3>
              
              <p className="font-inter text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-accent-teal to-accent-indigo rounded-full mr-3"></div>
                    <span className="font-inter text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a  href='/services' className="bg-gradient-to-r from-accent-teal to-accent-indigo text-white px-8 py-4 rounded-2xl font-poppins font-semibold hover:shadow-2xl transition-all duration-300 ease-out-quart transform hover:scale-105 group">
                Learn More
                <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent-teal/10 to-accent-indigo/10 rounded-3xl p-8 lg:p-12 border border-gray-200">
            <h3 className="font-poppins font-semibold text-2xl lg:text-3xl text-primary-950 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="font-inter text-gray-600 mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss how we can tailor our expertise 
              to meet your specific CMS requirements.
            </p>
            <button className="bg-gradient-to-r from-accent-teal to-accent-indigo text-white px-8 py-4 rounded-2xl font-poppins font-semibold hover:shadow-2xl transition-all duration-300 ease-out-quart transform hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;