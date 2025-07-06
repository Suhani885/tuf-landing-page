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
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl px-8 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110">
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

          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className="relative py-2 px-4 text-gray-300 hover:text-white transition-all duration-300 group text-base font-medium"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-500 rounded-full"></span>
            </a>

            <a
              onClick={() => {
                const pricingSection = document.getElementById("pricing");
                pricingSection?.scrollIntoView({ behavior: "smooth" });
              }}
              href="#"
              className="relative py-2 px-4 text-gray-300 hover:text-white transition-all duration-300 group text-base font-medium"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-500 rounded-full"></span>
            </a>

            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center space-x-2 py-2 px-4 text-gray-300 hover:text-white transition-all duration-300 group text-base font-medium"
              >
                <span>Resources</span>
                <ChevronDown
                  size={16}
                  className={`transform transition-all duration-300 ${
                    isResourcesOpen ? "rotate-180 text-orange-400" : ""
                  } group-hover:text-orange-400`}
                />
              </button>

              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-4 w-96 bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden opacity-100 transform translate-y-0 transition-all duration-500">
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
            <button className="hidden md:flex text-white items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg relative overflow-hidden group">
              <span className="relative z-10">Sign in</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-gray-700/50 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-3xl mt-4 duration-300">
          <div className="px-6 py-6 space-y-4">
            <a
              href="#"
              className="block py-3 px-4 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-700/50 text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              onClick={() => {
                const pricingSection = document.getElementById("pricing");
                pricingSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="block py-3 px-4 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-700/50 text-base font-medium"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block py-3 px-4 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-700/50 text-base font-medium"
            >
              Resources
            </a>
            <button className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 mt-6 transform hover:scale-105 shadow-lg hover:shadow-orange-500/40 group">
              <span>Sign in</span>
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
