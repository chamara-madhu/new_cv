import React from "react";
import { ChevronDown } from "lucide-react";
import AvatarImg from "../assets/images/avatar.jpg";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            {/* <div className="w-40 h-40 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-5xl font-bold text-white mb-8 shadow-2xl">
              CM
            </div> */}
            <img
              src={AvatarImg}
              alt="Profile Picture"
              className="w-40 h-40 mx-auto rounded-full flex items-center justify-center mb-8 shadow-2xl border-3 border-gray-100"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
              Chamara Madhushanka
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-300 mb-4 animate-fade-in">
              Senior Software Engineer
            </h2>
            <h3 className="text-xl md:text-2xl text-purple-300 mb-8 animate-fade-in">
              Full-Stack Developer • DevOps • R&D Specialist
            </h3>
            <div className="flex justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">6+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-white">3</div>
                <div className="text-gray-300">Master's Degrees</div>
              </div> */}
            </div>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Highly skilled software engineer with 6 years of experience
              specializing in full-stack development, end-to-end software
              solutions, and research and development. Proficient in modern
              technologies such as React, Node.js, Next.js, and NestJS, with
              expertise in cloud platforms like AWS. Adept at managing global
              clients and delivering innovative, scalable applications tailored
              to meet complex business needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all text-lg"
            >
              View Experience
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/60" size={32} />
      </div>
    </section>
  );
};

export default Hero;
