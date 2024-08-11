import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  starbucks,
  tesla,
  rtcamp,
  timeslotter,
  jobit,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
 
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences: TExperience[] = [
  {
    title: "Frontend Developer",
    companyName: "Timeslotter",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2023 - Jan 2024",
    points: [
      "Developing and maintaining web applications using Html,css and js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - till now",
    points: [
      "Learning...",
      "Trying......",
    ],
  },
 
];


const projects: TProject[] = [
  {
    name: "Timeslotter",
    description:
      "Web-based platform that allows users to search, book, and manage your time from various providers, providing a convenient and efficient solution for their needs.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: timeslotter,
    sourceCodeLink: "http://timeslotter.tech/",
  },
  {
    name: "PayDash",
    description:
      "It is an admin dashboard that oversees financial transactions, providing real-time tracking, analysis, and reporting to enhance financial oversight.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nivo",
        color: "green-text-gradient",
      },
      {
        name: "formik",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/sumitrajkumar/Transaction-Manager",
  },
  {
    name: "Rtcamp",
    description:
      "Rtcamp is a digital agency specializing in WordPress solutions, delivering scalable and secure websites to enhance user experience and drive business results.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: rtcamp,
    sourceCodeLink: "https://github.com/sumitrajkumar/rtcamp",
  },
];

export { services, technologies, experiences, projects };
