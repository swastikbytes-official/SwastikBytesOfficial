  import React from 'react';
  import { ExternalLink, Github, Globe, Calendar, Tag } from 'lucide-react';

  const Portfolio: React.FC = () => {
    const projects = [
      {
        title: 'Healthcare Management System',
        category: 'Sitecore',
        image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        description: 'Comprehensive patient management system with multi-site architecture and HIPAA compliance.',
        technologies: ['Sitecore XP', 'React', 'Azure', 'SQL Server'],
        features: ['Multi-site Management', 'Patient Portal', 'Appointment Scheduling', 'Medical Records'],
        year: '2023',
        status: 'Live',
        gradient: 'from-emerald-500 to-teal-500'
      },
      {
        title: 'E-commerce Platform',
        category: 'WordPress',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        description: 'High-performance e-commerce solution with custom product configurator and payment integration.',
        technologies: ['WordPress', 'WooCommerce', 'React', 'Stripe API'],
        features: ['Product Configurator', 'Payment Gateway', 'Inventory Management', 'Order Tracking'],
        year: '2023',
        status: 'Live',
        gradient: 'from-blue-500 to-indigo-500'
      },
      {
        title: 'Corporate Website',
        category: 'Umbraco',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        description: 'Modern corporate website with content management system and multi-language support.',
        technologies: ['Umbraco', 'Vue.js', 'Azure', 'CDN'],
        features: ['Multi-language', 'Content Management', 'SEO Optimization', 'Performance Tuning'],
        year: '2023',
        status: 'Live',
        gradient: 'from-purple-500 to-pink-500'
      },
      {
        title: 'Financial Services Portal',
        category: 'Sitecore',
        image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        description: 'Secure financial services platform with real-time data integration and compliance features.',
        technologies: ['Sitecore XM', 'Angular', 'Azure', 'Redis'],
        features: ['Real-time Data', 'Security Compliance', 'User Dashboard', 'Reporting'],
        year: '2022',
        status: 'Live',
        gradient: 'from-orange-500 to-red-500'
      },
      {
        title: 'Educational Platform',
        category: 'WordPress',
        image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        description: 'Comprehensive learning management system with course creation and student tracking.',
        technologies: ['WordPress', 'LearnDash', 'React', 'MySQL'],
        features: ['Course Management', 'Student Tracking', 'Certificates', 'Progress Reports'],
        year: '2022',
        status: 'Live',
        gradient: 'from-cyan-500 to-blue-500'
      },
      {
        title: 'News & Media Website',
        category: 'Umbraco',
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        description: 'High-traffic news website with content management and social media integration.',
        technologies: ['Umbraco', 'Next.js', 'Azure', 'Elasticsearch'],
        features: ['Content Publishing', 'Social Integration', 'Search Functionality', 'Mobile Responsive'],
        year: '2022',
        status: 'Live',
        gradient: 'from-violet-500 to-purple-500'
      }
    ];

    const categories = ['All', 'Sitecore', 'WordPress', 'Umbraco'];
    const [activeCategory, setActiveCategory] = React.useState('All');

    const filteredProjects = activeCategory === 'All' 
      ? projects 
      : projects.filter(project => project.category === activeCategory);

    return (
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent-teal/20 to-accent-indigo/20 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent-indigo/20 to-accent-teal/20 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '1.5s'}}></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-primary-950 mb-6">
              Our Portfolio
            </h1>
            <p className="font-inter text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Explore our collection of successful CMS implementations across Sitecore, WordPress, and Umbraco platforms.
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-2xl font-poppins font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-accent-teal to-accent-indigo text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out-quart transform hover:-translate-y-2 overflow-hidden group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-80`}></div>
                    
                    {/* Overlay Info */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                      <div className="flex space-x-2">
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white/90 backdrop-blur-sm p-2 rounded-xl hover:bg-white transition-colors duration-300">
                        <Globe className="h-4 w-4 text-gray-700" />
                      </button>
                      <button className="bg-white/90 backdrop-blur-sm p-2 rounded-xl hover:bg-white transition-colors duration-300">
                        <ExternalLink className="h-4 w-4 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-poppins font-semibold text-xl text-primary-950">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{project.year}</span>
                      </div>
                    </div>
                    
                    <p className="font-inter text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="font-inter font-medium text-sm text-gray-800 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-inter font-medium text-sm text-gray-800 mb-2">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-600">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-accent-teal to-accent-indigo rounded-full mr-2"></div>
                            <span className="font-inter text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="group/btn w-full bg-gradient-to-r from-gray-900 to-primary-950 text-white py-3 px-6 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 ease-out-quart">
                      View Project Details
                      <ExternalLink className="inline-block ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 lg:p-16 border border-gray-200 shadow-2xl text-center">
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-950 mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="font-inter text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can bring your vision to life with our CMS expertise and proven development process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-accent-teal to-accent-indigo text-white px-8 py-4 rounded-2xl font-poppins font-semibold text-lg hover:shadow-2xl transition-all duration-300 ease-out-quart transform hover:scale-105">
                  Get Free Consultation
                </button>
                <button className="bg-white text-primary-950 px-8 py-4 rounded-2xl font-poppins font-semibold text-lg border-2 border-gray-200 hover:border-accent-teal hover:shadow-xl transition-all duration-300 ease-out-quart transform hover:scale-105">
                  View All Services
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default Portfolio;