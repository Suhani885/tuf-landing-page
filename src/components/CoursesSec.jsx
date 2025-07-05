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
    <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 border border-gray-700/50 hover:border-orange-500/30">
      <div className={`${gradient} p-8 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="space-y-4 relative z-10">
          <div className="space-y-2">
            {topics && (
              <div className="flex items-center space-x-2 text-sm font-medium">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span>{topics} Topics</span>
              </div>
            )}
            {modules && (
              <div className="flex items-center space-x-2 text-sm font-medium">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span>{modules} Modules</span>
              </div>
            )}
            {chapters && (
              <div className="flex items-center space-x-2 text-sm font-medium">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span>{chapters} Chapters</span>
              </div>
            )}
            {problems && (
              <div className="flex items-center space-x-2 text-sm font-medium">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span>{problems} Problems</span>
              </div>
            )}
          </div>

          <div className="text-6xl opacity-30 group-hover:opacity-50 flex justify-center mt-8 transition-all duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4 bg-gradient-to-br from-gray-800 to-gray-900">
        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        <button className="w-full bg-gray-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          View Syllabus
        </button>
      </div>
    </div>
  );
};

const PremiumCard = ({ title, description, problems, icon, gradient }) => {
  return (
    <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 border border-gray-700/50 hover:border-orange-500/50">
      <div className={`${gradient} p-8 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <h3 className="text-2xl font-bold mb-4 relative z-10">{title}</h3>
        <div className="flex items-center space-x-2 text-sm mb-8 relative z-10 font-medium">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          <span>{problems} Problems</span>
        </div>

        <div className="text-6xl opacity-30 group-hover:opacity-50 flex justify-center transition-all duration-300 group-hover:scale-110 relative z-10">
          {icon}
        </div>
      </div>

      <div className="p-6 space-y-4 bg-gradient-to-br from-gray-800 to-gray-900">
        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          View Syllabus
        </button>
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
          <div className="w-16 h-16 border-4 border-white rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded"></div>
          </div>
        ),
        gradient: "bg-gradient-to-br from-teal-500 via-cyan-500 to-cyan-600",
      },
      {
        title: "DSA (Concept Revision)",
        description:
          "Suitable for people looking to study concepts for similar kind of problems",
        modules: "40+",
        chapters: "130+",
        problems: "130+",
        icon: (
          <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
        ),
        gradient: "bg-gradient-to-br from-teal-500 via-cyan-500 to-cyan-600",
      },
      {
        title: "DSA (Quick Revision)",
        description:
          "Suitable to bump up your last moment confidence with quick revision",
        modules: "10+",
        chapters: "70+",
        problems: "70+",
        icon: (
          <div className="w-16 h-16 border-4 border-white rounded flex items-center justify-center">
            <div className="space-y-1">
              <div className="w-8 h-2 bg-white rounded"></div>
              <div className="w-8 h-2 bg-white rounded"></div>
              <div className="w-8 h-2 bg-white rounded"></div>
            </div>
          </div>
        ),
        gradient: "bg-gradient-to-br from-teal-500 via-cyan-500 to-cyan-600",
      },
    ],
    Premium: [
      {
        title: "Premium",
        description:
          "Set of 1000+ problems with company tags and difficulty to help you prepare end to end",
        problems: "1000+",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
            <path d="M8 11h8v2H8v-2zm0 4h8v2H8v-2zm0-8h8v2H8V7z" />
          </svg>
        ),
        gradient: "bg-gradient-to-br from-orange-500 via-orange-600 to-red-500",
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
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            <circle cx="12" cy="12" r="3" />
            <circle cx="6" cy="12" r="2" />
            <circle cx="18" cy="12" r="2" />
          </svg>
        ),
        gradient:
          "bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700",
      },
      {
        title: "DBMS",
        description:
          "Student friendly structured course, helping individual to prepare and assess knowledge post module completion",
        modules: "14+",
        chapters: "108+",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
            <path d="M4 14v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
          </svg>
        ),
        gradient:
          "bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700",
      },
      {
        title: "Operating System",
        description:
          "Student friendly structured course, helping individual to prepare and assess knowledge post module completion",
        modules: "9+",
        chapters: "61+",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v1h12v-1l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z" />
            <circle cx="12" cy="10" r="3" />
            <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        ),
        gradient:
          "bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700",
      },
    ],
    "System Design": [
      {
        title: "Low Level Design (LLD)",
        description: "Level up LLD with video content on each concepts",
        topics: "13+",
        problems: "46+",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
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
          "bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700",
      },
      {
        title: "OOPS",
        description: "Bridging all gaps to make you system design ready!",
        topics: "6+",
        problems: "52+",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7l5-5V4c0-1.1-.9-2-2-2zM18 15h-4v4l4-4z" />
            <path d="M8 6h8v2H8V6zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
          </svg>
        ),
        gradient:
          "bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700",
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
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
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
        gradient: "bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600",
      },
      {
        title: "Mock Test",
        description:
          "Practice tests to evaluate your preparation and performance",
        topics: "3+",
        problems: "1500+",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            <path d="M16 10h2v2h-2v-2zm0 4h2v2h-2v-2z" />
          </svg>
        ),
        gradient: "bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600",
      },
      {
        title: "Quantitative Aptitude",
        description:
          "Widely thought of college grads/professionals covering basic to advance topics",
        topics: "25+",
        problems: "1500+",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
            <path d="M8 10h8v2H8v-2zm0 4h8v2H8v-2z" />
            <circle cx="12" cy="8" r="1" />
            <circle cx="12" cy="16" r="1" />
          </svg>
        ),
        gradient: "bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600",
      },
      {
        title: "Verbal Ability",
        description:
          "Widely thought of college grads/professionals covering basic to advance topics",
        topics: "8+",
        problems: "480+",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            <path d="M8 8h8v2H8V8zm0 4h8v2H8v-2z" />
            <circle cx="16" cy="8" r="1" />
          </svg>
        ),
        gradient: "bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600",
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

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Crack Interviews
            </span>{" "}
            💪
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 flex space-x-2 overflow-x-auto border border-gray-700/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap relative overflow-hidden ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                {tab.label}
                {tab.isNew && (
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs px-2 py-1 rounded-full ml-2">
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
  );
};

export default CoursesSection;
