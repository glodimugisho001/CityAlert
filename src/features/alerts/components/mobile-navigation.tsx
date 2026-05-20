import { Bell, Map, PlusCircle, UserCircle } from "lucide-react";

const mobileItems = [
  { label: "Carte", icon: Map, isActive: true },
  { label: "Alertes", icon: Bell, isActive: false },
  { label: "Signaler", icon: PlusCircle, isActive: false },
  { label: "Profil", icon: UserCircle, isActive: false },
];

export function MobileNavigation({ onOpenReport }: { onOpenReport: () => void }) {
  return (
    <nav
      aria-label="Navigation mobile"
      className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 rounded-2xl border border-white/10 bg-[#0b1f34]/94 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden"
    >
      {mobileItems.map((item) => {
        const Icon = item.icon;
        const isReportItem = item.label === "Signaler";

        return (
          <button
            className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-xs font-semibold transition ${
              item.isActive
                ? "bg-blue-500 text-white"
                : "text-slate-300 hover:bg-white/[0.07] hover:text-white"
            }`}
            key={item.label}
            onClick={isReportItem ? onOpenReport : undefined}
            type="button"
          >
            <Icon aria-hidden="true" className="size-5" />
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
