# NG+ et Cycle Brisé

## Déverrouillage

`serverStartNewGamePlus` refuse tant que les 9 achievements de `ROUTES.md` ne sont pas dans `clientMeta.achievements`. Message actuel : « NEW GAME+ verrouillé. Termine les 9 fins classiques requises. »

Au démarrage, le serveur injecte `elenya_globals` = `{ achievements, globalFlags }`.

## Fichiers

- `24_NGPlus_Ultra.js`
- `25_NGPlus_Ultra_Visuals.js`
- `95_NGPlus_Ultra_QA.js`
- `DATABASE_NGPlus.js`
- scène seuil citée : `NGP_01_SEUIL`

## Cycle Brisé

Couche supplémentaire de mémoire inter-cycle. Toute modif de fin, d’achievement ou de flag global doit dire si elle ne touche que le classique ou aussi le cycle suivant.

## Sauvegardes

`serverSaveGame` valide `currentSceneId` puis répond `localOnly: true`. `serverLoadGame` répond que les sauvegardes sont gérées dans le navigateur. Ne pas introduire un save serveur « plus propre » sans demande. Ne pas casser scène courante, historique, flags, jauges, achievements, globaux, reprise directe.

## Question systématique

Est-ce que ce correctif n’affecte que la partie classique, ou aussi le cycle suivant ?
