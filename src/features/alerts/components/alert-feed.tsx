import { Filter } from "lucide-react";

import { categoryMeta } from "../data";
import type { CityAlertIncident } from "../types";
import { CategoryIcon } from "./category-icon";

type AlertFeedProps = {
  incidents: CityAlertIncident[];
  selectedIncidentId: string | null;
  onSelectIncident: (incidentId: CityAlertIncident["id"]) => void;
};

export function AlertFeed({
  incidents,
  selectedIncidentId,
  onSelectIncident,
}: AlertFeedProps) {
  return (
    <section className="glass-panel flex min-h-0 flex-col rounded-2xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-blue-200 shadow-[0_0_16px_rgba(147,197,253,0.95)]" />
            <h2 className="text-lg font-semibold tracking-[-0.01em] text-white">
              Live Feed
            </h2>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            {incidents.length} alertes actives autour de Goma
          </p>
        </div>
        <button
          aria-label="Filtrer les alertes"
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/9"
          type="button"
        >
          <Filter aria-hidden="true" className="size-4" />
        </button>
      </div>

      <div className="min-h-0 space-y-3 overflow-y-auto p-4">
        {incidents.map((incident) => {
          const meta = categoryMeta[incident.category];
          const isSelected = incident.id === selectedIncidentId;

          return (
            <button
              className={`w-full rounded-2xl border p-4 text-left transition ${
                isSelected
                  ? "border-blue-300/40 bg-blue-500/12 shadow-lg shadow-blue-950/30"
                  : "border-white/10 bg-[#0a1b2d] hover:border-white/20 hover:bg-[#10243a]"
              }`}
              key={incident.id}
              onClick={() => onSelectIncident(incident.id)}
              type="button"
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex size-11 shrink-0 items-center justify-center rounded-2xl border ${meta.badgeClass}`}
                >
                  <CategoryIcon category={incident.category} className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-start justify-between gap-3">
                    <span className="font-semibold text-slate-100">
                      {incident.title}
                    </span>
                    <span className="shrink-0 text-xs font-semibold text-slate-300">
                      {incident.timeAgo}
                    </span>
                  </span>
                  <span className="mt-1 block text-sm font-medium text-slate-300">
                    {incident.location}
                  </span>
                  <span className="mt-3 flex flex-wrap gap-2">
                    {incident.tags.map((tag) => (
                      <span
                        className="rounded-lg border border-white/10 bg-white/8 px-2 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-slate-300"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
