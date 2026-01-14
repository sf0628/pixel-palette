import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground font-display text-sm tracking-widest uppercase mb-4"
            >
              Software Developer 
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-7xl md:text-8xl lg:text-7xl font-bold leading-[0.9] tracking-tight text-foreground"
            >
              Sophia Fu
              <br />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Crafting elegant digital experiences through clean code and thoughtful design. 
              Based in Boston, available worldwide.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="lg:col-span-4 flex lg:justify-end"
          >
            <div className="flex flex-col gap-4 text-sm font-display">
              <a 
                href="mailto:fu.so@northeastern.edu" 
                className="link-underline text-muted-foreground hover:text-foreground transition-colors"
              >
                fu.so@northeastern.edu
              </a>
              <a 
                href="https://github.com/sf0628" 
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/fusophia/" 
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={scrollToWork}
          className="mt-20 lg:mt-32 flex items-center gap-2 text-sm font-display text-muted-foreground hover:text-primary transition-colors group"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
