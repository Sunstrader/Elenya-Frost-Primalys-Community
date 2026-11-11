const path = require('node:path');
const { createIsolatedEngine } = require('./engine.cjs');

const root = path.resolve(__dirname, '../project');
const engine = createIsolatedEngine(root);
const out = engine.run('imageReviewerWebBootstrap', []);

if (!out || out.ok !== true) throw new Error('Image reviewer bootstrap failed');
if (!Array.isArray(out.scenes) || out.scenes.length < 250) throw new Error('Scene catalog incomplete');
if (!Array.isArray(out.assets) || out.assets.length !== 157) throw new Error('Expected 157 consolidated visuals');
if (!out.scenes.every(s => Array.isArray(s.currentImages) && Array.isArray(s.choices))) {
  throw new Error('Invalid scene shape');
}
if (!out.scenes.every(s => s.choices.every(c => Array.isArray(c.images)))) {
  throw new Error('Every choice must expose its own image list');
}

const opening = out.scenes.find(s => s.id === 'ACTE1_01_REVEIL');
if (!opening) throw new Error('Opening scene missing');
const openingImage = role => opening.currentImages.find(v => v.role === role)?.url || '';
if (!openingImage('Image PC').endsWith('/autel-reveil-elenya-pc-corrige.webp') ||
    !openingImage('Image mobile').endsWith('/autel-reveil-elenya-mobile-corrige.webp') ||
    !openingImage('Après transition PC').endsWith('/autel-reveil-elenya-pc-corrige.webp') ||
    !openingImage('Après transition mobile').endsWith('/autel-reveil-elenya-mobile-corrige.webp')) {
  throw new Error('Opening scene must retain separate PC/mobile images after the video');
}

const duel = out.scenes.find(s => s.id === 'ACTE1_02_RENCONTRE_2');
if (!duel) throw new Error('Duel des Ombres scene missing');
const duelChoices = Object.fromEntries(duel.choices.map(c => [c.key, c]));
for (const key of ['O','E','S']) {
  if (!duelChoices[key] || !duelChoices[key].images.length) {
    throw new Error('Choice ' + key + ' must expose its destination image');
  }
}
const choiceUrls = ['O','E','S'].map(k => duelChoices[k].images.find(v => v.role === 'Image PC')?.url || duelChoices[k].images[0].url);
// Mapping actuel (canon Acte1) : O=Kaelen corrigé, E=Alistair regard, S=givre au sol.
if (!choiceUrls[0].includes('/echo-neige-kaelen-position-corrigee.webp') ||
    !choiceUrls[1].includes('/rencontre-alistair-regard-elenya-gauche-pc.webp') ||
    !choiceUrls[2].includes('/givre-sol-debut-pc.webp')) {
  throw new Error('O/E/S choice images do not match the reviewed mapping');
}

const echo = out.scenes.find(s => s.id === 'ACTE1_03_FAMILIER_1');
if (!echo) throw new Error('Echo de Neige scene missing');
if (!echo.currentImages.length) throw new Error('Echo de Neige has no scene image');
const echoSceneUrls = new Set(echo.currentImages.map(v => v.url));
if (echoSceneUrls.size !== 1 || ![...echoSceneUrls][0].includes('/12-triangulation-tension.webp')) {
  throw new Error('Echo de Neige must use the reviewed base scene image on PC and mobile');
}

console.log(JSON.stringify({
  ok: true,
  scenes: out.scenes.length,
  assets: out.assets.length,
  duelChoiceUrls: choiceUrls,
  echoSceneUrls: [...echoSceneUrls]
}, null, 2));
