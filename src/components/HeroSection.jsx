import { useState, useEffect } from "react";
import {
  ChevronDown,
  ArrowRight,
  Code,
  Terminal,
  Zap,
  Target,
  Award,
  TrendingUp,
  Users,
} from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: "1,048,270+", label: "Learners", icon: Users },
    { value: "98.7%", label: "Placement Rate", icon: TrendingUp },
    { value: "250%", label: "Avg Salary Boost", icon: Award },
    { value: "15k+", label: "Premium Problems", icon: Zap },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden pt-3">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-30">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div
            className={`space-y-6 ${
              isVisible
                ? "animate-in slide-in-from-left duration-1000"
                : "opacity-0"
            }`}
          >
            {/* <div className="relative inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500/15 to-orange-600/15 backdrop-blur-xl rounded-full px-6 py-2 text-sm border border-orange-500/30 hover:border-orange-500/60 transition-all duration-500 hover:scale-105">
              <div className="flex items-center space-x-2">
                <Trophy size={16} className="text-orange-400" />
                <span className="text-orange-200 font-semibold">
                  Crafted by Top Engineers
                </span>
              </div>
            </div> */}

            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500/15 to-orange-600/15 backdrop-blur-sm rounded-full px-6 py-2 text-sm border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 group">
              <div className="flex items-center space-x-2">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-1 transition-all duration-500 ${
                      index === currentStat
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 absolute"
                    }`}
                  >
                    <stat.icon size={16} className="text-orange-400" />
                    <span className="text-orange-200 font-bold">
                      {stat.value}
                    </span>
                    <span className="text-orange-300 text-xs">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
                    Upskill
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transform scale-x-0 animate-expand" />
                </span>
                <br />
                <span className="text-gray-300 font-light">yourself with</span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent animate-pulse">
                  One SUBSCRIPTION.
                </span>
              </h1>

              <div className="relative">
                <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light">
                  The most trusted platform for engineers to{" "}
                  <span className="relative inline-block">
                    <span className="text-orange-400 font-semibold">
                      upskill
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-orange-400 to-transparent" />
                  </span>{" "}
                  and crack{" "}
                  <span className="relative inline-block">
                    <span className="text-orange-400 font-semibold">
                      tech interviews
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-orange-400 to-transparent" />
                  </span>{" "}
                  in the least time
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-2">
              <button
                onClick={() => {
                  const pricingSection = document.getElementById("pricing");
                  pricingSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative overflow-hidden border-2 border-gray-600 hover:border-orange-500 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-orange-600/10 backdrop-blur-xl hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:to-orange-600/5 transition-all duration-500" />
                <span className="relative flex items-center justify-center space-x-3">
                  <span>Explore Offerings</span>
                  <ChevronDown
                    size={20}
                    className="group-hover:translate-y-2 group-hover:rotate-180 transition-all duration-500"
                  />
                </span>
              </button>

              <button className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/40">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-500" />
                <span className="relative flex items-center justify-center space-x-3">
                  <Zap
                    size={20}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                  <span>Buy Now</span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-2 transition-transform duration-300"
                  />
                </span>
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
                  <Terminal size={16} className="text-purple-400" />
                  <span className="text-sm text-gray-300">Interview Prep</span>
                </div>
                <div className="flex items-center space-x-2 hover:transform hover:scale-105 bg-gray-800/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700/50">
                  <Target size={16} className="text-blue-400" />
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
