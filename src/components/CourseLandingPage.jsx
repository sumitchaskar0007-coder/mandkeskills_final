/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  ArrowRight, Award, BriefcaseBusiness, Check, CircleHelp, GraduationCap,
  Lightbulb, ShieldCheck, Sparkles, Target, Users,
} from "lucide-react";
import "./CourseLandingPage.css";

const iconMap = [Lightbulb, Users, GraduationCap, Target];

function SectionHeading({ eyebrow, title, copy }) {
  return <div className="course-formula__heading">
    <span>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}
  </div>;
}

export default function CourseLandingPage({ course }) {
  return <main className="course-formula" style={{ "--course-accent": course.accent }}>
    {/* 1. Big Promise */}
    <section className="course-formula__hero">
      <img src={course.image} alt="" aria-hidden="true" loading="eager" decoding="async" fetchPriority="high" />
      <div className="course-formula__hero-shade" />
      <div className="course-formula__container course-formula__hero-content">
        <span className="course-formula__badge"><Sparkles size={16} /> {course.badge}</span>
        <h1>{course.title}<em>{course.promise}</em></h1>
        <p>{course.intro}</p>
        <div className="course-formula__actions">
          <a className="course-formula__primary" href="#enroll">Enroll now <ArrowRight size={18} /></a>
          <a className="course-formula__secondary" href="#curriculum">Explore curriculum</a>
        </div>
        <div className="course-formula__facts">{course.facts.map((fact) => <span key={fact}>{fact}</span>)}</div>
      </div>
    </section>

    {/* 2. Why This Skill Matters */}
    <section><div className="course-formula__container course-formula__split">
      <SectionHeading eyebrow="Why this skill matters" title={course.whyTitle} copy={course.why} />
      <div className="course-formula__callout"><Lightbulb /><strong>Learn with purpose</strong><p>{course.outcome}</p></div>
    </div></section>

    {/* 3. Who Is It For */}
    <section className="course-formula__tint"><div className="course-formula__container">
      <SectionHeading eyebrow="Who is it for?" title="Built for ambitious learners" copy="A practical starting point, whether you are beginning, upskilling, or changing direction." />
      <div className="course-formula__cards">{course.audience.map((item, i) => { const Icon = iconMap[i % iconMap.length]; return <article key={item}><Icon /><h3>{item}</h3></article>; })}</div>
    </div></section>

    {/* 4. What You Learn */}
    <section id="curriculum"><div className="course-formula__container">
      <SectionHeading eyebrow="What you learn" title="A curriculum designed for real work" copy="Clear concepts, guided practice, and applications you can take beyond the classroom." />
      <div className="course-formula__list-grid">{course.learn.map((item, i) => <div key={item}><b>{String(i + 1).padStart(2, "0")}</b><span>{item}</span></div>)}</div>
    </div></section>

    {/* 5. Skills You Build */}
    <section className="course-formula__dark"><div className="course-formula__container">
      <SectionHeading eyebrow="Skills you build" title="Graduate with confidence, not just notes" />
      <div className="course-formula__chips">{course.skills.map((skill) => <span key={skill}><Check size={16} />{skill}</span>)}</div>
    </div></section>

    {/* 6. Certification */}
    <section><div className="course-formula__container course-formula__certificate">
      <div className="course-formula__award"><Award /></div><div><span>Certification</span><h2>{course.certificate}</h2><p>{course.certificateCopy}</p></div>
    </div></section>

    {/* 7. Career Opportunities */}
    <section className="course-formula__tint"><div className="course-formula__container">
      <SectionHeading eyebrow="Career opportunities" title="Where this course can take you" copy="Build a foundation for roles and opportunities across growing teams and industries." />
      <div className="course-formula__careers">{course.careers.map((career) => <div key={career}><BriefcaseBusiness /><span>{career}</span></div>)}</div>
    </div></section>

    {/* 8. Why MILES */}
    <section><div className="course-formula__container">
      <SectionHeading eyebrow="Why MILES" title="Training that moves with your ambition" />
      <div className="course-formula__cards">{["Expert-led sessions", "Hands-on learning", "Career-focused curriculum", "Supportive cohorts"].map((item, i) => { const Icon = [Users, Target, ShieldCheck, GraduationCap][i]; return <article key={item}><Icon /><h3>{item}</h3><p>{["Learn from trainers with practical experience.", "Build confidence through exercises and projects.", "Learn the skills employers actually value.", "Get guidance in a focused learning environment."][i]}</p></article>; })}</div>
    </div></section>

    {/* 9. FAQs */}
    <section className="course-formula__tint"><div className="course-formula__container course-formula__faq-wrap">
      <SectionHeading eyebrow="FAQs" title="Questions, answered" />
      <div className="course-formula__faqs">{course.faqs.map(({ q, a }) => <details key={q}><summary><CircleHelp />{q}<span>+</span></summary><p>{a}</p></details>)}</div>
    </div></section>

    {/* 10. Enrollment */}
    <section id="enroll" className="course-formula__enroll"><div className="course-formula__container">
      <span>Enrollment</span><h2>Ready to build your next skill?</h2><p>Talk to the MILES team about the next batch, schedule, fees, and eligibility.</p>
      <Link to="/contact">Start your enrollment <ArrowRight /></Link>
    </div></section>
  </main>;
}
