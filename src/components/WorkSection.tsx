import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/projects";

const WorkSection = () => {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const handleExpand = (projectId: string) => {
    setExpandedProjectId(projectId);
  };

  const handleCollapse = () => {
    setExpandedProjectId(null);
  };

  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span className="font-display text-sm tracking-widest uppercase text-muted-foreground">
              Selected Work
            </span>
            <h3 className="font-display text-2xl lowercase md:text-3xl font-semibold text-foreground/90 mt-2">
              Projects  
            </h3>
          </div>
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm motion-reduce:transition-none group"
          >
            View full resume
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform motion-reduce:transition-none" aria-hidden="true" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          <AnimatePresence mode="wait">
            {projects.map((project, index) => {
              const isExpanded = expandedProjectId === project.id;
              const shouldShow = !expandedProjectId || isExpanded;

              if (!shouldShow) return null;

              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isExpanded={isExpanded}
                  onExpand={() => handleExpand(project.id)}
                  onCollapse={handleCollapse}
                />
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
