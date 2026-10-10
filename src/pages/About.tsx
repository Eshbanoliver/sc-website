import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Target, 
  Users, 
  Globe2, 
  Clock, 
  CheckCircle2, 
  HeartHandshake,
  Mail
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";

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
      desc: "Our remote professionals align with client working hours across all timezones (EST, CST, PST, GMT, SGT, AEST, and IST), facilitating live collaboration and instantaneous turnarounds."
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

  const leadershipTeam = [
    {
      role: "Owner & Founder",
      name: "Eshban Oliver",
      badge: "Founder & Owner",
      badgeColor: "bg-[#FA7D3C]/10 text-[#FA7D3C] border-[#FA7D3C]/30",
      avatarBg: "from-[#093965] to-[#2E8D9F]",
      initials: "EO",
      focus: "Strategic Vision & Global Partnerships",
      bio: "Guides the overarching vision of Staff Clicks, establishing high-performance operations in Ajmer to deliver dependable, cross-border workforce solutions to international enterprises.",
      responsibilities: [
        "Global Strategy & Expansion",
        "Strategic Partnerships & Key Accounts",
        "Operational Culture & Integrity"
      ],
      social: {
        linkedin: "https://linkedin.com",
        email: "mailto:info@staffclicks.com"
      }
    },
    {
      role: "Chief Executive Officer",
      name: "Chief Executive Officer",
      badge: "Executive Leadership (CEO)",
      badgeColor: "bg-[#093965]/10 text-[#093965] border-[#093965]/20",
      avatarBg: "from-[#2E8D9F] to-[#093965]",
      initials: "CEO",
      focus: "Operational Delivery & Enterprise Scaling",
      bio: "Directs international workforce deployment, strict SLA performance governance, and seamless service execution across North America, Europe, and Asia-Pacific.",
      responsibilities: [
        "Cross-Border SLA Delivery",
        "Team Onboarding & Quality Control",
        "Enterprise Growth & Account Scaling"
      ],
      social: {
        linkedin: "https://linkedin.com",
        email: "mailto:info@staffclicks.com"
      }
    },
    {
      role: "Chief Technology Officer",
      name: "Chief Technology Officer",
      badge: "Technology & Systems (CTO)",
      badgeColor: "bg-purple-500/10 text-purple-700 border-purple-200",
      avatarBg: "from-purple-700 to-[#093965]",
      initials: "CTO",
      focus: "Infrastructure, Automation & Data Security",
      bio: "Leads technical infrastructure, robust NDA and data encryption frameworks, and digital workflow tools to ensure ironclad confidentiality and zero operational latency.",
      responsibilities: [
        "Data Encryption & NDA Compliance",
        "Digital Workflow & Tool Automation",
        "High-Availability IT Infrastructure"
      ],
      social: {
        linkedin: "https://linkedin.com",
        email: "mailto:info@staffclicks.com"
      }
    }
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
            Staff Clicks is a specialized Virtual Assistance & Business Process Outsourcing company dedicated to helping growing companies across Ajmer, USA, Canada, Singapore, Australia, and the United Kingdom scale efficiently with reliable remote staffing.
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
              To be the most dependable and transparent remote workforce partner for enterprises across North America and the UAE / Middle East, known for operational precision, ethical client relationships, and flexible staffing that truly adapts to each business’s unique rhythm.
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
            const shadowClasses = [
              "card-shadow-teal",
              "card-shadow-orange",
              "card-shadow-blue",
              "card-shadow-purple"
            ];
            const cardShadow = shadowClasses[idx % shadowClasses.length];
            return (
              <div
                key={idx}
                className={`p-7 rounded-2xl bg-white border border-slate-200/90 ${cardShadow} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
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
                Headquartered with our primary operations center in <strong>Ajmer, Rajasthan (India)</strong>, Staff Clicks combines rich regional talent with international management standards. We support clients located across <strong>Ajmer, USA, Canada, Singapore, Australia, and the United Kingdom</strong>, enabling businesses to leverage high-caliber staffing without geographic boundaries.
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
                    <span className="font-semibold text-white">Ajmer, USA, Canada, Singapore, Australia & UK</span>
                  </div>

                  <div className="pb-3 border-b border-slate-700">
                    <span className="text-slate-400 block text-xs">Direct Advisory Response:</span>
                    <span className="font-bold text-[#FA7D3C]">Within 1 Business Day</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-xs">Inquiries & Partnerships:</span>
                    <span className="font-semibold text-white">info@staffclicks.com</span>
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

      {/* EXECUTIVE LEADERSHIP SECTION (OWNER, CEO, CTO) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Executive Leadership"
          title="Meet the Leadership Guiding Staff Clicks"
          subtitle="The visionary strategists, operational leaders, and technology architects dedicated to empowering your business with world-class remote staffing from our Ajmer delivery hub."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipTeam.map((leader, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#2E8D9F] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Top Accent Gradient on Hover */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#093965] via-[#2E8D9F] to-[#FA7D3C] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="space-y-6">
                {/* Avatar & Badges */}
                <div className="flex items-start justify-between gap-4">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${leader.avatarBg} text-white font-black text-2xl flex items-center justify-center shadow-lg border-2 border-white/80 shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                    {leader.initials}
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${leader.badgeColor}`}>
                    {leader.badge}
                  </span>
                </div>

                {/* Name & Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#093965]">
                    {leader.name}
                  </h3>
                  <div className="text-sm font-bold text-[#FA7D3C] mt-0.5">
                    {leader.role}
                  </div>
                  <div className="text-xs font-semibold text-slate-500 mt-1">
                    {leader.focus}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {leader.bio}
                </p>

                {/* Core Responsibilities */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400 block">
                    Strategic Responsibilities:
                  </span>
                  <ul className="space-y-1.5">
                    {leader.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E8D9F] shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Social / Contact Bar */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#093965]">
                  Staff Clicks Executive
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={leader.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${leader.name} on LinkedIn`}
                    title="LinkedIn"
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#0A66C2] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href={leader.social.email}
                    aria-label={`Email ${leader.name}`}
                    title="Email"
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#FA7D3C] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
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
