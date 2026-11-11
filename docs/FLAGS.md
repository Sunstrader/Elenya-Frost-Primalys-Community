# Registre des flags

Pas un dump exhaustif. Fiches des flags de contrat. Avant d’en ajouter ou d’en supprimer : grep dans `elenya-refonte-52.4/project` (écritures et lectures). Un flag sans lecteur est une dette ; un flag « inutile » en a souvent un dans un trigger ou une fin.

Colonnes à tenir à jour quand on en crée un : nom, sens narratif, créé par, lu par, modifié par, persistant run, global / NG+.

## Route et présence

| Flag / jauge | Sens | Piège |
|---|---|---|
| `avec_ombre` | Kaelen dans la route Ombre | ≠ présent dans la scène |
| `avec_eclaireur` | Alistair dans la route Éclaireur | ≠ présent dans la scène |
| `presence_O` | présence réelle Kaelen | préférer `companionPresentO(gs)` si le choix l’exige |
| `presence_E` | présence réelle Alistair | idem `companionPresentE(gs)` |
| `lien_O` / `lien_E` | lien, pas romance | haut sans `interet_romantique_*` est valide |
| `voie_solo` | indépendance émotionnelle | les compagnons peuvent rester physiquement là |

## Romance

| Flag | Sens | Piège |
|---|---|---|
| `interet_romantique_O` | intérêt réel envers Kaelen | pas relation officielle ; une défaite ne le retire pas |
| `interet_romantique_E` | intérêt réel envers Alistair | idem |
| `lisiere_romance_O_ouverte` / `_vu` | ouverture / vue Lisière Kaelen | événement mémorisé |
| `lisiere_romance_E_ouverte` / `_vu` | idem Alistair | narration spécifique |
| `lisiere_tendresse_O` / `_E` | tendresse, pas forcément romance assumée | |
| `lisiere_trio_vu` / `_ouvert` / `_tendresse` / `_limite` | triangle Lisière | exige présence + ouverture |
| `_romance_beat_recent` | beat récent réutilisable | pas l’état global |

Refus : mémoriser limite / rejet sous le flag déjà utilisé par la scène, pas un reset de route. Lire `romance.cjs` avant d’inventer un nouveau nom.

## Autres

| Flag | Sens | Piège |
|---|---|---|
| `joute_perdue_O` | défaite, contexte | ne ferme pas la romance |
| `nuit_fen_repos` | repos avec Fen | pas une pénalité Kaelen/Alistair |
| `instabilite` | jauge Elenya | peut colorer `getDynamicNarrative` |
| préfixe `_` | one-shot souvent | ne pas recycler comme état de relation |

Globaux NG+ : `globalFlags` dans `elenya_globals`, avec `achievements`. `SET_GLOBAL_FLAG` survit au cycle ; `SET_FLAG` non, sauf logique explicite de `24_NGPlus_Ultra.js`.
