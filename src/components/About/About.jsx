import React, { useState } from "react";
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import Education from "./EducationCard";
import POR from "./PORCard";

const About = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const cards = [
    { 
      title: "Education",
      icon: <FaGraduationCap />,
      component: <Education />
    },
    { 
      title: "POR",
      icon: <FaUsers />, component: <POR />
    },
  ];

  return (
    <section id="about" className="w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
        from-yellow-600 to-pink-400 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center mt-6">
          {/* Avatar */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              src="/public/mee.jpg"
              alt="Avatar"
              className="w-100 h-100 object-cover border-4 border-yellow-400 shadow-pink-400"
            />
          </div>
          {/* Info */}
          <div className="w-full md:w-2/3 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">Dayanshi Jain - Software Developer</h3>
            <p className="text-lg text-gray-300 mt-2">
              I am passionate about <span className="font-semibold text-white">machine learning, and software development</span>,
              I specialize in building <span className="font-semibold text-white">scalable web applications, and deep learning models</span>.
              With expertise in <span className="font-semibold text-white">Python, C++, JavaScript, HTML/CSS</span>, and frameworks like
              <span className="font-semibold text-white">TensorFlow, Keras, and React.js</span>, I excel at designing efficient and impactful solutions.
              I have a <span className="font-semibold text-white">4-star rating on GeeksforGeeks </span> and have solved <span className="font-semibold text-white">800+ problems</span>
              across platforms like <span className="font-semibold text-white">LeetCode and CodeStudio</span>, actively participating in
              <span className="font-semibold text-white">50+ coding competitions</span>, including <span className="font-semibold text-white">Flipkart Grid and Amazon HackOn</span>.
              My strong foundation in <span className="font-semibold text-white">Data Structures & Algorithms, Operating Systems, OOP, and Database Management</span>
              enables me to develop optimized and scalable applications. Beyond technical expertise, I possess <span className="font-semibold text-white">leadership, workflow management,
              and public speaking skills</span>, with experience in <span className="font-semibold text-white">mentorship and event management</span>.
              Always eager to explore emerging technologies, I am driven by a passion for <span className="font-semibold text-white">innovation and impactful problem-solving</span>.
            </p>
            
          </div>
        </div>

        {/* Buttons to Open Cards */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {cards.map((card, index) => (
            <button
              key={index}
              onClick={() => toggleCard(index)}
              className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all shadow-lg 
                ${
                  activeCard === index
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white"
                }`}
            >
              {card.title}
            </button>
          ))}
        </div>

        {/* Card Display Section */}
        <div className="mt-12 flex justify-center">
          {activeCard !== null && (
            <div className="p-6 w-full md:w-5/6 lg:w-full rounded-lg bg-gradient-to-r from-[#000405] to-[#000909] border border-teal-300 shadow-teal-500 transition-all">
              <div className="flex items-center gap-4 justify-center">
                <span className="text-5xl text-yellow-400">{cards[activeCard].icon}</span>
                <h3 className="text-4xl font-bold text-white">{cards[activeCard].title}</h3>
              </div>
              <div className="mt-6 text-white text-lg">{cards[activeCard].component}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
