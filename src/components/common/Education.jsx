import React, { useState } from "react";
import { Calendar, GraduationCap, Sparkles, ChevronDown, ChevronUp } from "lucide-react";

const education = [
  {
    degree: "MSc in Information Systems with Computing",
    institution: "Dublin Business School, Ireland",
    period: "Sep 2024 – Present",
    status: "In Progress",
    subjects: [
      { name: "Database Systems", grade: "TBD" },
      { name: "Cloud Computing", grade: "TBD" },
      { name: "Software Engineering", grade: "TBD" },
      { name: "Business Intelligence", grade: "TBD" },
    ],
  },
  {
    degree: "MSc in Data Science",
    institution: "Kingston University, UK",
    period: "Oct 2024 – Present",
    status: "In Progress",
    subjects: [
      { name: "Machine Learning", grade: "TBD" },
      { name: "Data Visualization", grade: "TBD" },
      { name: "Statistical Analysis", grade: "TBD" },
      { name: "Big Data Technologies", grade: "TBD" },
    ],
  },
  {
    degree: "MSc in IT",
    institution: "Cardiff Metropolitan University, UK",
    period: "Sep 2024 – Oct 2025",
    status: "In Progress",
    subjects: [
      { name: "Network Security", grade: "TBD" },
      { name: "IT Project Management", grade: "TBD" },
      { name: "Artificial Intelligence", grade: "TBD" },
      { name: "Web Development", grade: "TBD" },
    ],
  },
  {
    degree: "Bachelor of Information Technology",
    institution: "University of Colombo School of Computing, Sri Lanka",
    period: "Jan 2017 – May 2020",
    gpa: "3.28 / 4.00",
    subjects: [
      { name: "Algorithms", grade: "A-" },
      { name: "Web Programming", grade: "B+" },
      { name: "Database Management", grade: "A" },
      { name: "Operating Systems", grade: "B" },
    ],
  },
  {
    degree: "BSc in Accounting (Special)",
    institution: "University of Sri Jayewardenepura, Sri Lanka",
    period: "Feb 2014 – Oct 2017",
    gpa: "3.39 / 4.00",
    subjects: [
      { name: "Financial Accounting", grade: "A" },
      { name: "Management Accounting", grade: "B+" },
      { name: "Auditing", grade: "A-" },
      { name: "Business Law", grade: "B" },
    ],
  },
];

const EducationCard = ({ edu, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 group"
      aria-labelledby={`edu-title-${index}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <div>
          <h3
            id={`edu-title-${index}`}
            className="text-xl sm:text-2xl font-semibold text-white bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent"
          >
            {edu.degree}
          </h3>
          <div className="flex items-center mt-2 text-gray-300">
            <GraduationCap className="text-purple-400 mr-2" size={18} />
            <span className="font-medium">{edu.institution}</span>
          </div>
          <div className="flex items-center mt-1 text-gray-400">
            <Calendar className="text-blue-400 mr-2" size={18} />
            <span>{edu.period}</span>
          </div>
          {edu.gpa && (
            <div className="flex items-center mt-1 text-gray-400">
              <Sparkles className="text-yellow-400 mr-2" size={18} />
              <span>GPA: {edu.gpa}</span>
            </div>
          )}
        </div>
        <span className="mt-3 sm:mt-0 inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-blue-500/30 transition-all">
          {edu.status || "Completed"}
        </span>
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-blue-300 hover:text-blue-200 text-sm font-medium mt-4 group"
      >
        {isExpanded ? (
          <>
            <ChevronUp className="mr-1 group-hover:scale-110 transition-transform" size={16} />
            Hide Details
          </>
        ) : (
          <>
            <ChevronDown className="mr-1 group-hover:scale-110 transition-transform" size={16} />
            See More
          </>
        )}
      </button>
      {isExpanded && (
        <div className="mt-4">
          <h4 className="text-white font-semibold mb-2">Subjects & Grades</h4>
          <ul className="space-y-2">
            {edu.subjects.map((subject, subIndex) => (
              <li key={subIndex} className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-purple-400 transition-colors"></span>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {subject.name}: {subject.grade}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};

const Education = ({ scrollToSection }) => {
  return (
    <section
      id="education"
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
          <GraduationCap className="text-blue-400/30" size={24} />
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
              <GraduationCap className="mr-2 text-blue-400" size={32} />
              Education
            </h2>
            <p className="mt-2 text-gray-300 text-base md:text-lg">
              Academic qualifications in technology and business
            </p>
            {/* <p className="mt-1 text-xs text-gray-400">
              Institution logos are used for identification purposes only and do not imply endorsement.
            </p> */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <EducationCard key={index} edu={edu} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          {/* <div className="text-center mt-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-gray-400 text-sm mb-2 flex items-center justify-center">
                <Sparkles className="mr-2 text-yellow-400" size={16} />
                Lifelong Learner
              </p>
              <p className="text-gray-300 text-base">
                Let's connect to discuss how my skills can drive your projects!
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

export default Education;