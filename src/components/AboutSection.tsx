import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { X, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const skills = [
  "JavaScript",
  "TypeScript",
  "Java",
  "Python",
  "C",
  "C++",
  "React",
  "Node.js",
  "Express.js",
  "Flask",
  "MongoDB",
  "MySQL",
  "Supabase",
  "Docker",
  "Git",
];

const expandedTechnologies = {
  "Programming Languages": [
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "C",
    "C++",
    "HTML",
    "CSS",
    "SQL",
    "R",
    "DrRacket",
  ],
  "Frameworks & Libraries": [
    "React",
    "Node.js",
    "Express.js",
    "Flask",
    "Tailwind CSS",
    "NumPy",
    "pandas",
    "Matplotlib",
  ],
  "Tools & Platforms": [
    "MongoDB",
    "MySQL",
    "Supabase",
    "Docker",
    "Git",
    "npm/Yarn",
    "Jupyter Notebook",
    "JUnit",
    "LaTeX",
  ],
};

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
    title: "Software Engineer Intern",
    company: "L3Harris Technologies",
    period: "May – August 2025",
    description:
      "Optimized C++ driver-level caching mechanisms to reduce Web GUI update latency from ~3 seconds to near-instantaneous for satellite communication components (power amplifiers, modems, beacon receivers) within a Linux environment.",
    achievements: [
      "Reduced Web GUI update latency from ~3 seconds to near-instantaneous",
      "Extended driver functionality by implementing thread-safe getter and setter interfaces",
      "Enabled greater flexibility and modular access to hardware data",
    ],
    technologies: ["C++", "Linux"],
  },
  {
    title: "Undergraduate Research Assistant",
    company: "The Brain ImPACT Lab",
    period: "September 2024 – Present",
    description:
      "Collaborate with researchers in incorporating data management and applying computational modeling of the brain using R.",
    achievements: [
      "Aggregated 6000+ data points for TBI clinical trials",
      "Wrote 50+ detailed reports following each session for 12-weeks",
    ],
    technologies: ["R"],
  },
  {
    title: "Software Developer",
    company: "NUROVER",
    period: "September 2024 – Present",
    description:
      "Implemented interactive UI elements (buttons, LED Matrix) that publish messages to ROS 2 topics, controlling robot behavior and expanding range of customizable behaviors.",
    achievements: [
      "Conducted system integration tests using ROS 2 bring-up",
      "Validated and ensured reliability of multi-node communication",
    ],
    technologies: ["ROS 2"],
  },
  {
    title: "President",
    company: "Northeastern Computer Science Mentoring Organization",
    period: "February 2024 – Present",
    description:
      "Designed and deployed a real-time application using Socket.IO, Node.js, React, and React Native for a submission and voting system for a hackathon ideation event.",
    achievements: [
      "Increased organizational visibility by delivering communications to 1000+ students",
      "Improved club engagement by 750% within 6 months",
      "Conducted campus-wide promotional activities",
    ],
    technologies: ["Socket.IO", "Node.js", "React", "React Native"],
  },
];

const ExperienceCard = ({
  experience,
  index,
  onSelect,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  experience: Experience;
  index: number;
  onSelect: () => void;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
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
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onMouseEnter}
      onBlur={onMouseLeave}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${experience.title} at ${experience.company}`}
      className={`group relative p-6 rounded-lg border cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:transform-none ${
        isHovered ? "border-primary/50" : "border-border"
      }`}
    >
      {/* Timeline connector */}
      <div className={`absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent -translate-x-8 transition-opacity motion-reduce:transition-none ${
        isHovered ? "opacity-100" : "opacity-0"
      }`} />

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
        <div className="space-y-1">
          <p className={`font-display font-medium transition-colors motion-reduce:transition-none ${
            isHovered ? "text-primary" : "text-foreground"
          }`}>
            {experience.title}
          </p>
          <p className="text-sm text-muted-foreground">{experience.company}</p>
        </div>
        <span className="text-sm text-muted-foreground font-mono">
          {experience.period}
        </span>
      </div>

      {/* Preview hint with smooth animation - always reserves minimal height */}
      <motion.div
        initial={false}
        animate={{
          maxHeight: isHovered ? 200 : 60,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
        <div className="pt-3">
          <motion.p
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0.4,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="text-sm text-muted-foreground"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: isHovered ? "none" : 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {experience.description}
          </motion.p>
          <motion.div
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0,
              maxHeight: isHovered ? 30 : 0,
              marginTop: isHovered ? 12 : 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="flex items-center gap-2 text-xs text-primary overflow-hidden"
          >
            <span>Click to view details</span>
            <span aria-hidden="true">→</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AboutSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [isTechnologiesOpen, setIsTechnologiesOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // Handle escape key and focus management
  useEffect(() => {
    if (isTechnologiesOpen) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsTechnologiesOpen(false);
        }
      };
      document.addEventListener("keydown", handleEscape);
      // Focus the popup when it opens
      popupRef.current?.focus();
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isTechnologiesOpen]);

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-20 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="font-display text-lg tracking-widest lowercase text-foreground mb-10">
              About Me
            </span>
            
            
            <div className="space-y-6 text-muted-foreground leading-relaxed mt-10">
              <p>
                I'm a Computer Science student at Northeastern University with a passion for 
                building impactful software solutions. My approach combines technical excellence 
                with collaborative problem-solving—every line of code serves a purpose.
              </p>
              <p>
                Currently pursuing a Bachelor of Science in Computer Science with a Minor in 
                Computational Social Science, expected to graduate in May 2027. I've been 
                recognized with honors including FinHacks 1st Place (2025), Dean's List 
                (2025, 2024, 2023), and PVSA Gold (2022, 2021).
              </p>
              <p>
                When I'm not coding, I explore creative projects and contribute to research 
                in computational modeling. This diverse experience informs my development work, 
                bringing a unique perspective to problem-solving.
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
            <span className="font-display text-lg tracking-widest lowercase text-foreground mb-6">
              Technologies
            </span>
            
            <div className="flex flex-wrap gap-3 mt-6">
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
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: skills.length * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                onClick={() => setIsTechnologiesOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsTechnologiesOpen(true);
                  }
                }}
                className="px-4 py-2 font-display text-sm text-foreground border border-border rounded-full cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="View all technologies"
                tabIndex={0}
              >
                <Plus className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          ref={containerRef}
          className="mt-20 pt-8 border-t border-border"
        >
          <span className="font-display text-lg tracking-widest lowercase text-foreground mb-6">
            Experience
          </span>
          <div className="space-y-4 pl-8 relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
            
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.company}
                experience={experience}
                index={index}
                onSelect={() => setSelectedExperience(experience)}
                isHovered={hoveredCardIndex === index}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
              />
            ))}
          </div>
        </motion.div>
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

      {/* Technologies Popup */}
      {isTechnologiesOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
            onClick={() => setIsTechnologiesOpen(false)}
            aria-hidden="true"
          />
          
          {/* Popup Card */}
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="technologies-title"
            tabIndex={-1}
          >
              <div
                className="relative bg-card border border-border rounded-lg shadow-lg max-w-2xl w-full max-h-[80vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <h3
                    id="technologies-title"
                    className="font-display text-2xl font-semibold text-foreground"
                  >
                    Technologies
                  </h3>
                  <button
                    onClick={() => setIsTechnologiesOpen(false)}
                    className="p-2 rounded-full hover:bg-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label="Close technologies popup"
                    tabIndex={0}
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(80vh-100px)]">
                  <div className="space-y-8">
                    {Object.entries(expandedTechnologies).map(([category, items], categoryIndex) => (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
                      >
                        <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                          {category}
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {items.map((item, itemIndex) => (
                            <motion.span
                              key={item}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.2,
                                delay: categoryIndex * 0.1 + itemIndex * 0.02,
                              }}
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: "hsl(var(--primary))",
                                color: "hsl(var(--primary-foreground))",
                              }}
                              className="px-4 py-2 font-display text-sm text-foreground border border-border rounded-full cursor-default transition-colors"
                            >
                              {item}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
    </section>
  );
};

export default AboutSection;
