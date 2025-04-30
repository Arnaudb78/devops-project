# Projet DevOps Formule 1

Bienvenue sur notre projet de développement et d'intégration DevOps autour de la Formule 1 ! 🏎️

## 🎯 Objectif du projet

Ce projet vise à récupérer des données liées à la Formule 1 (pilotes, équipes, circuits, etc.) depuis une API externe (https://openf1.org/), les stocker en base de données, et fournir un accès back-end à ces données.

Le focus est mis sur la mise en place des pratiques DevOps modernes (CI/CD, containerisation, monitoring, logging).


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

### 2. Installer pnpm (si vous ne l'avez pas)

```bash
npm install -g pnpm@latest-10
```

### 3. Installer les dépendances

```bash
cd backend/
pnpm install
```

### 4. Lancer l'application

Revenir à la racine du projet, puis lancer tous les services avec Docker Compose :

```bash
cd ..
docker compose up --build
```

### 5. Arrêter les services

```bash
docker compose down
```


## 🔗 Liens utiles
- [API OpenF1](https://openf1.org/)
- [NestJS Documentation](https://docs.nestjs.com/)
- [Docker Documentation](https://docs.docker.com/)
- [Prometheus Documentation](https://prometheus.io/docs/)
- [Grafana Documentation](https://grafana.com/docs/)

## Crédit
Projet créé par Arnaud Beaulieu, Manal Suliman et Elena Ferreira


