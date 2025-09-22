import React from "react";
import Button from "../Components/Button";

const Skills = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      {/* Card container */}

      <div className="bg-white shadow-lg rounded-xl p-8 flex w-full max-w-5xl gap-10">
        {/* Left section: form fields */}
        <div className="flex flex-col w-1/2 space-y-4">
          <div className="mt-2">
            <h1 className="text-3xl font-bold">Sign Up</h1>
          </div>
          <label>
            Full Name
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full border p-2 rounded mt-1"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full border p-2 rounded mt-1"
            />
          </label>

          <label>
            Phone Number
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              className="w-full border p-2 rounded mt-1"
            />
          </label>

          <label>
            Date of Birth
            <input type="date" className="w-full border p-2 rounded mt-1" />
          </label>

          <div>
            <Button label="Continue" />
          </div>
        </div>

        {/* Right section: Why join internship */}
        <div className="w-1/2 bg-blue-500 text-white flex flex-col justify-center rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Why Join Our Internship?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Gain valuable hands-on experience</li>
            <li>Learn from experienced mentors</li>
            <li>Build your professional network</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
