/* ===== Shared TypeScript types ===== */

export type NavItem = {
  label: string;
  href: string;
};

export type Product = {
  name: string;
  description: string;
  image: string;
  specs: string[];
  applications: string[];
};

export type Stat = {
  value: string;
  label: string;
};

export type ContactInfo = {
  icon: string;
  label: string;
  value: string;
  href?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Partner = {
  src: string;
  alt: string;
};

export type Testimonial = {
  name: string;
  role: string;
  content: string;
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
};

export type PricingTier = {
  name: string;
  description: string;
  features: string[];
};
