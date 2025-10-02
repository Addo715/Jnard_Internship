import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    closeSidebar(); // Close sidebar after clicking (for mobile)
  };

  return (
    <>
      <nav className="sticky top-0 z-30 w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo / Company Name */}
          <div className="text-2xl font-semibold text-blue-600">
            <Link to="/">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-blue-700 cursor-pointer"
              >
                Jnard IT Consult
              </button>
            </Link>
          </div>

          {/* Center Nav Links - Hidden on mobile and tablet */}
          <div className="hidden lg:flex space-x-8 text-gray-700 font-medium">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-blue-600 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-600 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="hover:text-blue-600 cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-blue-600 cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Desktop Auth Buttons - Hidden on mobile and tablet */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
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
          className="fixed inset-0 z-40  bg-opacity-30"
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
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <Link to="/" onClick={closeSidebar}>
            <div className="text-xl font-semibold text-blue-600 cursor-pointer">
              Jnard IT Consult
            </div>
          </Link>
          <button
            onClick={closeSidebar}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col p-6 h-full">
          {/* Navigation Links */}
          <div className="space-y-4 mb-8 flex-1">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-lg text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-lg text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left text-lg text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100 cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-lg text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100 cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Mobile Auth Buttons */}
          <div className="mb-[5rem]">
            <Link
              to="/Education"
              className="block w-full text-center py-3 mb-5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
              onClick={closeSidebar}
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="block w-full text-center py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
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
