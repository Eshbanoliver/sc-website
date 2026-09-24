import React from "react";
import {
  Shield,
  TrendingUp,
  ShoppingBag,
  Building,
  HeartPulse,
  Cpu,
  Megaphone,
  Briefcase,
  Users,
  Store,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const ICON_MAP = {
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
};

// Distinct theme accents for industry tiles
const INDUSTRY_ACCENTS = [
  { line: "bg-[#093965]", hoverBg: "group-hover:bg-gradient-to-b group-hover:from-blue-50/50 group-hover:to-white", border: "hover:border-[#093965]", iconColor: "text-[#093965]", arrowColor: "group-hover:text-[#093965]" },
  { line: "bg-[#2E8D9F]", hoverBg: "group-hover:bg-gradient-to-b group-hover:from-teal-50/50 group-hover:to-white", border: "hover:border-[#2E8D9F]", iconColor: "text-[#2E8D9F]", arrowColor: "group-hover:text-[#2E8D9F]" },
  { line: "bg-[#FA7D3C]", hoverBg: "group-hover:bg-gradient-to-b group-hover:from-orange-50/50 group-hover:to-white", border: "hover:border-[#FA7D3C]", iconColor: "text-[#FA7D3C]", arrowColor: "group-hover:text-[#FA7D3C]" },
  { line: "bg-sky-600", hoverBg: "group-hover:bg-gradient-to-b group-hover:from-sky-50/50 group-hover:to-white", border: "hover:border-sky-600", iconColor: "text-sky-600", arrowColor: "group-hover:text-sky-600" },
  { line: "bg-emerald-600", hoverBg: "group-hover:bg-gradient-to-b group-hover:from-emerald-50/50 group-hover:to-white", border: "hover:border-emerald-600", iconColor: "text-emerald-600", arrowColor: "group-hover:text-emerald-600" },
  { line: "bg-indigo-600", hoverBg: "group-hover:bg-gradient-to-b group-hover:from-indigo-50/50 group-hover:to-white", border: "hover:border-indigo-600", iconColor: "text-indigo-600", arrowColor: "group-hover:text-indigo-600" },
  { line: "bg-rose-600", hoverBg: "group-hover:bg-gradient-to-b group-hover:from-rose-50/50 group-hover:to-white", border: "hover:border-rose-600", iconColor: "text-rose-600", arrowColor: "group-hover:text-rose-600" },
  { line: "bg-[#062644]", hoverBg: "group-hover:bg-gradient-to-b group-hover:from-slate-100/70 group-hover:to-white", border: "hover:border-[#093965]", iconColor: "text-[#062644]", arrowColor: "group-hover:text-[#093965]" },
  { line: "bg-teal-700", hoverBg: "group-hover:bg-gradient-to-b group-hover:from-teal-50/60 group-hover:to-white", border: "hover:border-teal-700", iconColor: "text-teal-700", arrowColor: "group-hover:text-teal-700" },
  { line: "bg-amber-600", hoverBg: "group-hover:bg-gradient-to-b group-hover:from-amber-50/50 group-hover:to-white", border: "hover:border-amber-600", iconColor: "text-amber-600", arrowColor: "group-hover:text-amber-600" }
];

export default function IndustryCard({ industry, index = 0, compact = false }) {
  const IconComponent = ICON_MAP[industry.iconName] || Briefcase;
  const accent = INDUSTRY_ACCENTS[index % INDUSTRY_ACCENTS.length];

  return (
    <div className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white ${accent.hoverBg} border border-slate-200/90 ${accent.border} transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_14px_30px_rgba(9,57,101,0.08)] hover:-translate-y-1.5 overflow-hidden`}>
      {/* Top colored accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 ${accent.line} transition-transform duration-300`}></div>

      <div>
        <div className="flex items-center justify-between mb-5">
          <div className={`w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:shadow-sm ${accent.iconColor}`}>
            <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-115" />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-600 transition-colors">
            Sector {index < 9 ? `0${index + 1}` : index + 1}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-[#093965] group-hover:text-[#093965] transition-colors leading-snug">
          {industry.name}
        </h3>

        <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-[#2E8D9F]">
          {industry.tagline}
        </p>

        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
          {industry.description}
        </p>

        {!compact && industry.solutions && (
          <div className="mt-5 pt-4 border-t border-slate-100/90 space-y-2">
            <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
              Specialized Operations:
            </div>
            {industry.solutions.slice(0, 2).map((sol, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2E8D9F] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{sol}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          to="/contact"
          className={`inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 ${accent.arrowColor} transition-colors uppercase tracking-wider`}
        >
          <span>Discuss Scope</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </div>
  );
}
