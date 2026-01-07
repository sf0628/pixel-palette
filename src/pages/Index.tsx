import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ScrollSpy from "@/components/ScrollSpy";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollSpy />
      <Hero />
      <WorkSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
