import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <div className="space-y-6 text-center md:text-left">
          {/* <span className="text-xl text-yellow-400">Hii👋 welcome, </span> */}
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
          from-yellow-400 via-pink-500 to-red-500 animate-pulse">
            I am a <span className="text-cyan-400">Software Developer</span>
          </h1>
          <p className="text-lg text-gray-300">
            Passionate about building AI-driven applications, scalable web platforms,  
            and intelligent automation solutions. I specialize in <span className="font-semibold text-white">
              machine learning</span>,  
            <span className="font-semibold text-white"> deep learning</span>, and <span className="font-semibold 
            text-white">software development</span> to create innovative  
            and impactful software.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="/public/Doc19.pdf" // Ensure file is inside public/assets/
              download
              className="bg-gradient-to-r from-green-400 to-blue-600 hover:from-blue-600 
              hover:to-green-400 px-6 py-3 rounded-lg font-medium text-white transition-all"
            >
              Download CV
            </a>

             {/* <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
              className="cursor-pointer bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-600 hover:to-purple-400 px-6 py-3 rounded-lg font-medium text-white transition-all"
            >
              Contact Me
            </Link> */}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src="/public/mee.jpg" // Ensure image is inside public/assets/
            alt="Profile"
            className="w-64 md:w-80 rounded-full border-4 
            border-transparent bg-clip-border bg-gradient-to-r 
            from-teal-500 via-purple-500 to-pink-500 shadow-lg shadow-teal-400 animate-pulse"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;

