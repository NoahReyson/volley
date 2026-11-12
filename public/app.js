/* app.js — logique : rendu, schémas, routing, recherche, outils, favoris, séance, auth. Chargé en dernier.
   Fichier généré par découpage de l'app monofichier.
   Globales classiques (pas de module ES, pas de fetch) — ouverture file:// OK. */


/* =========================================================================
   Référentiels de filtres (dérivés / ordonnés)
   ========================================================================= */
const THEMES = ["Échauffement","Physique","Service","Réception","Passe","Attaque","Bloc","Défense","Jeu"];
const NIVEAUX = ["Débutant","Intermédiaire","Confirmé"];
const DUREES = [
  {key:"court", label:"≤ 10 min", test:d=>d<=10},
  {key:"moyen", label:"11–20 min", test:d=>d>10&&d<=20},
  {key:"long",  label:"> 20 min", test:d=>d>20}
];

/* Ordre d'affichage par type (échauffement d'abord), sans modifier les exercices.
   Le tri est stable : à l'intérieur d'un même type, l'ordre d'ajout est conservé. */
EXERCICES.sort((a,b)=>THEMES.indexOf(a.themes[0])-THEMES.indexOf(b.themes[0]));

/* état des filtres */
const state = { themes:new Set(), niveaux:new Set(), durees:new Set(), players:null, q:"", favOnly:false };

/* ---- favoris (stockés dans le localStorage, clé = nom de l'exercice) ---- */
function loadFavs(){ try{ return new Set(JSON.parse(localStorage.getItem("cv-favs")||"[]")); }catch(e){ return new Set(); } }
function saveFavs(){ try{ localStorage.setItem("cv-favs", JSON.stringify([...favs])); }catch(e){} }
let favs = loadFavs();
function isFav(ex){ return favs.has(ex.nom); }
function updateStar(el,on){ if(!el) return; el.textContent=on?"★":"☆"; el.classList.toggle("on",on); el.setAttribute("aria-pressed",on?"true":"false"); }
function popFav(el){ if(!el) return; el.classList.remove("pop"); void el.offsetWidth; el.classList.add("pop"); el.addEventListener("animationend",function h(){ el.classList.remove("pop"); el.removeEventListener("animationend",h); }); }
function toggleFav(ex,starEl){
  const added = !favs.has(ex.nom);
  if(added) favs.add(ex.nom); else favs.delete(ex.nom);
  saveFavs(); updateStar(starEl, favs.has(ex.nom));
  if(added) popFav(starEl);           // petit pop uniquement à l'ajout
  if(state.favOnly && document.body.dataset.view!=="detail") render();
}

/* =========================================================================
   Schéma de terrain → SVG (coords en mètres)
   ========================================================================= */
function esc(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
function courtSVG(schema, mini){
  const wall = schema.terrain==="wall";
  const half = schema.terrain==="half";
  const W=9, L=wall?6.5:half?9:18, pad=1.1;
  const vb=`0 0 ${W+pad*2} ${L+pad*2}`;
  const o=p=>p+pad;                // offset
  let s=`<svg viewBox="${vb}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Schéma de l'exercice"${mini===false?' class="sch-anim"':''}>`;
  // defs flèches
  s+=`<defs>
    <marker id="ah" markerWidth="5" markerHeight="5" refX="3.6" refY="2.5" orient="auto"><path d="M0,0 L4.5,2.5 L0,5 z" class="sch-arrowhead"/></marker>
    <marker id="ahb" markerWidth="5" markerHeight="5" refX="3.6" refY="2.5" orient="auto"><path d="M0,0 L4.5,2.5 L0,5 z" class="sch-arrowhead ball"/></marker>
  </defs>`;
  // sol + zones permanentes
  s+=`<rect x="${o(0)}" y="${o(0)}" width="${W}" height="${L}" rx="0.25" class="court-floor"/>`;
  // lignes d'attaque + filet
  const line=(x1,y1,x2,y2,cls="court-line")=>`<line x1="${o(x1)}" y1="${o(y1)}" x2="${o(x2)}" y2="${o(y2)}" class="${cls}"/>`;
  s+=`<rect x="${o(0)}" y="${o(0)}" width="${W}" height="${L}" rx="0.25" class="court-outline"/>`;
  if(wall){
    s+=line(0,0,9,0,"court-wall");  // le mur (ligne pleine épaisse) en haut
    for(let hx=0.15; hx<9; hx+=0.55){ // hachures du mur (côté extérieur)
      s+=`<line x1="${o(hx)}" y1="${o(0)}" x2="${o(hx-0.4)}" y2="${o(-0.4)}" class="court-wall-h"/>`;
    }
  }else if(half){
    s+=line(0,3,9,3);               // ligne d'attaque
    s+=line(0,0,9,0,"court-net");   // filet en haut
  }else{
    s+=line(0,9,9,9,"court-net");   // filet au centre
    s+=line(0,6,9,6);               // attaque haut
    s+=line(0,12,9,12);             // attaque bas
  }
  // éléments
  for(const e of (schema.elements||[])){
    if(e.type==="zone"){
      s+=`<rect x="${o(e.x)}" y="${o(e.y)}" width="${e.w}" height="${e.h}" rx="0.15" class="sch-zone"/>`;
    }
  }
  for(const e of (schema.elements||[])){
    if(e.type==="arrow"){
      const cls = e.kind==="ball"?"sch-arrow ball":e.kind==="pass"?"sch-arrow pass":"sch-arrow move";
      const mk = e.kind==="ball"?"url(#ahb)":"url(#ah)";
      s+=`<line x1="${o(e.x)}" y1="${o(e.y)}" x2="${o(e.x2)}" y2="${o(e.y2)}" class="${cls}" marker-end="${mk}"/>`;
    }
  }
  for(const e of (schema.elements||[])){
    if(e.type==="player"){
      const cls = e.team==="B"?"pl pl-b":e.team==="C"?"pl pl-c":"pl pl-a";
      s+=`<g class="${cls}"><circle cx="${o(e.x)}" cy="${o(e.y)}" r="0.52"/>`;
      if(e.label&&!mini) s+=`<text x="${o(e.x)}" y="${o(e.y)}" class="pl-label">${esc(e.label)}</text>`;
      s+=`</g>`;
    }else if(e.type==="ball"){
      s+=`<circle cx="${o(e.x)}" cy="${o(e.y)}" r="0.3" class="sch-ball"/>`;
    }else if(e.type==="cone"){
      const x=o(e.x),y=o(e.y);
      s+=`<path d="M${x} ${y-0.42} L${x+0.37} ${y+0.3} L${x-0.37} ${y+0.3} Z" class="sch-cone"/>`;
    }else if(e.type==="hoop"){
      s+=`<ellipse cx="${o(e.x)}" cy="${o(e.y)}" rx="0.72" ry="0.42" class="sch-hoop"/>`;
    }else if(e.type==="label"&&!mini){
      s+=`<text x="${o(e.x)}" y="${o(e.y)}" class="sch-text">${esc(e.label)}</text>`;
    }
  }
  s+=`</svg>`;
  return s;
}

/* Animation « construction » du schéma à l'ouverture d'une fiche de détail.
   Le décor (sol, lignes, filet, zones) reste fixe ; les joueurs/ballon/plots
   apparaissent en pop, puis les flèches se tracent une à une. Purement visuel,
   désactivé si prefers-reduced-motion. Rien à traduire. */
function animateSchema(scope){
  if(!scope) return;
  try{ if(matchMedia("(prefers-reduced-motion: reduce)").matches) return; }catch(e){}
  scope.querySelectorAll("svg.sch-anim").forEach(svg=>{
    // 1) pop-in des pions (joueurs, ballon, plots, cerceaux)
    const pops=svg.querySelectorAll(".pl, .sch-ball, .sch-cone, .sch-hoop");
    pops.forEach((el,i)=>{
      el.style.transformBox="fill-box"; el.style.transformOrigin="center";
      el.style.opacity="0"; el.style.transform="scale(.5)";
      setTimeout(()=>{
        el.style.transition="opacity .18s ease, transform .22s cubic-bezier(.34,1.56,.64,1)";
        el.style.opacity=""; el.style.transform="";
      }, 50+i*45);
    });
    const popDone=50+pops.length*45;
    // 2) tracé progressif des flèches, puis restauration du style d'origine
    svg.querySelectorAll(".sch-arrow").forEach((ln,i)=>{
      let len=0; try{ len=ln.getTotalLength(); }catch(e){ len=0; }
      if(!len) return;
      const mk=ln.getAttribute("marker-end");
      ln.style.transition="none";
      ln.style.strokeDasharray=len; ln.style.strokeDashoffset=len;
      if(mk) ln.setAttribute("marker-end","none");   // cacher la pointe pendant le tracé
      void ln.getBoundingClientRect();                // forcer un reflow
      setTimeout(()=>{
        ln.style.transition="stroke-dashoffset .4s ease";
        ln.style.strokeDashoffset="0";
        const restore=()=>{
          ln.removeEventListener("transitionend",restore);
          ln.style.transition=""; ln.style.strokeDasharray=""; ln.style.strokeDashoffset="";
          if(mk) ln.setAttribute("marker-end",mk);     // rendre pointe + pointillés d'origine
        };
        ln.addEventListener("transitionend",restore);
        setTimeout(restore,600);                        // filet de sécurité
      }, popDone+i*120);
    });
  });
}

/* styles SVG injectés (pour suivre le thème) */
const svgStyle = document.createElement("style");
svgStyle.textContent=`
svg .court-floor{fill:var(--court)}
svg .court-outline{fill:none;stroke:var(--court-line);stroke-width:.12}
svg .court-line{stroke:var(--court-line);stroke-width:.08}
svg .court-net{stroke:var(--court-line);stroke-width:.2;stroke-dasharray:.3 .18}
svg .court-wall{stroke:var(--court-line);stroke-width:.3;stroke-linecap:square}
svg .court-wall-h{stroke:var(--court-line);stroke-width:.1}
svg .sch-zone{fill:var(--accent);opacity:.22}
svg .pl circle{stroke:#fff;stroke-width:.08}
svg .pl-a circle{fill:var(--teamA)}
svg .pl-b circle{fill:var(--teamB)}
svg .pl-c circle{fill:var(--teamC)}
svg .pl-label{fill:#fff;font-family:var(--f-head);font-weight:700;font-size:.62px;text-anchor:middle;dominant-baseline:central}
svg .sch-ball{fill:var(--ball);stroke:#8a6a00;stroke-width:.05}
svg .sch-cone{fill:var(--accent)}
svg .sch-hoop{fill:none;stroke:var(--accent);stroke-width:.13}
svg .sch-arrow{fill:none;stroke-width:.11}
svg .sch-arrow.move{stroke:var(--fg)}
svg .sch-arrow.pass{stroke:var(--blue);stroke-dasharray:.35 .22}
svg .sch-arrow.ball{stroke:var(--ball);stroke-dasharray:.35 .22}
svg .sch-arrowhead{fill:var(--fg)}
svg .sch-arrowhead.ball{fill:var(--ball)}
svg .sch-text{fill:var(--fg);font-family:var(--f-body);font-weight:600;font-size:.6px;text-anchor:middle;dominant-baseline:central}
`;
document.head.appendChild(svgStyle);

/* =========================================================================
   Rendu des filtres
   ========================================================================= */
function chip(label, pressed, blue){
  const b=document.createElement("button");
  b.className="chip"+(blue?" blue":"");
  b.setAttribute("aria-pressed", pressed?"true":"false");
  b.textContent=label;
  return b;
}
function buildFilters(){
  const tc=document.getElementById("themeChips"); tc.innerHTML="";
  THEMES.forEach(t=>{
    const n=EXERCICES.filter(e=>e.themes.includes(t)).length;
    const c=chip("",state.themes.has(t),true);
    c.innerHTML=`${esc(themeLabel(t))} <span class="n">${n}</span>`;
    c.addEventListener("click",()=>{toggle(state.themes,t);c.setAttribute("aria-pressed",state.themes.has(t));render();});
    tc.appendChild(c);
  });
  const lc=document.getElementById("levelChips"); lc.innerHTML="";
  NIVEAUX.forEach(n=>{
    const c=chip(niveauLabel(n),state.niveaux.has(n),false);
    c.addEventListener("click",()=>{toggle(state.niveaux,n);c.setAttribute("aria-pressed",state.niveaux.has(n));render();});
    lc.appendChild(c);
  });
  const dc=document.getElementById("durChips"); dc.innerHTML="";
  DUREES.forEach(d=>{
    const c=chip(d.label,state.durees.has(d.key),false);
    c.addEventListener("click",()=>{toggle(state.durees,d.key);c.setAttribute("aria-pressed",state.durees.has(d.key));render();});
    dc.appendChild(c);
  });
  document.getElementById("favFilterBtn").setAttribute("aria-pressed",state.favOnly?"true":"false");
  if(buildFilters._bound) return;   // écouteurs uniques (buildFilters peut être rappelé au changement de langue)
  buildFilters._bound=true;
  document.getElementById("search").addEventListener("input",e=>{state.q=norm(e.target.value);render();});
  document.getElementById("players").addEventListener("input",e=>{
    const v=parseInt(e.target.value,10); state.players=Number.isFinite(v)&&v>0?v:null; render();
  });
  document.getElementById("resetBtn").addEventListener("click",resetFilters);
  document.getElementById("favFilterBtn").addEventListener("click",e=>{
    state.favOnly=!state.favOnly;
    e.currentTarget.setAttribute("aria-pressed",state.favOnly?"true":"false");
    render();
  });
}
function toggle(set,v){ set.has(v)?set.delete(v):set.add(v); }
function resetFilters(){
  state.themes.clear();state.niveaux.clear();state.durees.clear();state.players=null;state.q="";state.favOnly=false;
  document.getElementById("search").value="";document.getElementById("players").value="";
  document.querySelectorAll(".chip").forEach(c=>c.setAttribute("aria-pressed","false"));
  document.getElementById("favFilterBtn").setAttribute("aria-pressed","false");
  render();
}

/* =========================================================================
   Filtrage + rendu de la grille
   ========================================================================= */
// normalise pour la recherche : minuscules, sans accents ni caractères spéciaux
function norm(s){ return (s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g," ").trim(); }
function matches(ex){
  if(state.favOnly && !favs.has(ex.nom)) return false;
  if(state.themes.size && ![...state.themes].some(t=>ex.themes.includes(t))) return false;
  if(state.niveaux.size && !state.niveaux.has(ex.niveau)) return false;
  if(state.durees.size){
    const ok=[...state.durees].some(k=>DUREES.find(d=>d.key===k).test(ex.duree));
    if(!ok) return false;
  }
  if(state.players!=null){
    if(ex.joueurs.min>state.players) return false;        // pas assez de joueurs
  }
  if(state.q){
    const d=L(ex,'exercices');
    const hay=norm([ex.nom,ex.objectif,d.nom,d.objectif,ex.themes.join(" "),ex.themes.map(themeLabel).join(" "),ex.niveau,niveauLabel(ex.niveau)].join(" "));
    if(!hay.includes(state.q)) return false;
  }
  return true;
}
let filtered = [];
function jLabel(j){ return j.max&&j.max!==j.min ? T('players_range')(j.min,j.max) : T('players_min')(j.min); }
function render(){
  filtered = EXERCICES.map((ex,i)=>({ex,i})).filter(o=>matches(o.ex));
  const grid=document.getElementById("grid");
  const empty=document.getElementById("empty");
  grid.innerHTML="";
  document.getElementById("countPill").textContent = T('ex_count')(filtered.length);
  empty.hidden = filtered.length>0;
  filtered.forEach(({ex,i})=>{
    const d=L(ex,'exercices');
    const card=document.createElement("button");
    card.className="card"; card.type="button";
    card.innerHTML=`
      <span class="fav-star" role="button" tabindex="0" aria-label="Ajouter aux favoris">☆</span>
      <div class="card-top">
        <span class="card-num">${i+1}</span>
        <div class="card-titles"><h3>${esc(d.nom)}</h3>
          <div class="card-sub">${esc(ex.themes.map(themeLabel).join(" · "))}</div></div>
      </div>
      <div class="card-mini">${courtSVG(ex.schema,true)}</div>
      <div class="card-tags">
        <span class="tag lvl">${esc(niveauLabel(ex.niveau))}</span>
        <span class="tag">${esc(jLabel(ex.joueurs))}</span>
        <span class="tag">${ex.duree} ${esc(T('min'))}</span>
        <span class="card-add" role="button" tabindex="0">${esc(T('add'))}</span>
      </div>`;
    const star=card.querySelector(".fav-star");
    updateStar(star, isFav(ex));
    star.addEventListener("click",ev=>{ev.stopPropagation();toggleFav(ex,star);});
    star.addEventListener("keydown",ev=>{if(ev.key==="Enter"||ev.key===" "){ev.preventDefault();ev.stopPropagation();toggleFav(ex,star);}});
    const add=card.querySelector(".card-add");
    updateAddBtn(add, ex);
    add.addEventListener("click",ev=>{ev.stopPropagation();addToSeance(ex);});
    add.addEventListener("keydown",ev=>{if(ev.key==="Enter"||ev.key===" "){ev.preventDefault();ev.stopPropagation();addToSeance(ex);}});
    card.addEventListener("click",()=>openExercise(i));
    grid.appendChild(card);
  });
}

/* =========================================================================
   Vue exercice (une par page) + navigation
   ========================================================================= */
function iconMeta(){return {
  joueurs:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5a3 3 0 0 1 0 6"/><path d="M21 20a6 6 0 0 0-5-5.9"/></svg>',
  duree:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  niveau:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/></svg>',
  mat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h18v12H3z"/><path d="M3 11h18"/></svg>'
};}
function renderSheet(i){
  const raw=EXERCICES[i], ex=L(raw,'exercices'), ic=iconMeta();
  const sheet=document.getElementById("sheet");
  sheet.innerHTML=`
    <div class="sheet-head">
      <div class="sheet-head-top">
        <div class="sheet-eyebrow">${esc(T('exercise'))} ${i+1} · ${esc(raw.themes.map(themeLabel).join(" · "))}</div>
        <div class="sheet-actions">
          <span class="fav-star lg" id="sheetFav" role="button" tabindex="0" aria-label="Ajouter aux favoris">☆</span>
          <button class="sheet-add" id="sheetAdd" type="button">${esc(T('add'))}</button>
        </div>
      </div>
      <h2>${esc(ex.nom)}</h2>
      <div class="sheet-meta">
        <span class="meta">${ic.niveau}<b>${esc(niveauLabel(raw.niveau))}</b></span>
        <span class="meta">${ic.joueurs}<b>${esc(jLabel(raw.joueurs))}</b></span>
        <span class="meta">${ic.duree}<b>${raw.duree} ${esc(T('min'))}</b></span>
      </div>
    </div>
    <div class="sheet-body">
      <div class="sheet-court">
        <div class="court-wrap">${courtSVG(raw.schema,false)}</div>
        <div class="legend">
          <span><span class="lg-dot" style="background:var(--teamA)"></span>${esc(T('legend_a'))}</span>
          <span><span class="lg-dot" style="background:var(--teamB)"></span>${esc(T('legend_b'))}</span>
          ${(raw.schema&&raw.schema.elements&&raw.schema.elements.some(e=>e.team==="C"))?`<span><span class="lg-dot" style="background:var(--teamC)"></span>${esc(T('legend_c'))}</span>`:""}
          <span><span class="lg-dot" style="background:var(--ball)"></span>${esc(T('legend_ball'))}</span>
          <span><span class="lg-line"></span>${esc(T('legend_move'))}</span>
          <span><span class="lg-line dash"></span>${esc(T('legend_traj'))}</span>
        </div>
      </div>
      <div class="sheet-info">
        <div class="block"><h3>${esc(T('m_objectif'))}</h3><p>${esc(ex.objectif)}</p></div>
        <div class="block"><h3>${esc(T('m_deroule'))}</h3>
          <ol class="steps">${ex.deroule.map(d=>`<li>${esc(d)}</li>`).join("")}</ol></div>
        <div class="block"><h3>${esc(T('m_consignes'))}</h3>
          <ul class="pts">${ex.consignes.map(c=>`<li>${esc(c)}</li>`).join("")}</ul></div>
        <div class="block"><h3>${esc(T('m_variantes'))}</h3>
          <ul class="var">${ex.variantes.map(v=>`<li>${esc(v)}</li>`).join("")}</ul></div>
        <div class="block"><h3>${esc(T('m_materiel'))}</h3><p class="mat">${esc(ex.materiel)}</p></div>
        ${raw.auteur?`<div class="block"><h3>${esc(T('m_credit'))}</h3><p class="mat">${esc(T('credit_by'))} ${esc(raw.auteur)}</p></div>`:""}
      </div>
    </div>`;
  animateSchema(sheet);
  const sf=sheet.querySelector("#sheetFav");
  updateStar(sf, isFav(raw));
  sf.addEventListener("click",()=>toggleFav(raw,sf));
  sf.addEventListener("keydown",ev=>{if(ev.key==="Enter"||ev.key===" "){ev.preventDefault();toggleFav(raw,sf);}});
  const sa=sheet.querySelector("#sheetAdd");
  updateAddBtn(sa, raw);
  sa.addEventListener("click",()=>addToSeance(raw));
  currentEx=raw;
}
let currentPos = -1; // index dans "filtered"
function slugify(s){ return (s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""); }
function exHash(i){ return "ex-"+slugify(EXERCICES[i].nom); }
function findByHash(h){
  const m=(h||"").match(/^#ex-(.+)$/); if(!m) return -1;
  const key=m[1];
  let idx=EXERCICES.findIndex(e=>slugify(e.nom)===key);
  if(idx<0 && /^\d+$/.test(key)){ const n=parseInt(key,10)-1; if(EXERCICES[n]) idx=n; } // compat ancien lien #ex-N
  return idx;
}
function currentRoute(){ return (location.hash||"").replace(/^#/,""); }
function pushAppRoute(route){
  const parentRoute=currentRoute();
  const url=location.pathname+location.search+(route?"#"+route:"");
  history.pushState({volleyApp:true,route,parentRoute},"",url);
}
function replaceAppRoute(route){
  const url=location.pathname+location.search+(route?"#"+route:"");
  history.replaceState({volleyApp:true,route,parentRoute:null},"",url);
}
function backInApp(fallback){
  const st=history.state;
  if(st && st.volleyApp && st.parentRoute!==null && st.parentRoute!==undefined){
    history.back();
  }else{
    fallback();
    replaceAppRoute(currentRoute());
  }
}
function openExercise(globalIndex, fromHistory=false){
  let pos = filtered.findIndex(o=>o.i===globalIndex);
  if(pos<0){
    filtered=[{ex:EXERCICES[globalIndex],i:globalIndex}]; pos=0;
  }
  currentPos=pos;
  showCurrent();
  document.body.dataset.section="exercices";
  delete document.body.dataset.iview;
  updateNavLabel();
  document.body.dataset.view="detail";
  if(!fromHistory) pushAppRoute(exHash(globalIndex));
  window.scrollTo(0,0);
}
function showCurrent(){
  const {i}=filtered[currentPos];
  renderSheet(i);
  document.getElementById("posInfo").textContent = `${currentPos+1} / ${filtered.length}`;
  document.getElementById("prevBtn").disabled = currentPos<=0;
  document.getElementById("nextBtn").disabled = currentPos>=filtered.length-1;
}
function go(delta){
  const n=currentPos+delta;
  if(n<0||n>=filtered.length) return;
  currentPos=n; showCurrent();
  pushAppRoute(exHash(filtered[currentPos].i));
  window.scrollTo(0,0);
}
function backToList(){
  // Le bouton « Retour aux exercices » cible toujours la liste,
  // indépendamment de l'historique précédent du navigateur.
  document.body.dataset.view="list";
  delete document.body.dataset.iview;
  document.body.dataset.section="exercices";
  updateNavLabel();
  render();
  pushAppRoute("exercices");
  window.scrollTo(0,0);
}

/* =========================================================================
   Thème clair/sombre
   ========================================================================= */
function initTheme(){
  let saved=null; try{ saved=localStorage.getItem("cv-theme"); }catch(e){}
  if(saved) document.documentElement.dataset.theme=saved;
  document.getElementById("themeBtn").addEventListener("click",()=>{
    const cur=document.documentElement.dataset.theme;
    const dark=cur? cur==="dark" : matchMedia("(prefers-color-scheme:dark)").matches;
    const next=dark?"light":"dark";
    document.documentElement.dataset.theme=next;
    try{ localStorage.setItem("cv-theme",next); }catch(e){}
  });
}

/* ---- vue grille / liste compacte (bouton navbar) ---- */
const ICON_LIST='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/></svg>';
const ICON_GRID='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>';
let compactView=(function(){try{return localStorage.getItem("cv-view")==="compact";}catch(e){return false;}})();
function applyView(){
  const grid=document.getElementById("grid"); if(grid) grid.classList.toggle("compact", compactView);
  const ig=document.getElementById("infoGrid"); if(ig) ig.classList.toggle("compact", compactView);
  const hg=document.getElementById("homeGrid"); if(hg) hg.classList.toggle("compact", compactView);
  const vb=document.getElementById("viewBtn");
  if(vb){ const ic=vb.querySelector(".ic"); if(ic) ic.innerHTML=compactView?ICON_GRID:ICON_LIST; vb.title=compactView?T('view_grid_t'):T('view_list_t'); vb.setAttribute("aria-pressed",compactView?"true":"false"); const l=vb.querySelector(".tb-lbl"); if(l) l.textContent=compactView?T('view_grid'):T('view_list'); }
}
function initView(){
  applyView();
  document.getElementById("viewBtn").addEventListener("click",()=>{
    compactView=!compactView;
    try{ localStorage.setItem("cv-view", compactView?"compact":"grid"); }catch(e){}
    applyView();
  });
}

/* ---- connexion (micro mode, AUCUNE vraie sécurité : identifiants en clair) ---- */
const AUTH_CREDENTIALS = { user:"coach", pass:"volley" };   // ← à modifier ici
const ICON_USER='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4.2 3.8-6.4 8-6.4s8 2.2 8 6.4"/></svg>';
const ICON_LOGOUT='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>';
function isAuthed(){ try{ return localStorage.getItem("cv-auth")==="1"; }catch(e){ return false; } }
function applyAuth(){
  const on=isAuthed();
  SEARCH_INDEX=null;   // l'index de recherche dépend de l'auth (cisgo) et de la langue
  document.body.dataset.auth = on?"in":"out";
  const pb=document.getElementById("profileBtn");
  if(pb){
    const ic=pb.querySelector(".ic"); if(ic) ic.innerHTML = on?ICON_LOGOUT:ICON_USER;
    const l=pb.querySelector(".tb-lbl"); if(l) l.textContent = on?T('logout'):T('login');
    pb.title = on?T('logout_t'):T('login_t');
    pb.setAttribute("aria-label", on?T('logout_t'):T('login_t'));
    pb.classList.toggle("authed", on);
  }
}
/* Masquage du mot de passe 100% en JS : le champ reste un input texte normal (aucun
   champ masqué natif dans la page, que certains hébergeurs refusent). La vraie valeur
   vit dans authPassVal, on n'affiche que des puces. Ce n'est pas une vraie sécurité. */
let authPassVal="";
function authSyncMask(){ const el=document.getElementById("authPass"); if(el) el.value="•".repeat(authPassVal.length); }
function openAuthModal(){
  closeTools();
  const m=document.getElementById("authModal");
  document.getElementById("authErr").hidden=true;
  document.getElementById("authUser").value="";
  authPassVal=""; document.getElementById("authPass").value="";
  m.classList.add("open");
  setTimeout(()=>document.getElementById("authUser").focus(),30);
}
function closeAuthModal(){ document.getElementById("authModal").classList.remove("open"); }
function logout(){
  try{ localStorage.removeItem("cv-auth"); }catch(e){}
  applyAuth();
  // si on était sur une page protégée, revenir aux exercices
  if(INFO[curSection] && INFO[curSection].protected){ goExercices(); }
}
function onProfileClick(){ if(isAuthed()) logout(); else openAuthModal(); }
function initAuth(){
  applyAuth();
  const passEl=document.getElementById("authPass");
  passEl.addEventListener("beforeinput",e=>{
    const t=e.inputType||"";
    if(t==="insertFromPaste") return;                 // géré par l'événement paste
    e.preventDefault();
    if(t.startsWith("history")) return;                // annuler/rétablir : on ignore
    if(t==="insertText" && e.data!=null){ authPassVal+=e.data; }
    else if(t.indexOf("delete")===0){ authPassVal=authPassVal.slice(0,-1); }
    authSyncMask();
  });
  passEl.addEventListener("paste",e=>{
    e.preventDefault();
    const cb=e.clipboardData||window.clipboardData;
    authPassVal+=(cb&&cb.getData("text"))||""; authSyncMask();
  });
  document.getElementById("profileBtn").addEventListener("click",onProfileClick);
  document.getElementById("authClose").addEventListener("click",closeAuthModal);
  document.getElementById("authModal").addEventListener("click",e=>{ if(e.target.id==="authModal") closeAuthModal(); });
  document.getElementById("authForm").addEventListener("submit",e=>{
    e.preventDefault();
    const u=document.getElementById("authUser").value.trim();
    const p=authPassVal;
    if(u===AUTH_CREDENTIALS.user && p===AUTH_CREDENTIALS.pass){
      try{ localStorage.setItem("cv-auth","1"); }catch(e){}
      applyAuth(); closeAuthModal();
    }else{
      document.getElementById("authErr").hidden=false;
    }
  });
}

/* ---- menu latéral d'outils (burger, téléphone) ---- */
function closeTools(){ document.body.classList.remove("tools-open"); const b=document.getElementById("burgerBtn"); if(b) b.setAttribute("aria-expanded","false"); }
function toggleTools(){
  const open=document.body.classList.toggle("tools-open");
  document.getElementById("burgerBtn").setAttribute("aria-expanded", open?"true":"false");
}
function initBurger(){
  document.getElementById("burgerBtn").addEventListener("click",toggleTools);
  document.getElementById("tmBackdrop").addEventListener("click",closeTools);
  // fermer le menu quand on choisit une option
  document.getElementById("viewBtn").addEventListener("click",closeTools);
  document.getElementById("themeBtn").addEventListener("click",closeTools);
}

/* ---- séance (localStorage, 1 séance courante, pas d'historique) ---- */
let currentEx=null;
function loadSeance(){ try{ const a=JSON.parse(localStorage.getItem("cv-seance")||"[]"); return Array.isArray(a)?a:[]; }catch(e){ return []; } }
function saveSeance(){ try{ localStorage.setItem("cv-seance", JSON.stringify(seance)); }catch(e){} }
let seance = loadSeance();
function inSeance(ex){ return seance.includes(ex.nom); }
function updateAddBtn(el,ex){ if(!el) return; const on=inSeance(ex); el.classList.toggle("added",on); el.setAttribute("aria-disabled",on?"true":"false"); el.textContent=on?T('added'):T('add'); }
function addToSeance(ex){ if(inSeance(ex)) return; seance.push(ex.nom);
  if(matchMedia("(min-width:980px)").matches && !document.body.classList.contains("sn-open")) document.body.classList.add("sn-open");
  afterSeanceChange(); }
function removeFromSeance(nom){ seance=seance.filter(n=>n!==nom); afterSeanceChange(); }
function clearSeance(){ seance=[]; afterSeanceChange(); }
function afterSeanceChange(){
  saveSeance(); renderSeanceList(); updateSeanceStats();
  if(document.body.dataset.view==="detail"){ const sa=document.getElementById("sheetAdd"); if(sa&&currentEx) updateAddBtn(sa,currentEx); }
  else render();
}
function renderSeanceList(){
  const list=document.getElementById("snList"); if(!list) return;
  if(!seance.length){ list.innerHTML=`<div class="sn-empty">${T('seance_empty')}</div>`; return; }
  list.innerHTML="";
  seance.forEach(nom=>{
    const ex=EXERCICES.find(e=>e.nom===nom); if(!ex) return;
    const i=EXERCICES.indexOf(ex);
    const it=document.createElement("div"); it.className="sn-item";
    it.innerHTML=`<button class="sn-item-main" type="button"><span class="sn-item-name">${esc(L(ex,'exercices').nom)}</span><span class="sn-item-meta">${esc(themeLabel(ex.themes[0]))} · ${ex.duree} ${esc(T('min'))}</span></button><button class="sn-item-del" type="button" aria-label="Retirer">✕</button>`;
    it.querySelector(".sn-item-main").addEventListener("click",()=>{ closeSnOnSmall(); openExercise(i); });
    it.querySelector(".sn-item-del").addEventListener("click",()=>removeFromSeance(nom));
    list.appendChild(it);
  });
}
function updateSeanceStats(){
  const n=seance.length; let dur=0; seance.forEach(nom=>{const ex=EXERCICES.find(e=>e.nom===nom); if(ex) dur+=ex.duree;});
  const c=document.getElementById("snCount"); if(c) c.textContent=T('ex_count')(n);
  const d=document.getElementById("snDur"); if(d) d.textContent=dur+" "+T('min');
  const badge=document.getElementById("snBadge"); if(badge){ badge.textContent=n; badge.style.display=n>0?"":"none"; }
}
function closeSnOnSmall(){ if(!matchMedia("(min-width:980px)").matches) document.body.classList.remove("sn-open"); }
function setNavH(){ const t=document.querySelector(".topbar"); if(t) document.documentElement.style.setProperty("--nav-h", t.offsetHeight+"px"); }
function initSeance(){
  setNavH(); window.addEventListener("resize",setNavH);
  updateSeanceDate();
  renderSeanceList(); updateSeanceStats();
  document.getElementById("snToggle").addEventListener("click",()=>document.body.classList.toggle("sn-open"));
  document.getElementById("snClose").addEventListener("click",()=>document.body.classList.remove("sn-open"));
  document.getElementById("snBackdrop").addEventListener("click",()=>document.body.classList.remove("sn-open"));
  document.getElementById("snClear").addEventListener("click",()=>{ if(seance.length) clearSeance(); });
  const mqLarge=matchMedia("(min-width:980px)");
  if(mqLarge.matches) document.body.classList.add("sn-open");
  let wasLarge=mqLarge.matches;
  window.addEventListener("resize",()=>{
    const isLarge=mqLarge.matches;
    if(isLarge===wasLarge) return;   // n'agir qu'au franchissement du seuil
    wasLarge=isLarge;
    document.body.classList.toggle("sn-open", isLarge); // petit écran → fermée par défaut
  });
}
function techToItem(t){ return {nom:t.nom, categorie:t.categorie, resume:t.resume, blocks:[
  {label:T('lvl_beg'),cls:"deb",intro:t.niveaux.debutant.intro,points:t.niveaux.debutant.points},
  {label:T('lvl_int'),cls:"int",intro:t.niveaux.intermediaire.intro,points:t.niveaux.intermediaire.points},
  {label:T('lvl_adv'),cls:"adv",intro:t.niveaux.avance.intro,points:t.niveaux.avance.points},
  {label:T('mistakes'),cls:"err",points:t.erreurs}
]};}
const INFO_KEYS = ["cisgo","regles","postes","formations","tactique","techniques","arbitrage","lexique","outils"];
const SECTION_LABELS={accueil:"Accueil",cisgo:"Cisgo",regles:"Règles",postes:"Postes",formations:"Formations",tactique:"Tactique",techniques:"Techniques",exercices:"Exercices",arbitrage:"Arbitrage",lexique:"Lexique",outils:"Outils"};
/* liens de la page d'accueil (dans l'ordre d'affichage) ; non listés dans la navbar */
const HOME_LINKS=[
  {key:"regles", desc:"Les règles essentielles du jeu."},
  {key:"postes", desc:"Le rôle de chaque joueur sur le terrain."},
  {key:"formations", desc:"Les systèmes de jeu à 6 (4-2, 5-1, 6-2) et formats réduits."},
  {key:"tactique", desc:"Phases de jeu, réception, défense et combinaisons d'attaque."},
  {key:"techniques", desc:"Les gestes fondamentaux expliqués niveau par niveau."},
  {key:"exercices", desc:"La bibliothèque filtrable : un exercice par page, avec son schéma de terrain."},
  {key:"arbitrage", desc:"Les gestes officiels du 1er arbitre."},
  {key:"lexique", desc:"Le vocabulaire du volley, de A à Z."},
  {key:"outils", desc:"Des outils pratiques pour l'entraînement."}
];
function updateNavLabel(){ const sec=document.body.dataset.section||"exercices"; const el=document.getElementById("navselLabel"); if(el) el.textContent=(sec==="recherche"?T('search_title'):sectionLabel(sec)); setActiveNav(sec); }
function setActiveNav(sec){ document.querySelectorAll(".navbtn").forEach(b=>b.classList.remove("active")); const id=sec==="exercices"?"seg-ex":"seg-"+sec; const el=document.getElementById(id); if(el) el.classList.add("active"); }
let curSection="exercices", curInfoIdx=-1;
function renderInfoList(key){
  const sec=infoMeta(key);
  document.getElementById("infoTitle").textContent=sec.title;
  document.getElementById("infoIntro").textContent=sec.intro;
  const g=document.getElementById("infoGrid"), f=document.getElementById("infoFlat");
  if(sec.flat){
    g.style.display="none"; g.innerHTML="";
    f.style.display="block";
    if(sec.flat==="arbitrage") renderArbitrage(f, sec.items);
    else if(sec.flat==="lexique") renderLexique(f, sec.items);
    return;
  }
  f.style.display="none"; f.innerHTML="";
  g.style.display="";
  g.innerHTML="";
  sec.items.forEach((it0,i)=>{
    const it=L(it0,key);
    const c=document.createElement("button"); c.className="tech-card"; c.type="button";
    c.innerHTML=`<span class="tech-card-cat">${esc(it.categorie)}</span><h3>${esc(it.nom)}</h3><p>${esc(it.resume||"")}</p><span class="tech-card-go">${esc(sec.cardcta)}</span>`;
    c.addEventListener("click",()=>openInfo(key,i));
    g.appendChild(c);
  });
}
function renderArbitrage(f, items){
  const groups=[]; const idx={};
  items.forEach((it0,i)=>{ const it=L(it0,'arbitrage'); if(!(it.cat in idx)){ idx[it.cat]=groups.length; groups.push({cat:it.cat,list:[]}); } groups[idx[it.cat]].list.push({it,i}); });
  f.innerHTML=groups.map(gr=>`<section class="ref-group"><h3 class="ref-group-h">${esc(gr.cat)}</h3><div class="ref-grid">${
    gr.list.map(({it,i})=>`<div class="ref-item" data-ab="${i}"><h4>${esc(it.nom)}</h4><p>${esc(it.geste)}</p></div>`).join("")
  }</div></section>`).join("");
}
function renderLexique(f, items){
  const sorted=items.map(it=>L(it,'lexique')).sort((a,b)=>a.t.localeCompare(b.t,T('locale'),{sensitivity:"base"}));
  f.innerHTML=`<input type="search" class="lex-search" id="lexSearch" placeholder="${esc(T('lex_search_ph'))}" aria-label="${esc(T('lex_search_ph'))}"><div class="lex-list" id="lexList"></div>`;
  const list=f.querySelector("#lexList");
  const draw=q=>{
    const nq=norm(q);
    const res=nq? sorted.filter(it=>norm(it.t).includes(nq)||norm(it.d).includes(nq)) : sorted;
    list.innerHTML=res.length? res.map(it=>`<div class="lex-item"><div class="lex-term">${esc(it.t)}</div><p class="lex-def">${esc(it.d)}</p></div>`).join("")
      : `<div class="lex-empty">${esc(T('lex_empty')(q))}</div>`;
  };
  draw("");
  f.querySelector("#lexSearch").addEventListener("input",e=>draw(e.target.value));
}
/* ---- OUTILS : chronomètre + constructeur de composition (chaque outil = une sous-page) ---- */
function chronoHTML(){ return `
  <div class="chrono-disp" id="chronoDisp">00:00</div>
  <div class="tool-bar">
    <button class="tool-btn primary" id="chronoStart">${esc(T('tool_start'))}</button>
    <button class="tool-btn" id="chronoLap">${esc(T('tool_lap'))}</button>
    <button class="tool-btn" id="chronoReset">${esc(T('tool_reset'))}</button>
  </div>
  <div class="chrono-laps" id="chronoLaps"></div>`; }
function compoHTML(){ return `
  <div class="tool-bar">
    <label class="tool-check"><input type="checkbox" id="compoHalf"> ${esc(T('tool_half'))}</label>
    <label class="tool-check"><input type="checkbox" id="compoLibero"> ${esc(T('tool_libero'))}</label>
    <button class="tool-btn" id="compoReset">${esc(T('tool_replace'))}</button>
  </div>
  <div class="compo-wrap" id="compoWrap"></div>`; }
/* chronomètre */
let chronoTimer=null, chronoMs=0, chronoRunning=false, chronoLast=0, chronoLaps=[];
function fmtChrono(ms){ const s=Math.floor(ms/1000); return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0"); }
function chronoTick(){ const now=performance.now(); chronoMs+=now-chronoLast; chronoLast=now; const d=document.getElementById("chronoDisp"); if(d) d.textContent=fmtChrono(chronoMs); }
function renderLaps(){ const el=document.getElementById("chronoLaps"); if(!el) return; el.innerHTML=chronoLaps.map((ms,i)=>`<div class="lap"><span>${esc(T('tool_lap'))} ${i+1}</span><span>${fmtChrono(ms)}</span></div>`).join(""); }
function initChrono(){
  if(chronoTimer){ clearInterval(chronoTimer); chronoTimer=null; }
  chronoMs=0; chronoRunning=false; chronoLaps=[];
  const disp=document.getElementById("chronoDisp"), start=document.getElementById("chronoStart");
  disp.textContent="00:00"; start.textContent=T('tool_start'); renderLaps();
  start.addEventListener("click",()=>{
    if(chronoRunning){ clearInterval(chronoTimer); chronoTimer=null; chronoRunning=false; start.textContent=T('tool_resume'); }
    else { chronoLast=performance.now(); chronoTimer=setInterval(chronoTick,200); chronoRunning=true; start.textContent=T('tool_pause'); }
  });
  document.getElementById("chronoLap").addEventListener("click",()=>{ chronoLaps.push(chronoMs); renderLaps(); });
  document.getElementById("chronoReset").addEventListener("click",()=>{
    clearInterval(chronoTimer); chronoTimer=null; chronoRunning=false; chronoMs=0; chronoLaps=[];
    disp.textContent="00:00"; start.textContent=T('tool_start'); renderLaps();
  });
}
/* constructeur de composition */
let COMPO=null, compoTerrain="full", compoLibero=false;
function compoDefaults(){ return [
  // notre équipe (A) : chacun à son poste (zones 4-3-2 devant, 5-6-1 derrière)
  {label:"R1", x:1.5, d:1.8, side:"A", lib:false},   // zone 4
  {label:"C1", x:4.5, d:1.8, side:"A", lib:false},   // zone 3
  {label:"P", x:7.5, d:1.8, side:"A", lib:false},   // zone 2
  {label:"R2", x:1.5, d:7.3, side:"A", lib:false},   // zone 5
  {label:"C2", x:4.5, d:7.3, side:"A", lib:false},   // zone 6
  {label:"Pt",  x:7.5, d:7.3, side:"A", lib:false},   // zone 1
  {label:"L",  x:2.9, d:8.4, side:"A", lib:true},    // libéro (fond)
  // équipe adverse (B) : visible uniquement en terrain complet
  {label:"R1", x:7.5, d:1.8, side:"B", lib:false},
  {label:"P", x:1.5, d:1.8, side:"B", lib:false},
  {label:"C1", x:4.5, d:1.8, side:"B", lib:false},
  {label:"Pt", x:1.5, d:7.3, side:"B", lib:false},
  {label:"C2", x:4.5, d:7.3, side:"B", lib:false},
  {label:"R2",  x:7.5, d:7.3, side:"B", lib:false},
  {label:"L",  x:2.9, d:8.4, side:"B", lib:true}    // libéro (fond)
]; }
function compoSvgPos(pl){
  const pad=1.1;
  if(pl.side==="B") return { sx: pl.x+pad, sy: (9-pl.d)+pad };          // adversaire : moitié haute, filet au centre
  return { sx: pl.x+pad, sy: (compoTerrain==="half"?pl.d:9+pl.d)+pad }; // nous : moitié basse (ou tout le demi)
}
function initCompo(){
  if(!COMPO) COMPO=compoDefaults();
  const wrap=document.getElementById("compoWrap");
  const half=document.getElementById("compoHalf"), btnR=document.getElementById("compoReset"), chk=document.getElementById("compoLibero");
  half.checked=(compoTerrain==="half"); chk.checked=compoLibero;
  function draw(){
    wrap.innerHTML=courtSVG({terrain:compoTerrain, elements:[]});
    const svg=wrap.querySelector("svg"); svg.classList.add("compo-svg");
    COMPO.forEach(pl=>{
      if(pl.lib && !compoLibero) return;
      if(pl.side==="B" && compoTerrain!=="full") return;   // adversaires seulement en terrain complet
      addCompoPlayer(svg, pl);
    });
  }
  half.addEventListener("change",()=>{ compoTerrain=half.checked?"half":"full"; draw(); });
  chk.addEventListener("change",()=>{ compoLibero=chk.checked; draw(); });
  btnR.addEventListener("click",()=>{ COMPO=compoDefaults(); draw(); });
  draw();
}
function compoToSvg(svg,cx,cy){ const pt=svg.createSVGPoint(); pt.x=cx; pt.y=cy; return pt.matrixTransform(svg.getScreenCTM().inverse()); }
function addCompoPlayer(svg, pl){
  const NS="http://www.w3.org/2000/svg";
  const g=document.createElementNS(NS,"g"); g.setAttribute("class","compo-pl"+(pl.lib?" lib":"")+(pl.side==="B"?" adv":""));
  const pos=compoSvgPos(pl); g.setAttribute("transform",`translate(${pos.sx},${pos.sy})`);
  const c=document.createElementNS(NS,"circle"); c.setAttribute("r","0.64");
  const t=document.createElementNS(NS,"text"); t.setAttribute("text-anchor","middle"); t.setAttribute("dominant-baseline","central"); t.setAttribute("class","compo-pl-t"); t.textContent=pl.label;
  g.appendChild(c); g.appendChild(t); svg.appendChild(g);
  let dragging=false;
  g.addEventListener("pointerdown",e=>{ e.preventDefault(); dragging=true; g.classList.add("drag"); try{g.setPointerCapture(e.pointerId);}catch(_){} });
  g.addEventListener("pointermove",e=>{
    if(!dragging) return;
    const loc=compoToSvg(svg,e.clientX,e.clientY);
    let x=loc.x-1.1, sy=loc.y-1.1;
    let d = pl.side==="B" ? (9-sy) : (compoTerrain==="half"?sy:sy-9);
    pl.x=Math.max(0.5,Math.min(8.5,x)); pl.d=Math.max(0.5,Math.min(8.5,d));
    const p=compoSvgPos(pl); g.setAttribute("transform",`translate(${p.sx},${p.sy})`);
  });
  const end=e=>{ dragging=false; g.classList.remove("drag"); try{g.releasePointerCapture(e.pointerId);}catch(_){} };
  g.addEventListener("pointerup",end); g.addEventListener("pointercancel",end);
  g.addEventListener("dblclick",e=>{ e.preventDefault(); const v=prompt(T('tool_prompt'), pl.label); if(v!==null){ pl.label=(v.trim()||pl.label).slice(0,4); t.textContent=pl.label; } });
}
function renderInfoDetail(key,i){
  const sec=infoMeta(key), it0=sec.items[i];
  const sheet=document.getElementById("infoSheet");
  if(it0.tool){   // sous-page outil (chrono / compo)
    const itTool=L(it0,'outils');
    sheet.classList.add("sheet-tool");
    sheet.innerHTML=`<div class="sheet-head"><div class="sheet-eyebrow">${esc(sec.eyebrow)}</div><h2>${esc(itTool.nom)}</h2></div><div class="tool-body">${it0.tool==="chrono"?chronoHTML():compoHTML()}</div>`;
    document.getElementById("infoBack").textContent="← "+sec.back;
    document.getElementById("infoPos").textContent=`${i+1} / ${sec.items.length}`;
    document.getElementById("infoPrev").disabled=i<=0;
    document.getElementById("infoNext").disabled=i>=sec.items.length-1;
    if(it0.tool==="chrono") initChrono(); else initCompo();
    return;
  }
  sheet.classList.remove("sheet-tool");
  const it = key==="techniques" ? techToItem(L(it0,'techniques')) : L(it0,key);
  const block=b=>`<div class="tech-level"><span class="tech-level-h ${b.cls||'plain'}">${esc(b.label)}</span>${b.intro?`<p class="tech-intro">${esc(b.intro)}</p>`:""}<ul class="${b.cls==='err'?'var':'pts'}">${b.points.map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div>`;
  sheet.innerHTML=`
    <div class="sheet-head">
      <div class="sheet-eyebrow">${esc(sec.eyebrow)} · ${esc(it.categorie)}</div>
      <h2>${esc(it.nom)}</h2>
    </div>
    <div class="tech-body">
      ${it.resume?`<p class="tech-resume">${esc(it.resume)}</p>`:""}
      ${it.schema?`<div class="tech-court"><div class="court-wrap">${courtSVG(it.schema,false)}</div>${it.schemaCap?`<p class="tech-court-cap">${esc(it.schemaCap)}</p>`:""}</div>`:""}
      ${it.blocks.map(block).join("")}
    </div>`;
  animateSchema(sheet);
  document.getElementById("infoBack").textContent="← "+sec.back;
  document.getElementById("infoPos").textContent=`${i+1} / ${sec.items.length}`;
  document.getElementById("infoPrev").disabled=i<=0;
  document.getElementById("infoNext").disabled=i>=sec.items.length-1;
}
function showInfoList(key, fromHistory=false){
  if(INFO[key] && INFO[key].protected && !isAuthed()){ goHome(); return; }
  curSection=key; curInfoIdx=-1; renderInfoList(key);
  delete document.body.dataset.tool;
  document.body.dataset.section=key; document.body.dataset.iview="list";
  delete document.body.dataset.view; updateNavLabel();
  if(!fromHistory) pushAppRoute(key);
  window.scrollTo(0,0);
}
function openInfo(key,i, fromHistory=false){
  if(INFO[key] && INFO[key].protected && !isAuthed()){ goHome(); return; }
  curSection=key; curInfoIdx=i; renderInfoDetail(key,i);
  const tool=INFO[key].items[i].tool;
  if(tool) document.body.dataset.tool=tool; else delete document.body.dataset.tool;
  document.body.dataset.section=key; document.body.dataset.iview="detail";
  delete document.body.dataset.view; updateNavLabel();
  if(!fromHistory) pushAppRoute(key+"-"+slugify(INFO[key].items[i].nom));
  window.scrollTo(0,0);
}
function infoBack(){
  // Le bouton « Retour aux [section] » revient toujours à la liste
  // de la section courante, sans dépendre du bouton Retour du navigateur.
  showInfoList(curSection);
}
function infoGo(d){ const items=INFO[curSection].items; const n=curInfoIdx+d; if(n<0||n>=items.length) return; openInfo(curSection,n); }
function goExercices(fromHistory=false){
  document.body.dataset.section="exercices"; delete document.body.dataset.iview; delete document.body.dataset.tool;
  updateNavLabel(); document.body.dataset.view="list"; render();
  if(!fromHistory) pushAppRoute("exercices"); window.scrollTo(0,0);
}
/* ---- page d'accueil (accès via le logo, pas dans la navbar) ---- */
function renderHome(){
  const g=document.getElementById("homeGrid"); if(!g) return;
  g.innerHTML="";
  HOME_LINKS.forEach(l=>{
    const c=document.createElement("button"); c.className="tech-card"; c.type="button";
    c.innerHTML=`<span class="tech-card-cat">${esc(T('home_section'))}</span><h3>${esc(sectionLabel(l.key))}</h3><p>${esc(homeDesc(l.key))}</p><span class="tech-card-go">${esc(T('home_open'))}</span>`;
    c.addEventListener("click",()=> l.key==="exercices" ? goExercices() : showInfoList(l.key));
    g.appendChild(c);
  });
}
function goHome(fromHistory=false){
  curSection="accueil"; curInfoIdx=-1;
  document.body.dataset.section="accueil"; document.body.dataset.iview="home";
  delete document.body.dataset.view; delete document.body.dataset.tool; updateNavLabel();
  if(!fromHistory) pushAppRoute("");   // l'accueil est la route de base (sans ancre)
  window.scrollTo(0,0);
}
function routeFromHash(){
  const h=(location.hash||"").replace(/^#/,"");
  if(h===""||h==="accueil"){ goHome(true); return; }   // route de base -> accueil
  if(h==="exercices"){ goExercices(true); return; }     // ancre propre des exercices
  if(h==="recherche"||h.indexOf("recherche=")===0){ const eq=h.indexOf("="); goSearch(eq>=0?decodeURIComponent(h.slice(eq+1)):"", true); return; }
  for(const key of INFO_KEYS){
    if(h===key){ showInfoList(key,true); return; }
    if(h.indexOf(key+"-")===0){
      const slug=h.slice(key.length+1);
      const idx=INFO[key].items.findIndex(it=>slugify(it.nom)===slug);
      if(idx>=0){ openInfo(key,idx,true); return; }
    }
  }
  // sinon : lien direct d'un exercice (#ex-...)
  const ei=findByHash("#"+h);
  if(ei>=0){
    document.body.dataset.section="exercices";
    delete document.body.dataset.iview;
    openExercise(ei,true);
  } else {
    goHome(true);   // route inconnue -> accueil (base)
  }
}
function initInfo(){
  INFO_KEYS.forEach(key=>{ const el=document.getElementById("seg-"+key); if(el) el.addEventListener("click",()=>showInfoList(key)); });
  document.getElementById("seg-ex").addEventListener("click",goExercices);
  document.getElementById("infoBack").addEventListener("click",infoBack);
  document.getElementById("infoPrev").addEventListener("click",()=>infoGo(-1));
  document.getElementById("infoNext").addEventListener("click",()=>infoGo(1));
  const bh=document.getElementById("brandHome");
  if(bh){ bh.addEventListener("click",()=>goHome()); bh.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); goHome(); } }); }
  const topnav=document.getElementById("topnav"), cur=document.getElementById("navselCurrent");
  cur.addEventListener("click",ev=>{ ev.stopPropagation(); const o=topnav.classList.toggle("open"); cur.setAttribute("aria-expanded",o?"true":"false"); });
  document.getElementById("navlinks").addEventListener("click",()=>{ topnav.classList.remove("open"); cur.setAttribute("aria-expanded","false"); });
  document.addEventListener("click",ev=>{ if(!topnav.contains(ev.target)){ topnav.classList.remove("open"); cur.setAttribute("aria-expanded","false"); } });
  updateNavLabel();
}

/* =========================================================================
   Recherche globale — index en mémoire sur toutes les sections.
   L'index est construit paresseusement et reconstruit au changement de langue
   ou d'auth (via SEARCH_INDEX=null dans applyAuth). Chaque entrée garde la
   fonction d'ouverture (routage existant), donc un clic navigue directement.
   ========================================================================= */
let SEARCH_INDEX=null;
const SEARCH_ORDER=["regles","postes","formations","tactique","techniques","exercices","arbitrage","lexique","outils","cisgo"];
function buildSearchIndex(){
  const idx=[];
  EXERCICES.forEach((raw,i)=>{ const d=L(raw,'exercices');
    idx.push({section:"exercices", titre:d.nom, sous:raw.themes.map(themeLabel).join(" · "),
      texte:norm([d.nom,d.objectif,(d.deroule||[]).join(" "),(d.consignes||[]).join(" "),(d.variantes||[]).join(" "),d.materiel,raw.themes.map(themeLabel).join(" "),niveauLabel(raw.niveau)].join(" ")),
      open:()=>openExercise(i)});
  });
  ["techniques","regles","postes","formations","tactique","cisgo"].forEach(key=>{
    if(INFO[key].protected && !isAuthed()) return;        // ne pas indexer les pages protégées hors connexion
    INFO[key].items.forEach((it0,i)=>{
      const it=L(it0,key);
      let body;
      if(key==="techniques"){ body=[it.resume, it.niveaux?Object.keys(it.niveaux).map(nk=>it.niveaux[nk].intro+" "+(it.niveaux[nk].points||[]).join(" ")).join(" "):"", (it.erreurs||[]).join(" ")].join(" "); }
      else { body=[it.resume, (it.blocks||[]).map(bl=>bl.label+" "+(bl.intro||"")+" "+(bl.points||[]).join(" ")).join(" "), it.schemaCap||""].join(" "); }
      idx.push({section:key, titre:it.nom, sous:(it.categorie||infoMeta(key).eyebrow),
        texte:norm([it.nom, it.categorie||"", body].join(" ")),
        open:()=>openInfo(key,i)});
    });
  });
  ARBITRAGE.forEach((it0,i)=>{ const it=L(it0,'arbitrage');
    idx.push({section:"arbitrage", titre:it.nom, sous:it.cat,
      texte:norm([it.nom,it.cat,it.geste].join(" ")),
      open:()=>openArbitrage(i)});
  });
  LEXIQUE.forEach((it0)=>{ const it=L(it0,'lexique');
    idx.push({section:"lexique", titre:it.t, sous:"",
      texte:norm([it.t,it.d].join(" ")),
      open:()=>openLexique(it.t)});
  });
  INFO.outils.items.forEach((it0,i)=>{ const it=L(it0,'outils');
    idx.push({section:"outils", titre:it.nom, sous:infoMeta('outils').eyebrow,
      texte:norm([it.nom,it.resume||""].join(" ")),
      open:()=>openInfo("outils",i)});
  });
  return idx;
}
function getSearchIndex(){ if(!SEARCH_INDEX) SEARCH_INDEX=buildSearchIndex(); return SEARCH_INDEX; }
function searchEntries(query){
  const nq=norm(query); if(!nq) return [];
  const toks=nq.split(" ").filter(Boolean);
  const out=[];
  getSearchIndex().forEach(e=>{
    if(!toks.every(tk=>e.texte.indexOf(tk)>=0)) return;      // tous les mots doivent matcher
    const t=norm(e.titre); let s;
    if(t===nq) s=100; else if(t.indexOf(nq)===0) s=80; else if(t.indexOf(nq)>=0) s=60; else s=30;  // titre > corps
    out.push({e,s});
  });
  out.sort((a,b)=> b.s-a.s || a.e.titre.localeCompare(b.e.titre, T('locale'), {sensitivity:"base"}));
  return out.map(o=>o.e);
}
function renderSearchResults(query){
  const wrap=document.getElementById("searchResults"); if(!wrap) return;
  const q=(query||"").trim();
  if(!q){ wrap.innerHTML=`<div class="search-empty">${esc(T('search_empty'))}</div>`; return; }
  const found=searchEntries(q);
  if(!found.length){ wrap.innerHTML=`<div class="search-empty">${esc(T('search_none')(q))}</div>`; return; }
  const bySec={}; found.forEach(e=>{(bySec[e.section]=bySec[e.section]||[]).push(e);});
  wrap.innerHTML="";
  SEARCH_ORDER.forEach(sec=>{
    const list=bySec[sec]; if(!list||!list.length) return;   // catégorie vide = non affichée
    const g=document.createElement("section"); g.className="search-group";
    const h=document.createElement("h3"); h.className="search-group-h"; h.innerHTML=`${esc(sectionLabel(sec))} <span>${list.length}</span>`;
    g.appendChild(h);
    const hits=document.createElement("div"); hits.className="search-hits";
    list.forEach(e=>{
      const bt=document.createElement("button"); bt.className="search-hit"; bt.type="button";
      bt.innerHTML=`<span class="search-hit-t">${esc(e.titre)}</span>${e.sous?`<span class="search-hit-s">${esc(e.sous)}</span>`:""}`;
      bt.addEventListener("click",()=>e.open());
      hits.appendChild(bt);
    });
    g.appendChild(hits); wrap.appendChild(g);
  });
}
function goSearch(query, fromHistory){
  const q=(query||"").trim();
  curSection="recherche"; curInfoIdx=-1;
  document.body.dataset.section="recherche"; document.body.dataset.iview="search";
  delete document.body.dataset.view; delete document.body.dataset.tool;
  document.body.classList.remove("sn-open","tools-open");
  const pi=document.getElementById("searchPageInput"); if(pi) pi.value=q;     // pré-remplir la barre de la page
  renderSearchResults(q);
  const ni=document.getElementById("navSearchInput"); if(ni) ni.value="";      // vider la barre de la navbar
  updateNavLabel();
  if(!fromHistory) pushAppRoute(q?("recherche="+encodeURIComponent(q)):"recherche");
  window.scrollTo(0,0);
}
/* ouverture d'un résultat des sections "à plat" (pas de page de détail individuelle) */
function openArbitrage(i){
  showInfoList('arbitrage');
  setTimeout(()=>{ const el=document.querySelector('#infoFlat [data-ab="'+i+'"]'); if(el){ el.scrollIntoView({behavior:"smooth",block:"center"}); el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash"); } }, 40);
}
function openLexique(term){
  showInfoList('lexique');
  setTimeout(()=>{ const inp=document.getElementById('lexSearch'); if(inp){ inp.value=term; inp.dispatchEvent(new Event('input',{bubbles:true})); } }, 40);
}
function initSearch(){
  const nf=document.getElementById("navSearch"), ni=document.getElementById("navSearchInput");
  if(nf) nf.addEventListener("submit",e=>{ e.preventDefault(); goSearch(ni?ni.value:""); });   // Entrée = lance la recherche
  const pi=document.getElementById("searchPageInput");
  if(pi){ let deb=null; pi.addEventListener("input",()=>{ clearTimeout(deb); deb=setTimeout(()=>{ renderSearchResults(pi.value); const q=pi.value.trim(); replaceAppRoute(q?("recherche="+encodeURIComponent(q)):"recherche"); }, 300); }); }
  const sc=document.getElementById("searchClear");
  if(sc) sc.addEventListener("click",()=>{ if(pi){ pi.value=""; renderSearchResults(""); replaceAppRoute("recherche"); pi.focus(); } });
}

/* =========================================================================
   Init
   ========================================================================= */
buildFilters();
render();
initTheme();
initView();
initAuth();
initBurger();
initSeance();
initInfo();
renderHome();
initLang();
initSearch();
document.getElementById("backBtn").addEventListener("click",backToList);
document.getElementById("prevBtn").addEventListener("click",()=>go(-1));
document.getElementById("nextBtn").addEventListener("click",()=>go(1));

/* ---- swipe tactile pour passer d'une fiche à l'autre (téléphone/tablette) ---- */
function addSwipe(el, onNext, onPrev){
  if(!el) return;
  let x0=null, y0=null, t0=0;
  el.addEventListener("touchstart",e=>{
    if(e.touches.length!==1){ x0=null; return; }
    const t=e.touches[0]; x0=t.clientX; y0=t.clientY; t0=Date.now();
  },{passive:true});
  el.addEventListener("touchend",e=>{
    if(x0===null) return;
    if(document.body.dataset.tool){ x0=null; return; }   // pas de swipe sur les sous-pages Outils (chrono/compo)
    const t=e.changedTouches[0];
    const dx=t.clientX-x0, dy=t.clientY-y0, dt=Date.now()-t0;
    x0=null;
    if(dt>700) return;                          // geste trop lent
    if(Math.abs(dx)<55) return;                 // amplitude trop faible
    if(Math.abs(dx)<Math.abs(dy)*1.5) return;   // pas assez horizontal (c'était un scroll)
    if(dx<0) onNext(); else onPrev();           // glisser vers la gauche = suivant
  },{passive:true});
}
function animateSheet(sheetEl, dir){
  if(!sheetEl) return;
  sheetEl.classList.remove("anim-next","anim-prev");
  void sheetEl.offsetWidth;                 // force un reflow pour relancer l'animation
  sheetEl.classList.add(dir>0?"anim-next":"anim-prev");
}
function navAnimate(container, navFn, dir){
  const s=container.querySelector(".sheet");
  const before=s?s.textContent.slice(0,50):"";
  navFn();
  const s2=container.querySelector(".sheet");
  if(s2 && s2.textContent.slice(0,50)!==before) animateSheet(s2, dir); // seulement si la fiche a changé
}
addSwipe(document.getElementById("detail"), ()=>navAnimate(document.getElementById("detail"),()=>go(1),1), ()=>navAnimate(document.getElementById("detail"),()=>go(-1),-1));
addSwipe(document.getElementById("infoDetail"), ()=>navAnimate(document.getElementById("infoDetail"),()=>infoGo(1),1), ()=>navAnimate(document.getElementById("infoDetail"),()=>infoGo(-1),-1));
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){
    if(document.getElementById("authModal").classList.contains("open")){ closeAuthModal(); return; }
    if(document.body.classList.contains("tools-open")){ closeTools(); return; }
  }
  if(document.body.dataset.iview==="detail"){
    if(e.key==="ArrowLeft") infoGo(-1);
    if(e.key==="ArrowRight") infoGo(1);
    if(e.key==="Escape") infoBack();
    return;
  }
  if(document.body.dataset.view!=="detail") return;
  if(e.key==="ArrowLeft") go(-1);
  if(e.key==="ArrowRight") go(1);
  if(e.key==="Escape") backToList();
});
// Historique de navigation interne : chaque vue réelle devient une entrée.
(function(){
  if(!history.state || !history.state.volleyApp){
    history.replaceState({volleyApp:true,route:currentRoute(),parentRoute:null},"",
      location.pathname+location.search+location.hash);
  }
  routeFromHash();
  window.addEventListener("popstate",()=>{
    routeFromHash();
    // Le nouvel état est déjà celui restauré par le navigateur.
    window.scrollTo(0,0);
  });
})();
