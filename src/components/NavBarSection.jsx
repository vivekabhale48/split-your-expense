import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-900 text-gray-300 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          {/* Add your symbol/logo here */}
          <div className="w-10 h-10 bg-gray-700 rounded-full flex justify-center items-center">
            {/* Placeholder for your logo */}
            <img src="/AppSymbol.png" alt="Logo" />
          </div>
          <span className="text-xl font-semibold">SPLIT YOUR EXPENSE</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/features" className="hover:text-white">
            Features
          </Link>
          <Link to="/about" className="hover:text-white">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-white">
            Contact Us
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-gray-300 space-y-6 py-6 px-6">
          <Link to="/" className="block hover:text-white">
            Home
          </Link>
          <Link to="/features" className="block hover:text-white">
            Features
          </Link>
          <Link to="/pricing" className="block hover:text-white">
            Pricing
          </Link>
          <Link to="/about" className="block hover:text-white">
            About Us
          </Link>
          <Link to="/contact" className="block hover:text-white">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};
