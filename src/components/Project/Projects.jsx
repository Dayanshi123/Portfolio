import React from "react";
import { FaGithub } from "react-icons/fa";

// Project Data
const projects = [
  {
    title: "Portfolio",
    description:
      "Designed and developed a personal portfolio website to showcase projects, experience, and skills. Built with a responsive UI, smooth navigation, and optimized performance for a seamless user experience.",
    github: "https://github.com/Dayanshi123/Portfolio",
    image: "/Logo1.png", 
  },
  {
    title: "Breast Cancer Detection",
    description:
      "Developed a deep learning model using ResNet50 to detect early-stage breast cancer from medical images. Integrated LIME for explainability, improving diagnostic transparency.",
    github: "https://github.com/Dayanshi123/Breast-Cancer-Detection",
    image: "/breastCaner.jpeg",
  },
  {
    title: "Game Mania",
    description:
      "Developed a DSA-driven game simulation in C++, implementing optimized algorithms for game logic, pathfinding, and dynamic scoring. Utilized data structures like graphs, heaps, and dynamic programming to ensure efficiency.",
    github: "https://github.com/Dayanshi123/GameMania",
    image: "/gameMania.jpeg",
  },
  {
    title: "GiggleStream",
    description:
      "A MERN-based YouTube clone that allows users to upload, view, and interact with video content. Features include user authentication, live streaming, and an AI-powered recommendation system.",
    github: "https://github.com/Dayanshi123/GiggleStream",
    image: "/giggle.jpg",
  },
  {
    title: "NewsVault",
    description:
      "A newspaper aggregator that collects and presents news articles from various sources in a clean, user-friendly interface. Built with a frontend framework for optimal performance and easy navigation.",
    github: "https://github.com/Dayanshi123/NewsVault",
    image: "/newsVault.png",
  },
  {
    title: "BlogSphere",
    description:
      "A modern blogging platform with a rich text editor using TinyMCE and Appwrite for backend services. Supports user authentication, post management, and seamless content creation.",
    github: "https://github.com/Dayanshi123/Blog-Website",
    image: "/blog.png",
  },
];

const ProjectsSection = ({ darkMode }) => {
  return (
    <section
      id="projects"
      className={`w-full py-20 transition-all duration-300 ${
        darkMode ? "bg-[#000000] text-[#E0E0E0]" : "bg-[#F8F9FA] text-[#0650d8]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className={`text-5xl font-extrabold ${
            darkMode ? "text-[#56A8F5]" : "text-[#0650d8]"
          }`}
        >
          Projects
        </h2>
        <p className="mt-4 text-lg">
          Here are some of my projects. Click "Load More" to see all on GitHub!
        </p>

        {/* Project Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg border transition-transform 
              hover:scale-105 hover:shadow-xl ${
                darkMode
                  ? "bg-[#121212] border-[#56A8F5] hover:border-[#8AC9FF]"
                  : "bg-white border-[#0650d8] hover:border-[#03338d]"
              }`}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-md shadow-lg hover:shadow-2xl border"
              />
              <h3
                className={`text-2xl font-bold mt-4 ${
                  darkMode ? "text-[#8AC9FF]" : "text-[#03338d]"
                }`}
              >
                {project.title}
              </h3>
              <p className="mt-2">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-4 transition"
              >
                <FaGithub className="mr-2" />
                View on GitHub
              </a>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <a
          href="https://github.com/Dayanshi123"
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-8 inline-block font-bold px-6 py-3 rounded-lg transition transform hover:scale-105 shadow-md hover:shadow-lg ${
            darkMode
              ? "bg-[#56A8F5] text-black hover:bg-[#8AC9FF]"
              : "bg-[#0650d8] text-white hover:bg-[#03338d]"
          }`}
        >
          Load More
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
