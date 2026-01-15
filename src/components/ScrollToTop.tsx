import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component that scrolls the window to the top
 * whenever the route pathname changes (excluding hash changes).
 * 
 * This ensures smooth navigation between pages while preserving
 * intentional anchor link scrolling within the same page.
 * Works automatically with all react-router-dom navigation (<Link> and navigate).
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on pathname change with smooth scroll
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]); // Only trigger on pathname changes, not hash changes

  return null;
};

export default ScrollToTop;
