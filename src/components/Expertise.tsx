import React from 'react';
import { Award, CheckCircle, Star } from 'lucide-react';

const Expertise: React.FC = () => {
  const badges = [
    {
      title: 'Sitecore MVP',
      description: 'Most Valuable Professional recognition for exceptional contributions to the Sitecore community',
      icon: '🏆',
      year: '2023',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Umbraco Certified Expert',
      description: 'Advanced certification in Umbraco development and architecture',
      icon: '🎖️',
      year: '2023',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Sitecore Certified Developer',
      description: 'Professional certification in Sitecore platform development',
      icon: '💎',
      year: '2023',
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  // const skills = [
  //   'Sitecore XP/XM', 'Umbraco CMS', 'Headless CMS', 'JAMstack',
  //   'React/Next.js', '.NET Core', 'Azure DevOps', 'Docker', 'GraphQL', 'Solr Search', 'Redis Caching'
  // ];

  return (
    <section id="expertise" className="lg:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl lg:text-5xl text-primary-950 mb-6">
            Certified Expertise
          </h2>
          <p className="font-inter text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Our certifications aren't just badges—they represent deep, tested knowledge 
            and continuous commitment to excellence in CMS development.
          </p>
        </div>

        {/* Certification Badges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out-quart transform hover:-translate-y-3"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`bg-gradient-to-r ${badge.color} p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{badge.icon}</span>
              </div>
              
              <div className="text-center">
                <h3 className="font-poppins font-semibold text-lg text-primary-950 mb-2">
                  {badge.title}
                </h3>
                <p className="font-inter text-sm text-gray-600 mb-3 leading-relaxed">
                  {badge.description}
                </p>
                <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
                  <Star className="h-3 w-3 text-yellow-500 mr-1" />
                  <span className="text-xs font-medium text-gray-700">{badge.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Skills */}
        {/* <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="font-poppins font-semibold text-2xl lg:text-3xl text-primary-950 mb-4">
              Technical Stack
            </h3>
            <p className="font-inter text-gray-600 max-w-2xl mx-auto">
              Mastery across the full spectrum of modern CMS and web technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 ease-out-quart hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-inter font-medium text-gray-800">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Awards Section */}
        {/* <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-950/5 to-accent-teal/5 rounded-3xl p-8 lg:p-12 border border-gray-200">
            <Award className="h-12 w-12 text-primary-950 mx-auto mb-6" />
            <h3 className="font-poppins font-semibold text-2xl lg:text-3xl text-primary-950 mb-4">
              Industry Recognition
            </h3>
            <p className="font-inter text-gray-600 mb-6 max-w-2xl mx-auto">
              Our work has been recognized by industry leaders and peers alike, 
              with multiple awards for innovation and technical excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Best CMS Implementation 2023', 'Innovation Award 2022', 'Client Choice Award 2023'].map((award, index) => (
                <div key={index} className="bg-white rounded-full px-6 py-2 shadow-sm border border-gray-200">
                  <span className="font-inter text-sm font-medium text-gray-700">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Expertise;