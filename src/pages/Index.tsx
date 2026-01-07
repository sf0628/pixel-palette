import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ScrollSpy from "@/components/ScrollSpy";
import ReadingProgress from "@/components/ReadingProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>
      <Navigation />
      <ReadingProgress />
      <ScrollSpy />
      <main id="main-content">
        <Hero />
        <WorkSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
