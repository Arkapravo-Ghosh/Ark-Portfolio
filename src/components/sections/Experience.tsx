"use client";

import { experiences, volunteering } from "@/configs/experience";
import ScrollFloat from "@/components/ScrollFloat";
import AnimatedContent from "@/components/AnimatedContent";
import StarBorder from "@/components/StarBorder";
import { Briefcase, Heart, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Experience
          </h2>
        </ScrollFloat>

        {/* Work Experience */}
        <div className="mb-16">
          <AnimatedContent
            distance={30}
            direction="vertical"
            reverse={false}
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.1}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-cyan-500" />
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>
          </AnimatedContent>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <AnimatedContent
                key={exp.id}
                distance={50}
                direction="horizontal"
                reverse={index % 2 === 1}
                initialOpacity={0}
                animateOpacity={true}
                scale={0.95}
                threshold={0.1}
                delay={index * 0.1}
              >
                <StarBorder
                  as="div"
                  color="cyan"
                  speed="5s"
                  className="cursor-none cursor-target w-full"
                >
                  <div className="p-6 bg-zinc-900/50">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="text-left">
                        <h4 className="text-xl font-bold text-white text-left">
                          {exp.role}
                        </h4>
                        <p className="text-cyan-400 font-medium text-left">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full mb-2">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          {exp.startDate} - {exp.endDate}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4 text-left">
                      {exp.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-gray-400 flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 shrink-0"></span>
                          <span className="text-left">{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </StarBorder>
              </AnimatedContent>
            ))}
          </div>
        </div>

        {/* Volunteering */}
        <div>
          <AnimatedContent
            distance={30}
            direction="vertical"
            reverse={false}
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.1}
          >
            <div className="flex items-center gap-3 mb-8">
              <Heart className="w-6 h-6 text-teal-500" />
              <h3 className="text-2xl font-bold text-white">Volunteering</h3>
            </div>
          </AnimatedContent>

          <div className="grid md:grid-cols-2 gap-4">
            {volunteering.map((vol, index) => (
              <AnimatedContent
                key={vol.id}
                distance={30}
                direction="vertical"
                reverse={false}
                initialOpacity={0}
                animateOpacity={true}
                scale={0.95}
                threshold={0.1}
                delay={index * 0.05}
                className="h-full"
              >
                <div className="cursor-none cursor-target h-full p-4 bg-white/5 border border-white/10 rounded-xl hover:border-teal-500/50 transition-all duration-300 flex flex-col">
                  <h4 className="text-lg font-semibold text-white">
                    {vol.role}
                  </h4>
                  <p className="text-teal-400 text-sm mb-2">
                    {vol.organization}
                  </p>
                  <p className="text-gray-500 text-xs mb-2">
                    {vol.startDate} - {vol.endDate}
                  </p>
                  <p className="text-gray-400 text-sm">{vol.description}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
