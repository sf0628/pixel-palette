import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ArtPiece from "@/components/ArtPiece";
import Footer from "@/components/Footer";

const artworks = [
  {
    title: "Fragments I",
    year: "2024",
    medium: "Digital",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800&fit=crop",
  },
  {
    title: "Resonance",
    year: "2024",
    medium: "Acrylic on Canvas",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&h=800&fit=crop",
    award: "Best in Show — Regional Art Competition (2024)",
  },
  {
    title: "Dissolution",
    year: "2023",
    medium: "Mixed Media",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=600&h=800&fit=crop",
  },
  {
    title: "Threshold",
    year: "2023",
    medium: "Digital",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=800&fit=crop",
  },
  {
    title: "Echoes",
    year: "2023",
    medium: "Oil on Canvas",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&h=800&fit=crop",
    auction: {
      event: "Annual Student Art Auction",
      finalBid: "$2,400",
    },
  },
  {
    title: "Liminal Space",
    year: "2022",
    medium: "Digital Collage",
    image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=600&h=800&fit=crop",
    award: "Honorable Mention — Digital Arts Exhibition (2022)",
  },
];

const Art = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <span className="font-display text-sm tracking-widest uppercase text-muted-foreground">
              Art Portfolio
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mt-2">
              Visual
              <br />
              <span className="text-primary">Explorations</span>
            </h1>
            
            {/* Biographic Blurb */}
            <div className="mt-8 max-w-2xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Art has been a long-standing creative practice alongside my work in software engineering, 
                including years of competitive participation and formal recognition. While no longer pursuing 
                it professionally, I continue creating as a way to explore form, storytelling, and visual 
                problem-solving—skills that inform my approach to design and user experience in software development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {artworks.map((artwork, index) => (
              <ArtPiece
                key={artwork.title}
                title={artwork.title}
                year={artwork.year}
                medium={artwork.medium}
                image={artwork.image}
                index={index}
                award={artwork.award}
                auction={artwork.auction}
              />
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Art;
