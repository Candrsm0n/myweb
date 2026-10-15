export interface WifiPackage {
  id: string;
  name: string;
  speedMbps: number;
  monthlyPrice: number;
  deviceLimit: number;
  deviceLabel: string;
  quota: string;
  fup: string;
  description: string;
  featured: boolean;
  badge: string | null;
}

export interface DeviceRate {
  id: "phones" | "computers" | "tvs";
  label: string;
  shortLabel: string;
  icon: "smartphone" | "laptop" | "tv";
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  label: string;
  icon: "sparkles" | "router" | "calendar" | "receipt";
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface OrderDetails {
  name: string;
  phone: string;
  packageId: string;
  address: string;
  latitude: string;
  longitude: string;
  terms: boolean;
}