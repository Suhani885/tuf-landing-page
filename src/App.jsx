import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSec";
import PricingPlans from "./components/PricingPlans";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Syllabus from "./components/Syllabus";

const TUFLandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CoursesSection />
      <Testimonials />
      <PricingPlans />
      <Syllabus />
      <Faq />
      <Footer />
    </div>
  );
};

export default TUFLandingPage;
