---
name: elenya-code
description: "Moteur Node Elenya 52.5.4 : SceneManager, DATABASE, effects, server.js, arbre elenya-refonte-52.4/project. Utiliser pour tout correctif technique. Pas pour une refonte."
type: knowledge
lifecycle: active
---

# Code

Le code exécuté tranche. Ce skill et `docs/` ne prouvent pas qu’une mécanique existe. Avant un patch : lire la définition, les appels, les conditions, les effets, et le test QA. Si le pack contredit le fichier, le signaler ; ne pas choisir en silence.

Arbre vivant : `elenya-refonte-52.4/project`. `server.js` ne charge pas `project/` à la racine. Ne pas renommer le dossier historique.

Correctif local seulement. Pas de refonte pour un problème local. Avant d’écrire : état actuel, problème, changement, impacts, vérification.

Lire la scène, les flags, le `next`, les triggers (`10_Triggers.js`), l’état (`22_State.js`). Ne pas supposer qu’un effet du contrat ci-dessous est branché tant qu’il n’est pas vu dans le fichier.

Effets du contrat QA : `ADD_GAUGE`, `SET_GAUGE`, `ADD_TIMER`, `SET_TIMER`, `SET_FLAG`, `REMOVE_FLAG`, `SET_GLOBAL_FLAG`, `UNLOCK_ACHIEVEMENT`, `PUSH_RETURN`, `ADD_ITEM`, `REMOVE_ITEM`, `ADD_REP`, `SET_ROUTE`, `JOIN_COMPANION`, `SWITCH_COMPANION`, `LEAVE_COMPANION`.

`getDynamicNarrative` reste dynamique. Sauvegardes locales. API `/api/gas/` : ne pas ajouter une méthode sans l’entrer dans `ALLOWED_GAS_METHODS`.

`elenya-frost-engine` décrit l’ancien Apps Script. Il ne prime pas sur ce skill.
