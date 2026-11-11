'use strict';

const path = require('node:path');
const assert = require('node:assert/strict');
const { loadEngine } = require('./engine.cjs');

const root = path.resolve(__dirname, '../project');
const { api } = loadEngine(root);

const freshState = {
  gameMode: 'classic',
  currentSceneId: 'ACTE1_01_REVEIL',
  flags: [],
  globalFlags: [],
  gauges: {},
  achievements: [],
  timers: {},
  inventory: [],
  reputation: {},
  quests: {},
  stats: { choicesMade: 0, playTime: 0 },
  choiceHistory: [],
  sceneHistory: [],
  returnStack: [],
  narrative: { relationshipStyle:{O:'distance',E:'distance'}, echoes:[], echoCounts:{}, endingSeeds:{} }
};

const first = api.serverGetPendingScene(JSON.parse(JSON.stringify(freshState)));
assert(first, 'La première scène doit être rendue.');
assert.equal(first.sceneNumber, 'ACTE1_01_REVEIL', 'La première scène doit être ACTE1_01_REVEIL.');
assert.match(first.transitionGif || '', /\/reveil-elenya-pc-20260928(?:-son)?\.mp4$/, 'Le réveil PC doit lire la nouvelle vidéo.');
assert.match(first.transitionGifMobile || '', /\/reveil-elenya-mobile-20260928(?:-son)?\.mp4$/, 'Le réveil mobile doit lire sa vidéo portrait.');
assert.notEqual(first.transitionGif, first.transitionGifMobile, 'Les deux formats doivent être distincts.');
assert.equal(typeof first.narrative, 'string', 'La première scène doit contenir du texte.');
assert(first.narrative.trim().length > 0, 'Le texte de la première scène ne doit pas être vide.');
assert(Array.isArray(first.choices) && first.choices.length > 0, 'La première scène doit proposer au moins un choix.');

const firstChoice = first.choices[0];
const stateBeforeChoice = first.renderedState || freshState;
const result = api.serverProcessChoice(JSON.parse(JSON.stringify(stateBeforeChoice)), firstChoice.key);
assert(result && !result.error, 'Le premier choix ne doit pas produire d’erreur.');
assert(result.updatedState && result.updatedState.currentSceneId, 'Le premier choix doit produire un état sauvegardable.');
assert(result.nextSceneData, 'Le premier choix doit produire une scène suivante.');

const serialized = JSON.stringify({
  state: result.updatedState,
  timestamp: Date.now(),
  sceneName: result.nextSceneData.title || result.updatedState.currentSceneId
});
const reloadedSave = JSON.parse(serialized);
const resumed = api.serverGetPendingScene(JSON.parse(JSON.stringify(reloadedSave.state)));

assert(resumed, 'La scène doit être récupérable après rechargement.');
assert.equal(
  resumed.renderedState && resumed.renderedState.currentSceneId,
  reloadedSave.state.currentSceneId,
  'Après rechargement, l’identifiant interne de la scène rendue doit correspondre à la sauvegarde.'
);
assert.equal(typeof resumed.narrative, 'string', 'La reprise doit fournir un texte narratif.');
assert(resumed.narrative.trim().length > 0, 'La reprise ne doit pas afficher un écran vide.');

console.log(JSON.stringify({
  ok: true,
  flow: [
    'installation vierge',
    'nouvelle partie',
    'première scène rendue',
    'premier choix accepté',
    'sauvegarde sérialisée',
    'rechargement simulé',
    'reprise rendue'
  ],
  firstScene: first.sceneNumber,
  firstChoice: firstChoice.key,
  resumedScene: resumed.sceneNumber
}, null, 2));
