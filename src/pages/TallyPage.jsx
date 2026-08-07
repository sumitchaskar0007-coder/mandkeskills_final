import React from 'react';
import { 
  BarChart3, 
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
  Shield,
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
  Handshake,
  Globe,
  ArrowRight,
  ExternalLink,
  Rocket,
  Sparkles,
  Play,
  ThumbsUp,
  Crown,
  User,
  Building,
  Briefcase as BriefcaseIcon,
  CreditCard,
  FileSpreadsheet,
  Users as UsersIcon,
  Star as StarIcon
} from 'lucide-react';

const TallyPage = () => {
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
    success: '#10b981'
  };

  const courseColors = [
    { primary: colors.sky, light: colors.skyLight, gradient: `linear-gradient(135deg, ${colors.navy}, ${colors.sky})`, dark: colors.navy, bg: colors.skyLight, accent: colors.gold },
    { primary: colors.sky, light: colors.skyLight, gradient: `linear-gradient(135deg, ${colors.navy}, ${colors.sky})`, dark: colors.navy, bg: colors.skyLight, accent: colors.gold },
    { primary: colors.sky, light: colors.skyLight, gradient: `linear-gradient(135deg, ${colors.navy}, ${colors.sky})`, dark: colors.navy, bg: colors.skyLight, accent: colors.gold },
    { primary: colors.gold, light: colors.goldLight, gradient: `linear-gradient(135deg, ${colors.navy}, ${colors.goldDark})`, dark: colors.navy, bg: colors.goldLight, accent: colors.gold }
  ];

  const courses = [
    {
      id: 0,
      title: 'Tally Foundations',
      program: 'TallyEssential Level 1',
      duration: '35 Hours',
      level: 'Beginner',
      idealFor: 'Students starting their accounting journey',
      coreFocus: 'Accounting Fundamentals & TallyPrime',
      whatYoullMaster: 'Financial Accounting • Voucher Entry • Banking Reports • Company Setup • Basic GST',
      projects: 'Real accounting entries & financial reports',
      skills: 'Computerized Accounting',
      certification: 'TallyEssential Level 1',
      careers: 'Accounts Assistant • Junior Accountant',
      description: 'Build a strong foundation in accounting with TallyPrime. Perfect for beginners starting their career in finance.',
      color: courseColors[0]
    },
    {
      id: 1,
      title: 'Business Operations with Tally',
      program: 'TallyEssential Level 2',
      duration: '35 Hours',
      level: 'Intermediate',
      idealFor: 'Students familiar with Tally basics',
      coreFocus: 'Inventory, Orders & Business Management',
      whatYoullMaster: 'Inventory Management • Purchase & Sales Orders • Cost Centres • Budgets • Receivables & Payables • Advanced Reporting',
      projects: 'Complete inventory & business workflow',
      skills: 'Business Accounting & Inventory',
      certification: 'TallyEssential Level 2',
      careers: 'Inventory Executive • Accounts Executive • Purchase Executive',
      description: 'Master inventory management and business operations with advanced TallyPrime features.',
      color: courseColors[1]
    },
    {
      id: 2,
      title: 'GST & Taxation Expert',
      program: 'TallyEssential Level 3',
      duration: '36 Hours',
      level: 'Advanced',
      idealFor: 'Learners aiming for GST & Tax careers',
      coreFocus: 'GST, TDS & Compliance',
      whatYoullMaster: 'GST Returns • E-Invoicing • E-Way Bills • TDS • QRMP • Composition Scheme • Financial Year Closing',
      projects: 'Live GST & TDS filing simulations',
      skills: 'Tax Compliance & Statutory Filing',
      certification: 'TallyEssential Level 3',
      careers: 'GST Executive • Tax Executive • Compliance Associate',
      description: 'Become a tax expert with comprehensive GST and TDS training in TallyPrime.',
      color: courseColors[2]
    },
    {
      id: 3,
      title: 'Tally Professional Pro',
      program: 'Level 1 + Level 2 + Level 3',
      duration: '106+ Hours',
      level: 'Complete Professional',
      idealFor: 'Anyone seeking complete job-ready accounting expertise',
      coreFocus: 'Complete Accounting, Taxation & Business Operations',
      whatYoullMaster: 'Everything from Levels 1, 2 & 3 including Accounting, Inventory, Banking, GST, TDS, Reporting, Business Data, MIS Management & Advanced Compliance',
      projects: 'End-to-end business accounting project',
      skills: 'Complete Finance & Accounting Operations',
      certification: 'Tally Professional Certification',
      careers: 'Accountant • Senior Accountant • GST Executive • Accounts Executive • Finance Executive • Tax Consultant',
      description: 'The complete package for becoming a professional accountant with all TallyPrime skills.',
      color: courseColors[3]
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: 'Do I need any prior accounting knowledge to join this course?',
      answer: 'Not at all. The course starts from the fundamentals of accounting and gradually progresses to advanced concepts in Tally PRIME, GST, payroll, inventory management, and business accounting. It is designed for complete beginners as well as learners looking to upgrade their skills.'
    },
    {
      question: 'Who is this course best suited for?',
      answer: (
        <div>
          <p>This course is ideal for:</p>
          <ul style={{ marginTop: '4px', paddingLeft: '20px', listStyle: 'disc' }}>
            <li>12th Commerce Students</li>
            <li>B.Com / M.Com Students</li>
            <li>BBA & MBA Students</li>
            <li>CA Foundation & CA Inter Students</li>
            <li>Graduates</li>
            <li>Working Professionals</li>
            <li>Entrepreneurs</li>
            <li>Freelancers looking to offer accounting services</li>
          </ul>
        </div>
      )
    },
    {
      question: 'What version of Tally will I learn?',
      answer: 'You will learn the latest TallyPrime version with practical business scenarios, ensuring your skills remain relevant to current industry standards.'
    },
    {
      question: 'Is GST training included?',
      answer: (
        <div>
          <p>Yes. You will receive comprehensive GST training covering:</p>
          <ul style={{ marginTop: '4px', paddingLeft: '20px', listStyle: 'disc' }}>
            <li>GST Registration</li>
            <li>GST Configuration</li>
            <li>Tax Invoices</li>
            <li>E-Way Bills</li>
            <li>E-Invoicing</li>
            <li>GST Return Filing</li>
            <li>Input Tax Credit (ITC)</li>
            <li>GST Reports</li>
            <li>Compliance Procedures</li>
          </ul>
        </div>
      )
    },
    {
      question: 'Will I get practical hands-on training?',
      answer: 'Absolutely. Every topic is taught using practical exercises, live company data, business case studies, and real accounting workflows to ensure you gain industry-ready experience.'
    },
    {
      question: 'What software will I use during the course?',
      answer: (
        <div>
          <p>Students will work with:</p>
          <ul style={{ marginTop: '4px', paddingLeft: '20px', listStyle: 'disc' }}>
            <li>TallyPrime</li>
            <li>Microsoft Excel (Advanced Excel)</li>
            <li>GST Utilities</li>
            <li>Banking & Financial Documentation Tools</li>
          </ul>
        </div>
      )
    },
    {
      question: 'Is Advanced Excel included?',
      answer: 'Yes. Advanced Excel is integrated into the curriculum to help students perform reporting, MIS analysis, dashboards, data management, and financial calculations that complement accounting roles.'
    },
    {
      question: 'Will I receive a certificate after completing the course?',
      answer: 'Yes. Upon successful completion, you will receive a <strong>Course Completion Certificate</strong> from MILES, validating your practical accounting and Tally PRIME skills.'
    },
    {
      question: 'Does MILES provide placement assistance?',
      answer: (
        <div>
          <p>Yes. Eligible students receive comprehensive placement support, including:</p>
          <ul style={{ marginTop: '4px', paddingLeft: '20px', listStyle: 'disc' }}>
            <li>Resume Building</li>
            <li>Interview Preparation</li>
            <li>Mock Interviews</li>
            <li>Career Guidance</li>
            <li>Internship Opportunities</li>
            <li>Placement Assistance with CA Firms, SMEs, and Corporate Companies</li>
          </ul>
        </div>
      )
    },
    {
      question: 'What kind of jobs can I apply for after completing this course?',
      answer: (
        <div>
          <p>You can pursue roles such as:</p>
          <ul style={{ marginTop: '4px', paddingLeft: '20px', listStyle: 'disc' }}>
            <li>Junior Accountant</li>
            <li>Accounts Executive</li>
            <li>GST Executive</li>
            <li>Accounts Assistant</li>
            <li>Tally Operator</li>
            <li>Billing Executive</li>
            <li>Payroll Executive</li>
            <li>Finance Executive</li>
            <li>Freelance Accountant</li>
          </ul>
        </div>
      )
    }
  ];

  const sharedData = {
    careerOutcomes: [
      { title: 'Junior Accountant', salary: '₹12K–25K/Month', icon: User },
      { title: 'Accounts Executive', salary: '₹22K–35K/Month', icon: BriefcaseIcon },
      { title: 'GST Executive', salary: '₹25K–40K/Month', icon: FileSpreadsheet },
      { title: 'Tally Operator', salary: '₹18K–28K/Month', icon: Monitor },
      { title: 'Accounts Assistant', salary: '₹18K–30K/Month', icon: UsersIcon },
      { title: 'Billing Executive', salary: '₹18K–28K/Month', icon: CreditCard },
      { title: 'Payroll Executive', salary: '₹25K–35K/Month', icon: DollarSign },
      { title: 'Freelance Accountant', salary: '₹20K–1L+/Month', icon: StarIcon }
    ],
    testimonials: [
      {
        name: 'Riya Sharma',
        role: 'B.Com Student, Pune',
        quote: '"The practical approach made all the difference."',
        text: 'I joined MILES with only basic accounting knowledge. The hands-on training in Tally PRIME, GST, and inventory management gave me the confidence to handle real accounting work. The faculty explained every concept with practical examples.',
        rating: 5
      },
      {
        name: 'Aditya Patil',
        role: 'Junior Accountant',
        quote: '"I secured my first accounting job within weeks."',
        text: 'The placement guidance, resume preparation, and mock interviews helped me crack my first interview. The course was structured exactly as companies expect from freshers.',
        rating: 5
      },
      {
        name: 'Suraj Kulkarni',
        role: 'Commerce Graduate',
        quote: '"Perfect for beginners."',
        text: 'I had no prior experience with accounting software, but the course started from the basics and gradually covered GST, payroll, and advanced reporting. The trainers were always supportive.',
        rating: 4
      },
      {
        name: 'Akash Deshmukh',
        role: 'Accounts Executive',
        quote: '"Industry-focused learning."',
        text: 'Unlike traditional classroom learning, every session involved practical exercises and real business scenarios. The Advanced Excel integration was an added advantage.',
        rating: 5
      },
      {
        name: 'Priyanka Joshi',
        role: 'M.Com Student',
        quote: '"Excellent faculty and learning environment."',
        text: 'The trainers have real industry experience, which made every topic easy to understand. I especially appreciated the focus on practical accounting rather than just theory.',
        rating: 5
      }
    ],
   
    usps: [
      'One & Only Authorised Tally Training & Assessment Centre in Kothrud',
      'Industry-Aligned Curriculum covering Accounting, GST, Payroll, Inventory & Taxation',
      '100% Practical Training with live business transactions and real-world accounting scenarios',
      'Learn from Experienced Industry Professionals with extensive finance and accounting expertise',
      'Hands-on Projects in GST, Payroll, Banking, Inventory Management & Financial Reporting',
      'Advanced Excel Integration for MIS Reports, Dashboards and Business Analytics',
      'Internship Opportunities to gain practical workplace experience',
      'Placement Assistance with CA Firms, SMEs and Corporate Organisations',
      'Resume Building & Mock Interview Sessions to improve employability',
      'Career Guidance & Personal Mentoring throughout your learning journey',
      'Industry-Recognised Certification upon successful course completion',
      'Lifetime Learning Support for course-related guidance even after completion'
    ],
    learningOutcomes: [
      'Master accounting fundamentals and double-entry bookkeeping.',
      'Create and manage companies, ledgers, vouchers, and inventory in TallyPrime 7.0.',
      'Handle purchase, sales, banking, cheque printing, and bank reconciliation.',
      'Manage inventory, stock, batches, godowns, and order processing.',
      'Prepare GST invoices, e-Invoices, e-Way Bills, GST returns, and TDS compliance.',
      'Generate financial statements, MIS reports, and business insights.',
      'Manage cost centres, budgets, and profit centres effectively.',
      'Secure, back up, restore, and manage company data with confidence.',
      'Gain practical experience through live business scenarios and real-world assignments.',
      'Develop industry-ready skills for careers in Accounting, Finance, GST, and Taxation.'
    ],
    placementSupport: [
      'Resume Building & Profile Optimization',
      'Mock Interviews & Interview Preparation',
      'Job Opportunities with CA Firms & Corporate Companies',
      'Access to the Tally Job Portal',
      'Internship & Fresher Job Support',
      'Career Guidance from Industry Experts'
    ]
  };

  const currentCourse = courses[activeCourse];

  return (
    <div className="tally-page">
      {/* Hero Section - Professional & Different */}
      <section className="hero-section">
        <div className="hero-particles"></div>
        <div className="hero-gradient-overlay"></div>
        
        <div className="container hero-container">
          <div className="hero-grid">
            <div className="hero-content fade-up">
              <div className="hero-badge">
                <Crown size={14} className="hero-badge-icon" />
                <span>Authorised Tally Training Centre</span>
                <span className="hero-badge-dot"></span>
                <span className="hero-badge-featured">Kothrud</span>
              </div>
              
              <h1 className="hero-title">
                Build the Accounting Skills Every Business Needs
              </h1>
              
              <p className="hero-description">
                Master Tally PRIME with practical GST, payroll, inventory and accounting workflows. Gain the confidence to manage real business finances and become job-ready for roles in accounts, finance and taxation.
              </p>
              
              <div className="hero-ideal-for">
                <span className="hero-ideal-label">Ideal For:</span>
                <span className="hero-ideal-tag">Commerce Students</span>
                <span className="hero-ideal-tag">Graduates</span>
                <span className="hero-ideal-tag">Aspiring Accountants</span>
                <span className="hero-ideal-tag">Working Professionals</span>
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
                    <div className="hero-stat-number">106+</div>
                    <div className="hero-stat-label">Hours of Training</div>
                  </div>
                  <div className="hero-stat-divider"></div>
                  <div className="hero-stat-item">
                    <div className="hero-stat-number">4</div>
                    <div className="hero-stat-label">Course Levels</div>
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
                    <span>Live Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon" style={{ background: colors.skyLight, color: colors.sky }}>
                <Users size={20} />
              </div>
              <div className="stat-content">
                <h3>500+</h3>
                <p>Students Trained</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: colors.goldLight, color: colors.goldDark }}>
                <Award size={20} />
              </div>
              <div className="stat-content">
                <h3>98%</h3>
                <p>Placement Rate</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
                <Building size={20} />
              </div>
              <div className="stat-content">
                <h3>50+</h3>
                <p>Partner Companies</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: '#fce4ec', color: '#dc2626' }}>
                <Star size={20} />
              </div>
              <div className="stat-content">
                <h3>4.9</h3>
                <p>Student Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Navigation */}
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
                    <BarChart3 size={12} />
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

      {/* The MILES Advantage */}
      <section className="usp-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: colors.sky }}>The MILES Advantage</span>
            <h2 style={{ color: colors.black }}>Why Choose MILES for Tally PRIME?</h2>
            <p style={{ color: colors.gray }}>Experience world-class training with industry-recognized certification</p>
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

      {/* Career Outcomes */}
      <section className="career-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: colors.gold }}>Career Outcomes</span>
            <h2 style={{ color: colors.black }}>Your Future Career Paths</h2>
            <p style={{ color: colors.gray }}>Build a rewarding career in accounting and finance with MILES</p>
          </div>
          <div className="career-grid">
            {sharedData.careerOutcomes.map((career, index) => {
              const IconComponent = career.icon;
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

      {/* What You'll Learn - Expandable Modules */}
      <section className="modules-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: colors.sky }}>Curriculum</span>
            <h2 style={{ color: colors.black }}>What You'll Learn</h2>
            <p style={{ color: colors.gray }}>Choose the right course path for your career goals</p>
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
                    <span className={`module-level level-${course.level.toLowerCase().replace(' ', '-')}`}>
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
                      <div className="module-detail">
                        <strong>What You'll Master</strong>
                        <p>{course.whatYoullMaster}</p>
                      </div>
                      <div className="module-detail">
                        <strong>Hands-on Projects</strong>
                        <p>{course.projects}</p>
                      </div>
                      <div className="module-detail">
                        <strong>Industry Skills</strong>
                        <p>{course.skills}</p>
                      </div>
                      <div className="module-detail">
                        <strong>Certification</strong>
                        <p>{course.certification}</p>
                      </div>
                      <div className="module-detail module-detail-full">
                        <strong>Career Opportunities</strong>
                        <p>{course.careers}</p>
                      </div>
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
            <span className="section-tag" style={{ color: colors.sky }}>Learning Outcomes</span>
            <h2 style={{ color: colors.black }}>What You'll Achieve</h2>
            <p style={{ color: colors.gray }}>Master industry-relevant skills that employers are looking for</p>
          </div>
          <div className="learning-grid">
            {sharedData.learningOutcomes.map((outcome, index) => (
              <div key={index} className="learning-item">
                <div className="learning-icon-wrapper">
                  <CheckCircle size={14} className="learning-icon" />
                </div>
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Support */}
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

      {/* Testimonials */}
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

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: colors.sky }}>FAQs</span>
            <h2 style={{ color: colors.black }}>Frequently Asked Questions</h2>
            <p style={{ color: colors.gray }}>Find answers to the most common questions about our Tally PRIME course</p>
          </div>
          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div key={index} className={`faq-item ${expandedFaqs[index] ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <span className="faq-question-text">{faq.question}</span>
                  <div className="faq-icon-wrapper">
                    {expandedFaqs[index] ? 
                      <ChevronUp size={18} className="faq-toggle active" /> : 
                      <ChevronDown size={18} className="faq-toggle" />
                    }
                  </div>
                </div>
                {expandedFaqs[index] && (
                  <div className="faq-answer">
                    {typeof faq.answer === 'string' ? (
                      <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    ) : (
                      faq.answer
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-content">
            <h2>Build More Than Accounting Skills.<br />Build a Career in Finance.</h2>
            <p>Join MILES Tally PRIME course and transform your career with industry-recognized certification</p>
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
        .tally-page {
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

        /* HERO SECTION - Professional Design */
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

        /* STATS SECTION */
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

        /* COURSE NAV */
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

        /* SECTION HEADER */
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

        /* USP SECTION */
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

        /* CAREER SECTION */
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

        /* MODULES SECTION */
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

        .level-complete-professional {
          background: #d1fae5;
          color: #065f46;
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

        /* LEARNING SECTION */
        .learning-section {
          padding: 40px 0;
          background: #f8fafc;
        }

        .learning-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px 28px;
          max-width: 860px;
          margin: 0 auto;
        }

        .learning-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 5px 0;
          font-size: 0.8rem;
          line-height: 1.5;
          color: #1e293b;
        }

        .learning-icon-wrapper {
          flex-shrink: 0;
          margin-top: 2px;
          background: #d1fae5;
          padding: 3px;
          border-radius: 5px;
        }

        .learning-icon {
          color: #10b981;
        }

        /* PLACEMENT SECTION */
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

        /* TESTIMONIALS SECTION */
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

        /* FAQ SECTION */
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

        .faq-answer ul {
          padding-left: 18px;
          margin: 4px 0 6px;
        }

        .faq-answer li {
          margin-bottom: 2px;
        }

        /* FINAL CTA SECTION */
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

        /* RESPONSIVE */
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
          .usp-grid,
          .learning-grid {
            grid-template-columns: 1fr;
          }
          .module-details-grid {
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
          .usp-item,
          .learning-item {
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
          .learning-section,
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

export default TallyPage;
