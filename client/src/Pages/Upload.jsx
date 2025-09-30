import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useApplicationStore from "../../Store/UseApplicationStore";

const Upload = () => {
  const { currentApplication, updateFiles, submitApplication } =
    useApplicationStore();
  const navigate = useNavigate();

  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (currentApplication.files.length > 0) {
      setFiles(currentApplication.files);
    }
  }, [currentApplication.files]);

  function handleFiles(e) {
    const newFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...newFiles]);
  }

  function handleDrop(e) {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...newFiles]);
  }

  function removeFile(index) {
    setFiles(files.filter((_, i) => i !== index));
  }

  const handleSubmit = () => {
    if (files.length === 0) {
      alert("Please upload at least one file (CV/Resume required)");
      return;
    }

    // Update files in the store
    updateFiles(files);

    // Submit the application
    const application = submitApplication();

    console.log("Submitted application:", application);

    alert("Application submitted successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm mb-2">
                  <span className="text-gray-600 whitespace-nowrap">
                    1. Personal Info
                  </span>
                  <span className="text-gray-600 whitespace-nowrap">
                    2. Education
                  </span>
                  <span className="text-gray-600 whitespace-nowrap">
                    3. Skills
                  </span>
                  <span className="text-blue-500 font-medium whitespace-nowrap">
                    4. Uploads
                  </span>{" "}
                  <span className="text-blue-500 font-medium whitespace-nowrap">
                    5. Review
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Sign Up
                </h1>
                <p className="text-gray-600">Step 4 of 4</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Upload Documents
                </h2>
                <p className="text-gray-600 mb-4">
                  Please upload your CV/Resume and any other relevant documents
                </p>

                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors mb-6"
                >
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-12 h-12 text-gray-400 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="text-gray-600 mb-4">
                      Drag and drop your files here
                    </p>
                    <label className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition">
                      Browse Files
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={handleFiles}
                      />
                    </label>
                    <p className="text-xs text-gray-500 mt-2">
                      Accepted formats: PDF, DOC, DOCX
                    </p>
                  </div>
                </div>

                {files.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Uploaded Files ({files.length})
                    </h3>
                    <div className="space-y-2">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <svg
                              className="w-5 h-5 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                              />
                            </svg>
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {(file.size / 1024).toFixed(2)} KB
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFile(index)}
                            className="text-red-600 hover:text-red-800 p-2"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between">
                <Link to="/skills">
                  <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                    Back
                  </button>
                </Link>

                <button
                  onClick={handleSubmit}
                  className="px-8 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </div>

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

