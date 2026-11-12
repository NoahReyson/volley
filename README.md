# Carnet Volley

Carnet d'entraînement pour coach de volley-ball : bibliothèque filtrable
(exercices, techniques, tactique, règles, postes, formations, arbitrage,
lexique), bilingue (FR par défaut, EN en option), utilisable sur téléphone
comme sur desktop, au bord du terrain.

App **statique**, vanilla JS, **sans build ni dépendance** (seul apport externe :
Google Fonts). Elle fonctionne aussi bien par double-clic en local (`file://`)
que servie en HTTP.

## Structure

```
.
├── public/
│   └── index.html            # l'application (fichier autonome)
├── .gitlab-ci.yml            # publication GitLab Pages
├── volley-migration-gitlab.md # document de référence / cadrage du projet
└── README.md
```

> La décomposition cible en 5 fichiers (`index.html`, `styles.css`, `data.js`,
> `i18n.js`, `app.js`) est décrite dans [`volley-migration-gitlab.md`](volley-migration-gitlab.md)
> (§4). Tant que l'app reste en un seul fichier, `public/` ne contient que
> `index.html`.

## Développement local

Ouvrir directement `public/index.html` dans le navigateur (double-clic,
`file://`). **Aucun serveur local nécessaire.** Hors ligne, les Google Fonts ne
se chargent pas et l'app retombe sur les polices système (comportement prévu).

## Déploiement — GitLab Pages

À chaque push sur la branche par défaut, la CI publie le contenu de `public/`
sur `https://<utilisateur>.gitlab.io/<projet>/`. Suivre le job `pages` dans
l'onglet CI/CD.

> **Confidentialité** : GitLab Pages est public par défaut, même si le dépôt est
> privé. Pour exiger une connexion, activer *Pages Access Control*. La
> pseudo-authentification de l'app (section « Cisgo ») est un confort, **pas une
> sécurité** : tout le HTML est téléchargeable. Ne jamais y mettre de contenu
> sensible.

## Invariants à préserver

Voir [`volley-migration-gitlab.md`](volley-migration-gitlab.md) §5. En résumé :
FR = langue source (jamais modifiée par l'EN) ; tout texte ajouté l'est en FR
et EN ; clés FR stables (favoris / séance / hash) ; zones de schéma toujours
carrées ; `file://` doit continuer à fonctionner (scripts classiques, pas de
modules ni de `fetch`) ; respecter `prefers-reduced-motion`.
