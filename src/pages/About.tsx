import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Target, 
  Users, 
  Globe2, 
  Clock, 
  CheckCircle2, 
  HeartHandshake
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import GlobalMapGraphic from "../components/GlobalMapGraphic";

interface AboutProps {
  onOpenConsultation: () => void;
}

export default function About({ onOpenConsultation }: AboutProps): React.JSX.Element {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Reliability & Quality Control",
      desc: "We ensure task continuity through structured standard operating procedures (SOPs), multi-point verification, and proactive supervisor oversight."
    },
    {
      icon: Clock,
      title: "Time-Zone Synchronization",
      desc: "Our remote professionals align with client working hours across EST, CST, PST, and IST, facilitating live collaboration and instantaneous turnarounds."
    },
    {
      icon: Users,
      title: "Skilled & Vetted Talent",
      desc: "Every remote professional undergoes thorough assessments in language proficiency, technical competencies, and specialized software domains."
    },
    {
      icon: HeartHandshake,
      title: "Long-Term Partnerships",
      desc: "We don't treat outsourcing as a transactional commodity. We immerse ourselves in your workflows to become a trusted, scalable operational ally."
    }
  ];

  const operationalTenets = [
    "Strict Non-Disclosure Agreements (NDAs) protecting all client proprietary information",
    "Direct integration into your existing communication stack (Slack, Teams, Email, Zoom)",
    "No lock-in contracts: scale support hours up or down based on genuine workflow needs",
    "Continuous skill enhancement and workflow audits supervised from our Ajmer delivery hub",
    "Transparent end-of-day reporting with itemized task time allocations"
  ];

  return (
    <div className="space-y-24 sm:space-y-28 pt-8 pb-16">
      {/* HEADER / INTRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#093965]/8 text-[#093965] border border-[#093965]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA7D3C]"></span>
            About Staff Clicks
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-5.5xl font-black text-[#093965] tracking-tight leading-tight">
            Empowering Modern Businesses Through Dedicated Remote Operations
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Staff Clicks is a specialized Virtual Assistance & Business Process Outsourcing company dedicated to helping growing companies across India, the USA, and Canada scale efficiently with reliable remote staffing.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#093965]/10 text-[#093965] flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-[#093965]">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To alleviate the operational friction that slows businesses down. We empower founders, managers, and distributed teams to offload repetitive, high-touch administrative and transactional tasks so they can focus wholeheartedly on core innovation, customer relationships, and strategic growth.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#2E8D9F]/15 text-[#2E8D9F] flex items-center justify-center font-bold">
              <Globe2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-[#093965]">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To be the most dependable and transparent remote workforce partner for enterprises across North America and India, known for operational precision, ethical client relationships, and flexible staffing that truly adapts to each business’s unique rhythm.
            </p>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Guiding Principles"
          title="The Foundations of Our Service"
          subtitle="Everything we do is anchored in the principles of dependability, professional communication, and measurable value."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#2E8D9F] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#093965]/8 text-[#093965] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#093965] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* OPERATIONAL RIGOR & DELIVERY HUB */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#062644] text-white p-8 sm:p-12 lg:p-16 border border-[#2E8D9F]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#2E8D9F]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FA7D3C] text-white">
                Delivery Center Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Grounded in Ajmer, Connected Globally
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Headquartered with our primary operations center in <strong>Ajmer, Rajasthan, India</strong>, Staff Clicks combines rich regional talent with international management standards. We support clients located across <strong>USA, Canada, and India</strong>, enabling businesses to leverage high-caliber staffing without geographic boundaries.
              </p>

              <div className="space-y-3 pt-2">
                {operationalTenets.map((tenet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#FA7D3C] shrink-0 mt-0.5" />
                    <span>{tenet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#3cb4cb]">
                  Location & Contact Details
                </div>

                <div className="space-y-3 text-sm">
                  <div className="pb-3 border-b border-slate-700">
                    <span className="text-slate-400 block text-xs">Primary Operations Hub:</span>
                    <span className="font-semibold text-white">Ajmer, Rajasthan, India</span>
                  </div>

                  <div className="pb-3 border-b border-slate-700">
                    <span className="text-slate-400 block text-xs">Primary Markets Served:</span>
                    <span className="font-semibold text-white">USA, Canada & India</span>
                  </div>

                  <div className="pb-3 border-b border-slate-700">
                    <span className="text-slate-400 block text-xs">Direct Support Hotline:</span>
                    <a
                      href="tel:+918302648461"
                      className="font-bold text-[#FA7D3C] hover:underline"
                    >
                      +91 83026 48461
                    </a>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-xs">Inquiries & Partnerships:</span>
                    <span className="font-semibold text-white">contact@staffclicks.com</span>
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded-xl bg-[#FA7D3C] hover:bg-[#e66b2a] text-white text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer"
                >
                  Book a Consultation Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL GRAPHIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlobalMapGraphic />
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 text-center space-y-6 shadow-sm">
          <h2 className="text-3xl font-extrabold text-[#093965]">
            Ready to explore a custom outsourcing plan?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Tell us about your team's routine workload and let us design a dedicated support plan tailored to your operating hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded-xl bg-[#FA7D3C] hover:bg-[#e66b2a] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Get a Free Consultation
            </button>
            <Link
              to="/services"
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#093965] font-bold text-sm transition-all"
            >
              Browse All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
