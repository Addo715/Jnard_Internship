import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo / Company Name */}
        <div className="text-2xl font-semibold text-blue-600">
          <Link to="/">Jnard IT Consult</Link>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/careers" className="hover:text-blue-600">Careers</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-blue-600">
            Log in
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
