"use client";

import { featuredProjects } from "@/configs/projects";
import ScrollFloat from "@/components/ScrollFloat";
import SpotlightCard from "@/components/SpotlightCard";
import AnimatedContent from "@/components/AnimatedContent";
import { ExternalLink, Star, GitFork } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Featured Projects
          </h2>
        </ScrollFloat>

        <AnimatedContent
          distance={30}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.1}
        >
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            A collection of projects I&apos;ve worked on, from open-source tools
            to full-stack applications.
          </p>
        </AnimatedContent>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <AnimatedContent
              key={project.id}
              distance={50}
              direction="vertical"
              reverse={false}
              initialOpacity={0}
              animateOpacity={true}
              scale={0.95}
              threshold={0.1}
              delay={index * 0.1}
            >
              <SpotlightCard
                className="cursor-none cursor-target h-full hover:border-cyan-500/30 transition-colors duration-300"
                spotlightColor="rgba(6, 182, 212, 0.2)"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 shrink-0">
                      {project.stars && (
                        <span className="flex items-center gap-1 text-yellow-500 text-sm">
                          <Star className="w-4 h-4 fill-current" />
                          {project.stars}
                        </span>
                      )}
                      {project.forks && (
                        <span className="flex items-center gap-1 text-gray-400 text-sm">
                          <GitFork className="w-4 h-4" />
                          {project.forks}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5 grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-cyan-500/10 text-cyan-300 text-xs font-medium rounded-md border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-auto pt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-none cursor-target flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-lg transition-all duration-200"
                      >
                        <SiGithub className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-none cursor-target flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-lg transition-all duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">View</span>
                      </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>

        <AnimatedContent
          distance={30}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.1}
        >
          <div className="text-center mt-12">
            <a
              href="https://github.com/Arkapravo-Ghosh?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none cursor-target inline-flex items-center gap-2 px-6 py-3 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-full transition-all duration-200"
            >
              <SiGithub className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
