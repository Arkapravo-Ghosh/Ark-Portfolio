import {
  Navbar,
  Hero,
  About,
  Projects,
  Experience,
  Education,
  Testimonials,
  Footer,
} from "@/components/sections";
import ScrollToSection from "@/components/ScrollToSection";

export default function Home() {
  return (
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
  );
}
