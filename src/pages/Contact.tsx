import React from "react";
import { 
  Mail, 
  MapPin, 
  Globe2, 
  ShieldCheck,
  CalendarDays,
  Send,
  ExternalLink
} from "lucide-react";
import ContactForm from "../components/ContactForm";
import BookingCalendar from "../components/BookingCalendar";
import GlobalMapGraphic from "../components/GlobalMapGraphic";

export default function Contact(): React.JSX.Element {
  return (
    <div className="space-y-24 sm:space-y-28 pt-8 pb-16">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#093965]/8 text-[#093965] border border-[#093965]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA7D3C]"></span>
            Get in Touch
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-5.5xl font-black text-[#093965] tracking-tight leading-tight">
            Let's Discuss Your Operational Requirements
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Whether you are looking to hire a single executive virtual assistant or assemble an outsourced customer care team, we are here to support your growth.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#book-meeting"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#093965] hover:bg-[#072d50] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <CalendarDays className="w-4 h-4 text-[#FA7D3C]" />
              <span>Schedule a Meeting</span>
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold border border-slate-200 transition-all"
            >
              <Send className="w-3.5 h-3.5 text-[#2E8D9F]" />
              <span>Send Detailed Form</span>
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info & Hub Locations */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-extrabold text-[#093965]">
                Direct Contact Channels
              </h2>

              <div className="space-y-4">

                {/* Email */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2E8D9F]/15 text-[#2E8D9F] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      General & B2B Inquiries
                    </span>
                    <a
                      href="mailto:staffclicks@gmail.com"
                      className="text-base font-bold text-[#093965] hover:text-[#2E8D9F] transition-colors"
                    >
                      staffclicks@gmail.com
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Responses typically within 1 business day
                    </p>
                  </div>
                </div>

                {/* Location: Operations Hub */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#093965]/10 text-[#093965] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#2E8D9F]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Delivery & Operations Hub
                    </span>
                    <a
                      href="https://maps.google.com/?q=FJ6P%2B2M7%2C+Kachery+Road%2C+Hathi+Bhata%2C+Ajmer%2C+Rajasthan+305001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-[#093965] hover:text-[#2E8D9F] transition-colors block leading-snug"
                    >
                      FJ6P+2M7, Kachery Road, Hathi Bhata, Ajmer, Rajasthan 305001
                    </a>
                    <p className="text-xs text-slate-500 mt-1">
                      Workforce coordination, QA supervision, and global process execution center
                    </p>
                    <a
                      href="https://maps.google.com/?q=FJ6P%2B2M7%2C+Kachery+Road%2C+Hathi+Bhata%2C+Ajmer%2C+Rajasthan+305001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E8D9F] hover:text-[#093965] transition-colors mt-2"
                    >
                      <span>Open on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* International Markets */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Client Service Markets
                    </span>
                    <span className="text-base font-bold text-[#093965] block">
                      Ajmer, USA, Canada, Singapore, Australia & UK
                    </span>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Synchronized remote support across North American, European, and Asia-Pacific business hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Follow & Social Channels */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Connect on Social Media
                </span>
                <div className="grid grid-cols-3 gap-2.5">
                  <a
                    href="https://www.instagram.com/staffclicks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 hover:border-pink-300 bg-slate-50 hover:bg-gradient-to-tr hover:from-orange-50 hover:to-pink-50 transition-all flex flex-col items-center justify-center gap-1.5 text-center group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-pink-100/70 text-[#dc2743] group-hover:bg-[#dc2743] group-hover:text-white transition-colors flex items-center justify-center">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 group-hover:text-pink-600 transition-colors">
                      Instagram
                    </span>
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61594685925115"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 hover:border-blue-300 bg-slate-50 hover:bg-blue-50/50 transition-all flex flex-col items-center justify-center gap-1.5 text-center group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-colors flex items-center justify-center">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                      Facebook
                    </span>
                  </a>

                  <a
                    href="https://x.com/Staffclicks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 transition-all flex flex-col items-center justify-center gap-1.5 text-center group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-200/80 text-slate-800 group-hover:bg-black group-hover:text-white transition-colors flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                      X (Twitter)
                    </span>
                  </a>
                </div>
              </div>

              {/* Security Badge */}
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2.5 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-[#2E8D9F]" />
                <span>All consultation requests are kept strictly confidential.</span>
              </div>
            </div>
          </div>

          {/* Right: Validated Request Form */}
          <div id="contact-form" className="lg:col-span-7 scroll-mt-24">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA7D3C]">
                  Consultation Request
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#093965] mt-1">
                  Tell Us What You Need
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Fill in your details below and a Staff Clicks operations advisor will reach out to schedule an introductory call.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CALENDAR BOOKING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <BookingCalendar />
      </section>

      {/* GLOBAL GRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlobalMapGraphic />
      </section>
    </div>
  );
}
