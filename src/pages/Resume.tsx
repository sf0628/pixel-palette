import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import resumePdf from "@/assets/Sophia_Fu_Resume.pdf";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "L3Harris Technologies",
    period: "May – August 2025",
    description: "Optimized C++ driver-level caching mechanisms to reduce Web GUI update latency from ~3 seconds to near-instantaneous for satellite communication components (power amplifiers, modems, beacon receivers) within a Linux environment.",
    achievements: [
      "Reduced Web GUI update latency from ~3 seconds to near-instantaneous",
      "Extended driver functionality by implementing thread-safe getter and setter interfaces",
      "Enabled greater flexibility and modular access to hardware data",
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    company: "The Brain ImPACT Lab",
    period: "September 2024 – Present",
    description: "Collaborate with researchers in incorporating data management and applying computational modeling of the brain using R.",
    achievements: [
      "Aggregated 6000+ data points for TBI clinical trials",
      "Wrote 50+ detailed reports following each session for 12-weeks",
    ],
  },
  {
    title: "Software Developer",
    company: "NUROVER",
    period: "September 2024 – Present",
    description: "Implemented interactive UI elements (buttons, LED Matrix) that publish messages to ROS 2 topics, controlling robot behavior and expanding range of customizable behaviors.",
    achievements: [
      "Conducted system integration tests using ROS 2 bring-up",
      "Validated and ensured reliability of multi-node communication",
    ],
  },
  {
    title: "President",
    company: "Northeastern Computer Science Mentoring Organization",
    period: "February 2024 – Present",
    description: "Designed and deployed a real-time application using Socket.IO, Node.js, React, and React Native for a submission and voting system for a hackathon ideation event.",
    achievements: [
      "Increased organizational visibility by delivering communications to 1000+ students",
      "Improved club engagement by 750% within 6 months",
      "Conducted campus-wide promotional activities",
    ],
  },
];

const skills = {
  "Languages": ["JavaScript", "TypeScript", "Java", "Python", "C", "C++", "HTML", "CSS", "SQL", "R", "DrRacket"],
  "Frameworks & Libraries": ["React", "Express.js", "Node.js", "Flask", "Tailwind CSS", "NumPy", "pandas", "Matplotlib"],
  "Technologies & Tools": ["MongoDB", "Docker", "MySQL", "Supabase", "Git", "npm/Yarn", "Jupyter Notebook", "JUnit", "LaTeX"],
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
    <div className="min-h-screen bg-card">
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
              <span>back to portfolio</span>
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
              Sophia Fu
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Software Developer
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:fu.so@northeastern.edu"
                className="text-sm text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                fu.so@northeastern.edu
              </a>
              <span className="text-muted-foreground" aria-hidden="true">•</span>
              <a
                href="https://github.com/sf0628"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                GitHub
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
              <span className="text-muted-foreground" aria-hidden="true">•</span>
              <a
                href="https://linkedin.com/in/fusophia"
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
              onClick={() => {
                const link = document.createElement("a");
                link.href = resumePdf;
                link.download = "Sophia_Fu_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
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
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
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
                <h3 className="font-display font-semibold text-foreground">Bachelor of Science in Computer Science, Minor in Computational Social Science</h3>
                <span className="text-sm text-muted-foreground font-mono">Expected May 2027</span>
              </div>
              <p className="text-primary mb-2">Northeastern University - Khoury College of Computer Sciences</p>
              <p className="text-muted-foreground text-sm mb-3">Boston, MA</p>
              <div className="mt-3">
                <p className="text-sm font-semibold text-foreground mb-2">Honors & Awards:</p>
                <p className="text-sm text-muted-foreground">FinHacks 1st Place (2025), Dean's List (2025, 2024, 2023), PVSA Gold (2022, 2021)</p>
              </div>
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
