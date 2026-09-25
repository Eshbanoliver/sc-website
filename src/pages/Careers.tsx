import React, { useState } from "react";
import { 
  Briefcase, 
  CheckCircle2, 
  Send, 
  Globe2, 
  Award, 
  GraduationCap, 
  HeartHandshake
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { CareerFormData } from "../types";

export default function Careers(): React.JSX.Element {
  const [formData, setFormData] = useState<CareerFormData>({
    fullName: "",
    email: "",
    phone: "",
    roleInterest: "Virtual Assistance",
    experienceYears: "1-3 Years",
    linkedIn: "",
    notes: ""
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const careerTracks = [
    {
      title: "Virtual Assistance",
      desc: "Executive assistance, calendar scheduling, inbox organization, and business administration for international leaders."
    },
    {
      title: "Customer Support",
      desc: "Live chat, email ticketing, and phone assistance helping global customers with product queries and resolutions."
    },
    {
      title: "Recruitment & Talent Sourcing",
      desc: "Candidate sourcing, resume screening, talent mapping, and recruitment pipeline coordination for staffing firms."
    },
    {
      title: "Data & CRM Operations",
      desc: "High-accuracy database administration, CRM hygiene, data verification, and reporting across cloud systems."
    },
    {
      title: "Sales & Lead Generation",
      desc: "B2B prospect research, company mapping, verified contact discovery, and outreach support."
    },
    {
      title: "Administrative Operations",
      desc: "Back-office workflows, document indexing, meeting minutes, and operational assistance."
    }
  ];

  const benefits = [
    {
      icon: Globe2,
      title: "International Exposure",
      desc: "Work directly with established businesses across the USA, Canada, and India, gaining valuable global operational experience."
    },
    {
      icon: GraduationCap,
      title: "Skill Development & Mentorship",
      desc: "Structured coaching in modern cloud platforms, CRM software, automation tools, and professional business communication."
    },
    {
      icon: Award,
      title: "Merit-Based Growth",
      desc: "Clear career progression pathways from associate to team lead, process manager, and quality assurance supervisor."
    },
    {
      icon: HeartHandshake,
      title: "Collaborative Culture",
      desc: "A supportive, respectful work environment centered in Ajmer, Rajasthan, dedicated to work-life balance and long-term retention."
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="space-y-24 sm:space-y-28 pt-8 pb-16">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#093965]/8 text-[#093965] border border-[#093965]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA7D3C]"></span>
            Join Our Growing Team
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-5.5xl font-black text-[#093965] tracking-tight leading-tight">
            Build Your Career With Staff Clicks
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We are always looking for driven, detail-oriented professionals who take pride in exceptional execution, transparent communication, and continuous learning.
          </p>
        </div>
      </section>

      {/* WHY GROW WITH US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            const shadowClasses = [
              "card-shadow-blue",
              "card-shadow-teal",
              "card-shadow-orange",
              "card-shadow-purple"
            ];
            const cardShadow = shadowClasses[idx % shadowClasses.length];
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-white border border-slate-200/90 ${cardShadow} transition-all duration-300 hover:-translate-y-1.5`}
              >
                <div className="w-11 h-11 rounded-xl bg-[#093965]/8 text-[#093965] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#093965] mb-2">{b.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CAREER TRACKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Areas of Opportunity"
          title="Core Domains We Hire In"
          subtitle="Explore the functional areas where Staff Clicks continually builds talent pools for international client engagements."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {careerTracks.map((track, idx) => {
            const shadowClasses = [
              "card-shadow-teal",
              "card-shadow-orange",
              "card-shadow-purple",
              "card-shadow-blue",
              "card-shadow-emerald",
              "card-shadow-rose"
            ];
            const cardShadow = shadowClasses[idx % shadowClasses.length];
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-white border border-slate-200/90 ${cardShadow} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#2E8D9F]/15 text-[#2E8D9F] flex items-center justify-center mb-4">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#093965] mb-2">{track.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{track.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Location: Ajmer Hub / Remote</span>
                  <span className="text-[#FA7D3C] font-semibold">Active Pool</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* RESUME SUBMISSION / TALENT NETWORK FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-md">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FA7D3C]">
              Express Your Interest
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#093965] mt-1">
              Interested in Joining Staff Clicks?
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Submit your profile and resume details below. Our HR recruitment team reviews incoming profiles for active client assignments.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-[#093965]">Application Profile Received</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for your interest in Staff Clicks! Our recruitment coordinators will review your background and reach out when an aligned project or client role opens.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-bold text-[#093965] underline hover:text-[#FA7D3C] cursor-pointer"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-[#2E8D9F] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="priya@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-[#2E8D9F] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 90000 00000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-[#2E8D9F] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Domain of Interest *
                  </label>
                  <select
                    value={formData.roleInterest}
                    onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:border-[#2E8D9F] focus:outline-none"
                  >
                    <option value="Virtual Assistance">Virtual Assistance</option>
                    <option value="Customer Support">Customer Support (Chat/Voice/Email)</option>
                    <option value="Recruitment">Recruitment & Sourcing</option>
                    <option value="Data & CRM Operations">Data & CRM Operations</option>
                    <option value="Sales / Lead Generation">Sales / Lead Generation</option>
                    <option value="Administrative Operations">Administrative Operations</option>
                    <option value="Accounting & Bookkeeping">Accounting & Bookkeeping Support</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Years of Experience *
                  </label>
                  <select
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:border-[#2E8D9F] focus:outline-none"
                  >
                    <option value="Fresher / Entry Level">Fresher / Entry Level (&lt; 1 Year)</option>
                    <option value="1-3 Years">1 - 3 Years</option>
                    <option value="3-5 Years">3 - 5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    LinkedIn or Portfolio URL
                  </label>
                  <input
                    type="url"
                    value={formData.linkedIn}
                    onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-[#2E8D9F] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Brief Overview of Your Skills & Software Proficiencies
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention relevant tools you have used (e.g. Zendesk, Salesforce, Excel, HubSpot, QuickBooks, Google Workspace)..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-[#2E8D9F] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#093965] hover:bg-[#062644] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  <Send className="w-4 h-4 text-[#FA7D3C]" />
                  <span>{isSubmitting ? "Submitting Application..." : "Send Your Resume / Profile"}</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 pt-2">
                You can also email your CV directly to <span className="font-semibold text-slate-700">careers@staffclicks.com</span> with your domain of interest in the subject line.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
