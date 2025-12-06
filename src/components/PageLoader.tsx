"use client";

import { motion } from "motion/react";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-2.5 opacity-50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-linear-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 blur-3xl animate-pulse" />
        </div>
      </div>

      {/* Loader content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo/Name with animated text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Arkapravo Ghosh
          </h1>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            Loading Portfolio...
          </p>
        </motion.div>

        {/* Spinning loader */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-gray-800" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-500 border-r-cyan-400 animate-spin" />
        </div>

        {/* Animated dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-white/50"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
