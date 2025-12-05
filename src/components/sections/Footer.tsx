"use client";

import { personalInfo } from "@/configs/personal";
import { socials } from "@/configs/socials";
import AnimatedContent from "@/components/AnimatedContent";
import { ExternalLink } from "lucide-react";
import { SiGithub, SiX, SiInstagram, SiFacebook } from "@icons-pack/react-simple-icons";
import { LinkedInIcon } from "@/components/icons";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } =
  {
    github: SiGithub,
    linkedin: LinkedInIcon,
    twitter: SiX,
    instagram: SiInstagram,
    facebook: SiFacebook,
    orcid: ExternalLink,
  };

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-zinc-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent
          distance={30}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.1}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Let&apos;s Connect
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>
          </div>
        </AnimatedContent>

        <AnimatedContent
          distance={30}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.1}
        >
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {socials.map((social) => {
              const Icon = iconMap[social.icon] || ExternalLink;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-none cursor-target group relative inline-flex items-center gap-2 px-4 py-2.5 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  {/* Gradient background on hover */}
                  <span className="absolute inset-0 bg-linear-to-r from-cyan-600/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Shine effect */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/10 to-transparent" />

                  <Icon className="relative w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  <span className="relative text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </AnimatedContent>

        <AnimatedContent
          distance={20}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.1}
        >
          <div className="text-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="cursor-none cursor-target text-cyan-400 hover:text-cyan-300 transition-colors mb-4 inline-block"
            >
              {personalInfo.email}
            </a>
            <p className="text-gray-500 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Built with Next.js, Tailwind CSS & React Bits
            </p>
          </div>
        </AnimatedContent>
      </div>
    </footer>
  );
}
