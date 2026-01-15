import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="py-6 px-6 md:px-12 lg:px-20 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-display text-xl font-semibold text-foreground">SF</span>
          <span className="text-sm text-muted-foreground order-3 md:order-2">
            © {new Date().getFullYear()} Sophia Fu. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm order-2 md:order-3"
            aria-label="Back to top"
          >
            <span className="hidden sm:inline">Back to top</span>
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
