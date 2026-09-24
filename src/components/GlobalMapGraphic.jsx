import React from "react";
import { Globe, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Zap, Radio } from "lucide-react";

export default function GlobalMapGraphic() {
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
            Synchronized 24/6 SLA Coverage
          </div>
        </div>

        {/* Abstract World Map Graphic with Connected Node Dots */}
        <div className="relative py-4 px-2">
          {/* SVG Map Silhouette & Connecting Vectors */}
          <div className="relative w-full h-[220px] sm:h-[260px] flex items-center justify-center">
            <svg 
              className="w-full h-full opacity-35" 
              viewBox="0 0 1000 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* World outline abstracted mesh lines */}
              <path d="M150 120 Q 220 80 320 140 T 450 180 T 600 130 T 780 160 T 900 110" stroke="#2E8D9F" strokeWidth="1.2" strokeDasharray="4 4" />
              <path d="M180 200 Q 280 160 380 220 T 520 240 T 680 190 T 820 220" stroke="#2E8D9F" strokeWidth="0.8" strokeDasharray="3 3" />
              <path d="M220 260 Q 340 220 460 270 T 620 280 T 750 250" stroke="#2E8D9F" strokeWidth="1" strokeDasharray="5 5" />
              
              {/* Arched connecting vectors between North America & India */}
              {/* USA/Canada (approx x: 260, y: 150) to India (approx x: 710, y: 210) */}
              <path 
                d="M 270 140 Q 480 40 710 210" 
                stroke="url(#gradientVector)" 
                strokeWidth="2.5" 
                strokeLinecap="round"
              />
              <path 
                d="M 290 110 Q 500 20 710 210" 
                stroke="#FA7D3C" 
                strokeWidth="1.5" 
                strokeDasharray="6 6"
                opacity="0.8"
              />

              <defs>
                <linearGradient id="gradientVector" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FA7D3C" />
                  <stop offset="50%" stopColor="#2E8D9F" />
                  <stop offset="100%" stopColor="#3cb4cb" />
                </linearGradient>
              </defs>

              {/* Glowing node dots on SVG */}
              {/* Canada Node */}
              <circle cx="280" cy="100" r="6" fill="#2E8D9F" />
              <circle cx="280" cy="100" r="14" stroke="#2E8D9F" strokeWidth="1.5" opacity="0.6" className="animate-ping" />

              {/* USA Node */}
              <circle cx="260" cy="150" r="7" fill="#FA7D3C" />
              <circle cx="260" cy="150" r="16" stroke="#FA7D3C" strokeWidth="1.5" opacity="0.5" className="animate-ping" />

              {/* India (Ajmer Hub) Node */}
              <circle cx="710" cy="210" r="8" fill="#3cb4cb" />
              <circle cx="710" cy="210" r="20" stroke="#3cb4cb" strokeWidth="2" opacity="0.7" className="animate-ping" />
            </svg>

            {/* Float Markers Overlaid */}
            <div className="absolute top-2 left-6 sm:left-16 bg-[#062644]/90 border border-slate-700/80 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-slate-200 shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Canada: Remote BPO Reach
            </div>

            <div className="absolute bottom-6 left-12 sm:left-24 bg-[#062644]/90 border border-[#FA7D3C]/40 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-white shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FA7D3C]"></span>
              USA: Nationwide B2B Operations
            </div>

            <div className="absolute bottom-8 right-6 sm:right-20 bg-[#062644]/90 border border-[#2E8D9F]/60 px-4 py-1.5 rounded-full text-[11px] font-bold text-[#3cb4cb] shadow-lg flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3cb4cb]"></span>
              India: Ajmer Operational Hub
            </div>
          </div>
        </div>

        {/* 3 Location Pills / Sleek Metric Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* India Pill */}
          <div className="p-5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-[#2E8D9F]/60 transition-all duration-300 backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">🇮🇳</span>
                <span className="text-lg font-black text-white">India</span>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#2E8D9F]/25 text-[#3cb4cb] border border-[#2E8D9F]/40">
                Operations Hub
              </span>
            </div>
            <div className="text-xs font-bold text-slate-200">
              Ajmer, Rajasthan, India
            </div>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Workforce delivery center orchestrating training, standard operating procedures, and cross-border execution.
            </p>
          </div>

          {/* USA Pill */}
          <div className="p-5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-[#FA7D3C]/60 transition-all duration-300 backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">🇺🇸</span>
                <span className="text-lg font-black text-white">USA</span>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FA7D3C]/20 text-[#FA7D3C] border border-[#FA7D3C]/40">
                Primary Market
              </span>
            </div>
            <div className="text-xs font-bold text-slate-200">
              Serving B2B Clients Nationwide
            </div>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Real-time synchronization across EST, CST, and PST time zones for high-touch virtual staffing and customer care.
            </p>
          </div>

          {/* Canada Pill */}
          <div className="p-5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-emerald-400/60 transition-all duration-300 backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">🇨🇦</span>
                <span className="text-lg font-black text-white">Canada</span>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                Growth Market
              </span>
            </div>
            <div className="text-xs font-bold text-slate-200">
              Cross-Border Remote Teams
            </div>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Supporting Canadian SMBs, agencies, and enterprises with dependable back-office and customer support workflows.
            </p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 border-t border-white/10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FA7D3C]" />
            <span>Strict data security, NDA-protected environments, and transparent communication protocols.</span>
          </div>
          <div className="font-mono text-white/80 shrink-0">
            Hotline: <strong className="text-white">+91 83026 48461</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
