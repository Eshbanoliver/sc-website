import React, { useEffect } from "react";
import { X, PhoneCall } from "lucide-react";
import ContactForm from "./ContactForm";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export default function ConsultationModal({ isOpen, onClose, prefilledService = "" }: ConsultationModalProps): React.JSX.Element | null {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#062644]/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-auto sm:my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#093965] to-[#2E8D9F] px-5 sm:px-8 py-5 sm:py-6 text-white relative pr-14">
          <button
            onClick={onClose}
            className="absolute top-4 sm:top-5 right-4 sm:right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-[#FA7D3C] text-white mb-2">
            Free Consultation
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold leading-tight">
            Build Your Dedicated Remote Team
          </h2>
          <p className="mt-1 text-slate-200 text-xs sm:text-sm">
            Discuss your requirements with our staffing advisors. Serving India, USA & Canada.
          </p>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 max-h-[78dvh] overflow-y-auto">
          <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
            <span className="text-slate-600">Prefer speaking directly right now?</span>
            <a
              href="tel:+918302648461"
              className="inline-flex items-center gap-1.5 font-bold text-[#093965] hover:text-[#FA7D3C] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FA7D3C]" />
              <span>+91 83026 48461</span>
            </a>
          </div>

          <ContactForm 
            prefilledService={prefilledService} 
            onSuccess={() => {
              setTimeout(() => {
                // confirmation displayed
              }, 2500);
            }} 
          />
        </div>
      </div>
    </div>
  );
}
