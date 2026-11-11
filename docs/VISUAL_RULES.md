# Règles visuelles

## Direction

Anime 2.5D, fantasy cinématique. Pas photoréaliste. Pas un couloir avec le personnage toujours centré. Pas un sprite posé sur une illustration déjà complète.

Composition : plan complet, personnages intégrés, lumière, profondeur, caméra. `background + sprite` seulement si le style de la scène le justifie.

## UI

Direction retenue : Cinema. Premium, sobres, choix lisibles, intégrés à l’image. Pas d’énormes boutons RPG. Variante préférée du brief : #3. Fichiers : `Cinematic_UI_Runtime.html`, `Cinematic_UI_Styles.html`. Ne pas réactiver JRPG comme défaut.

## PC et mobile

Toujours `image` et `imageMobile`. Un correctif desktop qui casse le mobile est un échec.

## Reviewer existant

Ne pas en créer un autre.

- `/review-images`
- `/?review=images` (alias : `image`, `visuals`, `visuels`, `visual`)
- fichier : `elenya-refonte-52.4/project/ImageReviewer.html`
- test : `elenya-refonte-52.4/qa/image-reviewer.cjs`

Avant de remplacer une image : qui la référence, quelles routes, desktop et mobile, scène précédente et suivante, assets sous `elenya-refonte-52.4/assets`.
