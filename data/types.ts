export type ImageAsset = {
  src: string;
  alt: string;
  className?: string;
};

export type IconName =
  | "RefreshCw"
  | "ScanLine"
  | "BarChart3"
  | "Calculator"
  | "CalendarCheck"
  | "Users"
  | "CreditCard"
  | "Phone"
  | "Wrench"
  | "CheckCircle2"
  | "Palette"
  | "Smartphone"
  | "Laptop"
  | "Laptop2"
  | "Droplets"
  | "Clock"
  | "Zap"
  | "Layers"
  | "Settings"
  | "FolderSearch"
  | "MapPlus"
  | "ChartPie"
  | "MapPin"
  | "FileCheck"
  | "TrendingDown"
  | "CircleAlert"
  | "Heart"
  | "CarFront";

export type FeatureItem = { icon: IconName; label: string };
export type FeatureItemWithText = { icon: IconName; text: string };
export type CtaBlock = { items: unknown[]; slotId?: string; slot?: unknown };
