import React from "react";
import { Calendar, Award, Sparkles } from "lucide-react";

const workExperience = [
  {
    title: "Senior Software Engineer (Full Stack)",
    company: "ADXL Pty Ltd – Australia",
    period: "June 2024 – August 2024 and January 2025 – May (9 months)",
    type: "Full-time, Remote",
    achievements: [
      "Designed and implemented three complex software solutions in a global remote environment.",
      "Led feature development and performance optimization, delivering scalable and innovative applications.",
      "Collaborated with cross-functional teams to meet stringent deadlines and business objectives.",
    ],
  },
  {
    title: "Lead Engineer (Full Stack, DevOps, R&D)",
    company: "PlutoPay AI Pte Ltd – Singapore",
    period: "October 2023 – March 2024 (6 months)",
    type: "Full-time, Remote",
    achievements: [
      "Solely responsible for end-to-end execution of two projects: a fintech application and a restaurant map-based web application.",
      "Conducted R&D to develop cost-effective AI-driven solutions, contributing to company growth.",
      "Established best practices for code quality, scalability, and system maintenance.",
    ],
  },
  {
    title: "Software Engineer (Full Stack)",
    company: "Eyepax IT Consulting Pvt Ltd – Sri Lanka",
    period: "July 2021 – August 2023 (2 years, 3 months)",
    type: "Full-time, Hybrid",
    achievements: [
      "Developed and delivered two major projects: a leasing application and a recruitment platform.",
      "Collaborated with multidisciplinary teams to deliver high-quality software solutions.",
      "Managed overseas client relationships and project lifecycles, ensuring timely delivery.",
    ],
  },
  {
    title: "Senior Software Engineer (Front-End)",
    company: "Serendib Systems Pty Ltd – Australia",
    period: "May 2021 – June 2021 (2 months)",
    type: "Full-time, Remote",
    achievements: [
      "Delivered over five projects, including a matrimony site, a restaurant 360 application, admin dashboards, and photo stack applications.",
      "Led front-end development using React, SASS, and Material UI, delivering user-friendly solutions.",
    ],
  },
];

const ExperienceCard = ({ job, index }) => {
  return (
    <article
      className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 group"
      aria-labelledby={`job-title-${index}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <div>
          <h3
            id={`job-title-${index}`}
            className="text-xl sm:text-2xl font-semibold text-white bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent"
          >
            {job.title}
          </h3>
          <div className="flex items-center mt-2 text-gray-300">
            <Award className="text-purple-400 mr-2" size={18} />
            <span className="font-medium">{job.company}</span>
          </div>
          <div className="flex items-center mt-1 text-gray-400">
            <Calendar className="text-blue-400 mr-2" size={18} />
            <span>{job.period}</span>
          </div>
        </div>
        <span className="mt-3 sm:mt-0 inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-blue-500/30 transition-all">
          {job.type}
        </span>
      </div>
      <ul className="space-y-2">
        {job.achievements.map((achievement, achIndex) => (
          <li key={achIndex} className="flex items-start">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-purple-400 transition-colors"></span>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {achievement}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};

const Experiences = ({ scrollToSection }) => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/50 via-transparent to-transparent"></div>
      </div>

      {/* Floating Icons Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Award className="text-blue-400/30" size={24} />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce" style={{ animationDelay: "1s" }}>
          <Sparkles className="text-yellow-400/30" size={20} />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-pulse" style={{ animationDelay: "2s" }}>
          <Calendar className="text-purple-400/30" size={22} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent flex items-center justify-center">
              <Award className="mr-2 text-blue-400" size={32} />
              Professional Experience
            </h2>
            <p className="mt-2 text-gray-300 text-base md:text-lg">
              Over 6 years of expertise in software engineering
            </p>
            {/* <p className="mt-1 text-xs text-gray-400">
              Company logos are used for identification purposes only and do not imply endorsement.
            </p> */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <ExperienceCard key={index} job={job} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          {/* <div className="text-center mt-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-gray-400 text-sm mb-2 flex items-center justify-center">
                <Sparkles className="mr-2 text-yellow-400" size={16} />
                Ready to Build Something Amazing
              </p>
              <p className="text-gray-300 text-base">
                Let's collaborate on your next project!
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg text-base flex items-center mx-auto group"
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
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Experiences;