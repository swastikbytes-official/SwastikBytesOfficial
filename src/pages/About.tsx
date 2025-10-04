import React, { useEffect, useRef } from 'react';
import { Users, Award, Target, CheckCircle, Globe, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

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
          const targets = [10, 15, 10, 100];
          const suffixes = ['+', '+', '+', '%'];
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
      role: 'Founder & Sitecore MVP',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      experience: '14 years',
      bio: 'Sitecore MVP with deep expertise in enterprise CMS implementations. Led 100+ successful digital transformation projects.'
    },
    {
      name: 'Priya Sharma',
      role: 'Lead Developer & Umbraco Expert',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      experience: '12 years',
      bio: 'Umbraco certified expert specializing in multi-site architectures and performance optimization for healthcare and education sectors.'
    },
    {
      name: 'Arjun Patel',
      role: 'Solutions Architect',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      experience: '10 years',
      bio: 'WordPress and headless CMS specialist with expertise in scalable architectures and modern development practices.'
    }
  ];

  const values = [
    {
      icon: Users,
      title: 'Client-First Approach',
      description: 'Every decision we make is guided by what\'s best for our clients\' long-term success.'
    },
    {
      icon: Award,
      title: 'Excellence in Delivery',
      description: 'We maintain the highest standards in code quality, project management, and client communication.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Our success is measured by the tangible business outcomes we deliver for our clients.'
    },
    {
      icon: Globe,
      title: 'Innovation Focus',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions that future-proof your business.'
    }
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>About Us - Swastikbytes</title>
        <meta name="description" content="Learn more about Swastikbytes and our mission to deliver quality IT solutions." />
        <meta name="keywords" content="about, Swastikbytes, IT solutions, company" />
        <meta property="og:title" content="About Swastikbytes" />
        <meta property="og:description" content="Learn more about Swastikbytes and our mission." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.swastikbytes.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent-teal/20 to-accent-indigo/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent-indigo/20 to-accent-teal/20 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '1.5s'}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-primary-950 mb-6">
            About Swastikbytes
          </h1>
          <p className="font-inter text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Professional CMS development team with over a decade of experience delivering enterprise-grade solutions 
            with boutique-level care and attention to detail.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Years Average Experience', suffix: '+' },
              // { label: 'Successful Projects', suffix: '+' },
              { label: 'Certified Developers', suffix: '+' },
              { label: 'Client Satisfaction', suffix: '%' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="font-poppins font-bold text-3xl lg:text-4xl text-primary-950 mb-2">
                  <span
                    ref={(el) => counterRefs.current[index] = el}
                    data-index={index}
                  >
                    0
                  </span>
                </div>
                <div className="font-inter text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-950 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 font-inter text-gray-700 leading-relaxed">
                <p>
                  Founded in 2025 by a team of passionate CMS developers, Swastikbytes emerged from a simple 
                  belief: enterprise-grade solutions shouldn't require enterprise-sized teams or budgets.
                </p>
                <p>
                  What started as a small consultancy focused on Sitecore implementations has grown into a 
                  comprehensive CMS specialist agency, serving clients across healthcare, finance, education, lawfirm and real estate .
                </p>
                <p>
                  Today, we combine deep technical expertise with agile delivery methods, ensuring every 
                  project receives both the precision of boutique craftsmanship and the reliability of 
                  enterprise-grade solutions.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-accent-teal/10 to-accent-indigo/10 rounded-2xl p-6">
                  <Clock className="h-8 w-8 text-accent-teal mb-3" />
                  <p className="font-inter text-sm text-gray-600">10+ years of CMS excellence</p>
                </div>
                <div className="bg-gradient-to-r from-accent-indigo/10 to-accent-teal/10 rounded-2xl p-6">
                  <Globe className="h-8 w-8 text-accent-indigo mb-3" />
                  <p className="font-inter text-sm text-gray-600">Clients across 5 continents</p>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left" className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-accent-teal to-accent-indigo p-2 rounded-xl">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-poppins font-semibold text-primary-950">Certified Team</div>
                    <div className="font-inter text-sm text-gray-600">14+ certified developers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {/* <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-950 mb-6">
              Leadership Team
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead our team and drive innovation in CMS development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 ease-out-quart transform hover:-translate-y-2"
              >
                <div className="relative mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-2xl mx-auto object-cover"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-accent-teal to-accent-indigo text-white text-sm px-3 py-1 rounded-full">
                    {leader.experience}
                  </div>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-primary-950 text-center mb-2">
                  {leader.name}
                </h3>
                <p className="font-inter text-accent-teal text-center mb-4 font-medium">
                  {leader.role}
                </p>
                <p className="font-inter text-gray-600 text-center text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Values */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-950 mb-6">
              Our Values
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="text-center group"
              >
                <div className="bg-gradient-to-r from-accent-teal to-accent-indigo p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-primary-950 mb-4">
                  {value.title}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-950 mb-6">
              Certifications & Recognition
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              Our expertise is validated by industry-leading certifications and recognition from our peers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Sitecore MVP', icon: '🏆' },
              { title: 'Umbraco Certified', icon: '🎖️' },
              { title: 'WordPress Expert',  icon: '💎' }
              // { title: 'Microsoft Partner', icon: '🌟' }
            ].map((cert, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-poppins font-semibold text-primary-950 mb-2">{cert.title}</h3>
                <p className="font-inter text-sm text-gray-600">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;