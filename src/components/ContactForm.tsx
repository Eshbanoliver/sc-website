import React, { useState } from "react";
import { Send, PhoneCall, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { SERVICES } from "../data/servicesData";
import { ContactFormData } from "../types";

interface ContactFormProps {
  prefilledService?: string;
  onSuccess?: () => void;
}

export default function ContactForm({ prefilledService = "", onSuccess }: ContactFormProps): React.JSX.Element {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    businessEmail: "",
    phoneNumber: "",
    companyName: "",
    country: "USA",
    serviceInterestedIn: prefilledService || "Virtual Assistance",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const validate = (): Record<string, string> => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = "Business email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = "Please enter a valid email address";
    }
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.message.trim()) newErrors.message = "Please tell us briefly about your requirements";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulated API call point - ready to hook to any backend endpoint or email API
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 900);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-white border border-emerald-200 text-center shadow-lg">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#093965]">Consultation Request Received</h3>
        <p className="mt-3 text-slate-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
          Thank you for reaching out to <strong className="text-[#093965]">Staff Clicks</strong>. Our team will review your requirements and reach out within 1 business day.
        </p>
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+918302648461"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#093965] text-white text-sm font-semibold hover:bg-[#062644] transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-[#FA7D3C]" />
            <span>Need immediate answers? Call +91 83026 48461</span>
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                businessEmail: "",
                phoneNumber: "",
                companyName: "",
                country: "USA",
                serviceInterestedIn: "Virtual Assistance",
                message: ""
              });
            }}
            className="text-xs font-semibold text-slate-500 hover:text-[#093965] underline cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Full Name <span className="text-[#FA7D3C]">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Michael Vance"
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
              errors.fullName 
                ? "border-red-400 focus:ring-red-200 bg-red-50/20" 
                : "border-slate-300 focus:border-[#2E8D9F] focus:ring-[#2E8D9F]/20 bg-white"
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Business Email */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Business Email <span className="text-[#FA7D3C]">*</span>
          </label>
          <input
            type="email"
            name="businessEmail"
            value={formData.businessEmail}
            onChange={handleChange}
            placeholder="michael@company.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
              errors.businessEmail 
                ? "border-red-400 focus:ring-red-200 bg-red-50/20" 
                : "border-slate-300 focus:border-[#2E8D9F] focus:ring-[#2E8D9F]/20 bg-white"
            }`}
          />
          {errors.businessEmail && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.businessEmail}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone Number */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Phone Number <span className="text-[#FA7D3C]">*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
              errors.phoneNumber 
                ? "border-red-400 focus:ring-red-200 bg-red-50/20" 
                : "border-slate-300 focus:border-[#2E8D9F] focus:ring-[#2E8D9F]/20 bg-white"
            }`}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
            </p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Company Name <span className="text-[#FA7D3C]">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Acme Operations LLC"
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
              errors.companyName 
                ? "border-red-400 focus:ring-red-200 bg-red-50/20" 
                : "border-slate-300 focus:border-[#2E8D9F] focus:ring-[#2E8D9F]/20 bg-white"
            }`}
          />
          {errors.companyName && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.companyName}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Country */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Country / Region <span className="text-[#FA7D3C]">*</span>
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#2E8D9F] focus:ring-2 focus:ring-[#2E8D9F]/20"
          >
            <option value="USA">United States (USA)</option>
            <option value="Canada">Canada</option>
            <option value="India">India</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other International</option>
          </select>
        </div>

        {/* Service Interested In */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Service Interested In <span className="text-[#FA7D3C]">*</span>
          </label>
          <select
            name="serviceInterestedIn"
            value={formData.serviceInterestedIn}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#2E8D9F] focus:ring-2 focus:ring-[#2E8D9F]/20"
          >
            {SERVICES.map(s => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
            <option value="General BPO Inquiry">General BPO / Multi-Skill Support</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          How can we help your team? <span className="text-[#FA7D3C]">*</span>
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe your support needs, required hours, or tools you currently use..."
          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
            errors.message 
              ? "border-red-400 focus:ring-red-200 bg-red-50/20" 
              : "border-slate-300 focus:border-[#2E8D9F] focus:ring-[#2E8D9F]/20 bg-white"
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#FA7D3C] hover:bg-[#e66b2a] text-white text-base font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Processing Consultation Request...</span>
          </>
        ) : (
          <>
            <span>Request a Consultation</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-[12px] text-slate-500 pt-2">
        🔒 We respect your privacy. No spam. All client discussions are protected under standard NDA protocols.
      </p>
    </form>
  );
}
