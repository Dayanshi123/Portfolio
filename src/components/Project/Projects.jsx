import React from "react";
import { FaGithub } from "react-icons/fa";

// Project Data
const projects = [
  {
    title: "Portfolio",
    description: "Designed and developed a personal portfolio website to showcase projects, experience, and skills. Built with a responsive UI, smooth navigation, and optimized performance for a seamless user experience.",
    github: "https://github.com/Dayanshi123/Portfolio",
    image: "/public/avatar.jpeg",
  },
  {
    title: "Breast Cancer Detection",
    description: "Developed a deep learning-based model using ResNet50 to detect early-stage breast cancer from medical images with 97% accuracy. Integrated LIME for explainability, improving diagnostic transparency and reducing overfitting.",
    github: "https://github.com/Dayanshi123/Breast-Cancer-Detection",
    image: "/public/breastCaner.jpeg",
  },
  {
    title: "Game Maina",
    description: "Developed a DSA-driven game simulation in C++, implementing optimized algorithms for game logic, pathfinding, and dynamic scoring. Utilized data structures like graphs, heaps, and dynamic programming to ensure efficiency and scalability.",
    github: "https://github.com/yourgithub/Sorting-Visualizer",
    image: "/public/gameMania.jpeg",
  },
  // {
  //   title: "",
  //   description: "A financial tool to optimize transactions among a group.",
  //   github: "https://github.com/yourgithub/Cash-Flow-Minimizer",
  //   image: "/images/cash-flow.png",
  // },
  // {
  //   title: "GFG Clone",
  //   description: "A GeeksforGeeks clone using HTML, CSS, and JavaScript.",
  //   github: "https://github.com/yourgithub/GFG-Clone",
  //   image: "/images/gfg-clone.png",
  //},
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r 
        from-yellow-400 to-pink-500">
          Projects
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          Here are some of my projects. Click "Load More" to see all on GitHub!
        </p>

        {/* Project Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-[#000405] to-[#000909] border border-yellow-200 shadow-amber-300 hover:scale-105 transition-transform"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-md shadow-md "
              />
              <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-4 text-yellow-400 hover:text-yellow-300 transition"
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
          className="mt-8 inline-block bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
        >
          Load More
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
