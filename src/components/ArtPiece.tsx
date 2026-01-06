import { motion } from "framer-motion";
import { useState } from "react";

interface ArtPieceProps {
  title: string;
  year: string;
  medium: string;
  image: string;
  index: number;
}

const ArtPiece = ({ title, year, medium, image, index }: ArtPieceProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-sm aspect-[3/4] bg-muted">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ 
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-6"
        >
          <div>
            <h3 className="font-display text-xl font-semibold text-cream mb-1">
              {title}
            </h3>
            <p className="text-cream/70 text-sm">
              {medium} • {year}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-4 md:hidden">
        <h3 className="font-display font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{medium} • {year}</p>
      </div>
    </motion.article>
  );
};

export default ArtPiece;
