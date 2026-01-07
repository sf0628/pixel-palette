import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const ScrollSpy = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      element.scrollIntoView({ 
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start"
      });
    }
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (index < sections.length - 1) {
          setFocusedIndex(index + 1);
          (document.querySelector(`[data-scrollspy-index="${index + 1}"]`) as HTMLButtonElement)?.focus();
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (index > 0) {
          setFocusedIndex(index - 1);
          (document.querySelector(`[data-scrollspy-index="${index - 1}"]`) as HTMLButtonElement)?.focus();
        }
        break;
      case "Home":
        e.preventDefault();
        setFocusedIndex(0);
        (document.querySelector(`[data-scrollspy-index="0"]`) as HTMLButtonElement)?.focus();
        break;
      case "End":
        e.preventDefault();
        setFocusedIndex(sections.length - 1);
        (document.querySelector(`[data-scrollspy-index="${sections.length - 1}"]`) as HTMLButtonElement)?.focus();
        break;
    }
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 motion-reduce:transition-none"
      role="navigation"
      aria-label="Page sections"
    >
      <ul className="flex flex-col gap-4" role="list">
        {sections.map((section, index) => (
          <li key={section.id}>
            <button
              data-scrollspy-index={index}
              onClick={() => scrollToSection(section.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => setFocusedIndex(null)}
              className="group flex items-center gap-3 focus:outline-none"
              aria-label={`Navigate to ${section.label} section`}
              aria-current={activeSection === section.id ? "true" : undefined}
            >
              <span
                className={`block w-6 h-px transition-all duration-300 motion-reduce:transition-none ${
                  activeSection === section.id
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/40 group-hover:bg-muted-foreground group-focus-visible:bg-muted-foreground"
                }`}
                aria-hidden="true"
              />
              <span
                className={`text-xs font-medium transition-all duration-300 motion-reduce:transition-none ${
                  activeSection === section.id || focusedIndex === index
                    ? "opacity-100 text-primary"
                    : "opacity-0 group-hover:opacity-100 text-muted-foreground"
                }`}
              >
                {section.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default ScrollSpy;
