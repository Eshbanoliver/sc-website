import { Service } from "../types";

export const SERVICES: Service[] = [
  {
    id: "virtual-assistance",
    slug: "virtual-assistance",
    title: "Virtual Assistance",
    shortTitle: "Virtual Assistance",
    badge: "Executive & Core Support",
    tagline: "Dedicated executive & operational virtual assistants to give you hours back every day.",
    shortDescription: "Delegate calendar scheduling, inbox organization, market research, and everyday back-office tasks to trained remote assistants.",
    iconName: "UserCheck",
    keyAreas: [
      "Calendar and meeting scheduling",
      "Executive inbox & email management",
      "Document drafting & formatting",
      "Travel planning & itinerary coordination",
      "Web research & summary compilation",
      "Vendor and partner correspondence",
      "General day-to-day business administration"
    ],
    overview: "Modern business leaders and growing teams spend excessive hours trapped in repetitive organizational routines. Staff Clicks provides skilled Virtual Assistants who integrate seamlessly into your preferred communication channels (Slack, Teams, Google Workspace, Microsoft 365) and handle day-to-day operational details so you can focus on core strategy and client delivery.",
    benefits: [
      { title: "Time Freedom", desc: "Reclaim up to 15+ hours weekly from scheduling, email backlog, and administrative follow-ups." },
      { title: "Aligned Time Zones", desc: "Support scheduled to match your working hours across India, USA, or Canada." },
      { title: "Flexible Engagement", desc: "Scale assistance up or down depending on project demands without long-term hiring lock-ins." },
      { title: "Structured Handover", desc: "Clear onboarding protocols ensure tasks are picked up with minimal ramp-up time." }
    ],
    workflow: [
      "Audit of executive & team operational bottlenecks",
      "Candidate profile alignment based on your tool stack",
      "Standard Operating Procedure (SOP) documentation",
      "Daily check-ins, end-of-day reports, and continuous quality checks"
    ]
  },
  {
    id: "recruitment",
    slug: "recruitment",
    title: "Recruitment Services",
    shortTitle: "Recruitment",
    badge: "Talent Acquisition Support",
    tagline: "End-to-end recruitment coordination, talent sourcing, and candidate screening support.",
    shortDescription: "Accelerate your hiring cycle with proactive talent research, resume screening, ATS management, and interview scheduling.",
    iconName: "UserSearch",
    keyAreas: [
      "Targeted candidate sourcing & talent mapping",
      "Resume parsing & first-level qualification screening",
      "Applicant Tracking System (ATS) hygiene & updates",
      "Interview coordination across multiple time zones",
      "Reference checking & background document collection",
      "Recruiter coordination & pipeline reporting"
    ],
    overview: "Finding quality candidates demands meticulous market mapping and constant follow-ups. Staff Clicks acts as your remote recruitment support engine, helping staffing firms, HR departments, and growing enterprises maintain active pipelines, qualify resumes against strict criteria, and schedule interviews without losing top talent to delays.",
    benefits: [
      { title: "Faster Time-to-Hire", desc: "Screen incoming applicant volumes quickly to present shortlisted candidates within hours." },
      { title: "Pipeline Consistency", desc: "Maintain continuous passive talent sourcing even during hiring surges." },
      { title: "ATS Optimization", desc: "Ensure every candidate status, note, and communication record is kept pristine." },
      { title: "Cost-Effective Sourcing", desc: "Scale recruiter support up or down without increasing permanent in-house headcount." }
    ],
    workflow: [
      "Job specification & criteria breakdown",
      "Multi-channel talent research & sourcing",
      "Screening scorecard application & shortlisting",
      "Interview scheduling & pipeline reporting"
    ]
  },
  {
    id: "customer-support",
    slug: "customer-support",
    title: "Customer Support",
    shortTitle: "Customer Support",
    badge: "Omnichannel Care",
    tagline: "Responsive email, live chat, and voice support that protects client loyalty around the clock.",
    shortDescription: "Deliver professional customer experiences across tickets, live chat, and phones with dedicated support reps trained on your product guidelines.",
    iconName: "Headphones",
    keyAreas: [
      "Omnichannel ticket management (Zendesk, Freshdesk, Intercom)",
      "Real-time live chat assistance & web visitor engagement",
      "Inbound & outbound telephone support for business inquiries",
      "Order tracking, refund processing, and escalation handling",
      "Customer onboarding guidance and product walkthroughs",
      "Post-resolution feedback collection & satisfaction reporting"
    ],
    overview: "Customer loyalty hinges on swift, empathetic, and accurate responses. Staff Clicks provides dedicated customer support associates who master your brand voice, handle tier-1 and tier-2 inquiries, and resolve tickets methodically according to your defined SLAs.",
    benefits: [
      { title: "Higher First-Contact Resolution", desc: "Trained associates equipped with comprehensive knowledge bases resolve queries quickly." },
      { title: "Extended Coverage", desc: "Maintain responsive support across North American and Indian business hours." },
      { title: "Reduced Backlog", desc: "Clear ticket queues and prevent customer dissatisfaction during peak periods." },
      { title: "SLA Adherence", desc: "Measurable metrics for response times, resolution rates, and CSAT scores." }
    ],
    workflow: [
      "Product & policy onboarding with knowledge base creation",
      "Shadowing & test ticket evaluations before going live",
      "Live support execution across configured channels",
      "Weekly QA audits and ongoing coaching"
    ]
  },
  {
    id: "data-management",
    slug: "data-management",
    title: "Data & CRM Management",
    shortTitle: "Data & CRM",
    badge: "Accuracy & Integrity",
    tagline: "Accurate database entry, CRM maintenance, record hygiene, and business reporting.",
    shortDescription: "Keep your operational databases, HubSpot/Salesforce CRMs, and spreadsheets error-free, up-to-date, and ready for decision-making.",
    iconName: "Database",
    keyAreas: [
      "High-accuracy data entry & digitizing physical records",
      "CRM record hygiene, deduplication, and lifecycle updates",
      "Database cleansing, enrichment, and field standardization",
      "Regular data validation against primary sources",
      "Custom business reporting, dashboard updates & spreadsheet maintenance",
      "Document indexing, file tagging, and cloud archiving"
    ],
    overview: "Messy data leads to missed deals, billing inaccuracies, and poor strategic decisions. Staff Clicks provides meticulous data specialists who maintain clean CRM pipelines, update operational logs, perform systematic audits, and ensure your business records are clean and accessible.",
    benefits: [
      { title: "Reliable Accuracy", desc: "Double-check protocols and field validation ensure data integrity." },
      { title: "Actionable Insights", desc: "Clean CRM data delivers clearer pipeline visibility for leadership." },
      { title: "Time Savings", desc: "Free sales and operations professionals from tedious data hygiene chores." },
      { title: "Secure Handling", desc: "Strict adherence to data confidentiality and role-based access protocols." }
    ],
    workflow: [
      "Data schema & formatting standard alignment",
      "Batch entry, cleansing, and cross-verification",
      "Automated and manual anomaly checks",
      "Scheduled reporting and summary dashboard delivery"
    ]
  },
  {
    id: "lead-generation",
    slug: "lead-generation",
    title: "Lead Generation Support",
    shortTitle: "Lead Generation",
    badge: "Sales Pipeline Engine",
    tagline: "Prospect research, targeted list building, data enrichment, and outreach coordination.",
    shortDescription: "Fuel your sales team with verified contact lists, prospect research, appointment scheduling, and systematic follow-up management.",
    iconName: "Target",
    keyAreas: [
      "Ideal Customer Profile (ICP) prospect research",
      "Targeted B2B lead list building with verified emails & phone numbers",
      "Account mapping & stakeholder identification",
      "Data enrichment across LinkedIn Sales Navigator & company directories",
      "Outreach campaign administration & email sequence monitoring",
      "Appointment setting & calendar coordination for sales reps"
    ],
    overview: "Consistent sales pipelines require disciplined prospecting. Staff Clicks provides dedicated lead research specialists who identify key decision-makers in your target sectors, verify contact accuracy, and help coordinate warm handoffs to your closing team.",
    benefits: [
      { title: "Pre-Qualified Prospects", desc: "Lists built strictly according to your demographic, technographic, and geographic criteria." },
      { title: "Higher Deliverability", desc: "Verified contact emails minimize bounce rates and safeguard domain reputation." },
      { title: "Accelerated Outreach", desc: "Free your account executives to focus on consultative calls and closing deals." },
      { title: "Organized Cadence", desc: "Systematic tracking of responses, bounces, and booked discovery calls." }
    ],
    workflow: [
      "ICP definition & qualification criteria mapping",
      "Manual and tool-assisted prospect discovery & validation",
      "Contact verification and CRM ingestion",
      "Outreach scheduling and appointment calendar sync"
    ]
  },
  {
    id: "administrative-support",
    slug: "administrative-support",
    title: "Administrative Support",
    shortTitle: "Administrative",
    badge: "Back-Office Engine",
    tagline: "Structured back-office administration, document workflows, and operational coordination.",
    shortDescription: "Relieve internal pressure with reliable document processing, calendar management, billing coordination, and back-office operations.",
    iconName: "Briefcase",
    keyAreas: [
      "Comprehensive back-office task handling",
      "Document drafting, proofreading, and formatting",
      "Meeting preparation, agenda creation, and minutes of meeting (MoM)",
      "Vendor invoice logging & payment scheduling support",
      "Digital filing system restructuring and cloud folder maintenance",
      "Web research for vendor selection, logistics, and supplies"
    ],
    overview: "Every growing company relies on a solid administrative backbone. Staff Clicks delivers dependable back-office associates who maintain documentation, organize calendars, coordinate inter-departmental logistics, and keep company operations functioning seamlessly.",
    benefits: [
      { title: "Operational Continuity", desc: "Maintain uninterrupted daily workflow even during staff leaves or transitions." },
      { title: "Process Consistency", desc: "Standard operating procedures applied uniformly to all back-office tasks." },
      { title: "Reduced Overhead", desc: "No workspace, hardware, or employee overhead costs for back-office capacity." },
      { title: "Scalable Bandwidth", desc: "Add extra administrative support during end-of-quarter or project crunches." }
    ],
    workflow: [
      "Administrative workflow assessment and priority mapping",
      "Access provisioning to document drives and productivity tools",
      "Execution with daily activity checkpoints",
      "Continuous optimization of task documentation"
    ]
  },
  {
    id: "accounting-bookkeeping",
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping Support",
    shortTitle: "Accounting & Books",
    badge: "Financial Records Support",
    tagline: "Accurate transaction entry, invoice tracking, reconciliation support, and record maintenance.",
    shortDescription: "Support your internal finance team or CPA with structured ledger entries, accounts payable/receivable tracking, and reconciliation assistance.",
    iconName: "Calculator",
    keyAreas: [
      "Transaction data entry into QuickBooks, Xero, or Zoho Books",
      "Accounts Payable (AP) invoice processing and record keeping",
      "Accounts Receivable (AR) invoice dispatch and follow-up logging",
      "Bank and credit card monthly reconciliation support",
      "Receipt categorization, digital indexing, and audit trail preparation",
      "Periodic financial schedule compilation for leadership review"
    ],
    overview: "Maintaining clean financial ledgers is critical for compliance and decision-making. Staff Clicks provides disciplined accounting support associates who assist your controllers, CPAs, or internal accountants by handling high-volume transaction entries, organizing receipts, and assisting with reconciliations. (Note: Staff Clicks provides process and operational support; we do not provide licensed public audit or certified tax opinion services).",
    benefits: [
      { title: "Audit-Ready Books", desc: "Receipts and invoices systematically matched and archived for tax season." },
      { title: "Better Cash Flow Visibility", desc: "Up-to-date AR tracking ensures unpaid customer balances are flagged promptly." },
      { title: "Reduced Backlog", desc: "Never let monthly bank statements accumulate into stressful year-end projects." },
      { title: "Secure Processing", desc: "Restricted data access and strict adherence to internal financial controls." }
    ],
    workflow: [
      "Review of chart of accounts & internal financial guidelines",
      "Software permission configuration with read/input scopes",
      "Weekly transaction categorization and ledger synchronization",
      "Reconciliation exception reports shared with your finance lead"
    ]
  },
  {
    id: "ecommerce-support",
    slug: "ecommerce-support",
    title: "E-Commerce Support",
    shortTitle: "E-Commerce",
    badge: "Store Operations",
    tagline: "Complete catalog updates, inventory tracking, order management, and store support.",
    shortDescription: "Keep your Shopify, Amazon, WooCommerce, or marketplace storefronts updated, products cataloged, orders tracked, and customer questions answered.",
    iconName: "ShoppingBag",
    keyAreas: [
      "Product listing creation, SKU assignment, and catalog enrichment",
      "High-volume data updates: pricing, variant details, and descriptions",
      "Order processing, fulfillment status tracking, and dispatch updates",
      "Inventory level monitoring and supplier reorder alerts",
      "E-commerce customer service: returns, exchanges, and shipment queries",
      "Competitor price checking and marketplace category research"
    ],
    overview: "Running an online retail or marketplace store requires continuous catalog maintenance, rapid order fulfillment, and swift buyer communication. Staff Clicks assigns dedicated e-commerce specialists who handle catalog management, update product listings, and support customer order inquiries across your sales channels.",
    benefits: [
      { title: "Pristine Catalog Quality", desc: "Accurate product specs, tags, and images enhance buyer conversion rates." },
      { title: "Prompt Order Fulfillment", desc: "Orders logged and tracked systematically to prevent shipping delays." },
      { title: "Multi-Platform Coverage", desc: "Experience across Shopify, Amazon Seller Central, eBay, and custom stores." },
      { title: "Peak Season Readiness", desc: "Easily ramp up staffing for Black Friday, Cyber Week, and holiday surges." }
    ],
    workflow: [
      "Platform integration & catalog taxonomy review",
      "Product data guidelines & listing template setup",
      "Day-to-day order processing & catalog updates",
      "Discrepancy reporting and proactive inventory warnings"
    ]
  },
  {
    id: "insurance-support",
    slug: "insurance-support",
    title: "Insurance Support",
    shortTitle: "Insurance BPO",
    badge: "Policy & Back-Office Care",
    tagline: "Disciplined policy documentation, data processing, and back-office operational assistance.",
    shortDescription: "Assist insurance brokers, agencies, and claims departments with document verification, policy data entry, renewals tracking, and CRM upkeep.",
    iconName: "ShieldCheck",
    keyAreas: [
      "Policy data entry and comparative quote spreadsheet prep",
      "Certificate of Insurance (COI) tracking and verification assistance",
      "Policy renewal notification scheduling and follow-up logging",
      "Claims documentation collation and preliminary file organization",
      "Agency Management System (AMS) record hygiene and audit trails",
      "Market research for coverage categories and carrier guidelines"
    ],
    overview: "Insurance agencies face heavy documentation, endorsement verifications, and compliance tracking. Staff Clicks provides skilled back-office insurance support personnel who manage operational workflows, update agency management systems, and organize policy files so licensed brokers and agents can focus on underwriting and client advisory. (Note: Staff Clicks provides non-licensed operational and administrative support).",
    benefits: [
      { title: "Brokers Focus on Sales", desc: "Licensed agents spend time consulting clients rather than typing endorsement forms." },
      { title: "Higher Accuracy", desc: "Standardized checklists for policy details, named insureds, and coverage limits." },
      { title: "Proactive Renewal Cycles", desc: "Renewal logs ensure client policies never lapse unintentionally." },
      { title: "Scalable Agency Capacity", desc: "Expand agency book of business without proportional office overhead." }
    ],
    workflow: [
      "Agency workflow review and AMS tool orientation",
      "Standardized checklist deployment for policy processing",
      "Daily task processing with multi-point verification",
      "Audit logs and exception escalations directly to assigned brokers"
    ]
  }
];
