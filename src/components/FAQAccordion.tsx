import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "../data/faqsData";

interface FAQAccordionProps {
  limit?: number | null;
  initialCategory?: string;
}

export default function FAQAccordion({ limit = null, initialCategory = "All" }: FAQAccordionProps): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [openIndex, setOpenIndex] = useState<number>(0);

  const categories = ["All", ...Array.from(new Set(FAQS.map(f => f.category)))];

  const filteredFaqs = activeCategory === "All" 
    ? FAQS 
    : FAQS.filter(f => f.category === activeCategory);

  const displayedFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Category Pills (only if not strictly limited or if desired) */}
      {!limit && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#093965] text-white shadow-md shadow-[#093965]/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#2E8D9F] hover:text-[#093965]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Accordion List */}
      <div className="space-y-3">
        {displayedFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-white border-[#2E8D9F] shadow-md ring-1 ring-[#2E8D9F]/20"
                  : "bg-white/80 border-slate-200 hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full px-4 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-[#2E8D9F]/15 text-[#2E8D9F]" : "bg-slate-100 text-slate-400"
                  }`}>
                    <HelpCircle className="w-4 h-4" />
                  </span>
                  <span className={`text-sm sm:text-base lg:text-lg font-bold transition-colors ${
                    isOpen ? "text-[#093965]" : "text-slate-800"
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-[#093965] text-white" : "bg-slate-100 text-slate-500"
                }`}>
                  <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed border-t border-slate-100">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
