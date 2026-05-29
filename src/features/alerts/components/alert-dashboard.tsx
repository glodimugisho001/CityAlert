"use client";

import dynamic from "next/dynamic";
import { Activity, LocateFixed } from "lucide-react";

import { AlertDetailsPanel } from "./alert-details-panel";
import { AlertFeed } from "./alert-feed";
import { DesktopSidebar } from "./desktop-sidebar";
import { FloatingReportButton } from "./floating-report-button";
import { MobileNavigation } from "./mobile-navigation";
import { ReportIncidentSheet } from "./report-incident-sheet";
import { TopBar } from "./top-bar";
import { useAlerts } from "../hooks/use-alerts";

const CityMap = dynamic(
  () => import("./city-map").then((module) => module.CityMap),
  {
    loading: () => <MapSkeleton />,
    ssr: false,
  },
);

export function AlertDashboard() {
  const alerts = useAlerts();

  return (
    <div className="flex min-h-dvh overflow-hidden bg-[#051424] text-slate-100">
      <DesktopSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar onOpenReport={alerts.openReport} />
        <main className="grid flex-1 gap-4 overflow-y-auto px-3 pb-24 pt-3 md:grid-cols-[minmax(0,1fr)_360px] md:overflow-hidden md:px-4 md:pb-4 xl:px-5">
          <section className="relative min-h-[54dvh] overflow-hidden rounded-3xl border border-white/10 bg-[#061522] shadow-2xl shadow-black/30 md:min-h-0">
            <CityMap
              incidents={alerts.incidents}
              onSelectIncident={alerts.selectIncident}
              selectedIncident={alerts.selectedIncident}
            />
            <MapStatus />
            {alerts.selectedIncident && (
              <div className="desktop-detail-panel fixed left-6 top-44 z-1000 max-h-[calc(100dvh-13rem)] w-[min(360px,calc(100%-7rem))] overflow-y-auto xl:left-80">
                <AlertDetailsPanel
                  incident={alerts.selectedIncident}
                  onClose={alerts.clearSelectedIncident}
                  onOpenReport={alerts.openReport}
                />
              </div>
            )}
            <FloatingReportButton onOpenReport={alerts.openReport} />
          </section>

          <aside className="grid min-h-0 gap-4 md:grid-rows-1 xl:grid-rows-[minmax(0,1fr)_auto]">
            <AlertFeed
              incidents={alerts.incidents}
              onSelectIncident={alerts.selectIncident}
              selectedIncidentId={alerts.selectedIncidentId}
            />
            {alerts.selectedIncident && (
              <div className="md:hidden">
                <AlertDetailsPanel
                  incident={alerts.selectedIncident}
                  onClose={alerts.clearSelectedIncident}
                  onOpenReport={alerts.openReport}
                />
              </div>
            )}
          </aside>
        </main>
        <MobileNavigation onOpenReport={alerts.openReport} />
      </div>
      <ReportIncidentSheet
        draft={alerts.reportDraft}
        isOpen={alerts.isReportOpen}
        onChooseCategory={alerts.chooseCategory}
        onChooseLocationMode={alerts.chooseLocationMode}
        onClose={alerts.closeReport}
        onNext={alerts.goToNextStep}
        onPrevious={alerts.goToPreviousStep}
        onUpdateDescription={alerts.updateDescription}
        step={alerts.reportStep}
      />
    </div>
  );
}

function MapStatus() {
  return (
    <div className="pointer-events-none absolute right-4 top-4 z-20 flex flex-wrap justify-end gap-2">
      <div className="glass-panel flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-semibold text-emerald-100">
        <Activity aria-hidden="true" className="size-4" />
        Temps réel actif
      </div>
      <div className="glass-panel hidden items-center gap-2 rounded-2xl px-3 py-2 text-xs font-semibold text-slate-200 sm:flex">
        <LocateFixed aria-hidden="true" className="size-4 text-blue-200" />
        Centre: Goma, RDC
      </div>
    </div>
  );
}

function MapSkeleton() {
  return (
    <div className="flex h-full min-h-[54dvh] items-center justify-center bg-[#061522] md:min-h-0">
      <div className="text-center">
        <div className="mx-auto size-12 animate-pulse rounded-2xl bg-blue-500/20" />
        <p className="mt-3 text-sm font-medium text-slate-400">
          Chargement de la carte de Goma...
        </p>
      </div>
    </div>
  );
}
