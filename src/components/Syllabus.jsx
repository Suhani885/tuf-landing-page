import {
  BookOpen,
  Code,
  Target,
  Users,
  ChevronRight,
  Play,
  CheckCircle,
  Trophy,
  Brain,
  Zap,
  Settings,
  Terminal,
  Server,
  Copy,
  Video,
  Clock,
  BookMarked,
  Monitor,
} from "lucide-react";
import { useState } from "react";

const Syllabus = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Master DSA Fundamentals",
      description:
        "Build a rock-solid foundation with essential data structures and algorithms",
      icon: <Brain className="w-4 h-4" />,
      topics: [
        "Arrays & Strings",
        "Linked Lists",
        "Stacks & Queues",
        "Trees & Graphs",
        "Dynamic Programming",
      ],
      codeExample: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}`,
      complexity: "O(log n)",
    },
    {
      id: 2,
      title: "Interview Excellence",
      description:
        "Ace technical interviews with confidence and proven strategies",
      icon: <Trophy className="w-4 h-4" />,
      topics: [
        "Mock Interviews",
        "Behavioral Questions",
        "Coding Challenges",
        "System Design Rounds",
        "Salary Negotiation",
      ],
      interviewStats: {
        problems: "500+",
        companies: "50+",
        successRate: "94%",
      },

      interviewImage: true,
    },
    {
      id: 3,
      title: "System Design Mastery",
      description:
        "Design scalable systems like the pros with real-world case studies",
      icon: <Settings className="w-4 h-4" />,
      topics: [
        "Scalability Patterns",
        "Database Design",
        "Microservices",
        "Load Balancing",
        "Caching Strategies",
      ],
      architecture: {
        title: "Distributed System Architecture",
        components: [
          "Load Balancer",
          "API Gateway",
          "Microservices",
          "Database Cluster",
          "API Gateway",
          "Microservices",
          "Load Balancer",
          "API Gateway",
        ],
      },
    },
    {
      id: 4,
      title: "Core CS Concepts",
      description:
        "Master computer science fundamentals that matter in interviews",
      icon: <Code className="w-4 h-4" />,
      topics: [
        "Operating Systems",
        "Networks",
        "DBMS",
        "Object-Oriented Design",
        "Concurrency",
      ],
      lectureImage: true,
      videoLectures: {
        totalHours: "120+",
        modules: "25",
        completion: "89%",
      },
    },
  ];

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "AI-Powered Learning",
      description:
        "Get personalized recommendations and instant doubt resolution",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Live Mentorship",
      description: "Weekly 1-on-1 sessions with industry experts",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Practice Platform",
      description: "500+ curated problems with detailed solutions",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Comprehensive Resources",
      description: "Video lectures and interactive coding environment",
    },
  ];

  const handleCopyCode = (codeContent) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(codeContent);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500 opacity-5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full mb-6 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-zinc-400 font-medium">
              Complete Learning Path
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-white tracking-tight">
            Master Your Tech Journey
          </h1>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            From fundamentals to advanced concepts, our comprehensive curriculum
            transforms you into a skilled developer ready for top tech
            companies.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-16">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`group relative bg-zinc-900 bg-opacity-60 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 hover:bg-zinc-900 hover:bg-opacity-80 backdrop-blur-sm cursor-pointer transform hover:scale-[1.02] h-fit ${
                activeCard === course.id
                  ? "border-orange-500 bg-zinc-900 bg-opacity-80"
                  : ""
              }`}
              onClick={() =>
                setActiveCard(activeCard === course.id ? null : course.id)
              }
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-zinc-800 rounded-lg border border-zinc-700 text-zinc-400 group-hover:text-orange-400 transition-colors duration-300">
                  {course.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-50 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {course.topics.map((topic, topicIndex) => (
                  <div
                    key={topicIndex}
                    className="flex items-center gap-3 text-zinc-400 text-sm"
                  >
                    <CheckCircle className="w-3 h-3 text-orange-400 flex-shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>

              {course.codeExample && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3 h-3 text-orange-400" />
                      <span className="text-xs text-zinc-400">main.js</span>
                      <span className="text-xs text-white bg-orange-500 bg-opacity-20 px-2 py-1 rounded">
                        {course.complexity}
                      </span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyCode(course.codeExample);
                      }}
                      className="p-1 hover:bg-zinc-800 rounded transition-colors"
                    >
                      <Copy className="w-3 h-3 text-zinc-400 hover:text-orange-400" />
                    </button>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 overflow-x-auto">
                    <pre className="text-xs text-zinc-300 font-mono whitespace-pre-wrap">
                      {course.codeExample}
                    </pre>
                  </div>
                </div>
              )}

              {course.practiceCode && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Code className="w-3 h-3 text-orange-400" />
                      <span className="text-xs text-zinc-400">
                        interview.js
                      </span>
                      <span className="text-xs text-white bg-green-500 bg-opacity-20 px-2 py-1 rounded">
                        O(n)
                      </span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyCode(course.practiceCode);
                      }}
                      className="p-1 hover:bg-zinc-800 rounded transition-colors"
                    >
                      <Copy className="w-3 h-3 text-zinc-400 hover:text-orange-400" />
                    </button>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 overflow-x-auto">
                    <pre className="text-xs text-zinc-300 font-mono whitespace-pre-wrap">
                      {course.practiceCode}
                    </pre>
                  </div>
                </div>
              )}

              {course.conceptCode && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <BookMarked className="w-3 h-3 text-orange-400" />
                      <span className="text-xs text-zinc-400">concepts.js</span>
                      <span className="text-xs text-white bg-blue-500 bg-opacity-20 px-2 py-1 rounded">
                        OOP
                      </span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyCode(course.conceptCode);
                      }}
                      className="p-1 hover:bg-zinc-800 rounded transition-colors"
                    >
                      <Copy className="w-3 h-3 text-zinc-400 hover:text-orange-400" />
                    </button>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 overflow-x-auto">
                    <pre className="text-xs text-zinc-300 font-mono whitespace-pre-wrap">
                      {course.conceptCode}
                    </pre>
                  </div>
                </div>
              )}

              {course.interviewImage && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Video className="w-3 h-3 text-orange-400" />
                    <span className="text-xs text-zinc-400">
                      Mock Interview Session
                    </span>
                  </div>
                  <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 h-32">
                    <div className="absolute inset-0 opacity-20"></div>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="bg-orange-500 bg-opacity-20 backdrop-blur-sm rounded-full p-3">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 text-xs text-zinc-300">
                      Interview Practice
                    </div>
                  </div>
                </div>
              )}

              {course.lectureImage && (
                <div className="mb-4">
                  {/* <div className="flex items-center gap-2 mb-2">
                    <Monitor className="w-3 h-3 text-orange-400" />
                    <span className="text-xs text-zinc-400">
                      Interactive Lectures
                    </span>
                  </div> */}
                  <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-blue-900 to-zinc-900 h-32">
                    <div className="absolute inset-0  opacity-20"></div>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="bg-orange-500 bg-opacity-20 backdrop-blur-sm rounded-full p-3">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 text-xs text-zinc-300">
                      Take Demo Lecture
                    </div>
                  </div>
                </div>
              )}

              {course.interviewStats && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-3 h-3 text-orange-400" />
                    <span className="text-xs text-zinc-400">
                      Success Metrics
                    </span>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-zinc-800 rounded-md p-2">
                        <div className="text-sm font-bold text-orange-400">
                          {course.interviewStats.problems}
                        </div>
                        <div className="text-xs text-zinc-400">Problems</div>
                      </div>
                      <div className="bg-zinc-800 rounded-md p-2">
                        <div className="text-sm font-bold text-orange-400">
                          {course.interviewStats.companies}
                        </div>
                        <div className="text-xs text-zinc-400">Companies</div>
                      </div>
                      <div className="bg-zinc-800 rounded-md p-2">
                        <div className="text-sm font-bold text-orange-400">
                          {course.interviewStats.successRate}
                        </div>
                        <div className="text-xs text-zinc-400">Success</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {course.videoLectures && (
                <div className="mb-4">
                  {/* <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-3 h-3 text-orange-400" />
                    <span className="text-xs text-zinc-400">
                      Course Progress
                    </span>
                  </div> */}
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-zinc-800 rounded-md p-2">
                        <div className="text-sm font-bold text-orange-400">
                          {course.videoLectures.totalHours}
                        </div>
                        <div className="text-xs text-zinc-400">Hours</div>
                      </div>
                      <div className="bg-zinc-800 rounded-md p-2">
                        <div className="text-sm font-bold text-orange-400">
                          {course.videoLectures.modules}
                        </div>
                        <div className="text-xs text-zinc-400">Modules</div>
                      </div>
                      <div className="bg-zinc-800 rounded-md p-2">
                        <div className="text-sm font-bold text-orange-400">
                          {course.videoLectures.completion}
                        </div>
                        <div className="text-xs text-zinc-400">Complete</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {course.architecture && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Server className="w-3 h-3 text-orange-400" />
                    <span className="text-xs text-zinc-400">
                      {course.architecture.title}
                    </span>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
                    <div className="grid grid-cols-2 gap-2">
                      {course.architecture.components.map((component, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2 bg-zinc-800 rounded-md border border-zinc-700"
                        >
                          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-zinc-300">
                            {component}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {copiedCode && (
                <div className="text-xs text-green-400 mb-2">
                  Code copied to clipboard!
                </div>
              )}

              <button
                className="group/btn flex items-center gap-2 text-zinc-400 hover:text-orange-400 text-sm font-medium transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <Play className="w-3 h-3" />
                <span>Start Learning</span>
                <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white tracking-tight">
              Why Choose Our Platform
            </h2>
            <p className="text-base text-zinc-400 max-w-2xl mx-auto">
              Experience the future of tech education with cutting-edge features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-zinc-900 bg-opacity-60 border border-zinc-800 rounded-xl p-4 hover:border-orange-500 transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-orange-500 bg-opacity-5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-green-400 mb-3 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 text-sm group-hover:text-white leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
