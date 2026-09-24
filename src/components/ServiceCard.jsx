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
  Check
} from "lucide-react";

const ICON_MAP = {
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

export default function ServiceCard({ service, index = 0 }) {
  const IconComponent = ICON_MAP[service.iconName] || Briefcase;

  return (
    <div 
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#2E8D9F] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
    >
      {/* Top accent highlight on hover */}
      <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-[#093965] via-[#2E8D9F] to-[#FA7D3C] rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-[#093965]/10 to-[#2E8D9F]/15 flex items-center justify-center text-[#093965] group-hover:text-[#FA7D3C] group-hover:bg-[#093965] transition-all duration-300 shadow-sm">
            <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 group-hover:bg-[#2E8D9F]/10 group-hover:text-[#2E8D9F] transition-colors">
            {service.badge || "Service"}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#093965] group-hover:text-[#2E8D9F] transition-colors leading-snug">
          <Link to={`/services/${service.slug}`} className="hover:underline">
            {service.title}
          </Link>
        </h3>

        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed line-clamp-3">
          {service.shortDescription}
        </p>

        {/* Task highlights list */}
        <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
          {service.keyAreas.slice(0, 4).map((area, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
              <Check className="w-3.5 h-3.5 text-[#2E8D9F] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{area}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#093965] group-hover:text-[#FA7D3C] transition-colors uppercase tracking-wider"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <span className="text-[11px] font-mono text-slate-400">
          0{index + 1}
        </span>
      </div>
    </div>
  );
}
