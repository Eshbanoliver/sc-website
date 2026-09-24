import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles,
  Shield,
  TrendingUp,
  ShoppingBag,
  Building,
  HeartPulse,
  Cpu,
  Megaphone,
  Briefcase,
  Users,
  Store
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import IndustryCard from "../components/IndustryCard";
import { INDUSTRIES } from "../data/industriesData";

export default function Industries({ onOpenConsultation }) {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES[0]);

  return (
    <div className="space-y-24 sm:space-y-28 pt-8 pb-16">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#093965]/8 text-[#093965] border border-[#093965]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA7D3C]"></span>
            Targeted Domain Solutions
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-5.5xl font-black text-[#093965] tracking-tight leading-tight">
            Specialized BPO Workflows for High-Growth Industries
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Every vertical operates with unique compliance requirements, specialized software systems, and distinct operational paces. Explore how Staff Clicks configures remote teams around your industry.
          </p>
        </div>
      </section>

      {/* FEATURED INDUSTRY SPOTLIGHT (Interactive Deep Dive) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200 shadow-md p-6 sm:p-10">
          <div className="mb-6 flex flex-wrap items-center gap-2 border-b border-slate-100 pb-4 overflow-x-auto">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedIndustry.id === ind.id
                    ? "bg-[#093965] text-white shadow-sm"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-[#093965]"
                }`}
              >
                {ind.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2E8D9F]">
                Industry Deep-Dive
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#093965]">
                {selectedIndustry.name}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {selectedIndustry.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Operational Pain Points We Alleviate:
                </h4>
                <div className="space-y-2">
                  {selectedIndustry.keyChallenges.map((ch, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FA7D3C] mt-2 shrink-0"></span>
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#2E8D9F] mb-3">
                  Tailored Staff Clicks Solutions:
                </h4>
                <div className="space-y-2">
                  {selectedIndustry.solutions.map((sol, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2E8D9F] mt-0.5 shrink-0" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#062644] to-[#093965] text-white space-y-5">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FA7D3C] text-white">
                  Consultation
                </span>
                <h3 className="text-xl font-bold">
                  Deploy a Remote Team for {selectedIndustry.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our talent coordinators will outline candidate qualifications, software proficiencies, and shift schedules aligned to your market.
                </p>

                <div className="pt-2 space-y-2.5">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3 rounded-xl bg-[#FA7D3C] hover:bg-[#e66b2a] text-white text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer"
                  >
                    Schedule Industry Consultation
                  </button>

                  <a
                    href="tel:+918302648461"
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/20 transition-colors flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-[#FA7D3C]" />
                    <span>Call +91 83026 48461</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL 10 INDUSTRIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Complete Sector Matrix"
          title="All 10 Sectors Supported"
          subtitle="Explore the full spectrum of industries we serve with dedicated remote professionals."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INDUSTRIES.map((ind, idx) => (
            <IndustryCard key={ind.id} industry={ind} index={idx} />
          ))}
        </div>
      </section>

      {/* CALLOUT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#093965] text-white text-center space-y-6 border border-[#2E8D9F]/40 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Operating in a Different Niche or Custom Vertical?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Our operational framework allows us to master proprietary software platforms and unique standard operating procedures quickly. Contact us to evaluate your specific workflow.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded-xl bg-[#FA7D3C] hover:bg-[#e66b2a] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Discuss Your Specific Industry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
