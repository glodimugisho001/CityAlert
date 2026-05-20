export type AlertCategory = "danger" | "power" | "traffic" | "service";

export type AlertSeverity = "critical" | "attention" | "info" | "planned";

export type LocationMode = "gps" | "map";

export type Coordinates = [number, number];

export type CityAlertIncident = {
  id: string;
  title: string;
  category: AlertCategory;
  severity: AlertSeverity;
  location: string;
  neighborhood: string;
  description: string;
  timeAgo: string;
  reportedAt: string;
  status: "active" | "monitoring" | "resolved";
  coordinates: Coordinates;
  confidence: number;
  source: string;
  tags: string[];
};

export type CategoryMeta = {
  label: string;
  shortLabel: string;
  markerClass: string;
  textClass: string;
  badgeClass: string;
};

export type ReportDraft = {
  category: AlertCategory | null;
  description: string;
  locationMode: LocationMode;
};
