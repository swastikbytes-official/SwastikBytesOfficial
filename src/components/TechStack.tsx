import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const TechStack: React.FC = () => {
  const cloudRef = useRef<HTMLDivElement>(null);

  const technologies = [
    { name: 'Sitecore', category: 'CMS' },
    { name: 'Umbraco', category: 'CMS' },
    { name: 'Wordpress', category: 'CMS' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: '.NET Core', category: 'Backend' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'GraphQL', category: 'API' },
    { name: 'REST', category: 'API' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'SQL Server', category: 'Database' },
    { name: 'Redis', category: 'Cache' },
    { name: 'Solr', category: 'Search' }
  ];

  const categoryColors: { [key: string]: string } = {
   CMS: 'from-blue-500 to-indigo-500',
    Frontend: 'from-green-500 to-emerald-500',
    Backend: 'from-purple-500 to-violet-500',
    Cloud: 'from-orange-500 to-red-500',
    DevOps: 'from-cyan-500 to-blue-500',
    API: 'from-pink-500 to-rose-500',
    Database: 'from-yellow-500 to-orange-500',
    Cache: 'from-teal-500 to-cyan-500',
    Search: 'from-indigo-500 to-purple-500'
  };

  useEffect(() => {
    if (cloudRef.current) {
      const items = cloudRef.current.querySelectorAll('.tech-item');
      
      items.forEach((item, index) => {
        // Wider random position to cover more area
        gsap.set(item, {
          x: Math.random() * 600 - 300, // was 300 - 150
          y: Math.random() * 350 - 175, // was 200 - 100
          rotation: Math.random() * 20 - 10,
        });

        // Floating animation
        gsap.to(item, {
          y: `+=${Math.random() * 20 + 10}`,
          rotation: `+=${Math.random() * 10 + 5}`,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.1
        });

        // Mouse interaction
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    }
  }, []);

  return (
    <section className="py-20 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl lg:text-5xl text-primary-950 mb-6">
            Technology Stack
          </h2>
          <p className="font-inter text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions. 
            Hover over the technologies to explore our expertise.
          </p>
        </div>

        {/* Interactive Tech Cloud */}
        <div className="relative h-96 lg:h-[500px] overflow-hidden">
          <div
            ref={cloudRef}
            className="absolute inset-0 flex flex-wrap items-center justify-center gap-x-8 gap-y-8 px-8 py-8"
          >
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`tech-item cursor-pointer group`}
              >
                <div className={`bg-gradient-to-r ${categoryColors[tech.category]} p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform`}>
                  <div className="text-white text-center">
                    <div className="font-poppins font-semibold text-lg mb-1">
                      {tech.name}
                    </div>
                    <div className="font-inter text-xs opacity-90">
                      {tech.category}
                    </div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                    Expertise in {tech.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Background decorations */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-accent-teal/10 to-accent-indigo/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-accent-indigo/10 to-accent-teal/10 rounded-full blur-xl"></div>
        </div>

        {/* Category Legend */}
        {/* <div className="mt-12">
          <h3 className="font-poppins font-semibold text-xl text-primary-950 text-center mb-8">
            Our Expertise Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {Object.entries(categoryColors).map(([category, gradient]) => (
              <div
                key={category}
                className="flex items-center space-x-3 bg-white rounded-2xl p-4 border border-gray-200 shadow-sm"
              >
                <div className={`w-4 h-4 bg-gradient-to-r ${gradient} rounded-full`}></div>
                <span className="font-inter text-sm font-medium text-gray-700">{category}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TechStack;