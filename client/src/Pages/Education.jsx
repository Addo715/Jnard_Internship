import React from "react";
import Button from "../Components/Button";
import BackButton from "../Components/BackButton";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              {/* Progress Steps */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 text-sm mb-2">
                  <span className="text-gray-600">1. Personal Info</span>
                  <span className="text-blue-500 font-medium">2. Education</span>
                  <span className="text-gray-400">3. Skills</span>
                  <span className="text-gray-400">4. Uploads</span>
                  <span className="text-gray-400">5. Review</span>
                </div>
              </div>

              {/* Sign Up Header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign Up</h1>
                <p className="text-gray-600">Step 2 of 5</p>
              </div>

              {/* Education Form */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Education</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name of University
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your University"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Course"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year of Study
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Year of Study"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <Link to="/personal-info">
                  <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                    Back
                  </button>
                </Link>

                <Link to="/skills">
                  <button className="px-8 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right section: Why join internship */}
          <div className="hidden lg:flex w-[25rem] bg-blue-500 text-white flex-col justify-center rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Why Join Our Internship?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Gain valuable hands-on experience</li>
              <li>Learn from experienced mentors</li>
              <li>Build your professional network</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;