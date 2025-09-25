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
    <section className="  grid md:grid-cols-3 gap-8 py-16 bg-white ">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center p-6 rounded-xl shadow-lg transition"
        >
          {feature.icon}
          <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
          <p className="text-gray-600 mt-2">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
