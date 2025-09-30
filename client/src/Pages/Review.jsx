import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useApplicationStore from "../../Store/UseApplicationStore";

const Review = () => {
  const { currentApplication, submitApplication } = useApplicationStore();
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Submit the application
    const application = submitApplication();
    console.log("Final submitted application:", application);

    alert("Application submitted successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              {/* Progress Steps */}
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
                  <span className="text-gray-600 whitespace-nowrap">
                    4. Uploads
                  </span>
                  <span className="text-blue-500 font-medium whitespace-nowrap">
                    5. Review
                  </span>
                </div>
              </div>

              {/* Sign Up Header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Sign Up
                </h1>
                <p className="text-gray-600">Step 5 of 5</p>
              </div>

              {/* Review Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Review Your Application
                </h2>
                <p className="text-gray-600 mb-6">
                  Please review all information before submitting
                </p>

                {/* Personal Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Full Name
                      </p>
                      <p className="text-gray-600">
                        {currentApplication.personalInfo.fullName ||
                          "Not provided"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email</p>
                      <p className="text-gray-600">
                        {currentApplication.personalInfo.email ||
                          "Not provided"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Phone Number
                      </p>
                      <p className="text-gray-600">
                        {currentApplication.personalInfo.phone ||
                          "Not provided"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Date of Birth
                      </p>
                      <p className="text-gray-600">
                        {currentApplication.personalInfo.dateOfBirth ||
                          "Not provided"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Education
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        University
                      </p>
                      <p className="text-gray-600">
                        {currentApplication.education.university ||
                          "Not provided"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Course
                      </p>
                      <p className="text-gray-600">
                        {currentApplication.education.course || "Not provided"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Year of Study
                      </p>
                      <p className="text-gray-600">
                        {currentApplication.education.yearOfStudy ||
                          "Not provided"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Skills
                  </h3>
                  {currentApplication.skills.length > 0 ? (
                    <div className="flex flex-wrap gap-3">
                      {currentApplication.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg text-blue-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No skills provided</p>
                  )}
                </div>

                {/* Uploaded Files */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Uploaded Files
                  </h3>
                  {currentApplication.files.length > 0 ? (
                    <div className="space-y-2">
                      {currentApplication.files.map((file, index) => (
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
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No files uploaded</p>
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <Link to="/upload">
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

export default Review;



// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import useApplicationStore from "../../Store/UseApplicationStore";

// const Review = () => {
//   const { currentApplication, submitApplication } = useApplicationStore();
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     // Optional: Add validation for required fields
//     if (
//       !currentApplication.personalInfo.fullName ||
//       !currentApplication.personalInfo.email ||
//       !currentApplication.personalInfo.phone ||
//       !currentApplication.personalInfo.dateOfBirth ||
//       !currentApplication.education.university ||
//       !currentApplication.education.course ||
//       !currentApplication.education.yearOfStudy ||
//       currentApplication.files.length === 0
//     ) {
//       alert("Please complete all required fields before submitting.");
//       return;
//     }

//     // Submit the application
//     const application = submitApplication();
//     console.log("Final submitted application:", application);

//     alert("Application submitted successfully!");
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-lg shadow-sm p-8">
//               {/* Progress Steps */}
//               <div className="mb-8">
//                 <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm mb-2">
//                   <span className="text-gray-600 whitespace-nowrap">
//                     1. Personal Info
//                   </span>
//                   <span className="text-gray-600 whitespace-nowrap">
//                     2. Education
//                   </span>
//                   <span className="text-gray-600 whitespace-nowrap">
//                     3. Skills
//                   </span>
//                   <span className="text-gray-600 whitespace-nowrap">
//                     4. Uploads
//                   </span>
//                   <span className="text-blue-500 font-medium whitespace-nowrap">
//                     5. Review
//                   </span>
//                 </div>
//               </div>

//               {/* Sign Up Header */}
//               <div className="mb-6">
//                 <h1 className="text-3xl font-bold text-gray-900 mb-2">
//                   Sign Up
//                 </h1>
//                 <p className="text-gray-600">Step 5 of 5</p>
//               </div>

//               {/* Review Section */}
//               <div className="mb-8">
//                 <h2 className="text-2xl font-semibold text-gray-900 mb-6">
//                   Review Your Application
//                 </h2>
//                 <p className="text-gray-600 mb-6">
//                   Please review all information before submitting
//                 </p>

//                 {/* Personal Information */}
//                 <div className="mb-8">
//                   <h3 className="text-lg font-medium text-gray-900 mb-4">
//                     Personal Information
//                   </h3>
//                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                     <div>
//                       <p className="text-sm font-medium text-gray-700">
//                         Full Name
//                       </p>
//                       <p className="text-gray-600">
//                         {currentApplication.personalInfo.fullName ||
//                           "Not provided"}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-gray-700">Email</p>
//                       <p className="text-gray-600">
//                         {currentApplication.personalInfo.email ||
//                           "Not provided"}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-gray-700">
//                         Phone Number
//                       </p>
//                       <p className="text-gray-600">
//                         {currentApplication.personalInfo.phone ||
//                           "Not provided"}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-gray-700">
//                         Date of Birth
//                       </p>
//                       <p className="text-gray-600">
//                         {currentApplication.personalInfo.dateOfBirth ||
//                           "Not provided"}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Education */}
//                 <div className="mb-8">
//                   <h3 className="text-lg font-medium text-gray-900 mb-4">
//                     Education
//                   </h3>
//                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                     <div>
//                       <p className="text-sm font-medium text-gray-700">
//                         University
//                       </p>
//                       <p className="text-gray-600">
//                         {currentApplication.education.university ||
//                           "Not provided"}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-gray-700">
//                         Course
//                       </p>
//                       <p className="text-gray-600">
//                         {currentApplication.education.course || "Not provided"}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-gray-700">
//                         Year of Study
//                       </p>
//                       <p className="text-gray-600">
//                         {currentApplication.education.yearOfStudy ||
//                           "Not provided"}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Skills */}
//                 <div className="mb-8">
//                   <h3 className="text-lg font-medium text-gray-900 mb-4">
//                     Skills
//                   </h3>
//                   {currentApplication.skills.length > 0 ? (
//                     <div className="flex flex-wrap gap-3">
//                       {currentApplication.skills.map((skill, index) => (
//                         <span
//                           key={index}
//                           className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg text-blue-700"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   ) : (
//                     <p className="text-gray-600">No skills provided</p>
//                   )}
//                 </div>

//                 {/* Uploaded Files */}
//                 <div className="mb-8">
//                   <h3 className="text-lg font-medium text-gray-900 mb-4">
//                     Uploaded Files
//                   </h3>
//                   {currentApplication.files.length > 0 ? (
//                     <div className="space-y-2">
//                       {currentApplication.files.map((file, index) => (
//                         <div
//                           key={index}
//                           className="flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
//                         >
//                           <div className="flex items-center gap-3">
//                             <svg
//                               className="w-5 h-5 text-blue-600"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
//                               />
//                             </svg>
//                             <div>
//                               <p className="text-sm font-medium text-gray-900">
//                                 {file.name}
//                               </p>
//                               <p className="text-xs text-gray-500">
//                                 {(file.size / 1024).toFixed(2)} KB
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <p className="text-gray-600">No files uploaded</p>
//                   )}
//                 </div>
//               </div>

//               {/* Navigation Buttons */}
//               <div className="flex justify-between">
//                 <Link to="/upload">
//                   <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
//                     Back
//                   </button>
//                 </Link>
//                 <button
//                   onClick={handleSubmit}
//                   className="px-8 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
//                 >
//                   Submit Application
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="hidden lg:flex w-[25rem] bg-blue-500 text-white flex-col justify-center rounded-lg p-6">
//             <h2 className="text-xl font-bold mb-4">Why Join Our Internship?</h2>
//             <ul className="list-disc pl-5 space-y-2">
//               <li>Gain valuable hands-on experience</li>
//               <li>Learn from experienced mentors</li>
//               <li>Build your professional network</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Review;