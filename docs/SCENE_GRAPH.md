# Graphe de scènes — méthode

Ne pas traiter les DATABASE comme une liste. Une scène est un nœud.

```text
SCÈNE
  condition
  choix (intention distincte)
    effects (flag, jauge, route, item)
    next
  getDynamicNarrative (lit flags / jauges)
  scènes qui la citent
```

Fichiers : `DATABASE_Acte1.js` … `DATABASE_Acte5.js`, `DATABASE_Relations.js`, `DATABASE_Endings.js`, `DATABASE_NGPlus.js`, `DATABASE_Fragments.js`, `DATABASE_Secondary.js`, `DATABASE_Index.js`, triggers dans `10_Triggers.js`.

## Ancres à ne pas casser

| Id | Rôle |
|---|---|
| `LIEN_LISIERE_KAELEN` | intimité Kaelen, flags romance O |
| `LIEN_LISIERE_ALISTAIR` | intimité Alistair, flags romance E |
| `LIEN_LISIERE_DEUX` | triangle, Elenya choisit sa place |
| `ACTE2_06_NUIT_AUBERGE` | proximité hors scène « romance » |
| `ACTE2_06B_LENDEMAIN_CONFIDENCE` | lendemain, confiance |
| `ACTE2_08_MATIN_AUBERGE` | matin, suite |
| `ACTE2_08B_MICRO_REACTION` | écho court d’un choix |
| `LIEN_MARCHE_BLANCHE` / `_B` | proximité, chute = contexte |
| `LIEN_MARCHE_2` / `_B` | réparation, présence, instabilité |
| `NGP_01_SEUIL` | seuil NG+ |

## Choix creux

Suspect : plusieurs choix, même `next`, pas de flag distinct, scène suivante identique. La QA `choice-distinctness.cjs` le contrôle. Chaque choix : intention, réaction, conséquence, feedback. Image cohérente si la scène est illustrée.

## Dynamique

Préserver `getDynamicNarrative(gs)` (`hasFlag`, `getGauge`). Ne pas dupliquer la scène en trois fichiers statiques pour trois flags.

## Inventaire

Ajouter une scène ne doit pas dupliquer un id ni casser le catalogue (`serverGetQASceneCatalog`, `DATABASE_Index.js`, tests). Deux totaux circulent (246 jouables côté voix, 221+80 cité par le brief) : lire l’assert avant de « corriger » un compte.
