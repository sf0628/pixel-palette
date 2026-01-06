import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
  image?: string;
}

const ProjectCard = ({ title, description, tags, index, image }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-sm bg-card aspect-[4/3] mb-6">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
            <span className="font-display text-6xl text-muted-foreground/30 font-bold">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        )}
        
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
        </motion.div>
      </div>

      <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag}
            className="px-3 py-1 text-xs font-display tracking-wide text-muted-foreground bg-secondary rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
