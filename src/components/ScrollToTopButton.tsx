import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton(): React.JSX.Element | null {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Page navigation"
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center group select-none"
    >
      {/* Tooltip / Label on Left of Button */}
      <div 
        className={`mr-3 px-3.5 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold shadow-xl border border-slate-700/60 transition-all duration-300 pointer-events-none hidden sm:block ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span className="whitespace-nowrap">Back to Top</span>
      </div>

      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-[#093965] to-[#2E8D9F] text-white shadow-[0_6px_20px_rgba(9,57,101,0.35)] hover:shadow-[0_12px_28px_rgba(9,57,101,0.5)] border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#2E8D9F]/40 cursor-pointer"
        aria-label="Scroll to top of page"
      >
        <ChevronUp className="w-6 h-6 transition-transform duration-200 group-hover:-translate-y-0.5" />
      </button>
    </aside>
  );
}
