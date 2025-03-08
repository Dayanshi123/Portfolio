import React from "react";

const Education = () => {
  const educationTimeline = [
    {
      year: "2021 - 2025",
      degree: "B.Tech in Electronics & Communication",
      institute: "Maulana Azad National Institute of Technology, Bhopal",
      grade: "8.23",
    },
    {
      year: "2019 - 2020",
      degree: "Higher Secondary (12th Grade)",
      institute: "Sarvodaya Higher Secondary School, Sironj",
      grade: "84%",
    },
    {
      year: "2017 - 2018",
      degree: "Secondary (10th Grade)",
      institute: "Nirmala Convent Higher Secondary School, Sironj",
      grade: "89.6%",
    },
  ];

  return (
    <div className="flex flex-col items-center text-[#d1fae5] py-12 bg-[#0a0a0a]">
      <h2 className="text-4xl font-bold text-green-400 mb-12">Education</h2>

      <div className="relative w-full md:w-2/3 lg:w-1/2">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-green-400"></div>

        {educationTimeline.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-between w-full mb-12 
            ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
          >
            {/* Education Details */}
            <div className="w-5/12 bg-green-400 text-black border border-green-600 
              p-5 rounded-lg shadow-lg transition-all duration-300 hover:bg-green-500 hover:scale-105">
              <h4 className="text-xl font-semibold">{item.degree}</h4>
              <p className="text-sm">{item.institute}</p>
              <p className="text-sm">CGPA/Percentage: {item.grade}</p>
              <span className="text-xs">{item.year}</span>
            </div>

            {/* Timeline Dot */}
            <div className="w-5 h-5 bg-green-400 border-2 border-green-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
