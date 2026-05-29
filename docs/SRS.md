# Software Requirements Specification (SRS)

# CityAlert

> Plateforme communautaire de signalement d'incidents en temps réel.

---

## Informations Générales

| Élément  | Valeur                             |
| -------- | ---------------------------------- |
| Projet   | CityAlert                          |
| Type     | Civic-Tech / Urban Safety Platform |
| Version  | 1.0                                |
| Auteurs  | Glodi Mugisho et Juhudi Judith     |
| Statut   | MVP + Vision Long Terme            |

---

## 1. Introduction

### 1.1 Vision du Projet

CityAlert est une plateforme communautaire permettant aux citoyens de signaler et consulter des évènements préoccupants en temps réel via une carte interactive.

L'objectif principal est de transformer la ville en un réseau vivant d'informations citoyennes afin d'améliorer :

- la sécurité,
- la mobilité,
- la réactivité communautaire,
- l'accès aux informations locales critiques.

### 1.2 Portée

Le système couvre le signalement, la consultation et la diffusion d'incidents urbains géolocalisés. Le périmètre initial cible la ville de Goma, RDC.

---

## 2. Objectifs du MVP

Le MVP doit permettre de démontrer rapidement :

- la faisabilité technique,
- l'expérience temps réel,
- l'utilité communautaire,
- l'interaction autour d'une carte vivante.

---

## 3. Exigences Fonctionnelles

### REQ-F01 — Signalement d'un Incident

**Priorité :** Critique

Le système doit permettre à un utilisateur de créer un signalement d'incident urbain.

**Données requises :**

| Champ            | Type      | Obligatoire |
| ---------------- | --------- | ----------- |
| Type d'alerte    | Sélection | Oui         |
| Description      | Texte     | Oui         |
| Latitude         | Nombre    | Oui         |
| Longitude        | Nombre    | Oui         |
| Date de création | Timestamp | Automatique |

**Types d'alertes supportés (MVP) :**

- Route dangereuse
- Coupure électrique
- Embouteillage
- Zone à risque
- Incendie
- Inondation

**Règles :**

- La description doit contenir au minimum 20 caractères.
- Les coordonnées géographiques doivent correspondre à un point valide sur la carte.
- La date de création est générée automatiquement par le système.

---

### REQ-F02 — Carte Interactive

**Priorité :** Critique

Le système doit afficher une carte interactive centrée sur la ville cible.

**Capacités requises :**

- Afficher tous les incidents actifs sous forme de marqueurs géolocalisés.
- Permettre la navigation (zoom, déplacement, interaction tactile).
- Permettre la sélection d'un incident pour en afficher les détails.
- Permettre la sélection d'un emplacement géographique pour créer un signalement.
- Différencier visuellement les catégories d'incidents sur la carte.

---

### REQ-F03 — Feed des Alertes Récentes

**Priorité :** Haute

Le système doit afficher une liste chronologique des incidents signalés.

**Informations affichées par incident :**

- Type d'alerte
- Quartier / zone
- Heure du signalement
- Description courte

**Règles :**

- Les incidents les plus récents apparaissent en premier.
- La sélection d'un incident dans le feed doit le mettre en surbrillance sur la carte et zoomer sur l'incident.

---

### REQ-F04 — Synchronisation Temps Réel

**Priorité :** Haute

Quand un utilisateur ajoute un signalement :

- tous les autres utilisateurs connectés doivent le voir apparaître instantanément,
- sans rechargement manuel de la page.

---

### REQ-F05 — Géolocalisation de l'Utilisateur

**Priorité :** Moyenne (optionnel MVP)

Le système peut récupérer automatiquement la position GPS de l'utilisateur afin de :

- centrer la carte sur sa position,
- faciliter le ciblage de l'emplacement d'un signalement,
- détecter les zones dangereuses proches.

---

## 4. Exigences Fonctionnelles Futures (POST-MVP)

Ces exigences ne doivent PAS ralentir le développement du MVP.

### REQ-F10 — Validation Communautaire

Les utilisateurs pourront confirmer ou invalider les alertes existantes (✔️ Confirmer / ❌ Faux signalement) afin d'augmenter la fiabilité des données.

### REQ-F11 — Notifications Intelligentes

Le système pourra envoyer des notifications aux utilisateurs situés à proximité d'une zone dangereuse signalée.

### REQ-F12 — Heatmap

Le système pourra afficher une carte de chaleur pour visualiser la densité et la concentration des incidents par zone.

### REQ-F13 — IA et Analyse

Le système pourra analyser automatiquement les données pour détecter des tendances, anomalies et générer des alertes prédictives.

### REQ-F14 — Expansion Multi-ville

Le système devra supporter plusieurs villes avec une architecture scalable.

---

## 5. Exigences Non Fonctionnelles

### REQ-NF01 — Performance

- Le chargement initial de l'application doit être rapide (< 3s sur connexion standard).
- La synchronisation des données doit être quasi instantanée.
- L'interface doit rester fluide sur appareils mobiles.

### REQ-NF02 — Scalabilité

Le système doit pouvoir évoluer vers :

- plusieurs milliers d'utilisateurs simultanés,
- plusieurs villes,
- un trafic temps réel élevé.

### REQ-NF03 — Utilisabilité

L'interface doit être simple, intuitive, moderne et conçue en approche mobile-first.

### REQ-NF04 — Sécurité

Le système doit :

- limiter le spam et les signalements abusifs,
- valider toutes les entrées utilisateur,
- protéger les données stockées.

### REQ-NF05 — Disponibilité

Le système doit rester disponible avec haute stabilité.

---

## 6. Contraintes du Projet

### Contraintes MVP

- Réalisable rapidement (contexte hackathon).
- Impressionnant visuellement.
- Simple techniquement.

---

## 7. Vision Produit

CityAlert ambitionne de devenir une infrastructure citoyenne numérique capable de transformer les villes africaines grâce aux données communautaires temps réel.

Le projet vise à devenir :

- une plateforme civic-tech de référence,
- un réseau communautaire urbain,
- un système intelligent d'information citoyenne.
