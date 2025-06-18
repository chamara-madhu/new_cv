import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  Zap,
  Award,
  Send,
  Download,
  Star,
  Sparkles,
} from "lucide-react";
import AvatarImg from "../../assets/images/avatar.jpg";

const Hero = ({scrollToSection}) => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
        {/* Enhanced background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/50 via-transparent to-transparent"></div>
        </div>

        {/* Floating icons animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 animate-float">
            <Code className="text-blue-400/30" size={24} />
          </div>
          <div
            className="absolute top-1/3 right-1/4 animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            <Zap className="text-yellow-400/30" size={20} />
          </div>
          <div
            className="absolute bottom-1/4 left-1/3 animate-pulse"
            style={{ animationDelay: "2s" }}
          >
            <Award className="text-purple-400/30" size={22} />
          </div>
          <div
            className="absolute top-2/3 right-1/3 animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            <Star className="text-cyan-400/30" size={18} />
          </div>
          <div
            className="absolute bottom-1/3 right-1/4 animate-bounce"
            style={{ animationDelay: "1.5s" }}
          >
            <Sparkles className="text-pink-400/30" size={16} />
          </div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-30">
          <div className="max-w-7xl mx-auto">
            {/* Main Hero Content */}
            <div className="text-center mb-20">
              {/* Enhanced Profile Image */}
              <div className="relative mb-8">
                <img
                  src={AvatarImg}
                  alt="Profile Picture"
                  className="w-50 h-50 mx-auto rounded-full flex items-center justify-center mb-8 shadow-2xl border-3 border-gray-100"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 px-4 py-2 rounded-full text-white text-sm font-medium flex items-center shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    Available for Work
                  </div>
                </div>
              </div>

              {/* Enhanced Name and Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in">
                Chamara Madhushanka
              </h1>

              <div className="flex items-center justify-center mb-4">
                <Code className="text-blue-400 mr-2" size={24} />
                <h2 className="text-2xl md:text-3xl text-blue-300 font-semibold">
                  Senior Software Engineer
                </h2>
              </div>

              <div className="flex items-center justify-center mb-8 flex-wrap gap-2">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm flex items-center">
                  <Zap className="mr-1" size={14} />
                  Full-Stack Developer
                </span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm flex items-center">
                  <Award className="mr-1" size={14} />
                  DevOps
                </span>
                <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm flex items-center">
                  <Star className="mr-1" size={14} />
                  R&D
                </span>
              </div>

              {/* Enhanced Stats */}
              <div className="flex justify-center space-x-12 mb-8">
                <div className="text-center group cursor-pointer">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center justify-center mb-2">
                      <Award className="mr-2 text-blue-400" size={32} />
                      6+
                    </div>
                    <div className="text-gray-300 text-sm font-medium">
                      Years Experience
                    </div>
                  </div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl font-bold text-white group-hover:text-purple-400 transition-colors flex items-center justify-center mb-2">
                      <Star className="mr-2 text-purple-400" size={32} />
                      15+
                    </div>
                    <div className="text-gray-300 text-sm font-medium">
                      Projects Delivered
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        // id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900"
      >
        <div className="py-20">
          <div>
            {/* <div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto mb-12">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Highly skilled software engineer with 6 years of experience
                  specializing in full-stack development, end-to-end software
                  solutions, and research and development. Proficient in modern
                  technologies such as React, Node.js, Next.js, and NestJS, with
                  expertise in cloud platforms like AWS.
                </p>
              </div>
            </div> */}

            {/* Enhanced Contact Information Cards */}
            <div className="max-w-6xl mx-auto mb-12">
              {/* <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
                  <Mail className="mr-2 text-blue-400" size={24} />
                  Let's Connect
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
              </div> */}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Email Card */}
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/50 transition-all">
                      <Mail className="text-blue-400" size={28} />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Email Me</h4>
                    <a
                      href="mailto:nlc.madhushanka@gmail.com"
                      className="text-blue-300 hover:text-blue-200 transition-colors text-sm break-all"
                    >
                      nlc.madhushanka@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm p-6 rounded-2xl border border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/50 transition-all">
                      <Phone className="text-green-400" size={28} />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Call Me</h4>
                    <a
                      href="tel:+353872741779"
                      className="text-green-300 hover:text-green-200 transition-colors text-sm"
                    >
                      +353 872741779
                    </a>
                    <p className="text-gray-400 text-xs mt-1">Ireland</p>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/50 transition-all">
                      <MapPin className="text-purple-400" size={28} />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Location</h4>
                    <div className="text-purple-300 text-sm space-y-1">
                      <p>647 Chestnut Cl Elm Park</p>
                      <p>Limerick, V94 P9TP</p>
                      <p className="text-purple-200 font-medium">Ireland</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Cards */}
              <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
                <a
                  href="https://github.com/chamara-madhu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-gray-600/20 to-gray-700/20 backdrop-blur-sm p-6 rounded-2xl border border-gray-400/30 hover:border-gray-400/60 transition-all duration-300 hover:scale-105 group block"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-500/30 rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-500/50 transition-all">
                      <Github className="text-gray-300" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">GitHub</h4>
                      <p className="text-gray-300 text-sm">
                        View my repositories
                      </p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                        <ChevronDown
                          className="text-white rotate-[-90deg]"
                          size={16}
                        />
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/chamara-madhushanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 group block"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-500/50 transition-all">
                      <Linkedin className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">LinkedIn</h4>
                      <p className="text-gray-300 text-sm">
                        Connect professionally
                      </p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                        <ChevronDown
                          className="text-white rotate-[-90deg]"
                          size={16}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Enhanced Call to Action */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="mailto:nlc.madhushanka@gmail.com"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg text-lg flex items-center group"
                >
                  <Send
                    className="mr-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                  Get In Touch
                </a>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all text-lg flex items-center group"
                >
                  <Download
                    className="mr-2 group-hover:translate-y-1 transition-transform"
                    size={20}
                  />
                  View Experience
                </button>
              </div>

              {/* <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
                <p className="text-gray-400 text-sm mb-2 flex items-center justify-center">
                  <Sparkles className="mr-2 text-yellow-400" size={16} />
                  Ready for New Opportunities
                </p>
                <p className="text-gray-300">
                  Let's collaborate and build something amazing together!
                </p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
            <ChevronDown
              className="text-white/80 hover:text-white transition-colors"
              size={24}
            />
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
    </>
  );
};

export default Hero;
