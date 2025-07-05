import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSec";
import PricingPlans from "./components/PricingPlans";
import React from "react";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

const TUFLandingPage = () => {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection />
      <CoursesSection />
      <PricingPlans />
      <Faq />
      <Footer />
    </div>
  );
};

export default TUFLandingPage;
