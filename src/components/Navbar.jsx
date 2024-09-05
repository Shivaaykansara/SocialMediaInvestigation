import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Investigation Tool</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Links Section */}
        <ul
          className={`md:flex space-x-6  mt-4 md:mt-0 hidden`}
        >
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-2">
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
      )}
    </nav>
  );
};

export default Navbar;
