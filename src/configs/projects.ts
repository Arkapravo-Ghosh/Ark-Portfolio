export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  stars?: number;
  forks?: number;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "totalscribe",
    title: "TotalScribe",
    description:
      "AI-powered medical SOAP note generation from patient audio using OpenAI Whisper Large for transcription and Mistral-7B Instruct for structured note generation.",
    longDescription:
      "Full-stack app (Next.js + TypeScript frontend, FastAPI backend) with SSE real-time progress and enterprise-grade security.",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "OpenAI Whisper",
      "Mistral-7B",
      "SSE",
    ],
    githubUrl: "https://github.com/Arkapravo-Ghosh/totalscribe",
    featured: true,
  },
  {
    id: "traintrack",
    title: "TrainTrack",
    description:
      "FastAPI service that fetches Indian Railways train running status from National Train Enquiry System (NTES) and converts upstream data into a clean JSON response.",
    longDescription:
      "Lightweight API wrapper with best-effort parsing for Arrived/Departed events (station, code, timestamps, delay) and optional time-window filtering; includes interactive Swagger docs.",
    technologies: [
      "Python",
      "FastAPI",
      "Web Scraping",
    ],
    githubUrl: "https://github.com/Arkapravo-Ghosh/TrainTrack",
    featured: true,
  },
  {
    id: "simple-mailer",
    title: "Simple Mailer",
    description:
      "Minimal mailing-list manager that stores recipients, generates HTML email messages, and sends broadcasts via SMTP.",
    longDescription:
      "Express + TypeScript API with protected mailing-list endpoints (API key) and public unsubscribe links backed by per-recipient UUIDs; supports fire-and-forget broadcast sending and Dockerized deployment.",
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Nodemailer",
      "SMTP",
      "Docker",
    ],
    githubUrl: "https://github.com/Arkapravo-Ghosh/Simple-Mailer",
    featured: true,
  },
  {
    id: "satyameba",
    title: "SATYAMEBA — HPC / Supercomputer Cluster",
    description:
      "Experience building the SATYAMEBA high-performance computing cluster at UEM Kolkata — an academic supercomputer supporting AI research and in-house LLMs.",
    longDescription:
      "Involved in cluster setup, orchestration, and performance tuning for distributed AI workloads.",
    technologies: [
      "HPC",
      "Linux",
      "Cluster Computing",
      "AI/ML",
      "LLM",
    ],
    liveUrl:
      "https://www.linkedin.com/posts/arkapravo-ghosh_satyameba-intel-famebot-activity-7383830013416108032-9x59",
    featured: true,
  },
  {
    id: "speech-to-text",
    title: "Speech To Text API",
    description:
      "RESTful API for speech-to-text conversion using Python, FastAPI, and OpenAI Whisper v3 via HuggingFace.",
    longDescription:
      "Features audio preprocessing, async processing, and JSON outputs.",
    technologies: ["Python", "FastAPI", "OpenAI Whisper", "HuggingFace"],
    githubUrl: "https://github.com/Arkapravo-Ghosh/speech-to-text",
    featured: true,
  },
  {
    id: "icd10-scrapper",
    title: "ICD-10 Medical Coding Scraper",
    description:
      "TypeScript-based scraper using Node.js and Cheerio to extract ICD-10 codes into structured JSON for healthcare integrations.",
    technologies: ["TypeScript", "Node.js", "Cheerio", "Web Scraping"],
    githubUrl: "https://github.com/Arkapravo-Ghosh/icd10-scrapper",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
