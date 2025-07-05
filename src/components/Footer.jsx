import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const companyLinks = [
    "About Us",
    "Contact Us",
    "Pricing",
    "Privacy Policy",
    "Terms and Conditions",
    "Cancellation / Refund Policy",
  ];

  const quickAccessLinks = [
    "Striver's DSA Sheet",
    "Technical Blogs",
    "CS Subjects",
    "Striver's CP Sheet",
  ];

  const dsaSheets = [
    "Striver's SDE Sheet",
    "Striver's A2Z DSA Playlist",
    "SDE Core Sheet",
    "Striver's CP Sheet",
  ];

  const dsaPlaylist = [
    "Array Series",
    "Graph Series",
    "DP Series",
    "LinkedList Series",
  ];

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="w-30 h-10 mb-4">
                <img
                  src="https://takeuforward.org/static/media/TufPlusLight.041fc694d612b3fbaaa0.png"
                  alt="TUF Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The best place to learn data Structures, algorithms, most asked
                coding interview questions, real interview experiences free of
                cost.
              </p>
            </div>

            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Linkedin size={16} className="text-gray-300" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Twitter size={16} className="text-gray-300" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Instagram size={16} className="text-gray-300" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Youtube size={16} className="text-gray-300" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-orange-400 font-semibold mb-4 text-sm">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-orange-400 font-semibold mb-4 text-sm">
              Quick Access
            </h4>
            <ul className="space-y-2">
              {quickAccessLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-orange-400 font-semibold mb-4 text-sm">
              DSA Sheets
            </h4>
            <ul className="space-y-2">
              {dsaSheets.map((sheet, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {sheet}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-orange-400 font-semibold mb-4 text-sm">
              DSA Playlist
            </h4>
            <ul className="space-y-2">
              {dsaPlaylist.map((playlist, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {playlist}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Copyright © 2025 takeuforward | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
