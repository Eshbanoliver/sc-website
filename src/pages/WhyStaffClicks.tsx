import React from "react";
import { Link } from "react-router-dom";
import { 
  Layers, 
  Users, 
  TrendingUp, 
  Award, 
  MessageSquare, 
  Zap, 
  Check, 
  X, 
  LucideIcon
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";

interface WhyStaffClicksProps {
  onOpenConsultation: () => void;
}

interface Pillar {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export default function WhyStaffClicks({ onOpenConsultation }: WhyStaffClicksProps): React.JSX.Element {
  const pillars: Pillar[] = [
    {
      icon: Layers,
      title: "Flexible Staffing",
      desc: "Scale support according to your business requirements without rigid hiring lock-ins or overhead penalties."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      desc: "Get consistent assistance from professionals who learn your internal workflows, communication cadence, and brand voice."
    },
    {
      icon: TrendingUp,
      title: "Cost-Efficient Operations",
      desc: "Reduce the operational burden associated with maintaining every function in-house, eliminating infrastructure and office overhead."
    },
    {
      icon: Award,
      title: "Skilled Professionals",
      desc: "Access thoroughly vetted remote professionals trained across modern cloud software, CRMs, and productivity platforms."
    },
    {
      icon: MessageSquare,
      title: "Reliable Communication",
      desc: "Maintain clear daily check-ins, end-of-day summary reports, and transparent workflows on your chosen channels."
    },
    {
      icon: Zap,
      title: "Scalable Solutions",
      desc: "Expand support seamlessly as your business expands, adding capacity across multiple departments on demand."
    }
  ];

  const comparison = [
    {
      criteria: "Onboarding & SOP Setup",
      freelancer: "Ad-hoc, requires heavy owner training with no quality framework",
      staffClicks: "Structured SOP documentation, supervisor orientation, and checklist creation"
    },
    {
      criteria: "Accountability & Oversight",
      freelancer: "Self-reported, high risk of sudden disappearance or dropped tasks",
      staffClicks: "Supervised delivery center in Ajmer, India with internal QA checks"
    },
    {
      criteria: "Data Security & NDAs",
      freelancer: "Informal, varied risk of intellectual property exposure",
      staffClicks: "Strict institutional NDAs, role-based tool permissions, and compliance standards"
    },
    {
      criteria: "Time-Zone Synchronization",
      freelancer: "Unpredictable hours, irregular response windows",
      staffClicks: "Guaranteed shift alignment across USA (EST/CST/PST), Canada, or India"
    },
    {
      criteria: "Scalability",
      freelancer: "Limited to individual capacity; starting over to hire more",
      staffClicks: "Instant access to a broader talent pool across multiple operational domains"
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-28 pt-8 pb-16">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#093965]/8 text-[#093965] border border-[#093965]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA7D3C]"></span>
            Built for Reliable Business Continuity
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-5.5xl font-black text-[#093965] tracking-tight leading-tight">
            Why Businesses Choose Staff Clicks
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We provide structured, dependable remote business process support so your internal team can operate with peak efficiency without the burden of non-core overhead.
          </p>
        </div>
      </section>

      {/* 6 CORE FEATURES (CARD STYLE 2: OVERSIZED BACKGROUND NUMBERS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((feat, idx) => {
            const Icon = feat.icon;
            const num = `0${idx + 1}`;
            const shadowClasses = [
              "card-shadow-blue",
              "card-shadow-teal",
              "card-shadow-orange",
              "card-shadow-purple",
              "card-shadow-emerald",
              "card-shadow-rose"
            ];
            const cardShadow = shadowClasses[idx % shadowClasses.length];
            return (
              <div
                key={idx}
                className={`relative p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/90 ${cardShadow} transition-all duration-300 hover:-translate-y-1.5 overflow-hidden group`}
              >
                {/* Large semi-transparent background number */}
                <span className="absolute -bottom-4 -right-2 text-7xl sm:text-8xl font-black font-mono text-slate-100/90 group-hover:text-[#2E8D9F]/10 transition-colors pointer-events-none select-none">
                  {num}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-full bg-[#093965]/8 text-[#093965] group-hover:bg-[#093965] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      // {num}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#093965] group-hover:text-[#2E8D9F] transition-colors mb-2 tracking-wide uppercase">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FREELANCERS VS STAFF CLICKS COMPARISON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Operational Integrity"
          title="The Staff Clicks Structured Model vs. Unvetted Freelancers"
          subtitle="Why established businesses choose managed remote support over erratic ad-hoc hiring."
        />

        {/* Desktop Table View */}
        <div className="mt-12 hidden md:block overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider font-extrabold text-slate-700">
                <th className="py-4 px-6">Evaluation Parameter</th>
                <th className="py-4 px-6 text-slate-500">Unvetted Freelancers</th>
                <th className="py-4 px-6 bg-[#093965]/5 text-[#093965] border-l border-slate-200">
                  Staff Clicks Managed Support
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {comparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-800">
                    {row.criteria}
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.freelancer}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-[#093965]/5 font-medium text-slate-800 border-l border-slate-200">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#2E8D9F] shrink-0 mt-0.5" />
                      <span>{row.staffClicks}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Responsive Cards View */}
        <div className="mt-8 space-y-3.5 md:hidden">
          {comparison.map((row, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2.5">
              <div className="font-extrabold text-[#093965] text-sm">
                {row.criteria}
              </div>
              <div className="p-3 rounded-xl bg-rose-50/80 border border-rose-100 flex items-start gap-2.5 text-xs text-slate-700">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-rose-900 block text-[10px] uppercase tracking-wider mb-0.5">Unvetted Freelancers</span>
                  <span>{row.freelancer}</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-teal-50/80 border border-teal-100 flex items-start gap-2.5 text-xs text-slate-800">
                <Check className="w-4 h-4 text-[#2E8D9F] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#093965] block text-[10px] uppercase tracking-wider mb-0.5">Staff Clicks Managed Support</span>
                  <span>{row.staffClicks}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OPERATIONAL STANDARDS CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#062644] text-white p-8 sm:p-12 lg:p-16 border border-[#2E8D9F]/30 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FA7D3C] text-white">
              SLA & Quality Policy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Our Zero-Compromise Commitment
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We understand that delegating core tasks requires profound trust. Every engagement with Staff Clicks includes direct communication, transparent timesheets, and strict adherence to agreed-upon deadlines. If a task requires refinement, our QA team steps in immediately.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 rounded-xl bg-[#FA7D3C] hover:bg-[#e66b2a] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                Get a Free Consultation
              </button>
              <Link
                to="/services"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
