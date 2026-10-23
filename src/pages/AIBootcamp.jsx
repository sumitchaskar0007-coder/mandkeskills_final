import { useEffect, useState } from "react";
import { ArrowRight, Award, BookOpen, CalendarDays, ChartNoAxesCombined, Check, Clock3, Globe2, Laptop, Lightbulb, Presentation, Sparkles, UsersRound, Workflow } from "lucide-react";
import "./AIBootcamp.css";

const REGISTRATION_URL = "https://rzp.io/rzp/AI-Bootcamp-Earlybird";
const EARLY_BIRD_END = Date.parse("2026-10-29T00:00:00+05:30");
const tools = ["ChatGPT", "Google Gemini", "Claude", "Perplexity", "Canva AI", "NotebookLM", "Gamma", "Lovable", "Teachable Machine", "Google Sheets AI", "n8n", "Make.com", "OpenAI Agent Builder"];
const takeaways = [
  { icon: Lightbulb, title: "Understand AI, simply", text: "Understand AI, Machine Learning, Generative AI, and AI Agents through simple examples." },
  { icon: BookOpen, title: "Study smarter", text: "Use AI tools for studying, research, assignments, presentations, and exam preparation." },
  { icon: Sparkles, title: "Write better prompts", text: "Learn prompt engineering to get better, more accurate results from AI." },
  { icon: ChartNoAxesCombined, title: "Make sense of data", text: "Explore data analytics, data visualization, and no-code machine learning." },
  { icon: Presentation, title: "Bring your ideas to life", text: "Create AI-generated content, presentations, and simple applications using no-code tools." },
  { icon: Workflow, title: "Automate everyday work", text: "Understand AI automation, build basic workflows, and discover future learning and career opportunities." },
];
const outcomes = [
  "Use ChatGPT, Gemini, Claude, and Perplexity for research, studying, content creation, and problem-solving.",
  "Create professional presentations, posters, and visual content using Claude AI, Gamma, and Canva AI.",
  "Build simple websites and applications using Lovable, without extensive coding.",
  "Analyse data, create visualisations, and build basic prediction models using no-code AI tools and Google Sheets.",
  "Build simple AI-powered workflows and automate repetitive tasks using n8n and Make.com.",
];

export default function AIBootcamp() {
  const [now, setNow] = useState(Date.now);
  const earlyBird = now < EARLY_BIRD_END;

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 60000);
    const previousTitle = document.title;
    document.title = "No-Code AI Bootcamp (7 Days) | MILES × CODEBYTE AI";
    return () => { window.clearInterval(timer); document.title = previousTitle; };
  }, []);

  return (
    <main className="ai-bootcamp-page" aria-labelledby="bootcamp-title">
      <div className="abc-poster">
        <div className="abc-partners"><span className="abc-miles">MILES</span><span className="abc-partner-cross">×</span><span className="abc-codebyte">CODEBYTE AI</span></div>
        <section className="abc-hero">
          <div className="abc-hero-copy">
            <span className="abc-eyebrow"><Sparkles aria-hidden="true" /> Practical AI training. Designed for everyone.</span>
            <h1 id="bootcamp-title">No-Code AI<br /><span>Bootcamp</span> <small>(7 Days)</small></h1>
            <p className="abc-hero-tagline">No coding? <strong>No problem.</strong></p>
            <p className="abc-intro">Study smarter, work faster and boost your productivity. MILES × CODEBYTE AI brings you practical, hands-on AI training designed for <strong>EVERYONE!</strong> <strong className="abc-prerequisite">NO TECHNICAL BACKGROUND OR PRIOR AI KNOWLEDGE NEEDED!</strong></p>
            <div className="abc-hero-date"><CalendarDays aria-hidden="true" /><span><time dateTime="2026-11-01">1</time>–<time dateTime="2026-11-07">7 November 2026</time></span></div>
            <p className="abc-hero-offer">{earlyBird ? <>Early Bird <strong>₹1,499 ONLY!</strong><span>Valid till 28 October 2026 · ₹1,999 thereafter</span></> : <>Register for <strong>₹1,999</strong></>}</p>
            <div className="abc-actions"><a className="abc-button" href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">Join AI Bootcamp <ArrowRight aria-hidden="true" /></a><a className="abc-details-link" href="#bootcamp-details">Explore the bootcamp ↓</a></div>
          </div>
          <div className="abc-visual">
            <img src="/assets/images/ai_i.png" alt="Friendly AI robot with glowing teal eyes" width="640" height="640" fetchPriority="high" />
            <div className="abc-visual-caption"><span>AI learning made simple.</span><strong>Learn it. Build it. Use it.</strong></div>
            <div className="abc-seat-badge"><UsersRound aria-hidden="true" /><span>Only <strong>25 seats</strong><br />per batch</span></div>
          </div>
        </section>

        <section className="abc-facts" aria-label="Bootcamp at a glance">
          <div><Globe2 aria-hidden="true" /><strong>100% Online</strong><span className="abc-anywhere">Learn from Anywhere</span></div>
          <div><UsersRound aria-hidden="true" /><strong>Age 15+</strong><span>Everyone is welcome</span></div>
          <div><Laptop aria-hidden="true" /><strong>Live Sessions</strong><span>Practical, hands-on learning</span></div>
          <div><Award aria-hidden="true" /><strong>Digital Certificate</strong><span>Certificate of Completion</span></div>
        </section>

        <section className="abc-section abc-audience" aria-labelledby="abc-audience-title"><span className="abc-kicker">Built for curious minds</span><h2 id="abc-audience-title">AI is for everyone. <span>That includes you.</span></h2><p>Age 15+ · No coding or technical background required.</p><ul>{["Students", "Professionals", "Entrepreneurs", "Homemakers"].map(label => <li key={label}><Check aria-hidden="true" />{label}</li>)}</ul></section>

        <section className="abc-section abc-tools" aria-labelledby="abc-tools-title"><div className="abc-section-heading"><span className="abc-kicker">Your AI toolkit</span><h2 id="abc-tools-title">8+ Tools. <span>So many possibilities.</span></h2><p>Explore tools for research, creativity, applications, data and automation.</p></div><ul>{tools.map(tool => <li key={tool}>{tool}</li>)}</ul></section>

        <section className="abc-section abc-learning" aria-labelledby="abc-learning-title">
          <div className="abc-section-heading"><span className="abc-kicker">Key takeaways</span><h2 id="abc-learning-title">Useful skills. <span>Every single day.</span></h2><p>Learn useful AI tools and techniques, work on real-world projects, and turn everyday tasks into opportunities.</p></div>
          <div className="abc-learning-grid">{takeaways.map(({ icon: Icon, title, text }, index) => <article className="abc-learning-card" key={title}><div className="abc-card-top"><Icon aria-hidden="true" /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className="abc-section abc-results" aria-labelledby="abc-results-title">
          <div><span className="abc-kicker">What you will be able to do</span><h2 id="abc-results-title">Don’t just hear about AI.<br /><span>Learn to USE it!</span></h2><div className="abc-certificate"><Award aria-hidden="true" /><div><strong>Digital Certificate of Completion</strong><p>Celebrate your new skills after completing the bootcamp.</p></div></div></div>
          <ol className="abc-outcomes">{outcomes.map((outcome, index) => <li key={outcome}><span>0{index + 1}</span><p>{outcome}</p></li>)}</ol>
        </section>

        <section className="abc-section abc-schedule" id="bootcamp-details" aria-labelledby="abc-schedule-title">
          <div className="abc-section-heading"><span className="abc-kicker">Your week of AI starts here</span><h2 id="abc-schedule-title">One bootcamp. <span>Two batch options.</span></h2><p>1–7 November 2026 · 7 days of live online learning. Choose the batch that fits your day.</p></div>
          <div className="abc-batch-grid">
            <article className="abc-batch"><div><Clock3 aria-hidden="true" /><h3>Morning batch</h3></div><strong>8:00–9:30 AM <small>IST</small></strong><p>Only 25 seats per batch</p></article>
            <article className="abc-batch"><div><Clock3 aria-hidden="true" /><h3>Evening batch</h3></div><strong>8:00–9:30 PM <small>IST</small></strong><p>Only 25 seats per batch</p></article>
          </div>
          <p className="abc-timezone">All session times are in India Standard Time (UTC+5:30).</p>
        </section>

        <section className="abc-booking" aria-labelledby="abc-booking-title">
          <div className="abc-booking-copy"><span className="abc-kicker">Your next skill starts here</span><h2 id="abc-booking-title">Future Ready Skills.<br /><span>Real World Impact.</span></h2><p>7 days. Live online. Learn from Anywhere.</p><p className="abc-limited"><UsersRound aria-hidden="true" /> Only 25 seats per batch</p></div>
          <div className="abc-price-card"><span className="abc-offer">{earlyBird ? "Early Bird Offer" : "Bootcamp Registration"}</span><div className="abc-price">₹{earlyBird ? "1,499" : "1,999"}<span>ONLY!</span></div>{earlyBird ? <><p className="abc-saving">Save ₹500 on the regular price of ₹1,999</p><p className="abc-deadline">Valid till <time dateTime="2026-10-28">28 October 2026</time> (IST).<br />₹1,999 from 29 October 2026.</p></> : <p className="abc-deadline">Early bird offer of ₹1,499 ended on 28 October 2026.<br />Regular price: ₹1,999.</p>}<a className="abc-button" href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">Register Today <ArrowRight aria-hidden="true" /></a><p className="abc-checkout-note">Continue to Razorpay to register</p></div>
        </section>
        <div className="abc-signoff">MILES – Mandke Institute for Learning Employable Skills <span>× CODEBYTE AI</span></div>
      </div>
    </main>
  );
}
