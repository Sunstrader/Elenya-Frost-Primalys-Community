// V52.5.1 — Stage Director
// Elenya redevient un acteur visuel de sa propre histoire.
// La composition est automatique pour les scènes héritées, mais reste surchargeable
// scène par scène avec `stage: { mode, showElenya, hideElenya, focusSide, elenyaSprite }`.
function elenyaStageHasCharacter_(ref, name) {
  const token = String(name || '').toLowerCase();
  if (!ref || !token) return false;
  // Ne jamais confondre le dépôt "elenya-3d-assets" avec le personnage Elenya.
  return elenyaStageCharacterId_(ref) === token;
}

function elenyaStageResolveSprite_(value, gsWrapper) {
  try {
    return normalizeAssetRef(typeof value === 'function' ? value(gsWrapper) : (value || null));
  } catch (_) {
    return null;
  }
}

function elenyaStageIsCinematicImage_(value) {
  const ref = String(value || '').toLowerCase();
  return /\/cinematics\/(?:lot-\d+\/|fen-arrivee\/|echo-neige\/|awakening\/|bivouac-choix\/|duel-(?:orage|cendre)-fin-)|\/cg\/|(?:sprites(?:\s|%20)*-(?:\s|%20)*interactions(?:\s|%20)*bg|\/interactions\/)/.test(ref);
}

function elenyaStageCharacterId_(ref) {
  const value = String(ref || '').toLowerCase();
  if (!value) return null;
  // Le dépôt CDN contient "elenya" dans son nom : n'identifier que le chemin
  // du fichier/personnage, jamais le nom du dépôt complet.
  let path = value;
  try {
    path = String(new URL(value).pathname || value).toLowerCase();
  } catch (_) {}
  let leaf = path.split('/').pop() || '';
  try { leaf = decodeURIComponent(leaf); } catch (_) {}
  return ['kaelen','alistair','elenya'].find(id =>
    leaf === id || leaf.indexOf(id + '.') === 0 || leaf.indexOf(id + '-') === 0 || leaf.indexOf(id + '_') === 0 ||
    path.indexOf('/sprites/' + id + '.') !== -1 || path.indexOf('/sprites/' + id + '-') !== -1 ||
    path.indexOf('/characters/' + id + '/') !== -1
  ) || null;
}

function elenyaStageHash_(value) {
  const text = String(value || '');
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function elenyaStageAutoElenyaSide_(sceneId, scene, cfg) {
  const explicit = String(cfg && cfg.elenyaSide || '').toLowerCase();
  if (explicit === 'left' || explicit === 'right') return explicit;
  const key = (cfg && cfg.layoutKey) || scene.image || ('chapter:' + String(scene.chapter || 1) + ':' + String(sceneId || ''));
  return (elenyaStageHash_(key) % 2) === 0 ? 'left' : 'right';
}

function elenyaStageFraming_(scene, cfg, castCount) {
  const explicit = String(cfg && cfg.framing || '').toLowerCase();
  if (/^(close|medium|wide)$/.test(explicit)) return explicit;
  const mood = String(scene && scene.mood || 'exploration').toLowerCase();
  if (mood === 'romance' || mood === 'intimate') return 'close';
  if (mood === 'action') return 'wide';
  if (mood === 'tension') return 'medium';
  if (castCount >= 2 && mood === 'exploration') return 'wide';
  return 'medium';
}

function elenyaStageDefaultState_(id, scene) {
  const mood = String(scene && scene.mood || 'exploration').toLowerCase();
  const state = { outfit:'travel', expression:'neutral', pose:'idle', animation:'idle' };
  if (mood === 'action') {
    state.outfit = 'combat';
    state.pose = 'combat';
    state.expression = id === 'elenya' ? 'determined' : (id === 'kaelen' ? 'angry' : 'serious');
  } else if (mood === 'tension') {
    state.pose = 'guarded';
    state.expression = id === 'elenya' ? 'worried' : (id === 'kaelen' ? 'cold' : 'serious');
  } else if (mood === 'romance' || mood === 'intimate') {
    state.pose = 'open';
    state.expression = id === 'alistair' ? 'warm' : 'soft';
  } else if (mood === 'epilogue' || mood === 'end') {
    state.expression = id === 'alistair' ? 'warm' : 'soft';
  }
  return state;
}

function elenyaStageCharacterStates_(scene, cfg, refsBySide, focusSide) {
  const result = {};
  const overrides = cfg && cfg.characters && typeof cfg.characters === 'object' ? cfg.characters : {};
  const entries = Object.entries(refsBySide || {});
  entries.forEach(([side, ref]) => {
    const id = elenyaStageCharacterId_(ref);
    if (!id || result[id]) return;
    result[id] = Object.assign({}, elenyaStageDefaultState_(id, scene), overrides[id] || {});
    if (side === focusSide && !(overrides[id] && overrides[id].animation)) {
      result[id].animation = 'active';
    }
  });
  return result;
}

function elenyaComposeStage_(sceneId, scene, gsWrapper, endingCg, resolvedImage) {
  scene = scene || {};
  const cfg = scene.stage && typeof scene.stage === 'object' ? scene.stage : {};
  let sprite = endingCg ? null : elenyaStageResolveSprite_(scene.sprite, gsWrapper);
  let spriteLeft = endingCg ? null : elenyaStageResolveSprite_(scene.spriteLeft, gsWrapper);
  let spriteRight = endingCg ? null : elenyaStageResolveSprite_(scene.spriteRight, gsWrapper);
  const sceneImage = resolvedImage || elenyaStageResolveSprite_(scene.image, gsWrapper);
  const cinematicIllustration = elenyaStageIsCinematicImage_(sceneImage);

  // Les sprites représentent les personnes physiquement présentes. Un personnage
  // perdu ou mort peut toutefois rester visible dans un souvenir.
  if (!scene.isFlashback) {
    const present = ref => {
      const id = elenyaStageCharacterId_(ref);
      return id === 'kaelen' ? companionPresentO(gsWrapper)
        : id === 'alistair' ? companionPresentE(gsWrapper) : true;
    };
    if (!present(sprite)) sprite = null;
    if (!present(spriteLeft)) spriteLeft = null;
    if (!present(spriteRight)) spriteRight = null;
  }

  // Une illustration cinématique contient déjà les personnages et leur cadrage.
  // Aucun sprite (automatique, modulaire ou hérité) ne doit être superposé.
  if (cinematicIllustration) {
    sprite = null;
    spriteLeft = null;
    spriteRight = null;
  }

  const explicitPair = !!spriteLeft && !!spriteRight;
  const forceElenya = cfg.showElenya === true || scene.stageElenya === true;
  const stageMode = String(cfg.mode || scene.stageMode || '').trim().toLowerCase();
  const suppressAutoElenya =
    endingCg ||
    cinematicIllustration ||
    cfg.hideElenya === true ||
    scene.hideElenya === true ||
    stageMode === 'environment' ||
    scene.isEnd === true ||
    (scene.isFlashback === true && !forceElenya);

  const alreadyHasElenya =
    elenyaStageHasCharacter_(sprite, 'elenya') ||
    elenyaStageHasCharacter_(spriteLeft, 'elenya') ||
    elenyaStageHasCharacter_(spriteRight, 'elenya');

  const elenyaSprite = normalizeAssetRef(cfg.elenyaSprite || 'Elenya');
  let autoElenya = false;
  let autoFocusSide = '';

  // Respect absolu des compositions duo explicites : Kaelen/Alistair, interactions,
  // scènes de contact, etc. Elles ne sont jamais écrasées par l'automatisme.
  if (!suppressAutoElenya && !alreadyHasElenya && !explicitPair && elenyaSprite) {
    if (spriteLeft || spriteRight) {
      if (!spriteLeft) {
        spriteLeft = elenyaSprite;
        autoFocusSide = 'right';
      } else {
        spriteRight = elenyaSprite;
        autoFocusSide = 'left';
      }
      sprite = null;
      autoElenya = true;
    } else if (sprite) {
      // Une ancienne scène "un seul personnage" devient une vraie composition à deux.
      // Le côté d'Elenya varie de façon déterministe par lieu pour casser l'effet couloir
      // sans faire sauter les personnages à chaque re-rendu.
      const elenyaSide = elenyaStageAutoElenyaSide_(sceneId, scene, cfg);
      if (elenyaSide === 'right') {
        spriteLeft = sprite;
        spriteRight = elenyaSprite;
        autoFocusSide = 'left';
      } else {
        spriteLeft = elenyaSprite;
        spriteRight = sprite;
        autoFocusSide = 'right';
      }
      sprite = null;
      autoElenya = true;
    } else {
      // Les scènes d'exploration/narration ne laissent plus l'héroïne hors champ.
      sprite = elenyaSprite;
      autoFocusSide = 'center';
      autoElenya = true;
    }
  }

  let focusSide = String(cfg.focusSide || scene.focusSide || '').trim().toLowerCase();
  if (!/^(left|right|center)$/.test(focusSide)) focusSide = autoFocusSide;
  if (!focusSide) {
    if (sprite && !spriteLeft && !spriteRight) focusSide = 'center';
    else if (spriteLeft && !spriteRight) focusSide = 'left';
    else if (spriteRight && !spriteLeft) focusSide = 'right';
  }

  const castCount = [sprite, spriteLeft, spriteRight].filter(Boolean).length;
  const mode = stageMode || (castCount >= 2 ? 'duo' : (castCount === 1 ? 'solo' : 'environment'));
  const framing = elenyaStageFraming_(scene, cfg, castCount);
  const characters = elenyaStageCharacterStates_(scene, cfg, {
    center: sprite,
    left: spriteLeft,
    right: spriteRight
  }, focusSide);
  const elenyaSide = elenyaStageHasCharacter_(spriteLeft, 'elenya') ? 'left'
    : (elenyaStageHasCharacter_(spriteRight, 'elenya') ? 'right'
    : (elenyaStageHasCharacter_(sprite, 'elenya') ? 'center' : null));

  return {
    sprite,
    spriteLeft,
    spriteRight,
    focusSide: focusSide || null,
    stage: {
      mode,
      framing,
      layout: autoElenya ? 'asymmetric-auto' : 'explicit',
      autoElenya,
      elenyaSide,
      castCount,
      focusSide: focusSide || null,
      illustration: cinematicIllustration,
      sceneId: String(sceneId || ''),
      characters
    }
  };
}

class SceneManager {
  constructor(gameState) {
    applyRefonte_();
    this.state = normalizeGameState(gameState || {});
    this.db = (this.state.gameMode === 'ngplus' && typeof NGPLUS_DB !== 'undefined') ? NGPLUS_DB : (typeof DB !== 'undefined' ? DB : {});
  }

  renderScene(sceneId, options = {}) {
    const qaMode = options && options.qa === true;
    this.state = normalizeGameState(this.state);
    if (sceneId === "END" || !sceneId) return null;

    let requestedScene = sceneId;
    if (qaMode) {
      // QA : le navigateur demande explicitement cette scène sans laisser les triggers
      // narratifs détourner le test vers une autre route.
      this.state.currentSceneId = sceneId;
    }
    // Anciennes sauvegardes : le flashback Fen a été retiré du parcours actif.
    // On les replace directement au matin pour éviter de réafficher la scène parasite.
    if (sceneId === 'ACTE2_07_TRANSE_FEN') {
      sceneId = 'ACTE2_08_MATIN_AUBERGE';
      this.state.currentSceneId = sceneId;
    }
    const sortedTriggers = qaMode ? [] : TRIGGERS.map((trig, index) => ({ trig, index }))
      .sort((a, b) => (b.trig.priority - a.trig.priority) || (a.index - b.index))
      .map(x => x.trig);
    for (const trig of sortedTriggers) {
      try {
        if (trig.check(this.state)) {
          const target = trig.interceptToScene;
          if (target && target !== sceneId) {
            const top = this.state.returnStack[this.state.returnStack.length - 1];
            if (this.state.currentSceneId && top !== this.state.currentSceneId) {
              this.state.returnStack.push(this.state.currentSceneId);
            }
            pushUnique(this.state.triggerHistory, trig.id, 100);
            sceneId = target;
            this.state.currentSceneId = sceneId;
          }
          break;
        }
      } catch (e) {
        // A faulty optional trigger must never kill the narrative engine.
      }
    }

    const scene = this.db[sceneId] || this.db.ERREUR_SCENE;
    if (!scene) return null;

    // onEnter is idempotent: repeated client renders cannot repeatedly mutate timers/state.
    if (qaMode) this.state.currentSceneId = sceneId;
    if (this.state._lastEnteredSceneId !== sceneId) {
      if (scene.onEnter) {
        try { scene.onEnter(this.state); } catch (e) {}
      }
      this.state._lastEnteredSceneId = sceneId;
      pushUnique(this.state.sceneHistory, sceneId, 200);
    }

    const gsWrapper = {
      // Lecture directe tolérée pour les anciennes scènes (ex. gs.timers.venin).
      // On expose des copies afin qu'une narration ne puisse pas muter l'état par accident.
      gameMode: this.state.gameMode,
      flags: (this.state.flags || []).slice(),
      globalFlags: (this.state.globalFlags || []).slice(),
      gauges: Object.assign({}, this.state.gauges || {}),
      timers: Object.assign({}, this.state.timers || {}),
      inventory: (this.state.inventory || []).slice(),
      reputation: Object.assign({}, this.state.reputation || {}),
      route: this.state.route || null,
      ngPlus: Object.assign({}, this.state.ngPlus || {}),
      achievements: (this.state.achievements || []).slice(),
      // Permet aux scènes de détour de nommer le lieu qu'elles rejoindront.
      returnSceneId: this.state.returnStack.length ? this.state.returnStack[this.state.returnStack.length - 1] : null,
      hasFlag: (f) => this.state.flags.includes(f),
      hasGlobalFlag: (f) => {
        // Les flags techniques du NG+ ne doivent jamais contaminer une partie classique.
        if (this.state.gameMode !== 'ngplus' && (String(f) === 'ng_plus_unlocked' || String(f).startsWith('ngplus_'))) return false;
        return this.state.globalFlags.includes(f);
      },
      getGauge: (g) => this.state.gauges[g] || 0,
      addFlag: (f) => { if (!this.state.flags.includes(f)) this.state.flags.push(f); },
      hasItem: (id) => hasItem(this.state, id),
      getRep: (faction) => getRep(this.state, faction),
      hasOriginEnd: (endId) => Array.isArray(this.state.ngPlus && this.state.ngPlus.originEnds) && this.state.ngPlus.originEnds.includes(endId),
      getLastClassicEnding: () => lastClassicEndingFromFlags(this.state)
    };

    let rawText = scene.getDynamicNarrative ? scene.getDynamicNarrative(gsWrapper) : (scene.text || scene.narrative || "");
    let parsedNarrative = _parseDynamicText(rawText, this.state);
    const baseNarrative = parsedNarrative;
    const response = this.state.narrative && this.state.narrative.lastChoiceResponse;
    const choiceResponseText = (response && response.destination === sceneId && response.text) ? String(response.text) : '';
    if (choiceResponseText) parsedNarrative = choiceResponseText + '\n\n' + parsedNarrative;

    // Une micro-scène sans décor propre hérite du dernier décor narratif.
    // Cela conserve les enchaînements normaux et évite un fond noir lors de la reprise
    // directe d'une ancienne sauvegarde placée au milieu d'une séquence.
    // V52.5.5 — les illustrations cinématiques peuvent dépendre de la route active.
    let sceneImageRef = elenyaStageResolveSprite_(scene.image, gsWrapper) || null;
    if (!sceneImageRef) {
      const history = Array.isArray(this.state.sceneHistory) ? this.state.sceneHistory.slice().reverse() : [];
      const previousWithImage = history.find(id => id !== sceneId && this.db[id] && this.db[id].image);
      if (previousWithImage) sceneImageRef = elenyaStageResolveSprite_(this.db[previousWithImage].image, gsWrapper);
    }
    if (!sceneImageRef) {
      const chapterFallback = this.state.gameMode === 'ngplus'
        ? 'NGP_01_SEUIL'
        : ({1:'ACTE1_01_REVEIL',2:'ACTE2_01_RENCONTRE_SILAS_1',3:'ACTE3_01_FRONTIERE_1',4:'ACTE4_01_DEPART_VILLAGE',5:'ACTE5_01_LENDEMAIN'})[Number(scene.chapter || 1)];
      if (chapterFallback && this.db[chapterFallback]) sceneImageRef = this.db[chapterFallback].image || null;
    }
    // Les trois romances finales restent illustrées par une CG complète après
    // la cinématique, sans retour aux sprites superposés.
    const endingCg = endingCgV55_(sceneId);
    if (endingCg) sceneImageRef = endingCg;
    // Une vidéo de transition ne devient jamais une image CSS de secours.
    const effectiveImage = refonteAsset_(normalizeAssetRef(sceneImageRef),this.state,sceneId);
    const mobileImageRef = endingCg ? null : elenyaStageResolveSprite_(scene.imageMobile, gsWrapper);
    const effectiveMobileImage = mobileImageRef
      ? refonteAsset_(normalizeAssetRef(mobileImageRef),this.state,sceneId) : null;
    const endingVideo = endingVideoV55_(scene, sceneId);
    const stageVisuals = elenyaComposeStage_(sceneId, scene, gsWrapper, endingCg, effectiveImage);
    return {
      sceneId: sceneId,
      renderedState: this.state,
      presentation: refontePresentation_(this.state, scene, sceneId),
      sceneNumber: scene.sceneNumber || sceneId,
      chapter: scene.chapter || 1,
      arcObjective: this.state.gameMode==='ngplus'
        ? ({1:'Comparer tes souvenirs et comprendre ce qui recommence.',2:'Distinguer les liens choisis des obligations héritées.',3:'Écouter les témoins du premier Gel.',4:'Affronter ce qui entretient le cycle.',5:'Décider de ce que tu transmettras.'})[scene.chapter||1]
        : ({1:'Comprendre ton réveil et trouver une issue.',2:'Traverser les Terres Basses avec les alliances que tu as choisies.',3:'Trouver un refuge et comprendre les effets du venin.',4:'Atteindre le Trône et confronter les vérités du Gel.',5:'Assumer les conséquences de ton parcours.'})[scene.chapter||1],
      title: scene.title || "",
      speakerName: scene.speakerName || scene.speaker || null,
      // Morceaux canoniques de voix : ils évitent que la réponse d'un choix change
      // le hash de toute la narration. Le client peut ainsi réutiliser un pack
      // pré-généré beaucoup plus efficacement.
      voiceParts: [
        scene.title ? {kind:'title', text:String(scene.title)} : null,
        choiceResponseText ? {kind:'choiceResponse', text:choiceResponseText} : null,
        baseNarrative ? {kind:'narrative', text:String(baseNarrative)} : null
      ].filter(Boolean),
      mood: scene.mood || 'exploration',
      image: effectiveImage,
      imageMobile: effectiveMobileImage,
      transitionGif: normalizeAssetRef(endingVideo || elenyaStageResolveSprite_(scene.transitionGif, gsWrapper) || null),
      transitionGifMobile: endingVideo ? null : normalizeAssetRef(elenyaStageResolveSprite_(scene.transitionGifMobile, gsWrapper)),
      postTransitionImage: normalizeAssetRef(elenyaStageResolveSprite_(scene.postTransitionImage, gsWrapper)),
      postTransitionImageMobile: normalizeAssetRef(elenyaStageResolveSprite_(scene.postTransitionImageMobile, gsWrapper)),
      sprite: stageVisuals.sprite,
      spriteLeft: stageVisuals.spriteLeft,
      spriteRight: stageVisuals.spriteRight,
      focusSide: stageVisuals.focusSide,
      stage: stageVisuals.stage,
      voice: normalizeAssetRef(scene.voice || null),
      narrative: parsedNarrative,
      choices: this._filterChoices(scene.choices || []),
      affinity: {
        eclaireur: this.state.gauges.affinite_eclaireur || 0,
        ombre: this.state.gauges.affinite_ombre || 0,
        solo: this.state.gauges.instabilite || 0,
        possession: this.state.gauges.possession || 0,
        memoire: this.state.gauges.memoire_kalthar || 0,
        volonte: this.state.gauges.volonte || 0,
        presence_O: this.state.gauges.presence_O || 0,
        presence_E: this.state.gauges.presence_E || 0,
        presence_S: this.state.gauges.presence_S || 0
      },
      inventory: this.state.inventory || [],
      reputation: this.state.reputation || {},
      currentRoute: this.state.route || this._deriveRoute(),
      isEnd: scene.isEnd || false,
      postEnding: scene.postEnding === true,
      isFlashback: scene.isFlashback || false,
      achievementId: scene.achievementId || null,
      gameMode: this.state.gameMode,
      relationship: {
        O: deriveRelationshipStyle(this.state,'O'),
        E: deriveRelationshipStyle(this.state,'E')
      },
      echoes: (this.state.narrative && this.state.narrative.echoes || []).slice(-3),
      endingSeeds: this.state.narrative && this.state.narrative.endingSeeds || {},
      emotionalBeat: scene.emotionalBeat || null,
      memoryEcho: scene.memoryEcho || null,
      relationFocus: typeof scene.relationFocus === 'function' ? scene.relationFocus(gsWrapper) : (scene.relationFocus || null)
    };
  }

  _deriveRoute() {
    if (this.state.flags.includes('avec_ombre') && this.state.flags.includes('avec_eclaireur')) return 'poly';
    if (this.state.flags.includes('avec_ombre')) return 'ombre';
    if (this.state.flags.includes('avec_eclaireur')) return 'eclaireur';
    return 'solo';
  }

  _filterChoices(choices) {
    const gsWrapper = {
      gameMode: this.state.gameMode,
      flags: (this.state.flags || []).slice(),
      globalFlags: (this.state.globalFlags || []).slice(),
      gauges: Object.assign({}, this.state.gauges || {}),
      timers: Object.assign({}, this.state.timers || {}),
      inventory: (this.state.inventory || []).slice(),
      reputation: Object.assign({}, this.state.reputation || {}),
      route: this.state.route || null,
      ngPlus: Object.assign({}, this.state.ngPlus || {}),
      achievements: (this.state.achievements || []).slice(),
      hasFlag: (f) => this.state.flags.includes(f),
      hasGlobalFlag: (f) => (this.state.gameMode === 'ngplus' || (String(f) !== 'ng_plus_unlocked' && !String(f).startsWith('ngplus_'))) && this.state.globalFlags.includes(f),
      getGauge: (g) => this.state.gauges[g] || 0,
      hasItem: (id) => hasItem(this.state, id),
      getRep: (faction) => getRep(this.state, faction),
      hasOriginEnd: (endId) => Array.isArray(this.state.ngPlus && this.state.ngPlus.originEnds) && this.state.ngPlus.originEnds.includes(endId),
      getLastClassicEnding: () => lastClassicEndingFromFlags(this.state)
    };
    const replacedKeys = new Set();
    choices.forEach(c => {
      if (c.replaces && checkRequirements(c.requires, this.state)) replacedKeys.add(c.replaces);
    });
    return choices
      .filter(c => !replacedKeys.has(c.key))
      .filter(c => checkRequirements(c.requires, this.state))
      .filter(c => {
        try { return c.condition ? !!c.condition(gsWrapper) : true; } catch (e) { return false; }
      })
      .map(c => ({
        key: c.key,
        text: typeof c.getDynamicText === 'function'
          ? String(c.getDynamicText(gsWrapper) || c.text || '')
          : _parseDynamicText(String(c.text || ''), this.state),
        next: c.next,
        intent: c.intent || null,
        target: c.target || null,
        feedback: c.feedback || null,
        journal: c.journal || null,
        importance: c.importance || 'minor',
        irreversible: c.irreversible === true,
        timeCost: c.timeCost === undefined ? null : Number(c.timeCost),
        transitionGif: normalizeAssetRef(c.transitionGif || null)
      }));
  }

  processChoice(choiceKey) {
    this.state = normalizeGameState(this.state);
    const scene = this.db[this.state.currentSceneId];
    if (!scene || !Array.isArray(scene.choices)) return { nextScene: 'END' };

    const choice = scene.choices.find(c => c.key === choiceKey);
    if (!choice) return { nextScene: this.state.currentSceneId, error: 'CHOICE_NOT_FOUND' };

    // Never trust the client: a hidden/locked choice must be rejected server-side too.
    const visible = this._filterChoices(scene.choices).some(c => c.key === choiceKey);
    if (!visible) return { nextScene: this.state.currentSceneId, error: 'CHOICE_NOT_AVAILABLE' };

    const previousScene = this.state.currentSceneId;
    if (choice.effects && Array.isArray(choice.effects)) {
      let shouldSaveGlobals = false;
      choice.effects.forEach(e => {
        if (!e || !e.type) return;
        const target = e.target;
        switch (e.type) {
          case 'ADD_GAUGE':
            if (target) {
              const lim = AAA_GAUGE_LIMITS[target] || [0, 999];
              const value = Number(e.value) || 0;
              this.state.gauges[target] = clampNumber((this.state.gauges[target] || 0) + value, lim[0], lim[1]);
              if (value > 0 && target === 'distance_O') {
                applyFlagWriteAliases(this.state, 'O_distant_1');
                if (this.state.gauges.distance_O >= 4 && !this.state.flags.includes('O_distant_2')) this.state.flags.push('O_distant_2');
              }
              if (value > 0 && target === 'distance_E') {
                applyFlagWriteAliases(this.state, 'E_distant_1');
                if (this.state.gauges.distance_E >= 4 && !this.state.flags.includes('E_distant_2')) this.state.flags.push('E_distant_2');
              }
            }
            break;
          case 'SET_GAUGE':
            if (target) {
              const lim = AAA_GAUGE_LIMITS[target] || [0, 999];
              this.state.gauges[target] = clampNumber(e.value, lim[0], lim[1]);
            }
            break;
          case 'ADD_TIMER':
            if (target) this.state.timers[target] = Number(this.state.timers[target] || 0) + (Number(e.value) || 0);
            break;
          case 'SET_TIMER':
            if (target) this.state.timers[target] = Number(e.value);
            break;
          case 'SET_FLAG':
            if (target) applyFlagWriteAliases(this.state, target);
            break;
          case 'REMOVE_FLAG':
            if (target) removeFlagWriteAliases(this.state, target);
            break;
          case 'SET_GLOBAL_FLAG':
            if (target && !this.state.globalFlags.includes(target)) { this.state.globalFlags.push(target); shouldSaveGlobals = true; }
            break;
          case 'UNLOCK_ACHIEVEMENT':
            if (target && !this.state.achievements.includes(target)) { this.state.achievements.push(target); shouldSaveGlobals = true; }
            break;
          case 'PUSH_RETURN':
            if (target) this.state.returnStack.push(target);
            break;
          case 'ADD_ITEM':
            if (target) addItem(this.state, target);
            break;
          case 'REMOVE_ITEM':
            if (target) removeItem(this.state, target);
            break;
          case 'ADD_REP':
            if (target) addRep(this.state, target, Number(e.value) || 0);
            break;
          case 'SET_ROUTE':
            if (target) this.state.route = target;
            break;
          case 'JOIN_COMPANION': {
            const t = String(target || '').toLowerCase();
            const poly = this.state.flags.includes('poly_active') || this.state.flags.includes('ngplus_route_both') || this.state.flags.includes('ngplus_truce');
            if (t === 'o' || t === 'ombre' || t === 'kaelen') {
              if (!poly) this.state.flags = this.state.flags.filter(f => f !== 'avec_eclaireur');
              if (!this.state.flags.includes('avec_ombre')) this.state.flags.push('avec_ombre');
            } else if (t === 'e' || t === 'eclaireur' || t === 'alistair') {
              if (!poly) this.state.flags = this.state.flags.filter(f => f !== 'avec_ombre');
              if (!this.state.flags.includes('avec_eclaireur')) this.state.flags.push('avec_eclaireur');
            }
            // V50: une jonction de compagnon clôt toutes les variantes Solo et les pertes temporaires.
            this.state.flags = this.state.flags.filter(f => f !== 'voie_solo' && f !== 'voie_solo_profonde');
            if (t === 'o' || t === 'ombre' || t === 'kaelen') {
              this.state.flags = this.state.flags.filter(f => f !== 'kaelen_perdu' && f !== 'kaelen_perdu_definitif');
            } else if (t === 'e' || t === 'eclaireur' || t === 'alistair') {
              this.state.flags = this.state.flags.filter(f => f !== 'alistair_perdu' && f !== 'alistair_perdu_definitif');
            }
            enforceCompanionExclusivity(this.state);
            updateRelationshipIntegrity(this.state);
            this.state.route = this._deriveRoute();
            break;
          }
          case 'SWITCH_COMPANION': {
            const poly = this.state.flags.includes('poly_active') || this.state.flags.includes('ngplus_route_both') || this.state.flags.includes('ngplus_truce');
            switchCompanion(this.state, target, { keepOther: poly && e.keepOther !== false });
            enforceCompanionExclusivity(this.state);
            updateRelationshipIntegrity(this.state);
            break;
          }
          case 'LEAVE_COMPANION': {
            const t = String(target || '').toLowerCase();
            if (t === 'o' || t === 'ombre' || t === 'kaelen') this.state.flags = this.state.flags.filter(f => f !== 'avec_ombre');
            if (t === 'e' || t === 'eclaireur' || t === 'alistair') this.state.flags = this.state.flags.filter(f => f !== 'avec_eclaireur');
            this.state.route = this._deriveRoute();
            if (this.state.route === 'solo' && !this.state.flags.includes('voie_solo')) this.state.flags.push('voie_solo');
            break;
          }
        }
      });
      if (shouldSaveGlobals) this._saveGlobals();
    }
    inferChoiceEchoes(this.state, choice);

    // V51.3 — mémoire sémantique serveur : le journal ne peut plus être perdu
    // lorsque le client reçoit ensuite updatedState depuis Apps Script.
    ensureNarrativeState(this.state);
    if (!Array.isArray(this.state.narrative.uxJournal)) this.state.narrative.uxJournal = [];
    if (!Array.isArray(this.state.narrative.majorChoices)) this.state.narrative.majorChoices = [];
    if (choice.journal) {
      const entry = {
        scene: previousScene,
        choice: choiceKey,
        text: String(choice.journal),
        intent: choice.intent || null,
        target: choice.target || null,
        importance: choice.importance || 'major',
        ts: Date.now()
      };
      if (!this.state.narrative.uxJournal.some(e => e && e.scene === entry.scene && e.choice === entry.choice)) {
        this.state.narrative.uxJournal.push(entry);
        this.state.narrative.uxJournal = this.state.narrative.uxJournal.slice(-30);
      }
    }
    if (choice.importance === 'major' || choice.importance === 'critical' || choice.irreversible === true) {
      const major = {
        scene: previousScene, choice: choiceKey, text: choice.text || choiceKey,
        intent: choice.intent || null, target: choice.target || null,
        importance: choice.importance || 'major', irreversible: choice.irreversible === true, ts: Date.now()
      };
      if (!this.state.narrative.majorChoices.some(e => e && e.scene === major.scene && e.choice === major.choice)) {
        this.state.narrative.majorChoices.push(major);
        this.state.narrative.majorChoices = this.state.narrative.majorChoices.slice(-12);
      }
    }

    // V51 : recomputeNarrativeSeeds est exécuté par normalizeGameState en fin de choix.
    // On évite ici un recalcul identique à chaque clic.

    pushUnique(this.state.choiceHistory, {
      scene: previousScene, choice: choiceKey, next: choice.next || 'END', ts: Date.now()
    }, 150);
    this.state.stats.choicesMade = (Number(this.state.stats.choicesMade) || 0) + 1;
    this.state.stats.playTime = (Number(this.state.stats.playTime) || 0) + Math.max(0, Date.now() - Number(this.state.sessionStartedAt || Date.now()));
    this.state.sessionStartedAt = Date.now();

    if (choice.next === 'RETURN') {
      const fallback = this.state.returnStack.length ? this.state.returnStack.pop() : 'ACTE2_08_MATIN_AUBERGE';
      this.state.currentSceneId = fallback;
    } else {
      this.state.currentSceneId = choice.next || 'END';
    }
    // V51.7.6 — respiration relationnelle : le cooldown survit aux retours vers le même hub,
    // puis disparaît dès qu'une vraie progression de plot commence.
    {
      const nxt=String(this.state.currentSceneId||'');
      const staysInBeat = choice.next === 'RETURN'
        || /^(R_|JOUTE_|LIEN_|ROMANCE_|FRAGMENT_|ACTE2_06B_|ACTE2_08B_|ACTE2_06_NUIT_INVITE_)/.test(nxt)
        || /^ROMANCE_AGENCY_/.test(String(previousScene||''))
        || nxt === previousScene;
      if(!staysInBeat && Array.isArray(this.state.flags)){
        this.state.flags=this.state.flags.filter(f=>f!=='_romance_beat_recent');
      }
    }
    decrementTimers(this.state, previousScene, this.state.currentSceneId, choice.timeCost);
    this.state._lastEnteredSceneId = null;
    this.state.route = this._deriveRoute();
    normalizeGameState(this.state);
    return { nextScene: this.state.currentSceneId };
  }

  _saveGlobals() {
    try {
      const props=PropertiesService.getUserProperties();
      let previous={};try{previous=JSON.parse(props.getProperty('elenya_globals')||'{}')}catch(_){}
      this.state.achievements=Array.from(new Set([...(previous.achievements||[]),...this.state.achievements]));
      const hasLast=this.state.globalFlags.some(f=>String(f).startsWith('last_classic_end:'));
      this.state.globalFlags=Array.from(new Set([...(previous.globalFlags||[]).filter(f=>!hasLast||!String(f).startsWith('last_classic_end:')),...this.state.globalFlags]));
      PropertiesService.getUserProperties().setProperty('elenya_globals', JSON.stringify({
        globalFlags: this.state.globalFlags,
        achievements: this.state.achievements
      }));
    } catch (e) {}
  }
}


// =============================================================================
// NEW GAME+ — « LE CYCLE BRISÉ »
// =============================================================================
// Campagne indépendante : aucune scène NGP ne réutilise la logique de chute
// classique. Les fins précédentes deviennent une mémoire de méta-progression.
// =============================================================================
