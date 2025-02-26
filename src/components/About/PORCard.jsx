import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PORCard = () => {
  // Sample data for Positions of Responsibility
  const porData = [
    {
      position: 'Core Team Member',
      organization: 'Training Placement Cell',
      description: 'Actively contribute to training and placement initiatives by collaborating with recruiters, facilitating student career development, and organizing online assessments, recruiter interviews, and skill-enhancement sessions to maximize placement opportunities.',
    },
    {
      position: 'Event Coordinator, Sponsorship Head, Anchor',
      organization: 'Roobaroo',
      description: 'Led event planning and execution, managed sponsorship acquisitions, and hosted major events with engaging public speaking skills. Played a key role in organizing cultural and technical events, ensuring smooth operations, and securing sponsorships to enhance event quality.',
    },
    {
      position: 'Team Head',
      organization: 'Zeenith (Coding Club)',
      description: 'Spearheaded the college coding club, organizing coding competitions, hackathons, and mentorship programs to foster a strong programming culture. Guided students in problem-solving, data structures, and algorithms, helping them prepare for competitive coding and technical interviews.',
    },
    {
      position: 'Volunteer Member',
      organization: 'AAROHA (NGO)',
      description: 'Worked towards educational empowerment, mentoring underprivileged children through personalized learning plans, interactive sessions, and academic support. Played a crucial role in enhancing student engagement and improving learning outcomes.',
    },
  ];

  // State to track the active dropdown
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle dropdown
  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='text-center'>
    <div className="flex flex-col gap-4 ">
      {porData.map((por, index) => (
        <motion.div
          key={index}
          className="flex flex-col md:flex-row items-center md:items-start justify-between p-4 bg-gradient-to-r 
          from-blue-400 to-green-500 rounded-lg shadow-lg border border-gray-600 transition-all cursor-pointer"
          onClick={() => toggleDropdown(index)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold  text-black">{por.position}</h3>
            <p className="text-lg text-[#121212] font-semibold">{por.organization}</p>
          </div>
          {activeIndex === index && (
            <motion.div
              className="flex-1 mt-4 md:mt-0 md:ml-6 text-white text-sm bg-gradient-to-r 
              from-[#000005] to-[#101010] p-2 rounded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {por.description}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default PORCard;
