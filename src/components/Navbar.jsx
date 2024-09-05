import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Investigation Tool</Link>
        </div>

        {/* Links Section */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-400 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/facebook"
              className="text-white hover:text-gray-400 transition duration-200"
            >
              Facebook
            </Link>
          </li>
          <li>
            <Link
              to="/twitter"
              className="text-white hover:text-gray-400 transition duration-200"
            >
              Twitter
            </Link>
          </li>
          <li>
            <Link
              to="/instagram"
              className="text-white hover:text-gray-400 transition duration-200"
            >
              Instagram
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
