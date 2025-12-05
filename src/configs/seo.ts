import { personalInfo } from "./personal";

export const siteConfig = {
  name: personalInfo.name,
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: `Portfolio of ${personalInfo.name} - ${personalInfo.title} specializing in React, Next.js, Node.js, Python, Docker, Kubernetes, and Cloud technologies. Based in ${personalInfo.location}.`,
  url: personalInfo.website,
  ogImage: `${personalInfo.website}/og-image.png`,
  links: {
    github: "https://github.com/Arkapravo-Ghosh",
    linkedin: "https://www.linkedin.com/in/arkapravo-ghosh/",
    twitter: "https://twitter.com/ArkapravoGhosh1",
  },
  creator: personalInfo.name,
  keywords: [
    // Primary keywords
    "Full Stack Developer",
    "DevSecOps Engineer",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    // Technologies
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Python",
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "Azure",
    "CI/CD",
    "DevOps",
    // Location-based
    "Developer in Kolkata",
    "Developer in India",
    "Indian Software Engineer",
    // Personal brand
    personalInfo.name,
    "Arkapravo",
    "Arkapravo Ghosh Portfolio",
  ],
  authors: [
    {
      name: personalInfo.name,
      url: personalInfo.website,
    },
  ],
  locale: "en_US",
  type: "website" as const,
};

// Structured data for JSON-LD
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  url: personalInfo.website,
  email: personalInfo.email,
  jobTitle: personalInfo.title,
  description: personalInfo.bio,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "India",
  },
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin,
    siteConfig.links.twitter,
  ],
  knowsAbout: [
    "Full Stack Development",
    "DevSecOps",
    "Cloud Computing",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Docker",
    "Kubernetes",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  author: {
    "@type": "Person",
    name: personalInfo.name,
  },
};

// Page-specific metadata
export const pageMetadata = {
  home: {
    title: siteConfig.title,
    description: siteConfig.description,
  },
  about: {
    title: `About | ${personalInfo.name}`,
    description: `Learn more about ${personalInfo.name} - ${personalInfo.title}. ${personalInfo.bio.substring(0, 150)}...`,
  },
  projects: {
    title: `Projects | ${personalInfo.name}`,
    description: `Explore the portfolio of projects by ${personalInfo.name}. Full stack applications, open source contributions, and more.`,
  },
  experience: {
    title: `Experience | ${personalInfo.name}`,
    description: `Professional experience and work history of ${personalInfo.name}. ${personalInfo.title} with expertise in modern web technologies.`,
  },
  education: {
    title: `Education | ${personalInfo.name}`,
    description: `Educational background of ${personalInfo.name}. B.Tech in Computer Science with specializations in IoT, Cybersecurity, and Blockchain.`,
  },
  testimonials: {
    title: `Testimonials | ${personalInfo.name}`,
    description: `Read what colleagues and clients say about working with ${personalInfo.name}. Testimonials and recommendations from industry professionals.`,
  },
};
