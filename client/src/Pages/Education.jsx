import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useApplicationStore from "../../Store/UseApplicationStore";

const Education = () => {
  const { currentApplication, updateEducation } = useApplicationStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    university: "",
    course: "",
    yearOfStudy: "",
  });

  useEffect(() => {
    if (currentApplication.education.university) {
      setFormData(currentApplication.education);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = () => {
    if (!formData.university || !formData.course || !formData.yearOfStudy) {
      // alert("Please fill in all required fields");
   
    }
    updateEducation(formData);
    navigate("/skills");
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
                  <span className="text-blue-500 font-medium whitespace-nowrap">
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
            
                <p className="text-gray-600">Step 2 of 4</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Education
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name of University <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      placeholder="Enter Your University"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      placeholder="Enter Your Course"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year of Study <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="yearOfStudy"
                      value={formData.yearOfStudy}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Year</option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="Final Year">Final Year</option>
                      <option value="Graduate">Graduate</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Link to="/personal-info">
                  <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                    Back
                  </button>
                </Link>

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

export default Education;


