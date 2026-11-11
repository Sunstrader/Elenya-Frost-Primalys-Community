# Règles audio

Vérifié dans le README `52.5.4`.

## Corpus

- 2 260 segments français uniques
- 246 scènes jouables + scène technique
- 1 269 variantes
- 731 582 caractères par voix
- rapports : `elenya-refonte-52.4/docs/voice-corpus-report.json`, `elenya-refonte-52.4/assets/voices/voice-corpus.json`

## Voix

Algenib, Achird, Sulafat, Leda. Sulafat est la priorité de génération (`npm run voice:generate`).

Backend : `gemini-free` uniquement. Cloud / Vertex / payants refusés. `scripts/prepare-cloud-tts.sh` neutralisé. Clé hors dépôt (`~/.config/elenya/gemini-free.key`). Aucune clé dans le jeu, aucune demande au joueur.

Segment manquant : fallback TTS français du navigateur. Fichiers servis via `/assets/voices/`.

## Mix

Narrateur > SFX. Relais vocal actif : SFX atténués ou muets. La voix reste compréhensible.

## Commandes

```bash
npm run voice:status
npm run voice:previews
npm run voice:generate
npm run voice:verify
```

`voice:verify` ne passe que si les quatre voix couvrent les 2 260 segments et ont leurs aperçus. Ne pas lancer une génération payante pour « finir plus vite ».
