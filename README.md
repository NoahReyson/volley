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
│   ├── index.html            # le markup
│   ├── styles.css            # les styles
│   ├── data.js               # contenu source (français)
│   ├── i18n.js               # langues (UI, libellés, traductions, résolveurs)
│   └── app.js                # logique (rendu, routing, recherche, outils…)
├── .github/
│   └── workflows/
│       └── pages.yml         # déploiement GitHub Pages
├── volley-migration-github.md # document de référence / cadrage du projet
└── README.md
```

> Le découpage en 5 fichiers et les invariants du projet sont décrits dans
> [`volley-migration-github.md`](volley-migration-github.md).

## Développement local

Ouvrir directement `public/index.html` dans le navigateur (double-clic,
`file://`). **Aucun serveur local nécessaire** : scripts classiques en globales,
chemins relatifs, pas de modules ES ni de `fetch`. Hors ligne, les Google Fonts
ne se chargent pas et l'app retombe sur les polices système (comportement prévu).

## Déploiement — GitHub Pages

Le workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) publie le
contenu de `public/` à chaque push sur `main`.

**À faire une seule fois** : dans **Settings → Pages**, régler *Source* sur
**« GitHub Actions »**. Le site sera ensuite servi sur
`https://<utilisateur>.github.io/<projet>/` (ici `volley`). Suivre les
exécutions dans l'onglet **Actions**.

> **Confidentialité** : GitHub Pages est **public** sur un dépôt public. Pour
> restreindre l'accès, il faut un dépôt privé avec *Pages* en accès contrôlé
> (fonction payante selon le plan). La pseudo-authentification de l'app (section
> « Cisgo ») est un confort, **pas une sécurité** : tout le HTML est
> téléchargeable. Ne jamais y mettre de contenu sensible.

## Invariants à préserver

Voir [`volley-migration-github.md`](volley-migration-github.md) §5. En résumé :
FR = langue source (jamais modifiée par l'EN) ; tout texte ajouté l'est en FR
et EN ; clés FR stables (favoris / séance / hash) ; zones de schéma toujours
carrées ; `file://` doit continuer à fonctionner (scripts classiques, pas de
modules ni de `fetch`) ; respecter `prefers-reduced-motion`.
