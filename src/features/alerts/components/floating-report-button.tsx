import { Plus } from "lucide-react";

export function FloatingReportButton({ onOpenReport }: { onOpenReport: () => void }) {
  return (
    <button
      aria-label="Signaler un incident"
      className="absolute bottom-12 right-5 z-20 flex h-14 items-center gap-3 rounded-2xl bg-blue-500 px-3 text-sm font-semibold text-white shadow-2xl shadow-blue-950/50 transition hover:bg-blue-400 sm:px-4 md:bottom-6 md:right-6"
      onClick={onOpenReport}
      type="button"
    >
      <span className="flex size-8 items-center justify-center rounded-xl bg-white/16">
        <Plus aria-hidden="true" className="size-5" />
      </span>
      <span className="hidden sm:inline">Signaler</span>
    </button>
  );
}
