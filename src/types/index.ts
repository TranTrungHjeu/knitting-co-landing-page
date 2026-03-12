/* ===== Shared TypeScript types ===== */

export type NavItem = {
  label: string;
  href: string;
};

export type ProductCategory = "basic" | "special" | "pattern" | "eco";

export type ProductSection = {
  title: string;
  content: string;
};

export type Product = {
  slug: string;
  name: string;
  description: string;
  image: string;
  gallery: string[];
  specs: string[];
  applications: string[];
  category: ProductCategory;
  sections: ProductSection[];
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

export type Service = {
  title: string;
  description: string;
  image: string;
  highlights: string[];
};

export type GalleryImage = {
  src: string;
  alt: string;
  span?: "wide" | "tall";
};
