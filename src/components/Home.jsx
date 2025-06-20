import React, { useEffect } from "react";
import Hero from "./common/Hero";
import Experiences from "./common/Experiences";
import Education from "./common/Education";
import Footer from "./common/Footer";
import Skills from "./common/Skills";
import WorkingProjects from "./common/WorkingProjects";
import IndividualProjects from "./common/IndividualProjects";
import Hobbies from "./common/Hobbies";
import ProfessionalSummary from "./common/ProfessionalSummary";

const Home = () => {
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
    <div className="min-h-screen">
      <Hero  scrollToSection={scrollToSection}  />
      <ProfessionalSummary />
      <Skills />
      <Experiences />
      <WorkingProjects />
      <IndividualProjects />
      <Education />
      <Hobbies />
      <Footer />
    </div>
  );
};

export default Home;
