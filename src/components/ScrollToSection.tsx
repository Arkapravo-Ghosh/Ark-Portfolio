"use client";

import { useEffect, useRef } from "react";

// Section IDs in order of appearance on the page
const SECTION_IDS = ["intro", "about", "projects", "experience", "education", "testimonials"];

export default function ScrollToSection() {
  const isScrollingToSection = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentSectionRef = useRef<string | null>(null);
  const initialScrollDone = useRef(false);

  useEffect(() => {
    const scrollToSection = () => {
      // Extract the section id from the pathname (e.g., "/about" -> "about")
      const sectionId = window.location.pathname.replace("/", "");

      if (sectionId && sectionId !== "" && SECTION_IDS.includes(sectionId)) {
        const element = document.getElementById(sectionId);
        if (element) {
          isScrollingToSection.current = true;
          // Set current section immediately to prevent scroll spy from overwriting
          currentSectionRef.current = sectionId;
          element.scrollIntoView({ behavior: "smooth" });
          // Reset the flag after scrolling completes
          waitForScrollEnd();
          return true;
        }
      }
      return false;
    };

    // Wait for scroll to end before re-enabling scroll spy
    const waitForScrollEnd = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      // Use a longer timeout and reset on each scroll event
      const onScroll = () => {
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingToSection.current = false;
          window.removeEventListener("scroll", onScroll);
        }, 150);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      // Initial timeout in case scroll doesn't fire
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingToSection.current = false;
        window.removeEventListener("scroll", onScroll);
      }, 2000);
    };

    // Handle nav click events from Navbar - pause scroll spy
    const handleNavClick = () => {
      isScrollingToSection.current = true;
      waitForScrollEnd();
    };
    window.addEventListener("navclick", handleNavClick);

    // Handle initial page load - wait for DOM to be ready, then scroll
    const attemptInitialScroll = () => {
      const sectionId = window.location.pathname.replace("/", "");

      // If there's a section to scroll to, wait for it to exist
      if (sectionId && sectionId !== "" && SECTION_IDS.includes(sectionId)) {
        const element = document.getElementById(sectionId);
        if (element) {
          // Element exists, scroll to it
          isScrollingToSection.current = true;
          currentSectionRef.current = sectionId;
          element.scrollIntoView({ behavior: "smooth" });
          waitForScrollEnd();
          initialScrollDone.current = true;
        } else {
          // Element doesn't exist yet, retry after a short delay
          setTimeout(attemptInitialScroll, 50);
        }
      } else {
        // No section to scroll to, we're done
        initialScrollDone.current = true;
      }
    };

    // Start attempting to scroll after initial render
    const initialTimeout = setTimeout(attemptInitialScroll, 100);

    // Handle browser back/forward buttons
    const handlePopState = () => {
      isScrollingToSection.current = true;
      scrollToSection();
    };
    window.addEventListener("popstate", handlePopState);

    // Scroll spy using scroll event - more reliable than IntersectionObserver for this use case
    const updateCurrentSection = () => {
      // Don't update while scrolling to section or before initial scroll is done
      if (isScrollingToSection.current || !initialScrollDone.current) return;

      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      // Use a point 30% down from the top of the viewport as the reference
      const referencePoint = scrollY + viewportHeight * 0.3;

      let currentSection = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollY;

          // If the section's top is above our reference point, it's the current section
          if (elementTop <= referencePoint) {
            currentSection = id;
          } else {
            // Sections are in order, so we can break once we find one below the reference
            break;
          }
        }
      }

      // Only update if changed
      if (currentSectionRef.current !== currentSection) {
        currentSectionRef.current = currentSection;
        const newPath = currentSection === "intro" ? "/" : `/${currentSection}`;

        if (window.location.pathname !== newPath) {
          window.history.replaceState(null, "", newPath);
        }
      }
    };

    // Throttled scroll handler
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateCurrentSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(initialTimeout);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      window.removeEventListener("navclick", handleNavClick);
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
