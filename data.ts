import { FaNodeJs } from "react-icons/fa";

// set interface

import { RiComputerLine } from "react-icons/ri";
import { IProjects, IService, ISkill, ITools } from "./types";
import {
  FaServer,
  FaReact,
  FaNode,
  FaShoppingCart,
  FaBootstrap,
  FaJava,
  FaMailchimp,
} from "react-icons/fa";
import { AiFillApi, AiOutlineAntDesign, AiFillHtml5 } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiMui, SiTypescript, SiFirebase } from "react-icons/si";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";

// data for service
export const services: IService[] = [
  {
    id: 34,
    Icon: RiComputerLine,
    title: "Frontend Developer",
    about:
      "I can build a beautiful and scalable SPA using  <b> HTML </b>,  <b>CSS</b>, <b>React.js</b>, <b>Next.js</b>, <b>Redux</b>, <b>Tailwind</b> and <b>Bootstrap</b> ",
  },
  {
    id: 36,
    Icon: FaMailchimp,
    title: "Email Template Designer",
    about:
      "Email Template is create marketing of digital products such as Software, websites, mobile apps. ",
  },

  {
    id: 38,
    Icon: AiOutlineAntDesign,
    title: "Web Designer",
    about:
      "I can design beautiful and responsive many types website with also convert figma to react PSD to html or react and next.js .",
  },

  {
    id: 40,
    Icon: FaShoppingCart,
    title: "Digital Marketing Service",
    about:
      "Lead Generation service is deliver to you collect information of any other items or person for grow my business of digital product",
  },
];

// data for skill
export const languageSkill: ISkill[] = [
  {
    id: 1,
    name: " HTML",
    level: "95%",
    Icon: AiFillHtml5,
  },

  {
    id: 2,
    name: " CSS",
    level: "95%",
    Icon: FaBootstrap,
  },
  {
    id: 4,
    name: " JavaScript",
    level: "85%",
    Icon: IoLogoJavascript,
  },
  {
    id: 6,
    name: " Next",
    level: "70%",
    Icon: TbBrandNextjs,
  },
  {
    id: 5,
    name: " React",
    level: "80%",
    Icon: FaReact,
  },
  {
    id: 8,
    name: " Redux",
    level: "50%",
    Icon: TbBrandRedux,
  },
  {
    id: 8,
    name: " Tailwind",
    level: "90%",
    Icon: SiTailwindcss,
  },
  {
    id: 7,
    name: " TypeScript",
    level: "40%",
    Icon: SiTypescript,
  },
  {
    id: 9,
    name: " Material UI",
    level: "60%",
    Icon: SiMui,
  },
  {
    id: 9,
    name: " Firebase",
    level: "70%",
    Icon: SiFirebase,
  },
];

// data for tools
export const tools: ITools[] = [
  {
    id: 10,
    Icon: BsCircleFill,
    name: "Figma",
    level: "85%",
  },
  {
    id: 11,
    Icon: BsCircleFill,
    name: "PhotoShop",
    level: "75%",
  },
  {
    id: 12,
    Icon: BsCircleFill,
    name: "Adobe XD",
    level: "60%",
  },
  {
    id: 13,
    Icon: BsCircleFill,
    name: "PSD",
    level: "90%",
  },
];

// {

//     name: "Hotel Management",
//     description: "This app shows a Statistical view about corona virus",
//     image_path: "jlkajfi",
//     deployed_url: "https://classic-abashik-hotel.web.app/",
//     github_url: "https://classic-abashik-hotel.web.app/",
//     category: ["react"],
//     key_techs: ['React', "Tailwind"]
// },
// {
//     name: "News Portal",
//     description: "This app shows a Statistical view about corona virus",
//     image_path: "jlkajfi",
//     deployed_url: "https://daily-sonar-bangla.web.app/",
//     github_url: "https://daily-sonar-bangla.web.app/",
//     category: ["react", 'express'],
//     key_techs: ['React', "Tailwind", "FireBase"]
// },
// {
//     name: "Education Home",
//     description: "This app shows a Statistical view about corona virus",
//     image_path: "jlkajfi",
//     deployed_url: "https://physics-academy-8441d.web.app/",
//     github_url: "https://physics-academy-8441d.web.app/",
//     category: ["react", 'express', 'next'],
//     key_techs: ['React', "Tailwind", "FireBase"]
// },
// data for projects

export const projectsData: IProjects[] = [
  {
    name: "Travel Tour",
    description: "This app shows most visited place in Bangladesh",
    image_path: "/tour.png",
    deployed_url: "https://travel-tour-070.web.app/",
    github_url: "https://github.com/toufiq70/travel-agency",
    category: ["react"],
    key_techs: ["React", "Tailwind CSS"],
  },

  {
    name: "Hotel Management",
    image_path: "/hotel.png",
    deployed_url: "https://classic-abashik-hotel.web.app/",
    github_url: "https://github.com/toufiqcse/classic-abashik-hotel-cilent",
    category: ["react"],
    description: "The World heritage best resort and tourism support center ",
    key_techs: ["React", "Node", "Express", "Tailwind CSS"],
  },
  {
    name: "ToDo Application",
    image_path: "/lws-todo.png",
    deployed_url: "https://lws-todo-app.vercel.app/",
    github_url: "https://github.com/toufiqcse/lws-todo-app",
    category: ["redux", "next"],
    description: "This project is designed by react-redux library",
    key_techs: ["React", "Redux", "Tailwind"],
  },
  {
    name: "Flight Booking Application",
    image_path: "/flight-book.png",
    deployed_url: "https://flight-booking-app-react-redux.vercel.app/",
    github_url: "https://github.com/toufiqcse/flight-booking-app-react-redux",
    category: ["redux", "next"],
    description:
      "Flight booking application will be delivered to  you better state management system  to booking the Flight Tickets",
    key_techs: ["React", "Redux", "Tailwind"],
  },
  {
    name: "Advanced ToDo Application",
    image_path: "/adv-todo.png",
    deployed_url: "https://daily-todo-app-react-redux.vercel.app/",
    github_url: "https://github.com/toufiqcse/daily-todo-app-react-redux",
    category: ["redux", "next"],
    description:
      "Advanced Todo Application will se served to your maintain daily Task and this projects designed by react-redux library ",
    key_techs: ["React", "Redux", "Tailwind"],
  },
  {
    name: "Portfolio projects",
    image_path: "/portfolio-toufiq.png",
    deployed_url: "https://daily-todo-app-react-redux.vercel.app/",
    github_url: "https://github.com/toufiqcse/daily-todo-app-react-redux",
    category: ["redux", "next", "typeScript"],
    description:
      "Advanced Todo Application will se served to your maintain daily Task and this projects designed by react-redux library ",
    key_techs: ["React", "Redux", "Tailwind", "next", "typeScript"],
  },
  {
    name: "React Portfolio projects",
    image_path: "/toufiq-portfolio.png",
    deployed_url: "https://toufiq-portfolio.web.app/",
    github_url: "#",
    category: ["react", "firebase"],
    description:
      "Advanced Todo Application will se served to your maintain daily Task and this projects designed by react-redux library ",
    key_techs: ["React", "Tailwind", "firebase"],
  },
  {
    name: "Portfolio Email Template",
    image_path: "/email-template-3.png",
    deployed_url: "#",
    github_url: "#",
    category: ["email template"],
    description:
      "Portfolio Email template design provide for  your own service and skill share to anyone in this digital world ",
    key_techs: ["Email Template"],
  },
  {
    name: "Car Shop Email Template",
    image_path: "/email-template-1.png",
    deployed_url: "#",
    github_url: "#",
    category: ["email template"],
    description:
      "Car shop Email template design provide for grow your company and product ",
    key_techs: ["Email Template"],
  },
  {
    name: "Butique Email Template",
    image_path: "/email-template-2.png",
    deployed_url: "#",
    github_url: "#",
    category: ["email template"],
    description:
      "Butiqe Email template design provide for grow your company and product",
    key_techs: ["Email Template"],
  },
  {
    name: "Lead Generation",
    image_path: "/lead-2.jpg",
    deployed_url:
      "https://docs.google.com/spreadsheets/d/1kEk2UDk8PP8yLaPS0kPbX58fYLKiQXxVfKdLmpKDmOQ/edit?usp=sharing",
    github_url: "#",
    category: ["lead generation"],
    description: "I will provide B2B lead generation service ",
    key_techs: ["lead generation"],
  },
  {
    name: "B2B Lead Generation",
    image_path: "/lead.jpg",
    deployed_url:
      "https://docs.google.com/spreadsheets/d/1kEk2UDk8PP8yLaPS0kPbX58fYLKiQXxVfKdLmpKDmOQ/edit?usp=sharing",
    github_url: "#",
    category: ["lead generation"],
    description: "I will provide B2B lead generation service ",
    key_techs: ["lead generation"],
  },
];
