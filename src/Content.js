// import images
import Hero_person from "./assets/images/Hero/person.png";



import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import project4 from "./assets/images/projects/img4.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: "Home",
    },
    {
      link: "#skills",
      icon: "Skills",
    },
   
    {
      link: "#projects",
      icon: "Projects",
    },
    {
      link: "#contact",
      icon: "Contact",
    },
  ],
  hero: {
    title: "React Developer",
    firstName: "Shubham Verma.",
    LastName: "Shubham Verma.",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "10+",
        text: "React Projects Built During Learning",
      },
      {
        count: "500+",
        text: "Hours of Coding Practice Completed",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    
    project_content: [
      {
        title: "Film Finder",
        image: project1,
        demoLink:"https://film-finder-ap.netlify.app/",
        repoLink: "https://github.com/includeshubhamgenius/Film_Finder_React-app",
        description: "React app to search movies",
       techStack: ["React", "Tailwind"],
      },
      {
        title: "Pictory",
        image: project4,
        demoLink:"https://pictory-tan.vercel.app/",
        repoLink: "https://github.com/includeshubhamgenius/English-writing-practice",
        description: "English writing practice web app",
       techStack: ["React", "Tailwind", "Vercel"],
      },
      {
        title: "Tic Tac Toe",
        image: project2,
        demoLink:"https://tic-tac-toe-3-themes.netlify.app/",
        repoLink: "https://github.com/includeshubhamgenius/tic-tac-toe-game",
        description: "A multi themed tic tac toe",
       techStack: ["React", "Tailwind", "Netlify"],
      },
      {
        title: "Task Manager",
        image: project3,
        demoLink:"https://tasksmanagerrapp.netlify.app/",
        repoLink: "https://github.com/includeshubhamgenius/task-manager-app",
        description: "A simple task manager app",
       techStack: ["React", "Tailwind"],
      },
   
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "shubhamgenius85@gmail.com",
        icon: GrMail,
        link: "mailto:shubhamgenius85@gmail.com",
      },
      {
        text: "+91 123 456 789",
        icon: MdCall,
        link: "https://wa.me/123456789",
      },
      {
        text: "LinkedIn",
        icon: FaLinkedin,
        link: "www.linkedin.com/in/shubhamverma85",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2025",
  },
};
