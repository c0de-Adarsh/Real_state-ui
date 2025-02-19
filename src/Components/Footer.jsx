import React from "react";

const Footer = () => {
  return (
    <footer className="bg-amber-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <div className="text-xl text-white font-bold hover:text-gray-300 cursor-pointer">
              Real Estate Company
            </div>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <a to="home"  className="text-white hover:text-gray-300">
              Home
            </a>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <a to="feature" className="text-white hover:text-gray-300">
              Features
            </a>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <a to="client"className="text-white hover:text-gray-300">
              Clients
            </a>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <a to="about"className="text-white hover:text-gray-300">
              About Us
            </a>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <a to="contact" className="text-white hover:text-gray-300">
              Contact Us
            </a>
          </div>
          
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">About Us</h3>
            <p className="text-white mb-4">Real Estate Company is a leading provider of real estate services, with a focus on delivering exceptional value to our clients. Our team of experts has deep industry knowledge and a proven track record of success.</p>
          
          </div>
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Services</h3>
            <ul className="text-white">
              <li className="mb-2">Residential Real Estate</li>
              <li className="mb-2">Commercial Real Estate</li>
              <li className="mb-2">Property Management</li>
              <li className="mb-2">Real Estate Investing</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Social as</h3>
            <ul className="text-white">
              <li className="mb-2">Facebook</li>
              <li className="mb-2">Instagram</li>
              <li className="mb-2">aedIn</li>
            
            </ul>
          </div>
          </div>
        <div className="mt-8 flex justify-center">
          <p className="text-base text-white">&copy; {new Date().getFullYear()} Paradise Hunt Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;