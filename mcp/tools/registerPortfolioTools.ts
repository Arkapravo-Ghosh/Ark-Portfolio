import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";

import {
  allSkills,
  education,
  experiences,
  featuredProjects,
  navItems,
  pageMetadata,
  personJsonLd,
  personalInfo,
  portfolioData,
  primarySocials,
  projects,
  siteConfig,
  skillCategories,
  socials,
  testimonials,
  volunteering,
  websiteJsonLd,
} from "../config/portfolioData.js";

type ToolDefinition = {
  name: string;
  description: string;
  resolve: () => unknown;
};

function toTextResult(data: unknown): CallToolResult {
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data, null, 2),
      },
    ],
  };
}

const TOOL_DEFINITIONS: ToolDefinition[] = [
  {
    name: "get_portfolio_overview",
    description:
      "Get a concise summary of Arkapravo Ghosh's portfolio profile and data counts.",
    resolve: () => ({
      name: personalInfo.name,
      title: personalInfo.title,
      location: personalInfo.location,
      website: personalInfo.website,
      resumeUrl: personalInfo.resumeUrl,
      email: personalInfo.email,
      highlights: personalInfo.highlights,
      counts: {
        experiences: experiences.length,
        volunteering: volunteering.length,
        education: education.length,
        projects: projects.length,
        featuredProjects: featuredProjects.length,
        skillCategories: skillCategories.length,
        skills: allSkills.length,
        socials: socials.length,
        testimonials: testimonials.length,
      },
    }),
  },
  {
    name: "get_personal_info",
    description: "Fetch personal profile information from configs/personal.ts.",
    resolve: () => personalInfo,
  },
  {
    name: "get_experience",
    description:
      "Fetch work experience and volunteering information from configs/experience.ts.",
    resolve: () => ({ experiences, volunteering }),
  },
  {
    name: "get_education",
    description: "Fetch education data from configs/education.ts.",
    resolve: () => education,
  },
  {
    name: "get_projects",
    description: "Fetch project data from configs/projects.ts.",
    resolve: () => ({ projects, featuredProjects }),
  },
  {
    name: "get_skills",
    description: "Fetch skills data from configs/skills.ts.",
    resolve: () => ({ skillCategories, allSkills }),
  },
  {
    name: "get_social_links",
    description: "Fetch social links data from configs/socials.ts.",
    resolve: () => ({ socials, primarySocials }),
  },
  {
    name: "get_testimonials",
    description: "Fetch testimonials from configs/testimonials.ts.",
    resolve: () => testimonials,
  },
  {
    name: "get_navigation",
    description: "Fetch navigation items from configs/navigation.ts.",
    resolve: () => navItems,
  },
  {
    name: "get_seo_data",
    description: "Fetch SEO and JSON-LD data from configs/seo.ts for portfolio pages.",
    resolve: () => ({
      siteConfig,
      personJsonLd,
      websiteJsonLd,
      pageMetadata,
    }),
  },
  {
    name: "get_full_portfolio_data",
    description: "Fetch all portfolio data combined from the configs directory.",
    resolve: () => portfolioData,
  },
];

export function registerPortfolioTools(server: McpServer): void {
  for (const tool of TOOL_DEFINITIONS) {
    server.registerTool(tool.name, { description: tool.description }, async () =>
      toTextResult(tool.resolve())
    );
  }
}
