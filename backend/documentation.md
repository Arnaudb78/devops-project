# Documentation Technique

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

## Matrice de décision

### Framework back-end

| Critère                  | NestJS    | Express   | Fastify |
| ------------------------ | --------- | --------- | ------- |
| Structure & architecture | Excellent | Faible    | Moyen   |
| Support TypeScript natif | Excellent | Bon       | Bon     |
| Productivité             | Excellent | Moyen     | Moyen   |
| Courbe d’apprentissage   | Moyen     | Excellent | Bon     |
| Support des tests        | Excellent | Moyen     | Bon     |

### Langage

| Critère                     | TypeScript | JavaScript | Python    |
| --------------------------- | ---------- | ---------- | --------- |
| Typage statique             | Excellent  | Faible     | Moyen     |
| Écosystème web              | Excellent  | Excellent  | Bon       |
| Lisibilité & maintenabilité | Excellent  | Moyen      | Bon       |
| Apprentissage               | Bon        | Excellent  | Excellent |
| Outils & IDE                | Excellent  | Excellent  | Bon       |

### Base de données

| Critère                     | PostgreSQL | MySQL     | MongoDB   | SQLite |
| --------------------------- | ---------- | --------- | --------- | ------ |
| Support relationnel         | Excellent  | Excellent | Faible    | Bon    |
| Requêtage SQL               | Excellent  | Excellent | Faible    | Bon    |
| Fiabilité / Transactions    | Excellent  | Bon       | Moyen     | Moyen  |
| Performance (read-heavy)    | Bon        | Excellent | Bon       | Moyen  |
| Extensibilité (types, JSON) | Excellent  | Moyen     | Excellent | Faible |

### ORM

| Critère                   | Prisma    | TypeORM | Sequelize | MikroORM  |
| ------------------------- | --------- | ------- | --------- | --------- |
| Typage TypeScript         | Excellent | Moyen   | Faible    | Excellent |
| Ergonomie                 | Excellent | Bon     | Moyen     | Bon       |
| Documentation             | Excellent | Bon     | Moyen     | Moyen     |
| Migration & introspection | Excellent | Moyen   | Bon       | Moyen     |
| Performance               | Bon       | Moyen   | Moyen     | Bon       |

### Tests

| Critère                 | Jest      | Vitest    |
| ----------------------- | --------- | --------- |
| Intégration avec NestJS | Excellent | Bon       |
| Simplicité d’usage      | Excellent | Bon       |
| Performance             | Bon       | Excellent |
| Communauté & support    | Excellent | Moyen     |
| Snapshots & mocking     | Excellent | Bon       |
