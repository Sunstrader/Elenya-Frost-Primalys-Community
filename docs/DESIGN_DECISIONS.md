# Décisions de design

Statut : adoptées pour le travail Grok. Source : brief projet du 2026-10-05, recoupé avec `server.js`, `package.json` et README quand c’est indiqué. Une décision non recoupée reste une règle d’écriture, pas une preuve que le code l’implémente déjà partout.

## DD-001 — La romance ne repose pas sur la jauge seule

`lien_O` / `lien_E` mesurent le lien. `interet_romantique_O` / `interet_romantique_E` disent l’intérêt. L’un peut exister sans l’autre.

## DD-002 — Un refus n’est pas une rupture

« Restons amis » ou une limite mémorise que la limite romantique actuelle est entendue. Pas de chute brutale de jauge, pas d’instabilité artificielle, pas de verrou définitif par défaut. Les réactions post-refus doivent reconnaître la limite, pas la relire comme une invitation.

## DD-003 — Une défaite n’annule pas une romance

`joute_perdue_O` (et l’équivalent Éclaireur) change le contexte, pas la disponibilité romantique, tant que le personnage est présent et que la relation existe. La Marche Blanche suit cette règle.

## DD-004 — Le triangle exige la présence réelle

`presence_O` + `presence_E` + ouverture romantique des deux. Une vieille soirée ou deux jauges hautes ne suffisent pas. Le triangle ne se réduit pas à jalousie / dispute. Elenya choisit sa place : elle n’est pas le prix d’un duel (Lisière à trois).

## DD-005 — Domination et joute froide écrasent l’écho tendre

Un beat doux récent ne force pas la tendresse si une joute froide ou une perte de confiance est le fait narratif actuel. `_romance_beat_recent` est une mémoire courte, pas la preuve qu’une romance est active.

## DD-006 — Pas de sprite collé sur une cinématique complète

Plans illustrés, personnages intégrés, lumière, profondeur. `sprite` par-dessus une illustration déjà complète : interdit, sauf style de scène qui le justifie. Desktop et mobile (`image` / `imageMobile`) se corrigent ensemble.

## DD-007 — NG+ et sauvegardes sont dans le contrat

Neuf fins classiques requises, mémoire `elenya_globals`, sauvegarde locale. Une modif qui ne vise que le classique doit quand même dire si le cycle suivant est touché.

## DD-008 — Terminé = QA

`npm test && npm run lint && npm run build`. Choix distincts (intention, réaction, conséquence, feedback ; image si la scène en a une). Pas de flag supprimé sans lecture des dépendances.

## DD-009 — Arbre vivant unique

Éditer `elenya-refonte-52.4/project`. La racine `project/` n’est pas la source chargée par `server.js`. Ne pas renommer `elenya-refonte-52.4`.

## DD-010 — Fen n’est pas une pénalité

Dormir avec Fen ne ferme pas Kaelen ni Alistair.

## DD-011 — Narrateur au-dessus des SFX

Voix compréhensible. SFX atténués ou muets pendant un relais narratif vocal.

## DD-012 — Le code exécuté est la source de vérité

Docs, skills, bible et décisions DD-001 à DD-011 sont un cadre. Ils ne prouvent pas qu’une mécanique est implémentée. Avant de modifier : lire `elenya-refonte-52.4/project` (définition, appels, conditions, effets) et le test dans `elenya-refonte-52.4/qa/`.

Contradiction pack / code : la signaler, dire ce qui s’exécute, proposer le correctif minimal. Pas de choix silencieux. Pas de refonte pour un problème local.

Avant un patch important : existant, problème, changement, impacts, vérification. Puis QA complète.
