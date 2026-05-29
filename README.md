# 🌍🚨 CityAlert

> **Plateforme communautaire de signalement d'incidents en temps réel.**

CityAlert est une plateforme Civic-Tech (Urban Safety Platform) ambitieuse, permettant aux citoyens de signaler et consulter des événements préoccupants en temps réel via une carte interactive. 

L'objectif principal est de transformer la ville (initialement **Goma, RDC**) en un réseau vivant d'informations citoyennes pour améliorer la sécurité, la mobilité, et la réactivité communautaire.

---

## ✨ Fonctionnalités Principales

- **📍 Carte Interactive Temps Réel :** Visualisation de tous les incidents actifs sous forme de marqueurs géolocalisés (basé sur Leaflet).
- **🚨 Signalement Rapide (Map-First) :** Création d'alertes directement depuis la carte (Danger, Électricité, Trafic, Incendie, Inondation, etc.).
- **⚡ Synchronisation Instantanée :** Les alertes apparaissent instantanément chez tous les utilisateurs connectés sans rechargement de page.
- **📰 Feed des Alertes :** Liste chronologique des incidents récents avec possibilité de ciblage sur la carte.
- **🧭 Géolocalisation Intelligente :** Centrage automatique de la carte sur la position de l'utilisateur pour faciliter les signalements.
- **📱 Mobile-First :** Interface utilisateur premium, fluide, minimaliste et adaptée aux appareils mobiles et de bureau.

---

## 🚀 Stack Technique

Le projet est conçu avec des standards élevés de performance, d'architecture propre et de maintenabilité.

### Frontend
- **Framework :** [Next.js](https://nextjs.org/) (App Router)
- **Librairie UI :** [React](https://react.dev/)
- **Langage :** [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling :** [Tailwind CSS](https://tailwindcss.com/)
- **Composants :** [shadcn/ui](https://ui.shadcn.com/)
- **Cartographie :** [Leaflet](https://leafletjs.com/) (React-Leaflet)

### Backend & Données
- **Base de données & Temps Réel :** [Convex](https://www.convex.dev/) *(Données statiques utilisées pour le moment)*

---

## 🧱 Architecture du Projet

Le projet suit une architecture modulaire et responsabilités claires :

```bash
src/
├── app/          # Pages et Layouts Next.js (Routing)
├── components/   # Composants UI réutilisables (Petits & Isolés)
├── features/     # Composants complexes et logique métier spécifiques (ex: map, alertes)
├── hooks/        # Hooks React personnalisés (Logique extraite)
├── lib/          # Configurations tierces et librairies
├── services/     # Appels API et interactions de données abstraites
├── stores/       # Gestion de l'état global (Zustand/Convex)
├── types/        # Définitions TypeScript globales
├── utils/        # Fonctions utilitaires pures
├── constants/    # Variables et constantes de configuration
└── providers/    # Context Providers (Theme, Data, Auth)
```

---

## 🏁 Démarrage Rapide

### Prérequis
- [Node.js](https://nodejs.org/en/) (Version recommandée >= 18)
- `npm` ou `pnpm` ou `yarn`

### Installation

1. **Cloner le dépôt :**
```bash
git clone <votre-repo-url>
cd city-alert
```

2. **Installer les dépendances :**
```bash
pnpm install
```

3. **Lancer le serveur de développement :**
```bash
pnpm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

---

## 🧠 Philosophie et Règles de Contribution

CityAlert vise l'excellence. Le code doit respirer la clarté, la maîtrise et l'élégance.
- **Lisibilité et Simplicité :** Le code doit être évident et prévisible. Aucune sur-ingénierie.
- **Fichiers réduits :** Pas plus de 200 lignes par fichier. Extraire la logique et créer des composants si nécessaire.
- **Séparation des responsabilités :** Pas de logique métier dans les composants UI, toujours utiliser des hooks ou des services.
- **Design Premium :** UI moderne, animations discrètes et utiles, interface immersive avec micro-animations.

*Voir le fichier [AGENTS.md](./AGENTS.md) pour les règles complètes d'ingénierie du projet.*

---

**Auteurs:** Glodi Mugisho et Juhudi Judith
**Version:** 1.0 (MVP)
