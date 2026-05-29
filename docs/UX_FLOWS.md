# Parcours Utilisateur (UX Flows)

# CityAlert

> Ce document décrit les parcours utilisateur détaillés et les interactions concrètes de l'application.

---

## FLOW-01 — Signaler un incident (Map-First)

### Contexte

C'est le parcours principal de CityAlert. L'utilisateur signale un événement urbain en cliquant directement sur la carte.

### Étapes

1. L'utilisateur navigue sur la carte interactive de Goma.
2. Il clique sur l'emplacement exact de l'incident.
3. Un marqueur temporaire bleu pulsant apparaît à l'endroit cliqué.
4. Un popup s'affiche au-dessus du marqueur : **"🚨 Signaler un incident ici"**.
5. L'utilisateur clique sur le bouton du popup.
6. Le formulaire de signalement s'ouvre en overlay (Sheet).
7. **Étape 1 — Type d'alerte :** L'utilisateur choisit la catégorie (Danger, Électricité, Trafic, Service).
8. **Étape 2 — Description :** L'utilisateur saisit une description (min. 20 caractères).
9. **Étape 3 — Localisation :** Les coordonnées sont déjà préremplies grâce au clic sur la carte. L'utilisateur voit un récapitulatif de la position sélectionnée et peut valider.
10. **Étape 4 — Confirmation :** Un écran de confirmation s'affiche. L'utilisateur valide.
11. Le marqueur temporaire disparaît.
12. Un nouveau marqueur permanent (coloré selon la catégorie) apparaît sur la carte.
13. Le feed des alertes récentes se met à jour avec le nouvel incident.

### Cas alternatif — Géolocalisation

Si la géolocalisation est active, la carte se centre automatiquement sur la position de l'utilisateur au chargement, ce qui lui facilite le ciblage de l'incident à proximité.

---

## FLOW-02 — Consulter un incident sur la carte

### Étapes

1. L'utilisateur voit les marqueurs colorés sur la carte.
2. Il clique sur un marqueur.
3. La carte effectue un zoom doux vers le marqueur sélectionné.
4. Un panneau de détails apparaît avec :
   - Titre de l'incident
   - Catégorie et icône
   - Description
   - Zone / Quartier
   - Heure du signalement
   - Source et niveau de confiance
   - Tags
5. L'utilisateur peut fermer le panneau ou ajouter une confirmation.

---

## FLOW-03 — Consulter le feed des alertes

### Étapes

1. L'utilisateur consulte la liste chronologique des alertes (sidebar sur desktop, scroll sur mobile).
2. Chaque carte d'alerte affiche le type, le quartier, l'heure et la description.
3. L'utilisateur clique sur une alerte dans le feed.
4. La carte effectue un zoom vers l'incident correspondant.
5. Le panneau de détails s'affiche.

---

## FLOW-04 — Navigation mobile

### Étapes

1. Sur mobile, une barre de navigation fixe en bas affiche les onglets principaux.
2. L'utilisateur bascule entre la vue carte et le feed via cette navigation.
3. Le bouton flottant "🚨 Signaler" est toujours accessible au-dessus de la carte.

---

## Composants UI impliqués

| Composant                | Rôle                                           |
| ------------------------ | ---------------------------------------------- |
| `CityMap`                | Carte interactive Leaflet                      |
| `ReportIncidentSheet`    | Formulaire de signalement en overlay           |
| `AlertFeed`              | Liste chronologique des alertes                |
| `AlertDetailsPanel`      | Panneau de détails d'un incident sélectionné   |
| `FloatingReportButton`   | Bouton flottant "Signaler" sur la carte        |
| `TopBar`                 | Barre supérieure avec actions globales         |
| `MobileNavigation`       | Navigation mobile en bas d'écran               |
| `DesktopSidebar`         | Sidebar latérale sur desktop                   |
