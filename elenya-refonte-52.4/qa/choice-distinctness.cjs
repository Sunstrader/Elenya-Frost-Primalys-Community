'use strict';

const path = require('node:path');
const assert = require('node:assert/strict');
const { loadEngine } = require('./engine.cjs');

const root = path.resolve(__dirname, '../project');
const { api } = loadEngine(root);

function normalize(value) {
  if (typeof value === 'function') return '[fn]' + String(value).replace(/\s+/g, ' ');
  if (Array.isArray(value)) return value.map(normalize);
  if (value && typeof value === 'object') {
    const out = {};
    for (const key of Object.keys(value).sort()) out[key] = normalize(value[key]);
    return out;
  }
  return value;
}

function consequenceFingerprint(choice) {
  const copy = {};
  for (const [key, value] of Object.entries(choice || {})) {
    if (['key','text','intent','importance','presentationEffect'].includes(key)) continue;
    copy[key] = value;
  }
  return JSON.stringify(normalize(copy));
}

const exactDuplicates = [];
const convergences = [];

for (const [mode, db] of [['classic', api.DB], ['ngplus', api.NGPLUS_DB]]) {
  for (const [sceneId, scene] of Object.entries(db)) {
    const choices = Array.isArray(scene.choices) ? scene.choices : [];
    const byNext = new Map();

    choices.forEach(choice => {
      const next = String(choice.next || '');
      if (!byNext.has(next)) byNext.set(next, []);
      byNext.get(next).push(choice);
    });

    for (const [next, list] of byNext) {
      if (next && list.length > 1) {
        convergences.push({
          mode,
          sceneId,
          title: scene.title || sceneId,
          next,
          choices: list.map(c => c.key)
        });
      }
    }

    for (let i = 0; i < choices.length; i++) {
      for (let j = i + 1; j < choices.length; j++) {
        if (consequenceFingerprint(choices[i]) === consequenceFingerprint(choices[j])) {
          exactDuplicates.push({
            mode,
            sceneId,
            title: scene.title || sceneId,
            first: { key: choices[i].key, text: choices[i].text, next: choices[i].next },
            second: { key: choices[j].key, text: choices[j].text, next: choices[j].next }
          });
        }
      }
    }
  }
}

assert.deepEqual(
  exactDuplicates,
  [],
  'Des choix visuellement différents ont exactement la même destination et les mêmes conséquences : ' +
    JSON.stringify(exactDuplicates, null, 2)
);

// Régression ciblée : la Jonction des Routes avait déjà donné l’impression que plusieurs choix étaient identiques.
const junction = api.DB.ACTE1_06C_CONVERGENCE;
assert(junction && Array.isArray(junction.choices), 'ACTE1_06C_CONVERGENCE introuvable.');
const junctionFingerprints = junction.choices.map(consequenceFingerprint);
assert.equal(
  new Set(junctionFingerprints).size,
  junctionFingerprints.length,
  'La Jonction des Routes contient deux choix aux conséquences identiques.'
);

// Régression : une voie solo peut inviter Kaelen ou Alistair à la jonction.
// Le drapeau historique voie_solo reste présent dans les anciennes sauvegardes.
const reunion = api.DB.ACTE1_07_RETROUVAILLES;
const visualState = flags => ({hasFlag:flag=>flags.includes(flag),getGauge:()=>0});
for (const [flags, expectedVisual, expectedChoices] of [
  [['voie_solo'], 'triangulation-solo-pc.webp', 'S'],
  [['voie_solo','avec_ombre'], 'triangulation-kaelen-pc.webp', 'A,B'],
  [['voie_solo','avec_eclaireur'], 'triangulation-alistair-pc.webp', 'A,B']
]) {
  const state = visualState(flags);
  assert(reunion.image(state).endsWith(expectedVisual), 'Mauvais visuel à la réunion : '+flags);
  assert.equal(reunion.choices.filter(c => !c.condition || c.condition(state)).map(c => c.key).join(','), expectedChoices);
  assert(reunion.getDynamicNarrative(state).includes(flags.includes('avec_ombre') ? "Kaelen t'a rejointe" : flags.includes('avec_eclaireur') ? "Alistair t'a rejointe" : 'Tu as grimpé seule'));
}

console.log(JSON.stringify({
  ok: true,
  exactDuplicates: exactDuplicates.length,
  convergencesToSameScene: convergences.length,
  note: 'Les convergences sont autorisées si les conséquences diffèrent.',
  targetedRegression: 'ACTE1_06C_CONVERGENCE'
}, null, 2));
