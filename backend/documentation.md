# Documentation Technique – App Formule 1

📅 **05.05.2025**  
👥 **M1 TL**  
👨‍💻 Arnaud Beaulieu, Elena Ferreira, Manal Suliman Ahmed

---

## 🧾 Introduction

### 🔹 Description du projet

Ce projet consiste à développer une API REST (sans interface front-end) pour fournir des données liées au championnat de Formule 1 : pilotes, écuries, circuits, courses, résultats, etc.  
Cette application représente une API backend RESTful dédiée à l’univers de la Formule 1. Elle permet de gérer et consulter les données des pilotes, circuits, équipes, et courses.

---

## 🎯 Objectifs

- Créer une API claire, modulaire et évolutive.  
- Centraliser les données F1 accessibles via un client externe (front-end ou mobile).  
- Offrir des opérations CRUD pour chaque entité F1.

---

## 🌍 Contexte

La Formule 1 attire des millions de fans à travers le monde.  
Les développeurs d'applications et de dashboards ont besoin d'une API centralisée pour accéder facilement aux données des saisons, des pilotes, des résultats, etc.  
Ce projet répond à ce besoin en offrant une API structurée, prête à l'emploi.  
Ce projet est orienté backend uniquement (pas d’interface front-end).

---

## 📌 Besoins

- Accès rapide aux données Formule 1.  
- Intégration future possible avec un front React, Angular, etc.  
- Base de données relationnelle robuste.  
- Bonne maintenabilité et documentation.

---

## 👤 UHL – Utilisateur Haut Niveau

| Utilisateur     | Besoin |
|------------------|--------|
| Développeur Front | Consommer l’API pour afficher les données |
| Administrateur     | Gérer les données via l’API (ajout, suppression…) |
| Testeur            | Vérifier le bon fonctionnement via tests unitaires |

---

## 🛠 Explication des fonctionnalités

| Fonctionnalité       | Description |
|----------------------|-------------|
| Liste des pilotes    | CRUD complet sur les pilotes |
| Liste des équipes    | Gestion des écuries liées aux pilotes |
| Gestion des courses  | Ajout/modification/affichage |
| Résultats            | Résultats par course, pilote ou saison |
| Circuits             | Informations techniques et géographiques |

---

## 🌐 API Endpoints (exemples)

| Méthode HTTP | Endpoint           | Description                         |
|--------------|--------------------|-------------------------------------|
| GET          | /pilotes           | Récupérer la liste des pilotes      |
| POST         | /circuits          | Ajouter un nouveau circuit          |
| PUT          | /equipes/:id       | Modifier une équipe                 |
| DELETE       | /courses/:id       | Supprimer une course                |
| …            | À venir            | Relations, historiques, etc.        |

---

## ♻️ Stratégie environnementale

- Développement local avec **NestJS CLI**.  
- Déploiement possible avec **Docker**.  
- Environnements de production : Railway, Render, VPS.  
- Structure claire : modules, services, contrôleurs.

---

## ⚙️ Architecture technique

| Composant         | Technologie                |
|-------------------|----------------------------|
| Langage           | TypeScript                 |
| Backend Framework | NestJS                     |
| Base de données   | PostgreSQL                 |
| ORM               | Prisma ou TypeORM          |
| Tests             | Jest                       |
| Documentation API | Swagger (NestJS Swagger)   |

---

## 🧱 Détails des technologies

**NestJS**  
Framework modulaire basé sur Node.js et TypeScript, idéal pour construire des API testables et bien structurées.

**TypeScript**  
Langage avec typage statique pour une meilleure clarté et détection des erreurs.

**PostgreSQL**  
Base de données relationnelle robuste et fiable.

**Prisma / TypeORM**  
ORM pour faciliter les requêtes avec TypeScript au lieu de SQL.

**Jest**  
Framework de test intégré avec NestJS.

**Swagger**  
Permet de générer une documentation interactive et testable des endpoints de l’API.

---

## 🔁 Matrice de décision

*()*

---

## 🖇 UML – Diagramme de déploiement

*()*

---

## 🔗 Lien du site

- **GitHub →** *(https://github.com/Arnaudb78/devops-project.git) *

---

## 📌 Conclusion & Améliorations futures

Ce projet offre une base solide pour construire une API moderne dédiée à la Formule 1.

### 🔮 Améliorations possibles :
- Authentification (JWT, OAuth).  
- Cache (ex: Redis).  
- WebSockets pour données en temps réel.  
- Connexion avec API publique F1 (Ergast, etc).  
- Interface d’administration (back-office).

