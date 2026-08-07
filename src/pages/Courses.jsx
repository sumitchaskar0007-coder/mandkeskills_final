import { Link } from "react-router-dom";

const courses = [
  { id: 1, title: "EXIM Trade", path: "/courses/exim" },
  { id: 2, title: "Insurance", path: "/courses/insurance" },
  { id: 3, title: "Tally Prime", path: "/courses/tally" },
  { id: 4, title: "Tally Certification", path: "/courses/tally-c" },
  { id: 5, title: "Cyber Security", path: "/courses/ethical-hacking" },
  { id: 6, title: "Data Analytics", path: "/courses/data-analytics" },
  { id: 7, title: "No-Code AI", path: "/courses/genai-ml" },
  { id: 8, title: "Personality Development", path: "/courses/personality" },
];

export default function Courses() {
  return (
    <div className="courses-page">
      <div className="container">
        <h1>Courses</h1>
        <p className="subtitle">Industry-focused certification programs.</p>

        <div className="courses-grid">
          {courses.map((course) => (
            <Link key={course.id} to={course.path} className="course-card">
              <h3>{course.title}</h3>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .courses-page {
          min-height: 100vh;
          padding: 34px 14px;
          background: #f8fafc;
        }

        .container {
          max-width: 960px;
          margin: auto;
        }

        h1 {
          margin: 0 0 8px;
          text-align: center;
          color: #0f172a;
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          line-height: 1.15;
        }

        .subtitle {
          max-width: 520px;
          margin: 0 auto 26px;
          text-align: center;
          color: #64748b;
          font-size: 0.95rem;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .course-card {
          display: flex;
          align-items: center;
          min-height: 64px;
          padding: 14px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          background: #ffffff;
          text-decoration: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }

        .course-card:hover {
          transform: translateY(-2px);
          border-color: #38bdf8;
          box-shadow: 0 12px 24px rgba(15, 23, 42, 0.07);
        }

        .course-card h3 {
          margin: 0;
          color: #0f172a;
          font-size: 0.96rem;
          line-height: 1.3;
        }

        @media (min-width: 720px) {
          .courses-page {
            padding: 46px 20px;
          }

          .courses-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
}
