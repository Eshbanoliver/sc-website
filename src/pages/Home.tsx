import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Users, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  Check, 
  Layers, 
  Zap, 
  Globe2, 
  Target, 
  MessageSquare, 
  Award,
  Activity,
  Headphones
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import IndustryCard from "../components/IndustryCard";
import GlobalMapGraphic from "../components/GlobalMapGraphic";
import FAQAccordion from "../components/FAQAccordion";
import { SERVICES } from "../data/servicesData";
import { INDUSTRIES } from "../data/industriesData";

interface HomeProps {
  onOpenConsultation: () => void;
}

export default function Home({ onOpenConsultation }: HomeProps): React.JSX.Element {
  const valueStripItems = [
    { title: "Skilled Remote Professionals", desc: "Trained across modern productivity and operational tools." },
    { title: "Flexible Support", desc: "Adaptable hours aligned with your specific business requirements." },
    { title: "Scalable Solutions", desc: "Easily ramp capacity as your project or client volume grows." },
    { title: "Cost-Efficient Operations", desc: "Eliminate in-house overhead, equipment, and recruiting costs." },
    { title: "Business-Focused Service", desc: "Disciplined workflows designed to protect your operational continuity." }
  ];

  const timelineSteps = [
    {
      num: "01",
      icon: Target,
      title: "Understand Your Needs",
      desc: "We discuss your current operational bottlenecks, repetitive tasks, software tools, and ideal remote staff profile."
    },
    {
      num: "02",
      icon: Layers,
      title: "Build the Right Support",
      desc: "We structure a dedicated support model, establish standard operating procedures (SOPs), and match skilled personnel."
    },
    {
      num: "03",
      icon: Activity,
      title: "Start the Workflow",
      desc: "Your remote assistant integrates directly into your Slack, Teams, or CRM with daily tracking and clear handovers."
    },
    {
      num: "04",
      icon: TrendingUp,
      title: "Scale as You Grow",
      desc: "Expand support hours, add specialized team members, or onboard new departments seamlessly as your business expands."
    }
  ];

  const whyChooseUsFeatures = [
    {
      num: "01",
      icon: Layers,
      title: "FLEXIBLE STAFFING",
      desc: "Scale support around your business requirements without being tied to inflexible staffing arrangements."
    },
    {
      num: "02",
      icon: Users,
      title: "DEDICATED SUPPORT",
      desc: "Get consistent assistance from professionals who learn your internal workflows, communication cadence, and brand voice."
    },
    {
      num: "03",
      icon: TrendingUp,
      title: "COST-EFFICIENT OPERATIONS",
      desc: "Reduce the heavy operational burden and infrastructure cost associated with maintaining every function in-house."
    },
    {
      num: "04",
      icon: Award,
      title: "SKILLED PROFESSIONALS",
      desc: "Access thoroughly vetted and trained professionals across virtual assistance, tech support, and data domains."
    },
    {
      num: "05",
      icon: MessageSquare,
      title: "RELIABLE COMMUNICATION",
      desc: "Maintain clear daily communication, transparent work logs, and proactive status updates on your preferred channels."
    },
    {
      num: "06",
      icon: Zap,
      title: "SCALABLE SOLUTIONS",
      desc: "Expand support effortlessly from a single dedicated assistant to multi-functional support teams."
    }
  ];

  const outsourcingBenefits = [
    {
      title: "Save Internal Team Time",
      desc: "Free your core leadership and strategic staff from hours of repetitive administrative chores."
    },
    {
      title: "Improve Operational Efficiency",
      desc: "Deploy structured SOPs and checklists to ensure tasks are completed accurately and on schedule."
    },
    {
      title: "Access Specialized Support",
      desc: "Tap into immediate expertise in CRMs, lead research, accounting support, or e-commerce without training delays."
    },
    {
      title: "Handle Repetitive Work",
      desc: "Keep databases updated, emails sorted, and tickets resolved without burning out internal talent."
    },
    {
      title: "Improve Response Times",
      desc: "Deliver faster resolution times for customer inquiries and sales inquiries across time zones."
    },
    {
      title: "Scale Operations Faster",
      desc: "Accept larger client workloads knowing you have reliable back-office execution ready on demand."
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC]">
        {/* Subtle decorative background shapes & dot grid */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1100px] h-[520px] bg-gradient-to-tr from-[#093965]/[0.06] via-[#2E8D9F]/[0.08] to-[#FA7D3C]/[0.04] rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left space-y-7">
              {/* Location indicator badges */}
              <div className="inline-flex flex-wrap items-center gap-2 p-1.5 px-3.5 rounded-full bg-white border border-slate-200/90 shadow-xs text-xs font-semibold text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[#093965] font-extrabold">Serving Businesses In:</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 font-bold">USA</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 font-bold">Canada</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 font-bold">India</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black text-[#093965] tracking-tight leading-[1.1]">
                Your Trusted Workforce for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#093965] via-[#2E8D9F] to-[#FA7D3C]">
                  Smarter Business
                </span>{" "}
                Operations
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
                Staff Clicks helps businesses streamline everyday operations with reliable virtual assistance, business process support, and skilled remote professionals.
              </p>

              {/* Upgraded CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#093965] to-[#2E8D9F] hover:from-[#062644] hover:to-[#226e7d] text-white font-bold text-base shadow-[0_10px_25px_rgba(9,57,101,0.22)] hover:shadow-[0_14px_30px_rgba(9,57,101,0.3)] hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#FA7D3C] transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <Link
                  to="/services"
                  className="px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#093965] font-bold text-base border border-slate-300 hover:border-[#2E8D9F] shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>

              {/* Direct phone quick contact */}
              <div className="pt-3 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600">
                <a
                  href="tel:+918302648461"
                  className="inline-flex items-center gap-2 font-bold text-[#093965] hover:text-[#FA7D3C] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#093965]/10 flex items-center justify-center text-[#093965]">
                    <PhoneCall className="w-3.5 h-3.5" />
                  </div>
                  <span>Direct Hotline: +91 83026 48461</span>
                </a>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="text-slate-500 font-medium">Flexible Monthly & Custom Retention Plans</span>
              </div>
            </div>

            {/* Right Visual: Operations Dashboard & Floating Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Floating UI Badge 1: Top-Left (Remote Support) */}
                <div className="absolute -top-4 -left-4 sm:-left-8 z-20 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-xs font-bold text-[#093965] flex items-center gap-2 animate-soft-float">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <Headphones className="w-3.5 h-3.5 text-[#2E8D9F]" />
                  <span>Remote Support</span>
                </div>

                {/* Floating UI Badge 2: Top-Right (24/7 Workflow) */}
                <div className="absolute -top-6 -right-4 sm:-right-6 z-20 px-3.5 py-2 rounded-xl bg-[#093965] border border-[#2E8D9F]/40 shadow-xl text-xs font-bold text-white flex items-center gap-2 animate-soft-float-reverse">
                  <Clock className="w-3.5 h-3.5 text-[#FA7D3C]" />
                  <span>24/7 Workflow</span>
                </div>

                {/* Central High-Tech Dashboard Container */}
                <div className="relative rounded-3xl bg-[#062644] p-6 sm:p-7 shadow-2xl border border-[#2E8D9F]/40 text-white overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#2E8D9F]/20 rounded-full blur-2xl pointer-events-none"></div>

                  {/* Window Title Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-700/80 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                      <span className="text-xs font-mono text-slate-300 ml-2">operations.staffclicks/hub</span>
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      SLA Quality: 99.8%
                    </span>
                  </div>

                  {/* Team Synchronicity Status */}
                  <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700/60 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                        Workforce Timezone Synchronization
                      </span>
                      <span className="text-xs font-bold text-[#FA7D3C]">Active Sync</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center pt-2">
                      <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-700/50">
                        <div className="text-xs font-bold text-white">India</div>
                        <div className="text-[10px] text-slate-400">Ajmer Hub</div>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-900/60 border border-[#2E8D9F]/60">
                        <div className="text-xs font-bold text-[#3cb4cb]">USA</div>
                        <div className="text-[10px] text-slate-400">EST / CST / PST</div>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-700/50">
                        <div className="text-xs font-bold text-white">Canada</div>
                        <div className="text-[10px] text-slate-400">B2B Coverage</div>
                      </div>
                    </div>
                  </div>

                  {/* Operational Capabilities List */}
                  <div className="space-y-2.5 mb-5">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                        <span className="font-semibold text-slate-200">Executive Virtual Assistants</span>
                      </div>
                      <span className="text-slate-400 font-mono">Dedicated</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#2E8D9F]"></div>
                        <span className="font-semibold text-slate-200">Customer Care & Live Chat</span>
                      </div>
                      <span className="text-slate-400 font-mono">Multi-Channel</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#FA7D3C]"></div>
                        <span className="font-semibold text-slate-200">Data, CRM & Lead Research</span>
                      </div>
                      <span className="text-slate-400 font-mono">QA Verified</span>
                    </div>
                  </div>

                  {/* Bottom Stats Banner inside card */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#093965] to-[#2E8D9F]/70 border border-[#2E8D9F]/40 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-300">Operational Philosophy</div>
                      <div className="text-sm font-bold text-white">Routine Delegated → Growth Unlocked</div>
                    </div>
                    <button
                      onClick={onOpenConsultation}
                      className="px-3.5 py-1.5 rounded-lg bg-[#FA7D3C] hover:bg-[#e66b2a] text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      Connect
                    </button>
                  </div>
                </div>

                {/* Floating UI Badge 3: Bottom-Left (Global Operations) */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 z-20 px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center gap-2.5 animate-soft-float">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#093965] flex items-center justify-center">
                    <Globe2 className="w-4 h-4 text-[#2E8D9F]" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-[#093965]">Global Operations</div>
                    <div className="text-[10px] text-slate-500">Cross-Border Delivery</div>
                  </div>
                </div>

                {/* Floating UI Badge 4: Bottom-Right (Business Support) */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 z-20 px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center gap-2.5 animate-soft-float-reverse">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-[#093965]">Business Support</div>
                    <div className="text-[10px] text-slate-500">NDA Protected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / VALUE STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-20">
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {valueStripItems.map((item, idx) => (
              <div key={idx} className={`pt-4 sm:pt-0 ${idx > 0 ? "sm:pl-6" : ""}`}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FA7D3C]"></span>
                  <h4 className="text-sm font-extrabold text-[#093965]">{item.title}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual: Operational Manifesto */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-gradient-to-br from-[#093965] to-[#2E8D9F] p-8 sm:p-9 text-white shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#FA7D3C]/20 rounded-full blur-2xl pointer-events-none"></div>

                <div className="relative z-10 space-y-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-slate-100 border border-white/20">
                    Core Operational Standard
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black leading-snug">
                    Your In-House Team Should Drive Strategy, Not Get Buried In Routine.
                  </h3>

                  <p className="text-sm text-slate-200 leading-relaxed">
                    By partnering with Staff Clicks, companies transfer high-volume, repetitive processes to reliable remote specialists, unlocking productive hours for executive growth.
                  </p>

                  <div className="pt-4 border-t border-white/20 space-y-3">
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-[#FA7D3C] shrink-0" />
                      <span>Delivery oversight from Ajmer, Rajasthan operations hub</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-[#FA7D3C] shrink-0" />
                      <span>Dedicated time zone alignment for USA & Canadian partners</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeader
                centered={false}
                badge="About Staff Clicks"
                title="Business Support That Lets You Focus on Growth"
                subtitle="Staff Clicks helps companies delegate repetitive and operational tasks so their internal teams can focus on strategic priorities, revenue generation, and client satisfaction."
              />

              {/* 3 Core Benefits with distinct cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-500/60 card-shadow-blue transition-all duration-300 hover:-translate-y-1">
                  <div className="w-9 h-9 rounded-lg bg-[#093965]/10 text-[#093965] flex items-center justify-center font-black text-sm mb-3">
                    01
                  </div>
                  <h4 className="text-base font-extrabold text-[#093965] mb-1.5">
                    Reduce Workload
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Offload routine administration, scheduling, data input, and ticketing to trained specialists.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-500/60 card-shadow-teal transition-all duration-300 hover:-translate-y-1">
                  <div className="w-9 h-9 rounded-lg bg-[#2E8D9F]/15 text-[#2E8D9F] flex items-center justify-center font-black text-sm mb-3">
                    02
                  </div>
                  <h4 className="text-base font-extrabold text-[#093965] mb-1.5">
                    Improve Output
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ensure standard operating procedures are executed with consistency and strict adherence to deadlines.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-500/60 card-shadow-orange transition-all duration-300 hover:-translate-y-1">
                  <div className="w-9 h-9 rounded-lg bg-[#FA7D3C]/15 text-[#FA7D3C] flex items-center justify-center font-black text-sm mb-3">
                    03
                  </div>
                  <h4 className="text-base font-extrabold text-[#093965] mb-1.5">
                    Scale Support
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Expand capacity easily without the heavy overhead, equipment leases, or long recruitment cycles.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-5">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#093965] hover:bg-[#062644] text-white text-sm font-bold shadow-md transition-all"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 text-[#FA7D3C]" />
                </Link>
                <button
                  onClick={onOpenConsultation}
                  className="text-sm font-bold text-[#FA7D3C] hover:text-[#e66b2a] flex items-center gap-1 cursor-pointer"
                >
                  Talk to Our Team <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="What We Do"
          title="Business Support Built Around Your Needs"
          subtitle="Explore our comprehensive suite of virtual staffing and business process outsourcing services designed for modern enterprises."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 px-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-sm text-slate-700 font-semibold">
              Need assistance with multiple overlapping functions?
            </span>
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-xl bg-[#093965] hover:bg-[#062644] text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer"
            >
              Request a Custom Multi-Process Plan
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gradient-to-b from-[#093965] via-[#083057] to-[#062644] text-white py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2E8D9F]/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FA7D3C]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            light
            badge="Simple 4-Step Process"
            title="How It Works: Seamless Integration"
            subtitle="A structured, predictable onboarding framework that eliminates friction and gets your remote support functioning within days."
          />

          {/* Desktop Connected Timeline */}
          <div className="mt-20 hidden lg:block relative">
            <div className="absolute top-10 left-[12%] right-[12%] h-[3px] bg-gradient-to-r from-[#2E8D9F] via-[#3cb4cb] to-[#FA7D3C] -z-0"></div>

            <div className="grid grid-cols-4 gap-8 relative z-10">
              {timelineSteps.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    <div className="w-20 h-20 rounded-2xl bg-[#062644] border-2 border-[#2E8D9F] group-hover:border-[#FA7D3C] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 mb-6 relative">
                      <span className="text-xl font-mono font-black text-white group-hover:text-[#FA7D3C] transition-colors">
                        {step.num}
                      </span>
                      <div className="absolute -bottom-2 w-6 h-6 rounded-full bg-[#2E8D9F] text-white flex items-center justify-center text-[10px]">
                        <StepIcon className="w-3 h-3" />
                      </div>
                    </div>

                    <h4 className="text-lg font-black text-white mb-2 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed px-2">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="mt-14 lg:hidden relative pl-6 border-l-2 border-[#2E8D9F] space-y-10 ml-4">
            {timelineSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[37px] top-0 w-8 h-8 rounded-full bg-[#062644] border-2 border-[#FA7D3C] text-white font-mono font-bold text-xs flex items-center justify-center">
                    {step.num}
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <StepIcon className="w-4 h-4 text-[#3cb4cb]" />
                      <h4 className="text-base font-bold text-white">{step.title}</h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded-xl bg-[#FA7D3C] hover:bg-[#e66b2a] text-white text-sm font-bold shadow-lg transition-all cursor-pointer"
            >
              Start Step 1: Request Your Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* WHY STAFF CLICKS */}
      <section className="py-16 sm:py-24 bg-[#EEF4F8]/80 border-y border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Staff Clicks Advantage"
            title="Why Businesses Choose Staff Clicks"
            subtitle="We focus on dependable execution, clear communication, and adaptable arrangements that grow with your company."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUsFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              const shadowClasses = [
                "card-shadow-orange",
                "card-shadow-teal",
                "card-shadow-purple",
                "card-shadow-blue",
                "card-shadow-emerald",
                "card-shadow-rose"
              ];
              const cardShadow = shadowClasses[idx % shadowClasses.length];
              return (
                <div
                  key={idx}
                  className={`relative p-8 rounded-3xl bg-white border border-slate-200/90 ${cardShadow} transition-all duration-300 hover:-translate-y-1.5 overflow-hidden group`}
                >
                  <span className="absolute -bottom-4 -right-2 text-7xl sm:text-8xl font-black font-mono text-slate-100/90 group-hover:text-[#2E8D9F]/10 transition-colors pointer-events-none select-none">
                    {feat.num}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-full bg-[#093965]/8 text-[#093965] group-hover:bg-[#093965] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                        <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        // {feat.num}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-[#093965] group-hover:text-[#2E8D9F] transition-colors mb-2 tracking-wide uppercase">
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

          <div className="mt-12 text-center">
            <Link
              to="/why-staff-clicks"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#093965] hover:text-[#FA7D3C] transition-colors"
            >
              <span>Read more about our operational standards & freelancer comparison</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS / OUTSOURCING BENEFITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
          <SectionHeader
            badge="Strategic Value"
            title="What Strategic Outsourcing Helps You Achieve"
            subtitle="Transform your organizational velocity by pairing internal leadership with dependable remote execution."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outsourcingBenefits.map((b, idx) => {
              const benefitShadows = [
                "card-shadow-cyan",
                "card-shadow-purple",
                "card-shadow-emerald",
                "card-shadow-orange",
                "card-shadow-rose",
                "card-shadow-blue"
              ];
              const cardShadow = benefitShadows[idx % benefitShadows.length];
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#2E8D9F] ${cardShadow} transition-all duration-300 hover:-translate-y-1 flex items-start gap-4`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2E8D9F]/15 text-[#2E8D9F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-5 h-5 text-[#2E8D9F]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#093965] mb-1">{b.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeader
            centered={false}
            badge="Sector Expertise"
            title="Tailored for Diverse Industries"
            subtitle="Process support models structured specifically around the regulations, software stacks, and workflows of your sector."
          />
          <Link
            to="/industries"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#093965] hover:text-[#FA7D3C] transition-colors shrink-0"
          >
            <span>View All 10 Supported Industries</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.slice(0, 4).map((ind, idx) => (
            <IndustryCard key={ind.id} industry={ind} index={idx} compact={true} />
          ))}
        </div>
      </section>

      {/* GLOBAL PRESENCE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Cross-Border Delivery"
          title="Supporting Businesses Across Borders"
          subtitle="Whether you are building a support team in India or looking for dependable operational assistance for your business in the USA or Canada, Staff Clicks is built to support distributed business operations."
        />

        <div className="mt-12">
          <GlobalMapGraphic />
        </div>
      </section>

      {/* QUALITY & VALUE ASSURANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 text-center space-y-6 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
            <ShieldCheck className="w-4 h-4 text-[#2E8D9F]" />
            <span>Service Commitment & Quality Assurance</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#093965] max-w-2xl mx-auto">
            Built Around Reliable Business Support & Absolute Transparency
          </h3>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Staff Clicks, we believe in honest partnerships without inflated metrics or fabricated claims. We measure our success through SLA compliance, daily task visibility, rigorous NDA protections, and consistent communication with every client across India, USA, and Canada.
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold uppercase text-[#093965] mb-1">Standard Operating Procedures</div>
              <p className="text-xs text-slate-600">Every workflow is documented into repeatable checklists for zero discrepancy.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold uppercase text-[#2E8D9F] mb-1">Daily Activity Check-Ins</div>
              <p className="text-xs text-slate-600">End-of-day summaries and direct communication via your preferred channels.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold uppercase text-[#FA7D3C] mb-1">Confidentiality Guarantee</div>
              <p className="text-xs text-slate-600">Non-Disclosure Agreements executed prior to initiating any operational work.</p>
            </div>
          </div>

          <div className="pt-2 text-xs text-slate-400 italic">
            * Formal client feedback and case studies will be displayed here as long-term enterprise engagements mature.
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Frequently Asked Questions"
          title="Common Questions About Our Services"
          subtitle="Clear answers about our engagement models, international coverage, security, and onboarding."
        />

        <div className="mt-12">
          <FAQAccordion limit={5} />
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#093965] hover:text-[#FA7D3C] transition-colors"
          >
            <span>View All FAQs & Policy Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* LARGE CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#093965] via-[#08345c] to-[#2E8D9F] p-8 sm:p-14 lg:p-16 text-white text-center shadow-2xl overflow-hidden border border-[#2E8D9F]/40">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FA7D3C]/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-10 left-10 w-96 h-96 bg-[#2E8D9F]/25 rounded-full blur-[90px] pointer-events-none"></div>
          <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FA7D3C] text-white shadow-md">
              Start Your Delegation Journey
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Ready to Build a More Efficient Team?
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Tell us what your business needs help with and we'll help you identify the right support model.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FA7D3C] hover:bg-[#e66b2a] text-white font-bold text-base shadow-[0_8px_20px_rgba(250,125,60,0.35)] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+918302648461"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#FA7D3C]" />
                <span>Call +91 83026 48461</span>
              </a>
            </div>

            <p className="text-xs text-slate-300 pt-2">
              Serving businesses across India, USA, and Canada. Rapid onboarding with no hidden platform fees.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
