import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useApplicationStore from "../../Store/UseApplicationStore";

const Skills = () => {
  const { currentApplication, updateSkills } = useApplicationStore();
  const navigate = useNavigate();

  const [selectedSkills, setSelectedSkills] = useState([]);

  useEffect(() => {
    if (currentApplication.skills.length > 0) {
      setSelectedSkills(currentApplication.skills);
    }
  }, []);

  const allSkills = [
    "React",
    "Node.js",
    "Python",
    "JavaScript",
    "Java",
    "HTML/CSS",
    "SQL",
    "MongoDB",
    "Git",
    "Docker",
    "AWS",
    "TypeScript",
    "Angular",
    "Vue.js",
    "PHP",
  ];

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleContinue = () => {
    if (selectedSkills.length === 0) {
      // alert("Please select at least one skill");
  
    }
    updateSkills(selectedSkills);
    navigate("/upload");
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
                  <span className="text-blue-500 font-medium whitespace-nowrap">
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
                <p className="text-gray-600">Step 3 of 4</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Skills
                </h2>
                <p className="text-gray-600 mb-4">
                  Select the skills you have:
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {allSkills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedSkills.includes(skill)
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>

                <div className="border-t border-gray-200 my-8"></div>

                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Selected Skills ({selectedSkills.length})
                  </h3>
                  {selectedSkills.length > 0 ? (
                    <div className="flex flex-wrap gap-3">
                      {selectedSkills.map((skill) => (
                        <div
                          key={skill}
                          className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 flex items-center gap-2"
                        >
                          {skill}
                          <button
                            onClick={() => toggleSkill(skill)}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">
                      No skills selected yet
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-between">
                <Link to="/education">
                  <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                    Back
                  </button>
                </Link>

                <button
                  onClick={handleContinue}
                  className="px-8 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Next
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

export default Skills;
