import React from "react";
import { Globe, MapPin, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";

export default function GlobalMapGraphic() {
  return (
    <div className="relative w-full rounded-2xl bg-[#062644] p-6 sm:p-8 lg:p-12 overflow-hidden border border-[#2E8D9F]/30 shadow-2xl">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2E8D9F]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FA7D3C]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Grid line overlay */}
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-700/60 mb-8">
          <div>
            <div className="flex items-center gap-2 text-[#3cb4cb] text-sm font-semibold tracking-wide">
              <Globe className="w-4 h-4 animate-spin-slow" />
              GLOBAL CROSS-BORDER SUPPORT ARCHITECTURE
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Synchronized Delivery Across 3 Key Business Hubs
            </h3>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2E8D9F]/15 border border-[#2E8D9F]/30 text-xs text-slate-200">
            <span className="w-2 h-2 rounded-full bg-[#FA7D3C] animate-pulse"></span>
            Real-Time Remote Collaboration
          </div>
        </div>

        {/* 3 Core Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* India Node */}
          <div className="p-5 rounded-xl bg-slate-800/80 border border-[#2E8D9F]/40 hover:border-[#2E8D9F] transition-all duration-300 relative group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-xl">🇮🇳</span> India
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#2E8D9F]/20 text-[#3cb4cb] border border-[#2E8D9F]/30">
                Operations Hub
              </span>
            </div>
            <p className="text-sm font-medium text-slate-300 mb-1">
              Ajmer, Rajasthan, India
            </p>
            <p className="text-xs text-slate-400 mb-4">
              Dedicated workforce delivery center providing skilled talent, QA supervision, and process execution.
            </p>
            <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
              <span className="text-slate-400">Coverage:</span>
              <span className="font-semibold text-white">Full Shift & Turnaround</span>
            </div>
          </div>

          {/* USA Node */}
          <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-[#FA7D3C]/60 transition-all duration-300 relative group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-xl">🇺🇸</span> USA
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FA7D3C]/15 text-[#FA7D3C] border border-[#FA7D3C]/30">
                Primary Market
              </span>
            </div>
            <p className="text-sm font-medium text-slate-300 mb-1">
              Serving B2B Clients Nationwide
            </p>
            <p className="text-xs text-slate-400 mb-4">
              Aligned to EST, CST, and PST business hours for real-time executive assistance, lead generation, and customer care.
            </p>
            <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
              <span className="text-slate-400">Time Zones:</span>
              <span className="font-semibold text-white">EST / CST / MST / PST</span>
            </div>
          </div>

          {/* Canada Node */}
          <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-[#2E8D9F] transition-all duration-300 relative group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-xl">🇨🇦</span> Canada
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                Growth Market
              </span>
            </div>
            <p className="text-sm font-medium text-slate-300 mb-1">
              Cross-Border Remote Staffing
            </p>
            <p className="text-xs text-slate-400 mb-4">
              Supporting Canadian SMBs, agencies, and enterprises with reliable back-office and customer support workflows.
            </p>
            <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
              <span className="text-slate-400">Service:</span>
              <span className="font-semibold text-white">Dedicated Remote Operations</span>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-[#093965] to-[#2E8D9F]/40 border border-[#2E8D9F]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-slate-200 text-sm">
            <ShieldCheck className="w-5 h-5 text-[#FA7D3C] shrink-0" />
            <span>Strict data security, NDA-backed workflows, and daily visibility for all international partners.</span>
          </div>
          <div className="text-xs font-semibold text-white whitespace-nowrap bg-[#062644] px-3 py-1.5 rounded-lg border border-slate-700">
            Direct Line: +91 83026 48461
          </div>
        </div>
      </div>
    </div>
  );
}
