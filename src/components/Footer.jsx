import React from "react";
import logoDefault from "../assets/logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
          <img className="h-12 mr-2 mb-2" src={ logoDefault} alt="Logo" />
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-sm">
              We provide luxurious stays with top-notch amenities to ensure your comfort.
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="text-sm space-y-1">
              <li><a href="#home" className="hover:text-blue-400">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-sm">123 Hotel Street, City Name, Country</p>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p className="text-sm">&copy; 2024 Nirvina. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
