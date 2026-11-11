// Manifeste V56 complet vérifié : Elenya, Kaelen et Alistair.
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const project = path.resolve(__dirname, '../project');
const read = name => fs.readFileSync(path.join(project, name), 'utf8');

const game = read('Scripts_Game.html');
const ui = read('Game_Interface.html');
const styles = read('Styles_Game.html');
const refonte = read('Scripts_Refonte.html');
const rootIndex = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

// 1. Loading screen.
assert.match(ui, /id="startup-loader"/, 'Écran de chargement absent.');
assert.match(game, /ELENYA_LOADING_LORE/, 'Lore de chargement absent.');
assert.match(game, /setTimeout\(hideStartupLoader,3500\)/, 'Fallback de fermeture du loader absent.');

// 2. Fresh-install test exists separately and is wired through package.json.
// Here we guard the UI conditions that caused the historical first-launch freeze.
assert.match(game, /classList\.add\('hidden'\);\s*document\.body\.classList\.add\('game-live'\)/, 'Nouvelle Partie doit activer game-live.');
// Narration choisie au menu : l'onboarding est désormais porté par Scripts_Game.
assert.match(game, /function chooseNarrationAndStart\(/, 'Le choix de narration doit rester disponible depuis le menu.');

// 3. Distinct-choice detector exists separately; keep the targeted scene loaded.
assert.match(game, /function makeChoice\(/, 'Gestionnaire de choix absent.');

// 4. Gallery completion + fullscreen.
assert.match(ui, /id="gallery-progress-text"/, 'Compteur galerie absent.');
assert.match(game, /function updateGalleryProgress\(/, 'Calcul de progression galerie absent.');
assert.match(game, /gallery-lightbox-close/, 'Lightbox galerie absente.');
assert.match(game, /event\.key === 'Escape'.*gallery-lightbox/s, 'Fermeture clavier de la galerie absente.');

// 5. Mobile breakpoints.
assert.match(styles, /@media \(max-width: 430px\)/, 'Breakpoint 430px absent.');
assert.match(styles, /@media \(max-width: 375px\)/, 'Breakpoint 375px absent.');
assert.match(styles, /@media \(max-width: 340px\)/, 'Breakpoint ~320px absent.');
assert.match(styles, /safe-area-inset-bottom/, 'Gestion safe-area mobile absente.');
assert.match(styles, /Mobile portrait stage — garder les personnages lisibles/, 'Protection de visibilité des sprites mobile absente.');
assert.match(styles, /bottom:\s*clamp\(72px,\s*8dvh,\s*112px\)/, 'Les sprites portrait mobile ne sont pas remontés.');
const jrpgStyles = read('JRPG_UI_Styles.html');
assert.match(jrpgStyles, /Mobile portrait reading stage/, 'Polish JRPG portrait mobile absent.');
assert.match(jrpgStyles, /max-height:\s*44dvh/, 'La zone UI mobile doit laisser une vraie scène visible.');
assert.match(jrpgStyles, /min-height:\s*0\s*!important/, 'La narration mobile conserve une hauteur minimale excessive.');
assert.match(jrpgStyles, /choices\.jrpg-ready[\s\S]*?max-height:\s*min\(18dvh,\s*160px\)/, 'Les choix mobile ne sont pas plafonnés.');
assert.match(jrpgStyles, /état Décision : privilégier la lisibilité des choix/, 'Layout Décision mobile dédié absent.');
assert.match(jrpgStyles, /cinema-choice-stage \.choices\.jrpg-ready[\s\S]*?max-height:\s*min\(28dvh,\s*260px\)/, 'La zone Décision mobile reste trop petite.');
assert.match(jrpgStyles, /cinema-choice-stage #jrpg-page-ui[\s\S]*?display:\s*none\s*!important/, 'Le compteur de pages doit disparaître pendant la décision mobile.');
assert.match(jrpgStyles, /cinema-choice-stage \.narrative[\s\S]*?max-height:\s*min\(13dvh,\s*112px\)/, 'La narration doit se compacter pendant la décision mobile.');
assert.match(game, /function usePortraitMobileEndingVideo\(/, 'Détection vidéo portrait mobile absente.');
assert.match(game, /\/game-v55\/endings-mobile\//, 'Source 9:16 des fins absente.');
assert.match(game, /function setResponsiveVideoSource\(/, 'Fallback vidéo mobile/PC absent.');
assert.match(game, /video\.src = source;/, 'Fallback vers la vidéo PC absent.');
assert.match(styles, /@media \(max-width: 760px\) and \(orientation: portrait\)/, 'Style vidéo 9:16 mobile absent.');

// 6. Dynamic menu.
assert.match(game, /function updateMenuAtmosphere\(/, 'Atmosphère dynamique du menu absente.');
assert.match(styles, /menu-memory-cycle/, 'État visuel Cycle Brisé absent.');
const cinematicStyles = read('Cinematic_UI_Styles.html');
const cinematicRuntime = read('Cinematic_UI_Runtime.html');
assert.match(cinematicRuntime, /cinema-cast-single/, 'Classe de cadrage mono-personnage absente.');
assert.match(cinematicRuntime, /cinema-cast-duo/, 'Classe de cadrage duo absente.');
assert.match(cinematicRuntime, /cinema-save-visible/, 'Feedback sauvegarde transitoire absent.');
assert.match(cinematicRuntime, /3200/, 'Durée du feedback sauvegarde non bornée.');
assert.match(cinematicStyles, /Final visual micro-polish/, 'Micro-polish visuel final absent.');
assert.match(cinematicStyles, /drop-shadow\(0 10px 16px/, 'Détourage doux des sprites absent.');
assert.match(cinematicStyles, /cinema-choice-stage\.cinema-cast-duo/, 'Cadrage duo adaptatif pendant les choix absent.');

// 7. Save reassurance + integrity.
assert.match(game, /ELENYA_LAST_SAVE_KEY/, 'Horodatage de dernière sauvegarde absent.');
assert.match(game, /function refreshSaveAge\(/, 'Affichage âge sauvegarde absent.');
assert.match(game, /algorithm:'fnv1a32'/, 'Checksum export absent.');
assert.match(game, /function verifyBackupIntegrity\(/, 'Validation checksum import absente.');
assert.match(game, /serverGetPendingScene\(state\)/, 'Validation de scène à l’import absente.');

// 8. Ending recap.
assert.match(game, /ux-ending-summary-aaa/, 'Récapitulatif de fin enrichi absent.');
assert.match(game, /Destins connus/, 'Destins des personnages absents du récapitulatif.');
assert.match(game, /fins découvertes/, 'Progression des fins absente.');
assert.match(styles, /ux-ending-grid/, 'Mise en page AAA du récapitulatif absente.');

// Styles_Game doit rester un fragment HTML valide : aucun CSS brut après la dernière balise </style>.
const stylesTrimmed=styles.trim();
assert(stylesTrimmed.endsWith('</style>'), 'Styles_Game.html contient du CSS brut hors <style>.');
const mobileMarker=styles.indexOf('/* Mobile polish — 430 / 375 / 320 px */');
assert(mobileMarker>=0 && mobileMarker<styles.lastIndexOf('</style>'), 'Le CSS mobile doit rester à l’intérieur d’une balise <style>.');
assert.match(styles, /body\.game-live > \.header\s*\{[\s\S]*?margin:\s*0\s*!important[\s\S]*?transform:\s*none\s*!important/, 'La barre principale doit rester ancrée dans le flux supérieur.');

// Cinematic act transitions.
assert.match(ui, /id="act-transition"/, 'Carton cinématique d’acte absent.');
assert.match(game, /function maybeShowActTransition\(/, 'Détection de changement d’acte absente.');
assert.match(game, /_forceActCardOnNextScene=true/, 'Nouvelle partie doit pouvoir afficher l’Acte I.');
assert.match(game, /!isActChange && !lightTransition/, 'La transition glace ne doit pas se superposer au carton d’acte.');
assert.match(styles, /jrpgPageInPremium/, 'Micro-transition premium entre pages absente.');
assert.match(styles, /#act-transition\.show/, 'Style d’affichage du carton d’acte absent.');

// End-of-act checkpoints — Actes I à IV seulement.
assert.match(ui, /id="act-checkpoint"/, 'Checkpoint de fin d’acte absent.');
assert.match(game, /function showActCheckpoint\(/, 'Logique du checkpoint de fin d’acte absente.');
assert.match(game, /previousChapter\s*<\s*5/, 'L’Acte V doit être explicitement exclu des checkpoints.');
assert.match(game, /function finishActCheckpointContinue\(/, 'Action Continuer du checkpoint absente.');
assert.match(game, /function finishActCheckpointQuit\(/, 'Action Sauvegarder et quitter absente.');
assert.match(game, /_act_checkpoint/, 'Sauvegarde dédiée de checkpoint absente.');
assert.match(game, /serverSaveGame\(state\)/, 'Le checkpoint doit aussi être sauvegardé côté serveur.');
assert.match(game, /renderScene\(nextData\)/, 'Continuer doit rendre le début de l’acte suivant.');

// Final checkpoint — Acte V.
assert.match(game, /function saveFinalCheckpoint\(/, 'Checkpoint final de l’Acte V absent.');
assert.match(game, /Number\(chapter\) === 5/, 'La fin de l’Acte V doit utiliser le checkpoint final.');
assert.match(game, /POINT DE SAUVEGARDE FINAL/, 'Libellé du checkpoint final absent.');
assert.match(game, /function saveFinalCheckpointAndQuit\(/, 'Action Sauvegarder et quitter de la fin absente.');
assert.match(game, /_final_checkpoint/, 'Sauvegarde locale dédiée à la fin absente.');
assert.match(styles, /\.final-checkpoint-card/, 'Style du checkpoint final absent.');

// Branding — ELENYA / L’Héritage de Primaëlys.
const shell = read('V12_Jeu.html');
assert.match(shell, /<title>ELENYA — L’Héritage de Primaëlys<\/title>/, 'Titre HTML ELENYA/Primaëlys incorrect.');
assert.match(ui, /<div class="accueil-title">ELENYA<\/div>/, 'Le titre principal doit être ELENYA.');
assert.match(ui, /<div class="accueil-desc">L’Héritage de Primaëlys<\/div>/, 'Sous-titre Primaëlys incorrect.');
assert.doesNotMatch(ui, /Elenya Frost|ELENYA FROST/, 'Frost ne doit plus être utilisé comme nom du jeu.');
assert.doesNotMatch(ui, /L['’]Héritage de Primalys/, 'Ancienne orthographe Primalys encore présente.');
assert.doesNotMatch(rootIndex, /Elenya Frost|ELENYA FROST/, 'index.html contient encore l’ancien nom Elenya Frost.');
assert.match(rootIndex, /L’Héritage de Primaëlys/, 'index.html n’utilise pas le nouveau sous-titre.');

// Minimal top HUD + bottom gameplay dock.
assert.doesNotMatch(ui, /<div class="header-right">/, 'La barre d’actions du haut ne doit plus exister.');
assert.match(ui, /class="game-control-dock"/, 'Dock de commandes inférieur absent.');
assert.match(ui, /id="btn-game-menu"/, 'Bouton Menu du dock absent.');
assert.match(ui, /id="btn-rf-narrate"[^>]*>🎙️<\/button>/, 'Narration doit rester une icône seule.');
assert.match(ui, /id="btn-rf-tools"[^>]*>📖<\/button>/, 'Options de lecture doivent être dans le dock.');
assert.match(ui, /id="btn-colorblind"/, 'Mode daltonien absent du dock.');
assert.match(ui, /id="btn-mute"/, 'Contrôle du son absent du dock.');
assert.match(ui, /id="game-quick-menu"/, 'Menu secondaire en jeu absent.');
assert.match(ui, /id="btn-game-save"[^>]*onclick="closeGameQuickMenu\(\);showSaveModal\(\)"/, 'La sauvegarde doit être accessible depuis le menu en jeu.');
assert.match(game, /function saveToSlot\(slot\)/, 'Le menu doit conserver la sauvegarde manuelle par emplacement.');
assert.match(game, /function toggleGameQuickMenu\(/, 'Logique du menu secondaire absente.');
assert.match(styles, /\.game-control-dock\{/, 'Style du dock inférieur absent.');
assert.match(styles, /#game-quick-menu\{/, 'Style du menu secondaire absent.');

// Modular 2D character rig — Elenya / Kaelen / Alistair.
const modular = read('Character_Modular_Runtime.html');
const sceneManager = read('30_SceneManager.js');
assert.match(shell, /include\('Character_Modular_Runtime'\)/, 'Runtime modulaire non inclus dans V12_Jeu.');
assert.match(modular, /window\.ElenyaModular/, 'API ElenyaModular absente.');
assert.match(modular, /version:'2\.0\.0'/, 'Runtime modulaire V2 absent.');
assert.match(modular, /collectAutoRigLayers/, 'Découpage automatique du sprite absent.');
assert.match(modular, /hasStructuralLayers/, 'Fusion corps animé + expression absente pour les tenues complètes.');
assert.match(modular, /rig-head/, 'Zone tête du pseudo-rig absente.');
assert.match(modular, /rig-torso/, 'Zone torse du pseudo-rig absente.');
assert.match(modular, /rig-arm-left/, 'Bras gauche du pseudo-rig absent.');
assert.match(modular, /rig-arm-right/, 'Bras droit du pseudo-rig absent.');
assert.match(modular, /pose-guarded/, 'Pose guarded absente.');
assert.match(modular, /pose-combat/, 'Pose combat absente.');
assert.match(modular, /motionProfile/, 'Profil de mouvement par personnage absent.');
assert.match(modular, /anim-active/, 'Animation active du personnage focalisé absente.');
assert.match(modular, /--rig-active-duration/, 'Durée active configurable absente.');
assert.match(modular, /dedicated-rig/, 'Support des vraies couches dédiées absent.');
assert.ok(
  modular.includes('elenya-3d-assets@f587a9ffeebf456288f9e684d5b861fc2fc630d9/game-v56/modular/manifest.json'),
  'Le manifeste modulaire doit être épinglé sur les tenues vérifiées.'
);
assert.match(modular, /value\.className/, 'Classe de rig du manifeste non propagée.');
assert.match(modular, /value\.origin/, 'Origine de rotation du manifeste non propagée.');
assert.match(modular, /\.modular-character \.rig-head/, 'Animation tête dédiée absente.');
assert.match(modular, /\.modular-character \.rig-arm-left/, 'Animation bras gauche dédiée absente.');
assert.match(modular, /\.modular-character \.rig-arm-right/, 'Animation bras droit dédiée absente.');

assert.match(modular, /framing-close/, 'Cadrage rapproché modulaire absent.');
assert.match(modular, /framing-wide/, 'Cadrage large modulaire absent.');
assert.match(modular, /data-modular-framing/, 'État de cadrage non exposé sur les sprites.');

assert.match(game, /ElenyaModular\.syncStage/, 'Synchronisation stage → runtime modulaire absente.');
assert.match(sceneManager, /elenyaStageAutoElenyaSide_/, 'Alternance stable gauche\/droite d’Elenya absente.');
assert.match(sceneManager, /elenyaStageFraming_/, 'Sélection de cadrage cinématique absente.');
assert.match(sceneManager, /asymmetric-auto/, 'Layout asymétrique automatique absent.');

assert.match(game, /ElenyaModular\.showForSprite/, 'Scripts_Game ne branche pas le runtime modulaire.');
assert.match(game, /ElenyaModular\.syncStage/, 'Synchronisation stage → runtime modulaire absente.');
assert.match(rootIndex, /elenya-modular-2d-style/, 'index.html ne contient pas le runtime modulaire compilé.');

// Root build must include all source changes.
for (const token of [
  'startup-loader',
  'gallery-progress-text',
  '@media (max-width: 430px)',
  'updateMenuAtmosphere',
  'verifyBackupIntegrity',
  'ux-ending-summary-aaa',
  'endings-mobile',
  'setResponsiveVideoSource'
]) {
  assert(rootIndex.includes(token), 'index.html désynchronisé : '+token);
}

console.log(JSON.stringify({
  ok:true,
  checks:[
    'loader lore',
    'premier lancement non bloquant',
    'détecteur de faux choix',
    'galerie complète',
    'mobile 320-430px',
    'vidéos de fin 9:16 avec fallback PC',
    'menu mémoriel',
    'sauvegarde fraîche + checksum',
    'récapitulatif de fin AAA',
    'index synchronisé'
  ]
},null,2));
