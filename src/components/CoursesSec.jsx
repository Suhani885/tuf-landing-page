import { useState } from "react";

const CourseCard = ({
  title,
  description,
  modules,
  chapters,
  problems,
  icon,
  gradient,
  topics,
}) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110"></div>

      <div className="relative bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/[0.1] hover:border-white/[0.2] transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-orange-500/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

        <div className={`${gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.15] via-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

          <div className="relative z-10 p-8 text-white">
            <div className="space-y-3 mb-8">
              {topics && (
                <div className="flex items-center space-x-2 text-sm font-medium">
                  <div className="w-2 h-2 bg-gradient-to-r from-white to-white/70 rounded-full animate-pulse shadow-lg shadow-white/30"></div>
                  <span className="text-white/90">{topics} Topics</span>
                </div>
              )}
              {modules && (
                <div className="flex items-center space-x-2 text-sm font-medium">
                  <div className="w-2 h-2 bg-gradient-to-r from-white to-white/70 rounded-full animate-pulse shadow-lg shadow-white/30"></div>
                  <span className="text-white/90">{modules} Modules</span>
                </div>
              )}
              {chapters && (
                <div className="flex items-center space-x-2 text-sm font-medium">
                  <div className="w-2 h-2 bg-gradient-to-r from-white to-white/70 rounded-full animate-pulse shadow-lg shadow-white/30"></div>
                  <span className="text-white/90">{chapters} Chapters</span>
                </div>
              )}
              {problems && (
                <div className="flex items-center space-x-2 text-sm font-medium">
                  <div className="w-2 h-2 bg-gradient-to-r from-white to-white/70 rounded-full animate-pulse shadow-lg shadow-white/30"></div>
                  <span className="text-white/90">{problems} Problems</span>
                </div>
              )}
            </div>

            <div className="text-7xl opacity-20 group-hover:opacity-40 flex justify-center transition-all duration-700 group-hover:scale-125 group-hover:rotate-6 drop-shadow-2xl">
              {icon}
            </div>
          </div>
        </div>

        <div className="relative p-8 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/90 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01] group-hover:from-white/[0.04] group-hover:to-white/[0.02] transition-all duration-700"></div>

          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-all duration-500 group-hover:scale-105 origin-left">
              {title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-all duration-500">
              {description}
            </p>

            <button className="w-full bg-gradient-to-r from-white/[0.08] via-white/[0.05] to-white/[0.08] backdrop-blur-sm border border-white/[0.1] hover:border-orange-400/50 text-white py-4 rounded-xl font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-orange-600/20 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
              <span className="relative z-10">View Syllabus</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PremiumCard = ({ title, description, problems, icon, gradient }) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 via-red-500/30 to-orange-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110"></div>

      <div className="relative bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] backdrop-blur-xl rounded-2xl border border-orange-400/[0.2] hover:border-orange-400/[0.4] transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-orange-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.05] via-transparent to-red-500/[0.05] opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

        <div className={`${gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.2] via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

          <div className="relative z-10 p-8 text-white">
            <div className="absolute top-4 right-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                PREMIUM
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-6 relative z-10 group-hover:scale-105 transition-all duration-500 origin-left">
              {title}
            </h3>

            <div className="flex items-center space-x-2 text-sm mb-8 relative z-10 font-medium">
              <div className="w-2 h-2 bg-gradient-to-r from-white to-white/70 rounded-full animate-pulse shadow-lg shadow-white/30"></div>
              <span className="text-white/90">{problems} Problems</span>
            </div>

            <div className="text-7xl opacity-20 group-hover:opacity-40 flex justify-center transition-all duration-700 group-hover:scale-125 group-hover:rotate-6 drop-shadow-2xl relative z-10">
              {icon}
            </div>
          </div>
        </div>

        <div className="relative p-8 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/90 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.03] via-transparent to-red-500/[0.03] group-hover:from-orange-500/[0.06] group-hover:to-red-500/[0.06] transition-all duration-700"></div>

          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-all duration-500 group-hover:scale-105 origin-left">
              {title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-all duration-500">
              {description}
            </p>

            <button className="w-full bg-gradient-to-r from-orange-500/20 via-orange-600/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 hover:border-orange-400/60 text-white py-4 rounded-xl font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 hover:bg-gradient-to-r hover:from-orange-500/30 hover:to-red-600/30 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/20 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
              <span className="relative z-10 font-semibold">View Syllabus</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState("DSA");

  const tabData = {
    DSA: [
      {
        title: "DSA",
        description: "Designed for beginners as well as experts to prepare DSA",
        modules: "10+",
        chapters: "50+",
        problems: "470+",
        icon: (
          <div className="w-16 h-16 border-4 border-white/80 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <div className="w-8 h-8 bg-gradient-to-br from-white to-white/70 rounded shadow-lg"></div>
          </div>
        ),
        gradient: "bg-gradient-to-br from-teal-400 via-cyan-500 to-cyan-600",
      },
      {
        title: "DSA (Concept Revision)",
        description:
          "Suitable for people looking to study concepts for similar kind of problems",
        modules: "40+",
        chapters: "130+",
        problems: "130+",
        icon: (
          <div className="w-16 h-16 border-4 border-white/80 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="w-8 h-8 bg-gradient-to-br from-white to-white/70 rounded-full shadow-lg"></div>
          </div>
        ),
        gradient: "bg-gradient-to-br from-teal-400 via-cyan-500 to-cyan-600",
      },
      {
        title: "DSA (Quick Revision)",
        description:
          "Suitable to bump up your last moment confidence with quick revision",
        modules: "10+",
        chapters: "70+",
        problems: "70+",
        icon: (
          <div className="w-16 h-16 border-4 border-white/80 rounded flex items-center justify-center backdrop-blur-sm">
            <div className="space-y-1">
              <div className="w-8 h-2 bg-gradient-to-r from-white to-white/70 rounded shadow-lg"></div>
              <div className="w-8 h-2 bg-gradient-to-r from-white to-white/70 rounded shadow-lg"></div>
              <div className="w-8 h-2 bg-gradient-to-r from-white to-white/70 rounded shadow-lg"></div>
            </div>
          </div>
        ),
        gradient: "bg-gradient-to-br from-teal-400 via-cyan-500 to-cyan-600",
      },
    ],
    Premium: [
      {
        title: "Premium",
        description:
          "Set of 1000+ problems with company tags and difficulty to help you prepare end to end",
        problems: "1000+",
        icon: (
          <svg
            className="w-16 h-16 drop-shadow-2xl"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
            <path d="M8 11h8v2H8v-2zm0 4h8v2H8v-2zm0-8h8v2H8V7z" />
          </svg>
        ),
        gradient: "bg-gradient-to-br from-orange-500 via-red-500 to-red-600",
      },
    ],
    "Core Subjects": [
      {
        title: "Computer Networks",
        description:
          "Student friendly structured course, helping individual to prepare and assess knowledge post module completion",
        modules: "10+",
        chapters: "50+",
        icon: (
          <svg
            className="w-16 h-16 drop-shadow-2xl"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            <circle cx="12" cy="12" r="3" />
            <circle cx="6" cy="12" r="2" />
            <circle cx="18" cy="12" r="2" />
          </svg>
        ),
        gradient:
          "bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700",
      },
      {
        title: "DBMS",
        description:
          "Student friendly structured course, helping individual to prepare and assess knowledge post module completion",
        modules: "14+",
        chapters: "108+",
        icon: (
          <svg
            className="w-16 h-16 drop-shadow-2xl"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
            <path d="M4 14v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
          </svg>
        ),
        gradient:
          "bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700",
      },
      {
        title: "Operating System",
        description:
          "Student friendly structured course, helping individual to prepare and assess knowledge post module completion",
        modules: "9+",
        chapters: "61+",
        icon: (
          <svg
            className="w-16 h-16 drop-shadow-2xl"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v1h12v-1l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z" />
            <circle cx="12" cy="10" r="3" />
            <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        ),
        gradient:
          "bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700",
      },
    ],
    "System Design": [
      {
        title: "Low Level Design (LLD)",
        description: "Level up LLD with video content on each concepts",
        topics: "13+",
        problems: "46+",
        icon: (
          <svg
            className="w-16 h-16 drop-shadow-2xl"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
            <rect
              x="8"
              y="8"
              width="8"
              height="8"
              rx="1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="16" r="1" />
          </svg>
        ),
        gradient:
          "bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-700",
      },
      {
        title: "OOPS",
        description: "Bridging all gaps to make you system design ready!",
        topics: "6+",
        problems: "52+",
        icon: (
          <svg
            className="w-16 h-16 drop-shadow-2xl"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7l5-5V4c0-1.1-.9-2-2-2zM18 15h-4v4l4-4z" />
            <path d="M8 6h8v2H8V6zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
          </svg>
        ),
        gradient:
          "bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-700",
      },
    ],
    Aptitude: [
      {
        title: "Logical Reasoning",
        description:
          "Widely thought of college grads/professionals covering basic to advance topics",
        topics: "13+",
        problems: "720+",
        icon: (
          <svg
            className="w-16 h-16 drop-shadow-2xl"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            <circle
              cx="12"
              cy="8"
              r="2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M10 12h4v4h-4z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        ),
        gradient: "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600",
      },
      {
        title: "Mock Test",
        description:
          "Practice tests to evaluate your preparation and performance",
        topics: "3+",
        problems: "1500+",
        icon: (
          <svg
            className="w-16 h-16 drop-shadow-2xl"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            <path d="M16 10h2v2h-2v-2zm0 4h2v2h-2v-2z" />
          </svg>
        ),
        gradient: "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600",
      },
      {
        title: "Quantitative Aptitude",
        description:
          "Widely thought of college grads/professionals covering basic to advance topics",
        topics: "25+",
        problems: "1500+",
        icon: (
          <svg
            className="w-16 h-16 drop-shadow-2xl"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
            <path d="M8 10h8v2H8v-2zm0 4h8v2H8v-2z" />
            <circle cx="12" cy="8" r="1" />
            <circle cx="12" cy="16" r="1" />
          </svg>
        ),
        gradient: "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600",
      },
      {
        title: "Verbal Ability",
        description:
          "Widely thought of college grads/professionals covering basic to advance topics",
        topics: "8+",
        problems: "480+",
        icon: (
          <svg
            className="w-16 h-16 drop-shadow-2xl"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            <path d="M8 8h8v2H8V8zm0 4h8v2H8v-2z" />
            <circle cx="16" cy="8" r="1" />
          </svg>
        ),
        gradient: "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600",
      },
    ],
  };

  const tabs = [
    { id: "DSA", label: "DSA" },
    { id: "Premium", label: "Premium", isNew: true },
    { id: "Core Subjects", label: "Core Subjects" },
    { id: "System Design", label: "System Design", isNew: true },
    { id: "Aptitude", label: "Aptitude", isNew: true },
  ];

  const testimonials = [
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face&auto=format",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] opacity-30"></div>

      <section className="relative py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mt-2 mb-6 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700/30">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 4).map((testimonial, index) => (
                  <img
                    key={index}
                    src={testimonial.image}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-gray-800 object-cover"
                  />
                ))}
              </div>
              <span className="text-gray-300 text-sm">
                +1M developers trust our platform
              </span>
            </div>
          </div>
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Crack Interviews
              </span>{" "}
              💪
            </h2>
          </div>

          <div className="flex justify-center mb-16">
            <div className="bg-gradient-to-r from-white/[0.08] via-white/[0.05] to-white/[0.08] backdrop-blur-xl rounded-2xl p-3 flex space-x-3 overflow-x-auto border border-white/[0.1] shadow-2xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-500 whitespace-nowrap relative overflow-hidden backdrop-blur-sm ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-orange-500/30 via-orange-600/30 to-red-500/30 text-white shadow-2xl shadow-orange-500/30 border border-orange-400/30"
                      : "text-gray-300 hover:text-white hover:bg-white/[0.05] border border-transparent hover:border-white/[0.1]"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                  <span className="relative z-10">{tab.label}</span>
                  {tab.isNew && (
                    <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs px-2 py-1 rounded-full ml-2 shadow-lg">
                      NEW
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {tabData[activeTab].map((course, index) =>
              activeTab === "Premium" ? (
                <PremiumCard key={index} {...course} />
              ) : (
                <CourseCard key={index} {...course} />
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesSection;
