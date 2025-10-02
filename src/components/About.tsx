import React, { useEffect, useRef } from 'react';
import { Users, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const animateCounter = (element: HTMLElement, target: number, suffix: string = '') => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent = target + suffix;
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current) + suffix;
        }
      }, 40);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          const targets = [10, 30, 14];
          const suffixes = ['+', '+', '+'];
          animateCounter(entry.target as HTMLElement, targets[index], suffixes[index]);
          observer.unobserve(entry.target);
        }
      });
    });

    counterRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const leadership = [
    {
      name: 'Rajesh Kumar',
      role: 'Sitecore MVP & Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      experience: '14 years'
    },
    {
      name: 'Priya Sharma',
      role: 'Umbraco Certified Lead',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      experience: '12 years'
    },
    {
      name: 'Arjun Patel',
      role: 'Solutions Architect',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      experience: '10 years'
    }
  ];

  return (
    <section id="about" className="lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl lg:text-5xl text-primary-950 mb-6">
            Built by CMS Veterans
          </h2>
          <p className="font-inter text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            We're experienced developers and CMS architects who've shaped digital experiences 
            for Fortune 500 companies and innovative startups alike.
          </p>
        </div>

        {/* Brand Story */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-poppins font-semibold text-2xl lg:text-3xl text-primary-950 mb-6">
                Our Story
              </h3>
              <p className="font-inter text-gray-700 mb-6 leading-relaxed">
                Founded by Sitecore and Umbraco certified experts, SwastikBytes was born from a clear vision: powerful, enterprise-grade CMS solutions shouldn’t demand large teams or complex overheads.
              </p>
              <p className="font-inter text-gray-700 leading-relaxed">
                Today, we blend deep technical mastery with agile methodologies to deliver digital experiences that are as reliable as they are innovative. Each project benefits from the precision of boutique craftsmanship and the scalability of enterprise-level technology—ensuring smarter, faster, and more effective results.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Users, title: 'Team First', desc: 'Collaborative approach' },
                { icon: Award, title: 'Excellence', desc: 'Certified expertise' },
                { icon: Target, title: 'Results', desc: 'Measurable outcomes' }
              ].map((item, index) => (
                <div key={index} className="text-center p-4">
                  <div className="bg-gradient-to-r from-accent-teal to-accent-indigo p-4 rounded-2xl w-fit mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-poppins font-semibold text-primary-950 mb-2">{item.title}</h4>
                  <p className="font-inter text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Carousel */}
        {/* <div className="mb-16">
          <h3 className="font-poppins font-semibold text-2xl lg:text-3xl text-primary-950 text-center mb-12">
            Leadership Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 ease-out-quart transform hover:-translate-y-2">
                <div className="relative mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-2xl mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-accent-teal to-accent-indigo text-white text-xs px-3 py-1 rounded-full">
                    {leader.experience}
                  </div>
                </div>
                <h4 className="font-poppins font-semibold text-xl text-primary-950 text-center mb-2">
                  {leader.name}
                </h4>
                <p className="font-inter text-gray-600 text-center">
                  {leader.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Counters 
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: 'Years Average Experience', suffix: '+' },
            { label: 'Enterprise Launches', suffix: '+' },
            { label: 'Certified Developers', suffix: '+' }
          ].map((counter, index) => (
            <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="font-poppins font-bold text-4xl lg:text-6xl text-primary-950 mb-4">
                <span
                  ref={(el) => counterRefs.current[index] = el}
                  data-index={index}
                >
                  0
                </span>
              </div>
              <p className="font-inter text-gray-600 text-lg">
                {counter.label}
              </p>
            </div>
          ))}
        </div>  */}
      </div>
    </section>
  );
};

export default About;