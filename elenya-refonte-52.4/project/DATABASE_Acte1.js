/** V52 — fragment DB ACTE1.
 * Généré depuis V51.7.6 sans réécriture narrative.
 * 26 scènes.
 */
function _dbActe1V52_() {
  const duelV58 = (gs, mobile) =>
    'https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@328f6c88149c32503000090d705e0a6a3c40c05d/game-v58/cinematics/lot-01/duel-' +
    (gs.hasFlag('galeries_cendre') ? 'cendre' : 'orage') + (mobile ? '-mobile.webp' : '-pc.webp');
  const duelRouteV58 = gs => gs.hasFlag('galeries_cendre') ? 'cendre' : 'orage';
  const duelVideoV58 = (gs, mobile) =>
    'https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@7e91139bbf759e45be6d4839f25649bd39b39351/game-v58/cinematics/duel-' +
    duelRouteV58(gs) + (mobile ? '-mobile.mp4' : '-pc.mp4');
  const duelFinV58 = (gs, mobile) =>
    'https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@7e91139bbf759e45be6d4839f25649bd39b39351/game-v58/cinematics/duel-' +
    duelRouteV58(gs) + '-fin-' + (mobile ? 'mobile.webp' : 'pc.webp');
  const triangulationV58 = (gs, mobile) => {
    const route = gs.hasFlag('avec_ombre') ? 'kaelen' :
      gs.hasFlag('avec_eclaireur') ? 'alistair' : 'solo';
    return 'https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@ce5d274182907f4d868953bb2850fa7f967d6e94/game-v58/cinematics/lot-02/triangulation-' +
      route + (mobile ? '-mobile.webp' : '-pc.webp');
  };
  const echoNeigeV57 = (gs) => {
    if (gs.hasFlag('react_ombre')) {
      return "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@13d48a22126bff04a25aa2dc8e8ca0fa6b5d7115/game-v58/cinematics/lot-01/echo-neige-kaelen-position-corrigee.webp";
    }
    if (gs.hasFlag('react_lumiere')) {
      return "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@ddfff7031a79c8858fb67951748467834f8e53ba/game-v58/cinematics/lot-01/rencontre-alistair-regard-elenya-gauche-pc.webp";
    }
    if (gs.hasFlag('react_givre')) {
      return "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@13d48a22126bff04a25aa2dc8e8ca0fa6b5d7115/game-v58/cinematics/lot-01/echo-neige-givre-position-corrigee.webp";
    }
    return "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@fe5816d4183d4395a2c5128129a4793f2293daa4/game-v57/cinematics/lot-02/12-triangulation-tension.webp";
  };
  return {
'ACTE1_01_REVEIL': {
  sceneNumber: 'ACTE1_01_REVEIL',
  chapter: 1,
  title: "Le Froid de l'Amnésie",
  mood: 'exploration',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@07ba23f1e28cd7142eaf74da2e0fad520f3d44ca/game-v58/cinematics/awakening/autel-reveil-elenya-pc-corrige.webp",
  imageMobile: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@07ba23f1e28cd7142eaf74da2e0fad520f3d44ca/game-v58/cinematics/awakening/autel-reveil-elenya-mobile-corrige.webp",
  postTransitionImage: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@07ba23f1e28cd7142eaf74da2e0fad520f3d44ca/game-v58/cinematics/awakening/autel-reveil-elenya-pc-corrige.webp",
  postTransitionImageMobile: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@07ba23f1e28cd7142eaf74da2e0fad520f3d44ca/game-v58/cinematics/awakening/autel-reveil-elenya-mobile-corrige.webp",
  transitionGif: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@cf47f99805c42e1a53b1de55200207f32da8ea59/game-v58/cinematics/awakening/reveil-elenya-pc-20260928-son.mp4",
  transitionGifMobile: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@cf47f99805c42e1a53b1de55200207f32da8ea59/game-v58/cinematics/awakening/reveil-elenya-mobile-20260928-son.mp4",
  sprite: "",
  voice: "",
  getDynamicNarrative: (gs) => {
    

    // Version normale
    return "Tu ouvres les yeux. Tu es allongée sur une grande pierre noire. De la glace couvre tes bras. La neige tombe dans une salle en ruine.\n\nTu ne sais pas comment tu es arrivée ici. Tu ne sais pas combien de temps tu as dormi. Un seul nom te revient : Elenya.\n\nDevant toi, un passage mène vers la lumière. Tu essaies de te lever. Tes jambes tremblent.\n\n";
  },
  choices: [
    
    {
      key: 'ADD',
      text: "Regarder les lignes gravées dans la pierre avant de partir.",
      effects: [{ type: "SET_FLAG", target: "reveil_autel_inspecte" }],
      next: 'ACTE1_01_REVEIL_DETAILS'
    },
    {
      key: 'A',
      text: "Te lever et marcher vers la lumière.",
      effects: [{ type: "SET_FLAG", target: "reveil_autel_quitte" }],
      next: 'ACTE1_01_REVEIL_DETAILS'
    }
  ]
},

'ACTE1_01_REVEIL_DETAILS': {
    sceneNumber: '1.01.ADD',
    chapter: 1,
    title: "L'Empreinte de la Stèle",
    mood: 'exploration',
    image: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@73b666c475f8b6ccb491d82d0bb3704779effd1f/game-v57/cinematics/lot-01/01-ouverture-ruines-glacees.webp",
    getDynamicNarrative: (gs) => {
      let text = "";
      if (gs.hasFlag('reveil_autel_inspecte')) {
        text += "Tu suis les lignes gravées avec tes doigts. La glace garde la forme de ton corps. Quand tu poses la main dessus, la pierre vibre.\n\n";
      } else if (gs.hasFlag('reveil_autel_quitte')) {
        text += "Tu quittes la pierre sans l'examiner. Derrière toi, la glace garde la forme de ton corps. Tu continues malgré le froid dans tes jambes.\n\n";
      } else {
        text += "La glace garde la forme de ton corps sur la pierre. Tu ignores depuis combien de temps elle est là.\n\n";
      }
      text += "Le passage se sépare en deux. Tes pas résonnent sur le sol de pierre. De vieilles marques sont prises dans la glace.\n\n";
      text += "À gauche, l'air sent l'orage. À droite, il sent la cendre froide. Tu choisis la direction à suivre.";
      return text;
    },
    choices: [
      {
        key: 'A',
        text: "Aller à gauche, vers l'odeur d'orage.",
        effects: [
          { type: "ADD_GAUGE", target: "affinite_eclaireur", value: 1 },
          { type: "SET_FLAG", target: "galeries_ozone" }
        ],
        next: 'ACTE1_02_RENCONTRE_1'
      },
      {
        key: 'B',
        text: "Aller à droite, vers l'odeur de cendre.",
        effects: [
          { type: "ADD_GAUGE", target: "affinite_ombre", value: 1 },
          { type: "SET_FLAG", target: "galeries_cendre" }
        ],
        next: 'ACTE1_02_RENCONTRE_1'
      }
    ]
  },

'ACTE1_02_RENCONTRE_1': {
  sceneNumber: 'ACTE1_02_RENCONTRE_1',
  chapter: 1,
  title: "Le Duel des Ombres",
  mood: 'tension',
  image: gs => duelV58(gs, false),
  imageMobile: gs => duelV58(gs, true),
  transitionGif: gs => duelVideoV58(gs, false),
  transitionGifMobile: gs => duelVideoV58(gs, true),
  postTransitionImage: gs => duelFinV58(gs, false),
  postTransitionImageMobile: gs => duelFinV58(gs, true),
  spriteLeft: "",
  spriteRight: "",
  voice: "URL_VOIX_KAELEN",
  getDynamicNarrative: (gs) => {
    
    let lead = "";
    if (gs.hasFlag('galeries_ozone')) {
      lead = "Tu as suivi l'odeur d'orage. Tu vois d'abord la lumière autour de l'homme en blanc.\n\n";
      return lead + `Deux hommes se battent au centre des ruines. Celui en armure claire pivote ; une lumière dorée court sur son bouclier tandis que son adversaire en noir glisse hors de portée, deux dagues à la main.\n\n« Ton Ordre n'a aucun droit sur elle, prêtre, » lance l'homme en noir. « On m'a payé pour la retrouver bien avant toi. » L'homme en blanc croise ton ombre sous l'arche et abaisse son bouclier d'un pouce. Son adversaire suit son regard et fige ses lames.`;
    } else if (gs.hasFlag('galeries_cendre')) {
      lead = "Tu as suivi l'odeur de cendre. Tu entends d'abord les dagues de l'homme en noir.\n\n";
    }
    return lead + `Deux hommes se battent au centre des ruines. Celui qui porte une armure noire évite un coup de sceptre et passe derrière son adversaire, deux dagues à la main. L'autre pivote ; une lumière dorée court sur son bouclier.\n\n« Tu t'épuises, prêtre, » lance l'homme en noir. « Ton Ordre n'a aucun droit sur elle. On m'a payé pour la retrouver bien avant toi. » Il te voit sous l'arche et s'arrête. Son adversaire suit son regard.`;
  },
  choices: [
    // Première confrontation : aucun choix de retrouvailles ici.
    { 
      key: 'NEXT', 
      condition: (gs) => isClassicState(gs),
      text: "S'avancer au cœur du conflit...", 
      next: 'ACTE1_02_RENCONTRE_2' 
    }
  ]
},

'ACTE1_02_RENCONTRE_2': {
    sceneNumber: 'ACTE1_02_RENCONTRE_2',
    chapter: 1,
    title: "Le Duel des Ombres",
    mood: 'tension',
    image: gs => duelFinV58(gs, false) || duelV58(gs, false),
    imageMobile: gs => duelFinV58(gs, true) || duelV58(gs, true),
    spriteLeft: "",
    spriteRight: "",
    voice: "URL_VOIX_ALISTAIR",
    getDynamicNarrative: (gs) => {
      if (gs.hasFlag('galeries_cendre')) {
        return `L'homme aux dagues tourne à demi le menton sans lâcher sa garde. « Le client m'a payé pour la ramener entière, prêtre. Ton Ordre attendra. » L'homme au sceptre resserre sa prise sur le bouclier.\n\nIls ont parlé de toi sans connaître ton nom. Tu avances d'un pas sous l'arche. L'homme en noir recule d'un pouce pour dégager le passage ; l'éclat doré baisse en face. Aucun ne range son arme. Tous deux attendent ce que tu vas faire.`;
      }
      return `L'homme au sceptre resserre sa prise. « L'Ordre du Soleil m'a envoyé la chercher. Elle ne partira pas avec toi. »\n\nIls ont parlé de toi sans connaître ton nom. Tu avances d'un pas sous l'arche. La lumière de son bouclier baisse ; l'homme aux dagues recule d'un pas pour te laisser passer. Aucun ne range son arme. Tous deux attendent ce que tu vas faire.`;
    },
    choices: [
      { key: 'O', text: "Regarder l'homme en noir.", getDynamicText: (gs) => gs.hasFlag('galeries_ozone') ? "Regarder l'homme en noir. Il a suivi le regard de son rival." : "Regarder l'homme en noir. Il a été le premier à te voir.", effects: [{ type: "ADD_GAUGE", target: "affinite_ombre", value: 3 }, { type: "SET_FLAG", target: "react_ombre" }], next: 'ACTE1_03_FAMILIER_1' },
      { key: 'E', text: "Te tourner vers l'homme en blanc.", getDynamicText: (gs) => gs.hasFlag('galeries_ozone') ? "Te tourner vers l'homme en blanc. Il a été le premier à croiser ton regard." : "Te tourner vers l'homme en blanc. Il t'observe sans attaquer.", effects: [{ type: "ADD_GAUGE", target: "affinite_eclaireur", value: 3 }, { type: "SET_FLAG", target: "react_lumiere" }], next: 'ACTE1_03_FAMILIER_1' },
      { key: 'S', text: "Geler le sol entre eux. « Baissez vos armes. »", effects: [{ type: "ADD_GAUGE", target: "instabilite", value: 5 }, { type: "SET_FLAG", target: "react_givre" }], next: 'ACTE1_03_FAMILIER_1' }]
  },

'ACTE1_03_FAMILIER_1': {
  sceneNumber: 'ACTE1_03_FAMILIER_1',
  chapter: 1,
  title: "L'Écho de Neige",
  mood: 'tension',
  image: gs => gs.hasFlag('react_givre') ? 'https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@568ed2620602b6e266a8f5e110c49c2ea874a1b9/game-v58/cinematics/echo-neige/givre-sol-debut-pc.webp' : echoNeigeV57(gs),
  imageMobile: gs => gs.hasFlag('react_givre') ? 'https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@568ed2620602b6e266a8f5e110c49c2ea874a1b9/game-v58/cinematics/echo-neige/givre-sol-debut-mobile.webp' : echoNeigeV57(gs),
  transitionGif: gs => gs.hasFlag('react_givre') ? 'https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@568ed2620602b6e266a8f5e110c49c2ea874a1b9/game-v58/cinematics/echo-neige/givre-sol-pc.mp4' : null,
  transitionGifMobile: gs => gs.hasFlag('react_givre') ? 'https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@568ed2620602b6e266a8f5e110c49c2ea874a1b9/game-v58/cinematics/echo-neige/givre-sol-mobile.mp4' : null,
  postTransitionImage: gs => gs.hasFlag('react_givre') ? 'https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@568ed2620602b6e266a8f5e110c49c2ea874a1b9/game-v58/cinematics/echo-neige/givre-sol-fin-pc.webp' : null,
  postTransitionImageMobile: gs => gs.hasFlag('react_givre') ? 'https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@568ed2620602b6e266a8f5e110c49c2ea874a1b9/game-v58/cinematics/echo-neige/givre-sol-fin-mobile.webp' : null,
  spriteLeft: "",
  spriteRight: "",
  voice: "URL_VOIX_ALISTAIR",
  getDynamicNarrative: (gs) => {
    let text = "L'air devient plus froid autour de toi. Une fine couche de glace gagne les pierres, même là où la neige ne tombe pas.\n\n";
    if (gs.hasFlag('react_ombre')) text += "L'homme en noir abaisse une dague, sans quitter le prêtre des yeux. L'homme en blanc serre son insigne dans sa paume et attend que tu parles.\n\n";
    else if (gs.hasFlag('react_lumiere')) text += "L'homme en blanc baisse son sceptre d'un pouce. L'autre remarque ton choix et se décale, toujours prêt à intervenir.\n\n";
    else if (gs.hasFlag('react_givre')) text += "Le givre gagne leurs bottes. Ils reculent pour se dégager, puis gardent leurs distances comme tu l'as demandé.\n\n";

    

    if (gs.hasFlag('react_ombre') || (gs.hasFlag('galeries_cendre') && !gs.hasFlag('react_lumiere') && !gs.hasFlag('react_givre'))) {
      text += "L'homme en noir rengaine à demi sa lame et coupe le silence le premier : « C'est donc pour toi qu'un prêtre et moi nous gelons les doigts sous la pierre. »\n\nL'homme en blanc montre sa main libre pour reprendre l'initiative. « Je m'appelle Alistair Leonhart. Je suis venu briser tes chaînes. » Un mouvement sous la neige, près de tes pieds, l'interrompt.";
    } else {
      text += "L'homme en blanc montre sa main libre avant de s'approcher. L'autre reste sur le talisman caché sous sa tunique.\n\n« Je m'appelle Alistair Leonhart. Je suis venu briser tes chaînes. » Un mouvement sous la neige, près de tes pieds, l'interrompt.";
    }
    return text;
  },
  choices: [{ key: 'NEXT', text: "Observer le mouvement à tes pieds...", next: 'ACTE1_03_FAMILIER_2' }]
},

'ACTE1_03_FAMILIER_2': {
  sceneNumber: 'ACTE1_03_FAMILIER_2',
  chapter: 1,
  title: "L'Écho de Neige",
  mood: 'action',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@e4ad9aed4866008d0e9e943c6ff55d57e5de84c1/game-v58/cinematics/fen-arrivee/fen-debut-pc.webp",
  imageMobile: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@e4ad9aed4866008d0e9e943c6ff55d57e5de84c1/game-v58/cinematics/fen-arrivee/fen-debut-mobile.webp",
  transitionGif: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@e4ad9aed4866008d0e9e943c6ff55d57e5de84c1/game-v58/cinematics/fen-arrivee/fen-pc.mp4",
  transitionGifMobile: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@e4ad9aed4866008d0e9e943c6ff55d57e5de84c1/game-v58/cinematics/fen-arrivee/fen-mobile.mp4",
  postTransitionImage: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@e4ad9aed4866008d0e9e943c6ff55d57e5de84c1/game-v58/cinematics/fen-arrivee/fen-fin-pc.webp",
  postTransitionImageMobile: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@e4ad9aed4866008d0e9e943c6ff55d57e5de84c1/game-v58/cinematics/fen-arrivee/fen-fin-mobile.webp",
  voice: "URL_VOIX_KAELEN",
  onEnter: (state) => { if (!state.flags.includes('_fen_introduced')) state.flags.push('_fen_introduced'); },
  getDynamicNarrative: (gs) => {
    

    return `Le petit furet blanc se niche contre ton cou. Ce geste t'est familier. Son nom te revient : Fen. Tu poses une main sur son dos avant même de te demander comment tu l'as appris.\n\nAlistair baisse son sceptre pour regarder la bête. Kaelen, lui, garde une dague levée. « Une reine et son rat de compagnie. » Fen siffle dans sa direction.\n\nUn grondement monte de sous les pavés. Une fissure traverse l'espace entre les deux hommes, puis gagne l'arche derrière toi. Vous reculez trop tard : le sol cède et vous tombez dans la même faille.`;
  },
  choices: [

    { 
      key: 'O', 
      condition: (gs) => isClassicState(gs),
      text: "Saisir la main de l'assassin. Kaelen te harponne dans le vide pour amortir l'impact.", 
      intent: 'confiance',
      target: 'Kaelen',
      importance: 'significant',
      feedback: "Kaelen a été celui que tu as choisi dans le vide. Ce n’est pas une promesse, mais le lien existe.",
      effects: [
        { type: "ADD_GAUGE", target: "affinite_ombre", value: 10 },
        { type: "ADD_GAUGE", target: "lien_O", value: 1 },
        { type: "ADD_GAUGE", target: "presence_O", value: 2 },
        { type: "SET_FLAG", target: "avec_ombre" },
        { type: "SET_FLAG", target: "compagnon_chute_O" }
      ], 
      next: 'ACTE1_03_CHUTE_O' 
    },
    { 
      key: 'E', 
      condition: (gs) => isClassicState(gs),
      text: "Appeler le prêtre. Alistair déploie son bouclier lumineux pour envelopper ta chute.", 
      intent: 'confiance',
      target: 'Alistair',
      importance: 'significant',
      feedback: "Alistair a été celui que tu as appelé dans le vide. Ce n’est pas un serment, mais le lien existe.",
      effects: [
        { type: "ADD_GAUGE", target: "affinite_eclaireur", value: 10 },
        { type: "ADD_GAUGE", target: "lien_E", value: 1 },
        { type: "ADD_GAUGE", target: "presence_E", value: 2 },
        { type: "SET_FLAG", target: "avec_eclaireur" },
        { type: "SET_FLAG", target: "compagnon_chute_E" }
      ], 
      next: 'ACTE1_03_CHUTE_E' 
    },
    {
      key: 'S',
      condition: (gs) => isClassicState(gs),
      text: "Repousser les deux hommes d'une bourrasque d'orgueil. Affronter le gouffre seule.",
      intent: 'liberte',
      target: 'Elenya',
      importance: 'significant',
      feedback: "Tu refuses les deux mains et demandes au givre de te porter. Cette fois, l’instabilité vient bien de toi.",
      effects: [
        { type: "ADD_GAUGE", target: "instabilite", value: 6 },
        { type: "ADD_GAUGE", target: "presence_S", value: 2 },
        { type: "SET_FLAG", target: "voie_solo" },
        { type: "SET_FLAG", target: "chute_solo_givre" }
      ],
      next: 'ACTE1_03_CHUTE_S'
    }
  ]
},

'ACTE1_03_CHUTE_O': {
  sceneNumber: 'ACTE1_03_CHUTE_O',
  chapter: 1,
  title: "La protection de Kaelen",
  mood: 'action',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-02/16-protection-kaelen.webp",
  narrative: "Kaelen se jette à tes côtés. Sa lame détourne les éclats de glace pendant que vous tombez ensemble dans les profondeurs. Fen s'agrippe à toi.",
  choices: [{ key: 'NEXT', text: "Se relever dans les catacombes.", next: 'ACTE1_04_FRESQUE' }]
},

'ACTE1_03_CHUTE_E': {
  sceneNumber: 'ACTE1_03_CHUTE_E',
  chapter: 1,
  title: "La protection d'Alistair",
  mood: 'action',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-02/17-protection-alistair.webp",
  narrative: "Alistair étend son bouclier lumineux autour de toi. L'or de sa magie amortit la chute parmi les blocs de glace. Fen s'agrippe à toi.",
  choices: [{ key: 'NEXT', text: "Se relever dans les catacombes.", next: 'ACTE1_04_FRESQUE' }]
},

'ACTE1_03_CHUTE_S': {
  sceneNumber: 'ACTE1_03_CHUTE_S',
  chapter: 1,
  title: "La chute solitaire",
  mood: 'action',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@e7e8639f96b39e1bcf908644271f3f3cec37344a/game-v57/cinematics/lot-02/18-chute-elenya-solo.webp",
  narrative: "Tu repousses les deux mains tendues et plonges seule. Ton givre se déploie entre les blocs de pierre pour freiner ta chute ; Fen te rejoint après l'impact.",
  choices: [{ key: 'NEXT', text: "Se relever dans les catacombes.", next: 'ACTE1_04_FRESQUE' }]
},

'ACTE1_04_FRESQUE': {
    sceneNumber: 'ACTE1_04_FRESQUE',
    chapter: 1,
    title: "Mémoires de Glace",
    mood: 'exploration',
    stage: { showElenya:true, framing:'wide' },
    emotionalBeat: 'memory',
    memoryEcho: 'kalthar_melody',
    relationFocus: (gs) => gs.hasFlag('avec_ombre') ? 'O' : (gs.hasFlag('avec_eclaireur') ? 'E' : 'S'),
    image: (gs) => gs.hasFlag('avec_ombre')
      ? "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@e7e8639f96b39e1bcf908644271f3f3cec37344a/game-v57/cinematics/lot-02/19-fresque-kaelen.webp"
      : gs.hasFlag('avec_eclaireur')
        ? "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@e7e8639f96b39e1bcf908644271f3f3cec37344a/game-v57/cinematics/lot-02/19-fresque-alistair.webp"
        : "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-02/19-memoires-de-glace-fresque.webp",
    sprite: null,
    voice: "",
    getDynamicNarrative: (gs) => {
      let _kaltharEcho = "";
      if (gs.getGauge('memoire_kalthar') >= 2 || gs.hasFlag('kalthar_melody')) {
        _kaltharEcho = "Une mélodie très ancienne traverse la pierre. Trois notes seulement. Ton corps la reconnaît avant ton esprit. Quelqu’un t’attendait ici.\n\n";
      }

      let baseText = "Le choc ébranle les profondeurs, mais ton fluide magique — épaulé par le petit furet cramponné à ton épaule — encaisse l'impact. Tu te redresses au cœur de catacombes oubliées, étouffées par une poussière séculaire.\n\n";
      if (gs.hasFlag('avec_ombre')) baseText += "Kaelen se relève, secoue la poussière de son col et jette un œil vers le haut de la galerie. « Le prêtre a raté la marche. » Il ne sourit pas tout à fait. « Dommage pour lui. L'air est meilleur. » Puis il voit la pierre, et le trait d'esprit s'arrête.\n\n";
      else if (gs.hasFlag('avec_eclaireur')) baseText += "Alistair se relève en grimaçant. Son insigne grésille encore. « Kaelen finira par trouver un autre passage. » Il le dit pour la galerie. Ses yeux, eux, sont déjà sur la pierre.\n\n";
      else baseText += "Le tombeau ne rend que l'écho. Plus haut, deux voix jurent sans se voir. Fen siffle, bas, et ses yeux trouvent la pierre avant toi.\n\n";
      baseText += "Fen éclaire de ses yeux une fresque taillée dans le basalte. Une souveraine au diadème de givre se tient devant des flammes assez hautes pour engloutir une cité. Sous ses mains, la glace gagne le sol et les remparts. La pierre ne montre pas ce qui est arrivé après.\n\n";
      baseText += "Tu reconnais le diadème. Puis le visage. La femme sculptée, c'est toi ; mais le geste qu'elle accomplit ne te rend encore aucun souvenir précis. Tu gardes les yeux sur la fresque, en quête d'une trace de ceux qui se trouvaient derrière ces remparts.\n\n";
      
      return _kaltharEcho + baseText;
    },
    choices: [
      { 
        key: 'O', 
        condition: (gs) => gs.hasFlag('avec_ombre') && !gs.hasFlag('avec_eclaireur'), 
        text: "Te tourner vers Kaelen. « Alors ce visage n'est qu'une histoire pour faire peur ? »",
        response: "Kaelen regarde la femme gravée, puis toi. « Les histoires pour faire peur sont rarement aussi bien armées. » Le sourire revient, plus court. « Si c'était toi, quelqu'un a eu besoin que tu oublies pourquoi. Ça, ça m'intéresse. »",
        effects: [
          { type: "ADD_GAUGE", target: "lien_O", value: 1 }, 
          { type: "SET_FLAG", target: "fresque_O" },
          { type: "SET_FLAG", target: "fresque_touched" }
        ], 
        next: 'ACTE1_04_TRANSITION' 
      },
      {
        key: 'O_RETURN',
        condition: (gs) => gs.hasFlag('avec_ombre') && !gs.hasFlag('avec_eclaireur'),
        text: "Rester à un pas. « Cette pierre ne décide pas de ce qu'on est. On avance. »",
        response: "Kaelen incline la tête, comme s'il notait une clause, puis laisse tomber. « D'accord. On avance. » Il ne se rapproche pas.",
        effects: [
          { type: "SET_FLAG", target: "fresque_O" },
          { type: "SET_FLAG", target: "fresque_touched" },
          { type: "SET_FLAG", target: "route_relationnelle_ouverte" }
        ],
        next: 'ACTE1_04_TRANSITION'
      },
      { 
        key: 'E', 
        condition: (gs) => gs.hasFlag('avec_eclaireur') && !gs.hasFlag('avec_ombre'), 
        text: "Poser ta main sur son bras. « Regarde-moi. Respire. »",
        response: "Alistair obéit avant de s'en rendre compte. Son regard quitte la fresque. « On m'a appris qu'elle avait choisi le monde contre les hommes. » Sa voix baisse. « Et je suis en train de regarder quelqu'un. Pas une phrase. »",
        effects: [
          { type: "ADD_GAUGE", target: "lien_E", value: 1 }, 
          { type: "SET_FLAG", target: "fresque_E" },
          { type: "SET_FLAG", target: "fresque_touched" }
        ], 
        next: 'ACTE1_04_TRANSITION' 
      },
      {
        key: 'E_HOLD',
        condition: (gs) => gs.hasFlag('avec_eclaireur') && !gs.hasFlag('avec_ombre'),
        text: "Retirer ta main. « Pas encore. »",
        response: "Alistair hoche la tête, une fois. Il ne reprend pas ton bras. « D'accord. Pas encore. » Ses yeux reviennent à la fresque, pas à toi.",
        effects: [
          { type: "SET_FLAG", target: "fresque_E" },
          { type: "SET_FLAG", target: "fresque_touched" },
          { type: "SET_FLAG", target: "route_relationnelle_ouverte" }
        ],
        next: 'ACTE1_04_TRANSITION'
      },
      { 
        key: 'S', 
        condition: (gs) => gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde'), 
        text: "Effleurer la roche gravée. Laisser venir ce qui vient.", 
        effects: [
          { type: "ADD_GAUGE", target: "instabilite", value: 2 }, 
          { type: "SET_FLAG", target: "fresque_S" },
          { type: "SET_FLAG", target: "fresque_touched" }
        ], 
        next: 'ACTE1_04_TRANSITION' 
      },
      { 
        key: 'C', 
        text: "Détourner les yeux. Chercher la sortie.", 
        effects: [{ type: "SET_FLAG", target: "fresque_ignore" }], 
        next: 'ACTE1_04_REFUS' 
      }
    ]
  },

'ACTE1_04_REFUS': {
    sceneNumber: 'ACTE1_04_REFUS',
    chapter: 1,
    title: "Détourner le regard",
    mood: 'exploration',
    image: (gs) => gs.hasFlag('avec_ombre')
      ? "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@e7e8639f96b39e1bcf908644271f3f3cec37344a/game-v57/cinematics/lot-02/19-refus-kaelen.webp"
      : gs.hasFlag('avec_eclaireur')
        ? "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@e7e8639f96b39e1bcf908644271f3f3cec37344a/game-v57/cinematics/lot-02/19-refus-alistair.webp"
        : "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@e7e8639f96b39e1bcf908644271f3f3cec37344a/game-v57/cinematics/lot-02/19-refus-solo.webp",
    getDynamicNarrative: (gs) => "Tu détournes les yeux de la fresque et prends le passage qui s'ouvre à gauche. Fen te suit." +
      (gs.hasFlag('avec_ombre') ? " Kaelen se détourne avec toi et surveille vos arrières." :
        gs.hasFlag('avec_eclaireur') ? " Alistair te suit sans te demander de regarder encore." : ""),
    choices: [{ key: 'CONTINUER', text: "Quitter la salle de la fresque.", next: 'ACTE1_04_TRANSITION' }]
  },

'ACTE1_04_TRANSITION': {
    sceneNumber: '1.04.BIS',
    chapter: 1,
    title: "Les Marches de Basalte",
    mood: 'exploration',
    image: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/galeries-basalte.webp",
    getDynamicNarrative: (gs) => {
      let text = "Les marches sont taillées dans la roche. La vapeur colle aux vêtements. Fen passe devant, oreilles basses.\n\n";
      if (gs.hasFlag('avec_ombre')) {
        if (gs.hasFlag('fresque_ignore')) text += "Kaelen ne reparle pas de la pierre. Il vérifie ses dagues et te laisse la place que tu as prise.\n\n";
        else if (gs.hasFlag('route_relationnelle_ouverte')) text += "Kaelen marche un pas devant, sans se retourner toutes les trois enjambées. « Tu as dit qu'on avançait. J'avance. »\n\n";
        else if (gs.hasFlag('fresque_O')) text += "Kaelen jette encore un regard vers la salle que vous quittez. « Elle te ressemble trop pour que ce soit un hasard. Je n'en ferai pas un discours. »\n\n";
        else text += "Kaelen vérifie ses dagues. « Reste où je peux te voir. Le reste, on verra plus haut. »\n\n";
      }
      if (gs.hasFlag('avec_eclaireur')) {
        if (gs.hasFlag('fresque_ignore')) text += "Alistair ne te redemande pas de regarder. Son insigne éclaire les marches, pas ton visage.\n\n";
        else if (gs.hasFlag('route_relationnelle_ouverte')) text += "Alistair garde la distance de ta main retirée. « Pas encore, » dit-il, plus pour lui que pour toi.\n\n";
        else if (gs.hasFlag('fresque_E')) text += "Alistair ne reprend pas ton bras. Il ralentit seulement quand une marche est glissante, et attend que tu la passes.\n\n";
        else text += "Alistair éclaire les marches. Il ne prie pas tout haut.\n\n";
      }
      if (!gs.hasFlag('avec_ombre') && !gs.hasFlag('avec_eclaireur')) {
        text += gs.hasFlag('fresque_S')
          ? "La pierre a laissé une vibration sous tes doigts. Personne n'est là pour la nommer.\n\n"
          : "Tu as laissé la fresque derrière toi. Fen ne se retourne pas.\n\n";
      }
      return text + "Plus loin, quelque chose de lourd bouge dans la roche.";
    },
    choices: [
      { key: 'CONTINUER', text: "S'avancer vers la chambre de l'automate.", next: 'ACTE1_04_AUTOMATE' }
    ]
  },

'ACTE1_04_AUTOMATE': {
  sceneNumber: 'ACTE1_04_AUTOMATE',
  chapter: 1,
  title: "Le Gardien de Pierre",
  mood: 'action',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/chambre-automate.webp",
  onEnter: (state) => {
    if (!state.flags.includes('automate_entered')) {
      state.flags.push('automate_entered');
    }
  },
  getDynamicNarrative: (gs) => {
    let text = "Un grondement sourd monte des murs. La fresque se fissure. De la pierre et du cristal, un automate s’arrache au basalte comme un os qu’on arrache d’une chair morte. Ses yeux s’allument d’une lueur cyan, froide, vengeresse — la même lumière que celle qui pulse parfois sous ta peau.\n\n";

    if (gs.hasFlag('avec_ombre') && gs.hasFlag('avec_eclaireur')) {
      text += "Kaelen part sur le flanc gauche tandis qu’Alistair verrouille le centre. Pour la première fois, leurs gestes se répondent avant même qu’ils aient besoin de se parler. Une dague détourne la lame tournante ; un éclat de lumière frappe le cristal au moment exact où l’assassin ouvre une brèche.\n\n";
      text += "« Ne t’habitue pas à travailler avec moi, » grogne Kaelen.\n\n« Je n’avais pas prévu de le faire, » répond Alistair. Mais il ne recule pas.\n\n";
    } else if (gs.hasFlag('avec_ombre')) {
      text += "Kaelen ne dit rien. Il glisse déjà sur le côté, dagues nues, le corps bas. L’automate frappe. Une lame tournante racle l’endroit où se trouvait sa tête une demi-seconde plus tôt. « Un joujou de plus, Reine, » souffle-t-il, et dans sa voix il y a presque… de l’amusement. Ou de l’appétit.\n\n";
    } else if (gs.hasFlag('avec_eclaireur')) {
      text += "Alistair dresse son bouclier de lumière. L’automate l’absorbe. La lueur dorée se fond dans le cristal et le rend plus brillant, plus vif, plus affamé. « Il se nourrit du divin… » murmure le prêtre, la mâchoire serrée. Sa foi vient de devenir une arme contre lui.\n\n";
    } else {
      text += "Fen se plaque contre ton cou, un frisson de peur animale. Tu lèves la main sans réfléchir. Le givre répond avant même que tu formules l’ordre. Une muraille de glace pure se dresse. L’automate la frappe, s’y enfonce, et ses engrenages se grippent dans un cri de métal et de cristal.\n\n";
    }

    text += "La bataille est brève, brutale, presque intime. Quand l’automate s’effondre en poussière de cristal et d’os de pierre, le silence qui suit est plus lourd que le combat lui-même.\n\n";
    text += "Dans l’alcôve qu’il gardait, l’air est plus chaud. Ou peut-être est-ce seulement ton sang qui bat trop fort. Un endroit pour souffler. Pour ne pas encore remonter.";

    return text;
  },
  choices: [
    { 
      key: 'NEXT', 
      text: "Traverser le passage étroit…", 
      effects: [{ type: "SET_FLAG", target: "fragment_kalthar_1" }], 
      next: 'ACTE1_05_BIVOUAC' 
    }
  ]
},

'ACTE1_05_BIVOUAC': {
  sceneNumber: 'ACTE1_05_BIVOUAC',
  chapter: 1,
  title: "La Chaleur des Profondeurs",
  mood: 'romance',
  image: gs => gs.hasFlag('avec_eclaireur') ? "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/bivouac-souterrain.webp" : "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@8bec85456cf6a5009a93c1379ab168e7f13691e3/game-v58/backgrounds/bivouac-sans-feu-pc.webp",
  imageMobile: gs => gs.hasFlag('avec_eclaireur') ? "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/bivouac-souterrain.webp" : "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@8bec85456cf6a5009a93c1379ab168e7f13691e3/game-v58/backgrounds/bivouac-sans-feu-mobile.webp",
  sprite: (gs) => gs.hasFlag('avec_ombre') === gs.hasFlag('avec_eclaireur') ? 'Elenya' : null,
  spriteLeft: (gs) => gs.hasFlag('avec_ombre') ? 'Kaelen'
    : gs.hasFlag('avec_eclaireur') ? 'Elenya' : null,
  spriteRight: (gs) => gs.hasFlag('avec_eclaireur') ? 'Alistair'
    : gs.hasFlag('avec_ombre') ? 'Elenya' : null,
  stage: { framing: 'wide' },
  voice: "",
  getDynamicNarrative: (gs) => {
    let text = "Le froid ici n’est plus une agression. C’est une reconnaissance. Ton sang s’accorde à la température des catacombes comme s’il rentrait enfin chez lui. La vérité de la fresque s’est installée entre les murs, lourde, silencieuse, impossible à ignorer.\n\n";

    if (gs.hasFlag('fresque_O')) {
      text += "Kaelen a gardé le meilleur morceau de la ration. Il te le tend sans cérémonie. « Ne prends pas l'habitude. » Il ne reparle pas de la femme sur le mur. Il a juste cessé de l'appeler une histoire.\n\n";
    } else if (gs.hasFlag('fresque_E')) {
      text += "Alistair a posé sa cape sur la pierre, entre vous, pas sur tes épaules. Il ne redit pas ce qu'il a vu. Quand tu t'assieds, il décale l'étincelle pour qu'elle réchauffe sans t'éclairer le visage.\n\n";
    } else if (gs.hasFlag('fresque_S')) {
      text += "Tes doigts gardent le froid de la pierre. Fen se cale contre ton poignet, comme s'il reconnaissait le geste. Personne d'autre n'est là pour le commenter.\n\n";
    } else if (gs.hasFlag('fresque_ignore')) {
      text += "Tu as laissé la fresque derrière toi. Ici, personne ne te la ramène. Fen cherche quand même la chaleur de tes genoux.\n\n";
    }

    // Scène selon le compagnon — le mode triangle reste jouable dès l'Acte 1.
    if (gs.hasFlag('avec_ombre') && gs.hasFlag('avec_eclaireur')) {
      text += `Kaelen refuse d’allumer du feu. Alistair en allume pourtant un, minuscule, assez faible pour ne pas attirer les regards.\n\nKaelen fixe la flamme, puis le prêtre. « Tu fais toujours l’inverse de ce qu’on te demande ? »\n\n« Seulement quand la demande est mauvaise. »\n\nTu comprends alors que le choix de la chute n’a pas créé un gagnant. Il a seulement déplacé les lignes.`;
    } else if (gs.hasFlag('avec_ombre')) {
      text += `Kaelen refuse d'allumer du feu. « Tu pourrais glacer une armée, » dit-il, « et tu donnes le meilleur coin à un furet. » Fen siffle. Kaelen lève les mains, moqueur. « D'accord. Le furet a gagné. » Il s'assied quand même trop près, et attend de voir si tu le fais reculer.`;
    } else if (gs.hasFlag('avec_eclaireur')) {
      if (gs.hasFlag('_lien_E_1_vu')) {
        // Compatibilité : une ancienne sauvegarde peut avoir déjà joué LIEN_E_1.
        text += `L’étincelle d’Alistair est déjà là. Il ne répète pas ce qui a été dit auparavant. Il se contente de maintenir la lumière assez loin de toi pour qu’elle réchauffe la pierre sans toucher ton givre.`;
      } else {
        text += `Alistair allume une étincelle basse. Il pose sa cape sur la pierre, entre vous, et ne la tend pas. « J'ai failli te la mettre sur les épaules, » dit-il, un peu trop vite. « Puis je me suis souvenu que tu n'as rien demandé. »\n\nIl ne cherche pas ta main. L'étincelle reste assez loin pour que tu puisses choisir.`;
      }
    } else {
      text += `Fen s’endort sur tes genoux. Sa respiration est la seule pulsation vivante de la pièce. Dans ce tête-à-tête avec les ténèbres, la solitude n’est plus un manque. C’est le premier jalon d’une liberté que tu commences à reconquérir.`;
    }

    // Compatibilité anciennes sauvegardes : échos de l'ancien palier LIEN_E_1.
    if (gs.hasFlag('_lien_E_1_distance')) {
      text += "\n\nTu as reculé. Alistair a refermé les doigts sur le bord de la cape un instant trop long — puis a repris son étincelle comme si de rien n’était.";
    } else if (gs.hasFlag('_lien_E_1_contact')) {
      text += "\n\nTu n’as pas bougé. L’étincelle pulse encore trop près de ton poignet, plus basse, comme s’il avait peur d’éteindre ce qu’il n’ose pas nommer.";
    }

    return text;
  },
  choices: [
  // --- Voie Ombre ---
  { 
    key: 'O1', 
    condition: (gs) => gs.hasFlag('avec_ombre'), 
    text: "Le taquiner. « Tu peux rester. Mais ne prends pas toute la place. »",
    response: "Kaelen décale légèrement sa jambe et te rend ton sourire. « Celle-ci me suffira. » Il garde un peu d’espace entre vous. Fen se détend sur tes genoux.",
    effects: [
      { type: "ADD_GAUGE", target: "lien_O", value: 1 },
      { type: "SET_FLAG", target: "_lien_O_1_vu" },
      { type: "SET_FLAG", target: "bivouac_menace" }
    ], 
    next: 'ACTE1_05B_REVEIL_BIVOUAC' 
  },
  { 
    key: 'O2', 
    condition: (gs) => gs.hasFlag('avec_ombre'), 
    text: "Apprendre à le connaître. « Ton nom. Et pourquoi tu restes. »",
    response: "« Kaelen. » Il le dit comme on pose une pièce sur une table. « Pourquoi je reste ? Pour l'instant, parce que tu es plus intéressante que la sortie. Le jour où ce ne sera plus une raison suffisante, je te le dirai. »",
    effects: [
      { type: "ADD_GAUGE", target: "affinite_ombre", value: 3 },
      { type: "SET_FLAG", target: "_lien_O_1_vu" },
      { type: "SET_FLAG", target: "bivouac_nom" }
    ], 
    next: 'ACTE1_05B_REVEIL_BIVOUAC' 
  },
  { 
    key: 'O3', 
    condition: (gs) => gs.hasFlag('avec_ombre'), 
    text: "T’appuyer contre son épaule. « J’ai envie de rester près de toi. »",
    response: "Kaelen écarte sa dague lorsque tu viens contre son épaule. « Alors reste. » Il te laisse t’installer, sans te tirer davantage vers lui.",
    effects: [
      { type: "ADD_GAUGE", target: "lien_O", value: 1 },
      { type: "SET_FLAG", target: "_lien_O_1_vu" },
      { type: "SET_FLAG", target: "bivouac_silence_proche" },
      { type: "SET_FLAG", target: "interet_romantique_O" }
    ], 
    next: 'ACTE1_05B_REVEIL_BIVOUAC' 
  },

  {
    key: 'O_REPOS',
    condition: (gs) => gs.hasFlag('avec_ombre'),
    text: "Garder un peu d’espace. « Je vais me reposer. On parlera demain. »",
    response: "« D’accord. » Kaelen recule sa place, puis reprend sa veille. Fen se roule contre toi. Personne ne te demande davantage.",
    effects: [
      { type: "SET_FLAG", target: "_lien_O_1_vu" },
      { type: "SET_FLAG", target: "bivouac_distance_O" }
    ],
    next: 'ACTE1_05B_REVEIL_BIVOUAC'
  },

  // --- Voie Éclaireur ---
    // --- Voie Éclaireur (V26.5.1 : plus de re-prise de main si LIEN déjà vu) ---
  {
    key: 'E1',
    condition: (gs) => gs.hasFlag('avec_eclaireur') && gs.hasFlag('_lien_E_1_vu'),
    text: "Poser une limite à Alistair sans le rejeter. « Garde le cadre si tu veux — pas sur moi. »",
    response: "Alistair absorbe la correction sans se défendre. Il replie sa cape sur ses propres genoux. « D’accord. Le cadre pour moi. Pas autour de toi. » Ce n’est pas une promesse parfaite, mais c’est la première qu’il reformule au lieu de l’imposer.",
    effects: [
      { type: "ADD_GAUGE", target: "lien_E", value: 1 },
      { type: "SET_FLAG", target: "bivouac_garde_cadre" }
    ],
    next: 'ACTE1_05B_REVEIL_BIVOUAC'
  },
  {
    key: 'E2',
    condition: (gs) => gs.hasFlag('avec_eclaireur') && gs.hasFlag('_lien_E_1_vu'),
    text: "Repousser Alistair franchement. Éteindre l’étincelle. « Ta pitié m’insulte, prêtre. »",
    response: "L’étincelle meurt entre les doigts d’Alistair. Il ne la rallume pas. « Ce n’était pas de la pitié. » Il marque un temps, puis renonce à se justifier. « Mais si c’est ainsi que tu l’as reçue, je recule. »",
    effects: [
      { type: "ADD_GAUGE", target: "distance_E", value: 2 },
      { type: "ADD_GAUGE", target: "volonte", value: 1 },
      { type: "SET_FLAG", target: "bivouac_retire_cadre" }
    ],
    next: 'ACTE1_05B_REVEIL_BIVOUAC'
  },
  {
    key: 'E3',
    condition: (gs) => gs.hasFlag('avec_eclaireur') && gs.hasFlag('_lien_E_1_vu'),
    text: "Accepter la présence d’Alistair. Le laisser rester à la lisière de ta lumière.",
    response: "Alistair reste exactement où tu l’as laissé. Sa lumière baisse jusqu’à ne plus être qu’une chaleur sur la pierre. « Je peux faire ça », murmure-t-il. « Être là sans avancer. »",
    effects: [
      { type: "ADD_GAUGE", target: "lien_E", value: 1 },
      { type: "SET_FLAG", target: "bivouac_accepte_cadre" },
      { type: "SET_FLAG", target: "ton_douceur" }
    ],
    next: 'ACTE1_05B_REVEIL_BIVOUAC'
  },
  // V40.3.7 — choix standard sur une nouvelle partie.
  // Les variantes E1/E2/E3 ci-dessus ne servent plus qu'aux sauvegardes legacy
  // qui avaient déjà traversé LIEN_E_1.
  {
    key: 'E1b',
    condition: (gs) => gs.hasFlag('avec_eclaireur') && !gs.hasFlag('_lien_E_1_vu'),
    text: "« Garde tes distances. Ta lumière suffit de là. »",
    response: "Alistair retire la main de la cape qu'il allait te tendre. « Je garderai la distance. » Il ne se justifie pas. Il vérifie seulement que tu n'as pas froid.",
    effects: [
      { type: "ADD_GAUGE", target: "lien_E", value: 1 },
      { type: "SET_FLAG", target: "_lien_E_1_vu" },
      { type: "SET_FLAG", target: "_lien_E_1_distance" },
      { type: "SET_FLAG", target: "bivouac_garde_cadre" }
    ],
    next: 'ACTE1_05B_REVEIL_BIVOUAC'
  },
  {
    key: 'E2b',
    condition: (gs) => gs.hasFlag('avec_eclaireur') && !gs.hasFlag('_lien_E_1_vu'),
    text: "Tourner le dos à l'étincelle. « Je n'ai pas besoin qu'on me plaigne. »",
    response: "La lumière s'éteint. « Compris. » Un seul mot. Quand tu te retournes, Alistair est de l'autre côté de l'alcôve. Il n'a pas rallumé.",
    effects: [
      { type: "ADD_GAUGE", target: "distance_E", value: 2 },
      { type: "ADD_GAUGE", target: "volonte", value: 1 },
      { type: "SET_FLAG", target: "_lien_E_1_vu" },
      { type: "SET_FLAG", target: "_lien_E_1_distance" },
      { type: "SET_FLAG", target: "bivouac_retire_cadre" }
    ],
    next: 'ACTE1_05B_REVEIL_BIVOUAC'
  },
  {
    key: 'E3b',
    condition: (gs) => gs.hasFlag('avec_eclaireur') && !gs.hasFlag('_lien_E_1_vu'),
    text: "T'asseoir à la lisière de sa lumière. Juste un instant.",
    response: "Alistair cesse de parler. Il baisse l'étincelle jusqu'à ce qu'elle réchauffe sans éclairer. « Je peux faire ça, » dit-il. « Être là. Sans avancer. »",
    effects: [
      { type: "ADD_GAUGE", target: "lien_E", value: 1 },
      { type: "SET_FLAG", target: "_lien_E_1_vu" },
      { type: "SET_FLAG", target: "_lien_E_1_contact" },
      { type: "SET_FLAG", target: "bivouac_accepte_cadre" },
      { type: "SET_FLAG", target: "ton_douceur" }
    ],
    next: 'ACTE1_05B_REVEIL_BIVOUAC'
  },

  // --- Voie Solo ---
  { 
    key: 'S1', 
    condition: (gs) => gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde'), 
    text: "Fermer les yeux. Écouter le froid qui pulse en toi comme un second cœur.", 
    effects: [
      { type: "ADD_GAUGE", target: "instabilite", value: 3 },
      { type: "SET_FLAG", target: "bivouac_solo_froid" }
    ], 
    next: 'ACTE1_05B_REVEIL_BIVOUAC' 
  },
  { 
    key: 'S2', 
    condition: (gs) => gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde'), 
    text: "Flatter doucement l’oreille de Fen. La seule chaleur que tu acceptes encore.", 
    effects: [
      { type: "SET_FLAG", target: "bivouac_fen_seul" }
    ], 
    next: 'ACTE1_05B_REVEIL_BIVOUAC' 
  }
]
},

'ACTE1_05B_REVEIL_BIVOUAC': {
  sceneNumber: '1.05B',
  chapter: 1,
  title: "Cendres Froides",
  mood: 'tension',
  stage: { framing:'medium' },
  image: (gs) => {
    if (gs.hasFlag('avec_ombre') && gs.hasFlag('avec_eclaireur')) return "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Sprites%20-%20Interactions%20bg/INTERACTION_TRIO_POLY_REINE_DOMINANTE_202606231806.png";
    if (gs.hasFlag('avec_ombre') && !gs.hasFlag('avec_eclaireur')) return bivouacKaelenChoixImage_(gs, false);
    if (gs.hasFlag('avec_eclaireur') && !gs.hasFlag('avec_ombre')) return "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@73b666c475f8b6ccb491d82d0bb3704779effd1f/game-v57/cinematics/lot-01/08-cendres-froides.webp";
    return "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Acte%201/Bivouac_aube.jpeg";
  },
  imageMobile: (gs) => {
    if (gs.hasFlag('avec_ombre') && gs.hasFlag('avec_eclaireur')) return "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Sprites%20-%20Interactions%20bg/INTERACTION_TRIO_POLY_REINE_DOMINANTE_202606231806.png";
    if (gs.hasFlag('avec_ombre') && !gs.hasFlag('avec_eclaireur')) return bivouacKaelenChoixImage_(gs, true);
    if (gs.hasFlag('avec_eclaireur') && !gs.hasFlag('avec_ombre')) return "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@73b666c475f8b6ccb491d82d0bb3704779effd1f/game-v57/cinematics/lot-01/08-cendres-froides.webp";
    return "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Acte%201/Bivouac_aube.jpeg";
  },
  sprite: (gs) => {
    if (gs.hasFlag('avec_ombre') || gs.hasFlag('avec_eclaireur')) return null;
    if (gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde')) return "Elenya";
    return null;
  },
  // Solo compagnon : sprites duo si fond neutre (bivouac-sans-feu). Les URLs ciné
  // (bivouac-choix / lot-01) et Trio CG restent illustration → cast vidé par SceneManager.
  spriteLeft: (gs) => {
    if (gs.hasFlag('avec_ombre') && !gs.hasFlag('avec_eclaireur')) return "Elenya";
    if (gs.hasFlag('avec_eclaireur') && !gs.hasFlag('avec_ombre')) return "Elenya";
    return null;
  },
  spriteRight: (gs) => {
    if (gs.hasFlag('avec_ombre') && !gs.hasFlag('avec_eclaireur')) return "Kaelen";
    if (gs.hasFlag('avec_eclaireur') && !gs.hasFlag('avec_ombre')) return "Alistair";
    return null;
  },
  getDynamicNarrative: (gs) => {
    let text = gs.hasFlag('avec_ombre') && !gs.hasFlag('avec_eclaireur')
      ? "Dans l’alcôve, les cristaux diffusent une lumière bleue. La halte touche à sa fin.\n\n"
      : "L’aube grise s’infiltre. La halte touche à sa fin.\n\n";

    if (gs.hasFlag('bivouac_distance_O')) {
      text += "Kaelen a gardé sa place à l’entrée de l’alcôve. Fen dort encore contre toi. « Prends ton temps. Je surveille la galerie. »";
    } else if (gs.hasFlag('bivouac_menace')) {
      text += "Kaelen est assis à un demi-pas, là où tu lui as laissé de la place. Votre sourire revient quand Fen s’étire. « Le meilleur coin lui appartient toujours, apparemment. »";
    } else if (gs.hasFlag('bivouac_nom')) {
      text += "Kaelen te tend sa gourde. Il a rangé ses dagues ; l’espace entre vous est resté le même. « Pour la route. Et pour toutes les questions qui te restent. »";
    } else if (gs.hasFlag('bivouac_silence_proche') && gs.hasFlag('avec_ombre')) {
      text += "Tu restes un instant contre l’épaule de Kaelen. Il te laisse finir ton gobelet avant de bouger. La dague qu’il avait écartée est toujours loin de vous.";
    } else if (gs.hasFlag('bivouac_solo_froid') || gs.hasFlag('bivouac_fen_seul')) {
      text += "Fen est encore contre ta gorge. Plus haut, des voix cherchent la sortie. Tu n'es pas obligée de les appeler.";
    } else if (gs.hasFlag('bivouac_garde_cadre') || gs.hasFlag('bivouac_retire_cadre')) {
      text += "Alistair a déjà prié, de l'autre côté de l'alcôve. Il ne traverse pas l'espace que tu as posé. « On peut remonter, » dit-il. Rien de plus.";
    } else if (gs.hasFlag('bivouac_accepte_cadre')) {
      text += "Alistair a laissé l'étincelle basse. Quand tu ouvres les yeux, il est encore à la même place. Il ne s'est pas rapproché pendant que tu dormais.";
    } else if (gs.hasFlag('avec_ombre')) {
      text += "Kaelen range ses dagues. « Bien dormi, Reine ? Non. Moi non plus. »";
    } else if (gs.hasFlag('avec_eclaireur')) {
      text += "Alistair a déjà prié. Quand il te voit éveillée, il détourne le regard une seconde, puis te laisse la gourde à portée de main.";
    } else {
      text += "Il faut repartir. Fen est déjà sur le passage.";
    }
    return text;
  },
  choices: [
    {
      key: 'A',
      text: "Se lever sans un mot.",
      condition: (gs) => !gs.hasFlag('voie_solo') && !gs.hasFlag('voie_solo_profonde'),
      next: 'ACTE1_05C_JALOUSIE_SOUTERRAINE'
    },
    {
      key: 'A_SOLO',
      condition: (gs) => gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde'),
      text: "Se lever. Continuer seule.",
      next: 'ACTE1_06_REMONTEE'
    }
  ]
},

'ACTE1_05C_JALOUSIE_SOUTERRAINE': {
  sceneNumber: '1.05C',
  chapter: 1,
  title: "Jalousie Souterraine",
  mood: 'tension',
  stage: { showElenya:true, framing:'medium' },
  image: gs => gs.hasFlag('avec_eclaireur') ? "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/bivouac-souterrain.webp" : "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@8bec85456cf6a5009a93c1379ab168e7f13691e3/game-v58/backgrounds/bivouac-sans-feu-pc.webp",
  imageMobile: gs => gs.hasFlag('avec_eclaireur') ? "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/bivouac-souterrain.webp" : "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@8bec85456cf6a5009a93c1379ab168e7f13691e3/game-v58/backgrounds/bivouac-sans-feu-mobile.webp",
  spriteLeft: (gs) => gs.hasFlag('avec_ombre')
    ? "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Sprites%20-%20Kaelen%20bg/SPRITE_KAELEN_DEBOUT_PROFIL_202606231737-removebg-preview.png"
    : "",
  spriteRight: (gs) => gs.hasFlag('avec_eclaireur')
    ? "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Sprite%20Alistair%20bg/SPRITE_ALISTAIR_DEBOUT_FACE_202606231808.png"
    : "",
  voice: "",
  getDynamicNarrative: (gs) => {
    let text = "La galerie reprend. Ce qui s’est passé dans l’alcôve reste entre vous — non dit, non effacé.\n\n";

    if (gs.hasFlag('avec_ombre')) {
      text += "Kaelen jette un regard vers l'entrée, là où l'autre aurait dû apparaître, puis vers toi.\n\n";
      text += "« Il n'est pas là. » Il souffle du nez. « Tant mieux. J'ai assez d'un prêtre dans la tête sans l'avoir dans le couloir. »\n\n";
      if (gs.hasFlag('bivouac_distance_O')) text += "Kaelen garde l’espace que tu as choisi pour te reposer. Il te parle du passage, sans revenir sur la halte.";
      else if (gs.hasFlag('bivouac_menace')) text += "Il reste au demi-pas d'hier. Il ne le réduit pas parce que l'autre est absent.";
      else if (gs.hasFlag('bivouac_nom')) text += "Il ne redemande pas pourquoi il reste. Le nom a suffi pour la nuit.";
      else text += "Il vérifie que tu marches à côté, puis te laisse choisir la distance.";
    } 
    else if (gs.hasFlag('avec_eclaireur')) {
      text += "Alistair se redresse en premier. Sa main approche de ton épaule, puis se retire.\n\n";
      text += "« Kaelen a dû prendre une autre route. » Il le dit trop vite. « Ou il a préféré ne pas nous attendre. »\n\n";
      if (gs.hasFlag('bivouac_garde_cadre') || gs.hasFlag('bivouac_retire_cadre')) text += "Il ne traverse pas l'espace que tu as posé dans l'alcôve, même maintenant que l'autre n'est pas là.";
      else if (gs.hasFlag('bivouac_accepte_cadre')) text += "Il reste du côté de l'étincelle. L'absence de Kaelen ne le fait pas avancer.";
      else text += "Il ramasse sa cape et attend que tu décides du pas.";
    }

    text += "\n\nLa galerie reprend. Personne ne rejoue la nuit.";
    return text;
  },
  choices: [
    // --- Voie Ombre ---
    {
      key: 'O1',
      condition: (gs) => gs.hasFlag('avec_ombre'),
      text: "Soutenir son regard. « Tu as l'air soulagé. »",
      response: "« Soulagé ? Non. » Kaelen jette un regard vers la galerie vide. « Disons que je parle mieux sans quelqu'un qui traduit mes phrases en prières. »",
      effects: [
        { type: "ADD_GAUGE", target: "lien_O", value: 1 },
        { type: "SET_FLAG", target: "jalousie_kaelen_vue" }
      ],
      next: 'ACTE1_06_REMONTEE'
    },
    {
      key: 'O2',
      condition: (gs) => gs.hasFlag('avec_ombre'),
      text: "« Son absence ne change rien. Remontons. »",
      response: "Kaelen hausse une épaule. « Si tu le dis. » Il passe devant, et ne revient pas sur le prêtre.",
      effects: [
        { type: "ADD_GAUGE", target: "affinite_ombre", value: 2 },
        { type: "SET_FLAG", target: "jalousie_ignoree" }
      ],
      next: 'ACTE1_06_REMONTEE'
    },

    // --- Voie Éclaireur ---
    {
      key: 'E1',
      condition: (gs) => gs.hasFlag('avec_eclaireur'),
      text: "« Tu guettes le couloir. Tu attends qu'il revienne ? »",
      response: "« Lui ? Non. » Il quitte le couloir des yeux et te regarde. « Ce que je ferai quand il sera là. Ça, c'est moins simple. »",
      effects: [
        { type: "ADD_GAUGE", target: "lien_E", value: 1 },
        { type: "SET_FLAG", target: "jalousie_alistair_vue" }
      ],
      next: 'ACTE1_06_REMONTEE'
    },
    {
      key: 'E2',
      condition: (gs) => gs.hasFlag('avec_eclaireur'),
      text: "« Peu importe où il est. On avance. »",
      response: "Alistair referme la bouche sur la suite. « D'accord. On avance. » Il ne regarde plus le couloir.",
      effects: [
        { type: "ADD_GAUGE", target: "affinite_eclaireur", value: 2 },
        { type: "SET_FLAG", target: "jalousie_ignoree" },
        { type: "SET_FLAG", target: "ton_douceur" }
      ],
      next: 'ACTE1_06_REMONTEE'
    },

    // --- Choix neutre (toujours disponible) ---
    {
      key: 'S',
      text: "Avancer vers la faille sans répondre.",
      response: "Personne n'insiste. Le pas que tu prends suffit.",
      effects: [
        { type: "ADD_GAUGE", target: "volonte", value: 1 },
        { type: "ADD_GAUGE", target: "presence_S", value: 1 },
        { type: "SET_FLAG", target: "jalousie_ignoree" }
      ],
      next: 'ACTE1_06_REMONTEE'
    }
  ]
},

'ACTE1_06_REMONTEE': {
  sceneNumber: 'ACTE1_06_REMONTEE',
  chapter: 1,
  title: "À Bout de Souffle",
  mood: 'action',
  stage: { framing:'wide' },
  image: (gs) => {
    if (gs.hasFlag('avec_ombre') && gs.hasFlag('avec_eclaireur')) return "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Sprites%20-%20Interactions%20bg/INTERACTION_TRIO_POLY_REINE_DOMINANTE_202606231806.png";
    if (gs.hasFlag('avec_ombre') && !gs.hasFlag('avec_eclaireur')) return "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@73b666c475f8b6ccb491d82d0bb3704779effd1f/game-v57/cinematics/lot-01/09-a-bout-de-souffle-kaelen.webp";
    if (gs.hasFlag('avec_eclaireur') && !gs.hasFlag('avec_ombre')) return "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@4d685f6b7dec62f52c74cd417b26844f690dbad7/game-v57/cinematics/lot-02/17-protection-alistair.webp";
    if (gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde')) return "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@4d685f6b7dec62f52c74cd417b26844f690dbad7/game-v57/cinematics/lot-02/18-route-solo-avancee.webp";
    return "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/galeries-basalte.webp";
  },
  imageMobile: (gs) => {
    if (gs.hasFlag('avec_ombre') && gs.hasFlag('avec_eclaireur')) return "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Sprites%20-%20Interactions%20bg/INTERACTION_TRIO_POLY_REINE_DOMINANTE_202606231806.png";
    return null;
  },
  sprite: (gs) => {
    if (gs.hasFlag('avec_ombre') || gs.hasFlag('avec_eclaireur')) return null;
    if (gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde')) return "Elenya";
    return null;
  },
  spriteLeft: (gs) => {
    if ((gs.hasFlag('avec_ombre') && !gs.hasFlag('avec_eclaireur')) || (gs.hasFlag('avec_eclaireur') && !gs.hasFlag('avec_ombre'))) return "Elenya";
    return null;
  },
  spriteRight: (gs) => {
    if (gs.hasFlag('avec_ombre') && !gs.hasFlag('avec_eclaireur')) return "Kaelen";
    if (gs.hasFlag('avec_eclaireur') && !gs.hasFlag('avec_ombre')) return "Alistair";
    return null;
  },
  voice: "",
  getDynamicNarrative: (gs) => {
    let text = "";

    // === Réactions au bivouac (nouveaux + anciens flags) ===
    if (gs.hasFlag('bivouac_menace')) {
      text += "Kaelen garde le demi-pas. Il ne le commente pas. Fen passe entre vous sans siffler.\n\n";
    } 
    else if (gs.hasFlag('bivouac_nom')) {
      text += "Il ne redit pas son nom. Quand la prise est mauvaise, il te le donne quand même, comme si la nuit avait déjà réglé ça.\n\n";
    } 
    else if (gs.hasFlag('bivouac_silence_proche')) {
      text += "Kaelen n'a pas remis la dague entre vous. Il grimpe à ta hauteur, pas devant.\n\n";
    } 
    else if (gs.hasFlag('bivouac_garde_main') || gs.hasFlag('bivouac_garde_cadre')) {
      text += "Alistair éclaire la paroi et s'arrête où tu t'arrêtes. Il ne propose plus la cape.\n\n";
    }
    else if (gs.hasFlag('bivouac_retire_main') || gs.hasFlag('bivouac_retire_cadre')) {
      text += "Alistair grimpe un peu à l'écart. Il répond si tu parles. Il ne revient pas sur l'alcôve.\n\n";
    }
    else if (gs.hasFlag('bivouac_contact_volontaire') || gs.hasFlag('bivouac_accepte_cadre')) {
      text += "Alistair reste à portée de voix, pas à portée de main. L'étincelle est basse, comme cette nuit.\n\n";
    } 
    else if (gs.hasFlag('bivouac_solo_froid') || gs.hasFlag('bivouac_medite')) {
      text += "Le froid t'a tenue. Tes prises sont à toi. Plus haut, des voix cherchent encore.\n\n";
    } 
    else if (gs.hasFlag('bivouac_fen_seul') || gs.hasFlag('bivouac_fen_calme')) {
      text += "Fen trouve les prises avant toi. Tu l'as gardé contre toi ; il te rend le chemin.\n\n";
    }
    if (gs.hasFlag('jalousie_kaelen_vue')) text += "Kaelen a encore le sourire de celui qui a parlé le premier. Il ne le pousse pas.\n\n";
    else if (gs.hasFlag('jalousie_ignoree') && gs.hasFlag('avec_ombre')) text += "Il ne revient pas sur l'absent. Tu as dit que ça ne changeait rien.\n\n";
    else if (gs.hasFlag('jalousie_alistair_vue')) text += "Alistair ne regarde plus le couloir vide. La question est restée entre vous.\n\n";

    // === Ascension ===
    text += "L'ascension est brutale. Le froid draine tes forces alors que tu gravis les parois de la faille. Fen se faufile à travers une conduite d'aération effondrée, indiquant la seule issue verticale vers la surface. L'ascension ne tolère aucun faux pas.\n\n";

    if (gs.hasFlag('avec_ombre') && gs.hasFlag('avec_eclaireur')) {
      text += "Une corniche se dérobe sous ton poids. Kaelen attrape ton poignet au même instant qu’Alistair plante son sceptre dans une fissure et ancre une ligne de lumière. L’un tire, l’autre stabilise. Aucun ne lâche.\n\n« Ne prends pas ça pour une victoire, » souffle Kaelen.\n\n« Je n’en prends aucune quand il s’agit de la garder en vie, » répond Alistair.";
    } else if (gs.hasFlag('avec_ombre')) {
      text += "Une corniche se dérobe. Kaelen te prend le poignet et te hisse d'un coup. Son souffle est court. « Pas aujourd'hui, » dit-il. Pas une menace. Juste le refus de te laisser tomber. Il ne lâche pas tout de suite.";
    } else if (gs.hasFlag('avec_eclaireur')) {
      text += "Tes doigts glissent. Alistair lâche son sceptre, te rattrape et te plaque contre la paroi pour bloquer la chute. Son cœur cogne contre ton épaule. Il desserre les bras dès que tes pieds trouvent une prise. « Pardon. Je ne voulais pas te tenir. Seulement t'empêcher de tomber. »";
    } else {
      text += "Seule face à la paroi, tu refuses la faiblesse. Tu infuses ta magie brute dans la pierre, vitrifiant l'humidité pour créer tes propres prises de givre acérées. Tes doigts saignent sous l'effort, mais ta progression ne dépend de personne.";
    }

    return text;
  },
  choices: [
    { 
      key: 'O', 
      condition: (gs) => gs.hasFlag('avec_ombre'), 
      text: "Laisser ton poignet dans sa main une seconde. « Tu m'as rattrapée. Ça ne te donne pas le reste. »",
      response: "Kaelen lâche. Pas tout de suite. « Noté. » Le sourire est mince. Il reprend l'ascension à ta hauteur.", 
      effects: [
        { type: "ADD_GAUGE", target: "lien_O", value: 1 }, 
        { type: "SET_FLAG", target: "remontee_defi" }
      ], 
      next: 'ACTE1_06C_CONVERGENCE' 
    },
    { 
      key: 'E', 
      condition: (gs) => gs.hasFlag('avec_eclaireur'), 
      text: "Poser ta paume sur son cœur, le temps qu'il ralentisse. « Je tiens. Toi aussi. »",
      response: "Alistair ferme les yeux une seconde. « Oui. » Il ramasse son sceptre seulement quand tu as retiré ta main.", 
      effects: [
        { type: "ADD_GAUGE", target: "lien_E", value: 1 }, 
        { type: "SET_FLAG", target: "remontee_rassure" },
        { type: "SET_FLAG", target: "ton_douceur" }
      ], 
      next: 'ACTE1_06C_CONVERGENCE' 
    },
    { 
      key: 'S', 
      condition: (gs) => gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde'), 
      text: "Ignorer la douleur de tes doigts et te hisser hors du puits.", 
      effects: [
        { type: "ADD_GAUGE", target: "volonte", value: 1 },
        { type: "ADD_GAUGE", target: "presence_S", value: 1 },
        { type: "SET_FLAG", target: "remontee_seule" }
      ], 
      next: 'ACTE1_06C_CONVERGENCE' 
    },
    { 
      key: 'C', 
      condition: (gs) => !gs.hasFlag('voie_solo') && !gs.hasFlag('voie_solo_profonde'), 
      text: "Te dégager dès que tes pieds touchent un sol stable.",
      response: "Il lâche tout de suite. Personne n'en fait une affaire. La sortie est encore au-dessus.", 
      effects: [
        { type: "SET_FLAG", target: "remontee_froid" }
      ], 
      next: 'ACTE1_06C_CONVERGENCE' 
    }
  ]
},

'ACTE1_06C_CONVERGENCE': {
  sceneNumber: '1.06C',
  chapter: 1,
  title: "La Jonction des Routes",
  mood: 'tension',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@4d685f6b7dec62f52c74cd417b26844f690dbad7/game-v57/cinematics/lot-02/11-jonction-des-routes.webp",
  spriteLeft: "",
  spriteRight: "",
  voice: "",
  
  getDynamicNarrative: (gs) => {
    let text = "Les galeries se rejoignent enfin. Une bifurcation, puis une seconde — et les pas qui manquaient reviennent dans l'écho.\n\n";

    if (gs.hasFlag('avec_ombre')) {
      text += "Alistair apparaît dans un tunnel latéral, couvert de poussière, debout. Il vérifie d'abord que tu respires. Kaelen vérifie d'abord qu'il n'est pas suivi.\n\n";
      if (gs.hasFlag('remontee_defi')) text += "Ton poignet garde la marque de ses doigts. Il baisse ta manche dessus avant qu'Alistair ne la voie.\n\n";
      else if (gs.hasFlag('remontee_froid')) text += "Kaelen marche un pas à l'écart. Il a lâché quand tu l'as demandé.\n\n";
    } else if (gs.hasFlag('avec_eclaireur')) {
      text += "Kaelen sort d'un passage de service, une entaille fraîche sur la manche. Il te compte d'un regard — entière, debout — puis regarde Alistair.\n\n";
      if (gs.hasFlag('remontee_rassure')) text += "Alistair a encore la main près de son cœur, là où tu l'as posée. Il la baisse.\n\n";
      else if (gs.hasFlag('remontee_froid')) text += "Alistair ne reprend pas ton bras. Il éclaire seulement la suite.\n\n";
    } else {
      text += "Kaelen et Alistair sortent de deux passages différents. Ils ont tenu sans toi. Tu as tenu sans eux. Fen est le seul à faire le va-et-vient.\n\n";
      if (gs.hasFlag('remontee_seule')) text += "Tes doigts sont écorchés. Aucun des deux ne les prend.\n\n";
    }
    text += "La sortie est au-dessus. Ce qui s'est dit en bas peut attendre la neige.";
    return text;
  },

  choices: [
    {
      key: 'V28_O',
      condition: (gs) => (gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde'))
        && !gs.hasFlag('avec_ombre'),
      text: "Regarder Kaelen. « Tu as survécu. Marche avec moi. Pas devant. »",
      response: "Kaelen souffle du nez. « Exigeant. » Il se place à ta hauteur. « Pas devant. Noté. »",
      effects: [
        { type: "ADD_GAUGE", target: "presence_O", value: 3 },
        { type: "ADD_GAUGE", target: "lien_O", value: 1 },
        { type: "JOIN_COMPANION", target: "O" },
        { type: "SET_FLAG", target: "convergence_acknowledged" }
      ],
      next: 'ACTE1_07_RETROUVAILLES'
    },
    {
      key: 'V28_E',
      condition: (gs) => (gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde'))
        && !gs.hasFlag('avec_eclaireur'),
      text: "Regarder Alistair. « Tu es blessé ? Reste près de moi. »",
      response: "« Rien qui exige une prière. » Il se rapproche pourtant d’un pas. « Je resterai. Mais parce que tu me l’as demandé — pas parce que j’ai décidé que tu avais besoin de moi. »",
      effects: [
        { type: "ADD_GAUGE", target: "presence_E", value: 3 },
        { type: "ADD_GAUGE", target: "lien_E", value: 1 },
        { type: "JOIN_COMPANION", target: "E" },
        { type: "SET_FLAG", target: "convergence_acknowledged" }
      ],
      next: 'ACTE1_07_RETROUVAILLES'
    },
    {
      key: 'V28_S',
      condition: (gs) => gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde'),
      text: "Les laisser là. Continuer seule. Fen suffit.",
      effects: [
        { type: "ADD_GAUGE", target: "presence_S", value: 2 },
        { type: "ADD_GAUGE", target: "volonte", value: 1 },
        { type: "SET_FLAG", target: "convergence_acknowledged" },
        { type: "SET_FLAG", target: "solo_convergence_choisie" }
      ],
      next: 'ACTE1_08B_BIVOUAC_LISIERE'
    },
    {
      key: 'V28_DOUBLE',
      condition: (gs) => (gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde'))
        && gs.getGauge('affinite_ombre') >= 2
        && gs.getGauge('affinite_eclaireur') >= 2,
      text: "« Vous deux. Assez près. Pas assez pour m'enfermer. On avance. »",
      effects: [
        { type: "ADD_GAUGE", target: "presence_O", value: 2 },
        { type: "ADD_GAUGE", target: "presence_E", value: 2 },
        { type: "ADD_GAUGE", target: "lien_O", value: 1 },
        { type: "ADD_GAUGE", target: "lien_E", value: 1 },
        { type: "SET_FLAG", target: "truce_initiale" },
        { type: "SET_FLAG", target: "relation_O_ouverte_acte1" },
        { type: "SET_FLAG", target: "relation_E_ouverte_acte1" },
        { type: "SET_FLAG", target: "convergence_acknowledged" }
      ],
      next: 'ACTE1_07_RETROUVAILLES'
    },
    {
      key: 'APPROCHER_O_DEPUIS_E',
      condition: (gs) => gs.hasFlag('avec_eclaireur') && !gs.hasFlag('avec_ombre'),
      text: "Rejoindre Kaelen. « Toi. Marche avec moi. Je veux t'entendre. »",
      effects: [
        { type: "ADD_GAUGE", target: "lien_O", value: 1 },
        { type: "ADD_GAUGE", target: "presence_O", value: 2 },
        { type: "ADD_GAUGE", target: "distance_O", value: -2 },
        { type: "SET_FLAG", target: "relation_O_ouverte_acte1" },
        { type: "SET_FLAG", target: "focus_romantique_O" },
        { type: "REMOVE_FLAG", target: "focus_romantique_E" },
        { type: "SET_FLAG", target: "convergence_acknowledged" }
      ],
      next: 'ACTE1_07K_RETROUVAILLES_KAELEN'
    },
    {
      key: 'APPROCHER_E_DEPUIS_O',
      condition: (gs) => gs.hasFlag('avec_ombre') && !gs.hasFlag('avec_eclaireur'),
      text: "Rejoindre Alistair. « Je veux t'entendre, toi. Pas en marchant derrière. »",
      effects: [
        { type: "ADD_GAUGE", target: "lien_E", value: 1 },
        { type: "ADD_GAUGE", target: "presence_E", value: 2 },
        { type: "ADD_GAUGE", target: "distance_E", value: -2 },
        { type: "SET_FLAG", target: "relation_E_ouverte_acte1" },
        { type: "SET_FLAG", target: "focus_romantique_E" },
        { type: "REMOVE_FLAG", target: "focus_romantique_O" },
        { type: "SET_FLAG", target: "convergence_acknowledged" }
      ],
      next: 'ACTE1_07E_RETROUVAILLES_ALISTAIR'
    },
    {
      key: 'NEXT',
      text: "Continuer vers la surface avec le groupe intact.",
      effects: [
        { type: "SET_FLAG", target: "convergence_acknowledged" },
        { type: "ADD_GAUGE", target: "instabilite", value: 1 }
      ],
      next: 'ACTE1_07_RETROUVAILLES'
    }
  ]
},

'ACTE1_07_RETROUVAILLES': {
  sceneNumber: 'ACTE1_07_RETROUVAILLES',
  chapter: 1,
  title: "La Triangulation",
  mood: 'tension',
  image: gs => triangulationV58(gs, false),
  imageMobile: gs => triangulationV58(gs, true),
  spriteLeft: "",
  spriteRight: "",
  voice: "",
  onEnter: (state) => {
    // V40: le compagnon de chute décrit une présence physique, jamais une préférence romantique.
    // Les retrouvailles rouvrent les deux relations sans pénaliser automatiquement l'absent.
    if (!state.flags.includes('relations_reouvertes_surface')) state.flags.push('relations_reouvertes_surface');
  },
  getDynamicNarrative: (gs) => {
    // --- VERSION NORMALE ---
    let text = "";

    if (gs.hasFlag('remontee_defi')) {
      text += "La marque de ses doigts est encore sur ton poignet. Il ne la cache plus.\n\n";
    } else if (gs.hasFlag('remontee_rassure')) {
      text += "Alistair a ramassé son sceptre seulement après ta main. Il marche à côté, pas devant.\n\n";
    } else if (gs.hasFlag('remontee_seule')) {
      text += "Tes doigts saignent encore. Tu es sortie sans qu'on te hisse.\n\n";
    } else if (gs.hasFlag('remontee_froid')) {
      text += "Dès le sol stable, tu t'es dégagée. Celui qui t'a retenue n'a pas repris ton bras.\n\n";
    }
    if (gs.hasFlag('jalousie_kaelen_vue')) {
      text += "Kaelen a encore le sourire de la galerie. Devant Alistair, il le range.\n\n";
    } else if (gs.hasFlag('jalousie_alistair_vue')) {
      text += "Alistair ne cherche plus le couloir. Il cherche Kaelen, maintenant qu'il est là, et ne dit rien.\n\n";
    }

    text += "Vous percez enfin la neige dure. La brume rampe sur les pavés morts des ruines. Au-dessus, l’étoile d’Essinay perce les nuages d’un œil froid et patient.\n\n";

    if ((gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde')) && gs.hasFlag('avec_ombre')) {
      text += "Tu as grimpé seule. Kaelen t'a rejointe dans la galerie ; il marche maintenant à ton côté. Alistair débouche d'un autre passage, regarde tes mains blessées et te demande si tu peux continuer.";
    } else if ((gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde')) && gs.hasFlag('avec_eclaireur')) {
      text += "Tu as grimpé seule. Alistair t'a rejointe dans la galerie ; il garde la distance que tu lui as demandée. Kaelen émerge d'un autre passage et voit tes mains blessées sans faire de commentaire.";
    } else if (gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde')) {
      text += "Alistair et Kaelen débouchent d'un escalier de service, de l'autre côté de la faille. Tu as grimpé seule ; ils ont pris une autre sortie. Ils s'arrêtent en te voyant sur tes pieds.\n\n";
      text += "« Tu peux marcher ? » demande Alistair. Kaelen regarde la paroi derrière toi, puis tes mains écorchées. Tu ne leur dois pas de récit de ta remontée.";
    } else if (gs.hasFlag('avec_ombre')) {
      text += "Alistair attend au bord du gouffre quand tu émerges avec Kaelen. Il voit d'abord Fen contre ton cou, puis les traces de la remontée sur vos mains.\n\n";
      text += "« Tu n'as rien ? » demande-t-il. Kaelen te laisse répondre. Il ne reprend pas ton poignet. Alistair voit la marque, et ne te presse pas de parler de ce qui s'est passé en bas.";
    } else if (gs.hasFlag('avec_eclaireur')) {
      text += "Kaelen a rejoint la surface par un autre passage. Il reste à quelques pas quand Alistair t'aide à franchir le dernier rebord.\n\n";
      text += "« Le prêtre a trouvé la sortie, » dit-il. Sa dague rentre dans son fourreau. Alistair ne répond pas : il regarde d'abord si tu tiens debout. Aucun des deux ne sait encore ce que tu as vu sous terre.";
    }

    return text;
  },
  choices: [

    { 
      key: 'A', 
      condition: (gs) => !(gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde')) || gs.hasFlag('avec_ombre') || gs.hasFlag('avec_eclaireur'), 
      text: "Garder la fresque pour toi. Ne rien leur dire pour l'instant.", 
      effects: [
        { type: "SET_FLAG", target: "secret_garde" },
        { type: "SET_FLAG", target: "triangulation_secret_garde" }
      ],
      next: 'ACTE1_07B_REACTION_TRIANGULATION' 
    },
    { 
      key: 'B', 
      condition: (gs) => !(gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde')) || gs.hasFlag('avec_ombre') || gs.hasFlag('avec_eclaireur'), 
      text: "« La pierre me montrait en train de figer un brasier. Qu'est-ce qu'on vous a raconté de cette nuit ? »", 
      effects: [
        { type: "SET_FLAG", target: "verite_eclatante" },
        { type: "SET_FLAG", target: "triangulation_verite_dite" }
      ],
      next: 'ACTE1_07B_REACTION_TRIANGULATION' 
    },
    { 
      key: 'S', 
      condition: (gs) => (gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde')) && !gs.hasFlag('avec_ombre') && !gs.hasFlag('avec_eclaireur'), 
      text: "Fendre le duo sans leur accorder un regard. « En route. Le temps presse. »", 
      effects: [
        { type: "ADD_GAUGE", target: "volonte", value: 1 },
        { type: "ADD_GAUGE", target: "presence_S", value: 1 },
        { type: "SET_FLAG", target: "solo_froid_surface" },
        { type: "SET_FLAG", target: "triangulation_coupe_court" }
      ],
      next: 'ACTE1_07B_REACTION_TRIANGULATION' 
    }
  ]
},

'ACTE1_07K_RETROUVAILLES_KAELEN': {
  sceneNumber: '1.07K',
  chapter: 1,
  title: "Ce qui n'était pas dans le gouffre",
  mood: 'romance',
  relationFocus: 'O',
  getDynamicNarrative: (gs) => {
    let text = "Kaelen ne te facilite pas la tâche. Il attend que tu aies quitté la lumière d'Alistair avant de ralentir, puis continue encore quelques pas comme s'il n'avait rien remarqué.\n\n";
    text += "« Tu voulais me parler. » Ce n'est pas une question.\n\n";
    text += "La neige craque sous vos bottes. Derrière vous, Alistair garde assez de distance pour prétendre qu'il ne surveille pas la conversation.\n\n";
    text += "Kaelen tourne enfin la tête. Son regard descend une seconde vers les traces de poussière claire laissées sur ton armure par les catacombes. « Je ne vais pas te demander ce qui s'est passé en bas. Si tu veux que je le sache, tu me le diras. »\n\n";
    text += "Il pourrait plaisanter. Il ne le fait pas tout de suite.\n\n";
    if (gs.hasFlag('bivouac_nom')) text += "« Tu as déjà mon nom. Le reste, c'est toi qui décides de le dire. »\n\n";
    if (gs.getGauge('lien_O') >= 2) text += "« Ne prends pas mon silence pour de l'indifférence. Je suis mauvais à attendre. »";
    else text += "« Alors ? Tu traverses un gouffre avec un prêtre et tu reviens vers la mauvaise fréquentation. Je devrais me sentir flatté. Je me sens surtout curieux. »";
    return text;
  },
  choices: [
    {
      key:'K_REVENUE',
      text:"« Je suis revenue vers toi. Pour l'instant, ça suffit. »",
      response: "Kaelen te fixe une seconde de trop. Le sourire se défait. « Pour l'instant, oui. » Il reprend ton rythme. « Ne t'habitue pas. Je préfère les raisons claires. »",
      effects:[
        {type:"ADD_GAUGE",target:"lien_O",value:2},
        {type:"ADD_GAUGE",target:"distance_O",value:-2},
        {type:"SET_FLAG",target:"kaelen_retrouvailles_choisi"},
        {type:"SET_FLAG",target:"focus_romantique_O"}
      ],
      next:'ACTE1_08_SECRET'
    },
    {
      key:'K_VERITE',
      text:"Lui raconter seulement ce que la fresque t'a fait ressentir. Pas ce qu'Alistair a fait.",
      response: "Kaelen n’interrompt pas une seule fois. Quand tu termines, il regarde devant lui plutôt que vers toi. « Donc ce n’était pas une image. C’était une blessure qui savait où frapper. » Sa mâchoire se serre. « D’accord. Je ne te demanderai pas ce que le prêtre a fait. Pas aujourd’hui. »",
      effects:[
        {type:"ADD_GAUGE",target:"lien_O",value:1},
        {type:"ADD_GAUGE",target:"memoire_kalthar",value:1},
        {type:"SET_FLAG",target:"kaelen_fresque_confiee"},
        {type:"SET_FLAG",target:"focus_romantique_O"}
      ],
      next:'ACTE1_08_SECRET'
    },
    {
      key:'K_PROVOQUE',
      text:"« Jaloux ? »",
      response: "« Jaloux ? » Il goûte le mot. « Ça supposerait que j'aie déjà une place. Je déteste juste ne pas savoir ce qu'on m'a caché dans le couloir. »",
      effects:[
        {type:"ADD_GAUGE",target:"affinite_ombre",value:2},
        {type:"SET_FLAG",target:"jalousie_kaelen_contenue"},
        {type:"SET_FLAG",target:"focus_romantique_O"}
      ],
      next:'ACTE1_08_SECRET'
    },
    {
      key:'K_DISTANCE',
      text:"« Je voulais vérifier que tu étais vivant. Rien de plus. »",
      response: "Le sourire de Kaelen revient, pas jusqu'aux yeux. « Dommage. J'avais une meilleure question. » Il recule d'un demi-pas. « Vivant. Vérification terminée. »",
      effects:[
        {type:"ADD_GAUGE",target:"volonte",value:1},
        {type:"ADD_GAUGE",target:"distance_O",value:1},
        {type:"SET_FLAG",target:"kaelen_retrouvailles_distance"}
      ],
      next:'ACTE1_08_SECRET'
    }
  ]
},

'ACTE1_07E_RETROUVAILLES_ALISTAIR': {
  sceneNumber: '1.07E',
  chapter: 1,
  title: "Hors de l'ombre",
  mood: 'romance',
  relationFocus: 'E',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@73b666c475f8b6ccb491d82d0bb3704779effd1f/game-v57/cinematics/lot-01/05-choix-route-eclaireur.webp",
  getDynamicNarrative: (gs) => {
    let text = "Alistair comprend que tu viens vers lui avant que tu prononces son nom. Son premier réflexe est de se redresser, comme devant un autel. Le second est plus humain : il desserre enfin la main autour de son sceptre.\n\n";
    text += "Kaelen poursuit sa marche sur le flanc du groupe. Il ne se retourne pas. Ce refus même de regarder suffit à dire qu'il a remarqué.\n\n";
    text += "« Vous n'avez aucune dette envers moi pour ce qui s'est passé en bas », dit Alistair. Puis il ferme les yeux une seconde. « Pardon. Tu n'as aucune dette envers moi. »\n\n";
    text += "Le tutoiement lui coûte davantage que le combat. Il attend, sans avancer la main.\n\n";
    if (gs.getGauge('lien_E') >= 2) text += "« J'essaie de comprendre comment rester près de toi sans décider à ta place de la distance qui nous sépare. »";
    else text += "« Si tu es venue demander des réponses, j'en ai moins qu'avant la chute. C'est peut-être la première chose vraie que je puisse t'offrir. »";
    return text;
  },
  choices: [
    {
      key:'E_RESTE',
      text:"Rester près d'Alistair. « Je veux t'entendre, toi. »",
      response: "Alistair baisse les yeux, puis acquiesce. « Alors écoute-moi. » Il range son sceptre et marche à ta hauteur. Il ne cherche pas à décider de ce que ce moment doit devenir.",
      effects:[
        {type:"ADD_GAUGE",target:"lien_E",value:1},
        {type:"ADD_GAUGE",target:"distance_E",value:-1},
        {type:"ADD_GAUGE",target:"volonte",value:1},
        {type:"SET_FLAG",target:"alistair_retrouvailles_choisi"},
      ],
      next:'ACTE1_08_SECRET'
    },
    {
      key:'E_DOUTE',
      text:"Lui demander ce que la fresque a brisé dans sa foi.",
      response: "Alistair garde le silence assez longtemps pour que tu croies qu’il va esquiver. « Elle n’a pas brisé ma foi. » Ses doigts quittent enfin son insigne. « Elle a brisé la certitude que ma foi et l’Ordre étaient la même chose. Je ne sais pas encore lequel des deux j’ai servi toute ma vie. »",
      effects:[
        {type:"ADD_GAUGE",target:"lien_E",value:1},
        {type:"ADD_GAUGE",target:"affinite_eclaireur",value:1},
        {type:"SET_FLAG",target:"alistair_doute_partage"},
        {type:"SET_FLAG",target:"focus_romantique_E"}
      ],
      next:'ACTE1_08_SECRET'
    },
    {
      key:'E_KAELEN',
      text:"Être honnête sur Kaelen. « Je ne sais pas encore ce que je pense de lui. Mais je préfère être honnête avec toi. »",
      response: "Alistair garde le silence un instant. Son regard va vers Kaelen, puis revient à toi. « D'accord. Tu n'as pas besoin d'avoir déjà une réponse. » Il baisse son sceptre. « Je préfère savoir que tu cherches encore la tienne plutôt que décider à ta place. »",
      effects:[
        {type:"ADD_GAUGE",target:"volonte",value:1},
        {type:"SET_FLAG",target:"alistair_sait_kaelen_compte"}
      ],
      next:'ACTE1_08_SECRET'
    },
    {
      key:'E_DISTANCE',
      text:"« Je voulais savoir si tu avais survécu. Rien de plus. »",
      response: "Alistair acquiesce sans avancer. « Alors tu as ta réponse. » Il ajoute, plus bas : « Merci d'avoir voulu la connaître. Je n'en ferai pas autre chose. »",
      effects:[
        {type:"ADD_GAUGE",target:"distance_E",value:1},
        {type:"SET_FLAG",target:"alistair_retrouvailles_distance"}
      ],
      next:'ACTE1_08_SECRET'
    }
  ]
},

'ACTE1_08B_BIVOUAC_LISIERE': {
  sceneNumber: '1.08B',
  chapter: 1,
  title: "La Lisière des Pins Noirs",
  mood: 'exploration',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/campement-nuit.webp",
  sprite: (gs) => companionPresentO(gs) === companionPresentE(gs) ? 'Elenya' : null,
  spriteLeft: (gs) => companionPresentO(gs) ? 'Kaelen'
    : companionPresentE(gs) ? 'Elenya' : null,
  spriteRight: (gs) => companionPresentE(gs) ? 'Alistair'
    : companionPresentO(gs) ? 'Elenya' : null,
  stage: { framing: 'wide' },
  onEnter: (state) => {
    if (!state || !Array.isArray(state.flags)) return;
    const f = state.flags;
    const hasO = f.includes('bivouac_feu_O');
    const hasE = f.includes('bivouac_feu_E');
    const firstO = f.includes('lisiere_premier_O');
    const firstE = f.includes('lisiere_premier_E');
    const orderKnown = f.includes('lisiere_ordre_O_puis_E') || f.includes('lisiere_ordre_E_puis_O');
    const directBoth = f.includes('lisiere_orientation_DEUX');

    if (!directBoth && !firstO && !firstE) {
      if (hasO && !hasE) f.push('lisiere_premier_O');
      else if (hasE && !hasO) f.push('lisiere_premier_E');
    }

    if (!directBoth && hasO && hasE && !orderKnown) {
      if (firstO) f.push('lisiere_ordre_O_puis_E');
      else if (firstE) f.push('lisiere_ordre_E_puis_O');
      if (!state.gauges) state.gauges = {};
      state.gauges.tension_triangle = Math.max(0, Number(state.gauges.tension_triangle || 0) + 1);
    }
  },
  getDynamicNarrative: (gs) => {
    // V51.5.0 — un retour du lac est distinct d'un rapprochement au feu.
    if (gs.hasFlag('lisiere_retour_lyra_K')) {
      let back = "Kaelen revient du lac avec toi. Il s'était arrêté aux pins ; il a fait le chemin du retour à ta hauteur. « On a vu la même chose. Ça me suffit pour cette nuit. »";
      if (gs.hasFlag('lisiere_romance_O_ouverte')) back += " Il reprend la place d'avant la musique. Il ne mélange pas les deux.";
      else if (gs.hasFlag('lisiere_tendresse_O')) back += " Il remet une bûche, le même geste qu'avant de partir.";
      return back + " Fen se roule près des braises et garde une oreille vers le nord-est.";
    }
    if (gs.hasFlag('lisiere_retour_lyra_E')) {
      let back = "Alistair revient du lac avec toi. Il s'était arrêté aux pins, insigne éteint, et il le reste. « Je préfère te dire que je ne sais pas. »";
      if (gs.hasFlag('lisiere_romance_E_ouverte')) back += " Sa main ne reprend pas la tienne. Elle reste ouverte, si tu la veux encore.";
      else if (gs.hasFlag('lisiere_tendresse_E') && gs.hasFlag('bivouac_feu_E_rapproche')) back += " La cape qu'il t'a reposée sur les épaules au feu est encore là.";
      else if (gs.hasFlag('lisiere_tendresse_E')) back += " La cape est encore sur tes épaules. Il ne la reprend pas.";
      return back + " Fen se couche près des braises, museau tourné vers le lac.";
    }
    if (gs.hasFlag('lisiere_retour_lyra_solo')) {
      const satK = gs.hasFlag('bivouac_feu_O') || gs.hasFlag('lisiere_orientation_O') || gs.hasFlag('lisiere_romance_O_ouverte');
      const satE = gs.hasFlag('bivouac_feu_E') || gs.hasFlag('lisiere_orientation_E') || gs.hasFlag('lisiere_romance_E_ouverte');
      const partyK = satK || gs.hasFlag('avec_ombre') || gs.hasFlag('relation_O_ouverte_acte1');
      const partyE = satE || gs.hasFlag('avec_eclaireur') || gs.hasFlag('relation_E_ouverte_acte1');
      if (!partyK && !partyE) return "Tu reviens du lac avec Fen. Le camp n'a pas bougé. Personne ne te demande ce que tu as vu.";
      const back = partyK && partyE
        ? "Kaelen et Alistair, qui s'étaient arrêtés aux pins, sont déjà au feu."
        : partyK
          ? "Kaelen, qui s'était arrêté aux pins, est déjà au feu."
          : "Alistair, qui s'était arrêté aux pins, est déjà au feu.";
      return "Tu reviens seule du lac. Fen reste contre ta botte. " + back + " Personne ne te demande ce que tu as vu.";
    }

    // Après « Cendres sous la Neige », la place autour du feu est déjà choisie.
    // Garder les choix de romance et de départ, sans raconter un second bivouac.
    if (gs.hasFlag('lien_marche1_vu') && !gs.hasFlag('lisiere_interaction_active')) {
      let t = "Le feu baisse. ";
      if (gs.hasFlag('marche1_deux')) t += "Tu restes entre Kaelen et Alistair. Fen dort près des braises.";
      else if (gs.hasFlag('marche1_proche_O') || gs.hasFlag('marche1_silence_O')) t += "Kaelen est toujours près de toi. Alistair garde l'autre côté du camp.";
      else if (gs.hasFlag('marche1_proche_E') || gs.hasFlag('marche1_contact_E')) t += "Alistair est toujours près de toi. Kaelen surveille les arbres.";
      else t += "Fen dort contre ta botte. Les autres te laissent tranquille.";
      if (!gs.hasFlag('lyra_prescience') && !gs.hasFlag('_lyra_echo_vu')
          && !gs.hasFlag('lisiere_romance_O_vu') && !gs.hasFlag('lisiere_romance_E_vu')
          && !gs.hasFlag('lisiere_trio_vu')) {
        t += "\n\nUne note de musique vient de la forêt. Fen relève la tête. Tu peux la suivre, ou rester au camp.";
      }
      return t;
    }

    // V51.7.6 — si "les deux" a été choisi dans Cendres sous la Neige,
    // l'entrée à la Lisière doit payer ce choix immédiatement, avant tout beat secondaire.
    if (gs.hasFlag('lisiere_orientation_DEUX') && !gs.hasFlag('lisiere_interaction_active')) {
      let t = "Vous faites halte sous les pins. Le feu prend doucement.\n\n";
      t += "Tu t'assieds entre Kaelen et Alistair. Kaelen pose ses dagues à côté de lui. Alistair étend sa cape derrière vous trois. Fen se couche près des braises.\n\n";
      if (!gs.hasFlag('lyra_prescience') && !gs.hasFlag('_lyra_echo_vu')) {
        t += "Une note de musique vient de la forêt. Fen relève la tête. Tu peux la suivre plus tard.";
      }
      return t;
    }

    // V50.5 — après un rapprochement, ne pas rejouer toute l'introduction.
    // La scène devient un beat court permettant d'approcher l'autre compagnon.
    if (gs.hasFlag('lisiere_interaction_active')) {
      let beat = "";
      const o = gs.hasFlag('bivouac_feu_O');
      const e = gs.hasFlag('bivouac_feu_E');
      if (o && e && gs.hasFlag('lisiere_orientation_DEUX')) {
        beat += "Tu restes entre eux. Kaelen range ses lames. Alistair garde sa cape près de vous. Personne ne te demande de choisir.";
      } else if (o && e && gs.hasFlag('lisiere_ordre_O_puis_E')) {
        beat += "Tu rejoins Alistair de l'autre côté du feu. Kaelen arrête d'aiguiser sa dague. « Je vois », dit-il. Alistair te fait une place sans commentaire.";
      } else if (o && e && gs.hasFlag('lisiere_ordre_E_puis_O')) {
        beat += "Tu rejoins Kaelen près des braises. Alistair cesse de prier un instant, puis reprend. Kaelen décale sa dague pour te faire une place.";
      } else if (o) {
        beat += "Tu restes près de Kaelen. Il te laisse choisir la distance.\n\n";
        if (companionPresentE(gs)) beat += "De l'autre côté du feu, Alistair voit votre rapprochement. Il ne dit rien.";
      } else if (e) {
        beat += "Tu restes près d'Alistair. Il pose sa cape entre vous et le froid.\n\n";
        if (companionPresentO(gs)) beat += "Kaelen voit votre rapprochement. Il reprend sa garde sans commentaire.";
      } else {
        beat += "Le feu craque entre vous. Rien n’est encore choisi.";
      }
      if (gs.hasFlag('lisiere_romance_O_ouverte')) beat += "\n\nKaelen a laissé sa dague au sol. Il n'a pas repris ta main. Il attend de voir si tu la lui redonnes.";
      else if (gs.hasFlag('lisiere_tendresse_O')) beat += "\n\nKaelen partage le feu sans réduire la place entre vous.";
      else if (gs.hasFlag('lisiere_retour_O')) beat += "\n\nKaelen t'a laissée revenir vers Fen. Il n'a pas suivi.";
      if (gs.hasFlag('lisiere_romance_E_ouverte')) beat += "\n\nAlistair a posé l'insigne près du feu. Il ne le reprend pas.";
      else if (gs.hasFlag('lisiere_tendresse_E')) beat += "\n\nLa cape d'Alistair est restée. Il ne demande pas ce qu'elle veut dire.";
      else if (gs.hasFlag('lisiere_retour_E')) beat += "\n\nAlistair t'a laissé la place près de Fen. Il veille de son côté.";
      if (gs.hasFlag('lisiere_trio_ouvert')) beat += "\n\nLes deux sont restés. Aucun n'a pris la main de l'autre.";
      else if (gs.hasFlag('lisiere_trio_tendresse')) beat += "\n\nVous êtes restés assis. Personne n'a demandé un nom à la soirée.";
      else if (gs.hasFlag('lisiere_trio_limite')) beat += "\n\nTu es revenue vers Fen. Ils ne t'ont pas suivie.";
      return beat;
    }

    let text = "Vous faites halte sous les pins. Le feu prend doucement malgré la neige. Fen s'installe près des braises.\n\n";
    
    if (gs.hasFlag('avec_ombre')) {
  if (gs.hasFlag('O_distant_1')) {
    if (gs.hasFlag('dague_kaelen_prise')) {
      text += "Kaelen s'assied de l'autre côté du feu. Il lui reste une dague. Il l'aiguise sans te parler.\n\n";
    } else {
      text += "Kaelen s'assied de l'autre côté du feu et aiguise une dague. Il ne te parle pas.\n\n";
    }
  } else {
    text += "Kaelen pose ses affaires près de toi. Il te regarde, puis surveille les arbres.\n\n";
  }
}
    
    if (gs.hasFlag('avec_eclaireur')) {
      if (gs.hasFlag('E_distant_1')) {
        text += "Alistair prie, le dos tourné. Il a tendu sa cape entre deux pins pour garder ses distances.\n\n";
      } else {
        text += "Alistair pose sa cape sur une pierre près du feu pour que tu puisses t'asseoir.\n\n";
      }
    }
    
    // Après les retrouvailles, compagnon principal != présence physique.
    // Le troisième membre du groupe reste visible même quand la scène focalise une relation.
    if (gs.hasFlag('relations_reouvertes_surface')) {
      if (gs.hasFlag('avec_ombre') && !gs.hasFlag('avec_eclaireur')) {
        text += "Alistair garde l’autre bord du feu. Assez loin pour respecter la conversation, assez près pour rappeler que le voyage se fait désormais à trois.\n\n";
      } else if (gs.hasFlag('avec_eclaireur') && !gs.hasFlag('avec_ombre')) {
        text += "Kaelen reste à la lisière de la clairière, officiellement occupé à surveiller les arbres. Le fait qu’il entende tout n’échappe à personne.\n\n";
      }
    }

    if (gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde')) {
      text += "Fen creuse dans la neige et en ressort une racine gelée qu'il ronge avec une concentration absurde. Kaelen et Alistair ont choisi chacun une extrémité du camp : présents, mais sans prétendre devenir tes guides.\n\n";
    }

    // V26.3.7 — écho rapprochement feu
    if (gs.hasFlag('bivouac_feu_O_rapproche')) {
      text += "Kaelen ne s'est pas éloigné depuis que tu as posé la main sur son épaule.\n\n";
    } else if (gs.hasFlag('bivouac_feu_O_proche')) {
      text += "Kaelen reste assis près de toi. Vous regardez le feu en silence.\n\n";
    }
    if (gs.hasFlag('bivouac_feu_E_rapproche')) {
      text += "Alistair a repris sa cape. Il s'assied près de toi.\n\n";
    } else if (gs.hasFlag('bivouac_feu_E_proche')) {
      text += "Tes doigts ont frôlé ceux d'Alistair. Il reste près de toi sans rien demander.\n\n";
    }
    

    if (gs.hasFlag('lisiere_ordre_O_puis_E')) {
      text += "Quand tu te rapproches ensuite d’Alistair, la pierre de Kaelen cesse de courir sur le fil de sa dague. Une seule seconde. Son sourire revient aussitôt, plus mince. « Je vois. » Rien de plus — mais il a parfaitement compris.\n\n";
    } else if (gs.hasFlag('lisiere_ordre_E_puis_O')) {
      text += "Quand tu rejoins ensuite Kaelen, Alistair perd un mot au milieu de sa prière. Il le reprend sans commentaire, trop calmement. Sa cape reste pourtant près du feu au lieu de retourner sur ses épaules.\n\n";
    }

    if (gs.hasFlag('lyra_prescience') || gs.hasFlag('_lyra_echo_vu')) {
      text += "La musique s'est tue depuis votre retour du lac. Fen reste près du feu.\n\n";
      if (gs.hasFlag('lyra_confie_K')) {
        text += "Kaelen n’a pas commenté la silhouette. Il a seulement resserré sa garde un instant — assez pour prouver qu’il avait vu, pas assez pour en faire un rapport.\n\n";
      } else if (gs.hasFlag('lyra_confie_E')) {
        text += "Alistair jette encore un regard vers le nord-est, comme s’il cherchait une bénédiction ou un exorcisme. Tu lui as posé la question ; il n’a pas eu de réponse nette à te donner.\n\n";
      }
    } else {
      text += "Une note de musique vient de la forêt. Fen relève la tête. Tu peux la suivre, ou rester au camp.";
      
    }
    
    return text;
  },
  choices: [
  // --- Rapprochement Kaelen ---
  {
    key: 'O_FEU',
    condition: (gs) => companionPresentO(gs) && gs.hasFlag('O_distant_1') && !gs.hasFlag('bivouac_feu_O') && !gs.hasFlag('lisiere_orientation_O') && !gs.hasFlag('lisiere_orientation_E') && !gs.hasFlag('lisiere_orientation_DEUX') && !gs.hasFlag('lisiere_orientation_SOLO'),
    text: "Rejoindre Kaelen et poser une main sur son épaule.",
    effects: [
      { type: "ADD_GAUGE", target: "lien_O", value: 1 },
      { type: "REMOVE_FLAG", target: "O_distant_1" },
      { type: "SET_FLAG", target: "bivouac_feu_O" },
      { type: "SET_FLAG", target: "bivouac_feu_O_rapproche" },
      { type: "SET_FLAG", target: "lisiere_orientation_O" },
      { type: "SET_FLAG", target: "lisiere_interaction_active" }
    ],
    next: 'ACTE1_08B_BIVOUAC_LISIERE'
  },
  {
    key: 'O_FEU_OK',
    condition: (gs) => companionPresentO(gs) && !gs.hasFlag('O_distant_1') && !gs.hasFlag('bivouac_feu_O') && !gs.hasFlag('lisiere_orientation_O') && !gs.hasFlag('lisiere_orientation_E') && !gs.hasFlag('lisiere_orientation_DEUX') && !gs.hasFlag('lisiere_orientation_SOLO'),
    text: "Se rapprocher de Kaelen. T'asseoir près de lui et partager le silence du feu.",
    effects: [
      { type: "ADD_GAUGE", target: "lien_O", value: 1 },
      { type: "SET_FLAG", target: "bivouac_feu_O" },
      { type: "SET_FLAG", target: "bivouac_feu_O_proche" },
      { type: "SET_FLAG", target: "lisiere_orientation_O" },
      { type: "SET_FLAG", target: "lisiere_interaction_active" }
    ],
    next: 'ACTE1_08B_BIVOUAC_LISIERE'
  },

  // --- Rapprochement Alistair ---
  {
    key: 'E_FEU',
    condition: (gs) => companionPresentE(gs) && gs.hasFlag('E_distant_1') && !gs.hasFlag('bivouac_feu_E') && !gs.hasFlag('lisiere_orientation_O') && !gs.hasFlag('lisiere_orientation_E') && !gs.hasFlag('lisiere_orientation_DEUX') && !gs.hasFlag('lisiere_orientation_SOLO'),
    text: "Rejoindre Alistair et lui rendre sa cape. « Assieds-toi avec moi. »",
    effects: [
      { type: "ADD_GAUGE", target: "lien_E", value: 1 },
      { type: "REMOVE_FLAG", target: "E_distant_1" },
      { type: "SET_FLAG", target: "bivouac_feu_E" },
      { type: "SET_FLAG", target: "bivouac_feu_E_rapproche" },
      { type: "SET_FLAG", target: "lisiere_orientation_E" },
      { type: "SET_FLAG", target: "lisiere_interaction_active" }
    ],
    next: 'ACTE1_08B_BIVOUAC_LISIERE'
  },
  {
    key: 'E_FEU_OK',
    condition: (gs) => companionPresentE(gs) && !gs.hasFlag('E_distant_1') && !gs.hasFlag('bivouac_feu_E') && !gs.hasFlag('lisiere_orientation_O') && !gs.hasFlag('lisiere_orientation_E') && !gs.hasFlag('lisiere_orientation_DEUX') && !gs.hasFlag('lisiere_orientation_SOLO'),
    text: "Se rapprocher d'Alistair. Accepter sa cape et laisser tes doigts effleurer les siens en t'asseyant.",
    effects: [
      { type: "ADD_GAUGE", target: "lien_E", value: 1 },
      { type: "SET_FLAG", target: "bivouac_feu_E" },
      { type: "SET_FLAG", target: "bivouac_feu_E_proche" },
      { type: "SET_FLAG", target: "lisiere_orientation_E" },
      { type: "SET_FLAG", target: "lisiere_interaction_active" }
    ],
    next: 'ACTE1_08B_BIVOUAC_LISIERE'
  },


  {
    key: 'OE_FEU',
    condition: (gs) => companionPresentO(gs) && companionPresentE(gs)
      && !gs.hasFlag('lisiere_orientation_O')
      && !gs.hasFlag('lisiere_orientation_E')
      && !gs.hasFlag('lisiere_orientation_DEUX')
      && !gs.hasFlag('lisiere_orientation_SOLO'),
    text: "T'asseoir entre Kaelen et Alistair.",
    response: "Kaelen écarte sa dague pour te faire une place, pas pour marquer un territoire. Alistair étend sa cape derrière vous trois, pas sur toi. Fen se couche près du feu. Personne ne demande ce que cette place veut dire.",
    effects: [
      { type: "ADD_GAUGE", target: "lien_O", value: 1 },
      { type: "ADD_GAUGE", target: "lien_E", value: 1 },
      { type: "SET_FLAG", target: "bivouac_feu_O" },
      { type: "SET_FLAG", target: "bivouac_feu_E" },
      { type: "SET_FLAG", target: "lisiere_orientation_DEUX" },
      { type: "SET_FLAG", target: "lisiere_interaction_active" }
    ],
    next: 'ACTE1_08B_BIVOUAC_LISIERE'
  },

  {
    key: 'OE_FEU_LIEN',
    condition: (gs) => companionPresentO(gs) && companionPresentE(gs)
      && gs.hasFlag('lisiere_orientation_DEUX')
      && !gs.hasFlag('lisiere_trio_vu'),
    text: "Rester un moment avec Kaelen et Alistair.",
    intent:'confiance',target:'Kaelen & Alistair',importance:'major',
    next: 'LIEN_LISIERE_DEUX'
  },

  // --- V51.3 : après l'approche, le joueur peut explicitement initier la romance ---
  {
    key: 'O_FEU_ROMANCE',
    condition: (gs) => companionPresentO(gs)
      && gs.hasFlag('bivouac_feu_O')
      && gs.hasFlag('lisiere_orientation_O')
      && !gs.hasFlag('lisiere_romance_O_vu'),
    text: "Rester avec Kaelen. Lui dire si c'est le feu, ou lui.",
    next: 'LIEN_LISIERE_KAELEN'
  },
  {
    key: 'E_FEU_ROMANCE',
    condition: (gs) => companionPresentE(gs)
      && gs.hasFlag('bivouac_feu_E')
      && gs.hasFlag('lisiere_orientation_E')
      && !gs.hasFlag('lisiere_romance_E_vu'),
    text: "Rester avec Alistair. Lui dire si c'est la cape, ou lui.",
    next: 'LIEN_LISIERE_ALISTAIR'
  },


  // --- V28 : Solo habité / traces ---
  {
    key: 'V28_O_TRACE',
    condition: (gs) => (gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde'))
      && (gs.getGauge('presence_O') >= 3 || gs.getGauge('affinite_ombre') >= 4)
      && !gs.hasFlag('v28_trace_O_vu'),
    text: "Kaelen est à l'écart. T'asseoir près de lui sans demander la permission.",
    effects: [
      { type: "ADD_GAUGE", target: "presence_O", value: 2 },
      { type: "ADD_GAUGE", target: "lien_O", value: 1 },
      { type: "SET_FLAG", target: "v28_trace_O_vu" }
    ],
    next: 'V28_SOLO_KAELEN'
  },
  {
    key: 'V28_E_TRACE',
    condition: (gs) => (gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde'))
      && (gs.getGauge('presence_E') >= 3 || gs.getGauge('affinite_eclaireur') >= 4)
      && !gs.hasFlag('v28_trace_E_vu'),
    text: "Rester dans la lumière d'Alistair. Pas près de lui. Juste assez pour être vue.",
    effects: [
      { type: "ADD_GAUGE", target: "presence_E", value: 2 },
      { type: "ADD_GAUGE", target: "lien_E", value: 1 },
      { type: "SET_FLAG", target: "v28_trace_E_vu" }
    ],
    next: 'V28_SOLO_ALISTAIR'
  },

  // --- Solo ---
  {
    key: 'S_MEDITE',
    condition: (gs) => (gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde')) && !gs.hasFlag('bivouac_solo_lisiere'),
    text: "Fermer les yeux et laisser le froid du sol monter en toi.",
    effects: [
      { type: "ADD_GAUGE", target: "instabilite", value: 2 },
      { type: "SET_FLAG", target: "bivouac_solo_lisiere" }
    ],
    next: 'ACTE1_08B_BIVOUAC_LISIERE'
  },

  // --- Suivre le chant (une seule fois) ---
  {
    key: 'SUIVRE_CHANT',
    condition: (gs) => !gs.hasFlag('lyra_prescience') && !gs.hasFlag('_lyra_echo_vu'),
    text: "Suivre la musique. Fen a déjà la tête tournée vers le lac.",
    effects: [
      { type: "ADD_GAUGE", target: "instabilite", value: 3 },
      { type: "SET_FLAG", target: "lyra_prescience" },
      { type: "SET_FLAG", target: "_lyra_echo_vu" },
      { type: "REMOVE_FLAG", target: "lisiere_interaction_active" },
      { type: "SET_FLAG", target: "lisiere_exploration_active" }
    ],
    next: 'ACTE1_08B_LYRA_ECHO'
  },

  // --- Sortie ---
  {
    key: 'REPARTIR',
    condition: (gs) =>
      gs.hasFlag('bivouac_feu_O') ||
      gs.hasFlag('bivouac_feu_E') ||
      gs.hasFlag('bivouac_solo_lisiere') ||
      gs.hasFlag('lyra_prescience'),
    text: "Dormir une heure et reprendre la route avant l’aube.",
    effects: [
      { type: "SET_FLAG", target: "bivouac_lisiere_fini" },
      { type: "REMOVE_FLAG", target: "lisiere_interaction_active" },
      { type: "REMOVE_FLAG", target: "lisiere_exploration_active" },
      { type: "REMOVE_FLAG", target: "lisiere_retour_lyra_K" },
      { type: "REMOVE_FLAG", target: "lisiere_retour_lyra_E" },
      { type: "REMOVE_FLAG", target: "lisiere_retour_lyra_solo" }
    ],
    next: 'ACTE2_01_RENCONTRE_SILAS_1'
  }
]
},


  // V51.3 — opportunités romantiques explicites après un rapprochement physique.
  // Approcher quelqu'un n'enferme jamais la route : le joueur choisit ensuite
  // s'il veut faire monter la tension romantique ou rester dans la proximité simple.

'ACTE1_07B_REACTION_TRIANGULATION': {
  sceneNumber:'1.07B',
  chapter:1,
  title:"Ce qui reste entre vous",
  mood:'tension',
  image:"https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Acte%201/Surface_brumeuse_enneig%C3%A9e_202606191344.jpeg",
  spriteLeft:(gs)=>companionPresentO(gs)
    ? "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/bg/URL_SPRITE_KAELEN_PERSILFLANT.png"
    : "",
  spriteRight:(gs)=>companionPresentE(gs)
    ? "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/bg/URL_SPRITE_ALISTAIR_PROTECTEUR.png"
    : "",
  getDynamicNarrative:(gs)=>{
    if(gs.hasFlag('triangulation_secret_garde')){
      const solitudeSousTerre=gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde');
      let t=solitudeSousTerre
        ? "Tu gardes la fresque pour toi. Tu l'as découverte seule sous terre.\n\n"
        : "Tu gardes la fresque pour toi — et pour celui qui était là lorsqu’elle s’est ouverte.\n\n";
      if(solitudeSousTerre && gs.hasFlag('avec_ombre')){
        t+="Kaelen remarque que tu ne parleras pas de la fresque. Il s'arrête à ton côté. Alistair attend une réponse, puis range son insigne. Tu n'as rien promis à l'un ni à l'autre.";
      } else if(solitudeSousTerre && gs.hasFlag('avec_eclaireur')){
        t+="Alistair attend près de toi, sans te presser de raconter ce que tu as vu. Kaelen comprend ton silence et range sa dague. Aucun des deux n'était présent devant la fresque.";
      } else if(gs.hasFlag('avec_ombre')){
        t+="Ton regard rencontre celui de Kaelen. Il ne sourit pas. Sa dague cesse simplement de tourner entre ses doigts. Alistair voit l’échange et comprend qu’une porte vient de se fermer devant lui, sans savoir ce qu’elle contient.\n\n";t+="« Très bien, » dit-il après un silence. Son insigne reste dans sa paume au lieu de se lever entre vous.";
      } else if(gs.hasFlag('avec_eclaireur')){
        t+="Alistair reçoit ton regard sans triomphe. Ses doigts se referment une seconde sur son insigne, comme pour retenir la réponse qui lui vient. Kaelen suit l’échange et son amusement disparaît juste assez pour montrer qu’il a compris qu’il existe un secret dont il est exclu.\n\n";
        t+="« Charmant, » souffle-t-il. Il range pourtant sa dague au lieu d’en faire une menace.";
      } else {
        t+="Kaelen et Alistair comprennent au même instant que tu ne leur donneras rien de plus. Aucun des deux n’aime la limite. Aucun ne la franchit.";
      }
      return t;
    }
    if(gs.hasFlag('triangulation_verite_dite')){
      let t="Tu leur décris la fresque : ton visage, le brasier, le gel qui recouvre les remparts. La scène ressemble à un geste pour arrêter les flammes. Tu ne peux pas encore raconter ce qui l'a précédé ni ce qui a suivi.\n\n";
      t+="Alistair regarde son insigne. « On m'a appris que le gel avait tout détruit. Je n'ai jamais vu cette image. » Il ne conteste pas ce que tu as vu ; il cherche comment le vérifier.\n\n";
      t+="Kaelen désigne l'entrée de la faille. « Alors quelqu'un a laissé une autre histoire sous nos pieds. » Il attend ta réponse avant de reprendre la route.";
      return t;
    }
    if(gs.hasFlag('triangulation_coupe_court')){
      return "Tu passes entre eux sans offrir de verdict. « En route. Le temps presse. »\n\nKaelen ouvre la bouche, puis la referme en voyant que tu ne ralentis pas. Alistair fait un pas pour te suivre et range son insigne sans prière. Leur rivalité reste derrière toi quelques secondes, forcée de choisir entre continuer à se mesurer et ne pas te perdre.\n\nIls te suivent.";
    }
    return "La brume glisse entre les pierres. Ce que tu viens de choisir a déplacé quelque chose entre vous trois, même si personne ne lui donne encore de nom.";
  },
  choices:[
    {
      key:'CONTINUE',
      text:"Reprendre la route.",
      effects:[{type:'SET_FLAG',target:'triangulation_payoff_vu'}],
      next:'ACTE1_08_SECRET'
    }
  ]
},

'ACTE1_08_SECRET': {
  sceneNumber: 'ACTE1_08_SECRET',
  chapter: 1,
  title: "Le Poids des Silences",
  mood: 'exploration',
  image: (gs) => gs.hasFlag('avec_ombre') && gs.hasFlag('avec_eclaireur')
    ? "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@4d685f6b7dec62f52c74cd417b26844f690dbad7/game-v57/cinematics/lot-02/15-halte-groupe-neige.webp"
    : "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Acte%201/Chemin_forestier_202606191344.jpeg",
  spriteLeft: (gs) => gs.hasFlag('avec_ombre') && gs.hasFlag('avec_eclaireur') ? "" : "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/bg/URL_SPRITE_KAELEN_RETRAIT.png",
  spriteRight: (gs) => gs.hasFlag('avec_ombre') && gs.hasFlag('avec_eclaireur') ? "" : "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/bg/URL_SPRITE_ALISTAIR_MARCHE.png",
  voice: "",
  getDynamicNarrative: (gs) => {
    let text = "La neige devient de la boue gelée. L'air sent le sapin et le fer.\n\n";
    if (gs.hasFlag('kaelen_retrouvailles_choisi')) text += "Kaelen marche à ton rythme depuis la surface. Il ne redemande pas pourquoi tu es revenue.\n\n";
    else if (gs.hasFlag('kaelen_fresque_confiee')) text += "Kaelen ne répète pas ce que tu lui as dit de la pierre. Il regarde seulement les troncs, comme s'il cherchait une autre fresque.\n\n";
    else if (gs.hasFlag('kaelen_retrouvailles_distance')) text += "Kaelen a repris le demi-pas. Il ne revient pas sur la vérification.\n\n";
    else if (gs.hasFlag('alistair_retrouvailles_choisi')) text += "Alistair marche à côté, pas devant. Le sceptre est à sa ceinture.\n\n";
    else if (gs.hasFlag('alistair_doute_partage')) text += "Alistair n'a pas rouvert la question de l'Ordre. Il choisit le passage quand tu le lui demandes, pas avant.\n\n";
    else if (gs.hasFlag('alistair_retrouvailles_distance')) text += "Alistair reste en vue. Il ne rapproche pas le pas.\n\n";

    if (gs.hasFlag('secret_garde') && gs.hasFlag('avec_ombre')) {
      text += "Alistair ouvre la marche. Il a vu ton échange avec Kaelen et ne connaît pas encore la fresque. Quand le sentier se sépare, il te demande simplement quel passage tu préfères.\n\n";
      text += (gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde'))
        ? "Kaelen reste près de toi sans te demander ce que tu as vu seule dans les catacombes."
        : "Kaelen reste près de toi sans raconter à ta place ce que vous avez vu.";
    } 
    else if (gs.hasFlag('secret_garde') && gs.hasFlag('avec_eclaireur')) {
      text += "Kaelen surveille les flancs du sentier. Il a remarqué le regard échangé avec Alistair, sans savoir ce qu'il contient.\n\n";
      text += (gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde'))
        ? "Alistair te laisse choisir quand, et si, tu voudras lui parler de ce que tu as vu seule."
        : "Alistair te laisse choisir quand, et si, tu voudras en parler.";
    } 
    else if (gs.hasFlag('verite_eclatante')) {
      text += "Alistair marche en tête, son insigne rangé. À la prochaine halte, il voudra comparer ta description de la fresque à ce qu'enseigne l'Ordre.\n\n";
      text += "Kaelen ferme la marche. Il demande où se trouve l'entrée des catacombes : une autre preuve pourrait encore s'y cacher.";
    } 
    else {
      text += "Tu imposes le rythme. Fen est blotti sous ta capuche. Kaelen et Alistair suivent à quelques pas, sans interrompre ton silence.";
    }

    return text;
  },
  choices: [
    { key: 'A', text: "« Les ruines appartiennent aux morts. Regardons devant. » Adopter un ton coupant.", effects: [{ type: "SET_FLAG", target: "ton_sarcasme" }], next: 'LIEN_MARCHE_1' },
{ key: 'B', text: "Laisser un soupir s'échapper. « L'histoire est gravée dans la pierre. Notre futur reste à écrire. »", effects: [{ type: "SET_FLAG", target: "ton_douceur" }], next: 'LIEN_MARCHE_1' }
  ]
},

'ACTE1_08B_LYRA_ECHO': {
  sceneNumber: '1.08B.L',
  chapter: 1,
  title: "L'Écho Opalin",
  mood: 'tension',
  stage: { hideElenya: true, mode: 'environment' },
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Acte%201/Lac_gelé_silhouette_202606191344.jpeg",
  getDynamicNarrative: (gs) => {
    let text = "";
    const satK = gs.hasFlag('bivouac_feu_O') || gs.hasFlag('lisiere_orientation_O') || gs.hasFlag('lisiere_romance_O_ouverte');
    const satE = gs.hasFlag('bivouac_feu_E') || gs.hasFlag('lisiere_orientation_E') || gs.hasFlag('lisiere_romance_E_ouverte');
    const bothSat = gs.hasFlag('lisiere_orientation_DEUX') || (satK && satE);
    const partyK = satK || gs.hasFlag('avec_ombre') || gs.hasFlag('relation_O_ouverte_acte1');
    const partyE = satE || gs.hasFlag('avec_eclaireur') || gs.hasFlag('relation_E_ouverte_acte1');
    if (bothSat) text += "Tu te lèves d'entre eux. Kaelen et Alistair se lèvent avec toi et s'arrêtent à la lisière des pins. Fen continue jusqu'au lac.\n\n";
    else if (satK) text += "Tu quittes la place près de Kaelen. Il se lève en même temps et s'arrête aux pins. Il n'a pas demandé s'il pouvait venir.\n\n";
    else if (satE) text += "Tu quittes la place près d'Alistair. Il te suit jusqu'aux pins et s'arrête. L'insigne reste éteint.\n\n";
    else if (partyK && partyE) text += "Tu pars vers la musique. Kaelen et Alistair restent au feu le temps d'un regard, puis viennent jusqu'aux pins. Ils s'arrêtent là. Fen va jusqu'au lac.\n\n";
    else if (partyK) text += "Tu quittes le camp. Kaelen te suit jusqu'aux pins et s'arrête. Fen va jusqu'au lac.\n\n";
    else if (partyE) text += "Tu quittes le camp. Alistair te suit jusqu'aux pins et s'arrête, insigne éteint.\n\n";
    else text += "Tu pars avec Fen. Le camp reste derrière les troncs.\n\n";
    text += "L'eau dort sous une carapace de glace noire. La note s'est tue.\n\n";
    text += "Au centre du lac, une silhouette féminine est agenouillée, le dos tourné, les doigts enfoncés dans l'eau gelée jusqu'aux poignets. Elle ne porte que des voiles opalins qui ne semblent ni mouillés ni givrés. Ses cheveux flottent sans vent.\n\n";
    text += "Fen gronde dans ton col. Pas un cri de proie. Un son bas, comme s'il la reconnaissait et refusait de le dire.\n\n";
    text += "La silhouette se tourne. Tu ne vois pas son visage. La lune se brise sur ses yeux, des prunelles sans pupille.\n\n";
    
    
      text += "Elle ouvre la bouche. Pas de son --- seulement une vibration qui fait vibrer la glace sous tes bottes, une question posée dans une langue que tes os comprennent mais que ta mémoire a oubliée.";
    
    
    return text;
  },
  choices: [
    {
      key: 'A',
      text: "Reculer sans un mot. Certaines visions ne se partagent pas.",
      intent: 'memoire',
      target: 'Elenya',
      importance: 'significant',
      response: (gs) => {
        const satK = gs.hasFlag('bivouac_feu_O') || gs.hasFlag('lisiere_orientation_O') || gs.hasFlag('lisiere_romance_O_ouverte');
        const satE = gs.hasFlag('bivouac_feu_E') || gs.hasFlag('lisiere_orientation_E') || gs.hasFlag('lisiere_romance_E_ouverte');
        const partyK = satK || gs.hasFlag('avec_ombre') || gs.hasFlag('relation_O_ouverte_acte1');
        const partyE = satE || gs.hasFlag('avec_eclaireur') || gs.hasFlag('relation_E_ouverte_acte1');
        if (!partyK && !partyE) return "Tu recules jusqu'aux pins sans quitter le lac des yeux. Fen te suit. Le camp n'a pas bougé. Personne ne te demande de parler.";
        const who = partyK && partyE ? "Kaelen et Alistair sont déjà assis" : partyK ? "Kaelen est déjà assis" : "Alistair est déjà assis";
        return "Tu recules jusqu'aux pins sans quitter le lac des yeux. Tu ne prends aucune main. Au feu, " + who + ". Personne ne te demande de parler. Fen reste tourné vers le nord-est.";
      },
      effects: [
        { type: "ADD_GAUGE", target: "instabilite", value: 3 },
        { type: "SET_FLAG", target: "lyra_prescience" },
        { type: "REMOVE_FLAG", target: "lisiere_interaction_active" },
        { type: "REMOVE_FLAG", target: "lisiere_exploration_active" },
        { type: "SET_FLAG", target: "lisiere_retour_lyra_solo" }
      ],
      next: 'ACTE1_08B_BIVOUAC_LISIERE'
    },
    {
      key: 'B',
      condition: (gs) => gs.hasFlag('avec_ombre') || gs.hasFlag('relation_O_ouverte_acte1'),
      text: "Serrer la garde de Kaelen. « Tu l'as vue aussi ? »",
      intent: 'confiance',
      target: 'Kaelen',
      importance: 'significant',
      feedback: "Kaelen comprend que tu lui demandes un témoin, pas une explication.",
      response: "Kaelen fixe le centre du lac longtemps après que la silhouette s’est dissoute. « Oui. » Sa réponse tombe sans ironie. « Je l’ai vue. Et non, je n’aime pas la façon dont elle nous regardait. » Il ne prétend pas savoir davantage. Sur le chemin du feu, il reste à portée de ta main.",
      effects: [
        { type: "ADD_GAUGE", target: "lien_O", value: 1 },
        { type: "SET_FLAG", target: "lyra_prescience" },
        { type: "SET_FLAG", target: "lyra_confie_K" },
        { type: "REMOVE_FLAG", target: "lisiere_interaction_active" },
        { type: "REMOVE_FLAG", target: "lisiere_exploration_active" },
        { type: "SET_FLAG", target: "lisiere_retour_lyra_K" }
      ],
      next: 'ACTE1_08B_BIVOUAC_LISIERE'
    },
    {
      key: 'C',
      condition: (gs) => gs.hasFlag('avec_eclaireur') || gs.hasFlag('relation_E_ouverte_acte1'),
      text: "Tendre la main vers Alistair. « Dis-moi que tu vois ce que je vois. »",
      intent: 'confiance',
      target: 'Alistair',
      importance: 'significant',
      feedback: "Alistair accepte de ne pas avoir de réponse sacrée à te donner.",
      response: "Alistair ne prend pas ta main tout de suite. Il regarde d’abord le lac. « Je la vois. » Sa lumière vacille. « Mais je ne sais pas ce qu’elle est. » Puis ses doigts trouvent les tiens, non pour te guider, seulement pour confirmer que vous avez vu la même chose.",
      effects: [
        { type: "ADD_GAUGE", target: "lien_E", value: 1 },
        { type: "SET_FLAG", target: "lyra_prescience" },
        { type: "SET_FLAG", target: "lyra_confie_E" },
        { type: "REMOVE_FLAG", target: "lisiere_interaction_active" },
        { type: "REMOVE_FLAG", target: "lisiere_exploration_active" },
        { type: "SET_FLAG", target: "lisiere_retour_lyra_E" }
      ],
      next: 'ACTE1_08B_BIVOUAC_LISIERE'
    }
  ]
},

'V28_SOLO_KAELEN': {
    sceneNumber: 'V28.1.SOLO.O',
    chapter: 1,
    title: "La Dague sur la Pierre",
    mood: 'intimate',
    image: "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Acte%201/Foret_pins_noirs_202606191344.jpeg",
    sprite: "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Sprites%20-%20Kaelen%20bg/SPRITE_KAELEN_DEBOUT_PROFIL_202606231737-removebg-preview.png",
    getDynamicNarrative: (gs) => {
      return "Tu t’assois à distance de Kaelen. Il ne te regarde pas tout de suite. Sa dague travaille la pierre avec un bruit régulier, presque cérémoniel.\n\n" +
        "« Tu m’as ignoré pendant des heures. »\n\n" +
        "« Je sais. »\n\n" +
        "Il tourne enfin les yeux vers toi. Pas de reproche. Quelque chose de plus dangereux : il a compris que ton silence était un choix.\n\n" +
        "« Alors pourquoi venir maintenant ? »\n\n" +
        "Tu regardes la lame. « Parce que je voulais savoir si tu resterais sans que je te le demande. »\n\n" +
        "Kaelen sourit à peine. « Voilà une question que je peux respecter. »\n\n" +
        "Il pose la dague entre vous, poignée tournée vers toi. Pas une offrande. Pas une chaîne. Une possibilité.\n\n" +
        "« Je ne te promets pas d’obéir, Reine. »\n\n" +
        "« Je ne te l’ai pas demandé. »\n\n" +
        "Pour la première fois, la distance entre vous n’est plus un abandon. C’est un espace que vous pouvez traverser.";
    },
    choices: [
      {
        key: 'A',
        text: "Prendre la dague. « Alors reste assez près pour que je puisse te choisir. »",
        effects: [
          { type: "ADD_GAUGE", target: "presence_O", value: 2 },
          { type: "ADD_GAUGE", target: "lien_O", value: 1 },
          { type: "SET_FLAG", target: "dague_kaelen_prise" }
        ],
        next: 'ACTE1_08B_BIVOUAC_LISIERE'
      }
    ]
  },

'V28_SOLO_ALISTAIR': {
    sceneNumber: 'V28.1.SOLO.E',
    chapter: 1,
    title: "La Lumière qui n’ordonne pas",
    mood: 'intimate',
    image: "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Acte%201/Foret_pins_noirs_202606191344.jpeg",
    sprite: "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Sprite%20Alistair%20bg/SPRITE_ALISTAIR_DEBOUT_FACE_202606231808.png",
    getDynamicNarrative: (gs) => {
      return "Tu ne t’assois pas près d’Alistair. Tu entres seulement dans le cercle de lumière de son insigne. Il le remarque.\n\n" +
        "« Je pensais que vous vouliez être seule. »\n\n" +
        "« Je le veux. »\n\n" +
        "Il baisse les yeux. « Alors je ne vous demanderai pas de rester. »\n\n" +
        "Cette réponse te surprend davantage qu’une prière ou qu’un serment.\n\n" +
        "« Et si je reviens ? »\n\n" +
        "Alistair relève les yeux. « Alors je serai là. Pas devant vous. Pas au-dessus de vous. À côté. Si vous l’acceptez. »\n\n" +
        "La lumière de son insigne vacille. Pour la première fois, elle ressemble moins à une cage qu’à une porte laissée ouverte.";
    },
    choices: [
      {
        key: 'A',
        text: "Toucher l’insigne. « Alors ne ferme pas la porte. »",
        effects: [
          { type: "ADD_GAUGE", target: "presence_E", value: 2 },
          { type: "ADD_GAUGE", target: "lien_E", value: 1 },
          { type: "SET_FLAG", target: "insigne_alistair_ramasse" }
        ],
        next: 'ACTE1_08B_BIVOUAC_LISIERE'
      }
    ]
  },

'ACTE1_SOLO_ECHO': {
    sceneNumber: '1.SOLO',
    chapter: 1,
    title: "L’Écho dans la Pierre",
    mood: 'tension',
    condition: (gs) => gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde'),
    image: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@73b666c475f8b6ccb491d82d0bb3704779effd1f/game-v57/cinematics/lot-01/06-choix-route-solo.webp",
    getDynamicNarrative: (gs) => {
      return "Tu as repoussé les deux hommes dans le gouffre. Leurs jurons s’éloignent — pour l’instant.\n\n" +
        "La fresque te regarde. Pas avec reproche. Avec attente.\n\n" +
        "Fen se hisse contre ton poignet. Avant même de réfléchir, ton pouce trouve l'endroit précis derrière son oreille où son pouls cogne le plus fort. Ton esprit ne se souvient de rien. Ton corps, lui, connaît ce geste.\n\n" +
        "La reconnaissance te traverse plus violemment qu'un nom retrouvé : quelque chose en toi existait avant les deux hommes, avant la couronne, peut-être même avant ta propre version de l'histoire.\n\n" +
        "« Je n’ai besoin de guide », dis-tu à la pierre. Fen serre ses griffes juste assez pour rappeler qu'être seule ne signifie pas être vide.\n\n" +
        "La pierre ne contredit pas. Elle attend la suite. Eux, quelque part au-dessus ou en dessous, aussi.";
    },
    choices: [
      { key: 'A', text: "Grimper vers la surface — sans leur main.", effects: [
        { type: "ADD_GAUGE", target: "instabilite", value: 2 },
        { type: "SET_FLAG", target: "solo_couronne" },
        { type: "SET_FLAG", target: "_solo_echo_vu" }
      ], next: 'RETURN' }
    ]
  },

'FEN_INDICE_1': {
    sceneNumber: 'V40.3.F1',
    chapter: 1,
    title: "Trois Notes dans la Pierre",
    mood: 'exploration',
    sprite: "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Sprites%20-%20Fen%20bg/SPRITE_FEN_ASSIS_FACE_FIX_202606231738.png",
    getDynamicNarrative: (gs) => {
      return "Fen cesse brusquement de bouger devant la fresque.\n\n" +
        "Il ne regarde pas la reine sculptée. Il regarde la silhouette effacée à son côté — un personnage dont le visage a été martelé jusqu'à disparaître.\n\n" +
        "Trois notes quittent sa gorge. Trop justes pour un cri d'animal. La pierre renvoie la troisième avec un léger retard.\n\n" +
        "Quelque chose se serre sous tes côtes. Pas un souvenir. Plutôt l'empreinte laissée par un souvenir arraché.\n\n" +
        "Fen pose une patte contre le basalte, exactement à l'endroit où la main de la silhouette devait rejoindre celle de la reine. Puis il repart comme si rien ne s'était passé.";
    },
    choices: [{
      key: 'NEXT',
      text: "Garder les trois notes en mémoire.",
      effects: [
        { type: "SET_FLAG", target: "fen_fresque" },
        { type: "SET_FLAG", target: "kalthar_melody" },
        { type: "ADD_GAUGE", target: "memoire_kalthar", value: 1 }
      ],
      next: 'RETURN'
    }]
  },

'ERREUR_SCENE': {
    sceneNumber: 'ERR',
    chapter: 1,
    title: "Erreur de Continuum",
    mood: 'exploration',
    getDynamicNarrative: (gs) => {
      return "Le chemin s’est brouillé. Tu reprends tes esprits un peu plus loin.\n\nLe voyage continue.";
    },
    choices: [
      {
        key: 'NEXT',
        text: "Continuer.",
        next: 'ACTE1_01_REVEIL'
      }
    ]
  },
  // =============================================================================
  // RÉCAPITULATIF V30.0.0 « CORONA GLACIALIS — AAA FINAL »
  // =============================================================================
  // 
  // NOUVELLES JAUGES
  //   possession        0-30   (possession / contrôle)
  //   memoire_kalthar   0-20   (récupération mémoire)
  //   volonte           0-15   (résistance aux dettes et triggers)
  //
  // NOUVEAUX TIMERS
  //   venin             (corrigé : décrément automatique dans processChoice)
  //   colere_ordre      (Seraphine)
  //   avance_veyra
  //   dette_kaelen
  //
  // NOUVEAUX SYSTÈMES
  //   inventory[]       max 8 objets
  //   reputation        { ordre, culte, ombre, village }
  //   Mémoire du Monde  (globalFlags enrichis)
  //
  // NOUVEAUX PERSONNAGES & SCÈNES
  //   SERAPHINE_INTRO / SERAPHINE_ARRIVEE
  //   VEYRA_PACTE
  //   MIRA_RENCONTRE / MIRA_SUITE_SOLO
  //   NOMADE_1
  //   GAME_OVER_POSSESSION
  //
  // NOUVELLES FINS
  //   FIN_VEYRA
  //   FIN_SERAPHINE
  //   FIN_MIRA
  //   FIN_CORONA
  //   FIN_DETTE_ANNULEE
  //
  // ACTE V (post-Trône)
  //   ACTE5_01_LENDEMAIN
  //   ACTE5_02_VEILLE / DEPART / RETOUR
  //
  // ENRICHISSEMENTS MAJEURS
  //   Toutes les fins existantes lisent possession / memoire_kalthar / volonte
  //   Timer venin fonctionnel
  //   Joutes O2 / E2 complètes
  //   Arc Oraya / Lyra / Fen conservé et renforcé
  //   Voie Solo renforcée (Mira + scènes exclusives)
  //
  // FLAGS ORPHELINS PURGÉS
  //   serviteurs_reveles → silas_verite_*
  //   lyra_reduite_arme  → lyra_punie
  //   fragment_kalthar_1 → memoire_kalthar
  //
  // RÉTROCOMPATIBILITÉ
  //   100 % des flags, jauges et scènes V26 restent valides
  //   Anciennes sauvegardes initialisent automatiquement les nouvelles jauges à 0
  // =============================================================================

  // ==========================================
  // SCÈNES DE SÉCURITÉ & CONTINUITÉ FINALE
  // ==========================================

// ==========================================
  // VÉRIFICATION DE COHÉRENCE (notes techniques)
  // ==========================================
  //
  // 1. Timer venin : onEnter de URGENCE_NARRATIVE pose timers.venin = 3
  //    processChoice appelle decrementTimers() → le trigger timer_venin_check fonctionne.
  //
  // 2. Nouvelles jauges : initialisées dans SceneManager même sur anciennes saves.
  //
  // 3. Inventaire : addItem / hasItem / removeItem opérationnels.
  //
  // 4. Réputation : addRep / getRep opérationnels.
  //
  // 5. Aucun dead-end : toutes les scènes ont au moins un choix NEXT ou conditionnel.
  //
  // 6. Triggers prioritaires : Game Over (90-150) > Romance/Joutes (8-15) > Indices (4-7).
  //
  // 7. Voie Solo : scènes exclusives + Mira + FIN_MIRA + FIN_SOLO enrichie.
  //
  // 8. Acte V : 3 épilogues jouables selon le choix post-Trône.
  //
  // 9. Nouvelles fins branchées via conditions sur flags + jauges.
  //
  // 10. Rétrocompatibilité NG+ et achievements conservée.

  // ==========================================
  // FIN DE LA BASE DE DONNÉES PRINCIPALE
  // (Les scènes V26 non explicitement réécrites restent
  //  valides et peuvent être collées à la suite de ce bloc
  //  sans modification de structure.)
  // ==========================================

  // ==========================================
  // FERMETURE DE LA BASE DE DONNÉES
  // ==========================================


// =============================================================================
// GARANTIES AAA V29
// =============================================================================
// - Validation serveur des choix : impossible de forcer un choix caché depuis le client.
// - Entrée de scène idempotente : timers/onEnter ne se déclenchent pas plusieurs fois par rendu.
// - Historique de choix/scènes pour conséquences et analytics.
// - Présence O/E/S exposée au front-end.
// - JOIN_COMPANION / LEAVE_COMPANION pour routes fluides.
// - Normalisation des jauges et sauvegardes V26/V27/V28.
// - Normalisation des assets placeholder vers null pour éviter les URLs fantômes.
// - API serverValidateDatabase() pour QA automatisée.
// - API serverSaveGame()/serverLoadGame() pour sauvegarde persistante optionnelle.
// =============================================================================
  };
}

// Les anciens flags restent lisibles ; aucun intérêt amoureux n’est déduit au chargement.
function bivouacKaelenChoixImage_(gs, mobile) {
  const format = mobile ? 'mobile' : 'pc';
  const assets = 'https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@6533535d4143f4f5df8a2f942022ebea46c8b18a/game-v58/cinematics/bivouac-choix/';
  const neutral = 'https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@8bec85456cf6a5009a93c1379ab168e7f13691e3/game-v58/backgrounds/bivouac-sans-feu-' + format + '.webp';
  if (gs.hasFlag('bivouac_distance_O')) return 'https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@1fdeb01134602c1be6a569d34502f8d7d3717b7f/game-v58/cinematics/lot-01/cendres-froides-kaelen-sans-feu-' + format + '.webp';
  if (gs.hasFlag('bivouac_menace')) return assets + 'bivouac-kaelen-taquiner-' + format + '.webp';
  if (gs.hasFlag('bivouac_nom')) return assets + 'bivouac-kaelen-connaitre-' + format + '.webp';
  if (gs.hasFlag('bivouac_silence_proche')) return 'https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@1fdeb01134602c1be6a569d34502f8d7d3717b7f/game-v58/cinematics/lot-01/cendres-froides-alcove-kaelen-' + format + '.webp';
  return neutral;
}
