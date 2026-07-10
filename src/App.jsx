import { Routes, Route } from "react-router-dom";
import './App.css'
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
import AIPage from "./pages/AIPage";
import PersonalityPage from "./pages/PersonalityPage";
import About from "./pages/About";
// import Services from "./pages/Services";
import Contact from "./pages/ContactPage";
import Webinar from "./pages/Webinar";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      
      {/* Navbar */}
      <Navbar />
      <ScrollToTop />

      {/* Main Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/exim" element={<Exim />} />
          <Route path="/courses/insurance" element={<InsurancePage />} />
          <Route path="/courses/tally" element={<TallyPage />} />
          <Route path="/courses/tally-c" element={<TallyCPage />} />
          <Route path="/courses/ethical-hacking" element={<HackingPage />} />
          <Route path="/courses/ai-data-science" element={<AIPage />} />
          <Route path="/courses/genai-ml" element={<GenAIPage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="/courses/personality" element={<PersonalityPage />} />
        </Routes>
      </div> 
      {/* Footer */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
