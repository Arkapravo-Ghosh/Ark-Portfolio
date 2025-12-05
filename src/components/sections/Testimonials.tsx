"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { testimonials, Testimonial } from "@/configs/testimonials";
import ScrollFloat from "@/components/ScrollFloat";
import AnimatedContent from "@/components/AnimatedContent";
import { Quote } from "lucide-react";

const CHARACTER_LIMIT = 250;

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const isLongContent = testimonial.content.length > CHARACTER_LIMIT;

  return (
    <div className="cursor-none cursor-target p-6 bg-linear-to-br from-zinc-900 to-zinc-800 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 h-full flex flex-col">
      <Quote className="w-10 h-10 text-cyan-500/50 mb-4 shrink-0" />
      <div className="mb-6 grow">
        <div
          ref={contentRef}
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            maxHeight: isLongContent && !isExpanded ? "7.5em" : "none",
          }}
        >
          <p className="text-gray-300 italic">
            &quot;{testimonial.content}&quot;
          </p>
        </div>
        {isLongContent && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="cursor-none cursor-target text-cyan-500 hover:text-cyan-400 text-sm mt-2 transition-colors duration-200"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
      <div className="flex items-center gap-4 mt-auto">
        <Image
          src={testimonial.image}
          alt={`${testimonial.name} - ${testimonial.role} at ${testimonial.company}`}
          width={48}
          height={48}
          quality={85}
          loading="lazy"
          sizes="48px"
          className="w-12 h-12 shrink-0 rounded-full object-cover"
        />
        <div className="min-w-0">
          {testimonial.linkedinUrl ? (
            <a
              href={testimonial.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none cursor-target text-white font-semibold truncate block hover:text-cyan-400 transition-colors duration-200"
            >
              {testimonial.name}
            </a>
          ) : (
            <p className="text-white font-semibold truncate">
              {testimonial.name}
            </p>
          )}
          <p className="text-gray-500 text-sm truncate">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Testimonials
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
            What people say about working with me
          </p>
        </AnimatedContent>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedContent
              key={testimonial.id}
              distance={50}
              direction="vertical"
              reverse={false}
              initialOpacity={0}
              animateOpacity={true}
              scale={0.95}
              threshold={0.1}
              delay={index * 0.1}
            >
              <TestimonialCard testimonial={testimonial} />
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
