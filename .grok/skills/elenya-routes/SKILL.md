---
name: elenya-routes
description: "Routes et fins Elenya : Ombre, Éclaireur, Solo, Instabilité, Poly, neuf achievements NG+. Utiliser pour une branche, une fin, un choix mort, ou un flag de route."
type: workflow
lifecycle: active
---

# Routes

Lire `docs/ROUTES.md` et `docs/SCENE_GRAPH.md`. Fins : `DATABASE_Endings.js`. Ne pas contredire le fichier pour coller à une matrice.

Produire, même court :

```text
choix → flag → jauge → next → route → fin → achievement → NG+
```

Routes : Ombre, Éclaireur, Solo, Instabilité, Poly. Neuf achievements listés dans `server.js` déverrouillent le NG+. Solo ne nie pas la présence physique sans chute ou écart explicite.

Ne pas relier une branche morte à la fin heureuse la plus proche.
