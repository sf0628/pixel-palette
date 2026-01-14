import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });
  
  const links = [
    { path: "/", label: "Home" },
    { path: "/art", label: "Art" },
    { path: "/resume", label: "Resume" },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 lg:px-20 motion-reduce:transition-none transition-all duration-300"

      role="navigation"
      aria-label="Main navigation"
    >
      <div className="pl-4 top-0 flex items-center justify-between max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="text-xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm motion-reduce:transition-none hidden md:block"

          
          aria-label="Sophia Fu - Home"
        >
          SF
        </Link>
        
        <div className="flex items-center gap-6" role="menubar">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              role="menuitem"
              className={`relative text-sm font-medium tracking-wide transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm motion-reduce:transition-none ${
                location.pathname === link.path 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-current={location.pathname === link.path ? "page" : undefined}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-primary motion-reduce:hidden"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
