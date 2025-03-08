import React, { useState } from "react"; 
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import Education from "./EducationCard";
import POR from "./PORCard";

const About = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const cards = [
    {
      title: "Education",
      icon: <FaGraduationCap />,
      component: <Education />,
    },
    {
      title: "POR",
      icon: <FaUsers />,
      component: <POR />,
    },
  ];

  return (
    <section id="about" className="w-full py-20 bg-[#0a0a0a] text-[#d1fae5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-green-400 text-center">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center mt-10">
          {/* Avatar */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              src="/public/mee.jpg"
              alt="Avatar"
              className="w-52 h-52 object-cover rounded-full border-4 border-green-400"
            />
          </div>

          {/* Info */}
          <div className="w-full md:w-2/3 mt-6 md:mt-0 md:pl-10 text-center md:text-left">
            <h3 className="text-3xl font-bold text-green-400">
              Dayanshi Jain - Software Developer
            </h3>
            <p className="text-lg text-[#d1fae5] mt-4 leading-relaxed">
              I am passionate about{" "}
              <span className="font-semibold text-green-300">
                machine learning and software development.
              </span>{" "}
              I specialize in building{" "}
              <span className="font-semibold text-green-300">
                scalable web applications and deep learning models.
              </span>{" "}
              My expertise includes{" "}
              <span className="font-semibold text-green-300">
                Python, C++, JavaScript, HTML/CSS
              </span>{" "}
              and frameworks like{" "}
              <span className="font-semibold text-green-300">
                TensorFlow, Keras, and React.js.
              </span>{" "}
              <br />
              <br />
              I have a{" "}
              <span className="font-semibold text-green-300">4-star rating</span> on
              GeeksforGeeks and have solved{" "}
              <span className="font-semibold text-green-300">800+ problems</span> on
              platforms like{" "}
              <span className="font-semibold text-green-300">LeetCode</span> and{" "}
              <span className="font-semibold text-green-300">CodeStudio</span>. I have participated in{" "}
              <span className="font-semibold text-green-300">50+ coding contests</span>, including{" "}
              <span className="font-semibold text-green-300">Flipkart Grid</span> and{" "}
              <span className="font-semibold text-green-300">Amazon HackOn</span>.
            </p>
          </div>
        </div>

        {/* Buttons to Open Cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {cards.map((card, index) => (
            <button
              key={index}
              onClick={() => toggleCard(index)}
              className={`px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black`}
            >
              {card.title}
            </button>
          ))}
        </div>

        {/* Card Display Section */}
        <div className="mt-12 flex justify-center">
          {activeCard !== null && (
            <div className="p-6 w-full md:w-5/6 lg:w-full rounded-lg bg-[#0a0a0a] border border-green-400 transition-all">
              <div className="flex items-center gap-4 justify-center">
                <span className="text-5xl text-green-400">
                  {cards[activeCard].icon}
                </span>
                <h3 className="text-4xl font-bold text-green-400">
                  {cards[activeCard].title}
                </h3>
              </div>
              <div className="mt-6 text-[#d1fae5] text-lg">
                {cards[activeCard].component}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
