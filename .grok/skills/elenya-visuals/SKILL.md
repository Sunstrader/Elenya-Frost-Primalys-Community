---
name: elenya-visuals
description: "Direction visuelle Elenya : anime 2.5D cinématique, Cinema UI, image et imageMobile, Image Reviewer. Utiliser pour changer une image, un sprite, ou l’UI."
type: workflow
lifecycle: active
---

# Visuels

Lire `docs/VISUAL_RULES.md`.

1. Ne pas coller un sprite sur une illustration déjà complète.
2. Corriger `image` et `imageMobile` ensemble.
3. Vérifier quelles routes partagent le fichier avant remplacement.
4. Passer par l’Image Reviewer existant : `/review-images` ou `/?review=images`. Fichier : `elenya-refonte-52.4/project/ImageReviewer.html`.
5. UI par défaut : Cinema, pas JRPG, pas gros boutons.
6. Lancer `image-reviewer.cjs` si les références d’images changent.
