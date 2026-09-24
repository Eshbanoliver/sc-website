import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  HelpCircle, 
  Search, 
  PhoneCall, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import FAQAccordion from "../components/FAQAccordion";
import { FAQS } from "../data/faqsData";

export default function FAQ({ onOpenConsultation }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = searchTerm.trim() === ""
    ? FAQS
    : FAQS.filter(
        f => f.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
             f.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
             f.category.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="space-y-24 sm:space-y-28 pt-8 pb-16">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#093965]/8 text-[#093965] border border-[#093965]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA7D3C]"></span>
            Knowledge & Clarifications
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-5.5xl font-black text-[#093965] tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Find clear, transparent information regarding our virtual assistant onboarding, international time zone coverage, SLA commitments, and data confidentiality.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-md mx-auto relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions (e.g. security, hours, scale)..."
              className="w-full px-5 py-3.5 pl-12 rounded-2xl border border-slate-300 text-sm shadow-xs focus:outline-none focus:border-[#2E8D9F] focus:ring-2 focus:ring-[#2E8D9F]/20 bg-white"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* FAQS DISPLAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {searchTerm ? (
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Found {filteredFaqs.length} matching question(s):
            </div>
            {filteredFaqs.length === 0 ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
                <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                <h3 className="text-base font-bold text-slate-700">No matching questions found</h3>
                <p className="text-xs text-slate-500 mt-1">Try searching for terms like "hours", "scale", "USA", or "security".</p>
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {faq.category}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#093965]">{faq.question}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))
            )}
          </div>
        ) : (
          <FAQAccordion />
        )}
      </section>

      {/* STILL HAVE QUESTIONS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#062644] text-white p-8 sm:p-12 border border-[#2E8D9F]/30 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Have a Specific Question About Your Workflow?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Our operational directors are ready to discuss your software stack, communication protocol, and workload distribution.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3.5 rounded-xl bg-[#FA7D3C] hover:bg-[#e66b2a] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Ask an Advisor Directly
            </button>
            <a
              href="tel:+918302648461"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#FA7D3C]" />
              <span>Call +91 83026 48461</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
