export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  companyType: string;
  location: string;
  country: string;
  flag: string;
  avatarBg: string;
  initials: string;
  rating: number;
  highlight: string;
  quote: string;
  service: string;
  metrics: {
    value: string;
    label: string;
  };
}

export interface CompanyServed {
  id: string;
  name: string;
  tagline: string;
  industry: string;
  industryCategory: "ecommerce" | "tech" | "legal" | "logistics" | "finance" | "all";
  country: string;
  flag: string;
  teamSizeDeployed: string;
  supportScope: string;
  keyBenefit: string;
  brandColor: string;
  logoLetter: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Marcus Vance",
    role: "Chief Operating Officer",
    company: "Apex Growth Ventures",
    companyType: "B2B SaaS & Tech",
    location: "Austin, Texas",
    country: "USA",
    flag: "🇺🇸",
    avatarBg: "from-blue-600 to-indigo-700",
    initials: "MV",
    rating: 5,
    highlight: "Saved 40+ leadership hours every single week",
    quote: "Staff Clicks integrated into our workflow within 72 hours. Their virtual assistants handle our executive calendar, CRM hygiene, and lead pipeline with unmatched precision. We cut our administrative overhead by 60% without sacrificing an ounce of quality.",
    service: "Executive Virtual Assistance",
    metrics: {
      value: "40+ hrs",
      label: "Leadership time saved/wk",
    },
  },
  {
    id: "test-2",
    name: "Elena Rostova",
    role: "Head of Customer Experience",
    company: "Nordic Wave Commerce",
    companyType: "Multi-Store E-commerce",
    location: "Toronto, Ontario",
    country: "Canada",
    flag: "🇨🇦",
    avatarBg: "from-emerald-600 to-teal-700",
    initials: "ER",
    rating: 5,
    highlight: "99.4% CSAT across 12,000+ support interactions",
    quote: "Managing Black Friday & Q4 surges used to mean chaotic hiring. Staff Clicks provided trained customer support reps who were fluent in Zendesk and Shopify from day one. Our response time dropped from 4 hours to under 6 minutes.",
    service: "Customer Care & Live Chat",
    metrics: {
      value: "< 6 min",
      label: "Average response speed",
    },
  },
  {
    id: "test-3",
    name: "Julian Hetherington",
    role: "Managing Partner",
    company: "Kensington Legal & Advisory",
    companyType: "Corporate Law & Consulting",
    location: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
    avatarBg: "from-amber-600 to-orange-700",
    initials: "JH",
    rating: 5,
    highlight: "Strict NDA compliance and flawless document execution",
    quote: "In legal consulting, zero error tolerance is non-negotiable. Staff Clicks provided legal admin assistants who audit contracts, organize disclosure bundles, and schedule arbitrations across UK and EU business hours seamlessly.",
    service: "Administrative & Legal Support",
    metrics: {
      value: "100%",
      label: "Audit & NDA compliance",
    },
  },
  {
    id: "test-4",
    name: "Seraphina Lin",
    role: "Founder & Managing Director",
    company: "FinBridge Capital",
    companyType: "FinTech & Wealth Advisory",
    location: "Marina Bay",
    country: "Singapore",
    flag: "🇸🇬",
    avatarBg: "from-purple-600 to-pink-700",
    initials: "SL",
    rating: 5,
    highlight: "Multi-currency bookkeeping closed 5 days ahead of schedule",
    quote: "Our cross-border compliance across Singapore, Malaysia, and Australia required continuous reconciliation. Staff Clicks' accounting professionals brought rigor to our Xero pipelines. They operate like an extension of our core finance room.",
    service: "Accounting & Bookkeeping",
    metrics: {
      value: "5 Days",
      label: "Faster month-end close",
    },
  },
  {
    id: "test-5",
    name: "Harrison Blake",
    role: "Director of Talent & People",
    company: "Strata Global Logistics",
    companyType: "Supply Chain & Freight",
    location: "Sydney, NSW",
    country: "Australia",
    flag: "🇦🇺",
    avatarBg: "from-cyan-600 to-blue-700",
    initials: "HB",
    rating: 5,
    highlight: "Candidate sourcing cycle compressed by 65%",
    quote: "Hiring logistics coordinators across Australia was stalling our regional expansion. The recruitment research pod from Staff Clicks screened 450+ vetted candidates in record time. We filled 14 critical seats in under 3 weeks.",
    service: "Recruitment & Talent Sourcing",
    metrics: {
      value: "65%",
      label: "Hiring cycle reduction",
    },
  },
  {
    id: "test-6",
    name: "Rajesh K. Singhania",
    role: "Managing Director",
    company: "Apex Horizon Enterprises",
    companyType: "Industrial Export & Operations",
    location: "Ajmer, Rajasthan",
    country: "Ajmer (India)",
    flag: "🇮🇳",
    avatarBg: "from-rose-600 to-red-700",
    initials: "RS",
    rating: 5,
    highlight: "Flawless daily reporting and continuous operational QA",
    quote: "Having our operational hub rooted in Ajmer with transparent delivery supervisors gave us immense confidence. Their data management team restructured 250,000+ SKU inventory records without a single downtime glitch.",
    service: "Data Management & Analytics",
    metrics: {
      value: "250K+",
      label: "Inventory records processed",
    },
  },
];

export const COMPANIES_SERVED: CompanyServed[] = [
  {
    id: "comp-1",
    name: "Apex Growth Ventures",
    tagline: "High-Growth B2B Cloud Accelerator",
    industry: "Tech & SaaS",
    industryCategory: "tech",
    country: "USA",
    flag: "🇺🇸",
    teamSizeDeployed: "4 Dedicated VAs",
    supportScope: "Executive scheduling, cold email prospecting, HubSpot CRM automation",
    keyBenefit: "40+ hours returned to founders weekly",
    brandColor: "#093965",
    logoLetter: "AG",
  },
  {
    id: "comp-2",
    name: "Nordic Wave Commerce",
    tagline: "Omnichannel Direct-to-Consumer Apparel",
    industry: "E-commerce & Retail",
    industryCategory: "ecommerce",
    country: "Canada",
    flag: "🇨🇦",
    teamSizeDeployed: "6 Customer Support Reps",
    supportScope: "24/7 Zendesk live chat, order returns, dispute management, Shopify updates",
    keyBenefit: "Response time under 6 minutes",
    brandColor: "#2E8D9F",
    logoLetter: "NW",
  },
  {
    id: "comp-3",
    name: "Kensington Legal Partners",
    tagline: "Cross-Border Commercial Litigation",
    industry: "Legal & Professional Services",
    industryCategory: "legal",
    country: "United Kingdom",
    flag: "🇬🇧",
    supportScope: "Document indexing, court diary coordination, client onboarding compliance",
    teamSizeDeployed: "3 Legal Admin Specialists",
    keyBenefit: "100% adherence to SRA guidelines",
    brandColor: "#1e293b",
    logoLetter: "KL",
  },
  {
    id: "comp-4",
    name: "FinBridge Capital",
    tagline: "Pan-Asian Wealth Advisory & Angel Syndicate",
    industry: "Finance & Accounting",
    industryCategory: "finance",
    country: "Singapore",
    flag: "🇸🇬",
    supportScope: "Multi-currency ledger audit, investor report compilation, Xero / QuickBooks",
    teamSizeDeployed: "2 Senior Financial Analysts",
    keyBenefit: "5-day acceleration on month-end reports",
    brandColor: "#7c3aed",
    logoLetter: "FB",
  },
  {
    id: "comp-5",
    name: "Strata Global Freight",
    tagline: "Ocean & Air Freight Multimodal Logistics",
    industry: "Logistics & Supply Chain",
    industryCategory: "logistics",
    country: "Australia",
    flag: "🇦🇺",
    supportScope: "Bill of Lading verification, tracking alerts, carrier rate negotiation",
    teamSizeDeployed: "5 Operations Coordinators",
    keyBenefit: "Zero customs clearance delay on 98.7% loads",
    brandColor: "#0369a1",
    logoLetter: "SG",
  },
  {
    id: "comp-6",
    name: "OmniHealth Medical Billing",
    tagline: "Healthcare Group & Diagnostic Centers",
    industry: "Healthcare & Insurance",
    industryCategory: "finance",
    country: "USA",
    flag: "🇺🇸",
    supportScope: "HIPAA-compliant claims adjudication, patient scheduling, pre-authorization",
    teamSizeDeployed: "8 Billing Specialists",
    keyBenefit: "Claim denial rate decreased by 34%",
    brandColor: "#059669",
    logoLetter: "OH",
  },
  {
    id: "comp-7",
    name: "TechnoSync Systems",
    tagline: "Enterprise ERP & Digital Transformation",
    industry: "IT & Infrastructure",
    industryCategory: "tech",
    country: "Ajmer (India)",
    flag: "🇮🇳",
    supportScope: "Database deduplication, tier-1 IT helpdesk, project ticket triage in Jira",
    teamSizeDeployed: "4 Systems Coordinators",
    keyBenefit: "99.9% uptime on internal SLA tracking",
    brandColor: "#d97706",
    logoLetter: "TS",
  },
  {
    id: "comp-8",
    name: "Velocity Real Estate Group",
    tagline: "Commercial Property Brokerage & Management",
    industry: "Real Estate & Property",
    industryCategory: "legal",
    country: "Canada",
    flag: "🇨🇦",
    supportScope: "MLS listing updates, tenant background verification, lease renewals",
    teamSizeDeployed: "3 Property Coordinators",
    keyBenefit: "Leasing cycle accelerated by 45%",
    brandColor: "#dc2626",
    logoLetter: "VR",
  },
  {
    id: "comp-9",
    name: "Meridian Horizon Retail",
    tagline: "Amazon & Walmart Marketplace Seller",
    industry: "E-commerce & Marketplace",
    industryCategory: "ecommerce",
    country: "United Kingdom",
    flag: "🇬🇧",
    supportScope: "A+ content upload, catalog optimization, supplier inventory forecasting",
    teamSizeDeployed: "4 Catalog Specialists",
    keyBenefit: "Buy-box rate elevated to 94.2%",
    brandColor: "#be185d",
    logoLetter: "MH",
  },
];

export const COMPANY_PROFILES_METRICS = [
  { label: "Client Retention Rate", value: "96.4%", sub: "Over 12-month engagements" },
  { label: "Avg. Cost Savings", value: "62%", sub: "Compared to onshore in-house hiring" },
  { label: "Onboarding Window", value: "3-5 Days", sub: "Fully ramped and task-ready" },
  { label: "SLA Adherence Rate", value: "99.8%", sub: "Strict compliance benchmarks" },
];
