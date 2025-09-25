import React, { useState } from "react";
import { Link } from "react-router-dom";
// import React, { useState } from 'react';


const Skills = () => {
  const [selectedSkills, setSelectedSkills] = useState(['Design', 'Coding', 'Project Management']);


  const allSkills = [
    'Design', 'Coding', 'Marketing', 'Writing', 
    'Data Analysis', 'Project Management'
  ];

  const toggleSkill = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

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
                  <span className="text-blue-500 font-medium">3. Skills</span>
                  <span className="text-gray-400">4. Uploads</span>
                  <span className="text-gray-400">5. Review</span>
                </div>
              </div>

              {/* Sign Up Header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign Up</h1>
                <p className="text-gray-600">Step 3 of 5</p>
              </div>

              {/* Skills Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skills</h2>
                
                {/* Skill Selection Buttons */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {allSkills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedSkills.includes(skill)
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-8"></div>

                {/* Selected Skills Display */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedSkills.map((skill) => (
                      <div
                        key={skill}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <Link to="">
                <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  Back
                </button>
                </Link>

                <Link to="/upload">
                <button className="px-8 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-500 transition-colors">
                  Next
                </button>
                </Link>
              </div>
            </div>
          </div>

           {/* Right section: Why join internship */}
        <div className="hidden lg:flex w-1/2 bg-blue-500 text-white flex-col justify-center rounded-lg p-6">
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

export default Skills;
