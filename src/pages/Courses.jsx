import React from "react";
import { Link } from "react-router-dom";

const courses = [
{
id: 1,
title: "A to Z of EXIM Trade",
icon: "🌐",
category: "Business",
description: "Master import-export business, documentation, logistics, and global trade operations.",
path: "/courses/exim",
},
{
id: 2,
title: "Insurance Essentials",
icon: "🛡️",
category: "Finance",
description: "Learn insurance fundamentals, policies, claims management, and risk assessment.",
path: "/courses/insurance",
},
{
id: 3,
title: "Tally Prime 7.0",
icon: "📊",
category: "Accounting",
description: "Learn accounting, GST, payroll, inventory management, and financial reporting.",
path: "/courses/tally",
},
{
id: 4,
title: "Tally Comprehensive (All 3 Levels)",
icon: "📈",
category: "Accounting",
description: "Complete beginner-to-advanced Tally certification with practical projects.",
path: "/courses/tally-c",
},
{
id: 5,
title: "Certified Ethical Hacking",
icon: "🔐",
category: "Cyber Security",
description: "Learn penetration testing, vulnerability assessment, and ethical hacking.",
path: "/courses/ethical-hacking",
},
{
id: 6,
title: "AI & Data Science Excellence",
icon: "🤖",
category: "Technology",
description: "Master AI, machine learning, Python, analytics, and data science tools.",
path: "/courses/ai-data-science",
},
{
id: 7,
title: "GenAI & ML — No-Code",
icon: "✨",
category: "AI / ML",
description: "Build AI solutions without coding using modern no-code AI platforms.",
path: "/courses/genai-ml",
},
{
id: 8,
title: "Grooming for Personality Development",
icon: "🌟",
category: "Soft Skills",
description: "Improve communication, confidence, leadership, and interview skills.",
path: "/courses/personality",
},
];

export default function Courses() {
return ( <div className="courses-page"> <div className="container"> <h1>Our Courses</h1> <p className="subtitle">
Explore industry-focused certification programs designed to build
your career. </p>


    <div className="courses-grid">
      {courses.map((course) => (
        <Link
          key={course.id}
          to={course.path}
          className="course-card"
        >
          <div className="course-icon">{course.icon}</div>

          <span className="course-category">
            {course.category}
          </span>

          <h3>{course.title}</h3>

          <p>{course.description}</p>

          <button>View Course →</button>
        </Link>
      ))}
    </div>
  </div>

  <style>{`
    .courses-page{
      padding:80px 20px;
      background:#f8fafc;
      min-height:100vh;
    }

    .container{
      max-width:1300px;
      margin:auto;
    }

    h1{
      text-align:center;
      font-size:3rem;
      color:#0f172a;
      margin-bottom:15px;
    }

    .subtitle{
      text-align:center;
      max-width:700px;
      margin:0 auto 60px;
      color:#64748b;
      font-size:1.05rem;
    }

    .courses-grid{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
      gap:25px;
    }

    .course-card{
      background:white;
      border-radius:20px;
      padding:28px;
      text-decoration:none;
      border:1px solid #e2e8f0;
      transition:.3s;
      display:flex;
      flex-direction:column;
    }

    .course-card:hover{
      transform:translateY(-8px);
      box-shadow:0 20px 40px rgba(0,0,0,.08);
      border-color:#38bdf8;
    }

    .course-icon{
      font-size: 53.8px;
      margin-bottom:15px;
    }

    .course-category{
      display:inline-block;
      background:#e0f2fe;
      color:#0284c7;
      padding:6px 12px;
      border-radius:30px;
      font-size: 13.4px;
      font-weight:600;
      margin-bottom:15px;
    }

    .course-card h3{
      color:#0f172a;
      font-size:1.2rem;
      margin-bottom:12px;
    }

    .course-card p{
      color:#64748b;
      line-height:1.6;
      margin-bottom:20px;
      flex:1;
    }

    .course-card button{
      background:linear-gradient(135deg,#38bdf8,#0ea5e9);
      color:white;
      border:none;
      padding:12px 20px;
      border-radius:10px;
      cursor:pointer;
      font-weight:600;
    }

    @media(max-width:768px){
      h1{
        font-size:2.2rem;
      }

      .courses-grid{
        grid-template-columns:1fr;
      }
    }
  `}</style>
</div>


);
}
