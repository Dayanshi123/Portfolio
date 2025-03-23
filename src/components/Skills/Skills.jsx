import React from "react";
import "devicon/devicon";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "C++", icon: "devicon-cplusplus-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
    ],
  },
  {
    category: "Libraries & Frameworks",
    items: [
      { name: "C++ STL", icon: "devicon-cplusplus-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "Node.js", icon: "devicon-nodejs-plain" },
    ],
  },
  {
    category: "Databases & Tools",
    items: [
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "Git", icon: "devicon-git-plain" },
    ],
  },
  {
    category: "Coursework",
    items: [
      { name: "Data Structures & Algorithms", icon: "devicon-cplusplus-plain" },
      { name: "Database Management System", icon: "devicon-mysql-plain" },
      { name: "Operating Systems", icon: "devicon-linux-plain" },
      { name: "Object-Oriented Programming", icon: "devicon-cplusplus-plain" },
    ],
  },
  {
    category: "Interests",
    items: [
      { name: "Web Development", icon: "devicon-javascript-plain" },
      { name: "Machine Learning", icon: "devicon-python-plain" },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Self-learning", icon: "devicon-git-plain" },
      { name: "Leadership", icon: "devicon-git-plain" },
      { name: "Event Management", icon: "devicon-git-plain" },
      { name: "Public Speaking", icon: "devicon-git-plain" },
      { name: "Workflow Management", icon: "devicon-git-plain" },
    ],
  },
];

const SkillsSection = ({ darkMode }) => {
  return (
    <section
      id="skills"
      className={`w-full py-20 transition-all duration-300 ${
        darkMode ? "bg-[#000000] text-[#E0E0E0]" : "bg-[#F8F9FA] text-[#0650d8]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className={`text-5xl font-extrabold text-center ${
            darkMode ? "text-[#56A8F5]" : "text-[#0650d8]"
          }`}
        >
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg border transition-transform hover:scale-105 
              hover:shadow-xl ${
                darkMode
                  ? "bg-[#121212] border-[#56A8F5] hover:border-[#8AC9FF]"
                  : "bg-white border-[#0650d8] hover:border-[#03338d]"
              }`}
            >
              {/* Category Name */}
              <h3
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? "text-[#8AC9FF]" : "text-[#03338d]"
                }`}
              >
                {skill.category}
              </h3>

              {/* Skills List */}
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <i
                      className={`${item.icon} text-4xl ${
                        darkMode ? "text-[#56A8F5]" : "text-[#0650d8]"
                      }`}
                    ></i>
                    <span className="text-lg">{item.name}</span>
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

export default SkillsSection;
