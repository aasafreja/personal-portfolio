import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiTailwindcss,
    SiHtml5,
    SiCss3,
    SiGit,
    SiDocker,
    SiPostman,
    SiApachesuperset,
    SiMicrostrategy,
    SiGraphql,
    SiSocketdotio,
    SiGithubactions
} from "react-icons/si";


import { BiLogoPostgresql } from "react-icons/bi";
import SnapNotes from '../img/full-note.png'
import BeanysBakery from '../img/bbakery-demo.gif'
import kanbanDemo from '../img/kanban-demo.gif'
import spexsDemo from '../img/demo-spexs.gif'



export const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#portfolio" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export const experiences = [
    {
        role: "Full Stack Developer",
        company: "Freelance / Personal Projects",
        period: "Mar 2024 - Present",
        type: "Part-time",
        description: [
            "Building full-stack web applications using MERN/PERN stack (MongoDB/PostregSql, Express, React, Node.js)",
            "Developing responsive and accessible user interfaces with React and Tailwind CSS",
            "Creating RESTful APIs and implementing authentication with JWT",
            "Continuously learning modern web development practices and frameworks",
        ],
        skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "Tailwind CSS", 'Git'],
    },
    {
        role: "BI Developer",
        company: "Visma",
        period: "Mar 2021 - Dec 2025",
        type: "Full-time",
        description: [
            "Developed and maintained complex ETL processes",
            "Created interactive Power BI/ Apache Superset/ Microstrategy dashboards",
            "Designed and implemented data pipelines",
            "Translate business needs to technical specifications"],
        skills: ["SQL", "Power BI", "ETL", "MicroStrategy", "Data Modeling", "Database Architecure"],
    },


];

export const education = [
    {
        degree: "Full Stack Web Development",
        institution: "Codecademy Online Courses",
        period: "2023-2025",
        description: "Comprehensive training in MERN stack development",
    },
    {
        degree: "Bachelor's Degree",
        institution: "Stockholm School of Economics",
        period: "2016 - 2019",
        description: "Bachelor of Science (BSc) in Business and Economics",
    },
];

export const projects = [
    {
        title: "SnapNotes - Note Taking App",
        description: "JWT-authenticated notes app with CRUD functionality and cloud image storage, and comprehensive Playwright E2E tests.",
        tags: ["React", "Node.js", "PostgreSQL (Neon)", "Supabase cloud storage", "Playwright E2E tests", "Material UI", 'JWT'],
        github: "https://github.com/aasafreja/note-taking-app",
        demo: "https://snap-notes-web.netlify.app/",
        image: SnapNotes
    },

    {
        title: "Beany's Bakery — Order Landing Page",
        description: "Commercial landing page for a home-based bakery with a custom cake order system, interactive builder, and reliable serverless form notifications.",
        tags: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Netlify Functions",
            "Telegram Bot API",
            "Formspree"
        ],
        github: "https://github.com/aasafreja/bbakery-website",
        demo: "https://beanysbakery.lv/",
        image: BeanysBakery
    },
    {
        title: "SPEXS - Landing Page",
        description: "Landing page for SPĒXS, showcasing management consulting services for fitness businesses. Focused on designing a clean, responsive, and user-friendly UI.",
        tags: ["React", "Vite", "Tailwind CSS", "Netlify", 'TypeScript'],
        github: "#",
        demo: "https://spexs.eu/",
        image: spexsDemo
    },
    {
        title: "Kanban Board",
        description: "Full-Stack JavaScript application featuring CRUD operations for boards and tasks, with drag-and-drop support and dynamic UI updates. Utilizes JSON persistence to simulate database actions.",
        tags: ["Express", "Vanilla JS", "REST APIs"],
        github: "https://github.com/aasafreja/kanban-board",
        demo: "#",
        image: kanbanDemo
    }

];


export const certificates = [
    {
        title: "Full Stack Web Development",
        issuer: "Codecademy",
        year: "2025",
        link: "https://drive.google.com/file/d/1UzT758qUmdaTgFzB1VUs-mAwdGtRKSVC/view",
    },
    {
        title: "TypeScript",
        issuer: "Codecademy",
        year: "2025",
        link: "https://drive.google.com/file/d/1CAVASY_RohvpAGzVpvVOO5hv45rvpnky/view",
    },
    {
        title: "Node.js",
        issuer: "Codecademy",
        year: "2025",
        link: "https://drive.google.com/file/d/1WlbG0MX86xKGoVIWBTOio7zJXnylePIx/view",
    },
    {
        title: "Python Fundamentals",
        issuer: "Codecademy",
        year: "2025",
        link: "https://drive.google.com/file/d/1f4iDmTOy4SAzTIsry7gM_lHKWh2ceofJ/view",
    },
];

export const techStack = {
    Frontend: [
        {
            name: "React",
            icon: SiReact,
            color: "#61DAFB",
        },
        {
            name: "JavaScript",
            icon: SiJavascript,
            color: "#F7DF1E",
        },
        {
            name: "TypeScript",
            icon: SiTypescript,
            color: "#3178C6",
        },
        {
            name: "Tailwind CSS",
            icon: SiTailwindcss,
            color: "#38BDF8",
        },
        {
            name: "HTML",
            icon: SiHtml5,
            color: "#E34F26",
        },
        {
            name: "CSS",
            icon: SiCss3,
            color: "#1572B6",
        },
    ],

    Backend: [
        {
            name: "Node.js",
            icon: SiNodedotjs,
            color: "#339933",
        },
        {
            name: "Express",
            icon: SiExpress,
            color: "#000000",
        },
        {
            name: "GraphQL",
            icon: SiGraphql,
            color: "#E10098",
        },
        {
            name: "MongoDB",
            icon: SiMongodb,
            color: "#47A248",
        },
        {
            name: "WebSockets",
            icon: SiSocketdotio,
            color: "#010101",
        },
        {
            name: "PostgreSQL",
            icon: BiLogoPostgresql,
            color: "#4169E1",
        },
    ],

    Tools: [
        {
            name: "Git",
            icon: SiGit,
            color: "#F05032",
        },
        {
            name: "GitHub Actions",
            icon: SiGithubactions,
            color: "#2088FF",
        },
        {
            name: "Docker",
            icon: SiDocker,
            color: "#2496ED",
        },
        {
            name: "Postman",
            icon: SiPostman,
            color: "#FF6C37",
        },
    ],

    "Business Intelligence": [
        {
            name: "Superset",
            icon: SiApachesuperset,
            color: "#20A6C9",
        },
        {
            name: "MicroStrategy",
            icon: SiMicrostrategy,
            color: "#D9232E",
        },
    ],
};
