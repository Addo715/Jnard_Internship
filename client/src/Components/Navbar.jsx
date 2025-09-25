import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="w-full bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          
          {/* Logo / Company Name */}
          <div className="text-2xl font-semibold text-blue-600">
            <Link to="/">Jnard IT Consult</Link>
          </div>

          {/* Center Nav Links - Hidden on mobile and tablet */}
          <div className="hidden lg:flex space-x-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/careers" className="hover:text-blue-600">Careers</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </div>

          {/* Right side buttons - Hidden on mobile and tablet */}
          <div className="hidden lg:flex items-center space-x-4">
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

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={24} className="text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="text-xl font-semibold text-blue-600">
            Jnard IT Consult
          </div>
          <button
            onClick={closeSidebar}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col p-6">
          {/* Navigation Links */}
          <div className="space-y-4 mb-8">
            <Link
              to="/"
              className="block text-lg text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100"
              onClick={closeSidebar}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-lg text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100"
              onClick={closeSidebar}
            >
              About
            </Link>
            <Link
              to="/careers"
              className="block text-lg text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100"
              onClick={closeSidebar}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="block text-lg text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100"
              onClick={closeSidebar}
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="space-y-4">
            <Link
              to="/login"
              className="block w-full text-center py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={closeSidebar}
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={closeSidebar}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;