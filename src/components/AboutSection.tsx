import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Developer",
    company: "Acme Studios",
    period: "2021—Present",
    description:
      "Leading frontend architecture and mentoring a team of 5 developers. Spearheading the migration to modern React patterns and implementing design systems.",
    achievements: [
      "Reduced bundle size by 40% through code splitting",
      "Implemented CI/CD pipeline reducing deploy time by 60%",
      "Led accessibility initiative achieving WCAG 2.1 AA compliance",
    ],
    technologies: ["React", "TypeScript", "GraphQL", "AWS"],
  },
  {
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2018—2021",
    description:
      "Built and scaled the core product from MVP to serving 100k+ users. Owned the entire technical stack from database design to frontend implementation.",
    achievements: [
      "Architected real-time collaboration features",
      "Optimized database queries improving response time by 3x",
      "Integrated payment processing handling $2M+ annually",
    ],
    technologies: ["Node.js", "React", "PostgreSQL", "Redis"],
  },
  {
    title: "Junior Developer",
    company: "Digital Agency Co",
    period: "2016—2018",
    description:
      "Developed responsive websites and web applications for diverse clients across industries. Collaborated closely with designers to implement pixel-perfect interfaces.",
    achievements: [
      "Delivered 20+ client projects on time and budget",
      "Introduced component-based architecture to the team",
      "Built internal tools that saved 10 hours/week",
    ],
    technologies: ["JavaScript", "React", "SASS", "WordPress"],
  },
];

const ExperienceCard = ({
  experience,
  index,
  onSelect,
}: {
  experience: Experience;
  index: number;
  onSelect: () => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, x, scale }}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${experience.title} at ${experience.company}`}
      className="group relative p-6 rounded-lg border border-border cursor-pointer transition-colors hover:border-primary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:transform-none"
    >
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent -translate-x-8 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity motion-reduce:transition-none" />

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
        <div className="space-y-1">
          <p className="font-display font-medium text-foreground group-hover:text-primary group-focus-visible:text-primary transition-colors motion-reduce:transition-none">
            {experience.title}
          </p>
          <p className="text-sm text-muted-foreground">{experience.company}</p>
        </div>
        <span className="text-sm text-muted-foreground font-mono">
          {experience.period}
        </span>
      </div>

      {/* Preview hint */}
      <div className="overflow-hidden max-h-0 group-hover:max-h-40 group-focus-visible:max-h-40 transition-all duration-300 motion-reduce:transition-none">
        <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
          {experience.description}
        </p>
        <div className="flex items-center gap-2 mt-3 text-xs text-primary">
          <span>Click to view details</span>
          <span aria-hidden="true">→</span>
        </div>
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-20 bg-card">
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

            <div ref={containerRef} className="mt-12 pt-8 border-t border-border">
              <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                Experience
              </h3>
              <div className="space-y-4 pl-8 relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                
                {experiences.map((experience, index) => (
                  <ExperienceCard
                    key={experience.company}
                    experience={experience}
                    index={index}
                    onSelect={() => setSelectedExperience(experience)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Experience Detail Dialog */}
      <Dialog open={!!selectedExperience} onOpenChange={() => setSelectedExperience(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DialogTitle className="font-display text-2xl">
                {selectedExperience?.title}
              </DialogTitle>
              <DialogDescription className="flex items-center gap-2 mt-1">
                <span>{selectedExperience?.company}</span>
                <span className="text-primary">•</span>
                <span className="font-mono">{selectedExperience?.period}</span>
              </DialogDescription>
            </motion.div>
          </DialogHeader>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-6 mt-4"
          >
            <p className="text-muted-foreground leading-relaxed">
              {selectedExperience?.description}
            </p>

            <div>
              <h4 className="font-display font-semibold text-foreground mb-3">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {selectedExperience?.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-primary mt-1.5">▸</span>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-foreground mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedExperience?.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="px-3 py-1 text-sm bg-accent text-accent-foreground rounded-full"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutSection;
