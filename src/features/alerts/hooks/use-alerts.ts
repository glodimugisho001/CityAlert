"use client";

import { useMemo, useState } from "react";

import { cityIncidents } from "../data";
import type { AlertCategory, CityAlertIncident, ReportDraft } from "../types";

const initialDraft: ReportDraft = {
  category: null,
  description: "",
  locationMode: "gps",
};

export function useAlerts() {
  const [selectedIncidentId, setSelectedIncidentId] = useState<string | null>(null);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [reportStep, setReportStep] = useState(1);
  const [reportDraft, setReportDraft] = useState<ReportDraft>(initialDraft);

  const selectedIncident = useMemo(
    () =>
      selectedIncidentId
        ? cityIncidents.find((incident) => incident.id === selectedIncidentId) ?? null
        : null,
    [selectedIncidentId],
  );

  function selectIncident(incidentId: CityAlertIncident["id"]) {
    setSelectedIncidentId(incidentId);
  }

  function clearSelectedIncident() {
    setSelectedIncidentId(null);
  }

  function openReport() {
    setIsReportOpen(true);
  }

  function closeReport() {
    setIsReportOpen(false);
    setReportStep(1);
    setReportDraft(initialDraft);
  }

  function chooseCategory(category: AlertCategory) {
    setReportDraft((currentDraft) => ({ ...currentDraft, category }));
    setReportStep(2);
  }

  function updateDescription(description: string) {
    setReportDraft((currentDraft) => ({ ...currentDraft, description }));
  }

  function chooseLocationMode(locationMode: ReportDraft["locationMode"]) {
    setReportDraft((currentDraft) => ({ ...currentDraft, locationMode }));
  }

  function goToNextStep() {
    setReportStep((currentStep) => Math.min(currentStep + 1, 4));
  }

  function goToPreviousStep() {
    setReportStep((currentStep) => Math.max(currentStep - 1, 1));
  }

  return {
    incidents: cityIncidents,
    selectedIncident,
    selectedIncidentId,
    isReportOpen,
    reportDraft,
    reportStep,
    chooseCategory,
    chooseLocationMode,
    closeReport,
    goToNextStep,
    goToPreviousStep,
    openReport,
    selectIncident,
    clearSelectedIncident,
    updateDescription,
  };
}
