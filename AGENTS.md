# ELENYA — comment travailler sur ce dépôt

Produit : **ELENYA — L’Héritage de Primaëlys**. Slug : `Primaelys`. Version lue dans `package.json` / README : **52.5.4**.

Ce n’est pas un visual novel à variables cachées. C’est un RPG narratif fantasy cinématique à choix : exploration légère, conséquences persistantes, relations, routes, fins, NG+ et mémoire inter-cycle. Le joueur doit sentir que ses choix ont changé les relations et le monde.

Anciens noms, ne pas les remettre en titre produit : *Elenya : Corona Glacialis*, *Elenya — L’Héritage de Primalys*.

## Arbre vivant — ne pas se tromper de copie

`server.js` charge le moteur ici :

- code : `elenya-refonte-52.4/project`
- assets : `elenya-refonte-52.4/assets`
- docs servies sur `/docs/` : `elenya-refonte-52.4/docs`

Le dossier `project/` à la racine est une copie partielle, aux SHA différents. Ne pas l’éditer comme source de vérité. Le nom `elenya-refonte-52.4` est historique : ne pas le renommer.

Dépôt : `Sunstrader/Elenya-Frost-Primalys`. Assets 3D cités : `Sunstrader/elenya-3d-assets`.

## Règle absolue — le code exécuté tranche

Le code réel est la source de vérité finale. Les docs, skills, bible et règles de ce pack sont un cadre de travail. Ils ne prouvent pas qu’une mécanique existe.

Avant de modifier une logique, lire son implémentation dans `elenya-refonte-52.4/project` : définition, appels, conditions, effets, et le test qui la couvre dans `elenya-refonte-52.4/qa/`. Ne pas déduire le comportement d’un flag, d’une jauge ou d’une scène depuis `docs/` seul.

Si une règle du pack contredit le code, ne pas choisir en silence. Signaler la contradiction, dire ce qui est réellement exécuté, puis proposer le correctif minimal. Ne pas « aligner le code sur la bible » ni « aligner la bible sur une supposition ».

Ne jamais faire une grosse refonte pour un problème local.

Pour toute modification importante, écrire avant de patcher :

1. ce qui existe actuellement (fichier, fonction, condition) ;
2. ce qui pose problème ;
3. ce qui sera changé ;
4. scènes, routes et systèmes potentiellement impactés ;
5. comment vérifier que rien d’autre n’est cassé.

Puis modifier uniquement ce qui est nécessaire et lancer la QA complète (`npm test`, `npm run lint`, `npm run build`).

## Préserver l’existant

Ne pas réécrire le système « proprement ». Correctif local, compatible, non destructif.

Avant une modification importante :

1. Lire le code concerné dans `elenya-refonte-52.4/project`.
2. Identifier scènes, flags, jauges, routes, conséquences.
3. Lire la scène précédente et la suivante.
4. Vérifier présence réelle (`presence_O` / `presence_E`), pas seulement `avec_ombre` / `avec_eclaireur`.
5. Vérifier NG+ (`24_NGPlus_Ultra.js`, `DATABASE_NGPlus.js`) et le Cycle Brisé.
6. Ne pas casser sauvegardes, achievements, `elenya_globals`, reprise de scène.
7. Lancer la QA. Une modif locale qui casse une autre route est un échec.

## Où lire

| Sujet | Fichier |
|---|---|
| Bible | `docs/ELENYA_BIBLE.md` |
| Romance | `docs/ROMANCE_RULES.md` |
| Flags | `docs/FLAGS.md` |
| Graphe | `docs/SCENE_GRAPH.md` |
| Routes / fins | `docs/ROUTES.md` |
| NG+ | `docs/NGPLUS.md` |
| Visuel | `docs/VISUAL_RULES.md` |
| Audio | `docs/AUDIO_RULES.md` |
| QA | `docs/QA_RULES.md` |
| Décisions | `docs/DESIGN_DECISIONS.md` |

Skills : `.grok/skills/elenya-*`. Auditeurs (ne modifient rien) : `.grok/agents/`.

Skills déjà présents et encore valables pour la voix et le ton : `elenya-frost-characters`, `elenya-frost-narrative-qa`, `character-agency`, `pacing-mastery`, `twist-architecture`, `aaa-narrative-standards`, `agent-verify`. `elenya-frost-engine` décrit l’ancien flux Apps Script V26 : ne pas le laisser primer sur le chemin Node.

## Contrats à ne pas casser

Liste tenue par la QA, pas une preuve que chaque effet est branché partout. Vérifier l’appel dans l’arbre vivant avant de s’en servir.

Effets supportés par la QA : `ADD_GAUGE`, `SET_GAUGE`, `ADD_TIMER`, `SET_TIMER`, `SET_FLAG`, `REMOVE_FLAG`, `SET_GLOBAL_FLAG`, `UNLOCK_ACHIEVEMENT`, `PUSH_RETURN`, `ADD_ITEM`, `REMOVE_ITEM`, `ADD_REP`, `SET_ROUTE`, `JOIN_COMPANION`, `SWITCH_COMPANION`, `LEAVE_COMPANION`.

Une scène peut avoir `image`, `imageMobile`, `sprite`, `spriteLeft`, `spriteRight`, `stage`, `getDynamicNarrative`, `choices`, `condition`, `effects`, `next`. Ne pas éclater une `getDynamicNarrative` en scènes statiques sans raison.

## Quand on dit « améliore cette scène »

Ne pas ouvrir le fichier et réécrire. Enchaîner : scène → précédente → choix entrant → flags → jauges → présents → relation → choix → effets → suivante → payoff → NG+ → image desktop/mobile → QA.

## Quand on dit « améliore la romance »

Lire `DATABASE_Relations.js` dans l’arbre vivant. Chercher flags, jauges, présence, réactions, micro-réactions, routes, fins, NG+. Analyser au moins 3 scènes avant et 3 après. Ne jamais « améliorer » en empilant `ADD_GAUGE lien_O`.

Romance = interaction → réaction → mémoire → comportement ultérieur → nouvelle possibilité → payoff. Jauge haute ≠ romance ouverte. Refus ≠ rupture. Défaite ≠ fermeture romantique. Triangle = présence réelle des deux + ouverture romantique des deux. Elenya n’est pas le prix d’un duel.

## Quand on dit « ajoute une scène avec Kaelen » / « change cette image »

Vérifier présence, dernier beat, Alistair, triangle possible, événement d’avant, payoff d’après. Pour une image : desktop, mobile, routes qui la partagent, Image Reviewer, assets. Ne pas remplacer une image commune à l’aveugle.

## Visuel et audio

Direction : anime 2.5D / fantasy cinématique. UI retenue : Cinema, sobre, pas de gros boutons RPG. Pas de sprite 2D collé sur une illustration déjà complète. `image` et `imageMobile` tous les deux. Narrateur > SFX ; SFX atténués quand le relais vocal est actif. Segment manquant : fallback TTS français du navigateur. Pas de clé API dans le jeu.

## QA — définition de terminé

```bash
npm test
npm run lint
npm run build
```

`npm test` lance, dans l’ordre, `elenya-refonte-52.4/qa/` : `bivouac-kaelen.cjs`, `romance.cjs`, `check.cjs`, `client-state.cjs`, `refonte-fixes.cjs`, `first-run.cjs`, `choice-distinctness.cjs`, `ux-polish.cjs`, `image-reviewer.cjs`.

Image Reviewer existant, ne pas en reconstruire un : `/review-images` et `/?review=images` (aussi `image`, `visuals`, `visuels`, `visual`).

## Interdits

Réinitialiser une relation. Romance par jauge seule. Refus traité comme rupture. Défaite traitée comme fermeture. Triangle parce que deux jauges sont hautes. Kaelen qui parle comme Alistair, ou l’inverse. Fen comme pénalité romantique. Sprite artificiel sur une cinématique. Réécriture du moteur pour un correctif. Suppression d’un flag « inutile » sans dépendances. Déclarer fini sans tests.
