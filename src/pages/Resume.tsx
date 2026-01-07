import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { useEffect } from "react";

const experiences = [
  {
    title: "Senior Developer",
    company: "Acme Studios",
    period: "2021—Present",
    description: "Leading frontend architecture and mentoring a team of 5 developers. Spearheading the migration to modern React patterns and implementing design systems.",
    achievements: [
      "Reduced bundle size by 40% through code splitting",
      "Implemented CI/CD pipeline reducing deploy time by 60%",
      "Led accessibility initiative achieving WCAG 2.1 AA compliance",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2018—2021",
    description: "Built and scaled the core product from MVP to serving 100k+ users.",
    achievements: [
      "Architected real-time collaboration features",
      "Optimized database queries improving response time by 3x",
      "Integrated payment processing handling $2M+ annually",
    ],
  },
  {
    title: "Junior Developer",
    company: "Digital Agency Co",
    period: "2016—2018",
    description: "Developed responsive websites and web applications for diverse clients.",
    achievements: [
      "Delivered 20+ client projects on time and budget",
      "Introduced component-based architecture to the team",
      "Built internal tools that saved 10 hours/week",
    ],
  },
];

const skills = {
  "Languages": ["TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"],
  "Frameworks": ["React", "Node.js", "Next.js", "Express", "Django"],
  "Tools": ["Git", "Docker", "AWS", "PostgreSQL", "Redis", "Figma"],
};

const Resume = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Smooth anchor scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        element?.scrollIntoView({ behavior: "smooth" });
        // Update URL without jumping
        window.history.pushState(null, "", target.hash);
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick as EventListener);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick as EventListener);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Reading Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={Math.round(scrollYProgress.get() * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Back to Portfolio Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to Portfolio</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              John Doe
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Senior Software Developer
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@johndoe.com"
                className="text-sm text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                hello@johndoe.com
              </a>
              <span className="text-muted-foreground" aria-hidden="true">•</span>
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                GitHub
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
              <span className="text-muted-foreground" aria-hidden="true">•</span>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                LinkedIn
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Download resume as PDF"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Download PDF
            </motion.button>
          </motion.header>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
            aria-labelledby="experience-heading"
          >
            <h2 id="experience-heading" className="font-display text-2xl font-bold text-foreground mb-8">
              Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.article
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="border-l-2 border-border pl-6 py-2 hover:border-primary transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                    <h3 className="font-display font-semibold text-foreground">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                  </div>
                  <p className="text-primary mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>
                  <ul className="space-y-1" aria-label={`Achievements at ${exp.company}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5" aria-hidden="true">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
            aria-labelledby="skills-heading"
          >
            <h2 id="skills-heading" className="font-display text-2xl font-bold text-foreground mb-8">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <h3 className="font-display font-semibold text-foreground mb-4">{category}</h3>
                  <ul className="space-y-2" aria-label={`${category} skills`}>
                    {items.map((item) => (
                      <li key={item} className="text-muted-foreground text-sm">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            aria-labelledby="education-heading"
          >
            <h2 id="education-heading" className="font-display text-2xl font-bold text-foreground mb-8">
              Education
            </h2>
            <article className="border-l-2 border-border pl-6 py-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                <h3 className="font-display font-semibold text-foreground">B.S. Computer Science</h3>
                <span className="text-sm text-muted-foreground font-mono">2012—2016</span>
              </div>
              <p className="text-primary">University of Technology</p>
            </article>
          </motion.section>

          {/* Footer Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 pt-8 border-t border-border text-center"
          >
            <Link
              to="/#work"
              className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              View my portfolio work →
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
