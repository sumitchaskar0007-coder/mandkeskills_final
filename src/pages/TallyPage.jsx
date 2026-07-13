const applicantGroups = [
  "12th Commerce / Junior College Students",
  "B.Com / M.Com Students",
  "CA Foundation / CA Inter Students",
  "Graduates & Working Professionals",
  "Aspiring Accountants, Finance & GST Professionals",
];

const levels = [
  {
    title: "Essentials Level 1",
    duration: "35 Hours",
    bestFor: "Beginners with little or no accounting knowledge",
    learning: "Accounting Fundamentals & TallyPrime Basics",
  },
  {
    title: "Essentials Level 2",
    duration: "35 Hours",
    bestFor: "Students who have completed Level 1",
    learning: "Business Accounting, Inventory & MIS",
  },
  {
    title: "Essentials Level 3",
    duration: "36 Hours",
    bestFor: "Students who have completed Level 2",
    learning: "Advanced GST, Taxation & Business Management",
  },
  {
    title: "Expert Tally (Internship & Placement)",
    duration: "1-3 Months Internship + Advance Excel Placement Support",
    bestFor:
      "Students who have completed all three levels and want real industry exposure",
    learning: "Live Accounting, CA Firm Exposure & Job Readiness",
  },
];

const tableRows = [
  ["Level", levels[0].title, levels[1].title, levels[2].title, levels[3].title],
  ["Duration", levels[0].duration, levels[1].duration, levels[2].duration, levels[3].duration],
  ["Best For", levels[0].bestFor, levels[1].bestFor, levels[2].bestFor, levels[3].bestFor],
  ["What You Learn", levels[0].learning, levels[1].learning, levels[2].learning, levels[3].learning],
];

const standoutPoints = [
  "Industry-oriented curriculum aligned with NSDC standards.",
  "Hands-on practice using TallyPrime software.",
  "Real business accounting, GST and compliance exercises.",
  "Placement assistance with CA firms and SMEs.",
  "Resume building and interview preparation.",
];

const careerOpportunities = [
  "Junior Accountant",
  "Accounts Executive",
  "GST Executive",
  "Accounts Assistant",
  "Billing Executive",
];

const heroImage = "/assets/images/tally.png";

function TallyPage() {
  return (
    <main className="tally-page">
      <style>{`
        .tally-page {
          min-height: 100vh;
          background: #f7faf8;
          color: #122033;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .tally-shell {
          width: min(1140px, calc(100% - 32px));
          margin: 0 auto;
        }

        .tally-hero {
          position: relative;
          overflow: hidden;
          padding: clamp(58px, 8vw, 96px) 0 clamp(46px, 7vw, 78px);
          background:
            linear-gradient(90deg, rgba(6, 24, 38, 0.96) 0%, rgba(6, 24, 38, 0.88) 48%, rgba(6, 24, 38, 0.56) 100%),
            url("${heroImage}") center right / cover no-repeat,
            linear-gradient(135deg, #064e3b, #0f172a);
          color: #fff;
        }

        .tally-hero-content {
          max-width: 810px;
        }

        .tally-institute {
          margin: 0;
          color: #bbf7d0;
          font-size: clamp(0.8rem, 1.7vw, 0.95rem);
          font-weight: 900;
          letter-spacing: 0.1em;
          line-height: 1.55;
          text-transform: uppercase;
        }

        .tally-kicker {
          display: inline-flex;
          max-width: 100%;
          margin-top: 18px;
          border: 1px solid rgba(187, 247, 208, 0.38);
          border-radius: 999px;
          background: rgba(22, 163, 74, 0.18);
          padding: 9px 15px;
          color: #dcfce7;
          font-size: clamp(0.72rem, 1.8vw, 0.84rem);
          font-weight: 900;
          letter-spacing: 0.12em;
          line-height: 1.35;
          text-transform: uppercase;
        }

        .tally-hero h1 {
          margin: 24px 0 0;
          max-width: 840px;
          font-size: clamp(2.15rem, 6.6vw, 5.25rem);
          line-height: 1;
          letter-spacing: 0;
        }

        .tally-hero h2 {
          margin: 18px 0 0;
          color: #fef3c7;
          font-size: clamp(1.15rem, 3vw, 2rem);
          line-height: 1.25;
        }

        .tally-hero p {
          margin: 20px 0 0;
          max-width: 720px;
          color: #e8f3ec;
          font-size: clamp(1rem, 2.1vw, 1.16rem);
          line-height: 1.75;
        }

        .tally-main {
          padding: clamp(34px, 6vw, 72px) 0;
        }

        .tally-section {
          margin-top: clamp(30px, 5vw, 58px);
        }

        .tally-section:first-child {
          margin-top: 0;
        }

        .tally-section-head {
          margin-bottom: 22px;
        }

        .tally-section-title {
          margin: 0;
          color: #0f172a;
          font-size: clamp(1.75rem, 4vw, 3rem);
          line-height: 1.12;
          letter-spacing: 0;
        }

        .tally-card {
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
        }

        .tally-apply-card {
          padding: clamp(20px, 4vw, 30px);
        }

        .tally-list {
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .tally-list li {
          display: grid;
          grid-template-columns: 28px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          color: #334155;
          font-size: clamp(0.98rem, 2.1vw, 1.05rem);
          line-height: 1.6;
        }

        .tally-dot {
          display: grid;
          width: 28px;
          height: 28px;
          place-items: center;
          border-radius: 50%;
          background: linear-gradient(135deg, #15803d, #0f766e);
          color: #fff;
          font-size: 0.76rem;
          font-weight: 900;
        }

        .tally-table-card {
          overflow: hidden;
        }

        .tally-table-scroll {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .tally-table {
          width: 100%;
          min-width: 980px;
          border-collapse: collapse;
          background: #fff;
        }

        .tally-table th,
        .tally-table td {
          border-bottom: 1px solid #e2e8f0;
          padding: clamp(14px, 2vw, 19px);
          text-align: left;
          vertical-align: top;
          line-height: 1.55;
        }

        .tally-table tr:last-child th,
        .tally-table tr:last-child td {
          border-bottom: 0;
        }

        .tally-table th {
          width: 150px;
          background: #ecfdf3;
          color: #0f172a;
          font-size: 0.8rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .tally-table td {
          color: #334155;
          font-size: 0.96rem;
        }

        .tally-table tr:first-child td {
          color: #166534;
          font-size: 1.08rem;
          font-weight: 900;
        }

        .tally-grid {
          display: grid;
          gap: 20px;
        }

        .tally-standout-grid {
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }

        .tally-career-grid {
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }

        .tally-point-card {
          position: relative;
          overflow: hidden;
          min-height: 100%;
          padding: clamp(20px, 3vw, 26px);
        }

        .tally-point-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #15803d, #f59e0b);
        }

        .tally-number {
          display: grid;
          width: 42px;
          height: 42px;
          margin-bottom: 16px;
          place-items: center;
          border-radius: 14px;
          background: #ecfdf3;
          color: #166534;
          font-weight: 900;
        }

        .tally-point-card p {
          margin: 0;
          color: #334155;
          font-size: 0.98rem;
          line-height: 1.65;
        }

        .tally-career-section {
          margin-top: clamp(34px, 6vw, 72px);
          padding: clamp(34px, 6vw, 64px) 0;
          background: linear-gradient(135deg, #061826, #0f172a 58%, #064e3b);
          color: #fff;
        }

        .tally-career-section .tally-section-title {
          color: #fff;
        }

        .tally-career-card {
          display: grid;
          min-height: 110px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.08);
          padding: 22px;
          text-align: center;
        }

        .tally-career-card span {
          color: #dcfce7;
          font-size: 1rem;
          font-weight: 800;
          line-height: 1.45;
        }

        @media (max-width: 1080px) {
          .tally-standout-grid,
          .tally-career-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .tally-shell {
            width: min(100% - 24px, 1140px);
          }

          .tally-hero {
            background:
              linear-gradient(180deg, rgba(6, 24, 38, 0.97) 0%, rgba(6, 24, 38, 0.9) 64%, rgba(6, 24, 38, 0.74) 100%),
              url("${heroImage}") center / cover no-repeat,
              linear-gradient(135deg, #064e3b, #0f172a);
          }

          .tally-kicker {
            border-radius: 14px;
          }

          .tally-standout-grid,
          .tally-career-grid {
            grid-template-columns: 1fr;
          }

          .tally-table {
            min-width: 0;
          }

          .tally-table,
          .tally-table tbody,
          .tally-table tr,
          .tally-table th,
          .tally-table td {
            display: block;
            width: 100%;
          }

          .tally-table tr {
            border-bottom: 1px solid #dbe5ea;
          }

          .tally-table tr:last-child {
            border-bottom: 0;
          }

          .tally-table th,
          .tally-table td {
            border-bottom: 0;
          }

          .tally-table th {
            padding-bottom: 8px;
          }

          .tally-table td {
            padding-top: 8px;
          }

          .tally-table td + td {
            border-top: 1px dashed #cbd5e1;
          }
        }
      `}</style>

      <section className="tally-hero">
        <div className="tally-shell">
          <div className="tally-hero-content">
            <p className="tally-institute">
              MANDKE INSTITUTE FOR LEARNING EMPLOYABLE SKILLS (MILES), Pune
            </p>
            <span className="tally-kicker">CAREER ACCELERATOR PROGRAM</span>
            <h1>TALLY PRIME 7.0 - ACCOUNTING & GST PROFESSIONAL</h1>
            <h2>Launch Your Career in Finance & Accounting</h2>
            <p>
              Designed for students who want immediate employability through practical accounting,
              GST and business finance skills.
            </p>
          </div>
        </div>
      </section>

      <div className="tally-main">
        <section className="tally-section">
          <div className="tally-shell">
            <div className="tally-section-head">
              <h2 className="tally-section-title">Who Can Apply?</h2>
            </div>
            <div className="tally-card tally-apply-card">
              <ul className="tally-list">
                {applicantGroups.map((group) => (
                  <li key={group}>
                    <span className="tally-dot">T</span>
                    <span>{group}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="tally-section">
          <div className="tally-shell">
            <div className="tally-card tally-table-card">
              <div className="tally-table-scroll">
                <table className="tally-table">
                  <tbody>
                    {tableRows.map(([label, levelOne, levelTwo, levelThree, expert]) => (
                      <tr key={label}>
                        <th>{label}</th>
                        <td>{levelOne}</td>
                        <td>{levelTwo}</td>
                        <td>{levelThree}</td>
                        <td>{expert}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="tally-section">
          <div className="tally-shell">
            <div className="tally-section-head">
              <h2 className="tally-section-title">Why This Program Stands Out</h2>
            </div>
            <div className="tally-grid tally-standout-grid">
              {standoutPoints.map((point, index) => (
                <article key={point} className="tally-card tally-point-card">
                  <span className="tally-number">{index + 1}</span>
                  <p>{point}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="tally-career-section">
        <div className="tally-shell">
          <div className="tally-section-head">
            <h2 className="tally-section-title">Career Opportunities</h2>
          </div>
          <div className="tally-grid tally-career-grid">
            {careerOpportunities.map((career) => (
              <article key={career} className="tally-career-card">
                <span>{career}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default TallyPage;
