import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Calendar, User, Award, Briefcase, Code, Database, Globe, ChevronDown, Menu, X, ExternalLink, GraduationCap, Building, Star, Users, Trophy, GitBranch } from 'lucide-react';
import Navbar from './Navbar';
import Hero from './Hero';

export default function Main() {
  const [activeSection, setActiveSection] = useState('home');

  const workExperience = [
    {
      title: "Senior Software Engineer (Full Stack)",
      company: "ADXL Pty Ltd – Australia",
      period: "June 2024 – August 2024 and January 2025 – May (9 months)",
      type: "Full-time, Remote",
      achievements: [
        "Designed and implemented 3 complex software solutions in a global remote environment",
        "Spearheaded feature development and performance optimization, ensuring innovative and scalable application delivery",
        "Collaborated with cross-functional teams to meet stringent deadlines and business objectives"
      ]
    },
    {
      title: "Lead Engineer (Full Stack, DevOps, R&D)",
      company: "PlutoPay AI Pte Ltd – Singapore",
      period: "October 2023 – March 2024 (6 months)",
      type: "Full-time, Remote",
      achievements: [
        "Sole engineer responsible for end-to-end project execution, delivering 2 projects: a fintech application and a restaurant map-based web application",
        "Conducted R&D to create cost-effective AI-driven solutions, contributing to the company's growth",
        "Established best practices for code quality, scalability, and system maintenance"
      ]
    },
    {
      title: "Software Engineer (Full Stack)",
      company: "Eyepax IT Consulting Pvt Ltd – Sri Lanka",
      period: "July 2021 – August 2023 (2 years, 3 months)",
      type: "Full-time, Hybrid",
      achievements: [
        "Developed and delivered 2 major projects: a leasing application and a recruitment platform",
        "Collaborated with multidisciplinary teams to deliver high-quality software solutions",
        "Managed overseas client relationships and project lifecycles, ensuring timely delivery"
      ]
    },
    {
      title: "Senior Software Engineer (Front-End)",
      company: "Serendib Systems Pty Ltd – Australia",
      period: "May 2021 – June 2021 (2 months)",
      type: "Full-time, Remote",
      achievements: [
        "Delivered 5+ projects, including a matrimony site, a restaurant 360 application, admin dashboards, and photo stack applications",
        "Led front-end development using React, SASS, and Material UI, delivering user-friendly solutions"
      ]
    }
  ];

  const projects = [
    { name: "Hangry.sg", description: "Developed independently as the first employee at Plutoplay", type: "Food Delivery Platform" },
    { name: "Freshly.sg", description: "Led frontend development and worked as a Full-Stack Engineer at Eyepax", type: "Fresh Food Delivery" },
    { name: "Poruwa.lk", description: "Developed the entire frontend as the first employee at Serendib Systems", type: "Matrimony Platform" },
    { name: "Kahabath Gedara", description: "Developed the entire frontend as the first employee at Serendib Systems", type: "Restaurant Platform" },
    { name: "Zari.ai", description: "One of the projects I am currently working on at ADXL", type: "AI Platform" }
  ];

  const education = [
    {
      degree: "MSc in Information Systems with Computing",
      institution: "Dublin Business School, Ireland",
      period: "Sep 2024 – Present",
      status: "In Progress"
    },
    {
      degree: "MSc in Data Science",
      institution: "Kingston University, UK",
      period: "Oct 2024 – Present",
      status: "In Progress"
    },
    {
      degree: "MSc in IT",
      institution: "Cardiff Metropolitan University, UK",
      period: "Sep 2024 – Oct 2025",
      status: "In Progress"
    },
    {
      degree: "Bachelor of Information Technology",
      institution: "University of Colombo School of Computing, Sri Lanka",
      period: "Jan 2017 – May 2020",
      gpa: "3.28 / 4.00"
    },
    {
      degree: "BSc. in Accounting (Special)",
      institution: "University of Sri Jayewardenepura, Sri Lanka",
      period: "Feb 2014 – Oct 2017",
      gpa: "3.39 / 4.00"
    }
  ];

  const technicalSkills = {
    "Languages & Frameworks": ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Redux", "Next.js", "Node.js", "NestJS", "Express.js", "Tailwind CSS", "Material UI", "Bootstrap", "Ionic"],
    "Databases": ["MySQL", "MongoDB", "PostgreSQL"],
    "Cloud & DevOps": ["AWS", "Docker", "Ansible", "Terraform", "Git", "CI/CD pipelines"],
    "Development Practices": ["REST API", "WebSocket", "Microservices Architecture", "Agile (SCRUM)"],
    "Testing": ["Jest", "Mocha"]
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'education', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Personal Info */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <User className="mr-2 text-blue-400" size={24} />
                Personal Details
              </h3>
              <div className="space-y-3">
                <p className="text-gray-300"><span className="font-semibold">Full Name:</span> Neluwe Liyanage Chamara Madhushanka Gunathilaka</p>
                <p className="text-gray-300"><span className="font-semibold">Nationality:</span> Sri Lankan</p>
                <p className="text-gray-300"><span className="font-semibold">Location:</span> Limerick, Ireland</p>
                <p className="text-gray-300"><span className="font-semibold">Status:</span> Available for opportunities</p>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Trophy className="mr-2 text-yellow-400" size={24} />
                Key Achievements
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Star className="text-yellow-400 mr-2" size={16} />
                  <span className="text-gray-300">A/Level Island Rank: 119</span>
                </div>
                <div className="flex items-center">
                  <Star className="text-yellow-400 mr-2" size={16} />
                  <span className="text-gray-300">First employee at multiple startups</span>
                </div>
                <div className="flex items-center">
                  <Star className="text-yellow-400 mr-2" size={16} />
                  <span className="text-gray-300">Led end-to-end project execution</span>
                </div>
                <div className="flex items-center">
                  <Star className="text-yellow-400 mr-2" size={16} />
                  <span className="text-gray-300">Global remote team management</span>
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Code className="mr-2 text-purple-400" size={24} />
                Specializations
              </h3>
              <div className="space-y-3">
                <div className="bg-white/10 p-3 rounded-lg">
                  <span className="text-blue-300 font-medium">Full-Stack Development</span>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <span className="text-green-300 font-medium">DevOps & Cloud (AWS)</span>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <span className="text-purple-300 font-medium">Research & Development</span>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <span className="text-yellow-300 font-medium">AI-Driven Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            <p className="text-gray-300 mt-4 text-lg">6+ Years of Professional Experience</p>
          </div>
          
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex items-center mb-2">
                      <Building className="text-blue-400 mr-2" size={18} />
                      <span className="text-blue-300 font-semibold">{job.company}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Calendar className="text-green-400 mr-2" size={18} />
                      <span className="text-gray-300">{job.period}</span>
                    </div>
                    <span className="inline-block bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm">
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  {job.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105">
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-blue-200 px-3 py-1 rounded-full text-sm mb-3">
                    {project.type}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="text-blue-400 mr-3" size={24} />
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    </div>
                    <p className="text-blue-300 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-gray-300">{edu.period}</p>
                    {edu.gpa && <p className="text-green-300 font-semibold">GPA: {edu.gpa}</p>}
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                      edu.status === 'In Progress' 
                        ? 'bg-green-600/30 text-green-200' 
                        : 'bg-blue-600/30 text-blue-200'
                    }`}>
                      {edu.status || 'Completed'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {Object.entries(technicalSkills).map(([category, skills], index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Code className="mr-3 text-blue-400" size={24} />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 text-blue-200 px-4 py-2 rounded-full text-sm font-medium hover:from-blue-600/30 hover:to-purple-600/30 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-blue-400 mr-4" size={20} />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a href="mailto:nlc.madhushanka@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                        nlc.madhushanka@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="text-green-400 mr-4" size={20} />
                    <div>
                      <p className="text-white font-medium">Phone (Ireland)</p>
                      <a href="tel:+353872741779" className="text-gray-300 hover:text-green-400 transition-colors">
                        +353 872741779
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="text-purple-400 mr-4" size={20} />
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-gray-300">647 Chestnut Cl Elm Park,</p>
                      <p className="text-gray-300">Limerick, V94 P9TP, Ireland</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <GitBranch className="text-orange-400 mr-4" size={20} />
                    <div>
                      <p className="text-white font-medium">GitHub</p>
                      <a 
                        href="https://github.com/chamara-madhu" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-orange-400 transition-colors flex items-center"
                      >
                        github.com/chamara-madhu <ExternalLink className="ml-1" size={14} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Globe className="text-blue-400 mr-4" size={20} />
                    <div>
                      <p className="text-white font-medium">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/chamara-madhushanka" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                      >
                        View Profile <ExternalLink className="ml-1" size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6">Let's Work Together</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm always interested in new opportunities and collaborations. 
                  With 6+ years of experience in full-stack development, DevOps, and R&D, 
                  I'm ready to take on challenging projects and deliver innovative solutions.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:nlc.madhushanka@gmail.com"
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Send Email
                  </a>
                  <a
                    href="https://linkedin.com/in/chamara-madhushanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border-2 border-white/30 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-white/10 transition-all"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Chamara Madhushanka. All rights reserved. • Senior Software Engineer • Ireland
          </p>
        </div>
      </footer>
    </div>
  );
}