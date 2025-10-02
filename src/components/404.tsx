import React from 'react';
import { Link } from 'react-router-dom';

const NotFound404: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
    <h1 className="text-7xl font-bold text-white mb-4">404</h1>
    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Page Not Found</h2>
    <p className="text-white text-opacity-80 mb-8 text-center max-w-md">
      Sorry, the page you are looking for does not exist or has been moved.
    </p>
    <Link
      to="/"
      className="bg-[#008080] text-white px-6 py-3 rounded-full font-medium hover:bg-[#009999] transition-all duration-300"
    >
      Go to Homepage
    </Link>
  </div>
);

export default NotFound404;
