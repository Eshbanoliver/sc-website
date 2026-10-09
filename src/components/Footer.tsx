import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall, Mail, MapPin, Globe, ArrowRight, ShieldCheck } from "lucide-react";
import { SERVICES } from "../data/servicesData";

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps): React.JSX.Element {
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
              href="mailto:contact@staffclicks.com"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/20 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#FA7D3C]" />
              contact@staffclicks.com
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
            <Link to="/" className="inline-flex items-center p-2 px-3 rounded-2xl bg-white shadow-md hover:opacity-95 transition-opacity">
              <img 
                src="/logo.png" 
                alt="Staff Clicks - Empowering Teams" 
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Staff Clicks is a modern Virtual Assistance & Business Process Outsourcing company helping businesses across Ajmer, USA, Canada, Singapore, Australia, and the United Kingdom streamline everyday operations with reliable, skilled remote professionals.
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
                <a href="/#companies-served" className="hover:text-white hover:translate-x-0.5 transition-all inline-block text-[#3cb4cb] font-semibold">
                  Companies We Serve
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="hover:text-white hover:translate-x-0.5 transition-all inline-block text-[#FA7D3C] font-semibold">
                  Client Testimonials
                </a>
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
              <div className="p-3.5 rounded-xl bg-white/[0.06] border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#2E8D9F]" />
                    <span>Serving Markets & Hub:</span>
                  </div>
                  <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    Active Sync
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs pt-1">
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <span className="text-sm">🇮🇳</span>
                    <strong className="text-white">Ajmer</strong>
                    <span className="text-[10px] text-slate-400">(Hub)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <span className="text-sm">🇺🇸</span>
                    <strong className="text-white">USA</strong>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <span className="text-sm">🇨🇦</span>
                    <strong className="text-white">Canada</strong>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <span className="text-sm">🇸🇬</span>
                    <strong className="text-white">Singapore</strong>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <span className="text-sm">🇦🇺</span>
                    <strong className="text-white">Australia</strong>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <span className="text-sm">🇬🇧</span>
                    <strong className="text-white">UK</strong>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 pt-1.5 border-t border-white/10">
                  Synchronized across EST, PST, GMT, SGT, AEST & IST
                </p>
              </div>

              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Direct Inquiries:
                </span>
                <a
                  href="mailto:contact@staffclicks.com"
                  className="text-white hover:text-[#FA7D3C] font-bold text-sm flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#FA7D3C]" />
                  contact@staffclicks.com
                </a>
              </div>

              {/* Social Media Icons Below Number */}
              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-2">
                  Follow Us:
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Staff Clicks on Instagram"
                    title="Instagram"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 border border-white/10 shadow-xs"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Staff Clicks on Facebook"
                    title="Facebook"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 border border-white/10 shadow-xs"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Staff Clicks on LinkedIn"
                    title="LinkedIn"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 border border-white/10 shadow-xs"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Staff Clicks on X (Twitter)"
                    title="Twitter / X"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-black text-white flex items-center justify-center transition-all duration-200 hover:scale-110 border border-white/10 shadow-xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white font-semibold">Staff Clicks</strong>. All rights reserved.
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
