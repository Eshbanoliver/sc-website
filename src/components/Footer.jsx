import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall, Mail, MapPin, Globe, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";
import { SERVICES } from "../data/servicesData";

export default function Footer({ onOpenConsultation }) {
  return (
    <footer className="bg-gradient-to-b from-[#093965] to-[#062644] text-slate-300 pt-16 pb-8 border-t border-slate-700/80 relative overflow-hidden">
      {/* Top glowing orange accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FA7D3C] to-transparent opacity-80"></div>

      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2E8D9F]/15 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#FA7D3C]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Callout Strip */}
        <div className="bg-gradient-to-r from-white/[0.08] to-white/[0.03] backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-14 border border-white/15 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FA7D3C] text-white mb-2 shadow-xs">
              Transform Operations
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Ready to delegate your repetitive processes?
            </h3>
            <p className="mt-1 text-slate-300 text-xs sm:text-sm">
              Discover how our dedicated remote assistants can reduce your operational workload.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+918302648461"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/20 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#FA7D3C]" />
              +91 83026 48461
            </a>
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-xl bg-[#FA7D3C] hover:bg-[#e66b2a] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Company Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2E8D9F] to-[#093965] flex items-center justify-center text-white shadow-md border border-white/10">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                STAFF<span className="text-[#3cb4cb]">CLICKS</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Staff Clicks is a modern Virtual Assistance & Business Process Outsourcing company helping businesses across India, USA, and Canada streamline everyday operations with reliable, skilled remote professionals.
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2E8D9F]" />
                <span>Confidential & NDA Protected Workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#FA7D3C]" />
                <span>Cross-Border Remote Operations</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA7D3C]"></span>
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/why-staff-clicks" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Why Staff Clicks
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Industries We Support
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Careers & Talent Network
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E8D9F]"></span>
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICES.slice(0, 7).map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="hover:text-white hover:translate-x-0.5 transition-all inline-block line-clamp-1"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-xs font-bold text-[#3cb4cb] hover:underline flex items-center gap-1 mt-1"
                >
                  View All 9 Services <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Markets & Contact */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Service Markets & Direct Line
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-white/[0.06] border border-white/10">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FA7D3C]" />
                  <span>Operations Hub:</span>
                </div>
                <p className="text-slate-300 mt-0.5">Ajmer, Rajasthan, India</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.06] border border-white/10">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#2E8D9F]" />
                  <span>Primary Client Markets:</span>
                </div>
                <p className="text-slate-300 mt-0.5">USA & Canada</p>
                <p className="text-[11px] text-slate-400">Synchronized to EST, CST & PST</p>
              </div>

              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Direct Inquiries:
                </span>
                <a
                  href="tel:+918302648461"
                  className="text-white hover:text-[#FA7D3C] font-bold text-sm flex items-center gap-1.5 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-[#FA7D3C]" />
                  +91 83026 48461
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 <strong className="text-white font-bold">Staff Clicks</strong>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
