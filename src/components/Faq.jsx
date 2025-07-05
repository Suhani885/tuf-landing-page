import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      name: "Course Content & Curriculum",
      active: true,
    },
    {
      name: "Account Management",
      active: false,
    },
    {
      name: "Course Access & Technical Support",
      active: false,
    },
    {
      name: "Mentorship & Community Support",
      active: false,
    },
    {
      name: "Certification & Completion",
      active: false,
    },
    {
      name: "Career Guidance",
      active: false,
    },
    {
      name: "Internships & Job Assistance",
      active: false,
    },
    {
      name: "Payment & Refunds",
      active: false,
    },
  ];

  const allFaqs = {
    0: [
      {
        question: "What topics are covered in the DSA course?",
        answer:
          "Our DSA course covers everything from the basics to advanced topics, including hands-on problem-solving. You'll also have access to editorial videos and contests to deepen your understanding.",
      },
      {
        question: "Are there any prerequisites for enrolling in this course?",
        answer:
          "No specific prerequisites are required. However, basic programming knowledge in any language would be helpful. Our course is designed to take you from beginner to advanced level.",
      },
      {
        question: "Is the course content updated regularly?",
        answer:
          "Yes, we regularly update our course content to reflect the latest industry trends and interview patterns. New problems and solutions are added frequently to keep the content fresh and relevant.",
      },
    ],
    1: [
      {
        question: "How do I create an account?",
        answer:
          "You can create an account by clicking on the 'Sign Up' button and filling in your details. Email verification is required to activate your account.",
      },
      {
        question: "Can I change my username after registration?",
        answer:
          "Yes, you can change your username once every 30 days from your account settings. Your progress and achievements will remain intact.",
      },
      {
        question: "How do I reset my password?",
        answer:
          "Click on 'Forgot Password' on the login page and enter your email. You'll receive a reset link to create a new password.",
      },
    ],
    2: [
      {
        question: "What are the system requirements?",
        answer:
          "You need a stable internet connection and a modern web browser. Our platform works on all devices including mobile phones, tablets, and desktops.",
      },
      {
        question: "Why can't I access certain videos?",
        answer:
          "Video access depends on your subscription plan. Ensure you're logged in and have an active subscription. Clear your browser cache if issues persist.",
      },
      {
        question: "How do I report a technical issue?",
        answer:
          "You can report technical issues through our support portal or contact us directly via WhatsApp. Include screenshots for faster resolution.",
      },
    ],
    3: [
      {
        question: "How does the mentorship program work?",
        answer:
          "Our mentorship program connects you with industry experts who provide personalized guidance, code reviews, and career advice through one-on-one sessions.",
      },
      {
        question: "Can I join the community forum?",
        answer:
          "Yes, all enrolled students get access to our exclusive community forum where you can interact with peers, ask questions, and share knowledge.",
      },
      {
        question: "How often are mentorship sessions scheduled?",
        answer:
          "Mentorship sessions are scheduled weekly and can be booked through your dashboard. Emergency doubt clearing sessions are also available.",
      },
    ],
    4: [
      {
        question: "Do I get a certificate after completion?",
        answer:
          "Yes, you receive a verified certificate upon completing all course modules and passing the final assessment with a minimum score of 80%.",
      },
      {
        question: "How is course completion tracked?",
        answer:
          "Course completion is tracked through video watch time, quiz scores, and coding assignments. You can monitor your progress on your dashboard.",
      },
      {
        question: "Is the certificate industry recognized?",
        answer:
          "Our certificates are recognized by leading tech companies and can be shared on LinkedIn and other professional platforms.",
      },
    ],
    5: [
      {
        question: "Does the course include career guidance?",
        answer:
          "Yes, we provide comprehensive career guidance including resume building, interview preparation, and industry insights from experienced professionals.",
      },
      {
        question: "Are there mock interviews included?",
        answer:
          "Yes, we conduct regular mock interviews with detailed feedback to help you prepare for real technical interviews at top companies.",
      },
      {
        question: "Do you provide placement assistance?",
        answer:
          "We offer placement assistance through our network of partner companies and help you with job applications and interview scheduling.",
      },
    ],
    6: [
      {
        question: "Are internships guaranteed?",
        answer:
          "While we cannot guarantee internships, we have partnerships with various companies and actively help students secure internship opportunities based on their performance.",
      },
      {
        question: "What is the job assistance program?",
        answer:
          "Our job assistance program includes resume optimization, interview preparation, and direct referrals to our partner companies for suitable positions.",
      },
      {
        question: "How long does job assistance last?",
        answer:
          "Job assistance is provided for 6 months after course completion, with extended support available for exceptional students.",
      },
    ],
    7: [
      {
        question: "What payment methods are accepted?",
        answer:
          "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. EMI options are also available for course fees.",
      },
      {
        question: "Is there a refund policy?",
        answer:
          "Yes, we offer a 7-day money-back guarantee if you're not satisfied with the course. Refunds are processed within 5-7 business days.",
      },
      {
        question: "Can I get a discount on course fees?",
        answer:
          "We regularly offer discounts during festive seasons and for early birds. Students can also avail of scholarship programs based on need and merit.",
      },
    ],
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleCategoryClick = (index) => {
    setActiveCategory(index);
    setOpenIndex(-1);
  };

  return (
    <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30">
              <div className="space-y-1">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryClick(index)}
                    className={`w-full text-left p-2.5 rounded-lg transition-all duration-200 ${
                      activeCategory === index
                        ? "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                        : "text-gray-300 hover:text-white hover:bg-gray-700/30"
                    }`}
                  >
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-3">
              {allFaqs[activeCategory].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 rounded-lg border border-gray-700/30 overflow-hidden transition-all duration-200 hover:border-gray-600/40"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-700/20 transition-all duration-200"
                  >
                    <span className="text-base font-medium text-white pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center transition-all duration-200">
                          <Minus size={14} className="text-white" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 bg-gray-600 hover:bg-orange-500 rounded-md flex items-center justify-center transition-all duration-200">
                          <Plus size={14} className="text-white" />
                        </div>
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 pb-4">
                      <div className="pt-2 border-t border-gray-700/30">
                        <p className="text-gray-300 leading-relaxed mt-3 text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <br />
            <br />
            <div className="mt-10 bg-gray-800/30 rounded-lg p-5 border border-gray-700/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fff"
                      d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"
                    ></path>
                    <path
                      fill="#cfd8dc"
                      d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"
                    ></path>
                    <path
                      fill="#40c351"
                      d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Still Confused?
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Feel free to post your queries over our Whatsapp Support
                    </p>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-2.5 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-orange-500/40 text-sm">
                  Ask Your Query
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
