import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechCorp Solutions',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Swastikbytes transformed our legacy system into a modern, high-performing platform. Their Sitecore expertise is unmatched. The project was delivered on time and exceeded all our expectations.',
      project: 'E-commerce Platform Migration'
    },
    {
      name: 'Michael Chen',
      role: 'Director of Digital',
      company: 'HealthFirst Network',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Working with Swastikbytes was a game-changer. Their Umbraco implementation helped us streamline our content management across 15 healthcare facilities. Truly professional and knowledgeable team.',
      project: 'Multi-site Healthcare Portal'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'VP Marketing',
      company: 'Global Finance Inc',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The performance improvements achieved by Swastikbytes were remarkable. Our site speed increased by 400% and user engagement by 80%. Their attention to detail and technical expertise is outstanding.',
      project: 'Financial Services Platform'
    },
    {
      name: 'David Thompson',
      role: 'IT Director',
      company: 'EduTech University',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Swastikbytes delivered a complex student portal system that serves 50,000+ users seamlessly. Their expertise in both technical implementation and user experience design is impressive.',
      project: 'Education Platform Modernization'
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/20 to-accent-indigo/20"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-6"></div>
        <div className="absolute top-20 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/3 to-transparent transform skew-y-3"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl lg:text-5xl text-white mb-6">
            Client Success Stories
          </h2>
          <p className="font-inter text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about 
            working with Swastikbytes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 ease-out-quart transform hover:-translate-y-2"
              data-speed="0.8"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-accent-teal mb-6" />

              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="font-inter text-gray-100 text-lg leading-relaxed mb-8">
                "{testimonial.text}"
              </blockquote>

              {/* Project Tag */}
              <div className="mb-6">
                <span className="bg-accent-teal/20 text-accent-teal px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.project}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-2xl object-cover"
                />
                <div>
                  <div className="font-poppins font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="font-inter text-sm text-gray-300">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { number: '100%', label: 'Client Satisfaction Rate' },
            { number: '20+', label: 'Successful Projects' },
            { number: '24/7', label: 'Support & Maintenance' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="font-poppins font-bold text-4xl text-white mb-2">
                {stat.number}
              </div>
              <div className="font-inter text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;