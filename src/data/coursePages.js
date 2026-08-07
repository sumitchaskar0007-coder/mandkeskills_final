const commonFaqs = (name) => [
  { q: "Do I need prior experience?", a: `No. ${name} starts with the foundations and builds toward practical application.` },
  { q: "Is the course practical?", a: "Yes. Sessions include guided exercises, examples, and hands-on assignments." },
  { q: "Will I receive a certificate?", a: "Yes. You receive the certification described above after meeting the completion requirements." },
  { q: "How do I know the next batch dates and fees?", a: "Contact the MILES admissions team for the latest schedule, fee, and enrollment details." },
];

const make = (data) => ({ ...data, faqs: commonFaqs(data.title), certificateCopy: data.certificateCopy || "Demonstrate your learning with a credential you can add to your résumé and professional profile." });

export const coursePages = {
  tallyC: make({ title:"Tally Certification Program", promise:"Prove your accounting expertise.", badge:"MILES × TALLY", intro:"Progress through structured levels of Tally learning and earn an official credential for your skills.", image:"/assets/images/tallyc.png", accent:"#a786f4", facts:["Three learning levels","Official credential","Practical assessments"], whyTitle:"Verified skills create stronger opportunities", why:"Employers value candidates who can demonstrate both accounting understanding and practical software ability. Structured certification makes that capability visible.", outcome:"Move from essential transactions to advanced accounting workflows through a clear, assessed pathway.", audience:["Accounting students","Tally learners","Working accountants","Job-focused graduates"], learn:["Accounting foundations","Tally Prime essentials","Intermediate inventory and taxation","Advanced GST workflows","Payroll and compliance","Reports, controls, and assessments"], skills:["Tally proficiency","Accounting controls","Tax workflows","Payroll processing","Business reporting","Problem solving"], certificate:"Official Tally Certification", careers:["Certified Tally Professional","Accounts Officer","GST Executive","Payroll Executive","Finance Assistant","Accounting Consultant"] }),
}
