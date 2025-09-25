import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Branding */}
        <div>
          <h2 className="text-2xl font-bold text-blue-700">LOGO</h2>
          <p className="mt-3 text-sm">
            Building careers with mentorship and growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-700 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="#"
              className="hover:text-blue-700 transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="hover:text-blue-700 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-blue-700 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="hover:text-blue-700 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer