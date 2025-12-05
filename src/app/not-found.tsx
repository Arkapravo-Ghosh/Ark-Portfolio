"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import DecryptedText from "@/components/DecryptedText";
import GradientText from "@/components/GradientText";
import FloatingLines from "@/components/FloatingLines";
import AnimatedContent from "@/components/AnimatedContent";
import ShinyText from "@/components/ShinyText";
import TargetCursor from "@/components/TargetCursor";

// Helper to prevent hydration mismatch
const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function NotFound() {
  const isClient = useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot);

  if (!isClient) {
    return null;
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* TargetCursor */}
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
          linesGradient={["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"]}
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[3, 4, 3]}
          lineDistance={[10, 8, 10]}
          animationSpeed={0.3}
          interactive={true}
          bendRadius={8}
          bendStrength={-0.3}
          parallax={true}
          parallaxStrength={0.1}
          mixBlendMode="screen"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-1 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={true}
          initialOpacity={0}
          animateOpacity={true}
          scale={0.9}
          threshold={0.1}
        >
          <GradientText
            colors={["#FF6B6B", "#4ECDC4", "#45B7D1", "#FF6B6B"]}
            animationSpeed={6}
            className="text-8xl md:text-9xl font-bold mb-4"
          >
            404
          </GradientText>
        </AnimatedContent>

        <AnimatedContent
          distance={80}
          direction="vertical"
          reverse={true}
          initialOpacity={0}
          animateOpacity={true}
          scale={0.95}
          threshold={0.1}
          delay={0.1}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <DecryptedText
              text="Page Not Found"
              speed={40}
              maxIterations={15}
              animateOn="view"
              revealDirection="center"
              className="text-white"
            />
          </h1>
        </AnimatedContent>

        <AnimatedContent
          distance={60}
          direction="vertical"
          reverse={true}
          initialOpacity={0}
          animateOpacity={true}
          scale={0.95}
          threshold={0.1}
          delay={0.2}
        >
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-md mx-auto">
            <ShinyText
              text="Oops! The page you're looking for doesn't exist or has been moved."
              speed={4}
              className="text-gray-400"
            />
          </p>
        </AnimatedContent>

        <AnimatedContent
          distance={40}
          direction="vertical"
          reverse={true}
          initialOpacity={0}
          animateOpacity={true}
          scale={0.95}
          threshold={0.1}
          delay={0.3}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="cursor-none cursor-target group relative px-8 py-3 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <span className="relative z-10">Go Home</span>
              <div className="absolute inset-0 bg-linear-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <button
              onClick={() => window.history.back()}
              className="cursor-none cursor-target px-8 py-3 border border-white/20 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Go Back
            </button>
          </div>
        </AnimatedContent>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -z-10" />
      </div>
    </main>
  );
}
