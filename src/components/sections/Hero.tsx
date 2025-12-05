"use client";

import { personalInfo } from "@/configs/personal";
import { primarySocials } from "@/configs/socials";
import FloatingLines from "@/components/FloatingLines";
import TargetCursor from "@/components/TargetCursor";
import BlurText from "@/components/BlurText";
import DecryptedText from "@/components/DecryptedText";
import AnimatedContent from "@/components/AnimatedContent";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { LinkedInIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* TargetCursor - follows mouse and locks onto interactive elements */}
      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={2}
        hideDefaultCursor={true}
        hoverDuration={0.2}
        parallaxOn={true}
      />

      {/* FloatingLines Background */}
      <div className="absolute inset-0 z-0">
        <FloatingLines
          linesGradient={["#00FFFF", "#06B6D4", "#0EA5E9", "#22D3EE"]}
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[4, 6, 4]}
          lineDistance={[8, 6, 8]}
          animationSpeed={0.5}
          interactive={true}
          bendRadius={6}
          bendStrength={-0.4}
          parallax={true}
          parallaxStrength={0.15}
          mixBlendMode="screen"
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 z-1 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity={true}
          scale={0.9}
          threshold={0.1}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium">
              <DecryptedText
                text="Full Stack Developer & DevSecOps Engineer"
                speed={30}
                maxIterations={15}
                sequential={true}
                revealDirection="start"
                animateOn="view"
                className="text-cyan-300"
              />
            </span>
          </div>
        </AnimatedContent>

        <BlurText
          text={personalInfo.name}
          delay={100}
          animateBy="words"
          direction="top"
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        />

        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.1}
        >
          <p className="text-xl md:text-2xl text-gray-200 mb-4 font-mono">
            &quot;{personalInfo.tagline}&quot;
          </p>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Building scalable web applications and secure cloud infrastructure
          </p>
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
          <div className="flex items-center justify-center gap-4 mb-12">
            {primarySocials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-none cursor-target p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
              >
                {social.id === "github" && (
                  <SiGithub className="w-6 h-6 text-white" />
                )}
                {social.id === "linkedin" && (
                  <LinkedInIcon className="w-6 h-6 text-white" />
                )}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none cursor-target px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              View Resume
            </a>
          </div>
        </AnimatedContent>

        {/* Scroll Indicator */}
        <AnimatedContent
          distance={20}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.1}
        >
          <button
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              window.history.pushState(null, "", "/about");
            }}
            className="cursor-none cursor-target inline-flex flex-col items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <span className="text-sm">Scroll to explore</span>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </AnimatedContent>
      </div>
    </section>
  );
}
