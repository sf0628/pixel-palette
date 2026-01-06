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
  },
  {
    title: "Liminal Space",
    year: "2022",
    medium: "Digital Collage",
    image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=600&h=800&fit=crop",
  },
];

const Art = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
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
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              A collection of personal artwork exploring abstraction, color theory, 
              and the intersection of digital and traditional mediums.
            </p>
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
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Interested in a piece or commissioning work?
            </p>
            <a 
              href="mailto:hello@jordandavis.dev?subject=Art Inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 font-display text-sm font-medium bg-foreground text-background rounded-full hover:bg-primary transition-colors duration-300"
            >
              Get in touch
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Art;
