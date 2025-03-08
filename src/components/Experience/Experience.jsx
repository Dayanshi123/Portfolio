import React from "react";
import "devicon/devicon";

// Experience data
const experiences = [
  {
    company: "AICTE - EduSkills",
    role: "Machine Learning Virtual Internship",
    duration: "June 2024 - July 2024",
    contributions: [
      "Developed and optimized machine learning models for classification, regression, and clustering tasks.",
      "Implemented feature engineering and hyperparameter tuning to enhance model performance.",
      "Gained hands-on experience with Python, TensorFlow, Scikit-Learn, and Keras for real-world ML applications.",
    ],
    icon: "devicon-python-plain colored",
  },
  {
    company: "Zeenith (Coding Club)",
    role: "Team-Head",
    duration: "Aug 2022 - Present",
    contributions: [
      "Led the college coding club, organizing coding contests, hackathons, and mentorship programs.",
      "Guided students in data structures, algorithms, and competitive programming, improving problem-solving skills.",
      "Facilitated technical workshops and coding bootcamps to enhance coding culture on campus.",
    ],
    icon: "devicon-devicon-plain",
  },
  {
    company: "AAROHA (NGO)",
    role: "Tutor",
    duration: "Oct 2022 - July 2024",
    contributions: [
      "Mentored underprivileged students, improving their academic performance by 20-30%.",
      "Designed personalized learning plans and interactive sessions to enhance engagement and retention.",
      "Encouraged continued learning through hands-on activities and educational outreach programs.",
    ],
    icon: "devicon-git-plain colored",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full py-20 bg-[#0a0a0a] text-green-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
          Experience
        </h2>

        {/* Experience Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg bg-green-900 border border-green-600 transition-transform 
              hover:scale-105 hover:shadow-lg hover:border-green-400"
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-4">
                <i className={`${exp.icon} text-5xl text-green-300`}></i>
              </div>

              {/* Experience Details */}
              <h3 className="text-2xl font-bold text-green-200">{exp.company}</h3>
              <h4 className="text-xl font-semibold text-green-400">{exp.role}</h4>
              <p className="text-green-500">{exp.duration}</p>

              {/* Contributions */}
              <ul className="mt-3 text-green-100 text-left list-disc list-inside">
                {exp.contributions.map((item, idx) => (
                  <li key={idx} className="text-green-300">{item}</li>
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
