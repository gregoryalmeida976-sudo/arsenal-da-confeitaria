import { LucideIcon } from "lucide-react";

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BenefitProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}