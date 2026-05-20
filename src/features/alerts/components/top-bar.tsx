import { Bell, Search, Shield, UserCircle, Wifi } from "lucide-react";

import { Button } from "@/components/ui/button";

export function TopBar({ onOpenReport }: { onOpenReport: () => void }) {
  return (
    <header className="z-20 flex h-18 items-center gap-3 border-b border-white/10 bg-[#051424]/90 px-4 backdrop-blur-xl md:px-5 xl:px-6">
      <div className="flex min-w-0 items-center gap-3 xl:hidden">
        <span className="flex size-10 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-500/15 text-blue-100">
          <Shield aria-hidden="true" className="size-5" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-lg font-semibold tracking-[-0.01em] text-blue-100">
            CityAlert Goma
          </p>
          <p className="hidden text-xs text-slate-400 sm:block">Ville connectee</p>
        </div>
      </div>

      <div className="hidden flex-1 justify-center md:flex">
        <label className="flex h-11 w-full max-w-xl items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 text-slate-300">
          <Search aria-hidden="true" className="size-4 text-slate-400" />
          <input
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
            placeholder="Rechercher une zone, coordonnees..."
            type="search"
          />
          <span className="text-xs font-medium text-slate-400">Goma</span>
        </label>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <div className="hidden items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-100 lg:flex">
          <Wifi aria-hidden="true" className="size-4" />
          Live sync
        </div>
        <Button
          aria-label="Ouvrir les notifications"
          className="border-white/10 bg-white/6 text-slate-200 hover:bg-white/10"
          size="icon-lg"
          variant="outline"
        >
          <Bell aria-hidden="true" className="size-5" />
        </Button>
        <Button
          aria-label="Ouvrir le profil"
          className="hidden border-white/10 bg-white/6 text-slate-200 hover:bg-white/10 sm:inline-flex"
          size="icon-lg"
          variant="outline"
        >
          <UserCircle aria-hidden="true" className="size-5" />
        </Button>
        <Button
          className="hidden bg-blue-500 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400 md:inline-flex"
          onClick={onOpenReport}
          size="lg"
        >
          Signaler
        </Button>
      </div>
    </header>
  );
}
