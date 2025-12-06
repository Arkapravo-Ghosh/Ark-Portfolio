"use client";

import { useEffect } from "react";

// Section IDs in order of appearance on the page
const SECTION_IDS = ["intro", "about", "projects", "experience", "education", "testimonials"];

export default function ScrollToSection() {
  useEffect(() => {
    const scrollToSection = () => {
      // Extract the section id from the pathname (e.g., "/about" -> "about")
      const sectionId = window.location.pathname.replace("/", "");

      if (sectionId && sectionId !== "" && SECTION_IDS.includes(sectionId)) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return true;
        }
      }
      return false;
    };

    // Handle initial page load - wait for DOM to be ready, then scroll
    const attemptInitialScroll = () => {
      const sectionId = window.location.pathname.replace("/", "");

      // If there's a section to scroll to, wait for it to exist
      if (sectionId && sectionId !== "" && SECTION_IDS.includes(sectionId)) {
        const element = document.getElementById(sectionId);
        if (element) {
          // Element exists, scroll to it
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          // Element doesn't exist yet, retry after a short delay
          setTimeout(attemptInitialScroll, 50);
        }
      }
    };

    // Start attempting to scroll after initial render
    const initialTimeout = setTimeout(attemptInitialScroll, 100);

    // Handle browser back/forward buttons
    const handlePopState = () => {
      scrollToSection();
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      clearTimeout(initialTimeout);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return null;
}
