const http = require('http');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const DB_FILES = [
  path.join(ROOT, 'elenya-refonte-52.4/project/DATABASE_Acte1.js'),
  path.join(ROOT, 'elenya-refonte-52.4/project/DATABASE_Relations.js')
];

function makeState(flags = []) {
  const set = new Set(flags);
  return {
    flags: [...set],
    gauges: {},
    hasFlag: f => set.has(f),
    getFlag: f => set.has(f),
    getGauge: () => 0,
    hasGauge: () => false,
    hasItem: () => false,
    hasAchievement: () => false,
    getVariable: () => null
  };
}

function loadDatabase(file) {
  const source = fs.readFileSync(file, 'utf8');
  const context = {
    console,
    isClassicState: () => true,
    isMobileDevice: () => false
  };
  vm.createContext(context);
  vm.runInContext(source, context, { filename: file, timeout: 1000 });
  const fnName = file.includes('Relations') ? '_dbRelationsV52_' : '_dbActe1V52_';
  if (typeof context[fnName] !== 'function') throw new Error('Base introuvable: ' + fnName);
  return context[fnName]();
}

function safeCall(value, state, mobile) {
  if (typeof value !== 'function') return value ?? null;
  try { return value(state, mobile) ?? null; } catch (e) { return null; }
}

function cleanScene(id, scene, source, index) {
  const state = makeState([]);
  const out = {
    id,
    source,
    order: index,
    sceneNumber: scene.sceneNumber ?? id,
    chapter: scene.chapter ?? null,
    title: scene.title ?? id,
    mood: scene.mood ?? null,
    narrative: scene.narrative ?? null,
    dynamicNarrative: safeCall(scene.getDynamicNarrative, state, false),
    imagePc: safeCall(scene.image, state, false),
    imageMobile: safeCall(scene.imageMobile, state, true),
    transitionPc: safeCall(scene.transitionGif, state, false),
    transitionMobile: safeCall(scene.transitionGifMobile, state, true),
    postPc: safeCall(scene.postTransitionImage, state, false),
    postMobile: safeCall(scene.postTransitionImageMobile, state, true),
    stage: scene.stage ?? null,
    emotionalBeat: scene.emotionalBeat ?? null,
    choices: []
  };
  const choices = Array.isArray(scene.choices) ? scene.choices : [];
  out.choices = choices.map((c, i) => {
    let available = true, conditionError = null;
    if (typeof c.condition === 'function') {
      try { available = !!c.condition(state); } catch (e) { available = false; conditionError = String(e.message || e); }
    }
    return {
      index: i,
      key: c.key ?? null,
      text: c.text ?? '',
      next: c.next ?? null,
      target: c.target ?? null,
      intent: c.intent ?? null,
      importance: c.importance ?? null,
      feedback: c.feedback ?? null,
      effects: c.effects ?? [],
      available,
      conditionError
    };
  });
  return out;
}

function buildCatalog() {
  const result = [];
  for (const file of DB_FILES) {
    if (!fs.existsSync(file)) continue;
    const db = loadDatabase(file);
    for (const [id, scene] of Object.entries(db || {})) {
      if (!scene || typeof scene !== 'object') continue;
      result.push(cleanScene(id, scene, path.basename(file), result.length));
    }
  }
  const seen = new Set();
  return result.filter(s => {
    if (seen.has(s.id)) return false;
    seen.add(s.id);
    return true;
  });
}

const index = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (url.pathname === '/api/scenes') {
    try {
      const scenes = buildCatalog();
      res.writeHead(200, {'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});
      res.end(JSON.stringify({version:'live-source', generatedAt:new Date().toISOString(), count:scenes.length, scenes}));
    } catch (e) {
      res.writeHead(500, {'Content-Type':'application/json; charset=utf-8'});
      res.end(JSON.stringify({error:String(e.stack || e)}));
    }
    return;
  }
  if (url.pathname === '/healthz') {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify({ok:true}));
    return;
  }
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  res.end(index);
});

const port = process.env.PORT || 3000;
server.listen(port, '0.0.0.0', () => console.log('Elenya QA listening on ' + port));
