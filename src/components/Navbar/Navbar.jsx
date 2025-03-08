import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
    <nav className="bg-black border-b border-gray-800 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <span className="text-2xl font-semibold font-serif text-green-400">
          PortFolio.
        </span>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 font-body text-md font-semibold text-gray-300">
          {links.map((link, index) => (
            <li key={index} className="group relative">
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-130}
                to={link.section}
                className="cursor-pointer transition-all duration-300 text-green-300 hover:text-green-500"
              >
                {link.link}
              </Link>
              <div className="absolute left-0 bottom-0 bg-green-500 w-0 group-hover:w-full h-[2px] transition-all duration-300"></div>
            </li>
          ))}
        </ul>

        {/* Hire Me */}
        <div className="flex items-center space-x-4 md:order-2">
          <button className="text-black bg-green-500 font-medium rounded-lg text-sm px-6 py-2 flex items-center gap-1 transition-all hover:bg-green-600">
            <Link spy={true} smooth={true} duration={500} offset={-120} to="contact" className="hover:text-gray-900">
              Hire Me
            </Link>
            <div className="sm:hidden md:block">
              <LuArrowDownRight />
            </div>
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:bg-gray-800 p-2 rounded-lg transition-all"
          >
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Fullscreen Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center text-gray-300 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white text-3xl">
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
                className="cursor-pointer hover:text-green-400 transition-all duration-300"
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
