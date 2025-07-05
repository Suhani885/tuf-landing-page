import { Check, X } from "lucide-react";

const PricingPlans = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-6" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 mt-5">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Affordable Plans for Every Learner
          </h1>
          <p className="text-lg text-gray-300">
            Choose the perfect plan to kickstart your coding journey!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 group flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                🏃
              </span>
              <h2 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                Sprint Plan
              </h2>
            </div>

            <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300 text-sm">
              Perfect for beginners starting their coding journey.
            </p>

            <div className="mb-4 flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-400 text-sm">Original</span>
                <span className="text-gray-500 line-through text-sm">
                  ₹ 8999
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gray-400 text-sm">Regular</span>
                <span className="text-white font-semibold">₹ 6599</span>
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs group-hover:bg-green-500 transition-colors duration-300">
                  27% OFF
                </span>
              </div>

              <div className="bg-gray-700 rounded-lg p-3 mb-3 group-hover:bg-gray-600 transition-colors duration-300">
                <div className="text-green-400 text-xl font-bold mb-1 group-hover:text-green-300 transition-colors duration-300">
                  Offer Price: ₹ 4289.35
                </div>
                <div className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm">
                  Coupon: <span className="font-semibold">PAYDAY</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                📅 Validity: 12 Months
              </span>
            </div>

            <div className="mb-4 flex-grow">
              <h3 className="text-white font-semibold mb-3 group-hover:text-orange-300 transition-colors duration-300 text-sm">
                What's included
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <Check className="text-green-400 w-4 h-4" />
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm">
                    All features
                  </span>
                </div>
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <Check className="text-green-400 w-4 h-4" />
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm">
                    Only DSA, Core & Aptitude
                  </span>
                </div>
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <X className="text-red-400 w-4 h-4" />
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                    AI Doubt Support
                  </span>
                </div>
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <X className="text-red-400 w-4 h-4" />
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                    Biweekly Sessions
                  </span>
                </div>
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <X className="text-red-400 w-4 h-4" />
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                    Code Review
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full bg-transparent border-2 border-orange-500 text-orange-500 py-2 rounded-lg font-semibold hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 mt-auto text-sm">
              Buy Now @ ₹ 4289.35
            </button>
          </div>

          <div className="bg-white rounded-xl p-5 relative transform scale-105 shadow-xl hover:scale-110 hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 group flex flex-col">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 group-hover:scale-110 transition-transform duration-300">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-orange-400 transition-colors duration-300">
                Lifetime Validity
              </span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                🚀
              </span>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                Pinnacle Plan
              </h2>
            </div>

            <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300 text-sm">
              Go all in — with expert support & lifetime access.
            </p>

            <div className="mb-4 flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-500 text-sm">Original</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹ 11999
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gray-500 text-sm">Regular</span>
                <span className="text-gray-900 font-semibold">₹ 9120</span>
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs group-hover:bg-green-500 transition-colors duration-300">
                  24% OFF
                </span>
              </div>

              <div className="bg-gray-100 rounded-lg p-3 mb-3 group-hover:bg-gray-50 transition-colors duration-300">
                <div className="text-green-600 text-xl font-bold mb-1 group-hover:text-green-500 transition-colors duration-300">
                  Offer Price: ₹ 5928
                </div>
                <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm">
                  Coupon: <span className="font-semibold">PAYDAY</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300 text-sm">
                📅 Validity: Lifetime
              </span>
            </div>

            <div className="mb-4 flex-grow">
              <h3 className="text-gray-900 font-semibold mb-3 group-hover:text-orange-600 transition-colors duration-300 text-sm">
                What's included
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <Check className="text-green-500 w-4 h-4" />
                  <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm">
                    All features
                  </span>
                </div>
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <Check className="text-green-500 w-4 h-4" />
                  <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm">
                    DSA, Core, Design & Aptitude
                  </span>
                </div>
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <Check className="text-green-500 w-4 h-4" />
                  <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm">
                    AI Doubt Support
                  </span>
                </div>
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <Check className="text-green-500 w-4 h-4" />
                  <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm">
                    Biweekly Sessions
                  </span>
                </div>
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <Check className="text-green-500 w-4 h-4" />
                  <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm">
                    Code Review
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 mt-auto text-sm">
              Buy Now @ ₹ 5928
            </button>
          </div>

          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 group flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                💼
              </span>
              <h2 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                Enterprise Plan
              </h2>
            </div>

            <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300 text-sm">
              Perfect for a group of people (minimum 30) who are looking for an
              extra discount.
            </p>

            <div className="mb-6 flex-grow">
              <h3 className="text-white font-semibold mb-3 group-hover:text-orange-300 transition-colors duration-300 text-sm">
                What's included
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <Check className="text-green-400 w-4 h-4" />
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm">
                    All features of Pinnacle
                  </span>
                </div>
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <Check className="text-green-400 w-4 h-4" />
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm">
                    Performance Dashboard
                  </span>
                </div>
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <Check className="text-green-400 w-4 h-4" />
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm">
                    Centralized Billing & Licensing
                  </span>
                </div>
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <Check className="text-green-400 w-4 h-4" />
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm">
                    Custom Curriculum
                  </span>
                </div>
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <Check className="text-green-400 w-4 h-4" />
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm">
                    Exclusive Webinars & Industry Events
                  </span>
                </div>
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <Check className="text-green-400 w-4 h-4" />
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm">
                    Batch Enrollment & Role Access
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 mt-auto text-sm">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
