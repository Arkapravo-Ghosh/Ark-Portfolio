export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming",
    skills: ["JavaScript", "TypeScript", "Python", "Bash/Shell"],
  },
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "React Native",
      "SCSS",
      "Tailwind CSS",
      "Responsive Design",
      "Figma",
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSocket"],
  },
  {
    id: "database",
    name: "Databases",
    skills: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB"],
  },
  {
    id: "devops",
    name: "DevOps",
    skills: [
      "Linux",
      "Git",
      "GitHub",
      "Docker",
      "Docker Compose",
      "Networking",
      "Jenkins",
      "Kubernetes",
      "Grafana",
      "Prometheus",
      "Ansible",
      "CI/CD",
    ],
  },
  {
    id: "cloud",
    name: "Cloud",
    skills: ["AWS", "GCP", "Azure", "DigitalOcean"],
  },
  {
    id: "iot",
    name: "IoT",
    skills: ["Arduino", "Raspberry Pi", "Node-RED"],
  },
];

export const allSkills = skillCategories.flatMap((cat) => cat.skills);
