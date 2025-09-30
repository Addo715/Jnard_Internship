import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useApplicationStore from "../../Store/UseApplicationStore";

const PersonalInfo = () => {
  const { currentApplication, updatePersonalInfo } = useApplicationStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
  });

  useEffect(() => {
    if (currentApplication.personalInfo.fullName) {
      setFormData(currentApplication.personalInfo);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.dateOfBirth
    ) {
      // alert("Please fill in all required fields");
 
    }
    updatePersonalInfo(formData);
    navigate("/education");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm mb-2">
                  <span className="text-blue-500 font-medium whitespace-nowrap">
                    1. Personal Info
                  </span>
                  <span className="text-gray-400 whitespace-nowrap">
                    2. Education
                  </span>
                  <span className="text-gray-400 whitespace-nowrap">
                    3. Skills
                  </span>
                  <span className="text-gray-400 whitespace-nowrap">
                    4. Uploads
                  </span>{" "}
                  <span className="text-gray-400 whitespace-nowrap">
                    5. Review
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Sign Up
                </h1>
                <p className="text-gray-600">Step 1 of 4</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Personal Information
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter Your Full Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Your Phone Number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleContinue}
                  className="px-8 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Continue
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

export default PersonalInfo;

