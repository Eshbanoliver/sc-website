import React from "react";

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
  className = ""
}) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : "text-left"} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
          light 
            ? "bg-[#2E8D9F]/20 text-[#3cb4cb] border border-[#2E8D9F]/30"
            : "bg-[#093965]/8 text-[#093965] border border-[#093965]/15"
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FA7D3C]"></span>
          {badge}
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-4.5xl font-extrabold tracking-tight leading-tight ${
        light ? "text-white" : "text-[#093965]"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          light ? "text-slate-300" : "text-slate-600"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
