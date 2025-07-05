import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, Code, Terminal, Target } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-26">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div
            className={`space-y-8 ${
              isVisible
                ? "animate-in slide-in-from-left duration-1000"
                : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500/15 to-orange-600/15 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-center space-x-2">
                <span>🎯</span>
                <span className="text-orange-200 font-medium">
                  Crafted by Top Engineers
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Upskill yourself
                </span>
                <br />
                <span className="text-gray-300">— With Just</span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent animate-pulse">
                  One SUBSCRIPTION.
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-300 max-w-lg leading-relaxed">
                The most trusted platform for engineers to upskill and crack
                <span className="text-orange-400 font-semibold">
                  {" "}
                  tech interviews{" "}
                </span>
                in the least time
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="group border-2 border-gray-600 hover:border-orange-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-orange-500/10 backdrop-blur-sm">
                <span className="flex items-center justify-center space-x-2">
                  <span>Explore Offerings</span>
                  <ChevronDown
                    size={16}
                    className="group-hover:translate-y-1 transition-transform"
                  />
                </span>
              </button>
              <button className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Start Learning</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          <div
            className={`relative ${
              isVisible
                ? "animate-in slide-in-from-right duration-1000 delay-300"
                : "opacity-0"
            }`}
          >
            <div className="relative space-y-8">
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-3xl h-60 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-700/20 backdrop-blur-sm hover:scale-103 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center&auto=format"
                    alt="Programming and DSA"
                    className="w-full h-full object-cover opacity-70 blur-[1px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-14 h-14 bg-blue-600/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/30">
                        <Code size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">
                          Striver's DSA Sheet
                        </p>
                        <p className="text-blue-200 text-sm">
                          Master the fundamentals
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl h-60 bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-700/20 backdrop-blur-sm hover:scale-103 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center&auto=format"
                    alt="System Design and Architecture"
                    className="w-full h-full object-cover opacity-70 blur-[1px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-14 h-14 bg-orange-600/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-orange-400/30 ">
                        <Target size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">
                          System Design
                        </p>
                        <p className="text-orange-200 text-sm">
                          Build scalable architectures
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-9 mt-12">
                <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <Code size={16} className="text-orange-400" />
                  <span className="text-sm text-gray-300">
                    Algorithm Mastery
                  </span>
                </div>
                <div className="flex items-center space-x-2 hover:transform hover:scale-105 bg-gray-800/50 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700/50">
                  <div className="w-4 h-4 bg-purple-400 rounded-sm"></div>
                  <span className="text-sm text-gray-300">Interview Prep</span>
                </div>
                <div className="flex items-center space-x-2 hover:transform hover:scale-105 bg-gray-800/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700/50">
                  <Terminal size={16} className="text-blue-400" />
                  <span className="text-sm text-gray-300">System Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation: animate-in 0.5s ease-out;
        }

        .slide-in-from-left {
          animation: slide-in-from-left 1s ease-out;
        }

        .slide-in-from-right {
          animation: slide-in-from-right 1s ease-out;
        }

        @keyframes slide-in-from-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-from-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
