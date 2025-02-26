import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-scroll";

const links = [
  { link: "About", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black dark:bg-gray-900 border-b border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <span className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 animate-pulse">
          Portfolio.
        </span>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-body text-md font-semibold">
          {links.map((link, index) => (
            <li key={index} className="group relative">
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-130}
                to={link.section}
                className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 transition-all duration-500"
              >
                {link.link}
              </Link>
              <div className="absolute left-0 bottom-0 bg-gradient-to-r from-yellow-400 to-red-500 w-0 group-hover:w-full h-[2px] transition-all duration-500"></div>
            </li>
          ))}
        </ul>

        {/* Hire Me & Theme Toggle */}
        <div className="flex items-center space-x-4 md:order-2">
          <button className="text-white bg-gradient-to-r from-green-400 to-blue-600 hover:from-blue-600 hover:to-green-400 focus:ring-4 focus:ring-teal-300 
              font-medium rounded-lg text-sm px-6 py-2 dark:bg-green-600 dark:hover:bg-green-800 
              dark:focus:ring-green-900 flex items-center gap-1">
            <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
              Hire Me
            </Link>
            <div className="sm:hidden md:block">
              <LuArrowDownRight />
            </div>
          </button>
          {/* <ThemeBtn /> */}

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:bg-gray-700 rounded-lg p-2 transition-all"
          >
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Fullscreen Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md flex flex-col items-center 
        justify-center text-white transition-transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full" } md:hidden`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl"
        >
          <FaTimes />
        </button>

        <ul className="flex flex-col gap-8 text-2xl">
          {links.map((link, index) => (
            <li key={index} className="group">
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-130}
                to={link.section}
                className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-yellow-300 hover:from-yellow-300 hover:to-teal-300 transition-all duration-500"
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
