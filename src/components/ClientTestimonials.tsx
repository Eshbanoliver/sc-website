import React, { useState } from "react";
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight, Globe, Award, Sparkles } from "lucide-react";
import { TESTIMONIALS, TestimonialItem } from "../data/testimonialsAndCompaniesData";

interface ClientTestimonialsProps {
  onOpenConsultation?: () => void;
}

export default function ClientTestimonials({ onOpenConsultation }: ClientTestimonialsProps): React.JSX.Element {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const countries = ["All", "USA", "Canada", "United Kingdom", "Singapore", "Australia", "Ajmer (India)"];

  const filteredTestimonials = selectedFilter === "All"
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.country.toLowerCase().includes(selectedFilter.toLowerCase()) || selectedFilter.toLowerCase().includes(t.country.toLowerCase()));

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
  };

  // Safe active testimonial
  const activeTestimonial: TestimonialItem = filteredTestimonials[currentIndex] || filteredTestimonials[0] || TESTIMONIALS[0];

  return (
    <div className="relative w-full space-y-12">
      {/* Top Header & Metrics Bar */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#093965]/10 text-[#093965] text-xs font-bold tracking-wider uppercase border border-[#093965]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#FA7D3C]" />
            <span>Proven Client Impact & Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#093965] tracking-tight">
            Trusted by Leaders <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#093965] via-[#2E8D9F] to-[#FA7D3C]">
              Across 6 Global Markets
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Real feedback from founders, COOs, and operations directors who delegating routine workflows to Staff Clicks to scale their companies.
          </p>
        </div>

        {/* Aggregate Social Proof Widget */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm shrink-0">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-1.5 text-base font-black text-[#093965]">5.0 / 5.0</span>
            </div>
            <span className="text-xs text-slate-500 font-medium mt-0.5">
              Verified Client Satisfaction Across 100+ Engagements
            </span>
          </div>
          <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>100% SLA Verified</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs by Country */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 text-xs sm:text-sm font-semibold">
        <span className="text-slate-400 shrink-0 font-medium mr-1 flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-[#2E8D9F]" />
          Filter by Region:
        </span>
        {countries.map((c) => {
          const isActive = selectedFilter === c;
          return (
            <button
              key={c}
              onClick={() => {
                setSelectedFilter(c);
                setCurrentIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-xl transition-all duration-200 shrink-0 cursor-pointer ${
                isActive
                  ? "bg-[#093965] text-white shadow-sm font-bold"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Main Spotlight Featured Testimonial Card */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#062644] via-[#093965] to-[#0c4475] p-6 sm:p-10 lg:p-12 text-white shadow-2xl border border-[#2E8D9F]/40 overflow-hidden">
        {/* Decorative background glow & elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#2E8D9F]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FA7D3C]/15 rounded-full blur-3xl pointer-events-none"></div>
        <Quote className="absolute top-6 right-8 w-24 h-24 text-white/[0.04] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Testimonial Details */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold border border-white/15 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Verified Client Engagement
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FA7D3C]/20 text-[#FA7D3C] text-xs font-extrabold border border-[#FA7D3C]/30">
                {activeTestimonial.service}
              </span>
              <span className="text-base" title={activeTestimonial.country}>{activeTestimonial.flag}</span>
              <span className="text-xs text-slate-300 font-medium">
                {activeTestimonial.location}, {activeTestimonial.country}
              </span>
            </div>

            {/* Highlight Heading */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-snug">
              &ldquo;{activeTestimonial.highlight}&rdquo;
            </h3>

            {/* Testimonial Quote */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal italic">
              &ldquo;{activeTestimonial.quote}&rdquo;
            </p>

            {/* Author Profile */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${activeTestimonial.avatarBg} text-white font-black text-lg flex items-center justify-center shadow-lg border border-white/20 shrink-0`}>
                  {activeTestimonial.initials}
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-white flex items-center gap-2">
                    {activeTestimonial.name}
                    <span className="text-xs text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-md font-semibold border border-emerald-500/30">
                      ✓ Active Partner
                    </span>
                  </h4>
                  <p className="text-xs text-slate-300 font-medium">
                    {activeTestimonial.role} • <strong className="text-white">{activeTestimonial.company}</strong>
                  </p>
                  <p className="text-[11px] text-[#3cb4cb] font-semibold">{activeTestimonial.companyType}</p>
                </div>
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Testimonial"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-slate-300 px-2">
                  {currentIndex + 1} / {filteredTestimonials.length}
                </span>
                <button
                  onClick={handleNext}
                  aria-label="Next Testimonial"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Key Impact Metric Pill */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3cb4cb]">
                Key Measured Result
              </span>
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#3cb4cb] to-white">
                {activeTestimonial.metrics.value}
              </div>
              <p className="text-xs text-slate-300 font-medium">
                {activeTestimonial.metrics.label}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <Award className="w-4 h-4 text-[#FA7D3C]" />
                <span>Standardized Service Delivery</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                All staff placements include rigorous onboarding, supervised daily task tracking, and weekly leadership syncs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Other Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredTestimonials.slice(0, 3).map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setCurrentIndex(idx)}
            className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border ${
              currentIndex === idx
                ? "bg-white border-[#093965] shadow-lg ring-2 ring-[#093965]/20 -translate-y-1"
                : "bg-white border-slate-200 hover:border-[#2E8D9F] hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <span>{item.flag}</span>
                <span>{item.country}</span>
              </span>
            </div>

            <h4 className="text-sm font-extrabold text-[#093965] mb-2 line-clamp-1">
              &ldquo;{item.highlight}&rdquo;
            </h4>

            <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4 italic">
              &ldquo;{item.quote}&rdquo;
            </p>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${item.avatarBg} text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                {item.initials}
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-slate-900 truncate">{item.name}</div>
                <div className="text-[11px] text-slate-500 truncate">{item.role}, {item.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
