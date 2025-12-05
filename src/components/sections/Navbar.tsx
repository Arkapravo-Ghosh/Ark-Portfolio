"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { navItems } from "@/configs/navigation";
import { ExternalLink, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
      if (external) return;

      e.preventDefault();

      // Dispatch event to pause scroll spy
      window.dispatchEvent(new CustomEvent("navclick"));

      // Handle home/root specially - scroll to intro section
      if (href === "/") {
        const introElement = document.getElementById("intro");
        if (introElement) {
          introElement.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        window.history.replaceState(null, "", href);
        return;
      }

      // Extract the section id from the href (e.g., "/about" -> "about")
      const sectionId = href.replace("/", "");
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Update the URL without triggering navigation
        window.history.replaceState(null, "", href);
      }
    },
    []
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/40 backdrop-blur-md border-b border-white/10"
          : "bg-black/40 backdrop-blur-md border-b border-white/10 md:bg-transparent md:backdrop-blur-none md:border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - using # as href to avoid lint warning, actual navigation handled by onClick */}
          <a
            href="#intro"
            onClick={(e) => handleNavClick(e, "/")}
            className="cursor-none cursor-target hover:opacity-80 transition-opacity"
          >
            <Image
              src="/Ark_Logo.svg"
              alt="Arkapravo Ghosh - Portfolio Logo"
              width={40}
              height={40}
              priority
              quality={100}
              sizes="40px"
              className="rounded-sm"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.external)}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="cursor-none cursor-target px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 flex items-center gap-1"
              >
                {item.label}
                {item.external && <ExternalLink className="w-3 h-3" />}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="cursor-none cursor-target md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.href, item.external);
                  setIsMobileMenuOpen(false);
                }}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="cursor-none cursor-target flex px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 items-center gap-2"
              >
                {item.label}
                {item.external && <ExternalLink className="w-4 h-4" />}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
