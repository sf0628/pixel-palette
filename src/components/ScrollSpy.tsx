import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const ScrollSpy = () => {
  const [activeSection, setActiveSection] = useState("hero");

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

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group flex items-center gap-3"
          aria-label={`Scroll to ${section.label}`}
        >
          <motion.div
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? "bg-primary scale-125"
                : "bg-muted-foreground/40 group-hover:bg-muted-foreground"
            }`}
          />
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: activeSection === section.id ? 1 : 0,
              x: activeSection === section.id ? 0 : -10,
            }}
            className="text-xs font-medium text-primary"
          >
            {section.label}
          </motion.span>
        </button>
      ))}
    </motion.nav>
  );
};

export default ScrollSpy;
