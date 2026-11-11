'use strict';
const assert = require('node:assert/strict');
const path = require('node:path');
const {loadEngine} = require('./engine.cjs');
const {api} = loadEngine(path.resolve(__dirname, '../project'));
const pc = new Set(), mobile = new Set();
for (const key of ['O1', 'O2', 'O3', 'O_REPOS']) {
  const result = api.serverProcessChoice({currentSceneId:'ACTE1_05_BIVOUAC', gameMode:'classic',
    flags:['avec_ombre'], gauges:{lien_O:0, affinite_ombre:0, distance_O:0, tension_triangle:0}}, key);
  assert(!result.error, key);
  const state = result.updatedState;
  assert.equal(state.currentSceneId, 'ACTE1_05B_REVEIL_BIVOUAC');
  assert.equal(state.flags.includes('interet_romantique_O'), key === 'O3');
  assert(result.nextSceneData.choiceResponse);
  const gs = {hasFlag:f=>state.flags.includes(f)};
  const scene = api.DB.ACTE1_05B_REVEIL_BIVOUAC;
  pc.add(result.nextSceneData.image); mobile.add(result.nextSceneData.imageMobile);
  assert.equal(result.nextSceneData.presentation.ambience, 'quiet');
  assert.equal(state.gauges.distance_O, 0);
  assert.equal(state.gauges.tension_triangle, 0);
  if (key === 'O_REPOS') {
    assert.equal(state.gauges.lien_O, 0);
    assert.equal(state.gauges.affinite_ombre, 0);
    assert(result.nextSceneData.narrative.includes('reprend sa veille'));
  }
}
assert.equal(pc.size, 4, 'Quatre attitudes PC distinctes');
assert.equal(mobile.size, 4, 'Quatre attitudes mobile distinctes');
for (const flag of ['bivouac_menace', 'bivouac_nom', 'bivouac_silence_proche']) {
  const manager = new api.SceneManager({currentSceneId:'ACTE1_05B_REVEIL_BIVOUAC',gameMode:'classic',
    flags:['avec_ombre', flag], gauges:{lien_O:1}});
  const rendered = manager.renderScene(manager.state.currentSceneId);
  assert(rendered.narrative && rendered.image);
  assert(!manager.state.flags.includes('interet_romantique_O'), 'Ne pas inventer une ouverture en chargeant un ancien état');
}
const e = api.serverProcessChoice({currentSceneId:'ACTE1_05_BIVOUAC', gameMode:'classic',
  flags:['avec_eclaireur'], gauges:{lien_E:0}}, 'E3b');
assert(!e.error);
assert(!e.nextSceneData.narrative.includes('épaule de Kaelen'));
console.log('OK : quatre choix lisibles, images PC/mobile distinctes, repos sans pénalité, ouverture explicite seulement, anciens flags lisibles, route Alistair préservée.');
