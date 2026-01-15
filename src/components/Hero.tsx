import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 bg-card">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-muted-foreground text-md tracking-widest mb-6"
          >
            software developer 
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display font-semibold text-5xl md:text-6xl lg:text-5xl leading-[0.9] tracking-widest text-foreground/90"
          >
            sophia fu
            <br />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6"
          >
            <div className="flex flex-wrap gap-2 text-sm font-display justify-center">
              <a 
                href="mailto:fu.so@northeastern.edu" 
                className="link-underline text-muted-foreground hover:text-foreground transition-colors"
              >
                fu.so@northeastern.edu
              </a>
              <span className="text-muted-foreground hover:text-foreground transition-colors">•</span>
              <a 
                href="https://github.com/sf0628" 
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-muted-foreground hover:text-foreground transition-colors"
              >
                github
              </a>
              <span className="text-muted-foreground hover:text-foreground transition-colors">•</span>
              <a 
                href="https://www.linkedin.com/in/fusophia/" 
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-muted-foreground hover:text-foreground transition-colors"
              >
                linkedin
              </a>
            </div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={scrollToWork}
          className="mt-20 lg:mt-32 flex items-center gap-2 text-sm font-display text-muted-foreground hover:text-primary transition-colors group mx-auto"
        >
          <span>see my work</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
