import { Check, X, Sparkles, Crown, Building2 } from "lucide-react";

const PricingPlans = () => {
  return (
    <div
      className="min-h-screen bg-black p-6 relative overflow-hidden"
      id="pricing"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(64,64,64,0.15),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(64,64,64,0.1),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-2 text-white">
            affordable plans
          </h1>
          <h2 className="text-5xl font-bold mb-6 text-orange-500">
            for everyone
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sprint Plan */}
          <div className="group relative">
            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/20 to-transparent rounded-2xl pointer-events-none"></div>

              <div className="mb-6 relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="text-orange-500 w-6 h-6" />
                  <h2 className="text-2xl font-bold text-white">Sprint Plan</h2>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Perfect for beginners starting their coding journey.
                </p>

                <div className="mb-4">
                  <div className="text-sm text-gray-500 line-through">
                    ₹8999
                  </div>
                  <div className="text-lg text-gray-400">
                    Regular: <span className="line-through">₹6599</span>
                    <span className="bg-green-600 text-white px-2 py-1 rounded ml-2 text-xs">
                      27% OFF
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-orange-500 mb-2">
                    ₹4289.35
                  </div>
                  <div className="text-sm text-green-400">
                    Use code:{" "}
                    <span className="font-mono bg-green-900/30 px-2 py-1 rounded">
                      PAYDAY
                    </span>
                  </div>
                </div>

                <div className="text-sm text-gray-400 mb-4">
                  <span className="inline-block bg-gray-800 px-3 py-1 rounded-full">
                    Validity: 12 Months
                  </span>
                </div>
              </div>

              <div className="mb-8 flex-grow">
                <h3 className="text-white font-semibold mb-4">
                  What's included
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="text-green-400 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-300">All features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-400 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Only DSA, Core & Aptitude
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-400 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-300">Dedicated support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <X className="text-red-400 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-500">AI Doubt Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <X className="text-red-400 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-500">Biweekly Sessions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <X className="text-red-400 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-500">Code Review</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 mt-auto">
                Buy Now @ ₹4289.35
              </button>
            </div>
          </div>

          {/* Pinnacle Plan */}
          <div className="group relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold z-20">
              Lifetime Validity
            </div>
            <div className="relative bg-gray-100/95 backdrop-blur-xl rounded-2xl p-8 border-2 border-orange-500 hover:border-orange-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/30 flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-100/30 to-transparent rounded-2xl pointer-events-none"></div>

              <div className="mb-6 relative z-10 mt-4">
                <div className="flex items-center gap-2 mb-4">
                  <Crown className="text-orange-600 w-6 h-6" />
                  <h2 className="text-2xl font-bold text-black">
                    Pinnacle Plan
                  </h2>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Go all in — with expert support & lifetime access.
                </p>

                <div className="mb-4">
                  <div className="text-sm text-gray-500 line-through">
                    ₹11999
                  </div>
                  <div className="text-lg text-gray-600">
                    Regular: <span className="line-through">₹9120</span>
                    <span className="bg-green-600 text-white px-2 py-1 rounded ml-2 text-xs">
                      24% OFF
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    ₹5928
                  </div>
                  <div className="text-sm text-green-600">
                    Use code:{" "}
                    <span className="font-mono bg-green-100 px-2 py-1 rounded">
                      PAYDAY
                    </span>
                  </div>
                </div>

                <div className="text-sm text-orange-600 mb-4">
                  <span className="inline-block bg-orange-100 px-3 py-1 rounded-full font-semibold">
                    Validity: Lifetime
                  </span>
                </div>
              </div>

              <div className="mb-8 flex-grow">
                <h3 className="text-black font-semibold mb-4">
                  What's included
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="text-green-600 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700">All features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-600 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700">
                      DSA, Core, Design & Aptitude
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-600 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700">AI Doubt Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-600 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700">Biweekly Sessions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-600 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700">Code Review</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 mt-auto">
                Buy Now @ ₹5928
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="group relative">
            <div className="relative bg-orange-600/90 backdrop-blur-xl rounded-2xl p-8 border border-orange-500 hover:border-orange-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/30 flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-400/20 to-transparent rounded-2xl pointer-events-none"></div>

              <div className="mb-6 relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="text-orange-100 w-6 h-6" />
                  <h2 className="text-2xl font-bold text-white">
                    Enterprise Plan
                  </h2>
                </div>
                <p className="text-orange-100 mb-6 leading-relaxed">
                  Perfect for a group of people (minimum 30) who are looking for
                  an extra discount.
                </p>
              </div>

              <div className="mb-8 flex-grow">
                <h3 className="text-white font-semibold mb-4">
                  What's included
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="text-green-300 w-5 h-5 flex-shrink-0" />
                    <span className="text-orange-100">
                      All features of Pinnacle
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-300 w-5 h-5 flex-shrink-0" />
                    <span className="text-orange-100">
                      Performance Dashboard
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-300 w-5 h-5 flex-shrink-0" />
                    <span className="text-orange-100">
                      Centralized Billing & Licensing
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-300 w-5 h-5 flex-shrink-0" />
                    <span className="text-orange-100">Custom Curriculum</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-300 w-5 h-5 flex-shrink-0" />
                    <span className="text-orange-100">
                      Exclusive Webinars & Industry Events
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-300 w-5 h-5 flex-shrink-0" />
                    <span className="text-orange-100">
                      Batch Enrollment & Role Access
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 mt-auto">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
