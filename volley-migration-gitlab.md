# Carnet Volley — document de référence du projet

> Document de cadrage pour reprendre l'app dans Claude Code et la transformer en
> projet hébergé sur GitLab Pages, avec séparation des fichiers.
> Rédigé le 2026-11-12.

---

## 1. Objectif de l'app

Carnet d'entraînement pour un coach de volley-ball (Victor) et son équipe.
C'est une **bibliothèque filtrable** : exercices, techniques, tactique, règles,
postes, formations, arbitrage, lexique — un élément par « fiche », avec pour les
exercices un schéma de terrain dessiné. L'app est **bilingue** (français par
défaut, anglais en option) et pensée pour être consultée aussi bien sur
téléphone que sur desktop, y compris au bord du terrain.

Public : usage personnel / partage d'équipe. Le contenu n'est pas sensible.

---

## 2. État actuel de l'app

### Forme
- **Un seul fichier HTML autonome** : `volley-victor.html` (~445 Ko).
- **Vanilla JS**, aucune dépendance, aucun build. Seul apport externe : Google
  Fonts via un `<link>`.
- Fonctionne par **double-clic en local (`file://`)** autant que servie en HTTP.
  → contrainte forte : **pas de modules ES, pas de `fetch()` de JSON** (bloqués
  par le CORS en `file://`).

### Architecture interne
- **Données hardcodées** dans des tableaux JS :
  `EXERCICES`, `TECHNIQUES`, `TACTIQUE`, `POSTES`, `FORMATIONS`, `REGLES`,
  `ARBITRAGE`, `LEXIQUE`, `CISGO`, `INFO`.
  Ces données sont **sérialisables** (objets / chaînes / tableaux, aucune
  fonction à l'intérieur).
- **i18n** (interface + contenu) :
  - `LANG` : langue courante. `LANGS` : langues déclarées (évolutif, >2 possible).
  - `UI` (fr/en) + `T(key)` : chaînes de l'**interface**.
  - `CONTENT_EN` : tables de **traduction du contenu**, calées sur le `nom`
    français de chaque élément. Le **FR est la source, jamais modifié** ; l'EN
    est une surcouche résolue par `L(item, section)`.
  - Tables de libellés : `THEME_LABELS`, `NIVEAU_LABELS`, `SECTION_LABELS_I18N`,
    `INFO_META_EN`, `HOME_DESC_EN`.
  - `applyLang()`, `applyStaticI18n()` (parcourt `[data-i18n]`, `[data-i18n-ph]`,
    `[data-i18n-title]`, `[data-i18n-al]`), `setLang()`, `rerenderCurrent()`.
- **Rendu des schémas** : `courtSVG(schema, mini)` (terrains `half` / `full` /
  `wall`), animation `animateSchema()` (respecte `prefers-reduced-motion`).
- **Routing** : SPA par hash — `pushAppRoute()`, `routeFromHash()`,
  `currentRoute()`, gestion `popstate`. Les vues sont pilotées par des datasets
  sur `<body>` (`data-section`, `data-iview`, `data-view`, `data-tool`).
- **Recherche globale** : index bilingue reconstruit au changement de langue,
  champ dans la navbar + page de résultats groupée par catégorie
  (ordre identique à la navbar).
- **Pseudo-authentification** : masque la section « Cisgo ». Identifiants en
  clair dans le code, état en `localStorage` (`cv-auth`).
  ⚠️ **Ce n'est PAS une sécurité** : tout le HTML est téléchargeable.
- **Outils** : chronomètre, constructeur de composition (drag & drop en SVG).
- **Favoris** et **séance en cours** persistés en `localStorage` (clés FR
  stables). Impression : une fiche par page.

### Où elle vit aujourd'hui
- Artefact Claude (lien privé) + fichier `volley-victor.html` dans le dossier
  local `Documents/Volley-ball/`.
- Historiquement testée sur Tiiny (abandonné : écran de preview + limite de plan).

---

## 3. Transformation en projet GitLab Pages

### But
Héberger l'app sur **GitLab Pages** : statique, gratuit, HTTPS, pas de limite de
« projet actif », pas d'écran de preview.

### Structure cible du dépôt
```
.
├── public/
│   ├── index.html        # le markup
│   ├── styles.css
│   ├── data.js
│   ├── i18n.js
│   └── app.js
├── .gitlab-ci.yml
└── README.md             # (ce document peut en être la base)
```
*(Tant que l'app reste en un seul fichier, `public/` ne contient que
`index.html` ; la décomposition ci-dessus est la cible du §4.)*

### `.gitlab-ci.yml`
```yaml
pages:
  stage: deploy
  script:
    - echo "Fichier statique, rien à construire"
  artifacts:
    paths:
      - public
  publish: public
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
```
À chaque push sur la branche par défaut, le contenu de `public/` est publié sur
`https://<utilisateur>.gitlab.io/<projet>/` (domaine personnalisé possible).

### Sécurité / confidentialité — à décider
- **Pages est public par défaut, même si le dépôt est privé** (l'URL `gitlab.io`
  est ouverte à tous). Pour exiger une connexion GitLab : activer **Pages Access
  Control**.
- Rappel : l'« auth » de l'app ne protège rien. Ne jamais y mettre de contenu
  réellement sensible.

---

## 4. Séparation des fichiers (évolution)

### Cible retenue — 5 fichiers
```
index.html      # le markup
styles.css      # le bloc <style> actuel
data.js         # le contenu source (données FR)
i18n.js         # tout ce qui concerne les langues
app.js          # la logique (rendu, routing, recherche, outils, favoris, séance)
```

### Répartition data.js / i18n.js / app.js
- **`data.js` — contenu source uniquement.** Les tableaux FR :
  `EXERCICES`, `TECHNIQUES`, `TACTIQUE`, `POSTES`, `FORMATIONS`, `REGLES`,
  `ARBITRAGE`, `LEXIQUE`, `CISGO`, `INFO`. C'est la source de vérité, en
  français. Déjà sérialisable → extraction mécanique.
- **`i18n.js` — tout le multilingue, séparé :**
  - l'état des langues : `LANG`, `LANGS` ;
  - le dictionnaire d'interface `UI` (fr/en) et les tables de libellés
    (`THEME_LABELS`, `NIVEAU_LABELS`, `SECTION_LABELS_I18N`, `INFO_META_EN`,
    `HOME_DESC_EN`) ;
  - les **traductions de contenu** `CONTENT_EN` (elles vont ici, pas dans
    `data.js` : c'est de la traduction, calée sur le `nom` FR) ;
  - les résolveurs : `T(key)`, `L(item, section)`, `buildLangSel()`,
    `setLang()`, `applyStaticI18n()`.
  - `applyLang()` / `rerenderCurrent()` orchestrent le ré-affichage : ils
    peuvent rester dans `app.js` et être appelés par `setLang()`, ou être
    exposés à `i18n.js` — à trancher au moment du découpage, mais garder la
    frontière « données+résolveurs de langue dans i18n.js, orchestration du
    rendu dans app.js ».
- **`app.js` — logique applicative.** Rendu des vues et des schémas
  (`courtSVG`, `animateSchema`), routing, recherche globale, outils, favoris,
  séance, auth.

### Règles impératives
- **Garder des `<link>` et `<script src>` classiques — PAS `type="module"`.**
  Sinon l'ouverture en `file://` casse (CORS). Même raison : **`data.js` et
  `i18n.js` déclarent des globales** (`const EXERCICES = [...]`,
  `const UI = {...}`), **pas** du JSON chargé par `fetch()`.
- **Ordre de chargement** : `styles.css` dans le `<head>` ; en fin de `<body>`,
  `data.js`, puis `i18n.js` (consomme éventuellement les données), puis `app.js`
  (consomme les deux).
- **Ne PAS découper « par page »** : c'est une SPA, il n'y a pas de vraies pages
  à séparer (un seul DOM, bascule de vues en JS, contenu = données JS). Un
  découpage par page imposerait de ré-architecturer le routing, sans gain.
- Plus tard seulement, si `data.js` devient trop gros : découper par domaine
  (`exercices.js`, `arbitrage.js`, …).

---

## 5. Invariants à préserver (ne pas casser)

- **FR = langue source**, jamais modifiée par la couche EN.
- **Tout ajout/retrait de texte se fait dans toutes les langues** (FR + EN) ;
  vérifier régulièrement que l'EN suit le FR.
- **Clés FR stables** pour favoris / séance / hash (ne pas les traduire).
- **Zones de schéma toujours carrées** (`type:"zone"`), jamais d'anneaux /
  cerceaux, même quand c'est un cerceau dans la réalité.
- **`file://` doit continuer à fonctionner** (cf. règles du §4).
- **Respecter `prefers-reduced-motion`** pour toutes les animations.
- Pseudo-auth = confort, pas sécurité.

---

## 6. Workflow de dev suggéré (Claude Code)

- **Test local = ouvrir `index.html` directement dans le navigateur** (double-clic,
  `file://`). **Aucun serveur local nécessaire** : c'est tout l'intérêt des règles
  du §4 (scripts classiques en globales, chemins relatifs, pas de modules ni de
  `fetch`). Le seul effet visible hors ligne : les Google Fonts ne se chargent pas
  et l'app retombe sur les polices système (prévu).
- Commits par petits lots thématiques (un commit « split CSS », un commit
  « extraction data.js », etc.).
- La CI Pages se déclenche au push sur la branche par défaut ; vérifier le job
  `pages` dans l'onglet CI/CD.
- Ordre de migration conseillé :
  1. Créer le dépôt + `.gitlab-ci.yml`, déployer l'app telle quelle dans
     `public/index.html` (valider que Pages fonctionne).
  2. Extraire `styles.css`.
  3. Extraire `data.js` (données FR, globales).
  4. Extraire `i18n.js` (UI, libellés, `CONTENT_EN`, résolveurs), puis réduire
     `app.js` à la logique applicative.
  5. (Plus tard) découpage de `data.js` par domaine si besoin.
  À chaque étape : ouvrir `index.html` en local (`file://`) et vérifier FR + EN ;
  le rendu « en ligne » se valide sur l'URL GitLab Pages après push.
