import React from 'react';
import { ExternalLink, TrendingUp, Users, Clock, ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: 'Global E-commerce Platform',
      client: 'Fortune 500 Retailer',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      challenge: 'Legacy system migration to modern Sitecore XP with 10M+ products',
      solution: 'Headless architecture with React frontend, improved performance by 300%',
      results: {
        performance: '+300%',
        conversion: '+45%',
        time: '6 months'
      },
      tags: ['Sitecore XP', 'React', 'Azure', 'E-commerce'],
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Healthcare Portal',
      client: 'Medical Network',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      challenge: 'Multi-site patient portal integration with complex compliance requirements',
      solution: 'Umbraco multi-site setup with custom patient management system',
      results: {
        performance: '+250%',
        conversion: '+60%',
        time: '4 months'
      },
      tags: ['Umbraco', 'Healthcare', 'Multi-site', 'Compliance'],
      gradient: 'from-emerald-600 to-cyan-600'
    },
    {
      title: 'Financial Services Hub',
      client: 'Investment Firm',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      challenge: 'Real-time financial data integration with high-security requirements',
      solution: 'Sitecore with custom API integrations and advanced caching strategies',
      results: {
        performance: '+400%',
        conversion: '+80%',
        time: '8 months'
      },
      tags: ['Sitecore', 'Financial', 'Real-time', 'Security'],
      gradient: 'from-orange-600 to-red-600'
    },
    {
      title: 'Education Platform',
      client: 'University System',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      challenge: 'Student portal modernization for 50,000+ users across multiple campuses',
      solution: 'WordPress headless CMS with custom student management integration',
      results: {
        performance: '+200%',
        conversion: '+35%',
        time: '5 months'
      },
      tags: ['WordPress', 'Education', 'Headless', 'Scale'],
      gradient: 'from-violet-600 to-pink-600'
    },
    {
      title: 'Corporate Website Redesign',
      client: 'Manufacturing Company',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      challenge: 'Outdated corporate website with poor user experience and slow performance',
      solution: 'Modern Umbraco implementation with responsive design and performance optimization',
      results: {
        performance: '+180%',
        conversion: '+25%',
        time: '3 months'
      },
      tags: ['Umbraco', 'Corporate', 'Responsive', 'Performance'],
      gradient: 'from-teal-600 to-blue-600'
    },
    {
      title: 'E-learning Platform',
      client: 'Online Education Provider',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      challenge: 'Scalable e-learning platform for 100,000+ students with video content delivery',
      solution: 'WordPress multisite with custom LMS integration and CDN optimization',
      results: {
        performance: '+350%',
        conversion: '+70%',
        time: '7 months'
      },
      tags: ['WordPress', 'E-learning', 'Multisite', 'CDN'],
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent-teal/20 to-accent-indigo/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent-indigo/20 to-accent-teal/20 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '1.5s'}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-primary-950 mb-6">
            Case Studies
          </h1>
          <p className="font-inter text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Real results from real projects. See how we've transformed digital experiences 
            for businesses across industries with our CMS expertise.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out-quart transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-80`}></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                      {study.client}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-primary-950 mb-3">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="font-inter font-medium text-sm text-gray-800 mb-1">Challenge</h4>
                      <p className="font-inter text-sm text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-inter font-medium text-sm text-gray-800 mb-1">Solution</h4>
                      <p className="font-inter text-sm text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <TrendingUp className="h-5 w-5 text-green-500 mx-auto mb-1" />
                      <div className="font-poppins font-semibold text-lg text-primary-950">{study.results.performance}</div>
                      <div className="font-inter text-xs text-gray-600">Performance</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-5 w-5 text-blue-500 mx-auto mb-1" />
                      <div className="font-poppins font-semibold text-lg text-primary-950">{study.results.conversion}</div>
                      <div className="font-inter text-xs text-gray-600">Conversion</div>
                    </div>
                    <div className="text-center">
                      <Clock className="h-5 w-5 text-purple-500 mx-auto mb-1" />
                      <div className="font-poppins font-semibold text-lg text-primary-950">{study.results.time}</div>
                      <div className="font-inter text-xs text-gray-600">Timeline</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="group w-full bg-gradient-to-r from-gray-900 to-primary-950 text-white py-3 px-6 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 ease-out-quart">
                    View Details
                    <ExternalLink className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
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
              Ready to Create Your Success Story?
            </h2>
            <p className="font-inter text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the ranks of successful businesses who've transformed their digital presence with our CMS expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-accent-teal to-accent-indigo text-white px-8 py-4 rounded-2xl font-poppins font-semibold text-lg hover:shadow-2xl transition-all duration-300 ease-out-quart transform hover:scale-105">
                Start Your Project
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </button>
              <button className="bg-white text-primary-950 px-8 py-4 rounded-2xl font-poppins font-semibold text-lg border-2 border-gray-200 hover:border-accent-teal hover:shadow-xl transition-all duration-300 ease-out-quart transform hover:scale-105">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;