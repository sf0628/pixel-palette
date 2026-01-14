import { motion } from "framer-motion";
import { useState } from "react";
import { Award, Gavel } from "lucide-react";

interface ArtPieceProps {
  title: string;
  year: string;
  medium: string;
  image: string;
  index: number;
  award?: string;
  auction?: {
    event: string;
    finalBid: string;
  };
}

const ArtPiece = ({ title, year, medium, image, index, award, auction }: ArtPieceProps) => {
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
          className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-6"
        >
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-1">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {medium} • {year}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-4">
        <h3 className="font-display font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{medium} • {year}</p>
        
        {/* Optional Metadata */}
        {(award || auction) && (
          <div className="space-y-1.5 mt-3 pt-3 border-t border-border">
            {award && (
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Award className="w-3.5 h-3.5 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                <span>{award}</span>
              </div>
            )}
            {auction && (
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Gavel className="w-3.5 h-3.5 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                <span>
                  {auction.event}, Final Bid: {auction.finalBid}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default ArtPiece;
