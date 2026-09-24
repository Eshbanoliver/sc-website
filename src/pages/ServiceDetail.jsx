import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall, 
  ShieldCheck, 
  Clock, 
  Users, 
  Layers,
  Sparkles,
  HelpCircle,
  AlertTriangle
} from "lucide-react";
import { SERVICES } from "../data/servicesData";
import SectionHeader from "../components/SectionHeader";
import ContactForm from "../components/ContactForm";

export default function ServiceDetail({ onOpenConsultation }) {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="space-y-20 sm:space-y-24 pt-4 pb-16">
      {/* BREADCRUMB & HEADER */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-6 pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-[#093965] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services" className="hover:text-[#093965] transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#FA7D3C] font-bold">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#093965]/8 text-[#093965] border border-[#093965]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FA7D3C]"></span>
                {service.badge}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#093965] tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-lg sm:text-xl text-[#2E8D9F] font-semibold leading-relaxed">
                {service.tagline}
              </p>

              <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
                {service.overview}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-7 py-3.5 rounded-xl bg-[#FA7D3C] hover:bg-[#e66b2a] text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Hire Dedicated Support</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+918302648461"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#093965] font-bold text-sm border border-slate-300 transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#FA7D3C]" />
                  <span>Call +91 83026 48461</span>
                </a>
              </div>
            </div>

            {/* Quick Service Specs Box */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-[#062644] text-white border border-[#2E8D9F]/30 shadow-xl space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#3cb4cb] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FA7D3C]" />
                  <span>Engagement Highlights</span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="pb-3 border-b border-slate-700/80">
                    <span className="text-slate-400 block text-xs">Coverage Timezones:</span>
                    <span className="font-semibold text-white">EST / CST / PST / IST Aligned</span>
                  </div>
                  <div className="pb-3 border-b border-slate-700/80">
                    <span className="text-slate-400 block text-xs">Onboarding Speed:</span>
                    <span className="font-semibold text-white">Rapid Deployment with SOP Alignment</span>
                  </div>
                  <div className="pb-3 border-b border-slate-700/80">
                    <span className="text-slate-400 block text-xs">Confidentiality:</span>
                    <span className="font-semibold text-white">Mutual NDA & Controlled Role Access</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">Primary Markets:</span>
                    <span className="font-semibold text-white">USA, Canada & India</span>
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded-xl bg-[#FA7D3C] hover:bg-[#e66b2a] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Request Consultation For This Role
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SCOPE OF WORK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: What We Support */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2E8D9F]">
                Operational Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#093965] mt-1">
                What Our {service.title} Team Handles
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                We handle the following everyday tasks with precision, following your guidelines and reporting daily:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.keyAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3 hover:border-[#2E8D9F] transition-colors"
                >
                  <div className="w-6 h-6 rounded-md bg-[#2E8D9F]/15 text-[#2E8D9F] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            {/* Scope / Regulatory Disclaimer where relevant */}
            {(service.slug === "accounting-bookkeeping" || service.slug === "insurance-support") && (
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">Service Scope Notice: </strong>
                  Staff Clicks provides back-office operations, administrative coordination, and transactional data entry support. We operate under our clients' operational direction and do not render licensed certified public audit, legal advisory, or licensed underwriter determinations.
                </div>
              </div>
            )}

            {/* Structured Workflow */}
            <div className="pt-6">
              <h3 className="text-xl font-bold text-[#093965] mb-4">
                Implementation Workflow
              </h3>
              <div className="space-y-3">
                {service.workflow.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-7 h-7 rounded-lg bg-[#093965] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-medium text-slate-700 mt-0.5">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Embedded Consultation Form */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md sticky top-28">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FA7D3C]">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-extrabold text-[#093965]">
                  Request a Free Consultation
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Tell us about your requirements for {service.title} and our staffing team will get in touch.
                </p>
              </div>

              <ContactForm prefilledService={service.title} />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE BENEFITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Measurable Advantages"
          title={`Why Choose Staff Clicks for ${service.title}?`}
          subtitle="Designed to provide operational reliability, reduce management overhead, and improve output quality."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#2E8D9F] transition-all shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#093965]/10 text-[#093965] flex items-center justify-center font-bold text-sm mb-4">
                0{idx + 1}
              </div>
              <h4 className="text-base font-bold text-[#093965] mb-2">{b.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OTHER SERVICES NAVIGATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E8D9F]">
              Explore More
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#093965]">
              Other Business Support Capabilities
            </h3>
          </div>
          <Link
            to="/services"
            className="text-xs sm:text-sm font-bold text-[#093965] hover:text-[#FA7D3C] flex items-center gap-1"
          >
            All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {otherServices.map((other) => (
            <div
              key={other.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#2E8D9F] transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {other.badge}
                </span>
                <h4 className="text-base font-bold text-[#093965] mt-1 mb-2">
                  {other.title}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {other.shortDescription}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <Link
                  to={`/services/${other.slug}`}
                  className="text-xs font-bold text-[#2E8D9F] hover:text-[#093965] flex items-center gap-1"
                >
                  View Details <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
