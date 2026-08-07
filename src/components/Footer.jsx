import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    navigate(path);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <h3 className="footer-title">MILES - Mandke Skill Development</h3>
            <div className="company-info">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <p>Mandke Growth Centre, Next to Ideal Colony Metro Station, Paud Road, Kothrud, Pune 411038. Maharashtra, India</p>
              </div>
              <div className="info-item">
                <span className="info-icon">📞</span>
                <p>+91 9112220491</p>
              </div>
              <div className="info-item">
                <span className="info-icon">✉️</span>
                <p>mandkeskills@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-subtitle">QUICK LINKS</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href="/" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/');
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/about');
                  }}
                >
                  About MILES
                </a>
              </li>
              <li>
                <a 
                  href="/courses" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/courses');
                  }}
                >
                  Courses
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/contact');
                  }}
                >
                  Contact
                </a>
              </li>
              {/* <li>
                <a 
                  href="/webinar" 
                  className="registration-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/webinar');
                  }}
                >
                  Webinar
                </a>
              </li> */}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-column">
            <div className="newsletter-section">
              <h3 className="footer-title">GROWTH</h3>
              <p className="newsletter-text">
                Enter your email address
              </p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email for updates" 
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  Subscribe <span className="btn-icon">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2026 Trijja Media Works. All rights reserved.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/mandkeskills" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">f</span>
              </a>
              <a href="https://www.instagram.com/mandkeskills" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">in</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .footer {
          background: #1c96c5;
          padding: 60px 0 0 0;
          font-family: "Poppins", sans-serif;
          border-top: 1px solid #e8f0fe;
          width: 100%;
        }

        .container {
          width: 90%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Footer Column */
        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-column:has(.newsletter-section) {
          display: none;
        }

        .footer-title {
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-weight: 700;
          color: #ffffff;
          font-family: "Times New Roman", Times, serif;
          margin-bottom: 5px;
        }

        .footer-subtitle {
          font-size: clamp(0.85rem, 1.5vw, 1rem);
          font-weight: 700;
          color: #ffffff;
          font-family: "Times New Roman", Times, serif;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }

        /* Company Info */
        .company-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .info-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .info-icon {
          color: #ffffff;
          flex-shrink: 0;
          font-size: clamp(0.9rem, 1.5vw, 1.1rem);
          margin-top: 2px;
          min-width: 20px;
        }

        .info-item p {
          color: #ffffff;
          font-size: clamp(0.75rem, 1.2vw, 0.9rem);
          line-height: 1.6;
          font-family: "Poppins", sans-serif;
          margin: 0;
          text-align: left;
          word-break: break-word;
        }

        /* Footer Links */
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          display: block;
        }

        .footer-links li a {
          color: #ffffff;
          text-decoration: none;
          font-size: clamp(0.75rem, 1.2vw, 0.9rem);
          font-family: "Poppins", sans-serif;
          transition: all 0.3s ease;
          position: relative;
          display: inline-block;
          cursor: pointer;
        }

        .footer-links li a:hover {
          color: #0ea5e9;
          padding-left: 5px;
        }

        .footer-links li a::before {
          content: "›";
          opacity: 0;
          transition: all 0.3s ease;
          margin-right: 0;
          display: inline-block;
        }

        .footer-links li a:hover::before {
          opacity: 1;
          margin-right: 5px;
        }

        /* Registration Link in Quick Links */
        .registration-link {
          background: #ff6b35;
          padding: 4px 15px;
          border-radius: 20px;
          font-weight: 600 !important;
          transition: all 0.3s ease !important;
        }

        .registration-link:hover {
          background: #ff8255 !important;
          color: #ffffff !important;
          padding-left: 20px !important;
          transform: scale(1.05);
        }

        .registration-link::before {
          content: "★" !important;
          opacity: 1 !important;
          margin-right: 5px !important;
          color: #ffffff;
        }

        /* Newsletter */
        .newsletter-section {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .newsletter-text {
          color: #ffffff;
          font-size: clamp(0.8rem, 1.2vw, 0.9rem);
          font-family: "Poppins", sans-serif;
          margin: 0;
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .newsletter-input {
          padding: clamp(10px, 1.5vw, 12px) clamp(12px, 2vw, 16px);
          border: 1px solid #0284c7;
          border-radius: 10px;
          font-size: clamp(0.75rem, 1.2vw, 0.9rem);
          font-family: "Poppins", sans-serif;
          color: #333;
          background: #ffffff;
          transition: all 0.3s ease;
          width: 100%;
          outline: none;
        }

        .newsletter-input::placeholder {
          color: #94a3b8;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: #0ea5e9;
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.1);
          background: #ffffff;
        }

        .newsletter-btn {
          background: #e4eef2;
          color: #1c96c5;
          border: none;
          padding: clamp(10px, 1.5vw, 12px) clamp(16px, 2vw, 24px);
          border-radius: 10px;
          font-weight: 600;
          font-size: clamp(0.8rem, 1.2vw, 0.95rem);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.4s ease;
          font-family: "Poppins", sans-serif;
          width: 100%;
        }

        .newsletter-btn:hover {
          background: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(30, 58, 95, 0.3);
        }

        .newsletter-btn:active {
          transform: translateY(0);
        }

        .btn-icon {
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          transition: transform 0.3s ease;
        }

        .newsletter-btn:hover .btn-icon {
          transform: translateX(4px);
        }

        /* Bottom Footer */
        .footer-bottom {
          padding: 25px 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright {
          color: #ffffff;
          font-size: clamp(0.7rem, 1.1vw, 0.85rem);
          font-family: "Poppins", sans-serif;
          margin: 0;
        }

        .footer-social {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: clamp(32px, 4vw, 40px);
          height: clamp(32px, 4vw, 40px);
          border-radius: 50%;
          background: #f0f7ff;
          color: #0284c7;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: clamp(0.8rem, 1.2vw, 1rem);
          font-weight: 600;
        }

        .social-link:hover {
          background: #0284c7;
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(2, 132, 199, 0.3);
        }

        .social-icon {
          line-height: 1;
          font-size: clamp(0.8rem, 1.2vw, 1.1rem);
        }

        /* ========== EXTRA SMALL DEVICES (320px - 480px) ========== */
        @media (max-width: 480px) {
          .container {
            width: 95%;
            padding: 0 10px;
          }

          .footer {
            padding: 30px 0 0 0;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
            padding-bottom: 25px;
          }

          .footer-column {
            text-align: left;
            align-items: flex-start;
            width: 100%;
          }

          .footer-column:last-child {
            grid-column: auto;
            max-width: 100%;
            align-items: flex-start;
          }

          .info-item {
            justify-content: flex-start;
            width: 100%;
          }

          .info-item p {
            text-align: left;
          }

          .footer-links {
            align-items: flex-start;
            width: 100%;
          }

          .registration-link {
            padding: 3px 12px;
          }

          .newsletter-section {
            align-items: flex-start;
            width: 100%;
          }

          .newsletter-text {
            text-align: left;
          }

          .newsletter-form {
            width: 100%;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .copyright {
            text-align: center;
          }

          .footer-social {
            justify-content: center;
            width: 100%;
          }
        }

        /* ========== MOBILE DEVICES (481px - 768px) ========== */
        @media (min-width: 481px) and (max-width: 768px) {
          .container {
            width: 92%;
          }

          .footer {
            padding: 40px 0 0 0;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            padding-bottom: 30px;
          }

          .footer-column:last-child {
            grid-column: 1 / -1;
            max-width: 100%;
            margin: 0;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .copyright {
            text-align: center;
          }

          .footer-social {
            justify-content: center;
          }
        }

        /* ========== TABLETS (769px - 1024px) ========== */
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 35px;
          }

          .footer-column:last-child {
            grid-column: 1 / -1;
            max-width: 400px;
            margin: 0 auto;
            width: 100%;
          }

          .footer-column:last-child .newsletter-section {
            align-items: center;
            text-align: center;
          }

          .footer-column:last-child .info-item {
            justify-content: center;
          }

          .footer-column:last-child .footer-links {
            align-items: center;
          }
        }

        /* ========== LAPTOPS (1025px - 1280px) ========== */
        @media (min-width: 1025px) and (max-width: 1280px) {
          .container {
            width: 90%;
            max-width: 1200px;
          }

          .footer-grid {
            gap: 35px;
          }
        }

        /* ========== DESKTOP (1281px - 1600px) ========== */
        @media (min-width: 1281px) and (max-width: 1600px) {
          .container {
            max-width: 1280px;
          }
        }

        /* ========== LARGE DESKTOP (1601px+) ========== */
        @media (min-width: 1601px) {
          .container {
            max-width: 1440px;
          }

          .footer-grid {
            gap: 50px;
          }

          .footer-title {
            font-size: 1.4rem;
          }

          .footer-subtitle {
            font-size: 1.1rem;
          }

          .info-item p {
            font-size: 1rem;
          }

          .footer-links li a {
            font-size: 1rem;
          }

          .newsletter-text {
            font-size: 1rem;
          }

          .newsletter-input {
            font-size: 1rem;
            padding: 14px 20px;
          }

          .newsletter-btn {
            font-size: 1.05rem;
            padding: 14px 28px;
          }

          .copyright {
            font-size: 0.95rem;
          }

          .social-link {
            width: 44px;
            height: 44px;
            font-size: 1.1rem;
          }

          .social-icon {
            font-size: 1.2rem;
          }
        }

        /* ========== PRINT STYLES ========== */
        @media print {
          .footer {
            background: #1c96c5 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .footer-title,
          .footer-subtitle,
          .info-item p,
          .footer-links li a,
          .newsletter-text,
          .copyright {
            color: #ffffff !important;
          }

          .social-link {
            background: #f0f7ff !important;
            color: #0284c7 !important;
          }

          .newsletter-btn {
            background: #e4eef2 !important;
            color: #1c96c5 !important;
          }
        }

        /* ========== DARK MODE SUPPORT ========== */
        @media (prefers-color-scheme: dark) {
          .footer {
            background: #1a7a9e;
          }

          .newsletter-input {
            background: #ffffff;
            color: #333;
          }

          .newsletter-input::placeholder {
            color: #94a3b8;
          }

          .social-link {
            background: #e8f0fe;
            color: #0284c7;
          }

          .social-link:hover {
            background: #0284c7;
            color: #ffffff;
          }
        }

        /* ========== REDUCED MOTION ========== */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }

          .footer-links li a {
            transition: none !important;
          }

          .footer-links li a:hover {
            padding-left: 0 !important;
          }

          .footer-links li a::before {
            transition: none !important;
          }

          .newsletter-btn {
            transition: none !important;
          }

          .newsletter-btn:hover {
            transform: none !important;
          }

          .social-link {
            transition: none !important;
          }

          .social-link:hover {
            transform: none !important;
          }

          .registration-link {
            transition: none !important;
          }

          .registration-link:hover {
            transform: none !important;
            padding-left: 15px !important;
          }
        }

        /* ========== HIGH CONTRAST MODE ========== */
        @media (prefers-contrast: high) {
          .footer {
            background: #0d5a7a;
          }

          .footer-title,
          .footer-subtitle,
          .info-item p,
          .footer-links li a,
          .newsletter-text,
          .copyright {
            color: #ffffff !important;
          }

          .newsletter-input {
            border: 2px solid #0284c7;
          }

          .newsletter-btn {
            background: #ffffff;
            color: #0d5a7a;
            border: 2px solid #0d5a7a;
          }

          .social-link {
            background: #ffffff;
            color: #0d5a7a;
            border: 2px solid #0d5a7a;
          }

          .social-link:hover {
            background: #0d5a7a;
            color: #ffffff;
          }

          .registration-link {
            background: #ff6b35;
            color: #ffffff !important;
          }
        }

        /* ========== LANDSCAPE ORIENTATION ========== */
        @media (max-height: 500px) and (orientation: landscape) {
          .footer {
            padding: 20px 0 0 0;
          }

          .footer-grid {
            gap: 20px;
            padding-bottom: 20px;
          }

          .footer-column {
            gap: 10px;
          }

          .company-info {
            gap: 8px;
          }

          .footer-links {
            gap: 6px;
          }

          .newsletter-form {
            gap: 8px;
          }

          .footer-bottom {
            padding: 15px 0;
          }
        }

        /* ========== FOLDABLE DEVICES ========== */
        @media (max-width: 280px) {
          .container {
            width: 100%;
            padding: 0 8px;
          }

          .footer {
            padding: 15px 0 0 0;
          }

          .footer-grid {
            gap: 15px;
            padding-bottom: 15px;
          }

          .footer-title {
            font-size: 0.85rem;
          }

          .footer-subtitle {
            font-size: 0.75rem;
          }

          .info-item p {
            font-size: 0.7rem;
          }

          .footer-links li a {
            font-size: 0.7rem;
          }

          .newsletter-input {
            font-size: 0.7rem;
            padding: 6px 8px;
          }

          .newsletter-btn {
            font-size: 0.7rem;
            padding: 6px 10px;
          }

          .copyright {
            font-size: 0.65rem;
          }

          .social-link {
            width: 24px;
            height: 24px;
            font-size: 0.65rem;
          }

          .social-icon {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
