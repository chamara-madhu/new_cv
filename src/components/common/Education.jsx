import React, { useState } from "react";
import {
  Calendar,
  GraduationCap,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const universityEducation = [
  {
    degree: "MSc in Information Systems with Computing",
    institution: "Dublin Business School, Ireland",
    period: "Sep 2024 – Present",
    status: "In Progress",
    subjects: [
      { name: "Software Engineering", grade: "69" },
      { name: "Advanced Databases", grade: "76" },
      { name: "Networks and Systems Administration", grade: "84" },
      { name: "Programming for Information Systems", grade: "83" },
      { name: "Web and Mobile Technologies", grade: "80" },
      { name: "Applied Research Methods", grade: "81" },
      { name: "Enterprise Information Systems", grade: "83" },
      { name: "Data Analytics and Visualization", grade: "80" },
      { name: "Computer Systems Security", grade: "64" },
      { name: "Web Development for Information Systems", grade: "89" },
      { name: "Applied Research Project", grade: "To Do" },
    ],
  },
  {
    degree: "MSc in Data Science",
    institution: "Kingston University, UK",
    period: "Oct 2024 – Present",
    status: "In Progress",
    subjects: [
      { name: "Data Analytics and Visualization", grade: "A" },
      { name: "Applied Data Programming", grade: "A" },
      { name: "Databases and Data Management", grade: "Pending Results" },
      { name: "Machine Learning and Deep Learning", grade: "Pending Results" },
      { name: "Project Dissertation", grade: "To Do" },
    ],
  },
  {
    degree: "MSc in IT",
    institution: "Cardiff Metropolitan University, UK",
    period: "Sep 2024 – Oct 2025",
    status: "In Progress",
    subjects: [
      { name: "Technology Project Management", grade: "55" },
      { name: "Team Software Development Project", grade: "73.25" },
      { name: "Information Security and Document Management", grade: "68" },
      { name: "Programming for Data Analysis", grade: "65" },
      { name: "End User Computing Risk Management", grade: "70" },
      { name: "Geospatial Analysis", grade: "52" },
      { name: "Research Methods for Technology Dissertations", grade: "67" },
      { name: "Technology Dissertation", grade: "To Do" },
    ],
  },
  {
    degree: "Bachelor of Information Technology",
    institution: "University of Colombo School of Computing, Sri Lanka",
    period: "Jan 2017 – May 2020",
    gpa: "3.28 / 4.00",
    subjects: [
      { name: "Communication Skills", grade: "P" },
      { name: "Introductory Mathematics", grade: "P" },
      { name: "Personal Computing", grade: "P" },
      { name: "Information Systems & Technology", grade: "B" },
      { name: "Computer Systems I", grade: "B+" },
      { name: "Web Application Development I", grade: "C" },
      { name: "Mathematics for Computing I", grade: "A-" },
      { name: "Programming I", grade: "B-" },
      { name: "Database Systems I", grade: "B-" },
      { name: "Systems Analysis & Design", grade: "A" },
      { name: "Object Oriented Analysis & Design", grade: "A" },
      { name: "Fundamentals of Software Engineering", grade: "A-" },
      { name: "Mathematics for Computing II", grade: "B-" },
      { name: "Web Application Development II", grade: "B+" },
      { name: "Information Technology Project Management", grade: "B-" },
      { name: "Computer Networks", grade: "B" },
      { name: "Fundamentals of Management", grade: "P" },
      { name: "Introduction to Entrepreneurship", grade: "P" },
      { name: "Professional Issues In IT", grade: "B+" },
      { name: "Information Systems Security", grade: "A-" },
      { name: "Fundamentals of Multimedia*", grade: "A-" },
      { name: "e-Business Application*", grade: "B" },
      { name: "Database Systems II", grade: "A-" },
      { name: "Software Development Project", grade: "A" },
    ],
  },
  {
    degree: "BSc in Accounting (Special)",
    institution: "University of Sri Jayewardenepura, Sri Lanka",
    period: "Feb 2014 – Oct 2017",
    gpa: "3.39 / 4.00",
    subjects: [
      { name: "Financial Accounting", grade: "A" },
      { name: "Business Communication I", grade: "C" },
      { name: "Introduction to Management", grade: "B+" },
      { name: "Business Mathematics", grade: "A" },
      { name: "Introduction to Information Technology I", grade: "B" },
      { name: "Business Communication II", grade: "A-" },
      { name: "Microeconomics", grade: "A-" },
      { name: "Business Statistics", grade: "A" },
      { name: "Political and Legal Environment", grade: "A" },
      { name: "Introduction to Information Technology II", grade: "B+" },
      { name: "Communication Skills and Personal Development", grade: "B" },
      { name: "Advanced Financial Accounting", grade: "B" },
      { name: "Macroeconomics", grade: "A" },
      { name: "Human Resource Management", grade: "A-" },
      { name: "Marketing Management", grade: "B+" },
      { name: "Cost and Management Accounting", grade: "A" },
      { name: "Computer Based Accounting", grade: "B+" },
      { name: "Commercial Law", grade: "B-" },
      { name: "Operations Management", grade: "B+" },
      { name: "Financial Management", grade: "B+" },
      { name: "Advanced Management Accounting", grade: "B" },
      { name: "Accounting Modelling", grade: "A-" },
      { name: "Accounting Information Systems", grade: "A" },
      { name: "Corporate Law", grade: "A" },
      { name: "Investment and Portfolio Management I", grade: "C-" },
      { name: "Financial Reporting", grade: "B-" },
      { name: "Auditing and Assurance", grade: "A-" },
      { name: "Taxation", grade: "A" },
      { name: "Skill Development of Intern Accountants II", grade: "B" },
      { name: "Investment and Portfolio Management II", grade: "C+" },
      { name: "Research Methodology", grade: "A" },
      { name: "Skill Development of Intern Accountants III", grade: "A+" },
      { name: "Advanced Taxation", grade: "A-" },
      { name: "Strategic Management", grade: "B+" },
      { name: "International Financial Management", grade: "B+" },
      { name: "Advanced Accounting Theory", grade: "B+" },
      { name: "Financial Statement Analysis", grade: "A-" },
      { name: "Strategic Management Accounting", grade: "C+" },
      { name: "Skill Development of Intern Accountants IV", grade: "A" },
      {
        name: "Artificial Neural Networks in Accounting and Finance",
        grade: "B+",
      },
    ],
  },
];

const schoolEducation = [
  {
    degree: "GCE Advanced Level (A/L)",
    institution: "D. S. Senanayake College, Sri Lanka",
    period: "May 2010 – Aug 2012",
    subjects: [
      { name: "Accounting", grade: "A" },
      { name: "Economics", grade: "A" },
      { name: "Statistics", grade: "A" },
      { name: "General English", grade: "B" },
    ],
    extra: "Island Rank: 119, District Rank: 55 (Colombo)",
  },
];

const professionalEducation = [
  {
    degree: "Professional Graduate Diploma (PGD Level) – Following",
    institution: "Chartered Institute for IT (BCS-UK)",
    period: "2018 – 2018",
    status: "Partially Completed",
  },
  {
    degree: "Diploma in IT",
    institution: "Chartered Institute for IT (BCS-UK)",
    period: "2017",
  },
  {
    degree: "Certificate in IT",
    institution: "Chartered Institute for IT (BCS-UK)",
    period: "2016",
  },
  {
    degree: "Diploma in Banking and Finance",
    institution: "Institute of Bankers of Sri Lanka (IBSL)",
    period: "2014",
  },
  {
    degree: "CAB-II Level",
    institution: "Institute of Chartered Accountants of Sri Lanka (ICASL)",
    period: "2013",
  },
  {
    degree: "Certificate in Banking and Finance",
    institution: "Institute of Bankers of Sri Lanka (IBSL)",
    period: "2012",
  },
  {
    degree: "AAT Passed Finalist",
    institution:
      "The Association of Accounting Technicians of Sri Lanka (AATSL)",
    period: "2012",
  },
];

const EducationCard = ({ edu, index }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);

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
        <span
          className={`mt-3 sm:mt-0 inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold shadow-sm backdrop-blur-sm transition-all duration-300
    ${
      edu.status === "In Progress"
        ? "bg-yellow-400/10 text-yellow-300 border border-yellow-300/30 hover:bg-yellow-400/20"
        : "bg-green-400/10 text-green-300 border border-green-300/30 hover:bg-green-400/20"
    }
  `}
        >
          {edu.status === "In Progress" ? (
            <>
              <Sparkles className="w-4 h-4 animate-pulse text-yellow-300" />
              In Progress
            </>
          ) : (
            <>
              <GraduationCap className="w-4 h-4 text-green-300" />
              Completed
            </>
          )}
        </span>
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-blue-300 hover:text-blue-200 text-sm font-medium mt-4 group cursor-pointer"
      >
        {isExpanded ? (
          <>
            <ChevronUp
              className="mr-1 group-hover:scale-110 transition-transform"
              size={16}
            />
            Hide Details
          </>
        ) : (
          <>
            <ChevronDown
              className="mr-1 group-hover:scale-110 transition-transform"
              size={16}
            />
            See More
          </>
        )}
      </button>
      {isExpanded && (
        <div className="bg-purple-50 rounded-xl p-4 sm:p-6 mt-4">
          <h4 className="font-semibold mb-3">Subjects & Grades</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            {edu.subjects.map((subject, subIndex) => (
              <div
                key={subIndex}
                className="flex flex-row justify-between text-sm"
              >
                <span>{subject.name}</span>
                <span className="text-sm font-semibold">{subject.grade}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

const Education = () => {
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
        <div
          className="absolute top-1/3 right-1/4 animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          <Sparkles className="text-yellow-400/30" size={20} />
        </div>
        <div
          className="absolute bottom-1/4 left-1/3 animate-pulse"
          style={{ animationDelay: "2s" }}
        >
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
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
          </div>

          {/* Education Sections */}
          <div className="space-y-12">
            {/* University */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                University Education
              </h3>
              <div className="space-y-6">
                {universityEducation.map((edu, index) => (
                  <EducationCard key={index} edu={edu} index={index} />
                ))}
              </div>
            </div>
            {/* Professional */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                Professional Qualifications
              </h3>
              <div className="grid gap-6">
                {professionalEducation.map((item, index) => (
                  <article
                    key={index}
                    className="flex justify-between bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-purple-400/60 transition-all duration-300 hover:scale-105"
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-white bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                        {item.degree}
                      </h4>
                      <p className="text-gray-300 mt-1">{item.institution}</p>
                      <p className="text-gray-400 text-sm">{item.period}</p>
                    </div>
                    <div>
                      <span
                        className={`mt-3 sm:mt-0 inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold shadow-sm backdrop-blur-sm transition-all duration-300
    ${
      item.status === "In Progress"
        ? "bg-yellow-400/10 text-yellow-300 border border-yellow-300/30 hover:bg-yellow-400/20"
        : "bg-green-400/10 text-green-300 border border-green-300/30 hover:bg-green-400/20"
    }
  `}
                      >
                        {item.status === "In Progress" ? (
                          <>
                            <Sparkles className="w-4 h-4 animate-pulse text-yellow-300" />
                            In Progress
                          </>
                        ) : item.status === "Partially Completed" ? (
                          <>
                            <GraduationCap className="w-4 h-4 text-green-300" />
                            Partially Completed
                          </>
                        ) : (
                          <>
                            <GraduationCap className="w-4 h-4 text-green-300" />
                            Completed
                          </>
                        )}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* School */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                School Education
              </h3>
              {schoolEducation.map((edu, index) => (
                <article
                  key={index}
                  className="flex justify-between bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 group"
                >
                  <div>
                    <h4 className="text-xl sm:text-2xl font-semibold text-white bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-300 mt-2">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mt-1">{edu.period}</p>
                    <p className="text-white text-sm mt-5 italic">{edu.extra}</p>
                    <ul className="mt-4 space-y-2">
                      {edu.subjects.map((subject, i) => (
                        <li key={i} className="text-sm text-gray-300">
                          • {subject.name}: {subject.grade}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span
                      className={`mt-3 sm:mt-0 inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold shadow-sm backdrop-blur-sm transition-all duration-300
    ${
      edu.status === "In Progress"
        ? "bg-yellow-400/10 text-yellow-300 border border-yellow-300/30 hover:bg-yellow-400/20"
        : "bg-green-400/10 text-green-300 border border-green-300/30 hover:bg-green-400/20"
    }
  `}
                    >
                      {edu.status === "In Progress" ? (
                        <>
                          <Sparkles className="w-4 h-4 animate-pulse text-yellow-300" />
                          In Progress
                        </>
                      ) : (
                        <>
                          <GraduationCap className="w-4 h-4 text-green-300" />
                          Completed
                        </>
                      )}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Education;
