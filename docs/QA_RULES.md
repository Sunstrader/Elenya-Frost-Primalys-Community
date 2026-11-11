# Règles QA

Une modification est correcte seulement si : code ok, build ok, lint ok, tests ok, narration ok, routes ok, visuel ok, sauvegarde ok, NG+ ok.

## Commandes

```bash
npm test
npm run lint
npm run build
```

`npm test` (`package.json` 52.5.4), dans l’ordre :

1. `elenya-refonte-52.4/qa/bivouac-kaelen.cjs`
2. `elenya-refonte-52.4/qa/romance.cjs`
3. `elenya-refonte-52.4/qa/check.cjs`
4. `elenya-refonte-52.4/qa/client-state.cjs`
5. `elenya-refonte-52.4/qa/refonte-fixes.cjs`
6. `elenya-refonte-52.4/qa/first-run.cjs`
7. `elenya-refonte-52.4/qa/choice-distinctness.cjs`
8. `elenya-refonte-52.4/qa/ux-polish.cjs`
9. `elenya-refonte-52.4/qa/image-reviewer.cjs`

Hors chaîne npm, présents dans le même dossier : `build-plan.cjs`, `endings-cibles.cjs`, `engine.cjs`. `engine.cjs` est aussi le runtime isolé de `server.js`. Ne pas le « simplifier ».

La racine `qa/` n’est pas la chaîne `npm test`.

## Ce que la QA narrative couvre

Routes, choix disponibles, romance, refus (la limite est entendue), fins, NG+, mémoire, images, reprise, choix distincts, premier lancement, UX.

Skill ton / anti-méta : `elenya-frost-narrative-qa`. Ne pas annoncer l’émotion (« ceci est une frontière romantique »). La montrer.
