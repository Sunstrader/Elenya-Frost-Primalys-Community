'use strict';
const assert = require('node:assert/strict');
const path = require('node:path');
const {loadEngine} = require('./engine.cjs');
const {api} = loadEngine(path.resolve(__dirname, '../project'));
// Reproduce the actual confidence -> friendship -> night -> morning chain.
for (const who of ['O', 'E']) {
  const manager = new api.SceneManager({gameMode:'classic', currentSceneId:'LIEN_'+who+'_2_CONFIDENCE',
    flags:[who === 'O' ? 'avec_ombre' : 'avec_eclaireur'], gauges:{['lien_'+who]:6}});
  assert.equal(manager.processChoice('D').error, undefined);
  manager.renderScene(manager.state.currentSceneId);
  if (manager.state.currentSceneId === 'ALISTAIR_PRIERE') {
    manager.processChoice('NEXT');
    manager.renderScene(manager.state.currentSceneId);
  }
  const night = manager.renderScene(manager.state.currentSceneId);
  assert(night.choices.some(c => c.key === who+'_AMIS_NUIT'));
  assert(!night.choices.some(c => c.key === who || c.key === who+'_TRI'));
  manager.processChoice('S');
  manager.renderScene(manager.state.currentSceneId);
  assert.equal(manager.state.currentSceneId, 'ACTE2_06B_LENDEMAIN_CONFIDENCE');
  manager.processChoice('A');
  manager.renderScene(manager.state.currentSceneId);
  assert.equal(manager.state.currentSceneId, 'ACTE2_08_MATIN_AUBERGE');
}
// Friendship must never suppress the other companion's still-active romance.
for (const who of ['O', 'E']) {
  const other = who === 'O' ? 'E' : 'O';
  for (const flag of ['amis_'+who, 'amis_'+who+'_ferme', 'romance_en_pause_'+who]) {
    for (const [id, expected] of [['ACTE2_08_MATIN_AUBERGE', 'R_'+other+'_1'],
      ['ACTE3_09_VILLAGE_CACHE', 'JOUTE_'+other+'_2']]) {
      const manager = new api.SceneManager({gameMode:'classic', currentSceneId:id,
        flags:['avec_ombre', 'avec_eclaireur', flag, '_lendemain_confidence_vu', '_seraphine_intro_vu'],
        gauges:{lien_O:6, lien_E:6}});
      manager.renderScene(id);
      assert.equal(manager.state.currentSceneId, expected);
    }
    for (const id of ['ROMANCE_AGENCY_MATIN_AUBERGE', 'ROMANCE_AGENCY_VILLAGE', 'ACTE4_02_CHOIX_CHAMBRE']) {
      const manager = new api.SceneManager({gameMode:'classic', currentSceneId:id,
        flags:['avec_ombre', 'avec_eclaireur', flag], gauges:{lien_O:6,lien_E:6}});
      const choices = manager._filterChoices(api.DB[id].choices);
      assert(!choices.some(c => c.key === who), id+' : accès amoureux en pause');
      assert(choices.some(c => c.key === other), id+' : autre romance perdue');
    }
    for (const id of ['ACTE2_12_NUIT_ISOLEE', 'ACTE3_09B_BIVOUAC_TEMPETE', 'ACTE4_05_ARRIVEE_PORTES_1']) {
      const manager = new api.SceneManager({gameMode:'classic', currentSceneId:id,
        flags:['avec_ombre', 'avec_eclaireur', flag, '_romance_deferred_'+who, '_romance_deferred_'+other],
        gauges:{lien_O:6,lien_E:6}});
      const choices = manager._filterChoices(api.DB[id].choices);
      assert(!choices.some(c => c.key === 'V517_DEFERRED_'+who));
      assert(choices.some(c => c.key === 'V517_DEFERRED_'+other));
    }
  }
}
for (const who of ['O', 'E']) {
  const manager = new api.SceneManager({gameMode:'classic', currentSceneId:'ACTE2_06_NUIT_INVITE_'+who,
    flags:[who === 'O' ? 'avec_ombre' : 'avec_eclaireur'], gauges:{lien_O:0, lien_E:0}});
  assert.equal(manager.processChoice('OUI').error, undefined);
  manager.renderScene(manager.state.currentSceneId);
  if (manager.state.currentSceneId === 'ALISTAIR_PRIERE') {
    assert.equal(manager.processChoice('NEXT').error, undefined);
    manager.renderScene(manager.state.currentSceneId);
  }
  assert.equal(manager.state.currentSceneId, 'ACTE2_06_NUIT_AUBERGE');
  assert(!manager.state.flags.includes('_lien_'+who+'_2_vu'), 'La soirée ne force pas une confidence');
  const distance = manager.state.gauges['distance_'+who] || 0;
  const tension = manager.state.gauges.tension_triangle || 0;
  assert.equal(manager.processChoice('S').error, undefined);
  const morning = manager.renderScene(manager.state.currentSceneId);
  assert.equal(manager.state.currentSceneId, 'ACTE2_06B_LENDEMAIN_CONFIDENCE');
  assert.equal(manager.state.gauges['distance_'+who] || 0, distance);
  assert.equal(manager.state.gauges.tension_triangle || 0, tension);
  assert(morning.narrative.length > 0);
}
const old = api.serverGetPendingScene({currentSceneId:'ACTE2_08_MATIN_AUBERGE', flags:[], gauges:{}});
assert(old && old.renderedState && old.narrative);
assert(!old.renderedState.flags.includes('soir_avec_kaelen'));
assert(!old.renderedState.flags.includes('soir_avec_alistair'));
console.log('OK : amitié/pause respectées au matin, au village, dans les choix de nuit et les reports ; autre romance préservée ; soirées sans confidence et ancien état minimal. Moteur GAS dans Node ; navigateur non testé.');
