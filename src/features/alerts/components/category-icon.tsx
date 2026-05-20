import {
  AlertTriangle,
  Car,
  Cross,
  ShieldAlert,
  Zap,
  type LucideIcon,
} from "lucide-react";

import type { AlertCategory } from "../types";

const icons: Record<AlertCategory, LucideIcon> = {
  danger: ShieldAlert,
  power: Zap,
  traffic: Car,
  service: Cross,
};

export function CategoryIcon({
  category,
  className,
}: {
  category: AlertCategory;
  className?: string;
}) {
  const Icon = icons[category] ?? AlertTriangle;

  return <Icon aria-hidden="true" className={className} />;
}
