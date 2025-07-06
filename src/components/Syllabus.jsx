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
} from "lucide-react";

const SyllabusFeatures = () => {
  const courses = [
    {
      id: 1,
      title: "Master DSA Fundamentals",
      description:
        "Build a rock-solid foundation with essential data structures and algorithms",
      icon: <Brain className="w-5 h-5" />,
      topics: [
        "Arrays & Strings",
        "Linked Lists",
        "Stacks & Queues",
        "Trees & Graphs",
        "Dynamic Programming",
      ],
    },
    {
      id: 2,
      title: "System Design Mastery",
      description:
        "Design scalable systems like the pros with real-world case studies",
      icon: <Settings className="w-5 h-5" />,
      topics: [
        "Scalability Patterns",
        "Database Design",
        "Microservices",
        "Load Balancing",
        "Caching Strategies",
      ],
    },
    {
      id: 3,
      title: "Core CS Concepts",
      description:
        "Master computer science fundamentals that matter in interviews",
      icon: <Code className="w-5 h-5" />,
      topics: [
        "Operating Systems",
        "Networks",
        "DBMS",
        "Object-Oriented Design",
        "Concurrency",
      ],
    },
    {
      id: 4,
      title: "Interview Excellence",
      description:
        "Ace technical interviews with confidence and proven strategies",
      icon: <Trophy className="w-5 h-5" />,
      topics: [
        "Mock Interviews",
        "Behavioral Questions",
        "Coding Challenges",
        "System Design Rounds",
        "Salary Negotiation",
      ],
    },
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Learning",
      description:
        "Get personalized recommendations and instant doubt resolution with our advanced AI system",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Live Mentorship",
      description:
        "Weekly 1-on-1 sessions with industry experts from top tech companies",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Practice Platform",
      description:
        "500+ curated problems with detailed solutions and performance analytics",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Resources",
      description:
        "Video lectures, interactive coding environment, and downloadable study materials",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full mb-8 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
            <span className="text-sm text-zinc-400 font-medium">
              Complete Learning Path
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white tracking-tight">
            Master Your Tech Journey
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            From fundamentals to advanced concepts, our comprehensive curriculum
            is designed to transform you into a skilled developer ready for top
            tech companies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group relative bg-zinc-900 bg-opacity-60 border border-zinc-800 rounded-xl p-8 hover:border-orange-500 transition-all duration-300 hover:bg-zinc-900 hover:bg-opacity-80 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-zinc-800 rounded-lg border border-zinc-700 text-zinc-400 group-hover:text-orange-400 transition-colors duration-300">
                  {course.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-50 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {course.topics.map((topic, topicIndex) => (
                  <div
                    key={topicIndex}
                    className="flex items-center gap-3 text-zinc-400 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>

              <button className="group/btn flex items-center gap-2 text-zinc-400 hover:text-orange-400 text-sm font-medium transition-colors duration-200">
                <Play className="w-4 h-4" />
                <span>Start Learning</span>
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">
              Why Choose Our Platform
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Experience the future of tech education with cutting-edge features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-zinc-900 bg-opacity-60 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-orange-500 bg-opacity-5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-green-400 mb-4 group-hover:text-white ">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-white ">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed hover:text-white">
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

export default SyllabusFeatures;
