"use client";

import { personalInfo } from "@/configs/personal";
import { skillCategories } from "@/configs/skills";
import ScrollFloat from "@/components/ScrollFloat";
import AnimatedContent from "@/components/AnimatedContent";
import ShinyText from "@/components/ShinyText";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            About Me
          </h2>
        </ScrollFloat>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={true}
            initialOpacity={0}
            animateOpacity={true}
            scale={0.9}
            threshold={0.2}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                <Image
                  src={personalInfo.avatar}
                  alt={`${personalInfo.name} - ${personalInfo.title} profile photo`}
                  width={320}
                  height={320}
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 256px, 320px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAHhAAAgICAwEBAAAAAAAAAAAAAQIDEQQABRIhMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAMBAQEAAAAAAAAAAAAAAAABAgMRIf/aAAwDAQACEEMPQD8Av8nfbpnGIkxhAgKyVIJPw6PnWDnOfqVfLoyx1Z//2Q=="
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-linear-to-br from-cyan-600 to-teal-600 rounded-2xl -z-10 blur-2xl opacity-50" />
            </div>
          </AnimatedContent>

          {/* Bio */}
          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={false}
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.2}
          >
            <div>
              <ShinyText
                text={personalInfo.title}
                disabled={false}
                speed={3}
                className="text-2xl font-semibold mb-4 block"
              />
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <div className="flex flex-wrap gap-3">
                {personalInfo.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* Skills */}
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.1}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Skills & Technologies
          </h3>
        </AnimatedContent>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <AnimatedContent
              key={category.id}
              distance={50}
              direction="vertical"
              reverse={false}
              initialOpacity={0}
              animateOpacity={true}
              scale={0.95}
              threshold={0.1}
              delay={catIndex * 0.1}
              className="h-full"
            >
              <div className="cursor-none cursor-target h-full p-6 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col">
                <h4 className="text-lg font-semibold text-white mb-4">
                  {category.name}
                </h4>
                <div className="flex flex-wrap gap-2 content-start">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-cyan-500/10 text-cyan-300 text-sm rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
