import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  isExpanded?: boolean;
  onExpand?: () => void;
  onCollapse?: () => void;
}

const ProjectCard = ({ project, index, isExpanded = false, onExpand, onCollapse }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [tagsExpanded, setTagsExpanded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (isExpanded) {
    return (
      <motion.article
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.4 }}
        className="md:col-span-2 border border-border rounded-lg bg-card p-8"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">{project.shortDescription}</p>
          </div>
          <button
            onClick={onCollapse}
            className="p-2 rounded-full hover:bg-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Collapse project details"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">Role & Scope</h4>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-medium text-foreground">Role:</span> {project.role}
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Scope:</span> {project.scope}
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-display tracking-wide text-primary bg-primary/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-display font-semibold text-foreground mb-3">Key Highlights</h4>
          <ul className="space-y-2">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5" aria-hidden="true">▸</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View Full Case Study
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium transition-colors hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View on GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-sm bg-card aspect-[4/3] mb-6">
        <AnimatePresence mode="wait">
          {!imageError ? (
            <motion.img
              key={isHovered && project.gifPreview ? "gif" : "thumbnail"}
              src={isHovered && project.gifPreview ? project.gifPreview : project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-muted to-secondary" />
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
        </motion.div>
      </div>

      <Link
        to={`/projects/${project.id}`}
        className="block"
      >
        <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
          {project.title}
        </h3>
      </Link>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2">
        {(tagsExpanded ? project.tags : project.tags.slice(0, 4)).map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-display tracking-wide text-muted-foreground bg-secondary rounded-full"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && !tagsExpanded && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setTagsExpanded(true);
            }}
            className="px-3 py-1 text-xs font-display tracking-wide text-muted-foreground bg-secondary rounded-full hover:bg-secondary/80 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            +{project.tags.length - 4}
          </button>
        )}
        {project.tags.length > 4 && tagsExpanded && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setTagsExpanded(false);
            }}
            className="px-3 py-1 text-xs font-display tracking-wide text-muted-foreground bg-secondary rounded-full hover:bg-secondary/80 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Collapse tags"
          >
            -
          </button>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
