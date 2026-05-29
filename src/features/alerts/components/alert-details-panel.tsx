"use client";
import { Clock, MapPin, Radio, ShieldCheck, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { categoryMeta } from "../data";
import type { CityAlertIncident } from "../types";
import { CategoryIcon } from "./category-icon";

type AlertDetailsPanelProps = {
  incident: CityAlertIncident;
  onClose: () => void;
  onOpenReport: () => void;
};

export function AlertDetailsPanel({
  incident,
  onClose,
  onOpenReport,
}: AlertDetailsPanelProps) {
  const meta = categoryMeta[incident.category];

  return (
    <aside className="glass-panel rounded-2xl p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0 flex-1">
          <span
            className={`flex size-12 shrink-0 items-center justify-center rounded-2xl border ${meta.badgeClass}`}
          >
            <CategoryIcon category={incident.category} className="size-5" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Alerte sélectionnée
            </p>
            <h2 className="mt-1 text-xl font-semibold tracking-[-0.02em] text-white">
              {incident.title}
            </h2>
          </div>
        </div>
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="size-8 rounded-xl border border-white/10 bg-white/3 text-slate-400 hover:bg-white/8 hover:text-white transition"
          type="button"
          aria-label="Fermer le panel"
        >
          <X className="size-4" />
        </Button>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-300">{incident.description}</p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <Metric icon={MapPin} label="Zone" value={incident.neighborhood} />
        <Metric icon={Clock} label="Signalé" value={incident.timeAgo} />
        <Metric icon={Radio} label="Source" value={incident.source} />
        <Metric
          icon={ShieldCheck}
          label="Confiance"
          value={`${incident.confidence}%`}
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className={`rounded-full border px-3 py-1 text-xs ${meta.badgeClass}`}>
          {meta.label}
        </span>
        <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-slate-300">
          Statut: {incident.status}
        </span>
      </div>

      <Button
        className="mt-5 w-full bg-blue-500 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400"
        onClick={onOpenReport}
        size="lg"
      >
        Ajouter une confirmation
      </Button>
    </aside>
  );
}

function Metric({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/4 p-3">
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Icon aria-hidden="true" className="size-4" />
        {label}
      </div>
      <p className="mt-2 text-sm font-semibold text-slate-100">{value}</p>
    </div>
  );
}
