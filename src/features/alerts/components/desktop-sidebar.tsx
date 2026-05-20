import {
  Activity,
  Download,
  Layers,
  Map,
  Settings,
  Shield,
  Siren,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Carte", icon: Map, isActive: true },
  { label: "Alertes", icon: Siren, isActive: false },
  { label: "Analytics", icon: Activity, isActive: false },
  { label: "Couches", icon: Layers, isActive: false },
  { label: "Parametres", icon: Settings, isActive: false },
];

export function DesktopSidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-[#07182a]/88 p-5 backdrop-blur-xl xl:flex xl:flex-col">
      <div className="flex items-center gap-3">
        <span className="flex size-12 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-500/15 text-blue-100">
          <Shield aria-hidden="true" className="size-6" />
        </span>
        <div>
          <p className="text-xl font-semibold tracking-[-0.02em] text-blue-100">
            CityAlert
          </p>
          <p className="text-xs font-medium text-slate-400">Urban monitor Goma</p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/4 p-4">
        <p className="text-sm font-semibold text-slate-100">Live Sync: Active</p>
        <p className="mt-1 text-xs leading-5 text-slate-400">
          Donnees citoyennes statiques, pretes pour Convex.
        </p>
      </div>

      <nav className="mt-8 space-y-2" aria-label="Navigation principale">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              aria-current={item.isActive ? "page" : undefined}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                item.isActive
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-300 hover:bg-white/6 hover:text-white"
              }`}
              key={item.label}
              type="button"
            >
              <Icon aria-hidden="true" className="size-5" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto space-y-4">
        <div className="rounded-2xl border border-white/10 bg-[#0b1f34] p-4">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
            Couverture
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">6 zones</p>
          <p className="text-xs text-slate-400">Centre-ville, Himbi, Katindo...</p>
        </div>
        <Button
          className="w-full border-white/10 bg-white/5 text-slate-100 hover:bg-white/9"
          variant="outline"
        >
          <Download aria-hidden="true" className="size-4" />
          Export rapport
        </Button>
      </div>
    </aside>
  );
}
