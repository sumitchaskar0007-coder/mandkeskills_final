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
  Star as StarIcon,
  LineChart,
  BarChart,
  PieChart as PieChartIcon,
  ScatterChart,
  AreaChart
} from 'lucide-react';

const DataAnalyticsPage = () => {
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

  const courses = [
    {
      id: 0,
      title: 'Python Foundation Program',
      program: 'Python for Analytics',
      duration: '30 Hours',
      level: 'Beginner',
      idealFor: 'Students, Graduates, Working Professionals, Career Switchers',
      coreFocus: 'Python Programming Fundamentals',
      description: 'Build a strong foundation in Python programming for data analytics and business applications.',
      color: colors.sky,
      moduleDetails: [
        {
          title: 'Introduction to Python',
          duration: '4 Hours',
          topics: ['Python Installation', 'IDE Setup', 'Variables', 'Data Types', 'Operators', 'Input & Output']
        },
        {
          title: 'Control Flow & Problem Solving',
          duration: '6 Hours',
          topics: ['Conditions', 'Loops', 'Logical Programming', 'Problem Solving', 'Coding Exercises']
        },
        {
          title: 'Python Data Structures',
          duration: '6 Hours',
          topics: ['Lists', 'Tuples', 'Dictionaries', 'Sets', 'Strings']
        },
        {
          title: 'Functions & Modules',
          duration: '4 Hours',
          topics: ['User-Defined Functions', 'Lambda Functions', 'Modules', 'Packages']
        },
        {
          title: 'Object-Oriented Programming & File Handling',
          duration: '6 Hours',
          topics: ['Classes', 'Objects', 'Inheritance', 'Exception Handling', 'File Operations']
        },
        {
          title: 'Mini Project & Career Readiness',
          duration: '4 Hours',
          topics: ['Mini Project', 'Debugging', 'Coding Best Practices', 'Career Roadmap']
        }
      ]
    },
    {
      id: 1,
      title: 'AI & Data Science Professional Program',
      program: 'Data Science & AI',
      duration: '80 Hours',
      level: 'Advanced',
      idealFor: 'Aspiring Data Scientists, Analytics Professionals, Career Switchers',
      coreFocus: 'Statistics, Machine Learning, Deep Learning & AI Applications',
      description: 'Master the complete data science workflow from statistics to deployment with hands-on projects.',
      color: colors.gold,
      moduleDetails: [
        {
          title: 'Statistics & Mathematics for Data Science',
          duration: '10 Hours',
          topics: ['Descriptive Statistics', 'Variance', 'Standard Deviation', 'Probability', 'Correlation', 'Covariance', 'Linear Algebra Basics']
        },
        {
          title: 'Data Visualization & Exploratory Data Analysis (EDA)',
          duration: '8 Hours',
          topics: ['Matplotlib', 'Seaborn', 'Univariate & Bivariate Analysis', 'Missing Values', 'Outlier Detection', 'Feature Understanding']
        },
        {
          title: 'Machine Learning Fundamentals',
          duration: '16 Hours',
          topics: ['Supervised & Unsupervised Learning', 'ML Workflow', 'Train-Test Split', 'Evaluation Metrics', 'Linear & Logistic Regression', 'KNN', 'Decision Trees', 'Random Forest']
        },
        {
          title: 'Unsupervised Learning',
          duration: '10 Hours',
          topics: ['Clustering Concepts', 'K-Means', 'Hierarchical Clustering', 'Dimensionality Reduction', 'PCA']
        },
        {
          title: 'Deep Learning & Neural Networks Basics',
          duration: '8 Hours',
          topics: ['ANN', 'Activation Functions', 'Loss Functions', 'Optimizers', 'Overfitting', 'Regularization', 'TensorFlow', 'Keras']
        },
        {
          title: 'AI Concepts & Applications',
          duration: '12 Hours',
          topics: ['AI Fundamentals', 'Generative AI Concepts', 'AI Tools', 'Practical Applications', 'Real-World Use Cases']
        },
        {
          title: 'Model Deployment & Capstone Project',
          duration: '16 Hours',
          topics: ['Model Deployment', 'End-to-End AI/ML Project', 'Testing', 'Documentation', 'Project Presentation']
        }
      ]
    }
  ];

  const sharedData = {
    careerOutcomes: [
      { title: 'Data Analyst', salary: '₹3.5–6 LPA', icon: BarChart3 },
      { title: 'Business Analyst', salary: '₹4–7 LPA', icon: BriefcaseIcon },
      { title: 'Junior Data Scientist', salary: '₹5–9 LPA', icon: Database },
      { title: 'Reporting Analyst', salary: '₹3–5.5 LPA', icon: FileSpreadsheet },
      { title: 'MIS / Data Reporting Executive', salary: '₹2.5–5 LPA', icon: Monitor },
      { title: 'Business Intelligence Analyst', salary: '₹4.5–8 LPA', icon: TrendingUp },
      { title: 'Operations Analyst', salary: '₹3.5–6 LPA', icon: Building },
      { title: 'Marketing Data Analyst', salary: '₹4–7 LPA', icon: Target },
      { title: 'Financial Data Analyst', salary: '₹4–8 LPA', icon: DollarSign },
      { title: 'Analytics Associate', salary: '₹3.5–6.5 LPA', icon: UsersIcon }
    ],
    testimonials: [
      {
        name: 'Sneha Joshi',
        role: 'B.Com Student, Pune',
        quote: '"I learned how to turn raw data into meaningful insights."',
        text: 'I joined MILES with very limited knowledge of data analytics. The practical training in Python, statistics, data visualization, and exploratory data analysis helped me understand how data is actually used to solve business problems. Working with real datasets made the learning experience much more practical.',
        rating: 5
      },
      {
        name: 'Rahul Patil',
        role: 'Aspiring Data Analyst',
        quote: '"The projects gave me confidence for interviews."',
        text: 'The hands-on assignments and analytics projects helped me apply what I learned instead of just studying theory. The resume guidance, project preparation, and mock interviews also helped me understand what employers expect from an entry-level Data Analyst.',
        rating: 5
      },
      {
        name: 'Aditi Kulkarni',
        role: 'BBA Student, Pune',
        quote: '"Perfect for someone starting from the basics."',
        text: 'I had no previous experience with Python or Data Analytics, but the course started with fundamentals and gradually introduced statistics, data visualization, EDA, and machine learning concepts. The practical approach made even technical topics easier to understand.',
        rating: 4
      }
    ],
    faqs: [
      {
        q: 'Do I need a technical or programming background?',
        a: 'No. Beginners can start with foundational concepts before progressing into Python, statistics and analytical techniques. The Python foundation program explicitly states that prior programming knowledge is not required.'
      },
      {
        q: 'Will I learn Python?',
        a: 'Yes. Python is used for programming, data analysis, visualization and introductory machine-learning activities.'
      },
      {
        q: 'Is the program practical?',
        a: 'Yes. The learning approach includes instructor-led sessions, hands-on coding, assignments, exercises, coding challenges and project work.'
      },
      {
        q: 'Will I work on real datasets?',
        a: 'Yes. Students perform exploratory analysis, visualization, statistical analysis and project work using practical datasets. The advanced curriculum specifically includes EDA on real-world datasets.'
      },
      {
        q: 'Does the course include Machine Learning?',
        a: 'Yes. Students receive exposure to supervised and unsupervised learning, model evaluation, regression, classification, clustering and related concepts.'
      },
      {
        q: 'Is this course useful for business students?',
        a: 'Yes. Analytics is increasingly used across finance, marketing, operations, sales, e-commerce and management. The curriculum also emphasizes business acumen—turning data into strategies and decisions.'
      }
    ],
    usps: [
      'Hands-On Learning — Work with datasets, exercises, labs and practical analytics problems',
      'Industry-Relevant Curriculum — Develop skills aligned with modern analytics and data-driven business environments',
      'Real-World Projects — Apply concepts through datasets, case studies, mini projects and practical assignments',
      'Python for Analytics — Build programming and analytical skills using Python and its data ecosystem',
      'Statistics + Analytics — Understand the mathematics and statistics behind meaningful data interpretation',
      'Data Visualization & EDA — Learn to discover trends, patterns, anomalies and relationships in data',
      'AI & Analytics Exposure — Understand how analytics connects with machine learning and modern AI applications',
      'Career-Focused Learning — Develop analytical thinking, problem-solving, communication and business understanding'
    ],
    placementSupport: [
      'Resume & LinkedIn Profile Building',
      'Data Analytics Portfolio Guidance',
      'Capstone Project for Portfolio',
      'Career Role Mapping',
      'Interview Preparation',
      'Technical Interview Practice',
      'Mock Interviews',
      'Aptitude & Communication Guidance',
      'Career Mentoring'
    ]
  };

  const currentCourse = courses[activeCourse];

  // Helper function to get duration text
  const getDurationText = (duration) => {
    if (duration === '30 Hours') return '30';
    if (duration === '80 Hours') return '80';
    return '30';
  };

  return (
    <div className="data-analytics-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-particles"></div>
        <div className="hero-gradient-overlay"></div>
        
        <div className="container hero-container">
          <div className="hero-grid">
            <div className="hero-content fade-up">
              <div className="hero-badge">
                <Crown size={14} className="hero-badge-icon" />
                <span>MILES DATA ANALYTICS</span>
                <span className="hero-badge-dot"></span>
                <span className="hero-badge-featured">Featured Program</span>
              </div>
              
              <h1 className="hero-title">
                Turn Data into Decisions.
                <span className="hero-title-highlight">Build a Career in Analytics.</span>
              </h1>
              
              <p className="hero-description">
                Develop practical skills in Excel, data visualization, dashboards and business analytics to 
                transform raw data into meaningful insights. Learn how organizations use data to drive 
                smarter business decisions.
              </p>
              
              <div className="hero-ideal-for">
                <span className="hero-ideal-label">Ideal For:</span>
                <span className="hero-ideal-tag">Students</span>
                <span className="hero-ideal-tag">Graduates</span>
                <span className="hero-ideal-tag">Working Professionals</span>
                <span className="hero-ideal-tag">Career Switchers</span>
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
                  <span>Max 30 Students</span>
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
                    <div className="hero-stat-number">{getDurationText(currentCourse.duration)}</div>
                    <div className="hero-stat-label">Hours of Training</div>
                  </div>
                  <div className="hero-stat-divider"></div>
                  <div className="hero-stat-item">
                    <div className="hero-stat-number">2</div>
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
                    <span>Capstone Projects</span>
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
                <BarChart3 size={20} />
              </div>
              <div className="stat-content">
                <h3>2 Levels</h3>
                <p>Progressive Learning</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: colors.goldLight, color: colors.goldDark }}>
                <Award size={20} />
              </div>
              <div className="stat-content">
                <h3>Certification</h3>
                <p>Analytics Skills Verified</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
                <Users size={20} />
              </div>
              <div className="stat-content">
                <h3>30</h3>
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
            <h2 style={{ color: colors.black }}>Why Choose MILES for Data Analytics?</h2>
            <p style={{ color: colors.gray }}>Build practical data skills that drive business decisions</p>
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
            <p style={{ color: colors.gray }}>Build a rewarding career in data analytics and business intelligence</p>
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

      {/* What You'll Learn - Expandable Modules with Duration */}
      <section className="modules-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: colors.sky }}>Curriculum</span>
            <h2 style={{ color: colors.black }}>What You'll Learn</h2>
            <p style={{ color: colors.gray }}>Choose the right learning path for your analytics career goals</p>
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
                        <strong>Course Modules</strong>
                        <div className="module-modules-list">
                          {course.moduleDetails.map((module, idx) => (
                            <div key={idx} className="module-module-item">
                              <div className="module-module-header">
                                <strong style={{ color: '#0f172a', fontSize: '0.78rem' }}>
                                  Module {idx + 1}: {module.title}
                                </strong>
                                <span className="module-time-badge" style={{ 
                                  background: colors.skyLight, 
                                  color: colors.skyDark,
                                  fontSize: '0.65rem',
                                  fontWeight: 600,
                                  padding: '2px 10px',
                                  borderRadius: '12px',
                                  marginLeft: '8px'
                                }}>
                                  {module.duration}
                                </span>
                              </div>
                              <ul style={{ color: '#64748b', fontSize: '0.72rem', margin: '4px 0 0 0', paddingLeft: '16px', listStyle: 'disc' }}>
                                {module.topics.map((topic, topicIdx) => (
                                  <li key={topicIdx}>{topic}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                      {course.id === 1 && (
                        <div className="module-detail module-detail-full">
                          <strong>Capstone Project</strong>
                          <p>End-to-end AI/ML project including testing, documentation and project presentation.</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
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
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Comprehensive support to help you land your dream analytics role</p>
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
            <p style={{ color: colors.gray }}>Find answers to common questions about our Data Analytics program</p>
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

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-content">
            <h2>Data Is the Language of Modern Business. Learn to Speak It.</h2>
            <p>Join MILES Data Analytics program and build a data-driven career</p>
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
        .data-analytics-page {
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

        /* HERO SECTION */
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
          flex-direction: column;
          padding: 6px 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .module-module-item:last-child {
          border-bottom: none;
        }

        .module-module-header {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }

        .module-time-badge {
          white-space: nowrap;
          display: inline-block;
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
            padding: 4px 0;
          }
          .module-time-badge {
            font-size: 0.6rem !important;
            margin-left: 4px !important;
            padding: 1px 8px !important;
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

export default DataAnalyticsPage;
