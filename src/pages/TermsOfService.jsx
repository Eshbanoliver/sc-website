import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#093965] hover:text-[#FA7D3C]">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
      </Link>

      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
          <ShieldCheck className="w-4 h-4 text-[#2E8D9F]" />
          <span>Terms & Conditions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#093965]">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-500">Last Updated: January 2026</p>
      </div>

      <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
        <p>
          Welcome to the website of <strong>Staff Clicks</strong>. By accessing this website or engaging our virtual assistance and business process outsourcing (BPO) services, you agree to be bound by the terms and conditions outlined below.
        </p>

        <h3 className="text-lg font-bold text-[#093965] pt-2">1. Scope of Services</h3>
        <p>
          Staff Clicks provides remote business support, administrative coordination, customer care, data entry, recruitment sourcing, lead research, and related operational assistance. Unless explicitly stated in a verified written agreement:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Staff Clicks operates as an operational support vendor and does not render licensed certified public accountant (CPA) opinions, licensed statutory audits, licensed legal advice, or regulated insurance underwriting decisions.</li>
          <li>Clients maintain supervisory responsibility over the strategic instructions, software access parameters, and business approvals provided to assigned personnel.</li>
        </ul>

        <h3 className="text-lg font-bold text-[#093965] pt-2">2. Engagement Models & Invoicing</h3>
        <p>
          Service engagements are established through customized statements of work (SOWs) specifying hourly allocations, monthly retainers, or project milestones. Fees are invoiced according to agreed-upon payment terms prior to or during delivery periods.
        </p>

        <h3 className="text-lg font-bold text-[#093965] pt-2">3. Intellectual Property & Work Product</h3>
        <p>
          Unless otherwise mutually agreed in writing, all deliverables, databases, spreadsheets, and documentation produced by Staff Clicks personnel specifically for a client become the exclusive property of the client upon full settlement of applicable invoices.
        </p>

        <h3 className="text-lg font-bold text-[#093965] pt-2">4. Limitation of Liability</h3>
        <p>
          Staff Clicks will exercise reasonable skill and care in executing agreed tasks. However, in no event shall Staff Clicks be liable for indirect, incidental, or consequential damages resulting from third-party software outages, client delays, or third-party communications.
        </p>

        <h3 className="text-lg font-bold text-[#093965] pt-2">5. Governing Law</h3>
        <p>
          These terms and agreements shall be governed by and construed in accordance with the applicable laws of India, with primary operations situated in Ajmer, Rajasthan, while honoring contractual commitments entered into with international enterprise clients in the USA and Canada.
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1">
          <div><strong>Staff Clicks</strong></div>
          <div>Direct Hotline: +91 83026 48461</div>
          <div>General Inquiries: contact@staffclicks.com</div>
        </div>
      </div>
    </div>
  );
}
