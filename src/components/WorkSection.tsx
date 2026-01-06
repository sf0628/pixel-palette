import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Synth Finance",
    description: "A modern fintech dashboard with real-time data visualization and intuitive portfolio management.",
    tags: ["React", "TypeScript", "D3.js"],
  },
  {
    title: "Mindful",
    description: "Meditation and wellness app focusing on accessibility and calming user experience.",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    title: "Studio Archive",
    description: "Digital asset management platform for creative studios with AI-powered tagging.",
    tags: ["Next.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Tempo",
    description: "Collaborative music creation tool enabling real-time remote jamming sessions.",
    tags: ["WebRTC", "Web Audio API", "Socket.io"],
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-display text-sm tracking-widest uppercase text-muted-foreground">
            Selected Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
