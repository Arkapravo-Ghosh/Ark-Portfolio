import { Suspense } from "react";
import dynamic from "next/dynamic";
import PageLoader from "@/components/PageLoader";
import ScrollToSection from "@/components/ScrollToSection";

// Eagerly load Navbar for immediate visibility
import { Navbar } from "@/components/sections";

// Lazy load heavy components
const Hero = dynamic(() => import("@/components/sections/Hero"), {
  ssr: true,
});

const About = dynamic(() => import("@/components/sections/About"), {
  ssr: true,
});

const Projects = dynamic(() => import("@/components/sections/Projects"), {
  ssr: true,
});

const Experience = dynamic(() => import("@/components/sections/Experience"), {
  ssr: true,
});

const Education = dynamic(() => import("@/components/sections/Education"), {
  ssr: true,
});

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  {
    ssr: true,
  }
);

const Footer = dynamic(() => import("@/components/sections/Footer"), {
  ssr: true,
});

export default function Home() {
  return (
    <Suspense fallback={<PageLoader />}>
      <main className="bg-black">
        <ScrollToSection />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Testimonials />
        <Footer />
      </main>
    </Suspense>
  );
}
