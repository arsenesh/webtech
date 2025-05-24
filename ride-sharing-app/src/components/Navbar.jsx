import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <nav className="bg-gray-900 bg-opacity-90 backdrop-blur text-white py-3 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        
        {/* Nav Links */}
        <div className="flex gap-8 items-center text-sm md:text-base font-medium">
          <Link to="/dashboard" className="hover:text-yellow-400 transition duration-200">
            Dashboard
          </Link>
          <Link to="/BookRide" className="hover:text-yellow-400 transition duration-200">
            Book Ride
          </Link>
          <Link to="/profile" className="hover:text-yellow-400 transition duration-200">
            Profile
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-3 md:mt-0">
          <button
            onClick={toggleTheme}
            className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm md:text-base transition"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button
            onClick={() => window.location.href = '/login'}
            className="bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded text-sm md:text-base transition"
          >
            Logout
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
