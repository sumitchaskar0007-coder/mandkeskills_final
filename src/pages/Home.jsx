import "./Home.css";
import heroImage from "/assets/images/cover.png";
import image1 from "/assets/images/1.png";
import image2 from "/assets/images/2.png";
import image3 from "/assets/images/3.png";
import image4 from "/assets/images/4.png";
import {
  Briefcase,
  GraduationCap,
  Users,
  Building2,
  ArrowRight,
  CheckCircle,
  Award,
  TrendingUp,
  BookOpen,
  BarChart3,
  Sparkles,
  ChevronDown,
  MapPin,
  Quote,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const careerPaths = [
  {
    id: "numbers",
    label: "I like numbers & business",
    courses: [
      { title: "Tally + Accounting", path: "/courses/tally-c" },
      { title: "Export–Import", path: "/courses/exim" },
    ],
  },
  {
    id: "technology",
    label: "I like technology",
    courses: [
      { title: "Cyber Security", path: "/courses/ethical-hacking" },
      { title: "No-Code AI", path: "/courses/genai-ml" },
      { title: "Data Analytics", path: "/courses/ai-data-science" },
    ],
  },
  {
    id: "business",
    label: "I want my own business",
    courses: [
      { title: "Export–Import", path: "/courses/exim" },
      { title: "No-Code AI", path: "/courses/genai-ml" },
    ],
  },
  {
    id: "creative",
    label: "I like creative work",
    courses: [
      { title: "Photography", path: "/courses" },
      { title: "No-Code AI", path: "/courses/genai-ml" },
    ],
  },
  {
    id: "studying",
    label: "I want a job while studying",
    courses: [
      { title: "Tally Essentials", path: "/courses/tally" },
      { title: "Personality Development", path: "/courses/personality" },
    ],
  },
];

const testimonials = [
  {
    name: "Aarav Kulkarni",
    course: "Tally & Accounting",
    location: "Kothrud, Pune",
    quote: "The practical exercises made accounting much easier to understand. I now feel confident working with real business entries and reports.",
  },
  {
    name: "Sneha Patil",
    course: "Generative AI",
    location: "Wakad, Pune",
    quote: "The sessions were clear, current, and genuinely hands-on. I can now use AI tools thoughtfully in my daily work instead of only experimenting with them.",
  },
  {
    name: "Rohan Deshmukh",
    course: "Ethical Hacking",
    location: "Hadapsar, Pune",
    quote: "MILES helped me turn my interest in cybersecurity into structured skills. The trainer explained complex topics with practical examples.",
  },
  {
    name: "Isha Joshi",
    course: "Personality Development",
    location: "Baner, Pune",
    quote: "I became more comfortable speaking in interviews and presenting myself professionally. The small improvements made a big difference to my confidence.",
  },
];

export default function Home() {
  // Updated courses array with new career tracks and job roles
  const courses = [
    {
      title: "Accounting Career Track",
      link: "/courses/tally",
      subtitle: "Tally Essentials",
      readyFor: ["Junior Accountant", "Accounts Assistant"],
      icon: <BookOpen size={32} />,
    },
    {
      title: "Technology Career Track",
      link: "/courses/ethical-hacking",
      subtitle: "Cyber Security",
      readyFor: ["Security Support Roles"],
      icon: <Award size={32} />,
    },
    {
      title: "AI Career Track",
      link: "/courses/genai-ml",
      subtitle: "No-Code AI",
      readyFor: ["AI-enabled workplace roles"],
      icon: <BarChart3 size={32} />,
    },
    {
      title: "Business Career Track",
      link: "/courses/exim",
      subtitle: "Export Import",
      readyFor: ["Export Executive roles"],
      icon: <TrendingUp size={32} />,
    },
  ];

  const features = [
    {
      title: "Industry-Relevant Training",
      description:
        "Courses designed with industry experts to match current market requirements.",
    },
    {
      title: "Hands-On Learning",
      description:
        "Live projects, practical sessions and real-world implementation.",
    },
    {
      title: "Placement Assistance",
      description:
        "Career guidance and job opportunities through industry collaborations.",
    },
    {
      title: "Expert Mentors",
      description:
        "Learn from professionals with extensive industry experience.",
    },
  ];

  const whyChooseImages = [image1, image2, image3, image4];

  const [careerMenuOpen, setCareerMenuOpen] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState(null);

  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <div className="hero-grid">

            <div className="hero-text fade-up">
              <span className="hero-badge">
                <Sparkles size={16} />
                A Hub for Job-Ready Courses
              </span>

              <h5 className="hero-title">
Courses Designed With Industry Needs.
                <span> Careers Built For Future Growth.</span>
              </h5>

              <p className="hero-description">
                Industry-aligned certification programs in Finance,
                Technology, AI, Cyber Security & Business Skills with 
                practical training and career guidance.
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-btn career-trigger"
                  type="button"
                  aria-expanded={careerMenuOpen}
                  aria-controls="career-path-menu"
                  onClick={() => setCareerMenuOpen((open) => !open)}
                >
                  Career Path Finder
                  <ChevronDown size={18} />
                </button>

                {careerMenuOpen && (
                  <div className="career-dropdown" id="career-path-menu">
                    <div className="career-dropdown-head">
                      <span>Career Path Finder</span>
                      <strong>What sounds most like you?</strong>
                    </div>

                    <div className={`career-choices${selectedCareer ? " has-selection" : ""}`}>
                      {(selectedCareer ? [selectedCareer] : careerPaths).map((path) => (
                        <button
                          key={path.id}
                          type="button"
                          className={selectedCareer?.id === path.id ? "active" : ""}
                          onClick={() => setSelectedCareer(path)}
                        >
                          {path.label}<ArrowRight size={15} />
                        </button>
                      ))}

                      {selectedCareer && (
                        <div className="career-suggestions" aria-live="polite">
                          <div className="career-suggestions-head">
                            <span>Suggested courses</span>
                            <button
                              type="button"
                              aria-label="Clear selected career"
                              title="Clear selection"
                              onClick={() => setSelectedCareer(null)}
                            >
                              <X size={16} aria-hidden="true" />
                            </button>
                          </div>
                          <div>
                            {selectedCareer.courses.map((course) => (
                              <Link key={course.title} to={course.path}>
                                {course.title}<ArrowRight size={15} />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="hero-image-container">
              <div className="hero-glow"></div>

              <img
                src={heroImage}
                alt="MILES Hero"
                className="hero-image"
              />
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">

            <div className="stat-card">
              <Users size={40} />
              <h3>250+</h3>
              <p>Students Trained</p>
            </div>

            <div className="stat-card">
              <Building2 size={40} />
              <h3>10+</h3>
              <p>Hiring Partners</p>
            </div>

            <div className="stat-card">
              <Briefcase size={40} />
              <h3>500+</h3>
              <p>Job Opportunities</p>
            </div>

            <div className="stat-card">
              <GraduationCap size={40} />
              <h3>100%</h3>
              <p>Guidance for Job Readiness</p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose-section">
        <div className="container">
          {/* Top Section - Images Left, Content Right */}
          <div className="why-choose-top">
            {/* Left side - Images Grid */}
            <div className="why-choose-images">
              <div className="images-grid">
                {whyChooseImages.map((img, index) => (
                  <div key={index} className="image-card">
                    <img src={img} alt={`Why Choose MILES ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Content */}
            <div className="why-choose-content">
              <div className="section-header-left">
                <span>BRIDGING KNOWLEDGE & INDUSTRY SKILLS</span>
                <h2>Why Students Choose MILES</h2>
                <p>
                  MILES is dedicated to empowering students with practical,
                  industry-focused skills that enhance employability and career
                  growth in today&apos;s competitive job market.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section - Feature Cards in Single Row */}
          <div className="features-section">
            <div className="features-grid-single-row">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    <CheckCircle size={24} />
                  </div>
                  <div className="feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COURSES - Updated with new career tracks */}
      <section className="courses-section">
        <div className="container">

          <div className="section-header">
            <span>FEATURED PROGRAMS</span>
            <h2>Popular Career-Focused Courses</h2>
          </div>

          <div className="courses-grid">
            {courses.map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-icon-wrapper">
                  {course.icon}
                </div>

                <h3>{course.title}</h3>
                <p className="course-subtitle">{course.subtitle}</p>

                <div className="course-ready-for">
                  <span className="ready-label">Become ready for:</span>
                  <ul>
                    {course.readyFor.map((role, idx) => (
                      <li key={idx}>{role}</li>
                    ))}
                  </ul>
                </div>

                <a href={course.link} className="course-link">
                  Learn More
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* USP SECTION */}
      <section className="usp-section section-padding">
        <div className="container">
          <div className="section-label">Unique Selling Points</div>
          <h2 className="section-title">
            Unique <span>Selling Points</span>
          </h2>

          <div className="usp-grid">
            <div className="usp-card">
              <div className="usp-number">01</div>
              <h4>Ready Jobs, Not Just Courses</h4>
              <p>
                1.Every MILES program is aligned with actual market demand - designed to prepare learners for specific, available job roles.
Our strong network of hiring partners ensures that training leads to real employment opportunities.
              </p>
            </div>

            <div className="usp-card">
              <div className="usp-number">02</div>
              <h4>Industry-Education Collaboration</h4>
              <p>
2.Programs are co-created with industry professionals and employers, ensuring relevance and currency.
This means learners don&apos;t just learn theory - they gain the exact skills employers are looking for.                </p>
            </div>

            <div className="usp-card">
              <div className="usp-number">03</div>
              <h4>Expert Trainers & Mentors</h4>
              <p>
3.MILES brings together top trainers and practitioners across domains - from corporate professionals to entrepreneurs and technical specialists - offering deep, practical learning experiences.                </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-heading">
            <span>STUDENT STORIES</span>
            <h2>What Our Learners Say</h2>
            <p>Real learning experiences from the MILES community across Pune.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="testimonial-topline">
                  <Quote className="testimonial-quote-icon" aria-hidden="true" />
                  <div className="testimonial-stars" aria-label="5 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} fill="currentColor" />)}
                  </div>
                </div>
                <blockquote>“{testimonial.quote}”</blockquote>
                <footer>
                  <div className="testimonial-avatar" aria-hidden="true">
                    {testimonial.name.split(" ").map((part) => part[0]).join("")}
                  </div>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.course}</span>
                    <small><MapPin />{testimonial.location}</small>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
