# AGENT.md — CityAlert AI Engineering Rules 🌍🚨

> Ce document définit les règles, standards et comportements que toute IA ou développeur doit respecter lorsqu’il travaille sur le projet CityAlert.

L’objectif est simple :

Construire une plateforme :

- propre,
- scalable,
- maintenable,
- moderne,
- performante,
- lisible humainement.

Le code doit être pensé comme un produit professionnel de haut niveau.

---

# 🧠 Philosophie du projet

CityAlert n’est PAS un simple CRUD.

C’est une plateforme temps réel ambitieuse orientée :

- expérience utilisateur,
- performance,
- fiabilité,
- architecture propre,
- élégance visuelle,
- évolutivité.

Chaque ligne de code doit être écrite avec intention.

---

# ⚠️ Règle absolue

Le projet doit toujours privilégier :

1. Lisibilité
2. Simplicité
3. Maintenabilité
4. Scalabilité
5. Performance

NE JAMAIS sacrifier la lisibilité pour du “code intelligent”.

Le code doit être :

- évident,
- clair,
- prévisible,
- explicite.

---

# 📁 Taille maximale des fichiers

## IMPORTANT

Chaque fichier doit rester petit et maintenable.

### Limite recommandée

- 200 lignes maximum

### Limite tolérée

- 250 lignes maximum

SI un fichier dépasse cette taille :

- extraire la logique,
- créer des hooks,
- créer des composants,
- créer des utilities,
- séparer les responsabilités.

---

# 🧱 Architecture obligatoire

Le projet doit suivre une architecture modulaire.

## Structure recommandée

```bash
src/
├── app/
├── components/
├── features/
├── hooks/
├── lib/
├── services/
├── stores/
├── types/
├── utils/
├── constants/
└── providers/
```

---

# 🧩 Responsabilités claires

## Chaque fichier = UNE responsabilité

❌ INTERDIT

- composants géants,
- logique business mélangée au UI,
- fonctions utilitaires dans les pages,
- fetch directement partout,
- duplication de logique.

✅ OBLIGATOIRE

- séparation claire,
- composants réutilisables,
- logique isolée,
- architecture propre.

---

# ⚛️ Règles React

## Composants

Les composants doivent être :

- petits,
- composables,
- réutilisables,
- explicites.

---

## Taille des composants

### Recommandé

- 50 à 120 lignes

### Maximum

- 200 lignes

---

## INTERDIT

❌ plusieurs composants énormes dans un seul fichier  
❌ logique complexe directement dans JSX  
❌ conditions imbriquées illisibles  
❌ props drilling excessif  
❌ useEffect inutile  
❌ duplication de composants

---

## OBLIGATOIRE

✅ extraction de composants  
✅ hooks personnalisés  
✅ early returns  
✅ variables explicites  
✅ composants découplés

---

# 🎣 Règles Hooks

## Préférer les hooks personnalisés

Toute logique réutilisable doit être extraite.

### Exemple

```tsx
useAlerts();
useUserLocation();
useRealtimeIncidents();
useMapMarkers();
```

---

## INTERDIT

❌ hooks avec trop de responsabilités  
❌ logique API directement dans les composants  
❌ hooks monstrueux

---

# 🧠 Logique métier

La logique métier ne doit PAS vivre dans :

- les pages,
- les composants UI.

Elle doit être isolée dans :

- services,
- hooks,
- features,
- server actions,
- convex functions.

---

# 🎨 UI / UX Rules

CityAlert doit avoir une UI :

- premium,
- futuriste,
- fluide,
- minimaliste,
- immersive.

---

# ✨ Animations

Les animations doivent être :

- fluides,
- utiles,
- discrètes,
- élégantes.

---

## INTERDIT

❌ animations excessives  
❌ effets “cheap”  
❌ transitions lentes  
❌ UI surchargée

---

# 🌑 Design System

Toujours respecter :

- spacing cohérent,
- hiérarchie visuelle,
- responsive design,
- accessibilité
- des variables css bien définies donc qu'il y ait disons le style de city alert

---

# 🎯 Convention de nommage

## Variables

```ts
const userLocation;
const incidentMarkers;
const isLoading;
```

---

## INTERDIT

```ts
const data;
const item;
const test;
const tmp;
```

---

## Fonctions

Les fonctions doivent commencer par un verbe.

✅

```ts
fetchAlerts();
createIncident();
deleteComment();
validateImage();
```

---

# 📦 Imports

## Ordre obligatoire

```ts
// React
// External libraries
// Internal aliases
// Relative imports
// Types
// Styles
```

---

# 🧼 Clean Code Rules

## Toujours :

✅ utiliser des noms explicites  
✅ écrire du code lisible  
✅ supprimer le dead code  
✅ éviter la duplication  
✅ commenter uniquement si nécessaire

---

## INTERDIT

❌ commentaires inutiles  
❌ console.log oubliés  
❌ any sans raison valable  
❌ fonctions géantes  
❌ conditions imbriquées profondes

---

# 🔥 TypeScript Rules

## INTERDIT

```ts
any;
```

sauf justification claire.

---

## OBLIGATOIRE

✅ types explicites  
✅ validation des données  
✅ types partagés  
✅ safety maximale

---

# 🌍 API & Data Fetching

## IMPORTANT

Ne jamais fetch directement partout.

La logique de données doit être centralisée.

---

## Préférer

- Convex
- Server Actions
- services/
- hooks spécialisés

---

# ⚡ Performance Rules

Toujours penser :

- optimisation,
- fluidité,
- lazy loading,
- memoization intelligente,
- réduction des rerenders.

---

# 🗺️ Règles Map & Realtime

La carte est le coeur du produit.

Le code map doit être :

- performant,
- découplé,
- scalable,
- optimisé.

---

## INTERDIT

❌ rerender toute la map inutilement  
❌ recalculs lourds  
❌ markers non optimisés

---

# 🔒 Sécurité

Toujours :

- valider les inputs,
- sécuriser les mutations,
- limiter les abus,
- protéger les uploads.

---

# 📱 Responsive Design

Le projet est :

# MOBILE FIRST

Tout doit fonctionner parfaitement :

- mobile,
- tablette,
- desktop.

---

# ♿ Accessibilité

Toujours :

- aria labels,
- contraste correct,
- navigation clavier,
- focus visibles.

---

# 🧪 Qualité du code

Avant toute validation :

## Vérifier

- le typage,
- les performances,
- les erreurs console,
- la responsive UI,
- la lisibilité,
- les edge cases.

---

# 🚫 Ce que l’IA ne doit JAMAIS faire

❌ créer des fichiers énormes  
❌ sur-engineerer  
❌ complexifier inutilement  
❌ dupliquer du code  
❌ casser l’architecture  
❌ utiliser des patterns inutiles  
❌ ajouter des dépendances sans raison  
❌ écrire du code “magique” difficile à comprendre

---

# ✅ Ce que l’IA doit TOUJOURS faire

✅ écrire du code production-ready  
✅ écrire du code lisible par humain  
✅ respecter l’architecture  
✅ optimiser les performances  
✅ garder les composants petits  
✅ créer des abstractions intelligentes  
✅ penser scalability  
✅ respecter la cohérence UI/UX

---

# 🧬 Mentalité attendue

Le projet doit donner l’impression :

- d’un produit startup sérieuse,
- d’une plateforme premium,
- d’une technologie moderne pensée pour le futur.

Chaque détail compte.

---

# 🚀 Stack technique officielle

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

---

## Backend

- Convex, mais je ne l'ai pas encore configuré, donc utilise pour l'instant des données statiques.

---

## Cartographie

- leaflet : je l'ai déjà installé.

---

# 🏁 Objectif final

Construire une plateforme :

- rapide,
- belle,
- crédible,
- scalable,
- professionnelle,
- impressionnante visuellement,
- agréable à maintenir.

Le code doit respirer :
la clarté, la maîtrise et l’élégance.

---

# 📌 Rappel final

Un bon développeur écrit du code qui fonctionne.

Un excellent développeur écrit du code :

- maintenable,
- compréhensible,
- scalable,
- élégant.

CityAlert doit viser l’excellence.
