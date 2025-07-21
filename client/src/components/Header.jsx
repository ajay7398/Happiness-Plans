import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="bg-teal-600 text-white p-4 flex justify-between items-center relative">
      <h1 className="text-2xl font-bold">
        <Link to="/">Happiness Plans</Link>
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6">
        <Link to="/about" className="border-b-2 border-transparent hover:border-white">About Us</Link>
        <Link to="/services" className="border-b-2 border-transparent hover:border-white">Services</Link>
        <Link to="/contact" className="border-b-2 border-transparent hover:border-white">Contact</Link>
      </nav>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <IoMdClose /> : <IoMdMenu />}
      </button>

      {/* Mobile Dropdown Nav */}
      {isMobile && (
        <nav className="absolute top-full left-0 w-full bg-teal-600 flex flex-col items-center py-4 md:hidden z-50">
          <Link
            to="/about"
            className="py-2 border-b border-white w-full text-center"
            onClick={() => setIsMobile(false)}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="py-2 border-b border-white w-full text-center"
            onClick={() => setIsMobile(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="py-2 border-b border-white w-full text-center"
            onClick={() => setIsMobile(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
