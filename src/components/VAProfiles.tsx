import React, { useState } from "react";
import { UserCheck, Star, Clock, Sparkles, CheckCircle2, Zap, ArrowRight, ShieldCheck, Globe, Mail } from "lucide-react";

export interface VAProfile {
  id: string;
  name: string;
  title: string;
  category: "admin" | "support" | "sales" | "finance" | "ecommerce";
  experience: string;
  rating: number;
  slaScore: string;
  availability: string;
  timezones: string;
  marketsServed: string[];
  avatarBg: string;
  initials: string;
  tools: string[];
  bio: string;
  coreSkills: string[];
}

interface VAProfilesProps {
  onOpenConsultation: () => void;
}

export const VA_PROFILES: VAProfile[] = [
  {
    id: "va-1",
    name: "Aanya S.",
    title: "Senior Executive Virtual Assistant",
    category: "admin",
    experience: "6+ Years Exp.",
    rating: 5.0,
    slaScore: "99.9% SLA",
    availability: "Available for Placement (48h)",
    timezones: "EST, CST, GMT & IST",
    marketsServed: ["🇺🇸 USA", "🇨🇦 Canada", "🇬🇧 UK"],
    avatarBg: "from-[#093965] to-[#2E8D9F]",
    initials: "AS",
    tools: ["Google Workspace", "Notion", "Slack", "Asana", "Calendly", "Zoom"],
    bio: "Specializes in high-volume calendar management, inbox zero triaging, travel coordination, and executive board meeting preparation for fast-scaling founders.",
    coreSkills: [
      "Executive Diary & Calendar Triage",
      "Confidential C-Level Gatekeeping",
      "Travel Itinerary & Event Logistics",
      "Meeting Minutes & Action Item Follow-up"
    ]
  },
  {
    id: "va-2",
    name: "Rohan M.",
    title: "Omnichannel Customer Support Lead",
    category: "support",
    experience: "5+ Years Exp.",
    rating: 5.0,
    slaScore: "99.8% CSAT",
    availability: "Immediate Deployment",
    timezones: "EST, PST & AEST",
    marketsServed: ["🇺🇸 USA", "🇦🇺 Australia", "🇨🇦 Canada"],
    avatarBg: "from-emerald-600 to-teal-700",
    initials: "RM",
    tools: ["Zendesk", "Intercom", "Freshdesk", "Gorgias", "Shopify", "Slack"],
    bio: "Customer experience veteran with proven history of lowering ticket response times to under 5 minutes across email, live chat, and tier-1 dispute management.",
    coreSkills: [
      "24/7 Live Chat & Helpdesk Triage",
      "Tier-1 Dispute & Return Resolution",
      "Customer Satisfaction (CSAT) Retention",
      "SOP & Knowledge Base Authoring"
    ]
  },
  {
    id: "va-3",
    name: "Pooja V.",
    title: "Lead Generation & B2B CRM Specialist",
    category: "sales",
    experience: "4+ Years Exp.",
    rating: 5.0,
    slaScore: "98.9% Data Accuracy",
    availability: "Available for Placement (72h)",
    timezones: "EST, PST, SGT & IST",
    marketsServed: ["🇺🇸 USA", "🇸🇬 Singapore", "🇬🇧 UK"],
    avatarBg: "from-[#FA7D3C] to-rose-600",
    initials: "PV",
    tools: ["HubSpot", "LinkedIn Sales Nav", "Apollo.io", "Salesforce", "Hunter.io"],
    bio: "Dedicated prospecting specialist who builds highly targeted B2B contact lists, verifies decision-maker emails, and keeps CRM pipelines clean and deduplicated.",
    coreSkills: [
      "Decision-Maker Prospect Sourcing",
      "Email Verification & Lead Enrichment",
      "HubSpot & Salesforce Hygiene",
      "Outbound Sequence Scheduling"
    ]
  },
  {
    id: "va-4",
    name: "Devendra K.",
    title: "Financial Bookkeeper & Accounts Assistant",
    category: "finance",
    experience: "7+ Years Exp.",
    rating: 5.0,
    slaScore: "100% Reconciliation",
    availability: "Available for Placement",
    timezones: "EST, GMT, SGT & AEST",
    marketsServed: ["🇬🇧 UK", "🇸🇬 Singapore", "🇦🇺 Australia", "🇺🇸 USA"],
    avatarBg: "from-purple-700 to-indigo-800",
    initials: "DK",
    tools: ["QuickBooks", "Xero", "Excel (Advanced)", "Dext", "Stripe", "Wise"],
    bio: "Meticulous accounts specialist managing bank reconciliations, vendor payables, multi-currency invoicing, and receipt audits with zero margin for error.",
    coreSkills: [
      "Multi-Currency Bank Reconciliation",
      "Accounts Payable & Receivable Tracking",
      "End-of-Month Ledger Closing",
      "Invoice Generation & Receipt Auditing"
    ]
  },
  {
    id: "va-5",
    name: "Simran T.",
    title: "E-Commerce Operations & Catalog VA",
    category: "ecommerce",
    experience: "5+ Years Exp.",
    rating: 5.0,
    slaScore: "99.9% Order SLA",
    availability: "Immediate Deployment",
    timezones: "EST, PST & GMT",
    marketsServed: ["🇺🇸 USA", "🇨🇦 Canada", "🇬🇧 UK"],
    avatarBg: "from-cyan-600 to-blue-700",
    initials: "ST",
    tools: ["Shopify", "Amazon Seller Central", "WooCommerce", "Canva", "Klaviyo"],
    bio: "Expert e-commerce assistant overseeing inventory updates, supplier communications, SKU variant uploads, and return order logistics for multichannel retailers.",
    coreSkills: [
      "Product Catalog & SKU Indexing",
      "Amazon & Shopify Store Administration",
      "Order Fulfillment & Tracking Sync",
      "Customer Review & Feedback Follow-up"
    ]
  },
  {
    id: "va-6",
    name: "Karan B.",
    title: "Data Management & Research Specialist",
    category: "admin",
    experience: "5+ Years Exp.",
    rating: 5.0,
    slaScore: "99.8% Data Accuracy",
    availability: "Available for Placement (48h)",
    timezones: "EST, CST, GMT & SGT",
    marketsServed: ["🇺🇸 USA", "🇸🇬 Singapore", "🇨🇦 Canada"],
    avatarBg: "from-amber-600 to-orange-700",
    initials: "KB",
    tools: ["Airtable", "Excel", "Google Sheets", "Tableau", "Notion", "ClickUp"],
    bio: "Specializes in high-volume database sanitization, web research, market competitor profiling, and automated spreadsheet reporting for operations teams.",
    coreSkills: [
      "High-Volume Data Cleansing & Deduplication",
      "Industry Competitor & Market Research",
      "Airtable & Sheets Workflow Architecture",
      "Standard Operating Procedure Documentation"
    ]
  }
];

export default function VAProfiles({ onOpenConsultation }: VAProfilesProps): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Specialists" },
    { id: "admin", label: "Executive & Admin" },
    { id: "support", label: "Customer Care" },
    { id: "sales", label: "Lead Gen & Sales" },
    { id: "finance", label: "Accounting & Finance" },
    { id: "ecommerce", label: "E-Commerce Ops" },
  ];

  const filteredProfiles = activeCategory === "all"
    ? VA_PROFILES
    : VA_PROFILES.filter((va) => va.category === activeCategory);

  return (
    <div className="relative w-full space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#093965]/10 text-[#093965] text-xs font-bold tracking-wider uppercase border border-[#093965]/20">
          <UserCheck className="w-3.5 h-3.5 text-[#FA7D3C]" />
          <span>Vetted Specialist Talent Pool</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#093965] tracking-tight">
          Ready-to-Deploy <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#093965] via-[#2E8D9F] to-[#FA7D3C]">
            Virtual Assistant Profiles
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Explore profiles of pre-vetted, English-fluent operational specialists trained across industry standard software and synchronized to your exact business hours from our Ajmer delivery hub.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shrink-0 ${
                isActive
                  ? "bg-[#093965] text-white shadow-md shadow-[#093965]/20 scale-105"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* VA Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProfiles.map((va) => (
          <div
            key={va.id}
            className="group relative p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#2E8D9F] hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#093965] via-[#2E8D9F] to-[#FA7D3C] opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="space-y-5">
              {/* Profile Card Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${va.avatarBg} text-white font-black text-lg flex items-center justify-center shadow-md border-2 border-white shrink-0 group-hover:scale-105 transition-transform`}>
                    {va.initials}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#093965] group-hover:text-[#2E8D9F] transition-colors">
                      {va.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#FA7D3C]">
                      <span>{va.experience}</span>
                      <span>•</span>
                      <span className="text-emerald-700 font-bold">{va.slaScore}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-black text-slate-800">{va.rating}</span>
                </div>
              </div>

              {/* Title & Availability Badge */}
              <div className="space-y-1.5">
                <div className="text-xs font-extrabold text-slate-800 uppercase tracking-wide">
                  {va.title}
                </div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{va.availability}</span>
                </div>
              </div>

              {/* Bio snippet */}
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {va.bio}
              </p>

              {/* Core Strengths */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                  Core Competencies:
                </span>
                <ul className="space-y-1 text-xs text-slate-700">
                  {va.coreSkills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E8D9F] shrink-0" />
                      <span className="line-clamp-1">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Software Tools Pill Cloud */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                  Proficient Tools:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {va.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold border border-slate-200/60"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Markets & Timezone Alignment */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#2E8D9F]" />
                  <span>{va.timezones}</span>
                </span>
                <div className="flex items-center gap-1">
                  {va.marketsServed.map((m, i) => (
                    <span key={i} title={m}>{m.split(" ")[0]}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Button */}
            <div className="mt-5 pt-4 border-t border-slate-100">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#093965] to-[#2E8D9F] hover:from-[#062644] hover:to-[#226e7d] text-white text-xs font-bold shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group-hover:shadow-md"
              >
                <Zap className="w-3.5 h-3.5 text-[#FA7D3C]" />
                <span>Request & Deploy This Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Tailored Pod Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#062644] via-[#093965] to-[#0c4475] text-white border border-[#2E8D9F]/40 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center lg:text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold border border-white/15">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Guaranteed Zero Risk Onboarding</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Need a custom combination of skills or a dedicated pod?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            We will assemble and calibrate a tailored staffing solution matched to your operating hours, software stack, and monthly workload targets within 72 hours.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#FA7D3C] hover:bg-[#e66b2a] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Book Consultation & Match Profile</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="mailto:info@staffclicks.com"
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/20 transition-all text-center flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-[#FA7D3C]" />
            <span>info@staffclicks.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
