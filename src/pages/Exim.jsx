const applicantGroups = [
  "Commerce students",
  "Budding Entrepreneurs",
  "Exporters & Importers",
  "Graduates & Working Professionals",
  "Anyone interested in International Trade",
];

const snapshot = {
  courseName: "A to Z of EXIM Trade Procedures",
  duration: "40 Hours",
  learning:
    "Export & Import Process, EXIM Documentation, Customs Clearance, Port Operations, Shipping & Logistics, Incoterms, Terms of Delivery, International Payments, DGFT & Regulatory Compliance, and Essential EXIM Terminology.",
};

const learningTopics = [
  "Export & Import Fundamentals",
  "Complete Export Process",
  "Complete Import Process",
  "Customs Procedures",
  "Export & Import Documentation",
  "Shipping Documents",
  "Port Operations",
  "INCOTERMS",
  "Terms of Delivery",
  "International Payment Methods",
  "EXIM Terminology",
  "Current Industry Practices",
];

const learningOutcomes = [
  "Understand the complete EXIM ecosystem",
  "Prepare and verify export/import documentation",
  "Handle customs and logistics procedures",
  "Understand shipping and payment systems",
  "Develop practical job-ready skills",
];

const careerOpportunities = [
  "Export Executive",
  "Import Executive",
  "Documentation Executive",
  "International Trade Coordinator",
  "Logistics & Supply Chain Executive",
  "Customs Clearance Assistant",
  "Freight Forwarding Executive",
  "Trade Compliance Executive",
  "EXIM Operations Assistant",
  "Entrepreneur / Exporter / Importer",
];

const milesReasons = [
  "Industry expert-led practical learning",
  "Real documentation & customs exposure",
  "Job-ready training",
  "Roadmap to start your own EXIM business",
  "Certificate from MILES",
];

const heroImage = "/assets/images/exim.png";

function Exim() {
  return (
    <main className="exim-page">
      <style>{`
        .exim-page {
          min-height: 100vh;
          background: #f7fafc;
          color: #102033;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .exim-shell {
          width: min(1140px, calc(100% - 32px));
          margin: 0 auto;
        }

        .exim-hero {
          position: relative;
          overflow: hidden;
          padding: clamp(58px, 8vw, 96px) 0 clamp(46px, 7vw, 78px);
          background:
            linear-gradient(90deg, rgba(8, 22, 39, 0.96) 0%, rgba(8, 22, 39, 0.88) 48%, rgba(8, 22, 39, 0.58) 100%),
            url("${heroImage}") center right / cover no-repeat,
            linear-gradient(135deg, #0f172a, #075985);
          color: #fff;
        }

        .exim-hero-content {
          max-width: 830px;
        }

        .exim-institute {
          margin: 0;
          color: #bae6fd;
          font-size: clamp(0.8rem, 1.7vw, 0.95rem);
          font-weight: 900;
          letter-spacing: 0.1em;
          line-height: 1.55;
          text-transform: uppercase;
        }

        .exim-hero h1 {
          margin: 24px 0 0;
          max-width: 820px;
          font-size: clamp(2.15rem, 6.5vw, 5.2rem);
          line-height: 1;
          letter-spacing: 0;
        }

        .exim-hero h2 {
          margin: 18px 0 0;
          color: #fef3c7;
          font-size: clamp(1.12rem, 3vw, 2rem);
          line-height: 1.25;
        }

        .exim-main {
          padding: clamp(34px, 6vw, 72px) 0;
        }

        .exim-section {
          margin-top: clamp(30px, 5vw, 58px);
        }

        .exim-section:first-child {
          margin-top: 0;
        }

        .exim-section-head {
          margin-bottom: 22px;
        }

        .exim-section-title {
          margin: 0;
          color: #0f172a;
          font-size: clamp(1.75rem, 4vw, 3rem);
          line-height: 1.12;
          letter-spacing: 0;
        }

        .exim-card {
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
        }

        .exim-copy-card {
          padding: clamp(20px, 4vw, 30px);
        }

        .exim-copy-card p {
          margin: 0;
          color: #334155;
          font-size: clamp(1rem, 2.1vw, 1.08rem);
          line-height: 1.75;
        }

        .exim-list {
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .exim-list li {
          display: grid;
          grid-template-columns: 28px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          color: #334155;
          font-size: clamp(0.98rem, 2.1vw, 1.05rem);
          line-height: 1.6;
        }

        .exim-dot {
          display: grid;
          width: 28px;
          height: 28px;
          place-items: center;
          border-radius: 50%;
          background: linear-gradient(135deg, #0369a1, #0f766e);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 900;
        }

        .exim-table-card {
          overflow: hidden;
        }

        .exim-table-scroll {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .exim-table {
          width: 100%;
          min-width: 760px;
          border-collapse: collapse;
          background: #fff;
        }

        .exim-table th,
        .exim-table td {
          border-bottom: 1px solid #e2e8f0;
          padding: clamp(14px, 2vw, 20px);
          text-align: left;
          vertical-align: top;
          line-height: 1.6;
        }

        .exim-table th {
          background: #eaf7fb;
          color: #0f172a;
          font-size: 0.82rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .exim-table td {
          color: #334155;
          font-size: 0.98rem;
        }

        .exim-table tbody tr:last-child td {
          border-bottom: 0;
        }

        .exim-grid {
          display: grid;
          gap: 20px;
        }

        .exim-two-col {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: start;
        }

        .exim-topic-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .exim-career-grid {
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }

        .exim-mini-card {
          display: grid;
          min-height: 96px;
          align-items: center;
          padding: 18px;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 14px 36px rgba(15, 23, 42, 0.06);
        }

        .exim-mini-card span {
          color: #1e293b;
          font-weight: 800;
          line-height: 1.45;
        }

        .exim-panel {
          padding: clamp(20px, 4vw, 28px);
        }

        .exim-panel h3 {
          margin: 0 0 18px;
          color: #0f172a;
          font-size: clamp(1.25rem, 3vw, 1.7rem);
          line-height: 1.2;
        }

        .exim-career-section {
          margin-top: clamp(34px, 6vw, 72px);
          padding: clamp(34px, 6vw, 64px) 0;
          background: linear-gradient(135deg, #061826, #0f172a 58%, #075985);
          color: #fff;
        }

        .exim-career-section .exim-section-title {
          color: #fff;
        }

        .exim-career-card {
          display: grid;
          min-height: 108px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.08);
          padding: 20px;
          text-align: center;
        }

        .exim-career-card span {
          color: #e0f2fe;
          font-size: 0.98rem;
          font-weight: 800;
          line-height: 1.45;
        }

        @media (max-width: 1080px) {
          .exim-topic-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .exim-career-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 820px) {
          .exim-two-col {
            grid-template-columns: 1fr;
          }

          .exim-topic-grid,
          .exim-career-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .exim-shell {
            width: min(100% - 24px, 1140px);
          }

          .exim-hero {
            background:
              linear-gradient(180deg, rgba(8, 22, 39, 0.97) 0%, rgba(8, 22, 39, 0.91) 64%, rgba(8, 22, 39, 0.74) 100%),
              url("${heroImage}") center / cover no-repeat,
              linear-gradient(135deg, #0f172a, #075985);
          }

          .exim-topic-grid,
          .exim-career-grid {
            grid-template-columns: 1fr;
          }

          .exim-table {
            min-width: 0;
          }

          .exim-table,
          .exim-table thead,
          .exim-table tbody,
          .exim-table tr,
          .exim-table th,
          .exim-table td {
            display: block;
            width: 100%;
          }

          .exim-table thead {
            display: none;
          }

          .exim-table tr {
            border-bottom: 1px solid #dbe5ea;
          }

          .exim-table tr:last-child {
            border-bottom: 0;
          }

          .exim-table td {
            border-bottom: 0;
          }

          .exim-table td::before {
            content: attr(data-label);
            display: block;
            margin-bottom: 7px;
            color: #0369a1;
            font-size: 0.76rem;
            font-weight: 900;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
        }
      `}</style>

      <section className="exim-hero">
        <div className="exim-shell">
          <div className="exim-hero-content">
            <p className="exim-institute">
              Mandke Institute for Learning Employable Skills (MILES), Pune
            </p>
            <h1>A TO Z OF EXIM TRADE PROCEDURES</h1>
            <h2>Master Global Trade. Build a Career Without Borders.</h2>
          </div>
        </div>
      </section>

      <div className="exim-main">
        <section className="exim-section">
          <div className="exim-shell">
            <div className="exim-section-head">
              <h2 className="exim-section-title">About the Program</h2>
            </div>
            <article className="exim-card exim-copy-card">
              <p>
                This comprehensive program provides practical knowledge of the complete Export-Import
                (EXIM) process. Participants learn export and import procedures, customs processes,
                documentation, shipping, port operations, INCOTERMS, payment methods and current
                industry practices. The course is designed to make learners job-ready and confident to
                start their own EXIM business.
              </p>
            </article>
          </div>
        </section>

        <section className="exim-section">
          <div className="exim-shell exim-grid exim-two-col">
            <article className="exim-card exim-panel">
              <h3>Who Can Apply?</h3>
              <ul className="exim-list">
                {applicantGroups.map((group) => (
                  <li key={group}>
                    <span className="exim-dot">EX</span>
                    <span>{group}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="exim-card exim-panel">
              <h3>Learning Outcomes</h3>
              <ul className="exim-list">
                {learningOutcomes.map((outcome) => (
                  <li key={outcome}>
                    <span className="exim-dot">LO</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="exim-section">
          <div className="exim-shell">
            <div className="exim-section-head">
              <h2 className="exim-section-title">Program Snapshot</h2>
            </div>
            <div className="exim-card exim-table-card">
              <div className="exim-table-scroll">
                <table className="exim-table">
                  <thead>
                    <tr>
                      <th>Course Name</th>
                      <th>Duration</th>
                      <th>What You'll Learn</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Course Name">{snapshot.courseName}</td>
                      <td data-label="Duration">{snapshot.duration}</td>
                      <td data-label="What You'll Learn">{snapshot.learning}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="exim-section">
          <div className="exim-shell">
            <div className="exim-section-head">
              <h2 className="exim-section-title">What You Will Learn</h2>
            </div>
            <div className="exim-grid exim-topic-grid">
              {learningTopics.map((topic) => (
                <article key={topic} className="exim-mini-card">
                  <span>{topic}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="exim-section">
          <div className="exim-shell">
            <div className="exim-section-head">
              <h2 className="exim-section-title">Why Choose MILES?</h2>
            </div>
            <div className="exim-card exim-panel">
              <ul className="exim-list">
                {milesReasons.map((reason) => (
                  <li key={reason}>
                    <span className="exim-dot">M</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section className="exim-career-section">
        <div className="exim-shell">
          <div className="exim-section-head">
            <h2 className="exim-section-title">Career Opportunities</h2>
          </div>
          <div className="exim-grid exim-career-grid">
            {careerOpportunities.map((career) => (
              <article key={career} className="exim-career-card">
                <span>{career}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Exim;
