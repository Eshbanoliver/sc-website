import { CompanyInfo } from "../types";

export const COMPANY_INFO: CompanyInfo = {
  name: "Staff Clicks",
  tagline: "Your Trusted Workforce for Smarter Business Operations",
  phone: "", // Temporarily hidden; will be added back in future
  email: "info@staffclicks.com",
  operatingHours: "Monday – Saturday: 24/6 Coverage Aligned to All Timezones (EST, CST, PST, GMT, SGT, AEST & IST)",
  markets: [
    { name: "Ajmer", hub: "Ajmer, India", note: "Delivery Center & Operations Hub" },
    { name: "USA", hub: "United States", note: "Serving B2B Clients Nationwide" },
    { name: "Canada", hub: "Canada", note: "Remote Staffing & Process Support" },
    { name: "Singapore", hub: "Singapore", note: "Asia-Pacific Support" },
    { name: "Australia", hub: "Australia", note: "Oceania Business Solutions" },
    { name: "United Kingdom", hub: "United Kingdom", note: "UK & European Client Operations" },
  ],
  stats: [
    { label: "Markets Served", value: "Ajmer, USA, Canada, Singapore, Australia & UK", detail: "Global remote collaboration" },
    { label: "Core Service Areas", value: "9+ Domains", detail: "Tailored BPO & virtual staffing" },
    { label: "Support Model", value: "Dedicated & Scalable", detail: "Aligned to client business hours" },
    { label: "SLA Commitment", value: "Strict Quality Benchmarks", detail: "Transparent communication" },
  ],
};
