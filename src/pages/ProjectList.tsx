import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const ProjectList = () => {
  const navigate = useNavigate();
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  useEffect(() => {
    document.title = "All Projects";
  }, []);

  const handleBackToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      const workSection = document.getElementById("work");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleExpand = (projectId: string) => {
    setExpandedProjectId(projectId);
  };

  const handleCollapse = () => {
    setExpandedProjectId(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/#work"
              onClick={handleBackToWork}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              aria-label="Back to projects"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="font-display text-sm tracking-widest uppercase text-muted-foreground">
              All Work
            </span>
            <h1 className="font-display text-2xl lowercase md:text-3xl font-semibold text-foreground/90 mt-2">
              Projects
            </h1>
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
      </main>
    </div>
  );
};

export default ProjectList;
