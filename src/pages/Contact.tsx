import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    company: '',
    ServiceInterest: '',
    message: '',
    userData: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // console.log('Form submitted:', formData);
    // setIsSubmitted(true);

    //Apispeadsheet submission
    try {
      const response = await fetch('https://api.apispreadsheets.com/data/5Cbt5Cm8uTsmLbmc/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        // Reset form if needed
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      alert("There was an error :(");
      console.error('Error:', error);
    } finally {
      //setIsSubmitted(false);

      setFormData({
        fullname: '',
        email: '',
        company: '',
        ServiceInterest: '',
        message: '',
        userData: ''
      });
    }
     

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullname: '',
        email: '',
        company: '',
        ServiceInterest: '',
        message: '',
        userData: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@swastikbytes.com', 'careers@swastikbytes.com'],
      description: 'Get in touch for project inquiries or career opportunities'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 9104194043', '+91 9104965667'],
      description: 'Speak directly with our CMS specialists'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['09, Alka shopping Center', 'Near mangal park BRTS stop, Kankaria, Ahmedabad ', 'India'],
      description: 'Our headquarters in the Ahmedabad'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM PST', 'Sat: 10:00 AM - 2:00 PM IST', 'Sun: Closed'],
      description: '24/7 emergency support available for enterprise clients'
    }
  ];

  const services = [
    'Sitecore Development',
    'WordPress Development',
    'Umbraco Development',
    'CMS Migration',
    'Performance Optimization',
    'Support & Maintenance',
    'Other'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent-teal/20 to-accent-indigo/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent-indigo/20 to-accent-teal/20 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '1.5s'}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-primary-950 mb-6">
            Get In Touch
          </h1>
          <p className="font-inter text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Ready to transform your digital experience? Let's discuss your CMS project 
            and explore how we can help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='#contact' className="bg-gradient-to-r from-accent-teal to-accent-indigo text-white px-8 py-4 rounded-2xl font-poppins font-semibold text-lg hover:shadow-2xl transition-all duration-300 ease-out-quart transform hover:scale-105 group">
              <Calendar className="inline-block mr-2 h-5 w-5" />
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-32 bg-white" id='contact'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-950 mb-6">
                Send Us a Message
              </h2>
              <p className="font-inter text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 2 hours during business hours.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullname" className="block font-inter font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        required
                        value={formData.fullname}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20 transition-all duration-300 font-inter"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-inter font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20 transition-all duration-300 font-inter"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block font-inter font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20 transition-all duration-300 font-inter"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="ServiceInterest" className="block font-inter font-medium text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="ServiceInterest"
                        name="ServiceInterest"
                        value={formData.ServiceInterest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20 transition-all duration-300 font-inter"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-inter font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20 transition-all duration-300 font-inter resize-none"
                      placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
                    ></textarea>
                  </div>

                  <input type="hidden" name="userData" value={formData.userData} />

                  <button type="submit"
                    className="w-full bg-gradient-to-r from-accent-teal to-accent-indigo text-white px-8 py-4 rounded-2xl font-poppins font-semibold text-lg hover:shadow-2xl transition-all duration-300 ease-out-quart transform hover:scale-105 group"
                  >
                    <Send className="inline-block mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    {isSubmitted ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-poppins font-semibold text-2xl text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-inter text-green-700">
                    Thank you for reaching out. We'll get back to you within 2 hours during business hours.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-950 mb-6">
                Contact Information
              </h2>
              <p className="font-inter text-lg text-gray-600 mb-8">
                Multiple ways to reach us. Choose what works best for you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-accent-teal to-accent-indigo p-3 rounded-2xl flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-xl text-primary-950 mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1 mb-3">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="font-inter text-gray-800 font-medium">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <p className="font-inter text-sm text-gray-600">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Response Promise */}
              <div className="mt-8 bg-gradient-to-r from-accent-teal/10 to-accent-indigo/10 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-poppins font-semibold text-xl text-primary-950 mb-3">
                  Our Response Promise
                </h3>
                <ul className="space-y-2 font-inter text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Response within 2 hours during business hours
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Free 30-minute consultation call
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Custom proposal within 48 hours
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-950 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: 'How long does a typical CMS project take?',
                answer: 'Project timelines vary based on complexity. Simple implementations take 4-6 weeks, while enterprise solutions may take 3-6 months. We provide detailed timelines during our consultation.'
              },
              {
                question: 'Do you provide ongoing support after launch?',
                answer: 'Yes, we offer comprehensive support packages including maintenance, updates, security monitoring, and technical support. Our team is available 24/7 for enterprise clients.'
              },
              {
                question: 'Can you migrate from our current CMS?',
                answer: 'Absolutely. We specialize in seamless migrations between different CMS platforms, ensuring zero downtime and complete data integrity throughout the process.'
              },
              {
                question: 'What makes Swastikbytes different?',
                answer: 'Our team combines 10+ years of CMS expertise with boutique-level service. We\'re certified specialists in Sitecore, WordPress, and Umbraco with a proven track record of successful enterprise implementations.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg"
              >
                <h3 className="font-poppins font-semibold text-lg text-primary-950 mb-3">
                  {faq.question}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;