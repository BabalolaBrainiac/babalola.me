import { algorithms, devnotes, oscs } from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Senior Backend Software Engineer",
    company_name: "Access Bank PLC",
    date: "04/2023 - Present",
    details: [
      "Transformed the backend of Primus Plus, servicing over <span style='color: white;'>52,000,000 clients</span> across Africa, by implementing scalable microservices, improving performance and reliability.",
      "<span style='color: white;'>Enhanced system efficiency by 25%</span> through design and code reviews, integrating network services across platforms using SOAP and REST APIs with Safaricom, MPesa, and RevPay.",
      "Optimized DevOps pipeline using AWS services, integrating GitHub Actions with TurboRepo, Dockerizing services, and managing containers with Kubernetes, leading to a <span style='color: white;'>40% increase in deployment speed</span>.",
    ],
  },
  {
    title: "Undergraduate Tutor (Part Time)",
    company_name: "EdgeHill University | Ormskirk, United Kingdom",
    date: "10/2023 - 12/2023",
    details: [
      "Conducted extracurricular sessions on programming and databases, <span style='color: white;'>enhancing students' skills and performance</span>.",
      "Monitored and assessed student progress, providing <span style='color: white;'>constructive feedback and guidance</span>.",
      "<span style='color: white;'>Utilized effective communication skills</span> to explain complex concepts in an understandable manner.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Binance",
    date: "12/2021 - 12/2022",
    details: [
      "Architected and developed Cashlink, a high volume Fiat Crypto/P2P service <span style='color: white;'>processing over $1.5M weekly</span>, within a tight one month deadline.",
      "Contributed to a crypto/blockchain social media platform, enhancing content processing and user engagement features, <span style='color: white;'>leading to a 30% increase in user activity</span>.",
      "Collaborated with cross-functional teams (backend, blockchain, frontend) at Binance and Bundle Africa to develop internal tools using Node.js, Typescript, Java/Spring Boot, and C#/ASP.Net, <span style='color: white;'>contributing to the overall success</span> of both companies.",
    ],
  },
];

const portfolio = [
  {
    name: "Open Source Computer Science Repo",
    description:
      "A GitHub repo with over 17,000 stars containing a curated list of free online courses from reputable universities that satisfy undergraduate computer science requirements.",
    image: oscs,
  },
  {
    name: "Dev Notes",
    description:
      "A newsletter with over 6,000 readers made for software developers to keep up with this rapidly evolving industry, with a sister platform in progress.",
    image: devnotes,
  },
  {
    name: "Visually Understanding Algorithms",
    description:
      "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.",
    image: algorithms,
  },
];

export { experiences, portfolio };
