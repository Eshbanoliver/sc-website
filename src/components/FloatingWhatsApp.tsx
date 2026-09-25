import React, { useState } from "react";

export default function FloatingWhatsApp(): React.JSX.Element {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const phoneNumber = "918302648461";
  const defaultMessage = "Hi Staff Clicks, I would like to know more about your virtual assistance and business support services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside 
      aria-label="Contact options"
      className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-40 flex items-center group select-none"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.55)] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
        aria-label="Chat with Staff Clicks on WhatsApp"
      >
        {/* Soft pulse ring effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 pointer-events-none"></span>

        {/* WhatsApp Brand SVG Icon */}
        <svg 
          className="w-7 h-7 fill-current drop-shadow-sm transition-transform duration-200 group-hover:scale-105" 
          viewBox="0 0 24 24"
        >
          <path d="M12.031 2C6.518 2 2.03 6.47 2.03 11.979c0 1.933.553 3.738 1.517 5.267L2 22l4.908-1.509a9.92 9.92 0 0 0 5.123 1.468h.004c5.512 0 9.996-4.47 9.996-9.979 0-2.665-1.042-5.17-2.932-7.056C17.209 3.04 14.697 2 12.031 2zm0 18.27h-.003a8.27 8.27 0 0 1-4.22-1.157l-.303-.18-3.13.963.98-3.045-.198-.314a8.272 8.272 0 0 1-1.353-4.553c0-4.57 3.725-8.286 8.243-8.286 2.204 0 4.275.858 5.834 2.414a8.217 8.217 0 0 1 2.417 5.827c0 4.57-3.725 8.286-8.242 8.286zm4.518-6.195c-.248-.124-1.468-.724-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.538.062-.248-.124-1.048-.386-1.996-1.23-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.112.248-.29.373-.435.124-.145.166-.248.248-.414.083-.166.041-.311-.02-.435-.062-.124-.56-1.348-.767-1.846-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.87 85-.87 2.073 0 1.223.891 2.404 1.015 2.57.124.166 1.752 2.673 4.244 3.748.593.256 1.056.409 1.418.524.596.19 1.138.163 1.566.099.478-.071 1.468-.6 1.675-1.18.207-.58.207-1.077.145-1.18-.062-.104-.228-.166-.476-.29z" />
        </svg>

        {/* Small Active Indicator Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-white"></span>
      </a>

      {/* Tooltip / Label */}
      <div 
        className={`ml-3 px-3.5 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold shadow-xl border border-slate-700/60 transition-all duration-300 pointer-events-none hidden sm:block ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
        }`}
      >
        <span className="whitespace-nowrap">Chat on WhatsApp</span>
      </div>
    </aside>
  );
}
