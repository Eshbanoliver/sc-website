import React, { useState } from "react";
import { Building2, Users, CheckCircle, ArrowUpRight, TrendingUp, ShieldCheck, Zap, Globe2 } from "lucide-react";
import { COMPANIES_SERVED, COMPANY_PROFILES_METRICS, CompanyServed } from "../data/testimonialsAndCompaniesData";

interface CompaniesServedProps {
  onOpenConsultation?: () => void;
}

export default function CompaniesServed({ onOpenConsultation }: CompaniesServedProps): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Sectors" },
    { id: "tech", label: "Tech & SaaS" },
    { id: "ecommerce", label: "E-commerce & Retail" },
    { id: "legal", label: "Legal & Corporate" },
    { id: "logistics", label: "Logistics & Supply" },
    { id: "finance", label: "Finance & Health" },
  ];

  const filteredCompanies = activeCategory === "all"
    ? COMPANIES_SERVED
    : COMPANIES_SERVED.filter((c) => c.industryCategory === activeCategory);

  return (
    <div className="relative w-full space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E8D9F]/10 text-[#2E8D9F] text-xs font-bold tracking-wider uppercase border border-[#2E8D9F]/20">
          <Building2 className="w-3.5 h-3.5 text-[#FA7D3C]" />
          <span>Client Roster & Partnerships</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#093965] tracking-tight">
          Which Companies We Are Serving For?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          From fast-growing SaaS startups in North America to multinational logistics hubs in Australia and boutique wealth advisories in Singapore, see the organizations powered by Staff Clicks.
        </p>
      </div>

      {/* Infinite Logo Marquee Strip */}
      <div className="relative overflow-hidden py-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
        <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

        <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
          {[...COMPANIES_SERVED, ...COMPANIES_SERVED].map((company, index) => (
            <div
              key={`${company.id}-${index}`}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-colors shrink-0"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs text-white shadow-xs"
                style={{ backgroundColor: company.brandColor }}
              >
                {company.logoLetter}
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>{company.name}</span>
                  <span className="text-[11px]">{company.flag}</span>
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  {company.industry}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shrink-0 ${
                isActive
                  ? "bg-[#093965] text-white shadow-md shadow-[#093965]/20 scale-105"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Companies Served */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((comp) => (
          <div
            key={comp.id}
            className="group relative p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#2E8D9F] hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 overflow-hidden"
          >
            {/* Top accent glow on hover */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#093965] via-[#2E8D9F] to-[#FA7D3C] opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="space-y-4">
              {/* Header: Logo, Name & Region */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white shadow-md shrink-0"
                    style={{ backgroundColor: comp.brandColor }}
                  >
                    {comp.logoLetter}
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#093965] group-hover:text-[#2E8D9F] transition-colors">
                      {comp.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <span>{comp.flag}</span>
                      <span>{comp.country}</span>
                      <span>•</span>
                      <span className="text-[#FA7D3C] font-semibold">{comp.industry}</span>
                    </div>
                  </div>
                </div>

                <span className="p-2 rounded-xl bg-slate-50 group-hover:bg-[#093965]/10 text-slate-400 group-hover:text-[#093965] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              {/* Tagline */}
              <p className="text-xs text-slate-500 italic">
                &ldquo;{comp.tagline}&rdquo;
              </p>

              {/* Team Deployed Badge */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs text-slate-700">
                <Users className="w-4 h-4 text-[#2E8D9F] shrink-0" />
                <span className="font-bold text-[#093965]">Deployed Workforce:</span>
                <span className="font-semibold">{comp.teamSizeDeployed}</span>
              </div>

              {/* Operational Scope */}
              <div className="space-y-1.5">
                <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                  Services Provided:
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {comp.supportScope}
                </p>
              </div>
            </div>

            {/* Bottom Key Benefit Pill */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/80">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                <span>{comp.keyBenefit}</span>
              </div>
              <span className="text-[11px] font-bold text-slate-400">
                Active Contract
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Aggregate Metrics Bar */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#062644] to-[#093965] text-white border border-[#2E8D9F]/30 shadow-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center">
          {COMPANY_PROFILES_METRICS.map((metric, i) => (
            <div key={i} className={`space-y-1 ${i !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}>
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#3cb4cb] to-white">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-300">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Assurance Footer */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Ready to scale your business with the same dedicated operational support?</span>
          </div>
          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-xl bg-[#FA7D3C] hover:bg-[#e66c2d] text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-2 shrink-0"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Discuss Your Team Setup</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
