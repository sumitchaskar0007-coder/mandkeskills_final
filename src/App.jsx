import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Exim from "./pages/Exim";
import InsurancePage from "./pages/Insurance";
import TallyPage from "./pages/TallyPage";
import TallyCPage from "./pages/TallyCPage";
import HackingPage from "./pages/HackingPage";
import GenAIPage from "./pages/GenAIPage";
import DataAnalytics from "./pages/DataAnalytics";
import PersonalityPage from "./pages/PersonalityPage";
import About from "./pages/About";
import Contact from "./pages/ContactPage";
import AIBootcamp from "./pages/AIBootcamp";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

const courseNames = {
  "/courses/exim": "EXIM Trade",
  "/courses/insurance": "Insurance",
  "/courses/tally": "Tally Prime",
  "/courses/tally-c": "Tally Certification",
  "/courses/ethical-hacking": "Cyber Security",
  "/courses/data-analytics": "Data Analytics",
  "/courses/genai-ml": "No-Code AI",
  "/courses/personality": "Personality Development",
};

function CourseStickyActions() {
  const location = useLocation();

  const courseName = courseNames[location.pathname];

  if (!courseName) return null;

  return (
    <div className="course-sticky-actions">
      <div className="course-sticky-name">
        {courseName}
      </div>

      <Link to="/contact" className="course-sticky-enquire">
        Enquire Now
      </Link>
    </div>
  );
}

function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/exim" element={<Exim />} />
          <Route path="/courses/insurance" element={<InsurancePage />} />
          <Route path="/courses/tally" element={<TallyPage />} />
          <Route path="/courses/tally-c" element={<TallyCPage />} />
          <Route path="/courses/ethical-hacking" element={<HackingPage />} />
          <Route path="/courses/data-analytics" element={<DataAnalytics />} />
          <Route path="/courses/genai-ml" element={<GenAIPage />} />
          <Route path="/courses/personality" element={<PersonalityPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ai-bootcamp" element={<AIBootcamp />} />
          <Route path="/webinar" element={<Navigate to="/ai-bootcamp" replace />} />
        </Routes>
      </div>

      <CourseStickyActions />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
