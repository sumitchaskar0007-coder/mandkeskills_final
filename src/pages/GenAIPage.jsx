const applicantGroups = [
  "College Students from any academic stream",
  "Graduates, Postgraduates and Working Professionals",
  "Beginners (No Coding Required)",
  "Students interested in AI, Data Analytics and Automation",
];

const programs = [
  {
    courseName: "AI Explorer",
    program: "Foundation Bootcamp",
    duration: "7 Days",
    bestFor: "Beginners, students curious about AI",
    whatYouLearn:
      "AI Foundations, Data Analytics, Machine Learning, LLMs, Prompt Engineering, AI Productivity, AI Automation, Career Roadmap",
    learningStyle: "Hands-on exercises, demos, case studies and guided activities",
  },
  {
    courseName: "AI Professional",
    program: "3-Month No-Code AI Program",
    duration: "3 Months (12 Weeks)",
    bestFor: "Students seeking AI projects, automation and career opportunities",
    whatYouLearn:
      "AI Foundations, Excel for AI, Power BI, Machine Learning, Deep Learning, GenAI, Prompt Engineering, AI Agents, RAG, MCP, n8n, Capstone Project",
    learningStyle:
      "Projects, dashboards, no-code AI models, chatbot development, capstone and career preparation",
  },
];

const programRows = [
  ["Course Name", programs[0].courseName, programs[1].courseName],
  ["Program", programs[0].program, programs[1].program],
  ["Duration", programs[0].duration, programs[1].duration],
  ["Best For", programs[0].bestFor, programs[1].bestFor],
  ["What You Learn", programs[0].whatYouLearn, programs[1].whatYouLearn],
  ["Learning Style", programs[0].learningStyle, programs[1].learningStyle],
];

const enrollmentRoutes = [
  {
    title: "Route 1: Step-by-Step Pathway",
    description: "Join the 7-Day Bootcamp and progress to the 3-Month Program.",
  },
  {
    title: "Route 2: Direct Enrollment",
    description:
      "Students may directly enroll in the 3-Month No-Code AI Program based on interest and readiness.",
  },
];

const highlights = [
  {
    title: "Hands-on AI Learning",
    description: "Build AI projects using no-code tools and real-world business use cases.",
  },
  {
    title: "Industry-Relevant Tools",
    description: "Learn ChatGPT, Gemini, Claude, Perplexity, Power BI and n8n.",
  },
  {
    title: "Prompt Engineering Mastery",
    description: "Use structured prompting techniques for productivity and innovation.",
  },
  {
    title: "Automation & Agentic AI",
    description: "Design AI agents, workflows, RAG and MCP-enabled solutions.",
  },
  {
    title: "Career-Ready Support",
    description:
      "Resume enhancement, LinkedIn optimization, mock interviews and internship support.",
  },
  {
    title: "Capstone Project",
    description:
      "Develop a real-world AI solution and showcase it through a professional presentation.",
  },
];

const careerTracks = [
  {
    title: "AI & Automation",
    roles: ["AI Assistant", "AI Executive", "No-Code Automation Analyst"],
  },
  {
    title: "Data & Analytics",
    roles: ["Data Analyst", "Business Intelligence Analyst", "AI Operations Intern"],
  },
  {
    title: "GenAI & Productivity",
    roles: ["Prompt Engineer", "GenAI Workflow Designer", "AI Automation Associate"],
  },
];

const heroImage = "/assets/images/genai.png";

function GenAIPage() {
  return (
    <main className="genai-page">
      <style>{`
        .genai-page {
          min-height: 100vh;
          background: #f6fafb;
          color: #102033;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .genai-shell {
          width: min(1140px, calc(100% - 32px));
          margin: 0 auto;
        }

        .genai-hero {
          position: relative;
          overflow: hidden;
          padding: clamp(56px, 8vw, 92px) 0 clamp(44px, 6vw, 72px);
          background:
            linear-gradient(90deg, rgba(9, 16, 35, 0.96) 0%, rgba(9, 16, 35, 0.9) 43%, rgba(9, 16, 35, 0.58) 100%),
            url("${heroImage}") center right / cover no-repeat,
            linear-gradient(135deg, #0f172a, #155e75);
          color: #fff;
        }

        .genai-hero-content {
          max-width: 780px;
        }

        .genai-kicker {
          display: inline-flex;
          max-width: 100%;
          border: 1px solid rgba(125, 211, 252, 0.36);
          border-radius: 999px;
          background: rgba(14, 165, 233, 0.16);
          padding: 9px 14px;
          color: #bbf7d0;
          font-size: clamp(0.72rem, 1.8vw, 0.82rem);
          font-weight: 800;
          letter-spacing: 0.12em;
          line-height: 1.35;
          text-transform: uppercase;
        }

        .genai-hero h1 {
          margin: 24px 0 0;
          max-width: 760px;
          font-size: clamp(2.25rem, 7vw, 5.6rem);
          line-height: 1;
          letter-spacing: 0;
        }

        .genai-hero p {
          margin: 22px 0 0;
          max-width: 720px;
          color: #e5eef7;
          font-size: clamp(1rem, 2.2vw, 1.22rem);
          line-height: 1.75;
        }

        .genai-main {
          padding: clamp(34px, 6vw, 72px) 0;
        }

        .genai-section {
          margin-top: clamp(28px, 5vw, 58px);
        }

        .genai-section:first-child {
          margin-top: 0;
        }

        .genai-section-head {
          margin-bottom: 22px;
        }

        .genai-section-label {
          margin: 0 0 8px;
          color: #0f766e;
          font-size: 0.8rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .genai-section-title {
          margin: 0;
          color: #0f172a;
          font-size: clamp(1.75rem, 4vw, 3rem);
          line-height: 1.12;
          letter-spacing: 0;
        }

        .genai-card {
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
        }

        .genai-apply-card {
          padding: clamp(20px, 4vw, 30px);
        }

        .genai-list {
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .genai-list li {
          display: grid;
          grid-template-columns: 26px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          color: #334155;
          font-size: clamp(0.98rem, 2.2vw, 1.05rem);
          line-height: 1.6;
        }

        .genai-dot {
          display: grid;
          width: 26px;
          height: 26px;
          place-items: center;
          border-radius: 50%;
          background: linear-gradient(135deg, #0f766e, #2563eb);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 900;
        }

        .genai-table-card {
          overflow: hidden;
        }

        .genai-table-scroll {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .genai-table {
          width: 100%;
          min-width: 820px;
          border-collapse: collapse;
          background: #fff;
        }

        .genai-table th,
        .genai-table td {
          border-bottom: 1px solid #e2e8f0;
          padding: clamp(14px, 2vw, 20px);
          text-align: left;
          vertical-align: top;
          line-height: 1.6;
        }

        .genai-table tr:last-child th,
        .genai-table tr:last-child td {
          border-bottom: 0;
        }

        .genai-table th {
          width: 170px;
          background: #eef7f8;
          color: #0f172a;
          font-size: 0.82rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .genai-table td {
          color: #334155;
          font-size: 0.98rem;
        }

        .genai-table tr:first-child td {
          color: #0f766e;
          font-size: 1.18rem;
          font-weight: 900;
        }

        .genai-grid {
          display: grid;
          gap: 20px;
        }

        .genai-route-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .genai-highlight-grid,
        .genai-career-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .genai-info-card {
          position: relative;
          overflow: hidden;
          padding: clamp(20px, 4vw, 28px);
        }

        .genai-info-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #0f766e, #2563eb);
        }

        .genai-info-card h3 {
          margin: 0;
          color: #0f172a;
          font-size: clamp(1.1rem, 2.4vw, 1.28rem);
          line-height: 1.35;
        }

        .genai-info-card p {
          margin: 12px 0 0;
          color: #475569;
          font-size: 0.98rem;
          line-height: 1.68;
        }

        .genai-career-section {
          margin-top: clamp(34px, 6vw, 72px);
          padding: clamp(34px, 6vw, 64px) 0;
          background: linear-gradient(135deg, #071827, #0f172a 58%, #083344);
          color: #fff;
        }

        .genai-career-section .genai-section-label {
          color: #67e8f9;
        }

        .genai-career-section .genai-section-title {
          color: #fff;
        }

        .genai-career-card {
          padding: clamp(20px, 4vw, 28px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.07);
        }

        .genai-career-card h3 {
          margin: 0;
          color: #a7f3d0;
          font-size: clamp(1.12rem, 2.6vw, 1.35rem);
        }

        .genai-career-card ul {
          display: grid;
          gap: 10px;
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
        }

        .genai-career-card li {
          color: #e2e8f0;
          line-height: 1.5;
        }

        @media (max-width: 960px) {
          .genai-highlight-grid,
          .genai-career-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 720px) {
          .genai-shell {
            width: min(100% - 24px, 1140px);
          }

          .genai-hero {
            background:
              linear-gradient(180deg, rgba(9, 16, 35, 0.96) 0%, rgba(9, 16, 35, 0.9) 62%, rgba(9, 16, 35, 0.72) 100%),
              url("${heroImage}") center / cover no-repeat,
              linear-gradient(135deg, #0f172a, #155e75);
          }

          .genai-kicker {
            border-radius: 14px;
          }

          .genai-route-grid,
          .genai-highlight-grid,
          .genai-career-grid {
            grid-template-columns: 1fr;
          }

          .genai-table {
            min-width: 0;
          }

          .genai-table,
          .genai-table tbody,
          .genai-table tr,
          .genai-table th,
          .genai-table td {
            display: block;
            width: 100%;
          }

          .genai-table tr {
            border-bottom: 1px solid #dbe5ea;
          }

          .genai-table tr:last-child {
            border-bottom: 0;
          }

          .genai-table th,
          .genai-table td {
            border-bottom: 0;
          }

          .genai-table th {
            padding-bottom: 8px;
          }

          .genai-table td {
            padding-top: 6px;
          }

          .genai-table td + td {
            border-top: 1px dashed #cbd5e1;
          }
        }
      `}</style>

      <section className="genai-hero">
        <div className="genai-shell">
          <div className="genai-hero-content">
            <span className="genai-kicker">7-Day Bootcamp | 3-Month No-Code AI Program</span>
            <h1>MILES &ndash; AI CAREER ACCELERATOR PROGRAM</h1>
            <p>
              Launch your AI career without coding through practical exposure to AI tools, data
              analytics, machine learning, prompt engineering, automation and AI-powered career
              readiness.
            </p>
          </div>
        </div>
      </section>

      <div className="genai-main">
        <section className="genai-section">
          <div className="genai-shell">
            <div className="genai-section-head">
              <h2 className="genai-section-title">Who Can Apply?</h2>
            </div>
            <div className="genai-card genai-apply-card">
              <ul className="genai-list">
                {applicantGroups.map((group) => (
                  <li key={group}>
                    <span className="genai-dot">AI</span>
                    <span>{group}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="genai-section">
          <div className="genai-shell">
            <div className="genai-section-head">
              <h2 className="genai-section-title">Happy to lead your Learning Path&hellip;</h2>
            </div>
            <div className="genai-card genai-table-card">
              <div className="genai-table-scroll">
                <table className="genai-table">
                  <tbody>
                    {programRows.map(([label, explorer, professional]) => (
                      <tr key={label}>
                        <th>{label}</th>
                        <td>{explorer}</td>
                        <td>{professional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="genai-section">
          <div className="genai-shell">
            <div className="genai-section-head">
              <h2 className="genai-section-title">Two Enrollment Paths</h2>
            </div>
            <div className="genai-grid genai-route-grid">
              {enrollmentRoutes.map((route) => (
                <article key={route.title} className="genai-card genai-info-card">
                  <h3>{route.title}</h3>
                  <p>{route.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="genai-section">
          <div className="genai-shell">
            <div className="genai-section-head">
              <h2 className="genai-section-title">WHY THIS PROGRAM STANDS OUT</h2>
            </div>
            <div className="genai-grid genai-highlight-grid">
              {highlights.map((item) => (
                <article key={item.title} className="genai-card genai-info-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="genai-career-section">
        <div className="genai-shell">
          <div className="genai-section-head">
            <h2 className="genai-section-title">Career Direction &ndash; Academics to AI Professionals</h2>
          </div>
          <div className="genai-grid genai-career-grid">
            {careerTracks.map((track) => (
              <article key={track.title} className="genai-career-card">
                <h3>{track.title}</h3>
                <ul>
                  {track.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default GenAIPage;
