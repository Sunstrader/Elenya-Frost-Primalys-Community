# Bible — ELENYA, L’Héritage de Primaëlys

Index du pack Grok. Les règles opératoires sont dans `AGENTS.md`. Ici : identité, carte du dépôt, et ce qui a été vérifié le 2026-10-05 sur `main` (`2f31552`).

## 01 — Identité

- Produit : ELENYA — L’Héritage de Primaëlys
- Slug : `Primaelys`
- Version : `52.5.4` (`package.json`, README)
- Dépôt : `Sunstrader/Elenya-Frost-Primalys` (privé)
- Principe : le joueur sent le changement des relations et du monde, il ne voit pas seulement des variables bouger

`metadata.json` dit encore « visual novel ». Ne pas le traiter comme la définition produit. Ne pas le réécrire dans un correctif sans rapport.

## 02 — Carte technique vérifiée

`server.js` :

- moteur isolé via `elenya-refonte-52.4/qa/engine.cjs`
- `projectRoot` = `elenya-refonte-52.4/project`
- assets = `elenya-refonte-52.4/assets`
- docs HTTP `/docs/` = `elenya-refonte-52.4/docs`
- API compatible `google.script.run` sur `/api/gas/`
- port 3000, Node >= 20, Railway (`railway.json`)

Arbre vivant (extrait) : `00_EntryPoints.js`, `10_Triggers.js`, `20_Core_Helpers.js`, `21_Assets.js`, `22_State.js`, `23_Refonte.js`, `24_NGPlus_Ultra.js`, `25_NGPlus_Ultra_Visuals.js`, `30_SceneManager.js`, `50_Server_API.js`, `90_QA.js`, `95_NGPlus_Ultra_QA.js`, `DATABASE_Acte1.js` … `DATABASE_Acte5.js`, `DATABASE_Endings.js`, `DATABASE_Fragments.js`, `DATABASE_Index.js`, `DATABASE_NGPlus.js`, `DATABASE_Relations.js`, `DATABASE_Secondary.js`, `ImageReviewer.html`, `V12_Jeu.html`.

Racine `project/` : copie partielle, SHA différents (ex. `DATABASE_Relations.js`). Ne pas y patcher.

## 03 — Personnages (registres, pas fiches complètes)

Voix détaillée : skill `elenya-frost-characters`.

- Elenya — autonomie, contradictions, givre / instabilité, rapport aux deux compagnons. Jamais « l’héroïne qui choisit un homme ».
- Kaelen — Ombre. Lame, cendre, silence, provocation, proximité, danger, vulnérabilité cachée. Pas un romantique générique.
- Alistair — Éclaireur. Lumière, foi, insigne, retenue, protection, culpabilité. Ne pas recopier une scène Kaelen en changeant le nom.
- Fen — chaleur, repos, sécurité, instinct. Pas un compteur romantique. `nuit_fen_repos` ne retire pas une romance.

## 04 — Relations

Voir `ROMANCE_RULES.md` et `FLAGS.md`.

Jauge, intérêt, présence et route sont quatre choses. Amitié, proximité, tendresse, intérêt, romance assumée, intimité, engagement ne se confondent pas.

## 05 — Routes et fins

Voir `ROUTES.md`. Neuf achievements classiques déverrouillent le NG+ dans `server.js` : `ach_fin_ombre`, `ach_fin_eclaireur`, `ach_fin_poly`, `ach_fin_solo`, `ach_fin_reconciliation`, `ach_fin_hiver`, `ach_fin_sacrifice`, `ach_fin_mortelle`, `ach_fin_brisee`.

## 06 — NG+

Voir `NGPLUS.md`. Mémoire : `achievements` + `globalFlags` dans `elenya_globals`. Sauvegardes : locales au navigateur (`localOnly: true`). Le serveur ne charge pas une sauvegarde distante.

## 07 — Scènes

Voir `SCENE_GRAPH.md`. Ancres connues : `LIEN_LISIERE_KAELEN`, `LIEN_LISIERE_ALISTAIR`, `LIEN_LISIERE_DEUX`, `ACTE2_06_NUIT_AUBERGE`, `ACTE2_06B_LENDEMAIN_CONFIDENCE`, `ACTE2_08_MATIN_AUBERGE`, `ACTE2_08B_MICRO_REACTION`, `LIEN_MARCHE_BLANCHE`, `LIEN_MARCHE_BLANCHE_B`, `LIEN_MARCHE_2`, `LIEN_MARCHE_2B`, `NGP_01_SEUIL`.

Deux comptes coexistent et ne doivent pas être fusionnés sans lecture du test : README voix = 246 scènes jouables + scène technique, 1 269 variantes, 2 260 segments ; le brief conception cite 221 Classic + 80 NG+ = 301. Lire l’assert dans `elenya-refonte-52.4/qa/check.cjs` avant d’en faire une loi.

## 08 — UI, image, audio

Voir `VISUAL_RULES.md` et `AUDIO_RULES.md`.

UI retenue : Cinema (variante visuelle préférée #3 dans le brief). Image Reviewer : `/review-images` et `/?review=images`.

Voix candidates : Algenib, Achird, Sulafat, Leda. Backend autorisé : `gemini-free` seulement. Aucune clé dans le jeu.

## 09 — Modification

Voir `DESIGN_DECISIONS.md` et `QA_RULES.md`. Toute tâche non triviale se termine par `npm test`, `npm run lint`, `npm run build`.
