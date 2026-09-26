# Staff Clicks | BPO & Virtual Assistance Platform

[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-blue.svg)](#)

A high-performance, enterprise-grade web application built for **Staff Clicks** — a full-service Virtual Assistance & Business Process Outsourcing (BPO) firm delivering managed cross-border operational support, recruitment, and back-office solutions.

---

## 🌟 Key Features & Capabilities

- **⚡ Modern Responsive Architecture**: Engineered with React 19, Vite, and Tailwind CSS v4 for sub-second load times and fluid multi-device responsiveness.
- **🧭 Dynamic Routing & Deep Pages**: Comprehensive navigation covering 9 dedicated service categories, 10 industry verticals, enterprise comparisons, and career opportunities.
- **🎨 Custom Design System**: Polished visual language utilizing curated corporate palettes (Deep Navy, Slate Teal, Warm Accent Orange) with subtle glassmorphism and micro-animations.
- **🤝 Interactive Engagement Modules**:
  - Consultation booking modal with step-by-step service inquiries
  - Searchable knowledge base & FAQ accordion
  - Freelancer vs. Managed BPO comparison matrix
  - Global cross-border delivery workflow visualization
  - Filterable industry and service catalog
- **♿ Production Ready & Accessible**: Built with semantic HTML5 elements, accessible contrast ratios, and optimized metadata for SEO and discovery.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) with [Vite](https://vitejs.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Modules |
| **Motion & Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Code Quality** | [Oxlint](https://oxc-project.github.io/) + TypeScript Type Checking |

---

## 📂 Project Structure

```text
staff-clicks/
├── public/                # Static assets, icons, and server routing configs (.htaccess)
├── src/
│   ├── assets/            # Optimized images, graphics, and illustrations
│   ├── components/        # Reusable UI components
│   │   ├── BookingCalendar.tsx
│   │   ├── ConsultationModal.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── Footer.tsx
│   │   ├── GlobalMapGraphic.tsx
│   │   ├── IndustryCard.tsx
│   │   ├── Navbar.tsx
│   │   ├── SectionHeader.tsx
│   │   └── ServiceCard.tsx
│   ├── data/              # Structured datasets (services, verticals, FAQs)
│   ├── pages/             # Route-level page components
│   │   ├── About.tsx
│   │   ├── Careers.tsx
│   │   ├── Contact.tsx
│   │   ├── FAQ.tsx
│   │   ├── Home.tsx
│   │   ├── Industries.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   ├── ServiceDetail.tsx
│   │   ├── Services.tsx
│   │   ├── TermsOfService.tsx
│   │   └── WhyStaffClicks.tsx
│   ├── App.tsx            # Main layout and route configuration
│   ├── index.css          # Design tokens and global utility styles
│   └── main.tsx           # Application entry point
├── index.html             # HTML entry template with metadata & fonts
├── package.json           # Project dependencies and script declarations
├── tsconfig.json          # TypeScript compiler configuration
└── vite.config.js         # Vite bundler configuration
```

---

## 🗺️ Application Routes

- `/` — Homepage (Hero, core value proposition, service overview, cross-border delivery workflow, ROI comparison)
- `/about` — Company history, operating model, mission, vision, and SLA commitments
- `/services` — Comprehensive catalog of 9 specialized outsourcing offerings:
  - *Virtual Assistance*
  - *Recruitment & Talent Sourcing*
  - *Customer Support (Omnichannel)*
  - *Data & CRM Management*
  - *Lead Generation & Sales Pipeline*
  - *Administrative Operations*
  - *Accounting & Bookkeeping Support*
  - *E-Commerce Operations*
  - *Insurance Back-Office Support*
- `/industries` — Vertical-specific solutions (FinTech, Healthcare, Real Estate, E-Commerce, Logistics, etc.)
- `/why-staff-clicks` — Dedicated comparative analysis: Direct Freelancers vs. Managed Staff Clicks BPO
- `/careers` — Talent recruitment portal with career pathways and application submission
- `/contact` — Inquiries, consultation scheduling, and quotation requests
- `/faq` — Interactive customer question & answer repository
- `/privacy-policy` & `/terms-of-service` — Compliance, security, and terms

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js (version 18.0.0 or higher)** and `npm` installed on your machine.

- Node.js: [Download Node.js](https://nodejs.org/)
- Verify installation:
  ```bash
  node -v
  npm -v
  ```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Eshbanoliver/sc-website.git
   cd sc-website
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173`.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Action |
|---|---|
| `npm run dev` | Runs the app in development mode with Hot Module Replacement (HMR). |
| `npm run build` | Compiles TypeScript and builds optimized production bundles into `dist/`. |
| `npm run preview` | Locally serves the production build for testing and inspection. |
| `npm run lint` | Runs Oxlint to inspect and enforce clean code standards. |

---

## 🌐 Production Deployment

The build process produces a fully static Single Page Application (SPA) in the `dist` directory:

```bash
npm run build
```

### Static Hosting & SPA Routing
Because this application uses client-side routing (`react-router`), the web server must rewrite non-asset requests to `index.html`.

- **Apache / Shared Hosting (cPanel / Hostinger)**: A preconfigured [public/.htaccess](public/.htaccess) handles automatic rewrites on build output.
- **Vercel / Netlify / Cloudflare Pages**: Automatic single-page fallback rule to `/index.html`.
- **Nginx**:
  ```nginx
  location / {
      try_files $uri $uri/ /index.html;
  }
  ```

---

## 🔒 Confidentiality & Security

All proprietary client data, direct access keys, internal credentials, and contact identifiers are intentionally excluded from public documentation and version control.

---

## 📄 License

Copyright © Staff Clicks. All rights reserved. Proprietary software.
