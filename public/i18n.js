/* i18n.js — langues : UI, libellés, traductions CONTENT_EN, résolveurs. Chargé après data.js.
   Fichier généré par découpage de l'app monofichier.
   Globales classiques (pas de module ES, pas de fetch) — ouverture file:// OK. */


/* =========================================================================
   i18n — français (langue par défaut) + anglais, extensible à d'autres langues.
   Les données FR d'origine ne sont PAS modifiées : les traductions vivent dans
   UI (interface) et CONTENT_EN (contenu), et un résolveur fusionne au rendu.
   Pour ajouter une langue : ajouter une entrée dans LANGS, un bloc dans UI,
   les tables THEME/NIVEAU/SECTION/INFO_META/HOME et un CONTENT_<xx>.
   ========================================================================= */
const LANGS=[{code:"fr",label:"Français",short:"FR"},{code:"en",label:"English",short:"EN"}];
let LANG=(function(){try{const s=localStorage.getItem("cv-lang");return LANGS.some(l=>l.code===s)?s:"fr";}catch(e){return "fr";}})();

const UI={
 fr:{
  brand_name:"Carnet Volley", brand_sub:"Bibliothèque d'exercices", home_label:"Accueil",
  nav_regles:"Règles", nav_postes:"Postes", nav_formations:"Formations", nav_tactique:"Tactique",
  nav_techniques:"Techniques", nav_exercices:"Exercices", nav_arbitrage:"Arbitrage", nav_lexique:"Lexique",
  nav_outils:"Outils", nav_cisgo:"Cisgo 2026-2027",
  seance:"Séance", seance_open:"Ouvrir la séance", seance_of:"Séance du", seance_clear:"Vider",
  seance_empty:"Aucun exercice dans la séance.<br>Ajoute-les depuis les cartes ou les fiches.",
  view:"Vue", view_list:"Vue liste", view_grid:"Vue grille", view_list_t:"Vue liste compacte", view_grid_t:"Vue grille",
  theme:"Thème", theme_t:"Thème clair / sombre",
  login:"Connexion", logout:"Déconnexion", login_t:"Se connecter", logout_t:"Se déconnecter",
  menu:"Menu", lang_t:"Langue",
  search_ph:"Rechercher…", search_page_ph:"Rechercher dans tout le carnet…", search_title:"Recherche",
  search_empty:"Tape un mot-clé pour chercher dans les exercices, techniques, règles, lexique…",
  search_none:q=>`Aucun résultat pour « ${q} ».`,
  auth_title:"Connexion", auth_close:"Fermer", auth_user:"Identifiant", auth_pass:"Mot de passe",
  auth_err:"Identifiant ou mot de passe incorrect.", auth_submit:"Se connecter",
  intro_h1:"Exercices d'entraînement",
  intro_p:"Filtre selon le thème travaillé, l'effectif dont tu disposes, le niveau ou la durée, puis ouvre une fiche : un exercice par page, avec son schéma de terrain.",
  favoris:"★ Favoris", reset:"Réinitialiser les filtres",
  f_theme:"Thème / mouvement travaillé", f_search:"Recherche", f_search_ph:"Nom, objectif, mot-clé…",
  f_players:"Effectif disponible", f_players_hint:"joueurs — n'affiche que les exercices jouables à cet effectif",
  f_niveau:"Niveau", f_duree:"Durée",
  empty_b:"Aucun exercice ne correspond", empty_p:"Élargis les filtres ou réinitialise.",
  howto_sum:"Comment ajouter un exercice (document évolutif)",
  back_ex:"← Retour aux exercices", prev:"Précédent", next:"Suivant →",
  home_explore:"Explorer",
  home_hero_p:"Le carnet d'entraînement du coach : exercices, techniques, tactique et références du volley-ball, réunis au même endroit.",
  home_section:"Section", home_open:"Ouvrir →",
  credits1:"Conçu et développé par <b>Victor Coleau</b>.",
  credits2:"Contenus rédigés d'après des sources reconnues (FIVB, The Art of Coaching, Gold Medal Squared, Volleyball Canada…).",
  footer:"Créé par Victor Coleau",
  min:"min", exercise:"Exercice",
  players_range:(a,b)=>`${a}–${b} joueurs`, players_min:a=>`${a}+ joueurs`,
  ex_count:n=>n+(n>1?" exercices":" exercice"),
  m_objectif:"Objectif", m_deroule:"Déroulé", m_consignes:"Points clés de coaching", m_variantes:"Variantes",
  m_materiel:"Matériel", m_credit:"Crédit", credit_by:"Exercice proposé par",
  add:"+ Ajouter", added:"✓ Ajouté",
  legend_a:"Équipe / rôle A", legend_b:"Équipe / rôle B", legend_c:"Équipe / rôle C",
  legend_ball:"Ballon", legend_move:"Déplacement", legend_traj:"Trajectoire balle",
  lvl_beg:"Débutant", lvl_int:"Intermédiaire", lvl_adv:"Avancé", mistakes:"Erreurs fréquentes",
  lex_search_ph:"Rechercher un terme…", lex_empty:q=>`Aucun terme ne correspond à « ${q} ».`,
  tool_start:"Démarrer", tool_pause:"Pause", tool_resume:"Reprendre", tool_lap:"Tour", tool_reset:"Remettre à zéro",
  tool_half:"Demi-terrain", tool_libero:"Libéro", tool_replace:"Replacer", tool_prompt:"Rôle du joueur :",
  locale:"fr-FR"
 },
 en:{
  brand_name:"Volley Notebook", brand_sub:"Drill library", home_label:"Home",
  nav_regles:"Rules", nav_postes:"Positions", nav_formations:"Systems", nav_tactique:"Tactics",
  nav_techniques:"Techniques", nav_exercices:"Drills", nav_arbitrage:"Refereeing", nav_lexique:"Glossary",
  nav_outils:"Tools", nav_cisgo:"Cisgo 2026-2027",
  seance:"Session", seance_open:"Open the session", seance_of:"Session of", seance_clear:"Clear",
  seance_empty:"No drills in the session yet.<br>Add them from the cards or the detail pages.",
  view:"View", view_list:"List view", view_grid:"Grid view", view_list_t:"Compact list view", view_grid_t:"Grid view",
  theme:"Theme", theme_t:"Light / dark theme",
  login:"Log in", logout:"Log out", login_t:"Log in", logout_t:"Log out",
  menu:"Menu", lang_t:"Language",
  search_ph:"Search…", search_page_ph:"Search the whole notebook…", search_title:"Search",
  search_empty:"Type a keyword to search drills, techniques, rules, glossary…",
  search_none:q=>`No result for “${q}”.`,
  auth_title:"Log in", auth_close:"Close", auth_user:"Username", auth_pass:"Password",
  auth_err:"Incorrect username or password.", auth_submit:"Log in",
  intro_h1:"Training drills",
  intro_p:"Filter by the skill worked on, the number of players you have, the level or the duration, then open a card: one drill per page, with its court diagram.",
  favoris:"★ Favorites", reset:"Reset filters",
  f_theme:"Skill / movement worked on", f_search:"Search", f_search_ph:"Name, goal, keyword…",
  f_players:"Players available", f_players_hint:"players — only shows drills playable with this number",
  f_niveau:"Level", f_duree:"Duration",
  empty_b:"No drill matches", empty_p:"Widen the filters or reset.",
  howto_sum:"How to add a drill (living document)",
  back_ex:"← Back to drills", prev:"Previous", next:"Next →",
  home_explore:"Explore",
  home_hero_p:"The coach's training notebook: drills, techniques, tactics and volleyball references, all in one place.",
  home_section:"Section", home_open:"Open →",
  credits1:"Designed and developed by <b>Victor Coleau</b>.",
  credits2:"Content written from recognized sources (FIVB, The Art of Coaching, Gold Medal Squared, Volleyball Canada…).",
  footer:"Created by Victor Coleau",
  min:"min", exercise:"Drill",
  players_range:(a,b)=>`${a}–${b} players`, players_min:a=>`${a}+ players`,
  ex_count:n=>n+(n>1?" drills":" drill"),
  m_objectif:"Goal", m_deroule:"How it runs", m_consignes:"Key coaching points", m_variantes:"Variations",
  m_materiel:"Equipment", m_credit:"Credit", credit_by:"Drill submitted by",
  add:"+ Add", added:"✓ Added",
  legend_a:"Team / role A", legend_b:"Team / role B", legend_c:"Team / role C",
  legend_ball:"Ball", legend_move:"Movement", legend_traj:"Ball path",
  lvl_beg:"Beginner", lvl_int:"Intermediate", lvl_adv:"Advanced", mistakes:"Common mistakes",
  lex_search_ph:"Search for a term…", lex_empty:q=>`No term matches “${q}”.`,
  tool_start:"Start", tool_pause:"Pause", tool_resume:"Resume", tool_lap:"Lap", tool_reset:"Reset",
  tool_half:"Half court", tool_libero:"Libero", tool_replace:"Reset positions", tool_prompt:"Player role:",
  locale:"en-GB"
 }
};
function T(k){ const d=UI[LANG]&&UI[LANG][k]; return d!==undefined?d:UI.fr[k]; }

/* libellés traduisibles mais conservés comme clés internes côté données */
const THEME_LABELS={fr:{}, en:{"Échauffement":"Warm-up","Physique":"Fitness","Service":"Serving","Réception":"Reception","Passe":"Setting","Attaque":"Attacking","Bloc":"Blocking","Défense":"Defense","Jeu":"Game play"}};
const NIVEAU_LABELS={fr:{}, en:{"Débutant":"Beginner","Intermédiaire":"Intermediate","Confirmé":"Advanced"}};
const SECTION_LABELS_I18N={fr:{}, en:{accueil:"Home",cisgo:"Cisgo",regles:"Rules",postes:"Positions",formations:"Systems",tactique:"Tactics",techniques:"Techniques",exercices:"Drills",arbitrage:"Refereeing",lexique:"Glossary",outils:"Tools"}};
function themeLabel(t){ const m=THEME_LABELS[LANG]; return (m&&m[t])||t; }
function niveauLabel(n){ const m=NIVEAU_LABELS[LANG]; return (m&&m[n])||n; }
function sectionLabel(k){ const m=SECTION_LABELS_I18N[LANG]; return (m&&m[k])||SECTION_LABELS[k]||k; }

/* méta des sections INFO (titre, intro, eyebrow, bouton retour, CTA carte) en anglais */
const INFO_META_EN={
  cisgo:{eyebrow:"Rotation", back:"Back to rotations", cardcta:"See the diagram →", title:"Cisgo — team reception", intro:"The team's serve-receive setup (P-4-3 system, 3+1 reception) across the 6 rotations. Blue = back row, red = front row."},
  regles:{eyebrow:"Rule", back:"Back to rules", cardcta:"See →", title:"Rules of volleyball", intro:"The essential rules of the game, from court dimensions to the libero. Tap a topic for the detail."},
  postes:{eyebrow:"Position", back:"Back to positions", cardcta:"See →", title:"The positions", intro:"The roles on court: setter, middle, opposite, outside hitter, libero. Tap a position for the detail."},
  formations:{eyebrow:"System", back:"Back to systems", cardcta:"See →", title:"The systems", intro:"The 6-player systems (4-2, 5-1, 6-2) and the reduced 4- or 5-player formats. Tap for the detail."},
  tactique:{eyebrow:"Tactics", back:"Back to tactics", cardcta:"See →", title:"Team tactics", intro:"How the team plays together: phases of play, reception, defense, attacking combinations and transition. Tap for the detail."},
  techniques:{eyebrow:"Technique", back:"Back to techniques", cardcta:"3 levels →", title:"Volleyball techniques", intro:"The fundamental skills explained level by level — beginner, intermediate, advanced. Tap a technique for the detail."},
  arbitrage:{title:"Refereeing — the official signals", intro:"The main signals of the first referee, grouped by type of decision (source: FIVB / CEV)."},
  lexique:{title:"Volleyball glossary", intro:"The vocabulary of volleyball, from play to systems. Use the search box to filter."},
  outils:{eyebrow:"Tool", back:"Back to tools", cardcta:"Open →", title:"Tools", intro:"Handy tools for training."}
};
function infoMeta(key){ const m=INFO[key]; if(LANG==="fr") return m; const ov=INFO_META_EN[key]; return ov?Object.assign({},m,ov):m; }

/* descriptions de la page d'accueil en anglais */
const HOME_DESC_EN={
  regles:"The essential rules of the game.",
  postes:"Each player's role on the court.",
  formations:"The 6-player systems (4-2, 5-1, 6-2) and reduced formats.",
  tactique:"Phases of play, reception, defense and attacking combinations.",
  techniques:"The fundamental skills explained level by level.",
  exercices:"The filterable library: one drill per page, with its court diagram.",
  arbitrage:"The official signals of the first referee.",
  lexique:"The vocabulary of volleyball, A to Z.",
  outils:"Practical tools for training."
};
function homeDesc(k){ if(LANG!=="fr"&&HOME_DESC_EN[k]) return HOME_DESC_EN[k]; const l=HOME_LINKS.find(x=>x.key===k); return l?l.desc:""; }

/* contenu traduit (rempli plus bas). Résolveur : fusionne l'item FR avec sa
   traduction. Les clés (favoris, séance, ancres) restent toujours en FR. */
const CONTENT_EN={};
const TR={en:CONTENT_EN};
function L(item, section){
  if(LANG==="fr"||!item) return item;
  const tbl=TR[LANG]&&TR[LANG][section]; if(!tbl) return item;
  const key=section==="lexique"?item.t:item.nom;
  const ov=tbl[key];
  return ov?Object.assign({},item,ov):item;
}

/* ---- application de la langue ---- */
function applyStaticI18n(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{ const v=T(el.getAttribute("data-i18n")); if(v!=null) el.innerHTML=v; });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{ const v=T(el.getAttribute("data-i18n-ph")); if(v!=null) el.setAttribute("placeholder",v); });
  document.querySelectorAll("[data-i18n-title]").forEach(el=>{ const v=T(el.getAttribute("data-i18n-title")); if(v!=null) el.title=v; });
  document.querySelectorAll("[data-i18n-al]").forEach(el=>{ const v=T(el.getAttribute("data-i18n-al")); if(v!=null) el.setAttribute("aria-label",v); });
}
function updateSeanceDate(){
  const el=document.getElementById("snDate"); if(!el) return;
  try{
    el.textContent=new Date().toLocaleDateString(T('locale'),{weekday:"long",day:"numeric",month:"long",year:"numeric"});
  }catch(e){
    el.textContent=new Date().toLocaleDateString();
  }
}
function buildLangSel(){
  const el=document.getElementById("langSel"); if(!el) return;
  el.innerHTML="";
  LANGS.forEach(l=>{
    const b=document.createElement("button"); b.className="lang-opt"; b.type="button"; b.dataset.code=l.code;
    b.textContent=l.short; b.title=l.label; b.setAttribute("aria-label",l.label);
    b.addEventListener("click",()=>{ setLang(l.code); closeTools(); });
    el.appendChild(b);
  });
  updateLangSel();
}
function updateLangSel(){ document.querySelectorAll("#langSel .lang-opt").forEach(b=>b.setAttribute("aria-current", b.dataset.code===LANG?"true":"false")); }
function rerenderCurrent(){
  const iv=document.body.dataset.iview;
  if(iv==="list"){ if(curSection) renderInfoList(curSection); }
  else if(iv==="detail"){ if(curSection&&curInfoIdx>=0) renderInfoDetail(curSection,curInfoIdx); }
  else if(iv==="search"){ const pi=document.getElementById("searchPageInput"); renderSearchResults(pi?pi.value:""); }
  else if(iv==="home"){ /* renderHome déjà appelé par applyLang */ }
  else if(document.body.dataset.view==="detail"){ if(currentPos>=0) showCurrent(); }
  else render();
}
function applyLang(){
  document.documentElement.lang=LANG;
  applyStaticI18n();
  buildFilters();
  applyView(); applyAuth();
  updateLangSel();
  renderHome(); renderSeanceList(); updateSeanceStats(); updateSeanceDate();
  rerenderCurrent();
  updateNavLabel();
}
function setLang(code){ if(!LANGS.some(l=>l.code===code)||code===LANG) return; LANG=code; try{localStorage.setItem("cv-lang",code);}catch(e){} applyLang(); }
function initLang(){ buildLangSel(); applyStaticI18n(); document.documentElement.lang=LANG; updateSeanceDate(); }

/* ===CONTENT_EN_TABLES=== (les tables de traduction du contenu sont insérées ici) */
CONTENT_EN.lexique={
 "Ace":{t:"Ace", d:"Point scored directly off the serve, without the opponent passing the ball cleanly."},
 "Aile / Ailier":{t:"Wing / Outside hitter", d:"Attacker who plays on the sides of the net (zone 4 on the left, zone 2 on the right); see outside hitter."},
 "Amorti":{t:"Roll shot (off-speed)", d:"Ball pushed softly with the flat of the hand into an open area, instead of a spike."},
 "Antenne (mire)":{t:"Antenna", d:"Vertical rod fixed to the net above each sideline; the ball must cross between the two antennas."},
 "Attaque arrière":{t:"Back-row attack", d:"Attack launched from the back zone, with the take-off behind the 3 m line (e.g. the “pipe”)."},
 "Bloc (contre)":{t:"Block", d:"Jumping at the net, hands above it, to stop or slow the opponent's attack."},
 "Break point":{t:"Break point", d:"Point won by the serving team: it keeps the serve and takes the lead (“breaker”); this is phase K2."},
 "Central":{t:"Middle blocker", d:"Player at the middle of the net (zone 3), specialist of blocking and quick attacks."},
 "Couverture":{t:"Hitter coverage", d:"Getting into position around your own attacker to retrieve a ball blocked back by the opponent."},
 "Décalé":{t:"Shoot / shifted quick", d:"Combination where an attacker hits just beside the middle to beat the block."},
 "Défense":{t:"Defense (dig)", d:"Retrieving an opponent's attack to put the ball back in play."},
 "Feinte (tip)":{t:"Tip", d:"Ball pushed with the fingertips over or beside the block, into an open space."},
 "Fixation":{t:"Holding the block", d:"Drawing the block onto one attacker (often the middle) to free up another attacker."},
 "K1 (complexe 1)":{t:"K1 (side-out phase)", d:"Reception-attack phase: pass the serve then attack to side out."},
 "K2 (complexe 2)":{t:"K2 (break phase)", d:"Defense–counter-attack phase after your own serve (break)."},
 "Libéro":{t:"Libero", d:"Back-row player specialized in defense and reception, in a different jersey; cannot attack above the net or block."},
 "Manchette":{t:"Forearm pass (bump)", d:"Contact with the two joined forearms, used in reception and defense."},
 "Mi-temps (tempo 2)":{t:"Second tempo", d:"Medium-speed set, faster than a high ball but slower than a quick ball."},
 "Passe (2e touche)":{t:"Set (2nd contact)", d:"The contact that builds the attack, usually with both hands above the forehead."},
 "Passeur":{t:"Setter", d:"Playmaker who distributes the balls to the attackers; almost always plays the 2nd contact."},
 "Pénétration":{t:"Setter penetration", d:"The back-row setter running up to the net to set (5-1 and 6-2 systems)."},
 "Pipe":{t:"Pipe", d:"Back-row attack played through the middle (zone 6), on a fast tempo."},
 "Plongeon":{t:"Dive", d:"Emergency defensive move: diving forward to retrieve a low ball."},
 "Pointu (opposé)":{t:"Opposite", d:"Big attacker placed opposite the setter in the rotation, plays on the right (zone 2 and zone 1)."},
 "Position (faute de)":{t:"Positional fault (overlap)", d:"Failure to respect the line-up at the moment of the serve (overlap)."},
 "Réception":{t:"Serve-receive", d:"First contact on the opponent's serve, most often with a forearm pass."},
 "Réceptionneur-attaquant":{t:"Outside hitter", d:"Complete left-side player: attacks in zone 4 and handles a large share of the reception."},
 "Rotation":{t:"Rotation", d:"The 6 players shifting one position clockwise each time the serve is won."},
 "Roulade":{t:"Roll", d:"Defensive move: play the ball then roll on the ground to cushion the fall and get up quickly."},
 "Service":{t:"Serve", d:"Putting the ball in play from behind the end line; can be float, topspin or jump."},
 "Service flottant":{t:"Float serve", d:"Serve hit without spin, whose “floating” trajectory is hard to read."},
 "Service sauté":{t:"Jump serve", d:"Serve hit in the air after an approach, for more power."},
 "Set (manche)":{t:"Set (game)", d:"Part of a match played to 25 points (15 in the tie-break), with a 2-point margin."},
 "Side-out (côté)":{t:"Side-out", d:"Winning the point when the opponent serves, to win back the serve; this is phase K1."},
 "Smash":{t:"Spike", d:"Attack hit hard in the air after an approach."},
 "Tempo (1/2/3)":{t:"Tempo (1/2/3)", d:"Speed of the set: fast (1), medium (2) or high (3)."},
 "Tie-break":{t:"Tie-break", d:"Decisive 5th set, played to 15 points with a 2-point margin."},
 "Touche de balle":{t:"Contact (hit)", d:"One of the 3 contacts allowed per team; the block does not count as a contact."},
 "Zone de conflit":{t:"Seam", d:"The gap between two passers/defenders, where to aim to create hesitation."},
 "Zone d'attaque (ligne des 3 m)":{t:"Front zone (3 m line)", d:"Front area between the net and the 3-metre line; limits back-row attacks."},
 "Balle de set / de match":{t:"Set / match point", d:"Point that can close out the set (the 25th, by 2 points; 15 in the tie-break) or the match."},
 "Bande (du filet)":{t:"Net tape", d:"The top of the net (white band); a ball that touches it then drops over into the opponent's court stays in play."},
 "Carton (jaune / rouge)":{t:"Card (yellow / red)", d:"Referee sanctions: yellow = warning, red = penalty (point and serve to the opponent)."},
 "Contre-attaque":{t:"Counter-attack", d:"Attack led right after defending the opponent's attack (K2 phase)."},
 "Croix":{t:"Cross (X)", d:"Combination where two attackers' approaches cross to beat the block."},
 "Deuxième main":{t:"Second-ball set", d:"A set made by a player other than the setter, often as back-up on a poor pass."},
 "Faute de filet":{t:"Net touch", d:"Touching the net during the action of playing the ball; it is a fault."},
 "Faute de pied":{t:"Foot fault", d:"On the serve, touching or crossing the end line before striking the ball."},
 "Franchissement":{t:"Centre-line fault", d:"Entering the opponent's court (under the net) and interfering with them; it is a fault."},
 "Passe arrière":{t:"Back set", d:"A set delivered behind the setter, without turning, to feed an attacker behind them."},
 "Passe en suspension (jump set)":{t:"Jump set", d:"A set made while jumping, to speed up the play and threaten the 2nd ball."},
 "Relance":{t:"Dig/cover-up ball", d:"Returning a dug or difficult ball, high and towards the middle, to rebuild the play."},
 "Renvoi (free ball)":{t:"Free ball", d:"A ball returned by the opponent without an attack (an “easy” ball) that the team must exploit."},
 "Roulette":{t:"Wipe / roll shot", d:"A topspin fingertip shot that drops the ball short, over the block."},
 "Service lifté (topspin)":{t:"Topspin serve", d:"Serve hit with forward spin, on a dropping trajectory."},
 "Sortie (touche-dehors)":{t:"Tool (wipe off the block)", d:"Attack that uses the blockers' hands to send the ball out of the opponent's court: point for the attacker."},
 "Temps mort":{t:"Time-out", d:"A 30-second break requested by a team (two per set) to rest or break the rhythm."},
 "Transition":{t:"Transition", d:"Moving from defense to attack: pulling off the net and taking the approach to counter-attack."},
 "Zones (1 à 6)":{t:"Zones (1 to 6)", d:"Numbering of the positions: 1 back right, 2 front right, 3 front centre, 4 front left, 5 back left, 6 back centre."}
};
CONTENT_EN.arbitrage={
 "Autorisation de servir":{cat:"Starting play", nom:"Authorization to serve", geste:"The referee moves the hand toward the side of the team that must serve, after the whistle."},
 "Équipe au service":{cat:"Starting play", nom:"Team to serve", geste:"Arm extended toward the side of the team that has the serve."},
 "Balle non lancée / lâchée au service":{cat:"Starting play", nom:"Ball not tossed / released at serve", geste:"Arm raised and extended, palm up — the server is granted a new serve."},
 "Point accordé":{cat:"Point decision", nom:"Point awarded", geste:"Raise the hand (bent arm) on the side of the team that scores."},
 "Ballon « dedans » (in)":{cat:"Point decision", nom:"Ball “in”", geste:"Arm and fingers extended pointing down, toward the court."},
 "Ballon « dehors » (out)":{cat:"Point decision", nom:"Ball “out”", geste:"Forearms raised vertically, hands open, palms toward yourself."},
 "Ballon touché":{cat:"Point decision", nom:"Ball touched", geste:"Brush the palm of one hand over the fingers of the other held vertical — the ball was touched."},
 "Fin du set ou du match":{cat:"Point decision", nom:"End of set or match", geste:"Forearms crossed in front of the chest, hands open."},
 "Balle tenue / accompagnée":{cat:"Playing faults", nom:"Held / carried ball", geste:"Slowly raise the forearm, palm up."},
 "Double touche":{cat:"Playing faults", nom:"Double contact", geste:"Raise two spread fingers."},
 "Quatre touches":{cat:"Playing faults", nom:"Four hits", geste:"Raise four spread fingers."},
 "Filet touché / faute de service au filet":{cat:"Playing faults", nom:"Net touch / serve into the net", geste:"Touch the top edge of the net, on the side of the team at fault (matching hand)."},
 "Franchissement au-dessus du filet":{cat:"Playing faults", nom:"Reaching over the net", geste:"Hand held above the net, palm down."},
 "Pénétration sous le filet / ligne centrale":{cat:"Playing faults", nom:"Penetration under the net / centre line", geste:"Point to the centre line or the exact spot of the fault."},
 "Faute d'attaque":{cat:"Playing faults", nom:"Attack-hit fault", geste:"Sweep the forearm down, hand open (illegal attack: back-row, libero, on the serve…)."},
 "Faute de bloc / écran":{cat:"Playing faults", nom:"Blocking / screen fault", geste:"Both arms raised vertically, palms forward."},
 "Faute de position / rotation":{cat:"Playing faults", nom:"Positional / rotation fault", geste:"Circular motion of the pointed index finger."},
 "Double faute / on rejoue":{cat:"Playing faults", nom:"Double fault / replay", geste:"Raise both thumbs up — the point is replayed."},
 "Temps mort":{cat:"Interruptions", nom:"Time-out", geste:"Palm of one hand placed on the fingers of the other (a “T”), then point to the team requesting."},
 "Remplacement":{cat:"Interruptions", nom:"Substitution", geste:"Rotate the forearms around each other."},
 "Changement de camp":{cat:"Interruptions", nom:"Change of court", geste:"Hands swap position, one in front of the other, turning around the body."},
 "Demande de vidéo (challenge)":{cat:"Interruptions", nom:"Video request (challenge)", geste:"The hands draw a rectangle in the air."},
 "Avertissement de retard":{cat:"Sanctions", nom:"Delay warning", geste:"Yellow card shown against the wrist."},
 "Pénalité de retard":{cat:"Sanctions", nom:"Delay penalty", geste:"Red card shown against the wrist — point and serve to the opponent."},
 "Avertissement pour conduite":{cat:"Sanctions", nom:"Misconduct warning", geste:"Yellow card shown (on its own)."},
 "Pénalité pour conduite":{cat:"Sanctions", nom:"Misconduct penalty", geste:"Red card shown (on its own) — point and serve to the opponent."},
 "Expulsion":{cat:"Sanctions", nom:"Expulsion", geste:"Yellow and red cards shown together in the same hand."},
 "Disqualification":{cat:"Sanctions", nom:"Disqualification", geste:"Yellow and red cards shown separately, one in each hand."}
};
CONTENT_EN.outils={
 "Chronomètre":{nom:"Stopwatch", resume:"A stopwatch with lap recording (split times)."},
 "Constructeur de composition":{nom:"Line-up builder", resume:"Place your players on the court by drag and drop."}
};
CONTENT_EN.cisgo={
 "Rotation P1":{nom:"Rotation P1", categorie:"Setter in zone 1",
   resume:"Trio Pt · R2 · R1 at 6 m, C2 as the “+1” deep. P comes up from back-right, C1 at the net.",
   schemaCap:"P1 — trio Pt·R2·R1 on the 6 m line, C2 covering deep; P (setter) comes up from back-right to the net, C1 at the net in the middle.",
   blocks:[
     {label:"Reception (3+1)",points:["Trio at 6 m: Pt (left), R2 (centre), R1 (right).","“+1” deep: C2."]},
     {label:"Non-passers",points:["P (setter): back-right (zone 1), runs to the net to set.","C1: at the net, in the middle."]}]},
 "Rotation P2":{nom:"Rotation P2", categorie:"Setter in zone 2",
   resume:"Trio R1 · R2 · C2 at 6 m, Pt as the “+1” deep (the opposite drops back). C1 and P at the net.",
   schemaCap:"P2 — special case: it is Pt (the opposite) who drops to the “+1” deep, and C2 joins the receiving trio.",
   blocks:[
     {label:"Reception (3+1)",points:["Trio at 6 m: R1 (left), R2 (centre), C2 (right).","“+1” deep: Pt.","Special case: here the “+1” is Pt, not C2."]},
     {label:"Non-passers",points:["C1: at the net, on the left.","P (setter): at the net, on the right."]}]},
 "Rotation P3":{nom:"Rotation P3", categorie:"Setter in zone 3",
   resume:"Trio R1 · Pt · R2 at 6 m, C2 as the “+1” deep. P and C1 at the net.",
   schemaCap:"P3 — trio R1·Pt·R2 at 6 m, C2 as the “+1” deep; P at the net in the middle, C1 at the net on the right.",
   blocks:[
     {label:"Reception (3+1)",points:["Trio at 6 m: R1 (left), Pt (centre), R2 (right).","“+1” deep: C2."]},
     {label:"Non-passers",points:["P (setter): at the net, in the middle.","C1: at the net, on the right."]}]},
 "Rotation P4":{nom:"Rotation P4", categorie:"Setter in zone 4",
   resume:"Trio R1 · R2 · Pt at 6 m, C2 as the “+1” deep. P and C1 at the net.",
   schemaCap:"P4 — trio R1·R2·Pt at 6 m, C2 as the “+1” deep; P at the net on the left, C1 at the net in the middle.",
   blocks:[
     {label:"Reception (3+1)",points:["Trio at 6 m: R1 (left), R2 (centre), Pt (right).","“+1” deep: C2."]},
     {label:"Non-passers",points:["P (setter): at the net, on the left.","C1: at the net, in the middle."]}]},
 "Rotation P5":{nom:"Rotation P5", categorie:"Setter in zone 5",
   resume:"Trio R1 · R2 · Pt at 6 m, C2 as the “+1” deep. C1 at the net, P at back-left.",
   schemaCap:"P5 — trio R1·R2·Pt at 6 m, C2 as the “+1” deep; C1 at the net on the left, P comes up from back-left to the net.",
   blocks:[
     {label:"Reception (3+1)",points:["Trio at 6 m: R1 (left), R2 (centre), Pt (right).","“+1” deep: C2."]},
     {label:"Non-passers",points:["C1: at the net, on the left.","P (setter): back-left, runs to the net to set."]}]},
 "Rotation P6":{nom:"Rotation P6", categorie:"Setter in zone 6",
   resume:"Trio R1 · R2 · C1 at 6 m (C1 receives), C2 as the “+1” deep. Pt comes up to the net, P in the back row.",
   schemaCap:"P6 — special case: C1 joins the receiving trio (on the right) and Pt does not receive (he comes up to the net). C2 as the “+1” deep.",
   blocks:[
     {label:"Reception (3+1)",points:["Trio at 6 m: R1 (left), R2 (centre), C1 (right).","“+1” deep: C2.","Special case: C1 receives, Pt does not."]},
     {label:"Non-passers",points:["P (setter): back-centre, runs to the net to set.","Pt: comes up to the net."]}]}
};
CONTENT_EN.techniques={
 "Position et déplacements":{nom:"Stance and movement", categorie:"Basics",
   resume:"The ready stance and the footwork that come before every skill.",
   niveaux:{
     debutant:{intro:"Find a stable, balanced stance, ready to move.",points:[
       "Feet a little wider than the shoulders, weight on the balls of the feet.",
       "Knees bent, trunk leaning slightly forward, arms in front of you.",
       "Eyes on the play, never frozen in place.",
       "Short moves with shuffle steps, without crossing the feet."]},
     intermediaire:{intro:"Reposition quickly and arrive balanced before playing the ball.",points:[
       "Link the move then a stop (braking on two feet) before contact.",
       "Over long distances: run, then finish with shuffle steps to stabilize.",
       "Shoulders facing the target at the moment of playing.",
       "Anticipate by reading the ball handler to leave at the right time."]},
     avance:{intro:"Explosive movement and reading to always be ahead of the ball.",points:[
       "Split-step (small hop) just before the opponent's hit to react both ways.",
       "Choose the move by the distance: shuffle steps, running, cross-over steps.",
       "Keep a low centre of gravity on fast trajectories.",
       "Separate upper and lower body: the feet set up while the arms prepare the skill."]}
   },
   erreurs:["Standing upright, legs straight","Playing the ball off balance or while moving","Crossing the feet on short moves"]},
 "La réception (manchette)":{nom:"Serve-receive (forearm pass)", categorie:"Reception",
   resume:"Controlling the opponent's serve with a forearm pass — the first contact of the build-up.",
   niveaux:{
     debutant:{intro:"Build a stable platform and play the ball with the legs.",points:[
       "Ready stance: feet a little wider than the shoulders, knees bent, trunk slightly forward, arms relaxed in front of you.",
       "Hands joined, arms straight forming a flat platform; elbows away from the stomach, arms about 90° from the trunk.",
       "Contact on the two forearms, just above the wrists.",
       "Push toward the target with the legs, without swinging the arms."]},
     intermediaire:{intro:"Angle the platform and get behind the ball.",points:[
       "Read the server early to move the right way; move on a horizontal plane (little up-and-down).",
       "Brake on two feet, the foot on the target side slightly ahead, weight transferred forward at contact.",
       "The platform angle is the most important thing: it is what sends the ball to the setter.",
       "Shoulders aimed at the target, a short controlled motion rather than a big arm swing."]},
     avance:{intro:"Precise reception under pressure, on a powerful or float serve.",points:[
       "Fine-tune the platform to the speed and spin (a float that moves, a jump serve).",
       "Play off-centre balls by angling a single forearm (lateral pass), high shoulder on the opposite side.",
       "Cushion powerful serves by slightly relaxing the arms at contact (a “soft” pass).",
       "Share the zones between 2 or 3 passers: the ball goes to whoever is closest to the target, constant communication."]}
   },
   erreurs:["Swinging the arms instead of pushing with the legs","Poorly angled platform","Leaning back on the heels instead of moving forward under the ball"]},
 "La passe à deux mains":{nom:"The overhead set", categorie:"Setting",
   resume:"The overhead set above the forehead — the setter's skill to build the attack.",
   niveaux:{
     debutant:{intro:"Form a “window” with the hands and play the ball high in front of the forehead.",points:[
       "Get under the ball, feet slightly staggered (strong-hand foot ahead), knees bent.",
       "Hands above the forehead, fingers spread and relaxed forming a triangle (thumbs and index); the ball never drops below the forehead.",
       "Brief contact with the pads of the fingers (not the palms), then extend the legs and arms.",
       "Finish the motion with arms extended toward the target."]},
     intermediaire:{intro:"A precise, consistent set to the wings, with balance and alignment.",points:[
       "Be stopped and balanced before setting, shoulders and hips facing the target.",
       "Push symmetrically with both hands for a clean, spin-free trajectory.",
       "Dose height and depth to the attacker (a set to zone 4, to zone 2).",
       "Back set: same motion, tilt of the hips, the back does not give away the direction."]},
     avance:{intro:"Fast, disguised distribution, with the jump set.",points:[
       "Jump set to gain time and hide the direction.",
       "Stay accurate even coming out of a tough pass (setting on the move, moving back).",
       "Vary the tempos (fast, flat balls) to beat the opposing block.",
       "Hold the block then switch sides at the last moment."]}
   },
   erreurs:["Playing the ball too low (below the forehead)","Contact with the palms → carried / “held” ball","Shoulders that give away the back set"]},
 "Le service":{nom:"The serve", categorie:"Serving",
   resume:"Putting the ball in play: from a simple serve to a float or jump serve.",
   niveaux:{
     debutant:{intro:"Secure the serve with a simple, consistent motion.",points:[
       "Underhand serve to start: ball held in front, hit from low to forward with the heel of the hand.",
       "Foot opposite the hitting arm slightly ahead, weight transfer back → front.",
       "Then the overhand serve: a low, stable toss in front of the hitting shoulder.",
       "Look at the target and aim wide (the opponent's court) before aiming precisely."]},
     intermediaire:{intro:"A consistent, targeted overhand float serve.",points:[
       "Arm cocked in a bow position (elbow and shoulder pulled back), ball set in front of the hitting shoulder.",
       "Low toss: too high a toss makes the serve inconsistent.",
       "Crisp hit with the heel of the hand, behind the ball, firm wrist → no spin (the ball “floats”).",
       "Rhythm “set – step – hit”, weight transfer toward the target, minimal follow-through."]},
     avance:{intro:"Jump float or jump topspin serve, power and aggressiveness.",points:[
       "Jump float: “step-step-toss-step-step” approach, arms kept in the bow position (no big swing), a small jump is enough.",
       "Jump topspin: high toss into the court, four-step approach (right-left-right-left for a right-hander), arm cocked low then whipped with topspin.",
       "Vary zones, length (short/deep) and serve type to disrupt the reception.",
       "Manage the risk / reward ratio according to the score."]}
   },
   erreurs:["Tossing too high or unstable","Putting spin on the float (it no longer floats)","Decelerating the arm at impact"]},
 "La course d'élan":{nom:"The attack approach", categorie:"Attacking",
   resume:"The footwork and rhythm before the spike: the approach is what gives the height and the right timing of the attack.",
   niveaux:{
     debutant:{intro:"Find a steady footwork rhythm and jump off two feet.",points:[
       "For a right-hander, a 3-step approach: left – right-left (the last a “plant step”); a left-hander reverses it (right – left-right).",
       "The last two steps are fast and low: the front foot lands far ahead (braking), the other comes to join it.",
       "Both arms swing back during the last steps, then are thrown upward at take-off.",
       "Jump off two feet to go straight up, not toward the net."]},
     intermediaire:{intro:"Sync the approach with the set and turn the run into height.",points:[
       "Start from behind the 3 m line to have room; trigger when the ball leaves the setter's hands.",
       "Accelerate gradually: first steps slow, last two explosive — the “plant step” brakes the run and turns it into lift.",
       "The heel lands first on the second-to-last step to kill the horizontal speed.",
       "Arrive slightly behind the ball to hit it in front of you, not above your head."]},
     avance:{intro:"Adapt the approach to the set tempo and attack from every zone.",points:[
       "Set the length and speed of the approach to the tempo: high ball = full approach; fast/flat ball = short, early approach.",
       "4-step approach for more power on the wings.",
       "Take the approach from the back for a zone 1 or 6 attack (pipe), well behind the 3 m line.",
       "Stay balanced in the air to change the hitting direction at the last moment."]}
   },
   erreurs:["Jumping forward (into the net) instead of straight up","Last steps too slow or in the wrong order","Triggering the approach too early, before the set","Finishing on a single foot"]},
 "L'attaque (smash)":{nom:"The attack (spike)", categorie:"Attacking",
   resume:"The attacking hit in the air after an approach.",
   niveaux:{
     debutant:{intro:"Build the approach and hit a high ball.",points:[
       "The last two steps matter most: for a right-hander, right then left (“plant step”), then jump off two feet.",
       "Throw both arms upward at take-off to rise.",
       "Cocked: hitting arm high and back, elbow above the ear, hand pointed up; the other arm aims at the ball.",
       "Hit the ball at the highest point, in front of you, and land softly on two feet."]},
     intermediaire:{intro:"Timing with the setter and an efficient hit.",points:[
       "Trigger the approach when the ball leaves the setter's hands (timing).",
       "“The shoulder leads”: the elbow then the forearm and hand whip forward, the other arm comes down in front of the chest.",
       "Snap the wrist at contact to drive the ball down (topspin).",
       "Land with shoulders ahead of the hips, ready to continue (coverage, recovery)."]},
     avance:{intro:"Vary the hits and read the block / defense.",points:[
       "Read the block: hit cross-court, down the line, or use the block (“tool / wipe”).",
       "Vary: powerful hit, roll shot / tip, wipe, one-handed hit off balance.",
       "Attack from different positions (wings, opposite, back-row attack in zone 1 or 6).",
       "Adapt the approach and contact point to fast, flat sets."]}
   },
   erreurs:["Jumping before or under the ball (bad timing)","Hitting with a straight arm, without cocking","Throwing yourself backward instead of going forward"]},
 "Le bloc":{nom:"The block", categorie:"Blocking",
   resume:"The block at the net to stop or slow the opponent's attack.",
   niveaux:{
     debutant:{intro:"Jump straight at the net and penetrate the hands.",points:[
       "Ready stance close to the net, hands in front of the shoulders, feet parallel to the net.",
       "Jump straight up (don't touch the net), arms raised high.",
       "Wide hands, fingers spread, thumbs up to leave no gap.",
       "Brace the core at impact to protect the back and push the hands."]},
     intermediaire:{intro:"Move and penetrate over the net.",points:[
       "Quick movement: shuffle steps over short distance, cross-over steps over long distance, staying square to the net.",
       "Jump after the attacker (timing), never before.",
       "Penetrate the hands over the net and “cover” the ball (hands angled toward the opponent's floor).",
       "Hold the top of the block as long as possible, with no gap between the hands."]},
     avance:{intro:"Read the play and block as a pair.",points:[
       "Eye sequence: ball → setter → attacker, to read the direction.",
       "Double block: the wing sets the position, the middle adjusts and closes the gap between the four hands.",
       "Choose to block cross-court or line according to the defensive system.",
       "“Swing block”: swing the arms as for an attack for a more explosive move."]}
   },
   erreurs:["Jumping too early","Soft or spread hands (gap in the block)","Touching the net or going under it"]},
 "La défense":{nom:"Defense (digging)", categorie:"Defense",
   resume:"Retrieving the opponent's attacks to launch the counter-attack.",
   niveaux:{
     debutant:{intro:"A low, stable stance, ready to move toward the ball.",points:[
       "Feet a little wider than the shoulders, weight on the balls of the feet, shoulders forward.",
       "Arms bent in front of you, palms up, facing the attacker.",
       "Just before the hit: a small hop (split-step) and “plant” the weight, knees in line with the feet.",
       "Platform formed at contact, shoulders above the knees, contact under the ball to send it high."]},
     intermediaire:{intro:"Read the attacker and get into position without backing up.",points:[
       "Watch the attacker and see the hitting direction before moving.",
       "Bring the body and arms to the ball; short steps are done by bending one leg and extending the other, weight forward.",
       "Don't stop the motion at contact: keep the arms together a split second and follow through, otherwise the dig stays low.",
       "Reposition behind the block according to the zone left open (cross-court / line)."]},
     avance:{intro:"Athletic defense and extreme retrievals.",points:[
       "Read the attacker (shoulder, approach, arm) to anticipate cross-court, line or tip.",
       "Controlled emergency moves: dive, roll, one-handed pass, “collapse dig”.",
       "Cover your own attacker on blocked balls that drop back.",
       "Link dig → accurate return to the setter → recovery."]}
   },
   erreurs:["Backing up on the heels","Stopping the arms at contact (the ball drops)","Moving the feet before reading the hit"]},
 "La feinte et l'amorti":{nom:"The tip and the roll shot", categorie:"Attacking · Advanced",
   resume:"Playing finesse rather than power: dropping the ball into open space when the hard attack is covered.",
   niveaux:{
     debutant:{intro:"Drop the ball with the fingertips over the block.",points:[
       "Same approach and same cocking as for a spike, so as not to warn the defense.",
       "Instead of hitting, push the ball with the fingertips (tip) over or beside the block.",
       "Aim at empty space, often just behind the block or into a hole in the defense.",
       "Firm wrist: you place the ball, you don't follow it for long."]},
     intermediaire:{intro:"Vary the short tip and the deep roll shot.",points:[
       "Short tip just behind the block; roll shot (ball pushed with the flat of the hand) toward the back of the court.",
       "Disguise until the last instant: decide tip or hit according to the block's reaction.",
       "Use the tip when the set is too short, too close to the net or poorly placed."]},
     avance:{intro:"Read the defense and choose the weapon in flight.",points:[
       "Spot the gaps left by the block and the deep defenders to pick the zone.",
       "Alternate hit, tip, wipe (topspin fingertip ball) to stay unpredictable.",
       "Roll-shot one-handed off balance on a tough set."]}
   },
   erreurs:["Preparing the tip differently from the spike (the defense sees it coming)","Always tipping to the same spot","Following through too long → held / carried ball"]},
 "L'attaque arrière (la pipe)":{nom:"The back-row attack (pipe)", categorie:"Attacking · Advanced",
   resume:"Attacking from the back row, taking off behind the 3-metre line — essential to vary the play at a good level.",
   niveaux:{
     debutant:{intro:"Understand the take-off behind the 3 m line.",points:[
       "The back-row attacker must take off behind the attack line; he may land in front, but not take off in front.",
       "A longer approach, starting well back toward the end of the court.",
       "The ball is hit further from the net: a flatter, longer trajectory.",
       "The “pipe” is played through the middle (zone 6); the back-row attack is also played in zone 1 or zone 5."]},
     intermediaire:{intro:"Sync the pipe with the middle's quick attack.",points:[
       "The pipe leaves at the same time as the middle's fake, to split the block's attention.",
       "Precise timing with the setter: the back-row attack is a fast tempo.",
       "Hit deep and hard: the distance to the net leaves room above the block."]},
     avance:{intro:"Fold the back-row attack into the combinations.",points:[
       "Link your own reception then your back-row approach (the outside hitter who plays the pipe).",
       "Use the pipe to pull apart a block focused on the wings.",
       "Vary zone 1 / zone 6 / zone 5 according to the opposing system."]}
   },
   erreurs:["Stepping on the 3 m line at take-off (fault)","Approach too short, hit too soft","Bad timing with the setter on a fast tempo"]},
 "Le service sauté":{nom:"The jump serve", categorie:"Serving · Advanced",
   resume:"The most aggressive serve: a true attack approach to serve hard and high.",
   niveaux:{
     debutant:{intro:"Discover the approach and the toss of the jump serve.",points:[
       "Start 2-3 m behind the end line to have room for the approach.",
       "Toss the ball in front of you, into the court, high enough to jump under it.",
       "Approach like an attack (right-left for a right-hander), jump off two feet.",
       "Hit the ball at the highest point, arm extended, in front of the shoulder."]},
     intermediaire:{intro:"Choose a jump float or a jump topspin.",points:[
       "Jump float: toss low and in front, arm kept in the bow (little swing), crisp hit with no spin → the ball floats.",
       "Jump topspin: high toss into the court, arm cocked low then whipped, wrist snapped → dropping trajectory.",
       "Transfer the run's energy toward the target; you may land in the court, since the take-off is behind the line."]},
     avance:{intro:"Power, accuracy and risk management.",points:[
       "Aim at precise zones: seams, the weak passer, a conflict between two players, the short zone behind the net.",
       "Vary float / topspin and the length to break the reception's rhythm.",
       "Adapt the aggressiveness to the score (calculated risk-taking)."]}
   },
   erreurs:["Inconsistent toss (the jump serve's weak point #1)","Stepping on the end line at take-off","Decelerating the arm at impact","Always serving the same spot, the same rhythm"]},
 "La passe en suspension et arrière":{nom:"Jump set and back set", categorie:"Setting · Advanced",
   resume:"The accomplished setter's sets: jumping to speed up the play, and setting backward without giving away the direction.",
   niveaux:{
     debutant:{intro:"Master the basic back set.",points:[
       "Get under the ball, ball above the forehead as for a front set.",
       "For the back set: move slightly under the ball, push the hips forward and extend the arms up and back.",
       "The eyes stay forward: it is the arms and hips that give the backward direction.",
       "Keep the same starting posture as a front set so as not to warn the block."]},
     intermediaire:{intro:"Add the jump set.",points:[
       "Jump and set at the top of the jump: you gain time and bring the set closer to the net.",
       "The jump set also lets you threaten the 2nd ball (dump, setter attack).",
       "Stay braced and balanced in the air, with a brief, symmetric contact."]},
     avance:{intro:"Disguise and speed up the distribution.",points:[
       "The same motion for front, back and jump sets → the block cannot read the direction.",
       "Set fast and flat on the jump to beat the opposing block.",
       "Jump back set on the quick combinations."]}
   },
   erreurs:["Shoulders or chin that give away the back set","Arching the back instead of moving the hips forward","Jump set off balance → inaccurate ball"]},
 "Le plongeon et la roulade":{nom:"The dive and the roll", categorie:"Defense · Advanced",
   resume:"The emergency moves to retrieve a ball you can't reach standing, then get up fast.",
   niveaux:{
     debutant:{intro:"Lower yourself to the floor without hurting yourself.",points:[
       "First lower the centre of gravity: a deep lunge for low balls before thinking of the floor.",
       "Side or back roll: play the ball then roll over the shoulder / back and get back on your feet.",
       "Protect the head and wrists; you cushion with the body, not with extended hands."]},
     intermediaire:{intro:"Dive forward for short balls.",points:[
       "Forward dive: extend toward the ball, play it one-handed (or a one-handed pass), then slide on the chest and thighs.",
       "The push comes from the legs, the hands guide the slide, chin tucked.",
       "Play the ball BEFORE touching the floor, never after."]},
     avance:{intro:"Extreme retrievals and an immediate return to play.",points:[
       "“Pancake”: slap the hand flat on the floor under the ball so it bounces off it.",
       "Choose the move by the trajectory: forward dive, side roll, one-handed pass.",
       "Get up instantly and reposition for the next ball."]}
   },
   erreurs:["Extending the arms to break the fall (injury risk)","Playing the ball after touching the floor","Diving when a lunge would have been enough"]}
};
CONTENT_EN.regles={
 "Le terrain et le filet":{nom:"The court and the net", categorie:"Court", resume:"The court dimensions, the net, the antennas and the ball, according to the official rules.",
   blocks:[
     {label:"The court",points:[
       "A rectangle 18 m long by 9 m wide, split into two 9 × 9 m halves by the centre line, under the net.",
       "All lines are 5 cm wide and belong to the court.",
       "The court is surrounded by a free zone of at least 3 m, where play may continue.",
       "The attack line is drawn 3 m from the net on each side: it marks off the front zone.",
       "The service zone, 9 m wide, is behind each end line."]},
     {label:"The net",points:[
       "Hung vertically above the centre line, it is 1 m high and about 9.50 to 10 m long, with 10 cm square mesh.",
       "Height (top edge): 2.43 m for men, 2.24 m for women.",
       "It is lowered for youth and senior categories according to the regulations.",
       "A white band runs along the top of the net."]},
     {label:"The antennas",points:[
       "Two flexible rods 1.80 m long are fixed to the outer edge on each side of the net.",
       "They stick up 80 cm above the net and mark the side limits of the crossing space.",
       "The ball must cross the net between the two antennas."]},
     {label:"The ball",points:[
       "Spherical, leather or synthetic, 65 to 67 cm in circumference.",
       "Weight: 260 to 280 g.",
       "Inside pressure: 0.30 to 0.325 kg/cm²."]}]},
 "L'équipe et la rotation":{nom:"The team and the rotation", categorie:"Team", resume:"The make-up of the team, the serving line-up, the rotation and the substitutions, according to the official rules.",
   blocks:[
     {label:"The make-up",points:[
       "A team has up to 12 players (plus the staff: coach, assistant, etc.).",
       "6 players are on court, the others are substitutes.",
       "One player is designated team captain.",
       "One (or two) player may be designated libero, recognizable by a different jersey."]},
     {label:"The serving line-up",points:[
       "At the moment of the serve, the 6 players occupy 3 front positions (4, 3, 2) and 3 back positions (5, 6, 1).",
       "Each back-row player must be further from the net than the front player in their column.",
       "The left-right order must also be respected between players of the same line.",
       "Failing to respect these positions is a positional fault (overlap)."]},
     {label:"The rotation",points:[
       "When a team wins back the serve, its players rotate one position clockwise.",
       "The player who was in position 2 moves to position 1 and goes to serve; each player moves on through the 6 positions.",
       "The rotation order, set at the start of the set, must be respected for the whole set."]},
     {label:"Moving",points:[
       "The line-up order only has to be held at the instant the server strikes the ball.",
       "As soon as the serve is struck, players may move freely and occupy any zone of their court.",
       "Back-row players, however, cannot attack or block like a front player above the net."]},
     {label:"Substitutions",points:[
       "Substitutions are limited per set (6 under FIVB rules; varies by competition).",
       "A starter may leave and come back once in the set, to their starting position.",
       "The libero's entries and exits do not count as substitutions."]}]},
 "Le point et les sets":{nom:"Points and sets", categorie:"Scoring", resume:"The rally-point scoring system, how to win a set, the tie-break and the match, according to the official rules.",
   blocks:[
     {label:"Scoring a point (rally point)",points:[
       "Every rally ends in a point, whichever side was serving (the “rally point” system).",
       "A team scores when the ball lands in the opponent's court, the opponent sends the ball out or commits a fault, or receives a penalty.",
       "The team that wins the rally scores the point and wins the serve.",
       "If it was already serving, the same player serves again; if it was receiving, the team rotates and there is a new server."]},
     {label:"Winning a set",points:[
       "A set is won by the first team to reach 25 points…",
       "… with at least a 2-point margin.",
       "At 24-24, play continues until a team leads by 2 (26-24, 27-25…), with no score limit.",
       "Teams change ends at the end of each set."]},
     {label:"The tie-break (5th set)",points:[
       "If the match reaches 2 sets all, a decisive 5th set is played, the tie-break.",
       "It is played to 15 points, still with a 2-point margin.",
       "Teams change ends as soon as a team reaches 8 points."]},
     {label:"Winning the match",points:[
       "The match is played best of 5 sets.",
       "The first team to win 3 sets wins the match (set scores of 3-0, 3-1 or 3-2).",
       "Every set counts the same: losing 3-2 or 3-0 both mean losing the match."]},
     {label:"Variable formats",points:[
       "Depending on the competition, a match may be played best of 3 sets (2 sets then needed to win).",
       "Reduced formats (youth, recreational, beach) adapt the points per set and the number of sets.",
       "The principle of a point on every rally and a 2-point margin stays the same."]}]},
 "Les touches de balle":{nom:"Ball contacts", categorie:"Play", resume:"How many contacts, how to play the ball and the special contacts, according to the official rules.",
   blocks:[
     {label:"Number of contacts",points:[
       "Each team has at most 3 contacts to send the ball back to the opponent's court.",
       "The block does not count as a contact: after a block, the team still has its 3 contacts.",
       "The same player cannot touch the ball twice in a row…",
       "… except on the block, and except on the team's very first contact (the ball may then touch several parts of the body in one action)."]},
     {label:"How to touch the ball",points:[
       "The ball may touch any part of the body, including the foot.",
       "It must be hit cleanly: never held, carried, caught or thrown.",
       "The ball may touch several parts of the body, provided it is in one single action."]},
     {label:"Special contacts",points:[
       "Two teammates touching the ball at the same time: this counts as two contacts (and two different players).",
       "Two opponents contesting the ball above the net: play continues and the team that recovers it gets 3 new contacts.",
       "A player may go and play the ball in the free zone (off the court) as long as they haven't returned it.",
       "The ball must cross back over the net, between the two antennas."]}]},
 "Fautes courantes":{nom:"Common faults", categorie:"Faults", resume:"The main faults that give the point and the serve to the opponent, sorted by type, according to the official rules.",
   blocks:[
     {label:"Ball handling",points:[
       "Held / carried: the ball is carried or caught instead of being hit cleanly.",
       "Double contact: a player touches the ball twice in a row (allowed on the team's very first contact and on the block).",
       "4 hits: the team touches the ball more than three times before returning it (the block doesn't count as a contact)."]},
     {label:"At the net and the centre line",points:[
       "Touching the net (between the antennas) during the action of playing the ball.",
       "Crossing the centre line and entering the opponent's court while interfering.",
       "Touching the ball or interfering with the opponent above the net, in their playing space."]},
     {label:"Ball and boundaries",points:[
       "A ball landing outside the lines (out) or passing outside the antennas.",
       "A ball that doesn't cross the net, or is touched after going out.",
       "Any fault gives the point AND the serve to the opponent (the rally-point system)."]},
     {label:"Attack and block (back-row, libero)",points:[
       "A back-row player cannot complete an attack above the net if they took off in front of the 3 m line.",
       "Back-row players and the libero cannot block or take part in a block.",
       "You cannot attack or block the opponent's serve when the ball is in the front zone and entirely above the net."]},
     {label:"Position and serve",points:[
       "Positional fault (overlap): wrong placement at the moment the server hits.",
       "Rotation fault: it is not the right player serving.",
       "Foot fault: the server touches the end line or the court before striking; or the 8 seconds are exceeded."]}]},
 "Le service":{nom:"The serve", categorie:"Serve", resume:"Putting the ball in play: execution, who serves, the ball on the serve and the screen, according to the official rules.",
   blocks:[
     {label:"Execution",points:[
       "The server strikes the ball with one hand or arm, behind the end line, in the service zone (9 m wide).",
       "They have 8 seconds to serve after the referee's whistle (FIVB rule).",
       "The ball must be tossed or released before being struck.",
       "The server must not touch the end line or the court before the hit (foot fault)."]},
     {label:"Who serves and in what order",points:[
       "The rotation designates the server: the player who reaches position 1 (back right).",
       "Serving out of order is a rotation fault.",
       "After the serve, the server joins their position and play unfolds normally."]},
     {label:"The ball on the serve",points:[
       "The ball may touch the net on the serve and continue to the other side: it stays in play.",
       "It must cross the net between the two antennas.",
       "If it lands out, touches a teammate or doesn't cross the net: fault, point to the opponent."]},
     {label:"The illegal screen",points:[
       "The serving team must not screen: hiding the server or the ball's path from the opponent.",
       "Players must not group together or raise their arms to block the receiver's view.",
       "Float, topspin or jump serve: see the Techniques section for the skill."]}]},
 "Le libéro":{nom:"The libero", categorie:"Libero", resume:"The defensive player with special rules: status, entries and exits, and what they are not allowed to do, according to the official rules.",
   blocks:[
     {label:"Their status",points:[
       "A back-row player specialized in reception and defense, they wear a different-coloured jersey to be identified.",
       "They are designated on the match sheet; modern rules often allow two liberos per team.",
       "They cannot be team captain or game captain."]},
     {label:"Entries and exits",points:[
       "They freely replace a back-row player (often the middle), without it counting as a substitution.",
       "Their entries and exits are made during a dead ball, through the zone between the attack line and the end line.",
       "They must stay one rotation out of play before coming back (they cannot swap immediately with another player)."]},
     {label:"What they cannot do",points:[
       "They cannot block, or attempt to block.",
       "They cannot attack a ball entirely above the top of the net, wherever they play it from.",
       "They do not serve, except where certain rules allow it (on one rotation only)."]},
     {label:"The overhand-set rule",points:[
       "If they make an overhead set from the front zone (on or in front of the 3 m line), a teammate cannot attack that ball above the net.",
       "Behind the 3 m line, they may set overhead normally.",
       "This is why the libero often moves behind the 3 m line to set."]}]}
};
CONTENT_EN.postes={
 "Le passeur":{nom:"The setter", categorie:"Playmaker", resume:"The team's conductor: he almost always plays the 2nd contact and delivers the attacking ball. He decides who, where and at what tempo the team attacks.",
   blocks:[
     {label:"Main role",points:[
       "Takes the 2nd of the 3 contacts: he turns the pass or the dig into a hittable set for an attacker.",
       "He is the playmaker: on every ball he chooses the attacker, the zone and the tempo (high, medium, quick set).",
       "He “hides his play” as long as possible to hold the opposing block and create favourable match-ups.",
       "A true extension of the coach on court: he carries the game plan and gives the team its rhythm."]},
     {label:"Positioning and movement",points:[
       "His setting target is between zone 3 and zone 2 (slightly right of centre), about 30-50 cm from the net.",
       "When he starts in the front zone, he has only a short trip to his target.",
       "When he starts in the back zone (penetration, typical of the 5-1 and 6-2), he runs up as soon as the serve is struck to reach the net before the pass — without crossing a teammate or hindering the reception.",
       "He positions himself ideally to have as many attackers as possible in his field of view, facing the court."]},
     {label:"Technical qualities",points:[
       "Precise, consistent hands: the same contact point, the same height, whatever the quality of the pass.",
       "Quick footwork to arrive stopped and balanced under the ball before setting.",
       "Able to set on the run, off balance or behind (back set) without giving away his direction.",
       "Mastery of the jump set to speed up the play and threaten a 2nd ball."]},
     {label:"Tactical and mental qualities",points:[
       "Vision and reading: he watches the opposing block and defense to pick the least-covered attacker.",
       "Very fast decision-making and composure in the hot moments.",
       "Leadership and communication: he organizes, encourages and steadies his teammates.",
       "Match memory: he tracks which attacker is “hot”, who has been set little, and where the opponent's weakness is."]},
     {label:"Responsibilities off the set",points:[
       "When he isn't the one touching the 2nd ball, he becomes a defender (often zone 1) and a blocker on the right side.",
       "He provides the back-up second contact and clean defensive returns.",
       "On the serve, he must also be a reliable scorer.",
       "He can attack or tip the 2nd ball (dump, placement) to surprise a defense that ignores him."]},
     {label:"Who it's for",points:[
       "Often a player with marked game intelligence, calm and consistent, more than just an athlete.",
       "An ideal role for a natural leader who likes to direct and read the game.",
       "A good setter doesn't need to be the tallest, but good height and a good jump help with blocking and the jump set."]}]},
 "L'attaquant réceptionneur":{nom:"The outside hitter", categorie:"Left side", resume:"The most complete player on the team: he attacks on the left side, takes most of the reception and stays on court through all 6 rotations. Often called “outside” or, the French term, wing.",
   blocks:[
     {label:"Main role",points:[
       "Attacks and blocks on the left side (zone 4), the zone the setter distributes to most.",
       "He is one of the two or three main passers: he takes a large share of the serve-receive.",
       "He stays on court for all 6 rotations (unlike the middle, often replaced by the libero): it is a “6-rotation” position.",
       "In a 5-1, the two outsides are the most-used attackers, because there is always at least one outside at the net."]},
     {label:"Attack",points:[
       "Attacks mainly in zone 4 on a high set to the pin, but also on a faster tempo when the pass is good.",
       "Must be able to attack from the back (zone 6, the “pipe”, or zone 5) to add an option when he's in the back row.",
       "Often attacks off imperfect passes: able to score on less-than-ideal sets, far from the net.",
       "Varies powerful hit, tip and use of the block (“tool”) because he often faces a well-set block."]},
     {label:"Reception and defense",points:[
       "Most often receives in the back-left zone (zone 5), sometimes zone 6, sharing the lanes with the libero and the other outside.",
       "Must link reception then an approach to attack: a double physical and technical effort.",
       "On defense, he covers his back zone and takes part in covering his own attackers.",
       "When he's in the front row and not attacking, he blocks the opposing outside (zone 4 or 2)."]},
     {label:"Qualities",points:[
       "Versatility above all: attacking, reception and defense at a good level, with no glaring weakness.",
       "Often among the tallest and most athletic, with a good jump.",
       "Endurance and consistency: he's in every point, offensively and defensively.",
       "Strong mind: he often attacks in tough situations and carries part of the scoring."]},
     {label:"Positioning and rotations",points:[
       "The two outsides are generally placed opposite each other in the rotation order (3 positions apart), so there's always one in the front row.",
       "He follows the overlap rules at the moment of the serve, then moves back to the left side.",
       "On the opponent's serve, he takes his reception position rather than his strict rotation spot."]},
     {label:"Who it's for",points:[
       "The ideal position for a complete player who likes to be involved everywhere, not just on attack.",
       "Suits athletic players able to string efforts together over the whole match.",
       "Often the first “attacker” position learned, because it demands all the basics of volleyball."]}]},
 "Le pointu (opposé)":{nom:"The opposite", categorie:"Right side", resume:"The team's main attacker, placed opposite the setter in the rotation. He attacks on the right, from the front and the back, and carries a large share of the scoring without being tasked with reception.",
   blocks:[
     {label:"Main role",points:[
       "Plays on the right side (zone 2), always opposite the setter in the rotation order.",
       "He is a big attacker, often the team's main scorer.",
       "He is generally excused from reception to focus on attacking.",
       "Since he is opposite the setter, there is always an attacker available on the right when the setter is in the front row."]},
     {label:"Attack",points:[
       "Attacks in zone 2 when in the front row, and in zone 1 (back-row attack) when he rotates behind.",
       "He is often the “bail-out” attacker: he hits the high, tough balls when the pass is poor.",
       "He has to score in complicated situations (off-centre balls, a well-set block).",
       "A left-hander is favoured here: his hitting arm is on the outside in zone 2."]},
     {label:"Block and defense",points:[
       "In the front row, he blocks the opposing outside hitter, often their best attacker.",
       "He protects the right side of the court on defense.",
       "On the serve, he must also be a reliable scorer."]},
     {label:"Qualities",points:[
       "Power and consistency on attack, over the long run.",
       "Strong mind: he attacks a lot and in decisive moments.",
       "A good blocker on the wing; good height and a good jump help."]},
     {label:"Positioning and rotations",points:[
       "Placed 3 positions from the setter in the rotation, so there's always an attacker at the net.",
       "He follows the overlap rules on the serve, then moves back to the right.",
       "He doesn't receive: he pulls off to prepare his attack."]},
     {label:"Who it's for",points:[
       "The ideal position for a powerful attacker who likes to score and carry the team offensively.",
       "Suits a player less versatile in reception, but strong on attack and the block.",
       "Often one of the most athletic players on the team."]}]},
 "Le central (contreur)":{nom:"The middle blocker", categorie:"Middle", resume:"The net specialist: he attacks quick in the middle and is the pillar of the block. Often replaced by the libero as soon as he rotates to the back row.",
   blocks:[
     {label:"Main role",points:[
       "Operates in the middle of the net (zone 3), just in front of the setter.",
       "He is generally the team's best blocker and a constant threat on the quick attack.",
       "In the back row, he is often replaced by the libero: he therefore plays mostly at the net.",
       "The two middles are opposite each other in the rotation, so there is always one in the front row."]},
     {label:"Attack",points:[
       "Attacks on a quick tempo (first-tempo ball), in the middle or shifted around the setter.",
       "He leaves on every good pass, even without getting the ball, to “hold” the opposing blocker.",
       "This constant threat frees the outsides and the pipe against a late block.",
       "Requires very precise timing with the setter."]},
     {label:"Block",points:[
       "He is the pillar of the block: he blocks in the middle and comes to double on the wings.",
       "He reads the opposing setter to leave at the right time and move quickly side to side.",
       "Quick footwork (shuffle / cross-over steps) to reach the positions and jump balanced."]},
     {label:"Qualities",points:[
       "Height and a good jump: he's the physical presence at the net.",
       "Explosiveness and lateral speed for the block.",
       "Timing and reading of the game, more than versatility in reception."]},
     {label:"Positioning and rotations",points:[
       "Starts in the front row in the middle; when he rotates to the back, the libero most often replaces him.",
       "He respects the overlap on the serve, then moves to the middle of the net.",
       "He therefore rarely plays a full role in back-row defense."]},
     {label:"Who it's for",points:[
       "The ideal position for a tall, explosive player comfortable at the net.",
       "Suits someone with good timing who likes the duel at the block.",
       "Less involved in reception and back-row defense than the other positions."]}]},
 "Le libéro":{nom:"The libero", categorie:"Defense", resume:"The defensive specialist, recognizable by a different jersey. He plays only in the back row, where he handles most of the reception and defense, but can neither attack above the net, nor block, nor (in principle) serve.",
   blocks:[
     {label:"Main role",points:[
       "A back-row player specialized in reception and defense.",
       "He stays in the back row and replaces a back-row player (most often the middle), over several rotations.",
       "He wears a different-coloured jersey so the referees can identify him.",
       "He is often the boss of the back row: he directs and reassures his teammates."]},
     {label:"Reception and defense",points:[
       "He takes a large share of the serve-receive, with a very consistent forearm pass.",
       "On defense, he covers the back of the court and digs powerful attacks, often staying very low.",
       "He provides the clean returns that let the setter rebuild.",
       "He communicates constantly (calls, places the defenders)."]},
     {label:"What he cannot do",points:[
       "He cannot attack a ball entirely above the top of the net.",
       "He cannot block or attempt to block.",
       "He does not serve (except under a specific rule that allows it on one rotation).",
       "If he makes an overhead set from the front zone (in front of the 3 m line), a teammate cannot attack that ball above the net."]},
     {label:"Qualities",points:[
       "Speed, agility and explosiveness to cover the court.",
       "Excellent reading of the game and anticipation of the opposing attack.",
       "A very stable passing platform, consistent touch.",
       "Mind and steadiness: he shines without scoring points."]},
     {label:"Entries, exits and placement",points:[
       "His changes don't count as substitutions: he enters and exits freely, during a dead ball, through the zone between the 3 m line and the end line.",
       "He replaces a back-row player and must exit before swapping with another (one rotation's gap).",
       "Modern rules often allow two designated liberos per match.",
       "He cannot be team captain or game captain."]},
     {label:"Who it's for",points:[
       "The ideal position for an agile, reactive player, often of smaller build.",
       "Suits an excellent passer-defender who likes to be decisive without attacking.",
       "A vocal leader, comfortable directing and encouraging the back row."]}]},
 "Le défenseur spécialiste":{nom:"The defensive specialist", categorie:"Defense", resume:"A reception and defense specialist in a regular jersey, who comes in through a normal substitution to strengthen the back row — often in place of an attacker who passes poorly when he rotates behind.",
   blocks:[
     {label:"Main role",points:[
       "A player who comes in to strengthen reception and defense in the back row.",
       "He most often replaces an attacker when they rotate to the back row (and exits when that player must return to the net).",
       "He plays the same defensive role as the libero, but in a normal jersey and with regular substitutions.",
       "Often used when the team wants to protect a setter who passes poorly, or has only one libero already used elsewhere."]},
     {label:"Reception and defense",points:[
       "A large share of the reception and digs in the back row, with a consistent forearm pass.",
       "Clean returns to the setter to rebuild the attack.",
       "Communication and placement of the back row."]},
     {label:"Difference with the libero",points:[
       "A regular jersey: he counts toward the normal substitutions (limited per set), he doesn't enter and exit freely.",
       "He may serve, block and attack (even if he stays mostly in the back row).",
       "He can stay in play in the front row if he isn't substituted."]},
     {label:"Qualities",points:[
       "Reactivity and defensive quality, reading of the opposing attack.",
       "Reliable reception and returns.",
       "Sometimes also a good server (he's used for his serve)."]},
     {label:"Entries and substitutions",points:[
       "He comes in through a regular substitution, usually at the rotation where the attacker he replaces goes behind.",
       "He exits when that player comes back to the front row (a double switch).",
       "Since substitutions are limited, he's used on targeted rotations."]},
     {label:"Who it's for",points:[
       "A solid player in reception and defense, without being the designated libero.",
       "Useful to protect a weak back-row position or to bring a good serve.",
       "A team role, quiet but valuable in the key moments."]}]}
};
CONTENT_EN.formations={
 "Le 4-2":{nom:"The 4-2", categorie:"6 players", resume:"Two setters and four attackers; the setter distributes from the front zone. A simple system, ideal to start out.",
   blocks:[
     {label:"Principle",points:[
       "The team lines up 2 setters and 4 attackers.",
       "The two setters are placed opposite each other in the rotation order (3 positions apart): so there is always a setter in the front zone.",
       "It is the front-zone setter who distributes at the net — so there is no penetration from a back-row setter.",
       "Since a setter takes a spot at the net, only 2 attackers remain in the front zone."]},
     {label:"Where the setter sets",points:[
       "Classic 4-2: the setter distributes from the middle of the net (zone 3), flanked by an attacker on the left (zone 4) and one on the right (zone 2).",
       "“International” 4-2: the setter shifts to zone 2 (front-right) and sets mostly forward (zones 3 and 4), which opens a better angle.",
       "The setter generally doesn't spike, but can play the 2nd ball (tip, dump) to surprise."]},
     {label:"Setting it up",points:[
       "After the serve, the front setter moves to his setting zone, the 2 attackers split the wings.",
       "Every 3 rotations, the other setter reaches the front zone and takes over.",
       "A stable pass is enough: since the setter is already in front, he has only a short move to make."]},
     {label:"Advantages",points:[
       "Very simple to teach: the setter is always at the net, few complicated movements.",
       "Ideal to learn roles, rotations and the 3-contact build-up.",
       "No penetration to coordinate (unlike the 5-1 and 6-2)."]},
     {label:"Drawbacks",points:[
       "Only 2 attackers at the net: the attack is less varied and more predictable.",
       "Setting quality can vary, with two setters sharing the role.",
       "Setters are often weaker blockers, which can open gaps at the net.",
       "Not very effective at a high level: teams then move on to the 6-2 and then the 5-1."]},
     {label:"Who it's for",points:[
       "Youth and beginner teams learning positions, rotations and placement.",
       "Groups without a strong specialist opposite.",
       "A first step before moving to more advanced systems."]}]},
 "Le 5-1":{nom:"The 5-1", categorie:"6 players", resume:"A single setter across all 6 rotations, five attackers. The most common system at a good level.",
   blocks:[
     {label:"Principle",points:[
       "The team lines up 1 single setter, who plays all 6 rotations, and 5 attackers.",
       "The setter is always on court: no setter change is needed.",
       "He sets every ball, whether in the front or back zone, coming up to the net (often toward front-right, zone 2)."]},
     {label:"The two phases",points:[
       "Setter in the back zone (3 rotations): he penetrates from the back to the net to set → 3 attackers stay at the net (outside, middle, opposite).",
       "Setter in the front zone (3 rotations): only 2 attackers stay at the net, completed by back-row attacks (the opposite in zone 1, the “pipe” in zone 6).",
       "The team therefore adapts its attack to the setter's position in the rotation."]},
     {label:"The setter's role",points:[
       "When he's in front, the setter blocks (mainly the opposing outside, in zone 2) and can play the 2nd ball (tip, dump) or attack.",
       "He must therefore be complete: set, block, defend and serve like the others.",
       "The consistency of his sets structures the whole game: he is the team leader."]},
     {label:"Advantages",points:[
       "Constant setter-attacker timing: a single setter, stable references.",
       "Clear roles and no setter change → continuity, fewer interruptions.",
       "Back-row attack (pipe) and quick middle play (slide) come naturally.",
       "It is the most-used system at a high level."]},
     {label:"Drawbacks",points:[
       "Only 2 attackers at the net for 3 rotations (when the setter is in front).",
       "No back-up setter: the team depends heavily on a single leader.",
       "Requires a dominant, complete and durable setter, since he plays everywhere."]},
     {label:"Who it's for",points:[
       "Teams with an accomplished, consistent setter.",
       "Groups that want to develop the back-row attack and the quick game.",
       "The default choice as the level progresses (after the 4-2 or the 6-2)."]}]},
 "Le 6-2":{nom:"The 6-2", categorie:"6 players", resume:"Two setters who distribute from the back: always three attackers at the net.",
   blocks:[
     {label:"Principle",points:[
       "Two players hold the setter role, but it is always the one in the back zone who distributes (penetrating from the back to the net).",
       "The other setter is then in the front zone and plays as an attacker (opposite).",
       "Since the setter always comes from the back, there are always 3 attackers at the net.",
       "The name “6-2”: 6 players who attack, 2 of whom can also set."]},
     {label:"Switching the setters",points:[
       "When the setter in play reaches the front zone, a substitution brings in the other setter (who stayed in the back) to distribute in turn.",
       "The two setters are thus alternated every 3 rotations.",
       "This requires rules allowing many substitutions (the most common version uses two)."]},
     {label:"Variants",points:[
       "With 2 substitutions (the most common): 2 dedicated setters and 2 dedicated opposites who come in and out.",
       "With 1 substitution: a back-row setter plus a “hybrid” player who alternates setting and attacking.",
       "Without substitution: two hybrid players who change role by their position (rare)."]},
     {label:"Advantages",points:[
       "Always 3 attackers at the net, in every rotation.",
       "Very specialized roles: setters on one side, attackers on the other.",
       "More players get court time thanks to the substitutions."]},
     {label:"Drawbacks",points:[
       "Repeated substitutions can break the match rhythm.",
       "Attackers must get used to two different setters.",
       "A big gap in level between the two setters becomes a handicap, and the opposites often don't serve.",
       "Requires rules allowing many substitutions (high school, clubs)."]},
     {label:"Who it's for",points:[
       "Teams with two setters of comparable level.",
       "Groups that want to play more people.",
       "Teams without a reliable quick middle attacker, who prefer 3 constant attackers."]}]},
 "À 4 joueurs":{nom:"4 players", categorie:"Reduced format", resume:"Reduced-numbers play (training, intro, recreational, beach 4×4): no fixed position, everyone must be able to do everything. You keep the 3 contacts, but 4 players cover a lot of space.",
   blocks:[
     {label:"Principle",points:[
       "A reduced format with no fixed specialized position: each player receives, sets, attacks and defends.",
       "You keep the 3-contact play (pass → set → attack), but with more space to cover per player.",
       "Base placement: 2 players in front (near the net), 2 behind (defense / reception); sometimes in a diamond.",
       "Often played on a court and/or net adapted to the level."]},
     {label:"Who sets",points:[
       "Designated setter: one assigned player goes for the 2nd ball whenever he can and distributes to the others. Simple, but he moves a lot.",
       "Fixed-position setter (mini 4-2): it is always the player placed at the net on the right who sets, whatever the rotation; an attacker on each side.",
       "In both cases, the setter avoids receiving to stay free to build."]},
     {label:"Placement and reception",points:[
       "On reception, 3 players receive and the setter pulls off to the net; all 4 receive at a beginner level.",
       "Share the court clearly: everyone their zone, especially at the back (2 defenders cover the whole width).",
       "At the net, one player can block the opposing attacker while the other covers the tip."]},
     {label:"Rotation and serve",points:[
       "You rotate on the serve as in 6s (clockwise): each player goes through the positions.",
       "With a fixed-position setter, respect the overlap at the serve, then dash to your spot.",
       "In recreational play, the rotation can be simplified or free by agreement."]},
     {label:"Advantages and limits",points:[
       "Advantages: many contacts per player (fast progress), versatility, ideal in training and intro.",
       "Limits: a large space to cover, fatigue, little specialization; the block and coverage are harder to organize."]},
     {label:"Who it's for",points:[
       "Perfect for small-group training, intro, beach and recreational play.",
       "Communicate constantly (everyone touches the ball often).",
       "Adapt the court size and net height to the players' level."]}]},
 "À 5 joueurs":{nom:"5 players", categorie:"Reduced format", resume:"5-player play (training, recreational, or when one player is missing from a 6): close to 6-player play with one less zone to cover, keeping a real setter to build.",
   blocks:[
     {label:"Principle",points:[
       "A reduced 5-player format: you get close to 6-player play but with one less position to cover.",
       "Base placement: 3 in front / 2 behind (more offensive) or 2 in front / 3 behind (more defensive), according to the goal.",
       "You keep a real setter to build a 3-contact attack."]},
     {label:"Who sets",points:[
       "Mini 5-1: a single setter who penetrates from back-right to the net when in the back zone, and also sets from the front — he sets on every rotation. The most structured.",
       "Mini 4-2: the setter is always the one at the net (middle / right), with an attacker on each side. Simpler to set up.",
       "Free variant: the player in zone 2-3 sets, the others attack."]},
     {label:"Placement and reception",points:[
       "Reception with 3 (the two outsides + a back player) lined up toward the 6 m line, the setter pulling off to the net.",
       "Fill the missing 6th player's zone: you sacrifice either a back position (3-front / 2-back play), or an attacker.",
       "Defense: 2 or 3 players at the back according to the placement, a 1- or 2-player block at the net."]},
     {label:"Rotation and serve",points:[
       "Standard serve rotation: each player goes through the positions.",
       "In mini 5-1, the setter respects the overlaps then dashes to his target: this requires knowing his movements well.",
       "Decide in advance who sets and who attacks to avoid hesitation."]},
     {label:"Advantages and limits",points:[
       "Advantages: close to real 6-player play, keeps a dedicated setter and a real build-up; a good compromise when a player is missing.",
       "Limits: one more zone to cover than in 6s; you have to choose what to sacrifice (an attacker or a defender)."]},
     {label:"Who it's for",points:[
       "Ideal in training to work on the 3-contact build-up with fewer people, or in a friendly 5-a-side match.",
       "Favour 3 in front for attack, 3 behind for defense, according to the opponent.",
       "Keep clear communication about roles at each rotation."]}]}
};
CONTENT_EN.tactique={
 "Les phases de jeu (K1 / K2)":{nom:"Phases of play (K1 / K2)", categorie:"The basics",
   resume:"The framework that structures all tactics: whether you serve or receive, the team isn't in the same phase and isn't after the same thing.",
   blocks:[
     {label:"The principle",points:[
       "On every point, one team is receiving (not serving) and the other is serving.",
       "Two phases are distinguished, called complexes: K1 (reception-attack) and K2 (defense-counter-attack).",
       "Understanding which phase you're in dictates the placement, the priorities and the talk."]},
     {label:"K1 — the side-out",points:[
       "This is the phase where you receive the opponent's serve: pass → set → attack.",
       "Goal: win the point to get the serve back (to “side out”).",
       "It all starts with the quality of the pass: a good pass = all attacking options open.",
       "A team that sides out well stays “level” on the score; it's the basis of solidity."]},
     {label:"K2 — the break point",points:[
       "This is the phase that follows your own serve: serve → block/defense → counter-attack.",
       "Goal: score while you have the serve, to “break” and take the lead on the score.",
       "It strings together an aggressive serve, an organized block, defense and a fast transition.",
       "Break points are the ones that really swing a set."]},
     {label:"Why it's key",points:[
       "Reception, attack, block, defense and transition aren't isolated skills: they link together within one of these two phases.",
       "In a match, telling yourself “we're in K1” or “in K2” helps each player know what to do.",
       "Most systems (5-1, 6-2…) are judged on their side-out and break efficiency."]}]},
 "Les dispositifs de réception":{nom:"Reception formations", categorie:"Reception",
   resume:"How to split the court to receive the serve: who receives, where, and where those who don't receive stand.",
   schemaCap:"3-player reception: three passers (R) in an arc share the court and send the ball to the setter (P); the front attackers (3, 4) stay ready to attack.",
   blocks:[
     {label:"Principle",points:[
       "The players who pass well share the court surface into lanes.",
       "Those who don't receive (setter, middle, sometimes the opposite) position themselves so as not to interfere and to be ready to play their role.",
       "The target is always the setter, ideally between zone 3 and zone 2, near the net."]},
     {label:"3-player reception (the most common)",points:[
       "Three passers (often the two outsides + the libero) form an arc.",
       "Each has a lane; the ball to whoever is closest to the target, constant communication (“mine!”).",
       "A good compromise between court coverage and the number of players freed to attack."]},
     {label:"2-player reception",points:[
       "Only two passers (often an outside + the libero) cover the whole back.",
       "Advantage: frees one more attacker and simplifies responsibilities.",
       "Requires two very good passers, since each covers a large area."]},
     {label:"Where the non-passers stand",points:[
       "The setter takes his target (or runs up if he penetrates from the back), without screening a passer.",
       "The middle stands at the net, ready to attack quick.",
       "Everyone respects the overlap rules at the moment of the serve, then dashes to their spot."]},
     {label:"Tips",points:[
       "Adapt the formation to the rotation: who's in front, who's the best passer.",
       "Protect a struggling passer by shrinking his lane.",
       "Work on the seams (between two passers) in training."]}]},
 "Les systèmes défensifs":{nom:"Defensive systems", categorie:"Defense",
   resume:"How to place the 6 players to defend the opponent's attack, around the block: who blocks, who covers what.",
   schemaCap:"“Deep-6” defense: two blockers at the net (B), the central defender (6) stays deep, the others cover the perimeter and the tips (D).",
   blocks:[
     {label:"Principle",points:[
       "Defense is always organized around the block: the block closes off part of the court, the defenders cover the rest.",
       "Each player has a zone according to the block's position and the expected type of attack.",
       "Two main systems are distinguished by the central defender's spot (zone 6)."]},
     {label:"The “deep-6” defense",points:[
       "The zone 6 player stays at the back of the court.",
       "Ideal against powerful attacks that pass over the block and finish deep.",
       "The perimeter is well covered; short tips are taken by the forward defenders."]},
     {label:"The “up-6” defense",points:[
       "The zone 6 player moves up toward the 3 m line to cover tips and roll shots behind the block.",
       "Ideal against teams that play a lot of short balls / tips.",
       "The back of the court is then covered by the zone 1 and 5 defenders."]},
     {label:"Around the block",points:[
       "The block takes an option (cross-court or line); the defenders place themselves in the block's “shadow”, not behind it.",
       "The defender not covered by the block is the priority on the open zone.",
       "The blocker on the line side protects the line, the other closes the cross-court."]},
     {label:"Who takes what",points:[
       "You don't defend what the block already covers: you place yourself on what it leaves.",
       "Read the attacker (shoulder, arm) to leave at the right time, without anticipating too early.",
       "After the dig, link immediately into the transition (see the dedicated card)."]}]},
 "Les combinaisons et tempos d'attaque":{nom:"Attacking combinations and tempos", categorie:"Attack",
   resume:"Varying the speed of the sets and moving the attackers to beat the opposing block.",
   schemaCap:"The setter (P) distributes by tempo: a fast ball to the middle (1), a high ball to the outside (3), a back-row attack through the middle (pipe).",
   blocks:[
     {label:"The tempos (1 / 2 / 3)",points:[
       "Tempo 1 (quick ball): the set is very short and flat, the attacker is already in the air when it leaves — typically the middle.",
       "Tempo 2 (medium): an intermediate, slightly higher set to shift the block.",
       "Tempo 3 (high ball): a high set to the pin, giving the outside time to take his approach — the basics, solid but readable."]},
     {label:"The combinations",points:[
       "Run two attackers at the same spot (e.g. middle + outside) so the block doesn't know who will hit.",
       "The shoot: an attacker comes to hit just beside the middle.",
       "The tandem / the cross (X): the approaches cross to beat the blockers."]},
     {label:"Holding the middle",points:[
       "The middle leaves on tempo 1 on every good pass, even without getting the ball: he “holds” the opposing middle blocker.",
       "While the middle block hesitates, the outside or the pipe attack against a late block.",
       "This is the heart of the quick game: the middle is a constant threat."]},
     {label:"Tips",points:[
       "A combination is only worth it if the pass is good: on a tough pass, go back to the safe high ball.",
       "Vary the tempos and zones to never be predictable.",
       "Start simple (tempo 1 middle + high-ball outside) before adding crosses."]}]},
 "La couverture de l'attaquant":{nom:"Hitter coverage", categorie:"Defense",
   resume:"Getting into position around your own attacker to retrieve balls blocked back by the opponent.",
   schemaCap:"The attacker (A) hits in zone 4; the others (C) form an arc around him to retrieve a ball blocked back (arrow).",
   blocks:[
     {label:"Principle",points:[
       "When a teammate attacks, the opposing block can send the ball back into our court: you have to anticipate it.",
       "The players not involved in the attack form an arc around the attacker.",
       "A low stance, arms ready, close to the attacker: blocked balls often drop back short."]},
     {label:"Cover in two lines",points:[
       "A first line close to the attacker for balls that drop back fast and short.",
       "A second line further back for balls that ricochet further.",
       "Reposition as soon as the set is made, without waiting for the hit."]},
     {label:"Make it a reflex",points:[
       "Coverage goes up on every attack, by collective habit, including in reception-attack.",
       "Tighten the coverage on a quick attack, widen it on a high ball.",
       "After a block recovery, send the ball high and to the middle to rebuild."]},
     {label:"Common mistakes",points:[
       "Watching the attack without repositioning.",
       "Standing upright, legs straight.",
       "Standing too far from the attacker."]}]},
 "La transition défense → attaque":{nom:"Defense → attack transition", categorie:"Attack",
   resume:"Moving from the defensive stance to an organized attack — what separates “defending” from “counter-attacking”.",
   schemaCap:"After the dig, the attackers (4, 2) pull off the net to take their approach; the setter (P) goes to his target, the dig (ball) comes from the back.",
   blocks:[
     {label:"Link defense then attack",points:[
       "After digging or blocking, pull off the net / the defensive zone to be able to take an approach.",
       "The front-row attackers move back behind the 3 m line to take their approach.",
       "Communicate: who sets, who attacks."]},
     {label:"Rebuild a full attack",points:[
       "The setter dashes to his target as soon as the defense has touched the ball.",
       "The defensive dig aims high and to the middle to leave time to organize.",
       "Each player knows his attacking route (wings, opposite, pipe)."]},
     {label:"Fast transition",points:[
       "Link block / defense → recovery → approach with no wasted time (the “transition footwork”).",
       "Attack quickly on the counter while the opposing block is disorganized.",
       "Vary the options according to where the dig comes from."]},
     {label:"Common mistakes",points:[
       "Staying stuck to the net after the block.",
       "A dig too flat that prevents organizing.",
       "Attackers who don't move back to take their approach."]}]}
};
CONTENT_EN.exercices={
 "Réveil articulaire + passes en mouvement":{nom:"Joint warm-up + passing on the move", materiel:"1 ball per 2", objectif:"Warm up, mobilize the shoulders/wrists and find the ball touch again before the specific work.",
  deroule:["2 min of mobility: arm circles, wrist rotations, high knees moving sideways.","In pairs facing at 4-5 m: 10 overhead passes, then 10 forearm passes.","Same pairs on the move: one backs up / comes forward, the other follows, continuous exchanges.","Finish with 10 exchanges where each player links a forearm pass then an overhead pass to themselves before returning."],
  consignes:["Knees bent, weight on the balls of the feet","Ball played in front of the forehead on the overhead pass","Shoulders toward the target on the forearm pass"],
  variantes:["Harder: a single contact required and the distance increased","Easier: let it bounce once on the floor"]},
 "Pepper à deux":{nom:"Pepper in pairs", materiel:"1 ball per 2", objectif:"Link the three basic contacts (dig – set – controlled hit) continuously, as a pre-match routine.",
  deroule:["In pairs at 5-6 m. Player A hits gently toward B.","B digs to themselves, sets high to themselves, then a controlled hit toward A.","A digs in turn: the dig → set → hit cycle never stops.","Count the number of error-free exchanges; aim for a streak."],
  consignes:["A measured hit, snapped arm but no power","Reposition under the ball before each contact","Communicate on every return"],
  variantes:["Harder: require a hit while moving back or jumping","Easier: allow 4 contacts","Over the net: the two players face each other on either side of the net, controlled attack over it (2-v-2 possible)","Side vs side: cross-court over the net, the defender digs to a setter who sets back to the attacker (cooperative rally)"]},
 "Service flottant par cibles":{nom:"Float serve to targets", materiel:"All the balls, 3 mats or cones in the opposite court", objectif:"Gain consistency and aim at precise zones with the float serve.",
  deroule:["Place 3 targets in the opposite court: zone 1, zone 6, zone 5.","Each server gets 2 balls per turn and calls the target before serving.","1 point if the called target is hit, 0 if the serve is good but off target, -1 if a fault.","Rotate the servers; first to 10 points."],
  consignes:["Toss low and stable, in front of the hitting shoulder","Hit the centre of the ball, firm wrist (no spin)","Weight transfer from back to front"],
  variantes:["Harder: smaller targets, serve short then deep alternately","Harder: aim at the lanes and the deep court","Easier: serve from 6 m and aim at halves of the court","Contest: first to hit 5 targets, or tic-tac-toe on 9 zones"]},
 "Service puis entrée en défense":{nom:"Serve then move into defense", materiel:"Balls on the serving side, 1 setter on the receiving side", objectif:"Link the serve to the next task: serve then immediately enter the court and dig an attack.",
  deroule:["The server executes a targeted serve to zone 5.","Right after, they enter the court in a back-row defensive stance.","The coach sends an attack from the opposite court; the server must dig it.","Link 3 cycles per player before rotating."],
  consignes:["Don't watch your serve leave: enter immediately","Low stance, arms ready before the opponent's hit","The serve serves the task: safety first"],
  variantes:["Harder: add a coverage after the dig","Easier: the opposing attack is called and measured"]},
 "Triangle de réception à trois":{nom:"Three-player reception triangle", materiel:"Balls, 1 server, 1 setter target in zone 2-3", objectif:"Structure the 3-passer reception and set the zone and calling responsibilities.",
  deroule:["3 passers in a triangle cover the court; a server serves from the other side.","The passers call loudly (“mine / yours”) and send the ball to the setter target.","Score the quality: perfect pass (on target) = 3, playable = 1, missed = 0.","20 serves then rotate the roles."],
  consignes:["Share the court: everyone their zone, a ball between two belongs to whoever is closest to the target","Move toward the ball, don't back up on your feet","Passing platform angled toward the setter"],
  variantes:["Harder: alternate jump / float serve","Easier: 4-player reception or a topspin serve"]},
 "Lecture du serveur et réception-passe":{nom:"Reading the server and pass-set", materiel:"Balls, 1 fixed setter", objectif:"Link reception and distribution: the setter comes off the passed ball to feed a wing.",
  deroule:["2- or 3-player reception, the setter starts from zone 1 and reaches zone 2-3.","On every good pass, the setter distributes to zone 4 where an attacker finishes off a self-toss.","Count the complete successful pass-set-attack sequences.","Change setter every 10 sequences."],
  consignes:["Passer: aim high and above the target to give the setter time","Setter: be stopped and balanced before setting","Read the server's shoulder to anticipate the zone"],
  variantes:["Harder: setter coming out of reception, 2 attack options","Easier: setter already in place"]},
 "Passeur sous les deux ailes":{nom:"Setter to both wings", materiel:"Balls, targets in zone 4 and zone 2", objectif:"Develop the setter's accuracy and consistency to both wings, coming out of different positions.",
  deroule:["The coach tosses varied balls (good and less good) to the setter in zone 2-3.","The setter alternates front set (zone 4) and back set (zone 2) as called.","Target: a hoop or a cone 1 m from the net, at hitting height.","15 balls, score the sets into the usable attack zone."],
  consignes:["Shoulders square to the front, the back doesn't give away the back set","Hands above the forehead, a symmetric push","Reposition after every toss from the coach"],
  variantes:["Harder: add the jump set","Easier: steady tosses to the same spot"]},
 "Attaque d'aile en zone 4":{nom:"Wing attack in zone 4", materiel:"Balls, 1 setter, floor targets on the opposite side", objectif:"Build the approach and the attacking hit in zone 4 off a set from zone 3.",
  deroule:["A line of attackers in zone 4. The setter is in zone 3.","The coach sends the ball to the setter, who distributes to zone 4.","The attacker makes their approach (last steps left-right for a right-hander) and hits cross-court.","Aim at a floor target in the opponent's zone 5; count the hits in the target."],
  consignes:["Wait, then trigger the approach when the ball leaves the setter's hands","Cock high, elbow above the shoulder","Hit above and in front, finish the motion toward the target"],
  variantes:["Harder: add a passive then an active block","Easier: a setter who delivers a high, slow ball"]},
 "Attaque + couverture + replacement":{nom:"Attack + coverage + repositioning", materiel:"Balls, net, opposing block (2 players)", objectif:"Link the attack, the coverage of your own attacker, then the defensive recovery, as in a match.",
  deroule:["Pass → set → attack in zone 4 against a double block.","Immediately, the other players gather in coverage around the attacker.","If the ball is blocked back and drops, the coverage digs it up and the action is replayed.","Then recovery: everyone returns to their defensive base. 3 cycles per rotation."],
  consignes:["Coverage low and close, from the attacker's cocking motion","Don't admire your attack: link the next task","Constant communication on the blocked ball"],
  variantes:["Harder: active block + opposing back-row defenders","Easier: passive block, free attack","Shorter: focus only on the coverage, on a half court, without the recovery","Coverage required in two lines (near and far)"]},
 "Bloc à deux : ailier + central":{nom:"Double block: outside + middle", materiel:"Net, attackers or a platform, 1 opposing setter", objectif:"Sync the double block (outside and middle) and close the cross-court.",
  deroule:["The opposing setter distributes to zone 4; the outside blocker sets the block, the middle joins.","The two blockers must jump together, hands joined, with no gap.","Behind, a defender covers the open zone (the line).","Alternate attacks in zone 4 and zone 2; 12 balls."],
  consignes:["The outside sets the position, the middle adjusts to them","Close the gap between the two pairs of hands","Block the cross-court, leave the line to the defender"],
  variantes:["Harder: a setter who varies zone 4 / zone 2 with no call","Easier: attack only in zone 4"]},
 "Défense derrière le bloc":{nom:"Defense behind the block", materiel:"Balls, a platform or attacking chair, 1 block", objectif:"Place the back-row defenders according to the block and retrieve hard balls and tips.",
  deroule:["A block is set in zone 4. Two defenders position themselves: one in zone 5 (cross-court), one shifted in zone 6.","The coach attacks hard cross-court, then places a tip.","The defenders dig toward the setter target.","15 balls mixing hits and tips."],
  consignes:["Stopped at the moment of the hit, weight forward","Arms extended in front, don't swing the arms","Always a player ready to move up on the tip"],
  variantes:["Harder: add a 3rd defender and attacks in zone 2","Easier: only measured cross-court balls"]},
 "Plongeons et récupération de balles basses":{nom:"Dives and retrieving low balls", materiel:"Balls, mat optional", objectif:"Dare to go to the floor safely and retrieve far balls (dive, roll, low forearm pass).",
  deroule:["Technical review: plant the knee, cushion with the arms, shoulder roll.","The coach throws short balls and to the sides, further and further.","The player starts from a central position, retrieves and digs the ball high.","3 sets of 6 balls, rest between sets."],
  consignes:["Move in low toward the ball before diving","Never land on the wrists or on extended elbows","Dig the ball high, even off balance"],
  variantes:["Harder: start with the back turned, a sound signal","Easier: balls thrown closer and higher"]},
 "6 contre 6 à thème : 3 contacts obligatoires":{nom:"6-v-6 theme: 3 contacts required", materiel:"Full court, net, balls", objectif:"Encourage building the play by requiring the three contacts before returning.",
  deroule:["A classic 6-v-6 match but each team must use pass-set-attack (3 contacts).","Returning in 1 or 2 contacts = point for the opponent.","Play 2 sets to 15 points, regulation rotation on winning the serve.","The coach quickly feeds a new ball after each dead ball to keep the rhythm."],
  consignes:["Always look for the setter after the pass","Communicate the build-up out loud","Accept the error: you build, you don't rush"],
  variantes:["Harder: no attacking in zone 4 (force variety)","Easier: allow a 2-contact return on a tough pass"]},
 "Wash : marquer deux fois pour gagner le point":{nom:"Wash: score twice to win the point", materiel:"Full court, balls on the coach's side", objectif:"Intensify the competition: a team must win the serve phase AND the counter-attack to score a point.",
  deroule:["Ball 1: team A serves and the point is played (side-out phase).","Ball 2: the coach immediately feeds a free ball to team A (counter-attack).","If A wins both balls = 1 “wash” point. Otherwise, 0 and move on.","First to 7 wash points; then switch the serving roles."],
  consignes:["Stay focused on the 2nd ball, often decisive","Fast transition after the side-out","Manage the emotion: the sequence isn't over after the 1st ball"],
  variantes:["Harder: 3 balls in a row to win","Easier: only 1 ball counts, the 2nd is a bonus"]},
 "Complexe K1 : réception – attaque gagnante":{nom:"K1 complex: reception – winning attack", materiel:"Court, net, balls, an opposing server", objectif:"Repeat the first play sequence (side-out): pass, set, finished attack, in a given rotation.",
  deroule:["The team sets up in a precise rotation. An opposing server serves.","Pass → set → attack: the goal is to finish the point directly.","Repeat the same rotation 8 times in a row, then rotate one position.","Score the side-out percentage (points won on served balls)."],
  consignes:["Each player knows their task in the rotation","The setter favours their best-placed attacker","Aim for efficiency, not power"],
  variantes:["Harder: add a full opposing block and defense","Easier: a measured serve, no block"]},
 "Circuit gainage et pliométrie volley":{nom:"Core and plyometrics circuit for volleyball", materiel:"Mat, possibly a step/box, a stopwatch", objectif:"Strengthen the core, the posterior chain and the jump, without a ball, at the end of or outside a session.",
  deroule:["5 stations, 40 s work / 20 s rest: plank, jump lunges, side plank (each side), jump squats, mountain climbers.","Go through the circuit with no long pause between stations.","2 min recovery, drink, then a 2nd round.","3 rounds depending on level and period."],
  consignes:["Quality over quantity: neutral back, core engaged","Cushion the jump landings, knees in line","Steady breathing, don't hold your breath"],
  variantes:["Harder: 45/15 and 4 rounds, add weight","Easier: 30/30 and 2 rounds"]},
 "Appuis, vitesse et échelle de rythme":{nom:"Footwork, speed and agility ladder", materiel:"Agility ladder or cones, cones", objectif:"Improve footwork quality, foot speed and coordination, useful for block and defense movement.",
  deroule:["High knees in the ladder, one foot per box, then two feet per box.","Lateral shuffle steps along a line, staying low.","3 m sprint, stop in a defensive stance, return with shuffle steps.","4 to 6 runs, walking recovery between each."],
  consignes:["Weight on the balls of the feet, active arms","Stay low on the lateral moves","Quality and rhythm before pure speed"],
  variantes:["Harder: add a visual signal to change direction","Easier: slow down and focus on foot placement"]},
 "Échange russe":{nom:"Russian exchange", materiel:"3 balls, a court, at least 4 players (2 per side)", objectif:"Develop reactivity, communication and pair coordination under pressure, handling several balls at once in a fast, playful exchange game.",
  deroule:["Form 2 groups. Two players from each group come in, one group on each side of the net (2 players per side); the others wait behind, split evenly.","On each side, one of the two players holds a static ball in their hands. A third ball is put in play over the net.","If the moving ball comes to a player with no ball in hand, they simply return it to the other side of the net.","If the moving ball comes to the player holding the static ball, they must first pass it to their teammate (the other player on their side), then return the moving ball.","The rally continues as long as the moving ball doesn't touch the floor.","On each contact with the moving ball, the player comes out and is immediately replaced by a waiting partner from their group."],
  consignes:["Stay in a low, ready stance, eyes fixed on the moving ball","Share the side: know at every moment which of the two holds the static ball","A fast, accurate pass to the teammate to free the hands before returning","Constant communication between the two players on a side, and a smooth rotation on every contact"],
  variantes:["Harder: require the return mode (forearm pass only) or put a second moving ball in play","Easier: allow one floor bounce of the moving ball before playing it, or slow down the put-in"]},
 "Rester au service":{nom:"Keep the serve", materiel:"Balls, full court, ~5 players per side (3 passers + 2 servers)", objectif:"Work on reception quality (high and within 3 metres) under the pressure of a real serve, in a competitive game where you try to keep your spot at the serve.",
  deroule:["On each side of the net: 3 passers in the reception zone and 2 servers behind the end line. Extra players join the servers.","The servers serve, alternately, toward the passers across the net.","The passer must pass high and within 3 metres, then catch their own ball: the pass must be fully controlled.","Each passer who succeeds swaps places with the server whose serve they just passed — so they move to the serve, on the other side.","Goal of the game: stay at the serve as long as possible. The servers therefore look for a fair but demanding serve, the passers a clean pass to earn a server's spot."],
  consignes:["Reception: angled platform, ball high and short (within 3 m) so you can catch it","Read the server and move fast under the ball, stopped before contact","Share the balls and call between the 3 passers","Servers: aim at tough zones and vary, while staying in the court"],
  variantes:["Harder: pass to be caught in a hoop or a reduced zone, or a jump serve","Easier: widen the target to the whole court, or require a measured float serve"]},
 "Passe triangle":{nom:"Triangle setting", materiel:"1 ball, a space for 3 (or 4) players", objectif:"Work on accurate setting on the move and communication, linking set then movement without dropping the ball.",
  deroule:["Three players form a triangle. The spacing sets the difficulty: tight to start, wide to make it harder.","The ball starts from one player. Each sets (overhead) to the player on their right.","Right after their set, the player moves to the position on their left.","Link set then movement continuously, as long as possible, until the ball drops.","Count the successful sets in a row and try to beat the group's record."],
  consignes:["A high, accurate set, slightly ahead of the arriving player","Move fast after the set: be stopped and in place before receiving","Look at your target before setting, keep the triangle balanced","Communicate constantly so as not to get in each other's way on the moves"],
  variantes:["Easier: a 4-player version; more time to get in place","Harder: widen the triangle, require the jump set, or add a 2nd ball"]},
 "Bloc - Déf - Bloc":{nom:"Block - Dig - Block", materiel:"2 balls, 1 net; 3 active players (the others rotate)", objectif:"Link block, dig then block in a fast sequence to work on the turnaround, reactivity and the separation between the net task and the back-row defense.",
  deroule:["Player A, on one side of the net, holds a ball up just above the tape, but in their own court.","On the other side: the active player (B) is tight to the net, facing the held ball; player C stands about 5 m behind B, a ball in hand.","B jumps and touches the ball held by A — a block motion.","On landing, B turns around at once and digs an attack sent by C — a dig motion.","B turns back to the net and jumps to catch the held ball — a block motion.","Link block – dig – block continuously over a set (6 to 10 cycles), then change the active player."],
  consignes:["Block: hands high and penetrating, a balanced jump, land on both feet ready to pivot","A fast but controlled turnaround, the eyes find the next ball right away","Low defense, arms extended in front, cushion the ball upward","C adjusts the power and timing of the attack so the sequence stays doable"],
  variantes:["Easier: slow the pace, C sends a measured, called ball, reduce the distance","Harder: increase the number of cycles, vary C's attack zone, or add a lateral move between the block and the dig"]},
 "Roi du terrain (3 contre 3)":{nom:"King of the court (3-v-3)", materiel:"Full court, net, balls on the coach's side", objectif:"A competitive 3-v-3 game where you try to conquer and keep the “king” side of the court: all the fundamentals (serve, reception, set, attack, defense) are worked under match intensity.",
  deroule:["Form 3 or 4 teams of 3 players. One team holds the “king” side, another the “challenger” side, the others wait behind the challenger side.","The challenger team serves to the king team and the rally is played.","If the king team wins, it stays on the king side; if the challenger wins, it takes the king side and the old king goes to wait behind.","After each rally, the next waiting team comes in to serve and try to become king.","Two scoring modes to choose from: score on every rally won, or only when winning on the king side. First team to a set total (e.g. 15 points)."],
  consignes:["Link quickly: serve ready as soon as the court frees up","King side: secure every ball, the goal is to stay there","Communicate responsibilities: in 3-v-3, everyone touches a lot","Manage the intensity, the team rotations are fast"],
  variantes:["Easier: the coach feeds an easy ball to the king side to start the rally","Harder: only allow a point when winning on the king side, or require 3 contacts"]},
 "Papillon (butterfly)":{nom:"Butterfly", materiel:"2 balls, net, 1 target/setter near the net on each diagonal", objectif:"A complete, continuous warm-up linking serve, reception and set: everyone follows their ball and changes role, which strings the reps together with no dead time.",
  deroule:["Two diagonal lines on either side of the net. On one side a server; across, a passer and a target (setter) near the net.","The server serves cross-court to the passer.","The passer passes to the target at the net, who catches or sets the ball.","Everyone follows their ball: the server moves to the reception zone, the passer takes the target's spot, the target retrieves the ball and joins the serving line.","Two balls run at the same time (one per diagonal) to keep a high rhythm."],
  consignes:["Reception angled toward the target, high and accurate","Link your movement as soon as the action ends, stay alert to the 2nd ball","A steady serve into the target: it's a warm-up, not a power contest","Communicate so as not to cross dangerously"],
  variantes:["Easier: replace the serve with a throw, use only one diagonal","Easier: no setter, pass directly to a target (serve → reception flow)","Harder: more aggressive serve, reduced reception target","Harder: add a 3rd “disruptor” ball (concentration passing) or require a jump set at the target"]},
 "Quads service-réception-passe":{nom:"Quads: serve-reception-set", materiel:"2 balls per group of 4, 1 net", objectif:"Ball control with 4 players linking serve, reception and set, with a fast flow thanks to a second ball that immediately restarts the action.",
  deroule:["In groups of 4: on one side a passer, a setter and a target; on the other a server. The server and the target each have a ball.","The server serves to the passer.","The passer passes to the setter, who sets to the target.","As soon as the first ball crosses the net, the target feeds their ball to the server to restart at once.","Link until a set number of good passes, then rotate the roles (several groups of 4 can play on one court)."],
  consignes:["Keep a high tempo thanks to the 2nd ball: no dead time","Angled reception, an accurate pass to the setter then to the target","If needed, replace the serve with a throw (beginners or tired shoulders)","Count the good passes in a row"],
  variantes:["Cross-court: the passer starts in zone 1 to work other angles","Vary the put-in: a topspin throw (mimics topspin), a two-handed flat throw (mimics the float)"]},
 "Passes arrières en chaîne":{nom:"Back sets in a chain", materiel:"1 ball", objectif:"Repeat the back set (a push set above the head) in a continuous chain, to make the motion and accuracy automatic.",
  deroule:["All the players stand in a column, one behind the other, facing a single player in front of the column.","The single player makes a front set (overhead) to the first player in the column.","That player makes a back set, above their head, to the player behind them.","Each player links the same back set on down the line, to the last player in the column.","The last player returns the ball with a long pass over the whole column to the single player, and the cycle starts again."],
  consignes:["Back set: ball above the forehead, push up and back, tilt the gaze at the last moment","A high, readable set for the next player, let them get under it","Keep the column lined up with an even spacing","Call the ball to keep the chain flowing"],
  variantes:["Easier: reduce the spacing between players, allow a control to self if the back set is too hard","Harder: widen the spacing, or have each player follow their set to the end of the column (continuous rotation)"]},
 "Aller-retour montées de genoux":{nom:"Up-and-back high knees", materiel:"None", objectif:"Cardio activation and warming up the lower limbs, with high knees on an up-and-back to the net.",
  deroule:["Stand on the end line. Move up to the net with high knees (knee to hip height).","Touch the net (or the attack line) then come back with a light jog.","Link 4 to 6 up-and-backs at a steady pace.","In waves if the group is large, staggered starts."],
  consignes:["Knee high, trunk upright, eyes forward","Dynamic push on the balls of the feet","The arms drive the motion, elbow at 90°"],
  variantes:["Harder: increase the frequency or lengthen the distance (end line to end line)","Easier: reduce the knee height and the distance"]},
 "Aller-retour fentes + geste d'attaque":{nom:"Up-and-back lunges + attack motion", materiel:"None", objectif:"Mobilize the hips and shoulders by combining forward lunges and the arm's attack motion, on an up-and-back to the net.",
  deroule:["From the end line, move toward the net in walking forward lunges.","On each lunge, perform a full arm attack motion (cock then hit into the air).","Come back jogging, then start again.","4 to 6 up-and-backs."],
  consignes:["Lunge: knee in line with the foot, a controlled descent","Cock high, elbow above the shoulder, a full hitting motion","Brace the core to stay stable on the lunge"],
  variantes:["Harder: jump lunge + attack motion","Easier: shorter lunges, an arm motion without full range"]},
 "Aller-retour talons-fesses / pas chassés":{nom:"Up-and-back butt kicks / shuffle steps", materiel:"None", objectif:"Warm up the posterior chains and the lateral footwork, alternating butt kicks on the way up and shuffle steps on the way back.",
  deroule:["Go up to the net with butt kicks (heel to the buttock, a fast rhythm).","Come back with lateral shuffle steps, chest square, without crossing the feet.","Change the shuffle side on each return.","4 to 6 up-and-backs."],
  consignes:["Butt kicks: trunk upright, high frequency","Shuffle steps: stay low, don't cross the feet","Keep the shoulders square to the net"],
  variantes:["Harder: link without pause and raise the cadence","Easier: slow down and shorten the distance"]},
 "Aller-retour en position basse":{nom:"Up-and-back in a low stance", materiel:"None", objectif:"Wake up the defensive posture and the footwork, moving low with a floor touch at each line, to the net and back.",
  deroule:["Start in a low defender's stance: knees bent, arms in front.","Move up to the net in small fast steps; at each court line, touch the floor with one hand.","Come back the same way, always in a low stance.","3 to 5 up-and-backs."],
  consignes:["Stay low throughout, back straight, weight on the balls of the feet","Touch the floor without standing fully back up","Short, fast steps"],
  variantes:["Harder: add a change of direction on a signal","Easier: fewer floor touches, a shorter distance"]},
 "Aller-retour pas croisés (carioca)":{nom:"Up-and-back cross-over steps (carioca)", materiel:"None", objectif:"Work on coordination and hip mobility moving laterally with cross-over steps (carioca), on an up-and-back along the net.",
  deroule:["Move laterally along the net with cross-over steps: one foot crosses in front, the other behind, alternately.","Keep the chest square to the net, the hips mobile.","Go one way, come back the other.","4 to 6 runs."],
  consignes:["Chest stable and square to the net, only the hips rotate","Steady rhythm, weight on the balls of the feet","Look ahead, not at the feet"],
  variantes:["Harder: raise the cadence and link with a sprint","Easier: slow down and reduce the range"]},
 "Baguettes chinoises":{nom:"Chopsticks", materiel:"1 ball per player", objectif:"Ball touch and one-arm forearm control: keep the ball up by juggling, alternating arms.",
  deroule:["One player, one ball. Bounce the ball off the forearm (a forearm-pass motion), one arm at a time.","Alternate right arm and left arm on each contact, keeping the ball up.","Move laterally to bring the ball from one arm to the other.","Count the number of touches in a row without dropping it."],
  consignes:["Firm, flat forearm, touch the ball right in the centre","Bend the legs and get under the ball before each contact","Keep the ball at a manageable height, especially at the start"],
  variantes:["Easier: a single arm, steady and not-too-high bounces","Harder: send the ball higher, alternate faster, bigger moves"]},
 "Échange chinois":{nom:"Chinese exchange", materiel:"1 ball per 2", objectif:"One-arm forearm control and accuracy, in a cooperative pair exchange.",
  deroule:["Two players facing each other, a few metres apart, with a ball.","Pass to each other with a single arm.","Keep the exchange going as long as possible without dropping the ball.","Count the successful exchanges and aim for a streak."],
  consignes:["Firm forearm, angle the contact toward the partner","Bend the legs and get under the ball","Measure the force for a steady exchange"],
  variantes:["Easier: bring the players closer, allow both arms","Harder: increase the distance, require the weak arm, add a move"]},
 "Manchette sur soi-même":{nom:"Forearm pass to self", materiel:"1 ball per player", objectif:"Improve forearm-pass control and control of the ball's trajectory with successive touches to self.",
  deroule:["Each player takes a ball and stands in a free space on the court.","Perform successive forearm passes to self, trying to keep the ball up as long as possible.","Link the touches without moving, adjusting mainly the height and the leg position."],
  consignes:["Favour working the legs to control the ball's trajectory.","Limit arm movement as much as possible: keep a stable platform.","Move as little as possible and stay balanced under the ball.","Keep the ball at a height that lets you link touches easily."],
  variantes:["Easier: stop the ball after each forearm pass.","Harder: deliberately increase the height of the passes while keeping control of the ball."]},
 "Passe haute sur soi-même":{nom:"Overhead set to self", materiel:"1 ball per player", objectif:"Improve overhead-set control and control of the ball's trajectory to self.",
  deroule:["Each player takes a ball and stands in a free space on the court.","Perform successive overhead sets to self, trying to keep the ball up as long as possible.","Link the touches without moving, repositioning under the ball each time."],
  consignes:["Form a window with the hands above the forehead, fingers spread and relaxed.","Play the ball with the fingers, without carrying it or hitting it with the palms.","Accompany the set with an extension of the legs and arms.","Keep the ball at a height that lets you link touches easily."],
  variantes:["Higher: deliberately increase the height of the sets while keeping control of the ball."]},
 "Contre débutant":{nom:"Beginner block", materiel:"1 ball per pair", objectif:"Learn hand placement over the net and jump coordination to make a block.",
  deroule:["In pairs, one player stands near the net with a ball held in both hands, arms raised and the ball above the net.","Across, the other player stands near the net, ready to jump.","On the signal, the player jumps vertically, reaches the hands over the net and catches the ball with both hands.","They then bring the ball back to their side of the court before coming down.","Switch roles after several reps."],
  consignes:["Jump vertically, without touching the net.","Reach the hands over the net, keeping the fingers spread and the hands angled toward the opponent's court.","Keep the arms extended at the moment of the jump.","Coordinate reaching the hands over with the jump to meet the ball at the highest point."],
  variantes:["Easier: hold the ball lower to make the catch easier.","Harder: the player holding the ball moves it slightly to the sides to force the blocker to adjust their placement."]},
 "Passe dans le cercle":{nom:"Set into the hoop", materiel:"1 ball and 2 hoops per 2", objectif:"Work on the accuracy of the overhead set at distance: drop the ball into the partner's hoop, taking it again after the bounce.",
  deroule:["Two players facing each other, about 8 metres apart, a hoop on the floor in front of each.","An overhead set that must drop into the hoop across.","Let the ball bounce once, then take it again in a set to aim at the other's hoop again.","Link as long as possible; count the sets that land in the hoop."],
  consignes:["A high, lobbed set so it drops vertically into the hoop","Get under the ball after the bounce, hands above the forehead","Aim at the hoop, not the partner, and measure by the distance"],
  variantes:["Easier: bring the players closer or enlarge the target","Harder: move further apart, shrink the target, require the jump set"]},
 "Passe dans le cercle avancée":{nom:"Set into the hoop, advanced", materiel:"1 ball and 3 hoops per 2", objectif:"Same principle as “Set into the hoop”, but the target changes with the partner's position: work on accuracy and reading information before setting.",
  deroule:["Two players facing each other about 8 m apart, a hoop in front of each, plus a hoop in the middle between them.","After their set, the player chooses to stand physically in their own hoop or stay behind it.","The player across adapts their set to the other's position: partner in their hoop → a set dropping into the middle hoop; partner behind their hoop → a set dropping into the partner's hoop.","Let it bounce, then take it again in a set under the same conditions. Link."],
  consignes:["Read the information about the partner's position before setting","A high, lobbed set, aim at the right target in each case","Reposition fast under the ball after the bounce: it's a reading drill as much as an accuracy one"],
  variantes:["Easier: slow down, bigger hoops, reduced distances","Harder: move the players further apart, add a movement instruction after the set"]},
 "Passe arrière après demi-service":{nom:"Back set after a half-serve", materiel:"1 or 2 balls", objectif:"Work on the back set after an easy pass.",
  deroule:["A setter stands in position 3 or 2, a passer in position 4.","The other players stand opposite the passer, on the other court.","The waiting players start the point with a mid-court serve, or an attack with feet on the ground.","The setter makes a back set to position 2 for the opposite.","The drill can be mirrored on the other side of the court."],
  consignes:["A high pass to give the setter time to move and align.","The setter must manage both the height and the depth of the set depending on where they are on the court."],
  variantes:["Easier: throw the ball instead of the half-serve","Harder: a back set to the 3 m line for an attack from the back row"]},
 "Échauffement passe au mur":{nom:"Wall setting warm-up", materiel:"1 ball per player, a wall", objectif:"Work on set control and a consistent touch using a wall rather than a partner.",
  deroule:["Each player stands facing the wall with a ball.","Link as many sets as possible against the wall, without dropping the ball.","Vary the distance to the wall to work different muscles and ball controls."],
  consignes:["Form a window with the hands above the forehead, relaxed fingers.","Stay balanced under the ball and reposition between each set.","Close to the wall: fast, accurate sets; far from the wall: higher, more powerful sets."],
  variantes:["Easier: let the ball bounce once on the floor between two sets.","Harder: alternate overhead set and forearm pass, or aim at a target on the wall.","With several: take turns on one wall, or link a set to the wall then a set to a partner."]},
 "Échauffement manchette au mur":{nom:"Wall forearm-pass warm-up", materiel:"1 ball per player, a wall", objectif:"Work on forearm-pass stability and control of the arm platform by returning the ball against a wall.",
  deroule:["Each player stands facing the wall with a ball.","Link as many forearm passes as possible against the wall, without dropping the ball.","Vary the distance to the wall to adjust the angle and power of the platform."],
  consignes:["Arms extended and joined, a stable platform: it's the legs that give the trajectory.","Aim slightly high on the wall to keep time to reposition.","Stay balanced under the ball and reposition between each contact."],
  variantes:["Easier: let the ball bounce once on the floor between two passes.","Harder: alternate right and left forearm pass (one arm / off balance), or aim at a target on the wall.","With several: take turns on one wall, or alternate a pass to the wall then a pass to a partner."]},
 "Attaque au mur avec rebond":{nom:"Wall attack with a bounce", materiel:"1 ball per player, a wall", objectif:"Work on the hitting motion and topspin of the attack: hit toward the floor so the ball bounces then touches the wall, and retrieve the return.",
  deroule:["Each player stands a few metres from the wall with a ball.","Toss the ball to self and hit it toward the floor (like a spike) so it bounces on the floor then touches the wall.","Retrieve the ball off the wall and start again, trying to link reps.","Vary the distance to adjust the hitting angle."],
  consignes:["Hit above the shoulder, arm extended, with a wrist snap to topspin the ball toward the floor.","Aim at a spot on the floor close enough to the wall so the bounce stays controllable.","Keep your eyes on the ball on the return and reposition quickly for the next hit."],
  variantes:["Easier: let the ball bounce on the floor on the return before taking it again.","Harder: link without the ball dropping to the floor on the return (a direct take), or alternate line / cross-court hit.","With several: take turns on one wall, one hits, the other retrieves and feeds."]},
 "Déplacement de bloc aux 3 postes":{nom:"Block footwork to the 3 positions", materiel:"The net (balls optional)", objectif:"Work on the blocker's footwork moving from one position to another along the net, jumping at each position.",
  deroule:["The blocker starts in zone 4 (left wing), facing the net.","A block jump in zone 4, then a move to zone 3 (centre) and a new block jump.","A move to zone 2 (right wing) and a last block jump.","Come back in reverse; link several up-and-backs."],
  consignes:["A shuffle step for a small move, a cross-over step to go faster to the centre.","Always finish square to the net, stopped and balanced, before jumping.","Hands high on arriving at the position, a vertical jump, landing on two feet."],
  variantes:["Easier: walk the moves, focus on the step order.","Warm-up without a ball: only the footwork and the block jump, at the start of a session.","Mirror: two players on each side of the net sync their blocks.","With reading: the coach gives the direction at the last moment, the blocker reads before moving.","Harder: a partner on a box attacks a ball at the arrival position (a real block).","Timed: number of clean blocks in 30 seconds."]},
 "Lecture et bloc (read block)":{nom:"Read and block", materiel:"Balls, the net", objectif:"Teach the blocker to read the opponent's play (the set and the attacker's shoulder) to move and block the right attacker.",
  deroule:["Three attackers are ready on the opposite side (wings and middle); the coach distributes to one of them.","The blocker, at the middle of the net, watches the set and goes to block the attacker who was set.","They move to the right position and jump, penetrating the hands; the defenders position around the block.","Vary the targeted attacker on each rep."],
  consignes:["Don't leave on the fake: read the set's trajectory before moving.","Stay square to the net, arrive stopped before jumping.","Take a clear option (line or cross-court) and leave the rest to the defense."],
  variantes:["Easier: only two attackers (wing and middle).","Harder: a double block, to sync at the attack position.","With real play: play the point after the block."]},
 "Service sous pression (défi d'équipe)":{nom:"Serving under pressure (team challenge)", materiel:"Balls, the net", objectif:"Serve consistently despite the stress, reproducing the pressure of an important match moment.",
  deroule:["The team must make a number of consecutive serves in the court (e.g. 8 in a row).","Each player serves in turn; a missed serve resets the count to zero.","You can require a target zone so an inaccurate serve doesn't count.","Raise the goal over the sessions."],
  consignes:["Keep your serving routine, even under pressure (breathing, a steady toss).","Take a safety margin when the count climbs, without becoming too timid.","Stay focused on your target, not on the challenge score."],
  variantes:["Easier: a shorter goal, any zone accepted.","Harder: a strict target zone, or two teams in a parallel contest.","Jump serve required for advanced players."]},
 "Lignes d'attaque (diagonale / ligne)":{nom:"Attack lines (cross-court / line)", materiel:"Balls, the net, floor targets", objectif:"Work on the attacking hit alternating cross-court and line, toward precise targets.",
  deroule:["The setter delivers a high ball to the left wing (zone 4).","The attacker takes their approach and hits, alternating a cross-court attack then a line one.","Aim at floor targets (deep cross-court, line along the sideline tape).","Link the reps, then change wings."],
  consignes:["A full approach, hit at the highest point, arm extended.","For the line: hit the ball a bit earlier and close the shoulder; for the cross-court, open it.","Aim at the target, not just “hard”: accuracy comes first."],
  variantes:["Easier: a ball thrown by hand by the coach instead of a real set.","Harder: add a one-player block, or shrink the targets.","Also work the opposite (zone 2) and the back-row attack."]},
 "Jouer le bloc (sortie / touche-dehors)":{nom:"Playing the block (tool / wipe off)", materiel:"Balls, the net", objectif:"Learn to attack against a block: use the block's hands to send the ball out, or hit around it.",
  deroule:["A one- or two-player block is in place on the opposite side.","The setter delivers to the attacker, who tries to use the block: hit high off the hands to send it out (the tool), or go around.","Vary the solutions: tool, line, cross-court, tip.","Alternate the attackers and the block height."],
  consignes:["Watch the block in the air: aim at the outside of the hands for the tool.","Don't force into the block: choose the solution by what the block leaves.","Keep a high, full hit, even when playing finesse."],
  variantes:["Easier: a passive block (hands extended, no jump) to aim at the tool.","Harder: an active double block, defense behind.","Require the solution (tool, then tip, then line) on each turn."]},
 "Bloc réflexe":{nom:"Reflex block", materiel:"1 ball, the net", objectif:"Work on reaction time and block timing: follow a player in a mirror along the net and jump at the same time as them.",
  deroule:["Two players stand facing each other on either side of the net, near one end. One holds a ball.","The player with the ball moves in fast shuffle steps along the net, and jumps when they want, raising the ball above the net.","The other player follows in a mirror, facing them, in shuffle steps.","When the first jumps, the second must jump on reflex to catch the ball above the net."],
  consignes:["Stay square to the net, shoulders parallel, throughout the move.","Don't anticipate the jump: react to the opposing player's start (reflex work).","Jump vertically, hands high, and catch the ball at the highest point."],
  variantes:["Easier: slower moves and called jumps.","Harder: changes of direction and jump fakes by the leader.","The leader pushes the ball over the net and the second must block it instead of catching it."]},
 "Sauvetage lointain":{nom:"Long-distance save", materiel:"Balls, the net", objectif:"Simulate a poor pass to chase down far: run to retrieve a ball sent very far and put it back in the court.",
  deroule:["A player, near the net, throws a ball very far out of the court.","The other player must run to chase the ball and bring it back as far as possible into the court.","Aim for a high dig toward the middle, playable by a partner.","Alternate roles and sides."],
  consignes:["Leave fast and read the trajectory from the throw: the run comes first.","Get under the ball and play low (forearm pass, sometimes one-handed) to bring it back.","Try to send it back high and to the middle, not just “touch” the ball."],
  variantes:["Easier: throw less far, allow a bounce.","Harder: throw further / flatter, require a dig target.","Link several saves in a row (physical work)."]},
 "Sauvetage lointain à 2 touches":{nom:"Long-distance save with 2 contacts", materiel:"Balls, the net", objectif:"Make a long-distance save as a pair: one player brings the ball to the middle, the other gets in place, calls, and returns it to the other side of the court.",
  deroule:["A player throws a ball very far out of the court.","The player closest to the ball runs to chase it and brings it back toward the middle of the court.","The second player calls to signal where they are, supports the first's run, then makes the return (more or less aggressive) to the other side of the net.","Alternate roles on each turn."],
  consignes:["The 1st saver plays the ball high and to the middle, playable by the 2nd.","The 2nd calls loudly (“mine!”) and gets in place early for the 2nd contact.","Constant communication and support: both run together, not each for themselves."],
  variantes:["Easier: the return can simply be a high ball over the net.","Harder: an aggressive return (a placed attack) at a target on the opponent's side."]},
 "Double défense avec réflexe":{nom:"Double defense with reflex", materiel:"2 balls", objectif:"Work on reception/defense and reading the play: link two balls coming from different directions, turning around between the two.",
  deroule:["Three players. One player stands with their back to the net with a ball; a second stands at the back of the court with a ball. The working player stands in the middle, at a right angle to the other two.","One of the two players attacks their ball toward the middle player, who digs it and returns it.","Right away, the other player sends their ball quickly: the middle player turns around after the 1st dig to play the 2nd ball.","Both balls are returned to the player near the net. Alternate the order (net first or back first) to train the reflex."],
  consignes:["Both returns go to the player near the net (a common target).","The ball coming from the back must be controlled before being returned, without rushing it.","Stay low and ready to pivot: it is a read-and-react drill based on where the ball comes from.","Reset to the centre after each cycle."],
  variantes:["Easier: call the order of the two balls (net then back).","Harder: vary the order without calling it and shorten the gap between the two balls."]},
 "Match 2 contre 2 terrain tronqué":{nom:"2-v-2 match, truncated court", materiel:"Net, balls, cones to mark the zones", objectif:"In 2-v-2, force short play and deep play: only very short balls (near the net) or very deep ones (the back) score, the neutral middle zone does not.",
  deroule:["A 2-v-2 match on a half court lengthwise (a narrow court).","Only balls landing in the first 3 metres (near the net) or beyond the 7-metre mark (the back) score the point.","A ball landing in the neutral middle zone (between 3 and 7 m) does not score: the rally continues or is replayed depending on the rule chosen.","Play in 3 contacts; rotate teams on a win or by score."],
  consignes:["Vary short play (tip, ball pushed near the net) and deep play (deep attack).","Read the opponent's position to aim at the zone left open.","Communicate and share the narrow court between the two of you."],
  variantes:["Easier: widen the scoring zones (e.g. 4 m / 6 m).","Harder: shrink the zones, or allow only the attack (no tip) in the back."]},
 "Parcours de réceptions":{nom:"Reception circuit", materiel:"Several balls, 1 setter", objectif:"Link three receptions on fast footwork (zones 4, 6, 2), returning cleanly to the central setter each time.",
  deroule:["A setter stands at position 3 (centre, near the net). The other players, each with a ball, wait behind position 5.","A waiting player sends their ball to the setter, who sends it first to zone 4 (short), then to zone 6, then to zone 2.","The working player moves very fast to link the three receptions in order and return each one to the central setter.","The setter moves as little as possible; link the cycle, then the next player takes over."],
  consignes:["Always return high and clean to the central setter.","Reset fast between each ball: footwork speed and balance before the contact.","The setter stays fixed in the centre: it is the player who runs, not the target."],
  variantes:["Harder: some of the setter's deliveries are attacks (not tossed balls) to raise the difficulty.","Easier: reduce to two zones, or leave more time between balls."]}
};
/* ===EN_NEXT=== */
