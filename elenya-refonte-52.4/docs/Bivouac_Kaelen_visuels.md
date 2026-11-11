# Bivouac Kaelen — choix et visuels

Révision du 1er octobre 2026. Source jeu : commit c52f7dd.

Les trois anciennes clés O1/O2/O3 et leurs flags restent lisibles. O_REPOS ajoute un repos neutre sans distance ni tension. O3 exprime explicitement le souhait de se rapprocher et pose interet_romantique_O au moment du choix ; charger un ancien état ne pose pas ce flag.

| Choix | Intention et suite | Visuel |
| --- | --- | --- |
| O1 | Taquiner, sourire et conserver un peu d’espace | Deux personnes assises séparément, sourires partagés, Fen sur les genoux |
| O2 | Apprendre à le connaître sans se rapprocher | Kaelen tend sa gourde, Elenya la reçoit |
| O3 | Choisir une proximité amoureuse | Illustration existante : Elenya contre l’épaule de Kaelen |
| O_REPOS | Se reposer sans ouverture ni sanction | Décor existant de l’alcôve sans feu |

## Génération et fichiers

Génération avec l’outil natif image_gen ; contrôle visuel des quatre sorties, puis encodage WebP sans recadrage. Référence de visage, costume, style et décor : game-v58/cinematics/lot-01/cendres-froides-alcove-kaelen-pc.webp (assets, commit 1fdeb011).

Fichiers dans Sunstrader/elenya-3d-assets, commit 6533535d :

- game-v58/cinematics/bivouac-choix/bivouac-kaelen-taquiner-pc.webp
- game-v58/cinematics/bivouac-choix/bivouac-kaelen-taquiner-mobile.webp
- game-v58/cinematics/bivouac-choix/bivouac-kaelen-connaitre-pc.webp
- game-v58/cinematics/bivouac-choix/bivouac-kaelen-connaitre-mobile.webp

Consignes de génération : mêmes deux personnages adultes, mêmes visages et tenues que la référence, Elenya aux cheveux argentés et Kaelen brun avec armure noire et manteau rouge sombre. Catacombes de basalte, cristaux bleus, sans feu ni lumière orange, rendu animé 2.5D. Pour la taquinerie : personnages assis droits avec un espace visible, sourires, aucun contact de couple, Fen auprès d’Elenya. Pour l’échange : petite gourde métallique offerte et reçue, curiosité calme, pas de bras autour du corps. PC : 1536 × 1024 ; mobile : 1024 × 1536, visages et geste lisibles, avant-plan plus calme. Aucun texte, interface ou filigrane.

## Vérifications

Choix traités par serverProcessChoice : clés, réaction, destination, quatre URLs effectives PC/mobile distinctes, jauges de repos neutres, ouverture amoureuse explicite seulement. Lecture des anciens flags sans ouverture ajoutée. Route Alistair préservée. Tests de romance existants, lint et build réussis. Navigateur non testé ; la suite globale de tests conserve ses anciennes assertions visuelles à remettre à jour.
