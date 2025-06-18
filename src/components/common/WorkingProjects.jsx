import React from "react";
import { Code, Sparkles, Star } from "lucide-react";
import HangryImg from "../../assets/images/hangry.jpg";
import GritImg from "../../assets/images/grit.jpg";
import PoruwaImg from "../../assets/images/poruwa.jpg";
import SpritzerImg from "../../assets/images/spritzer.jpg";
import AdxlImg from "../../assets/images/adxl.jpg";

const projects = [
  {
    name: "Hangry.sg",
    description: "Developed independently as the first employee at Plutoplay",
    type: "Food Delivery Platform",
    image: HangryImg,
    link: "https://hangry.sg",
  },
  {
    name: "Grit",
    description:
      "Led frontend development and worked as a Full-Stack Engineer at Eyepax",
    type: "Recruitment Platform",
    image: GritImg,
    link: "https://freshly.sg",
  },
  {
    name: "Poruwa.lk",
    description:
      "Developed the entire frontend as the first employee at Serendib Systems",
    type: "Matrimony Platform",
    image: PoruwaImg,
    link: "https://poruwa.lk",
  },
  {
    name: "Kahabath Gedara",
    description:
      "Developed the entire frontend as the first employee at Serendib Systems",
    type: "Restaurant Platform",
    image: SpritzerImg,
    link: "https://kahabathgedara.com",
  },
  {
    name: "Zari.ai",
    description: "One of the projects I am currently working on at ADXL",
    type: "AI Platform",
    image: AdxlImg,
    link: "https://zari.ai",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <article
      className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-elevated hover:border-purple-500/20 transition-all duration-300 group hover:border-purple-500 cursor-ponter"
      aria-labelledby={`project-title-${index}`}
    >
      <div className="relative mb-4">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        {/* <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-purple-500/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
        >
          <span className="text-white font-semibold text-sm bg-gradient-to-r from-purple-600 to-purple-800 px-4 py-2 rounded-full">
            View Project
          </span>
        </a> */}
      </div>
      <div>
        <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm mb-3 group-hover:bg-purple-200 transition-all">
          {project.type}
        </span>
        <h3
          id={`project-title-${index}`}
          className="text-xl font-bold text-black mb-2"
        >
          {project.name}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          {project.description}
        </p>
      </div>
    </article>
  );
};

const WorkingProjects = ({ scrollToSection }) => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center relative bg-white"
    >
      {/* Background Effects */}
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Crect x=\"0\" y=\"0\" width=\"1\" height=\"1\" fill=\"%23E5E7EB\"/%3E%3C/svg%3E')] bg-repeat opacity-20"></div> */}

      {/* Floating Icons Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Code className="text-purple-400/50" size={24} />
        </div>
        <div
          className="absolute top-1/3 right-1/4 animate-spin-slow"
          style={{ animationDelay: "1s" }}
        >
          <Star className="text-purple-500/50" size={20} />
        </div>
        <div
          className="absolute bottom-1/4 left-1/3 animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          <Sparkles className="text-purple-300/50" size={22} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Featured Projects
            </h2>
            <p className="mt-2 text-gray-600 text-base md:text-lg">
              Showcasing innovative solutions built with passion
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mt-4"></div>
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          {/* <div className="text-center mt-16">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md max-w-2xl mx-auto">
              <p className="text-gray-500 text-sm mb-2 flex items-center justify-center">
                <Sparkles className="mr-2 text-purple-500" size={16} />
                Ready to Innovate
              </p>
              <p className="text-gray-600 text-base">
                Let's collaborate to build your next big idea!
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md text-base flex items-center mx-auto group"
              >
                <Sparkles
                  className="mr-2 group-hover:scale-110 transition-transform"
                  size={18}
                />
                Get In Touch
              </button>
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .shadow-elevated {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default WorkingProjects;
