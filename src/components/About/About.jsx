import React, { useState, useRef } from "react";
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import Education from "./EducationCard";
import POR from "./PORCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const About = ({ darkMode }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null); // Store Swiper instance

  const cards = [
    {
      title: "Education",
      icon: <FaGraduationCap />,
      component: <Education darkMode={darkMode} />,
    },
    {
      title: "POR",
      icon: <FaUsers />,
      component: <POR darkMode={darkMode} />,
    },
  ];

  return (
    <section
      id="about"
      className={`w-full py-20 transition-all duration-300 ${
        darkMode ? "bg-[#000000] text-[#E0E0E0]" : "bg-[#F8F9FA] text-[#0650d8]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className={`text-5xl font-extrabold text-center ${
            darkMode ? "text-[#56A8F5]" : "text-[#0650d8]"
          }`}>About Me</h2>

        <div className="flex flex-col md:flex-row items-center mt-10">
          {/* Avatar */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              src="/public/mee.jpg"
              alt="Avatar"
              className="w-64 h-64 object-cover rounded-lg border-4 shadow-6xl transition-all duration-300
              border-[#0650d8] shadow-blue-400 dark:border-[#56A8F5] dark:shadow-stone-100"
            />
          </div>

          {/* Info */}
          <div className="w-full md:w-2/3 mt-6 md:mt-0 md:pl-10 text-center md:text-left">
            <h3 className="text-3xl font-bold">Dayanshi Jain - Software Developer</h3>
            <p className="text-lg mt-4 leading-relaxed">
              Passionate about crafting clean, efficient, and scalable code, I specialize in{" "}
              <span className={`font-semibold ${darkMode ? "text-[#56A8F5]" : "text-[#0650d8]"}`}>
                machine learning, full-stack development, and AI applications.
              </span>{" "}
              With experience in{" "}
              <span className={`font-semibold ${darkMode ? "text-[#56A8F5]" : "text-[#0650d8]"}`}>
                Python, C++, JavaScript, React.js, and TensorFlow
              </span>, I aim to build innovative solutions that merge technology and intelligence.
              <br />
              <br />
              A competitive programmer with a{" "}
              <span className={`font-semibold ${darkMode ? "text-[#56A8F5]" : "text-[#0650d8]"}`}>
                4-star GeeksforGeeks rating
              </span> and{" "}
              <span className={`font-semibold ${darkMode ? "text-[#56A8F5]" : "text-[#0650d8]"}`}>
                800+ problems solved
              </span> on LeetCode & CodeStudio, I thrive on problem-solving and optimization.
            </p>
          </div>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => {
              const nextSlide = activeSlide === 0 ? 1 : 0;
              setActiveSlide(nextSlide);
              swiperRef.current?.slideTo(nextSlide); // Move Swiper Slide
            }}
            className={`px-6 py-3 font-bold text-lg rounded-lg transition-all duration-300 
              ${darkMode ? "bg-[#56A8F5] text-black" : "bg-[#0650d8] text-white"}
              hover:scale-105`}
          >
            {activeSlide === 0 ? "View Education" : "View Position of Responsibilty"}
          </button>
        </div>

        {/* Swiper Cards */}
        <div className="mt-6">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            className="w-full md:w-5/6 lg:w-full"
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
            initialSlide={activeSlide} // Sync with state
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index} className="flex flex-col items-center">
                <div
                  className={`p-6 w-full rounded-lg border transition-all shadow-lg ${
                    darkMode
                      ? "border-[#56A8F5] bg-[#121212]"
                      : "border-[#0650d8] bg-[#E3F2FD]"
                  }`}
                >
                  <div className="flex items-center gap-4 justify-center">
                    <span className={`text-5xl ${darkMode ? "text-[#56A8F5]" : "text-[#0650d8]"}`}>
                      {card.icon}
                    </span>
                    <h3 className={`text-4xl font-bold ${darkMode ? "text-[#56A8F5]" : "text-[#0650d8]"}`}>
                      {card.title}
                    </h3>
                  </div>
                  <div className="mt-6 text-lg">{card.component}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;
