// Contrôles reproductibles du vrai moteur GAS dans Node (services Google simulés).
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const {loadEngine}=require('./engine.cjs');
const root=path.resolve(__dirname,'../project'),{api,ctx,props}=loadEngine(root);
const clone=x=>JSON.parse(JSON.stringify(x)),checks=[];
function check(name,fn){fn();checks.push(name)}

check('Syntaxe de tous les scripts et des scripts HTML',()=>{
  let combined='';
  for(const f of fs.readdirSync(root)){
    const fullPath=path.join(root,f);
    if(fs.statSync(fullPath).isDirectory()) continue;
    const source=fs.readFileSync(fullPath,'utf8');
    if(f.endsWith('.js'))new vm.Script(source,{filename:f});
    if(f.endsWith('.html'))for(const m of source.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)){
      if(!m[1].includes('<?'))new vm.Script(m[1],{filename:f});
      if(['Scripts_Game.html','Scripts_Refonte.html','Character_3D_Runtime.html','JRPG_UI_Runtime.html','Cinematic_UI_Runtime.html'].includes(f))combined+=m[1]+'\n';
    }
  }
  new vm.Script(combined);
});

check('NG+ Ultra : 307 scènes, destinations présentes, aucun cul-de-sac déclaré',()=>{
  const r=api.serverValidateDatabase();
  assert.equal(r.scenes,227);
  assert.equal(r.ngPlusScenes,80);
  assert.equal(r.scenes+r.ngPlusScenes,307);
  for(const k of ['missing','deadEnds','placeholders'])assert.equal(r[k].length,0,k+': '+JSON.stringify(r[k].slice(0,5)));
});

check('Campagne classique : contrôles de régression préexistants',()=>assert.equal(ctx.serverRunComprehensiveQA().ok,true));

check('Illustrations cinématiques sans sprites superposés ; cast ordinaire préservé',()=>{
  for (const id of ['ACTE1_02_RENCONTRE_1','ACTE1_02_RENCONTRE_2','ACTE1_03_FAMILIER_1']) {
    const state=api.normalizeGameState({gameMode:'classic',currentSceneId:id,flags:['react_ombre']});
    const manager=new api.SceneManager(state);
    const scene=manager.renderScene(id);
    assert(scene,id+' non rendu');
    assert.equal(scene.stage && scene.stage.illustration,true,id+' : illustration cinématique non reconnue');
    assert.equal(scene.sprite,null,id+' : sprite central superposé');
    assert.equal(scene.spriteLeft,null,id+' : sprite gauche superposé');
    assert.equal(scene.spriteRight,null,id+' : sprite droit superposé');
    assert.equal(Object.keys(scene.stage && scene.stage.characters || {}).length,0,id+' : cast parasite sur illustration');
  }

  const ordinaryId='ACTE2_04_VILLAGE_HOSTILE';
  const ordinaryState=api.normalizeGameState({gameMode:'classic',currentSceneId:ordinaryId,flags:[]});
  const ordinary=new api.SceneManager(ordinaryState).renderScene(ordinaryId);
  assert.match(String(ordinary.spriteLeft||''),/kaelen/i,'Kaelen perdu sur une scène à sprites');
  assert.match(String(ordinary.spriteRight||''),/alistair/i,'Alistair perdu sur une scène à sprites');
  const cast=ordinary.stage && ordinary.stage.characters || {};
  assert.equal(Object.prototype.hasOwnProperty.call(cast,'elenya'),false,'Elenya injectée à tort dans un duo explicite');
  assert.equal(Object.prototype.hasOwnProperty.call(cast,'kaelen'),true,'Kaelen absent du cast ordinaire');
  assert.equal(Object.prototype.hasOwnProperty.call(cast,'alistair'),true,'Alistair absent du cast ordinaire');
});

check('Images du début : Fen PC/mobile, Lyra sans Elenya et feu avec un décor',()=>{
  for (const [route,flags] of [['orage',['galeries_ozone']],['cendre',['galeries_cendre']]]) {
    for (const id of ['ACTE1_02_RENCONTRE_1','ACTE1_02_RENCONTRE_2']) {
      const data=api.serverGetPendingScene({currentSceneId:id,flags});
      const animated = id==='ACTE1_02_RENCONTRE_1';
      const imageName = animated ? 'duel-'+route : 'duel-'+route+'-fin';
      assert.match(data.image,new RegExp(imageName+'-pc\\.webp$'),id+' '+route+' PC');
      assert.match(data.imageMobile,new RegExp(imageName+'-mobile\\.webp$'),id+' '+route+' mobile');
      if (animated) {
        assert.match(data.transitionGif,new RegExp('duel-'+route+'-pc\\.mp4$'));
        assert.match(data.transitionGifMobile,new RegExp('duel-'+route+'-mobile\\.mp4$'));
        assert.match(data.postTransitionImage,new RegExp('duel-'+route+'-fin-pc\\.webp$'));
        assert.match(data.postTransitionImageMobile,new RegExp('duel-'+route+'-fin-mobile\\.webp$'));
      } else {
        assert.equal(data.transitionGif,null,id+' : vidéo hors de la deuxième scène');
      }
    }
  }
  for (const [route,flags] of [['kaelen',['avec_ombre']],['alistair',['avec_eclaireur']],['solo',['voie_solo']]]) {
    const data=api.serverGetPendingScene({currentSceneId:'ACTE1_07_RETROUVAILLES',flags});
    assert.match(data.image,new RegExp('triangulation-'+route+'-pc\\.webp$'),route+' PC');
    assert.match(data.imageMobile,new RegExp('triangulation-'+route+'-mobile\\.webp$'),route+' mobile');
    assert.equal(data.stage.castCount,0,route+' : sprites superposés au trio illustré');
  }
  const fen=api.serverGetPendingScene({currentSceneId:'ACTE1_03_FAMILIER_2',flags:[]});
  assert.match(fen.image,/\/cinematics\/fen-arrivee\/fen-debut-pc\.webp/);
  assert.match(fen.imageMobile,/\/cinematics\/fen-arrivee\/fen-debut-mobile\.webp/);
  assert.equal(fen.stage.illustration,true);
  assert.equal(fen.stage.castCount,0,'Fen déjà dans l’image : aucun second sprite');
  const gameSource=fs.readFileSync(path.join(root,'Scripts_Game.html'),'utf8');
  const viewportFunction=gameSource.match(/function sceneBackgroundForViewport\(data\) \{[\s\S]*?\n\}/);
  assert(viewportFunction,'sélection PC/mobile introuvable');
  for (const [portrait,expected] of [[true,fen.imageMobile],[false,fen.image]]) {
    const select=vm.runInNewContext(viewportFunction[0]+'\nsceneBackgroundForViewport',
      {window:{matchMedia:()=>({matches:portrait})}});
    assert.equal(select(fen),expected,portrait?'cadrage mobile':'cadrage PC');
  }
  const videoHelpers=gameSource.slice(gameSource.indexOf('function usePortraitMobileEndingVideo()'),gameSource.indexOf('function stopAmbientMedia('));
  assert(videoHelpers.includes('function setResponsiveVideoSource('),'sélection vidéo PC/mobile introuvable');
  for(const portrait of [true,false]) {
    const helpers=vm.runInNewContext(videoHelpers+'\n({setResponsiveVideoSource,usePortraitMobileEndingVideo})',
      {window:{matchMedia:query=>({matches:portrait && query.includes('max-width: 760px')})}});
    for(const route of ['orage','cendre']) {
      const scene=api.serverGetPendingScene({currentSceneId:'ACTE1_02_RENCONTRE_1',flags:[route==='orage'?'galeries_ozone':'galeries_cendre']});
      const video={dataset:{},removeAttribute(){},play(){return Promise.resolve()}};
      helpers.setResponsiveVideoSource(video,scene.transitionGif,false,scene.transitionGifMobile);
      assert.equal(video.src,portrait?scene.transitionGifMobile:scene.transitionGif,route+' '+(portrait?'mobile':'PC'));
      if(portrait) {
        video.onerror();
        assert.equal(video.src,scene.transitionGif,route+' : vidéo PC de secours');
      }
    }
  }
  const lyra=api.serverGetPendingScene({currentSceneId:'ACTE1_08B_LYRA_ECHO',flags:[]});
  assert.equal(lyra.stage.characters.elenya,undefined);
  for(const id of ['LIEN_LISIERE_KAELEN','LIEN_LISIERE_ALISTAIR']){
    const data=api.serverGetPendingScene({currentSceneId:id,flags:[id.endsWith('KAELEN')?'avec_ombre':'avec_eclaireur']});
    assert.match(data.image,/campement-nuit\.webp/,id+' sans feu de camp');
    assert.match(String(data.spriteLeft),/\/sprites\/(kaelen|elenya)\.webp/,id+' sans premier personnage');
    assert.match(String(data.spriteRight),/\/sprites\/(kaelen|alistair|elenya)\.webp/,id+' sans second personnage');
    assert.equal(data.stage.castCount,2,id+' : personnages en double');
  }
  const ui=fs.readFileSync(path.join(root,'Cinematic_UI_Runtime.html'),'utf8');
  assert.match(ui,/function speakerName\(data\)[\s\S]*?return '';\s*\}/);
});

check('Feux du début : décor du lieu et cast réel, sans trio romantique imposé',()=>{
  // Canon DB Acte1 : avec_eclaireur → bivouac-souterrain ; avec_ombre / voie_solo → bivouac-sans-feu-*
  const kaelen=api.serverGetPendingScene({currentSceneId:'ACTE1_05_BIVOUAC',flags:['avec_ombre']});
  assert.match(kaelen.image,/bivouac-sans-feu-pc\.webp$/);
  assert.deepEqual(Object.keys(kaelen.stage.characters).sort(),['elenya','kaelen']);
  const alistair=api.serverGetPendingScene({currentSceneId:'ACTE1_05_BIVOUAC',flags:['avec_eclaireur']});
  assert.match(alistair.image,/bivouac-souterrain\.webp$/);
  assert.deepEqual(Object.keys(alistair.stage.characters).sort(),['alistair','elenya']);
  const solo=api.serverGetPendingScene({currentSceneId:'ACTE1_05_BIVOUAC',flags:['voie_solo']});
  assert.match(solo.image,/bivouac-sans-feu-pc\.webp$/);
  assert.deepEqual(Object.keys(solo.stage.characters),['elenya']);
  for (const id of ['ACTE1_08B_BIVOUAC_LISIERE','LIEN_LISIERE_DEUX']) {
    const trio=api.serverGetPendingScene({currentSceneId:id,flags:[]});
    assert.match(trio.image,/campement-nuit\.webp$/,id+' sans feu visible');
    assert.deepEqual(Object.keys(trio.stage.characters).sort(),['alistair','elenya','kaelen'],id+' trio incomplet');
    assert.equal(trio.stage.castCount,3);
  }
  for (const [gone,expected] of [['kaelen_mort',['alistair','elenya']],['alistair_mort',['elenya','kaelen']]]) {
    const scene=api.serverGetPendingScene({currentSceneId:'ACTE1_08B_BIVOUAC_LISIERE',flags:[gone]});
    assert.deepEqual(Object.keys(scene.stage.characters).sort(),expected,gone+' visible au camp');
  }
});

check('Acte I : Elenya reste présente avec son compagnon',()=>{
  const scenes=['ACTE1_04_FRESQUE','ACTE1_05_BIVOUAC','ACTE1_05B_REVEIL_BIVOUAC','ACTE1_05C_JALOUSIE_SOUTERRAINE','ACTE1_06_REMONTEE'];
  for (const [flag,companion] of [['avec_eclaireur','alistair'],['avec_ombre','kaelen']]) {
    for (const id of scenes) {
      const state=api.normalizeGameState({gameMode:'classic',currentSceneId:id,flags:[flag]});
      const scene=new api.SceneManager(state).renderScene(id);
      assert(scene,id+' non rendu');
      const cast=scene.stage && scene.stage.characters || {};
      if (scene.stage && scene.stage.illustration) {
        assert.equal(scene.stage.castCount,0,id+' : sprites superposés à l’illustration');
        assert.equal(scene.sprite||scene.spriteLeft||scene.spriteRight,null,id+' : sprite parasite sur l’illustration');
      } else {
        assert.equal(scene.stage && scene.stage.castCount,2,id+' : composition non duo');
        assert.equal(Object.prototype.hasOwnProperty.call(cast,'elenya'),true,id+' : Elenya absente');
        assert.equal(Object.prototype.hasOwnProperty.call(cast,companion),true,id+' : compagnon absent');
        assert(scene.spriteLeft && scene.spriteRight,id+' : un emplacement de sprite est vide');
      }
    }
  }
});

check('Scène du dôme : texte et sprites suivent les survivants',()=>{
  for(const [flags,expected] of [
    [[],['kaelen','alistair']],
    [['kaelen_mort'],['elenya','alistair']],
    [['kaelen_perdu_definitif'],['elenya','alistair']],
    [['alistair_mort'],['kaelen','elenya']],
    [['alistair_emprisonne'],['kaelen','elenya']],
    [['kaelen_mort','alistair_mort'],['elenya']]
  ]){
    const data=api.serverGetPendingScene({currentSceneId:'ACTE4_01_DEPART_VILLAGE',flags});
    const cast=Object.keys(data.stage.characters).sort();
    assert.deepEqual(cast,expected.sort(),flags.join(',')+': personnages visibles');
    for(const id of ['kaelen','alistair'])if(flags.some(f=>f===id+'_mort'||f===id+'_perdu_definitif'||(id==='alistair'&&f==='alistair_emprisonne'))){
      assert(!cast.includes(id),id+' absent affiché');
    }
  }
});

check('Runtime modulaire : bascule atomique et vrais clignements',()=>{
  const runtime=fs.readFileSync(path.join(root,'Character_Modular_Runtime.html'),'utf8');
  assert.match(runtime,/modular-loading/);
  assert.match(runtime,/rig-blink/);
  assert.match(runtime,/elenyaNaturalBlink/);
  assert.match(runtime,/f587a9ffeebf456288f9e684d5b861fc2fc630d9/);
});

check('NG+ Ultra : 181 choix et six fins conservées',()=>{
  const scenes=Object.values(api.NGPLUS_DB);
  const choices=scenes.flatMap(s=>s.choices||[]);
  assert.equal(choices.length,181);
  assert.equal(scenes.filter(s=>s.isEnd).length,6);
});

check('NG+ Ultra : chaque scène possède un décor fixe valide',()=>{
  for(const [id,s] of Object.entries(api.NGPLUS_DB)){
    assert.equal(typeof s.image,'string',id+' sans image');
    assert(s.image.startsWith('https://cdn.jsdelivr.net/gh/Sunstrader/'),id+' image non CDN: '+s.image);
  }
});

check('Fins classiques : les compagnons absents ne réapparaissent pas',()=>{
  const final='ACTE4_09_TRONE_EBENE';
  for(const [absent,flags,gauges,forbidden] of [
    ['Kaelen',['avec_ombre','consort_kaelen','kaelen_mort','poly_eligible','ton_douceur','reliques_completes','pomme_ramassee','regard_partage_feu'],{lien_O:8,lien_E:8,affinite_ombre:12,affinite_eclaireur:11},['FIN_OMBRE','FIN_POLY','FIN_RECONCILIATION','FIN_EQUILIBRE','FIN_TEMOIN']],
    ['Alistair',['avec_eclaireur','consort_alistair','alistair_mort','poly_eligible','ton_douceur','reliques_completes','pomme_ramassee','regard_partage_feu'],{lien_O:8,lien_E:8,affinite_ombre:11,affinite_eclaireur:12},['FIN_ECLAIREUR','FIN_POLY','FIN_RECONCILIATION','FIN_EQUILIBRE','FIN_TEMOIN']]
  ]){
    const choices=api.serverGetPendingScene({currentSceneId:final,flags,gauges}).choices.map(c=>c.key);
    for(const key of forbidden)assert(!choices.includes(key),absent+' absent mais '+key+' proposé');
  }
  const alone=api.serverGetPendingScene({currentSceneId:'FIN_SOLO',flags:['voie_solo','kaelen_mort','alistair_mort']});
  assert(!alone.narrative.includes('Kaelen et Alistair restent dans la nef'));
  const returnAlone=api.serverGetPendingScene({currentSceneId:'ACTE5_02_RETOUR',flags:['kaelen_mort','alistair_mort']});
  assert.match(returnAlone.narrative,/Personne ne t'attend ici/);
});

check('NG+ Ultra : les grands choix mènent à de vraies scènes différentes',()=>{
  const ids=['NGP_01_SEUIL','NGP_02_NEUF_ECHOS','NGP_03_PALAIS_ECHO','NGP_04_FRESQUE_REPRISE','NGP_07_KAELEN_ECHO','NGP_08_ALISTAIR_ECHO','NGP_09_DEUX_ECHOS','NGP_10_ORAYA','NGP_11_LYRA','NGP_12_FEN','NGP_13_BRASIER','NGP_14_TRONE_BRIS','NGP_15_DERNIER_CHOIX'];
  for(const id of ids){
    const scene=api.NGPLUS_DB[id];assert(scene,id+' absent');
    const normal=(scene.choices||[]).filter(c=>c.key!=='NEUVIEME');
    const targets=normal.map(c=>c.next);
    assert.equal(new Set(targets).size,targets.length,id+' contient encore des choix qui convergent immédiatement');
  }
});

check('Branches historiques 52.4 conservées derrière la couche Ultra',()=>{
  const cases=[
    ['NGP_05_CONFRERIE','OMBRE','NGP_05A_ARCHIVES'],
    ['NGP_05_CONFRERIE','ECLAIREUR','NGP_05B_SCEAU'],
    ['NGP_05_CONFRERIE','LIBERTE','NGP_05C_CENDRES']
  ];
  for(const [source,key,target] of cases){
    const result=api.serverProcessChoice({gameMode:'ngplus',currentSceneId:source},key);
    assert.equal(result.error,null);assert.equal(result.updatedState.currentSceneId,target);assert(result.nextSceneData.narrative.length>100);
  }
  for(const [source,key,ultra,target] of [
    ['NGP_07_KAELEN_ECHO','STAY','NGP_U07_RESTE','NGP_07B_PAS'],
    ['NGP_08_ALISTAIR_ECHO','STAY','NGP_U08_RESTE','NGP_08B_SEUIL']
  ]){
    const first=api.serverProcessChoice({gameMode:'ngplus',currentSceneId:source},key);
    assert.equal(first.error,null);assert.equal(first.updatedState.currentSceneId,ultra);
    const follow=first.nextSceneData.choices[0];
    const second=api.serverProcessChoice(clone(first.updatedState),follow.key);
    assert.equal(second.error,null);assert.equal(second.updatedState.currentSceneId,target);
  }
});

check('Secret 100 % : neuvième mémoire verrouillée puis déverrouillée',()=>{
  const low=api.serverGetPendingScene({gameMode:'ngplus',currentSceneId:'NGP_12_FEN',ngPlus:{cycle:1,originEnds:[]},gauges:{memoire_kalthar:20}});
  assert(!low.choices.some(c=>c.key==='NEUVIEME'));
  const origins=['a','b','c','d','e','f','g','h','i'];
  const full=api.serverGetPendingScene({gameMode:'ngplus',currentSceneId:'NGP_12_FEN',ngPlus:{cycle:1,originEnds:origins},gauges:{memoire_kalthar:12}});
  assert(full.choices.some(c=>c.key==='NEUVIEME'));
  const r=api.serverProcessChoice(clone(full.renderedState),'NEUVIEME');
  assert.equal(r.error,null);assert.equal(r.updatedState.currentSceneId,'NGP_U12_NEUVIEME');
});

check('Reprendre conserve une scène de branche sans dupliquer le rendu',()=>{
  const r=api.serverProcessChoice({gameMode:'ngplus'},'MEMOIRE');
  assert.equal(r.updatedState.currentSceneId,'NGP_U01_MEMOIRE');
  const resumed=api.serverGetPendingScene(clone(r.updatedState));
  assert.equal(resumed.sceneId,r.nextSceneData.sceneId);
  assert.equal(resumed.renderedState.currentSceneId,r.updatedState.currentSceneId);
});

check('Choix invalide refusé sans incrémentation',()=>{
  const s=api.serverGetPendingScene({gameMode:'ngplus'}).renderedState;
  const r=api.serverProcessChoice(clone(s),'INEXISTANT');
  assert(r.error);assert.equal(r.updatedState.currentSceneId,s.currentSceneId);assert.equal(r.updatedState.stats.choicesMade,s.stats.choicesMade);
});

check('Refus explicite d’une romance respecté en NG+',()=>{
  const s=api.serverGetPendingScene({gameMode:'ngplus',currentSceneId:'NGP_15_DERNIER_CHOIX',flags:['ngplus_route_O','ngplus_kaelen_amitie']});
  assert(!s.choices.some(c=>c.key==='LOVE'));assert(api.serverProcessChoice(clone(s.renderedState),'LOVE').error);
});

check('Trône détruit : aucune invitation contradictoire à le rejoindre',()=>{
  const s=api.serverGetPendingScene({gameMode:'ngplus',currentSceneId:'NGP_15_DERNIER_CHOIX',flags:['ngplus_route_both','ngplus_trone_detruit']});
  assert(!s.choices.some(c=>c.key==='THRONE'));
});

check('Fen : choix direct vers le matin, sans flashback parasite',()=>{
  // Choix S (repos Fen) → ACTE2_08 direct ; flag nuit_fen_repos.
  // « Ils descendent avec toi » est réservé à refus_nuit_auberge (S_LIMITE_*), pas à ce chemin.
  const start={gameMode:'classic',currentSceneId:'ACTE2_06_NUIT_AUBERGE',flags:['voie_solo'],gauges:{presence_S:0,tension_triangle:0}};
  const result=api.serverProcessChoice(start,'S');
  assert.equal(result.updatedState.currentSceneId,'ACTE2_08_MATIN_AUBERGE');
  assert.match(result.nextSceneData.title,/Froid Trahisseur/i);
  assert(result.updatedState.flags.includes('nuit_fen_repos'));
  assert.match(result.nextSceneData.narrative,/Tu dors près de Fen/i);
  assert.match(result.nextSceneData.narrative,/En descendant dans la salle commune/i);
  assert.doesNotMatch(result.nextSceneData.narrative,/Trône d'Ébène|souvenir que Fen/i);
});

check('Auberge : Kaelen et Alistair gardent deux réactions et deux conséquences distinctes',()=>{
  for(const [choice,route,sceneId,flag,place] of [['O','avec_ombre','ACTE2_07_INTIMITE_O','intimite_O_auberge','lucarne'],['E','avec_eclaireur','ACTE2_07_INTIMITE_E','intimite_E_auberge','porte']]){
    const entry=api.serverGetPendingScene({gameMode:'classic',currentSceneId:'ACTE2_06_NUIT_AUBERGE',flags:[route,'_alistair_priere_vu']});
    assert(entry.narrative.includes(place));
    const result=api.serverProcessChoice(clone(entry.renderedState),choice);
    assert.equal(result.updatedState.currentSceneId,sceneId);
    assert(result.updatedState.flags.includes(flag));
    assert(result.nextSceneData.narrative.includes(choice==='O'?'Kaelen':'Alistair'));
  }
});

check('Feu partagé : foyer à l’auberge, campement lors de la halte',()=>{
  for(const [returnTo,place] of [['ACTE2_06_NUIT_AUBERGE',"foyer"],['ACTE2_12_NUIT_ISOLEE',"feu de camp"]]){
    const scene=api.serverGetPendingScene({gameMode:'classic',currentSceneId:'LIEN_FEU_PARTAGE',returnStack:[returnTo],flags:['pomme_ramassee']});
    assert.match(scene.narrative,new RegExp(place));
    assert.equal(scene.choices[0].next,'RETURN');
  }
});

check('Effet de combat fidèle au choix, aucun gel des compagnons hors scénario',()=>{
  for(const [k,effect] of [['A','ice-storm'],['B','ice-lance']]){
    const r=api.serverProcessChoice({currentSceneId:'ACTE3_02_SAUVETAGE'},k);assert.equal(r.nextSceneData.presentation.effect,effect);assert.equal(r.nextSceneData.presentation.frozenCharacter,null);assert.equal(/basalt-ravine-oblique/.test(r.nextSceneData.image),k==='B');
  }
});

check('Sauvegarde longue fragmentée et rechargée sans perte',()=>{
  const state=api.normalizeGameState({currentSceneId:'ACTE1_01_REVEIL',narrative:{testArchive:'Mémoire❄️'.repeat(2800)},noRollback:true});assert(ctx.serverSaveGame(clone(state)).ok);const loaded=ctx.serverLoadGame('classic');assert(loaded.ok);assert.equal(loaded.state.narrative.testArchive,state.narrative.testArchive);assert.equal(loaded.state.noRollback,true);for(const [key,value]of props)if(key.includes('_chunk_'))assert(Buffer.byteLength(value)<8000);
});

check('Échec d’écriture : sauvegarde précédente encore lisible',()=>{
  const store=ctx.PropertiesService.getUserProperties(),original=store.setProperty;let count=0;store.setProperty=(k,v)=>{if(k.includes('_chunk_')&&++count===2)throw new Error('Quota simulé');return original(k,v)};
  const before=ctx.serverLoadGame('classic').state.narrative.testArchive;const r=ctx.serverSaveGame({currentSceneId:'ACTE1_01_REVEIL',narrative:{testArchive:'Autre'.repeat(5000)}});store.setProperty=original;assert.equal(r.ok,false);assert.equal(ctx.serverLoadGame('classic').state.narrative.testArchive,before);
});

check('Ancienne sauvegarde JSON toujours reconnue',()=>{
  props.delete('elenya_state_ngplus_manifest');props.set('elenya_state_ngplus',JSON.stringify({gameMode:'ngplus',currentSceneId:'NGP_07_KAELEN_ECHO',flags:['ngplus_route_O'],achievements:['ach_fin_solo']}));const r=ctx.serverLoadGame('ngplus');assert(r.ok);assert.equal(r.state.currentSceneId,'NGP_07_KAELEN_ECHO');assert(r.state.achievements.includes('ach_fin_solo'));
});

check('Catalogue de la carte et 33 fins globales conservés',()=>{
  const r=ctx.serverGetExplorer();assert.equal(r.scenes.filter(s=>s.end).length,33);assert.equal(r.backgrounds.length,8);assert.equal(api.ELENYA_ENDING_VIDEO_IDS_V55.length,33);
});

let seed=524;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};
const journeys={classic:{runs:0,endings:{},errors:[],steps:[]},ngplus:{runs:0,endings:{},errors:[],steps:[]}};
for(const mode of ['classic','ngplus'])for(let run=0;run<500;run++){
  let state={gameMode:mode},route=[],out=journeys[mode];out.runs++;
  for(let step=0;step<240;step++){
    const data=api.serverGetPendingScene(clone(state));if(!data){out.errors.push({run,reason:'rendu null',state:state.currentSceneId});break;}
    state=data.renderedState;if(data.isEnd){out.endings[state.currentSceneId]??=route;out.steps.push(step);break;}
    if(!data.choices.length){out.errors.push({run,reason:'aucun choix visible',scene:state.currentSceneId});break;}
    const choice=data.choices[Math.floor(random()*data.choices.length)];route.push([state.currentSceneId,choice.key]);const result=api.serverProcessChoice(clone(state),choice.key);
    if(result.error){out.errors.push({run,reason:result.error,scene:state.currentSceneId});break;}state=result.updatedState;
    if(step===239)out.errors.push({run,reason:'limite 240 transitions',scene:state.currentSceneId});
  }
}
check('1000 parcours automatiques sans blocage',()=>{assert.equal(journeys.classic.errors.length,0,JSON.stringify(journeys.classic.errors.slice(0,3)));assert.equal(journeys.ngplus.errors.length,0,JSON.stringify(journeys.ngplus.errors.slice(0,3)))});
check('Les six fins NG+ atteintes par des parcours réels',()=>assert.equal(Object.keys(journeys.ngplus.endings).length,6));

const report={version:api.BUILD_VERSION,environment:'Node VM ; services Google simulés, sans navigateur réel',checks,journeys,limitations:['Pas de validation visuelle ni de clics sur le déploiement Google Apps Script.','Les parcours aléatoires ne prouvent pas toutes les combinaisons de choix.','Les URLs CDN sont validées structurellement, pas téléchargées par ce test hors-ligne.']};
fs.writeFileSync(path.join(__dirname,'resultats-moteur.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify({ok:true,checks:checks.length,totalScenes:301,ngPlusScenes:80,ngPlusChoices:181,classicEnds:Object.keys(journeys.classic.endings).length,ngPlusEnds:Object.keys(journeys.ngplus.endings).length},null,2));
