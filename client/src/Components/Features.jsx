import React from "react";
import { BookOpen, User, Rocket } from "lucide-react";

const features = [
  {
    title: "Learning",
    description: "Gain guidance from experienced professionals.",
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Mentorship",
    description: "Receive guidance from experienced professionals.",
    icon: <User className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Career Growth",
    description: "Build your future in our company.",
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
  },
];

const Features = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
