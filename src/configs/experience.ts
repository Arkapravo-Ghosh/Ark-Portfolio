export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  type: "Full-Time" | "Part-Time" | "Internship" | "Freelance" | "Contract";
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "wiyse",
    role: "Software Development Engineer",
    company: "Wiyse",
    type: "Full-Time",
    location: "Remote",
    startDate: "Dec 2025",
    endDate: "Present",
    description: [
      "Contributing to the development of projects using React, TypeScript, and Next.js for frontend development and FastAPI with SQLAlchemy for backend services",
      "Collaborating with cross-functional teams to design, develop, and deploy scalable web applications",
      "Implementing new features and optimizing existing functionalities to enhance user experience and performance",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "SQLAlchemy",
      "Python",
      "FastAPI",
    ],
  },
  {
    id: "iedc-intern",
    role: "Research And Development Intern (DevOps)",
    company: "Innovation and Entrepreneurship Development Cell (Dept. of CSE IoT, CS & BT), UEM, Kolkata",
    type: "Internship",
    location: "Hybrid",
    startDate: "Sep 2025",
    endDate: "Present",
    description: [
      "Managing and optimizing HPC infrastructure using Slurm Workload Manager for efficient job scheduling and resource allocation",
      "Implementing monitoring solutions with Prometheus.io and Grafana for real-time system observability and alerting",
      "Collaborating with research teams to streamline deployment workflows and improve computational resource utilization",
    ],
    technologies: [
      "Slurm",
      "Prometheus",
      "Grafana",
      "Linux",
      "Docker",
      "Kubernetes",
      "Bash",
    ],
  },
  {
    id: "goodfit",
    role: "Junior Software Engineer",
    company: "Goodfit",
    type: "Full-Time",
    location: "Remote",
    startDate: "Aug 2025",
    endDate: "Sep 2025",
    description: [
      "Delivered 6 roadmap features (45% of Q3 scope), increasing user engagement 15%",
      "Architected core React/Next.js modules (theming, data layer, reporting) with TypeScript, Tailwind CSS, PostgreSQL",
      "Reduced median page latency 18% and production defects per release 25% via profiling, refactoring, and structured peer reviews",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
  },
  {
    id: "predictgrowth",
    role: "Software Development Engineer",
    company: "PredictGrowth",
    type: "Full-Time",
    location: "Remote",
    startDate: "May 2025",
    endDate: "Aug 2025",
    description: [
      "Built multi-theme pitch-deck PDF export service (dynamic templating + asset pipeline), increasing customization usage 15%",
      "Led performance sprint (70% of tasks): optimized REST endpoints and SQL queries, improving workflow latency 10%",
      "Implemented async workers, batched DB access, and LRU caching; cut average response time 20% and boosted throughput 35%",
      "Integrated AWS (S3, EC2, CloudWatch) for resilience: 99.9% uptime and handled 3× traffic spikes without incident",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "AWS",
      "S3",
      "EC2",
      "CloudWatch",
      "SQL",
    ],
  },
  {
    id: "revmaxx",
    role: "Software Development Engineer",
    company: "RevMaxx",
    type: "Part-Time",
    location: "On-site",
    startDate: "Feb 2024",
    endDate: "May 2025",
    description: [
      "Designed backend architecture (auth, billing, onboarding) supporting 120% user growth and onboarding 5 enterprise clients; authored ~40% of core services",
      "Improved API and streaming performance 30% via indexing, query refactors, and WebSocket batching (–22% server CPU)",
      "Implemented authentication and RBAC (100% of protected endpoints) and reduced high/critical dependency vulnerabilities 80%",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "WebSocket",
      "MariaDB",
    ],
  },
  {
    id: "rad-media",
    role: "Software Development Engineer",
    company: "Rad Media Solutions",
    type: "Freelance",
    location: "Remote",
    startDate: "Sep 2024",
    endDate: "Nov 2024",
    description: [
      "Developed responsive web interfaces using Angular with SCSS for modern styling solutions",
      "Built and maintained client-facing web applications with focus on clean UI/UX and cross-browser compatibility",
      "Collaborated with design team to implement pixel-perfect layouts and interactive components",
    ],
    technologies: [
      "Angular",
      "SCSS",
      "CSS",
      "TypeScript",
      "HTML",
    ],
  },
  {
    id: "avinya-neurotech",
    role: "Software Development Engineer",
    company: "Avinya NeuroTech",
    type: "Freelance",
    location: "Remote",
    startDate: "Jul 2024",
    endDate: "Aug 2024",
    description: [
      "Developed backend services and APIs using FastAPI for healthcare/neurotech applications",
      "Integrated AWS services for cloud infrastructure and scalable deployment solutions",
      "Implemented secure data handling practices for sensitive medical/research data",
    ],
    technologies: [
      "FastAPI",
      "AWS",
      "Python",
      "PostgreSQL",
    ],
  },
  {
    id: "connect-ai",
    role: "Software Development Engineer",
    company: "Connect AI",
    type: "Freelance",
    location: "Remote",
    startDate: "Apr 2024",
    endDate: "May 2024",
    description: [
      "Built web application features using React.js for an AI-focused product",
      "Developed frontend components and integrated with backend APIs",
      "Contributed to improving user experience and application performance",
    ],
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "REST APIs",
    ],
  },
  {
    id: "pephub",
    role: "Software Development Engineer",
    company: "PepHub",
    type: "Freelance",
    location: "Remote",
    startDate: "Jun 2023",
    endDate: "Dec 2023",
    description: [
      "Developed full-stack web features and implemented DevSecOps practices for secure deployments",
      "Built and maintained web applications using modern JavaScript frameworks",
      "Set up CI/CD pipelines and implemented security best practices in the development workflow",
    ],
    technologies: [
      "JavaScript",
      "Node.js",
      "React",
      "Docker",
      "DevSecOps",
    ],
  },
];

export const volunteering = [
  {
    id: "hack4bengal-backend",
    role: "Backend Developer",
    organization: "Hack4Bengal",
    startDate: "Dec 2024",
    endDate: "Jul 2025",
    description:
      "Building the Backend of Hack4Bengal Season 4 as a part of the Backend Team",
  },
  {
    id: "gdg-devops-lead",
    role: "DevOps & Cloud Lead",
    organization: "GDG UEM Kolkata",
    startDate: "Oct 2024",
    endDate: "Oct 2025",
    description: "Leading DevOps and Cloud initiatives and organizing tech events",
  },
  {
    id: "hack4bengal-webdev",
    role: "Web Developer",
    organization: "Hack4Bengal",
    startDate: "Nov 2023",
    endDate: "Jun 2024",
    description:
      "Built the Website of Hack4Bengal Season 3 as a part of the Web Team",
  },
  {
    id: "ureckon-tech-lead",
    role: "Tech Lead",
    organization: "Ureckon, UEM Kolkata",
    startDate: "Jun 2024",
    endDate: "Mar 2025",
    description:
      "Built the website of Ureckon 2025 (U7) as the Tech Lead while coordinating with other related teams",
  },
  {
    id: "ureckon-webdev",
    role: "Web Developer",
    organization: "Ureckon, UEM Kolkata",
    startDate: "Dec 2023",
    endDate: "Feb 2024",
    description:
      "Built the Website of Ureckon 2024 (U6) and Building the Website of Ureckathon 2024 as a part of the Dev Team",
  },
  {
    id: "ureckon-designer",
    role: "UI/UX Designer",
    organization: "Ureckon, UEM Kolkata",
    startDate: "Nov 2023",
    endDate: "Feb 2024",
    description:
      "Designed the Website of Ureckon 2024 (U6) and Ureckathon 2024 as a part of the Design Team",
  },
  {
    id: "ureckon-coordinator",
    role: "Event Coordinator",
    organization: "Ureckon, UEM Kolkata",
    startDate: "Jan 2024",
    endDate: "Feb 2024",
    description:
      "Coordinated for Cyber Cipher Event (Cybersecurity CTF Competition) in Ureckon 2024",
  },
  {
    id: "ureckon-volunteer",
    role: "Volunteer",
    organization: "Ureckon, UEM Kolkata",
    startDate: "Oct 2022",
    endDate: "Feb 2023",
    description:
      "Helped with the Preparation and Management of Ureckon Innovation Challenge (UIC) 2023 along with others in the team",
  },
];
