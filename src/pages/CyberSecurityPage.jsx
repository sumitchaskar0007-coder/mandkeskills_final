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
  Lock,
  Server,
  Cloud,
  Cpu,
  AlertTriangle,
  Fingerprint,
  Globe,
  Network
} from 'lucide-react';

const CyberSecurityPage = () => {
  const [expandedModules, setExpandedModules] = React.useState({});
  const [expandedFaqs, setExpandedFaqs] = React.useState({});
  const [activeCourse, setActiveCourse] = React.useState(0);

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

  const courseColors = [
    { primary: '#7c3aed', light: '#ede9fe', gradient: 'linear-gradient(135deg, #7c3aed, #6d28d9)', dark: '#4c1d95', bg: '#f5f3ff' },
    { primary: '#059669', light: '#d1fae5', gradient: 'linear-gradient(135deg, #059669, #047857)', dark: '#064e3b', bg: '#ecfdf5' },
    { primary: '#dc2626', light: '#fee2e2', gradient: 'linear-gradient(135deg, #dc2626, #b91c1c)', dark: '#7f1d1d', bg: '#fef2f2' }
  ];

  const courses = [
    {
      id: 0,
      title: 'Cyber Starter',
      program: 'Foundation Program',
      duration: '3 Months',
      level: 'Beginner',
      idealFor: 'Students & beginners starting their cybersecurity journey',
      coreFocus: 'Computer Fundamentals, Networking & Cyber Security Basics',
      whatYoullMaster: 'Computer Fundamentals • Networking Basics • Cyber Security Fundamentals • AI & ML Basics • Ethical Hacking Introduction • Digital Counter Intelligence • IoT Fundamentals • Drone Forensics Basics • Cyber Laws & Digital Safety',
      projects: 'Basic cyber security labs & simulations',
      skills: 'Cyber Security Fundamentals',
      certification: 'Cyber Starter Certificate',
      careers: 'Cyber Security Intern • Junior Security Analyst',
      description: 'Build a strong foundation in cybersecurity with hands-on training in networking, AI, IoT, and digital forensics.',
      color: courseColors[0]
    },
    {
      id: 1,
      title: 'Cyber Defender',
      program: 'Advanced Program',
      duration: '6 Months',
      level: 'Intermediate',
      idealFor: 'Learners with basic cybersecurity knowledge',
      coreFocus: 'Network Security, VAPT & Incident Response',
      whatYoullMaster: 'Network & System Security • Vulnerability Assessment • Penetration Testing • Financial Fraud Investigation • Social Media Investigation • Digital Evidence Collection • Incident Response • Cyber Security Case Studies',
      projects: 'Hands-on lab exercises & internship',
      skills: 'Security Operations & Incident Response',
      certification: 'Cyber Defender Certificate',
      careers: 'SOC Analyst • Security Analyst • Incident Responder',
      description: 'Master network security, penetration testing, and incident response with real-world simulations.',
      color: courseColors[1]
    },
    {
      id: 2,
      title: 'Cyber Expert',
      program: 'Expert Program',
      duration: '9 Months',
      level: 'Advanced',
      idealFor: 'Aspiring cybersecurity professionals',
      coreFocus: 'Advanced Ethical Hacking, AI Security & SOC Operations',
      whatYoullMaster: 'Advanced Ethical Hacking • Advanced AI for Cyber Security • IoT & Drone Forensics • Cloud Security • Cyber Crime Investigation • Security Operations Center (SOC) • Red Team & Blue Team Concepts • Capstone Project',
      projects: 'Capstone project & certification preparation (CEH, CHFI, AWS Security)',
      skills: 'Expert Cyber Security Operations',
      certification: 'Cyber Expert Certificate',
      careers: 'VAPT Engineer • Cyber Security Consultant • SOC Engineer',
      description: 'Become an expert with advanced ethical hacking, AI security, cloud security, and SOC operations.',
      color: courseColors[2]
    }
  ];

  // Shared data used across all courses
  const sharedData = {
    careerOutcomes: [
      { title: 'SOC Analyst', salary: '₹3.5–6 LPA' },
      { title: 'Cyber Security Analyst', salary: '₹4–8 LPA' },
      { title: 'VAPT / Ethical Hacker', salary: '₹5–10 LPA' },
      { title: 'Digital Forensic Investigator', salary: '₹4–8 LPA' },
      { title: 'Cyber Crime Investigator', salary: '₹5–9 LPA' },
      { title: 'Network Security Administrator', salary: '₹3.5–7 LPA' },
      { title: 'AI Security Associate', salary: '₹6–12 LPA' },
      { title: 'Cloud Security Associate', salary: '₹6–12 LPA' },
      { title: 'SOC Engineer', salary: '₹4–9 LPA' },
      { title: 'Cyber Security Consultant', salary: '₹8–18 LPA' }
    ],
    testimonials: [
      {
        name: 'Rahul S.',
        role: 'Cyber Security Analyst',
        quote: '"The hands-on cyber labs and real-world simulations gave me practical skills."',
        text: 'The hands-on cyber labs and real-world simulations gave me practical skills that employers value. I felt confident during interviews because of the live projects and expert guidance.',
        rating: 5
      },
      {
        name: 'Priya M.',
        role: 'SOC Analyst',
        quote: '"The internship and placement support helped me transition from a beginner."',
        text: 'The internship, mock interviews, and placement support helped me transition from a beginner to a job-ready cybersecurity professional.',
        rating: 5
      },
      {
        name: 'Akash P.',
        role: 'VAPT Engineer',
        quote: '"The curriculum is practical and industry-focused."',
        text: 'The curriculum is practical and industry-focused. Learning AI, ethical hacking, and digital forensics in one program gave me a competitive edge.',
        rating: 5
      },
      {
        name: 'Kiran K.',
        role: 'Digital Forensics Intern',
        quote: '"The mentors explained complex concepts in a simple way."',
        text: 'The mentors explained complex cybersecurity concepts in a simple way. The practical approach made learning engaging and easy to apply.',
        rating: 4
      },
      {
        name: 'Aditya R.',
        role: 'Cyber Security Consultant',
        quote: '"MILES doesn\'t just teach cybersecurity—it prepares you for a career."',
        text: 'MILES doesn\'t just teach cybersecurity—it prepares you for a career. The resume workshops, certification guidance, and interview preparation made a huge difference.',
        rating: 5
      },
      {
        name: 'Neha D.',
        role: 'Cloud Security Associate',
        quote: '"From classroom learning to real-world projects, every module built confidence."',
        text: 'From classroom learning to real-world projects, every module was designed to build confidence and practical skills. I highly recommend this program to anyone starting a career in cybersecurity.',
        rating: 5
      }
    ],
    faqs: [
      {
        q: 'Do I need prior coding or cybersecurity knowledge?',
        a: 'Not at all. The Foundation Program is designed for beginners with no prior coding or cybersecurity experience. You\'ll start with the fundamentals and gradually progress to advanced concepts through guided, hands-on learning.'
      },
      {
        q: 'Who is eligible to enroll in this program?',
        a: 'The program is open to 12th pass students, graduates, postgraduates, working professionals, and career switchers from Commerce, Science, Arts, Engineering, or any other academic background.'
      },
      {
        q: 'What practical experience will I gain?',
        a: 'You\'ll learn through hands-on cyber labs, live simulations, Capture-the-Flag (CTF) challenges, real-world case studies, projects, and internship opportunities that mirror industry environments.'
      },
      {
        q: 'Which career opportunities can I pursue after completing this program?',
        a: 'Graduates can explore roles such as SOC Analyst, Cyber Security Analyst, Ethical Hacker, VAPT Consultant, Digital Forensic Investigator, Cyber Crime Investigator, Cloud Security Associate, AI Security Associate, and Cyber Security Consultant.'
      },
      {
        q: 'Which industry certifications does this program prepare me for?',
        a: 'The curriculum is designed to build the knowledge required for globally recognized certifications, including CEH (Certified Ethical Hacker), CHFI (Computer Hacking Forensic Investigator), AWS Security, and other industry-relevant cybersecurity certifications.'
      },
      {
        q: 'Does the program include an internship?',
        a: 'Yes. Depending on the program level, students gain internship opportunities, live projects, practical assignments, and capstone projects to build real-world experience and strengthen their professional portfolio.'
      }
    ],
    usps: [
      'Industry-Focused Curriculum',
      'Hands-on Cyber Labs & Simulations',
      'AI, IoT & Drone Forensics Integration',
      'Internship & Live Project Experience',
      'Expert Mentors & Practical Training',
      'Global Certification Preparation (CEH, CHFI, AWS)',
      'Placement Assistance & Career Support',
      'Progressive Learning Path (Foundation to Diploma)',
      'Real-World Case Studies & CTF Challenges',
      'Job-Ready Skills for High-Growth Cybersecurity Careers'
    ],
    learningOutcomes: [
      'Master computer fundamentals and networking concepts.',
      'Understand cyber security basics and ethical hacking principles.',
      'Learn AI, machine learning, and IoT fundamentals for security.',
      'Perform vulnerability assessment and penetration testing.',
      'Conduct digital forensics and cyber crime investigations.',
      'Implement network and system security measures.',
      'Manage incident response and security operations.',
      'Work with cloud security and advanced AI security concepts.',
      'Gain practical experience through labs, CTF challenges, and internships.',
      'Prepare for global certifications like CEH, CHFI, and AWS Security.'
    ],
    placementSupport: [
      'Resume Building & LinkedIn Profile Optimization',
      'Technical & HR Mock Interviews',
      'Internship & Live Project Opportunities',
      'Career Counselling & Mentorship',
      'Soft Skills & Interview Readiness Training',
      'Industry Networking & Hiring Drives',
      'Employer Readiness & Career Mapping',
      'Guidance for Global Cybersecurity Certifications',
      'Ongoing Career Support After Course Completion'
    ]
  };

  const currentCourse = courses[activeCourse];

  return (
    <div className="cyber-page">
      {/* Hero Section with Background Image */}
      <section 
        className="hero-section"
        style={{
          background: `linear-gradient(135deg, ${currentCourse.color.dark}CC 0%, ${currentCourse.color.primary}BB 50%, ${currentCourse.color.light}99 100%)`
        }}
      >
        <div className="hero-background-image">
          <img src="/assets/images/cyber-bg.png" alt="Cyber Security Background" loading="eager" decoding="async" fetchPriority="high" />
        </div>
        <div className="hero-overlay"></div>
        
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content fade-up">
              <div className="hero-badge" style={{ background: currentCourse.color.light, color: currentCourse.color.primary, borderColor: currentCourse.color.primary }}>
                <Shield size={14} /> {currentCourse.program}
              </div>
              <h1 className="hero-title">
                Protect the Digital World.<br />
                <span>Build a Career That Matters.</span>
              </h1>
              <p className="hero-description">
                Learn how to identify, prevent and respond to cyber threats through hands-on training, 
                real-world simulations and industry best practices. Develop the practical skills employers 
                look for in today's rapidly growing cybersecurity industry.
              </p>
              <div className="hero-meta-grid">
                <div className="hero-meta-item"><Clock size={14} /><span>{currentCourse.duration}</span></div>
                <div className="hero-meta-item"><Award size={14} /><span>{currentCourse.level}</span></div>
                <div className="hero-meta-item"><Users size={14} /><span>Max 25 Students</span></div>
                <div className="hero-meta-item"><Monitor size={14} /><span>Online Live</span></div>
              </div>
              <div className="hero-buttons">
                <button className="primary-btn" style={{ background: currentCourse.color.gradient }} onClick={() => window.location.href = '/contact'}>
                  Enquire Now <ArrowRight size={16} />
                </button>
                <button className="secondary-btn"><FileText size={16} /> Download Brochure</button>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-card" style={{ borderColor: currentCourse.color.primary }}>
                <div className="hero-card-header" style={{ background: currentCourse.color.gradient }}>
                  <h3>Course Overview</h3>
                </div>
                <div className="hero-card-content">
                  <div className="hero-card-item"><strong>Program</strong><span>{currentCourse.program}</span></div>
                  <div className="hero-card-item"><strong>Duration</strong><span>{currentCourse.duration}</span></div>
                  <div className="hero-card-item"><strong>Skill Level</strong><span style={{ color: currentCourse.color.primary, fontWeight: 600 }}>{currentCourse.level}</span></div>
                  <div className="hero-card-item"><strong>Ideal For</strong><span>{currentCourse.idealFor}</span></div>
                  <div className="hero-card-item"><strong>Certification</strong><span>{currentCourse.certification}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats - Floating Cards */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card" style={{ 
              borderTop: `3px solid ${currentCourse.color.primary}`,
              background: currentCourse.color.bg
            }}>
              <div className="stat-icon" style={{ background: currentCourse.color.light, color: currentCourse.color.primary }}><Clock size={20} /></div>
              <div className="stat-content"><h3 style={{ color: currentCourse.color.primary }}>{currentCourse.duration}</h3><p>Total Duration</p></div>
            </div>
            <div className="stat-card" style={{ 
              borderTop: `3px solid ${currentCourse.color.primary}`,
              background: currentCourse.color.bg
            }}>
              <div className="stat-icon" style={{ background: currentCourse.color.light, color: currentCourse.color.primary }}><Award size={20} /></div>
              <div className="stat-content"><h3 style={{ color: currentCourse.color.primary }}>{currentCourse.level}</h3><p>Skill Level</p></div>
            </div>
            <div className="stat-card" style={{ 
              borderTop: `3px solid ${currentCourse.color.primary}`,
              background: currentCourse.color.bg
            }}>
              <div className="stat-icon" style={{ background: currentCourse.color.light, color: currentCourse.color.primary }}><Users size={20} /></div>
              <div className="stat-content"><h3 style={{ color: currentCourse.color.primary }}>25</h3><p>Max Batch Size</p></div>
            </div>
            <div className="stat-card" style={{ 
              borderTop: `3px solid ${currentCourse.color.primary}`,
              background: currentCourse.color.bg
            }}>
              <div className="stat-icon" style={{ background: currentCourse.color.light, color: currentCourse.color.primary }}><Monitor size={20} /></div>
              <div className="stat-content"><h3 style={{ color: currentCourse.color.primary }}>Online</h3><p>Live Learning</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Navigation - Below Stats Section */}
      <section className="course-nav-section" style={{ background: currentCourse.color.bg }}>
        <div className="container">
          <div className="course-nav-wrapper">
            <div className="course-nav">
              {courses.map((course, index) => (
                <button 
                  key={index} 
                  className={`course-nav-btn ${activeCourse === index ? 'active' : ''}`} 
                  onClick={() => setActiveCourse(index)} 
                  style={{ 
                    borderBottom: activeCourse === index ? `2px solid ${course.color.primary}` : '2px solid transparent', 
                    color: activeCourse === index ? course.color.primary : '#64748b' 
                  }}
                >
                  <span className="course-nav-icon" style={{ background: activeCourse === index ? course.color.light : '#f1f5f9' }}>
                    <Shield size={14} style={{ color: activeCourse === index ? course.color.primary : '#94a3b8' }} />
                  </span>
                  <span>{course.title}</span>
                </button>
              ))}
            </div>
            <button 
              className="course-nav-enquire"
              style={{ background: currentCourse.color.gradient }}
              onClick={() => window.location.href = '/contact'}
            >
              Enquire Now <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* The MILES Advantage */}
      <section className="usp-section">
        <div className="container">
          <div className="section-header">
            <span style={{ color: currentCourse.color.primary }}>The MILES Advantage</span>
            <h2>Why Choose MILES for Cyber Security?</h2>
          </div>
          <div className="usp-grid">
            {sharedData.usps.map((usp, index) => (
              <div key={index} className="usp-item">
                <CheckCircle className="usp-icon" size={14} style={{ color: currentCourse.color.primary }} />
                <span>{usp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="career-section">
        <div className="container">
          <div className="section-header">
            <span style={{ color: currentCourse.color.primary }}>Career Outcomes</span>
            <h2>Your Future Career Paths</h2>
            <p>Build a rewarding career in cybersecurity with high-growth opportunities</p>
          </div>
          <div className="career-grid">
            {sharedData.careerOutcomes.map((career, index) => (
              <div key={index} className="career-card" style={{ borderColor: currentCourse.color.light }}>
                <div className="career-icon" style={{ background: currentCourse.color.light, color: currentCourse.color.primary }}>
                  {index % 3 === 0 ? <Lock size={18} /> : 
                   index % 3 === 1 ? <Server size={18} /> : 
                   <Shield size={18} />}
                </div>
                <h3>{career.title}</h3>
                <p className="career-salary" style={{ color: currentCourse.color.primary }}>{career.salary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn - Expandable Modules */}
      <section className="modules-section">
        <div className="container">
          <div className="section-header">
            <span style={{ color: currentCourse.color.primary }}>Curriculum</span>
            <h2>What You'll Learn</h2>
            <p>Choose the right course path for your cybersecurity career goals</p>
          </div>
          <div className="modules-container">
            {courses.map((course, index) => (
              <div key={index} className="module-card" style={{ borderColor: activeCourse === index ? course.color.primary : '#e2e8f0' }}>
                <div className="module-header" onClick={() => toggleModule(index)}>
                  <div className="module-title-area">
                    <h3 style={{ color: activeCourse === index ? course.color.primary : '#0f172a' }}>{course.title}</h3>
                    <span className="module-program">{course.program}</span>
                  </div>
                  <div className="module-meta">
                    <span className="module-duration">{course.duration}</span>
                    <span className={`module-level`} style={{ 
                      background: course.level === 'Beginner' ? '#dbeafe' : 
                                 course.level === 'Intermediate' ? '#fef3c7' : '#fce4ec', 
                      color: course.level === 'Beginner' ? '#1e40af' : 
                             course.level === 'Intermediate' ? '#92400e' : '#b71c1c' 
                    }}>
                      {course.level}
                    </span>
                    {expandedModules[index] ? <ChevronUp size={16} style={{ color: course.color.primary }} /> : <ChevronDown size={16} style={{ color: course.color.primary }} />}
                  </div>
                </div>
                {expandedModules[index] && (
                  <div className="module-content">
                    <div className="module-details-grid">
                      <div className="module-detail"><strong style={{ color: course.color.primary }}>Ideal For</strong><p>{course.idealFor}</p></div>
                      <div className="module-detail"><strong style={{ color: course.color.primary }}>Core Focus</strong><p>{course.coreFocus}</p></div>
                      <div className="module-detail"><strong style={{ color: course.color.primary }}>What You'll Master</strong><p>{course.whatYoullMaster}</p></div>
                      <div className="module-detail"><strong style={{ color: course.color.primary }}>Hands-on Projects</strong><p>{course.projects}</p></div>
                      <div className="module-detail"><strong style={{ color: course.color.primary }}>Industry Skills</strong><p>{course.skills}</p></div>
                      <div className="module-detail"><strong style={{ color: course.color.primary }}>Certification</strong><p>{course.certification}</p></div>
                      <div className="module-detail module-detail-full"><strong style={{ color: course.color.primary }}>Career Opportunities</strong><p>{course.careers}</p></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="learning-section">
        <div className="container">
          <div className="section-header">
            <span style={{ color: currentCourse.color.primary }}>Learning Outcomes</span>
            <h2>What You'll Achieve</h2>
          </div>
          <div className="learning-grid">
            {sharedData.learningOutcomes.map((outcome, index) => (
              <div key={index} className="learning-item">
                <CheckCircle className="learning-icon" size={14} style={{ color: currentCourse.color.primary }} />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Support */}
      <section className="placement-section" style={{ background: currentCourse.color.light }}>
        <div className="container">
          <div className="section-header">
            <span style={{ color: currentCourse.color.primary }}>Placement Support</span>
            <h2>Your Career Journey Starts Here</h2>
          </div>
          <div className="placement-grid">
            {sharedData.placementSupport.map((item, index) => (
              <div key={index} className="placement-item" style={{ borderColor: currentCourse.color.primary }}>
                <div className="placement-icon-wrapper" style={{ background: currentCourse.color.light, color: currentCourse.color.primary }}>
                  <Star size={14} />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span style={{ color: currentCourse.color.primary }}>Testimonials</span>
            <h2>What Our Students Say</h2>
          </div>
          <div className="testimonials-grid">
            {sharedData.testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card" style={{ borderColor: currentCourse.color.light }}>
                <Quote className="testimonial-quote" size={20} style={{ color: currentCourse.color.primary }} />
                <h4>{testimonial.quote}</h4>
                <p>{testimonial.text}</p>
                <div className="testimonial-author">
                  <strong style={{ color: currentCourse.color.primary }}>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill={i < testimonial.rating ? currentCourse.color.primary : 'none'} color={currentCourse.color.primary} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span style={{ color: currentCourse.color.primary }}>FAQs</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-container">
            {sharedData.faqs.map((faq, index) => (
              <div key={index} className="faq-item" style={{ borderColor: currentCourse.color.light }}>
                <div className="faq-question" onClick={() => toggleFaq(index)} style={{ color: currentCourse.color.primary }}>
                  <span>{faq.q}</span>
                  {expandedFaqs[index] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                {expandedFaqs[index] && (
                  <div className="faq-answer">
                    {faq.a.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section" style={{ background: currentCourse.color.gradient }}>
        <div className="container">
          <h2>The Digital World Needs Cyber Defenders. Could You Be One of Them?</h2>
          <div className="final-cta-buttons">
            <button className="final-cta-primary" onClick={() => window.location.href = '/contact'}>
              <Mail size={16} /> Enquire Now <ArrowRight size={16} />
            </button>
                          <button className="final-cta-secondary" onClick={() => window.location.href = '/contact'}>
<Phone size={16} /> Talk to Someone</button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .cyber-page {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
          background: #ffffff;
          font-size: 14px;
          line-height: 1.5;
          color: #1e293b;
        }

        .container {
          width: 92%;
          max-width: 1200px;
          margin: auto;
          padding: 0 16px;
        }

        /* HERO SECTION */
        .hero-section {
          position: relative;
          min-height: 70vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 30px 0;
        }

        .hero-background-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hero-background-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.15);
          z-index: 1;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-content { position: relative; z-index: 2; }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.65rem;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          border: 1.5px solid;
          font-family: "Inter", sans-serif;
        }

        .hero-title {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.1;
          margin-top: 14px;
          color: #ffffff;
          letter-spacing: -0.02em;
          font-family: "Inter", sans-serif;
          text-shadow: 0 2px 16px rgba(0,0,0,0.15);
        }

        .hero-title span {
          color: #ffffff;
          font-family: "Inter", sans-serif;
        }

        .hero-description {
          margin-top: 12px;
          color: rgba(255,255,255,0.95);
          font-size: 0.95rem;
          line-height: 1.6;
          font-weight: 400;
          max-width: 520px;
          text-shadow: 0 1px 8px rgba(0,0,0,0.1);
        }

        .hero-meta-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 18px;
        }

        .hero-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.95);
          font-size: 0.78rem;
          font-weight: 500;
          text-shadow: 0 1px 8px rgba(0,0,0,0.1);
        }

        .hero-meta-item svg { opacity: 0.8; }

        .hero-buttons {
          display: flex;
          gap: 12px;
          margin-top: 22px;
          flex-wrap: wrap;
        }

        .primary-btn {
          color: white;
          border: none;
          padding: 10px 26px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.82rem;
          cursor: pointer;
          display: flex;
          gap: 6px;
          align-items: center;
          transition: 0.25s ease;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
          font-family: "Inter", sans-serif;
        }

        .primary-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(0,0,0,0.25); }

        .secondary-btn {
          background: rgba(255,255,255,0.12);
          border: 1.5px solid rgba(255,255,255,0.25);
          color: white;
          padding: 10px 26px;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: 0.25s;
          display: flex;
          gap: 6px;
          align-items: center;
          font-family: "Inter", sans-serif;
          backdrop-filter: blur(8px);
        }

        .secondary-btn:hover { background: rgba(255,255,255,0.2); transform: translateY(-2px); }

        .hero-right { display: flex; justify-content: flex-end; }

        .hero-card {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(12px);
          border-radius: 12px;
          border: 1.5px solid;
          overflow: hidden;
          width: 100%;
          max-width: 380px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.12);
        }

        .hero-card-header { padding: 14px 20px; color: white; }
        .hero-card-header h3 { font-size: 0.95rem; font-weight: 700; margin: 0; font-family: "Inter", sans-serif; }
        .hero-card-content { padding: 14px 20px; }
        .hero-card-item { display: flex; justify-content: space-between; padding: 7px 0; border-bottom: 1px solid #e2e8f0; font-size: 0.78rem; }
        .hero-card-item:last-child { border-bottom: none; }
        .hero-card-item strong { color: #1e293b; font-weight: 600; }
        .hero-card-item span { color: #475569; text-align: right; max-width: 60%; }

        .fade-up { animation: fadeUp 0.7s ease; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        /* STATS SECTION */
        .stats-section { margin-top: -30px; position: relative; z-index: 10; padding-bottom: 10px; }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .stat-card {
          padding: 16px 20px;
          border-radius: 10px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.06);
          transition: 0.25s;
          display: flex;
          align-items: center;
          gap: 14px;
          text-align: left;
          border-top: 3px solid;
        }
        .stat-card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.08); }
        .stat-icon { padding: 10px; border-radius: 10px; flex-shrink: 0; }
        .stat-content h3 { font-size: 1.3rem; font-weight: 700; margin: 0; font-family: "Inter", sans-serif; }
        .stat-content p { color: #64748b; font-size: 0.78rem; margin: 0; }

        /* COURSE NAV */
        .course-nav-section { padding: 20px 0 30px; transition: background 0.3s ease; }
        .course-nav-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .course-nav { display: flex; gap: 4px; flex-wrap: wrap; }
        .course-nav-btn {
          padding: 8px 18px;
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: "Inter", sans-serif;
        }
        .course-nav-btn:hover { opacity: 0.8; }
        .course-nav-btn.active { border-bottom: 2px solid; }
        .course-nav-icon { padding: 4px; border-radius: 6px; display: flex; align-items: center; justify-content: center; }
        .course-nav-enquire {
          padding: 8px 20px;
          border-radius: 6px;
          border: none;
          color: white;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.25s ease;
          font-family: "Inter", sans-serif;
          box-shadow: 0 2px 12px rgba(124, 58, 237, 0.25);
          white-space: nowrap;
        }
        .course-nav-enquire:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(124, 58, 237, 0.35); }

        /* SECTION HEADER */
        .section-header { text-align: center; max-width: 680px; margin: 0 auto 32px; }
        .section-header span { font-weight: 600; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.5px; font-family: "Inter", sans-serif; }
        .section-header h2 { font-size: 1.8rem; font-weight: 700; margin-top: 6px; color: #0f172a; letter-spacing: -0.01em; font-family: "Inter", sans-serif; }
        .section-header p { margin-top: 10px; color: #64748b; font-size: 0.85rem; line-height: 1.6; }

        /* USP SECTION */
        .usp-section { padding: 40px 0; background: #ffffff; }
        .usp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px 28px; max-width: 880px; margin: 0 auto; }
        .usp-item { display: flex; align-items: flex-start; gap: 8px; padding: 4px 0; font-size: 0.8rem; line-height: 1.4; color: #1e293b; }
        .usp-icon { flex-shrink: 0; margin-top: 2px; }

        /* CAREER SECTION */
        .career-section { padding: 40px 0; background: #f8fafc; }
        .career-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
        .career-card {
          background: white;
          padding: 16px 12px;
          border-radius: 10px;
          text-align: center;
          border: 1.5px solid;
          transition: 0.25s;
        }
        .career-card:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(0,0,0,0.06); }
        .career-icon { display: inline-flex; padding: 8px; border-radius: 8px; margin-bottom: 8px; }
        .career-card h3 { font-size: 0.72rem; font-weight: 600; color: #0f172a; margin-bottom: 3px; font-family: "Inter", sans-serif; }
        .career-salary { font-weight: 600; font-size: 0.78rem; font-family: "Inter", sans-serif; }

        /* MODULES SECTION */
        .modules-section { padding: 40px 0; background: #ffffff; }
        .modules-container { max-width: 860px; margin: 0 auto; }
        .module-card { background: white; border-radius: 8px; margin-bottom: 10px; border: 1.5px solid; overflow: hidden; transition: 0.25s; }
        .module-card:hover { box-shadow: 0 2px 16px rgba(0,0,0,0.04); }
        .module-header { display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; cursor: pointer; transition: 0.25s; }
        .module-header:hover { background: #f8fafc; }
        .module-title-area { display: flex; flex-direction: column; gap: 2px; }
        .module-title-area h3 { font-size: 0.85rem; font-weight: 600; font-family: "Inter", sans-serif; transition: color 0.25s; }
        .module-program { font-size: 0.68rem; color: #64748b; }
        .module-meta { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
        .module-duration { font-size: 0.68rem; color: #64748b; }
        .module-level { padding: 2px 10px; border-radius: 16px; font-size: 0.62rem; font-weight: 600; letter-spacing: 0.2px; }
        .module-content { padding: 16px 20px; border-top: 1px solid #e2e8f0; background: #fafbfc; }
        .module-details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 16px; }
        .module-detail { font-size: 0.76rem; }
        .module-detail strong { display: block; font-weight: 600; margin-bottom: 2px; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.2px; }
        .module-detail p { color: #475569; margin: 0; line-height: 1.4; }
        .module-detail-full { grid-column: 1 / -1; }

        /* LEARNING SECTION */
        .learning-section { padding: 40px 0; background: #f8fafc; }
        .learning-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px 28px; max-width: 860px; margin: 0 auto; }
        .learning-item { display: flex; align-items: flex-start; gap: 8px; padding: 4px 0; font-size: 0.8rem; line-height: 1.4; color: #1e293b; }
        .learning-icon { flex-shrink: 0; margin-top: 2px; }

        /* PLACEMENT SECTION */
        .placement-section { padding: 40px 0; }
        .placement-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; max-width: 760px; margin: 0 auto; }
        .placement-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: white;
          border-radius: 8px;
          border: 1.5px solid;
          font-size: 0.76rem;
          font-weight: 500;
          color: #1e293b;
          transition: 0.25s;
        }
        .placement-item:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.04); }
        .placement-icon-wrapper { display: flex; padding: 4px; border-radius: 4px; }

        /* TESTIMONIALS SECTION */
        .testimonials-section { padding: 40px 0; background: #ffffff; }
        .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .testimonial-card {
          background: #f8fafc;
          padding: 20px;
          border-radius: 10px;
          border: 1.5px solid;
          transition: 0.25s;
        }
        .testimonial-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.04); }
        .testimonial-quote { margin-bottom: 8px; opacity: 0.4; }
        .testimonial-card h4 { font-size: 0.85rem; font-weight: 600; color: #0f172a; margin-bottom: 6px; font-family: "Inter", sans-serif; }
        .testimonial-card p { color: #475569; font-size: 0.78rem; line-height: 1.5; margin-bottom: 10px; }
        .testimonial-author { display: flex; flex-direction: column; }
        .testimonial-author strong { font-weight: 600; font-size: 0.78rem; }
        .testimonial-author span { color: #64748b; font-size: 0.7rem; }
        .testimonial-rating { display: flex; gap: 2px; margin-top: 6px; }

        /* FAQ SECTION */
        .faq-section { padding: 40px 0; background: #f8fafc; }
        .faq-container { max-width: 760px; margin: 0 auto; }
        .faq-item { background: white; border-radius: 8px; margin-bottom: 8px; border: 1.5px solid; overflow: hidden; }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.82rem;
          transition: 0.25s;
        }
        .faq-question:hover { background: #f8fafc; }
        .faq-answer { padding: 0 16px 14px; color: #475569; font-size: 0.8rem; line-height: 1.6; }
        .faq-answer p { margin: 3px 0; }

        /* FINAL CTA SECTION */
        .final-cta-section { padding: 40px 20px; text-align: center; color: white; }
        .final-cta-section h2 { font-size: 2rem; font-weight: 700; max-width: 680px; margin: 0 auto 24px; line-height: 1.2; font-family: "Inter", sans-serif; }
        .final-cta-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .final-cta-primary {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          color: white;
          border: 1.5px solid rgba(255,255,255,0.25);
          padding: 10px 30px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.82rem;
          cursor: pointer;
          display: flex;
          gap: 6px;
          align-items: center;
          transition: 0.25s;
          font-family: "Inter", sans-serif;
        }
        .final-cta-primary:hover { background: rgba(255,255,255,0.25); transform: translateY(-2px); }
        .final-cta-secondary {
          background: rgba(255,255,255,0.04);
          border: 1.5px solid rgba(255,255,255,0.15);
          color: white;
          padding: 10px 30px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.82rem;
          cursor: pointer;
          display: flex;
          gap: 6px;
          align-items: center;
          transition: 0.25s;
          font-family: "Inter", sans-serif;
        }
        .final-cta-secondary:hover { background: rgba(255,255,255,0.12); transform: translateY(-2px); }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr 1fr; gap: 30px; }
          .hero-title { font-size: 2.4rem; }
          .career-grid { grid-template-columns: repeat(4, 1fr); }
          .testimonials-grid { grid-template-columns: 1fr 1fr; }
          .usp-grid, .learning-grid { grid-template-columns: 1fr; }
          .placement-grid { grid-template-columns: 1fr 1fr; }
          .section-header h2, .final-cta-section h2 { font-size: 1.8rem; }
          .course-nav-btn { padding: 6px 14px; font-size: 0.72rem; }
          .course-nav-enquire { padding: 6px 16px; font-size: 0.72rem; }
        }

        @media (max-width: 820px) {
          .hero-grid { grid-template-columns: 1fr; text-align: center; gap: 24px; }
          .hero-content { text-align: center; }
          .hero-title { font-size: 2rem; }
          .hero-description { max-width: 100%; margin: 0 auto; }
          .hero-meta-grid { justify-content: center; }
          .hero-buttons { justify-content: center; }
          .hero-right { justify-content: center; }
          .hero-card { max-width: 100%; }
          .career-grid { grid-template-columns: repeat(3, 1fr); }
          .testimonials-grid { grid-template-columns: 1fr 1fr; }
          .placement-grid { grid-template-columns: 1fr 1fr; }
          .module-details-grid { grid-template-columns: 1fr; }
          .module-header { flex-wrap: wrap; gap: 6px; }
          .final-cta-buttons { flex-direction: column; align-items: center; }
          .final-cta-primary, .final-cta-secondary { width: 100%; max-width: 320px; justify-content: center; }
          .stats-grid { grid-template-columns: 1fr 1fr; }
          .course-nav-wrapper { flex-direction: column; align-items: stretch; gap: 10px; }
          .course-nav { justify-content: center; }
          .course-nav-enquire { justify-content: center; }
          .stat-card { padding: 14px 16px; }
        }

        @media (max-width: 600px) {
          .hero-title { font-size: 1.6rem; }
          .hero-description { font-size: 0.85rem; }
          .hero-badge { font-size: 0.58rem; padding: 4px 12px; }
          .hero-meta-item { font-size: 0.7rem; }
          .hero-meta-grid { gap: 10px; }
          .stats-section { margin-top: -20px; }
          .stats-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
          .stat-card { padding: 12px; flex-direction: column; text-align: center; }
          .stat-content h3 { font-size: 1.1rem; }
          .section-header h2 { font-size: 1.5rem; }
          .final-cta-section h2 { font-size: 1.5rem; }
          .career-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
          .career-card { padding: 12px 10px; }
          .career-card h3 { font-size: 0.68rem; }
          .career-salary { font-size: 0.7rem; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .placement-grid { grid-template-columns: 1fr; }
          .module-header { padding: 10px 14px; }
          .module-title-area h3 { font-size: 0.78rem; }
          .module-content { padding: 12px 14px; }
          .module-detail { font-size: 0.72rem; }
          .usp-item, .learning-item { font-size: 0.76rem; }
          .placement-item { font-size: 0.72rem; padding: 10px 12px; }
          .faq-question { font-size: 0.76rem; padding: 10px 14px; }
          .faq-answer { font-size: 0.74rem; padding: 0 14px 12px; }
          .primary-btn, .secondary-btn { padding: 8px 20px; font-size: 0.76rem; }
          .final-cta-primary, .final-cta-secondary { padding: 10px 24px; font-size: 0.76rem; }
          .container { width: 94%; padding: 0 8px; }
          .section-header { margin-bottom: 24px; }
          .usp-section, .career-section, .modules-section, .learning-section, .placement-section, .testimonials-section, .faq-section { padding: 30px 0; }
          .final-cta-section { padding: 30px 16px; }
          .course-nav-section { padding: 15px 0 20px; }
          .course-nav-btn { padding: 5px 10px; font-size: 0.6rem; gap: 4px; }
          .course-nav-icon { padding: 3px; }
          .course-nav-enquire { padding: 5px 14px; font-size: 0.65rem; }
          .hero-card-header { padding: 10px 16px; }
          .hero-card-content { padding: 10px 16px; }
          .hero-card-item { padding: 5px 0; font-size: 0.7rem; }
          .hero-section { min-height: auto; padding: 20px 0; }
        }

        @media (max-width: 400px) {
          .hero-title { font-size: 1.3rem; }
          .section-header h2 { font-size: 1.3rem; }
          .final-cta-section h2 { font-size: 1.3rem; }
          .career-grid { grid-template-columns: 1fr 1fr; gap: 6px; }
          .career-card h3 { font-size: 0.6rem; }
          .career-salary { font-size: 0.65rem; }
          .hero-buttons { flex-direction: column; align-items: center; }
          .primary-btn, .secondary-btn { width: 100%; justify-content: center; }
          .stats-grid { grid-template-columns: 1fr; }
          .module-meta { gap: 6px; }
          .module-duration { font-size: 0.6rem; }
          .module-level { font-size: 0.55rem; padding: 2px 8px; }
          .course-nav-btn { font-size: 0.55rem; padding: 4px 8px; }
          .course-nav-enquire { font-size: 0.58rem; padding: 4px 12px; }
          .course-nav { gap: 2px; }
        }
      `}</style>
    </div>
  );
};

export default CyberSecurityPage;
