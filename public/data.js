/* data.js — contenu source (français). Chargé en premier.
   Fichier généré par découpage de l'app monofichier.
   Globales classiques (pas de module ES, pas de fetch) — ouverture file:// OK. */

/* =========================================================================
   LISTE DES EXERCICES — ajoute, modifie ou supprime librement ici.
   Chaque objet = une fiche = une page. Voir "Comment ajouter un exercice".
   Thèmes disponibles : Échauffement, Service, Réception, Passe, Attaque,
                        Bloc, Défense, Jeu, Physique.
   ========================================================================= */
const EXERCICES = [
  {
    nom:"Réveil articulaire + passes en mouvement",
    themes:["Échauffement"], niveau:"Débutant", joueurs:{min:4,max:16}, duree:10,
    materiel:"1 ballon pour 2",
    objectif:"Monter en température, mobiliser épaules/poignets et retrouver le toucher de balle avant le travail spécifique.",
    deroule:[
      "2 min de mobilité : cercles de bras, rotations de poignets, montées de genoux en déplacement latéral.",
      "Par deux face à face à 4-5 m : 10 passes hautes, puis 10 manchettes.",
      "Mêmes duos en déplacement : l'un recule/avance, l'autre suit, échanges continus.",
      "Finir par 10 échanges où chacun enchaîne manchette puis passe haute sur lui-même avant de renvoyer."
    ],
    consignes:["Genoux fléchis, poids sur l'avant des pieds","Ballon joué devant le front en passe haute","Épaules vers la cible en manchette"],
    variantes:["Plus dur : un seul contact imposé et distance augmentée","Plus facile : laisser rebondir une fois au sol"],
    schema:{terrain:"half",elements:[
      {type:"player",x:2,y:3,team:"A",label:"1"},
      {type:"player",x:6,y:3,team:"B",label:"2"},
      {type:"arrow",x:2.5,y:3,x2:5.5,y2:3,kind:"ball"},
      {type:"player",x:2,y:6,team:"A",label:"3"},
      {type:"player",x:6,y:6,team:"B",label:"4"},
      {type:"arrow",x:2.5,y:6,x2:5.5,y2:6,kind:"ball"}
    ]}
  },
  {
    nom:"Pepper à deux",
    themes:["Échauffement","Défense","Passe","Attaque"], niveau:"Intermédiaire", joueurs:{min:2,max:16}, duree:10,
    materiel:"1 ballon pour 2",
    objectif:"Enchaîner les trois touches de base (défense – passe – attaque contrôlée) en continu, sous forme de routine d'avant-match.",
    deroule:[
      "Par deux à 5-6 m. Le joueur A frappe en douceur vers B.",
      "B défend en manchette vers lui-même, se fait une passe haute, puis attaque contrôlée vers A.",
      "A défend à son tour : le cycle manchette → passe → attaque ne s'arrête pas.",
      "Compter le nombre d'échanges sans faute ; objectif de série."
    ],
    consignes:["Attaque dosée, bras cassé mais sans puissance","Se replacer sous le ballon avant chaque touche","Communiquer à chaque relance"],
    variantes:["Plus dur : imposer une attaque en recul ou sautée","Plus facile : autoriser 4 touches","Par-dessus le filet : les deux joueurs se font face de part et d'autre du filet, attaque contrôlée par-dessus (possible à 2 contre 2)","Côté contre côté : en diagonale par-dessus le filet, le défenseur relève pour un passeur qui remet à l'attaquant (enchaînement coopératif)"],
    schema:{terrain:"half",elements:[
      {type:"player",x:3,y:2.5,team:"A",label:"A"},
      {type:"player",x:6,y:6.5,team:"B",label:"B"},
      {type:"arrow",x:3.3,y:2.8,x2:5.7,y2:6.2,kind:"ball"},
      {type:"arrow",x:5.7,y:6.2,x2:3.3,y2:2.8,kind:"pass"}
    ]}
  },
  {
    nom:"Service flottant par cibles",
    themes:["Service"], niveau:"Intermédiaire", joueurs:{min:3,max:14}, duree:15,
    materiel:"Tous les ballons, 3 tapis ou plots dans le camp adverse",
    objectif:"Gagner en régularité et viser des zones précises au service flottant.",
    deroule:[
      "Placer 3 cibles dans le camp adverse : zone 1, zone 6, zone 5.",
      "Chaque serveur dispose de 2 ballons par passage et annonce sa cible avant de servir.",
      "1 point si la cible annoncée est touchée, 0 si le service est bon mais hors cible, -1 si faute.",
      "Rotation des serveurs ; premier à 10 points."
    ],
    consignes:["Lancer bas et stable, devant l'épaule porteuse","Frapper au centre du ballon, poignet ferme (pas d'effet)","Transfert du poids arrière vers avant"],
    variantes:["Plus dur : cibles réduites, servir en zone courte puis longue en alternance","Plus dur : viser les couloirs et le fond du terrain","Plus facile : servir depuis 6 m et viser des moitiés de terrain","Concours : premier à toucher 5 cibles, ou morpion sur 9 zones"],
    schema:{terrain:"full",elements:[
      {type:"player",x:4.5,y:17,team:"A",label:"S"},
      {type:"ball",x:3.8,y:16.5},
      {type:"zone",x:0,y:0,w:3,h:3},
      {type:"zone",x:3,y:0,w:3,h:3},
      {type:"zone",x:6,y:0,w:3,h:3},
      {type:"label",x:1.5,y:1.5,label:"Z5"},
      {type:"label",x:4.5,y:1.5,label:"Z6"},
      {type:"label",x:7.5,y:1.5,label:"Z1"},
      {type:"arrow",x:4.5,y:16.5,x2:1.5,y2:1.6,kind:"ball"}
    ]}
  },
  {
    nom:"Service puis entrée en défense",
    themes:["Service","Défense","Jeu"], niveau:"Confirmé", joueurs:{min:6,max:14}, duree:18,
    materiel:"Ballons côté service, 1 passeur côté réception",
    objectif:"Relier le service à la tâche suivante : servir puis entrer immédiatement sur le terrain et défendre une attaque.",
    deroule:[
      "Le serveur exécute un service ciblé en zone 5.",
      "Aussitôt après, il entre sur le terrain en position défensive arrière.",
      "L'entraîneur envoie une attaque depuis le camp adverse ; le serveur doit défendre.",
      "Enchaîner 3 cycles par joueur avant rotation."
    ],
    consignes:["Ne pas regarder son service partir : entrer tout de suite","Position basse, bras prêts avant la frappe adverse","Le service est au service de la tâche : priorité à la sécurité"],
    variantes:["Plus dur : ajouter une couverture après la défense","Plus facile : attaque adverse annoncée et dosée"],
    schema:{terrain:"full",elements:[
      {type:"player",x:7,y:17,team:"A",label:"S"},
      {type:"ball",x:7.8,y:16.8},
      {type:"arrow",x:7,y:16.5,x2:1.5,y2:2,kind:"ball"},
      {type:"arrow",x:6.9,y:16.4,x2:6,y2:13.3,kind:"move"},
      {type:"player",x:6,y:13,team:"A",label:"D"},
      {type:"player",x:4.5,y:3,team:"B",label:"★"},
      {type:"arrow",x:4.5,y:3.5,x2:6,y2:12.6,kind:"ball"},
      {type:"label",x:3.3,y:9,label:"1 · service"},
      {type:"label",x:8,y:14.7,label:"2 · entrée"},
      {type:"label",x:3.9,y:11.4,label:"3 · défend"}
    ]}
  },
  {
    nom:"Triangle de réception à trois",
    themes:["Réception"], niveau:"Intermédiaire", joueurs:{min:4,max:9}, duree:15,
    materiel:"Ballons, 1 serveur, 1 cible passeur en zone 2-3",
    objectif:"Structurer la réception à 3 receveurs et fixer les responsabilités de zone et d'appel.",
    deroule:[
      "3 receveurs en triangle couvrent le terrain ; un serveur sert depuis l'autre camp.",
      "Les receveurs annoncent fort (« à moi / à toi ») et renvoient vers la cible passeur.",
      "Noter la qualité : réception parfaite (sur la cible) = 3, jouable = 1, manquée = 0.",
      "20 services puis rotation des rôles."
    ],
    consignes:["Partager le terrain : chacun sa zone, le ballon entre deux appartient au plus proche de la cible","Avancer vers le ballon, ne pas reculer sur les pieds","Plateau de manchette orienté vers le passeur"],
    variantes:["Plus dur : service sauté / flottant alterné","Plus facile : réception à 4 ou service lifté"],
    schema:{terrain:"full",elements:[
      {type:"player",x:4.5,y:0,team:"B",label:"S"},
      {type:"ball",x:3.8,y:0.3},
      {type:"player",x:2,y:13,team:"A",label:"5"},
      {type:"player",x:7,y:13,team:"A",label:"1"},
      {type:"player",x:4.5,y:15,team:"A",label:"6"},
      {type:"zone",x:5,y:9.6,w:2.8,h:1.3},
      {type:"label",x:6.4,y:10.2,label:"cible"},
      {type:"arrow",x:4.5,y:0.5,x2:2.2,y2:12.7,kind:"ball"},
      {type:"arrow",x:2.2,y:12.7,x2:6.1,y2:10.4,kind:"pass"}
    ]}
  },
  {
    nom:"Lecture du serveur et réception-passe",
    themes:["Réception","Passe"], niveau:"Confirmé", joueurs:{min:5,max:12}, duree:18,
    materiel:"Ballons, 1 passeur fixe",
    objectif:"Lier réception et distribution : le passeur sort du ballon réceptionné pour alimenter une aile.",
    deroule:[
      "Réception à 2 ou 3, le passeur part de zone 1 et rejoint la zone 2-3.",
      "Sur chaque bonne réception, le passeur distribue en zone 4 où un attaquant conclut en autoplacement.",
      "Compter les séquences réception-passe-attaque complètes réussies.",
      "Changer de passeur toutes les 10 séquences."
    ],
    consignes:["Receveur : viser haut et au-dessus de la cible pour laisser le temps au passeur","Passeur : être arrêté et équilibré avant la passe","Lire l'épaule du serveur pour anticiper la zone"],
    variantes:["Plus dur : passeur qui sort de réception, 2 options d'attaque","Plus facile : passeur déjà en place"],
    schema:{terrain:"full",elements:[
      {type:"player",x:4.5,y:1.5,team:"B",label:"S"},
      {type:"ball",x:3.8,y:1.3},
      {type:"player",x:3,y:12.5,team:"A",label:"R"},
      {type:"player",x:6.5,y:12.5,team:"A",label:"R"},
      {type:"player",x:6.6,y:10.3,team:"A",label:"P"},
      {type:"arrow",x:7.6,y:13.3,x2:6.8,y2:10.6,kind:"move"},
      {type:"player",x:1.8,y:10.3,team:"A",label:"4"},
      {type:"arrow",x:4.5,y:2,x2:3,y2:12.2,kind:"ball"},
      {type:"arrow",x:3,y:12.2,x2:6.5,y2:10.5,kind:"pass"},
      {type:"arrow",x:6.5,y:10.5,x2:2,y2:10.4,kind:"pass"},
      {type:"arrow",x:1.8,y:10,x2:7,y2:2.5,kind:"ball"}
    ]}
  },
  {
    nom:"Passeur sous les deux ailes",
    themes:["Passe"], niveau:"Confirmé", joueurs:{min:3,max:8}, duree:15,
    materiel:"Ballons, cibles en zone 4 et zone 2",
    objectif:"Développer la précision et la régularité du passeur vers les deux ailes, en sortant de différentes positions.",
    deroule:[
      "L'entraîneur lance des ballons variés (bons et moins bons) sur le passeur en zone 2-3.",
      "Le passeur alterne passe avant (zone 4) et passe arrière (zone 2) selon l'annonce.",
      "Cible : un cerceau ou un plot à 1 m du filet, hauteur d'attaque.",
      "15 ballons, on note les passes dans la zone d'attaque exploitable."
    ],
    consignes:["Épaules carrées vers l'avant, le dos ne trahit pas la passe arrière","Mains au-dessus du front, poussée symétrique","Se replacer après chaque relance de l'entraîneur"],
    variantes:["Plus dur : ajouter la passe en suspension","Plus facile : relances régulières au même endroit"],
    schema:{terrain:"half",elements:[
      {type:"player",x:6.5,y:3,team:"A",label:"P"},
      {type:"label",x:4.5,y:7,label:"Lancer"},
      {type:"arrow",x:4.5,y:6.4,x2:6.4,y2:3.3,kind:"ball"},
      {type:"zone",x:0.4,y:0.3,w:1.6,h:1.2},
      {type:"zone",x:7,y:0.3,w:1.6,h:1.2},
      {type:"label",x:1.2,y:0.9,label:"Z4"},
      {type:"label",x:7.8,y:0.9,label:"Z2"},
      {type:"arrow",x:6.5,y:2.7,x2:1.2,y2:1,kind:"pass"},
      {type:"arrow",x:6.5,y:2.7,x2:7.8,y2:1.1,kind:"pass"}
    ]}
  },
  {
    nom:"Attaque d'aile en zone 4",
    themes:["Attaque","Passe"], niveau:"Intermédiaire", joueurs:{min:3,max:12}, duree:18,
    materiel:"Ballons, 1 passeur, cibles au sol côté adverse",
    objectif:"Construire la course d'élan et la frappe d'attaque en zone 4 sur passe de zone 3.",
    deroule:[
      "File d'attaquants en zone 4. Le passeur est en zone 3.",
      "L'entraîneur envoie le ballon au passeur, qui distribue en zone 4.",
      "L'attaquant réalise sa course (dernier appui pied gauche-droite pour un droitier) et frappe dans la diagonale.",
      "Viser une cible au sol en zone 5 adverse ; compter les frappes dans la cible."
    ],
    consignes:["Attendre, puis déclencher l'élan quand le ballon quitte les mains du passeur","Armer haut, coude au-dessus de l'épaule","Frapper au-dessus et devant, finir le geste vers la cible"],
    variantes:["Plus dur : ajouter un bloc passif puis actif","Plus facile : passeur qui pose un ballon haut et lent"],
    schema:{terrain:"full",elements:[
      {type:"player",x:1.8,y:11,team:"A",label:"4"},
      {type:"arrow",x:1.8,y:10.6,x2:1.8,y2:9.6,kind:"move"},
      {type:"player",x:4.5,y:10,team:"A",label:"P"},
      {type:"arrow",x:4.5,y:10,x2:2,y2:9.3,kind:"pass"},
      {type:"arrow",x:1.8,y:9.2,x2:7.5,y2:3,kind:"ball"},
      {type:"zone",x:6,y:0,w:3,h:3},
      {type:"label",x:7.5,y:1.5,label:"Cible"}
    ]}
  },
  {
    nom:"Attaque + couverture + replacement",
    themes:["Attaque","Jeu","Défense"], niveau:"Confirmé", joueurs:{min:6,max:12}, duree:20,
    materiel:"Ballons, filet, bloc adverse (2 joueurs)",
    objectif:"Enchaîner l'attaque, la couverture de son propre attaquant puis le repli défensif, comme en match.",
    deroule:[
      "Réception → passe → attaque en zone 4 contre un bloc à deux.",
      "Immédiatement, les autres joueurs se regroupent en couverture autour de l'attaquant.",
      "Si le ballon est contré et retombe, la couverture le relève et on rejoue l'action.",
      "Puis repli : tout le monde reprend sa base défensive. 3 cycles par rotation."
    ],
    consignes:["Couverture basse et proche, dès l'armé de l'attaquant","Ne pas admirer son attaque : enchaîner la tâche suivante","Communication constante sur le ballon contré"],
    variantes:["Plus dur : bloc actif + défenseurs arrière adverses","Plus facile : bloc passif, attaque libre","Plus court : se concentrer sur la seule couverture en demi-terrain, sans repli","Couverture imposée à deux lignes (proche et lointaine)"],
    schema:{terrain:"full",elements:[
      {type:"player",x:1.8,y:11,team:"A",label:"4"},
      {type:"player",x:3.5,y:12.5,team:"A",label:"C"},
      {type:"player",x:5,y:12.5,team:"A",label:"C"},
      {type:"player",x:3.5,y:14,team:"A",label:"C"},
      {type:"player",x:2,y:8,team:"B",label:"B"},
      {type:"player",x:3.2,y:8,team:"B",label:"B"},
      {type:"arrow",x:1.8,y:10.5,x2:2.5,y2:8.5,kind:"ball"},
      {type:"arrow",x:2.5,y:8.5,x2:3.5,y2:11.8,kind:"ball"}
    ]}
  },
  {
    nom:"Bloc à deux : ailier + central",
    themes:["Bloc","Défense"], niveau:"Confirmé", joueurs:{min:4,max:12}, duree:18,
    materiel:"Filet, attaquants ou plateforme, 1 passeur adverse",
    objectif:"Synchroniser le bloc à deux (ailier et central) et fermer la diagonale.",
    deroule:[
      "Le passeur adverse distribue en zone 4 ; l'ailier bloc pose le bloc, le central le rejoint.",
      "Les deux bloqueurs doivent sauter ensemble, mains jointes, sans trou.",
      "Derrière, un défenseur occupe la zone laissée libre (la ligne).",
      "Alterner attaques en zone 4 et zone 2 ; 12 ballons."
    ],
    consignes:["L'ailier donne la position, le central s'ajuste à lui","Fermer l'espace entre les deux paires de mains","Bloquer la diagonale, laisser la ligne au défenseur"],
    variantes:["Plus dur : passeur qui varie zone 4 / zone 2 sans annonce","Plus facile : attaque uniquement en zone 4"],
    schema:{terrain:"full",elements:[
      {type:"player",x:3,y:9.9,team:"A",label:"4"},
      {type:"player",x:4.4,y:9.9,team:"A",label:"C"},
      {type:"arrow",x:4.4,y:9.9,x2:3.3,y2:9.9,kind:"move"},
      {type:"player",x:2,y:6,team:"B",label:"A"},
      {type:"player",x:6,y:7.6,team:"B",label:"P"},
      {type:"arrow",x:5.8,y:7.6,x2:2.3,y2:6.3,kind:"pass"},
      {type:"arrow",x:2.1,y:6.3,x2:3.3,y2:9.6,kind:"ball"},
      {type:"player",x:7,y:12.5,team:"A",label:"D"},
      {type:"label",x:5.6,y:12.5,label:"ligne"}
    ]}
  },
  {
    nom:"Défense derrière le bloc",
    themes:["Défense"], niveau:"Intermédiaire", joueurs:{min:4,max:12}, duree:15,
    materiel:"Ballons, plateforme ou chaise d'attaque, 1 bloc",
    objectif:"Positionner les défenseurs arrière en fonction du bloc et récupérer les balles dures et les amortis.",
    deroule:[
      "Un bloc est posé en zone 4. Deux défenseurs se placent : un en zone 5 (diagonale), un en zone 6 décalé.",
      "L'entraîneur attaque fort dans la diagonale, puis place un amorti.",
      "Les défenseurs relèvent vers la cible passeur.",
      "15 ballons mêlant frappes et amortis."
    ],
    consignes:["Arrêté au moment de la frappe, poids vers l'avant","Bras tendus devant, ne pas balancer les bras","Toujours un joueur prêt à avancer sur l'amorti"],
    variantes:["Plus dur : ajouter un 3e défenseur et des attaques en zone 2","Plus facile : seulement des balles dosées en diagonale"],
    schema:{terrain:"full",elements:[
      {type:"player",x:1.8,y:8,team:"B",label:"B"},
      {type:"player",x:7.5,y:14,team:"A",label:"5"},
      {type:"player",x:4.5,y:15,team:"A",label:"6"},
      {type:"player",x:4.5,y:4,team:"B",label:"★"},
      {type:"arrow",x:4.5,y:4.4,x2:7.3,y2:13.6,kind:"ball"},
      {type:"arrow",x:4.5,y:4.4,x2:3.5,y2:11,kind:"ball"},
      {type:"label",x:3,y:11.4,label:"amorti"}
    ]}
  },
  {
    nom:"Plongeons et récupération de balles basses",
    themes:["Défense","Physique"], niveau:"Intermédiaire", joueurs:{min:2,max:10}, duree:12,
    materiel:"Ballons, tapis facultatif",
    objectif:"Oser aller au sol en sécurité et récupérer les ballons lointains (plongeon, roulade, manchette basse).",
    deroule:[
      "Révision technique : poser le genou, amortir avec les bras, roulade d'épaule.",
      "L'entraîneur lance des ballons courts et sur les côtés, de plus en plus loin.",
      "Le joueur part d'une position centrale, récupère et relève le ballon haut.",
      "3 séries de 6 ballons, récupération entre les séries."
    ],
    consignes:["Avancer bas vers le ballon avant de plonger","Ne jamais retomber sur les poignets ni les coudes tendus","Relever le ballon haut, même en déséquilibre"],
    variantes:["Plus dur : départ dos tourné, signal sonore","Plus facile : balles lancées plus près et plus hautes"],
    schema:{terrain:"half",elements:[
      {type:"player",x:4.5,y:4.5,team:"A",label:"D"},
      {type:"label",x:4.5,y:7,label:"Lancer"},
      {type:"arrow",x:4.5,y:6.6,x2:1.5,y2:5,kind:"ball"},
      {type:"arrow",x:4.5,y:6.6,x2:7.5,y2:5,kind:"ball"},
      {type:"arrow",x:4.5,y:6.6,x2:3,y2:2,kind:"ball"},
      {type:"arrow",x:4.5,y:4.2,x2:1.8,y2:4.6,kind:"move"},
      {type:"arrow",x:4.5,y:4.2,x2:7.2,y2:4.6,kind:"move"}
    ]}
  },
  {
    nom:"6 contre 6 à thème : 3 contacts obligatoires",
    themes:["Jeu"], niveau:"Intermédiaire", joueurs:{min:10,max:14}, duree:20,
    materiel:"Terrain complet, filet, ballons",
    objectif:"Favoriser la construction du jeu en imposant les trois touches avant de renvoyer.",
    deroule:[
      "Match 6 contre 6 classique mais chaque équipe doit utiliser réception-passe-attaque (3 touches).",
      "Renvoyer en 1 ou 2 touches = point pour l'adversaire.",
      "Jouer en 2 sets de 15 points, rotation réglementaire au gain du service.",
      "L'entraîneur relance vite après chaque ballon mort pour maintenir le rythme."
    ],
    consignes:["Toujours chercher le passeur après la réception","Communiquer la construction à voix haute","Accepter l'erreur : on construit, on ne bâcle pas"],
    variantes:["Plus dur : interdiction d'attaquer en zone 4 (obliger la variété)","Plus facile : autoriser le renvoi en 2 touches sur réception difficile"],
    schema:{terrain:"full",elements:[
      {type:"player",x:1.8,y:7,team:"A",label:"4"},{type:"player",x:4.5,y:7,team:"A",label:"3"},{type:"player",x:7,y:7,team:"A",label:"2"},
      {type:"player",x:1.8,y:12,team:"A",label:"5"},{type:"player",x:4.5,y:13,team:"A",label:"6"},{type:"player",x:7,y:12,team:"A",label:"1"},
      {type:"player",x:1.8,y:11,team:"B",label:"2"},{type:"player",x:4.5,y:11,team:"B",label:"3"},{type:"player",x:7,y:11,team:"B",label:"4"},
      {type:"player",x:1.8,y:5,team:"B",label:"1"},{type:"player",x:4.5,y:4.5,team:"B",label:"6"},{type:"player",x:7,y:5,team:"B",label:"5"}
    ]}
  },
  {
    nom:"Wash : marquer deux fois pour gagner le point",
    themes:["Jeu"], niveau:"Confirmé", joueurs:{min:10,max:14}, duree:22,
    materiel:"Terrain complet, ballons côté entraîneur",
    objectif:"Densifier la compétition : une équipe doit gagner la phase de service ET la contre-attaque pour inscrire un point.",
    deroule:[
      "Ballon 1 : l'équipe A sert et on joue le point (phase side-out).",
      "Ballon 2 : l'entraîneur relance immédiatement un ballon libre à l'équipe A (contre-attaque).",
      "Si A gagne les deux ballons = 1 point « wash ». Sinon, 0 et on passe.",
      "Premier à 7 points wash ; on inverse les rôles de service."
    ],
    consignes:["Rester concentré sur le 2e ballon, souvent décisif","Transition rapide après le side-out","Gérer l'émotion : la séquence n'est pas finie au 1er ballon"],
    variantes:["Plus dur : 3 ballons d'affilée à gagner","Plus facile : 1 seul ballon compte, le 2e est bonus"],
    schema:{terrain:"full",elements:[
      {type:"player",x:7,y:17,team:"A",label:"S"},
      {type:"arrow",x:7,y:16.5,x2:3,y2:3,kind:"ball"},
      {type:"label",x:4.5,y:10,label:"① service"},
      {type:"player",x:4.5,y:12,team:"A",label:"6"},
      {type:"label",x:7.2,y:12.5,label:"② relance"},
      {type:"arrow",x:8.2,y:13.5,x2:4.8,y2:12.2,kind:"ball"}
    ]}
  },
  {
    nom:"Complexe K1 : réception – attaque gagnante",
    themes:["Jeu","Réception","Attaque","Passe"], niveau:"Confirmé", joueurs:{min:7,max:12}, duree:22,
    materiel:"Terrain, filet, ballons, un serveur adverse",
    objectif:"Répéter la première séquence de jeu (side-out) : réception, passe, attaque conclue, dans une rotation donnée.",
    deroule:[
      "L'équipe se place dans une rotation précise. Un serveur adverse sert.",
      "Réception → passe → attaque : l'objectif est de conclure le point directement.",
      "On répète la même rotation 8 fois de suite, puis on tourne d'une position.",
      "Noter le pourcentage de side-out (points gagnés sur service reçu)."
    ],
    consignes:["Chaque joueur connaît sa tâche dans la rotation","Le passeur privilégie son attaquant le mieux placé","Viser l'efficacité, pas la puissance"],
    variantes:["Plus dur : ajouter un bloc et une défense adverses complets","Plus facile : service dosé, pas de bloc"],
    schema:{terrain:"full",elements:[
      {type:"player",x:4.5,y:1.5,team:"B",label:"S"},
      {type:"ball",x:3.8,y:1.3},
      {type:"player",x:2.5,y:12.5,team:"A",label:"R"},
      {type:"player",x:6.5,y:12.5,team:"A",label:"R"},
      {type:"player",x:6.8,y:10.3,team:"A",label:"P"},
      {type:"player",x:1.8,y:10.3,team:"A",label:"4"},
      {type:"arrow",x:4.5,y:2,x2:2.6,y2:12.2,kind:"ball"},
      {type:"arrow",x:2.6,y:12.2,x2:6.6,y2:10.5,kind:"pass"},
      {type:"arrow",x:6.6,y:10.5,x2:2,y2:10.4,kind:"pass"},
      {type:"arrow",x:1.8,y:10,x2:7.3,y2:2.5,kind:"ball"}
    ]}
  },
  {
    nom:"Circuit gainage et pliométrie volley",
    themes:["Physique"], niveau:"Intermédiaire", joueurs:{min:1,max:16}, duree:20,
    materiel:"Tapis, éventuellement step/box, chrono",
    objectif:"Renforcer le gainage, la chaîne postérieure et la détente, sans ballon, en fin ou hors séance.",
    deroule:[
      "5 ateliers, 40 s d'effort / 20 s de repos : planche, fentes sautées, gainage latéral (chaque côté), squats sautés, mountain climbers.",
      "Enchaîner le circuit sans pause longue entre les ateliers.",
      "Récupération 2 min, boire, puis 2e tour.",
      "3 tours selon le niveau et la période."
    ],
    consignes:["Qualité avant quantité : dos neutre, abdos engagés","Amortir les réceptions de saut, genoux dans l'axe","Respiration régulière, ne pas bloquer"],
    variantes:["Plus dur : 45/15 et 4 tours, ajouter du lest","Plus facile : 30/30 et 2 tours"],
    schema:{terrain:"half",elements:[
      {type:"cone",x:1.5,y:1.5},{type:"label",x:1.5,y:2.6,label:"1 planche"},
      {type:"cone",x:7.5,y:1.5},{type:"label",x:7.5,y:2.6,label:"2 fentes"},
      {type:"cone",x:7.5,y:7.5},{type:"label",x:7.5,y:8.6,label:"3 gainage"},
      {type:"cone",x:1.5,y:7.5},{type:"label",x:1.5,y:8.6,label:"4 squats"},
      {type:"cone",x:4.5,y:4.5},{type:"label",x:4.5,y:5.6,label:"5 climbers"},
      {type:"arrow",x:1.9,y:1.5,x2:7.1,y2:1.5,kind:"move"},
      {type:"arrow",x:7.5,y:1.9,x2:7.5,y2:7.1,kind:"move"},
      {type:"arrow",x:7.1,y:7.5,x2:1.9,y2:7.5,kind:"move"}
    ]}
  },
  {
    nom:"Appuis, vitesse et échelle de rythme",
    themes:["Physique","Échauffement"], niveau:"Débutant", joueurs:{min:1,max:16}, duree:12,
    materiel:"Échelle de rythme ou plots, cônes",
    objectif:"Améliorer la qualité des appuis, la vitesse de pieds et la coordination, utile pour le déplacement de bloc et de défense.",
    deroule:[
      "Montée de genoux dans l'échelle, un pied par case, puis deux pieds par case.",
      "Pas chassés latéraux le long d'une ligne, en restant bas.",
      "Sprint 3 m, arrêt en position défensive, retour en pas chassés.",
      "4 à 6 passages, récupération marchée entre chaque."
    ],
    consignes:["Appuis sur l'avant du pied, bras actifs","Rester bas sur les déplacements latéraux","Qualité et rythme avant la vitesse pure"],
    variantes:["Plus dur : ajouter un signal visuel pour changer de direction","Plus facile : ralentir et soigner la pose de pied"],
    schema:{terrain:"half",elements:[
      {type:"label",x:2,y:1,label:"échelle"},
      {type:"cone",x:1,y:2},{type:"cone",x:1,y:3},{type:"cone",x:1,y:4},{type:"cone",x:1,y:5},
      {type:"arrow",x:1,y:2,x2:1,y2:5.2,kind:"move"},
      {type:"cone",x:5,y:5},{type:"cone",x:8,y:5},
      {type:"arrow",x:5,y:5,x2:8,y2:5,kind:"move"},
      {type:"label",x:6.5,y:4,label:"pas chassés"}
    ]}
  },
  {
    nom:"Échange russe",
    auteur:"Victor",
    themes:["Jeu","Défense"], niveau:"Intermédiaire", joueurs:{min:4,max:8}, duree:12,
    materiel:"3 ballons, un terrain, 4 joueurs minimum (2 par côté)",
    objectif:"Développer la réactivité, la communication et la coordination à deux sous pression, en gérant plusieurs ballons à la fois dans un jeu d'échange rapide et ludique.",
    deroule:[
      "Former 2 groupes. Deux joueurs de chaque groupe entrent en jeu, un groupe de chaque côté du filet (2 joueurs par côté) ; les autres patientent derrière, répartis équitablement.",
      "Sur chaque côté, un des deux joueurs tient un ballon statique dans les mains. Un troisième ballon est mis en jeu par-dessus le filet.",
      "Si le ballon en mouvement arrive sur un joueur sans ballon en main, il le renvoie simplement de l'autre côté du filet.",
      "Si le ballon en mouvement arrive sur le joueur qui tient le ballon statique, il doit d'abord le passer à son coéquipier (l'autre joueur de son côté), puis renvoyer le ballon en mouvement.",
      "L'échange se poursuit tant que le ballon en mouvement ne touche pas le sol.",
      "À chaque contact avec le ballon en mouvement, le joueur sort et est aussitôt remplacé par un partenaire de son groupe en attente."
    ],
    consignes:[
      "Rester en position basse et prêt, regard fixé sur le ballon en mouvement",
      "Se répartir le côté : savoir à tout instant lequel des deux tient le ballon statique",
      "Passe au coéquipier rapide et précise pour libérer les mains avant de renvoyer",
      "Communication constante entre les deux joueurs d'un même côté, et rotation fluide à chaque contact"
    ],
    variantes:[
      "Plus dur : imposer le mode de renvoi (manchette obligatoire) ou mettre un deuxième ballon en mouvement",
      "Plus facile : autoriser un rebond au sol du ballon en mouvement avant de le jouer, ou ralentir la mise en jeu"
    ],
    schema:{terrain:"full",elements:[
      {type:"player",x:3,y:11.8,team:"A",label:"A1"},
      {type:"ball",x:2,y:11.8},
      {type:"player",x:6,y:11.8,team:"A",label:"A2"},
      {type:"player",x:3,y:6.2,team:"B",label:"B1"},
      {type:"ball",x:2,y:6.2},
      {type:"player",x:6,y:6.2,team:"B",label:"B2"},
      {type:"arrow",x:6,y:6.8,x2:3.5,y2:11.2,kind:"ball"},
      {type:"arrow",x:3.5,y:11.8,x2:5.5,y2:11.8,kind:"pass"},
      {type:"player",x:4.4,y:16.6,team:"A",label:""},
      {type:"player",x:5.7,y:16.9,team:"A",label:""},
      {type:"label",x:4.6,y:15.2,label:"attente A"},
      {type:"player",x:4.4,y:1.4,team:"B",label:""},
      {type:"player",x:5.7,y:1.1,team:"B",label:""},
      {type:"label",x:4.6,y:2.8,label:"attente B"}
    ]}
  },
  {
    nom:"Rester au service",
    auteur:"Victor",
    themes:["Réception","Service","Jeu"], niveau:"Intermédiaire", joueurs:{min:10,max:20}, duree:15,
    materiel:"Ballons, terrain complet, ~5 joueurs par côté (3 réceptionneurs + 2 serveurs)",
    objectif:"Travailler la qualité de réception (haute et dans les 3 mètres) sous la pression d'un service réel, dans un jeu compétitif où l'on cherche à conserver sa place au service.",
    deroule:[
      "De chaque côté du filet : 3 réceptionneurs en zone de réception et 2 serveurs derrière la ligne de fond. Les joueurs en surnombre s'ajoutent aux serveurs.",
      "Les serveurs servent, en alternance, vers les réceptionneurs d'en face.",
      "Le réceptionneur doit réceptionner haut et dans les 3 mètres, puis attraper lui-même son ballon : la réception doit être totalement maîtrisée.",
      "Chaque réceptionneur qui réussit échange sa place avec le serveur dont il vient de réceptionner le service — il passe donc au service, de l'autre côté.",
      "But du jeu : rester le plus longtemps possible au service. Les serveurs cherchent donc un service juste mais exigeant, les réceptionneurs une réception propre pour prendre une place de serveur."
    ],
    consignes:[
      "Réception : plateau orienté, ballon haut et court (dans les 3 m) pour pouvoir l'attraper",
      "Lire le serveur et se déplacer vite sous le ballon, arrêté avant le contact",
      "Se répartir les ballons et s'annoncer entre les 3 réceptionneurs",
      "Serveurs : viser les zones difficiles et varier, tout en restant dans le terrain"
    ],
    variantes:[
      "Plus dur : réception à attraper dans un cerceau ou une zone réduite, ou service sauté",
      "Plus facile : élargir la cible à tout le terrain, ou imposer un service flottant dosé"
    ],
    schema:{terrain:"full",elements:[
      {type:"zone",x:0,y:9,w:9,h:3},
      {type:"zone",x:0,y:6,w:9,h:3},
      {type:"label",x:7.9,y:10.5,label:"3 m"},
      {type:"label",x:7.9,y:7.5,label:"3 m"},
      {type:"arrow",x:3,y:1.6,x2:2.6,y2:11.3,kind:"ball"},
      {type:"ball",x:3.9,y:1.4},
      {type:"arrow",x:6.5,y:11.3,x2:6,y2:2.2,kind:"move"},
      {type:"label",x:8,y:7,label:"échange"},
      {type:"player",x:2.6,y:12.3,team:"A",label:"R"},
      {type:"player",x:4.5,y:12.8,team:"A",label:"R"},
      {type:"player",x:6.5,y:12.3,team:"A",label:"R"},
      {type:"player",x:3,y:17,team:"A",label:"S"},
      {type:"player",x:6,y:17,team:"A",label:"S"},
      {type:"player",x:2.6,y:5.7,team:"B",label:"R"},
      {type:"player",x:4.5,y:5.2,team:"B",label:"R"},
      {type:"player",x:6.5,y:5.7,team:"B",label:"R"},
      {type:"player",x:3,y:1,team:"B",label:"S"},
      {type:"player",x:6,y:1,team:"B",label:"S"}
    ]}
  },
  {
    nom:"Passe triangle",
    auteur:"Victor",
    themes:["Passe"], niveau:"Intermédiaire", joueurs:{min:3,max:4}, duree:10,
    materiel:"1 ballon, un espace pour 3 (ou 4) joueurs",
    objectif:"Travailler la passe précise en mouvement et la communication, en enchaînant passe puis déplacement sans faire tomber la balle.",
    deroule:[
      "Trois joueurs forment un triangle. L'écartement règle la difficulté : serré pour commencer, large pour durcir.",
      "La balle part d'un joueur. Chacun passe (passe haute) au joueur situé à sa droite.",
      "Aussitôt après sa passe, le joueur se déplace vers la position située à sa gauche.",
      "On enchaîne passe puis déplacement en continu, le plus longtemps possible, jusqu'à ce que la balle tombe.",
      "Compter les passes réussies d'affilée et chercher à battre le record du groupe."
    ],
    consignes:[
      "Passe haute et précise, légèrement en avance pour le joueur qui arrive",
      "Se déplacer vite après la passe : être arrêté et placé avant de recevoir",
      "Regarder sa cible avant de passer, garder le triangle équilibré",
      "Communiquer en continu pour ne pas se gêner sur les déplacements"
    ],
    variantes:[
      "Plus facile : version à 4 joueurs ; plus de temps pour se placer",
      "Plus dur : élargir le triangle, imposer la passe en suspension, ou ajouter une 2e balle"
    ],
    schema:{terrain:"half",elements:[
      {type:"player",x:4.5,y:2,team:"A",label:"1"},
      {type:"player",x:7,y:6.8,team:"A",label:"2"},
      {type:"player",x:2,y:6.8,team:"A",label:"3"},
      {type:"ball",x:3.6,y:2},
      {type:"arrow",x:4.9,y:2.4,x2:6.6,y2:6.4,kind:"ball"},
      {type:"arrow",x:6.6,y:7.1,x2:2.4,y2:7.1,kind:"ball"},
      {type:"arrow",x:2,y:6.4,x2:4.1,y2:2.4,kind:"ball"},
      {type:"arrow",x:4.2,y:2.7,x2:2.5,y2:6.1,kind:"move"},
      {type:"label",x:4.5,y:8,label:"passe à droite, puis va à gauche"}
    ]}
  },
  {
    nom:"Bloc - Déf - Bloc",
    auteur:"Victor",
    themes:["Bloc","Défense"], niveau:"Intermédiaire", joueurs:{min:3,max:6}, duree:12,
    materiel:"2 ballons, 1 filet ; 3 joueurs actifs (les autres tournent)",
    objectif:"Enchaîner bloc, défense puis bloc dans une séquence rapide pour travailler le demi-tour, la réactivité et la dissociation entre la tâche au filet et la défense arrière.",
    deroule:[
      "Le joueur A, d'un côté du filet, tient un ballon en hauteur juste au-dessus de la bande, mais dans son camp.",
      "De l'autre côté : le joueur actif (B) est collé au filet, face au ballon tenu ; le joueur C se place à environ 5 m derrière B, un ballon en main.",
      "B saute et vient toucher le ballon tenu par A — geste de bloc.",
      "À la réception au sol, B se retourne aussitôt et défend une attaque envoyée par C — geste de défense.",
      "B se retourne de nouveau vers le filet et saute attraper le ballon tenu — geste de bloc.",
      "Enchaîner block – def – block en continu sur une série (6 à 10 cycles), puis changer de joueur actif."
    ],
    consignes:[
      "Bloc : mains hautes et pénétrantes, saut équilibré, retomber sur ses deux pieds prêt à pivoter",
      "Demi-tour rapide mais contrôlé, le regard cherche tout de suite le ballon suivant",
      "Défense basse, bras tendus devant, amortir le ballon vers le haut",
      "C ajuste la puissance et le timing de son attaque pour que l'enchaînement reste réalisable"
    ],
    variantes:[
      "Plus facile : ralentir le rythme, C envoie une balle dosée et annoncée, réduire la distance",
      "Plus dur : augmenter le nombre de cycles, varier la zone d'attaque de C, ou ajouter un déplacement latéral entre le bloc et la défense"
    ],
    schema:{terrain:"full",elements:[
      {type:"player",x:4.5,y:8,team:"B",label:"A"},
      {type:"ball",x:4.5,y:8.5},
      {type:"player",x:4.5,y:10,team:"A",label:"B"},
      {type:"player",x:4.5,y:15,team:"A",label:"C"},
      {type:"ball",x:4.5,y:14.5},
      {type:"arrow",x:4.5,y:14.5,x2:4.5,y2:10.5,kind:"ball"}
    ]}
  },
  {
    nom:"Roi du terrain (3 contre 3)",
    themes:["Jeu","Réception","Attaque","Défense"], niveau:"Intermédiaire", joueurs:{min:9,max:15}, duree:20,
    materiel:"Terrain complet, filet, ballons côté entraîneur",
    objectif:"Jeu compétitif en 3 contre 3 où l'on cherche à conquérir et garder le côté « roi » du terrain : tous les fondamentaux (service, réception, passe, attaque, défense) sont travaillés sous l'intensité du match.",
    deroule:[
      "Former 3 ou 4 équipes de 3 joueurs. Une équipe occupe le côté « roi », une autre le côté « challenger », les autres attendent derrière le côté challenger.",
      "L'équipe challenger sert vers l'équipe roi et on joue l'échange.",
      "Si l'équipe roi gagne, elle reste côté roi ; si le challenger gagne, il prend le côté roi et l'ancien roi va attendre derrière.",
      "Après chaque échange, l'équipe suivante en attente entre pour servir et tenter de devenir roi.",
      "Deux modes de score au choix : marquer sur chaque échange gagné, ou seulement en gagnant côté roi. Première équipe à un total défini (ex. 15 points)."
    ],
    consignes:[
      "Enchaîner vite : service prêt dès que le terrain se libère",
      "Côté roi : sécuriser chaque ballon, l'objectif est d'y rester",
      "Communiquer les responsabilités : en 3 contre 3, tout le monde touche beaucoup",
      "Gérer l'intensité, les rotations d'équipes sont rapides"
    ],
    variantes:[
      "Plus facile : l'entraîneur lance une balle facile au côté roi pour lancer l'échange",
      "Plus dur : n'autoriser le point qu'en gagnant côté roi, ou imposer 3 touches"
    ],
    schema:{terrain:"full",elements:[
      {type:"label",x:4.5,y:1,label:"côté roi"},
      {type:"player",x:1.5,y:4.5,team:"A",label:"R"},
      {type:"player",x:4.5,y:3,team:"A",label:"R"},
      {type:"player",x:7.5,y:4.5,team:"A",label:"R"},
      {type:"player",x:2.5,y:13,team:"B",label:"C"},
      {type:"player",x:6.5,y:13,team:"B",label:"C"},
      {type:"player",x:4.5,y:18,team:"B",label:"S"},
      {type:"ball",x:3.7,y:18},
      {type:"arrow",x:4.5,y:17.4,x2:3,y2:5.7,kind:"ball"},
      {type:"player",x:7.5,y:18.5,team:"B",label:""},
      {type:"player",x:8.0,y:18.5,team:"B",label:""},
      {type:"player",x:8.5,y:18.5,team:"B",label:""},
    ]}
  },
  {
    nom:"Papillon (butterfly)",
    themes:["Échauffement","Service","Réception","Passe"], niveau:"Intermédiaire", joueurs:{min:6,max:12}, duree:12,
    materiel:"2 ballons, filet, 1 cible/passeur près du filet de chaque diagonale",
    objectif:"Échauffement complet et continu qui relie service, réception et passe : chacun suit son ballon et change de rôle, ce qui enchaîne les répétitions sans temps mort.",
    deroule:[
      "Deux files en diagonale de part et d'autre du filet. D'un côté un serveur ; en face un réceptionneur et une cible (passeur) près du filet.",
      "Le serveur sert en diagonale vers le réceptionneur.",
      "Le réceptionneur passe vers la cible au filet, qui attrape ou passe le ballon.",
      "Chacun suit son ballon : le serveur rejoint la zone de réception, le réceptionneur prend la place de cible, la cible récupère le ballon et rejoint la file de service.",
      "Deux ballons tournent en même temps (un par diagonale) pour garder un rythme élevé."
    ],
    consignes:[
      "Réception orientée vers la cible, haute et précise",
      "Enchaîner son déplacement dès l'action terminée, rester attentif au 2e ballon",
      "Service régulier et dans la cible : c'est un échauffement, pas un concours de puissance",
      "Communiquer pour ne pas se croiser dangereusement"
    ],
    variantes:[
      "Plus facile : remplacer le service par un lancer, n'activer qu'une seule diagonale",
      "Plus facile : sans passeur, réception directe vers une cible (flux service → réception)",
      "Plus dur : service plus agressif, cible de réception réduite",
      "Plus dur : ajouter un 3e ballon « perturbateur » (concentration passing) ou imposer une passe en suspension à la cible"
    ],
    schema:{terrain:"full",elements:[
      {type:"player",x:7,y:17,team:"B",label:"S"},
      {type:"ball",x:7.8,y:16.8},
      {type:"player",x:2.5,y:5.5,team:"A",label:"R"},
      {type:"player",x:4,y:7.4,team:"A",label:"P"},
      {type:"arrow",x:6.9,y:16.5,x2:2.7,y2:5.9,kind:"ball"},
      {type:"arrow",x:2.7,y:5.3,x2:3.9,y2:7.1,kind:"pass"},
      {type:"label",x:1.8,y:3.8,label:"file réception"},
      {type:"label",x:7,y:15.1,label:"file service"},
      {type:"label",x:5.8,y:11.5,label:"chacun suit son ballon"}
    ]}
  },
  {
    nom:"Quads service-réception-passe",
    themes:["Réception","Passe","Service","Échauffement"], niveau:"Intermédiaire", joueurs:{min:4,max:12}, duree:12,
    materiel:"2 ballons par groupe de 4, 1 filet",
    objectif:"Maîtrise de balle à 4 joueurs reliant service, réception et passe, avec un enchaînement rapide grâce à un deuxième ballon qui relance immédiatement l'action.",
    deroule:[
      "Par groupe de 4 : d'un côté un réceptionneur, un passeur et une cible ; de l'autre un serveur. Le serveur et la cible ont chacun un ballon.",
      "Le serveur sert vers le réceptionneur.",
      "Le réceptionneur passe au passeur, qui passe à la cible.",
      "Dès que le premier ballon passe le filet, la cible lance son ballon au serveur pour relancer aussitôt.",
      "On enchaîne jusqu'à un nombre de bonnes réceptions fixé, puis on tourne les rôles (plusieurs groupes de 4 peuvent jouer sur un même terrain)."
    ],
    consignes:[
      "Garder un tempo élevé grâce au 2e ballon : pas de temps mort",
      "Réception orientée, passe précise au passeur puis à la cible",
      "Au besoin, remplacer le service par un lancer (débutants ou épaules fatiguées)",
      "Compter les bonnes réceptions d'affilée"
    ],
    variantes:[
      "Diagonale : le réceptionneur démarre en zone 1 pour travailler d'autres angles",
      "Varier la mise en jeu : lancer lifté (imite le topspin), lancer tendu à deux mains (imite le flottant)"
    ],
    schema:{terrain:"full",elements:[
      {type:"player",x:3,y:5.5,team:"A",label:"R"},
      {type:"player",x:6,y:7,team:"A",label:"P"},
      {type:"player",x:4.5,y:8,team:"A",label:"C"},
      {type:"ball",x:5.3,y:8},
      {type:"player",x:4.5,y:17,team:"B",label:"S"},
      {type:"ball",x:3.8,y:16.8},
      {type:"arrow",x:4.5,y:16.5,x2:3.1,y2:5.9,kind:"ball"},
      {type:"arrow",x:3.1,y:5.5,x2:5.8,y2:6.9,kind:"pass"},
      {type:"arrow",x:5.9,y:7.1,x2:4.8,y2:7.9,kind:"pass"},
      {type:"arrow",x:5.1,y:8.2,x2:4.6,y2:16.4,kind:"ball"},
      {type:"label",x:7.2,y:12,label:"relance immédiate"}
    ]}
  },
  {
    nom:"Passes arrières en chaîne",
    auteur:"Victor",
    themes:["Passe"], niveau:"Intermédiaire", joueurs:{min:4,max:8}, duree:10,
    materiel:"1 ballon",
    objectif:"Répéter la passe arrière (passe en poussée au-dessus de la tête) dans un enchaînement continu, pour en automatiser le geste et la précision.",
    deroule:[
      "Tous les joueurs se placent en colonne, les uns derrière les autres, face à un joueur isolé situé devant la colonne.",
      "Le joueur isolé fait une passe avant (passe haute) au premier joueur de la colonne.",
      "Ce joueur réalise une passe arrière, au-dessus de sa tête, vers le joueur situé derrière lui.",
      "Chacun enchaîne la même passe arrière de proche en proche, jusqu'au dernier joueur de la colonne.",
      "Le dernier joueur renvoie le ballon d'une longue passe par-dessus toute la colonne jusqu'au joueur isolé, et le cycle recommence."
    ],
    consignes:[
      "Passe arrière : ballon au-dessus du front, poussée vers le haut et l'arrière, bascule du regard au dernier moment",
      "Passe haute et lisible pour le joueur suivant, le laisser se placer dessous",
      "Garder la colonne alignée avec un écart régulier",
      "Annoncer le ballon pour fluidifier la chaîne"
    ],
    variantes:[
      "Plus facile : réduire l'écart entre les joueurs, autoriser un contrôle sur soi si la passe arrière est trop dure",
      "Plus dur : élargir les écarts, ou faire suivre chacun sa passe pour aller au bout de la colonne (rotation continue)"
    ],
    schema:{terrain:"half",elements:[
      {type:"player",x:4.5,y:8,team:"B",label:""},
      {type:"player",x:4.5,y:5.5,team:"A",label:"1"},
      {type:"player",x:4.5,y:4,team:"A",label:"2"},
      {type:"player",x:4.5,y:2.5,team:"A",label:"3"},
      {type:"player",x:4.5,y:1,team:"A",label:"4"},
      {type:"arrow",x:4.5,y:1,x2:4.5,y2:8,kind:"ball"},
    ]}
  },
  {
    nom:"Aller-retour montées de genoux",
    themes:["Échauffement","Physique"], niveau:"Débutant", joueurs:{min:1,max:16}, duree:6,
    materiel:"Aucun",
    objectif:"Activation cardio et montée en température des membres inférieurs, en montées de genoux sur un aller-retour jusqu'au filet.",
    deroule:[
      "Se placer sur la ligne de fond. Avancer jusqu'au filet en montées de genoux (genou à hauteur de hanche).",
      "Toucher le filet (ou la ligne d'attaque) puis revenir en trottinant léger.",
      "Enchaîner 4 à 6 allers-retours à rythme régulier.",
      "Par vagues si le groupe est nombreux, départ échelonné."
    ],
    consignes:[
      "Genou haut, buste droit, regard devant",
      "Appuis dynamiques sur l'avant du pied",
      "Les bras rythment le mouvement, coude à 90°"
    ],
    variantes:[
      "Plus dur : accélérer la fréquence ou allonger la distance (ligne de fond à ligne de fond)",
      "Plus facile : réduire la hauteur des genoux et la distance"
    ],
    schema:{terrain:"full",elements:[
      {type:"player",x:4.5,y:16.8,team:"A",label:""},
      {type:"arrow",x:4.1,y:16.3,x2:4.1,y2:9.4,kind:"move"},
      {type:"arrow",x:4.9,y:9.4,x2:4.9,y2:16.3,kind:"move"},
      {type:"label",x:2.5,y:13,label:"genoux hauts"},
      {type:"label",x:6.5,y:13,label:"retour"}
    ]}
  },
  {
    nom:"Aller-retour fentes + geste d'attaque",
    themes:["Échauffement","Physique"], niveau:"Débutant", joueurs:{min:1,max:16}, duree:6,
    materiel:"Aucun",
    objectif:"Mobiliser hanches et épaules en combinant fentes avant et geste d'attaque des bras, sur un aller-retour jusqu'au filet.",
    deroule:[
      "Depuis la ligne de fond, avancer vers le filet en fentes avant marchées.",
      "À chaque fente, réaliser un geste d'attaque complet du bras (armé puis frappe dans le vide).",
      "Revenir en trottinant, puis recommencer.",
      "4 à 6 allers-retours."
    ],
    consignes:[
      "Fente : genou dans l'axe du pied, descente contrôlée",
      "Armé haut, coude au-dessus de l'épaule, geste de frappe complet",
      "Gainer le tronc pour rester stable sur la fente"
    ],
    variantes:[
      "Plus dur : fente sautée + geste d'attaque",
      "Plus facile : fentes plus courtes, geste de bras sans amplitude maximale"
    ],
    schema:{terrain:"full",elements:[
      {type:"player",x:4.5,y:16.8,team:"A",label:""},
      {type:"arrow",x:4.1,y:16.3,x2:4.1,y2:9.4,kind:"move"},
      {type:"arrow",x:4.9,y:9.4,x2:4.9,y2:16.3,kind:"move"},
      {type:"label",x:2.5,y:13,label:"fente + bras"},
      {type:"label",x:6.5,y:13,label:"retour"}
    ]}
  },
  {
    nom:"Aller-retour talons-fesses / pas chassés",
    themes:["Échauffement","Physique"], niveau:"Débutant", joueurs:{min:1,max:16}, duree:6,
    materiel:"Aucun",
    objectif:"Échauffer les chaînes postérieures et les appuis latéraux, en alternant talons-fesses à l'aller et pas chassés au retour.",
    deroule:[
      "Aller jusqu'au filet en talons-fesses (talon vers la fesse, rythme rapide).",
      "Revenir en pas chassés latéraux, buste de face, sans croiser les pieds.",
      "Changer de côté de déplacement à chaque retour.",
      "4 à 6 allers-retours."
    ],
    consignes:[
      "Talons-fesses : buste droit, fréquence élevée",
      "Pas chassés : rester bas, ne pas croiser les appuis",
      "Garder les épaules face au filet"
    ],
    variantes:[
      "Plus dur : enchaîner sans pause et augmenter la cadence",
      "Plus facile : ralentir et raccourcir la distance"
    ],
    schema:{terrain:"full",elements:[
      {type:"player",x:4.5,y:16.8,team:"A",label:""},
      {type:"arrow",x:4.1,y:16.3,x2:4.1,y2:9.4,kind:"move"},
      {type:"arrow",x:4.9,y:9.4,x2:4.9,y2:16.3,kind:"move"},
      {type:"label",x:2.4,y:13,label:"talons-fesses"},
      {type:"label",x:6.6,y:13,label:"pas chassés"}
    ]}
  },
  {
    nom:"Aller-retour en position basse",
    themes:["Échauffement","Physique","Défense"], niveau:"Débutant", joueurs:{min:1,max:16}, duree:6,
    materiel:"Aucun",
    objectif:"Réveiller la posture de défense et les appuis, en déplacement bas avec touche du sol à chaque ligne, jusqu'au filet et retour.",
    deroule:[
      "Partir en position basse de défenseur : genoux fléchis, bras devant.",
      "Avancer vers le filet en petits pas rapides ; à chaque ligne du terrain, toucher le sol d'une main.",
      "Revenir de la même façon, toujours en position basse.",
      "3 à 5 allers-retours."
    ],
    consignes:[
      "Rester bas en permanence, dos droit, poids sur l'avant des pieds",
      "Toucher le sol sans se relever complètement",
      "Appuis courts et rapides"
    ],
    variantes:[
      "Plus dur : ajouter un changement de direction sur signal",
      "Plus facile : moins de touches au sol, distance réduite"
    ],
    schema:{terrain:"full",elements:[
      {type:"player",x:4.5,y:16.8,team:"A",label:""},
      {type:"arrow",x:4.1,y:16.3,x2:4.1,y2:9.4,kind:"move"},
      {type:"arrow",x:4.9,y:9.4,x2:4.9,y2:16.3,kind:"move"},
      {type:"label",x:2.6,y:13,label:"position basse"},
      {type:"label",x:6.8,y:13,label:"retour"}
    ]}
  },
  {
    nom:"Aller-retour pas croisés (carioca)",
    themes:["Échauffement","Physique"], niveau:"Intermédiaire", joueurs:{min:1,max:16}, duree:5,
    materiel:"Aucun",
    objectif:"Travailler la coordination et la mobilité des hanches en déplacement latéral par pas croisés (carioca), sur un aller-retour le long du filet.",
    deroule:[
      "Se déplacer latéralement le long du filet en pas croisés : un pied passe devant, l'autre derrière, en alternance.",
      "Garder le buste face au filet, les hanches mobiles.",
      "Faire l'aller dans un sens, le retour dans l'autre.",
      "4 à 6 passages."
    ],
    consignes:[
      "Buste stable face au filet, rotation des hanches seulement",
      "Rythme régulier, appuis sur l'avant des pieds",
      "Regarder devant, pas les pieds"
    ],
    variantes:[
      "Plus dur : accélérer la cadence et enchaîner avec un sprint",
      "Plus facile : ralentir et réduire l'amplitude"
    ],
    schema:{terrain:"full",elements:[
      {type:"player",x:1.5,y:11,team:"A",label:""},
      {type:"arrow",x:2,y:10.6,x2:7.5,y2:10.6,kind:"move"},
      {type:"arrow",x:7.5,y:11.4,x2:2,y2:11.4,kind:"move"},
      {type:"label",x:4.5,y:9.6,label:"pas croisés"},
      {type:"label",x:4.5,y:12.4,label:"aller-retour latéral"}
    ]}
  },
  {
    nom:"Baguettes chinoises",
    auteur:"Victor",
    themes:["Échauffement","Réception"], niveau:"Débutant", joueurs:{min:1,max:16}, duree:6,
    materiel:"1 ballon par joueur",
    objectif:"Toucher de balle et contrôle de la manchette à un bras : garder le ballon en l'air en jonglant, en alternant les bras.",
    deroule:[
      "Un joueur, un ballon. Faire rebondir le ballon sur l'avant-bras (geste de manchette), un seul bras à la fois.",
      "Alterner bras droit et bras gauche à chaque touche, en gardant le ballon en l'air.",
      "Se déplacer latéralement pour amener le ballon d'un bras à l'autre.",
      "Compter le nombre de touches d'affilée sans faire tomber."
    ],
    consignes:[
      "Avant-bras ferme et plat, toucher le ballon bien au centre",
      "Fléchir les jambes et se placer sous le ballon avant chaque touche",
      "Garder le ballon à une hauteur maîtrisable, surtout au début"
    ],
    variantes:[
      "Plus facile : un seul bras, rebonds réguliers et pas trop hauts",
      "Plus dur : monter le ballon plus haut, alterner plus vite, déplacements plus amples"
    ],
    schema:{terrain:"half",elements:[
      {type:"player",x:4.5,y:5,team:"A",label:""},
      {type:"ball",x:4.5,y:4.5},
    ]}
  },
  {
    nom:"Échange chinois",
    auteur:"Victor",
    themes:["Échauffement","Réception"], niveau:"Débutant", joueurs:{min:2,max:16}, duree:6,
    materiel:"1 ballon pour 2",
    objectif:"Contrôle de la manchette à un bras et précision, en échange coopératif à deux.",
    deroule:[
      "Deux joueurs face à face, à quelques mètres, avec un ballon.",
      "Se faire des passes à un seul bras.",
      "Garder l'échange le plus longtemps possible sans faire tomber la balle.",
      "Compter les échanges réussis et viser une série."
    ],
    consignes:[
      "Avant-bras ferme, orienter la touche vers le partenaire",
      "Fléchir les jambes et se placer sous le ballon",
      "Doser la force pour un échange régulier"
    ],
    variantes:[
      "Plus facile : rapprocher les joueurs, autoriser les deux bras",
      "Plus dur : augmenter la distance, imposer le bras faible, ajouter un déplacement"
    ],
    schema:{terrain:"half",elements:[
      {type:"player",x:4.5,y:2,team:"A",label:"A"},
      {type:"player",x:4.5,y:8,team:"A",label:"B"},
      {type:"arrow",x:4.3,y:1.9,x2:4.3,y2:7.9,kind:"ball"},
      {type:"arrow",x:4.7,y:1.9,x2:4.7,y2:7.9,kind:"pass"}
    ]}
  },
  {
	nom: "Manchette sur soi-même",
	auteur:"Victor",
	themes: ["Réception", "Défense"],
	niveau: "Débutant",
	joueurs: {
	  "min": 1,
	  "max": 16
	},
	  "duree": 5,
	  "materiel": "1 ballon par joueur",
	  "objectif": "Améliorer la maîtrise de la manchette et le contrôle de la trajectoire du ballon grâce à des touches successives sur soi-même.",
	  "deroule": [
		"Chaque joueur prend un ballon et se place dans un espace libre sur le terrain.",
		"Réaliser des manchettes successives sur soi-même, en essayant de conserver le ballon en l'air le plus longtemps possible.",
		"Enchaîner les touches sans se déplacer, en ajustant principalement la hauteur et la position des jambes."
	  ],
	  "consignes": [
		"Privilégier le travail des jambes pour contrôler la trajectoire du ballon.",
		"Limiter au maximum le mouvement des bras : conserver une plateforme stable.",
		"Se déplacer le moins possible et rester équilibré sous le ballon.",
		"Garder le ballon à une hauteur permettant d'enchaîner facilement les touches."
	  ],
	  "variantes": [
		"Plus facile : arrêter la balle après chaque manchette.",
		"Plus dur : augmenter volontairement la hauteur des manchettes tout en conservant le contrôle du ballon."
	  ],
	  "schema": {
		"terrain": "half",
		"elements": [
		  { "type": "player", "x": 3, "y": 3, "team": "A", "label": "1" },
		  { "type": "ball", "x": 3, "y": 2.5 },
		  { "type": "player", "x": 6, "y": 3, "team": "A", "label": "2" },
		  { "type": "ball", "x": 6, "y": 2.5 },
		  { "type": "player", "x": 3, "y": 7, "team": "A", "label": "3" },
		  { "type": "ball", "x": 3, "y": 6.5 },
		  { "type": "player", "x": 6, "y": 7, "team": "A", "label": "4" },
		  { "type": "ball", "x": 6, "y": 6.5 }
		]
	  }
  },
  {
	  nom:"Passe haute sur soi-même",
	  themes:["Passe"], niveau:"Débutant", joueurs:{min:1,max:16}, duree:5,
	  materiel:"1 ballon par joueur",
	  objectif:"Améliorer la maîtrise de la passe haute et le contrôle de la trajectoire du ballon sur soi-même.",
	  deroule:[
		"Chaque joueur prend un ballon et se place dans un espace libre sur le terrain.",
		"Réaliser des passes hautes successives sur soi-même, en essayant de conserver le ballon en l'air le plus longtemps possible.",
		"Enchaîner les touches sans se déplacer, en se replaçant sous le ballon à chaque fois."
	  ],
	  consignes:[
		"Former une fenêtre avec les mains au-dessus du front, doigts écartés et souples.",
		"Jouer le ballon avec les doigts, sans le porter ni le frapper avec les paumes.",
		"Accompagner la passe avec une extension des jambes et des bras.",
		"Garder le ballon à une hauteur permettant d'enchaîner facilement les touches."
	  ],
	  variantes:[
		"Plus haut : augmenter volontairement la hauteur des passes tout en conservant le contrôle du ballon."
	  ],
	  schema:{terrain:"half",elements:[
		  { "type": "player", "x": 3, "y": 3, "team": "A", "label": "1" },
		  { "type": "ball", "x": 3, "y": 2.5 },
		  { "type": "player", "x": 6, "y": 3, "team": "A", "label": "2" },
		  { "type": "ball", "x": 6, "y": 2.5 },
		  { "type": "player", "x": 3, "y": 7, "team": "A", "label": "3" },
		  { "type": "ball", "x": 3, "y": 6.5 },
		  { "type": "player", "x": 6, "y": 7, "team": "A", "label": "4" },
		  { "type": "ball", "x": 6, "y": 6.5 }
	  ]}
	},
	{
  nom:"Contre débutant",
  themes:["Bloc"], niveau:"Débutant", joueurs:{min:2,max:8}, duree:10,
  materiel:"1 ballon par duo",
  objectif:"Apprendre le placement des mains au-dessus du filet et la coordination du saut pour réaliser un contre.",
  deroule:[
    "Par deux, un joueur se place près du filet avec un ballon tenu à deux mains, bras levés et ballon au-dessus du filet.",
    "En face, l'autre joueur se place à proximité du filet, prêt à sauter.",
    "Au signal, le joueur saute verticalement, passe les mains au-dessus du filet et attrape le ballon à deux mains.",
    "Il ramène ensuite le ballon de son côté du terrain avant de redescendre.",
    "Inverser les rôles après plusieurs répétitions."
  ],
  consignes:[
    "Sauter verticalement, sans toucher le filet.",
    "Passer les mains au-dessus du filet en gardant les doigts écartés et les mains orientées vers le terrain adverse.",
    "Garder les bras tendus au moment du saut.",
    "Coordonner le passage des mains avec le saut pour atteindre le ballon au point le plus haut."
  ],
  variantes:[
    "Plus facile : tenir le ballon moins haut pour faciliter la prise.",
    "Plus dur : le joueur qui tient le ballon le déplace légèrement sur les côtés pour obliger le bloqueur à ajuster son placement."
  ],
  schema:{terrain:"full",elements:[
    {type:"player",x:4.5,y:8,team:"A",label:"A"},
    {type:"ball",x:4.5,y:8.5},
    {type:"player",x:4.5,y:10,team:"B",label:"B"}
  ]}
},
  {
    nom:"Passe dans le cercle",
    auteur:"Victor",
    themes:["Passe"], niveau:"Intermédiaire", joueurs:{min:2,max:16}, duree:8,
    materiel:"1 ballon et 2 cerceaux pour 2",
    objectif:"Travailler la précision de la passe haute à distance : faire retomber le ballon dans le cerceau du partenaire, en reprenant après le rebond.",
    deroule:[
      "Deux joueurs face à face, séparés d'environ 8 mètres, un cerceau posé au sol devant chacun.",
      "Passe haute qui doit retomber dans le cerceau d'en face.",
      "Laisser le ballon rebondir une fois, puis le reprendre en passe pour viser à nouveau le cerceau de l'autre.",
      "Enchaîner le plus longtemps possible ; compter les passes tombées dans le cerceau."
    ],
    consignes:[
      "Passe haute et lobée pour qu'elle retombe à la verticale dans le cerceau",
      "Se placer sous le ballon après le rebond, mains au-dessus du front",
      "Viser le cerceau, pas le partenaire, et doser selon la distance"
    ],
    variantes:[
      "Plus facile : rapprocher les joueurs ou agrandir la cible",
      "Plus dur : éloigner, réduire la cible, imposer la passe en suspension"
    ],
    schema:{terrain:"half",elements:[
      {type:"player",x:4.5,y:8,team:"A",label:"A"},
      {type:"zone",x:3.7,y:5.4,w:1.6,h:1.4},
      {type:"player",x:4.5,y:1,team:"B",label:"B"},
      {type:"zone",x:3.7,y:2.2,w:1.6,h:1.4},
    ]}
  },
  {
    nom:"Passe dans le cercle avancée",
    auteur:"Victor",
    themes:["Passe"], niveau:"Confirmé", joueurs:{min:2,max:16}, duree:10,
    materiel:"1 ballon et 3 cerceaux pour 2",
    objectif:"Même principe que « Passe dans le cercle », mais la cible change selon la position du partenaire : travailler la précision et la prise d'information avant de passer.",
    deroule:[
      "Deux joueurs face à face à environ 8 m, un cerceau devant chacun, plus un cerceau au milieu entre les deux.",
      "Après sa passe, le joueur choisit de se placer physiquement dans son propre cerceau ou de rester derrière.",
      "Le joueur d'en face adapte sa passe selon la position de l'autre : partenaire dans son cerceau → passe qui retombe dans le cerceau du milieu ; partenaire derrière son cerceau → passe qui retombe dans le cerceau du partenaire.",
      "Laisser le rebond, puis reprendre en passe selon les mêmes conditions. Enchaîner."
    ],
    consignes:[
      "Prendre l'information sur la position du partenaire avant de passer",
      "Passe haute et lobée, viser la bonne cible selon le cas",
      "Se replacer vite sous le ballon après le rebond : c'est un exercice de lecture autant que de précision"
    ],
    variantes:[
      "Plus facile : ralentir, cerceaux plus grands, distances réduites",
      "Plus dur : éloigner les joueurs, ajouter une consigne de déplacement après la passe"
    ],
    schema:{terrain:"half",elements:[
      {type:"player",x:4.5,y:8,team:"A",label:"A"},
      {type:"zone",x:3.7,y:5.4,w:1.6,h:1.4},
      {type:"player",x:4.5,y:1,team:"B",label:"B"},
      {type:"zone",x:3.7,y:2.2,w:1.6,h:1.4},
      {type:"zone",x:3.7,y:3.9,w:1.6,h:1.2},
      {type:"arrow",x:4.5,y:7.6,x2:4.5,y2:6,kind:"pass"},
      {type:"arrow",x:4.5,y:1.4,x2:4.5,y2:3,kind:"pass"}
    ]}
  },
  {
    nom:"Passe arrière après demi-service",
    auteur:"Victor",
    themes:["Passe"], niveau:"Intermédiaire", joueurs:{min:3,max:8}, duree:10,
    materiel:"1 ou 2 ballons",
    objectif:"Travailler la passe arrière après une réception facile.",
    deroule:[
      "Un passeur se place en poste 3 ou 2, un réceptionneur en poste 4.",
      "Les autres joueurs se placent en face du réceptionneur, sur l'autre terrain.",
      "Les joueurs en attente engagent le point avec un service milieu de terrain, ou une attaque pieds au sol.",
      "Le passeur fait une passe arrière en poste 2 pour le pointu.",
	  "Il est possible de dupliquer l'exercice en miroir de l'autre côté du terrain."
    ],
    consignes:[
      "Réception haute pour donner le temps au passeur de se déplacer et de s'orienter.",
      "Le passeur doit aussi bien gérer la hauteur que la profondeur de sa passe en fonction d'où il se trouve sur le terrain."
    ],
    variantes:[
      "Plus facile : lancer la balle au lieu du demi-service",
      "Plus dur : passe arrière aux 3 mètres pour une attaque depuis la ligne arrière"
    ],
    schema:{terrain:"full",elements:[
      {type:"player",x:2,y:1.5,team:"A"},
      {type:"player",x:2,y:3,team:"A",label:"S"},
      {type:"player",x:2,y:13,team:"A",label:"R"},
      {type:"player",x:5,y:10,team:"A",label:"P"},
      {type:"arrow",x:2,y:3,x2:2,y2:13,kind:"ball"},
      {type:"arrow",x:2,y:13,x2:5,y2:10,kind:"pass"},
      {type:"arrow",x:5,y:10,x2:8,y2:10,kind:"ball"},
      {type:"player",x:7,y:16.5,team:"B"},
      {type:"player",x:7,y:15,team:"B",label:"S"},
      {type:"player",x:7,y:5,team:"B",label:"R"},
      {type:"player",x:5,y:8,team:"B",label:"P"},
      {type:"arrow",x:7,y:15,x2:7,y2:5,kind:"ball"},
      {type:"arrow",x:7,y:5,x2:5,y2:8,kind:"pass"},
      {type:"arrow",x:5,y:8,x2:1,y2:8,kind:"ball"},
    ]}
  },
  {
    nom:"Échauffement passe au mur",
    auteur:"Victor",
    themes:["Échauffement","Passe"], niveau:"Débutant", joueurs:{min:1,max:16}, duree:5,
    materiel:"1 ballon par joueur, un mur",
    objectif:"Travailler le contrôle de la passe et la régularité du toucher en utilisant un mur plutôt qu'un partenaire.",
    deroule:[
      "Chaque joueur se place face au mur avec un ballon.",
      "Enchaîner le plus de passes possibles contre le mur, sans faire tomber la balle.",
      "Varier la distance au mur pour travailler différents muscles et contrôles de balle."
    ],
    consignes:[
      "Former une fenêtre avec les mains au-dessus du front, doigts souples.",
      "Rester équilibré sous le ballon et se replacer entre chaque passe.",
      "Près du mur : passes rapides et précises ; loin du mur : passes plus hautes et plus puissantes."
    ],
    variantes:[
      "Plus facile : laisser la balle rebondir une fois au sol entre deux passes.",
      "Plus dur : alterner passe haute et manchette, ou viser une cible sur le mur.",
      "À plusieurs : se relayer sur un même mur, ou enchaîner passe au mur puis passe à un partenaire."
    ],
    schema:{terrain:"wall",elements:[
      {type:"label",x:1.0,y:0.55,label:"mur"},
      {type:"player",x:4.5,y:5.2,team:"A",label:"1"},
      {type:"ball",x:4.5,y:4.3},
      {type:"arrow",x:4.1,y:4.1,x2:4.1,y2:0.6,kind:"ball"},
      {type:"arrow",x:4.9,y:0.6,x2:4.9,y2:4.1,kind:"ball"},
      {type:"label",x:4.5,y:6.1,label:"varie la distance"}
    ]}
  },
  {
    nom:"Échauffement manchette au mur",
    auteur:"Victor",
    themes:["Échauffement","Réception"], niveau:"Débutant", joueurs:{min:1,max:16}, duree:5,
    materiel:"1 ballon par joueur, un mur",
    objectif:"Travailler la stabilité de la manchette et le contrôle de la plateforme de bras en renvoyant le ballon contre un mur.",
    deroule:[
      "Chaque joueur se place face au mur avec un ballon.",
      "Enchaîner le plus de manchettes possibles contre le mur, sans faire tomber la balle.",
      "Varier la distance au mur pour ajuster l'angle et la puissance de la plateforme."
    ],
    consignes:[
      "Bras tendus et joints, plateforme stable : ce sont les jambes qui donnent la trajectoire.",
      "Viser légèrement haut sur le mur pour garder le temps de se replacer.",
      "Rester équilibré sous le ballon et se repositionner entre chaque touche."
    ],
    variantes:[
      "Plus facile : laisser la balle rebondir une fois au sol entre deux manchettes.",
      "Plus dur : alterner manchette droite et gauche (une main / déséquilibre), ou viser une cible sur le mur.",
      "À plusieurs : se relayer sur un même mur, ou alterner manchette au mur puis manchette à un partenaire."
    ],
    schema:{terrain:"wall",elements:[
      {type:"label",x:1.0,y:0.55,label:"mur"},
      {type:"player",x:4.5,y:5.2,team:"A",label:"1"},
      {type:"ball",x:4.5,y:4.3},
      {type:"arrow",x:4.1,y:4.1,x2:4.1,y2:0.6,kind:"ball"},
      {type:"arrow",x:4.9,y:0.6,x2:4.9,y2:4.1,kind:"ball"},
      {type:"label",x:4.5,y:6.1,label:"varie la distance"}
    ]}
  },
  {
    nom:"Attaque au mur avec rebond",
    auteur:"Victor",
    themes:["Échauffement","Attaque"], niveau:"Intermédiaire", joueurs:{min:1,max:16}, duree:8,
    materiel:"1 ballon par joueur, un mur",
    objectif:"Travailler le geste de frappe et le lifté de l'attaque : frapper vers le sol pour que la balle rebondisse puis touche le mur, et récupérer le retour.",
    deroule:[
      "Chaque joueur se place à quelques mètres du mur avec un ballon.",
      "Se lancer la balle et la frapper vers le sol (comme un smash) de façon à ce qu'elle rebondisse au sol puis vienne toucher le mur.",
      "Récupérer la balle au retour du mur et recommencer, en cherchant à enchaîner.",
      "Varier la distance pour ajuster l'angle de frappe."
    ],
    consignes:[
      "Frapper au-dessus de l'épaule, bras tendu, avec un fouetté du poignet pour lifter la balle vers le sol.",
      "Viser un point au sol assez proche du mur pour que le rebond reste contrôlable.",
      "Garder les yeux sur la balle au retour et se replacer rapidement pour la frappe suivante."
    ],
    variantes:[
      "Plus facile : laisser la balle rebondir au sol au retour avant de la reprendre.",
      "Plus dur : enchaîner sans que la balle ne retombe au sol au retour (reprise directe), ou alterner frappe lonne / diagonale.",
      "À plusieurs : se relayer sur un même mur, l'un frappe, l'autre récupère et relance."
    ],
    schema:{terrain:"wall",elements:[
      {type:"label",x:1.0,y:0.55,label:"mur"},
      {type:"player",x:6.0,y:4.8,team:"A",label:"1"},
      {type:"ball",x:5.6,y:3.9},
      {type:"arrow",x:5.3,y:3.6,x2:3.6,y2:4.7,kind:"ball"},
      {type:"arrow",x:3.5,y:4.6,x2:2.1,y2:0.7,kind:"ball"},
      {type:"arrow",x:2.1,y:0.7,x2:5.3,y2:3.8,kind:"ball"},
      {type:"label",x:3.5,y:5.4,label:"rebond au sol"}
    ]}
  },


  {
    nom:"Déplacement de bloc aux 3 postes",
    themes:["Bloc"], niveau:"Intermédiaire", joueurs:{min:1,max:12}, duree:8,
    materiel:"Le filet (ballons facultatifs)",
    objectif:"Travailler les appuis du contreur qui se déplace d'un poste à l'autre le long du filet et saute à chaque poste.",
    deroule:[
      "Le contreur démarre en zone 4 (aile gauche), face au filet.",
      "Saut de bloc en zone 4, puis déplacement vers la zone 3 (centre) et nouveau saut de bloc.",
      "Déplacement vers la zone 2 (aile droite) et dernier saut de bloc.",
      "Revenir en sens inverse ; enchaîner plusieurs allers-retours."
    ],
    consignes:[
      "Pas chassé pour un petit déplacement, pas croisé pour aller plus vite vers le centre.",
      "Toujours finir face au filet, arrêté et équilibré, avant de sauter.",
      "Mains hautes dès l'arrivée au poste, saut vertical, réception sur deux pieds."
    ],
    variantes:[
      "Plus facile : marcher les déplacements, se concentrer sur l'ordre des appuis.",
      "Échauffement sans ballon : uniquement les déplacements et le saut de bloc, en début de séance.",
      "En miroir : deux joueurs de chaque côté du filet synchronisent leurs blocs.",
      "Avec lecture : l'entraîneur donne la direction au dernier moment, le contreur lit avant de partir.",
      "Plus dur : un partenaire sur plinth attaque un ballon au poste d'arrivée (bloc réel).",
      "Chronométré : nombre de blocs propres en 30 secondes."
    ],
    schema:{terrain:"half",elements:[
      {type:"player",x:1.5,y:1.3,team:"A",label:"B"},
      {type:"label",x:1.5,y:2.7,label:"zone 4"},
      {type:"label",x:4.5,y:2.7,label:"zone 3"},
      {type:"label",x:7.5,y:2.7,label:"zone 2"},
      {type:"arrow",x:2.2,y:1.3,x2:3.9,y2:1.3,kind:"move"},
      {type:"arrow",x:5.1,y:1.3,x2:6.9,y2:1.3,kind:"move"}
    ]}
  },

  {
    nom:"Lecture et bloc (read block)",
    themes:["Bloc","Défense"], niveau:"Confirmé", joueurs:{min:4,max:12}, duree:12,
    materiel:"Ballons, le filet",
    objectif:"Apprendre au contreur à lire le jeu adverse (passe et épaule de l'attaquant) pour se déplacer et contrer le bon attaquant.",
    deroule:[
      "Trois attaquants sont prêts côté adverse (ailes et centre) ; le coach distribue à l'un d'eux.",
      "Le contreur, au centre du filet, observe la passe et part contrer l'attaquant servi.",
      "Il se déplace au bon poste et saute en pénétrant les mains ; les défenseurs se placent autour du bloc.",
      "Varier l'attaquant visé à chaque répétition."
    ],
    consignes:[
      "Ne pas partir sur la feinte : lire la trajectoire de la passe avant de se déplacer.",
      "Rester face au filet, arriver arrêté avant de sauter.",
      "Prendre une option claire (ligne ou diagonale) et laisser le reste à la défense."
    ],
    variantes:[
      "Plus facile : deux attaquants seulement (aile et centre).",
      "Plus dur : bloc à deux, à synchroniser au poste d'attaque.",
      "Avec jeu réel : on joue le point après le contre."
    ],
    schema:{terrain:"full",elements:[
      {type:"player",x:2,y:6.8,team:"B",label:"A4"},
      {type:"player",x:4.5,y:6.8,team:"B",label:"A3"},
      {type:"player",x:7,y:6.8,team:"B",label:"A2"},
      {type:"player",x:4.5,y:10,team:"A",label:"B"},
      {type:"label",x:4.5,y:4.4,label:"le coach distribue"},
      {type:"arrow",x:4.5,y:5,x2:6.8,y2:6.6,kind:"ball"},
      {type:"arrow",x:4.5,y:9.7,x2:6.6,y2:9.7,kind:"move"}
    ]}
  },


  {
    nom:"Service sous pression (défi d'équipe)",
    themes:["Service","Jeu"], niveau:"Intermédiaire", joueurs:{min:3,max:14}, duree:10,
    materiel:"Ballons, le filet",
    objectif:"Servir avec régularité malgré le stress, en reproduisant la pression d'un moment important de match.",
    deroule:[
      "L'équipe doit réussir un nombre de services consécutifs dans le terrain (par ex. 8 d'affilée).",
      "Chaque joueur sert à tour de rôle ; un service manqué remet le compteur à zéro.",
      "On peut imposer une zone cible pour qu'un service imprécis ne compte pas.",
      "Augmenter l'objectif au fil des séances."
    ],
    consignes:[
      "Garder sa routine de service, même sous pression (respiration, lancer régulier).",
      "Prendre une marge de sécurité quand le compteur monte, sans devenir trop timide.",
      "Rester concentré sur sa cible, pas sur le score du défi."
    ],
    variantes:[
      "Plus facile : objectif plus court, toute zone acceptée.",
      "Plus dur : zone cible stricte, ou deux équipes en concours parallèle.",
      "Service sauté imposé pour les joueurs confirmés."
    ],
    schema:{terrain:"full",elements:[
      {type:"player",x:2,y:17.4,team:"A",label:"S"},
      {type:"player",x:4.5,y:17.4,team:"A",label:"S"},
      {type:"player",x:7,y:17.4,team:"A",label:"S"},
      {type:"zone",x:0.6,y:0.8,w:7.8,h:2.4,label:"zone cible"},
      {type:"arrow",x:4.5,y:16.8,x2:4.5,y2:2.4,kind:"ball"}
    ]}
  },


  {
    nom:"Lignes d'attaque (diagonale / ligne)",
    themes:["Attaque"], niveau:"Intermédiaire", joueurs:{min:2,max:12}, duree:12,
    materiel:"Ballons, le filet, cibles au sol",
    objectif:"Travailler la frappe d'attaque en alternant la diagonale et la ligne, vers des cibles précises.",
    deroule:[
      "Le passeur pose une balle haute à l'aile gauche (zone 4).",
      "L'attaquant prend sa course d'élan et frappe, en alternant une attaque en diagonale puis une en ligne.",
      "On vise des cibles au sol (diagonale longue, ligne le long de la bande).",
      "Enchaîner les répétitions, puis changer d'aile."
    ],
    consignes:[
      "Course d'élan complète, frappe au point le plus haut, bras tendu.",
      "Pour la ligne : frapper le ballon un peu plus tôt et fermer l'épaule ; pour la diagonale, ouvrir.",
      "Viser la cible, pas seulement « fort » : la précision prime."
    ],
    variantes:[
      "Plus facile : balle lancée à la main par le coach au lieu d'une vraie passe.",
      "Plus dur : ajouter un bloc à un joueur, ou réduire les cibles.",
      "Travailler aussi la pointe (zone 2) et l'attaque arrière."
    ],
    schema:{terrain:"full",elements:[
      {type:"player",x:6,y:10.2,team:"A",label:"P"},
      {type:"player",x:2,y:12,team:"A",label:"A"},
      {type:"arrow",x:2,y:11.6,x2:2,y2:10.2,kind:"move"},
      {type:"arrow",x:5.7,y:10.2,x2:2.3,y2:10,kind:"pass"},
      {type:"arrow",x:2,y:9.5,x2:7,y2:2.2,kind:"ball"},
      {type:"arrow",x:2,y:9.5,x2:1.5,y2:2.2,kind:"ball"},
      {type:"zone",x:5.5,y:0.5,w:3,h:3,label:"diag"},
      {type:"zone",x:0,y:0.5,w:3,h:3,label:"ligne"}
    ]}
  },


  {
    nom:"Jouer le bloc (sortie / touche-dehors)",
    themes:["Attaque","Bloc"], niveau:"Confirmé", joueurs:{min:3,max:12}, duree:12,
    materiel:"Ballons, le filet",
    objectif:"Apprendre à attaquer face à un bloc : utiliser les mains du bloc pour sortir le ballon, ou frapper autour.",
    deroule:[
      "Un bloc à un ou deux joueurs est en place côté adverse.",
      "Le passeur pose à l'attaquant, qui cherche à utiliser le bloc : frapper haut sur les mains pour sortir (touche-dehors), ou passer autour.",
      "Varier les solutions : sortie, ligne, diagonale, feinte.",
      "Alterner les attaquants et la hauteur du bloc."
    ],
    consignes:[
      "Regarder le bloc en l'air : viser l'extérieur des mains pour la sortie.",
      "Ne pas forcer dans le bloc : choisir la solution selon ce que le bloc laisse.",
      "Garder une frappe haute et complète, même quand on joue fin."
    ],
    variantes:[
      "Plus facile : bloc passif (mains tendues, sans saut) pour viser la sortie.",
      "Plus dur : bloc actif à deux, défense derrière.",
      "Imposer la solution (sortie, puis feinte, puis ligne) à chaque passage."
    ],
    schema:{terrain:"full",elements:[
      {type:"player",x:6,y:10.2,team:"A",label:"P"},
      {type:"player",x:2.2,y:11.8,team:"A",label:"A"},
      {type:"player",x:2,y:8.3,team:"B",label:"B"},
      {type:"player",x:3.4,y:8.3,team:"B",label:"B"},
      {type:"arrow",x:5.7,y:10.2,x2:2.5,y2:10,kind:"pass"},
      {type:"arrow",x:2.2,y:9.5,x2:0.4,y2:12.5,kind:"ball"},
      {type:"label",x:1.2,y:13.4,label:"sortie (touche-dehors)"}
    ]}
  },

  {
    nom:"Bloc réflexe",
    auteur:"Victor",
    themes:["Bloc"], niveau:"Intermédiaire", joueurs:{min:2,max:12}, duree:8,
    materiel:"1 ballon, le filet",
    objectif:"Travailler le temps de réaction et le timing du contre : suivre un joueur en miroir le long du filet et sauter en même temps que lui.",
    deroule:[
      "Deux joueurs se placent face à face de part et d'autre du filet, proches d'une extrémité. L'un tient un ballon.",
      "Le joueur au ballon se déplace en pas chassés rapides le long du filet, et saute quand il veut en levant le ballon au-dessus du filet.",
      "L'autre joueur suit en miroir, face à lui, en pas chassés.",
      "Au moment où le premier saute, le second doit sauter en réflexe pour attraper le ballon au-dessus du filet."
    ],
    consignes:[
      "Rester face au filet, épaules parallèles, pendant tout le déplacement.",
      "Ne pas anticiper le saut : réagir au départ du joueur adverse (travail du réflexe).",
      "Sauter à la verticale, mains hautes, et attraper le ballon au point le plus haut."
    ],
    variantes:[
      "Plus facile : déplacements plus lents et sauts annoncés.",
      "Plus dur : changements de direction et feintes de saut du meneur.",
      "Le meneur pousse le ballon par-dessus le filet et le second doit le contrer/le bloquer au lieu de l'attraper."
    ],
    schema:{terrain:"full",elements:[
      {type:"player",x:7,y:8.3,team:"B",label:"1"},
      {type:"ball",x:7,y:8.8},
      {type:"player",x:7,y:9.7,team:"A",label:"2"},
      {type:"arrow",x:6.4,y:8.3,x2:3.6,y2:8.3,kind:"move"},
      {type:"arrow",x:6.4,y:9.7,x2:3.6,y2:9.7,kind:"move"},
      {type:"label",x:4.5,y:7.2,label:"pas chassés le long du filet"},
      {type:"label",x:4.5,y:10.8,label:"suit en miroir, saute en réflexe"}
    ]}
  },

  {
    nom:"Sauvetage lointain",
    auteur:"Victor",
    themes:["Défense","Physique"], niveau:"Intermédiaire", joueurs:{min:2,max:12}, duree:8,
    materiel:"Ballons, le filet",
    objectif:"Simuler une mauvaise réception à aller chercher loin : courir pour récupérer un ballon parti très loin et le remettre dans le terrain.",
    deroule:[
      "Un joueur, près du filet, lance un ballon très loin hors du terrain.",
      "L'autre joueur doit courir pour aller chercher la balle et la remonter le plus possible dans le terrain.",
      "On vise une relance haute et vers le centre, jouable par un partenaire.",
      "Alterner les rôles et les côtés."
    ],
    consignes:[
      "Partir vite et lire la trajectoire dès le lancer : la course prime.",
      "Se placer sous le ballon et jouer bas (manchette, parfois à une main) pour le remonter.",
      "Chercher à renvoyer haut et vers le centre, pas seulement « toucher » la balle."
    ],
    variantes:[
      "Plus facile : lancer moins loin, laisser un rebond.",
      "Plus dur : lancer plus loin / plus tendu, imposer une cible de relance.",
      "Enchaîner plusieurs sauvetages de suite (travail physique)."
    ],
    schema:{terrain:"half",elements:[
      {type:"player",x:4.5,y:1,team:"B",label:"L"},
      {type:"ball",x:5,y:1},
      {type:"arrow",x:4.5,y:1,x2:1,y2:10,kind:"ball"},
      {type:"player",x:4.5,y:3.1,team:"A",label:"1"},
      {type:"arrow",x:4.5,y:3.1,x2:1,y2:10,kind:"move"},
      {type:"arrow",x:1,y:10,x2:6,y2:6,kind:"pass"},
      {type:"label",x:1,y:3.3,label:"hors du terrain"}
    ]}
  },

  {
    nom:"Sauvetage lointain à 2 touches",
    auteur:"Victor",
    themes:["Défense","Jeu"], niveau:"Confirmé", joueurs:{min:3,max:12}, duree:10,
    materiel:"Ballons, le filet",
    objectif:"Assurer un sauvetage lointain à deux : un joueur ramène la balle au milieu, l'autre se place, s'annonce et relance de l'autre côté du terrain.",
    deroule:[
      "Un joueur lance un ballon très loin hors du terrain.",
      "Le joueur le plus proche de la balle court la chercher et la ramène vers le milieu du terrain.",
      "Le second joueur s'annonce pour signaler où il est, soutient la course du premier, puis fait la relance (plus ou moins agressive) de l'autre côté du filet.",
      "Alterner les rôles à chaque passage."
    ],
    consignes:[
      "Le 1er sauveteur joue la balle haut et vers le centre, jouable par le 2e.",
      "Le 2e s'annonce fort (« à moi ! ») et se place tôt pour la 2e touche.",
      "Communication et soutien permanents : les deux courent ensemble, pas chacun pour soi."
    ],
    variantes:[
      "Plus facile : la relance peut être simplement un renvoi haut par-dessus le filet.",
      "Plus dur : relance agressive (attaque placée) sur une cible adverse."
    ],
    schema:{terrain:"half",elements:[
      {type:"player",x:4.5,y:1,team:"B",label:"L"},
      {type:"ball",x:5,y:1},
      {type:"arrow",x:4.5,y:1,x2:1,y2:9.5,kind:"ball"},
      {type:"player",x:1,y:9.5,team:"A",label:"1"},
      {type:"arrow",x:1,y:9.5,x2:6,y2:6,kind:"pass"},
      {type:"player",x:6,y:6,team:"A",label:"2"},
      {type:"arrow",x:6,y:6,x2:7,y2:0,kind:"ball"},
    ]}
  },
  {
    nom:"Double défense avec réflexe",
    auteur:"Victor",
    themes:["Réception","Défense"], niveau:"Intermédiaire", joueurs:{min:3,max:3}, duree:12,
    materiel:"2 ballons",
    objectif:"Travailler la réception/défense et la prise d'information : enchaîner deux ballons venant de directions différentes, en se retournant entre les deux.",
    deroule:[
      "Trois joueurs. Un joueur se place dos au filet avec un ballon ; un deuxième au fond du terrain avec un ballon. Le joueur qui travaille se place au milieu, perpendiculaire aux deux autres.",
      "L'un des deux joueurs attaque son ballon vers le joueur du milieu, qui le réceptionne et le renvoie.",
      "Aussitôt, l'autre joueur envoie rapidement sa relance : le joueur du milieu se retourne après la 1re réception pour jouer la 2e balle.",
      "Les deux ballons sont renvoyés vers le joueur proche du filet. Alterner l'ordre (filet d'abord ou fond d'abord) pour travailler le réflexe."
    ],
    consignes:[
      "Les deux renvois vont vers le joueur proche du filet (cible commune).",
      "La balle venant du fond doit être contrôlée avant d'être renvoyée, sans la précipiter.",
      "Rester bas et prêt à pivoter : c'est un exercice de prise d'information selon d'où arrive la balle.",
      "Se replacer au centre après chaque cycle."
    ],
    variantes:[
      "Plus facile : annoncer l'ordre des deux balles (filet puis fond).",
      "Plus dur : varier l'ordre sans annonce et raccourcir le délai entre les deux balles."
    ],
    schema:{terrain:"full",elements:[
      {type:"player",x:4.5,y:10,team:"A",label:"F"},
      {type:"ball",x:5.3,y:10},
      {type:"player",x:4.5,y:16.5,team:"A",label:"R"},
      {type:"ball",x:5.3,y:16.5},
      {type:"player",x:2.2,y:13,team:"A",label:"T"},
      {type:"arrow",x:4.2,y:10.3,x2:2.6,y2:12.7,kind:"ball"},
      {type:"arrow",x:4.2,y:16.2,x2:2.6,y2:13.3,kind:"ball"},
      {type:"arrow",x:2.5,y:13,x2:4.1,y2:10.3,kind:"pass"},
      {type:"label",x:1,y:13,label:"se retourne"}
    ]}
  },
  {
    nom:"Match 2 contre 2 terrain tronqué",
    auteur:"Victor",
    themes:["Jeu","Attaque"], niveau:"Intermédiaire", joueurs:{min:4,max:8}, duree:15,
    materiel:"Filet, ballons, plots pour délimiter les zones",
    objectif:"En 2 contre 2, forcer le jeu court et le jeu long : seules les balles très courtes (près du filet) ou très profondes (fond) rapportent, la zone neutre du milieu ne marque pas.",
    deroule:[
      "Match en 2 contre 2 sur un demi-terrain en largeur (terrain étroit).",
      "Seules les balles qui tombent dans les 3 premiers mètres (près du filet) ou au-delà des 7 mètres (fond) marquent le point.",
      "Une balle qui tombe dans la zone neutre du milieu (entre 3 et 7 m) ne marque pas : le point se poursuit ou est rejoué selon la règle choisie.",
      "Jouer en 3 touches ; rotation des équipes à la gagne ou au score."
    ],
    consignes:[
      "Varier le jeu court (amorti, balle poussée près du filet) et le jeu long (attaque profonde).",
      "Lire la position de l'adversaire pour viser la zone laissée libre.",
      "Communiquer et se répartir le terrain étroit à deux."
    ],
    variantes:[
      "Plus facile : élargir les zones qui marquent (par ex. 4 m / 6 m).",
      "Plus dur : rétrécir les zones, ou n'autoriser que l'attaque (pas l'amorti) dans le fond."
    ],
    schema:{terrain:"full",elements:[
      {type:"zone",x:0,y:9,w:4.5,h:3},
      {type:"zone",x:0,y:16,w:4.5,h:2},
      {type:"zone",x:0,y:6,w:4.5,h:3},
      {type:"zone",x:0,y:0,w:4.5,h:2},
      {type:"cone",x:4.5,y:6},
      {type:"cone",x:4.5,y:12},
      {type:"player",x:1.5,y:13.5,team:"A",label:"A"},
      {type:"player",x:3,y:15,team:"A",label:"A"},
      {type:"player",x:1.5,y:4.5,team:"B",label:"B"},
      {type:"player",x:3,y:3,team:"B",label:"B"}
    ]}
  },
  {
    nom:"Parcours de réceptions",
    auteur:"Victor",
    themes:["Réception","Défense"], niveau:"Intermédiaire", joueurs:{min:2,max:12}, duree:12,
    materiel:"Plusieurs ballons, 1 passeur",
    objectif:"Enchaîner trois réceptions en déplacement rapide (zones 4, 6, 2), en renvoyant à chaque fois proprement sur le passeur central.",
    deroule:[
      "Un passeur se place au poste 3 (centre, près du filet). Les autres joueurs, chacun avec un ballon, attendent derrière le poste 5.",
      "Un joueur en attente envoie son ballon au passeur, qui le renvoie d'abord en zone 4 (courte), puis en zone 6, puis en zone 2.",
      "Le joueur qui travaille se déplace très vite pour enchaîner les trois réceptions dans l'ordre et les renvoyer à chaque fois sur le passeur central.",
      "Le passeur se déplace le moins possible ; on enchaîne le cycle, puis le joueur suivant prend sa place."
    ],
    consignes:[
      "Toujours renvoyer haut et propre sur le passeur central.",
      "Se replacer vite entre chaque ballon : vitesse de déplacement et équilibre avant la touche.",
      "Le passeur reste fixe au centre : c'est le joueur qui court, pas la cible."
    ],
    variantes:[
      "Plus dur : certains renvois du passeur sont des attaques (et non des balles posées) pour augmenter la difficulté.",
      "Plus facile : réduire à deux zones, ou laisser plus de temps entre les ballons."
    ],
    schema:{terrain:"half",elements:[
      {type:"player",x:4.5,y:1,team:"A",label:"P"},
      {type:"player",x:1,y:8,team:"A",label:"J"},
      {type:"player",x:1,y:8.8,team:"A",label:""},
      {type:"ball",x:1.5,y:8},
      {type:"arrow",x:1,y:8,x2:4.5,y2:1,kind:"ball"},
      {type:"arrow",x:4.5,y:1,x2:1.5,y2:2,kind:"ball"},
      {type:"arrow",x:4.5,y:1,x2:4.5,y2:8,kind:"ball"},
      {type:"arrow",x:4.5,y:1,x2:8,y2:2,kind:"ball"},
      {type:"arrow",x:1,y:7,x2:1.5,y2:2.5,kind:"move"},
      {type:"arrow",x:2,y:3,x2:4.5,y2:8,kind:"move"},
      {type:"arrow",x:5,y:7.5,x2:7.5,y2:3,kind:"move"},
      {type:"label",x:1,y:2,label:"1"},
      {type:"label",x:4.5,y:8.5,label:"2"},
      {type:"label",x:8.5,y:2,label:"3"}
    ]}
  }
];


/* =========================================================================
   TECHNIQUES — fondamentaux expliqués par niveau (débutant / intermédiaire /
   avancé). Sources : The Art of Coaching Volleyball, Volleyball Canada,
   Gold Medal Squared.
   ========================================================================= */
const TECHNIQUES = [
  {
    nom:"Position et déplacements", categorie:"Base",
    resume:"La posture de disponibilité et les déplacements qui précèdent chaque geste.",
    niveaux:{
      debutant:{intro:"Trouver une posture stable et équilibrée, prêt à bouger.",points:[
        "Pieds un peu plus larges que les épaules, poids sur l'avant des pieds (la plante).",
        "Genoux fléchis, buste légèrement penché en avant, bras devant soi.",
        "Regard tourné vers le jeu, jamais figé sur place.",
        "Déplacements courts en pas chassés, sans croiser les pieds."]},
      intermediaire:{intro:"Se replacer vite et arriver équilibré avant de jouer le ballon.",points:[
        "Enchaîner déplacement puis arrêt (freinage sur deux appuis) avant le contact.",
        "Sur les longues distances : courir puis finir en pas chassés pour se stabiliser.",
        "Épaules orientées vers la cible au moment de jouer.",
        "Anticiper en lisant le porteur du ballon pour partir au bon moment."]},
      avance:{intro:"Déplacements explosifs et lecture pour être toujours en avance sur le ballon.",points:[
        "Split-step (petit sursaut d'armement) juste avant la frappe adverse pour réagir dans les deux sens.",
        "Choisir le déplacement selon la distance : pas chassés, course, pas croisés.",
        "Garder un centre de gravité bas sur les trajectoires rapides.",
        "Dissocier haut et bas du corps : les appuis se placent pendant que les bras préparent le geste."]}
    },
    erreurs:["Rester debout, jambes tendues","Jouer le ballon en déséquilibre ou en mouvement","Croiser les pieds sur les courts déplacements"]
  },
  {
    nom:"La réception (manchette)", categorie:"Réception",
    resume:"Le contrôle du service adverse en manchette (avant-bras), premier geste de la construction.",
    niveaux:{
      debutant:{intro:"Construire un plateau stable et jouer le ballon avec les jambes.",points:[
        "Position d'attente : pieds un peu plus larges que les épaules, genoux fléchis, buste légèrement en avant, bras relâchés devant soi.",
        "Mains jointes, bras tendus formant un plateau plat ; coudes éloignés du ventre, bras à environ 90° du tronc.",
        "Contact sur les deux avant-bras, juste au-dessus des poignets.",
        "Pousser vers la cible avec les jambes, sans balancer les bras."]},
      intermediaire:{intro:"Orienter le plateau et se placer derrière le ballon.",points:[
        "Lire tôt le serveur pour partir dans la bonne direction ; se déplacer sur un plan horizontal (peu de montées-descentes).",
        "Freiner sur deux appuis, le pied côté cible légèrement devant, poids transféré vers l'avant au contact.",
        "L'angle du plateau est l'élément le plus important : c'est lui qui oriente le ballon vers le passeur.",
        "Épaules dirigées vers la cible, geste court et contrôlé plutôt qu'un grand mouvement de bras."]},
      avance:{intro:"Réception précise sous pression, sur service puissant ou flottant.",points:[
        "Ajuster le plateau en finesse selon la vitesse et l'effet (flottant qui bouge, service sauté).",
        "Jouer les ballons excentrés en orientant un seul avant-bras (manchette latérale), épaule haute du côté opposé.",
        "Amortir les services puissants en relâchant légèrement les bras au contact (réception « molle »).",
        "Se répartir les zones à 2 ou 3 receveurs : le ballon au plus proche de la cible, communication constante."]}
    },
    erreurs:["Balancer les bras au lieu de pousser avec les jambes","Plateau mal orienté","Reculer sur les talons au lieu d'avancer sous le ballon"]
  },
  {
    nom:"La passe à deux mains", categorie:"Passe",
    resume:"La passe haute au-dessus du front, geste du passeur pour construire l'attaque.",
    niveaux:{
      debutant:{intro:"Former une « fenêtre » avec les mains et jouer le ballon haut devant le front.",points:[
        "Se placer sous le ballon, pieds légèrement décalés (pied de la main forte devant), genoux fléchis.",
        "Mains au-dessus du front, doigts écartés et souples formant un triangle (pouces et index) ; le ballon ne descend pas plus bas que le front.",
        "Contact bref avec la pulpe des doigts (pas les paumes), puis extension des jambes et des bras.",
        "Finir le geste bras tendus vers la cible."]},
      intermediaire:{intro:"Passe précise et régulière vers les ailes, équilibre et orientation.",points:[
        "Être arrêté et équilibré avant la passe, épaules et hanches orientées vers la cible.",
        "Pousser de façon symétrique avec les deux mains pour une trajectoire propre, sans effet.",
        "Doser hauteur et profondeur selon l'attaquant (passe en zone 4, en zone 2).",
        "Passe arrière : même geste, bascule du bassin, le dos ne trahit pas la direction."]},
      avance:{intro:"Distribution rapide et déguisée, passe en suspension.",points:[
        "Passe en suspension pour gagner du temps et masquer la direction.",
        "Rester précis même en sortant d'une réception difficile (passe en déplacement, en recul).",
        "Varier les tempos (balles rapides, tendues) pour prendre de vitesse le bloc adverse.",
        "Fixer le bloc puis changer de côté au dernier moment."]}
    },
    erreurs:["Jouer le ballon trop bas (sous le front)","Contact avec les paumes → ballon accompagné / « tenu »","Épaules qui trahissent la passe arrière"]
  },
  {
    nom:"Le service", categorie:"Service",
    resume:"La mise en jeu : du service simple au service flottant ou sauté.",
    niveaux:{
      debutant:{intro:"Assurer la mise en jeu avec un geste simple et régulier.",points:[
        "Service à la cuillère (par en dessous) pour débuter : ballon tenu devant, frappe du bas vers l'avant avec le talon de la main.",
        "Pied opposé au bras frappeur légèrement devant, transfert du poids arrière → avant.",
        "Puis service tennis (par-dessus) : lancer bas et stable devant l'épaule du bras frappeur.",
        "Regarder la cible et viser large (le terrain adverse) avant de viser précis."]},
      intermediaire:{intro:"Service flottant par-dessus, régulier et ciblé.",points:[
        "Bras armé en position d'arc (coude et épaule tirés en arrière), ballon posé devant l'épaule frappeuse.",
        "Lancer bas : un lancer trop haut rend le service irrégulier.",
        "Frappe sèche avec le talon de la main, derrière le ballon, poignet ferme → pas d'effet (le ballon « flotte »).",
        "Rythme « pose – pas – frappe », transfert du poids vers la cible, accompagnement minimal."]},
      avance:{intro:"Service flottant sauté ou lifté sauté, puissance et agressivité.",points:[
        "Flottant sauté : appel « pas-pas-lancer-pas-pas », bras maintenus en position d'arc (pas de grand balancement), petit saut suffisant.",
        "Lifté sauté (topspin) : lancer haut dans le terrain, appel à 4 appuis (droite-gauche-droite-gauche pour un droitier), armé bras bas puis fouetté avec effet lifté.",
        "Varier zones, longueur (court/long) et type de service pour gêner la réception.",
        "Gérer le rapport risque / efficacité selon le score."]}
    },
    erreurs:["Lancer trop haut ou instable","Donner de l'effet au flottant (il ne flotte plus)","Décélérer le bras à l'impact"]
  },
  {
    nom:"La course d'élan", categorie:"Attaque",
    resume:"Les appuis et le rythme qui précèdent le smash : c'est la course d'élan qui donne la hauteur et le bon timing de l'attaque.",
    niveaux:{
      debutant:{intro:"Trouver un rythme d'appuis régulier et sauter à deux pieds.",points:[
        "Pour un droitier, élan à 3 appuis : gauche – droite-gauche (le dernier « pas assemblé ») ; un gaucher inverse (droite – gauche-droite).",
        "Les deux derniers appuis sont rapides et rasants : le pied avant se pose loin devant (freinage), l'autre vient le rejoindre.",
        "Les deux bras partent vers l'arrière pendant les derniers appuis, puis sont lancés vers le haut au moment du saut.",
        "Saut à deux pieds pour monter à la verticale, pas vers le filet."]},
      intermediaire:{intro:"Synchroniser l'élan avec la passe et convertir la course en hauteur.",points:[
        "Partir de derrière la ligne d'attaque (3 m) pour avoir de l'espace ; déclencher quand le ballon quitte les mains du passeur.",
        "Accélérer progressivement : premiers appuis lents, deux derniers explosifs — le « pas assemblé » freine l'avancée et la transforme en élévation.",
        "Le talon touche en premier sur l'avant-dernier appui pour bloquer la vitesse horizontale.",
        "Arriver légèrement derrière le ballon pour le frapper devant soi, pas au-dessus de la tête."]},
      avance:{intro:"Adapter l'élan au tempo de la passe et attaquer depuis toutes les zones.",points:[
        "Régler longueur et vitesse de l'élan selon le tempo : balle haute = élan complet ; balle rapide/tendue = élan court et anticipé.",
        "Élan à 4 appuis pour plus de puissance sur les ailes.",
        "Prendre l'élan depuis l'arrière pour l'attaque de zone 1 ou 6 (pipe), bien en retrait de la ligne des 3 m.",
        "Rester équilibré en l'air pour pouvoir changer la direction de frappe au dernier moment."]}
    },
    erreurs:["Sauter vers l'avant (dans le filet) au lieu de monter droit","Derniers appuis trop lents ou dans le mauvais ordre","Déclencher l'élan trop tôt, avant la passe","Finir sur un seul pied"]
  },
  {
    nom:"L'attaque (smash)", categorie:"Attaque",
    resume:"La frappe d'attaque en suspension après une course d'élan.",
    niveaux:{
      debutant:{intro:"Construire la course d'élan et frapper un ballon haut.",points:[
        "Les deux derniers appuis sont les plus importants : pour un droitier, droite puis gauche (« pas-assemblé »), puis saut à deux pieds.",
        "Lancer les deux bras vers le haut à l'appel pour s'élever.",
        "Armé : bras frappeur haut et en arrière, coude au-dessus de l'oreille, main pointée vers le haut ; l'autre bras vise le ballon.",
        "Frapper le ballon au point le plus haut, devant soi, et retomber souplement sur deux pieds."]},
      intermediaire:{intro:"Timing avec le passeur et frappe efficace.",points:[
        "Déclencher la course quand le ballon quitte les mains du passeur (timing).",
        "« L'épaule mène » : le coude puis l'avant-bras et la main fouettent vers l'avant, l'autre bras redescend devant la poitrine.",
        "Casser le poignet au contact pour lifter le ballon vers le bas (topspin).",
        "Retomber épaules devant les hanches, prêt à enchaîner (couverture, repli)."]},
      avance:{intro:"Varier les frappes et lire le bloc / la défense.",points:[
        "Lire le bloc : frapper en diagonale, en ligne, ou utiliser le bloc (« touche-dehors »).",
        "Varier : frappe puissante, amorti / feinte, roulette, frappe à une main en déséquilibre.",
        "Attaquer de différentes positions (ailes, pointe, attaque arrière en zone 1 ou 6).",
        "Adapter la course et le point de frappe aux passes rapides et tendues."]}
    },
    erreurs:["Sauter avant ou sous le ballon (mauvais timing)","Frapper bras tendu, sans armé","Se jeter en arrière au lieu d'aller vers l'avant"]
  },
  {
    nom:"Le bloc", categorie:"Bloc",
    resume:"Le contre au filet pour arrêter ou freiner l'attaque adverse.",
    niveaux:{
      debutant:{intro:"Sauter droit au filet et pénétrer les mains.",points:[
        "Position d'attente proche du filet, mains devant les épaules, pieds parallèles au filet.",
        "Sauter à la verticale (ne pas toucher le filet), bras montés haut.",
        "Mains larges, doigts écartés, pouces vers le haut pour ne pas laisser de trou.",
        "Gainer le ventre à l'impact pour protéger le dos et pousser les mains."]},
      intermediaire:{intro:"Se déplacer et pénétrer au-dessus du filet.",points:[
        "Déplacement rapide : pas chassés sur courte distance, pas croisés sur longue distance, en restant face au filet.",
        "Sauter après l'attaquant (timing), jamais avant.",
        "Pénétrer les mains par-dessus le filet et « couvrir » le ballon (mains orientées vers le sol adverse).",
        "Tenir le haut du bloc le plus longtemps possible, sans trou entre les mains."]},
      avance:{intro:"Lire le jeu et bloquer à deux.",points:[
        "Séquence de regard : ballon → passeur → attaquant, pour lire la direction.",
        "Bloc à deux : l'ailier donne la position, le central s'ajuste et ferme l'espace entre les quatre mains.",
        "Choisir de bloquer la diagonale ou la ligne selon le système défensif.",
        "« Swing block » : armer les bras comme à l'attaque pour un déplacement plus explosif."]}
    },
    erreurs:["Sauter trop tôt","Mains molles ou espacées (trou dans le bloc)","Toucher le filet ou passer dessous"]
  },
  {
    nom:"La défense", categorie:"Défense",
    resume:"Récupérer les attaques adverses pour relancer la contre-attaque.",
    niveaux:{
      debutant:{intro:"Position basse et stable, prêt à avancer vers le ballon.",points:[
        "Pieds un peu plus larges que les épaules, poids sur l'avant des pieds, épaules en avant.",
        "Bras fléchis devant soi, paumes vers le haut, face à l'attaquant.",
        "Juste avant la frappe : petit sursaut (split-step) et on « plante » le poids, genoux dans l'axe des pieds.",
        "Plateau formé au contact, épaules au-dessus des genoux, contact sous le ballon pour le renvoyer haut."]},
      intermediaire:{intro:"Lire l'attaquant et se placer sans reculer.",points:[
        "Regarder l'attaquant et voir la direction de la frappe avant de bouger.",
        "Amener le corps et les bras vers le ballon ; les pas courts se font en fléchissant une jambe et en tendant l'autre, poids sur l'avant.",
        "Ne pas stopper le geste au contact : garder les bras ensemble une fraction de seconde et accompagner, sinon la défense reste basse.",
        "Se replacer derrière le bloc selon la zone laissée libre (diagonale / ligne)."]},
      avance:{intro:"Défense athlétique et récupérations extrêmes.",points:[
        "Lire l'attaquant (épaule, course, bras) pour anticiper diagonale, ligne ou amorti.",
        "Gestes d'urgence maîtrisés : plongeon, roulade, manchette d'une main, « collapse dig ».",
        "Couvrir son propre attaquant sur les ballons contrés qui retombent.",
        "Enchaîner défense → relance précise vers le passeur → repli."]}
    },
    erreurs:["Reculer sur les talons","Stopper les bras au contact (le ballon retombe)","Bouger les pieds avant d'avoir lu la frappe"]
  },
  {
    nom:"La feinte et l'amorti", categorie:"Attaque · Avancée",
    resume:"Jouer fin plutôt que fort : poser la balle dans un espace libre quand l'attaque puissante est couverte.",
    niveaux:{
      debutant:{intro:"Poser la balle du bout des doigts par-dessus le bloc.",points:[
        "Même course d'élan et même armé que pour un smash, pour ne pas prévenir la défense.",
        "Au lieu de frapper, pousser la balle du bout des doigts (feinte / « tip ») par-dessus ou à côté du bloc.",
        "Viser un espace vide, souvent juste derrière le bloc ou dans un trou de la défense.",
        "Poignet ferme : on place la balle, on ne l'accompagne pas longuement."]},
      intermediaire:{intro:"Varier feinte courte et amorti long.",points:[
        "Feinte courte juste derrière le bloc ; amorti (balle poussée du plat de la main) vers le fond du terrain.",
        "Déguiser jusqu'au dernier instant : décider feinte ou frappe selon la réaction du bloc.",
        "Utiliser la feinte quand la passe est trop courte, trop près du filet ou mal posée."]},
      avance:{intro:"Lire la défense et choisir l'arme en vol.",points:[
        "Repérer les trous laissés par le bloc et les défenseurs reculés pour choisir la zone.",
        "Alterner frappe, feinte, roulette (balle liftée du bout des doigts) pour rester imprévisible.",
        "Amortir d'une main en déséquilibre sur une passe difficile."]}
    },
    erreurs:["Préparer la feinte autrement que le smash (la défense la voit venir)","Feinter toujours au même endroit","Accompagner trop longtemps → balle tenue / portée"]
  },
  {
    nom:"L'attaque arrière (la pipe)", categorie:"Attaque · Avancée",
    resume:"Attaquer depuis la ligne arrière en s'appelant derrière la ligne des 3 mètres — indispensable pour varier le jeu à bon niveau.",
    niveaux:{
      debutant:{intro:"Comprendre l'appel derrière la ligne des 3 m.",points:[
        "L'attaquant arrière doit décoller derrière la ligne d'attaque ; il peut retomber devant, mais pas prendre son appel devant.",
        "Course d'élan plus longue, départ bien en retrait vers le fond du terrain.",
        "Le ballon est frappé plus loin du filet : trajectoire plus tendue et plus longue.",
        "La « pipe » se joue au centre (zone 6) ; l'attaque arrière se joue aussi en zone 1 ou en zone 5."]},
      intermediaire:{intro:"Synchroniser la pipe avec le jeu rapide du central.",points:[
        "La pipe part en même temps que la fixation du central, pour partager l'attention du bloc.",
        "Timing précis avec le passeur : l'attaque arrière est un tempo rapide.",
        "Frapper long et fort : la distance au filet laisse de la marge au-dessus du bloc."]},
      avance:{intro:"Intégrer l'attaque arrière dans les combinaisons.",points:[
        "Enchaîner sa propre réception puis son élan arrière (le réceptionneur-attaquant qui joue la pipe).",
        "Utiliser la pipe pour désaxer un bloc concentré sur les ailes.",
        "Varier zone 1 / zone 6 / zone 5 selon le système adverse."]}
    },
    erreurs:["Mordre la ligne des 3 m à l'appel (faute)","Élan trop court, frappe trop molle","Mauvais timing avec le passeur sur un tempo rapide"]
  },
  {
    nom:"Le service sauté", categorie:"Service · Avancée",
    resume:"Le service le plus agressif : un véritable élan d'attaque pour servir fort et haut.",
    niveaux:{
      debutant:{intro:"Découvrir l'appel et le lancer du service sauté.",points:[
        "Partir à 2-3 m derrière la ligne de fond pour avoir de l'espace d'élan.",
        "Lancer le ballon devant soi, dans le terrain, assez haut pour sauter dessous.",
        "Course d'élan comme à l'attaque (droite-gauche pour un droitier), saut à deux pieds.",
        "Frapper le ballon au point le plus haut, bras tendu, devant l'épaule."]},
      intermediaire:{intro:"Choisir flottant sauté ou lifté sauté.",points:[
        "Flottant sauté : lancer bas et devant, bras maintenu en arc (peu de balancement), frappe sèche sans effet → le ballon flotte.",
        "Lifté sauté (topspin) : lancer haut dans le terrain, armé bras bas puis fouetté, poignet cassé → trajectoire descendante.",
        "Transférer l'énergie de la course vers la cible ; on a le droit de retomber dans le terrain, l'appel étant derrière la ligne."]},
      avance:{intro:"Puissance, précision et gestion du risque.",points:[
        "Viser des zones précises : couloirs, receveur faible, conflit entre deux joueurs, zone courte derrière le filet.",
        "Varier flottant / lifté et la longueur pour casser le rythme de la réception.",
        "Adapter l'agressivité au score (prise de risque calculée)."]}
    },
    erreurs:["Lancer irrégulier (le point faible n°1 du service sauté)","Mordre la ligne de fond à l'appel","Décélérer le bras à l'impact","Servir toujours au même endroit, au même rythme"]
  },
  {
    nom:"La passe en suspension et arrière", categorie:"Passe · Avancée",
    resume:"Les passes du passeur confirmé : sauter pour accélérer le jeu, et passer vers l'arrière sans trahir la direction.",
    niveaux:{
      debutant:{intro:"Maîtriser la passe arrière de base.",points:[
        "Se placer sous le ballon, ballon au-dessus du front comme pour une passe avant.",
        "Pour la passe arrière : avancer légèrement sous le ballon, pousser le bassin vers l'avant et tendre les bras vers l'arrière-haut.",
        "Le regard reste devant : ce sont les bras et le bassin qui donnent la direction arrière.",
        "Garder la même posture de départ qu'une passe avant pour ne pas prévenir le bloc."]},
      intermediaire:{intro:"Ajouter la passe en suspension (jump set).",points:[
        "Sauter et passer au sommet du saut : on gagne du temps et on rapproche la passe du filet.",
        "La passe sautée permet aussi de menacer le 2e ballon (feinte, attaque du passeur).",
        "Rester gainé et équilibré en l'air, contact bref et symétrique."]},
      avance:{intro:"Déguiser et accélérer la distribution.",points:[
        "Même gestuelle pour passe avant, arrière et sautée → le bloc ne peut pas lire la direction.",
        "Passer rapide et tendu en suspension pour prendre de vitesse le contre adverse.",
        "Passe de dos en suspension (jump back set) sur les combinaisons rapides."]}
    },
    erreurs:["Épaules ou menton qui trahissent la passe arrière","Cambrer le dos au lieu d'avancer le bassin","Passe sautée en déséquilibre → balle imprécise"]
  },
  {
    nom:"Le plongeon et la roulade", categorie:"Défense · Avancée",
    resume:"Les gestes d'urgence pour récupérer une balle inatteignable debout, puis se relever vite.",
    niveaux:{
      debutant:{intro:"Se laisser descendre au sol sans se faire mal.",points:[
        "D'abord abaisser le centre de gravité : fente profonde pour les balles basses avant d'envisager le sol.",
        "Roulade latérale ou arrière : jouer le ballon puis rouler sur l'épaule / le dos et se remettre debout.",
        "Protéger la tête et les poignets ; on amortit avec le corps, pas avec les mains tendues."]},
      intermediaire:{intro:"Plonger vers l'avant pour les balles courtes.",points:[
        "Plongeon avant : se détendre vers la balle, la jouer d'une main (ou manchette d'une main), puis glisser sur la poitrine et les cuisses.",
        "La poussée vient des jambes, les mains accompagnent la glissade, le menton rentré.",
        "Jouer le ballon AVANT de toucher le sol, jamais après."]},
      avance:{intro:"Récupérations extrêmes et retour immédiat au jeu.",points:[
        "« Pancake » : plaquer la main à plat au sol sous le ballon pour qu'il rebondisse dessus.",
        "Choisir le geste selon la trajectoire : plongeon avant, roulade latérale, manchette d'une main.",
        "Se relever instantanément et se replacer pour le ballon suivant."]}
    },
    erreurs:["Tendre les bras pour amortir la chute (risque de blessure)","Jouer le ballon après avoir touché le sol","Plonger alors qu'une fente suffisait"]
  }
];

/* ---- RÈGLES (source : Olympics.com / FIVB) ---- */
const REGLES = [
  {nom:"Le terrain et le filet", categorie:"Terrain", resume:"Les dimensions du terrain, le filet, les antennes et le ballon, d'après les règles officielles.",
   blocks:[
     {label:"Le terrain",points:[
       "Rectangle de 18 m de long sur 9 m de large, séparé en deux camps de 9 × 9 m par la ligne centrale, sous le filet.",
       "Toutes les lignes font 5 cm de large et appartiennent au terrain.",
       "Le terrain est entouré d'une zone libre d'au moins 3 m, où le jeu peut se poursuivre.",
       "La ligne d'attaque est tracée à 3 m du filet de chaque côté : elle délimite la zone avant.",
       "La zone de service, large de 9 m, se situe derrière chaque ligne de fond."]},
     {label:"Le filet",points:[
       "Tendu verticalement au-dessus de la ligne centrale, il mesure 1 m de haut et environ 9,50 à 10 m de long, avec des mailles carrées de 10 cm.",
       "Hauteur (bord supérieur) : 2,43 m chez les hommes, 2,24 m chez les femmes.",
       "Elle est abaissée pour les catégories jeunes et seniors selon le règlement.",
       "Une bande blanche borde le haut du filet."]},
     {label:"Les antennes",points:[
       "Deux tiges flexibles de 1,80 m sont fixées au bord extérieur de chaque côté du filet.",
       "Elles dépassent de 80 cm au-dessus du filet et marquent les limites latérales de l'espace de passage.",
       "Le ballon doit franchir le filet entre les deux antennes."]},
     {label:"Le ballon",points:[
       "Sphérique, en cuir ou synthétique, de 65 à 67 cm de circonférence.",
       "Poids : 260 à 280 g.",
       "Pression intérieure : 0,30 à 0,325 kg/cm²."]}]},
  {nom:"L'équipe et la rotation", categorie:"Équipe", resume:"La composition de l'équipe, le placement au service, la rotation et les remplacements, d'après les règles officielles.",
   blocks:[
     {label:"La composition",points:[
       "Une équipe compte jusqu'à 12 joueurs (plus l'encadrement : entraîneur, adjoint, etc.).",
       "6 joueurs sont sur le terrain, les autres sont remplaçants.",
       "Un joueur est désigné capitaine de l'équipe.",
       "Un (ou deux) joueur peut être désigné libéro, reconnaissable à son maillot différent."]},
     {label:"Le placement au service",points:[
       "Au moment du service, les 6 joueurs occupent 3 postes avant (positions 4, 3, 2) et 3 postes arrière (5, 6, 1).",
       "Chaque joueur arrière doit être placé plus loin du filet que le joueur avant de sa colonne.",
       "L'ordre gauche-droite doit aussi être respecté entre joueurs d'une même ligne.",
       "Ne pas respecter ces positions est une faute de position (chevauchement / overlap)."]},
     {label:"La rotation",points:[
       "Quand une équipe reconquiert le service, ses joueurs tournent d'une position dans le sens des aiguilles d'une montre.",
       "Le joueur qui était en position 2 passe en position 1 et va servir ; chacun progresse ainsi sur les 6 positions.",
       "L'ordre de rotation, fixé au début du set, doit être respecté pendant tout le set."]},
     {label:"Le déplacement",points:[
       "L'ordre de placement doit être tenu uniquement à l'instant où le serveur frappe le ballon.",
       "Dès le service frappé, les joueurs peuvent se déplacer librement et occuper n'importe quelle zone de leur camp.",
       "Les arrières ne peuvent toutefois pas attaquer ou contrer comme un avant au-dessus du filet."]},
     {label:"Les remplacements",points:[
       "Les remplacements sont limités par set (6 en règlement FIVB ; variable selon la compétition).",
       "Un titulaire peut sortir puis revenir une fois dans le set, à sa position de départ.",
       "Les entrées et sorties du libéro ne comptent pas comme des remplacements."]}]},
  {nom:"Le point et les sets", categorie:"Score", resume:"Le système de score au point (rally point), la façon de gagner un set, le tie-break et le match, d'après les règles officielles.",
   blocks:[
     {label:"Marquer un point (rally point)",points:[
       "Chaque échange se termine par un point, quel que soit le côté qui servait (système du « rally point »).",
       "Une équipe marque quand le ballon touche le sol du camp adverse, que l'adversaire envoie le ballon dehors ou commet une faute, ou reçoit une pénalité.",
       "L'équipe qui gagne l'échange marque le point et gagne le service.",
       "Si elle servait déjà, le même joueur sert à nouveau ; si elle recevait, l'équipe tourne et c'est un nouveau serveur."]},
     {label:"Gagner un set",points:[
       "Un set est gagné par la première équipe à atteindre 25 points…",
       "… avec au moins 2 points d'écart.",
       "À 24-24, le jeu se poursuit jusqu'à ce qu'une équipe prenne 2 points d'avance (26-24, 27-25…), sans limite de score.",
       "Les équipes changent de côté à la fin de chaque set."]},
     {label:"Le tie-break (5e set)",points:[
       "Si le match atteint 2 sets partout, on joue un 5e set décisif, le tie-break.",
       "Il se joue en 15 points, toujours avec 2 points d'écart.",
       "Les équipes changent de côté dès qu'une équipe atteint 8 points."]},
     {label:"Gagner le match",points:[
       "Le match se joue au meilleur des 5 sets.",
       "La première équipe à gagner 3 sets remporte le match (score en sets de 3-0, 3-1 ou 3-2).",
       "Chaque set compte autant : perdre 3-2 ou 3-0 revient à perdre le match."]},
     {label:"Formats variables",points:[
       "Selon la compétition, un match peut se jouer au meilleur des 3 sets (il faut alors 2 sets gagnants).",
       "Les formats réduits (jeunes, loisir, beach) adaptent le nombre de points par set et le nombre de sets.",
       "Le principe du point à chaque échange et des 2 points d'écart reste le même."]}]},
  {nom:"Les touches de balle", categorie:"Jeu", resume:"Combien de touches, comment jouer le ballon et les contacts particuliers, d'après les règles officielles.",
   blocks:[
     {label:"Le nombre de touches",points:[
       "Chaque équipe dispose de 3 touches au maximum pour renvoyer le ballon dans le camp adverse.",
       "Le contre ne compte pas comme une touche : après un contre, l'équipe a encore ses 3 touches.",
       "Un même joueur ne peut pas toucher le ballon deux fois de suite…",
       "… sauf au contre, et sauf sur le tout premier contact de l'équipe (le ballon peut alors toucher plusieurs parties du corps en une seule action)."]},
     {label:"Comment toucher le ballon",points:[
       "Le ballon peut toucher n'importe quelle partie du corps, y compris le pied.",
       "Il doit être frappé nettement : jamais tenu, accompagné, retenu ni lancé (porté).",
       "Le ballon peut toucher plusieurs parties du corps, à condition que ce soit en un seul geste."]},
     {label:"Contacts particuliers",points:[
       "Deux coéquipiers qui touchent le ballon en même temps : cela compte pour deux touches (et deux joueurs différents).",
       "Deux adversaires qui se disputent le ballon au-dessus du filet : le jeu continue et l'équipe qui le récupère a droit à 3 nouvelles touches.",
       "Un joueur peut aller jouer le ballon dans la zone libre (hors du terrain) tant qu'il ne l'a pas renvoyé.",
       "Le ballon doit repasser au-dessus du filet, entre les deux antennes."]}]},
  {nom:"Fautes courantes", categorie:"Fautes", resume:"Les principales fautes qui donnent le point et le service à l'adversaire, classées par type, d'après les règles officielles.",
   blocks:[
     {label:"Manipulation du ballon",points:[
       "Tenu / porté : le ballon est accompagné ou retenu au lieu d'être frappé franchement.",
       "Double touche : un joueur touche le ballon deux fois de suite (toléré sur le tout premier contact de l'équipe et au contre).",
       "4 touches : l'équipe touche le ballon plus de trois fois avant de le renvoyer (le contre ne compte pas comme une touche)."]},
     {label:"Au filet et à la ligne centrale",points:[
       "Toucher le filet (entre les antennes) pendant l'action de jouer le ballon.",
       "Franchir la ligne centrale et pénétrer dans le camp adverse en gênant l'adversaire.",
       "Toucher le ballon ou gêner l'adversaire au-dessus du filet, dans son espace de jeu."]},
     {label:"Ballon et limites",points:[
       "Ballon qui tombe hors des lignes (dehors) ou qui passe en dehors des antennes.",
       "Ballon qui ne franchit pas le filet, ou touché après être sorti.",
       "Toute faute donne le point ET le service à l'adversaire (système du rally point)."]},
     {label:"Attaque et contre (arrière, libéro)",points:[
       "Un joueur arrière ne peut pas conclure une attaque au-dessus du filet s'il a pris son appel devant la ligne des 3 m.",
       "Les joueurs arrière et le libéro ne peuvent pas contrer ni participer au contre.",
       "On ne peut pas attaquer ou contrer le service adverse quand le ballon est dans la zone avant et entièrement au-dessus du filet."]},
     {label:"Position et service",points:[
       "Faute de position (chevauchement) : mauvais placement au moment où le serveur frappe.",
       "Faute de rotation : ce n'est pas le bon joueur qui sert.",
       "Faute de pied : le serveur touche la ligne de fond ou le terrain avant d'avoir frappé ; ou les 8 secondes sont dépassées."]}]},
  {nom:"Le service", categorie:"Service", resume:"La mise en jeu : exécution, qui sert, le ballon au service et l'écran, d'après les règles officielles.",
   blocks:[
     {label:"L'exécution",points:[
       "Le serveur frappe le ballon avec une main ou un bras, derrière la ligne de fond, dans la zone de service (9 m de large).",
       "Il a 8 secondes pour servir après le coup de sifflet de l'arbitre (règle FIVB).",
       "Le ballon doit être lancé ou lâché avant d'être frappé.",
       "Le serveur ne doit pas toucher la ligne de fond ni le terrain avant la frappe (faute de pied)."]},
     {label:"Qui sert et dans quel ordre",points:[
       "La rotation désigne le serveur : le joueur qui arrive en position 1 (arrière droite).",
       "Servir dans le désordre est une faute de rotation.",
       "Après le service, le serveur rejoint sa position et le jeu se déroule normalement."]},
     {label:"Le ballon au service",points:[
       "Le ballon peut toucher le filet au service et continuer de l'autre côté : il reste en jeu.",
       "Il doit franchir le filet entre les deux antennes.",
       "S'il tombe dehors, touche un coéquipier ou ne franchit pas le filet : faute, point à l'adversaire."]},
     {label:"L'écran interdit",points:[
       "L'équipe au service ne doit pas faire écran : cacher le serveur ou la trajectoire du ballon à l'adversaire.",
       "Les joueurs ne doivent pas se regrouper ou lever les bras pour masquer la vue du receveur.",
       "Service flottant, lifté ou sauté : voir la section Techniques pour le geste."]}]},
  {nom:"Le libéro", categorie:"Libéro", resume:"Le joueur défensif aux règles particulières : statut, entrées et sorties, et ce qu'il n'a pas le droit de faire, d'après les règles officielles.",
   blocks:[
     {label:"Son statut",points:[
       "Joueur arrière spécialisé en réception et défense, il porte un maillot de couleur différente pour être identifié.",
       "Il est désigné sur la feuille de match ; le règlement moderne autorise souvent deux libéros par équipe.",
       "Il ne peut pas être capitaine de l'équipe ni capitaine en jeu."]},
     {label:"Entrées et sorties",points:[
       "Il remplace librement un joueur de la ligne arrière (souvent le central), sans que cela compte dans les remplacements.",
       "Ses entrées et sorties se font ballon mort, par la zone située entre la ligne d'attaque et la ligne de fond.",
       "Il doit rester une rotation hors du jeu avant de pouvoir revenir (il ne peut pas échanger immédiatement avec un autre joueur)."]},
     {label:"Ce qu'il ne peut pas faire",points:[
       "Il ne peut ni contrer, ni tenter de contrer.",
       "Il ne peut pas attaquer un ballon entièrement au-dessus du bord du filet, d'où qu'il le joue.",
       "Il ne sert pas, sauf tolérance de certains règlements (sur une seule rotation)."]},
     {label:"La règle de la passe haute",points:[
       "S'il fait une passe à deux mains hautes depuis la zone avant (sur ou devant la ligne des 3 m), un partenaire ne peut pas attaquer ce ballon au-dessus du filet.",
       "Derrière la ligne des 3 m, il peut passer à deux mains normalement.",
       "C'est pourquoi le libéro se dégage souvent derrière la ligne des 3 m pour relancer."]}]}
];

/* ---- POSTES (source : Volleyball World / Nike) ---- */
const POSTES = [
  {nom:"Le passeur", categorie:"Meneur de jeu", resume:"Le chef d'orchestre de l'équipe : il joue presque toujours la 2e touche et pose la balle d'attaque. C'est lui qui décide à qui, où et à quel tempo l'équipe attaque.",
   blocks:[
     {label:"Rôle principal",points:[
       "Prend la 2e des 3 touches : il transforme la réception ou la défense en une passe jouable pour un attaquant.",
       "C'est le meneur de jeu : à chaque ballon il choisit l'attaquant, la zone et le tempo (passe haute, mi-temps, rapide).",
       "Il « cache son jeu » le plus longtemps possible pour fixer le bloc adverse et créer des duels favorables.",
       "Véritable prolongement de l'entraîneur sur le terrain : il porte le plan de jeu et donne le rythme à l'équipe."]},
     {label:"Positionnement et déplacements",points:[
       "Sa cible de passe se situe entre la zone 3 et la zone 2 (un peu à droite du centre), à environ 30-50 cm du filet.",
       "Quand il démarre en zone avant, il n'a qu'un court trajet jusqu'à sa cible.",
       "Quand il démarre en zone arrière (pénétration, typique du 5-1 et du 6-2), il s'élance dès le service pour rejoindre le filet avant la réception — sans franchir son coéquipier ni gêner la réception.",
       "Il se place idéalement de façon à avoir le plus d'attaquants possible dans son champ de vision, et face au terrain."]},
     {label:"Qualités techniques",points:[
       "Mains précises et régulières : même point de contact, même hauteur, quelle que soit la qualité de la réception.",
       "Jeu de jambes rapide pour arriver arrêté et équilibré sous le ballon avant de passer.",
       "Capacité à passer en course, en déséquilibre ou de dos (passe arrière) sans trahir sa direction.",
       "Maîtrise de la passe en suspension (saut) pour accélérer le jeu et menacer d'un 2e ballon."]},
     {label:"Qualités tactiques et mentales",points:[
       "Vision et lecture : il observe le bloc et la défense adverses pour choisir l'attaquant le moins couvert.",
       "Prise de décision très rapide et sang-froid dans les moments chauds.",
       "Leadership et communication : il organise, encourage et recadre ses coéquipiers.",
       "Mémoire du match : il suit quel attaquant est « chaud », qui a été peu servi, et où est la faille adverse."]},
     {label:"Responsabilités hors-passe",points:[
       "Quand ce n'est pas lui qui touche le 2e ballon, il devient défenseur (souvent zone 1) et contreur sur l'aile droite.",
       "Il assure la 2e main de secours et les relances défensives propres.",
       "Au service, il doit aussi être un marqueur fiable.",
       "Il peut attaquer ou feinter le 2e ballon (poussette, placement) pour surprendre une défense qui l'ignore."]},
     {label:"Pour qui",points:[
       "Souvent un joueur à l'intelligence de jeu marquée, calme et régulier, plus qu'un simple physique.",
       "Rôle idéal pour un meneur naturel qui aime diriger et lire le jeu.",
       "Un bon passeur n'a pas besoin d'être le plus grand, mais une bonne taille et une détente aident au contre et à la passe sautée."]}]},
  {nom:"L'attaquant réceptionneur", categorie:"Aile gauche", resume:"Le joueur le plus complet de l'équipe : il attaque sur l'aile gauche, encaisse la majorité de la réception et reste en jeu sur les 6 rotations. Souvent appelé « ailier » ou, en anglais, outside hitter.",
   blocks:[
     {label:"Rôle principal",points:[
       "Attaque et contre sur l'aile gauche (zone 4), la zone vers laquelle le passeur distribue le plus.",
       "C'est l'un des deux ou trois principaux réceptionneurs : il prend une grande part de la réception du service.",
       "Il reste sur le terrain lors des 6 rotations (contrairement au central, souvent remplacé par le libéro) : c'est un poste « 6 rotations ».",
       "Dans un 5-1, les deux ailiers sont les attaquants les plus sollicités, car il y a toujours au moins un ailier au filet."]},
     {label:"Attaque",points:[
       "Attaque principalement en zone 4 sur passe haute au poteau, mais aussi en tempo plus rapide quand la réception est bonne.",
       "Doit savoir attaquer depuis l'arrière (zone 6, la « pipe », ou zone 5) pour ajouter une option quand il part en ligne arrière.",
       "Attaque souvent sur des réceptions imparfaites : capacité à marquer sur des passes pas idéales, loin du filet.",
       "Varie frappe puissante, feinte et usage du bloc (« touche-dehors ») car il affronte souvent un bloc bien placé."]},
     {label:"Réception et défense",points:[
       "Reçoit en zone arrière gauche (zone 5) le plus souvent, parfois zone 6, en se répartissant les couloirs avec le libéro et l'autre ailier.",
       "Doit enchaîner réception puis course d'élan pour attaquer : un double effort physique et technique.",
       "En défense, couvre sa zone arrière et participe à la couverture de ses propres attaquants.",
       "Quand il est en première ligne et n'attaque pas, il contre l'ailier adverse (zone 4 ou 2)."]},
     {label:"Qualités",points:[
       "Polyvalence avant tout : attaque, réception et défense à bon niveau, sans point faible marqué.",
       "Souvent parmi les plus grands et les plus athlétiques, avec une bonne détente.",
       "Endurance et régularité : il est de tous les points, offensivement et défensivement.",
       "Mental solide : il attaque souvent dans des situations difficiles et porte une part du scoring."]},
     {label:"Positionnement et rotations",points:[
       "Les deux ailiers sont généralement placés à l'opposé l'un de l'autre dans l'ordre de rotation (à 3 positions d'écart), pour qu'il y en ait toujours un devant.",
       "Il suit les règles de chevauchement (overlap) au moment du service, puis se replace à l'aile gauche.",
       "Au service adverse, il prend sa position de réception plutôt que sa position de rotation stricte."]},
     {label:"Pour qui",points:[
       "Le poste idéal pour un joueur complet qui aime être impliqué partout, pas seulement à l'attaque.",
       "Convient aux joueurs athlétiques capables d'enchaîner les efforts sur toute la durée du match.",
       "Souvent le premier poste « attaquant » appris, car il demande toutes les bases du volley."]}]},
  {nom:"Le pointu (opposé)", categorie:"Aile droite", resume:"Le principal attaquant de l'équipe, placé à l'opposé du passeur dans la rotation. Il attaque à droite, de l'avant comme de l'arrière, et porte une grande part du scoring sans être chargé de la réception.",
   blocks:[
     {label:"Rôle principal",points:[
       "Joue sur l'aile droite (zone 2), toujours à l'opposé du passeur dans l'ordre de rotation.",
       "C'est un gros attaquant, souvent le principal marqueur de l'équipe.",
       "Il est généralement dispensé de réception pour se concentrer sur l'attaque.",
       "Comme il est opposé au passeur, il y a toujours un attaquant disponible à droite quand le passeur est devant."]},
     {label:"Attaque",points:[
       "Attaque en zone 2 quand il est en première ligne, et en zone 1 (attaque arrière) quand il passe derrière.",
       "C'est souvent l'attaquant « de secours » : il frappe les balles hautes et difficiles quand la réception est mauvaise.",
       "Il doit marquer dans des situations compliquées (balles décentrées, contre bien placé).",
       "Un gaucher est avantagé à ce poste : son bras frappeur est côté extérieur en zone 2."]},
     {label:"Bloc et défense",points:[
       "En première ligne, il contre l'ailier (réceptionneur-attaquant) adverse, souvent leur meilleur attaquant.",
       "Il protège le côté droit du terrain en défense.",
       "Au service, il doit aussi être un marqueur fiable."]},
     {label:"Qualités",points:[
       "Puissance et régularité à l'attaque, dans la durée.",
       "Mental solide : il attaque beaucoup et dans des moments décisifs.",
       "Bon contreur sur l'aile ; une bonne détente et une bonne taille aident."]},
     {label:"Positionnement et rotations",points:[
       "Placé à 3 positions du passeur dans la rotation, pour qu'il y ait toujours un attaquant au filet.",
       "Il suit les règles de chevauchement (overlap) au service, puis se replace à droite.",
       "Ne réceptionne pas : il se dégage pour préparer son attaque."]},
     {label:"Pour qui",points:[
       "Le poste idéal pour un attaquant puissant qui aime scorer et porter l'équipe offensivement.",
       "Convient à un joueur moins polyvalent en réception, mais fort à l'attaque et au contre.",
       "Souvent l'un des joueurs les plus athlétiques de l'équipe."]}]},
  {nom:"Le central (contreur)", categorie:"Centre", resume:"Le spécialiste du filet : il attaque vite au centre et c'est le pilier du contre. Souvent remplacé par le libéro dès qu'il passe en zone arrière.",
   blocks:[
     {label:"Rôle principal",points:[
       "Agit au centre du filet (zone 3), juste devant le passeur.",
       "C'est généralement le meilleur contreur de l'équipe et une menace permanente en attaque rapide.",
       "En zone arrière, il est souvent remplacé par le libéro : il joue donc surtout au filet.",
       "Les deux centraux sont à l'opposé l'un de l'autre dans la rotation, pour qu'il y en ait toujours un devant."]},
     {label:"Attaque",points:[
       "Attaque en tempo rapide (balle 1), au centre ou en décalé autour du passeur.",
       "Il part à chaque bonne réception, même sans recevoir la balle, pour « fixer » le contreur adverse.",
       "Cette menace permanente libère les ailiers et la pipe face à un bloc en retard.",
       "Demande une synchronisation très précise avec le passeur."]},
     {label:"Bloc",points:[
       "C'est le pilier du bloc : il contre au centre et vient doubler sur les ailes.",
       "Il lit le passeur adverse pour partir au bon moment et se déplacer vite d'un côté à l'autre.",
       "Jeu de jambes rapide (pas chassés / pas croisés) pour rejoindre les postes et sauter équilibré."]},
     {label:"Qualités",points:[
       "Taille et détente : c'est la présence physique au filet.",
       "Explosivité et vitesse de déplacement latéral pour le contre.",
       "Timing et lecture du jeu, plus que de la polyvalence en réception."]},
     {label:"Positionnement et rotations",points:[
       "Démarre en première ligne au centre ; quand il tourne en zone arrière, le libéro le remplace le plus souvent.",
       "Il respecte le chevauchement au service, puis rejoint le centre du filet.",
       "Il joue donc rarement un rôle complet en défense arrière."]},
     {label:"Pour qui",points:[
       "Le poste idéal pour un joueur grand et explosif, à l'aise au filet.",
       "Convient à qui a un bon timing et aime le duel au contre.",
       "Moins sollicité en réception et en défense arrière que les autres postes."]}]},
  {nom:"Le libéro", categorie:"Défense", resume:"Le spécialiste défensif, reconnaissable à son maillot différent. Il ne joue qu'en zone arrière, où il assure l'essentiel de la réception et de la défense, mais ne peut ni attaquer au-dessus du filet, ni contrer, ni (en principe) servir.",
   blocks:[
     {label:"Rôle principal",points:[
       "Joueur arrière spécialiste de la réception et de la défense.",
       "Il reste en zone arrière et remplace un arrière (le plus souvent le central), sur plusieurs rotations.",
       "Il porte un maillot de couleur différente pour être identifié par les arbitres.",
       "C'est souvent le patron de la ligne arrière : il oriente et rassure ses coéquipiers."]},
     {label:"Réception et défense",points:[
       "Il prend une grande part de la réception du service, avec une manchette très régulière.",
       "En défense, il couvre le fond du terrain et relève les attaques puissantes, souvent en restant très bas.",
       "Il assure les relances propres qui permettent au passeur de reconstruire.",
       "Il communique en permanence (annonce, place les défenseurs)."]},
     {label:"Ce qu'il ne peut pas faire",points:[
       "Il ne peut pas attaquer un ballon entièrement au-dessus du bord du filet.",
       "Il ne peut pas contrer ni tenter de contrer.",
       "Il ne sert pas (sauf règlement particulier qui l'autorise sur une rotation).",
       "S'il fait une passe à deux mains hautes depuis la zone avant (devant la ligne des 3 m), un partenaire ne peut pas attaquer cette balle au-dessus du filet."]},
     {label:"Qualités",points:[
       "Vitesse, agilité et explosivité pour couvrir le terrain.",
       "Excellente lecture du jeu et anticipation de l'attaque adverse.",
       "Plateforme de manchette très stable, toucher régulier.",
       "Mental et constance : il brille sans marquer de points."]},
     {label:"Entrées, sorties et placement",points:[
       "Ses changements ne comptent pas comme des remplacements : il entre et sort librement, ballon mort, par la zone entre la ligne des 3 m et la ligne de fond.",
       "Il remplace un joueur arrière et doit ressortir avant d'échanger avec un autre (une rotation d'intervalle).",
       "Le règlement moderne autorise souvent deux libéros désignés par match.",
       "Il ne peut pas être capitaine de l'équipe ni capitaine en jeu."]},
     {label:"Pour qui",points:[
       "Le poste idéal pour un joueur agile et réactif, souvent de plus petit gabarit.",
       "Convient à un excellent réceptionneur-défenseur qui aime être décisif sans attaquer.",
       "Un meneur vocal, à l'aise pour diriger et encourager la ligne arrière."]}]},
  {nom:"Le défenseur spécialiste", categorie:"Défense", resume:"Un spécialiste de la défense et de la réception en maillot classique, qui entre par remplacement normal pour renforcer la ligne arrière — souvent à la place d'un attaquant qui réceptionne mal quand il arrive derrière.",
   blocks:[
     {label:"Rôle principal",points:[
       "Joueur qui entre pour renforcer la réception et la défense en zone arrière.",
       "Il remplace le plus souvent un attaquant lorsqu'il passe en ligne arrière (et ressort quand il doit revenir au filet).",
       "Il joue le même rôle défensif que le libéro, mais en maillot normal et avec les remplacements classiques.",
       "Souvent utilisé quand l'équipe veut protéger un passeur faible en réception, ou n'a qu'un seul libéro déjà employé ailleurs."]},
     {label:"Réception et défense",points:[
       "Grande part de la réception et des défenses en zone arrière, avec une manchette régulière.",
       "Relances propres vers le passeur pour reconstruire l'attaque.",
       "Communication et placement de la ligne arrière."]},
     {label:"Différence avec le libéro",points:[
       "Maillot classique : il compte dans les remplacements normaux (nombre limité par set), il n'entre pas et ne sort pas librement.",
       "Il peut servir, contrer et attaquer (même s'il reste surtout en zone arrière).",
       "Il peut, lui, rester en jeu en première ligne s'il n'est pas remplacé."]},
     {label:"Qualités",points:[
       "Réactivité et qualité défensive, lecture de l'attaque adverse.",
       "Réception et relances fiables.",
       "Parfois aussi un bon serveur (on l'utilise pour son service)."]},
     {label:"Entrées et remplacements",points:[
       "Il entre par un remplacement classique, en général à la rotation où l'attaquant qu'il remplace passe derrière.",
       "Il ressort quand ce joueur revient en première ligne (double changement).",
       "Comme les remplacements sont limités, on l'utilise sur des rotations ciblées."]},
     {label:"Pour qui",points:[
       "Un joueur solide en réception et en défense, sans être le libéro désigné.",
       "Utile pour protéger un poste faible derrière ou pour apporter un bon service.",
       "Un rôle d'équipe, discret mais précieux dans les moments clés."]}]}
];

/* ---- FORMATIONS (source : Gold Medal Squared / VolleyballXL) ---- */
const FORMATIONS = [
  {nom:"Le 4-2", categorie:"6 joueurs", resume:"Deux passeurs et quatre attaquants ; le passeur distribue depuis la zone avant. Système simple, idéal pour débuter.",
   blocks:[
     {label:"Principe",points:[
       "L'équipe aligne 2 passeurs et 4 attaquants.",
       "Les deux passeurs sont placés à l'opposé l'un de l'autre dans l'ordre de rotation (à 3 positions d'écart) : ainsi il y a toujours un passeur en zone avant.",
       "C'est le passeur de la zone avant qui distribue au filet — il n'y a donc pas de pénétration d'un passeur arrière.",
       "Comme un passeur occupe une place au filet, il ne reste que 2 attaquants en zone avant."]},
     {label:"Où passe le passeur",points:[
       "4-2 classique : le passeur distribue depuis le centre du filet (zone 3), encadré par un attaquant à gauche (zone 4) et un à droite (zone 2).",
       "4-2 « international » : le passeur se décale en zone 2 (avant-droit) et passe surtout vers l'avant (zones 3 et 4), ce qui ouvre un meilleur angle.",
       "Le passeur ne smashe en général pas, mais il peut jouer le 2e ballon (feinte, poussette) pour surprendre."]},
     {label:"Mise en place",points:[
       "Après le service, le passeur avant rejoint sa zone de distribution, les 2 attaquants se répartissent les ailes.",
       "Toutes les 3 rotations, l'autre passeur arrive en zone avant et prend le relais.",
       "Une réception stable suffit : le passeur étant déjà devant, il n'a qu'un court déplacement à faire."]},
     {label:"Avantages",points:[
       "Très simple à enseigner : le passeur est toujours au filet, peu de déplacements compliqués.",
       "Idéal pour apprendre les rôles, les rotations et la construction à 3 touches.",
       "Pas de pénétration à coordonner (contrairement au 5-1 et au 6-2)."]},
     {label:"Inconvénients",points:[
       "Seulement 2 attaquants au filet : l'attaque est moins variée et plus prévisible.",
       "La qualité de passe peut varier, deux passeurs se partageant le rôle.",
       "Les passeurs sont souvent des contreurs plus faibles, ce qui peut ouvrir des brèches au filet.",
       "Peu efficace à haut niveau : on évolue ensuite vers le 6-2 puis le 5-1."]},
     {label:"Pour qui",points:[
       "Équipes de jeunes et débutants qui apprennent postes, rotations et placement.",
       "Groupes sans pointu spécialisé fort.",
       "Première étape avant de passer à des systèmes plus avancés."]}]},
  {nom:"Le 5-1", categorie:"6 joueurs", resume:"Un seul passeur sur les 6 rotations, cinq attaquants. Le système le plus répandu à bon niveau.",
   blocks:[
     {label:"Principe",points:[
       "L'équipe aligne 1 seul passeur, qui joue les 6 rotations, et 5 attaquants.",
       "Le passeur est toujours sur le terrain : aucun changement de passeur n'est nécessaire.",
       "Il distribue sur tous les ballons, qu'il soit en zone avant ou arrière, en montant au filet (souvent vers l'avant-droit, zone 2)."]},
     {label:"Les deux phases",points:[
       "Passeur en zone arrière (3 rotations) : il pénètre de l'arrière vers le filet pour passer → 3 attaquants restent au filet (ailier, central, pointu).",
       "Passeur en zone avant (3 rotations) : il ne reste que 2 attaquants au filet, complétés par les attaques arrière (le pointu en zone 1, la « pipe » en zone 6).",
       "L'équipe adapte donc son attaque selon la position du passeur dans la rotation."]},
     {label:"Le rôle du passeur",points:[
       "Quand il est devant, le passeur contre (surtout l'ailier adverse, en zone 2) et peut jouer le 2e ballon (feinte, poussette) ou attaquer.",
       "Il doit donc être complet : passer, contrer, défendre et servir comme les autres.",
       "La régularité de ses passes structure tout le jeu : c'est le meneur de l'équipe."]},
     {label:"Avantages",points:[
       "Timing passeur-attaquants constant : un seul passeur, des repères stables.",
       "Rôles clairs et pas de changement de passeur → continuité, moins d'interruptions.",
       "Attaque arrière (pipe) et jeu rapide au centre (slide) naturels.",
       "C'est le système le plus utilisé à haut niveau."]},
     {label:"Inconvénients",points:[
       "Seulement 2 attaquants au filet pendant 3 rotations (quand le passeur est devant).",
       "Pas de passeur de secours : l'équipe dépend fortement d'un seul meneur.",
       "Exige un passeur dominant, complet et endurant, car il joue partout."]},
     {label:"Pour qui",points:[
       "Équipes disposant d'un passeur confirmé et régulier.",
       "Groupes qui veulent développer l'attaque arrière et le jeu rapide.",
       "Le choix par défaut dès que le niveau progresse (après le 4-2 ou le 6-2)."]}]},
  {nom:"Le 6-2", categorie:"6 joueurs", resume:"Deux passeurs qui distribuent depuis l'arrière : toujours trois attaquants au filet.",
   blocks:[
     {label:"Principe",points:[
       "Deux joueurs tiennent le rôle de passeur, mais c'est toujours celui qui est en zone arrière qui distribue (pénétration de l'arrière vers le filet).",
       "L'autre passeur, lui, est alors en zone avant et joue comme attaquant (pointu).",
       "Comme le passeur vient toujours de l'arrière, il y a toujours 3 attaquants au filet.",
       "Le nom « 6-2 » : 6 joueurs qui attaquent, dont 2 savent aussi passer."]},
     {label:"La bascule des passeurs",points:[
       "Quand le passeur en jeu arrive en zone avant, un remplacement fait entrer l'autre passeur (resté en arrière) pour qu'il distribue à son tour.",
       "On alterne ainsi les deux passeurs toutes les 3 rotations.",
       "Cela demande un règlement autorisant de nombreux remplacements (la version la plus courante en utilise deux)."]},
     {label:"Variantes",points:[
       "À 2 remplacements (la plus courante) : 2 passeurs dédiés et 2 pointus dédiés qui entrent et sortent.",
       "À 1 remplacement : un passeur arrière plus un joueur « hybride » qui alterne passe et attaque.",
       "Sans remplacement : deux joueurs hybrides qui changent de rôle selon leur position (rare)."]},
     {label:"Avantages",points:[
       "Toujours 3 attaquants au filet, dans toutes les rotations.",
       "Rôles très spécialisés : passeurs d'un côté, attaquants de l'autre.",
       "Plus de joueurs ont du temps de jeu grâce aux remplacements."]},
     {label:"Inconvénients",points:[
       "Les remplacements répétés peuvent casser le rythme du match.",
       "Les attaquants doivent s'entendre avec deux passeurs différents.",
       "Un gros écart de niveau entre les deux passeurs devient un handicap, et les pointus ne servent souvent pas.",
       "Nécessite un règlement autorisant beaucoup de remplacements (lycée, clubs)."]},
     {label:"Pour qui",points:[
       "Équipes disposant de deux passeurs de niveau comparable.",
       "Groupes qui veulent faire jouer plus de monde.",
       "Équipes sans attaquant rapide fiable au centre, qui privilégient 3 attaquants constants."]}]},
  {nom:"À 4 joueurs", categorie:"Format réduit", resume:"Jeu à effectif réduit (entraînement, initiation, loisir, beach 4×4) : pas de poste figé, chacun doit savoir tout faire. On garde les 3 touches, mais 4 joueurs couvrent beaucoup d'espace.",
   blocks:[
     {label:"Principe",points:[
       "Format réduit sans poste spécialisé fixe : chaque joueur reçoit, passe, attaque et défend.",
       "On conserve le jeu en 3 touches (réception → passe → attaque), mais avec plus d'espace à couvrir par joueur.",
       "Placement de base : 2 joueurs devant (près du filet), 2 derrière (défense / réception) ; parfois en losange.",
       "Souvent joué sur un terrain et/ou un filet adaptés au niveau."]},
     {label:"Qui fait la passe",points:[
       "Passeur désigné : un joueur attitré va chercher la 2e balle dès qu'il peut et distribue aux autres. Simple, mais il se déplace beaucoup.",
       "Passeur à poste fixe (mini 4-2) : c'est toujours le joueur placé à droite au filet qui passe, quelle que soit la rotation ; un attaquant de chaque côté.",
       "Dans les deux cas, le passeur évite de réceptionner pour rester libre de construire."]},
     {label:"Placement et réception",points:[
       "En réception, 3 joueurs reçoivent et le passeur se dégage au filet ; les 4 reçoivent si le niveau est débutant.",
       "Se répartir clairement le terrain : chacun sa zone, surtout au fond (2 défenseurs couvrent toute la largeur).",
       "Au filet, un joueur peut contrer l'attaquant adverse pendant que l'autre couvre la feinte."]},
     {label:"Rotation et service",points:[
       "On tourne au service comme à 6 (sens horaire) : chaque joueur passe par les positions.",
       "Avec un passeur à poste fixe, respecter le chevauchement au moment du service, puis filer à sa place.",
       "En loisir, la rotation peut être simplifiée ou libre selon l'accord."]},
     {label:"Avantages et limites",points:[
       "Avantages : beaucoup de touches par joueur (progression rapide), polyvalence, idéal en entraînement et en initiation.",
       "Limites : grand espace à couvrir, fatigue, peu de spécialisation ; le contre et la couverture sont plus difficiles à organiser."]},
     {label:"Pour qui",points:[
       "Parfait pour l'entraînement à faible effectif, l'initiation, le beach et le loisir.",
       "Communiquer en permanence (tout le monde touche souvent le ballon).",
       "Adapter la taille du terrain et la hauteur du filet au niveau des joueurs."]}]},
  {nom:"À 5 joueurs", categorie:"Format réduit", resume:"Jeu à 5 (entraînement, loisir, ou quand il manque un joueur à 6) : proche du jeu à 6 avec une zone en moins à couvrir, en gardant un vrai passeur pour construire.",
   blocks:[
     {label:"Principe",points:[
       "Format réduit à 5 : on se rapproche du jeu à 6 mais avec un poste en moins à couvrir.",
       "Placement de base : 3 devant / 2 derrière (plutôt offensif) ou 2 devant / 3 derrière (plutôt défensif), selon l'objectif.",
       "On conserve un vrai passeur pour construire une attaque en 3 touches."]},
     {label:"Qui fait la passe",points:[
       "Mini 5-1 : un passeur unique qui pénètre de l'arrière-droit vers le filet quand il est en zone arrière, et distribue aussi depuis l'avant — il passe sur toutes les rotations. Le plus structuré.",
       "Mini 4-2 : le passeur est toujours celui placé au filet (centre / droite), avec un attaquant de chaque côté. Plus simple à mettre en place.",
       "Variante libre : le joueur situé en zone 2-3 passe, les autres attaquent."]},
     {label:"Placement et réception",points:[
       "Réception à 3 (les deux ailiers + un arrière) alignés vers la ligne des 6 m, le passeur se dégageant au filet.",
       "Combler la zone du 6e joueur manquant : on sacrifie soit un poste arrière (jeu 3 devant / 2 derrière), soit un attaquant.",
       "Défense : 2 ou 3 joueurs au fond selon le placement, contre à 1 ou 2 au filet."]},
     {label:"Rotation et service",points:[
       "Rotation au service classique : chaque joueur passe par les positions.",
       "En mini 5-1, le passeur respecte les chevauchements puis file à sa cible : cela demande de bien connaître ses déplacements.",
       "Définir à l'avance qui passe et qui attaque pour éviter les flottements."]},
     {label:"Avantages et limites",points:[
       "Avantages : proche du vrai jeu à 6, garde un passeur dédié et une vraie construction ; bon compromis quand il manque un joueur.",
       "Limites : une zone de plus à couvrir qu'à 6 ; il faut choisir ce qu'on sacrifie (un attaquant ou un défenseur)."]},
     {label:"Pour qui",points:[
       "Idéal à l'entraînement pour travailler la construction à 3 touches avec moins de monde, ou en match amical à 5.",
       "Privilégier 3 devant pour l'attaque, 3 derrière pour la défense, selon l'adversaire.",
       "Garder une communication claire sur les rôles à chaque rotation."]}]}
];

/* ---- ARBITRAGE : gestes officiels du 1er arbitre (source : FIVB / CEV) ---- */
const ARBITRAGE = [
  {cat:"Mise en jeu", nom:"Autorisation de servir", geste:"L'arbitre déplace la main vers le côté de l'équipe qui doit servir, après le coup de sifflet."},
  {cat:"Mise en jeu", nom:"Équipe au service", geste:"Bras tendu vers le côté de l'équipe qui a le service."},
  {cat:"Mise en jeu", nom:"Balle non lancée / lâchée au service", geste:"Bras tendu levé, paume vers le haut — le serveur a reçu un nouveau service."},

  {cat:"Décision de point", nom:"Point accordé", geste:"Lever la main (bras plié) du côté de l'équipe qui marque."},
  {cat:"Décision de point", nom:"Ballon « dedans » (in)", geste:"Bras et doigts tendus pointant vers le sol, vers le terrain."},
  {cat:"Décision de point", nom:"Ballon « dehors » (out)", geste:"Avant-bras levés à la verticale, mains ouvertes, paumes vers soi."},
  {cat:"Décision de point", nom:"Ballon touché", geste:"Frotter la paume d'une main sur les doigts de l'autre main tenue verticale — le ballon a été touché."},
  {cat:"Décision de point", nom:"Fin du set ou du match", geste:"Avant-bras croisés devant la poitrine, mains ouvertes."},

  {cat:"Fautes de jeu", nom:"Balle tenue / accompagnée", geste:"Lever lentement l'avant-bras, paume vers le haut."},
  {cat:"Fautes de jeu", nom:"Double touche", geste:"Lever deux doigts écartés."},
  {cat:"Fautes de jeu", nom:"Quatre touches", geste:"Lever quatre doigts écartés."},
  {cat:"Fautes de jeu", nom:"Filet touché / faute de service au filet", geste:"Toucher le bord supérieur du filet, du côté de l'équipe fautive (main correspondante)."},
  {cat:"Fautes de jeu", nom:"Franchissement au-dessus du filet", geste:"Main tenue au-dessus du filet, paume vers le bas."},
  {cat:"Fautes de jeu", nom:"Pénétration sous le filet / ligne centrale", geste:"Pointer la ligne centrale ou l'endroit précis de la faute."},
  {cat:"Fautes de jeu", nom:"Faute d'attaque", geste:"Passer l'avant-bras vers le bas, main ouverte (attaque interdite : arrière, libéro, sur service…)."},
  {cat:"Fautes de jeu", nom:"Faute de bloc / écran", geste:"Les deux bras levés à la verticale, paumes vers l'avant."},
  {cat:"Fautes de jeu", nom:"Faute de position / rotation", geste:"Mouvement circulaire de l'index pointé."},
  {cat:"Fautes de jeu", nom:"Double faute / on rejoue", geste:"Lever les deux pouces à la verticale — le point est rejoué."},

  {cat:"Interruptions", nom:"Temps mort", geste:"Paume d'une main posée sur les doigts de l'autre (en « T »), puis pointer l'équipe qui demande."},
  {cat:"Interruptions", nom:"Remplacement", geste:"Rotation des avant-bras l'un autour de l'autre."},
  {cat:"Interruptions", nom:"Changement de camp", geste:"Les mains changent de position, l'une devant l'autre, en tournant autour du corps."},
  {cat:"Interruptions", nom:"Demande de vidéo (challenge)", geste:"Les mains dessinent un rectangle dans l'air."},

  {cat:"Sanctions", nom:"Avertissement de retard", geste:"Carton jaune présenté sur le poignet."},
  {cat:"Sanctions", nom:"Pénalité de retard", geste:"Carton rouge présenté sur le poignet — point et service à l'adversaire."},
  {cat:"Sanctions", nom:"Avertissement pour conduite", geste:"Carton jaune présenté (seul)."},
  {cat:"Sanctions", nom:"Pénalité pour conduite", geste:"Carton rouge présenté (seul) — point et service à l'adversaire."},
  {cat:"Sanctions", nom:"Expulsion", geste:"Cartons jaune et rouge présentés ensemble dans la même main."},
  {cat:"Sanctions", nom:"Disqualification", geste:"Cartons jaune et rouge présentés séparément, un dans chaque main."}
];

/* ---- LEXIQUE : vocabulaire du volley-ball ---- */
const LEXIQUE = [
  {t:"Ace", d:"Point marqué directement sur le service, sans que l'adversaire ne touche correctement le ballon."},
  {t:"Aile / Ailier", d:"Attaquant qui joue sur les côtés du filet (zone 4 à gauche, zone 2 à droite) ; voir réceptionneur-attaquant."},
  {t:"Amorti", d:"Balle poussée doucement du plat de la main vers une zone libre, au lieu d'un smash."},
  {t:"Antenne (mire)", d:"Tige verticale fixée au filet au-dessus de chaque ligne de côté ; le ballon doit passer entre les deux antennes."},
  {t:"Attaque arrière", d:"Attaque lancée depuis la zone arrière, avec appel derrière la ligne des 3 m (ex. la « pipe »)."},
  {t:"Bloc (contre)", d:"Action de sauter au filet, mains au-dessus, pour arrêter ou freiner l'attaque adverse."},
  {t:"Break point", d:"Point marqué par l'équipe qui sert : elle garde le service et prend l'avantage (« breaker ») ; c'est la phase K2."},
  {t:"Central", d:"Joueur du centre du filet (zone 3), spécialiste du contre et des attaques rapides."},
  {t:"Couverture", d:"Se replacer autour de son attaquant pour récupérer un ballon renvoyé par le bloc adverse."},
  {t:"Décalé", d:"Combinaison où un attaquant vient frapper juste à côté du central pour tromper le bloc."},
  {t:"Défense", d:"Action de récupérer une attaque adverse pour relancer le jeu."},
  {t:"Feinte (tip)", d:"Balle poussée du bout des doigts par-dessus ou à côté du bloc, dans un espace libre."},
  {t:"Fixation", d:"Attirer le bloc sur un attaquant (souvent le central) pour libérer un autre attaquant."},
  {t:"K1 (complexe 1)", d:"Phase de réception-attaque : réception du service puis attaque pour faire le side-out."},
  {t:"K2 (complexe 2)", d:"Phase de défense–contre-attaque après son propre service (break)."},
  {t:"Libéro", d:"Joueur arrière spécialiste de la défense et de la réception, en maillot différent ; ne peut pas attaquer au-dessus du filet ni contrer."},
  {t:"Manchette", d:"Toucher de balle à deux avant-bras joints, utilisé en réception et en défense."},
  {t:"Mi-temps (tempo 2)", d:"Passe de vitesse intermédiaire, plus rapide qu'une balle haute mais moins qu'une balle rapide."},
  {t:"Passe (2e touche)", d:"Toucher qui construit l'attaque, généralement à deux mains au-dessus du front."},
  {t:"Passeur", d:"Meneur de jeu qui distribue les balles aux attaquants ; joue presque toujours la 2e touche."},
  {t:"Pénétration", d:"Course du passeur arrière vers le filet pour venir distribuer (systèmes 5-1 et 6-2)."},
  {t:"Pipe", d:"Attaque arrière jouée au centre (zone 6), en tempo rapide."},
  {t:"Plongeon", d:"Geste défensif d'urgence : se jeter vers l'avant pour récupérer une balle basse."},
  {t:"Pointu (opposé)", d:"Gros attaquant placé à l'opposé du passeur dans la rotation, joue à droite (zone 2 et zone 1)."},
  {t:"Position (faute de)", d:"Non-respect de l'ordre de placement au moment du service (chevauchement / overlap)."},
  {t:"Réception", d:"Premier contact sur le service adverse, le plus souvent en manchette."},
  {t:"Réceptionneur-attaquant", d:"Ailier gauche complet : attaque en zone 4 et assure une grande part de la réception."},
  {t:"Rotation", d:"Décalage des 6 joueurs d'une position dans le sens horaire à chaque gain de service."},
  {t:"Roulade", d:"Geste défensif : jouer la balle puis rouler au sol pour amortir et se relever vite."},
  {t:"Service", d:"Mise en jeu derrière la ligne de fond ; peut être flottant, lifté, ou sauté."},
  {t:"Service flottant", d:"Service frappé sans effet, dont la trajectoire « flotte » et est difficile à lire."},
  {t:"Service sauté", d:"Service frappé en suspension après une course d'élan, pour plus de puissance."},
  {t:"Set (manche)", d:"Partie d'un match jouée en 25 points (15 au tie-break), avec 2 points d'écart."},
  {t:"Side-out (côté)", d:"Gagner le point quand l'adversaire sert, pour récupérer le service (on dit aussi « faire le côté ») ; c'est la phase K1."},
  {t:"Smash", d:"Attaque frappée fort en suspension après une course d'élan."},
  {t:"Tempo (1/2/3)", d:"Vitesse de la passe : rapide (1), mi-temps (2) ou haute (3)."},
  {t:"Tie-break", d:"5e set décisif, joué en 15 points avec 2 points d'écart."},
  {t:"Touche de balle", d:"Un des 3 contacts autorisés par équipe ; le contre ne compte pas comme une touche."},
  {t:"Zone de conflit", d:"Espace entre deux réceptionneurs/défenseurs, où viser pour créer l'hésitation."},
  {t:"Zone d'attaque (ligne des 3 m)", d:"Zone avant comprise entre le filet et la ligne des 3 mètres ; limite l'attaque des arrières."},
  {t:"Balle de set / de match", d:"Point qui peut conclure le set (le 25e, avec 2 points d'écart ; 15 au tie-break) ou le match."},
  {t:"Bande (du filet)", d:"Le haut du filet (bande blanche) ; une balle qui la touche puis retombe dans le camp adverse reste en jeu."},
  {t:"Carton (jaune / rouge)", d:"Sanctions de l'arbitre : jaune = avertissement, rouge = pénalité (point et service à l'adversaire)."},
  {t:"Contre-attaque", d:"Attaque menée juste après avoir défendu l'attaque adverse (phase K2)."},
  {t:"Croix", d:"Combinaison où les courses de deux attaquants se croisent pour tromper le bloc."},
  {t:"Deuxième main", d:"Passe faite par un joueur autre que le passeur, souvent en secours sur une mauvaise réception."},
  {t:"Faute de filet", d:"Toucher le filet pendant l'action de jouer le ballon ; c'est une faute."},
  {t:"Faute de pied", d:"Au service, mordre ou franchir la ligne de fond avant d'avoir frappé le ballon."},
  {t:"Franchissement", d:"Pénétrer dans le camp adverse (sous le filet) en gênant l'adversaire ; c'est une faute."},
  {t:"Passe arrière", d:"Passe donnée vers l'arrière du passeur, sans se retourner, pour servir un attaquant derrière lui."},
  {t:"Passe en suspension (jump set)", d:"Passe réalisée en sautant, pour accélérer le jeu et menacer le 2e ballon."},
  {t:"Relance", d:"Renvoi d'une balle défendue ou difficile, haut et vers le centre, pour reconstruire le jeu."},
  {t:"Renvoi (free ball)", d:"Balle rendue par l'adversaire sans attaque (balle « facile ») que l'équipe doit exploiter."},
  {t:"Roulette", d:"Frappe liftée du bout des doigts qui fait retomber la balle court, par-dessus le bloc."},
  {t:"Service lifté (topspin)", d:"Service frappé avec effet vers l'avant, à trajectoire descendante."},
  {t:"Sortie (touche-dehors)", d:"Attaque qui utilise les mains du bloc pour sortir la balle hors du terrain adverse : point pour l'attaquant."},
  {t:"Temps mort", d:"Interruption de 30 secondes demandée par une équipe (deux par set) pour souffler ou casser le rythme."},
  {t:"Transition", d:"Passage de la défense à l'attaque : se dégager du filet et prendre son élan pour contre-attaquer."},
  {t:"Zones (1 à 6)", d:"Numérotation des positions : 1 fond droit, 2 avant droit, 3 avant centre, 4 avant gauche, 5 fond gauche, 6 fond centre."}
];

/* ---- TACTIQUE COLLECTIVE (sources : The Art of Coaching, Gold Medal Squared, Volleyball Canada) ---- */
const TACTIQUE = [
  {nom:"Les phases de jeu (K1 / K2)", categorie:"Les bases",
   resume:"Le cadre qui structure toute la tactique : selon qu'on sert ou qu'on reçoit, l'équipe n'est pas dans la même phase et ne cherche pas la même chose.",
   blocks:[
     {label:"Le principe",points:[
       "À chaque point, une équipe est en réception (elle ne sert pas) et l'autre au service.",
       "On distingue deux phases, appelées complexes : K1 (réception-attaque) et K2 (défense-contre-attaque).",
       "Comprendre dans quelle phase on est dicte le placement, les priorités et le discours."]},
     {label:"K1 — le side-out",points:[
       "C'est la phase où l'on reçoit le service adverse : réception → passe → attaque.",
       "Objectif : gagner le point pour récupérer le service (faire le « side-out »).",
       "Tout part de la qualité de réception : bonne réception = toutes les options d'attaque ouvertes.",
       "Une équipe qui gagne bien ses side-out reste « à égalité » au score ; c'est la base de la solidité."]},
     {label:"K2 — le break point",points:[
       "C'est la phase qui suit notre propre service : service → bloc/défense → contre-attaque.",
       "Objectif : marquer alors qu'on a le service, pour « breaker » et prendre l'avantage au score.",
       "Elle enchaîne service agressif, bloc organisé, défense et transition rapide.",
       "Les points de break sont ceux qui font vraiment basculer un set."]},
     {label:"Pourquoi c'est clé",points:[
       "Réception, attaque, bloc, défense et transition ne sont pas des gestes isolés : ils s'enchaînent dans l'une de ces deux phases.",
       "En match, se dire « on est en K1 » ou « en K2 » aide chaque joueur à savoir quoi faire.",
       "La plupart des systèmes (5-1, 6-2…) s'évaluent à leur efficacité en side-out et en break."]}]},

  {nom:"Les dispositifs de réception", categorie:"Réception",
   resume:"Comment répartir le terrain pour recevoir le service : qui réceptionne, où, et où se placent ceux qui ne reçoivent pas.",
   schema:{terrain:"half",elements:[
     {type:"player",team:"A",x:6.6,y:1.6,label:"P"},
     {type:"player",team:"A",x:2.3,y:1.9,label:"4"},
     {type:"player",team:"A",x:4.4,y:1.9,label:"3"},
     {type:"player",team:"A",x:1.8,y:6.3,label:"R"},
     {type:"player",team:"A",x:4.5,y:7.3,label:"R"},
     {type:"player",team:"A",x:7.0,y:6.3,label:"R"},
     {type:"arrow",kind:"pass",x:1.8,y:6.3,x2:6.3,y2:2.0},
     {type:"arrow",kind:"pass",x:4.5,y:7.3,x2:6.3,y2:2.0},
     {type:"arrow",kind:"pass",x:7.0,y:6.3,x2:6.3,y2:2.0}
   ]},
   schemaCap:"Réception à 3 : trois réceptionneurs (R) en arc se partagent le terrain et renvoient vers le passeur (P) ; les attaquants de devant (3, 4) restent prêts à attaquer.",
   blocks:[
     {label:"Principe",points:[
       "Les joueurs capables de bien réceptionner se partagent la surface du terrain en couloirs.",
       "Ceux qui ne réceptionnent pas (passeur, central, parfois le pointu) se placent pour ne pas gêner et être prêts à jouer leur rôle.",
       "La cible est toujours le passeur, idéalement entre la zone 3 et la zone 2, près du filet."]},
     {label:"Réception à 3 (la plus courante)",points:[
       "Trois réceptionneurs (souvent les deux ailiers + le libéro) forment un arc.",
       "Chacun a un couloir ; le ballon au plus proche de la cible, communication constante (« à toi ! »).",
       "Bon compromis entre couverture du terrain et nombre de joueurs libérés pour attaquer."]},
     {label:"Réception à 2",points:[
       "Deux réceptionneurs seulement (souvent un ailier + le libéro) couvrent tout le fond.",
       "Avantage : libère un attaquant de plus et simplifie les responsabilités.",
       "Exige deux très bons réceptionneurs, car chacun couvre une grande surface."]},
     {label:"Où se placent les non-réceptionneurs",points:[
       "Le passeur se poste à sa cible (ou s'élance s'il pénètre de l'arrière), sans masquer un receveur.",
       "Le central se place au filet, prêt à attaquer rapide.",
       "Chacun respecte les règles de chevauchement (overlap) au moment du service, puis file à son poste."]},
     {label:"Conseils",points:[
       "Adapter le dispositif à la rotation : qui est devant, qui est le meilleur receveur.",
       "Protéger un réceptionneur en difficulté en réduisant son couloir.",
       "Travailler les zones de conflit (entre deux receveurs) à l'entraînement."]}]},

  {nom:"Les systèmes défensifs", categorie:"Défense",
   resume:"Comment placer les 6 joueurs pour défendre l'attaque adverse, autour du bloc : qui contre, qui couvre quoi.",
   schema:{terrain:"half",elements:[
     {type:"player",team:"A",x:3.6,y:1.2,label:"B"},
     {type:"player",team:"A",x:5.0,y:1.2,label:"B"},
     {type:"player",team:"A",x:7.7,y:3.7,label:"D"},
     {type:"player",team:"A",x:1.6,y:6.4,label:"D"},
     {type:"player",team:"A",x:7.6,y:6.8,label:"D"},
     {type:"player",team:"A",x:4.5,y:8.4,label:"6"}
   ]},
   schemaCap:"Défense « 6 arrière » : deux contreurs au filet (B), le défenseur central (6) reste au fond, les autres couvrent le périmètre et les amortis (D).",
   blocks:[
     {label:"Principe",points:[
       "La défense s'organise toujours autour du bloc : le bloc ferme une partie du terrain, les défenseurs couvrent le reste.",
       "Chaque joueur a une zone selon la position du bloc et le type d'attaque attendu.",
       "Deux grands systèmes se distinguent par la place du défenseur central (zone 6)."]},
     {label:"La défense « 6 arrière »",points:[
       "Le joueur de zone 6 reste au fond du terrain.",
       "Idéale contre les attaques puissantes qui passent au-dessus du bloc et finissent loin.",
       "Le périmètre est bien couvert ; les amortis courts sont pris par les défenseurs avancés."]},
     {label:"La défense « 6 avant »",points:[
       "Le joueur de zone 6 avance vers la ligne des 3 m pour couvrir les feintes et amortis derrière le bloc.",
       "Idéale contre les équipes qui jouent beaucoup de balles courtes / feintes.",
       "Le fond du terrain est alors couvert par les défenseurs de zone 1 et 5."]},
     {label:"Autour du bloc",points:[
       "Le bloc prend une option (diagonale ou ligne) ; les défenseurs se placent dans « l'ombre » du bloc, pas derrière.",
       "Le défenseur qui n'est pas couvert par le bloc est prioritaire sur la zone laissée ouverte.",
       "Le contreur côté ligne protège la ligne, l'autre ferme la diagonale."]},
     {label:"Qui prend quoi",points:[
       "On ne défend pas ce que le bloc couvre déjà : on se place sur ce qu'il laisse.",
       "Lire l'attaquant (épaule, bras) pour partir au bon moment, sans anticiper trop tôt.",
       "Après la défense, enchaîner immédiatement sur la transition (voir la fiche dédiée)."]}]},

  {nom:"Les combinaisons et tempos d'attaque", categorie:"Attaque",
   resume:"Varier la vitesse des passes et faire bouger les attaquants pour prendre de vitesse le bloc adverse.",
   schema:{terrain:"half",elements:[
     {type:"player",team:"A",x:6.0,y:1.7,label:"P"},
     {type:"player",team:"A",x:4.3,y:1.9,label:"1"},
     {type:"player",team:"A",x:1.6,y:2.1,label:"3"},
     {type:"player",team:"A",x:4.5,y:6.0,label:"pipe"},
     {type:"arrow",kind:"pass",x:6.0,y:1.7,x2:4.6,y2:1.9},
     {type:"arrow",kind:"pass",x:6.0,y:1.7,x2:1.9,y2:2.1},
     {type:"arrow",kind:"pass",x:6.0,y:1.7,x2:4.5,y2:5.6}
   ]},
   schemaCap:"Le passeur (P) répartit selon le tempo : balle rapide au central (1), balle haute à l'ailier (3), attaque arrière au centre (pipe).",
   blocks:[
     {label:"Les tempos (1 / 2 / 3)",points:[
       "Tempo 1 (balle rapide) : la passe est très courte et tendue, l'attaquant est déjà en l'air quand elle part — typiquement le central.",
       "Tempo 2 (mi-temps) : passe intermédiaire, un peu plus haute, pour décaler le bloc.",
       "Tempo 3 (balle haute) : passe haute au poteau, laissant le temps à l'ailier de s'élancer — la base, solide mais lisible."]},
     {label:"Les combinaisons",points:[
       "Faire courir deux attaquants au même endroit (ex. central + ailier) pour que le bloc ne sache pas qui va frapper.",
       "Le décalé : un attaquant vient frapper juste à côté du central.",
       "Le tandem / la croix : les courses se croisent pour tromper les contreurs."]},
     {label:"La fixation du central",points:[
       "Le central part en tempo 1 à chaque bonne réception, même sans recevoir la balle : il « fixe » le contreur central.",
       "Pendant que le bloc central hésite, l'ailier ou la pipe attaquent avec un bloc en retard.",
       "C'est le cœur du jeu rapide : le central est une menace permanente."]},
     {label:"Conseils",points:[
       "Une combinaison ne vaut que si la réception est bonne : sur réception difficile, revenir à la balle haute sûre.",
       "Varier les tempos et les zones pour ne jamais être prévisible.",
       "Commencer simple (tempo 1 central + balle haute ailier) avant d'ajouter des croix."]}]},

  {nom:"La couverture de l'attaquant", categorie:"Défense",
   resume:"Se replacer autour de son propre attaquant pour récupérer les ballons renvoyés par le bloc adverse.",
   schema:{terrain:"half",elements:[
     {type:"player",team:"A",x:1.9,y:1.9,label:"A"},
     {type:"player",team:"A",x:0.9,y:3.4,label:"C"},
     {type:"player",team:"A",x:2.8,y:3.1,label:"C"},
     {type:"player",team:"A",x:4.5,y:3.7,label:"C"},
     {type:"player",team:"A",x:1.9,y:5.0,label:"C"},
     {type:"player",team:"A",x:3.7,y:5.4,label:"C"},
     {type:"arrow",kind:"ball",x:2.2,y:0.6,x2:2.3,y2:3.2}
   ]},
   schemaCap:"L'attaquant (A) frappe en zone 4 ; les autres (C) forment un arc autour de lui pour récupérer un ballon renvoyé par le bloc (flèche).",
   blocks:[
     {label:"Principe",points:[
       "Quand un coéquipier attaque, le bloc adverse peut renvoyer la balle dans notre camp : il faut l'anticiper.",
       "Les joueurs non impliqués dans l'attaque forment un arc de cercle autour de l'attaquant.",
       "Position basse, bras prêts, près de l'attaquant : les ballons contrés retombent souvent court."]},
     {label:"Couvrir en deux lignes",points:[
       "Première ligne proche de l'attaquant pour les ballons qui retombent vite et court.",
       "Seconde ligne plus en retrait pour les ballons qui giclent plus loin.",
       "Se replacer dès que la passe est faite, sans attendre la frappe."]},
     {label:"En faire un réflexe",points:[
       "La couverture se met en place à chaque attaque, par automatisme collectif, y compris en réception-attaque.",
       "Resserrer la couverture sur une attaque rapide, l'élargir sur une balle haute.",
       "Après une récupération de contre, relancer haut et au centre pour reconstruire."]},
     {label:"Erreurs fréquentes",points:[
       "Regarder l'attaque sans se replacer.",
       "Rester debout, jambes tendues.",
       "Se placer trop loin de l'attaquant."]}]},

  {nom:"La transition défense → attaque", categorie:"Attaque",
   resume:"Passer de la posture de défense à une attaque organisée — ce qui sépare « défendre » de « contre-attaquer ».",
   schema:{terrain:"half",elements:[
     {type:"player",team:"A",x:4.5,y:1.9,label:"3"},
     {type:"player",team:"A",x:1.9,y:1.7,label:"4"},
     {type:"player",team:"A",x:7.2,y:1.8,label:"2"},
     {type:"player",team:"A",x:6.3,y:2.1,label:"P"},
     {type:"arrow",kind:"move",x:1.9,y:2.1,x2:1.9,y2:4.4},
     {type:"arrow",kind:"move",x:7.2,y:2.2,x2:7.2,y2:4.4},
     {type:"arrow",kind:"move",x:6.3,y:6.6,x2:6.3,y2:2.4},
     {type:"arrow",kind:"ball",x:4.3,y:7.2,x2:6.1,y2:2.3}
   ]},
   schemaCap:"Après la défense, les attaquants (4, 2) se dégagent du filet pour prendre leur élan ; le passeur (P) rejoint sa cible, la relance (balle) vient du fond.",
   blocks:[
     {label:"Enchaîner défense puis attaque",points:[
       "Après avoir défendu ou bloqué, se dégager du filet / de la zone de défense pour pouvoir prendre un élan.",
       "Les attaquants de la ligne avant reculent derrière la ligne des 3 m pour s'élancer.",
       "Communiquer : qui passe, qui attaque."]},
     {label:"Reconstruire une attaque complète",points:[
       "Le passeur file vers sa cible dès que la défense a touché la balle.",
       "La relance défensive vise haut et au centre pour laisser le temps de s'organiser.",
       "Chaque joueur connaît sa sortie d'attaque (ailes, pointe, pipe)."]},
     {label:"Transition rapide",points:[
       "Enchaîner bloc / défense → repli → élan sans temps mort (le « transition footwork »).",
       "Attaquer vite en contre-attaque pendant que le bloc adverse est désorganisé.",
       "Varier les options selon l'endroit d'où vient la relance."]},
     {label:"Erreurs fréquentes",points:[
       "Rester scotché au filet après le bloc.",
       "Relance trop tendue qui empêche de s'organiser.",
       "Attaquants qui ne reculent pas pour prendre leur élan."]}]}
];

/* ---- CISGO : réception de l'équipe (système P-4-3, dispositif 3+1, 6 rotations) ---- */
/* Repère : demi-terrain, filet en haut (y=0), ligne des 3 m à y=3, ligne des 6 m à y≈6, fond à y=9.
   Équipe A (bleu) = les 4 qui réceptionnent (trio à 6 m + le « +1 » au fond).
   Équipe B (rouge) = les 2 qui ne réceptionnent pas (passeur + 1 joueur au filet). */
function cisgoPlayer(label, x, y, recoit){ return {type:"player", team:recoit?"A":"B", x, y, label}; }

const CISGO = [
  {nom:"Rotation P1", categorie:"Passeur zone 1",
   resume:"Trio Pt · R2 · R1 à 6 m, C2 en « +1 » au fond. P monte de l'arrière-droit, C1 au filet.",
   schema:{terrain:"half",elements:[
     cisgoPlayer("Pt",1.8,5.9,false), cisgoPlayer("R2",4.5,5.9,true), cisgoPlayer("R1",7.2,5.9,false),
     cisgoPlayer("C2",5,7.9,true),
     cisgoPlayer("P",7.7,7.2,true), cisgoPlayer("C1",2.5,1.1,false)
   ]},
   schemaCap:"P1 — trio Pt·R2·R1 sur la ligne des 6 m, C2 en couverture au fond ; P (passeur) part de l'arrière-droit vers le filet, C1 au filet au centre.",
   blocks:[
     {label:"Réception (3+1)",points:["Trio à 6 m : Pt (gauche), R2 (centre), R1 (droite).","« +1 » au fond : C2."]},
     {label:"Non-réceptionneurs",points:["P (passeur) : arrière-droit (zone 1), file au filet distribuer.","C1 : au filet, au centre."]}]},

  {nom:"Rotation P2", categorie:"Passeur zone 2",
   resume:"Trio R1 · R2 · C2 à 6 m, Pt en « +1 » au fond (le pointu descend). C1 et P au filet.",
   schema:{terrain:"half",elements:[
     cisgoPlayer("R1",1.8,5.9,false), cisgoPlayer("R2",4.5,5.9,true), cisgoPlayer("C2",7.2,5.9,true),
     cisgoPlayer("Pt",4,7.9,true),
     cisgoPlayer("C1",1,1.1,false), cisgoPlayer("P",7.1,1.1,false)
   ]},
   schemaCap:"P2 — particularité : c'est Pt (le pointu) qui descend en « +1 » au fond, et C2 entre dans le trio de réception.",
   blocks:[
     {label:"Réception (3+1)",points:["Trio à 6 m : R1 (gauche), R2 (centre), C2 (droite).","« +1 » au fond : Pt.","Particularité : ici le « +1 » est Pt, pas C2."]},
     {label:"Non-réceptionneurs",points:["C1 : au filet, à gauche.","P (passeur) : au filet, à droite."]}]},

  {nom:"Rotation P3", categorie:"Passeur zone 3",
   resume:"Trio R1 · Pt · R2 à 6 m, C2 en « +1 » au fond. P et C1 au filet.",
   schema:{terrain:"half",elements:[
     cisgoPlayer("R1",1.8,5.9,false), cisgoPlayer("Pt",4.5,5.9,true), cisgoPlayer("R2",7.2,5.9,true),
     cisgoPlayer("C2",4,7.9,true),
     cisgoPlayer("P",6.5,1.1,false), cisgoPlayer("C1",8.8,3,false)
   ]},
   schemaCap:"P3 — trio R1·Pt·R2 à 6 m, C2 en « +1 » au fond ; P au filet au centre, C1 au filet à droite.",
   blocks:[
     {label:"Réception (3+1)",points:["Trio à 6 m : R1 (gauche), Pt (centre), R2 (droite).","« +1 » au fond : C2."]},
     {label:"Non-réceptionneurs",points:["P (passeur) : au filet, au centre.","C1 : au filet, à droite."]}]},

  {nom:"Rotation P4", categorie:"Passeur zone 4",
   resume:"Trio R1 · R2 · Pt à 6 m, C2 en « +1 » au fond. P et C1 au filet.",
   schema:{terrain:"half",elements:[
     cisgoPlayer("R1",1.8,5.9,false), cisgoPlayer("R2",4.5,5.9,true), cisgoPlayer("Pt",7.2,5.9,true),
     cisgoPlayer("C2",5,7.9,true),
     cisgoPlayer("P",0.7,0.7,false), cisgoPlayer("C1",1.5,1.5,false)
   ]},
   schemaCap:"P4 — trio R1·R2·Pt à 6 m, C2 en « +1 » au fond ; P au filet à gauche, C1 au filet au centre.",
   blocks:[
     {label:"Réception (3+1)",points:["Trio à 6 m : R1 (gauche), R2 (centre), Pt (droite).","« +1 » au fond : C2."]},
     {label:"Non-réceptionneurs",points:["P (passeur) : au filet, à gauche.","C1 : au filet, au centre."]}]},

  {nom:"Rotation P5", categorie:"Passeur zone 5",
   resume:"Trio R1 · R2 · Pt à 6 m, C2 en « +1 » au fond. C1 au filet, P à l'arrière-gauche.",
   schema:{terrain:"half",elements:[
     cisgoPlayer("R1",1.8,5.9,false), cisgoPlayer("R2",4.5,5.9,true), cisgoPlayer("Pt",7.2,5.9,false),
     cisgoPlayer("C2",5,7.9,true),
     cisgoPlayer("C1",0.7,0.7,false), cisgoPlayer("P",1.5,1.5,true)
   ]},
   schemaCap:"P5 — trio R1·R2·Pt à 6 m, C2 en « +1 » au fond ; C1 au filet à gauche, P part de l'arrière-gauche vers le filet.",
   blocks:[
     {label:"Réception (3+1)",points:["Trio à 6 m : R1 (gauche), R2 (centre), Pt (droite).","« +1 » au fond : C2."]},
     {label:"Non-réceptionneurs",points:["C1 : au filet, à gauche.","P (passeur) : arrière-gauche, file au filet distribuer."]}]},

  {nom:"Rotation P6", categorie:"Passeur zone 6",
   resume:"Trio R1 · R2 · C1 à 6 m (C1 reçoit), C2 en « +1 » au fond. Pt monte au filet, P à l'arrière.",
   schema:{terrain:"half",elements:[
     cisgoPlayer("R1",1.8,5.9,false), cisgoPlayer("R2",4.5,5.9,true), cisgoPlayer("C1",7.2,5.9,false),
     cisgoPlayer("C2",2.7,7.9,true),
     cisgoPlayer("P",4.4,1.1,true), cisgoPlayer("Pt",7,1.1,false)
   ]},
   schemaCap:"P6 — particularité : C1 entre dans le trio de réception (à droite) et Pt ne reçoit pas (il monte au filet). C2 en « +1 » au fond.",
   blocks:[
     {label:"Réception (3+1)",points:["Trio à 6 m : R1 (gauche), R2 (centre), C1 (droite).","« +1 » au fond : C2.","Particularité : C1 reçoit, Pt ne reçoit pas."]},
     {label:"Non-réceptionneurs",points:["P (passeur) : arrière-centre, file au filet distribuer.","Pt : monte au filet."]}]}
];

const INFO = {
  cisgo:{eyebrow:"Rotation", back:"Retour aux rotations", cardcta:"Voir le schéma →", protected:true, title:"Cisgo — réception de l'équipe", intro:"Le dispositif de réception de l'équipe (système P-4-3, réception 3+1) sur les 6 rotations. Bleu = ligne arrière, rouge = ligne avant.", items:CISGO},
  regles:{eyebrow:"Règle", back:"Retour aux règles", cardcta:"Voir →", title:"Règles du volley-ball", intro:"Les règles essentielles du jeu, des dimensions du terrain au libéro. Clique sur un thème pour le détail.", items:REGLES},
  postes:{eyebrow:"Poste", back:"Retour aux postes", cardcta:"Voir →", title:"Les postes", intro:"Les rôles sur le terrain : passeur, central, pointu, ailier, libéro. Clique sur un poste pour le détail.", items:POSTES},
  formations:{eyebrow:"Formation", back:"Retour aux formations", cardcta:"Voir →", title:"Les formations", intro:"Les systèmes de jeu à 6 (4-2, 5-1, 6-2) et les formats réduits à 4 ou 5 joueurs. Clique pour le détail.", items:FORMATIONS},
  tactique:{eyebrow:"Tactique", back:"Retour à la tactique", cardcta:"Voir →", title:"Tactique collective", intro:"Comment l'équipe joue ensemble : phases de jeu, réception, défense, combinaisons d'attaque et transition. Clique pour le détail.", items:TACTIQUE},
  techniques:{eyebrow:"Technique", back:"Retour aux techniques", cardcta:"3 niveaux →", title:"Techniques du volley", intro:"Les gestes fondamentaux expliqués niveau par niveau — débutant, intermédiaire, avancé. Clique sur une technique pour le détail.", items:TECHNIQUES},
  arbitrage:{flat:"arbitrage", title:"Arbitrage — les gestes officiels", intro:"Les principaux gestes du 1er arbitre, regroupés par type de décision (source : FIVB / CEV).", items:ARBITRAGE},
  lexique:{flat:"lexique", title:"Lexique du volley-ball", intro:"Le vocabulaire du volley, du jeu aux systèmes. Utilise la recherche pour filtrer.", items:LEXIQUE},
  outils:{eyebrow:"Outil", back:"Retour aux outils", cardcta:"Ouvrir →", title:"Outils", intro:"Des outils pratiques pour l'entraînement.", items:[
    {nom:"Chronomètre", categorie:"Outil", tool:"chrono", resume:"Un chronomètre avec enregistrement de tours (temps intermédiaires)."},
    {nom:"Constructeur de composition", categorie:"Outil", tool:"compo", resume:"Place tes joueurs sur le terrain en glisser-déposer."}
  ]}
};
