# Bibliothèque Web

## Description

Cette application permet de gérer une bibliothèque en ligne. Les utilisateurs peuvent consulter les livres disponibles et voir les livres qu'ils ont empruntés à partir de leur adresse courriel.

Le projet a été développé dans le cadre du cours de Programmation Web en utilisant :

* React.js (Frontend)
* Node.js et Express.js (Backend)
* MySQL (Base de données)
* Swagger (Documentation API)

---

## Fonctionnalités

### Consultation des livres

* Afficher la liste des livres disponibles.
* Consulter les informations des livres.

### Gestion des emprunts

* Rechercher les livres empruntés par un utilisateur.
* Recherche par adresse courriel.

### Documentation API

* Documentation interactive accessible avec Swagger.

---

## Structure du projet

bibliotheque/

├── client/ # Application React

├── server/ # API Express

├── README.md

---

## Installation

### 1. Cloner le projet

```bash
git clone <url-du-depot>
```

### 2. Installer les dépendances du serveur

```bash
cd server
npm install
```

### 3. Installer les dépendances du client React

```bash
cd ../client
npm install
```

---

## Configuration

Créer un fichier `.env` dans le dossier `server` :

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=bibliotheque
PORT=5000
```

---

## Lancer l'application

### Démarrer le serveur Express

```bash
cd server
node server.js
```

ou

```bash
npm start
```

### Démarrer le client React

```bash
cd client
npm start
```

---

## API REST

### Récupérer tous les livres

```http
GET /api/livres
```

### Récupérer les livres empruntés par un utilisateur

```http
GET /api/emprunts?email=utilisateur@email.com
```

---

## Documentation Swagger

Une fois le serveur démarré :

```text
http://localhost:5000/api-docs
```

Cette interface permet de consulter et tester les endpoints de l'API.

---

## Technologies utilisées

### Frontend

* React.js
* Axios
* React Router

### Backend

* Node.js
* Express.js

### Base de données

* MySQL

### Documentation

* Swagger UI
* Swagger JSDoc

---

## Auteur

Larry Wadja

Projet réalisé dans le cadre de l'évaluation finale de Programmation Web.
