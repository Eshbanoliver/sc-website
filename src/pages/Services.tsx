import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import FAQAccordion from "../components/FAQAccordion";
import { SERVICES } from "../data/servicesData";

interface ServicesProps {
  onOpenConsultation: () => void;
}

export default function Services({ onOpenConsultation }: ServicesProps): React.JSX.Element {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All 9 Services", slugs: [] as string[] },
    { id: "core", label: "Executive & Admin", slugs: ["virtual-assistance", "administrative-support", "data-management"] },
    { id: "frontline", label: "Customer & Sales", slugs: ["customer-support", "lead-generation", "recruitment"] },
    { id: "specialized", label: "Finance & Verticals", slugs: ["accounting-bookkeeping", "ecommerce-support", "insurance-support"] },
  ];

  const filteredServices = filter === "all"
    ? SERVICES
    : SERVICES.filter(s => {
        const cat = categories.find(c => c.id === filter);
        return cat?.slugs?.includes(s.slug);
      });

  return (
    <div className="space-y-24 sm:space-y-28 pt-8 pb-16">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#093965]/8 text-[#093965] border border-[#093965]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA7D3C]"></span>
            End-to-End Business Process Outsourcing
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-5.5xl font-black text-[#093965] tracking-tight leading-tight">
            Comprehensive Remote Services Tailored to Your Workflow
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            From executive virtual assistants and omnichannel customer care to specialized back-office insurance and bookkeeping workflows, Staff Clicks provides dependable remote talent for every stage of your business.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  filter === cat.id
                    ? "bg-[#093965] text-white shadow-md shadow-[#093965]/25"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-[#2E8D9F] hover:text-[#093965]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </section>

      {/* HOW WE OPERATE STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#062644] text-white p-8 sm:p-12 lg:p-16 border border-[#2E8D9F]/30 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2E8D9F]/20 text-[#3cb4cb] border border-[#2E8D9F]/30">
                Transparent Engagement Model
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Don't See Your Exact Requirement Listed?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Many modern workflows combine tasks across administrative management, CRM logging, and customer responses. We build hybrid support roles matching your precise software stack and schedule.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 px-6 rounded-xl bg-[#FA7D3C] hover:bg-[#e66b2a] text-white font-bold text-sm shadow-md transition-all text-center cursor-pointer"
              >
                Discuss a Custom Role
              </button>
              <a
                href="tel:+918302648461"
                className="w-full py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all text-center flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#FA7D3C]" />
                +91 83026 48461
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Service Inquiries"
          title="Questions About Hiring & Delivery"
          subtitle="Everything you need to know about our remote professionals, quality assurances, and communication standards."
        />

        <div className="mt-12">
          <FAQAccordion limit={4} />
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 text-center space-y-6 shadow-sm">
          <h2 className="text-3xl font-extrabold text-[#093965]">
            Start Delegating with Confidence
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Reach out today to discuss your operational pain points. We'll identify the right virtual staffing approach for your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded-xl bg-[#FA7D3C] hover:bg-[#e66b2a] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Get a Free Consultation
            </button>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#093965] font-bold text-sm transition-all"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
