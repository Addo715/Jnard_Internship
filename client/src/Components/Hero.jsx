import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <main className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-[80rem] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Start Your
                <br />
                Career with Us
              </h1>
              <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed">
                Apply as an intern, gain experience,
                <br />
                and grow with mentors.
              </p>
              <button className="px-8 py-3 sm:px-10 sm:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-1000">
                Apply Now
              </button>
            </div>

            {/* Right Illustration */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] 2xl:w-[36rem] 2xl:h-[36rem]">
                {/* SVG background */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#E0E7FF"
                    d="M46.8,-81C60.4,-73.3,70.8,-60.1,77.2,-45.7C83.5,-31.3,85.8,-15.6,86.3,0.3C86.7,16.2,85.4,32.4,78.1,45.2C70.9,58,57.6,67.5,43.6,75.5C29.6,83.4,14.8,90,-0.5,90.8C-15.7,91.6,-31.5,86.6,-45.9,78.9C-60.2,71.1,-73.3,60.5,-81.1,46.9C-88.9,33.2,-91.5,16.6,-89.9,0.9C-88.3,-14.8,-82.5,-29.5,-74.5,-42.8C-66.4,-56,-56.2,-67.7,-43.4,-75.9C-30.6,-84,-15.3,-88.6,0.7,-89.7C16.6,-90.9,33.3,-88.7,46.8,-81Z"
                    transform="translate(100 100)"
                  />
                </svg>

                {/* Team illustration */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <img
                    src="/TeamImage.png"
                    alt="Team illustration"
                    className="w-full h-full object-contain max-w-full max-h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
