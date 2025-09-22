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
            <p className="step"> Step 3 of 5 </p>
          </div>

          <h2 className="text-lg font-semibold mb-3">Skills</h2>
      <div className="flex flex-wrap gap-3 mb-6">
        {skills.map((s) => (
          <button
            key={s}
            onClick={() => toggle(s)}
            className={`px-4 py-2 rounded-lg border transition
              ${
                selected.includes(s)
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-blue-500 border-blue-500 hover:bg-blue-50"
              }`}
          >
            {s}
          </button>
        ))}
      </div>

      <h3 className="text-lg font-medium mb-2">Selected Skills</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {selected.map((s) => (
          <span
            key={s}
            className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Back
        </button>
        <button
          onClick={() => onNext(selected)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-500"
        >
          Next
        </button>
      </div>

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
