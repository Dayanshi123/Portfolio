import React, { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-scroll";

const links = [
  { link: "About", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`border-b shadow-md fixed w-full z-10 transition-all duration-300 ${
        darkMode ? "bg-[#000000] text-[#E0E0E0]" : "bg-[#F8F9FA] text-[#0650d8]"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="text-2xl font-semibold font-serif">PortFolio.</span>

        <ul className="hidden md:flex gap-6 text-md font-bold">
          {links.map((link, index) => (
            <li key={index} className="group relative">
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-130}
                to={link.section}
                className={`cursor-pointer transition-all duration-300 font-semibold ${
                  darkMode
                    ? "text-[#E0E0E0] hover:text-[#56A8F5]"
                    : "text-[#0650d8] hover:text-[#3f85fd]"
                }`}
              >
                {link.link}
              </Link>
              <div
                className={`absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                  darkMode ? "bg-[#56A8F5]" : "bg-[#0650d8]"
                }`}
              ></div>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4 md:order-2">
          <button
            className={`font-medium rounded-lg text-sm px-6 py-2 flex items-center gap-1 transition-all ${
              darkMode
                ? "text-black bg-[#E0E0E0] hover:bg-[#56A8F5]"
                : "text-white bg-[#0650d8] hover:bg-[#03338d]"
            }`}
          >
            <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
              Hire Me
            </Link>
            <div className="sm:hidden md:block">
              <LuArrowDownRight />
            </div>
          </button>

          <div className="flex items-center space-x-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 transition-all">
              {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 bg-transparent transition-all">
              {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${darkMode ? "bg-[#000000] text-[#E0E0E0]" : "bg-[#F8F9FA] text-[#0650d8]"} md:hidden`}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-3xl">
          <FaTimes />
        </button>

        <ul className="flex flex-col gap-8 text-2xl font-bold">
          {links.map((link, index) => (
            <li key={index} className="group">
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-130}
                to={link.section}
                className="cursor-pointer hover:opacity-80 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );

};

export default Navbar;
