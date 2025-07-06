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
    <div className="group relative transform transition-all duration-700 hover:scale-105">
      <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/30 via-purple-500/30 to-cyan-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

      <div className="relative h-full bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/[0.15] hover:border-white/[0.3] transition-all duration-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-xl ${gradient} p-2 shadow-lg`}>
                <div className="w-full h-full bg-white/20 rounded-lg flex items-center justify-center">
                  {icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-500">
                  {title}
                </h3>
                <div className="flex items-center space-x-4 text-xs text-gray-400 mt-1">
                  {topics && <span>{topics} Topics</span>}
                  {modules && <span>{modules} Modules</span>}
                  {chapters && <span>{chapters} Chapters</span>}
                  {problems && <span>{problems} Problems</span>}
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-8 group-hover:text-gray-200 transition-colors duration-500">
            {description}
          </p>

          <div className="flex space-x-3">
            <button className="flex-1 bg-gradient-to-r from-orange-500/20 via-orange-600/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 hover:border-orange-400/60 text-white py-3 px-6 rounded-xl font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
              <span className="relative z-10">Start Learning</span>
            </button>
            <button className="px-4 py-3 bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] rounded-xl text-gray-300 hover:text-white transition-all duration-500 transform hover:scale-105">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PremiumCard = ({ title, description, problems, icon, gradient }) => {
  return (
    <div className="group relative transform transition-all duration-700 hover:scale-105">
      <div className="absolute -inset-1 bg-gradient-to-br from-orange-400/40 via-red-500/40 to-orange-600/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

      <div className="relative h-full bg-gradient-to-br from-white/[0.15] via-white/[0.12] to-white/[0.08] backdrop-blur-xl rounded-2xl border border-orange-400/[0.3] hover:border-orange-400/[0.5] transition-all duration-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.08] via-transparent to-red-500/[0.08] opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

        <div className="relative p-8">
          <div className="absolute top-4 right-4">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
              PREMIUM
            </div>
          </div>

          <div className="flex items-center space-x-3 mb-6">
            <div className={`w-12 h-12 rounded-xl ${gradient} p-2 shadow-lg`}>
              <div className="w-full h-full bg-white/20 rounded-lg flex items-center justify-center">
                {icon}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-500">
                {title}
              </h3>
              <div className="flex items-center space-x-2 text-xs text-gray-400 mt-1">
                <span>{problems} Problems</span>
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-8 group-hover:text-gray-200 transition-colors duration-500">
            {description}
          </p>

          <div className="flex space-x-3">
            <button className="flex-1 bg-gradient-to-r from-orange-500/30 via-orange-600/30 to-red-500/30 backdrop-blur-sm border border-orange-400/40 hover:border-orange-400/70 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/30 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
              <span className="relative z-10">Unlock Premium</span>
            </button>
            <button className="px-4 py-3 bg-orange-500/[0.1] border border-orange-400/[0.2] hover:border-orange-400/[0.4] rounded-xl text-orange-300 hover:text-orange-200 transition-all duration-500 transform hover:scale-105">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
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
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
          </svg>
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
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
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
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13 3L4 14h6v7l9-11h-6V3z" />
          </svg>
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
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
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
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
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
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
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
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v1h12v-1l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z" />
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
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
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
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7l5-5V4c0-1.1-.9-2-2-2zM18 15h-4v4l4-4z" />
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
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
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
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
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
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
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
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
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
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent)] opacity-40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,165,0,0.1),transparent)] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-full px-8 py-4 border border-gray-700/40 mb-8">
            <div className="flex -space-x-2">
              {testimonials.map((testimonial, index) => (
                <img
                  key={index}
                  src={testimonial.image}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-gray-700 object-cover"
                />
              ))}
            </div>
            <span className="text-gray-300 text-sm font-medium">
              +1M developers trust our platform
            </span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
            Master Your{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Tech Journey
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to crack interviews and advance your career
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-500 whitespace-nowrap relative overflow-hidden backdrop-blur-sm ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-orange-500/30 via-orange-600/30 to-red-500/30 text-white shadow-xl shadow-orange-500/20 border border-orange-400/30"
                  : "text-gray-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2]"
              }`}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>{tab.label}</span>
                {tab.isNew && (
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                    NEW
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tabData[activeTab].map((course, index) =>
            activeTab === "Premium" ? (
              <PremiumCard key={index} {...course} />
            ) : (
              <CourseCard key={index} {...course} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
