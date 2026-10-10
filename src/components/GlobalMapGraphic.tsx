import React from "react";
import { ShieldCheck, Radio } from "lucide-react";

export default function GlobalMapGraphic(): React.JSX.Element {
  const globalMarkets = [
    {
      flag: "🇮🇳",
      code: "IN",
      name: "Ajmer",
      title: "Delivery & Operations Hub",
      tag: "Operations Hub",
      tagColor: "bg-[#2E8D9F]/25 text-[#3cb4cb] border-[#2E8D9F]/40",
      hoverBorder: "hover:border-[#2E8D9F]/60",
      desc: "Workforce delivery center orchestrating training, QA supervision, standard operating procedures, and 24/6 cross-border execution.",
    },
    {
      flag: "🇺🇸",
      code: "US",
      name: "USA",
      title: "Serving B2B Clients Nationwide",
      tag: "Primary Market",
      tagColor: "bg-[#FA7D3C]/20 text-[#FA7D3C] border-[#FA7D3C]/40",
      hoverBorder: "hover:border-[#FA7D3C]/60",
      desc: "Real-time synchronization across EST, CST, and PST time zones for high-touch virtual staffing, lead generation, and executive assistance.",
    },
    {
      flag: "🇨🇦",
      code: "CA",
      name: "Canada",
      title: "Cross-Border Remote Teams",
      tag: "Growth Market",
      tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      hoverBorder: "hover:border-emerald-400/60",
      desc: "Supporting Canadian SMBs, agencies, and enterprises with dependable back-office operations, accounting, and multi-channel customer care.",
    },
    {
      flag: "🇸🇬",
      code: "SG",
      name: "Singapore",
      title: "Pan-Asian Business Support",
      tag: "APAC Hub",
      tagColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      hoverBorder: "hover:border-purple-400/60",
      desc: "Real-time SGT synchronization catering to fintech ventures, international trading, and regional administrative execution.",
    },
    {
      flag: "🇦🇺",
      code: "AU",
      name: "Australia",
      title: "Oceania Enterprise Coverage",
      tag: "Active Coverage",
      tagColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      hoverBorder: "hover:border-cyan-400/60",
      desc: "AEST & AWST aligned staffing for logistics firms, digital agencies, and e-commerce stores requiring seamless daylight collaboration.",
    },
    {
      flag: "🇬🇧",
      code: "UK",
      name: "United Kingdom",
      title: "Corporate & Legal Support",
      tag: "Europe Hub",
      tagColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
      hoverBorder: "hover:border-blue-400/60",
      desc: "GMT & BST business hour coverage powering legal consulting, document processing, and customer retention for UK organizations.",
    },
  ];

  return (
    <div className="relative w-full rounded-3xl bg-[#093965] p-8 sm:p-10 lg:p-14 overflow-hidden border border-[#2E8D9F]/40 shadow-2xl">
      {/* Subtle radial gradients & ambient light */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#2E8D9F]/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-[#FA7D3C]/12 rounded-full blur-[100px] pointer-events-none"></div>

      {/* High-tech dot matrix pattern */}
      <div className="absolute inset-0 bg-dot-grid-dark opacity-30 pointer-events-none"></div>

      <div className="relative z-10 space-y-10">
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E8D9F]/20 text-[#3cb4cb] text-xs font-bold tracking-wider uppercase mb-2 border border-[#2E8D9F]/30">
              <Radio className="w-3.5 h-3.5 text-[#FA7D3C] animate-pulse" />
              Global Remote Workforce Mesh
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Supporting Distributed Business Operations
            </h3>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            Synchronized 24/6 SLA Coverage Across 6 Markets
          </div>
        </div>

        {/* Abstract World Map Graphic with Connected Node Dots */}
        <div className="relative py-4 px-2">
          {/* SVG Map Silhouette & Connecting Vectors */}
          <div className="relative w-full h-[240px] sm:h-[280px] flex items-center justify-center">
            <svg 
              className="w-full h-full opacity-40" 
              viewBox="0 0 1000 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* World outline abstracted mesh lines */}
              <path d="M150 120 Q 220 80 320 140 T 450 180 T 600 130 T 780 160 T 900 110" stroke="#2E8D9F" strokeWidth="1.2" strokeDasharray="4 4" />
              <path d="M180 200 Q 280 160 380 220 T 520 240 T 680 190 T 820 220" stroke="#2E8D9F" strokeWidth="0.8" strokeDasharray="3 3" />
              <path d="M220 260 Q 340 220 460 270 T 620 280 T 750 250" stroke="#2E8D9F" strokeWidth="1" strokeDasharray="5 5" />
              
              {/* Arched connecting vectors radiating from Ajmer Hub (approx 680, 180) */}
              {/* To North America (USA 260, 150 & Canada 280, 100) */}
              <path d="M 680 180 Q 470 60 280 100" stroke="url(#gradientVector)" strokeWidth="2" strokeLinecap="round" />
              <path d="M 680 180 Q 470 110 260 150" stroke="#FA7D3C" strokeWidth="1.8" strokeDasharray="5 5" opacity="0.8" />
              
              {/* To UK (approx 480, 110) */}
              <path d="M 680 180 Q 580 120 480 110" stroke="#3cb4cb" strokeWidth="2" strokeLinecap="round" />
              
              {/* To Singapore (approx 780, 230) */}
              <path d="M 680 180 Q 730 200 780 230" stroke="#2E8D9F" strokeWidth="2" strokeLinecap="round" />

              {/* To Australia (approx 850, 310) */}
              <path d="M 680 180 Q 790 270 850 310" stroke="url(#gradientVector)" strokeWidth="2" strokeLinecap="round" />

              <defs>
                <linearGradient id="gradientVector" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FA7D3C" />
                  <stop offset="50%" stopColor="#2E8D9F" />
                  <stop offset="100%" stopColor="#3cb4cb" />
                </linearGradient>
              </defs>

              {/* Glowing node dots on SVG */}
              {/* Canada */}
              <circle cx="280" cy="100" r="5" fill="#2E8D9F" />
              <circle cx="280" cy="100" r="12" stroke="#2E8D9F" strokeWidth="1.2" opacity="0.6" className="animate-ping" />

              {/* USA */}
              <circle cx="260" cy="150" r="6" fill="#FA7D3C" />
              <circle cx="260" cy="150" r="14" stroke="#FA7D3C" strokeWidth="1.5" opacity="0.5" className="animate-ping" />

              {/* UK */}
              <circle cx="480" cy="110" r="5" fill="#3cb4cb" />
              <circle cx="480" cy="110" r="12" stroke="#3cb4cb" strokeWidth="1.2" opacity="0.6" className="animate-ping" />

              {/* Ajmer Hub */}
              <circle cx="680" cy="180" r="8" fill="#FA7D3C" />
              <circle cx="680" cy="180" r="20" stroke="#FA7D3C" strokeWidth="2" opacity="0.7" className="animate-ping" />

              {/* Singapore */}
              <circle cx="780" cy="230" r="5" fill="#2E8D9F" />
              <circle cx="780" cy="230" r="12" stroke="#2E8D9F" strokeWidth="1.2" opacity="0.6" className="animate-ping" />

              {/* Australia */}
              <circle cx="850" cy="310" r="6" fill="#3cb4cb" />
              <circle cx="850" cy="310" r="15" stroke="#3cb4cb" strokeWidth="1.5" opacity="0.5" className="animate-ping" />
            </svg>

            {/* Float Markers Overlaid */}
            <div className="absolute top-2 left-2 sm:left-14 bg-[#062644]/90 border border-slate-700/80 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold text-slate-200 shadow-lg flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Canada</span>
            </div>

            <div className="absolute bottom-6 left-4 sm:left-16 bg-[#062644]/90 border border-[#FA7D3C]/40 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold text-white shadow-lg flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA7D3C]"></span>
              <span>USA</span>
            </div>

            <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-[#062644]/90 border border-blue-400/40 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold text-blue-200 shadow-lg flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span>United Kingdom</span>
            </div>

            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 bg-[#062644]/95 border border-[#FA7D3C] px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-white shadow-xl flex items-center gap-2 ring-2 ring-[#FA7D3C]/30">
              <span className="w-2 h-2 rounded-full bg-[#FA7D3C] animate-ping"></span>
              <span>Ajmer (Ops Hub)</span>
            </div>

            <div className="absolute bottom-16 right-16 sm:right-28 bg-[#062644]/90 border border-purple-400/40 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold text-purple-200 shadow-lg flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>Singapore</span>
            </div>

            <div className="absolute bottom-2 right-4 sm:right-12 bg-[#062644]/90 border border-[#2E8D9F]/60 px-2.5 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-[#3cb4cb] shadow-lg flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#3cb4cb]"></span>
              <span>Australia</span>
            </div>
          </div>
        </div>

        {/* 6 Location Pills / Sleek Metric Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {globalMarkets.map((m) => (
            <div
              key={m.name}
              className={`p-5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 ${m.hoverBorder} transition-all duration-300 backdrop-blur-md flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{m.flag}</span>
                    <span className="text-lg font-black text-white">{m.name}</span>
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${m.tagColor}`}>
                    {m.tag}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-200">
                  {m.title}
                </div>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed font-normal">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 border-t border-white/10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FA7D3C]" />
            <span>Strict data security, NDA-protected environments, and transparent communication protocols.</span>
          </div>
          <div className="font-mono text-white/80 shrink-0">
            Inquiries: <strong className="text-white">info@staffclicks.com</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
