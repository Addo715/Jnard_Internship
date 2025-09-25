import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Upload = () => {
  const [files, setFiles] = useState([]);

  function handleFiles(e) {
    const newFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...newFiles]);
  }

  function handleDrop(e) {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...newFiles]);
  }

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
                  <span className="text-gray-600">2. Education</span>
                  <span className="text-gray-600">3. Skills</span>
                  <span className="text-blue-500 font-medium">4. Uploads</span>
                  <span className="text-gray-400">5. Review</span>
                </div>
              </div>

              {/* Sign Up Header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign Up</h1>
                <p className="text-gray-600">Step 4 of 5</p>
              </div>

              {/* Upload Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Uploads</h2>

                {/* Drag & Drop Box */}
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 mb-6"
                >
                  <p className="text-gray-600 mb-4">Drag and drop your files here</p>
                  <label className="inline-block px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600">
                    Upload Files
                    <input
                      type="file"
                      multiple
                      className="hidden"
                      onChange={handleFiles}
                    />
                  </label>
                </div>

                {/* List of Selected Files */}
                {files.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Selected Files:</h3>
                    <div className="space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700">
                          {file.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <Link to="/skills">
                  <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                    Back
                  </button>
                </Link>

                <Link to="/review">
                  <button className="px-8 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Next
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

export default Upload;