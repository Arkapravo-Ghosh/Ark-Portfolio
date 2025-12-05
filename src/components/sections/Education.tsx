"use client";

import { education } from "@/configs/education";
import ScrollFloat from "@/components/ScrollFloat";
import AnimatedContent from "@/components/AnimatedContent";
import { GraduationCap, MapPin, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Education
          </h2>
        </ScrollFloat>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <AnimatedContent
              key={edu.id}
              distance={50}
              direction="vertical"
              reverse={false}
              initialOpacity={0}
              animateOpacity={true}
              scale={0.95}
              threshold={0.2}
              delay={index * 0.1}
            >
              <div className="cursor-none cursor-target p-8 bg-linear-to-br from-zinc-900 to-zinc-800 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-cyan-500/20 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-400 text-lg font-medium">
                      {edu.field}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-xl text-white font-semibold">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-400">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                    <span>
                      {edu.startYear} -{" "}
                      {edu.endYear === "Expected"
                        ? "Expected 2026"
                        : edu.endYear}
                    </span>
                    {edu.gpa && (
                      <span className="text-cyan-400 font-medium">
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>

                {edu.specializations && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">
                      Specializations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.specializations.map((spec) => (
                        <span
                          key={spec}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {edu.achievements && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-500" />
                      Achievements & Activities
                    </h4>
                    <ul className="space-y-2 list-none">
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-400 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-yellow-500"
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
