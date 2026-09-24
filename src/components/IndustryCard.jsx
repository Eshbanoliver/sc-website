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

export default function IndustryCard({ industry, compact = false }) {
  const IconComponent = ICON_MAP[industry.iconName] || Briefcase;

  return (
    <div className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#2E8D9F] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-xl bg-[#093965]/8 text-[#093965] group-hover:bg-[#2E8D9F] group-hover:text-white flex items-center justify-center transition-all duration-300 mb-5 shadow-xs">
          <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-[#093965] group-hover:text-[#2E8D9F] transition-colors leading-snug">
          {industry.name}
        </h3>

        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#2E8D9F]">
          {industry.tagline}
        </p>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
          {industry.description}
        </p>

        {!compact && industry.solutions && (
          <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Common Support Workflows:
            </div>
            {industry.solutions.map((sol, idx) => (
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
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#093965] group-hover:text-[#FA7D3C] transition-colors uppercase tracking-wider"
        >
          <span>Discuss Industry Scope</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
