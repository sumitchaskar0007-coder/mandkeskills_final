import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Building2, 
  Users, 
  Award,
  Briefcase,
  MessageCircle,
  Send,
  Calendar,
  User,
  FileText,
  Star,
  CheckCircle,
  ArrowRight,
  Home,
  Navigation
} from 'lucide-react';

const InquiryForm = ({ prefix = 'contact' }) => (
  <form className="contact-form">
    <div className="form-row">
      <div className="form-group">
        <label htmlFor={`${prefix}-name`}>Full Name</label>
        <input type="text" id={`${prefix}-name`} placeholder="Enter your full name" />
      </div>
      <div className="form-group">
        <label htmlFor={`${prefix}-email`}>Email Address</label>
        <input type="email" id={`${prefix}-email`} placeholder="Enter your email" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group">
        <label htmlFor={`${prefix}-phone`}>Phone Number</label>
        <input type="tel" id={`${prefix}-phone`} placeholder="Enter your phone number" />
      </div>
      <div className="form-group">
        <label htmlFor={`${prefix}-program`}>Program Interest</label>
        <select id={`${prefix}-program`} defaultValue="hacking">
          <option value="" disabled>Select a program</option>
          <option value="exim">EXIM Trade</option>
          <option value="insurance">Insurance Essentials</option>
          <option value="tally">Tally Prime 7.0</option>
          <option value="tally-comprehensive">Tally Comprehensive</option>
          <option value="hacking">Ethical Hacking</option>
          <option value="ai">AI &amp; Data Science</option>
          <option value="genai">GenAI &amp; ML No-Code</option>
          <option value="personality">Personality Development</option>
        </select>
      </div>
    </div>
    <div className="form-group full-width">
      <label htmlFor={`${prefix}-message`}>Your Message</label>
      <textarea id={`${prefix}-message`} rows="4" placeholder="Tell us about your requirements..." />
    </div>
    <button type="submit" className="submit-btn">Send Message</button>
  </form>
);

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/assets/images/cont.png" alt="Contact Us Background" />
        </div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content hero-form-content fade-up" id="contact-form">
              <InquiryForm prefix="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="quick-info-section">
        <div className="container">
          <div className="quick-info-grid">
            <div className="quick-info-card">
              <div className="quick-info-icon">
                <MapPin size={28} />
              </div>
              <h3>Visit Us</h3>
              <p>
                Mandke Growth Centre,<br />
                Next to Ideal Colony Metro Station,<br />
                Paud Road, Kothrud, Pune 411038.<br />
                Maharashtra, India
              </p>
            </div>
            <div className="quick-info-card">
              <div className="quick-info-icon">
                <Clock size={28} />
              </div>
              <h3>Hours for Enquiry</h3>
              <p>
                <strong>Mon-Sat:</strong> 10am - 4pm<br />
                <strong>Sun:</strong> Weekly Off
              </p>
            </div>
            <div className="quick-info-card">
              <div className="quick-info-icon">
                <MessageCircle size={28} />
              </div>
              <h3>Quick Contact</h3>
              <p>
                <strong>Phone:</strong> <a href="tel:+919112220491">+91 9112220491</a><br />
                <strong>Email:</strong> <a href="mailto:mandkeskills@gmail.com">mandkeskills@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of students who have transformed their careers with Miles.</p>
        </div>
      </section>

      {/* Footer */}
    

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

        .contact-page {
          font-family: "Poppins", "Times New Roman", serif;
          overflow-x: hidden;
          background: #ffffff;
        }

        .cta-section > .container > p {
          white-space: nowrap;
        }

        .container {
          width: 90%;
          max-width: 1280px;
          margin: auto;
        }

        /* HERO SECTION */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: none;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hero-background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
          min-height: auto;
          padding: 36px 0;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 650px;
          background: rgba(2, 6, 23, 0.75);
          padding: 50px;
          border-radius: 24px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hero-form-content {
          width: min(100%, 700px);
          max-width: 700px;
          margin: 0 auto 0 -8%;
          padding: 36px;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.85);
          box-shadow: 0 24px 60px rgba(2, 6, 23, 0.28);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 22px;
          border-radius: 50px;
          background: rgba(26, 86, 219, 0.15);
          border: 1px solid rgba(26, 86, 219, 0.3);
          color: #1a56db;
          font-weight: 600;
          backdrop-filter: blur(10px);
          font-family: "Poppins", sans-serif;
        }

        .inline-icon {
          width: 20px;
          height: 20px;
          color: #1a56db;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-top: 25px;
          color: #ffffff;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .hero-title span {
          display: block;
          color: #1a56db;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .hero-description {
          margin-top: 25px;
          color: #e2e8f0;
          font-size: 1.1rem;
          line-height: 1.8;
          font-family: "Poppins", sans-serif;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          margin-top: 35px;
          flex-wrap: wrap;
        }

        .primary-btn {
          background: linear-gradient(135deg, #1a56db, #1e40af);
          color: #ffffff;
          border: none;
          padding: 15px 30px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          transition: 0.4s ease;
          box-shadow: 0 15px 35px rgba(26, 86, 219, 0.35);
          font-family: "Poppins", sans-serif;
          text-decoration: none;
        }

        .primary-btn:hover {
          transform: translateY(-5px);
        }

        .secondary-btn {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: #ffffff;
          padding: 15px 30px;
          border-radius: 14px;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: 0.4s;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          font-family: "Poppins", sans-serif;
          text-decoration: none;
        }

        .secondary-btn:hover {
          background: rgba(255,255,255,0.15);
        }

        .fade-up {
          animation: fadeUp 1s ease;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* QUICK INFO */
        .quick-info-section {
          margin-top: -70px;
          position: relative;
          z-index: 10;
          padding-bottom: 60px;
        }

        .quick-info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .quick-info-card {
          background: #ffffff;
          padding: 35px;
          border-radius: 24px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          transition: 0.4s;
          font-family: "Poppins", sans-serif;
          text-align: center;
          border: 1px solid #e2e8f0;
        }

        .quick-info-card:hover {
          transform: translateY(-10px);
          border-color: #1a56db;
        }

        .quick-info-icon {
          display: inline-flex;
          padding: 16px;
          background: #e8edf5;
          border-radius: 16px;
          margin-bottom: 20px;
          color: #1a56db;
        }

        .quick-info-card h3 {
          font-size: 22.4px;
          font-weight: 700;
          color: #1a2332;
          margin-bottom: 15px;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .quick-info-card p {
          color: #1a2332;
          font-size: 15.7px;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .quick-info-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #1a56db;
          font-weight: 600;
          text-decoration: none;
          font-size: 15.7px;
          transition: 0.3s;
        }

        .quick-info-link:hover {
          gap: 12px;
        }

        /* ABOUT STATS */
        .about-stats-section {
          padding: 80px 0 120px;
          background: #f8fafc;
        }

        .about-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .section-tag {
          color: #1a56db;
          font-weight: 700;
          font-size: 15.7px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .about-text h2 {
          font-size: 2.5rem;
          margin: 15px 0 20px;
          color: #1a2332;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .about-text p {
          color: #1a2332;
          line-height: 1.8;
          font-size: 17.9px;
        }

        .about-features {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .about-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16.8px;
          color: #1a2332;
        }

        .about-feature svg {
          color: #1a56db;
          flex-shrink: 0;
        }

        .stats-showcase {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .stats-showcase-card {
          background: #ffffff;
          padding: 35px 20px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: 0.4s;
          border: 1px solid #e2e8f0;
        }

        .stats-showcase-card:hover {
          transform: translateY(-8px);
          border-color: #1a56db;
        }

        .stats-showcase-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a56db;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .stats-showcase-card p {
          color: #1a2332;
          font-size: 15.7px;
          margin-top: 8px;
        }

        /* CONTACT FORM */
        .contact-form-section {
          padding: 120px 0;
          background: #ffffff;
        }

        .section-header {
          text-align: center;
          max-width: 800px;
          margin: auto;
        }

        .section-header span {
          color: #1a56db;
          font-weight: 700;
          font-family: "Poppins", sans-serif;
        }

        .section-header h2 {
          font-size: 3rem;
          margin-top: 15px;
          color: #1a2332;
          font-family: "Times New Roman", "Poppins", serif;
        }

        .section-header p {
          margin-top: 20px;
          color: #1a2332;
          line-height: 1.8;
          font-family: "Poppins", sans-serif;
        }

        .contact-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          margin-top: 70px;
        }

        .contact-form-wrapper {
          background: #ffffff;
          padding: 40px;
          border-radius: 24px;
          border: 1px solid #e2e8f0;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: #1a2332;
          font-size: 15.7px;
        }

        .form-group label svg {
          color: #1a56db;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 12px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          font-family: "Poppins", sans-serif;
          font-size: 15.7px;
          transition: 0.3s;
          background: #ffffff;
          color: #1a2332;
          accent-color: #1a56db;
        }

        .form-group input:-webkit-autofill,
        .form-group input:-webkit-autofill:hover,
        .form-group input:-webkit-autofill:focus {
          -webkit-text-fill-color: #1a2332;
          -webkit-box-shadow: 0 0 0 1000px #ffffff inset;
          box-shadow: 0 0 0 1000px #ffffff inset;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #1a56db;
          box-shadow: 0 0 0 3px rgba(26, 86, 219, 0.1);
        }

        .submit-btn {
          background: linear-gradient(135deg, #1a56db, #1e40af);
          color: white;
          border: none;
          padding: 16px 30px;
          border-radius: 14px;
          font-weight: 600;
          font-size: 17.9px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: 0.4s;
          font-family: "Poppins", sans-serif;
          box-shadow: 0 15px 35px rgba(26, 86, 219, 0.25);
        }

        .submit-btn:hover {
          transform: translateY(-5px);
        }

        .contact-map-wrapper {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .map-container {
          background: #f8fafc;
          border-radius: 24px;
          padding: 40px;
          border: 1px solid #e2e8f0;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map-placeholder {
          text-align: center;
        }

        .map-pin {
          color: #1a56db;
          margin-bottom: 15px;
        }

        .map-placeholder h3 {
          font-size: 22.4px;
          color: #1a2332;
          font-family: "Times New Roman", "Poppins", serif;
          margin-bottom: 10px;
        }

        .map-placeholder p {
          color: #1a2332;
          font-size: 15.7px;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .map-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #1a56db;
          font-weight: 600;
          text-decoration: none;
          transition: 0.3s;
        }

        .map-link:hover {
          gap: 12px;
        }

        .contact-details {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
        }

        .contact-detail-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          background: #f8fafc;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          transition: 0.3s;
        }

        .contact-detail-item:hover {
          border-color: #1a56db;
          transform: translateY(-5px);
        }

        .detail-icon {
          color: #1a56db;
          flex-shrink: 0;
        }

        .contact-detail-item h4 {
          font-size: 15.7px;
          font-weight: 600;
          color: #1a2332;
          margin: 0;
        }

        .contact-detail-item p {
          font-size: 14.6px;
          color: #1a2332;
          margin: 0;
        }

        /* CTA */
        .cta-section {
          padding: 18px 20px !important;
          text-align: center;
          background: linear-gradient(135deg, #020617, #0f172a);
          color: #ffffff;
        }

        .cta-section h2 {
          margin: 0;
          font-size: 2.25rem;
          line-height: 1.15;
          font-family: "Times New Roman", "Poppins", serif;
          color: #ffffff;
        }

        .cta-section p {
          max-width: 700px;
          margin: 8px auto 0;
          color: #cbd5e1;
          line-height: 1.4;
          font-family: "Poppins", sans-serif;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .cta-primary {
          background: linear-gradient(135deg, #1a56db, #1e40af);
          color: #ffffff;
          border: none;
          padding: 16px 35px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          transition: 0.4s;
          font-family: "Poppins", sans-serif;
          box-shadow: 0 15px 35px rgba(26, 86, 219, 0.3);
          text-decoration: none;
        }

        .cta-primary:hover {
          transform: translateY(-5px);
        }

        .cta-secondary {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #ffffff;
          padding: 16px 35px;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          transition: 0.4s;
          font-family: "Poppins", sans-serif;
          text-decoration: none;
        }

        .cta-secondary:hover {
          background: rgba(255,255,255,0.2);
        }

        /* FOOTER */
        .footer {
          background: #020617;
          padding: 30px 0;
          text-align: center;
          color: #64748b;
          font-size: 15.7px;
          border-top: 1px solid rgba(255,255,255,0.05);
          font-family: "Poppins", sans-serif;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .hero-title {
            font-size: 3rem;
          }

          .about-stats-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .contact-form-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .quick-info-grid {
            grid-template-columns: 1fr 1fr;
          }

          .contact-details {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .cta-section > .container > p {
            white-space: normal;
          }

          .hero-form-content {
            margin: 0 auto;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            min-height: 80vh;
            padding: 60px 0;
          }

          .hero-content {
            max-width: 100%;
            padding: 30px 20px;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .section-header h2,
          .cta-section h2 {
            font-size: 2rem;
          }

          .quick-info-grid {
            grid-template-columns: 1fr;
          }

          .stats-showcase {
            grid-template-columns: 1fr 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-details {
            grid-template-columns: 1fr;
          }

          .quick-info-section {
            margin-top: -40px;
          }

          .quick-info-card {
            padding: 25px;
          }

          .contact-form-wrapper {
            padding: 25px;
          }
        }

        @media (max-width: 480px) {
          .stats-showcase {
            grid-template-columns: 1fr;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .hero-badge {
            font-size: 13.4px;
            padding: 8px 16px;
          }

          .hero-section {
            min-height: 70vh;
          }

          .hero-content {
            padding: 20px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-primary,
          .cta-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
