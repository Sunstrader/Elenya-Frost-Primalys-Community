---
name: elenya-qa
description: "QA Elenya Primaëlys : npm test, lint, build, romance, choix distincts, Image Reviewer. Utiliser avant de déclarer un correctif terminé, ou quand un test narratif échoue."
type: workflow
lifecycle: active
---

# QA

Lire `docs/QA_RULES.md`.

Terminé seulement après :

```bash
npm test
npm run lint
npm run build
```

La chaîne est `elenya-refonte-52.4/qa/`, pas `qa/` à la racine. Ne pas modifier `engine.cjs` pour faire passer un test : c’est le runtime isolé.

Narratif : choix distincts, refus qui entend la limite, pas de méta, solo cohérent. Skill ton : `elenya-frost-narrative-qa`.
