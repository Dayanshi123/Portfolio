import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-black text-green-400">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-green-300">
            I am a <span className="text-green-500">Software Developer</span>
          </h1>
          <p className="text-lg text-gray-300">
            Passionate about building AI-driven applications, scalable web
            platforms, and intelligent automation solutions. I specialize in
            <span className="font-semibold text-green-400"> machine learning</span>,
            <span className="font-semibold text-green-400"> deep learning</span>, and
            <span className="font-semibold text-green-400"> software development</span>
            to create innovative and impactful software.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="/ResumeFinal.pdf"
              download
              className="bg-green-500 text-black hover:bg-green-600 px-6 py-3 rounded-lg font-medium transition-all"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side - Animated Image */}
        <div className="flex justify-center">
          <motion.img
            src="/Logo.png"
            alt="Profile"
            className="w-64 md:w-80 rounded-full border-4 border-green-500 shadow-lg"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 360 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
