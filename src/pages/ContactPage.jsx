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
import InquiryForm from '../components/InquiryForm';

const ContactPage = () => {
  // API URL - Use import.meta.env for Vite
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/contact';

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
    // You can add additional analytics or tracking here
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/assets/images/cont.png" alt="Contact Us Background" loading="eager" decoding="async" fetchPriority="high" />
        </div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content hero-form-content fade-up" id="contact-form">
              <InquiryForm 
                prefix="hero" 
                onSubmit={handleFormSubmit}
                apiUrl={API_URL}
              />
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

      <style>{`
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

        /* Form styles */
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

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-5px);
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

          .quick-info-grid {
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

          .quick-info-grid {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .quick-info-section {
            margin-top: -40px;
          }

          .quick-info-card {
            padding: 25px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .hero-section {
            min-height: 70vh;
          }

          .hero-content {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
