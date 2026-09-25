import React from "react";
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Globe2, 
  ShieldCheck,
  CalendarDays,
  Send
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <CalendarDays className="w-4 h-4" />
              <span>Book a Meeting on WhatsApp</span>
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
                {/* Phone */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#093965]/10 text-[#093965] flex items-center justify-center shrink-0 mt-0.5">
                    <PhoneCall className="w-5 h-5 text-[#FA7D3C]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Direct Hotline (India / International)
                    </span>
                    <a
                      href="tel:+918302648461"
                      className="text-base sm:text-lg font-bold text-[#093965] hover:text-[#FA7D3C] transition-colors"
                    >
                      +91 83026 48461
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Available via voice calls and instant messaging
                    </p>
                  </div>
                </div>

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
                      href="mailto:contact@staffclicks.com"
                      className="text-base font-bold text-[#093965] hover:text-[#2E8D9F] transition-colors"
                    >
                      contact@staffclicks.com
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
                      Operations & Delivery Hub
                    </span>
                    <span className="text-base font-bold text-[#093965] block">
                      Ajmer, Rajasthan, India
                    </span>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Workforce coordination, QA supervision, and process execution center
                    </p>
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
                      USA & Canada
                    </span>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Synchronized remote support across North American business hours
                    </p>
                  </div>
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

      {/* INTERACTIVE CALENDAR BOOKING FOR WHATSAPP */}
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
