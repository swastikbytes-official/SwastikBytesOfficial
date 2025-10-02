import React from 'react';
import { Link } from 'react-router-dom';

const NotFound404: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4 relative overflow-hidden">
    {/* Teal glow behind 404 */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#008080] opacity-20 rounded-full blur-3xl pointer-events-none z-0"></div>
    <h1 className="text-7xl font-bold text-primary-950 mb-2 z-10 relative drop-shadow-lg">404</h1>
    <div className="mb-4 z-10 relative">
      <span className="font-[Signatura_Monoline] text-3xl text-primary-950 block text-center mb-2">Swastikbytes</span>
      <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#008080] to-[#00b3b3] rounded-full mb-2"></div>
    </div>
    <h2 className="text-2xl md:text-3xl font-semibold text-primary-950 mb-2 z-10 relative">Page Not Found</h2>
    <p className="text-primary-950 text-opacity-80 mb-8 text-center max-w-md z-10 relative">
      Sorry, the page you are looking for does not exist or has been moved.
    </p>
    <Link
      to="/"
      className="bg-[#008080] text-white px-6 py-3 rounded-full font-medium hover:bg-[#00b3b3] transition-all duration-300 z-10 relative shadow-lg"
    >
      Go to Homepage
    </Link>
  </div>
);

export default NotFound404;
