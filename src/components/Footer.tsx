import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-20 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's work together
            </h2>
            <p className="text-muted-foreground max-w-md">
              Have a project in mind? I'd love to hear about it. 
              Let's create something great.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-6">
            <a 
              href="mailto:hello@jordandavis.dev"
              className="inline-flex items-center gap-2 px-6 py-3 font-display text-sm font-medium bg-foreground text-background rounded-full hover:bg-primary transition-colors duration-300"
            >
              Get in touch
              <span className="text-lg">→</span>
            </a>
            
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="https://github.com" className="link-underline hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" className="link-underline hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" className="link-underline hover:text-foreground transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-display text-xl font-semibold text-foreground">JD.</span>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jordan Davis. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
