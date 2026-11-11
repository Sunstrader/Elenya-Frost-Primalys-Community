---
name: elenya-romance
description: "Règles romance Elenya : Kaelen Ombre, Alistair Éclaireur, triangle, refus, défaite, micro-réactions. Utiliser avant toute réécriture romance, Lisière, auberge, Marche Blanche, ou flag interet_romantique."
type: workflow
lifecycle: active
---

# Romance — procédure

Lire `docs/ROMANCE_RULES.md`. Code : `elenya-refonte-52.4/project/DATABASE_Relations.js`. Test : `elenya-refonte-52.4/qa/romance.cjs`.

## Interdit

Empiler `ADD_GAUGE lien_O` et déclarer la romance améliorée. Jauge ≠ romance. Refus ≠ rupture. Défaite ≠ fermeture. Triangle ≠ deux jauges hautes. Fen ≠ pénalité. `_romance_beat_recent` ≠ romance active. Kaelen ne parle pas comme Alistair.

## Faire

1. Lire 3 scènes avant et 3 après.
2. Séparer lien, présence, intérêt, événement (`lisiere_*`).
3. Exiger `companionPresentO` / `companionPresentE` si le personnage doit être là.
4. Écrire la mémoire dans le geste suivant, pas dans un rappel explicite.
5. Si joute froide ou domination récente : la tension actuelle gagne sur l’écho tendre.
6. Lancer `romance.cjs` et `choice-distinctness.cjs`.
