# Design System — CityAlert

> Guide complet du système de design **Urban Sentinel** pour la plateforme CityAlert.

---

## 1. Philosophie

Le design de CityAlert vise une esthétique premium, futuriste et immersive. L'interface doit être sombre, épurée, et donner l'impression d'un centre de contrôle urbain moderne.

---

## 2. Palette de Couleurs (Mode Sombre)

Le système repose sur une base "Deep Navy" avec des accents sémantiques forts.

### Surfaces

| Token           | Valeur    | Usage                              |
| --------------- | --------- | ---------------------------------- |
| Surface         | `#051424` | Fond principal de l'interface      |
| Surface Bright  | `#2c3a4c` | Cartes et éléments surélevés       |
| Primary         | `#3b82f6` | Bleu vibrant, actions principales  |

### Couleurs Sémantiques

| Token     | Valeur    | Usage                       |
| --------- | --------- | --------------------------- |
| Critical  | `#ef4444` | Rouge urgence / Danger      |
| Attention | `#f59e0b` | Orange alerte / Trafic      |
| Power     | `#eab308` | Jaune / Coupure électrique  |
| Info      | `#3b82f6` | Bleu / Services utiles      |
| Success   | `#10b981` | Vert validation / Résolu    |

### Catégories d'alertes — Correspondance visuelle

| Catégorie        | Couleur marqueur | Couleur badge                       |
| ---------------- | ---------------- | ----------------------------------- |
| Danger / Risque  | 🔴 Rouge         | `border-red-400/35 bg-red-500/15`   |
| Électricité      | 🟡 Jaune         | `border-yellow-300/35 bg-yellow-400/15` |
| Trafic / Blocage | 🟠 Orange        | `border-orange-300/35 bg-orange-400/15` |
| Service utile    | 🔵 Bleu          | `border-blue-300/35 bg-blue-500/15` |

---

## 3. Typographie

| Élément    | Police | Poids     | Usage                          |
| ---------- | ------ | --------- | ------------------------------ |
| Headlines  | Inter  | Semibold  | Titres de sections             |
| Body       | Inter  | Regular   | Texte courant                  |
| Labels     | Inter  | Medium    | Boutons, métadonnées, badges   |
| Tracking   | —      | `[-0.03em]` | Headlines pour un rendu serré |

---

## 4. Espacements & Arrondis

- **Arrondis principaux :** `rounded-2xl` (16px) pour conteneurs et cartes.
- **Arrondis boutons :** `rounded-xl` (12px) pour boutons secondaires.
- **Arrondis badges :** `rounded-full` pour les tags et badges.
- **Spacing :** Utiliser l'échelle Tailwind standard (gap-2, gap-3, gap-4, p-3, p-4, p-5).

---

## 5. Effets & Composants

### Glassmorphism

Utilisation intensive de `backdrop-blur-xl` avec une opacité de surface à 80% pour les barres de navigation et panneaux flottants. Classe utilitaire : `glass-panel`.

### Bordures

Trait très fin et subtil : `border border-white/10` pour séparer les sections sans alourdir le design.

### Marqueurs Carte

- Classe de base : `city-marker`
- Variations par catégorie : `city-marker-danger`, `city-marker-power`, `city-marker-traffic`, `city-marker-service`
- État sélectionné : `city-marker-selected` (taille augmentée, halo lumineux)

### Navigation Mobile

Barre inférieure fixée avec des icônes de 24px et des labels compacts.

---

## 6. Animations

Les animations doivent être fluides, utiles, discrètes et élégantes.

- **Transitions :** `transition` sur tous les éléments interactifs.
- **Hover :** Changements subtils d'opacité et de fond.
- **Fly-to carte :** Animation douce de 0.8s pour centrer sur un incident.
- **Marqueur temporaire :** Pulsation douce (`animate-pulse`) pour indiquer un point de signalement en attente.

---

## 7. Responsive

L'approche est **mobile-first**.

- **Mobile :** Navigation barre inférieure, carte plein écran, feed en scroll vertical.
- **Tablette / Desktop :** Layout en grille `md:grid-cols-[minmax(0,1fr)_360px]`, sidebar sur desktop, panneau de détails flottant.
