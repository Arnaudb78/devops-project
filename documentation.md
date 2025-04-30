 # Documentation Technique – App Formule 1

 **05.05.2025**  
 **M1 TL**  
 Arnaud Beaulieu, Elena Ferreira, Manal Suliman Ahmed

---

##  Description du projet

Ce projet consiste à développer une API REST (sans interface front-end) pour fournir des données liées au championnat de Formule 1 : pilotes, écuries, circuits, courses, résultats, etc.  
Cette application représente une API backend RESTful dédiée à l’univers de la Formule 1. Elle permet de gérer et consulter les données des pilotes, circuits, équipes, et courses.

---

##  Explication des fonctionnalités

| Fonctionnalité       | Description |
|----------------------|-------------|
| Liste des pilotes    | CRUD complet sur les pilotes |
| Liste des équipes    | Gestion des écuries liées aux pilotes |
| Gestion des courses  | Ajout/modification/affichage |
| Résultats            | Résultats par course, pilote ou saison |
| Circuits             | Informations techniques et géographiques |

---

##  Stratégie environnementale

- Développement local avec **NestJS CLI**.  
- Déploiement possible avec **Docker**.  
- Environnements de production : Railway, Render, VPS.  
- Structure claire : modules, services, contrôleurs.

---

##  Architecture technique

| Composant         | Technologie                |
|-------------------|----------------------------|
| Langage           | TypeScript                 |
| Backend Framework | NestJS                     |
| Base de données   | PostgreSQL                 |
| ORM               | Prisma                     |
| Tests             | Jest                       |

---

##  Détails des technologies

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

##  Matrice de décision

| Critères              | Poids | NestJS (TypeScript) | Express.js (Node) | Django (Python) | Spring Boot (Java) |
|-----------------------|-------|---------------------|-------------------|-----------------|-------------------|
| Compétences de l'équipe| 5     | 25                  | 20                | 20              | 20                |
| Performance           | 4     | 16                  | 12                | 16              | 16                |
| Popularité            | 5     | 25                  | 20                | 20              | 20                |
| Stabilité             | 3     | 15                  | 12                | 15              | 15                |
| Poids                 | 2     | 10                  | 8                 | 8               | 8                 |
| Déploiement           | 3     | 15                  | 12                | 12              | 12                |
| **Total pondéré**     |       | **106**             | **88**            | **91**          | **91**            |


