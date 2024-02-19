import {
  mobile,
  backend,
  web,
  github,
  drawing
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];


const experiences = [
  {
    title: "NA",
    company_name: "NA",
    icon: github,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "NA",
      "NA ",
    ],
  }
];



const projects = [
  {
    name: "Drawing Sandbox",
    description:
      "Unity game that allows users to draw and play on a whiteboard with a ranges on designing options.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "ShaderLab",
        color: "pink-text-gradient",
      },
    ],
    image: drawing,
    source_code_link: "https://github.com/BensonJiang1/DrawingGameTemplate",
  },
  {
    name: "Omniscia",
    description:
      "A flashcard and game based learning system",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: drawing,
    source_code_link: "https://github.com/BensonJiang1/omniscia",
  },
  {
    name: "Global Chat",
    description:
      "A real time chat with automatic text translation to connect people around the world",
    tags: [
      {
        name: "Svelte",
        color: "blue-text-gradient",
      },
      {
        name: "Google API",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: drawing,
    source_code_link: "https://github.com/Seth-Lupo/global-chat",
  },
  
];

export { services,  experiences,  projects };
