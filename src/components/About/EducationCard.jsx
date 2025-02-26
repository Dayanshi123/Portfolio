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
    <div className="flex flex-col items-center">
      <div className="relative w-full md:w-2/3 lg:w-1/2">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-300"></div>
        {educationTimeline.map((item, index) => (
          <div
            key={index}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            {/* Content container */}
            <div className="w-5/12">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-black">{item.degree}</h4>
                <p className="text-sm text-black">{item.institute}</p>
                <p className="text-xs text-black">CGPA/Percentage: {item.grade}</p>
                <span className="text-xs text-black">{item.year}</span>
              </div>
            </div>
            {/* Dot */}
            <div className="w-4 h-4 bg-yellow-400 rounded-full z-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
