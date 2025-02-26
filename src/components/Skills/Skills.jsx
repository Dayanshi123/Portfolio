import React from 'react';
import 'devicon/devicon.min.css';

// Skill data
const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    ],
  },
  {
    category: 'Libraries & Frameworks',
    items: [
      { name: 'C++ STL', icon: 'devicon-cplusplus-plain colored' },
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
    ],
  },
  {
    category: 'Databases & Tools',
    items: [
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'Git', icon: 'devicon-git-plain colored' },
    ],
  },
  {
    category: 'Coursework',
    items: [
      { name: 'Data Structures & Algorithms', icon: 'devicon-java-plain colored' },
      { name: 'Operating Systems', icon: 'devicon-linux-plain colored' },
      { name: 'Object-Oriented Programming', icon: 'devicon-cplusplus-plain colored' },
      { name: 'Database Management Systems', icon: 'devicon-mysql-plain colored' },
    ],
  },
  {
    category: 'Interests',
    items: [
      { name: 'Web Development', icon: 'devicon-javascript-plain colored' },
      { name: 'Machine Learning', icon: 'devicon-python-plain colored' },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Self-learning', icon: 'devicon-git-plain colored' },
      { name: 'Leadership', icon: 'devicon-git-plain colored' },
      { name: 'Event Management', icon: 'devicon-git-plain colored' },
      { name: 'Public Speaking', icon: 'devicon-git-plain colored' },
      { name: 'Workflow Management', icon: 'devicon-git-plain colored' },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r 
        from-yellow-400 to-pink-500 ">
          Skills
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105  
              bg-gradient-to-r from-[#000405] to-[#000909] border border-cyan-200 shadow-cyan-400"
            >
              <h3 className="text-2xl font-bold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <i className={`${item.icon} text-4xl`}></i>
                    <span>{item.name}</span>
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
