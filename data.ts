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
        id: 7,
        name:" Node.Js",
        level: "30%",
        Icon: FaNodeJs,
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
        level: "50%",
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
        name: "COVID Tracker",
        description:
          "This app shows a statistical view about corona virus over the world",
        image_path: "https://raw.githubusercontent.com/Dey-Sumit/Dev-Portfolio-Next-X/main/public/images/covid.jpg",
        deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
        github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
        category: ["react"],
        key_techs: ["React", "Chart.js", "Material UI"],
      },
      {
        name: "Algorithm Visualizer",
        image_path: "https://raw.githubusercontent.com/Dey-Sumit/Dev-Portfolio-Next-X/main/public/images/algoVisual.png",
        deployed_url: "https://visual-algorithm.web.app/",
        github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
        category: ["react"],
        description:
          "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
        key_techs: ["React", "firebase", "Framer Motion"],
      },
    
      {
        name: "Dev Talks",
        image_path: "https://raw.githubusercontent.com/Dey-Sumit/Dev-Portfolio-Next-X/main/public/images/dev.jpg",
        deployed_url: "https://dev-talks.herokuapp.com/",
        github_url: "https://github.com/Dey-Sumit/Dev-talks",
        category: ["node", "mongo", "react"],
        description:
          "Social Media app for developers who can share project,create posts,etc...",
        key_techs: [
          "React",
          "Redux",
          "Node",
          "Express",
          "Mongo",
          "REST API",
          "Bootstrap",
        ],
      },
    
      {
        name: "Realtime Chat App",
        image_path: "https://raw.githubusercontent.com/Dey-Sumit/Dev-Portfolio-Next-X/main/public/images/chatapp.jpg",
        deployed_url: "https://sumit-chat.netlify.app/",
        github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
        category: ["node", "react"],
        description:
          "Basic Realtime Chat App where one can create a room can talk to each other",
        key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
      },
    
      {
        name: "Tweeter Clone",
        image_path: "https://raw.githubusercontent.com/Dey-Sumit/Dev-Portfolio-Next-X/main/public/images/tweetme.jpg",
        deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
        github_url: "https://github.com/Dey-Sumit/tweetme",
        category: ["django", "react"],
        description:
          "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
        key_techs: ["React", "Django", "Django REST API"],
      },
    
      {
        name: "Color Classification using tf.js",
        image_path: "https://raw.githubusercontent.com/Dey-Sumit/Dev-Portfolio-Next-X/main/public/images/color.jpg",
        deployed_url: "!#",
        github_url: "https://github.com/Dey-Sumit/color-classification",
        category: ["express"],
        description:
          "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
        key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
      },
      {
        name: "YouTube using YouTube ",
        image_path: "https://raw.githubusercontent.com/Dey-Sumit/Dev-Portfolio-Next-X/main/public/images/youtubeClone.png",
        deployed_url: "https://not-utube.web.app/",
        github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
        category: ["express"],
        description:
          'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
        key_techs: [
          "React",
          "Redux",
          "Firebase Auth",
          "YouTube API",
          "Sass",
          "Bootstrap",
        ],
      },
      {
        name: "Football App",
        image_path: "https://raw.githubusercontent.com/Dey-Sumit/Dev-Portfolio-Next-X/main/public/images/football.png",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/Dey-Sumit/football-app",
        category: ["react"],
        description:
          "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
        key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
      },
]