/** V52 — fragment DB RELATIONS.
 * Généré depuis V51.7.6 sans réécriture narrative.
 * 26 scènes.
 */
function _dbRelationsV52_() {
  return {
'LIEN_LISIERE_DEUX': {
  sceneNumber:'1.08B.OE',
  chapter:1,
  title:"Le Feu n'appartient à personne",
  mood:'intimate',
  image:"https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/campement-nuit.webp",
  sprite:'Elenya',
  spriteLeft:gs=>companionPresentO(gs)?'Kaelen':null,
  spriteRight:gs=>companionPresentE(gs)?'Alistair':null,
  stage:{framing:'wide'},
  getDynamicNarrative:(gs)=>{
    let t="Tu restes entre eux. Kaelen pose sa pierre à aiguiser. Alistair range l'insigne. Fen cherche un creux entre vos bottes.\n\n";
    if(gs.hasFlag('avec_eclaireur')) t+="Alistair est déjà du côté où tu t'es assise dans la grotte. Kaelen le voit. Il reste quand même.\n\n";
    else if(gs.hasFlag('avec_ombre')) t+="Kaelen est déjà du côté où tu t'es assise en bas. Alistair le voit. Il reste quand même.\n\n";
    if(gs.hasFlag('lyra_prescience') || gs.hasFlag('_lyra_echo_vu')) t+="La musique s'est tue. Personne ne lui donne un nom.\n\n";
    t+="Tu peux tendre les deux mains, rester sans demander, ou rejoindre Fen.";
    return t;
  },
  choices:[
    {
      key:'OE_MAIN',
      text:"Tendre une main à Kaelen, l'autre à Alistair.",
      response:"Kaelen prend la tienne comme on accepte une pièce, puis la garde plus longtemps que nécessaire. Alistair la prend et ne serre pas. Aucun des deux ne lâche le premier. Fen ne choisit pas de genoux.",
      intent:'confiance',target:'Kaelen & Alistair',importance:'major',
      feedback:"Tu ouvres l’espace aux deux sans transformer leur réponse en dette.",
      effects:[
        {type:'ADD_GAUGE',target:'lien_O',value:1},
        {type:'ADD_GAUGE',target:'lien_E',value:1},
        {type:'ADD_GAUGE',target:'tension_triangle',value:1},
        {type:'SET_FLAG',target:'lisiere_trio_vu'},
        {type:'SET_FLAG',target:'lisiere_trio_ouvert'}
      ],
      next:'ACTE1_08B_BIVOUAC_LISIERE'
    },
    {
      key:'OE_TENDRE',
      text:"Rester assise entre eux. Ne rien demander.",
      response:"Kaelen remet une bûche. Alistair étend la cape derrière vous trois, pas sur toi. Le feu suffit. Personne ne pose de question.",
      intent:'tendresse',target:'Kaelen & Alistair',importance:'significant',
      feedback:"La proximité existe sans promesse ni exclusivité.",
      effects:[
        {type:'ADD_GAUGE',target:'lien_O',value:1},
        {type:'ADD_GAUGE',target:'lien_E',value:1},
        {type:'SET_FLAG',target:'lisiere_trio_vu'},
        {type:'SET_FLAG',target:'lisiere_trio_tendresse'}
      ],
      next:'ACTE1_08B_BIVOUAC_LISIERE'
    },
    {
      key:'OE_DISTANCE',
      text:"« Je reste avec Fen. Pas contre vous. Juste ce soir. »",
      response:"Kaelen hoche la tête. Alistair reprend l'insigne sans le lever. Ils te laissent le côté du feu où Fen s'est roulé.",
      intent:'liberte',target:'Elenya',importance:'significant',
      feedback:"Tu refuses que leur rivalité transforme ta proximité en enjeu.",
      effects:[
        {type:'ADD_GAUGE',target:'volonte',value:1},
        {type:'SET_FLAG',target:'lisiere_trio_vu'},
        {type:'SET_FLAG',target:'lisiere_trio_limite'}
      ],
      next:'ACTE1_08B_BIVOUAC_LISIERE'
    }
  ]
},

'LIEN_LISIERE_KAELEN': {
    sceneNumber: '1.08B.K',
    chapter: 1,
    title: "Braises sans contrat",
    mood: 'romance',
    image: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/campement-nuit.webp",
    sprite: (gs) => gs.hasFlag('relations_reouvertes_surface') && companionPresentE(gs) ? "Alistair" : null,
    spriteLeft: "Kaelen",
    spriteRight: "Elenya",
    stage: { framing: 'wide' },
    getDynamicNarrative: (gs) => {
      let text = gs.hasFlag('bivouac_feu_O_rapproche')
        ? "Ta main est encore sur l'épaule de Kaelen. Il tourne la tête. Le feu prend la cicatrice sur sa joue.\n\n"
        : "Kaelen décale sa dague et te fait une place. « Le furet a déjà pris le meilleur coin. Tu auras le second. »\n\n";
      if (gs.hasFlag('fresque_O') || gs.hasFlag('kaelen_fresque_confiee')) text += "Il ne reparle pas de la pierre. Il a gardé ça.\n\n";
      if (gs.hasFlag('bivouac_nom')) text += "« Tu as déjà le nom, » dit-il. « Le reste, c'est autre chose. »\n\n";
      text += "Il pose la dague au sol et attend.";
      if (companionPresentE(gs)) text += "\n\nDe l'autre côté du feu, Alistair veille. Il entend. Il ne traverse pas.";
      if (gs.hasFlag('lyra_prescience') || gs.hasFlag('_lyra_echo_vu')) text += "\n\nLa note dans les pins n'a pas de nom. Kaelen ne lui en donne pas un.";
      return text;
    },
    choices: [
      {
        key: 'K_ROMANCE',
        importance: "major",
        irreversible: false,
        intent: 'romance',
        target: 'Kaelen',
        feedback: "Kaelen comprend que tu n’es pas venue seulement chercher sa compagnie.",
        journal: "À la Lisière des Pins Noirs, tu as choisi de laisser Kaelen voir qu’il pouvait exister autre chose entre vous.",
        text: "Prendre sa main. « Reste. Pas pour la garde. Pour moi. »",
        response: "Kaelen retourne ta main dans la sienne. Le trait d'esprit ne vient pas. « D'accord. » La dague reste au sol. « Ne prends pas l'habitude de me le demander aussi clairement. Je risque de dire oui. »",
        effects: [
          { type: "ADD_GAUGE", target: "lien_O", value: 2 },
          { type: "ADD_GAUGE", target: "presence_O", value: 1 },
          { type: "SET_FLAG", target: "interet_romantique_O" },
          { type: "SET_FLAG", target: "lisiere_romance_O_ouverte" },
          { type: "SET_FLAG", target: "lisiere_romance_O_vu" }
        ],
        next: 'ACTE1_08B_BIVOUAC_LISIERE'
      },
      {
        key: 'K_TENDRESSE',
        importance: "significant",
        irreversible: false,
        intent: 'tendresse',
        target: 'Kaelen',
        feedback: "La proximité demeure. Tu refuses encore de lui donner un nom.",
        text: "Rester près de lui et regarder le feu. Sans prendre sa main.",
        response: "Kaelen comprend. Il ne tend pas la main. Il pose une bûche, te laisse le côté moins fumant, et regarde les braises avec toi. « Ça aussi, ça compte. N'en fais pas une affaire. »",
        effects: [
          { type: "ADD_GAUGE", target: "lien_O", value: 1 },
          { type: "SET_FLAG", target: "lisiere_tendresse_O" },
          { type: "SET_FLAG", target: "lisiere_romance_O_vu" }
        ],
        next: 'ACTE1_08B_BIVOUAC_LISIERE'
      },
      {
        key: 'K_RETOUR',
        intent: "distance",
        target: "Kaelen",
        importance: "minor",
        irreversible: false,
        text: "Revenir près de Fen. « Pas ce soir. »",
        response: "Kaelen ramasse la dague, pas trop vite. « Pas ce soir. » Il le répète sans moquerie. Fen se cale contre ta botte. Il ne te suit pas.",
        effects: [
          { type: "SET_FLAG", target: "lisiere_romance_O_vu" },
          { type: "SET_FLAG", target: "lisiere_retour_O" }
        ],
        next: 'ACTE1_08B_BIVOUAC_LISIERE'
      }
    ]
  },

'LIEN_LISIERE_ALISTAIR': {
    sceneNumber: '1.08B.E',
    chapter: 1,
    title: "Lumière sans serment",
    mood: 'romance',
    image: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/campement-nuit.webp",
    sprite: (gs) => gs.hasFlag('relations_reouvertes_surface') && companionPresentO(gs) ? "Kaelen" : null,
    spriteLeft: "Elenya",
    spriteRight: "Alistair",
    stage: { framing: 'wide' },
    getDynamicNarrative: (gs) => {
      let text = gs.hasFlag('bivouac_feu_E_rapproche')
        ? "Alistair replie la cape que tu lui as rendue et s'assied près de toi, pas contre toi.\n\n"
        : gs.hasFlag('bivouac_feu_E_proche')
          ? "La cape est déjà sur tes épaules. Alistair ne la reprend pas. Il s'assied près de toi.\n\n"
          : "Alistair tient la cape, puis s'arrête. « Je peux la poser. Ou pas. »\n\n";
      if (gs.hasFlag('fresque_E') || gs.hasFlag('alistair_doute_partage')) text += "Il ne revient pas sur la pierre. La question est restée où tu l'as laissée.\n\n";
      if (gs.hasFlag('bivouac_garde_cadre') || gs.hasFlag('bivouac_retire_cadre')) text += "Il garde la distance de l'alcôve, même ici.\n\n";
      text += "« J'aimerais passer cette halte avec toi, » dit-il. « Juste la halte. Tu peux dire non. »";
      if (companionPresentO(gs)) text += "\n\nKaelen monte la garde au bord du feu. Il ne traverse pas.";
      if (gs.hasFlag('lyra_prescience') || gs.hasFlag('_lyra_echo_vu')) text += "\n\nIl a vu la silhouette, ou il ne l'a pas vue. Il n'invente pas un nom pour elle.";
      return text;
    },
    choices: [
      {
        key: 'E_CONNAITRE',
        importance: "significant",
        irreversible: false,
        intent: 'confiance',
        target: 'Alistair',
        feedback: "Tu choisis de mieux connaître Alistair sans donner de nom à ce qui se construit.",
        text: "Lui demander ce qu’il pense réellement de l’Ordre. « Pas ce qu’on t’a appris. Toi. »",
        response: "Alistair baisse les yeux vers son insigne. « Je ne sais plus toujours faire la différence. » Il relève les yeux vers toi. « Mais j’aimerais apprendre à te parler sans réciter ce qu’on attend de moi. »",
        effects: [
          { type: "ADD_GAUGE", target: "lien_E", value: 1 },
          { type: "SET_FLAG", target: "lisiere_confiance_E" },
          { type: "SET_FLAG", target: "lisiere_romance_E_vu" }
        ],
        next: 'ACTE1_08B_BIVOUAC_LISIERE'
      },
      {
        key: 'E_FLIRT',
        importance: "significant",
        irreversible: false,
        intent: 'tendresse',
        target: 'Alistair',
        feedback: "Tu le taquines sans transformer le moment en déclaration.",
        text: "Le taquiner doucement. « Tu sais faire autre chose que prier ? »",
        response: "Alistair reste sérieux une seconde de trop. Puis un sourire lui échappe. « Apparemment, oui. Mais je manque encore d'entraînement. »",
        effects: [
          { type: "ADD_GAUGE", target: "lien_E", value: 1 },
          { type: "SET_FLAG", target: "lisiere_flirt_E" },
          { type: "SET_FLAG", target: "lisiere_romance_E_vu" }
        ],
        next: 'ACTE1_08B_BIVOUAC_LISIERE'
      },
      {
        key: 'E_ROMANCE',
        importance: "major",
        irreversible: false,
        intent: 'romance',
        target: 'Alistair',
        feedback: "Tu assumes cette fois une approche clairement romantique.",
        journal: "À la Lisière des Pins Noirs, tu as choisi d'ouvrir clairement la porte à Alistair.",
        text: "Prendre sa main et la garder dans la tienne. « Reste près de moi. Pas comme sentinelle. »",
        response: "Alistair serre doucement tes doigts. Il ne cherche pas à rapprocher davantage vos corps. « D'accord. » Son insigne reste près du feu, hors de votre espace.",
        effects: [
          { type: "ADD_GAUGE", target: "lien_E", value: 2 },
          { type: "ADD_GAUGE", target: "presence_E", value: 1 },
          { type: "SET_FLAG", target: "interet_romantique_E" },
          { type: "SET_FLAG", target: "lisiere_romance_E_ouverte" },
          { type: "SET_FLAG", target: "lisiere_romance_E_vu" }
        ],
        next: 'ACTE1_08B_BIVOUAC_LISIERE'
      },
      {
        key: 'E_TENDRESSE',
        importance: "significant",
        irreversible: false,
        intent: 'tendresse',
        target: 'Alistair',
        feedback: "Sa lumière reste basse. La proximité suffit pour cette nuit.",
        text: "Rester près de lui, sans prendre sa main.",
        response: (gs) => gs.hasFlag('bivouac_feu_E_rapproche')
          ? "Alistair déplie la cape que tu venais de lui rendre et la repose sur tes épaules. « Tu me l'as rendue. Je te la rends pour la halte. » Il ne cherche pas tes doigts. « Ça me va. »"
          : "Alistair laisse la cape où elle est, sur tes épaules. Il ne cherche pas tes doigts. « Ça me va, » dit-il, et on dirait qu'il est surpris que ce soit vrai. Il veille avec toi, sans question.",
        effects: [
          { type: "ADD_GAUGE", target: "lien_E", value: 1 },
          { type: "SET_FLAG", target: "lisiere_tendresse_E" },
          { type: "SET_FLAG", target: "lisiere_romance_E_vu" }
        ],
        next: 'ACTE1_08B_BIVOUAC_LISIERE'
      },
      {
        key: 'E_RETOUR',
        intent: "distance",
        target: "Alistair",
        importance: "minor",
        irreversible: false,
        text: "Revenir près de Fen. « Pas ce soir. »",
        response: "Alistair reprend l'insigne et te laisse la place. « Pas ce soir. » Il ne le redemande pas. Fen t'attend près des braises.",
        effects: [
          { type: "SET_FLAG", target: "lisiere_romance_E_vu" },
          { type: "SET_FLAG", target: "lisiere_retour_E" }
        ],
        next: 'ACTE1_08B_BIVOUAC_LISIERE'
      }
    ]
  },

'LIEN_MARCHE_BLANCHE': {
  sceneNumber: 'LIEN_MB',
  chapter: 2,
  title: "La Marche Blanche",
  mood: 'romance',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Acte%202/Marche_dans_la_neige_202606191345.jpeg",
  getDynamicNarrative: (gs) => {
    let text = "Le vent se lève. Vous vous abritez un moment derrière un rocher couvert de glace.\n\n";
    if (gs.hasFlag('avec_ombre') || gs.hasFlag('joute_gagne_O') || gs.hasFlag('joute_perdue_O')) {
      text += "Kaelen s'arrête près de toi et te laisse choisir si tu veux sa compagnie.\n\n";
    }
    if (gs.hasFlag('avec_eclaireur') || gs.hasFlag('joute_gagne_E') || gs.hasFlag('joute_perdue_E')) {
      text += "Alistair grelotte. Il garde son insigne éteint dans sa main.\n\n";
    }
    if (gs.getGauge('instabilite') >= 20) {
      text += "Le givre gagne tes yeux. Tu sens leur regard sur toi.\n\n";
    }
    if ((gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde')) && !gs.hasFlag('avec_ombre') && !gs.hasFlag('avec_eclaireur')) {
      text += "Tu t'installes avec Fen un peu à l'écart. Personne ne te presse de revenir.\n\n";
    }
    text += "Il faudra repartir avant que la neige ne bloque le passage.";
    return text;
  },
  choices: [
    {
      key: 'O_PROCHE',
      condition: (gs) => gs.hasFlag('avec_ombre') || gs.getGauge('lien_O') >= 3,
      text: "Tendre la main vers Kaelen. « Reste. »",
      effects: [
        { type: "ADD_GAUGE", target: "lien_O", value: 1 },
        { type: "SET_FLAG", target: "marche_blanche_O" }
      ],
      next: 'LIEN_MARCHE_BLANCHE_B'
    },
    {
      key: 'E_PROCHE',
      condition: (gs) => gs.hasFlag('avec_eclaireur') || gs.getGauge('lien_E') >= 3,
      text: "Prendre la main d'Alistair. « Tu peux me parler. »",
      effects: [
        { type: "ADD_GAUGE", target: "lien_E", value: 1 },
        { type: "SET_FLAG", target: "marche_blanche_E" }
      ],
      next: 'LIEN_MARCHE_BLANCHE_B'
    },
    {
      key: 'S_FROID',
      text: "Rester seule avec Fen jusqu'à ce que le vent baisse.",
      effects: [
        { type: "ADD_GAUGE", target: "instabilite", value: 4 },
        { type: "SET_FLAG", target: "marche_blanche_solo" }
      ],
      next: 'LIEN_MARCHE_BLANCHE_B'
    }
  ]
},

'LIEN_MARCHE_BLANCHE_B': {
  sceneNumber: 'LIEN_MBB',
  chapter: 2,
  title: "Ce que le Blizzard garde",
  mood: 'tension',
  getDynamicNarrative: (gs) => {
    let text = "";
    if (gs.hasFlag('marche_blanche_O')) {
      text += "Kaelen prend ta main. Il la garde dans la sienne pendant que le vent souffle.";
    } else if (gs.hasFlag('marche_blanche_E')) {
      text += "Alistair serre ta main. Il range son insigne et reste près de toi.";
    } else {
      text += "Fen se blottit contre toi. Tu attends avec lui que le vent baisse.";
    }
    return text;
  },
  choices: [
    {
      key: 'NEXT',
      text: "Reprendre la marche.",
      effects: [{ type: "SET_FLAG", target: "lien_marche_blanche_vu" }],
      next: 'ACTE2_10_RAVIN'
    }
  ]
},

'LIEN_MARCHE_2': {
  sceneNumber: 'LIEN_M2',
  chapter: 2,
  title: "Neige qui ne tombe plus",
  mood: 'romance',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Acte%202/Chemin_enneige_202606191345.jpeg",
  getDynamicNarrative: (gs) => {
    let text = "Vous repartez vers les Hautes Terres. Le vent est tombé, mais le chemin reste gelé.\n\n";
    
    if (gs.hasFlag('avec_ombre')) {
      if (gs.hasFlag('O_distant_1') || gs.hasFlag('O_distant_2')) {
        text += "Kaelen marche trois pas derrière toi. Il garde ses distances.\n\n";
      } else {
        text += "Kaelen marche à ton épaule. Il attend que tu lui parles.\n\n";
      }
      text += "Alistair ferme la marche à quelques pas derrière vous.\n\n";
    } else if (gs.hasFlag('avec_eclaireur')) {
      if (gs.hasFlag('E_distant_1') || gs.hasFlag('E_distant_2')) {
        text += "Alistair marche à distance, sa cape serrée sur ses épaules.\n\n";
      } else {
        text += "Alistair marche près de toi, son insigne éteint.\n\n";
      }
      text += "Kaelen ouvre la route, sans s'éloigner du groupe.\n\n";
    } else {
      text += "Fen reste contre toi. Kaelen et Alistair suivent le chemin à quelques pas.\n\n";
    }
    
    if (gs.getGauge('instabilite') >= 15) {
      text += "Le givre gagne tes avant-bras. Les autres le remarquent.\n\n";
    }
    
    text += "Tu peux rejoindre l'un d'eux ou garder tes distances.";
    return text;
  },
  // V50.4.0 : la chute influence le contexte, pas la disponibilité romantique.
  // Si Kaelen et Alistair sont encore physiquement présents, les deux rapprochements restent proposés.
  choices: [
    {
      key: 'O_REPARER',
      condition: (gs) => companionPresentO(gs) && (gs.hasFlag('O_distant_1') || gs.hasFlag('O_distant_2')),
      text: "Ralentir et demander à Kaelen de marcher avec toi.",
      effects: [
        { type: "ADD_GAUGE", target: "lien_O", value: 2 },
        { type: "REMOVE_FLAG", target: "O_distant_1" },
        { type: "REMOVE_FLAG", target: "O_distant_2" },
        { type: "SET_FLAG", target: "marche2_proche_O" }
      ],
      next: 'LIEN_MARCHE_2B'
    },
    {
      key: 'E_REPARER',
      condition: (gs) => companionPresentE(gs) && (gs.hasFlag('E_distant_1') || gs.hasFlag('E_distant_2')),
      text: "Rejoindre Alistair. « Marche avec moi. »",
      effects: [
        { type: "ADD_GAUGE", target: "lien_E", value: 2 },
        { type: "REMOVE_FLAG", target: "E_distant_1" },
        { type: "REMOVE_FLAG", target: "E_distant_2" },
        { type: "SET_FLAG", target: "marche2_proche_E" }
      ],
      next: 'LIEN_MARCHE_2B'
    },
    {
      key: 'SILENCE',
      text: "Continuer à marcher en silence, en leur laissant une place près de toi.",
      effects: [
        { type: "ADD_GAUGE", target: "lien_O", value: 1 },
        { type: "ADD_GAUGE", target: "lien_E", value: 1 },
        { type: "SET_FLAG", target: "marche2_silence" }
      ],
      next: 'LIEN_MARCHE_2B'
    },
    {
      key: 'S_FROID',
      condition: (gs) => gs.hasFlag('voie_solo') || gs.hasFlag('voie_solo_profonde') || gs.getGauge('instabilite') >= 20,
      text: "Rester à l'écart avec Fen.",
      effects: [
        { type: "ADD_GAUGE", target: "instabilite", value: 3 },
        { type: "SET_FLAG", target: "marche2_solo" }
      ],
      next: 'LIEN_MARCHE_2B'
    }
  ]
},

'LIEN_MARCHE_2B': {
  sceneNumber: 'LIEN_M2B',
  chapter: 2,
  title: "Ce que le vent ne porte plus",
  mood: 'romance',
  getDynamicNarrative: (gs) => {
    let text = "";
    if (gs.hasFlag('marche2_proche_O') || (gs.hasFlag('marche2_silence') && gs.hasFlag('avec_ombre'))) {
      text += "Kaelen ralentit pour marcher à ton rythme. Vos mains se frôlent. Cette fois, il ne s'écarte pas.";
    } else if (gs.hasFlag('marche2_proche_E') || (gs.hasFlag('marche2_silence') && gs.hasFlag('avec_eclaireur'))) {
      text += "Alistair range son insigne. « Je suis là », dit-il. Il marche près de toi, même après que tu as lâché sa main.";
    } else {
      text += "Fen se blottit contre toi. Tu continues la route à ton rythme.";
    }
    return text;
  },
  choices: [
    {
      key: 'NEXT',
      text: "Poursuivre la route.",
      effects: [{ type: "SET_FLAG", target: "lien_marche2_vu" }],
      next: 'ACTE2_09_MARCHE_BLANCHE' // V50.5 : restaure la marche blanche avant la rivière
    }
  ]
},

// ==========================================
// FLASHBACK CROISÉ CENDRES / SOLEIL
// ==========================================

'LIEN_MARCHE_1': {
  sceneNumber: 'LIEN_M1',
  chapter: 1,
  title: "Cendres sous la Neige",
  mood: 'romance',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Acte%201/Foret_pins_noirs_202606191344.jpeg",
  getDynamicNarrative: (gs) => {
    let text = `Vous vous arrêtez à la lisière des pins. Le feu prend doucement sous les arbres.

`;

    const oPresent = companionPresentO(gs);
    const ePresent = companionPresentE(gs);

    if (oPresent && ePresent) {
      if (gs.hasFlag('avec_ombre')) {
        text += `Depuis la chute, Kaelen marche plus près de toi. Il s'assied près du feu et pose sa dague à côté de lui.

Alistair prend la première garde à quelques pas. Quand vos regards se croisent, il ne se détourne pas.

`;
      } else if (gs.hasFlag('avec_eclaireur')) {
        text += `Depuis la chute, Alistair reste près de toi. Sa cape repose encore sur tes épaules.

Kaelen surveille les arbres à quelques pas du feu. Quand tu tournes la tête, il te regarde déjà.

`;
      } else {
        text += `Kaelen s'assied près du feu et aiguise sa dague.

Alistair prend la garde de l'autre côté. Il laisse sa cape pliée près de toi.

`;
      }

      text += `Ils sont tous les deux là. Tu décides où t'asseoir.`;
    } else if (oPresent) {
      text += `Kaelen s'assied près du feu et te laisse une place.

Tu peux le rejoindre ou rester avec Fen.`;
    } else if (ePresent) {
      text += `Alistair pose sa cape près du feu et te laisse une place.

Tu peux le rejoindre ou rester avec Fen.`;
    } else {
      text += `Fen se couche près du feu. Tu restes libre de t'asseoir à l'écart.

Le vent souffle dans les pins.`;
    }

    return text;
  },
  choices: [
    {
      key: 'O_REPARER',
      condition: (gs) => companionPresentO(gs) && gs.hasFlag('O_distant_1'),
      text: "Rejoindre Kaelen. Contourner ses lames et t’asseoir à son épaule. « Le feu est plus chaud de ce côté. »",
      effects: [
        { type: "ADD_GAUGE", target: "lien_O", value: 1 },
        { type: "REMOVE_FLAG", target: "O_distant_1" },
        { type: "SET_FLAG", target: "marche1_proche_O" },
        { type: "SET_FLAG", target: "lisiere_orientation_O" },
        { type: "SET_FLAG", target: "bivouac_feu_O" }
      ],
      next: 'LIEN_MARCHE_1B'
    },
    {
      key: 'E_REPARER',
      condition: (gs) => companionPresentE(gs) && gs.hasFlag('E_distant_1'),
      text: "Rejoindre Alistair. Défaire sa paroi de cape et la lui rendre. « Je n’ai pas besoin de murailles. J’ai besoin de tes yeux. »",
      effects: [
        { type: "ADD_GAUGE", target: "lien_E", value: 1 },
        { type: "REMOVE_FLAG", target: "E_distant_1" },
        { type: "SET_FLAG", target: "marche1_proche_E" },
        { type: "SET_FLAG", target: "lisiere_orientation_E" },
        { type: "SET_FLAG", target: "bivouac_feu_E" }
      ],
      next: 'LIEN_MARCHE_1B'
    },
    {
      key: 'O_PROCHE',
      condition: (gs) => companionPresentO(gs) && !gs.hasFlag('O_distant_1'),
      text: "Se rapprocher de Kaelen. Laisser le silence s’installer entre vous. Trop près. Trop longtemps.",
      effects: [
        { type: "ADD_GAUGE", target: "lien_O", value: 1 },
        { type: "SET_FLAG", target: "marche1_silence_O" },
        { type: "SET_FLAG", target: "lisiere_orientation_O" },
        { type: "SET_FLAG", target: "bivouac_feu_O" }
      ],
      next: 'LIEN_MARCHE_1B'
    },
    {
      key: 'E_PROCHE',
      condition: (gs) => companionPresentE(gs) && !gs.hasFlag('E_distant_1'),
      text: "Se rapprocher d’Alistair. Poser ta main sur la sienne, juste un instant.",
      effects: [
        { type: "ADD_GAUGE", target: "lien_E", value: 1 },
        { type: "SET_FLAG", target: "marche1_contact_E" },
        { type: "SET_FLAG", target: "lisiere_orientation_E" },
        { type: "SET_FLAG", target: "bivouac_feu_E" }
      ],
      next: 'LIEN_MARCHE_1B'
    },
    {
      key: 'OE_PROCHES',
      condition: (gs) => companionPresentO(gs) && companionPresentE(gs),
      text: "Ne choisir aucun côté du feu. T’asseoir entre Kaelen et Alistair et leur faire une place à tous les deux.",
      response: "Kaelen relève un sourcil. Alistair retient le réflexe de déplacer sa cape pour toi. Aucun des deux ne gagne le centre : tu l’as pris toi-même.",
      effects: [
        { type: "ADD_GAUGE", target: "lien_O", value: 1 },
        { type: "ADD_GAUGE", target: "lien_E", value: 1 },
        { type: "ADD_GAUGE", target: "tension_triangle", value: 1 },
        { type: "SET_FLAG", target: "marche1_deux" },
        { type: "SET_FLAG", target: "lisiere_orientation_DEUX" },
        { type: "SET_FLAG", target: "bivouac_feu_O" },
        { type: "SET_FLAG", target: "bivouac_feu_E" }
      ],
      next: 'LIEN_MARCHE_1B'
    },
    {
      key: 'S_FROID',
      text: "Rester avec Fen, à l'écart du feu.",
      effects: [
        { type: "ADD_GAUGE", target: "instabilite", value: 3 },
        { type: "SET_FLAG", target: "marche1_solo" },
        { type: "SET_FLAG", target: "lisiere_orientation_SOLO" }
      ],
      next: 'LIEN_MARCHE_1B'
    }
  ]
},

'LIEN_MARCHE_1B': {
  sceneNumber: 'LIEN_M1B',
  chapter: 1,
  title: "Ce que le Feu ne Dit pas",
  mood: 'romance',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/campement-nuit.webp",
  sprite: (gs) => {
    if (gs.hasFlag('marche1_deux')) return "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Sprites%20-%20Interactions%20bg/INTERACTION_TRIO_POLY_REINE_DOMINANTE_202606231806.png";
    if (gs.hasFlag('marche1_proche_O') || gs.hasFlag('marche1_silence_O')) return "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Sprites%20-%20Interactions%20bg/ACTE1_INTERACTION_TENDRESSE_KAELEN_ELENYA_FIX_202606231806.png";
    if (gs.hasFlag('marche1_proche_E') || gs.hasFlag('marche1_contact_E')) return "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Sprites%20-%20Interactions%20bg/ACTE1_SCENE6_INTERACTION_ALISTAIR_ELENYA_202606231806.png";
    return "";
  },
  stage: { hideElenya: true },
  getDynamicNarrative: (gs) => {
    let text = "";
    if (gs.hasFlag('marche1_deux')) {
      text += "Kaelen garde ses dagues de son côté. Alistair pose sa cape derrière vous trois. Fen s'étend devant le feu, les pattes tournées vers la chaleur. Pendant quelques minutes, personne ne te demande de choisir à nouveau.";
    } else if (gs.hasFlag('marche1_proche_O')) {
      text += "Tu t'assieds près de Kaelen. Il décale sa dague pour te faire de la place, puis te laisse décider de la distance entre vos épaules. De l'autre côté du feu, Alistair reprend sa garde sans commentaire.";
    } else if (gs.hasFlag('marche1_silence_O')) {
      text += "Kaelen cesse d'aiguiser sa dague quand tu t'assieds près de lui. Vous regardez le feu sans vous toucher. Il ne remplit pas le silence à ta place.";
    } else if (gs.hasFlag('marche1_proche_E') || gs.hasFlag('marche1_contact_E')) {
      text += "Ta main rejoint celle d'Alistair. Il baisse les yeux vers vos doigts, puis pose son insigne de côté pour que vous puissiez rester ainsi. Le feu crépite ; aucun serment ne suit ce geste.";
    } else {
      text += "Tu gardes ta place près de Fen. Il se roule contre ta botte pendant que tu surveilles les braises. Les autres restent à distance, comme tu l'as choisi.";
    }
    return text;
  },
  choices: [
    {
      key: 'NEXT',
      text: "Reprendre la route quand le feu baisse.",
      effects: [{ type: "SET_FLAG", target: "lien_marche1_vu" }],
      next: 'ACTE1_08B_BIVOUAC_LISIERE'
    }
  ]
},

'ROMANCE_AGENCY_NUIT_AUBERGE': {
  sceneNumber:'V51.7.NIGHT.AGENCY',chapter:2,title:"Deux portes dans la même nuit",mood:'intimate',
  getDynamicNarrative:(gs)=>{
    const o=companionPresentO(gs),e=companionPresentE(gs);
    if(o&&e) return "La chambre s'est tue. Kaelen reste près de ses lames, Alistair près de la fenêtre.\n\nPersonne ne te réclame. Tu choisis qui rejoindre — ou personne.";
    if(o) return "La chambre s'est tue. Kaelen reste près de ses lames, sans s'imposer.\n\nPersonne ne te réclame. Tu décides si tu vas le trouver ou non.";
    if(e) return "La chambre s'est tue. Alistair veille près de la fenêtre, en silence.\n\nPersonne ne te réclame. Tu décides si tu vas le trouver ou non.";
    return "La chambre s'est tue. La nuit t'appartient entièrement.";
  },
  choices:[
    {key:'O',text:"Aller vers Kaelen.",intent:'confiance',target:'Kaelen',importance:'major',
     condition:(gs)=>companionPresentO(gs)&&!gs.hasFlag('_lien_O_2_vu')&&!gs.hasFlag('soir_avec_kaelen')&&!gs.hasFlag('soir_avec_alistair')&&!gs.hasFlag('amis_O')&&!gs.hasFlag('amis_O_ferme')&&!gs.hasFlag('romance_en_pause_O'),
     feedback:"Tu choisis Kaelen pour ce moment. Alistair n'est pas effacé : sa conversation est reportée.",
     effects:[{type:'SET_FLAG',target:'_romance_deferred_E'}],next:'LIEN_O_2_CONFIDENCE'},
    {key:'E',text:"Aller vers Alistair.",intent:'confiance',target:'Alistair',importance:'major',
     condition:(gs)=>companionPresentE(gs)&&!gs.hasFlag('_lien_E_2_vu')&&!gs.hasFlag('soir_avec_kaelen')&&!gs.hasFlag('soir_avec_alistair')&&!gs.hasFlag('amis_E')&&!gs.hasFlag('amis_E_ferme')&&!gs.hasFlag('romance_en_pause_E'),
     feedback:"Tu choisis Alistair pour ce moment. Kaelen n'est pas effacé : sa conversation est reportée.",
     effects:[{type:'SET_FLAG',target:'_romance_deferred_O'}],next:'LIEN_E_2_CONFIDENCE'},
    {key:'O_SOIR',text:"Rejoindre Kaelen pour la soirée — sans grand discours.",intent:'romance',target:'Kaelen',importance:'major',
     condition:(gs)=>companionPresentO(gs)
       &&!gs.hasFlag('soir_avec_kaelen')&&!gs.hasFlag('soir_avec_alistair')&&!gs.hasFlag('soir_reserve_E')
       &&!gs.hasFlag('kaelen_soir_reporte')
       &&!gs.hasFlag('amis_O')&&!gs.hasFlag('amis_O_ferme')&&!gs.hasFlag('romance_en_pause_O')
       &&(gs.hasFlag('_lien_O_2_vu')||gs.getGauge('lien_O')>=3),
     response:"« Si tu veux de la compagnie ce soir, je suis là. Si tu veux dormir, je me fais discret. »",
     effects:[{type:'SET_FLAG',target:'_romance_deferred_E'},{type:'SET_FLAG',target:'soir_reserve_O'}],
     next:'ACTE2_06_NUIT_INVITE_O'},
    {key:'E_SOIR',text:"Rejoindre Alistair près de l'escalier.",intent:'romance',target:'Alistair',importance:'major',
     condition:(gs)=>companionPresentE(gs)
       &&!gs.hasFlag('soir_avec_alistair')&&!gs.hasFlag('soir_avec_kaelen')&&!gs.hasFlag('soir_reserve_O')
       &&!gs.hasFlag('alistair_soir_reporte')
       &&!gs.hasFlag('amis_E')&&!gs.hasFlag('amis_E_ferme')&&!gs.hasFlag('romance_en_pause_E')
       &&(gs.hasFlag('_lien_E_2_vu')||gs.getGauge('lien_E')>=3),
     response:"« J'aimerais passer cette soirée avec toi. Pas pour veiller le couloir. Juste avec toi. Tu peux dire non. »",
     effects:[{type:'SET_FLAG',target:'_romance_deferred_O'},{type:'SET_FLAG',target:'soir_reserve_E'}],
     next:'ACTE2_06_NUIT_INVITE_E'},
    {key:'O_AMIS_SOIR',text:"Rester un moment avec Kaelen, sans plus.",intent:'confiance',target:'Kaelen',importance:'minor',
     condition:(gs)=>companionPresentO(gs)
       &&(gs.hasFlag('amis_O')||gs.hasFlag('romance_en_pause_O')||gs.hasFlag('amis_O_ferme'))
       &&!gs.hasFlag('soir_avec_alistair'),
     response:"Vous parlez de la route. Il ne demande rien d'autre. Quand tu bâilles, il dit : « Dors. Je prends le quart. »",
     effects:[{type:'SET_FLAG',target:'_romance_deferred_E'}],
     next:'ACTE2_06_NUIT_AUBERGE'},
    {key:'E_AMIS_SOIR',text:"Rester un moment avec Alistair, sans plus.",intent:'confiance',target:'Alistair',importance:'minor',
     condition:(gs)=>companionPresentE(gs)
       &&(gs.hasFlag('amis_E')||gs.hasFlag('romance_en_pause_E')||gs.hasFlag('amis_E_ferme'))
       &&!gs.hasFlag('soir_avec_kaelen'),
     response:"Vous parlez peu. Il murmure une courte prière pour la nuit, puis vous laisse dormir. Rien d'autre n'est demandé.",
     effects:[{type:'SET_FLAG',target:'_romance_deferred_O'}],
     next:'ACTE2_06_NUIT_AUBERGE'},
    {key:'NONE',text:"Ne rejoindre personne. Garder la nuit pour toi.",intent:'liberte',target:'Elenya',importance:'significant',
     feedback:"Tu refuses que l'urgence du moment devienne une obligation. Les deux opportunités restent possibles plus tard.",
     effects:[{type:'SET_FLAG',target:'_romance_deferred_O'},{type:'SET_FLAG',target:'_romance_deferred_E'},{type:'SET_FLAG',target:'_romance_beat_recent'}],next:'ACTE2_06_NUIT_AUBERGE'}
  ]
},

'ACTE2_06_NUIT_INVITE_O': {
  sceneNumber: '2.06.INV.O',
  chapter: 2,
  title: "Ce soir",
  mood: 'intimate',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Acte%202/Chambre_exigu%C3%AB_202606191345.jpeg",
  getDynamicNarrative: (gs) => "Kaelen attend. Il n'a pas sorti de lame. Il attend une réponse.",
  choices: [
    {
      key: 'OUI',
      text: "« Reste. »",
      response: "Il s'assoit. Vous parlez de la route, de Fen, d'un bruit dans le couloir. Quand tu bâilles : « Dors. Je veille un peu — parce que je veux. »",
      effects: [
        { type: 'ADD_GAUGE', target: 'lien_O', value: 2 },
        { type: 'SET_FLAG', target: 'soir_avec_kaelen' },
        { type: 'SET_FLAG', target: 'soir_reserve_O' }
      ],
      next: 'ACTE2_06_NUIT_AUBERGE'
    },
    {
      key: 'PAS_CE_SOIR',
      text: "« Pas ce soir. »",
      response: "« D'accord. Dors. » Il part vers le quart. Il ne revient pas frapper à la porte cette nuit.",
      effects: [
        { type: 'SET_FLAG', target: 'kaelen_soir_reporte' },
        { type: 'REMOVE_FLAG', target: 'soir_reserve_O' }
      ],
      next: 'ACTE2_06_NUIT_AUBERGE'
    },
    {
      key: 'AMIS',
      text: "« Je préfère qu'on reste amis. »",
      response: "« Amis. Clair. » Il hoche la tête et s'éloigne vers le couloir.",
      effects: [
        { type: 'SET_FLAG', target: 'amis_O' },
        { type: 'SET_FLAG', target: 'romance_en_pause_O' },
        { type: 'REMOVE_FLAG', target: 'soir_reserve_O' }
      ],
      next: 'ACTE2_06_NUIT_AUBERGE'
    }
  ]
},

'ACTE2_06_NUIT_INVITE_E': {
  sceneNumber: '2.06.INV.E',
  chapter: 2,
  title: "Cette soirée",
  mood: 'intimate',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Acte%202/Chambre_exigu%C3%AB_202606191345.jpeg",
  getDynamicNarrative: (gs) => "Alistair attend ta réponse près de l'escalier.",
  choices: [
    {
      key: 'OUI',
      text: "« Oui. Reste. »",
      response: "Il reste. Vous parlez de la route et de détails sans importance. À un moment il dit une courte prière — pour la nuit qui protège ceux qui dorment — puis reprend le fil. Sa foi n'a pas été rangée pour faire de la place.",
      effects: [
        { type: 'ADD_GAUGE', target: 'lien_E', value: 2 },
        { type: 'SET_FLAG', target: 'soir_avec_alistair' },
        { type: 'SET_FLAG', target: 'soir_reserve_E' }
      ],
      next: 'ACTE2_06_NUIT_AUBERGE'
    },
    {
      key: 'PAS_CE_SOIR',
      text: "« Pas ce soir. »",
      response: "« D'accord. Une autre fois, peut-être. » Il n’insiste pas.",
      effects: [
        { type: 'SET_FLAG', target: 'alistair_soir_reporte' },
        { type: 'REMOVE_FLAG', target: 'soir_reserve_E' }
      ],
      next: 'ACTE2_06_NUIT_AUBERGE'
    },
    {
      key: 'AMIS',
      text: "« Je préfère qu'on reste amis. »",
      response: "« Alors on reste amis. Merci de l'avoir dit clairement. »",
      effects: [
        { type: 'SET_FLAG', target: 'amis_E' },
        { type: 'SET_FLAG', target: 'romance_en_pause_E' },
        { type: 'REMOVE_FLAG', target: 'soir_reserve_E' }
      ],
      next: 'ACTE2_06_NUIT_AUBERGE'
    }
  ]
},

'ROMANCE_AGENCY_MATIN_AUBERGE': {
  sceneNumber:'V51.7.MORNING.AGENCY',chapter:2,title:"À qui donner le matin",mood:'intimate',
  getDynamicNarrative:(gs)=>{
    const o=companionPresentO(gs),e=companionPresentE(gs);
    if(o&&e) return "Le jour blanchit les vitres. Kaelen et Alistair sont là, sans venir te chercher.\n\nSi tu veux parler à l'un d'eux, c'est toi qui choisis.";
    if(o) return "Le jour blanchit les vitres. Kaelen attend au seuil, sans venir te chercher.\n\nC'est toi qui décides si tu veux lui parler.";
    if(e) return "Le jour blanchit les vitres. Alistair attend près du palier, sans venir te chercher.\n\nC'est toi qui décides si tu veux lui parler.";
    return "Le jour blanchit les vitres. L'espace reste calme.";
  },
  choices:[
    {key:'O',condition:(gs)=>romanceAvailableO(gs),text:"Chercher Kaelen.",intent:'confiance',target:'Kaelen',importance:'major',
     feedback:"Kaelen reçoit ce moment. Celui d'Alistair est reporté, pas annulé.",
     effects:[{type:'SET_FLAG',target:'_romance_deferred_E'}],next:'R_O_1'},
    {key:'E',condition:(gs)=>romanceAvailableE(gs),text:"Chercher Alistair.",intent:'confiance',target:'Alistair',importance:'major',
     feedback:"Alistair reçoit ce moment. Celui de Kaelen est reporté, pas annulé.",
     effects:[{type:'SET_FLAG',target:'_romance_deferred_O'}],next:'R_E_1'},
    {key:'BOTH',text:"Rester dans l'espace commun. Ne privilégier personne ce matin.",intent:'liberte',target:'Kaelen & Alistair',importance:'significant',
     feedback:"Tu ne choisis aucun tête-à-tête. Les deux possibilités restent vivantes pour plus tard.",
     effects:[{type:'SET_FLAG',target:'_romance_deferred_O'},{type:'SET_FLAG',target:'_romance_deferred_E'},{type:'SET_FLAG',target:'_romance_beat_recent'}],next:'ACTE2_08_MATIN_AUBERGE'}
  ]
},

'ROMANCE_AGENCY_VILLAGE': {
  sceneNumber:'V51.7.VILLAGE.AGENCY',chapter:3,title:"Une seule conversation à la fois",mood:'tension',
  getDynamicNarrative:(gs)=>{
    const o=companionPresentO(gs),e=companionPresentE(gs);
    if(o&&e) return "Le village bruisse derrière vous. Kaelen a quelque chose à dire. Alistair aussi.\n\nTu choisis qui écouter maintenant, ou tu reportes les deux conversations.";
    if(o) return "Le village bruisse derrière vous. Kaelen a quelque chose à te dire.\n\nTu décides de l'écouter maintenant ou de reporter.";
    if(e) return "Le village bruisse derrière vous. Alistair a quelque chose à te dire.\n\nTu décides de l'écouter maintenant ou de reporter.";
    return "Le village bruisse derrière toi.";
  },
  choices:[
    {key:'O',condition:(gs)=>romanceAvailableO(gs),text:"« Kaelen. Toi d'abord. »",intent:'confiance',target:'Kaelen',importance:'major',
     feedback:"Tu choisis d'affronter la conversation de Kaelen maintenant. Celle d'Alistair attendra un lieu où elle pourra respirer.",
     effects:[{type:'SET_FLAG',target:'_romance_deferred_E'},{type:'PUSH_RETURN',target:'ACTE3_09_VILLAGE_CACHE'}],next:'JOUTE_O_2'},
    {key:'E',condition:(gs)=>romanceAvailableE(gs),text:"« Alistair. Viens. »",intent:'confiance',target:'Alistair',importance:'major',
     feedback:"Tu choisis d'affronter la conversation d'Alistair maintenant. Celle de Kaelen attendra un lieu où elle pourra respirer.",
     effects:[{type:'SET_FLAG',target:'_romance_deferred_O'},{type:'PUSH_RETURN',target:'ACTE3_09_VILLAGE_CACHE'}],next:'JOUTE_E_2'},
    {key:'NONE',text:"« Pas ici. Pas maintenant. »",intent:'liberte',target:'Kaelen & Alistair',importance:'significant',
     feedback:"Tu reportes les deux conversations plutôt que de les laisser se dévorer l'une l'autre.",
     effects:[{type:'SET_FLAG',target:'_romance_deferred_O'},{type:'SET_FLAG',target:'_romance_deferred_E'},{type:'SET_FLAG',target:'_romance_beat_recent'}],next:'ACTE3_09_VILLAGE_CACHE'}
  ]
},

'ROMANCE_DEFERRED_KAELEN': {
  onEnter:(state)=>{
    if(state&&Array.isArray(state.flags)){
      if(!state.flags.includes('_romance_beat_recent'))state.flags.push('_romance_beat_recent');
      state.flags=state.flags.filter(f=>f!=='_romance_deferred_O');
    }
  },
  sceneNumber:'V51.7.DEFER.O',chapter:3,title:"Ce qui n'a pas été perdu",mood:'intimate',
  getDynamicNarrative:(gs)=>{
    let t="Kaelen pose sa dague à plat. « La conversation qu'on n'a pas eue. »\n\n";
    if(!gs.hasFlag('_lien_O_2_vu')) {
      t+="« Tu voulais du temps. Tu en as eu. Moi aussi. »";
    } else if(!gs.hasFlag('_done_R_O_1')) {
      t+="Il reste assez près pour te laisser choisir la distance. « Toujours pas de clause automatique. »";
    } else if(!gs.hasFlag('_joute_O2_vu')) {
      t+="« On n'a pas réglé le dernier tarif. Je préfère tard à jamais. »";
    } else {
      t+="Il n'y a plus rien à régler. Seulement à décider si tu veux qu'il reste.";
    }
    return t+"\n\nIl attend.";
  },
  choices:[
    {key:'CONF_TRUST',condition:(gs)=>!gs.hasFlag('_lien_O_2_vu'),text:"« Alors montre-moi quelque chose que tu ne peux pas facturer. »",intent:'confiance',target:'Kaelen',importance:'major',
     response:"Kaelen retire lentement une vieille pièce de sa poche, usée jusqu'à n'avoir presque plus de visage. « Premier paiement que j'ai refusé. » Il la dépose dans ta paume puis referme tes doigts dessus, sans la reprendre.",
     effects:[{type:'SET_FLAG',target:'_lien_O_2_vu'},{type:'SET_FLAG',target:'_lien_O_2_doux'},{type:'ADD_GAUGE',target:'lien_O',value:1},{type:'SET_FLAG',target:'romance_deferred_O_payoff'}],next:'RETURN'},
    {key:'R_ROMANCE',condition:(gs)=>gs.hasFlag('_lien_O_2_vu')&&!gs.hasFlag('_done_R_O_1'),text:"Réduire la distance. « Plus tard n'était pas jamais. »",intent:'romance',target:'Kaelen',importance:'major',
     response:"Kaelen ne prend rien. Il attend que ton front touche le sien avant de fermer les yeux.",
     effects:[{type:'SET_FLAG',target:'_done_R_O_1'},{type:'SET_FLAG',target:'_romance_O_deepened'},{type:'SET_FLAG',target:'focus_romantique_O'},{type:'ADD_GAUGE',target:'lien_O',value:2},{type:'SET_FLAG',target:'romance_deferred_O_payoff'}],next:'RETURN'},
    {key:'R_TENDER',condition:(gs)=>gs.hasFlag('_lien_O_2_vu')&&!gs.hasFlag('_done_R_O_1'),text:"Rester épaule contre épaule, sans transformer l'instant en promesse.",intent:'tendresse',target:'Kaelen',importance:'significant',
     effects:[{type:'SET_FLAG',target:'_done_R_O_1'},{type:'SET_FLAG',target:'kaelen_limite_respectee'},{type:'ADD_GAUGE',target:'lien_O',value:1},{type:'ADD_GAUGE',target:'volonte',value:1},{type:'SET_FLAG',target:'romance_deferred_O_payoff'}],next:'RETURN'},
    {key:'J_FREE',condition:(gs)=>gs.hasFlag('_done_R_O_1')&&!gs.hasFlag('_joute_O2_vu'),text:"« Tu peux rester. Mais aucune dette ne t'achète une place près de moi. »",intent:'liberte',target:'Kaelen',importance:'major',
     response:"Kaelen regarde la dague posée loin de sa main. « Enfin un contrat que je peux signer. » Il ne demande rien en échange.",
     effects:[{type:'SET_FLAG',target:'_joute_O2_vu'},{type:'SET_FLAG',target:'kaelen_amour_libre'},{type:'ADD_GAUGE',target:'lien_O',value:2},{type:'ADD_GAUGE',target:'volonte',value:2},{type:'ADD_GAUGE',target:'possession',value:-1},{type:'SET_FLAG',target:'romance_deferred_O_payoff'}],next:'RETURN'},
    {key:'J_DISTANCE',condition:(gs)=>gs.hasFlag('_done_R_O_1')&&!gs.hasFlag('_joute_O2_vu'),text:"« Le tarif est simple : tu ne me possèdes pas. »",intent:'distance',target:'Kaelen',importance:'major',
     response:"Son sourire disparaît. Puis revient autrement. « Reçu. » Un mot net, sans négociation.",
     effects:[{type:'SET_FLAG',target:'_joute_O2_vu'},{type:'ADD_GAUGE',target:'volonte',value:2},{type:'SET_FLAG',target:'joute_froide_O'},{type:'SET_FLAG',target:'romance_deferred_O_payoff'}],next:'RETURN'},
    {key:'ROMANCE',condition:(gs)=>gs.hasFlag('_joute_O2_vu'),text:"Réduire la distance sans rouvrir les anciens comptes.",intent:'romance',target:'Kaelen',importance:'major',
     effects:[{type:'ADD_GAUGE',target:'lien_O',value:2},{type:'SET_FLAG',target:'focus_romantique_O'},{type:'SET_FLAG',target:'romance_deferred_O_payoff'}],next:'RETURN'},
    {key:'BACK',condition:(gs)=>gs.hasFlag('_joute_O2_vu'),text:"« Je voulais seulement que tu saches que je n'avais pas oublié. »",intent:'distance',target:'Kaelen',importance:'significant',
     effects:[{type:'SET_FLAG',target:'romance_deferred_O_closed'}],next:'RETURN'}
  ]
},

'ROMANCE_DEFERRED_ALISTAIR': {
  onEnter:(state)=>{
    if(state&&Array.isArray(state.flags)){
      if(!state.flags.includes('_romance_beat_recent'))state.flags.push('_romance_beat_recent');
      state.flags=state.flags.filter(f=>f!=='_romance_deferred_E');
    }
  },
  sceneNumber:'V51.7.DEFER.E',chapter:3,title:"La porte restée ouverte",mood:'intimate',
  getDynamicNarrative:(gs)=>{
    let t="Alistair te voit revenir. Sa main s'arrête avant de toucher son insigne.\n\n";
    if(!gs.hasFlag('_lien_E_2_vu')) {
      t+="Il pose le sceau éteint entre vous. « J'ai moins de certitudes qu'avant. »";
    } else if(!gs.hasFlag('_done_R_E_1')) {
      t+="Il laisse la porte ouverte et attend ton choix.";
    } else if(!gs.hasFlag('_joute_E2_vu')) {
      t+="Il pose l'insigne sur une pierre. « Je n'ai plus envie d'appeler ça une mission. »";
    } else {
      t+="Il ne reste rien à résoudre. Seulement à savoir si tu veux sa présence.";
    }
    return t+"\n\nIl attend.";
  },
  choices:[
    {key:'CONF_DOUX',condition:(gs)=>!gs.hasFlag('_lien_E_2_vu'),text:"Poser deux doigts sur le sceau éteint, sans tenter de le rallumer.",intent:'tendresse',target:'Alistair',importance:'major',
     response:"Alistair couvre le sceau de sa paume. Pas pour le cacher : pour sentir qu'il est froid. Il hoche une fois la tête.",
     effects:[{type:'SET_FLAG',target:'_lien_E_2_vu'},{type:'SET_FLAG',target:'_lien_E_2_doux'},{type:'ADD_GAUGE',target:'lien_E',value:1},{type:'SET_FLAG',target:'romance_deferred_E_payoff'}],next:'RETURN'},
    {key:'CONF_DUR',condition:(gs)=>!gs.hasFlag('_lien_E_2_vu'),text:"« Ton Ordre t'a menti. Mais je ne serai pas ta nouvelle foi. »",intent:'liberte',target:'Alistair',importance:'major',
     response:"Sa main se crispe sur le bord de la table. Il ne proteste pas. Il retourne seulement l'insigne face contre bois.",
     effects:[{type:'SET_FLAG',target:'_lien_E_2_vu'},{type:'SET_FLAG',target:'_lien_E_2_dur'},{type:'ADD_GAUGE',target:'volonte',value:1},{type:'SET_FLAG',target:'romance_deferred_E_payoff'}],next:'RETURN'},
    {key:'R_ROMANCE',condition:(gs)=>gs.hasFlag('_lien_E_2_vu')&&!gs.hasFlag('_done_R_E_1'),text:"Prendre sa main et la guider jusqu'à ta joue.",intent:'romance',target:'Alistair',importance:'major',
     response:"Ses doigts commencent à se refermer puis s'arrêtent. Il regarde la porte ouverte derrière toi et laisse sa paume souple contre ta peau.",
     effects:[{type:'SET_FLAG',target:'_done_R_E_1'},{type:'SET_FLAG',target:'_romance_E_deepened'},{type:'SET_FLAG',target:'alistair_porte_ouverte'},{type:'SET_FLAG',target:'focus_romantique_E'},{type:'ADD_GAUGE',target:'lien_E',value:2},{type:'ADD_GAUGE',target:'volonte',value:1},{type:'SET_FLAG',target:'romance_deferred_E_payoff'}],next:'RETURN'},
    {key:'R_NOTYET',condition:(gs)=>gs.hasFlag('_lien_E_2_vu')&&!gs.hasFlag('_done_R_E_1'),text:"« Pas encore. Laisse seulement la porte ouverte. »",intent:'liberte',target:'Alistair',importance:'significant',
     response:"Alistair retire sa main du battant. La porte demeure exactement comme elle est.",
     effects:[{type:'SET_FLAG',target:'_done_R_E_1'},{type:'SET_FLAG',target:'alistair_limite_respectee'},{type:'ADD_GAUGE',target:'lien_E',value:1},{type:'ADD_GAUGE',target:'volonte',value:2},{type:'SET_FLAG',target:'romance_deferred_E_payoff'}],next:'RETURN'},
    {key:'J_FREE',condition:(gs)=>gs.hasFlag('_done_R_E_1')&&!gs.hasFlag('_joute_E2_vu'),text:"« Reste si tu le choisis. Mais ne fais pas de moi ta nouvelle foi. »",intent:'liberte',target:'Alistair',importance:'major',
     response:"Alistair lève l'insigne. Ses lèvres bougent par habitude ; aucune prière ne vient. Il l'enveloppe dans un morceau de tissu et le range au fond de sa sacoche.",
     effects:[{type:'SET_FLAG',target:'_joute_E2_vu'},{type:'SET_FLAG',target:'alistair_foi_libre'},{type:'SET_FLAG',target:'focus_romantique_E'},{type:'ADD_GAUGE',target:'lien_E',value:2},{type:'ADD_GAUGE',target:'volonte',value:2},{type:'ADD_GAUGE',target:'possession',value:-2},{type:'SET_FLAG',target:'romance_deferred_E_payoff'}],next:'RETURN'},
    {key:'J_LEAVE',condition:(gs)=>gs.hasFlag('_done_R_E_1')&&!gs.hasFlag('_joute_E2_vu'),text:"« Tu peux partir. Je ne te retiendrai pas. »",intent:'liberte',target:'Alistair',importance:'major',
     response:"Il regarde le chemin du retour, ramasse son insigne, puis le glisse dans sa poche au lieu de le remettre. Quand il revient vers toi, il n'explique pas pourquoi.",
     effects:[{type:'SET_FLAG',target:'_joute_E2_vu'},{type:'SET_FLAG',target:'alistair_libre_choisir'},{type:'ADD_GAUGE',target:'volonte',value:2},{type:'ADD_GAUGE',target:'lien_E',value:1},{type:'SET_FLAG',target:'romance_deferred_E_payoff'}],next:'RETURN'},
    {key:'ROMANCE',condition:(gs)=>gs.hasFlag('_joute_E2_vu'),text:"Prendre sa main. « Plus tard n'était pas jamais. »",intent:'romance',target:'Alistair',importance:'major',
     effects:[{type:'ADD_GAUGE',target:'lien_E',value:2},{type:'SET_FLAG',target:'focus_romantique_E'},{type:'SET_FLAG',target:'romance_deferred_E_payoff'}],next:'RETURN'},
    {key:'BACK',condition:(gs)=>gs.hasFlag('_joute_E2_vu'),text:"« Je voulais seulement que l'attente ne ressemble pas à un rejet. »",intent:'distance',target:'Alistair',importance:'significant',
     effects:[{type:'SET_FLAG',target:'romance_deferred_E_closed'}],next:'RETURN'}
  ]
},

'R_O_1': {
  onEnter:(state)=>{if(state&&Array.isArray(state.flags)&&!state.flags.includes('_romance_beat_recent'))state.flags.push('_romance_beat_recent');},
  sceneNumber: 'R_O_1',
  chapter: 2,
  title: "La Porte qu'il Laisse Ouverte",
  mood: 'intimate',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Acte%201/Bivouac_nuit_kaelen.jpeg",
  condition: (gs) => relationAvailableO(gs),
  getDynamicNarrative: (gs) => {
    let text = "La mansarde dort. Kaelen est près de la lucarne, une dague démontée sur les genoux.\n\n";
    if (gs.hasFlag('kaelen_retrouvailles_choisi')) {
      text += "« Tu es déjà revenue me chercher une fois. Je n'ai pas oublié. »\n\n";
    } else if (gs.hasFlag('focus_romantique_O')) {
      text += "Il a remarqué les pas que tu as faits vers lui.\n\n";
    }
    text += "Kaelen pose la dague hors de portée et vient près de toi.\n\n";
    text += "« Je ne prends rien que tu ne me donnes. »\n\n";
    text += "Il tend la main et attend.";
    if (gs.hasFlag('alistair_sait_kaelen_compte')) {
      text += "\n\nIl sait qu'Alistair compte aussi. Il ne te demande pas de choisir.";
    }
    return text;
  },
  choices: [
    {
      key: 'O_TOUCH',
      text: "Prendre sa main. « Alors ne prends rien. Reste seulement. »",
      response: "Les doigts de Kaelen se referment sur les tiens seulement après les tiens sur les siens. « Rester, je peux essayer. » Son pouce effleure ta peau. « Le plus dur sera de ne pas transformer ça en quelque chose qu’on peut perdre. »",
      effects: [
        { type: "SET_FLAG", target: "_romance_O_deepened" },
        { type: "SET_FLAG", target: "_done_R_O_1" },
        { type: "SET_FLAG", target: "kaelen_attend_permission" },
        { type: "SET_FLAG", target: "focus_romantique_O" },
        { type: "ADD_GAUGE", target: "lien_O", value: 2 },
        { type: "ADD_GAUGE", target: "volonte", value: 1 },
        { type: "ADD_GAUGE", target: "possession", value: -1 }
      ],
      next: 'ACTE2_08_MATIN_AUBERGE'
    },
    {
      key: 'O_KISS',
      text: "Réduire toi-même la dernière distance. Le reste appartient à la nuit.",
      response: "Kaelen te laisse franchir la dernière distance. Il ne saisit rien, ne prend pas l’avantage. Quand il répond enfin au baiser, c’est avec une retenue presque violente — comme si attendre ta décision lui coûtait plus que n’importe quel combat.",
      effects: [
        { type: "SET_FLAG", target: "_romance_O_deepened" },
        { type: "SET_FLAG", target: "_done_R_O_1" },
        { type: "SET_FLAG", target: "intimite_O_suggeree" },
        { type: "SET_FLAG", target: "focus_romantique_O" },
        { type: "ADD_GAUGE", target: "lien_O", value: 2 }
      ],
      next: 'ACTE2_08_MATIN_AUBERGE'
    },
    {
      key: 'O_NOT_YET',
      text: "Effleurer sa paume puis la laisser retomber. « Pas ce soir. »",
      response: "Kaelen baisse les yeux vers sa main vide. Puis il la remet dans sa poche. « Pas ce soir. » Il répète tes mots sans ironie. « Ça ressemble beaucoup à une porte. J’essaierai de ne pas la forcer. »",
      effects: [
        { type: "SET_FLAG", target: "_done_R_O_1" },
        { type: "SET_FLAG", target: "kaelen_limite_respectee" },
        { type: "SET_FLAG", target: "focus_romantique_O" },
        { type: "ADD_GAUGE", target: "lien_O", value: 1 },
        { type: "ADD_GAUGE", target: "volonte", value: 2 }
      ],
      next: 'ACTE2_08_MATIN_AUBERGE'
    }
  ]
},

'R_E_1': {
  onEnter:(state)=>{if(state&&Array.isArray(state.flags)&&!state.flags.includes('_romance_beat_recent'))state.flags.push('_romance_beat_recent');},
  sceneNumber: 'R_E_1',
  chapter: 2,
  title: "La Porte Restée Ouverte",
  mood: 'intimate',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Acte%201/Bivouac_aube_alistair.jpeg",
  condition: (gs) => relationAvailableE(gs),
  getDynamicNarrative: (gs) => {
    let text = "L'aube blanchit les volets. Alistair tient encore son insigne dans sa paume.\n\n";
    if (gs.hasFlag('alistair_retrouvailles_choisi')) {
      text += "« Tu m'as dit de rester sans serment. J'essaie. »\n\n";
    } else if (gs.hasFlag('focus_romantique_E')) {
      text += "Depuis que tu es revenue vers lui, il ne sait plus très bien où finit le devoir.\n\n";
    }
    text += "Il ferme la porte par réflexe, s'arrête, puis la rouvre. Il pose l'insigne près de la clé.\n\n";
    text += "« Je ferme les portes sans y penser. »\n\n";
    text += "Il recule et te laisse choisir la suite.";
    if (gs.hasFlag('kaelen_fresque_confiee') || gs.hasFlag('focus_romantique_O')) {
      text += "\n\nIl sait que Kaelen peut compter aussi. Il ne te demande pas de choisir.";
    }
    return text;
  },
  choices: [
    {
      key: 'E_TOUCH',
      text: "Prendre sa main et la poser contre ta joue. « Apprends à rester sans clé. »",
      response: "Alistair tremble lorsque sa paume touche ta joue. Ses doigts commencent à se refermer, puis s'immobilisent. Il jette un regard à la clé restée sur la table et ouvre de nouveau la main. « D'accord. » Un seul mot, sans serment derrière.",
      effects: [
        { type: "SET_FLAG", target: "_romance_E_deepened" },
        { type: "SET_FLAG", target: "_done_R_E_1" },
        { type: "SET_FLAG", target: "alistair_porte_ouverte" },
        { type: "SET_FLAG", target: "focus_romantique_E" },
        { type: "ADD_GAUGE", target: "lien_E", value: 2 },
        { type: "ADD_GAUGE", target: "volonte", value: 1 },
        { type: "ADD_GAUGE", target: "possession", value: -1 }
      ],
      next: 'ACTE2_08_MATIN_AUBERGE'
    },
    {
      key: 'E_KISS',
      text: "L'embrasser avant qu'il puisse transformer l'instant en prière. La porte reste ouverte.",
      response: "Le premier souffle d’Alistair ressemble effectivement à une prière. Il l’avale avant qu’elle ne devienne un mot et répond au baiser comme un homme qui accepte enfin de ne pas bénir ce qu’il désire.",
      effects: [
        { type: "SET_FLAG", target: "_romance_E_deepened" },
        { type: "SET_FLAG", target: "_done_R_E_1" },
        { type: "SET_FLAG", target: "intimite_E_suggeree" },
        { type: "SET_FLAG", target: "focus_romantique_E" },
        { type: "ADD_GAUGE", target: "lien_E", value: 2 }
      ],
      next: 'ACTE2_08_MATIN_AUBERGE'
    },
    {
      key: 'E_NOT_YET',
      text: "« Pas encore. Mais ne referme pas la porte. »",
      response: "Alistair regarde la porte ouverte derrière lui. « Elle restera ouverte. » Il sourit à peine. « Même si tu ne reviens pas ce soir. Même si tu ne reviens jamais pour ça. »",
      effects: [
        { type: "SET_FLAG", target: "_done_R_E_1" },
        { type: "SET_FLAG", target: "alistair_limite_respectee" },
        { type: "SET_FLAG", target: "focus_romantique_E" },
        { type: "ADD_GAUGE", target: "lien_E", value: 1 },
        { type: "ADD_GAUGE", target: "volonte", value: 2 }
      ],
      next: 'ACTE2_08_MATIN_AUBERGE'
    }
  ]
},

// V40.3.7 LEGACY — plus interceptée dans une nouvelle partie.

'LIEN_O_2_CONFIDENCE': {
  onEnter:(state)=>{if(state&&Array.isArray(state.flags)&&!state.flags.includes('_romance_beat_recent'))state.flags.push('_romance_beat_recent');},
  sceneNumber: 'L2_O',
  chapter: 2,
  title: "Ce que les Lames Cachent",
  mood: 'intimate',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Acte%202/Chambre_exigu%C3%AB_202606191345.jpeg",
  condition: (gs) => relationAvailableO(gs),
  getDynamicNarrative: (gs) => {
    let text = "Alistair est descendu. Kaelen reste seul avec toi dans la mansarde.\n\n";
    text += "Il montre une vieille lame. « Elle a tué mon premier maître. J'avais douze ans. »\n\n";
    text += "« Les Confrères m'ont appris à vendre ce que je savais faire. » Il relève les yeux vers toi.\n\n";
    text += "« Si tu me gardes près de toi, sois claire. L'utilité, je comprends. Le reste… moins. »";
    return text;
  },
  choices: [
    { 
      key: 'A', 
      text: "« Je ne sais pas qui j’étais, Kaelen. Comment pourrais-je te mentir ? »", 
      effects: [
        { type: "ADD_GAUGE", target: "lien_O", value: 1 }, 
        { type: "SET_FLAG", target: "_lien_O_2_vu" },
        { type: "SET_FLAG", target: "_lien_O_2_ouvert" }
      ], 
      next: 'ACTE2_06_NUIT_AUBERGE' 
    },
    { 
      key: 'B', 
      text: "« Ta confidence ne m’achète rien. Garde tes secrets, je garde les miens. »", 
      effects: [
        { type: "ADD_GAUGE", target: "affinite_ombre", value: 3 }, 
        { type: "SET_FLAG", target: "_lien_O_2_vu" },
        { type: "SET_FLAG", target: "_lien_O_2_ferme" }
      ], 
      next: 'ACTE2_06_NUIT_AUBERGE' 
    },
    {
      key: 'D',
      text: "« Merci de me le dire. Je préfère qu'on reste proches, sans aller plus loin pour l'instant. »",
      response: "Kaelen range la lame. « Proches. Sans le reste. Au moins c'est clair. »",
      effects: [
        { type: "ADD_GAUGE", target: "lien_O", value: 1 },
        { type: "SET_FLAG", target: "_lien_O_2_vu" },
        { type: "SET_FLAG", target: "_lien_O_2_ouvert" },
        { type: "SET_FLAG", target: "amis_O" },
        { type: "SET_FLAG", target: "romance_en_pause_O" }
      ],
      next: 'ACTE2_06_NUIT_AUBERGE'
    }
  ]
},

// V40.3.7 LEGACY — plus interceptée dans une nouvelle partie.

'LIEN_E_2_CONFIDENCE': {
  onEnter:(state)=>{if(state&&Array.isArray(state.flags)&&!state.flags.includes('_romance_beat_recent'))state.flags.push('_romance_beat_recent');},
  sceneNumber: 'L2_E',
  chapter: 2,
  title: "Le Sceau qui Tremble",
  mood: 'intimate',
  image: "https://cdn.jsdelivr.net/gh/Sunstrader/Releases@main/Acte%202/Chambre_exigu%C3%AB_202606191345.jpeg",
  condition: (gs) => relationAvailableE(gs),
  getDynamicNarrative: (gs) => {
    let text = "Kaelen a quitté la mansarde. Alistair tourne son insigne entre ses doigts.\n\n";
    text += "« Ma mère me l'a donné le jour où l'Ordre m'a pris. J'ai passé vingt ans à croire que cette lumière me guidait. »\n\n";
    text += "Il tente de rallumer le sceau. La lumière hésite puis s'éteint.\n\n";
    text += "Alistair le pose face contre bois. « Je ne sais plus ce que je dois croire. »";
    return text;
  },
  choices: [
    { 
      key: 'A', 
      text: "« Ton Ordre t’a menti, Alistair. Mais ce n’est pas moi qui te sauverai. Relève-toi seul. »", 
      effects: [
        { type: "ADD_GAUGE", target: "affinite_eclaireur", value: 3 }, 
        { type: "SET_FLAG", target: "_lien_E_2_vu" },
        { type: "SET_FLAG", target: "_lien_E_2_dur" }
      ], 
      next: 'ACTE2_06_NUIT_AUBERGE' 
    },
    { 
      key: 'B', 
      text: "Poser ta main sur son insigne éteint. « La lumière n’est pas dans cet objet. Elle est dans le choix que tu fais ce soir. »", 
      effects: [
        { type: "ADD_GAUGE", target: "lien_E", value: 1 }, 
        { type: "SET_FLAG", target: "_lien_E_2_vu" },
        { type: "SET_FLAG", target: "_lien_E_2_doux" }
      ], 
      next: 'ACTE2_06_NUIT_AUBERGE' 
    },
    {
      key: 'D',
      text: "« Je tiens à ce que tu sois là. Comme un ami. Pas plus, pas pour l’instant. »",
      response: "Alistair inspire. « Alors je reste comme un ami. Si un jour tu veux autre chose, ce sera toi qui le diras. »",
      effects: [
        { type: "ADD_GAUGE", target: "lien_E", value: 1 },
        { type: "SET_FLAG", target: "_lien_E_2_vu" },
        { type: "SET_FLAG", target: "_lien_E_2_doux" },
        { type: "SET_FLAG", target: "amis_E" },
        { type: "SET_FLAG", target: "romance_en_pause_E" }
      ],
      next: 'ACTE2_06_NUIT_AUBERGE'
    }
  ]
},

'LIEN_POMME': {
    sceneNumber: 'L_POMME',
    chapter: 2,
    title: "La Pomme et les Deux Mains",
    mood: 'romance',
    // Trigger lien_pomme contrôle l'accès (run classique: double lien ≥2)
    condition: (gs) => true,
    getDynamicNarrative: (gs) => {
      return "Un pommier tordu surplombe le sentier. Une pomme se détache, roule, s’arrête entre les bottes de Kaelen et d’Alistair.\n\n" + "Les deux se baissent en même temps. Leurs doigts se touchent sur la peau rouge.\n\n" + "Un silence. Trop long.\n\n" + "Kaelen retire sa main le premier, mâchoire serrée. Alistair garde la pomme, puis la tend à l’assassin sans un mot.\n\n" + "Kaelen la prend. Il ne la mange pas. Il la glisse dans sa poche.";
    },
    choices: [
      {
        key: 'A',
        text: "Ne rien dire. Continuer.",
        effects: [
          { type: "SET_FLAG", target: "pomme_ramassee" },
          { type: "ADD_GAUGE", target: "lien_O", value: 1 },
          { type: "ADD_GAUGE", target: "lien_E", value: 1 },
          { type: "UNLOCK_ACHIEVEMENT", target: "ach_pomme" }
        ],
        next: 'RETURN'
      }
    ]
  },

'LIEN_FEU_PARTAGE': {
    sceneNumber: 'L_FEU',
    chapter: 2,
    title: "Le Même Feu",
    mood: 'intimate',
    condition: (gs) => gs.hasFlag('pomme_ramassee') || gs.hasFlag('kaelen_alistair_rapprochement'),
    getDynamicNarrative: (gs) => {
      const beforeInn = gs.returnSceneId === 'ACTE2_06_NUIT_AUBERGE';
      const place = beforeInn
        ? "Avant de monter dans la chambre de l'auberge, vous vous arrêtez près du foyer."
        : "Pendant la halte, vous vous arrêtez près du feu de camp.";
      return place + "\n\nTu t'éloignes avec Fen. Kaelen et Alistair restent seuls un instant. Quand tu reviens, Alistair tend à Kaelen la pomme ramassée sur la route. Kaelen en prend une bouchée et la lui rend. Ils ne se disputent pas.";
    },
    choices: [
      {
        key: 'NEXT',
        text: "Rejoindre Kaelen et Alistair.",
        effects: [{ type: "SET_FLAG", target: "regard_partage_feu" }],
        next: 'RETURN'
      }
    ]
  },

'ACTE_DAGUE_GRAVURE': {
    sceneNumber: 'DAGUE_GRAV',
    chapter: 3,
    title: "Ce que la Lame Retient",
    mood: 'intimate',
    condition: (gs) => gs.hasFlag('dague_kaelen_prise') && !gs.hasFlag('dague_gravee'),
    getDynamicNarrative: (gs) => {
      return "Tu tournes la dague de Kaelen entre tes doigts. Le métal est froid, familier.\n\n" + "Sans vraiment y penser, tu gravues un signe minuscule près de la garde — un fragment de givre, à peine visible.\n\n" + "Tu ne le diras pas à voix haute. C’est une marque — quelque chose de toi sur ce qui fut à lui.";
    },
    choices: [
      {
        key: 'A',
        text: "Ranger la dague. Ne rien expliquer.",
        effects: [
          { type: "SET_FLAG", target: "dague_gravee" },
          { type: "UNLOCK_ACHIEVEMENT", target: "ach_dague_gravee" }
        ],
        next: 'RETURN'
      }
    ]
  },

'LIEN_NON_DIT': {
    sceneNumber: 'L_NONDIT',
    chapter: 2,
    title: "Ce qui ne se dit pas",
    mood: 'intimate',
    condition: (gs) => gs.hasFlag('pomme_ramassee') && !gs.hasFlag('silence_complice_auberge'),
    getDynamicNarrative: (gs) => {
      return "Plus tard, dans le silence de l’auberge, Kaelen et Alistair échangent un regard par-dessus ta tête.\n\n" + "Rien n’est dit. Une main est tendue un instant de trop près d’une autre. Puis le moment passe.\n\n" + "Tu fais semblant de ne pas avoir vu.";
    },
    choices: [
      {
        key: 'NEXT',
        text: "Laisser le silence s’installer.",
        effects: [
          { type: "SET_FLAG", target: "silence_complice_auberge" },
          { type: "SET_FLAG", target: "main_tendue_crevasse" }
        ],
        next: 'RETURN'
      }
    ]
  },

'JOUTE_O_1': {
  onEnter:(state)=>{if(state&&Array.isArray(state.flags)&&!state.flags.includes('_romance_beat_recent'))state.flags.push('_romance_beat_recent');},
    sceneNumber: 'JOUTE_O_1',
    chapter: 2,
    title: "Le Tarif et la Porte",
    mood: 'tension',
    condition: (gs) => relationAvailableO(gs),
    getDynamicNarrative: (gs) => {
      return "Kaelen s’adosse au mur de la mansarde, bras croisés. L’aube n’est pas encore levée.\n\n" +
        "« On va clarifier les termes, Reine. »\n\n" +
        "Il ne sort pas de dague. C’est pire.\n\n" +
        "« Je reste. Pour l’instant. Mais chaque jour que je passe à te suivre au lieu de prendre la porte, ça me coûte. »\n\n" +
        "Ses yeux ne quittent pas les tiens.\n\n" +
        "« Dis-moi ce que tu es prête à payer. Ou dis-moi de partir. Les deux me conviennent. L’entre-deux, non. »";
    },
    choices: [
      {
        key: 'A',
        intent: "liberte",
        target: "Kaelen",
        importance: "major",
        irreversible: false,
        text: "« Je ne paie rien. Tu restes parce que tu le veux. »",
        response: "Kaelen ne sourit pas. « Mauvaise négociatrice. » Puis, après un temps : « Bonne réponse. Si je reste, la dette sera à moi. »",
        effects: [
          { type: "SET_FLAG", target: "_joute_O1_vu" },
          { type: "ADD_GAUGE", target: "lien_O", value: 1 },
          { type: "ADD_GAUGE", target: "volonte", value: 2 }
        ],
        next: 'RETURN'
      },
      {
        key: 'B',
        intent: "possession",
        target: "Kaelen",
        importance: "significant",
        irreversible: false,
        text: "« Le tarif, c’est moi. Prends-le ou pars. »",
        response: "Son regard descend sur toi puis remonte, lentement. « Voilà un prix qui sait qu’il est dangereux. » Il ne te touche pas. « Je vais avoir besoin de lire les conditions. »",
        effects: [
          { type: "SET_FLAG", target: "_joute_O1_vu" },
          { type: "ADD_GAUGE", target: "lien_O", value: 2 },
          { type: "ADD_GAUGE", target: "possession", value: 2 }
        ],
        next: 'RETURN'
      },
      {
        key: 'C',
        intent: "liberte",
        target: "Kaelen",
        importance: "major",
        irreversible: false,
        text: "« La porte est là. Je ne te retiendrai pas. »",
        response: "Kaelen regarde réellement la porte. Une seconde. Deux. « C’est agaçant. » Il reste adossé au mur. « J’espérais que tu me donnerais une raison de prétendre que je n’avais pas choisi. »",
        effects: [
          { type: "SET_FLAG", target: "_joute_O1_vu" },
          { type: "ADD_GAUGE", target: "affinite_ombre", value: 2 },
          { type: "ADD_GAUGE", target: "volonte", value: 1 }
        ],
        next: 'RETURN'
      },
      {
        key: 'D',
        intent: "tendresse",
        target: "Kaelen",
        importance: "significant",
        irreversible: false,
        text: "Rester silencieuse. Le laisser décider.",
        response: "Le silence s’étire. Kaelen finit par souffler du nez. « Très bien. Pas de contrat, alors. » Il ne bouge pas vers la porte. « Juste une mauvaise décision que je continuerai demain. »",
        effects: [
          { type: "SET_FLAG", target: "_joute_O1_vu" },{ type: "ADD_GAUGE", target: "lien_O", value: 1 },
          { type: "SET_FLAG", target: "joute_silence_O" }
        ],
        next: 'RETURN'
      }
    ]
  },

'JOUTE_E_1': {
  onEnter:(state)=>{if(state&&Array.isArray(state.flags)&&!state.flags.includes('_romance_beat_recent'))state.flags.push('_romance_beat_recent');},
    sceneNumber: 'JOUTE_E_1',
    chapter: 2,
    title: "La Clé et le Seuil",
    mood: 'tension',
    condition: (gs) => relationAvailableE(gs),
    getDynamicNarrative: (gs) => {
      return "Alistair tient quelque chose dans sa main fermée. Une clé ancienne. Ou un sceau.\n\n" +
        "« L’Ordre m’a donné ça le jour où j’ai prêté serment. »\n\n" +
        "Il l’ouvre. La lumière en sort, faible.\n\n" +
        "« Je peux t’enfermer pour te protéger. Ou je peux te laisser la clé. »\n\n" +
        "Ses doigts tremblent à peine.\n\n" +
        "« Dis-moi laquelle des deux options te fait le plus peur. »";
    },
    choices: [
      {
        key: 'A',
        intent: "confiance",
        target: "Alistair",
        importance: "major",
        irreversible: false,
        text: "« Garde ta clé. Je ne suis la prisonnière de personne. »",
        response: "Alistair referme les doigts sur la clé. « Non. » Il la glisse ensuite dans ta direction, s'arrête, puis la ramène à lui. Le mouvement avorté dit davantage que son serment n'aurait su le faire.",
        effects: [
          { type: "SET_FLAG", target: "_joute_E1_vu" },
          { type: "ADD_GAUGE", target: "volonte", value: 2 },
          { type: "ADD_GAUGE", target: "affinite_eclaireur", value: 2 }
        ],
        next: 'RETURN'
      },
      {
        key: 'B',
        intent: 'distance',
        target: "Alistair",
        importance: "major",
        irreversible: false,
        text: "Prendre la clé. « Et si c’était toi qui avais besoin d’être enfermé ? »",
        response: "Un rire bref lui échappe — sans joie, mais sans défense non plus. « Alors ne me donne jamais la clé de ma propre cellule. » Son pouce frôle le métal dans ta paume. « Je pourrais appeler ça de la protection. »",
        effects: [
          { type: "SET_FLAG", target: "_joute_E1_vu" },
          { type: "ADD_GAUGE", target: "lien_E", value: 2 },
          { type: "ADD_GAUGE", target: "possession", value: 2 }
        ],
        next: 'RETURN'
      },
      {
        key: 'C',
        intent: "liberte",
        target: "Alistair",
        importance: "major",
        irreversible: false,
        text: "« Pose-la. On verra demain. »",
        response: "Il pose la clé entre vous. « Demain. » Pour une fois, le mot n’a rien d’un serment. Seulement la permission de ne pas décider ce soir.",
        effects: [
          { type: "SET_FLAG", target: "_joute_E1_vu" },
          { type: "ADD_GAUGE", target: "lien_E", value: 1 },
          { type: "SET_FLAG", target: "ton_douceur" }
        ],
        next: 'RETURN'
      },
      {
        key: 'D',
        intent: "tendresse",
        target: "Alistair",
        importance: "significant",
        irreversible: false,
        text: "Fermer sa main sur la clé sans la prendre.",
        response: "Alistair baisse les yeux vers tes doigts sur les siens. « Tu me laisses le choix. » Il avale difficilement. « J’aimerais apprendre à faire la même chose pour toi. »",
        effects: [
          { type: "SET_FLAG", target: "_joute_E1_vu" },
          { type: "ADD_GAUGE", target: "lien_E", value: 1 },
          { type: "ADD_GAUGE", target: "volonte", value: 1 }
        ],
        next: 'RETURN'
      }
    ]
  },

'JOUTE_O_2': {
  onEnter:(state)=>{if(state&&Array.isArray(state.flags)&&!state.flags.includes('_romance_beat_recent'))state.flags.push('_romance_beat_recent');},
    sceneNumber: 'JOUTE_O_2',
    chapter: 3,
    title: "Le Dernier Tarif",
    mood: 'tension',
    condition: (gs) => relationAvailableO(gs),
    getDynamicNarrative: (gs) => {
      let text = "Le village caché est derrière vous. La crevasse s’ouvre devant.\n\n";
      text += "Kaelen s’arrête. Il ne sort pas de dague. Il n’en a plus besoin.\n\n";
      text += "« On approche de la fin, Reine. »\n\n";
      text += "Il te regarde droit. Plus de ricanement. Plus de clause.\n\n";
      text += "« Si je continue, je ne pourrai plus partir. Pas proprement. Pas sans laisser quelque chose derrière. »\n\n";
      text += "Un silence.\n\n";
      text += "« Dis-moi maintenant si tu veux que je reste jusqu’au bout. Ou dis-moi de prendre la porte pendant qu’il en reste une. »";
      if (gs.getGauge('possession') >= 10) {
        text += "\n\nTu sens déjà la réponse dans ta poitrine. Tu ne le laisseras pas partir.";
      }
      return text;
    },
    choices: [
      {
        key: 'A',
        intent: "romance",
        target: "Kaelen",
        importance: "major",
        irreversible: false,
        text: "« Reste. Jusqu’au bout. »",
        response: "Kaelen te regarde comme s’il cherchait la clause cachée. « Jusqu’au bout, alors. » Son sourire revient, mais il est plus sombre. « Fais juste attention, Reine. Les mots comme celui-là deviennent vite des chaînes quand on a peur de perdre. »",
        effects: [
          { type: "SET_FLAG", target: "_joute_O2_vu" },
          { type: "ADD_GAUGE", target: "lien_O", value: 2 },
          { type: "ADD_GAUGE", target: "possession", value: 2 },
          { type: "SET_FLAG", target: "kaelen_jusqu_au_bout" }
        ],
        next: 'RETURN'
      },
      {
        key: 'B',
        intent: "liberte",
        target: "Kaelen",
        importance: "major",
        irreversible: false,
        text: "« La porte est encore là. Prends-la si tu dois. »",
        response: "Kaelen tourne la tête vers le chemin derrière vous. « Tu es vraiment mauvaise en possession. » Il souffle un rire. « Tant mieux. Je reste aujourd’hui. Parce que la porte existe encore. »",
        effects: [
          { type: "SET_FLAG", target: "_joute_O2_vu" },
          { type: "ADD_GAUGE", target: "volonte", value: 2 },
          { type: "ADD_GAUGE", target: "lien_O", value: 1 },
          { type: "SET_FLAG", target: "kaelen_libre_choisir" }
        ],
        next: 'RETURN'
      },
      {
        key: 'E',
        text: "« Reste si c’est ton choix. Demain, je te laisserai encore choisir. »",
        response: "Quelque chose se défait dans les épaules de Kaelen. « Demain aussi ? » Il hoche lentement la tête. « Ça, je peux le croire. Pas l’éternité. Demain. »",
        effects: [
          { type: "SET_FLAG", target: "_joute_O2_vu" },
          { type: "SET_FLAG", target: "kaelen_amour_libre" },
          { type: "SET_FLAG", target: "focus_romantique_O" },
          { type: "ADD_GAUGE", target: "volonte", value: 2 },
          { type: "ADD_GAUGE", target: "lien_O", value: 2 },
          { type: "ADD_GAUGE", target: "possession", value: -2 }
        ],
        next: 'RETURN'
      },
      {
        key: 'C',
        intent: "distance",
        target: "Kaelen",
        importance: "significant",
        irreversible: false,
        text: "« Je ne te demande rien. Je ne te retiens pas. »",
        response: "Le visage de Kaelen se ferme, puis s’apaise d’une manière plus difficile à lire. « Alors ne sois pas surprise si je reste quand même. » Il te dépasse de quelques pas. « Et ne prends pas ça pour un contrat. »",
        effects: [
          { type: "SET_FLAG", target: "_joute_O2_vu" },
          { type: "ADD_GAUGE", target: "volonte", value: 3 },
          { type: "SET_FLAG", target: "joute_froide_O" }
        ],
        next: 'RETURN'
      },
      {
        key: 'D',
        intent: "tendresse",
        target: "Kaelen",
        importance: "significant",
        irreversible: false,
        text: "Rester silencieuse. Le laisser lire ta réponse dans tes yeux.",
        response: "Kaelen soutient ton regard jusqu’à ce que le silence devienne presque une réponse. « Mauvaise habitude », murmure-t-il. « Me laisser interpréter. » Pourtant il reste. Cette fois, il sait que l’incertitude fait partie du choix.",
        effects: [
          { type: "SET_FLAG", target: "_joute_O2_vu" },
          { type: "ADD_GAUGE", target: "lien_O", value: 1 },
          { type: "SET_FLAG", target: "possession_kaelen_sans_mots" }
        ],
        next: 'RETURN'
      }
    ]
  },

'JOUTE_E_2': {
  onEnter:(state)=>{if(state&&Array.isArray(state.flags)&&!state.flags.includes('_romance_beat_recent'))state.flags.push('_romance_beat_recent');},
    sceneNumber: 'JOUTE_E_2',
    chapter: 3,
    title: "Le Dernier Seuil",
    mood: 'tension',
    condition: (gs) => relationAvailableE(gs),
    getDynamicNarrative: (gs) => {
      let text = "Avant le village, Alistair s’arrête. L’insigne brille faiblement dans sa main.\n\n";
      text += "« Je peux encore faire demi-tour. » Il ne précise pas vers quoi. Il n'en a pas besoin.\n\n";
      text += "Il détache son insigne. Le chemin du retour est derrière lui ; toi, devant. Pendant plusieurs secondes il tient le métal exactement entre les deux directions.\n\n";
      text += "Puis il pose l'insigne sur une borne de pierre. Pas à tes pieds. Pas dans ta main.\n\n";
      text += "« Si je continue, je ne veux plus pouvoir appeler ça une mission. »\n\n";
      text += "Il fait un pas vers toi et s'arrête avant d'entrer dans ton espace. Le reste de la question demeure dans la distance qu'il te laisse.";
      if (gs.getGauge('possession') >= 10) {
        text += "\n\nTu sens déjà la cage se reformer. Plus douce. Plus définitive.";
      }
      return text;
    },
    choices: [
      {
        key: 'A',
        intent: "romance",
        target: "Alistair",
        importance: "major",
        irreversible: false,
        text: "« Reste. Même si ce n’est plus pour le monde. »",
        response: "Alistair regarde l'insigne abandonné sur la borne. Il ne le reprend pas. « Alors je reste. » Quand il vient à toi, il s'arrête encore à une respiration de distance, jusqu'à ce que ce soit toi qui la fermes.",
        effects: [
          { type: "SET_FLAG", target: "_joute_E2_vu" },
          { type: "ADD_GAUGE", target: "lien_E", value: 2 },
          { type: "ADD_GAUGE", target: "possession", value: 2 },
          { type: "SET_FLAG", target: "alistair_pour_toi" }
        ],
        next: 'RETURN'
      },
      {
        key: 'B',
        intent: "liberte",
        target: "Alistair",
        importance: "major",
        irreversible: false,
        text: "« Tu peux partir. Je ne te retiendrai pas. »",
        response: "Alistair regarde longtemps le chemin du retour. Il ramasse son insigne — puis, au lieu de le remettre, le glisse dans sa poche. Quand il revient vers toi, il ne prononce aucune justification. Le choix se voit dans ses pas.",
        effects: [
          { type: "SET_FLAG", target: "_joute_E2_vu" },
          { type: "ADD_GAUGE", target: "volonte", value: 2 },
          { type: "ADD_GAUGE", target: "lien_E", value: 1 },
          { type: "SET_FLAG", target: "alistair_libre_choisir" }
        ],
        next: 'RETURN'
      },
      {
        key: 'E',
        intent: "liberte",
        target: "Alistair",
        importance: "major",
        irreversible: false,
        text: "« Reste si tu le choisis. Mais ne fais jamais de moi la nouvelle forme de ta foi. »",
        response: "Alistair lève son insigne à hauteur de ses yeux. Ses lèvres bougent par habitude, mais aucune prière ne vient. Il replie le symbole dans un morceau de tissu et le range au fond de sa sacoche. Puis il revient vers toi les mains vides.",
        effects: [
          { type: "SET_FLAG", target: "_joute_E2_vu" },
          { type: "SET_FLAG", target: "alistair_foi_libre" },
          { type: "SET_FLAG", target: "focus_romantique_E" },
          { type: "ADD_GAUGE", target: "volonte", value: 2 },
          { type: "ADD_GAUGE", target: "lien_E", value: 2 },
          { type: "ADD_GAUGE", target: "possession", value: -2 }
        ],
        next: 'RETURN'
      },
      {
        key: 'C',
        intent: "distance",
        target: "Alistair",
        importance: "significant",
        irreversible: false,
        text: "« Je n’ai jamais demandé à être sauvée. »",
        response: "Alistair encaisse la phrase sans défense. « Je sais. » Cette fois il ne dit pas qu’il voulait seulement protéger. « J’ai longtemps utilisé le salut pour éviter de demander ce que tu voulais. Je ne peux pas effacer ça. »",
        effects: [
          { type: "SET_FLAG", target: "_joute_E2_vu" },
          { type: "ADD_GAUGE", target: "volonte", value: 3 },
          { type: "SET_FLAG", target: "joute_froide_E" }
        ],
        next: 'RETURN'
      },
      {
        key: 'D',
        intent: "tendresse",
        target: "Alistair",
        importance: "significant",
        irreversible: false,
        text: "Poser ta main sur la sienne. Sans un mot.",
        response: "Alistair retourne lentement sa main sous la tienne, paume ouverte. Il ne prononce aucun serment. Pour lui, le silence est peut-être l’effort le plus difficile de tous.",
        effects: [
          { type: "SET_FLAG", target: "_joute_E2_vu" },
          { type: "ADD_GAUGE", target: "lien_E", value: 1 },
          { type: "SET_FLAG", target: "ton_douceur" }
        ],
        next: 'RETURN'
      }
    ]
  },
  };
}
