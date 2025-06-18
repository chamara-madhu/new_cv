import React from "react";
import { Code, Globe, Sparkles, Github, Star } from "lucide-react";

const projects = [
  {
    name: "Image Slider from Scratch",
    description: "Developed using React, CSS, Bootstrap without any plugin, using custom logic.",
    type: "Web Application",
    image: "../../assets/images/projectImg1.jpg",
    demo: "https://image-slider-cham.netlify.app/",
    source: "https://github.com/chamara-madhu/image-slider",
  },
  {
    name: "Students Management System",
    description: "Built with React, CSS, Bootstrap to evaluate student performance with charts.",
    type: "Web Application",
    image: "../../assets/images/projectImg2.jpg",
    demo: "https://studs-mgt-sys.netlify.app",
    source: "https://github.com/chamara-madhu/students-mgt-sys",
  },
  {
    name: "Best Nine Photos",
    description: "Developed using MERN stack to select, arrange, and save your best nine photos.",
    type: "Web Application",
    image: "../../assets/images/projectImg3.jpg",
    demo: "https://pastbook.herokuapp.com/",
    source: "https://github.com/chamara-madhu/pastbook",
  },
  {
    name: "Nested Facet",
    description: "Created using React, CSS, Bootstrap for dynamic facet-based navigation.",
    type: "Web Application",
    image: "../../assets/images/projectImg4.jpg",
    demo: "https://facetassign.netlify.app/",
    source: "https://github.com/chamara-madhu/facetassign",
  },
  {
    name: "Generate Income Statement and Balance Sheet",
    description: "Built with React, CSS, Bootstrap to generate financial statements from trial balance.",
    type: "Web Application",
    image: "../../assets/images/projectImg5.jpg",
    demo: "https://chamara-madhu.github.io/balancesheet/",
    source: "https://github.com/chamara-madhu/balancesheet",
  },
  {
    name: "Weekly Reviews Management System",
    description: "Developed using React with Hooks, CSS, Bootstrap for weekly reviews in an insurance company.",
    type: "Web Application",
    image: "../../assets/images/projectImg6.jpg",
    demo: "https://weekly-reviews.netlify.app",
    source: "https://github.com/chamara-madhu/weekly-review-assign",
  },
  {
    name: "Algorithmic Thinking and Design",
    description: "Built with React, custom JavaScript algorithms, CSS, Bootstrap to sort and filter students.",
    type: "Web Application",
    image: "../../assets/images/projectImg7.jpg",
    demo: "https://chamara-madhu.github.io/algorithm-design",
    source: "https://github.com/chamara-madhu/algorithm-design",
  },
  {
    name: "Imgur Project - React",
    description: "Developed using React, CSS, Bootstrap to fetch top images of the week from Imgur.",
    type: "Web Application",
    image: "../../assets/images/projectImg8.jpg",
    demo: "https://chamara-madhu.github.io/top-images-app/",
    source: "https://github.com/chamara-madhu/top-images-app-files",
  },
  {
    name: "BIT Degree GPA Calculator",
    description: "Created using HTML, CSS, Bootstrap, and JavaScript for GPA calculations.",
    type: "Web Application",
    image: "../../assets/images/projectImg9.jpg",
    source: "https://gitlab.com/chamaraMadhu/bit-gpa-calculator",
  },
  {
    name: "Dynamic Web Site Development - PHP and MySQL",
    description: "Built for Rans's Arcade using HTML, CSS, JavaScript, jQuery, PHP, MySQL, Bootstrap, and more.",
    type: "Web Application",
    image: "../../assets/images/projectImg10.jpg",
    source: "https://gitlab.com/chamaraMadhu/ransisarcade-php",
  },
  {
    name: "Employee Home Locating System",
    description: "Developed using HTML, CSS, JavaScript, jQuery, PHP, MySQL, Bootstrap, and chart.js.",
    type: "Web Application",
    image: "../../assets/images/projectImg11.jpg",
    source: "https://gitlab.com/chamaraMadhu/mas-employee-location-detector",
  },
  {
    name: "Attendance System",
    description: "Built for The Future Net using HTML, CSS, JavaScript, jQuery, PHP, MySQL, and Bootstrap.",
    type: "Web Application",
    image: "../../assets/images/projectImg12.jpg",
    source: "https://gitlab.com/chamaraMadhu/tfn-attendance",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <article
      className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-elevated hover:border-purple-200/50 transition-all duration-300 group"
      aria-labelledby={`project-title-${index}`}
    >
      {/* <div className="relative mb-4">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-40 object-cover rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300"
        />
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-purple-600/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
          >
            <span className="text-white font-semibold text-sm bg-gradient-to-r from-purple-700 to-purple-900 px-4 py-2 rounded-full">
              View Demo
            </span>
          </a>
        )}
      </div> */}
      <div>
        <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm mb-2 group-hover:bg-purple-200 transition-all">
          {project.type}
        </span>
        <h3
          id={`project-title-${index}`}
          className="text-lg font-bold text-black mb-2"
        >
          {project.name}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">{project.description}</p>
        <div className="flex gap-3 mt-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all group/button"
            >
              <Globe className="mr-2 h-4 w-4 group-hover/button:scale-110 transition-transform" />
              Demo
            </a>
          )}
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-4 py-2 rounded-full text-sm font-semibold transition-all group/button"
          >
            <Github className="mr-2 h-4 w-4 group-hover/button:scale-110 transition-transform" />
            Source
          </a>
        </div>
      </div>
    </article>
  );
};

const IndividualProjects = ({ scrollToSection }) => {
  return (
    <section
      id="individual-projects"
      className="py-20 bg-purple-50 relative"
    >
      {/* Background Effects */}
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Crect x=\"0\" y=\"0\" width=\"1\" height=\"1\" fill=\"%23C4B5FD\" opacity=\"0.3\"/%3E%3C/svg%3E')] bg-repeat"></div> */}

      {/* Floating Icons Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Code className="text-purple-400/50" size={24} />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-spin-slow" style={{ animationDelay: "1s" }}>
          <Star className="text-purple-500/50" size={20} />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-pulse" style={{ animationDelay: "2s" }}>
          <Sparkles className="text-purple-300/50" size={22} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              {/* <Code className="mr-2 text-purple-600" size={32} /> */}
              Individual Projects
            </h2>
            <p className="mt-2 text-gray-600 text-base md:text-lg">
              Personal projects demonstrating creativity and technical expertise
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-800 mx-auto mt-4"></div>
          </div>

          {/* Project Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          {/* <div className="text-center mt-16">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
              <p className="text-gray-500 text-sm mb-2 flex items-center justify-center">
                <Sparkles className="mr-2 text-purple-500" size={16} />
                Passion for Building
              </p>
              <p className="text-gray-600 text-base">
                Interested in collaborating on innovative projects? Let's connect!
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md text-base flex items-center mx-auto group"
              >
                <Sparkles className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                Get In Touch
              </button>
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .shadow-elevated {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default IndividualProjects;