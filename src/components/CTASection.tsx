  import React from 'react';
  import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';

  const CTASection: React.FC = () => {
    return (
      <section className="py-20 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main CTA Card */}
          <div className="relative">
            {/* Background Decorations */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-accent-teal/20 to-accent-indigo/20 rounded-full blur-3xl animate-pulse-soft"></div>
            <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-gradient-to-r from-accent-indigo/20 to-accent-teal/20 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '1.5s'}}></div>
            
            <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 lg:p-16 border border-gray-200 shadow-2xl">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="font-poppins font-bold text-3xl lg:text-5xl text-primary-950 mb-6">
                  Ready to Transform Your Digital Experience?
                </h2>
                <p className="font-inter text-lg lg:text-xl text-gray-600 mb-12 leading-relaxed">
                  Join the ranks of successful businesses who trust Swastikbytes with their 
                  most critical CMS projects. Let's discuss how we can elevate your digital presence.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <a href='/contact' className="group bg-gradient-to-r from-accent-teal to-accent-indigo text-white px-8 py-4 rounded-2xl font-poppins font-semibold text-lg hover:shadow-2xl transition-all duration-300 ease-out-quart transform hover:scale-105 hover:-translate-y-1">
                    <Calendar className="inline-block mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Schedule Free Consultation
                    <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  
                  {/* <button className="group bg-white text-primary-950 px-8 py-4 rounded-2xl font-poppins font-semibold text-lg border-2 border-gray-200 hover:border-accent-teal hover:shadow-xl transition-all duration-300 ease-out-quart transform hover:scale-105">
                    <MessageCircle className="inline-block mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Start a Conversation
                  </button> */}
                </div>

                {/* Contact Info */}
                <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-accent-teal to-accent-indigo p-3 rounded-2xl w-fit mx-auto mb-4">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-poppins font-semibold text-primary-950 mb-2">
                      Free Consultation
                    </h3>
                    <p className="font-inter text-gray-600 text-sm">
                      30-minute strategy session to understand your needs
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-accent-teal to-accent-indigo p-3 rounded-2xl w-fit mx-auto mb-4">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-poppins font-semibold text-primary-950 mb-2">
                      Quick Response
                    </h3>
                    <p className="font-inter text-gray-600 text-sm">
                      We respond to all inquiries within 2 hours
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-accent-teal to-accent-indigo p-3 rounded-2xl w-fit mx-auto mb-4">
                      <ArrowRight className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-poppins font-semibold text-primary-950 mb-2">
                      Custom Proposal
                    </h3>
                    <p className="font-inter text-gray-600 text-sm">
                      Tailored solution designed for your specific requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          {/* <div className="mt-16 text-center">
            <p className="font-inter text-gray-600 mb-8">
              Trusted by industry leaders worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[
                'Fortune 500 Companies',
                'Healthcare Networks',
                'Financial Institutions',
                'Educational Organizations',
                'E-commerce Leaders'
              ].map((trust, index) => (
                <div key={index} className="bg-white rounded-2xl px-6 py-3 shadow-sm border border-gray-200">
                  <span className="font-inter text-sm font-medium text-gray-700">{trust}</span>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>
    );
  };

  export default CTASection;