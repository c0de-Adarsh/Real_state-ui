import React, { useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Paradise Hunt</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Our Features</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">On Sale</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Our Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Demo</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Our Clients</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact Us</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Our Features</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">On Sale</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Our Services</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Demo</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Our Clients</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;