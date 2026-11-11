# Règles romance

Lire avec `DATABASE_Relations.js` (arbre vivant) et `elenya-refonte-52.4/qa/romance.cjs`.

## Chaîne obligatoire

interaction → réaction → mémoire (flag) → comportement plus tard → nouvelle possibilité → payoff.

Un choix romantique change la façon dont les scènes suivantes sont écrites. Mémoire organique : geste, distance, hésitation, ton. Pas « Tu te souviens quand tu m’as pris la main ? » à chaque scène.

## Quatre couches

| Couche | Exemples | Ne veut pas dire |
|---|---|---|
| Lien | `lien_O`, `lien_E` | romance ouverte |
| Présence | `presence_O`, `presence_E` | le personnage existe dans l’histoire |
| Intérêt | `interet_romantique_O`, `interet_romantique_E` | relation officielle |
| Événement | `lisiere_romance_O_ouverte`, `lisiere_romance_O_vu` | interrupteur jetable |

Compagnons « dans la route » : `avec_ombre`, `avec_eclaireur`. Pour un choix qui exige qu’il soit là : `companionPresentO(gs)` / `companionPresentE(gs)`, pas seulement le flag de route.

## Refus et défaite

- Refus / limite : mémoriser le rejet ou la limite. Ne pas détruire la relation.
- Défaite : contexte, pas `romance = false`.
- « Restons amis » : la limite actuelle est entendue. La proximité peut continuer.

## Triangle

Ouvert seulement si les deux sont physiquement là et romantiquement ouverts. Peut être tendre, silencieux, gênant, drôle, compétitif, respectueux, douloureux, limité. Pas le script jaloux par défaut.

Joute froide ou domination récente : elles passent devant l’écho doux.

## Ancre Lisière

`LIEN_LISIERE_KAELEN`, choix du type « Réduire encore la distance » / « Alors tais-toi une seconde » : `lien_O +2`, `presence_O +1`, `interet_romantique_O`, `lisiere_romance_O_ouverte`, `lisiere_romance_O_vu`.

Alistair : mêmes effets sur `lien_E` / `presence_E` / `interet_romantique_E` / flags `lisiere_romance_E_*`, narration qui n’est pas celle de Kaelen.

À trois (`LIEN_LISIERE_DEUX`) : Elenya choisit sa place.

## Échos

`ACTE2_08B_MICRO_REACTION` et le principe micro-réaction : phrase, regard, geste, distance, quelques scènes plus tard. Auberge : `ACTE2_06_NUIT_AUBERGE`, `ACTE2_06B_LENDEMAIN_CONFIDENCE`, `ACTE2_08_MATIN_AUBERGE` — la relation avance aussi hors des scènes nommées romance.

`_romance_beat_recent` : trace courte. Jamais preuve suffisante qu’une romance est active.

## Procédure

Toute modif romance : 3 scènes avant, 3 après, flags lus et écrits, présence, triangle possible, fin concernée, NG+. Puis `romance.cjs` et `choice-distinctness.cjs`.
