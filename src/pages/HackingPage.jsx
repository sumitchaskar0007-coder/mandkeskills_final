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
  BarChart3,
  Cpu,
  Cloud,
  Wifi,
  Lock,
  Eye,
  Fingerprint,
  Server,
  Network
} from 'lucide-react';

const HackingPage = () => {
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
    accent: '#55d5df'
  };

  const courses = [
    {
      id: 0,
      title: 'Cyber Starter',
      program: 'Foundation Program',
      duration: '60 Hours',
      level: 'Beginner',
      idealFor: 'Students, beginners, technology enthusiasts',
      coreFocus: 'Cybersecurity Fundamentals & Introduction',
      description: 'Start your cybersecurity journey with foundational knowledge in networking, security basics, AI fundamentals, and emerging technologies.',
      color: colors.accent,
      moduleDetails: [
        {
          title: 'Computer Fundamentals & Networking',
          icon: Network,
          topics: ['Computer Architecture Basics', 'Operating Systems Overview', 'Networking Concepts', 'TCP/IP Protocol Suite', 'Network Topologies']
        },
        {
          title: 'Cyber Security Basics',
          icon: Shield,
          topics: ['Introduction to Cybersecurity', 'Threat Landscape', 'Security Principles', 'Common Attack Vectors', 'Security Best Practices']
        },
        {
          title: 'AI & Machine Learning Fundamentals',
          icon: Cpu,
          topics: ['Introduction to AI', 'Machine Learning Basics', 'AI in Cybersecurity', 'Pattern Recognition', 'Automation in Security']
        },
        {
          title: 'Ethical Hacking Introduction',
          icon: Lock,
          topics: ['Ethical Hacking Overview', 'Penetration Testing Basics', 'Reconnaissance Techniques', 'Vulnerability Assessment', 'Reporting & Documentation']
        },
        {
          title: 'Digital Counter Intelligence',
          icon: Eye,
          topics: ['Digital Footprinting', 'OSINT Techniques', 'Counterintelligence Methods', 'Information Protection', 'Privacy Measures']
        },
        {
          title: 'IoT Fundamentals',
          icon: Wifi,
          topics: ['IoT Architecture', 'IoT Protocols', 'IoT Security Challenges', 'Device Hardening', 'IoT Threat Landscape']
        },
        {
          title: 'Drone Forensics Basics',
          icon: Zap,
          topics: ['Drone Technology Overview', 'Drone Data Collection', 'Forensic Analysis', 'Legal Considerations', 'Case Studies']
        },
        {
          title: 'Cyber Laws & Digital Safety',
          icon: Gavel,
          topics: ['Cyber Law Fundamentals', 'IT Act Overview', 'Data Protection Laws', 'Digital Safety Practices', 'Compliance Requirements']
        }
      ]
    },
    {
      id: 1,
      title: 'Cyber Defender',
      program: 'Intermediate Program',
      duration: '120 Hours',
      level: 'Intermediate',
      idealFor: 'IT professionals, career switchers, security enthusiasts',
      coreFocus: 'Network Security, VAPT & Incident Response',
      description: 'Build practical skills in network security, vulnerability assessment, penetration testing, and incident response with hands-on labs.',
      color: colors.sky,
      moduleDetails: [
        {
          title: 'Network & System Security',
          icon: Server,
          topics: ['Firewall Configuration', 'IDS/IPS Implementation', 'Access Control', 'System Hardening', 'Security Auditing']
        },
        {
          title: 'Vulnerability Assessment & Penetration Testing',
          icon: Target,
          topics: ['VAPT Methodologies', 'Scanning & Enumeration', 'Exploitation Techniques', 'Post-Exploitation', 'Reporting & Remediation']
        },
        {
          title: 'Financial Fraud Investigation',
          icon: DollarSign,
          topics: ['Fraud Detection Methods', 'Transaction Analysis', 'Investigative Techniques', 'Evidence Collection', 'Legal Considerations']
        },
        {
          title: 'Social Media Investigation',
          icon: Users,
          topics: ['Social Media Forensics', 'Data Extraction', 'User Profiling', 'Evidence Gathering', 'Legal Compliance']
        },
        {
          title: 'Digital Evidence Collection',
          icon: Fingerprint,
          topics: ['Evidence Handling', 'Chain of Custody', 'Data Acquisition', 'Preservation Methods', 'Documentation']
        },
        {
          title: 'Incident Response',
          icon: Zap,
          topics: ['Incident Response Lifecycle', 'Detection & Analysis', 'Containment & Eradication', 'Recovery & Lessons Learned', 'Reporting']
        },
        {
          title: 'Cyber Security Case Studies',
          icon: BookOpen,
          topics: ['Real-World Breaches', 'Attack Analysis', 'Defense Strategies', 'Lessons Learned', 'Industry Best Practices']
        },
        {
          title: 'Hands-on Lab Exercises & Internship',
          icon: Rocket,
          topics: ['Lab Environment Setup', 'Practical Exercises', 'CTF Challenges', 'Live Projects', 'Internship Opportunities']
        }
      ]
    },
    {
      id: 2,
      title: 'Cyber Expert',
      program: 'Advanced Program',
      duration: '180 Hours',
      level: 'Advanced',
      idealFor: 'Security professionals, advanced learners, certification aspirants',
      coreFocus: 'Advanced Security, Cloud Security & SOC Operations',
      description: 'Master advanced ethical hacking, AI-driven security, cloud security, and SOC operations with a capstone project.',
      color: colors.gold,
      moduleDetails: [
        {
          title: 'Advanced Ethical Hacking',
          icon: Lock,
          topics: ['Advanced Exploitation', 'Privilege Escalation', 'Persistent Access', 'Bypassing Defenses', 'Advanced Reporting']
        },
        {
          title: 'Advanced AI for Cyber Security',
          icon: Cpu,
          topics: ['AI Threat Detection', 'Machine Learning Models', 'Behavioral Analytics', 'Automated Response', 'Future Trends']
        },
        {
          title: 'IoT & Drone Forensics',
          icon: Wifi,
          topics: ['IoT Device Forensics', 'Drone Data Analysis', 'Threat Hunting', 'Incident Investigation', 'Case Studies']
        },
        {
          title: 'Cloud Security',
          icon: Cloud,
          topics: ['Cloud Architecture', 'Security Controls', 'Compliance Frameworks', 'Cloud Threat Landscape', 'Best Practices']
        },
        {
          title: 'Cyber Crime Investigation Procedures',
          icon: Gavel,
          topics: ['Investigation Methodologies', 'Digital Forensics', 'Legal Procedures', 'Evidence Presentation', 'Courtroom Testimony']
        },
        {
          title: 'Security Operations Center (SOC)',
          icon: Shield,
          topics: ['SOC Operations', 'Threat Monitoring', 'Alert Management', 'Incident Triage', 'SOC Tools']
        },
        {
          title: 'Red Team & Blue Team Concepts',
          icon: Users,
          topics: ['Red Team Strategies', 'Blue Team Defense', 'Purple Team Collaboration', 'Exercise Design', 'Continuous Improvement']
        },
        {
          title: 'Capstone Project & Certification Preparation',
          icon: Award,
          topics: ['Capstone Project', 'CEH Preparation', 'CHFI Preparation', 'AWS Security Certification', 'Career Guidance']
        }
      ]
    }
  ];

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
        quote: '"The hands-on cyber labs and real-world simulations gave me practical skills that employers value."',
        text: 'The hands-on cyber labs and real-world simulations gave me practical skills that employers value. I felt confident during interviews because of the live projects and expert guidance.',
        rating: 5
      },
      {
        name: 'Priya M.',
        role: 'SOC Analyst',
        quote: '"The internship, mock interviews, and placement support helped me transition from a beginner to a job-ready cybersecurity professional."',
        text: 'The internship, mock interviews, and placement support helped me transition from a beginner to a job-ready cybersecurity professional.',
        rating: 5
      },
      {
        name: 'Akash P.',
        role: 'VAPT Engineer',
        quote: '"The curriculum is practical and industry-focused. Learning AI, ethical hacking, and digital forensics in one program gave me a competitive edge."',
        text: 'The curriculum is practical and industry-focused. Learning AI, ethical hacking, and digital forensics in one program gave me a competitive edge.',
        rating: 5
      },
      {
        name: 'Sneha K.',
        role: 'Digital Forensics Intern',
        quote: '"The mentors explained complex cybersecurity concepts in a simple way. The practical approach made learning engaging and easy to apply."',
        text: 'The mentors explained complex cybersecurity concepts in a simple way. The practical approach made learning engaging and easy to apply.',
        rating: 4
      },
      {
        name: 'Aditya R.',
        role: 'Cyber Security Consultant',
        quote: '"MILES doesn\'t just teach cybersecurity—it prepares you for a career. The resume workshops, certification guidance, and interview preparation made a huge difference."',
        text: 'MILES doesn\'t just teach cybersecurity—it prepares you for a career. The resume workshops, certification guidance, and interview preparation made a huge difference.',
        rating: 5
      },
      {
        name: 'Neha D.',
        role: 'Cloud Security Associate',
        quote: '"From classroom learning to real-world projects, every module was designed to build confidence and practical skills."',
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
    <div className="hacking-page">
      {/* Hero Section - SAME AS OTHER PAGES */}
      <section className="hero-section">
        <div className="hero-particles"></div>
        <div className="hero-gradient-overlay"></div>
        
        <div className="container hero-container">
          <div className="hero-grid">
            <div className="hero-content fade-up">
              <div className="hero-badge">
                <Crown size={14} className="hero-badge-icon" />
                <span>MILES CYBERSECURITY</span>
                <span className="hero-badge-dot"></span>
                <span className="hero-badge-featured">Featured Program</span>
              </div>
              
              <h1 className="hero-title">
                Protect the Digital World.
                <span className="hero-title-highlight">Build a Career That Matters.</span>
              </h1>
              
              <p className="hero-description">
                Learn how to identify, prevent and respond to cyber threats through hands-on training, 
                real-world simulations and industry best practices. Develop the practical skills employers 
                look for in today's rapidly growing cybersecurity industry.
              </p>
              
              <div className="hero-ideal-for">
                <span className="hero-ideal-label">Ideal For:</span>
                <span className="hero-ideal-tag">Students</span>
                <span className="hero-ideal-tag">IT Professionals</span>
                <span className="hero-ideal-tag">Career Switchers</span>
                <span className="hero-ideal-tag">Technology Enthusiasts</span>
              </div>
              
              <div className="hero-meta-grid">
                <div className="hero-meta-item">
                  <Clock size={14} className="hero-meta-icon" />
                  <span>{currentCourse.duration}</span>
                </div>
                <div className="hero-meta-item">
                  <Award size={14} className="hero-meta-icon" />
                  <span>{currentCourse.level}</span>
                </div>
                <div className="hero-meta-item">
                  <Users size={14} className="hero-meta-icon" />
                  <span>Max 25 Students</span>
                </div>
                <div className="hero-meta-item">
                  <Monitor size={14} className="hero-meta-icon" />
                  <span>Online Live</span>
                </div>
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
                    <div className="hero-stat-number">{currentCourse.duration === '180 Hours' ? '180' : currentCourse.duration === '120 Hours' ? '120' : '60'}</div>
                    <div className="hero-stat-label">Hours of Training</div>
                  </div>
                  <div className="hero-stat-divider"></div>
                  <div className="hero-stat-item">
                    <div className="hero-stat-number">3</div>
                    <div className="hero-stat-label">Learning Levels</div>
                  </div>
                  <div className="hero-stat-divider"></div>
                  <div className="hero-stat-item">
                    <div className="hero-stat-number">100%</div>
                    <div className="hero-stat-label">Practical Training</div>
                  </div>
                </div>
                <div className="hero-stat-features">
                  <div className="hero-stat-feature">
                    <CheckCircle size={14} color={colors.gold} />
                    <span>Industry-Recognised Certification</span>
                  </div>
                  <div className="hero-stat-feature">
                    <CheckCircle size={14} color={colors.gold} />
                    <span>Placement Assistance</span>
                  </div>
                  <div className="hero-stat-feature">
                    <CheckCircle size={14} color={colors.gold} />
                    <span>Live Cyber Labs</span>
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
                <Shield size={20} />
              </div>
              <div className="stat-content">
                <h3>3 Levels</h3>
                <p>Progressive Learning</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: colors.goldLight, color: colors.goldDark }}>
                <Award size={20} />
              </div>
              <div className="stat-content">
                <h3>Certification</h3>
                <p>Global Recognition</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
                <Users size={20} />
              </div>
              <div className="stat-content">
                <h3>25</h3>
                <p>Max Batch Size</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: '#fce4ec', color: '#dc2626' }}>
                <Monitor size={20} />
              </div>
              <div className="stat-content">
                <h3>Online</h3>
                <p>Live Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Navigation - SAME AS OTHER PAGES */}
      <section className="course-nav-section">
        <div className="container">
          <div className="course-nav-wrapper">
            <div className="course-nav">
              {courses.map((course, index) => (
                <button 
                  key={index} 
                  className={`course-nav-btn ${activeCourse === index ? 'active' : ''}`} 
                  onClick={() => setActiveCourse(index)}
                >
                  <span className="course-nav-icon" style={{ 
                    background: activeCourse === index ? colors.sky : colors.grayLight,
                    color: activeCourse === index ? colors.white : colors.gray
                  }}>
                    <Shield size={12} />
                  </span>
                  <span>{course.title}</span>
                  {activeCourse === index && <span className="course-nav-active-indicator"></span>}
                </button>
              ))}
            </div>
            <button 
              className="course-nav-enquire"
              onClick={() => window.location.href = '/contact'}
            >
              Enquire Now <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* The MILES Advantage - SAME AS OTHER PAGES */}
      <section className="usp-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: colors.sky }}>The MILES Advantage</span>
            <h2 style={{ color: colors.black }}>Why Choose MILES for Cyber Security?</h2>
            <p style={{ color: colors.gray }}>Build a strong career foundation in cybersecurity with expert training</p>
          </div>
          <div className="usp-grid">
            {sharedData.usps.map((usp, index) => (
              <div key={index} className="usp-item">
                <div className="usp-icon-wrapper">
                  <CheckCircle size={14} className="usp-icon" />
                </div>
                <span>{usp}</span>
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
            <p style={{ color: colors.gray }}>Build a rewarding career in cybersecurity</p>
          </div>
          <div className="career-grid">
            {sharedData.careerOutcomes.map((career, index) => {
              const icons = [Shield, Lock, Eye, Server, Network, Cloud, Cpu, Fingerprint, Users, TrendingUp];
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

      {/* What You'll Learn - Expandable Modules - SAME AS OTHER PAGES */}
      <section className="modules-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: colors.sky }}>Curriculum</span>
            <h2 style={{ color: colors.black }}>What You'll Learn</h2>
            <p style={{ color: colors.gray }}>Choose the right learning path for your cybersecurity career goals</p>
          </div>
          <div className="modules-container">
            {courses.map((course, index) => (
              <div key={index} className={`module-card ${activeCourse === index ? 'active' : ''}`}>
                <div className="module-header" onClick={() => toggleModule(index)}>
                  <div className="module-title-area">
                    <h3>{course.title}</h3>
                    <span className="module-program">{course.program}</span>
                  </div>
                  <div className="module-meta">
                    <span className="module-duration">{course.duration}</span>
                    <span className={`module-level level-${course.level.toLowerCase()}`}>
                      {course.level}
                    </span>
                    {expandedModules[index] ? 
                      <ChevronUp size={16} className="module-toggle" /> : 
                      <ChevronDown size={16} className="module-toggle" />
                    }
                  </div>
                </div>
                {expandedModules[index] && (
                  <div className="module-content">
                    <div className="module-details-grid">
                      <div className="module-detail">
                        <strong>Ideal For</strong>
                        <p>{course.idealFor}</p>
                      </div>
                      <div className="module-detail">
                        <strong>Core Focus</strong>
                        <p>{course.coreFocus}</p>
                      </div>
                      <div className="module-detail module-detail-full">
                        <strong>What You'll Master</strong>
                        <div className="module-modules-list">
                          {course.moduleDetails.map((module, idx) => {
                            const IconComponent = module.icon;
                            return (
                              <div key={idx} className="module-module-item">
                                <span className="module-module-icon" style={{ color: colors.sky }}>
                                  <IconComponent size={14} />
                                </span>
                                <div>
                                  <strong style={{ color: '#0f172a', fontSize: '0.78rem' }}>{module.title}</strong>
                                  <ul style={{ color: '#64748b', fontSize: '0.72rem', margin: '4px 0 0 0', paddingLeft: '16px', listStyle: 'disc' }}>
                                    {module.topics.map((topic, topicIdx) => (
                                      <li key={topicIdx}>{topic}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="module-detail module-detail-full">
                        <strong>Internship & Live Projects</strong>
                        <p>Hands-on lab exercises, real-world simulations, CTF challenges, and internship opportunities with industry partners.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Support - SAME AS OTHER PAGES */}
      <section className="placement-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: colors.gold }}>Placement Support</span>
            <h2 style={{ color: colors.white }}>Your Career Journey Starts Here</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Comprehensive support to help you land your dream job in cybersecurity</p>
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
            <p style={{ color: colors.gray }}>Find answers to common questions about our Cyber Security program</p>
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
            <h2>The Digital World Needs Cyber Defenders. Could You Be One of Them?</h2>
            <p>Join MILES Cyber Security program and build a strong career in cybersecurity</p>
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
        .hacking-page {
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

        /* COURSE NAV - EXACT SAME AS OTHER PAGES */
        .course-nav-section {
          padding: 0 0 20px;
          background: #f8fafc;
        }

        .course-nav-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .course-nav {
          display: flex;
          gap: 4px;
          flex-wrap: wrap;
          background: #ffffff;
          padding: 4px;
          border-radius: 10px;
          border: 1px solid #f1f5f9;
        }

        .course-nav-btn {
          padding: 7px 16px;
          background: transparent;
          border: none;
          border-radius: 6px;
          font-size: 0.72rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 6px;
          color: #64748b;
          position: relative;
        }

        .course-nav-btn:hover {
          color: #0f172a;
          background: #f8fafc;
        }

        .course-nav-btn.active {
          color: #0f172a;
          background: #f8fafc;
        }

        .course-nav-icon {
          padding: 3px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .course-nav-active-indicator {
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 2px;
          background: #0ea5e9;
          border-radius: 2px;
        }

        .course-nav-enquire {
          padding: 8px 20px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          color: #0a1628;
          font-size: 0.75rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(251, 191, 36, 0.3);
        }

        .course-nav-enquire:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(251, 191, 36, 0.4);
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

        /* USP SECTION - EXACT SAME AS OTHER PAGES */
        .usp-section {
          padding: 40px 0;
          background: #ffffff;
        }

        .usp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px 28px;
          max-width: 880px;
          margin: 0 auto;
        }

        .usp-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 5px 0;
          font-size: 0.8rem;
          line-height: 1.5;
          color: #1e293b;
        }

        .usp-icon-wrapper {
          flex-shrink: 0;
          margin-top: 2px;
          background: #e0f2fe;
          padding: 3px;
          border-radius: 5px;
        }

        .usp-icon {
          color: #0ea5e9;
        }

        /* CAREER SECTION - EXACT SAME AS OTHER PAGES */
        .career-section {
          padding: 40px 0;
          background: #f8fafc;
        }

        .career-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
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

        /* MODULES SECTION - EXACT SAME AS OTHER PAGES */
        .modules-section {
          padding: 40px 0;
          background: #ffffff;
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

        .module-card.active {
          border-color: #0ea5e9;
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

        .module-title-area {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .module-title-area h3 {
          font-size: 0.85rem;
          font-weight: 700;
          color: #0f172a;
          transition: color 0.3s;
        }

        .module-card.active .module-title-area h3 {
          color: #0ea5e9;
        }

        .module-program {
          font-size: 0.65rem;
          color: #64748b;
        }

        .module-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          flex-shrink: 0;
        }

        .module-duration {
          font-size: 0.65rem;
          color: #64748b;
          font-weight: 500;
        }

        .module-level {
          padding: 2px 10px;
          border-radius: 16px;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }

        .level-beginner {
          background: #dbeafe;
          color: #1e40af;
        }

        .level-intermediate {
          background: #fef3c7;
          color: #92400e;
        }

        .level-advanced {
          background: #fce4ec;
          color: #b71c1c;
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
          grid-template-columns: 1fr 1fr;
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

        .module-detail p {
          margin: 0;
          line-height: 1.5;
          color: #475569;
        }

        .module-detail-full {
          grid-column: 1 / -1;
        }

        .module-modules-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 24px;
          margin-top: 4px;
        }

        .module-module-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 3px 0;
        }

        .module-module-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* PLACEMENT SECTION - EXACT SAME AS OTHER PAGES */
        .placement-section {
          padding: 40px 0;
          background: linear-gradient(135deg, #0a1628, #1a2a4a);
        }

        .placement-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
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
            grid-template-columns: repeat(4, 1fr);
          }
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .placement-grid {
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
          .usp-grid {
            grid-template-columns: 1fr;
          }
          .module-details-grid {
            grid-template-columns: 1fr;
          }
          .module-modules-list {
            grid-template-columns: 1fr;
          }
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }
          .section-header h2,
          .final-cta-section h2 {
            font-size: 1.5rem;
          }
          .course-nav-wrapper {
            flex-direction: column;
            align-items: stretch;
          }
          .course-nav {
            justify-content: center;
          }
          .course-nav-enquire {
            justify-content: center;
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
          .course-nav-btn {
            font-size: 0.62rem;
            padding: 5px 10px;
          }
          .course-nav-icon {
            padding: 2px;
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
          .module-meta {
            gap: 4px;
          }
          .module-duration {
            font-size: 0.6rem;
          }
          .module-level {
            font-size: 0.55rem;
            padding: 2px 8px;
          }
          .module-module-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
          .usp-item {
            font-size: 0.74rem;
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
          .usp-section,
          .career-section,
          .modules-section,
          .placement-section,
          .testimonials-section,
          .faq-section {
            padding: 30px 0;
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
          .course-nav {
            gap: 2px;
          }
          .course-nav-btn {
            font-size: 0.55rem;
            padding: 4px 8px;
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
          .module-title-area h3 {
            font-size: 0.68rem;
          }
          .module-program {
            font-size: 0.58rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HackingPage;
