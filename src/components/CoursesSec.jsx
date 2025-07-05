import { useState } from "react";

const CourseCard = ({
  title,
  description,
  modules,
  chapters,
  problems,
  icon,
  gradient,
}) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
      <div className={`${gradient} p-8 text-white relative`}>
        <div className="space-y-4 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>{modules} Modules</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>{chapters} Chapters</span>
            </div>
            {problems && (
              <div className="flex items-center space-x-2 text-sm">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>{problems} Problems</span>
              </div>
            )}
          </div>

          <div className="text-6xl opacity-30 flex justify-center mt-8">
            {icon}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium transition-colors">
          View Syllabus
        </button>
      </div>
    </div>
  );
};

const PremiumCard = ({ title, description, problems, icon, gradient }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
      <div className={`${gradient} p-8 text-white relative`}>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="flex items-center space-x-2 text-sm mb-8">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <span>{problems} Problems</span>
        </div>

        <div className="text-6xl opacity-30 flex justify-center">{icon}</div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-colors">
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
        gradient: "bg-gradient-to-br from-teal-500 to-cyan-600",
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
        gradient: "bg-gradient-to-br from-teal-500 to-cyan-600",
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
        gradient: "bg-gradient-to-br from-teal-500 to-cyan-600",
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
        gradient: "bg-gradient-to-br from-orange-500 to-red-500",
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
        gradient: "bg-gradient-to-br from-blue-600 to-purple-600",
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
        gradient: "bg-gradient-to-br from-blue-600 to-purple-600",
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
        gradient: "bg-gradient-to-br from-blue-600 to-purple-600",
      },
    ],
    "System Design": [
      {
        title: "System Design Basics",
        description:
          "Learn the fundamentals of system design with real-world examples and case studies",
        modules: "12+",
        chapters: "80+",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            <rect x="6" y="10" width="12" height="8" rx="2" />
            <circle cx="9" cy="13" r="1" />
            <circle cx="15" cy="13" r="1" />
          </svg>
        ),
        gradient: "bg-gradient-to-br from-green-500 to-teal-600",
      },
      {
        title: "Distributed Systems",
        description:
          "Deep dive into distributed systems concepts and architectures",
        modules: "8+",
        chapters: "45+",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
            <circle cx="8" cy="12" r="2" />
            <circle cx="16" cy="12" r="2" />
            <circle cx="12" cy="8" r="2" />
          </svg>
        ),
        gradient: "bg-gradient-to-br from-green-500 to-teal-600",
      },
    ],
    Aptitude: [
      {
        title: "Quantitative Aptitude",
        description:
          "Master mathematical concepts and problem-solving techniques for competitive exams",
        modules: "15+",
        chapters: "120+",
        problems: "500+",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            <circle cx="12" cy="12" r="1" />
          </svg>
        ),
        gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      },
      {
        title: "Logical Reasoning",
        description:
          "Develop critical thinking and logical problem-solving skills",
        modules: "10+",
        chapters: "75+",
        problems: "300+",
        icon: (
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
          </svg>
        ),
        gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
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
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Everything You Need to{" "}
            <span className="text-orange-500">Crack Interviews</span> 💪
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-2 flex space-x-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-orange-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
                {tab.isNew && (
                  <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full ml-1">
                    NEW
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
