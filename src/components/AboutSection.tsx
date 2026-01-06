import { motion } from "framer-motion";

const skills = [
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Figma",
  "WebGL",
];

const AboutSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="font-display text-sm tracking-widest uppercase text-muted-foreground">
              About
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-8">
              Building with
              <br />
              <span className="text-primary">intention</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a software developer with 7+ years of experience building 
                products that matter. My approach combines technical excellence 
                with an eye for design—every line of code serves a purpose.
              </p>
              <p>
                When I'm not coding, I explore abstract art and digital 
                illustration. This creative practice informs my development work, 
                bringing a unique perspective to problem-solving.
              </p>
              <p>
                Currently open to full-time roles and select freelance projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pt-16"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">
              Technologies
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                  className="px-4 py-2 font-display text-sm text-foreground border border-border rounded-full cursor-default transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-display font-medium text-foreground">Senior Developer</p>
                    <p className="text-sm text-muted-foreground">Acme Studios</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2021—Present</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-display font-medium text-foreground">Full-Stack Developer</p>
                    <p className="text-sm text-muted-foreground">StartupXYZ</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2018—2021</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
