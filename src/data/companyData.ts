import { CompanyInfo } from "../types";

export const COMPANY_INFO: CompanyInfo = {
  name: "Staff Clicks",
  tagline: "Your Trusted Workforce for Smarter Business Operations",
  phone: "+91 83026 48461",
  email: "contact@staffclicks.com",
  operatingHours: "Monday – Saturday: 9:00 AM – 7:00 PM GST / EST & PST Support Available",
  markets: [
    { name: "UAE", hub: "Dubai, United Arab Emirates", note: "Headquarters & Delivery Center" },
    { name: "USA", hub: "United States", note: "Serving B2B Clients Nationwide" },
    { name: "Canada", hub: "Canada", note: "Remote Staffing & Process Support" },
  ],
  stats: [
    { label: "Markets Served", value: "UAE, USA & Canada", detail: "Global remote collaboration" },
    { label: "Core Service Areas", value: "9+ Domains", detail: "Tailored BPO & virtual staffing" },
    { label: "Support Model", value: "Dedicated & Scalable", detail: "Aligned to client business hours" },
    { label: "SLA Commitment", value: "Strict Quality Benchmarks", detail: "Transparent communication" },
  ],
};
