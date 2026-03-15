import React from "react";
import { MapPin, Zap, Star } from "lucide-react";
import { FaMobileAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Google Maps",
      company: "Google LLC",
      category: "Map & Navigation",
      rating: 4.5,
      icon: <MapPin className="w-10 h-10 text-white" />,
      bg: "bg-blue-600",
    },
    {
      id: 2,
      title: "Messenger",
      company: "Meta Platforms, Inc.",
      category: "Communication",
      rating: 4.8,
      icon: <FaMobileAlt className="w-10 h-10 text-white" />,
      bg: "bg-pink-600",
    },
    {
      id: 3,
      title: "Uber",
      company: "Uber Technologies, Inc.",
      category: "Ridesharing",
      rating: 4.6,
      icon: <Zap className="w-10 h-10 text-white" />,
      bg: "bg-green-600",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`flex items-start gap-6 p-8 rounded-3xl shadow-lg transition-transform hover:-translate-y-2 ${feature.bg} text-white`}
          >
            <div className="p-4 bg-white/20 rounded-2xl">{feature.icon}</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-1 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm font-medium text-white/80 mb-1">
                {feature.company}
              </p>
              <div className="flex items-center gap-2 text-sm mt-3">
                <span className="px-3 py-1 bg-white/20 rounded-full font-medium">
                  {feature.category}
                </span>
                <div className="flex items-center gap-1.5 text-yellow-300">
                  <Star className="w-4 h-4 fill-yellow-300" />
                  <span className="font-semibold text-white">
                    {feature.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
