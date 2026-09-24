export interface Benefit {
  title: string;
  desc: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  tagline: string;
  shortDescription: string;
  iconName: string;
  keyAreas: string[];
  overview: string;
  benefits: Benefit[];
  workflow: string[];
}

export interface Industry {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
  description: string;
  keyChallenges: string[];
  solutions: string[];
}

export interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export interface MarketHub {
  name: string;
  hub: string;
  note: string;
}

export interface CompanyStat {
  label: string;
  value: string;
  detail: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  operatingHours: string;
  markets: MarketHub[];
  stats: CompanyStat[];
}

export interface ContactFormData {
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  companyName: string;
  country: string;
  serviceInterestedIn: string;
  message: string;
}

export interface CareerFormData {
  fullName: string;
  email: string;
  phone: string;
  roleInterest: string;
  experienceYears: string;
  linkedIn: string;
  notes: string;
}
