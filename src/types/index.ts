export type Language = 'ko' | 'vi' | 'en';

export interface FaProductItem {
  id: string;
  category: 'servo' | 'inverter' | 'plc' | 'hmi' | 'sensor' | 'safety' | string;
  categoryLabel: Record<Language, string>;
  modelName: string;
  brand: string;
  tagline: Record<Language, string>;
  specs: {
    powerCapacity?: string;      // e.g. 0.1kW ~ 55kW
    inputVoltage?: string;       // e.g. 3-Phase 200~240V / 380~480V
    controlMode?: string;        // e.g. SSCNET III/H, CC-Link IE TSN, EtherCAT
    encoderResolution?: string;  // e.g. 26-bit (67,108,864 p/rev)
    overloadCapacity?: string;   // e.g. 150% 60s, 200% 3s
    protectionRating?: string;   // e.g. IP67 / IP20
  };
  features: Record<Language, string[]>;
  image: string;
  inStockVietnam: boolean;
  leadTime: Record<Language, string>;
  isHot?: boolean;
}

export interface PartnerBrandItem {
  id: string;
  name: string;
  role: Record<Language, string>;
  tier: string;
  country: string;
  specialty: string;
}

export interface PartnerBrand {
  id: string;
  name: string;
  country: string;
  role: Record<Language, string>;
  logoText: string;
  badge: string;
  category: string;
}

export interface FaProduct {
  id: string;
  category: string;
  categoryName: Record<Language, string>;
  modelName: string;
  brand: string;
  tagline: Record<Language, string>;
  specs: Record<string, string>;
  highlights: Record<Language, string[]>;
  image: string;
  inStockVietnam: boolean;
  leadTime: Record<Language, string>;
  badge?: string;
}

export interface WireframeComponentSpec {
  name: string;
  type: string;
  purpose: string;
  spec: string;
  dataFields: string[];
}

export interface WireframeSectionSpec {
  id: string;
  name: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  wireframeLayout: {
    containerType: string;
    columns: string;
    hierarchy: string[];
    desktopHeight?: string;
    mobileBehavior: string;
  };
  components: WireframeComponentSpec[];
  b2bRationale: {
    koreaBenchmark: string;
    vietnamOptimization: string;
    conversionBenefit?: string;
  };
  dataPayloadExample?: any;
}

export interface WireframeSchemaRoot {
  project: string;
  version: string;
  targetMarket: string;
  architectureType: string;
  techStackRecommendation: string[];
  sections: {
    hero: WireframeSectionSpec;
    brands: WireframeSectionSpec;
    products: WireframeSectionSpec;
    features: WireframeSectionSpec;
    contact: WireframeSectionSpec;
    [key: string]: WireframeSectionSpec;
  };
}

export interface IaComparisonPoint {
  dimension: string;
  koreaSite: {
    state: string;
    limitation: string;
  };
  vietnamSinglePage: {
    strategy: string;
    b2bBenefit: string;
  };
}
