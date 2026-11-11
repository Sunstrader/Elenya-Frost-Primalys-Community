# ELENYA — L’Héritage de Primaëlys — 52.5.0

Cette version est la référence GitHub actuelle. Le runtime cible est Node/Railway ; Google Apps Script n’est plus le flux de livraison de référence.

## Validation

Depuis la racine du projet :

```bash
npm test
npm run lint
npm run build
npm run voice:status
```

## Narration pré-générée

Voix candidates : Algenib, Achird, Sulafat et Leda. Le jeu cherche d’abord les fichiers du pack vocal puis utilise le TTS français du navigateur en secours lorsqu’un segment manque.

Préparation gratuite :

```bash
bash scripts/prepare-gemini-free.sh
npm run voice:previews
npm run voice:status
```

Génération Sulafat :

```bash
npm run voice:generate
npm run voice:status
```

Les quatre voix :

```bash
npm run voice:generate:all
```

La génération est reprenable et ignore les fichiers déjà produits.

## Publication

Avant toute mise à jour GitHub :

```bash
npm test
npm run lint
npm run build
```

Le dossier `elenya-refonte-52.4/` conserve son nom historique pour éviter une migration de chemins inutile ; la version produit de référence est **52.5.0**.
