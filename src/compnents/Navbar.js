import React, { useState } from 'react';

function Header() {
  // State to toggle the navbar
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the navbar
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo or Name */}
        <div className="text-3xl font-bold">
          Shubhvrat
        </div>
        
        {/* Hamburger Menu Button (only visible on mobile) */}
        <button 
          className="block md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        
        {/* Navbar - align elements vertically on mobile */}
        <nav className={`mt-4 md:mt-0 md:flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="hover:text-gray-400 block text-lg" aria-label="Home">Home</a>
          <a href="#Projects" className="hover:text-gray-400 block text-lg" aria-label="Projects">Projects</a>
          <a href="https://www.linkedin.com/in/shubhvratkulkarni/" className="hover:text-gray-400 block text-lg" aria-label="LinkedIn">LinkedIn</a>
          <a href="#contact" className="hover:text-gray-400 block text-lg" aria-label="Contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
