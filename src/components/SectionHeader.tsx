import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
  className = ""
}: SectionHeaderProps) {
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
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-4.5xl font-extrabold tracking-tight leading-tight ${
        light ? "text-white" : "text-[#093965]"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed ${
          light ? "text-slate-300" : "text-slate-600"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
