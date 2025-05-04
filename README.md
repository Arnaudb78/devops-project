# Projet DevOps Formule 1

Bienvenue sur notre projet de développement et d'intégration DevOps autour de la Formule 1 ! 🏎️

![Code Coverage](backend/badges/coverage.svg)

## 🎯 Objectif du projet

Ce projet vise à fournir un back-end structuré pour gérer des données liées à la Formule 1 (pilotes, utilisateurs…), tout en mettant en œuvre des pratiques DevOps modernes comme l'intégration continue, les tests automatisés, la containerisation et la supervision.

## 📊 Technologies utilisées

### Backend

- **NestJS** (framework Node.js backend moderne)
- **TypeScript**
- **Jest** (tests unitaires)
- **PostgreSQL** (base de données relationnelle)

### DevOps

- **Docker** (containerisation de l'application)
- **docker-compose** (orchestration de services)
- **GitHub Actions** (CI/CD)
- **Prometheus** (monitoring des métriques)
- **Loki** + **Promtail** (centralisation des logs)
- **Grafana** (visualisation des métriques et logs)

## 📚 Comment installer et lancer le projet

### 1. Cloner le projet

```bash
git clone https://github.com/Arnaudb78/devops-project.git
```

### 2. Rentrer dans le projet

```bash
cd devops-project
```

### 3. Installer pnpm (optionnel)

```bash
npm install -g pnpm@latest-10
```

### 4. Copier les variables d'environnement

```bash
cd backend && cp .env.example .env
```

### 5. Lancer Docker Desktop

Si vous ne disposez pas de Docker Desktop vous pouvez le télécharger ici 👇

https://www.docker.com/products/docker-desktop/

### 6. Lancer l'application

```bash
cd .. && docker compose up -build
```

### 7. Arrêter les services

```bash
ctrl + C
```

### 8. Supprimer les containers Docker

```bash
docker compose down
```

## 🧪 Tester

### Ajouter un driver (connexion à la DB)

```bash
curl -X POST http://localhost:3000/drivers \
  -H "Content-Type: application/json" \
  -d '{"name": "John Driver", "licenseNumber": "ABC123", "phoneNumber": "1234567890", "email": "john@example.com"}'
```

### Récupérer tous les drivers

```bash
curl http://localhost:3000/drivers
```

### Lancer les tests

```bash
pnpm run test
```

### Générer un coverage

```bash
pnpm run test:cov
```

## ⚙️ Workflows GitHub Actions

| Workflow             | Fichier              | Description                                                       |
| -------------------- | -------------------- | ----------------------------------------------------------------- |
| **Tests unitaires**  | `test.yml`           | Exécute `pnpm run test` à chaque push ou PR                       |
| **Couverture**       | `coverage.yml`       | Exécute `pnpm run test:cov` et téléverse le rapport de couverture |
| **Badge couverture** | `badge-coverage.yml` | Génère un badge de couverture automatique et échoue si < 70 %     |
| **Message PR**       | `pr-congrat.yml`     | Envoie un message automatique lors de l’ouverture d’une PR        |

## 🔗 Liens utiles

- [API OpenF1](https://openf1.org/)
- [NestJS Documentation](https://docs.nestjs.com/)
- [Docker Documentation](https://docs.docker.com/)
- [Prometheus Documentation](https://prometheus.io/docs/)
- [Grafana Documentation](https://grafana.com/docs/)

## Crédit

Projet créé par Arnaud Beaulieu, Manal Suliman et Elena Ferreira
