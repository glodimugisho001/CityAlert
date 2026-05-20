import { Check, LocateFixed, MapPinned, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { categoryMeta } from "../data";
import type { AlertCategory, ReportDraft } from "../types";
import { CategoryIcon } from "./category-icon";

type ReportIncidentSheetProps = {
  draft: ReportDraft;
  isOpen: boolean;
  step: number;
  onChooseCategory: (category: AlertCategory) => void;
  onChooseLocationMode: (mode: ReportDraft["locationMode"]) => void;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onUpdateDescription: (description: string) => void;
};

const categoryOptions = Object.entries(categoryMeta) as Array<
  [AlertCategory, (typeof categoryMeta)[AlertCategory]]
>;

export function ReportIncidentSheet({
  draft,
  isOpen,
  step,
  onChooseCategory,
  onChooseLocationMode,
  onClose,
  onNext,
  onPrevious,
  onUpdateDescription,
}: ReportIncidentSheetProps) {
  if (!isOpen) {
    return null;
  }

  const canContinueFromDescription = draft.description.trim().length >= 8;

  return (
    <div className="fixed inset-0 z-50 flex items-end bg-black/55 p-3 backdrop-blur-sm md:items-center md:justify-center">
      <section className="glass-panel w-full rounded-3xl p-4 md:max-w-xl md:p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
              Signalement
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-white">
              Ajouter une alerte
            </h2>
          </div>
          <button
            aria-label="Fermer le signalement"
            className="rounded-xl border border-white/10 bg-white/[0.06] p-2 text-slate-300 transition hover:bg-white/[0.1]"
            onClick={onClose}
            type="button"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((stepNumber) => (
            <span
              className={`h-1.5 rounded-full ${
                stepNumber <= step ? "bg-blue-400" : "bg-white/10"
              }`}
              key={stepNumber}
            />
          ))}
        </div>

        <div className="mt-5">
          {step === 1 && (
            <div className="grid grid-cols-2 gap-3">
              {categoryOptions.map(([category, meta]) => (
                <button
                  className={`rounded-2xl border p-4 text-left transition hover:bg-white/[0.08] ${meta.badgeClass}`}
                  key={category}
                  onClick={() => onChooseCategory(category)}
                  type="button"
                >
                  <CategoryIcon category={category} className="size-6" />
                  <span className="mt-3 block text-sm font-semibold">
                    {meta.label}
                  </span>
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="text-sm font-semibold text-slate-200">
                Description courte
              </label>
              <textarea
                className="mt-3 min-h-32 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm text-white outline-none placeholder:text-slate-500"
                onChange={(event) => onUpdateDescription(event.target.value)}
                placeholder="Ex: route bloquee vers Ndosho, circulation tres lente..."
                value={draft.description}
              />
              <Button
                className="mt-4 w-full bg-blue-500 text-white hover:bg-blue-400"
                disabled={!canContinueFromDescription}
                onClick={onNext}
                size="lg"
              >
                Continuer
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="grid gap-3">
              <LocationButton
                icon={LocateFixed}
                isActive={draft.locationMode === "gps"}
                label="Utiliser ma position GPS"
                onClick={() => onChooseLocationMode("gps")}
              />
              <LocationButton
                icon={MapPinned}
                isActive={draft.locationMode === "map"}
                label="Choisir sur la carte"
                onClick={() => onChooseLocationMode("map")}
              />
              <Button
                className="mt-2 w-full bg-blue-500 text-white hover:bg-blue-400"
                onClick={onNext}
                size="lg"
              >
                Valider la localisation
              </Button>
            </div>
          )}

          {step === 4 && (
            <div className="rounded-2xl border border-emerald-300/20 bg-emerald-400/10 p-5 text-center">
              <Check className="mx-auto size-10 text-emerald-200" />
              <h3 className="mt-3 text-lg font-semibold text-white">
                Signalement pret
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Le flux est statique pour le moment. Cette interface est prete pour
                brancher Convex ensuite.
              </p>
              <Button className="mt-4 w-full" onClick={onClose} size="lg">
                Terminer
              </Button>
            </div>
          )}
        </div>

        {step > 1 && step < 4 && (
          <button
            className="mt-4 text-sm font-medium text-slate-400 transition hover:text-white"
            onClick={onPrevious}
            type="button"
          >
            Retour
          </button>
        )}
      </section>
    </div>
  );
}

function LocationButton({
  icon: Icon,
  isActive,
  label,
  onClick,
}: {
  icon: typeof LocateFixed;
  isActive: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition ${
        isActive
          ? "border-blue-300/40 bg-blue-500/15 text-blue-100"
          : "border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/[0.08]"
      }`}
      onClick={onClick}
      type="button"
    >
      <Icon aria-hidden="true" className="size-5" />
      <span className="font-semibold">{label}</span>
    </button>
  );
}
