import { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Kiran Patil",
      role: "Software Engineer",
      company: "Siemens",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
      text: "The DSA sheet helped me crack interviews at top tech companies. The structured approach and detailed explanations made all the difference.",
      rating: 5,
    },
    {
      name: "Avish Mittal",
      role: "Senior Developer",
      company: "Adobe",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
      text: "System design concepts became crystal clear. I went from struggling with scalability to designing robust architectures confidently.",
      rating: 5,
    },
    {
      name: "Aniket Sharma",
      role: "Full Stack Developer",
      company: "Netflix",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face&auto=format",
      text: "Amazing platform! The one subscription model is brilliant. I upskilled myself in multiple domains without breaking the bank.",
      rating: 5,
    },
    {
      name: "Madhab Kafle",
      role: "Backend Engineer",
      company: "Tata Consultancy Services",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face&auto=format",
      text: "The interview preparation was exceptional. Real-world problems, detailed solutions, and expert guidance - everything I needed.",
      rating: 5,
    },
    {
      name: "Athang Kulkarni",
      role: "DevOps Engineer",
      company: "Walmart",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format",
      text: "Transformed my career completely. From basics to advanced concepts, the learning path is perfectly structured for working professionals.",
      rating: 5,
    },
    {
      name: "Gaurav Poosarla",
      role: "Tech Lead",
      company: "Samsung",
      image:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face&auto=format",
      text: "The quality of content is outstanding. Every concept is explained with practical examples and real industry scenarios.",
      rating: 5,
    },
    {
      name: "Prajwal Shah",
      role: "Software Architect",
      company: "Deutsche Bank",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format",
      text: "Best investment I made for my career. The comprehensive curriculum and expert mentorship accelerated my growth exponentially.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Frontend Developer",
      company: "Microsoft",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face&auto=format",
      text: "The practical approach to learning algorithms and data structures is phenomenal. I gained confidence to tackle any coding challenge.",
      rating: 5,
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const TestimonialCard = ({ testimonial }) => (
    <div className="group flex-shrink-0 w-96 mx-4 p-6 bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-black/40 backdrop-blur-xl rounded-3xl border border-gray-700/30 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className="text-orange-400 fill-orange-400"
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-5">
          <div className="relative">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover ring-2 ring-orange-500/40 group-hover:ring-orange-400 transition-all duration-300"
            />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <Quote size={14} className="text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-white text-lg group-hover:text-orange-100 transition-colors">
              {testimonial.name}
            </h4>
            <p className="text-gray-400 text-sm">{testimonial.role}</p>
            <p className="text-orange-400 text-sm font-semibold">
              {testimonial.company}
            </p>
          </div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors">
          {testimonial.text}
        </p>

        <div className="flex items-center justify-between">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-xs text-gray-500">Verified Success</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-8 bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent)] opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.05),transparent)] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 mb-10 relative z-10">
        <div className="text-center">
          <h2 className="text-5xl lg:text-6xl font-black leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Advance Your Career
            </span>
            <br />
            {/* <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent relative">
              CP Sheets
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 blur-xl -z-10"></div>
            </span> */}
          </h2>

          <div className="space-y-2">
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Join the{" "}
              <span className="text-orange-400 font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text">
                Top 1%
              </span>{" "}
              Today
            </p>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Transform your coding journey with our premium platform trusted by
              1M+ developers worldwide
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-gray-950 via-gray-950/90 to-transparent z-20"></div>
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-gray-950 via-gray-950/90 to-transparent z-20"></div>

        <div
          className="flex space-x-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`flex animate-marquee ${isPaused ? "paused" : ""}`}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="text-center mt-12 relative z-10">
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
      </div> */}

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee.paused {
          animation-play-state: paused;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
