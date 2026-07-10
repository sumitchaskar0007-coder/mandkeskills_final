import {
  ArrowRight,
  CalendarDays,
  Check,
  CircleAlert,
  Clock3,
  Fingerprint,
  BadgeCheck,
  Lightbulb,
  LockKeyhole,
  MailWarning,
  MessageCircleQuestion,
  Search,
  ShieldCheck,
  UserRound,
  UsersRound,
  Video,
} from "lucide-react";
import "./Webinar.css";

const PAYMENT_LINK = "https://rzp.io/rzp/CounterAttack";

const protectItems = [
  { icon: UserRound, label: "Deepfake Nudes" },
  { icon: Fingerprint, label: "Identity Theft" },
  { icon: CircleAlert, label: "Online Harassment" },
  { icon: MailWarning, label: "Phishing & Scams" },
  { icon: LockKeyhole, label: "Account Takeover" },
];

const investigateItems = [
  "Check if your profile has been hacked",
  "Detect if someone is stalking you",
  "Trace suspicious activity",
  "Secure and recover your accounts",
  "Know your rights and report abuse",
];

const learnItems = [
  "Understand how online attacks happen",
  "Protect your personal data and digital identity",
  "Detect hacking, stalking and suspicious activity",
  "Use tools and techniques used by professionals",
  "Take action and report cyber crimes",
  "Stay safe and secure in the digital world",
];

const webinarFeatures = [
  { icon: Video, label: "Live Interactive Session" },
  { icon: Lightbulb, label: "Practical Insights" },
  { icon: MessageCircleQuestion, label: "Q&A Session" },
  { icon: BadgeCheck, label: "E-Certificate Included" },
];

function ShieldGraphic() {
  return (
    <svg className="webinar-shield" viewBox="0 0 330 380" role="img" aria-label="Two-tone online safety shield">
      <defs>
        <linearGradient id="shieldFill" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0754bc" />
          <stop offset=".5" stopColor="#0877dd" />
          <stop offset=".5" stopColor="#ff710e" />
          <stop offset="1" stopColor="#e94900" />
        </linearGradient>
        <filter id="shieldShadow" x="-50%" y="-40%" width="200%" height="220%">
          <feDropShadow dx="0" dy="15" stdDeviation="13" floodColor="#001d47" floodOpacity=".3" />
        </filter>
      </defs>
      <path d="M165 18C119 58 73 67 40 72v108c0 86 54 139 125 177 71-38 125-91 125-177V72c-33-5-79-14-125-54Z" fill="#fff" filter="url(#shieldShadow)" />
      <path d="M165 35C124 69 84 79 58 83v97c0 72 43 118 107 154 64-36 107-82 107-154V83c-26-4-66-14-107-48Z" fill="url(#shieldFill)" />
      <path d="M165 35v299" stroke="#fff" strokeOpacity=".25" strokeWidth="2" />
      <circle cx="165" cy="150" r="43" fill="#fff" />
      <path d="M96 255c3-45 29-72 69-72s66 27 69 72c-19 17-43 29-69 42-26-13-50-25-69-42Z" fill="#fff" />
    </svg>
  );
}

export default function Webinar() {
  return (
    <main className="webinar-page">
      <section className="webinar-poster" aria-labelledby="webinar-title">
        <div className="corner-ribbon" aria-hidden="true" />

        <header className="webinar-hero">
          <div className="hero-content">
            <div className="presents"><span />Miles Presents<span /></div>
            <h1 id="webinar-title">Counter <em>A</em>ttack</h1>
            <p className="webinar-label">Online Safety &amp; Investigation Webinar</p>
            <p className="hero-mantra"><span>Learn - Protect - Investigate</span><span>Take Control</span></p>
            <p className="hero-copy">
              This webinar will teach you how to <strong>protect yourself and Your Loved Ones</strong> from online attacks and <b>investigate</b> if anyone has hacked your profile or is stalking you.
            </p>
            <div className="hero-actions">
              <a className="hero-book" href={PAYMENT_LINK} target="_blank" rel="noreferrer">Book Your Seat Now <ArrowRight /></a>
              <a className="details-link" href="#webinar-info">View Webinar Details <ArrowRight /></a>
            </div>
            <div className="hero-badges">
              <span><ShieldCheck /> Beginner Friendly</span>
              <span><UsersRound /> All Ages Welcome</span>
              <span><BadgeCheck /> Certificate of Participation</span>
            </div>
          </div>
          <div className="hero-visual"><ShieldGraphic /></div>
        </header>

        <section className="webinar-topics" aria-label="Webinar topics">
          <article className="topic-card topic-protect">
            <div className="topic-heading">
              <span className="topic-icon"><ShieldCheck /></span>
              <h2>Protect<br />Yourself</h2>
            </div>
            <p>Learn how to stay safe from:</p>
            <ul>
              {protectItems.map(({ icon: ItemIcon, label }) => (
                <li key={label}><span><ItemIcon /></span>{label}</li>
              ))}
            </ul>
          </article>

          <div className="shield-stage"><ShieldGraphic /></div>

          <article className="topic-card topic-investigate">
            <div className="topic-heading">
              <span className="topic-icon"><Search /></span>
              <h2>Investigate<br />&amp; Take Action</h2>
            </div>
            <p>Learn how to:</p>
            <ul>
              {investigateItems.map((label) => (
                <li key={label}><span><Check /></span>{label}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="event-facts" id="webinar-info" aria-label="Webinar information">
          <div className="fact"><UsersRound /><div><small>Who should join?</small><strong>All Netizens</strong><span>All ages welcome!</span></div></div>
          <div className="fact"><CalendarDays /><div><small>Date</small><strong>Sunday, 12th July, 2026</strong><span>Live online webinar</span></div></div>
          <div className="fact"><Clock3 /><div><small>Time</small><strong>10am - 12noon</strong><span>Practical &amp; interactive</span></div></div>
          <div className="fact"><Clock3 /><div><small>Duration</small><strong>120 Minutes</strong><span>Focused learning</span></div></div>
        </section>

        <section className="details-grid" aria-label="Webinar learning and instructor">
          <article className="details-card">
            <h2>What You Will Learn</h2>
            <ul className="learn-list">
              {learnItems.map((item) => <li key={item}><Check />{item}</li>)}
            </ul>
          </article>
          <article className="details-card">
            <h2>Know Your MILES Mentor</h2>
            <div className="instructor-profile">
              <div>
                <h3>Jaiprasad Rao</h3>
                <strong>Cyber Security &amp; Digital Forensic Investigator</strong>
                <ul className="expert-credentials">
                  <li><b>Over a decade of experience</b> in cyber investigations, digital forensics, cybercrime analysis and information security.</li>
                  <li><b>Has trained law enforcement agencies, government departments, educational institutions and cybersecurity professionals</b> in digital forensics, ethical hacking and cyber resilience.</li>
                  <li><b>Conceptualizer of India&apos;s First Cyber AI/ML Security Lab</b>, combining AI, Machine Learning, Digital Forensics, Threat Intelligence and Cyber Range technologies for practical training and research.</li>
                </ul>
              </div>
              <div className="instructor-avatar">
                <img src="/assets/images/jayprasadrao.png" alt="Jaiprasad Rao" />
              </div>
            </div>
          </article>
        </section>

        <section className="booking-panel" aria-label="Book the webinar">
          <h2>Limited Seats. High Demand.</h2>
          <p>Reserve your seat now and take control of your digital life.</p>
          <div className="booking-bar">
            <div className="price"><span>Webinar Fee</span><strong><span aria-hidden="true">₹</span>125 Only</strong></div>
            <div className="booking-action"><a href={PAYMENT_LINK} target="_blank" rel="noreferrer">Book Your Seat Now <ArrowRight /></a><small><LockKeyhole /> Secure Payment | Instant Confirmation</small></div>
          </div>
          <div className="feature-row">
            {webinarFeatures.map(({ icon: FeatureIcon, label }) => <div key={label}><FeatureIcon /><span>{label}</span></div>)}
          </div>
        </section>
      </section>
    </main>
  );
}
