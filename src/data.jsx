import { FaPaintBrush } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiLinkedinFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile3,
  profile4,
  profile5,
  profile6,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  emailicon,
  messengericon,
  whatsappicon,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  // { name: "Testimonial" },
  { name: "Contact" },
];

export const services = [
  {
    title: "PhotoShop Design",
    icon: <FaPaintBrush />,
    description: `Crafting visually stunning and user-centric designs that ensure seamless user experiences. 
                  From wireframes to high-fidelity prototypes, I focus on creating intuitive interfaces that 
                  blend creativity and functionality, enhancing engagement and usability.`,
  },
  {
    title: "Web Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Building responsive, dynamic, and high-performance websites tailored to your needs. 
    Using modern technologies like React, Node.js, and more, I ensure your site is optimized 
    for speed, scalability, and accessibility, delivering a robust online presence.`,
  },
  {
    title: "Content Creation",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Producing compelling digital content that resonates with your audience. From blogs 
                  and technical documentation to engaging website copy, I ensure your brand's message 
                  is clear, impactful, and aligned with your business goals.`,
  },
];

export const projects = [
  {
    title: " 3D Portfolio",
    image: project1,
    category: "JavaScript",
    description: `I am a  web developer with expertise in HTML, CSS, and JavaScript crafting engaging and responsive front-end designs.







`,
    demoLink:
      "https://afsalahamedportfolio3d-60033967713.development.catalystserverless.in/app/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
      {
        name: "CSS",
        logo: css,
      },
    ],
  },
  {
    title: "Gsap Animation Website",
    image: project2,
    category: "React.js/Gsap",
    description: `Creating dynamic and immersive web experiences using GSAP (GreenSock Animation Platform).`,
    demoLink: "https://3danimationwebsite.vercel.app/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },

      {
        name: "JavaScript",
        logo: javascript,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
    ],
  },
  {
    title: "Fanta Web ",
    image: project3,
    category: "React.js/Tailwind",
    description: `The "Fanta" Project in could be described as a modern, dynamic web application built using React.js creating responsive user interfaces.`,
    demoLink: "https://fantasam.vercel.app/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },

      {
        name: "Tailwind",
        logo: tailwind,
      },
    ],
  },
  {
    title: "Taxi Booking Design",
    image: project4,
    category: "JavaScript",
    description: `A taxi website built with HTML, CSS, and JavaScript offers a user-friendly platform for booking rides with an intuitive interface and responsive design.`,
    demoLink:
      "https://taxibookingdesignweb-60033967713.development.catalystserverless.in/app/index.html",
    stacks: [
      {
        name: "JavaScript",
        logo: javascript,
      },

      {
        name: "CSS",
        logo: css,
      },
    ],
  },
  {
    title: "Card 3D Moving Web",
    image: project5,
    category: "JavaScript",
    description: `A 3D car movement website built with HTML, CSS, and JavaScript provides an interactive  and visually engaging animations.`,
    demoLink: "https://cars-eight-sable.vercel.app/",
    stacks: [
      {
        name: "JavaScript",
        logo: javascript,
      },

      {
        name: "CSS",
        logo: css,
      },
    ],
  },
  {
    title: "Coffee Shop website",
    image: project6,
    category: "JavaScript",
    description: `A coffee shop website built with HTML, CSS, and JavaScript  to explore the menu, location, and online orders with a stylish design.`,
    demoLink: "https://coffeeshopweb.vercel.app/",
    stacks: [
      {
        name: "JavaScript",
        logo: javascript,
      },

      {
        name: "CSS",
        logo: css,
      },
    ],
  },
];

export const skills = [
  // {
  //   title: "UI/UX",
  //   data: [],
  // },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
        logo: tailwind,
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
        logo: bootstrap,
      },
      {
        skill: "React",
        level: "Experienced",
        logo: react,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "afsalahamed2025@gmail.com",
    link: "https://mailto:afsalahamed2025@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "linkedin",
    value: "afsal-ahamed-s-0b5775293",
    link: "https://www.linkedin.com/in/afsal-ahamed-s-0b5775293/",
    icon: messengericon,
    btnIcon: <RiLinkedinFill />,
    color: "rgb(64, 125, 255)",
  },
  {
    name: "WhatsApp",
    value: "+91 7708689622",
    link: "https://wa.me/917708689622",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/afsal12hash",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/afsal-ahamed-s-0b5775293/",
  },
  {
    name: "Email",
    icon: <AiTwotoneMail />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];

export const testimonials = [
  {
    avatar: profile3,
    name: "Samuel Eze",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile4,
    name: "Emmanuel Joseph",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile5,
    name: "Gloria Chiwendu",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile6,
    name: "Precious Stone",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
];
