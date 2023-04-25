import { FaNodeJs } from 'react-icons/fa';

// set interface

import {RiComputerLine} from 'react-icons/ri'
import { IProjects, IService, ISkill, ITools } from './types'
import {FaServer,FaReact,FaNode,FaShoppingCart,FaBootstrap, FaJava, } from 'react-icons/fa'
import {AiFillApi,AiOutlineAntDesign, AiFillHtml5,} from 'react-icons/ai'
import {BsCircleFill} from 'react-icons/bs'
import {IoLogoJavascript} from 'react-icons/io';
import {SiTailwindcss} from 'react-icons/si';
import {TbBrandNextjs} from 'react-icons/tb';


// data for service
export const services:IService[] = [
    {
        id: 34,
        Icon: RiComputerLine,
        title: "Frontend Developer",
        about: "I can build a beautiful and scalable SPA using  <b> HTML </b>,  <b>CSS</b>, <b>React.js</b>, <b>Next.js</b>, <b>Tailwind</b> and <b>Bootstrap</b> ",
    },
    {
        id: 35,
        Icon: FaNodeJs,
        title: "Backend Developer",
        about: "Node.js is a open-source JavaScript runtime environment that allows to build scalable and high-performance applications." 
    },
    {
        id: 36,
        Icon: FaReact,
        title: "UI/UX Designer",
        about: "UI/UX design is creating user interfaces and experiences for digital products such as Software, websites & mobile apps. " 
    },
    {
        id: 39,
        Icon: AiFillApi,
        title: "API Development",
        about: "API  is creating of application programming interfaces  that enable different software applications to communicate  each other" 
    },
    {
        id: 37,
        Icon: FaShoppingCart,
        title: "E-commerce Development",
        about: "E-commerce development is building an online marketplace that connects buyers and sellers across different geographical locations" 
    },
    {
        id: 38,
        Icon: AiOutlineAntDesign,
        title: "Web Design",
        about: "I can design beautiful and responsive many types website with also convert figma to react PSD to html or react and next.js ." 
    },
]


// data for skill
export const languageSkill:ISkill[] = [
    {
        id: 1,
        name:" HTML",
        level: "95%",
        Icon: AiFillHtml5,
    },
    
    {
        id: 2,
        name:" CSS",
        level: "95%",
        Icon: FaBootstrap,
    },
    {
        id: 4,
        name:" JavaScript",
        level: "85%",
        Icon: IoLogoJavascript,
    },
    {
        id: 6,
        name:" Next",
        level: "70%",
        Icon: TbBrandNextjs,
    },
    {
        id: 5,
        name:" React",
        level: "80%",
        Icon: FaReact,
    },
    {
        id: 8,
        name:" Tailwind",
        level: "90%",
        Icon: SiTailwindcss,
    },
    {
      id: 7,
      name:" Node.Js",
      level: "30%",
      Icon: FaNodeJs,
  },
    
   
    
]

// data for tools 
export const tools: ITools[] =[
 {
    id: 10,
    Icon: BsCircleFill,
    name: "Figma",
    level: "85%"
 },
 {
    id: 11,
    Icon: BsCircleFill,
    name: "PhotoShop",
    level: "75%"
 },
 {
    id: 12,
    Icon: BsCircleFill,
    name: "Adobe XD",
    level: "95%"
 },
 {
    id: 13,
    Icon: BsCircleFill,
    name: "PSD",
    level: "90%"
 },
]

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
        description:
          "This app shows most visited place in Bangladesh",
        image_path: "/tour.png",
        deployed_url: "https://travel-tour-070.web.app/",
        github_url: "https://github.com/toufiq70/travel-agency",
        category: ["react"],
        key_techs: ["React", "Chart.js", "Material UI"],
      },
      
    
      {
        name: "Hotel Management",
        image_path: "/hotel.png",
        deployed_url: "https://classic-abashik-hotel.web.app/",
        github_url: "https://github.com/toufiqcse/classic-abashik-hotel-cilent",
        category: ["express", "react"],
        description:
          "The World heritage best resort and tourism support center ",
        key_techs: ["React", "Node", "Express", "Bootstrap"],
      },
    
     
    
      
      
]