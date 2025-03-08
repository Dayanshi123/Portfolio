import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PORCard = () => {
  const porData = [
    {
      position: "Core Team Member",
      organization: "Training Placement Cell",
      description:
        "Actively contribute to training and placement initiatives by collaborating with recruiters, facilitating student career development, and organizing online assessments, recruiter interviews, and skill-enhancement sessions to maximize placement opportunities.",
    },
    {
      position: "Event Coordinator, Sponsorship Head, Anchor",
      organization: "Roobaroo",
      description:
        "Led event planning and execution, managed sponsorship acquisitions, and hosted major events with engaging public speaking skills. Played a key role in organizing cultural and technical events, ensuring smooth operations, and securing sponsorships to enhance event quality.",
    },
    {
      position: "Team Head",
      organization: "Zeenith (Coding Club)",
      description:
        "Spearheaded the college coding club, organizing coding competitions, hackathons, and mentorship programs to foster a strong programming culture. Guided students in problem-solving, data structures, and algorithms, helping them prepare for competitive coding and technical interviews.",
    },
    {
      position: "Volunteer Member",
      organization: "AAROHA (NGO)",
      description:
        "Worked towards educational empowerment, mentoring underprivileged children through personalized learning plans, interactive sessions, and academic support. Played a crucial role in enhancing student engagement and improving learning outcomes.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center p-6 text-green-300 bg-[#0a0a0a]">
      <div className="w-full md:w-3/4 lg:w-1/2 space-y-6">
        {porData.map((por, index) => (
          <motion.div
            key={index}
            className="relative bg-green-900 text-green-200 border border-green-600 rounded-xl shadow-md p-5 
            transition-all cursor-pointer hover:bg-green-800 hover:text-green-100 hover:shadow-lg"
            onClick={() => toggleDropdown(index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">{por.position}</h3>
                <p className="text-sm">{por.organization}</p>
              </div>
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180 bg-green-700" : "bg-green-600"
                }`}
              >
                ▼
              </div>
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="mt-4 bg-green-800 text-green-100 p-4 rounded-lg shadow-inner"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {por.description}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PORCard;
