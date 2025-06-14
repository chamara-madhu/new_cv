import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ scrollToSection, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">CM</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {[
                "home",
                "about",
                "experience",
                "projects",
                "education",
                "skills",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                    activeSection === item
                      ? "bg-white/20 text-white"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              "home",
              "about",
              "experience",
              "projects",
              "education",
              "skills",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md w-full text-left capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
