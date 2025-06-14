import React from "react";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      {/* <Navbar scrollToSection={scrollToSection} activeSection={activeSection} /> */}

      {/* Hero Section */}
      <Hero />
    </div>
  );
};

export default Home;
