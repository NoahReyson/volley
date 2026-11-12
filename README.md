# Carnet Volley

Carnet d'entraînement pour coach de volley-ball : une **bibliothèque filtrable**
(exercices, techniques, tactique, règles, postes, formations, arbitrage, lexique)
avec, pour chaque exercice, un **schéma de terrain** dessiné. L'app est
**bilingue** (français par défaut, anglais en option) et pensée pour être
consultée sur téléphone comme sur desktop, y compris au bord du terrain.

Usage personnel / partage d'équipe — le contenu n'est pas sensible.

**En ligne :** https://noahreyson.github.io/volley/

---

## Fonctionnalités

- **Bibliothèque d'exercices filtrable** par thème, niveau, durée et effectif
  disponible ; une fiche = une page, avec schéma de terrain animé.
- **Sections de référence** : règles, postes, formations, tactique, techniques
  (expliquées par niveau), arbitrage (gestes officiels), lexique.
- **Recherche globale** sur toutes les sections, groupée par catégorie.
- **Bilingue FR / EN** : bascule instantanée, le contenu et l'interface suivent.
- **Thème** : bouton à 3 modes cycliques — **Auto** (suit le réglage clair/sombre
  du périphérique, en direct), **Clair**, **Sombre**.
- **Favoris** et **séance en cours** (panneau latéral), mémorisés sur l'appareil.
- **Outils** : chronomètre et constructeur de composition (glisser-déposer).
- **Impression** : une fiche par page.
- **Section « Cisgo »** masquée derrière une pseudo-connexion (voir
  [Sécurité](#sécurité--confidentialité)).

---

## Développement local

**Ouvrir directement `public/index.html` dans le navigateur** (double-clic,
`file://`). **Aucun serveur ni build nécessaire** : scripts classiques en
globales, chemins relatifs, pas de modules ES ni de `fetch`. Hors ligne, seules
les Google Fonts ne se chargent pas — l'app retombe sur les polices système
(comportement prévu).

> Astuce : le volet de prévisualisation de certains éditeurs transforme le
> `file://` en URI `data:` et ne charge alors pas les fichiers relatifs
> (`styles.css`, `data.js`…). Dans ce cas, servir le dossier `public/` en HTTP
> (n'importe quel serveur statique) ou ouvrir le fichier dans un vrai navigateur.

---

## Structure

```
.
├── public/                   # tout ce qui est publié
│   ├── index.html            # le markup (SPA)
│   ├── styles.css            # les styles (thème clair/sombre via variables CSS)
│   ├── data.js               # contenu source, en français
│   ├── i18n.js               # langues : UI, libellés, traductions, résolveurs
│   └── app.js                # logique : rendu, schémas, routing, recherche, outils…
├── .github/workflows/
│   └── pages.yml             # déploiement GitHub Pages
├── .gitignore
└── README.md
```

### Rôle de chaque fichier JS

- **`data.js` — le contenu source, uniquement en français.** Tableaux
  `EXERCICES`, `TECHNIQUES`, `TACTIQUE`, `POSTES`, `FORMATIONS`, `REGLES`,
  `ARBITRAGE`, `LEXIQUE`, `CISGO`, `INFO` (+ le helper `cisgoPlayer`). C'est la
  **source de vérité** ; données sérialisables (objets / chaînes / tableaux).
- **`i18n.js` — tout le multilingue.** État des langues (`LANG`, `LANGS`),
  dictionnaire d'interface `UI` (fr/en), tables de libellés (`THEME_LABELS`,
  `NIVEAU_LABELS`, `SECTION_LABELS_I18N`, `INFO_META_EN`, `HOME_DESC_EN`),
  **traductions de contenu `CONTENT_EN`**, et les résolveurs (`T`, `L`,
  `setLang`, `applyStaticI18n`, `applyLang`…).
- **`app.js` — la logique applicative.** Rendu des vues et des schémas
  (`courtSVG`, `animateSchema`), routing SPA par hash, recherche globale, outils,
  favoris, séance, thème, pseudo-auth.

**Ordre de chargement (imposé)** : `styles.css` dans le `<head>` ; puis en fin de
`<body>` : `data.js` → `i18n.js` → `app.js`.

### Modèle i18n

Le **français est la source**, jamais modifié par la couche anglaise. Les
traductions vivent à part : `UI` pour l'interface, `CONTENT_EN` pour le contenu
(calé sur le `nom` français de chaque élément). Au rendu, `L(item, section)`
fusionne l'item FR avec sa traduction si la langue courante n'est pas le FR.
Ajouter une langue = une entrée dans `LANGS`, un bloc dans `UI`, les tables de
libellés et un `CONTENT_<xx>`.

### Persistance (localStorage, par appareil)

`cv-lang` (langue), `cv-theme` (`auto`|`light`|`dark`), `cv-favs` (favoris),
`cv-seance` (séance en cours), `cv-view` (grille/liste), `cv-auth` (Cisgo).
Les clés de favoris / séance / ancres d'URL utilisent le **nom français** (stable).

---

## Ajouter ou modifier du contenu

1. Éditer le tableau concerné dans **`public/data.js`**, **en français**
   (c'est la source).
2. Ajouter la **traduction anglaise** dans le bloc `CONTENT_<section>` de
   **`public/i18n.js`**, calée sur le `nom` FR (ou `t` pour le lexique).
3. Vérifier **FR et EN** en ouvrant `public/index.html`.

> Règle d'or : **tout ajout ou retrait de texte se fait dans les deux langues**.
> Pour les schémas, les zones (`type:"zone"`) sont **toujours carrées** — jamais
> d'anneaux / cerceaux, même quand c'est un cerceau dans la réalité.

---

## Déploiement — GitHub Pages

Le workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) publie le
contenu de `public/` **à chaque push sur `main`**, via GitHub Actions.

**À faire une seule fois** : *Settings → Pages → Source =* **« GitHub Actions »**.
Ensuite, chaque push déploie automatiquement ; suivre l'exécution dans l'onglet
**Actions**. Le site est servi sur `https://<utilisateur>.github.io/<dépôt>/`.

---

## Invariants à préserver (ne pas casser)

- **FR = langue source**, jamais modifiée par la couche EN.
- **Tout texte ajouté/retiré l'est dans toutes les langues** (FR + EN).
- **Clés FR stables** pour favoris / séance / ancres d'URL (ne pas les traduire).
- **Zones de schéma toujours carrées** (`type:"zone"`).
- **`file://` doit continuer à fonctionner** : `<link>` et `<script src>`
  classiques, **pas de `type="module"`, pas de `fetch` de JSON** ; `data.js` et
  `i18n.js` déclarent des **globales**.
- **Respecter `prefers-reduced-motion`** pour toutes les animations.

---

## Sécurité / confidentialité

GitHub Pages est **public** sur un dépôt public. La pseudo-connexion de l'app
(section « Cisgo ») masque une section côté affichage mais **n'est pas une
sécurité** : tout le HTML, le JS et les données sont téléchargeables. **Ne jamais
y mettre de contenu réellement sensible.**
