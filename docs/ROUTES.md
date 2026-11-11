# Routes et fins

## Routes de jeu

- Ombre — Kaelen
- Éclaireur — Alistair
- Instabilité — Elenya, givre, surcharge
- Solo — indépendance émotionnelle, pas disparition magique des compagnons
- Poly — triangle réel (présence + ouverture), pas somme de jauges

## Fins classiques (achievements NG+)

Vérifié dans `server.js` (`serverGetMainMenu`, `serverStartNewGamePlus`) :

- `ach_fin_ombre` — FIN_OMBRE
- `ach_fin_eclaireur` — FIN_ECLAIREUR
- `ach_fin_poly` — FIN_POLY
- `ach_fin_solo` — FIN_SOLO
- `ach_fin_reconciliation` — FIN_RECONCILIATION
- `ach_fin_hiver` — FIN_HIVER
- `ach_fin_sacrifice` — FIN_SACRIFICE
- `ach_fin_mortelle` — FIN_MORTELLE
- `ach_fin_brisee` — FIN_BRISEE

Les neuf sont requis. Le menu expose `classicEnds` / `classicEndsRequired`.

Matrice d’écriture déjà posée par `elenya-frost-characters` : un gagnant heureux max parmi Kaelen / Alistair (sauf Témoin / Poly amers) ; toute fin couple coûte à l’autre ; Scellée ≠ Éclaireur ; Témoin = sortie élégante à trois si les conditions de cette fin sont là. Ne pas contredire `DATABASE_Endings.js` pour coller à la matrice : lire la fin, puis la matrice.

## Matrice minimale avant de toucher une branche

choix → flag → jauge → next → route → fin possible → achievement → NG+.

Chercher choix morts, branches impossibles, branches trop faciles, flags jamais lus. Outil d’audit : `.grok/agents/route-auditor.md`. Ne pas « réparer » une branche morte en la reliant au bonheur le plus proche.
