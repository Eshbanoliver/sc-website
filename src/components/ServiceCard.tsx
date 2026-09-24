import React from "react";
import { Link } from "react-router-dom";
import { 
  UserCheck, 
  UserSearch, 
  Headphones, 
  Database, 
  Target, 
  Briefcase, 
  Calculator, 
  ShoppingBag, 
  ShieldCheck, 
  ArrowRight,
  Check,
  LucideIcon
} from "lucide-react";
import { Service } from "../types";

const ICON_MAP: Record<string, LucideIcon> = {
  UserCheck,
  UserSearch,
  Headphones,
  Database,
  Target,
  Briefcase,
  Calculator,
  ShoppingBag,
  ShieldCheck
};

// Subtle color theme variations for each card
const CARD_THEMES = [
  {
    bg: "bg-gradient-to-br from-[#093965]/[0.05] via-white to-[#2E8D9F]/[0.03]",
    borderHover: "hover:border-[#093965]/60",
    iconBg: "bg-[#093965]/10 text-[#093965]",
    iconHoverBg: "group-hover:bg-[#093965] group-hover:text-white",
    badgeBg: "bg-[#093965]/8 text-[#093965]",
    accentGlow: "from-[#093965]/10 to-transparent",
    accentDot: "bg-[#093965]"
  },
  {
    bg: "bg-gradient-to-br from-[#2E8D9F]/[0.07] via-white to-[#093965]/[0.02]",
    borderHover: "hover:border-[#2E8D9F]",
    iconBg: "bg-[#2E8D9F]/15 text-[#226e7d]",
    iconHoverBg: "group-hover:bg-[#2E8D9F] group-hover:text-white",
    badgeBg: "bg-[#2E8D9F]/10 text-[#226e7d]",
    accentGlow: "from-[#2E8D9F]/15 to-transparent",
    accentDot: "bg-[#2E8D9F]"
  },
  {
    bg: "bg-gradient-to-br from-[#FA7D3C]/[0.06] via-white to-[#2E8D9F]/[0.03]",
    borderHover: "hover:border-[#FA7D3C]/70",
    iconBg: "bg-[#FA7D3C]/12 text-[#e66b2a]",
    iconHoverBg: "group-hover:bg-[#FA7D3C] group-hover:text-white",
    badgeBg: "bg-[#FA7D3C]/10 text-[#e66b2a]",
    accentGlow: "from-[#FA7D3C]/15 to-transparent",
    accentDot: "bg-[#FA7D3C]"
  },
  {
    bg: "bg-gradient-to-br from-sky-500/[0.05] via-white to-[#093965]/[0.03]",
    borderHover: "hover:border-sky-500/70",
    iconBg: "bg-sky-100 text-sky-700",
    iconHoverBg: "group-hover:bg-sky-600 group-hover:text-white",
    badgeBg: "bg-sky-50 text-sky-700",
    accentGlow: "from-sky-500/10 to-transparent",
    accentDot: "bg-sky-500"
  },
  {
    bg: "bg-gradient-to-br from-[#062644]/[0.06] via-white to-[#FA7D3C]/[0.02]",
    borderHover: "hover:border-[#093965]",
    iconBg: "bg-[#093965]/10 text-[#093965]",
    iconHoverBg: "group-hover:bg-[#093965] group-hover:text-white",
    badgeBg: "bg-[#093965]/8 text-[#093965]",
    accentGlow: "from-[#093965]/15 to-transparent",
    accentDot: "bg-[#093965]"
  },
  {
    bg: "bg-gradient-to-br from-[#2E8D9F]/[0.08] via-white to-emerald-500/[0.02]",
    borderHover: "hover:border-[#2E8D9F]",
    iconBg: "bg-[#2E8D9F]/15 text-[#2E8D9F]",
    iconHoverBg: "group-hover:bg-[#2E8D9F] group-hover:text-white",
    badgeBg: "bg-[#2E8D9F]/12 text-[#2E8D9F]",
    accentGlow: "from-[#2E8D9F]/15 to-transparent",
    accentDot: "bg-[#2E8D9F]"
  },
  {
    bg: "bg-gradient-to-br from-indigo-500/[0.05] via-white to-[#2E8D9F]/[0.02]",
    borderHover: "hover:border-indigo-500/70",
    iconBg: "bg-indigo-50 text-indigo-700",
    iconHoverBg: "group-hover:bg-indigo-600 group-hover:text-white",
    badgeBg: "bg-indigo-50 text-indigo-700",
    accentGlow: "from-indigo-500/10 to-transparent",
    accentDot: "bg-indigo-600"
  },
  {
    bg: "bg-gradient-to-br from-amber-500/[0.06] via-white to-[#093965]/[0.02]",
    borderHover: "hover:border-amber-500/70",
    iconBg: "bg-amber-100 text-amber-800",
    iconHoverBg: "group-hover:bg-amber-600 group-hover:text-white",
    badgeBg: "bg-amber-50 text-amber-800",
    accentGlow: "from-amber-500/15 to-transparent",
    accentDot: "bg-amber-500"
  },
  {
    bg: "bg-gradient-to-br from-teal-500/[0.06] via-white to-[#FA7D3C]/[0.02]",
    borderHover: "hover:border-teal-600/70",
    iconBg: "bg-teal-100 text-teal-800",
    iconHoverBg: "group-hover:bg-teal-700 group-hover:text-white",
    badgeBg: "bg-teal-50 text-teal-800",
    accentGlow: "from-teal-500/15 to-transparent",
    accentDot: "bg-teal-600"
  }
];

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps): React.JSX.Element {
  const IconComponent = ICON_MAP[service.iconName] || Briefcase;
  const theme = CARD_THEMES[index % CARD_THEMES.length];

  return (
    <div 
      className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl ${theme.bg} border border-slate-200/80 ${theme.borderHover} transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(9,57,101,0.08)] hover:-translate-y-1.5 overflow-hidden`}
    >
      {/* Decorative gradient corner element that glows on hover */}
      <div 
        className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${theme.accentGlow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Subtle top indicator bar */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className={`w-13 h-13 rounded-xl ${theme.iconBg} ${theme.iconHoverBg} flex items-center justify-center transition-all duration-300 shadow-xs`}>
            <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${theme.badgeBg} flex items-center gap-1.5 transition-colors`}>
            <span className={`w-1.5 h-1.5 rounded-full ${theme.accentDot}`}></span>
            {service.badge || "Service"}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-[#093965] group-hover:text-[#2E8D9F] transition-colors leading-snug">
          <Link to={`/services/${service.slug}`} className="hover:underline">
            {service.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
          {service.shortDescription}
        </p>

        {/* Task highlights list */}
        <div className="mt-6 pt-5 border-t border-slate-200/60 space-y-2.5">
          {service.keyAreas.slice(0, 4).map((area, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
              <Check className="w-3.5 h-3.5 text-[#2E8D9F] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{area}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 pt-4 border-t border-slate-200/60 flex items-center justify-between">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-xs font-extrabold text-[#093965] group-hover:text-[#FA7D3C] transition-colors uppercase tracking-wider"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
        <span className="text-[11px] font-mono font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
          0{index + 1}
        </span>
      </div>
    </div>
  );
}
