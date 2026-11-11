'use strict';

const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { loadEngine } = require('./engine.cjs');

const root = path.resolve(__dirname, '../project');
const { api, ctx } = loadEngine(root);
const passed = [];
function audit(name, fn) {
  fn();
  passed.push(name);
}

// 1. Hygiène source : zéro URL cassée/Drive, zéro Markdown brut ou coquille connue
audit('Hygiène des fichiers source (drive.google.com, camp_setup.gif, coquilles, échappements)', () => {
  const projectFiles = fs.readdirSync(root).filter(f => /\.(js|html)$/i.test(f));
  for (const file of projectFiles) {
    const text = fs.readFileSync(path.join(root, file), 'utf8');
    assert.equal(/drive\.google\.com/i.test(text), false, `${file} contient encore un lien drive.google.com`);
    assert.equal(/camp_setup\.gif/i.test(text), false, `${file} référence encore camp_setup.gif absent`);
    assert.equal(/\\_\(/.test(text), false, `${file} contient encore un échappement Markdown \\_(`);
    assert.equal(/Il ne insiste pas/i.test(text), false, `${file} contient encore la coquille "Il ne insiste pas"`);
    assert.equal(/\bde Alistair\b/.test(text), false, `${file} contient encore la faute "de Alistair"`);
    if (/^DATABASE_Acte\d+\.js$/.test(file) || file === 'DATABASE_Relations.js') {
      assert.equal(/\\\\n/.test(text), false, `${file} contient encore un double échappement \\\\n`);
    }
  }
});

// 2. Symétrie d'ouverture : galeries_ozone vs galeries_cendre
audit('Symétrie d’ouverture (galeries_ozone / galeries_cendre, getDynamicText, premier locuteur)', () => {
  const ozone1 = api.serverGetPendingScene({ currentSceneId: 'ACTE1_02_RENCONTRE_1', flags: ['galeries_ozone'] });
  const cendre1 = api.serverGetPendingScene({ currentSceneId: 'ACTE1_02_RENCONTRE_1', flags: ['galeries_cendre'] });
  assert.notEqual(ozone1.narrative, cendre1.narrative, 'ACTE1_02_RENCONTRE_1 doit varier entre ozone et cendre');
  assert.match(ozone1.narrative, /lumière autour de l'homme en blanc/);
  assert.match(cendre1.narrative, /dagues de l'homme en noir/);

  const ozone2 = api.serverGetPendingScene({ currentSceneId: 'ACTE1_02_RENCONTRE_2', flags: ['galeries_ozone'] });
  const cendre2 = api.serverGetPendingScene({ currentSceneId: 'ACTE1_02_RENCONTRE_2', flags: ['galeries_cendre'] });
  assert.notEqual(ozone2.narrative, cendre2.narrative, 'ACTE1_02_RENCONTRE_2 doit varier entre ozone et cendre');

  const ozChoiceO = ozone2.choices.find(c => c.key === 'O')?.text || '';
  const ceChoiceO = cendre2.choices.find(c => c.key === 'O')?.text || '';
  const ozChoiceE = ozone2.choices.find(c => c.key === 'E')?.text || '';
  const ceChoiceE = cendre2.choices.find(c => c.key === 'E')?.text || '';
  assert.notEqual(ozChoiceO, ceChoiceO, 'getDynamicText sur choix O doit refléter galeries_ozone vs galeries_cendre');
  assert.notEqual(ozChoiceE, ceChoiceE, 'getDynamicText sur choix E doit refléter galeries_ozone vs galeries_cendre');
  assert.match(ozChoiceE, /premier à croiser ton regard/);
  assert.match(ceChoiceO, /premier à te voir/);

  const echoCendre = api.serverGetPendingScene({ currentSceneId: 'ACTE1_03_FAMILIER_1', flags: ['galeries_cendre'] });
  const echoOzone = api.serverGetPendingScene({ currentSceneId: 'ACTE1_03_FAMILIER_1', flags: ['galeries_ozone'] });
  assert.match(echoCendre.narrative, /coupe le silence le premier/, 'Sur route cendre sans choix contraire, l’homme en noir doit parler en premier');
  assert.match(echoOzone.narrative, /s'approcher[\s\S]*Alistair Leonhart/, 'Sur route ozone sans choix contraire, l’homme en blanc garde l’initiative');
});

// 3. Cohérence visuelle & exclusion mutuelle CG / sprites 2D
audit('Visuels et stage (remapping R_O_1/R_E_1, CG sans sprites, cinématiques ACTE1_06, bivouac_distance_O)', () => {
  const rO1 = api.serverGetPendingScene({ currentSceneId: 'R_O_1', flags: ['avec_ombre'] });
  const rE1 = api.serverGetPendingScene({ currentSceneId: 'R_E_1', flags: ['avec_eclaireur'] });
  assert.match(rO1.image, /\/backgrounds\/campement-nuit\.webp$/, 'R_O_1 doit résoudre vers un décor de campement');
  assert.match(rE1.image, /\/backgrounds\/bivouac-souterrain\.webp$/, 'R_E_1 doit résoudre vers un décor de bivouac');
  assert.equal(/\/sprites\//.test(rO1.image), false, 'R_O_1 ne doit pas résoudre son fond vers /sprites/');
  assert.equal(/\/sprites\//.test(rE1.image), false, 'R_E_1 ne doit pas résoudre son fond vers /sprites/');

  // Trio CG sur ACTE1_05B et ACTE1_06 + exclusion stricte de sprites 2D
  for (const id of ['ACTE1_05B_REVEIL_BIVOUAC', 'ACTE1_06_REMONTEE']) {
    const trio = api.serverGetPendingScene({ currentSceneId: id, flags: ['avec_ombre', 'avec_eclaireur', 'poly_active'] });
    assert.equal(trio.stage.illustration, true, `${id} en trio doit être traité comme une CG complète`);
    assert.equal(trio.stage.castCount, 0, `${id} trio CG ne doit afficher aucun sprite 2D`);
    assert.equal(trio.sprite || trio.spriteLeft || trio.spriteRight, null);
  }

  // ACTE1_06_REMONTEE doit conserver les cinématiques spécifiques à chaque route (non écrasées par refonteAsset_)
  const remO = api.serverGetPendingScene({ currentSceneId: 'ACTE1_06_REMONTEE', flags: ['avec_ombre'] });
  const remE = api.serverGetPendingScene({ currentSceneId: 'ACTE1_06_REMONTEE', flags: ['avec_eclaireur'] });
  const remS = api.serverGetPendingScene({ currentSceneId: 'ACTE1_06_REMONTEE', flags: ['voie_solo'] });
  assert.match(remO.image, /09-a-bout-de-souffle-kaelen/, 'ACTE1_06_REMONTEE route Ombre doit conserver la cinématique Kaelen');
  assert.match(remE.image, /17-protection-alistair/, 'ACTE1_06_REMONTEE route Éclaireur doit conserver la cinématique Alistair');
  assert.match(remS.image, /18-route-solo-avancee/, 'ACTE1_06_REMONTEE route Solo doit conserver la cinématique Solo');
  for (const s of [remO, remE, remS]) {
    assert.equal(s.stage.illustration, true);
    assert.equal(s.stage.castCount, 0);
  }

  // CG Acte IV sans sprites 2D
  for (const id of ['ACTE4_03_SPICY_KAELEN', 'ACTE4_03_SPICY_ALISTAIR', 'ACTE4_04_POLY_ALISTAIR', 'ACTE4_04_POLY_KAELEN']) {
    const s = api.serverGetPendingScene({ currentSceneId: id, flags: ['avec_ombre', 'avec_eclaireur', 'poly_active'] });
    assert.match(s.image, /^https:\/\/cdn\.jsdelivr\.net\/gh\/Sunstrader\/Releases@/, `${id} doit pointer vers GitHub Releases CDN`);
    assert.equal(s.stage.illustration, true, `${id} doit être reconnu comme CG sans sprites`);
    assert.equal(s.stage.castCount, 0, `${id} ne doit superposer aucun sprite 2D`);
  }

  // bivouac_distance_O -> image sans feu dédiée
  const bivDist = api.serverGetPendingScene({ currentSceneId: 'ACTE1_05B_REVEIL_BIVOUAC', flags: ['avec_ombre', 'bivouac_distance_O'] });
  assert.match(bivDist.image, /cendres-froides-kaelen-sans-feu-pc\.webp$/, 'bivouac_distance_O doit afficher cendres-froides-kaelen-sans-feu');
  assert.match(bivDist.imageMobile, /cendres-froides-kaelen-sans-feu-mobile\.webp$/);
});

// 4. Voix différenciées, reconnexions d'orphelines, flags & gardes de présence Actes III-V + NG+ Ultra
audit('Orphelines Acte IV, voix Alistair/Kaelen, LEAVE_COMPANION et gardes de présence Actes III-V / NG+ Ultra', () => {
  const spicyE = api.serverGetPendingScene({ currentSceneId: 'ACTE4_03_SPICY_ALISTAIR', flags: ['avec_eclaireur', 'alistair_pure'] });
  assert.equal(/pose ses dagues sur la pierre/i.test(spicyE.narrative), false, 'ACTE4_03_SPICY_ALISTAIR ne doit pas recycler le texte de Kaelen');
  assert.match(spicyE.narrative, /gantelets|insigne|doctrine/);

  const debtE = api.serverGetPendingScene({ currentSceneId: 'ALISTAIR_CONFRONTATION_DETTE', flags: ['avec_eclaireur'] });
  assert.equal(/J'ai vendu mon nom/i.test(debtE.narrative), false, 'ALISTAIR_CONFRONTATION_DETTE ne doit pas cloner la réplique de Kaelen');

  // Reconnexion des 3 orphelines Acte IV
  const afterSpicyO = api.serverProcessChoice({
    currentSceneId: 'ACTE4_03_SPICY_KAELEN',
    flags: ['avec_ombre', 'avec_eclaireur', 'poly_active', 'romance_reelle_O', 'romance_reelle_E'],
    gauges: { lien_O: 8, lien_E: 8, volonte: 9, instabilite: 0, possession: 0 }
  }, 'A_POLY_E');
  assert.equal(afterSpicyO.error, null);
  assert.equal(afterSpicyO.updatedState.currentSceneId, 'ACTE4_04_POLY_ALISTAIR');

  const afterSpicyE = api.serverProcessChoice({
    currentSceneId: 'ACTE4_03_SPICY_ALISTAIR',
    flags: ['avec_ombre', 'avec_eclaireur', 'poly_active', 'romance_reelle_O', 'romance_reelle_E'],
    gauges: { lien_O: 8, lien_E: 8, volonte: 9, instabilite: 0, possession: 0 }
  }, 'A_POLY_O');
  assert.equal(afterSpicyE.error, null);
  assert.equal(afterSpicyE.updatedState.currentSceneId, 'ACTE4_04_POLY_KAELEN');

  const testBlade = api.serverProcessChoice({
    currentSceneId: 'ACTE4_06_OMBRE_AVEU',
    flags: ['avec_ombre', 'dague_kaelen_prise']
  }, 'TEST');
  assert.equal(testBlade.error, null);
  assert.equal(testBlade.updatedState.currentSceneId, 'ACTE4_06B_TEST_KAELEN');
  assert(testBlade.updatedState.flags.includes('kaelen_test_lame'));

  // KILL retire réellement Alistair via LEAVE_COMPANION E tout en gardant Kaelen actif
  const afterKill = api.serverProcessChoice({
    currentSceneId: 'ACTE4_06_MASQUE_TOMBE_2',
    flags: ['avec_ombre', 'avec_eclaireur', 'poly_active']
  }, 'KILL');
  assert.equal(afterKill.error, null);
  assert(afterKill.updatedState.flags.includes('alistair_mort'));
  assert(afterKill.updatedState.flags.includes('avec_ombre'));
  assert.equal(afterKill.updatedState.flags.includes('avec_eclaireur'), false, 'KILL doit retirer avec_eclaireur via LEAVE_COMPANION');

  // Jugement Acte III jouable même sans Kaelen ni Alistair
  const judgDead = api.serverGetPendingScene({
    currentSceneId: 'ACTE3_11_JUGEMENT',
    flags: ['kaelen_mort', 'alistair_mort']
  });
  assert(judgDead.choices.length >= 1, 'ACTE3_11_JUGEMENT doit garder au moins un choix jouable sans compagnons');
  assert.equal(judgDead.choices.some(c => c.key === 'O' || c.key === 'E'), false);

  // Seuil Éternité masque les choix et sprites des compagnons morts/absents
  const seuilDead = api.serverGetPendingScene({
    currentSceneId: 'ACTE4_08_SEUIL_ETERNITE',
    flags: ['kaelen_mort', 'alistair_mort']
  });
  assert.equal(seuilDead.spriteLeft, null);
  assert.equal(seuilDead.spriteRight, null);
  assert.equal(seuilDead.choices.map(c => c.key).join(','), 'S');

  // Acte IV dôme & Acte V lendemain conservent les échos alistair_emprisonne / kaelen_perdu_definitif
  const dome = api.serverGetPendingScene({
    currentSceneId: 'ACTE4_01_DEPART_VILLAGE',
    flags: ['avec_eclaireur', 'alistair_emprisonne', 'kaelen_perdu_definitif']
  });
  assert.match(dome.narrative, /geôles du sanctuaire/);
  assert.match(dome.narrative, /bord gauche du dôme reste vide/);

  const dawn = api.serverGetPendingScene({
    currentSceneId: 'ACTE5_01_LENDEMAIN',
    flags: ['kaelen_perdu_definitif', 'alistair_emprisonne']
  });
  assert.match(dawn.narrative, /emplacement où Kaelen posait ses dagues demeure vide/);
  assert.match(dawn.narrative, /geôles du sanctuaire retiennent encore/);

  // NG+ Ultra garde une voix fidèle à la route réelle
  const gardeO = api.serverGetPendingScene({
    gameMode: 'ngplus',
    currentSceneId: 'NGP_U14_GARDE',
    flags: ['ngplus_route_O', 'ngplus_alistair_distance']
  });
  assert.match(gardeO.narrative, /Kaelen demande/);
  assert.equal(/Alistair demande/.test(gardeO.narrative), false, 'NGP_U14_GARDE ne doit pas citer Alistair sur une route Kaelen seule');
});

// 5. Validation complète de toutes les suites QA internes + cibles tactiles 44px
audit('Suites QA internes (90_QA + 95_NGPlus_Ultra_QA) et cibles tactiles >= 44px', () => {
  const suites = [
    ['serverValidateDatabase', r => r && r.scenes === 227 && r.ngPlusScenes === 80 && Array.isArray(r.missing) && r.missing.length === 0 && Array.isArray(r.deadEnds) && r.deadEnds.length === 0 && Array.isArray(r.placeholders) && r.placeholders.length === 0],
    ['serverRunComprehensiveQA', r => r && r.ok === true],
    ['serverRunAssetQA', r => r && r.ok === true],
    ['serverRunV52ModularQA', r => r && r.ok === true && r.classicScenes === 227 && r.ngPlusScenes === 80],
    ['serverRunV5203AIAuditFixQA', r => r && r.ok === true],
    ['serverRunV5205MultiTestersQA', r => r && r.ok === true],
    ['serverRunV5220UltimateQA', r => r && r.ok === true],
    ['serverRunNGPlusUltraQA', r => r && r.ok === true && r.scenes === 80 && r.ultraScenes === 54 && r.choices === 181 && r.endings === 6],
    ['serverRunV5215VisualCoherenceQA', r => r && r.ok === true]
  ];
  for (const [fnName, predicate] of suites) {
    assert.equal(typeof ctx[fnName], 'function', `Fonction QA manquante: ${fnName}`);
    const res = ctx[fnName]();
    assert(predicate(res), `Suite QA en échec (${fnName}): ${JSON.stringify(res)}`);
  }

  const styles = fs.readFileSync(path.join(root, 'Styles_Game.html'), 'utf8');
  const landscape = fs.readFileSync(path.join(root, 'Cinematic_UI_Landscape.html'), 'utf8');
  assert.match(styles, /\.game-dock-btn\{[^}]*height:44px/s);
  assert.match(styles, /\.quick-menu-btn,\.quick-menu-main\{[^}]*min-height:44px/s);
  assert.match(styles, /body\.game-live \.choice-btn\s*\{[^}]*min-height:\s*44px\s*!important/s);
  assert.match(landscape, /body\.game-live \.choice-btn\s*\{[^}]*min-height:\s*44px\s*!important/s);
  assert.match(landscape, /#btn-landscape-menu\s*\{[^}]*width:\s*44px;\s*height:\s*44px/s);
});

console.log(JSON.stringify({ ok: true, passed }, null, 2));
