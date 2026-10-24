import React, { useState, useRef } from 'react';
const courseOptions = [
  'EXIM Trade',
  'Insurance Essentials',
  'Tally Prime 7.0',
  'TallyEssential Level 1',
  'TallyEssential Level 2',
  'TallyEssential Level 3',
  'Tally Professional Certification',
  'Tally Certification Program',
  'Certified Ethical Hacking',
  'AI & Data Science Excellence',
  'Generative AI & Machine Learning',
  'GenAI & ML No-Code',
  'Personality Development',
];
const InquiryForm = ({ 
  prefix = 'contact', 
  className = '', 
  onSubmit,
  apiUrl = 'http://localhost:5000/api/contact' 
}) => {
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const formRef = useRef(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSubmitStatus(null);
    setStatusMessage('');
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name') || '',
      email: formData.get('email') || '',
      phone: formData.get('phone') || '',
      program: formData.get('program') || '',
      message: formData.get('message') || '',
    };
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage(result.message || 'Your enquiry has been submitted successfully!');
        if (formRef.current) {
          formRef.current.reset();
        }
        if (onSubmit) {
          onSubmit({ ...data, success: true });
        }
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message || 'Something went wrong. Please try again.');
        if (onSubmit) {
          onSubmit({ ...data, success: false, error: result.message });
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
      if (onSubmit) {
        onSubmit({ ...data, success: false, error: error.message });
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form 
        ref={formRef}
        className={`contact-form ${className}`} 
        onSubmit={handleSubmit}
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor={`${prefix}-name`}>Full Name</label>
            <input 
              type="text" 
              id={`${prefix}-name`} 
              name="name" 
              placeholder="Enter your full name" 
              required 
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`${prefix}-email`}>Email Address</label>
            <input 
              type="email" 
              id={`${prefix}-email`} 
              name="email" 
              placeholder="Enter your email" 
              required 
              disabled={loading}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor={`${prefix}-phone`}>Phone Number</label>
            <input 
              type="tel" 
              id={`${prefix}-phone`} 
              name="phone" 
              placeholder="Enter your phone number" 
              required 
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`${prefix}-program`}>Program Interest</label>
            <select 
              id={`${prefix}-program`} 
              name="program" 
              defaultValue="" 
              required 
              disabled={loading}
            >
              <option value="" disabled>Select a program</option>
              {courseOptions.map((course) => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group full-width">
          <label htmlFor={`${prefix}-message`}>Your Message</label>
          <textarea 
            id={`${prefix}-message`} 
            name="message" 
            rows="4" 
            placeholder="Tell us about your requirements..." 
            disabled={loading}
          />
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="form-success">
            <span className="success-icon">✅</span>
            {statusMessage}
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="form-error">
            <span className="error-icon">⚠️</span>
            {statusMessage}
          </div>
        )}

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? (
            <>
              <span className="spinner"></span>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
      <style>{`
        /* Base styles */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
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
          font-size: 14px;
          font-family: "Poppins", sans-serif;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 12px 14px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          transition: 0.3s;
          background: #ffffff;
          color: #1a2332;
          width: 100%;
          box-sizing: border-box;
          -webkit-appearance: none;
          appearance: none;
        }

        /* Custom select arrow */
        .form-group select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%231a2332' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 36px;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #1a56db;
          box-shadow: 0 0 0 3px rgba(26, 86, 219, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #94a3b8;
        }

        .form-success {
          padding: 12px 16px;
          background: #d4edda;
          border: 1px solid #c3e6cb;
          border-radius: 10px;
          color: #155724;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          word-break: break-word;
        }

        .form-error {
          padding: 12px 16px;
          background: #f8d7da;
          border: 1px solid #f5c6cb;
          border-radius: 10px;
          color: #721c24;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          word-break: break-word;
        }

        .success-icon, .error-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .spinner {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          flex-shrink: 0;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .submit-btn {
          background: linear-gradient(135deg, #1a56db, #1e40af);
          color: white;
          border: none;
          padding: 14px 24px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: 0.4s;
          font-family: "Poppins", sans-serif;
          box-shadow: 0 15px 35px rgba(26, 86, 219, 0.25);
          width: 100%;
          min-height: 52px;
          box-sizing: border-box;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(26, 86, 219, 0.35);
        }
        .submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        input:disabled, select:disabled, textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          background: #f5f5f5;
        }
        /* Tablet and smaller screens */
        @media (max-width: 768px) {
          .contact-form {
            gap: 14px;
          }
          .form-row {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .form-group.full-width {
            grid-column: 1;
          }
          .form-group input,
          .form-group select,
          .form-group textarea {
            padding: 11px 14px;
            font-size: 15px; /* Better for mobile touch */
            border-radius: 10px;
          }
          .form-group label {
            font-size: 13px;
          }

          .submit-btn {
            padding: 14px 20px;
            font-size: 15px;
            min-height: 48px;
          }
          .form-success,
          .form-error {
            font-size: 13px;
            padding: 10px 14px;
          }
        }
        /* Mobile phones */
        @media (max-width: 480px) {
          .contact-form {
            gap: 12px;
          }
          .form-row {
            gap: 12px;
          }
          .form-group input,
          .form-group select,
          .form-group textarea {
            padding: 10px 12px;
            font-size: 14px;
            border-radius: 8px;
          }
          .form-group label {
            font-size: 12px;
            gap: 6px;
          }

          .submit-btn {
            padding: 12px 16px;
            font-size: 14px;
            min-height: 44px;
            border-radius: 10px;
          }

          .form-success,
          .form-error {
            font-size: 12px;
            padding: 8px 12px;
            border-radius: 8px;
          }

          .success-icon, .error-icon {
            font-size: 16px;
          }

          .spinner {
            width: 16px;
            height: 16px;
          }
        }

        /* Very small phones */
        @media (max-width: 360px) {
          .form-group input,
          .form-group select,
          .form-group textarea {
            padding: 8px 10px;
            font-size: 13px;
          }

          .submit-btn {
            padding: 10px 14px;
            font-size: 13px;
            min-height: 40px;
          }

          .form-success,
          .form-error {
            font-size: 11px;
            padding: 6px 10px;
          }
        }
        /* Landscape phones */
        @media (max-height: 500px) and (orientation: landscape) {
          .contact-form {
            gap: 10px;
          }

          .form-row {
            gap: 10px;
          }

          .form-group input,
          .form-group select {
            padding: 8px 12px;
          }

          .form-group textarea {
            min-height: 60px;
          }

          .submit-btn {
            min-height: 40px;
            padding: 10px 16px;
          }
        }

        /* Touch device improvements */
        @media (hover: none) {
          .submit-btn:hover:not(:disabled) {
            transform: none;
          }
        }

        /* High DPI screens */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .form-group input,
          .form-group select,
          .form-group textarea {
            border-width: 0.5px;
          }
        }

        /* Dark mode support - optional */
        @media (prefers-color-scheme: dark) {
          .form-group label {
            color: #e2e8f0;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            background: #1a2332;
            border-color: #334155;
            color: #f1f5f9;
          }

          .form-group input::placeholder,
          .form-group textarea::placeholder {
            color: #64748b;
          }

          .form-group select {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23f1f5f9' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
          }

          .form-group input:disabled,
          .form-group select:disabled,
          .form-group textarea:disabled {
            background: #0f172a;
          }

          .form-success {
            background: #1a3a2a;
            border-color: #2a4a3a;
            color: #8fdfb0;
          }

          .form-error {
            background: #3a1a1a;
            border-color: #4a2a2a;
            color: #df8f8f;
          }
        }

        /* Accessibility - Reduce motion */
        @media (prefers-reduced-motion: reduce) {
          .spinner {
            animation-duration: 1.5s;
          }
        }
      `}</style>
    </>
  );
};

export default InquiryForm;
