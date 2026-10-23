import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const courses = [
  { id: 1, title: "A to Z of EXIM Trade", icon: "🌐", tag: "Business", path: "/courses/exim" },
  { id: 2, title: "Insurance Essentials", icon: "🛡️", tag: "Finance", path: "/courses/insurance" },
  { id: 3, title: "Tally Prime 7.0", icon: "📊", tag: "Accounting", path: "/courses/tally" },
  { id: 4, title: "Tally Comprehensive (All 3 Levels)", icon: "📈", tag: "Accounting", path: "/courses/tally-c" },
  { id: 5, title: "Cyber Security", icon: "🔐", tag: "Cybersecurity", path: "/courses/ethical-hacking" },
  { id: 6, title: "Data Analytics", icon: "🤖", tag: "Technology", path: "/courses/data-analytics" },
  { id: 7, title: "No-Code AI", icon: "✨", tag: "AI / ML", path: "/courses/genai-ml" },
  { id: 8, title: "Grooming for Personality Development", icon: "🌟", tag: "Soft Skills", path: "/courses/personality" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const courseBtnRef = useRef(null);

  // Update active page based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActivePage("Home");
    } else if (path === "/courses") {
      setActivePage("Courses");
    } else if (path === "/ai-bootcamp" || path === "/webinar") {
      setActivePage("AI Bootcamp");
    } else if (path === "/about") {
      setActivePage("About");
    }  else if (path.startsWith("/courses/")) {
      setActivePage("Courses");
    }
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        courseBtnRef.current &&
        !courseBtnRef.current.contains(e.target)
      ) {
        setCoursesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setShowSearchDropdown(false);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const filtered = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(query) ||
        course.tag.toLowerCase().includes(query)
    );
    setSearchResults(filtered);
    setShowSearchDropdown(filtered.length > 0);
  }, [searchQuery]);

  const handleLogoClick = () => {
    navigate("/");
    setActivePage("Home");
    setMobileOpen(false);
  };

  const handleCourseClick = (path) => {
    navigate(path);
    setShowSearchDropdown(false);
    setSearchQuery("");
    setMobileOpen(false);
  };

  // Open Google Form in a new tab
  const openInterestForm = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdYkMi78TLwol39eBaIE2kBU3MRWxnkIk3RaSJojHtpjMp_Mw/viewform", "_blank");
    setMobileOpen(false);
    setCoursesOpen(false);
  };

  const shortCourseName = (course) => ({
    1: "EXIM Trade",
    2: "Insurance",
    3: "Tally Prime",
    4: "Tally Certification",
    5: "Cyber Security",
    6: "Data Analytics",
    7: "No Code AI",
    8: "Personality Development",
  }[course.id] || course.title);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: #ffffff; }

        /* ── NAVBAR ── */
        .navbar-root {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          font-family: 'Poppins', sans-serif;
          background: #ffffff;
          border-bottom: 1px solid rgba(56,189,248,0.18);
          transition: box-shadow 0.3s ease;
        }

        .navbar-root.scrolled {
          box-shadow: 0 4px 24px rgba(15,23,42,0.1), 0 1px 0 rgba(56,189,248,0.15);
        }

        /* sky-blue top accent line */
        .accent-bar {
          height: 4px;
          background: linear-gradient(90deg, #0F172A 0%, #38BDF8 40%, #7DD3FC 72%, #0F172A 100%);
        }

        .navbar-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        /* ── LOGO ── */
        .logo-wrap {
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          flex-shrink: 0;
          text-decoration: none;
          border: none;
          background: none;
        }

        .logo-img-container {
          width: 180px;
          height: 68px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: box-shadow 0.25s, border-color 0.25s;
        }

        .logo-img-container img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 4px;
        }

        /* ── NAV LINKS ── */
        .nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2px;
          list-style: none;
          flex: 1;
        }

        .nav-link {
          position: relative;
          padding: 10px 18px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 500;
          color: #334155;
          cursor: pointer;
          transition: color 0.2s, background 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
          user-select: none;
          border: none;
          background: transparent;
          font-family: 'Poppins', sans-serif;
          white-space: nowrap;
          text-decoration: none;
        }

        .nav-link:hover {
          color: #0EA5E9;
          background: #F0F9FF;
        }

        .nav-link.active {
          color: #0284C7;
          background: #E0F2FE;
          font-weight: 600;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 3px;
          border-radius: 99px;
          background: #38BDF8;
        }

        .nav-link svg { flex-shrink: 0; opacity: 0.65; }
        .nav-link:hover svg, .nav-link.active svg { opacity: 1; }

        .chevron { transition: transform 0.25s; }
        .chevron.open { transform: rotate(180deg); }

        /* ── WEBINAR BUTTON (matching Footer registration-link) ── */
        .webinar-btn {
          background: #ff6b35;
          padding: 10px 20px;
          border-radius: 20px;
          font-weight: 600 !important;
          color: #ffffff !important;
          transition: all 0.3s ease !important;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: none;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          font-size: 16.8px;
          white-space: nowrap;
        }

        .webinar-btn:hover {
          background: #ff8255 !important;
          color: #ffffff !important;
          transform: scale(1.05) !important;
          box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3);
        }

        .webinar-btn::before {
          content: "★";
          margin-right: 5px;
          color: #ffffff;
        }

        /* ── APPLY BUTTON ── */
        .apply-btn {
          background: linear-gradient(135deg, #38BDF8, #0EA5E9);
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 12px;
          font-size: 16.8px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(14, 165, 233, 0.35);
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Poppins', sans-serif;
          white-space: nowrap;
          text-decoration: none;
        }

        .apply-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(14, 165, 233, 0.45);
          background: linear-gradient(135deg, #0EA5E9, #0284C7);
        }

        .apply-btn svg { flex-shrink: 0; }

        /* ── SEARCH SECTION ── */
        .search-section {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .search-toggle-btn {
          padding: 10px 12px;
          border-radius: 12px;
          border: none;
          background: transparent;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 15.7px;
          font-weight: 500;
        }

        .search-toggle-btn:hover {
          background: #F0F9FF;
          color: #0EA5E9;
        }

        .search-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) both;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .search-input {
          padding: 10px 16px 10px 40px;
          border-radius: 12px;
          border: 2px solid #E2E8F0;
          font-size: 15.7px;
          font-family: 'Inter', sans-serif;
          background: #F8FAFC;
          transition: all 0.3s;
          width: 240px;
          outline: none;
        }

        .search-input:focus {
          border-color: #38BDF8;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(56,189,248,0.12);
          width: 320px;
        }

        .search-icon-input {
          position: absolute;
          left: 12px;
          color: #94A3B8;
          pointer-events: none;
        }

        .search-input:focus ~ .search-icon-input {
          color: #38BDF8;
        }

        .search-close-btn {
          position: absolute;
          right: 8px;
          padding: 4px;
          border: none;
          background: transparent;
          color: #94A3B8;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .search-close-btn:hover {
          background: #F1F5F9;
          color: #475569;
        }

        .search-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          background: #ffffff;
          border: 1px solid rgba(56,189,248,0.22);
          border-radius: 16px;
          box-shadow: 0 16px 48px rgba(15,23,42,0.14);
          max-height: 360px;
          overflow-y: auto;
          z-index: 999;
          animation: dropIn 0.2s cubic-bezier(0.4,0,0.2,1) both;
          min-width: 320px;
        }

        .search-result-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
          cursor: pointer;
          transition: background 0.2s;
          border-bottom: 1px solid #F1F5F9;
          text-decoration: none;
          color: #1E293B;
        }

        .search-result-item:last-child {
          border-bottom: none;
        }

        .search-result-item:hover {
          background: #F0F9FF;
        }

        .search-result-icon {
          font-size: 22.4px;
        }

        .search-result-info {
          flex: 1;
        }

        .search-result-title {
          font-size: 14.6px;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
        }

        .search-result-tag {
          font-size: 12.3px;
          color: #94A3B8;
          font-family: 'Inter', sans-serif;
        }

        .search-result-path {
          font-size: 12.3px;
          color: #38BDF8;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
        }

        .search-no-results {
          padding: 20px 16px;
          text-align: center;
          color: #94A3B8;
          font-size: 14.6px;
          font-family: 'Inter', sans-serif;
        }

        /* ── MEGA DROPDOWN ── */
        .dropdown-backdrop {
          position: fixed;
          inset: 0;
          z-index: 998;
        }

        .mega-dropdown {
          position: absolute;
          top: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%);
          width: min(720px, 94vw);
          background: #ffffff;
          border: 1px solid rgba(56,189,248,0.22);
          border-radius: 16px;
          padding: 14px;
          box-shadow: 0 24px 64px rgba(15,23,42,0.14), 0 4px 16px rgba(56,189,248,0.1);
          z-index: 999;
          animation: dropIn 0.2s cubic-bezier(0.4,0,0.2,1) both;
        }

        @keyframes dropIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-10px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .dropdown-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid #E2E8F0;
        }

        .dropdown-title {
          font-size: 12.3px;
          font-weight: 700;
          color: #38BDF8;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .dropdown-subtitle {
          font-size: 13.4px;
          color: #94A3B8;
          font-family: 'Inter', sans-serif;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .course-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 10px 12px;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-decoration: none;
        }

        .course-card:hover {
          background: #F0F9FF;
          border-color: #7DD3FC;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(56,189,248,0.15);
        }

        .course-icon { font-size: 24.6px; line-height: 1; }

        .course-icon,
        .course-tag,
        .course-arrow {
          display: none;
        }

        .course-tag {
          display: inline-flex;
          padding: 2px 10px;
          border-radius: 99px;
          font-size: 11.2px;
          font-weight: 600;
          letter-spacing: 0.7px;
          text-transform: uppercase;
          font-family: 'Inter', sans-serif;
          background: #E0F2FE;
          color: #0284C7;
          width: fit-content;
        }

        .course-name {
          font-size: 13px;
          font-weight: 600;
          color: #1E293B;
          line-height: 1.4;
          font-family: 'Inter', sans-serif;
        }

        .course-card:hover .course-name { color: #0284C7; }

        .course-arrow {
          margin-top: auto;
          color: #CBD5E1;
          font-size: 14.6px;
          transition: color 0.2s, transform 0.2s;
        }

        .course-card:hover .course-arrow {
          color: #38BDF8;
          transform: translateX(4px);
        }

        .dropdown-footer {
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px solid #E2E8F0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dropdown-footer-text {
          font-size: 13.4px;
          color: #94A3B8;
          font-family: 'Inter', sans-serif;
        }

        .view-all-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: 10px;
          border: 1.5px solid #38BDF8;
          color: #0284C7;
          font-size: 14.6px;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          background: transparent;
          transition: all 0.2s;
          text-decoration: none;
        }

        .view-all-btn:hover {
          background: #E0F2FE;
        }

        /* ── HAMBURGER ── */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          border-radius: 12px;
          background: #F0F9FF;
          border: 1px solid rgba(56,189,248,0.25);
          transition: background 0.2s;
        }

        .hamburger:hover { background: #E0F2FE; }

        .ham-line {
          width: 24px;
          height: 2.5px;
          border-radius: 99px;
          background: #0F172A;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          transform-origin: center;
        }

        .hamburger.open .ham-line:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
        .hamburger.open .ham-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open .ham-line:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }

        /* ── MOBILE MENU ── */
        .mobile-menu {
          position: fixed;
          top: 100px;
          left: 0;
          right: 0;
          bottom: 0;
          background: #ffffff;
          z-index: 997;
          padding: 20px 16px;
          overflow-y: auto;
          border-top: 1px solid #E2E8F0;
          animation: slideDown 0.25s cubic-bezier(0.4,0,0.2,1) both;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .mobile-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border-radius: 14px;
          margin-bottom: 6px;
          color: #334155;
          font-size: 16.8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid transparent;
          text-decoration: none;
        }

        .mobile-nav-item:hover,
        .mobile-nav-item.active {
          background: #F0F9FF;
          border-color: #BAE6FD;
          color: #0284C7;
        }

        .mobile-nav-item-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .mobile-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 12px;
          background: #E0F2FE;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 17.9px;
        }

        .mobile-courses-panel {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 10px;
          margin-bottom: 6px;
        }

        .mobile-course-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 12px;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s;
          color: #475569;
          font-size: 15.1px;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
        }

        .mobile-course-item:hover {
          background: #E0F2FE;
          color: #0284C7;
        }

        .mobile-course-item span { font-size: 20.2px; }

        .mobile-divider {
          height: 1px;
          background: #E2E8F0;
          margin: 14px 0;
        }

        .mobile-cta {
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          border: none;
          background: linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%);
          color: #fff;
          font-size: 16.8px;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(14,165,233,0.35);
          text-decoration: none;
          display: block;
          text-align: center;
        }

        /* Mobile webinar button */
        .mobile-webinar-btn {
          width: 100%;
          padding: 14px;
          border-radius: 20px;
          border: none;
          background: #ff6b35;
          color: #ffffff;
          font-size: 16.8px;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: block;
          text-align: center;
          margin-bottom: 10px;
        }

        .mobile-webinar-btn:hover {
          background: #ff8255;
          transform: scale(1.02);
        }

        .mobile-webinar-btn::before {
          content: "★ ";
          color: #ffffff;
        }

        /* Mobile search */
        .mobile-search-wrapper {
          margin-bottom: 14px;
          position: relative;
        }

        .mobile-search-wrapper .search-input {
          width: 100%;
          padding: 12px 16px 12px 40px;
          font-size: 15.7px;
        }

        /* ── RESPONSIVE BREAKPOINTS ── */
        
        /* Large screens (desktop) */
        @media (min-width: 1401px) {
          .navbar-inner {
            max-width: 1600px;
            padding: 0 56px;
            height: 105px;
          }
          
          .nav-link {
            font-size: 19.0px;
            padding: 10px 20px;
          }
          
          .logo-img-container {
            width: 260px;
            height: 96px;
          }

          .search-input {
            width: 260px;
            font-size: 16.8px;
          }

          .search-input:focus {
            width: 360px;
          }
        }

        /* Tablets and smaller laptops */
        @media (max-width: 1400px) {
          .navbar-inner {
            padding: 0 32px;
            height: 90px;
          }
          
          .nav-link {
            font-size: 16.8px;
            padding: 8px 14px;
          }
          
          .logo-img-container {
            width: 200px;
            height: 80px;
          }

          .search-input {
            width: 200px;
            font-size: 15.7px;
          }

          .search-input:focus {
            width: 260px;
          }
        }

        @media (max-width: 1200px) {
          .nav-link {
            font-size: 15.7px;
            padding: 8px 12px;
          }
          
          .navbar-inner {
            padding: 0 24px;
            height: 85px;
          }
          
          .logo-img-container {
            width: 180px;
            height: 72px;
          }
          
          .search-input {
            width: 170px;
          }
          
          .search-input:focus {
            width: 210px;
          }
          
          .apply-btn {
            padding: 10px 18px;
            font-size: 15.7px;
          }

          .webinar-btn {
            padding: 8px 16px;
            font-size: 15.7px;
          }
        }

        /* Large phones and tablets */
        @media (max-width: 992px) {
          .nav-links, 
          .search-section { 
            display: none !important; 
          }
          
          .hamburger { 
            display: flex; 
          }
          
          .navbar-inner { 
            padding: 0 20px; 
            height: 80px; 
          }
          
          .mobile-menu { 
            top: 84px; 
          }
          
          .logo-img-container {
            width: 160px;
            height: 64px;
          }
          
          .mega-dropdown {
            width: 96vw;
            padding: 20px;
          }
          
          .courses-grid { 
            grid-template-columns: repeat(2, 1fr); 
          }
        }

        /* Small tablets and large phones */
        @media (max-width: 768px) {
          .navbar-inner {
            padding: 0 16px;
            height: 74px;
          }
          
          .mobile-menu {
            top: 78px;
            padding: 16px 14px;
          }
          
          .logo-img-container {
            width: 140px;
            height: 56px;
          }
          
          .courses-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          
          .dropdown-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
          
          .dropdown-footer {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
          }
          
          .view-all-btn {
            width: 100%;
            justify-content: center;
          }
          
          .mobile-nav-item {
            padding: 12px 14px;
            font-size: 15.7px;
          }
        }

        /* Small phones */
        @media (max-width: 576px) {
          .navbar-inner {
            padding: 0 12px;
            height: 68px;
          }
          
          .mobile-menu {
            top: 72px;
            padding: 14px 12px;
          }
          
          .logo-img-container {
            width: 120px;
            height: 48px;
          }
          
          .mega-dropdown {
            padding: 14px;
            top: calc(100% + 8px);
            border-radius: 16px;
          }
          
          .courses-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          
          .course-card {
            padding: 12px 14px;
          }
          
          .mobile-nav-item {
            padding: 10px 12px;
            font-size: 14.6px;
          }
          
          .mobile-course-item {
            padding: 10px 12px;
            font-size: 14.6px;
          }
          
          .mobile-cta {
            font-size: 15.7px;
            padding: 12px;
          }
          
          .hamburger {
            padding: 6px;
            gap: 4px;
          }
          
          .ham-line {
            width: 20px;
            height: 2px;
          }
          
          .hamburger.open .ham-line:nth-child(1) { transform: translateY(6px) rotate(45deg); }
          .hamburger.open .ham-line:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
          
          .mobile-search-wrapper .search-input {
            padding: 10px 14px 10px 36px;
            font-size: 14.6px;
          }
        }

        /* Extra small devices */
        @media (max-width: 400px) {
          .navbar-inner {
            padding: 0 10px;
            height: 62px;
          }
          
          .logo-img-container {
            width: 100px;
            height: 42px;
          }
          
          .mobile-menu {
            top: 66px;
            padding: 12px 10px;
          }
          
          .mobile-nav-item {
            padding: 8px 10px;
            font-size: 13.4px;
          }
          
          .mobile-course-item {
            padding: 8px 10px;
            font-size: 13.4px;
          }
          
          .mobile-cta {
            font-size: 14.6px;
            padding: 10px;
          }
          
          .hamburger {
            padding: 5px;
            gap: 3px;
          }
          
          .ham-line {
            width: 16px;
            height: 2px;
          }
          
          .hamburger.open .ham-line:nth-child(1) { transform: translateY(5px) rotate(45deg); }
          .hamburger.open .ham-line:nth-child(3) { transform: translateY(-5px) rotate(-45deg); }
        }

        /* Landscape phones */
        @media (max-height: 500px) and (orientation: landscape) {
          .mobile-menu {
            padding: 10px 14px;
            top: 76px;
          }
          
          .mobile-nav-item {
            padding: 6px 10px;
            font-size: 14.6px;
          }
          
          .mobile-courses-panel {
            max-height: 120px;
            overflow-y: auto;
          }
          
          .mobile-course-item {
            padding: 5px 10px;
            font-size: 13.4px;
          }
          
          .mobile-search-wrapper .search-input {
            padding: 8px 14px 8px 36px;
            font-size: 14.6px;
          }
          
          .mobile-cta {
            font-size: 14.6px;
            padding: 10px;
          }
        }

        /* 4K screens */
        @media (min-width: 2200px) {
          .navbar-inner {
            max-width: 1800px;
            padding: 0 80px;
            height: 120px;
          }
          
          .nav-link {
            font-size: 22.4px;
            padding: 12px 24px;
          }
          
          .logo-img-container {
            width: 300px;
            height: 110px;
          }

          .search-input {
            width: 300px;
            font-size: 19.0px;
          }

          .search-input:focus {
            width: 420px;
          }
          
          .apply-btn {
            font-size: 19.0px;
            padding: 14px 32px;
          }

          .webinar-btn {
            font-size: 19.0px;
            padding: 12px 24px;
          }
        }
      `}</style>

      <nav className={`navbar-root ${scrolled ? "scrolled" : ""}`}>
        <div className="accent-bar" />
        <div className="navbar-inner">

          {/* Logo - Left */}
          <button className="logo-wrap" onClick={handleLogoClick} aria-label="Go to Home">
            <div className="logo-img-container">
              <img src="/assets/images/logo1.png" alt="University Logo" />
            </div>
          </button>

          {/* Nav Links - Center */}
          <ul className="nav-links">
            <li>
              <Link
                to="/"
                className={`nav-link ${activePage === "Home" ? "active" : ""}`}
                onClick={() => setCoursesOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={`nav-link ${activePage === "About" ? "active" : ""}`}
                onClick={() => setCoursesOpen(false)}
              >
                About MILES
              </Link>
            </li>

            <li style={{ position: "relative" }}>
              <button
                ref={courseBtnRef}
                className={`nav-link ${activePage === "Courses" ? "active" : ""}`}
                onClick={() => { setCoursesOpen((o) => !o); }}
              >
                Courses
                <svg className={`chevron ${coursesOpen ? "open" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>

              {coursesOpen && (
                <>
                  <div className="dropdown-backdrop" onClick={() => setCoursesOpen(false)} />
                  <div className="mega-dropdown" ref={dropdownRef}>
                    <div className="dropdown-header">
                      <div className="dropdown-title">Our Programmes</div>
                      <div className="dropdown-subtitle">Industry-aligned Certifications</div>
                    </div>

                    <div className="courses-grid">
                      {courses.map((c) => (
                        <Link
                          key={c.id}
                          to={c.path}
                          className="course-card"
                          onClick={() => setCoursesOpen(false)}
                        >
                          <span className="course-name">{shortCourseName(c)}</span>
                        </Link>
                      ))}
                    </div>

                    <div className="dropdown-footer">
                      <span className="dropdown-footer-text">Certified · Industry-Ready · Career-Focused</span>
                      <Link to="/courses" className="view-all-btn" onClick={() => setCoursesOpen(false)}>
                        Browse All
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </li>

          </ul>

          {/* Enquiry and AI Bootcamp links */}
          <div className="search-section">
            <button className="apply-btn" onClick={openInterestForm}>
              Enquiry
            </button>
            <Link to="/ai-bootcamp" className="ai-bootcamp-nav" aria-current={activePage === "AI Bootcamp" ? "page" : undefined}>Join AI Bootcamp</Link>
          </div>

          {/* Hamburger - Mobile */}
          <div className="hamburger-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              className={`hamburger ${mobileOpen ? "open" : ""}`}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <div className="ham-line" />
              <div className="ham-line" />
              <div className="ham-line" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <div className="mobile-search-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => {
                if (searchQuery.trim() !== "" && searchResults.length > 0) {
                  setShowSearchDropdown(true);
                }
              }}
            />
            {showSearchDropdown && (
              <div className="search-dropdown" style={{ position: 'relative', marginTop: '4px', maxHeight: '200px' }}>
                {searchResults.map((course) => (
                  <Link
                    key={course.id}
                    to={course.path}
                    className="search-result-item"
                    onClick={() => handleCourseClick(course.path)}
                  >
                    <div className="search-result-info">
                      <div className="search-result-title">{course.title}</div>
                      <div className="search-result-tag">{course.tag}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/"
            className={`mobile-nav-item ${activePage === "Home" ? "active" : ""}`}
            onClick={() => { setMobileOpen(false); setMobileCoursesOpen(false); }}
          >
            <div className="mobile-nav-item-left">
              <span>Home</span>
            </div>
          </Link>

          <Link
            to="/about"
            className={`mobile-nav-item ${activePage === "About" ? "active" : ""}`}
            onClick={() => { setMobileOpen(false); setMobileCoursesOpen(false); }}
          >
            <div className="mobile-nav-item-left">
              <span>About MILES</span>
            </div>
          </Link>

          <div className="mobile-nav-item" onClick={() => setMobileCoursesOpen((o) => !o)}>
            <div className="mobile-nav-item-left">
              <span>Courses</span>
            </div>
            <svg className={`chevron ${mobileCoursesOpen ? "open" : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>

          {mobileCoursesOpen && (
            <div className="mobile-courses-panel">
              {courses.map((c) => (
                <Link
                  key={c.id}
                  to={c.path}
                  className="mobile-course-item"
                  onClick={() => { setMobileOpen(false); setMobileCoursesOpen(false); }}
                >
                  <span>{shortCourseName(c)}</span>
                </Link>
              ))}
            </div>
          )}

          <div className="mobile-divider" />

          <Link to="/ai-bootcamp" className="ai-bootcamp-nav" aria-current={activePage === "AI Bootcamp" ? "page" : undefined} onClick={() => { setMobileOpen(false); setMobileCoursesOpen(false); }}>Join AI Bootcamp</Link>

          <button className="mobile-cta" onClick={openInterestForm}>
            Apply Now — Express Your Interest →
          </button>
        </div>
      )}
    </>
  );
}
