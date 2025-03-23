import React from "react";
import { FaUsers, FaHandshake, FaMicrophone, FaLaptopCode } from "react-icons/fa";

const porData = [
  {
    role: "Core Team Member - Training Placement Cell",
    description: "Contributed to training and placement initiatives, organized online assessments, recruiter interviews, and skill-enhancement sessions.",
    icon: <FaUsers />,
  },
  {
    role: "Event Coordinator, Sponsorship Head, Anchor - Roobaroo Cultural Club",
    description: "Led event planning, managed sponsorships, and hosted events with engaging public speaking skills.",
    icon: <FaMicrophone />,
  },
  {
    role: "Technical Team Head - Zeenith Coding Club",
    description: "Organized coding competitions, hackathons, and mentorship programs to foster a strong programming culture.",
    icon: <FaLaptopCode />,
  },
  {
    role: "Volunteer Member - AAROHA NGO",
    description: "Mentored underprivileged children with interactive learning sessions and academic support.",
    icon: <FaHandshake />,
  },
];

const PORCard = ({ darkMode }) => {
  return (
    <div className="flex flex-col items-center">
      {porData.map((por, index) => (
        <div
          key={index}
          className={`w-full p-4 my-4 rounded-lg shadow-md flex items-center transition-transform duration-300 
          ${darkMode ? "bg-[#1e1e1e] border-[#56A8F5] text-white" : "bg-[#e3f2fd] border-[#0650d8] text-black"}
          hover:scale-105 border-2`}
        >
          <div className="text-4xl p-3 rounded-full bg-[#56A8F5] dark:bg-[#0650d8] text-white">
            {por.icon}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold">{por.role}</h3>
            <p className="text-md">{por.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PORCard;
