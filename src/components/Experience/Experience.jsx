import React from "react";
import "devicon/devicon";

const experiences = [
  {
    company: "AICTE - EduSkills",
    role: "Machine Learning Virtual Internship",
    duration: "June 2024 - July 2024",
    contributions: [
      "Developed and optimized machine learning models for classification, regression, and clustering tasks.",
      "Worked extensively on IBM Cloud, utilizing Watsonx Assistant for AI-driven chatbot development.",
      "Implemented feature engineering and hyperparameter tuning to enhance model performance.",
      "Gained hands-on experience with Python, TensorFlow, Scikit-Learn, and Keras for real-world ML applications.",
    ],
    icon: "devicon-python-plain",
  },
  {
    company: "Zeenith Coding Club",
    role: "Technical Team Head",
    duration: "Aug 2022 - Present",
    contributions: [
      "Led the college coding club, organizing coding contests, hackathons, and mentorship programs.",
      "Guided students in data structures, algorithms, and competitive programming.",
      "Facilitated technical workshops and coding bootcamps to strengthen the coding culture on campus.",
    ],
    icon: "devicon-devicon-plain",
  },
  {
    company: "AAROHA NGO",
    role: "Tutor",
    duration: "Oct 2022 - July 2024",
    contributions: [
      "Mentored underprivileged students, helping them improve their academic understanding.",
      "Designed personalized learning plans and interactive sessions for better engagement.",
      "Encouraged continuous learning through hands-on activities and outreach programs.",
    ],
    icon: "devicon-git-plain",
  },
];

const ExperienceSection = ({ darkMode }) => {
  return (
    <section
      id="experience"
      className={`w-full py-20 transition-all duration-300 ${
        darkMode ? "bg-[#000000] text-[#E0E0E0]" : "bg-[#F8F9FA] text-[#0650d8]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className={`text-5xl font-extrabold ${
            darkMode ? "text-[#56A8F5]" : "text-[#0650d8]"
          }`}
        >
          Experience
        </h2>

        {/* Experience Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg border transition-transform 
              hover:scale-105 hover:shadow-xl ${
                darkMode
                  ? "bg-[#121212] border-[#56A8F5] hover:border-[#8AC9FF]"
                  : "bg-white border-[#0650d8] hover:border-[#03338d]"
              }`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-4">
                <i
                  className={`${exp.icon} text-5xl ${
                    darkMode ? "text-[#56A8F5]" : "text-[#0650d8]"
                  }`}
                ></i>
              </div>

              {/* Experience Details */}
              <h3
                className={`text-2xl font-bold ${
                  darkMode ? "text-[#8AC9FF]" : "text-[#03338d]"
                }`}
              >
                {exp.company}
              </h3>
              <h4
                className={`text-xl font-semibold ${
                  darkMode ? "text-[#56A8F5]" : "text-[#0650d8]"
                }`}
              >
                {exp.role}
              </h4>
              <p className="text-sm">{exp.duration}</p>

              {/* Contributions */}
              <ul className="mt-3 text-left list-disc list-inside space-y-1">
                {exp.contributions.map((item, idx) => (
                  <li key={idx} className="text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
