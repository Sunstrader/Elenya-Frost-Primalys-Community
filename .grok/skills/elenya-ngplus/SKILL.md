---
name: elenya-ngplus
description: "NG+ Elenya, Cycle Brisé, elenya_globals, neuf fins requises, sauvegardes locales. Utiliser dès qu’une fin, un achievement, un flag global ou une reprise de cycle change."
type: knowledge
lifecycle: active
---

# NG+

Lire `docs/NGPLUS.md`. Fichiers : `24_NGPlus_Ultra.js`, `25_NGPlus_Ultra_Visuals.js`, `DATABASE_NGPlus.js`, `95_NGPlus_Ultra_QA.js`.

Neuf achievements requis, vérifiés dans `server.js`. Mémoire injectée : `elenya_globals` (`achievements`, `globalFlags`). Sauvegardes locales au navigateur.

Dire explicitement si le correctif ne touche que le classique ou aussi le cycle suivant. Ne pas ajouter de save serveur.
