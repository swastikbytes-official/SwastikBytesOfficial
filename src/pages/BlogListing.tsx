import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Complete Guide to Installing WordPress CMS',
    excerpt: 'Learn how to install and configure WordPress CMS from scratch. This comprehensive guide covers system requirements, installation steps, and initial setup.',
    slug: 'installing-wordpress-cms',
    date: 'November 20, 2025',
    author: 'Ved Hingu',
    category: 'WordPress',
    readTime: 8,
    image: '/images/wordpressinstall/howtoinstallwordpress.jpg',
  },
  {
    id: 2,
    title: 'Complete Guide to Installing Umbraco CMS',
    excerpt: 'Learn how to install and configure Umbraco CMS from scratch. This comprehensive guide covers system requirements, installation steps, and initial setup.',
    slug: 'installing-umbraco-cms',
    date: 'January 18, 2026',
    author: 'Ved Hingu',
    category: 'Umbraco',
    readTime: 10,
    image: '/images/umbracoblogs/image.jpeg',
  },
  {
    id: 3,
    title: 'How to Install and Customize a WordPress Theme Using Local WP',
    excerpt: 'Discover how to install and customize a WordPress theme using Local WP. Follow this simple step-by-step guide to design your site locally and launch with confidence.',
    slug: 'wordpress-theme-installation-localwp',
    date: 'December 15, 2025',
    author: 'Ved Hingu',
    category: 'WordPress',
    readTime: 6,
    image: '/images/wordpressinstall/theme.jpeg',
  },
];

const BlogListing: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Blog - Swastikbytes</title>
        <meta name="description" content="Read our latest articles about CMS development, Sitecore, Umbraco, WordPress, and web development best practices." />
        <meta name="keywords" content="blog, CMS, Sitecore, Umbraco, WordPress, web development" />
        <meta property="og:title" content="Blog - Swastikbytes" />
        <meta property="og:description" content="Read our latest articles about CMS development and web solutions." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.swastikbytes.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/10 to-accent-indigo/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent-teal/20 to-accent-indigo/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent-indigo/20 to-accent-teal/20 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '1.5s'}}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h1 className="font-poppins font-bold text-4xl lg:text-5xl xl:text-6xl text-primary-900 mb-6">
              Articles & Insights
            </h1>
            <p className="font-inter text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest insights on CMS development, best practices, and industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Featured Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent-teal text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-poppins font-bold text-xl text-primary-900 mb-3 line-clamp-2 hover:text-accent-teal transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="font-inter text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500 font-inter">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-accent-teal font-semibold hover:gap-3 transition-all duration-300 font-inter"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogListing;