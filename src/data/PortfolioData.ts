import type {
  Company,
  Project,
  SkillCategory,
  SocialLink,
} from "./../types/portfolio";

export const companies: Company[] = [
  { id: 1, name: "NOKIA", description: "Global Technology Company" },
  {
    id: 2,
    name: "XPERIA TECHNOLOGIES",
    description: "Tech Solutions Provider",
  },
  {
    id: 3,
    name: "ICS GROUP",
    description: "Information & Communication Services",
  },
  { id: 4, name: "COSMO SKILLS", description: "EdTech Platform" },
  { id: 5, name: "SHREE CREATIONS", description: "Creative Agency" },
  { id: 6, name: "NAVDEEP OPTICLES", description: "Optical Retail" },
  {
    id: 7,
    name: "CHRISTIAN HOUSE INDIA",
    description: "Non-Profit Organization",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Project Orion - AI Startup Core Product",
    description: "Core product development for an AI startup",
    technologies: ["React.js", "Next.js", "Node.js", "Tailwind CSS"],
    achievements: [
      "Improved application responsiveness by 20%",
      "Increased development speed by 30% using reusable components",
    ],
  },
  {
    id: 2,
    title: "Analytics & Report Automation Suite",
    description: "A suite for analytics and report automation at Nokia",
    technologies: ["Python", "Hive", "Linux", "SSH", "SQL"],
    achievements: [
      "Reduced reporting turnaround time by 80%",
      "Improved data processing efficiency by 60% for datasets >1M entries",
    ],
  },
  {
    id: 3,
    title: "ClickHouse Deployment on Kubernetes",
    description: "Infrastructure project for deploying ClickHouse",
    technologies: ["Kubernetes", "Docker", "Linode", "ClickHouse"],
    achievements: [
      "Optimized deployment times by 30%",
      "Deployed workflows for 10+ containerized analytics projects",
    ],
  },
  {
    id: 4,
    title: "Spring Boot API Modernization",
    description: "Modernized Spring Boot API aggregator with Swagger 3",
    technologies: ["Spring Boot", "Java", "Swagger", "Microservices"],
    achievements: [
      "Upgraded dependencies and resolved security issues",
      "Expanded functionality while supporting existing endpoints",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Tailwind",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "Java", "Spring Boot", "Express.js"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "ClickHouse", "MongoDB", "HiveQL", "SQL"],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "Kubernetes",
      "Docker",
      "AWS",
      "DigitalOcean",
      "Linux",
      "SSH",
      "Jenkins",
    ],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Grafana", "LaTeX", "Jira", "Nginx", "Cucumber"],
  },
  {
    category: "Soft Skills",
    skills: [
      "Mentorship",
      "Teaching",
      "Project Planning",
      "Team Collaboration",
      "Strategic Planning",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { platform: "Telegram", url: "https://t.me/sibansal", icon: "📱" },
  { platform: "Twitter", url: "https://twitter.com/sibansal", icon: "🐦" },
  { platform: "GitHub", url: "https://github.com/sibansal", icon: "🐙" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/sibansal", icon: "💼" },
];

export const personalInfo = {
  name: "Simran Bansal",
  title: "Frontend-Focused Full-Stack Engineer",
  email: "hireme@sibansal.dev",
  phone: "+91 7527008358",
  location: "Chandigarh, India",
};
