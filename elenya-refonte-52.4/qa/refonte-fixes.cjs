'use strict';

const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const project = path.resolve(__dirname, '../project');
const read = name => fs.readFileSync(path.join(project, name), 'utf8');

const game = read('Scripts_Game.html');
const refonte = read('Scripts_Refonte.html');
const styles = read('JRPG_UI_Styles.html');
const runtime = read('JRPG_UI_Runtime.html');

assert.match(
  game,
  /accueil-screen'\)\.classList\.add\('hidden'\);\s*document\.body\.classList\.add\('game-live'\)/,
  'Nouvelle Partie doit activer game-live dès le premier lancement.'
);

const interfaceHtml = read('Game_Interface.html');
assert.match(interfaceHtml, /chooseNarrationAndStart\('classic'\)/, 'Le mode narration doit être demandé avant Nouvelle Partie.');
assert.match(interfaceHtml, /chooseNarrationAndStart\('ngplus'\)/, 'Le mode narration doit être demandé avant New Game+.');
assert.match(game, /function launchGameWithNarration\(enabled\)[\s\S]*?RF\.setNarrationForNewGame\(!!enabled\)[\s\S]*?startGame\(true, 'classic'\)/,
  'Le choix de narration doit être appliqué avant le démarrage.');
assert.match(refonte, /function setNarrationForNewGame\(enabled\)/, 'La préférence vocale doit être enregistrée au lancement.');
assert.doesNotMatch(refonte, /open\('Narration Vocale'/, 'La première scène ne doit plus interrompre le jeu avec la question de narration.');
assert.doesNotMatch(interfaceHtml, /Lire avec le son/, 'Aucun choix avec ou sans son ne doit interrompre les cinématiques.');
assert.match(game, /configureSound\(preferred\);[\s\S]*?playCinematicWithSound\(\)/,
  'La vidéo doit démarrer avec sa bande son.');


assert.match(
  styles,
  /#jrpg-next\.ready\s*\{[^}]*pointer-events:\s*auto[^}]*cursor:\s*pointer/s,
  'Le prompt Continuer doit être cliquable lorsqu’il est prêt.'
);

assert.match(
  runtime,
  /next\.addEventListener\('click',[\s\S]*?handleAdvance\(\)/,
  'Le prompt Continuer doit appeler handleAdvance() au clic.'
);

assert.match(
  runtime,
  /next\.addEventListener\('keydown',[\s\S]*?event\.key === 'Enter'[\s\S]*?handleAdvance\(\)/,
  'Le prompt Continuer doit fonctionner au clavier.'
);


const refonteUi = read('Scripts_Refonte.html');
const rootIndex = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../package.json'), 'utf8'));
const stateSource = read('22_State.js');
const serverSource = fs.readFileSync(path.resolve(__dirname, '../../server.js'), 'utf8');

assert.match(
  game,
  /ELENYA_RUN_LABEL_KEY\s*=\s*'elenya_run_count'/,
  'Le compteur narratif des parties classiques doit rester présent.'
);
assert.match(
  game,
  /if\(reset\)\{[\s\S]{0,300}?incrementNarrativeRun\('classic'\)/,
  'Une Nouvelle Partie classique doit incrémenter le compteur narratif.'
);
assert.match(
  game,
  /incrementNarrativeRun\('ngplus'\)/,
  'Une Nouvelle Partie+ doit incrémenter le cycle narratif.'
);
assert.match(
  interfaceHtml,
  /Partie I — Qui suis-je \?/,
  'Le menu initial doit afficher une accroche narrative et non la version technique.'
);
assert.match(
  refonteUi,
  /<h3>Informations techniques<\/h3>/,
  'La version technique doit rester accessible dans les paramètres.'
);
assert.match(
  rootIndex,
  /ELENYA_RUN_LABEL_KEY/,
  'index.html doit être synchronisé avec le compteur narratif.'
);
assert.doesNotMatch(
  rootIndex,
  /<div id="build-version"[^>]*>\s*V?52\.4\.3-free-voice\s*•/,
  'Le menu ne doit plus afficher la version technique comme accroche principale.'
);

const expectedVersion = String(packageJson.version);
assert.match(stateSource, new RegExp(`const BUILD_VERSION = ['\"]${expectedVersion.replace(/\./g,'\\.')}['\"]`), 'BUILD_VERSION doit correspondre à package.json.');
assert.doesNotMatch(stateSource, /52\.4\.3-free-voice/, '22_State.js contient encore l’ancienne version technique.');
assert.doesNotMatch(game, /52\.4\.3-free-voice/, 'Scripts_Game.html contient encore l’ancienne version technique.');
assert.doesNotMatch(refonteUi, /52\.4\.3-free-voice/, 'Scripts_Refonte.html contient encore l’ancienne version technique.');
assert.doesNotMatch(serverSource, /52\.4\.3-free-voice/, 'server.js contient encore l’ancienne version technique.');

console.log(JSON.stringify({
  ok: true,
  checks: [
    'Nouvelle Partie active game-live',
    'narration choisie avant la partie',
    'cinématiques lancées avec leur son',
    'Continuer cliquable',
    'Continuer accessible clavier',
    'compteur narratif des parties',
    'accroche narrative du menu',
    'infos techniques déplacées dans Paramètres',
    'index synchronisé'
  ]
}, null, 2));
