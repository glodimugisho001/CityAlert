# Architecture Technique

# CityAlert

> Ce document décrit les choix techniques, la stack et l'architecture logicielle du projet.

---

## Stack Technique

| Couche     | Technologie                      |
| ---------- | -------------------------------- |
| Frontend   | Next.js + React + TypeScript     |
| Styling    | Tailwind CSS + shadcn/ui         |
| Backend    | Convex (non configuré pour MVP)  |
| Cartographie | Leaflet + React Leaflet        |

---

## Architecture Frontend

```
src/
├── app/                    # Pages et layout Next.js
├── components/ui/          # Composants shadcn/ui réutilisables
├── features/
│   └── alerts/
│       ├── components/     # Composants spécifiques aux alertes
│       ├── hooks/          # Hooks personnalisés (useAlerts)
│       ├── data.ts         # Données statiques MVP
│       └── types.ts        # Types TypeScript
├── hooks/                  # Hooks globaux
├── lib/                    # Utilitaires (cn, etc.)
├── services/               # Couche d'accès aux données (futur)
├── stores/                 # State management (futur)
├── types/                  # Types globaux
├── utils/                  # Fonctions utilitaires
├── constants/              # Constantes globales
└── providers/              # Context providers
```

---

## Gestion des Données (MVP)

Pour le MVP, les données sont **statiques** (fichier `data.ts`). Les incidents sont définis en dur et la liste est gérée en mémoire via le hook `useAlerts`.

### Futur (Convex)

- Les mutations (créer, confirmer, invalider un incident) passeront par les Convex functions.
- La synchronisation temps réel sera gérée nativement par Convex subscriptions.
- Le schéma de base de données sera défini dans Convex schema.

---

## Architecture des Composants

### Flux de données

```
useAlerts (hook central)
├── incidents[]           → CityMap (marqueurs)
├── incidents[]           → AlertFeed (liste)
├── selectedIncident      → AlertDetailsPanel (détails)
├── reportDraft           → ReportIncidentSheet (formulaire)
└── actions (open, close, select, update...)
```

### Composants clés

| Composant              | Responsabilité                         |
| ---------------------- | -------------------------------------- |
| `AlertDashboard`       | Layout principal, orchestration        |
| `CityMap`              | Rendu carte Leaflet + marqueurs        |
| `ReportIncidentSheet`  | Formulaire multi-étapes de signalement |
| `AlertFeed`            | Liste chronologique scrollable         |
| `AlertDetailsPanel`    | Détails d'un incident sélectionné      |

---

## Contraintes Techniques

- **SSR désactivé** pour la carte Leaflet (import dynamique avec `ssr: false`).
- **Mobile-first** : tout le CSS est pensé mobile d'abord, avec breakpoints `md:` et `xl:`.
- **Pas de backend actif** pour le MVP : toute la logique est côté client.
