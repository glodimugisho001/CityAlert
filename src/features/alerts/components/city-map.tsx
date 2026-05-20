"use client";

import { useEffect, useMemo } from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

import { GOMA_CENTER, categoryMeta } from "../data";
import type { CityAlertIncident } from "../types";

type CityMapProps = {
  incidents: CityAlertIncident[];
  selectedIncident: CityAlertIncident;
  onSelectIncident: (incidentId: CityAlertIncident["id"]) => void;
};

function createMarkerIcon(incident: CityAlertIncident, isSelected: boolean) {
  const markerClass = categoryMeta[incident.category].markerClass;
  const selectedClass = isSelected ? "city-marker-selected" : "";

  return L.divIcon({
    className: "city-marker-shell",
    html: `<span class="city-marker ${markerClass} ${selectedClass}"></span>`,
    iconAnchor: isSelected ? [15, 15] : [11, 11],
    iconSize: isSelected ? [30, 30] : [22, 22],
  });
}

function MapSelectionController({
  selectedIncident,
}: {
  selectedIncident: CityAlertIncident;
}) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(selectedIncident.coordinates, 14, {
      duration: 0.8,
      easeLinearity: 0.25,
    });
  }, [map, selectedIncident]);

  return null;
}

export function CityMap({
  incidents,
  selectedIncident,
  onSelectIncident,
}: CityMapProps) {
  const markerIcons = useMemo(
    () =>
      incidents.reduce<Record<string, L.DivIcon>>((iconsById, incident) => {
        iconsById[incident.id] = createMarkerIcon(
          incident,
          incident.id === selectedIncident.id,
        );
        return iconsById;
      }, {}),
    [incidents, selectedIncident.id],
  );

  return (
    <MapContainer
      center={GOMA_CENTER}
      className="z-0"
      maxZoom={18}
      minZoom={11}
      scrollWheelZoom
      zoom={13}
      zoomControl
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <MapSelectionController selectedIncident={selectedIncident} />
      {incidents.map((incident) => (
        <Marker
          eventHandlers={{
            click: () => onSelectIncident(incident.id),
          }}
          icon={markerIcons[incident.id]}
          key={incident.id}
          position={incident.coordinates}
          title={incident.title}
        />
      ))}
    </MapContainer>
  );
}
