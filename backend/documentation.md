 # Documentation Technique – App Formule 1

**05.05.2025**  
**M1 TL**  
Arnaud Beaulieu, Elena Ferreira, Manal Suliman Ahmed

---

## Description du projet

Ce projet consiste à développer une API REST (sans interface front-end) pour fournir des données liées au championnat de Formule 1 : pilotes, écuries, circuits, courses, résultats, etc.  
Cette application représente une API backend RESTful dédiée à l’univers de la Formule 1. Elle permet de gérer et consulter les données des pilotes, circuits, équipes, et courses.

---

## Explication des fonctionnalités

| Fonctionnalité       | Description |
|----------------------|-------------|
| Liste des pilotes    | CRUD complet sur les pilotes |
| Liste des équipes    | Gestion des écuries liées aux pilotes |
| Gestion des courses  | Ajout/modification/affichage |
| Résultats            | Résultats par course, pilote ou saison |
| Circuits             | Informations techniques et géographiques |

---

## Stratégie environnementale

- Développement local avec **NestJS CLI**.  
- Déploiement possible avec **Docker**.  
- Environnements de production : Railway, Render, VPS.  
- Structure claire : modules, services, contrôleurs.

---

## Architecture technique

| Composant         | Technologie                |
|-------------------|----------------------------|
| Langage           | TypeScript                 |
| Backend Framework | NestJS                     |
| Base de données   | PostgreSQL                 |
| ORM               | Prisma                     |
| Tests             | Jest                       |

---

## Détails des technologies

**NestJS**  
Framework modulaire basé sur Node.js et TypeScript, idéal pour construire des API testables et bien structurées.

**TypeScript**  
Langage avec typage statique pour une meilleure clarté et détection des erreurs.

**PostgreSQL**  
Base de données relationnelle robuste et fiable.

**Prisma**  
ORM pour faciliter les requêtes avec TypeScript au lieu de SQL.

**Jest**  
Framework de test intégré avec NestJS.

---

## Matrices décisionnelles

### 🔹 1. Comparaison des langages

| Critères              | Poids | TypeScript | JavaScript | Python |
|-----------------------|-------|------------|------------|--------|
| Typage statique       | 5     | 25         | 5          | 10     |
| Courbe d’apprentissage| 4     | 12         | 16         | 16     |
| Écosystème            | 5     | 20         | 25         | 15     |
| Performance           | 3     | 12         | 12         | 9      |
| Sécurité              | 3     | 15         | 6          | 12     |
| **Total pondéré**     |       | **84**     | **64**     | **62** |

---

### 🔹 2. Comparaison des frameworks backend (Node.js)

| Critères              | Poids | NestJS | Express | Fastify |
|-----------------------|-------|--------|---------|---------|
| Structure & modularité| 5     | 25     | 10      | 15      |
| Performance           | 4     | 16     | 12      | 16      |
| Documentation         | 3     | 15     | 12      | 9       |
| Communauté            | 3     | 15     | 15      | 9       |
| Courbe d’apprentissage| 2     | 8      | 10      | 8       |
| **Total pondéré**     |       | **79** | **59**  | **57**  |

---

### 🔹 3. Comparaison des bases de données

| Critères              | Poids | PostgreSQL | MySQL | MongoDB |
|-----------------------|-------|------------|-------|---------|
| Modélisation relationnelle | 5 | 25         | 20    | 5       |
| Sécurité              | 4     | 16         | 12    | 12      |
| Requêtage avancé      | 3     | 15         | 12    | 9       |
| Support ORM (Prisma)  | 3     | 15         | 12    | 9       |
| Scalabilité           | 2     | 6          | 6     | 8       |
| **Total pondéré**     |       | **77**     | **62**| **43**  |

---

## Remarques

- Aucun frontend n’est prévu. Le backend joue le rôle d'API REST.
- Swagger n’est pas utilisé dans ce projet.
- Les endpoints de l’API ne sont pas encore finalisés.


##  Lien du site

**https://github.com/Arnaudb78/devops-project.git.**

