# Facility-Web

Une application web moderne de marketing stratégique construite avec Next.js 15, TypeScript et Tailwind CSS.

## 🚀 À propos

Facility-Web est une plateforme web personnelle dédiée au marketing stratégique et à la consultation. Elle permet de présenter des services, gérer du contenu et offrir une interface d'administration complète.

## ✨ Fonctionnalités

- **🏠 Site vitrine** : Présentation des services et du parcours professionnel
- **👤 Authentification** : Système d'auth sécurisé avec Better Auth
- **📊 Interface d'administration** : Gestion complète des services et expériences
- **📝 Gestion de contenu** : CRUD complet pour les services et expériences professionnelles
- **✏️ Éditeur riche** : TipTap pour l'édition de contenu avec formatage
- **📧 Formulaire de contact** : Envoi d'emails avec Nodemailer
- **🗓️ Prise de rendez-vous** : Intégration Zcal pour la planification
- **☁️ Stockage d'images** : Upload et gestion d'images via Cloudinary
- **🍪 Gestion des cookies** : Conformité RGPD avec Axeptio
- **📱 Design responsive** : Interface adaptée à tous les écrans
- **🎨 UI moderne** : Components Shadcn/ui avec animations

## 🛠️ Technologies utilisées

### Frontend

- **Next.js 15.5** - Framework React avec App Router et Turbopack
- **React 19.1** - Bibliothèque UI avec dernières fonctionnalités
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Framework CSS utilitaire
- **Shadcn/ui** - Bibliothèque de composants
- **Radix UI** - Composants accessibles
- **TipTap** - Éditeur de texte riche
- **Lucide React** - Icônes

### Backend & Base de données

- **Prisma** - ORM pour base de données
- **PostgreSQL** - Base de données
- **Better Auth** - Authentification et autorisation
- **Nodemailer** - Envoi d'emails
- **Cloudinary** - Stockage et gestion d'images

### Outils & Validation

- **React Hook Form** - Gestion des formulaires
- **Zod** - Validation de schémas
- **TanStack Query** - Gestion d'état et cache
- **Sonner** - Notifications toast
- **Axeptio** - Gestion des cookies et conformité RGPD

## 📁 Structure du projet

```
facility-web/
├── app/                    # App Router (Next.js 15)
│   ├── actions/           # Server actions
│   ├── api/              # Routes API
│   ├── admin/            # Interface d'administration
│   ├── contact/          # Page contact
│   ├── login/            # Page connexion
│   ├── register/         # Page inscription
│   ├── reset-password/   # Réinitialisation mot de passe
│   ├── mes-services/     # Page services
│   ├── qui-suis-je/      # Page à propos
│   ├── mentions-legales/ # Mentions légales
│   ├── politique-confidentialite/  # Politique confidentialité
│   ├── politique-cookie/ # Politique cookies
│   └── globals.css       # Styles globaux
├── components/            # Composants React
│   ├── ui/               # Composants UI réutilisables (shadcn/ui)
│   ├── adminUi/          # Interface d'administration
│   └── providers/        # Providers React (TanStack Query)
├── lib/                  # Utilitaires et configurations
│   ├── auth.ts           # Configuration Better Auth
│   ├── prisma.ts         # Client Prisma
│   ├── uploadToCloudinary.ts  # Upload images
│   └── utils.ts          # Fonctions utilitaires
├── schemas/              # Schémas de validation Zod
├── prisma/               # Configuration Prisma et schéma DB
├── hooks/                # Custom React hooks
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
DATABASE_URL="postgresql://user:password@localhost:5432/facility_web"

# Authentication
BETTER_AUTH_SECRET="votre-secret-aleatoire"
BETTER_AUTH_URL="http://localhost:3000"

# Email (SMTP)
SMTP_HOST="smtp.example.com"
SMTP_PORT="465"
SMTP_USER="votre-email@example.com"
SMTP_PASS="votre-mot-de-passe"

# Cloudinary
CLOUDINARY_CLOUD_NAME="votre-cloud-name"
CLOUDINARY_API_KEY="votre-api-key"
CLOUDINARY_API_SECRET="votre-api-secret"
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
pnpm dev          # Démarrer le serveur de développement (avec Turbopack)
pnpm build        # Construire l'application pour la production
pnpm start        # Démarrer le serveur de production
pnpm postinstall  # Générer le client Prisma
```

## 🗄️ Base de données

Le projet utilise Prisma avec PostgreSQL. Les modèles principaux :

- **User** : Utilisateurs et authentification
- **Services** : Services proposés avec images et descriptions
- **CV** : Expériences professionnelles (timeline)
- **Session/Account** : Gestion des sessions Better Auth
- **Verification** : Tokens de vérification email

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

- Gestion des services (CRUD) avec upload d'images
- Gestion des expériences professionnelles
- Éditeur de texte riche avec TipTap
- Mise à jour du profil utilisateur
- Interface avec sections collapsibles

## ☁️ Cloudinary

Le projet utilise Cloudinary pour le stockage et la gestion des images. Les images des services sont uploadées dans le dossier `facility-services` et optimisées automatiquement.

## 🍪 Conformité RGPD

Le projet intègre Axeptio pour la gestion des cookies et la conformité RGPD, avec support de Google Consent Mode v2.

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
