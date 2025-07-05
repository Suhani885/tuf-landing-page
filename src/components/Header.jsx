import { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  BookOpen,
  Trophy,
  Code,
  Users,
  ArrowRight,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resourcesDropdown = [
    {
      icon: Code,
      title: "Striver's DSA Sheet",
      desc: "Complete DSA for interviews",
      badge: "Popular",
    },
    {
      icon: BookOpen,
      title: "System Design Sheet",
      desc: "Design better systems",
      badge: null,
    },
    {
      icon: Trophy,
      title: "Core Subjects",
      desc: "Build strong fundamentals",
      badge: null,
    },
    {
      icon: Users,
      title: "Interview Experiences",
      desc: "Learn from others' journey",
      badge: "New",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-700/50"
          : "bg-gray-900/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative">
              <div className="relative w-20 h-20 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                <img
                  src="https://takeuforward.org/static/media/TufPlusLight.041fc694d612b3fbaaa0.png"
                  alt="TUF Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="text-lg font-light bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent group-hover:from-orange-200 group-hover:via-white group-hover:to-orange-200 transition-all duration-500">
              takeUforward
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-12">
            <a
              href="#"
              className="relative py-3 px-4 text-gray-300 hover:text-white transition-all duration-300 group text-lg font-medium"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-500 rounded-full"></span>
              <span className="absolute inset-0 bg-orange-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>

            <a
              onClick={() => {
                const pricingSection = document.getElementById("pricing");
                pricingSection?.scrollIntoView({ behavior: "smooth" });
              }}
              href="#"
              className="relative py-3 px-4 text-gray-300 hover:text-white transition-all duration-300 group text-lg font-medium"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-500 rounded-full"></span>
              <span className="absolute inset-0 bg-orange-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>

            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center space-x-2 py-3 px-4 text-gray-300 hover:text-white transition-all duration-300 group text-lg font-medium"
              >
                <span>Resources</span>
                <ChevronDown
                  size={18}
                  className={`transform transition-all duration-300 ${
                    isResourcesOpen ? "rotate-180 text-orange-400" : ""
                  } group-hover:text-orange-400`}
                />
                <span className="absolute inset-0 bg-orange-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </button>

              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-4 w-96 bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden opacity-100 transform translate-y-0 transition-all duration-500 animate-in slide-in-from-top-2">
                  <div className="p-3">
                    {resourcesDropdown.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center group-hover:from-orange-500/40 group-hover:to-orange-600/40 transition-all duration-300 group-hover:scale-110">
                          <item.icon
                            size={20}
                            className="text-orange-400 group-hover:text-orange-300"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold text-white group-hover:text-orange-200 transition-colors duration-300 text-base">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span
                                className={`text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-300 ${
                                  item.badge === "Popular"
                                    ? "bg-orange-500/20 text-orange-300 group-hover:bg-orange-500/30"
                                    : item.badge === "New"
                                    ? "bg-green-500/20 text-green-300 group-hover:bg-green-500/30"
                                    : "bg-red-500/20 text-red-300 group-hover:bg-red-500/30"
                                }`}
                              >
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {item.desc}
                          </p>
                        </div>
                        <ArrowRight
                          size={18}
                          className="text-gray-500 group-hover:text-orange-400 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:flex text-white items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg relative overflow-hidden group">
              <span className="relative z-10">Login</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-700/50"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 animate-in slide-in-from-top-2 duration-300">
          <div className="px-6 py-6 space-y-4">
            <a
              href="#"
              className="block py-3 px-4 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-800/50 text-lg font-medium"
            >
              Home
            </a>
            <a
              href="#"
              onClick={() => {
                const pricingSection = document.getElementById("pricing");
                pricingSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="block py-3 px-4 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-800/50 text-lg font-medium"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block py-3 px-4 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-800/50 text-lg font-medium"
            >
              Resources
            </a>
            <button className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 mt-6 transform hover:scale-105 shadow-lg hover:shadow-orange-500/40 group">
              <span>Login</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
