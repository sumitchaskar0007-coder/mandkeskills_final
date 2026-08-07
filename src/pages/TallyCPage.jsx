import React from 'react';
import { 
  Shield, 
  Zap, 
  Briefcase, 
  Users, 
  BookOpen, 
  Clock, 
  Calendar, 
  Monitor, 
  Award,
  CheckCircle,
  TrendingUp,
  Building2,
  Mail,
  Phone,
  MapPin,
  FileText,
  Target,
  DollarSign,
  PieChart,
  Database,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Star,
  Quote,
  ArrowRight,
  Globe,
  Rocket,
  Handshake,
  FileCheck,
  Headphones,
  UserCheck,
  Building,
  CreditCard,
  Crown,
  Book,
  FileSpreadsheet,
  Settings,
  Gavel,
  Users as UsersIcon,
  Briefcase as BriefcaseIcon,
  BarChart3
} from 'lucide-react';

const TallyCPage = () => {
  const [expandedModules, setExpandedModules] = React.useState({});
  const [expandedFaqs, setExpandedFaqs] = React.useState({});

  const toggleModule = (index) => {
    setExpandedModules(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleFaq = (index) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Professional Color Scheme - SAME AS OTHER PAGES
  const colors = {
    navy: '#0a1628',
    navyDark: '#060d1a',
    navyLight: '#1a2a4a',
    sky: '#0ea5e9',
    skyLight: '#e0f2fe',
    skyDark: '#0284c7',
    gold: '#fbbf24',
    goldLight: '#fef3c7',
    goldDark: '#d97706',
    white: '#ffffff',
    black: '#0f172a',
    gray: '#64748b',
    grayLight: '#f1f5f9',
    success: '#10b981',
    accent: '#a786f4'
  };

  // Course data
  const courseData = {
    title: "Tally Certification Program",
    promise: "Prove your accounting expertise.",
    badge: "MILES × TALLY",
    intro: "Progress through structured levels of Tally learning and earn an official credential for your skills.",
    accent: "#a786f4",
    facts: ["Three learning levels", "Official credential", "Practical assessments"],
    whyTitle: "Verified skills create stronger opportunities",
    why: "Employers value candidates who can demonstrate both accounting understanding and practical software ability. Structured certification makes that capability visible.",
    outcome: "Move from essential transactions to advanced accounting workflows through a clear, assessed pathway.",
    audience: ["Accounting students", "Tally learners", "Working accountants", "Job-focused graduates"],
    learn: ["Accounting foundations", "Tally Prime essentials", "Intermediate inventory and taxation", "Advanced GST workflows", "Payroll and compliance", "Reports, controls, and assessments"],
    skills: ["Tally proficiency", "Accounting controls", "Tax workflows", "Payroll processing", "Business reporting", "Problem solving"],
    certificate: "Official Tally Certification",
    careers: ["Certified Tally Professional", "Accounts Officer", "GST Executive", "Payroll Executive", "Finance Assistant", "Accounting Consultant"]
  };

  const sharedData = {
    careerOutcomes: [
      { title: 'Certified Tally Professional', salary: '₹3–6 LPA' },
      { title: 'Accounts Officer', salary: '₹3.5–6.5 LPA' },
      { title: 'GST Executive', salary: '₹4–7 LPA' },
      { title: 'Payroll Executive', salary: '₹3–5.5 LPA' },
      { title: 'Finance Assistant', salary: '₹2.8–4.5 LPA' },
      { title: 'Accounting Consultant', salary: '₹5–10 LPA' }
    ],
    testimonials: [
      {
        name: 'Riya Sharma',
        role: 'Certified Tally Professional',
        quote: '"The structured certification path gave me the confidence to apply for senior accounting roles."',
        text: 'The structured certification path gave me the confidence to apply for senior accounting roles. The practical assessments really tested my skills.',
        rating: 5
      },
      {
        name: 'Aditya Patil',
        role: 'Accounts Officer',
        quote: '"The GST and payroll modules were extremely practical and helped me secure my job."',
        text: 'The GST and payroll modules were extremely practical and helped me secure my job. I was able to demonstrate real skills in my interview.',
        rating: 5
      },
      {
        name: 'Priya Joshi',
        role: 'Finance Assistant',
        quote: '"The learning pathway from basics to advanced workflows made the certification valuable."',
        text: 'The learning pathway from basics to advanced workflows made the certification valuable. I could see my progress clearly.',
        rating: 4
      }
    ],
    faqs: [
      {
        q: 'Do I need prior experience?',
        a: 'No. Tally Certification Program starts with the foundations and builds toward practical application.'
      },
      {
        q: 'Is the course practical?',
        a: 'Yes. Sessions include guided exercises, examples, and hands-on assignments.'
      },
      {
        q: 'Will I receive a certificate?',
        a: 'Yes. You receive the Official Tally Certification described above after meeting the completion requirements.'
      },
      {
        q: 'How do I know the next batch dates and fees?',
        a: 'Contact the MILES admissions team for the latest schedule, fee, and enrollment details.'
      }
    ],
    usps: [
      'Structured learning pathway through multiple Tally levels',
      'Official Tally certification upon completion',
      'Practical assessments to validate your skills',
      'Real-world accounting scenarios and exercises',
      'Expert faculty with industry experience',
      'Comprehensive coverage from basics to advanced',
      'GST, payroll, and compliance training',
      'Career guidance and placement support',
      'Flexible learning options available'
    ],
    placementSupport: [
      'Resume Building & LinkedIn Profile Optimization',
      'Mock Interviews & Interview Preparation',
      'Career Guidance & Mentorship',
      'Job Opportunities with Leading Companies',
      'Internship & Fresher Job Support'
    ],
    moduleDetails: [
      {
        title: 'Accounting Foundations',
        topics: ['Accounting Principles', 'Double Entry System', 'Ledger Management', 'Financial Statements', 'Basic Concepts']
      },
      {
        title: 'Tally Prime Essentials',
        topics: ['Company Creation', 'Voucher Entry', 'Banking Reports', 'Basic GST', 'Inventory Basics']
      },
      {
        title: 'Intermediate Inventory & Taxation',
        topics: ['Inventory Management', 'Purchase & Sales Orders', 'Cost Centres', 'Advanced GST Workflows', 'Tax Compliance']
      },
      {
        title: 'Advanced GST & Compliance',
        topics: ['GST Returns', 'E-Invoicing', 'E-Way Bills', 'Composition Scheme', 'Financial Year Closing']
      },
      {
        title: 'Payroll & Compliance',
        topics: ['Payroll Setup', 'Salary Processing', 'Statutory Compliance', 'TDS Management', 'PF & ESI']
      },
      {
        title: 'Reports, Controls & Assessments',
        topics: ['Financial Reporting', 'MIS Reports', 'Business Controls', 'Audit Preparation', 'Final Assessment']
      }
    ]
  };

  return (
    <div className="tallyc-page">
      {/* Hero Section - SAME AS OTHER PAGES */}
      <section className="hero-section">
        <div className="hero-particles"></div>
        <div className="hero-gradient-overlay"></div>
        
        <div className="container hero-container">
          <div className="hero-grid">
            <div className="hero-content fade-up">
              <div className="hero-badge">
                <Crown size={14} className="hero-badge-icon" />
                <span>{courseData.badge}</span>
                <span className="hero-badge-dot"></span>
                <span className="hero-badge-featured">Certification</span>
              </div>
              
              <h1 className="hero-title">
                {courseData.title}
                <span className="hero-title-highlight">{courseData.promise}</span>
              </h1>
              
              <p className="hero-description">
                {courseData.intro}
              </p>
              
              <div className="hero-ideal-for">
                <span className="hero-ideal-label">Ideal For:</span>
                {courseData.audience.map((item, index) => (
                  <span key={index} className="hero-ideal-tag">{item}</span>
                ))}
              </div>
              
              <div className="hero-meta-grid">
                {courseData.facts.map((fact, index) => (
                  <div key={index} className="hero-meta-item">
                    <CheckCircle size={14} className="hero-meta-icon" style={{ color: colors.gold }} />
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
              
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => window.location.href = '/contact'}>
                  <Mail size={16} /> Enquire Now <ArrowRight size={16} />
                </button>
                <button className="btn-secondary">
                  <FileText size={16} /> Download Brochure
                </button>
              </div>
            </div>
            
            <div className="hero-right">
              <div className="hero-stats-card">
                <div className="hero-stats-grid">
                  <div className="hero-stat-item">
                    <div className="hero-stat-number">3</div>
                    <div className="hero-stat-label">Learning Levels</div>
                  </div>
                  <div className="hero-stat-divider"></div>
                  <div className="hero-stat-item">
                    <div className="hero-stat-number">6</div>
                    <div className="hero-stat-label">Core Modules</div>
                  </div>
                  <div className="hero-stat-divider"></div>
                  <div className="hero-stat-item">
                    <div className="hero-stat-number">100%</div>
                    <div className="hero-stat-label">Practical Focus</div>
                  </div>
                </div>
                <div className="hero-stat-features">
                  <div className="hero-stat-feature">
                    <CheckCircle size={14} color={colors.gold} />
                    <span>Official Certification</span>
                  </div>
                  <div className="hero-stat-feature">
                    <CheckCircle size={14} color={colors.gold} />
                    <span>Placement Assistance</span>
                  </div>
                  <div className="hero-stat-feature">
                    <CheckCircle size={14} color={colors.gold} />
                    <span>Practical Assessments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section - SAME AS OTHER PAGES */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon" style={{ background: colors.skyLight, color: colors.sky }}>
                <Award size={20} />
              </div>
              <div className="stat-content">
                <h3>Official</h3>
                <p>Certification</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: colors.goldLight, color: colors.goldDark }}>
                <BarChart3 size={20} />
              </div>
              <div className="stat-content">
                <h3>3 Levels</h3>
                <p>Progressive Learning</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
                <Users size={20} />
              </div>
              <div className="stat-content">
                <h3>6</h3>
                <p>Core Modules</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: '#fce4ec', color: '#dc2626' }}>
                <CheckCircle size={20} />
              </div>
              <div className="stat-content">
                <h3>100%</h3>
                <p>Practical Training</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section - SAME AS OTHER PAGES */}
      <section className="why-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: colors.accent }}>Why This Course</span>
            <h2 style={{ color: colors.black }}>{courseData.whyTitle}</h2>
            <p style={{ color: colors.gray }}>{courseData.why}</p>
          </div>
          <div className="why-content">
            <p className="why-outcome">{courseData.outcome}</p>
          </div>
        </div>
      </section>

      {/* What You'll Learn - Expandable Modules - SAME AS OTHER PAGES */}
      <section className="modules-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: colors.sky }}>Curriculum</span>
            <h2 style={{ color: colors.black }}>What You'll Learn</h2>
            <p style={{ color: colors.gray }}>Progress through structured learning levels</p>
          </div>
          <div className="modules-container">
            {sharedData.moduleDetails.map((module, index) => (
              <div key={index} className={`module-card`}>
                <div className="module-header" onClick={() => toggleModule(index)}>
                  <div className="module-title-area">
                    <h3>Module {index + 1}: {module.title}</h3>
                  </div>
                  <div className="module-meta">
                    {expandedModules[index] ? 
                      <ChevronUp size={16} className="module-toggle" /> : 
                      <ChevronDown size={16} className="module-toggle" />
                    }
                  </div>
                </div>
                {expandedModules[index] && (
                  <div className="module-content">
                    <div className="module-details-grid">
                      <div className="module-detail module-detail-full">
                        <strong>Topics Covered</strong>
                        <ul style={{ color: '#475569', fontSize: '0.78rem', marginTop: '4px', paddingLeft: '20px', listStyle: 'disc' }}>
                          {module.topics.map((topic, idx) => (
                            <li key={idx}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills You'll Gain - SAME AS OTHER PAGES */}
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: colors.gold }}>Skills You'll Gain</span>
            <h2 style={{ color: colors.black }}>Build Practical Capabilities</h2>
            <p style={{ color: colors.gray }}>Develop skills that employers value</p>
          </div>
          <div className="skills-grid">
            {courseData.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon-wrapper">
                  <CheckCircle size={14} className="skill-icon" />
                </div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes - SAME AS OTHER PAGES */}
      <section className="career-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: colors.gold }}>Career Outcomes</span>
            <h2 style={{ color: colors.black }}>Your Future Career Paths</h2>
            <p style={{ color: colors.gray }}>Build a rewarding career in accounting and finance</p>
          </div>
          <div className="career-grid">
            {sharedData.careerOutcomes.map((career, index) => {
              const icons = [Building, BriefcaseIcon, FileSpreadsheet, UsersIcon, Star, TrendingUp];
              const IconComponent = icons[index % icons.length];
              return (
                <div key={index} className="career-card">
                  <div className="career-icon-wrapper">
                    <IconComponent size={20} className="career-icon" />
                  </div>
                  <h3>{career.title}</h3>
                  <p className="career-salary">{career.salary}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Placement Support - SAME AS OTHER PAGES */}
      <section className="placement-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: colors.gold }}>Placement Support</span>
            <h2 style={{ color: colors.white }}>Your Career Journey Starts Here</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Comprehensive support to help you land your dream job</p>
          </div>
          <div className="placement-grid">
            {sharedData.placementSupport.map((item, index) => (
              <div key={index} className="placement-item">
                <div className="placement-icon-wrapper">
                  <Star size={12} />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - SAME AS OTHER PAGES */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: colors.sky }}>Testimonials</span>
            <h2 style={{ color: colors.black }}>What Our Students Say</h2>
            <p style={{ color: colors.gray }}>Real stories from successful graduates who transformed their careers</p>
          </div>
          <div className="testimonials-grid">
            {sharedData.testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-quote-icon">
                  <Quote size={20} />
                </div>
                <h4>{testimonial.quote}</h4>
                <p>{testimonial.text}</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill={i < testimonial.rating ? colors.gold : 'none'} color={colors.gold} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - SAME AS OTHER PAGES */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: colors.sky }}>FAQs</span>
            <h2 style={{ color: colors.black }}>Frequently Asked Questions</h2>
            <p style={{ color: colors.gray }}>Find answers to common questions about our Tally Certification Program</p>
          </div>
          <div className="faq-container">
            {sharedData.faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${expandedFaqs[index] ? 'active' : ''}`}>
                <div 
                  className="faq-question" 
                  onClick={() => toggleFaq(index)}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <div className="faq-icon-wrapper">
                    {expandedFaqs[index] ? 
                      <ChevronUp size={18} className="faq-toggle active" /> : 
                      <ChevronDown size={18} className="faq-toggle" />
                    }
                  </div>
                </div>
                {expandedFaqs[index] && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - SAME AS OTHER PAGES */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-content">
            <h2>Prove Your Accounting Expertise with Official Certification.</h2>
            <p>Join the Tally Certification Program and validate your skills with a recognized credential</p>
            <div className="final-cta-buttons">
              <button className="final-cta-primary" onClick={() => window.location.href = '/contact'}>
                <Mail size={16} /> Enquire Now <ArrowRight size={16} />
              </button>
              <button className="final-cta-secondary" onClick={() => window.location.href = '/contact'}>
                <Phone size={16} /> Talk to Someone
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .tallyc-page {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
          background: #ffffff;
          font-size: 14px;
          line-height: 1.6;
          color: #0f172a;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* HERO SECTION - EXACT SAME AS OTHER PAGES */
        .hero-section {
          position: relative;
          min-height: 70vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(135deg, #0a1628 0%, #0ea5e9 100%);
          padding: 60px 0;
          width: 100%;
        }

        .hero-particles {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(14, 165, 233, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 10% 80%, rgba(251, 191, 36, 0.05) 0%, transparent 40%);
          z-index: 0;
        }

        .hero-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(10, 22, 40, 0.88) 0%, rgba(14, 165, 233, 0.75) 100%);
          z-index: 1;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
          width: 100%;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-right: 20px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px 6px 10px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-size: 0.6rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .hero-badge-icon {
          color: #fbbf24;
        }

        .hero-badge-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }

        .hero-badge-featured {
          color: #fbbf24;
          font-weight: 700;
        }

        .hero-title {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 800;
          line-height: 1.15;
          margin-top: 18px;
          color: #ffffff;
          letter-spacing: -0.02em;
          max-width: 100%;
          width: 100%;
        }

        .hero-title-highlight {
          display: block;
          color: #fbbf24;
        }

        .hero-description {
          margin-top: 16px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 1rem;
          line-height: 1.7;
          max-width: 100%;
          width: 100%;
        }

        .hero-ideal-for {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 18px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          width: 100%;
          max-width: 100%;
        }

        .hero-ideal-label {
          font-size: 0.7rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
        }

        .hero-ideal-tag {
          padding: 4px 12px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .hero-meta-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 18px;
          width: 100%;
        }

        .hero-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.75rem;
          font-weight: 500;
        }

        .hero-meta-icon {
          color: #fbbf24;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border: none;
          padding: 12px 28px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.85rem;
          color: #0a1628;
          cursor: pointer;
          display: flex;
          gap: 8px;
          align-items: center;
          transition: all 0.3s ease;
          box-shadow: 0 8px 30px rgba(251, 191, 36, 0.35);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(251, 191, 36, 0.5);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.08);
          border: 1.5px solid rgba(255, 255, 255, 0.15);
          padding: 12px 28px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.85rem;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          gap: 8px;
          align-items: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .hero-stats-card {
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          overflow: hidden;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
          transition: all 0.4s ease;
        }

        .hero-stats-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          padding: 24px 20px;
          background: linear-gradient(135deg, #0a1628, #1a2a4a);
        }

        .hero-stat-item {
          text-align: center;
        }

        .hero-stat-number {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .hero-stat-label {
          font-size: 0.65rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.3px;
          margin-top: 2px;
        }

        .hero-stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }

        .hero-stat-features {
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .hero-stat-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          font-weight: 500;
          color: #1e293b;
          padding: 4px 0;
        }

        .hero-stat-feature span {
          color: #334155;
        }

        .fade-up {
          animation: fadeUp 0.8s ease-out;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* STATS SECTION - EXACT SAME AS OTHER PAGES */
        .stats-section {
          padding: 25px 0 15px;
          background: #f8fafc;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .stat-card {
          background: #ffffff;
          padding: 16px 20px;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          gap: 14px;
          transition: all 0.3s ease;
          border: 1px solid #f1f5f9;
        }

        .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }

        .stat-icon {
          padding: 8px;
          border-radius: 8px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-content h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0;
          color: #0a1628;
        }

        .stat-content p {
          color: #64748b;
          font-size: 0.72rem;
          margin: 0;
          font-weight: 500;
        }

        /* WHY SECTION */
        .why-section {
          padding: 40px 0;
          background: #ffffff;
        }

        .why-content {
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
        }

        .why-outcome {
          font-size: 1rem;
          line-height: 1.7;
          color: #475569;
          padding: 16px 24px;
          background: #f8fafc;
          border-radius: 10px;
          border-left: 4px solid #a786f4;
        }

        /* SECTION HEADER - EXACT SAME AS OTHER PAGES */
        .section-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 28px;
        }

        .section-tag {
          font-weight: 700;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-block;
        }

        .section-header h2 {
          font-size: 1.8rem;
          font-weight: 800;
          margin-top: 6px;
          letter-spacing: -0.01em;
        }

        .section-header p {
          margin-top: 8px;
          font-size: 0.85rem;
          line-height: 1.6;
        }

        /* MODULES SECTION - EXACT SAME AS OTHER PAGES */
        .modules-section {
          padding: 40px 0;
          background: #f8fafc;
        }

        .modules-container {
          max-width: 860px;
          margin: 0 auto;
        }

        .module-card {
          background: #ffffff;
          border-radius: 10px;
          margin-bottom: 10px;
          border: 1.5px solid #f1f5f9;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .module-card:hover {
          border-color: #e0f2fe;
        }

        .module-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 18px;
          cursor: pointer;
          transition: all 0.3s ease;
          gap: 8px;
        }

        .module-header:hover {
          background: #f8fafc;
        }

        .module-title-area h3 {
          font-size: 0.85rem;
          font-weight: 700;
          color: #0f172a;
        }

        .module-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          flex-shrink: 0;
        }

        .module-toggle {
          color: #94a3b8;
          transition: all 0.3s ease;
        }

        .module-content {
          padding: 0 18px 18px;
          border-top: 1px solid #f1f5f9;
          background: #fafbfc;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .module-details-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px 16px;
          padding-top: 14px;
        }

        .module-detail {
          font-size: 0.78rem;
        }

        .module-detail strong {
          display: block;
          font-weight: 700;
          margin-bottom: 2px;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          color: #0ea5e9;
        }

        .module-detail-full {
          grid-column: 1 / -1;
        }

        .module-detail ul {
          margin: 4px 0 0 0;
        }

        .module-detail li {
          margin-bottom: 2px;
        }

        /* SKILLS SECTION */
        .skills-section {
          padding: 40px 0;
          background: #ffffff;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px 28px;
          max-width: 760px;
          margin: 0 auto;
        }

        .skill-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 5px 0;
          font-size: 0.8rem;
          line-height: 1.5;
          color: #1e293b;
        }

        .skill-icon-wrapper {
          flex-shrink: 0;
          margin-top: 2px;
          background: #d1fae5;
          padding: 3px;
          border-radius: 5px;
        }

        .skill-icon {
          color: #10b981;
        }

        /* CAREER SECTION - EXACT SAME AS OTHER PAGES */
        .career-section {
          padding: 40px 0;
          background: #f8fafc;
        }

        .career-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          max-width: 860px;
          margin: 0 auto;
        }

        .career-card {
          background: #ffffff;
          padding: 18px 14px;
          border-radius: 10px;
          text-align: center;
          border: 1px solid #f1f5f9;
          transition: all 0.3s ease;
        }

        .career-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
          border-color: #fbbf24;
        }

        .career-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
        }

        .career-icon {
          color: #0ea5e9;
          padding: 6px;
          background: #e0f2fe;
          border-radius: 8px;
        }

        .career-card h3 {
          font-size: 0.78rem;
          font-weight: 600;
          margin-bottom: 3px;
          color: #0f172a;
        }

        .career-salary {
          font-weight: 700;
          font-size: 0.8rem;
          color: #0ea5e9;
        }

        /* PLACEMENT SECTION - EXACT SAME AS OTHER PAGES */
        .placement-section {
          padding: 40px 0;
          background: linear-gradient(135deg, #0a1628, #1a2a4a);
        }

        .placement-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          max-width: 760px;
          margin: 0 auto;
        }

        .placement-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.76rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          transition: all 0.3s ease;
        }

        .placement-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .placement-icon-wrapper {
          display: flex;
          padding: 3px;
          border-radius: 5px;
          flex-shrink: 0;
          color: #fbbf24;
        }

        /* TESTIMONIALS SECTION - EXACT SAME AS OTHER PAGES */
        .testimonials-section {
          padding: 40px 0;
          background: #ffffff;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .testimonial-card {
          padding: 20px;
          border-radius: 10px;
          border: 1px solid #f1f5f9;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          background: #fafbfc;
        }

        .testimonial-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
          border-color: #e0f2fe;
        }

        .testimonial-quote-icon {
          margin-bottom: 8px;
          color: #0ea5e9;
          opacity: 0.3;
        }

        .testimonial-card h4 {
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 6px;
          color: #0f172a;
        }

        .testimonial-card p {
          font-size: 0.78rem;
          line-height: 1.6;
          margin-bottom: 10px;
          color: #475569;
          flex: 1;
        }

        .testimonial-author {
          display: flex;
          flex-direction: column;
        }

        .testimonial-author strong {
          font-weight: 700;
          font-size: 0.78rem;
          color: #0f172a;
        }

        .testimonial-author span {
          font-size: 0.68rem;
          color: #64748b;
        }

        .testimonial-rating {
          display: flex;
          gap: 2px;
          margin-top: 6px;
        }

        /* FAQ SECTION - EXACT SAME AS OTHER PAGES */
        .faq-section {
          padding: 40px 0;
          background: #f8fafc;
        }

        .faq-container {
          max-width: 760px;
          margin: 0 auto;
        }

        .faq-item {
          background: #ffffff;
          border-radius: 8px;
          margin-bottom: 8px;
          border: 1px solid #f1f5f9;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: #e0f2fe;
        }

        .faq-item.active {
          border-color: #0ea5e9;
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.8rem;
          color: #0f172a;
          transition: all 0.3s ease;
          gap: 10px;
        }

        .faq-question:hover {
          background: #f8fafc;
        }

        .faq-item.active .faq-question {
          background: #f0f9ff;
        }

        .faq-question-text {
          flex: 1;
        }

        .faq-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .faq-toggle {
          color: #94a3b8;
          transition: all 0.3s ease;
        }

        .faq-toggle.active {
          color: #0ea5e9;
        }

        .faq-answer {
          max-height: none;
          overflow: visible;
          padding: 0 16px 14px;
          font-size: 0.78rem;
          line-height: 1.7;
          color: #475569;
        }

        .faq-answer p {
          margin: 3px 0;
        }

        /* FINAL CTA SECTION - EXACT SAME AS OTHER PAGES */
        .final-cta-section {
          padding: 50px 20px;
          background: linear-gradient(135deg, #0a1628, #1a2a4a);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .final-cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%);
          z-index: 0;
        }

        .final-cta-content {
          position: relative;
          z-index: 1;
        }

        .final-cta-section h2 {
          font-size: 2rem;
          font-weight: 800;
          max-width: 700px;
          margin: 0 auto 10px;
          line-height: 1.2;
          color: #ffffff;
        }

        .final-cta-section p {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 520px;
          margin: 0 auto 24px;
        }

        .final-cta-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .final-cta-primary {
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          color: #0a1628;
          border: none;
          padding: 10px 30px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.8rem;
          cursor: pointer;
          display: flex;
          gap: 8px;
          align-items: center;
          transition: all 0.3s ease;
          box-shadow: 0 8px 30px rgba(251, 191, 36, 0.3);
        }

        .final-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(251, 191, 36, 0.4);
        }

        .final-cta-secondary {
          background: rgba(255, 255, 255, 0.08);
          border: 1.5px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          padding: 10px 30px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.8rem;
          cursor: pointer;
          display: flex;
          gap: 8px;
          align-items: center;
          transition: all 0.3s ease;
        }

        .final-cta-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        /* RESPONSIVE - EXACT SAME AS OTHER PAGES */
        @media (max-width: 1024px) {
          .container {
            padding: 0 20px;
          }
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 32px;
          }
          .hero-stats-card {
            max-width: 380px;
          }
          .career-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 900px) {
          .container {
            padding: 0 16px;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 24px;
          }
          .hero-content {
            text-align: center;
            align-items: center;
            padding-right: 0;
          }
          .hero-description {
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .hero-title {
            max-width: 100%;
            font-size: 1.8rem;
          }
          .hero-ideal-for {
            justify-content: center;
            max-width: 100%;
          }
          .hero-meta-grid {
            justify-content: center;
          }
          .hero-buttons {
            justify-content: center;
          }
          .hero-right {
            justify-content: center;
          }
          .hero-stats-card {
            max-width: 420px;
          }
          .career-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonials-grid {
            grid-template-columns: 1fr 1fr;
          }
          .placement-grid {
            grid-template-columns: 1fr;
          }
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }
          .section-header h2,
          .final-cta-section h2 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 12px;
          }
          .hero-section {
            min-height: auto;
            padding: 30px 0;
          }
          .hero-title {
            font-size: 1.4rem;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          .btn-primary,
          .btn-secondary {
            width: 100%;
            justify-content: center;
          }
          .hero-ideal-for {
            gap: 6px;
          }
          .hero-ideal-tag {
            font-size: 0.6rem;
            padding: 3px 10px;
          }
          .hero-stats-grid {
            padding: 16px 12px;
          }
          .hero-stat-number {
            font-size: 1.4rem;
          }
          .hero-stat-label {
            font-size: 0.55rem;
          }
          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .stat-card {
            padding: 12px 14px;
            flex-direction: column;
            text-align: center;
          }
          .stat-content h3 {
            font-size: 0.95rem;
          }
          .career-grid {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }
          .career-card {
            padding: 12px 10px;
          }
          .career-card h3 {
            font-size: 0.68rem;
          }
          .career-salary {
            font-size: 0.68rem;
          }
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .section-header h2 {
            font-size: 1.2rem;
          }
          .final-cta-section h2 {
            font-size: 1.2rem;
          }
          .final-cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          .final-cta-primary,
          .final-cta-secondary {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
          .module-header {
            flex-wrap: wrap;
            gap: 4px;
          }
          .module-title-area h3 {
            font-size: 0.75rem;
          }
          .placement-item {
            font-size: 0.68rem;
            padding: 8px 12px;
          }
          .faq-question {
            font-size: 0.74rem;
            padding: 10px 14px;
          }
          .faq-answer {
            font-size: 0.72rem;
            padding: 0 14px 10px;
          }
          .section-header {
            margin-bottom: 20px;
          }
          .why-section,
          .modules-section,
          .skills-section,
          .career-section,
          .placement-section,
          .testimonials-section,
          .faq-section {
            padding: 30px 0;
          }
          .why-outcome {
            font-size: 0.9rem;
            padding: 12px 16px;
          }
        }

        @media (max-width: 400px) {
          .container {
            padding: 0 8px;
          }
          .hero-title {
            font-size: 1.1rem;
          }
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .career-grid {
            grid-template-columns: 1fr 1fr;
            gap: 6px;
          }
          .hero-badge {
            font-size: 0.5rem;
            padding: 4px 10px 4px 6px;
          }
          .section-header h2 {
            font-size: 1rem;
          }
          .final-cta-section h2 {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TallyCPage;
