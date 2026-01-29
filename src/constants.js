// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";

// Experience Section Logo's
import raqmiyat from "./assets/company_logo/raqmiyat_logo.png";

// Education Section Logo's
import clgLogo from "./assets/education_logo/clgLogo.png";
import guviLogo from './assets/education_logo/guviLogo.png';
// Project Section Logo's
import sma from "./assets/work_logo/sma-min.png";
import meal from "./assets/work_logo/meal.png";
import Ekart from "./assets/work_logo/Ekart.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

// constants.js

export const TechnicalSkills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "React JS",
  "Redux",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
  "Postman",
  "Netlify",
];

export const SoftSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Time Management",
  "Adaptability",
  "Quick Learner",
];


export const experiences = [
  {
    id: 0,
    img: raqmiyat,
    role: "Mobile App Developer",
    company: "Raqmiyat Information Technology",
    date: "December 2014 - February 2017",
    desc: "Developed UI for the mobile application in frontend and some API testing in backend development. Collaborated with cross-functional teams to build responsive UI, implement it.",
    skills: ["HTML", "CSS", "JavaScript", "KONY", " SQL"],
  },
];

export const education = [
  {
    id: 0,
    img: clgLogo,
    school: "VPMM ENGINNERING COLLEGE FOR WOMEN",
    date: "June 2010 - April 2014",
    grade: "7.695 CGPA",
    desc: "I have completed my Bachelor of Engineering (BE) in Computer Science from VPMM Engineering college for women, KrishnanKovil. During my time at VPMM, I gained a strong foundation in programming, software development, and computer science principles. I actively participated in various workshops, conference and technical events, which enhanced my skills and knowledge.",
    degree: "Bachelor of Engineering in Computer Science - B.E",
  },
   {
    id: 1,
    img: guviLogo,
    school: "HCL GUVI GEEK NETWORK PRIVATE LIMITED",
    date: "August 2024 - February 2025",
    grade:"Certified",
    desc:
      "Completed IIT-M Pravartak certified Full Stack Development course with AI Tools, covering MERN stack, system design, and AI-assisted development workflows.",
    degree: "Full Stack Development with AI Tools",
    certificateLink: "https://v2.zenclass.in/certificateDownload/4h5acHIrn3AsdZF3?download=true",
  },
];

// export const projects = [
//   {
//     id: 0,
//     title: "Social Media Application (SMA) using MERN stack",
//     description:
//       "It is a full-stack social platform with authentication, posts, likes, comments,stories, notifications, and friend requests.",
//     image: sma,
//     tags: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "React JS",
//       "API",
//       "MongoDB",
//       "Express",
//       "Node.js",
//     ],
//     github: "https://github.com/yogalakshmidev/FE-SMA-MERN",
//     webapp: "https://funny-belekoy-0c1b61.netlify.app/",
//   },
//   {
//     id: 1,
//     title: "MEAL DB",
//     description:
//       "Built a recipe search app with API-based data fetching, keyword search, and detailed recipe pages. Added map integration showing user and dish origin. ",
//     image: meal,
//     tags: [
//       "React JS",
//       "Node.js",
//       "MongoDB",
//       "Express",
//       "HTML",
//       "CSS",
//       "JavaScript",
//     ],
//     github: "https://github.com/yogalakshmidev/FE-Taylor-sKitchen.git",
//     webapp: "https://curious-chaja-d3b8e0.netlify.app/",
//   },
//    {
//     id: 2,
//     title: "Ekart - Ecommerce App with Admin Panel",
//     description:
//       "A React-based web application based on the E-Commerce platform using MERN Stack with Razorpay Integration along with Admin Panel where the new products are added.",
//     image: Ekart,
//     tags: ["React JS", "HTML", "CSS","MongoDB","Express", "JavaScript"],
//     github: "https://github.com/yogalakshmidev/FE-Ekart.git",
//     webapp: "https://boisterous-capybara-ee06a6.netlify.app/",
//   },
// ];


export const projects = [
  {
    id: 0,
    title: "Social Media Application (SMA)",
    description:
      "A full-stack social media platform with authentication, posts, likes, comments, stories, notifications, and friend requests.",
    image: sma,
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    githubFrontend: "https://github.com/yogalakshmidev/FE-SMA-MERN",
    githubBackend: "https://github.com/yogalakshmidev/BE-SMA-MERN", // add if exists
    liveUrl: "https://funny-belekoy-0c1b61.netlify.app/",
  },
  {
    id: 1,
    title: "Meal DB",
    description:
      "A recipe search application with API-based data fetching, keyword search, detailed recipe pages, and map integration showing dish origin.",
    image: meal,
    techStack: [
      "React JS",
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    githubFrontend: "https://github.com/yogalakshmidev/FE-Taylor-sKitchen.git",
    githubBackend: "https://github.com/yogalakshmidev/BE-Taylor-sKitchen.git", 
    liveUrl: "https://curious-chaja-d3b8e0.netlify.app/",
  },
  {
    id: 2,
    title: "Ekart – Ecommerce App",
    description:
      "A MERN stack ecommerce application with Razorpay integration and an admin panel for product management.",
    image: Ekart,
    techStack: [
      "React JS",
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    githubFrontend: "https://github.com/yogalakshmidev/FE-Ekart.git",
    githubBackend: "https://github.com/yogalakshmidev/BE-Ekart.git",
    liveUrl: "https://boisterous-capybara-ee06a6.netlify.app/",
  },
];
