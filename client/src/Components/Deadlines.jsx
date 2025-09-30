import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import useApplicationStore from "../../Store/UseApplicationStore";

const Deadlines = () => {
  const { deadlines } = useApplicationStore();
  const hasActiveDeadline = deadlines.some(
    (deadline) => deadline.status === "active"
  );

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Internship Opportunities
          </h2>
          <p className="text-lg text-gray-600">
            Check our available internship programs
          </p>
        </div>

        <div
          className={`border rounded-lg p-4 mb-4 ${
            hasActiveDeadline
              ? "bg-green-50 border-green-200"
              : "bg-red-50 border-red-200"
          }`}
        >
          <p
            className={`text-sm font-medium text-center ${
              hasActiveDeadline ? "text-green-700" : "text-red-700"
            }`}
          >
            {hasActiveDeadline ? (
              <>
                <CheckCircle className="inline mr-2" size={16} />
                Applications are currently open!
              </>
            ) : (
              <>
                <XCircle className="inline mr-2" size={16} />
                Applications are currently closed.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deadlines;
