import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export default function PrivacyPolicy(): React.JSX.Element {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#093965] hover:text-[#FA7D3C]">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
      </Link>

      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
          <ShieldCheck className="w-4 h-4 text-[#2E8D9F]" />
          <span>Legal & Data Protection</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#093965]">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">Last Updated: January 2026</p>
      </div>

      <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
        <p>
          At <strong>Staff Clicks</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we are deeply committed to respecting and protecting the privacy of our clients, website visitors, and remote personnel across India, the United States, and Canada. This Privacy Policy outlines how we collect, use, safeguard, and disclose information gathered through our website and business process outsourcing services.
        </p>

        <h3 className="text-lg font-bold text-[#093965] pt-2">1. Information We Collect</h3>
        <p>
          When you interact with our website, request a consultation, or engage our services, we may collect the following categories of information:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Contact Details:</strong> Your full name, business email address, phone number, company name, and geographical country.</li>
          <li><strong>Service Inquiries:</strong> Details regarding the tasks, software tools, time zone requirements, and operational support you seek.</li>
          <li><strong>Technical Usage Data:</strong> Anonymized data including browser types, referring pages, IP addresses, and session duration to ensure website security and performance.</li>
        </ul>

        <h3 className="text-lg font-bold text-[#093965] pt-2">2. How We Use Your Information</h3>
        <p>
          We use the information collected strictly for legitimate business purposes, including:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Evaluating your operational requirements and preparing customized virtual staffing proposals.</li>
          <li>Communicating with you regarding scheduled consultations and service agreements.</li>
          <li>Maintaining security, preventing fraudulent activity, and verifying organizational identities.</li>
          <li>Fulfilling our contractual commitments and service level agreements (SLAs).</li>
        </ul>

        <h3 className="text-lg font-bold text-[#093965] pt-2">3. Client Confidentiality &amp; Non-Disclosure Agreements (NDAs)</h3>
        <p>
          In our capacity as a virtual assistance and business process outsourcing partner, our personnel may access proprietary business workflows, databases, or customer communications. We enforce strict contractual Non-Disclosure Agreements with all remote professionals and operational managers before any client project initiation.
        </p>

        <h3 className="text-lg font-bold text-[#093965] pt-2">4. Data Sharing and Third Parties</h3>
        <p>
          We do not sell, rent, or trade your personal or business data to third parties for marketing purposes. Data is only shared with authorized operational personnel and secure infrastructure providers (e.g. encrypted cloud hosting, email gateways) necessary to deliver our services.
        </p>

        <h3 className="text-lg font-bold text-[#093965] pt-2">5. Contact Information</h3>
        <p>
          If you have questions or concerns regarding this Privacy Policy or our data handling practices, please contact us at:
        </p>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1">
          <div><strong>Staff Clicks</strong></div>
          <div>Delivery Center: Ajmer, Rajasthan, India</div>
          <div>Phone: +91 83026 48461</div>
          <div>Email: contact@staffclicks.com</div>
        </div>
      </div>
    </div>
  );
}
