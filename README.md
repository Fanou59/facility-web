# Facility-Web

Une application web moderne de marketing stratégique construite avec Next.js 15, TypeScript et Tailwind CSS.

## 🚀 À propos

Facility-Web est une plateforme web personnelle dédiée au marketing stratégique et à la consultation. Elle permet de présenter des services, gérer du contenu et offrir une interface d'administration complète.

## ✨ Fonctionnalités

- **🏠 Site vitrine** : Présentation des services et du parcours professionnel
- **👤 Authentification** : Système d'auth sécurisé avec Better Auth
- **📊 Interface d'administration** : Gestion complète des services et expériences
- **📝 Gestion de contenu** : CRUD complet pour les services et expériences professionnelles
- **📧 Formulaire de contact** : Envoi d'emails avec Nodemailer
- **🗓️ Prise de rendez-vous** : Intégration Zcal pour la planification
- **📱 Design responsive** : Interface adaptée à tous les écrans
- **🎨 UI moderne** : Components Shadcn/ui avec animations

## 🛠️ Technologies utilisées

### Frontend

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Shadcn/ui** - Bibliothèque de composants
- **Radix UI** - Composants accessibles
- **Lucide React** - Icônes

### Backend & Base de données

- **Prisma** - ORM pour base de données
- **PostgreSQL** - Base de données
- **Better Auth** - Authentification et autorisation
- **Nodemailer** - Envoi d'emails

### Outils & Validation

- **React Hook Form** - Gestion des formulaires
- **Zod** - Validation de schémas
- **TanStack Query** - Gestion d'état et cache
- **Sonner** - Notifications toast

## 📁 Structure du projet

```
facility-web/
├── app/                    # App Router (Next.js 15)
│   ├── actions/           # Server actions
│   ├── api/              # Routes API
│   ├── (pages)/          # Pages de l'application
│   └── globals.css       # Styles globaux
├── components/            # Composants React
│   ├── ui/               # Composants UI réutilisables
│   ├── adminUi/          # Interface d'administration
│   └── providers/        # Providers React
├── lib/                  # Utilitaires et configurations
├── schemas/              # Schémas de validation Zod
├── prisma/               # Configuration Prisma
├── data/                 # Données statiques
└── public/               # Fichiers statiques
```

## 🚀 Installation

1. **Cloner le repository**

```bash
git clone https://github.com/votre-username/facility-web.git
cd facility-web
```

2. **Installer les dépendances**

```bash
pnpm install
```

3. **Configuration des variables d'environnement**

```bash
cp .env.example .env
```

Remplissez les variables suivantes dans `.env` :

```env
# Base de données
DATABASE_URL="postgresql://..."

# Authentication
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000"
BETTER_AUTH_SECRET="votre-secret"

# Email (SMTP)
SMTP_HOST="smtp.example.com"
SMTP_PORT="465"
SMTP_USER="votre-email@example.com"
SMTP_PASS="votre-mot-de-passe"
```

4. **Configurer la base de données**

```bash
pnpm prisma generate
pnpm prisma db push
```

5. **Lancer le serveur de développement**

```bash
pnpm dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📝 Scripts disponibles

```bash
pnpm dev          # Démarrer le serveur de développement
pnpm build        # Construire l'application pour la production
pnpm start        # Démarrer le serveur de production
pnpm postinstall  # Générer le client Prisma
```

## 🗄️ Base de données

Le projet utilise Prisma avec PostgreSQL. Les modèles principaux :

- **User** : Utilisateurs et authentification
- **Services** : Services proposés
- **CV** : Expériences professionnelles
- **Session/Account** : Gestion des sessions

## 🔐 Authentification

L'authentification est gérée par Better Auth avec :

- Connexion par email/mot de passe
- Réinitialisation de mot de passe
- Gestion des sessions
- Protection des routes admin

## 🎨 Interface utilisateur

### Pages publiques

- **Accueil** : Présentation et services
- **Mes services** : Détail des prestations
- **Qui suis-je** : Parcours professionnel avec timeline
- **Contact** : Formulaire et prise de rendez-vous

### Interface d'administration

- Gestion des services (CRUD)
- Gestion des expériences professionnelles
- Mise à jour du profil utilisateur
- Interface avec sections collapsibles

## 📧 Configuration Email

Pour le formulaire de contact et la réinitialisation de mot de passe, configurez votre serveur SMTP dans les variables d'environnement.

## 🚀 Déploiement

### Vercel (recommandé)

1. Connectez votre repository GitHub à Vercel
2. Configurez les variables d'environnement
3. Déployez automatiquement

### Autres plateformes

```bash
pnpm build
pnpm start
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

**Stéphane Guéry** - Consultant en stratégie marketing

- Website: [facility-web.fr](https://facility-web.fr)
- LinkedIn: [stephaneguery](https://www.linkedin.com/in/stephaneguery/)
- Email: stephane@facility-web.fr

---

⭐ N'hésitez pas à mettre une étoile si ce projet vous plaît !
