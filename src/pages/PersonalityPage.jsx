import React from 'react';
import { 
  Users, 
  Zap, 
  Briefcase, 
  UserCheck, 
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
  Rocket,
  Handshake,
  Globe,
  Sparkles,
  Mic,
  Presentation,
  Brain,
  MessageSquare,
  Users as UsersIcon,
  Smile,
  Eye,
  Heart,
  Compass,
  Crown,
  ThumbsUp
} from 'lucide-react';

const PersonalityPage = () => {
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

  // Professional Color Scheme: Navy Blue, Sky Blue, Gold, White
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
    { primary: colors.sky, light: colors.skyLight, gradient: `linear-gradient(135deg, ${colors.navy}, ${colors.sky})`, dark: colors.navy, bg: colors.skyLight, accent: colors.gold }
  ];

  const courses = [
    {
      id: 0,
      title: 'Personality Development Program',
      program: 'Professional Personality Development',
      duration: '30 Hours',
      level: 'Beginner to Advanced',
      idealFor: 'School Students • College Students • Fresh Graduates • Young Professionals',
      coreFocus: 'Communication, Presentation, Interpersonal Skills & Workplace Readiness',
      whatYoullMaster: 'Communication Skills • Presentation Skills • Interpersonal Skills • Workplace Etiquette • Interview Preparation • Body Language • Public Speaking • Professional Grooming • Emotional Intelligence • Leadership Basics',
      projects: 'Mock interviews, group discussions, presentations, role-plays and real-world simulations',
      skills: 'Professional Communication & Workplace Readiness',
      certification: 'Personality Development Certificate',
      careers: 'Business Development Executive • Customer Relationship Executive • Sales Professional • HR Executive • Front Office Executive • Marketing Executive • Banking Professional • Corporate Trainer • Entrepreneur • Public Relations Executive',
      description: 'Strengthen your communication, presentation, interpersonal and workplace skills while building the confidence needed to succeed in interviews, the workplace and everyday professional interactions.',
      color: courseColors[0],
      modules: [
        {
          title: 'Communication Skills',
          topics: 'Verbal Communication, Non-Verbal Communication, Active Listening, Clarity & Conciseness, Professional Tone, Telephone Etiquette, Email Writing',
          duration: '6 Hours'
        },
        {
          title: 'Presentation Skills',
          topics: 'Structuring Presentations, Visual Aids, Body Language, Voice Modulation, Handling Q&A, Persuasive Speaking, Storytelling',
          duration: '5 Hours'
        },
        {
          title: 'Interpersonal Skills',
          topics: 'Building Rapport, Empathy, Conflict Resolution, Teamwork, Collaboration, Networking, Professional Relationships',
          duration: '4 Hours'
        },
        {
          title: 'Workplace Etiquette & Professionalism',
          topics: 'Office Etiquette, Dress Code, Punctuality, Work Ethics, Corporate Culture, Professional Boundaries, Business Manners',
          duration: '4 Hours'
        },
        {
          title: 'Interview Preparation',
          topics: 'Resume Building, Cover Letters, Common Interview Questions, Behavioral Questions, Mock Interviews, Follow-up Etiquette',
          duration: '5 Hours'
        },
        {
          title: 'Public Speaking & Confidence Building',
          topics: 'Overcoming Stage Fright, Impromptu Speaking, Speech Delivery, Audience Engagement, Confidence Building Exercises',
          duration: '6 Hours'
        }
      ]
    }
  ];

  const sharedData = {
    careerOutcomes: [
      { title: 'Business Development Executive', salary: '₹3–6 LPA' },
      { title: 'Customer Relationship Executive', salary: '₹3–5 LPA' },
      { title: 'Sales Professional', salary: '₹3.5–7 LPA' },
      { title: 'HR Executive', salary: '₹3–6 LPA' },
      { title: 'Front Office Executive', salary: '₹2.5–4.5 LPA' },
      { title: 'Marketing Executive', salary: '₹3–6 LPA' },
      { title: 'Banking Professional', salary: '₹3.5–7 LPA' },
      { title: 'Corporate Trainer', salary: '₹4–8 LPA' },
      { title: 'Entrepreneur', salary: '₹5–15 LPA' },
      { title: 'Public Relations Executive', salary: '₹3.5–6 LPA' }
    ],
    testimonials: [
      {
        name: 'Aisha Mehta',
        role: 'Business Development Executive',
        quote: '"This program completely transformed my confidence levels."',
        text: 'I was always nervous during interviews and group discussions. The practical sessions on communication, body language, and mock interviews helped me overcome my fears and present myself professionally.',
        rating: 5
      },
      {
        name: 'Vikram Desai',
        role: 'HR Executive',
        quote: '"The workplace etiquette and professional grooming sessions were extremely valuable."',
        text: 'I learned how to carry myself professionally in corporate settings. The trainers focused on real-world scenarios, which made the learning practical and immediately applicable.',
        rating: 5
      },
      {
        name: 'Neha Shah',
        role: 'Marketing Professional',
        quote: '"The presentation and public speaking skills I gained here are invaluable."',
        text: 'Before this course, I struggled with presenting ideas confidently. Now I can deliver presentations and speak in front of groups without anxiety. This course was a game-changer for my career.',
        rating: 5
      }
    ],
    faqs: [
      {
        q: 'Who can benefit from this program?',
        a: 'This program is designed for school students, college students, fresh graduates, young professionals, and anyone looking to improve their communication, interpersonal, and professional skills. Whether you are preparing for your first job, looking to switch careers, or aiming for a leadership role, this program will help you develop the essential soft skills needed for professional success.'
      },
      {
        q: 'Do I need any prior experience to join?',
        a: 'No prior experience is required. The program starts with foundational concepts and gradually builds advanced skills. It is suitable for complete beginners as well as professionals looking to refine their existing skills. Our trainers customize the learning pace based on each participant\'s comfort level.'
      },
      {
        q: 'What practical sessions are included?',
        a: 'The program includes extensive practical sessions such as:\n• Mock Interviews with real-time feedback\n• Group Discussions on current topics\n• Presentation exercises with video recording\n• Role-play scenarios for workplace situations\n• Public speaking practice sessions\n• Resume writing workshops\n• Email writing and professional communication exercises\n• Body language and non-verbal communication drills'
      },
      {
        q: 'How will this program help my career?',
        a: 'Strong communication and interpersonal skills are essential for career success. This program helps you:\n• Build confidence in professional settings\n• Improve your interview performance\n• Develop leadership and teamwork abilities\n• Enhance your professional presence\n• Master workplace etiquette\n• Network effectively\n• Handle difficult conversations professionally\n• Create a strong personal brand'
      },
      {
        q: 'Will I receive a certificate after completion?',
        a: 'Yes. Upon successful completion of the program, you will receive a Course Completion Certificate from MILES. This certificate validates your personality development and professional skills, adding significant value to your resume and increasing your employability.'
      },
      {
        q: 'What makes this program different from others?',
        a: 'Our program stands out because:\n• It focuses on practical application rather than theory\n• You engage in real-world simulations and role-plays\n• You receive personalized feedback from industry experts\n• The curriculum is updated regularly based on industry requirements\n• Small batch sizes ensure individual attention\n• Trainers have extensive corporate experience\n• You get lifetime access to course materials and resources\n• Ongoing mentorship and career guidance support'
      },
      {
        q: 'What is the class schedule and duration?',
        a: 'The program spans 30 hours of comprehensive training. Classes are conducted online live with flexible scheduling options including:\n• Weekend batches for working professionals\n• Weekday batches for students\n• Evening batches for those with day commitments\nEach session is interactive and includes both theoretical knowledge and practical exercises.'
      },
      {
        q: 'Will there be any assessments?',
        a: 'Yes, the program includes continuous assessments through:\n• Regular practice exercises\n• Mock interview evaluations\n• Presentation feedback sessions\n• Group discussion performance reviews\n• Final project presentation\nThese assessments help track your progress and identify areas for improvement.'
      },
      {
        q: 'Is there any placement assistance provided?',
        a: 'Yes, we provide comprehensive placement support including:\n• Resume and LinkedIn profile optimization\n• Mock interviews with industry professionals\n• Communication and soft skills enhancement\n• Professional grooming and etiquette guidance\n• Career counselling and mentorship\n• Job referrals and placement assistance\n• Networking opportunities with industry experts'
      },
      {
        q: 'What topics are covered in the program?',
        a: 'The program covers a wide range of topics including:\n• Communication Skills (Verbal, Non-verbal, Written)\n• Presentation Skills\n• Public Speaking\n• Interpersonal Skills\n• Workplace Etiquette & Professionalism\n• Interview Preparation\n• Body Language & Non-verbal Communication\n• Emotional Intelligence\n• Leadership Basics\n• Conflict Resolution\n• Team Collaboration\n• Networking Skills\n• Professional Grooming\n• Resume Building & Personal Branding'
      }
    ],
    usps: [
      'Practical Skills for Real-World Application',
      'Personalized Feedback & Improvement Guidance',
      'Interactive Sessions with Role-Plays & Simulations',
      'Industry-Relevant Curriculum',
      'Expert Faculty with Corporate Experience',
      'Mock Interviews & Group Discussions',
      'Resume Building & Interview Preparation',
      'Confidence Building Exercises',
      'Career Guidance & Mentorship',
      'Certificate of Completion'
    ],
    learningOutcomes: [
      'Master professional communication skills.',
      'Deliver impactful presentations with confidence.',
      'Build strong interpersonal relationships at work.',
      'Understand workplace etiquette and professionalism.',
      'Prepare effectively for job interviews.',
      'Develop public speaking and leadership skills.',
      'Enhance emotional intelligence and empathy.',
      'Build a professional personal brand.',
      'Gain confidence in professional settings.',
      'Create a compelling resume and cover letter.'
    ],
    placementSupport: [
      'Resume & LinkedIn Profile Building',
      'Interview Preparation & Mock Interviews',
      'Communication & Soft Skills Training',
      'Professional Grooming & Etiquette Guidance',
      'Career Counselling & Mentorship',
      'Role-Play & Simulation Exercises',
      'Presentation Skills Development',
      'Job Referrals & Placement Assistance'
    ]
  };

  const currentCourse = courses[activeCourse];

  return (
    <div className="personality-page">
      {/* Hero Section with Navy/Sky Blue Gradient */}
      <section className="hero-section">
        <div className="hero-particles"></div>
        <div className="hero-gradient-overlay"></div>
        
        <div className="container hero-container">
          <div className="hero-grid">
            <div className="hero-content fade-up">
              <div className="hero-badge">
                <Crown size={14} className="hero-badge-icon" />
                <span>{currentCourse.program}</span>
                <span className="hero-badge-dot"></span>
                <span className="hero-badge-featured">Featured Course</span>
              </div>
              
              <h1 className="hero-title">
                Enter Workplace with the
                <span className="hero-title-highlight">Confidence Employers Remember</span>
              </h1>
              
              <p className="hero-description">{currentCourse.description}</p>
              
              <p className="hero-ideal-for">
                <strong>Ideal For:</strong> {currentCourse.idealFor}
              </p>
              
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
              <div className="hero-card">
                <div className="hero-card-header">
                  <div className="hero-card-icon">
                    <Rocket size={18} />
                  </div>
                  <h3>Course Overview</h3>
                  <span className="hero-card-badge" style={{ background: colors.gold }}>Popular</span>
                </div>
                <div className="hero-card-content">
                  <div className="hero-card-item">
                    <strong>Program</strong>
                    <span>{currentCourse.program}</span>
                  </div>
                  <div className="hero-card-item">
                    <strong>Duration</strong>
                    <span>{currentCourse.duration}</span>
                  </div>
                  <div className="hero-card-item">
                    <strong>Skill Level</strong>
                    <span className="hero-card-level" style={{ color: currentCourse.color.primary }}>
                      {currentCourse.level}
                    </span>
                  </div>
                  <div className="hero-card-item">
                    <strong>Certification</strong>
                    <span>{currentCourse.certification}</span>
                  </div>
                </div>
                <div className="hero-card-footer">
                  <div className="hero-card-footer-item">
                    <Handshake size={12} className="footer-icon" />
                    <span>Professional Growth</span>
                  </div>
                  <div className="hero-card-footer-item">
                    <Globe size={12} className="footer-icon" />
                    <span>Industry Recognized</span>
                  </div>
                  <div className="hero-card-footer-item">
                    <ThumbsUp size={12} className="footer-icon" />
                    <span>100% Practical</span>
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
                <Clock size={20} />
              </div>
              <div className="stat-content">
                <h3>{currentCourse.duration}</h3>
                <p>Total Duration</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: colors.goldLight, color: colors.goldDark }}>
                <Award size={20} />
              </div>
              <div className="stat-content">
                <h3>{currentCourse.level}</h3>
                <p>Skill Level</p>
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
                    <Users size={12} />
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
            <h2 style={{ color: colors.black }}>Why Choose MILES for Personality Development?</h2>
            <p style={{ color: colors.gray }}>Transform your personality with industry-leading training</p>
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
            <p style={{ color: colors.gray }}>Build a successful career with strong professional skills</p>
          </div>
          <div className="career-grid">
            {sharedData.careerOutcomes.map((career, index) => {
              const IconComponent = index % 3 === 0 ? UserCheck : index % 3 === 1 ? UsersIcon : Briefcase;
              return (
                <div key={index} className="career-card">
                  <div className="career-icon-wrapper">
                    <IconComponent size={18} className="career-icon" />
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
            <p style={{ color: colors.gray }}>Develop essential skills for professional success</p>
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
                    <span className="module-level level-beginner">
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
                          {course.modules.map((module, idx) => (
                            <div key={idx} className="module-module-item">
                              <span className="module-module-icon" style={{ color: colors.sky }}>
                                {idx === 0 ? <MessageSquare size={14} /> :
                                 idx === 1 ? <Presentation size={14} /> :
                                 idx === 2 ? <UsersIcon size={14} /> :
                                 idx === 3 ? <Smile size={14} /> :
                                 idx === 4 ? <Target size={14} /> :
                                 <Mic size={14} />}
                              </span>
                              <div>
                                <strong style={{ color: colors.black }}>{module.title}</strong>
                                <span style={{ color: colors.gray, fontSize: '0.7rem', display: 'block' }}>{module.topics}</span>
                                <span style={{ color: colors.sky, fontSize: '0.65rem', fontWeight: 600 }}>{module.duration}</span>
                              </div>
                            </div>
                          ))}
                        </div>
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
            <p style={{ color: colors.gray }}>Master skills that set you apart in the workplace</p>
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

      {/* FAQs */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ color: colors.sky }}>FAQs</span>
            <h2 style={{ color: colors.black }}>Frequently Asked Questions</h2>
            <p style={{ color: colors.gray }}>Find answers to common questions about our Personality Development program</p>
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
                    {faq.a.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
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
            <h2>Confidence Opens Doors.<br />Communication Keeps Them Open.</h2>
            <p>Join MILES Personality Development program and transform your professional presence</p>
            <div className="final-cta-buttons">
              <button className="final-cta-primary" onClick={() => window.location.href = '/contact'}>
                <Mail size={16} /> Enquire Now <ArrowRight size={16} />
              </button>
              <button className="final-cta-secondary" onClick={() => window.location.href = '/contact'}>
                <Phone size={16} /> Talk to Someone
              </button>
              <button className="final-cta-gold" onClick={() => window.location.href = '/contact'}>
                <Calendar size={16} /> Book Free Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .personality-page {
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
          min-height: 60vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(135deg, #0a1628 0%, #0ea5e9 100%);
          padding: 40px 0;
          width: 100%;
        }

        .hero-particles {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(14, 165, 233, 0.05) 0%, transparent 50%);
          z-index: 0;
        }

        .hero-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(10, 22, 40, 0.85) 0%, rgba(14, 165, 233, 0.7) 100%);
          z-index: 1;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          width: 100%;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px 5px 8px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.15);
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
          font-size: 2.4rem;
          font-weight: 800;
          line-height: 1.2;
          margin-top: 14px;
          color: #ffffff;
          letter-spacing: -0.02em;
          max-width: 600px;
        }

        .hero-title-highlight {
          display: block;
          color: #fbbf24;
        }

        .hero-description {
          margin-top: 12px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 520px;
        }

        .hero-ideal-for {
          margin-top: 8px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.8rem;
        }

        .hero-ideal-for strong {
          font-weight: 600;
          color: #fbbf24;
        }

        .hero-meta-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 16px;
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
          gap: 10px;
          margin-top: 22px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border: none;
          padding: 10px 24px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.8rem;
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
          background: rgba(255, 255, 255, 0.1);
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          padding: 10px 24px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.8rem;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          gap: 8px;
          align-items: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .hero-right {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
        }

        /* INCREASED CARD WIDTH */
        .hero-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          overflow: hidden;
          width: 100%;
          max-width: 480px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
          transition: all 0.4s ease;
        }

        .hero-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
        }

        .hero-card-header {
          padding: 16px 22px;
          background: linear-gradient(135deg, #0a1628, #1a2a4a);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hero-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(251, 191, 36, 0.2);
          padding: 8px;
          border-radius: 10px;
          color: #fbbf24;
        }

        .hero-card-header h3 {
          font-size: 0.95rem;
          font-weight: 700;
          margin: 0;
          color: #ffffff;
          flex: 1;
        }

        .hero-card-badge {
          padding: 3px 12px;
          border-radius: 20px;
          font-size: 0.6rem;
          font-weight: 700;
          color: #0a1628;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .hero-card-content {
          padding: 16px 22px;
        }

        .hero-card-item {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
          font-size: 0.82rem;
        }

        .hero-card-item:last-child {
          border-bottom: none;
        }

        .hero-card-item strong {
          color: #0f172a;
          font-weight: 600;
          font-size: 0.78rem;
        }

        .hero-card-item span {
          color: #64748b;
          text-align: right;
          max-width: 65%;
          font-size: 0.78rem;
        }

        .hero-card-level {
          font-weight: 700 !important;
        }

        .hero-card-footer {
          padding: 12px 22px;
          display: flex;
          justify-content: space-between;
          background: #f8fafc;
          border-top: 1px solid #f1f5f9;
        }

        .hero-card-footer-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          color: #64748b;
          font-weight: 500;
        }

        .footer-icon {
          color: #0ea5e9;
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
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
        }

        .career-card {
          background: #ffffff;
          padding: 16px 12px;
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
          font-size: 0.72rem;
          font-weight: 600;
          margin-bottom: 3px;
          color: #0f172a;
        }

        .career-salary {
          font-weight: 700;
          font-size: 0.72rem;
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
          gap: 8px 16px;
          margin-top: 4px;
        }

        .module-module-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 4px 0;
          font-size: 0.74rem;
          color: #475569;
        }

        .module-module-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
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
          max-width: 860px;
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
          border-radius: 10px;
          margin-bottom: 10px;
          border: 1.5px solid #e2e8f0;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: #0ea5e9;
          box-shadow: 0 4px 20px rgba(14, 165, 233, 0.08);
        }

        .faq-item.active {
          border-color: #0ea5e9;
          box-shadow: 0 4px 20px rgba(14, 165, 233, 0.1);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 18px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.85rem;
          color: #0f172a;
          transition: all 0.3s ease;
          gap: 12px;
          background: #ffffff;
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
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #f1f5f9;
          transition: all 0.3s ease;
        }

        .faq-item.active .faq-icon-wrapper {
          background: #0ea5e9;
        }

        .faq-toggle {
          color: #64748b;
          transition: all 0.3s ease;
        }

        .faq-toggle.active {
          color: #ffffff;
        }

        .faq-answer {
          padding: 0 18px 18px;
          font-size: 0.82rem;
          line-height: 1.8;
          color: #475569;
          background: #fafbfc;
          border-top: 1px solid #f1f5f9;
          animation: slideDown 0.3s ease;
        }

        .faq-answer p {
          margin: 6px 0;
        }

        .faq-answer p:first-child {
          margin-top: 4px;
        }

        .faq-answer p:last-child {
          margin-bottom: 0;
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

        .final-cta-gold {
          background: rgba(251, 191, 36, 0.12);
          border: 1.5px solid rgba(251, 191, 36, 0.25);
          color: #fbbf24;
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

        .final-cta-gold:hover {
          background: rgba(251, 191, 36, 0.2);
          transform: translateY(-2px);
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .container {
            padding: 0 20px;
          }
          .hero-grid {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }
          .hero-title {
            font-size: 2rem;
          }
          .career-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .placement-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hero-card {
            max-width: 420px;
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
            text-align: center;
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
          .hero-card {
            max-width: 100%;
            width: 100%;
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
            padding: 25px 0;
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
          .hero-meta-grid {
            gap: 8px;
          }
          .hero-meta-item {
            font-size: 0.68rem;
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
            font-size: 0.65rem;
          }
          .career-salary {
            font-size: 0.65rem;
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
          .final-cta-secondary,
          .final-cta-gold {
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
          .hero-card-header {
            flex-wrap: wrap;
          }
          .hero-card-item {
            font-size: 0.7rem;
          }
          .hero-card-footer {
            flex-wrap: wrap;
            gap: 4px;
          }
          .hero-card {
            max-width: 100%;
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
            font-size: 0.78rem;
            padding: 12px 14px;
          }
          .faq-answer {
            font-size: 0.76rem;
            padding: 0 14px 14px;
          }
          .faq-icon-wrapper {
            width: 24px;
            height: 24px;
          }
          .faq-toggle {
            width: 16px;
            height: 16px;
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
          .module-modules-list {
            grid-template-columns: 1fr;
          }
          .module-module-item {
            font-size: 0.68rem;
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
          .hero-card-item span {
            max-width: 60%;
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
          .faq-question {
            font-size: 0.72rem;
            padding: 10px 12px;
          }
          .faq-answer {
            font-size: 0.7rem;
            padding: 0 12px 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default PersonalityPage;
