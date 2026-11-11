/**
 * ELENYA — IMAGE REVIEWER V1
 * Interface séparée du Reviewer V4, dédiée au tri des illustrations.
 * Le choix d'une image n'altère jamais le code du jeu : il est enregistré dans
 * l'onglet ImageReviews pour application manuelle/contrôlée après validation.
 */
const ELENYA_IMAGE_REVIEWER = Object.freeze({
  APP_VERSION: '1.0.0',
  SHEET: 'ImageReviews',
  HEADERS: [
    'KEY','DATASET','BUILD_VERSION','SCENE_ID','SCENE_TITLE','ACT',
    'ACTION','CURRENT_IMAGE','SELECTED_IMAGE','SELECTED_ASSET_PATH',
    'COMMENT','UPDATED_AT','TARGET_KEY','TARGET_LABEL'
  ]
});

const ELENYA_IMAGE_REVIEWER_ASSETS = Object.freeze([
  {
    "id": "9f43849cc111",
    "path": "game-v53/backgrounds/auberge.webp",
    "name": "auberge.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/backgrounds/auberge.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/backgrounds/auberge.webp"
  },
  {
    "id": "da452b8c16c5",
    "path": "game-v53/backgrounds/bibliotheque.webp",
    "name": "bibliotheque.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/backgrounds/bibliotheque.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/backgrounds/bibliotheque.webp"
  },
  {
    "id": "9aabf92212a9",
    "path": "game-v53/backgrounds/campement-nuit.webp",
    "name": "campement-nuit.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/backgrounds/campement-nuit.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/backgrounds/campement-nuit.webp"
  },
  {
    "id": "207df88c7a66",
    "path": "game-v53/backgrounds/caravane-silas.webp",
    "name": "caravane-silas.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/backgrounds/caravane-silas.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/backgrounds/caravane-silas.webp"
  },
  {
    "id": "b9af1c1a5af3",
    "path": "game-v53/backgrounds/catacombes.webp",
    "name": "catacombes.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/backgrounds/catacombes.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/backgrounds/catacombes.webp"
  },
  {
    "id": "e5de2d703024",
    "path": "game-v53/backgrounds/dome-magique.webp",
    "name": "dome-magique.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/backgrounds/dome-magique.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/backgrounds/dome-magique.webp"
  },
  {
    "id": "c4066314f8b7",
    "path": "game-v53/backgrounds/foret-noire.webp",
    "name": "foret-noire.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/backgrounds/foret-noire.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/backgrounds/foret-noire.webp"
  },
  {
    "id": "67289b533344",
    "path": "game-v53/backgrounds/forge-sacree.webp",
    "name": "forge-sacree.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/backgrounds/forge-sacree.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/backgrounds/forge-sacree.webp"
  },
  {
    "id": "52aa048b3d67",
    "path": "game-v53/backgrounds/lac-glaciaire.webp",
    "name": "lac-glaciaire.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/backgrounds/lac-glaciaire.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/backgrounds/lac-glaciaire.webp"
  },
  {
    "id": "64af67bbb583",
    "path": "game-v53/backgrounds/observatoire.webp",
    "name": "observatoire.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/backgrounds/observatoire.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/backgrounds/observatoire.webp"
  },
  {
    "id": "61617e628c21",
    "path": "game-v53/backgrounds/royaume-souvenirs.webp",
    "name": "royaume-souvenirs.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/backgrounds/royaume-souvenirs.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/backgrounds/royaume-souvenirs.webp"
  },
  {
    "id": "6ee34f7b54ef",
    "path": "game-v53/backgrounds/serre.webp",
    "name": "serre.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/backgrounds/serre.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/backgrounds/serre.webp"
  },
  {
    "id": "5bf4244d5d0a",
    "path": "game-v53/backgrounds/trone-ebene.webp",
    "name": "trone-ebene.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/backgrounds/trone-ebene.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/backgrounds/trone-ebene.webp"
  },
  {
    "id": "da3b89f75461",
    "path": "game-v53/backgrounds/village.webp",
    "name": "village.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/backgrounds/village.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/backgrounds/village.webp"
  },
  {
    "id": "91d3a170982c",
    "path": "game-v53/interactions/elenya-alistair-poses.png",
    "name": "elenya-alistair-poses.png",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/interactions/elenya-alistair-poses.png",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/interactions/elenya-alistair-poses.png"
  },
  {
    "id": "f68f502a9ca4",
    "path": "game-v53/interactions/elenya-alistair-poses.webp",
    "name": "elenya-alistair-poses.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/interactions/elenya-alistair-poses.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/interactions/elenya-alistair-poses.webp"
  },
  {
    "id": "4e408be3404f",
    "path": "game-v53/interactions/elenya-fen-poses.png",
    "name": "elenya-fen-poses.png",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/interactions/elenya-fen-poses.png",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/interactions/elenya-fen-poses.png"
  },
  {
    "id": "ec9f7aaf8800",
    "path": "game-v53/interactions/elenya-fen-poses.webp",
    "name": "elenya-fen-poses.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/interactions/elenya-fen-poses.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/interactions/elenya-fen-poses.webp"
  },
  {
    "id": "0d775cec0561",
    "path": "game-v53/interactions/elenya-kaelen-poses.png",
    "name": "elenya-kaelen-poses.png",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/interactions/elenya-kaelen-poses.png",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/interactions/elenya-kaelen-poses.png"
  },
  {
    "id": "489a3e2a0028",
    "path": "game-v53/interactions/elenya-kaelen-poses.webp",
    "name": "elenya-kaelen-poses.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/interactions/elenya-kaelen-poses.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/interactions/elenya-kaelen-poses.webp"
  },
  {
    "id": "02f8e46b5118",
    "path": "game-v53/sprites/alistair.png",
    "name": "alistair.png",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/sprites/alistair.png",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/sprites/alistair.png"
  },
  {
    "id": "9eebcbac2a44",
    "path": "game-v53/sprites/alistair.webp",
    "name": "alistair.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/sprites/alistair.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/sprites/alistair.webp"
  },
  {
    "id": "012e8541fb1c",
    "path": "game-v53/sprites/aubergiste.png",
    "name": "aubergiste.png",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/sprites/aubergiste.png",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/sprites/aubergiste.png"
  },
  {
    "id": "6d361376d493",
    "path": "game-v53/sprites/aubergiste.webp",
    "name": "aubergiste.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/sprites/aubergiste.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/sprites/aubergiste.webp"
  },
  {
    "id": "806fb083d9b3",
    "path": "game-v53/sprites/elenya.png",
    "name": "elenya.png",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/sprites/elenya.png",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/sprites/elenya.png"
  },
  {
    "id": "a22931ce25c2",
    "path": "game-v53/sprites/elenya.webp",
    "name": "elenya.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/sprites/elenya.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/sprites/elenya.webp"
  },
  {
    "id": "90b3354ac3f6",
    "path": "game-v53/sprites/fen.png",
    "name": "fen.png",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/sprites/fen.png",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/sprites/fen.png"
  },
  {
    "id": "e35d05b659f4",
    "path": "game-v53/sprites/fen.webp",
    "name": "fen.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/sprites/fen.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/sprites/fen.webp"
  },
  {
    "id": "c8b377dbd53e",
    "path": "game-v53/sprites/grande-pretresse.png",
    "name": "grande-pretresse.png",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/sprites/grande-pretresse.png",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/sprites/grande-pretresse.png"
  },
  {
    "id": "4037186e292c",
    "path": "game-v53/sprites/grande-pretresse.webp",
    "name": "grande-pretresse.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/sprites/grande-pretresse.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/sprites/grande-pretresse.webp"
  },
  {
    "id": "8a28cc691c07",
    "path": "game-v53/sprites/kaelen.png",
    "name": "kaelen.png",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/sprites/kaelen.png",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/sprites/kaelen.png"
  },
  {
    "id": "23275b8a9e34",
    "path": "game-v53/sprites/kaelen.webp",
    "name": "kaelen.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/sprites/kaelen.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/sprites/kaelen.webp"
  },
  {
    "id": "86c6e34450d2",
    "path": "game-v53/sprites/kalthar.png",
    "name": "kalthar.png",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/sprites/kalthar.png",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/sprites/kalthar.png"
  },
  {
    "id": "f437ff1dbde1",
    "path": "game-v53/sprites/kalthar.webp",
    "name": "kalthar.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/sprites/kalthar.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/sprites/kalthar.webp"
  },
  {
    "id": "6606115d0a57",
    "path": "game-v53/sprites/lyra.png",
    "name": "lyra.png",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/sprites/lyra.png",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/sprites/lyra.png"
  },
  {
    "id": "84a506c8cdb6",
    "path": "game-v53/sprites/lyra.webp",
    "name": "lyra.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/sprites/lyra.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/sprites/lyra.webp"
  },
  {
    "id": "254d0f75c2e4",
    "path": "game-v53/sprites/silas.png",
    "name": "silas.png",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/sprites/silas.png",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/sprites/silas.png"
  },
  {
    "id": "cb95fa41ffa3",
    "path": "game-v53/sprites/silas.webp",
    "name": "silas.webp",
    "group": "game-v53",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v53/sprites/silas.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v53/sprites/silas.webp"
  },
  {
    "id": "2507b4cbfd3e",
    "path": "game-v54/animations/eveil-givre.gif",
    "name": "eveil-givre.gif",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/animations/eveil-givre.gif",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/animations/eveil-givre.gif"
  },
  {
    "id": "7909744908fa",
    "path": "game-v54/backgrounds/auberge.webp",
    "name": "auberge.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/auberge.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/auberge.webp"
  },
  {
    "id": "8811487d9dae",
    "path": "game-v54/backgrounds/autel-reveil.webp",
    "name": "autel-reveil.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/autel-reveil.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/autel-reveil.webp"
  },
  {
    "id": "ccff9be17f44",
    "path": "game-v54/backgrounds/bibliotheque.webp",
    "name": "bibliotheque.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/bibliotheque.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/bibliotheque.webp"
  },
  {
    "id": "8212c9ba6de4",
    "path": "game-v54/backgrounds/bivouac-souterrain.webp",
    "name": "bivouac-souterrain.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/bivouac-souterrain.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/bivouac-souterrain.webp"
  },
  {
    "id": "1f61b534d0d6",
    "path": "game-v54/backgrounds/campement-nuit.webp",
    "name": "campement-nuit.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/campement-nuit.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/campement-nuit.webp"
  },
  {
    "id": "ebdb5cdb00ea",
    "path": "game-v54/backgrounds/caravane-silas.webp",
    "name": "caravane-silas.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/caravane-silas.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/caravane-silas.webp"
  },
  {
    "id": "ad4c2ca15190",
    "path": "game-v54/backgrounds/chambre-automate.webp",
    "name": "chambre-automate.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/chambre-automate.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/chambre-automate.webp"
  },
  {
    "id": "4e6cdfb00290",
    "path": "game-v54/backgrounds/cour-duel.webp",
    "name": "cour-duel.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/cour-duel.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/cour-duel.webp"
  },
  {
    "id": "5880835c407b",
    "path": "game-v54/backgrounds/dome-magique.webp",
    "name": "dome-magique.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/dome-magique.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/dome-magique.webp"
  },
  {
    "id": "134cafd82259",
    "path": "game-v54/backgrounds/fin-aube.webp",
    "name": "fin-aube.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/fin-aube.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/fin-aube.webp"
  },
  {
    "id": "f7af25fcce0d",
    "path": "game-v54/backgrounds/fin-chaos.webp",
    "name": "fin-chaos.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/fin-chaos.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/fin-chaos.webp"
  },
  {
    "id": "9f53c75e4510",
    "path": "game-v54/backgrounds/foret-noire.webp",
    "name": "foret-noire.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/foret-noire.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/foret-noire.webp"
  },
  {
    "id": "64b276e64729",
    "path": "game-v54/backgrounds/forge-sacree.webp",
    "name": "forge-sacree.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/forge-sacree.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/forge-sacree.webp"
  },
  {
    "id": "70a0b4164cad",
    "path": "game-v54/backgrounds/galeries-basalte.webp",
    "name": "galeries-basalte.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/galeries-basalte.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/galeries-basalte.webp"
  },
  {
    "id": "d7ac5bc5a6f7",
    "path": "game-v54/backgrounds/lac-glaciaire.webp",
    "name": "lac-glaciaire.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/lac-glaciaire.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/lac-glaciaire.webp"
  },
  {
    "id": "470028fec803",
    "path": "game-v54/backgrounds/larmes-kalthar.webp",
    "name": "larmes-kalthar.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/larmes-kalthar.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/larmes-kalthar.webp"
  },
  {
    "id": "5513d2fbec4f",
    "path": "game-v54/backgrounds/mansarde-auberge.webp",
    "name": "mansarde-auberge.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/mansarde-auberge.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/mansarde-auberge.webp"
  },
  {
    "id": "4c74dbb2e67f",
    "path": "game-v54/backgrounds/observatoire.webp",
    "name": "observatoire.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/observatoire.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/observatoire.webp"
  },
  {
    "id": "8d0ee62dab30",
    "path": "game-v54/backgrounds/royaume-souvenirs.webp",
    "name": "royaume-souvenirs.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/royaume-souvenirs.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/royaume-souvenirs.webp"
  },
  {
    "id": "5a18635471c2",
    "path": "game-v54/backgrounds/serre.webp",
    "name": "serre.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/serre.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/serre.webp"
  },
  {
    "id": "020fffd18008",
    "path": "game-v54/backgrounds/trone-ebene.webp",
    "name": "trone-ebene.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/trone-ebene.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/trone-ebene.webp"
  },
  {
    "id": "bbe8c984667c",
    "path": "game-v54/backgrounds/village.webp",
    "name": "village.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/backgrounds/village.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/backgrounds/village.webp"
  },
  {
    "id": "7c6641251787",
    "path": "game-v54/sprites/fen.webp",
    "name": "fen.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/sprites/fen.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/sprites/fen.webp"
  },
  {
    "id": "66e5900112a4",
    "path": "game-v54/sprites/mira.webp",
    "name": "mira.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/sprites/mira.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/sprites/mira.webp"
  },
  {
    "id": "38a3a78611c4",
    "path": "game-v54/sprites/panthere-givre.webp",
    "name": "panthere-givre.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/sprites/panthere-givre.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/sprites/panthere-givre.webp"
  },
  {
    "id": "99f4658efe6b",
    "path": "game-v54/sprites/seraphine.webp",
    "name": "seraphine.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/sprites/seraphine.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/sprites/seraphine.webp"
  },
  {
    "id": "076a64ab29fd",
    "path": "game-v54/sprites/veyra.webp",
    "name": "veyra.webp",
    "group": "game-v54",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v54/sprites/veyra.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v54/sprites/veyra.webp"
  },
  {
    "id": "8c629cc4e038",
    "path": "game-v55/cg/fin-eclaireur-elenya-alistair.webp",
    "name": "fin-eclaireur-elenya-alistair.webp",
    "group": "game-v55",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v55/cg/fin-eclaireur-elenya-alistair.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v55/cg/fin-eclaireur-elenya-alistair.webp"
  },
  {
    "id": "0ecc36d64ced",
    "path": "game-v55/cg/fin-ombre-elenya-kaelen.webp",
    "name": "fin-ombre-elenya-kaelen.webp",
    "group": "game-v55",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v55/cg/fin-ombre-elenya-kaelen.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v55/cg/fin-ombre-elenya-kaelen.webp"
  },
  {
    "id": "839a923425d3",
    "path": "game-v55/cg/fin-poly-elenya-kaelen-alistair.webp",
    "name": "fin-poly-elenya-kaelen-alistair.webp",
    "group": "game-v55",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v55/cg/fin-poly-elenya-kaelen-alistair.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v55/cg/fin-poly-elenya-kaelen-alistair.webp"
  },
  {
    "id": "1871bdb75151",
    "path": "game-v56/backgrounds/awakening-frost-chamber.webp",
    "name": "awakening-frost-chamber.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/backgrounds/awakening-frost-chamber.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/backgrounds/awakening-frost-chamber.webp"
  },
  {
    "id": "f68b2002d3dd",
    "path": "game-v56/backgrounds/basalt-catacombs-transverse.webp",
    "name": "basalt-catacombs-transverse.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/backgrounds/basalt-catacombs-transverse.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/backgrounds/basalt-catacombs-transverse.webp"
  },
  {
    "id": "67333cbe0891",
    "path": "game-v56/backgrounds/basalt-ravine-oblique.webp",
    "name": "basalt-ravine-oblique.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/backgrounds/basalt-ravine-oblique.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/backgrounds/basalt-ravine-oblique.webp"
  },
  {
    "id": "ffa0ef76e159",
    "path": "game-v56/backgrounds/ebony-throne-lateral.webp",
    "name": "ebony-throne-lateral.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/backgrounds/ebony-throne-lateral.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/backgrounds/ebony-throne-lateral.webp"
  },
  {
    "id": "e48cfebb94ab",
    "path": "game-v56/backgrounds/rustic-inn-corner.webp",
    "name": "rustic-inn-corner.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/backgrounds/rustic-inn-corner.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/backgrounds/rustic-inn-corner.webp"
  },
  {
    "id": "11a191db9c21",
    "path": "game-v56/backgrounds/snow-forest-sideview.webp",
    "name": "snow-forest-sideview.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/backgrounds/snow-forest-sideview.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/backgrounds/snow-forest-sideview.webp"
  },
  {
    "id": "91c733b9eede",
    "path": "game-v56/backgrounds/winter-greenhouse-oblique.webp",
    "name": "winter-greenhouse-oblique.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/backgrounds/winter-greenhouse-oblique.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/backgrounds/winter-greenhouse-oblique.webp"
  },
  {
    "id": "5ad5f2790e0a",
    "path": "game-v56/backgrounds/winter-library-oblique.webp",
    "name": "winter-library-oblique.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/backgrounds/winter-library-oblique.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/backgrounds/winter-library-oblique.webp"
  },
  {
    "id": "9cce4da54569",
    "path": "game-v56/expressions/alistair/angry.webp",
    "name": "angry.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/expressions/alistair/angry.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/expressions/alistair/angry.webp"
  },
  {
    "id": "e0e5ff8fb649",
    "path": "game-v56/expressions/alistair/blink.webp",
    "name": "blink.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/expressions/alistair/blink.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/expressions/alistair/blink.webp"
  },
  {
    "id": "8f31460763ac",
    "path": "game-v56/expressions/alistair/hurt.webp",
    "name": "hurt.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/expressions/alistair/hurt.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/expressions/alistair/hurt.webp"
  },
  {
    "id": "98ec3a2a6f28",
    "path": "game-v56/expressions/alistair/serious.webp",
    "name": "serious.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/expressions/alistair/serious.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/expressions/alistair/serious.webp"
  },
  {
    "id": "664b7179d214",
    "path": "game-v56/expressions/alistair/surprised.webp",
    "name": "surprised.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/expressions/alistair/surprised.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/expressions/alistair/surprised.webp"
  },
  {
    "id": "5c7cde797686",
    "path": "game-v56/expressions/alistair/warm.webp",
    "name": "warm.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/expressions/alistair/warm.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/expressions/alistair/warm.webp"
  },
  {
    "id": "bcb991994911",
    "path": "game-v56/expressions/elenya/blink.webp",
    "name": "blink.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/expressions/elenya/blink.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/expressions/elenya/blink.webp"
  },
  {
    "id": "ff0d60c8d151",
    "path": "game-v56/expressions/elenya/determined.webp",
    "name": "determined.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/expressions/elenya/determined.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/expressions/elenya/determined.webp"
  },
  {
    "id": "905d3efdb88c",
    "path": "game-v56/expressions/elenya/soft.webp",
    "name": "soft.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/expressions/elenya/soft.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/expressions/elenya/soft.webp"
  },
  {
    "id": "0444e485d568",
    "path": "game-v56/expressions/elenya/worried.webp",
    "name": "worried.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/expressions/elenya/worried.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/expressions/elenya/worried.webp"
  },
  {
    "id": "34d1cb25fa86",
    "path": "game-v56/expressions/kaelen/angry.webp",
    "name": "angry.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/expressions/kaelen/angry.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/expressions/kaelen/angry.webp"
  },
  {
    "id": "dbaf75c07ef1",
    "path": "game-v56/expressions/kaelen/blink.webp",
    "name": "blink.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/expressions/kaelen/blink.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/expressions/kaelen/blink.webp"
  },
  {
    "id": "33dae7827b7e",
    "path": "game-v56/expressions/kaelen/cold.webp",
    "name": "cold.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/expressions/kaelen/cold.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/expressions/kaelen/cold.webp"
  },
  {
    "id": "2d68e384a2b1",
    "path": "game-v56/expressions/kaelen/hurt.webp",
    "name": "hurt.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/expressions/kaelen/hurt.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/expressions/kaelen/hurt.webp"
  },
  {
    "id": "7e3a419fcf3b",
    "path": "game-v56/expressions/kaelen/soft.webp",
    "name": "soft.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/expressions/kaelen/soft.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/expressions/kaelen/soft.webp"
  },
  {
    "id": "8c73322fdc8d",
    "path": "game-v56/expressions/kaelen/surprised.webp",
    "name": "surprised.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/expressions/kaelen/surprised.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/expressions/kaelen/surprised.webp"
  },
  {
    "id": "459fd2e66e5b",
    "path": "game-v56/modular/alistair/base.webp",
    "name": "base.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/modular/alistair/base.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/modular/alistair/base.webp"
  },
  {
    "id": "6791319e3409",
    "path": "game-v56/modular/alistair/head.webp",
    "name": "head.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/modular/alistair/head.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/modular/alistair/head.webp"
  },
  {
    "id": "d6a96503bf9a",
    "path": "game-v56/modular/alistair/left_arm.webp",
    "name": "left_arm.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/modular/alistair/left_arm.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/modular/alistair/left_arm.webp"
  },
  {
    "id": "d4d026ac0d3f",
    "path": "game-v56/modular/alistair/right_arm.webp",
    "name": "right_arm.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/modular/alistair/right_arm.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/modular/alistair/right_arm.webp"
  },
  {
    "id": "f65468df0d7e",
    "path": "game-v56/modular/elenya/base.webp",
    "name": "base.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/modular/elenya/base.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/modular/elenya/base.webp"
  },
  {
    "id": "6a651ae5b2a7",
    "path": "game-v56/modular/elenya/head.webp",
    "name": "head.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/modular/elenya/head.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/modular/elenya/head.webp"
  },
  {
    "id": "0c363c6ff705",
    "path": "game-v56/modular/elenya/left_arm.webp",
    "name": "left_arm.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/modular/elenya/left_arm.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/modular/elenya/left_arm.webp"
  },
  {
    "id": "af951cea1bdf",
    "path": "game-v56/modular/elenya/right_arm.webp",
    "name": "right_arm.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/modular/elenya/right_arm.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/modular/elenya/right_arm.webp"
  },
  {
    "id": "b7185f7fc7dc",
    "path": "game-v56/modular/kaelen/base.webp",
    "name": "base.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/modular/kaelen/base.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/modular/kaelen/base.webp"
  },
  {
    "id": "8bc51ce31ef9",
    "path": "game-v56/modular/kaelen/head.webp",
    "name": "head.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/modular/kaelen/head.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/modular/kaelen/head.webp"
  },
  {
    "id": "4c4dc9cb92f8",
    "path": "game-v56/modular/kaelen/left_arm.webp",
    "name": "left_arm.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/modular/kaelen/left_arm.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/modular/kaelen/left_arm.webp"
  },
  {
    "id": "63ed290b8d6c",
    "path": "game-v56/modular/kaelen/right_arm.webp",
    "name": "right_arm.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/modular/kaelen/right_arm.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/modular/kaelen/right_arm.webp"
  },
  {
    "id": "af8c92c904ec",
    "path": "game-v56/outfits/alistair/combat.webp",
    "name": "combat.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/outfits/alistair/combat.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/outfits/alistair/combat.webp"
  },
  {
    "id": "0e07970488f2",
    "path": "game-v56/outfits/alistair/injured.webp",
    "name": "injured.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/outfits/alistair/injured.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/outfits/alistair/injured.webp"
  },
  {
    "id": "05b6f43feca8",
    "path": "game-v56/outfits/elenya/combat.webp",
    "name": "combat.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/outfits/elenya/combat.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/outfits/elenya/combat.webp"
  },
  {
    "id": "b9a08dd633a2",
    "path": "game-v56/outfits/elenya/injured.webp",
    "name": "injured.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/outfits/elenya/injured.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/outfits/elenya/injured.webp"
  },
  {
    "id": "d22893760907",
    "path": "game-v56/outfits/kaelen/combat.webp",
    "name": "combat.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/outfits/kaelen/combat.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/outfits/kaelen/combat.webp"
  },
  {
    "id": "717c870cdc93",
    "path": "game-v56/outfits/kaelen/injured.webp",
    "name": "injured.webp",
    "group": "game-v56",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v56/outfits/kaelen/injured.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v56/outfits/kaelen/injured.webp"
  },
  {
    "id": "0a4fa262bd1f",
    "path": "game-v57/cinematics/lot-01/01-ouverture-ruines-glacees.webp",
    "name": "01-ouverture-ruines-glacees.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-01/01-ouverture-ruines-glacees.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-01/01-ouverture-ruines-glacees.webp"
  },
  {
    "id": "a64b0fdb36b5",
    "path": "game-v57/cinematics/lot-01/02-duel-des-ombres.webp",
    "name": "02-duel-des-ombres.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-01/02-duel-des-ombres.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-01/02-duel-des-ombres.webp"
  },
  {
    "id": "858e86a0779d",
    "path": "game-v57/cinematics/lot-01/03-echo-neige-dechainement-givre.webp",
    "name": "03-echo-neige-dechainement-givre.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-01/03-echo-neige-dechainement-givre.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-01/03-echo-neige-dechainement-givre.webp"
  },
  {
    "id": "10c4eaaf7411",
    "path": "game-v57/cinematics/lot-01/04-choix-route-ombre.webp",
    "name": "04-choix-route-ombre.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-01/04-choix-route-ombre.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-01/04-choix-route-ombre.webp"
  },
  {
    "id": "33f8e5caf901",
    "path": "game-v57/cinematics/lot-01/05-choix-route-eclaireur.webp",
    "name": "05-choix-route-eclaireur.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-01/05-choix-route-eclaireur.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-01/05-choix-route-eclaireur.webp"
  },
  {
    "id": "1ebea94a6f03",
    "path": "game-v57/cinematics/lot-01/06-choix-route-solo.webp",
    "name": "06-choix-route-solo.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-01/06-choix-route-solo.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-01/06-choix-route-solo.webp"
  },
  {
    "id": "1d2e01290e4e",
    "path": "game-v57/cinematics/lot-01/07-chaleur-des-profondeurs.webp",
    "name": "07-chaleur-des-profondeurs.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-01/07-chaleur-des-profondeurs.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-01/07-chaleur-des-profondeurs.webp"
  },
  {
    "id": "ab0ddbfd2ca4",
    "path": "game-v57/cinematics/lot-01/08-cendres-froides.webp",
    "name": "08-cendres-froides.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-01/08-cendres-froides.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-01/08-cendres-froides.webp"
  },
  {
    "id": "0b5383047db7",
    "path": "game-v57/cinematics/lot-01/09-a-bout-de-souffle-kaelen.webp",
    "name": "09-a-bout-de-souffle-kaelen.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-01/09-a-bout-de-souffle-kaelen.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-01/09-a-bout-de-souffle-kaelen.webp"
  },
  {
    "id": "97aebb01ade7",
    "path": "game-v57/cinematics/lot-01/10-ce-que-le-feu-ne-dit-pas.webp",
    "name": "10-ce-que-le-feu-ne-dit-pas.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-01/10-ce-que-le-feu-ne-dit-pas.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-01/10-ce-que-le-feu-ne-dit-pas.webp"
  },
  {
    "id": "2934839b7543",
    "path": "game-v57/cinematics/lot-02/11-jonction-des-routes.webp",
    "name": "11-jonction-des-routes.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-02/11-jonction-des-routes.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-02/11-jonction-des-routes.webp"
  },
  {
    "id": "56937f520bef",
    "path": "game-v57/cinematics/lot-02/12-triangulation-tension.webp",
    "name": "12-triangulation-tension.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-02/12-triangulation-tension.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-02/12-triangulation-tension.webp"
  },
  {
    "id": "db4e81bdc528",
    "path": "game-v57/cinematics/lot-02/13-echo-de-neige-fen.webp",
    "name": "13-echo-de-neige-fen.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-02/13-echo-de-neige-fen.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-02/13-echo-de-neige-fen.webp"
  },
  {
    "id": "7f875c7e66ec",
    "path": "game-v57/cinematics/lot-02/14-chambre-apparition.webp",
    "name": "14-chambre-apparition.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-02/14-chambre-apparition.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-02/14-chambre-apparition.webp"
  },
  {
    "id": "3f2965d504ea",
    "path": "game-v57/cinematics/lot-02/15-halte-groupe-neige.webp",
    "name": "15-halte-groupe-neige.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-02/15-halte-groupe-neige.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-02/15-halte-groupe-neige.webp"
  },
  {
    "id": "18b0417b0b46",
    "path": "game-v57/cinematics/lot-02/16-protection-kaelen.webp",
    "name": "16-protection-kaelen.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-02/16-protection-kaelen.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-02/16-protection-kaelen.webp"
  },
  {
    "id": "b7285a3efca0",
    "path": "game-v57/cinematics/lot-02/17-protection-alistair.webp",
    "name": "17-protection-alistair.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-02/17-protection-alistair.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-02/17-protection-alistair.webp"
  },
  {
    "id": "247f1e945417",
    "path": "game-v57/cinematics/lot-02/18-route-solo-avancee.webp",
    "name": "18-route-solo-avancee.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-02/18-route-solo-avancee.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-02/18-route-solo-avancee.webp"
  },
  {
    "id": "a608281c6c02",
    "path": "game-v57/cinematics/lot-02/19-memoires-de-glace-fresque.webp",
    "name": "19-memoires-de-glace-fresque.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-02/19-memoires-de-glace-fresque.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-02/19-memoires-de-glace-fresque.webp"
  },
  {
    "id": "339e87d58ede",
    "path": "game-v57/cinematics/lot-02/20-transition-acte-2.webp",
    "name": "20-transition-acte-2.webp",
    "group": "game-v57",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v57/cinematics/lot-02/20-transition-acte-2.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v57/cinematics/lot-02/20-transition-acte-2.webp"
  },
  {
    "id": "51b02f94eedf",
    "path": "game-v58/cinematics/duel-cendre-fin-mobile.webp",
    "name": "duel-cendre-fin-mobile.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/duel-cendre-fin-mobile.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/duel-cendre-fin-mobile.webp"
  },
  {
    "id": "76a85d11b6a0",
    "path": "game-v58/cinematics/duel-cendre-fin-pc.webp",
    "name": "duel-cendre-fin-pc.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/duel-cendre-fin-pc.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/duel-cendre-fin-pc.webp"
  },
  {
    "id": "01751400bce4",
    "path": "game-v58/cinematics/duel-orage-fin-mobile.webp",
    "name": "duel-orage-fin-mobile.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/duel-orage-fin-mobile.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/duel-orage-fin-mobile.webp"
  },
  {
    "id": "4518012d2312",
    "path": "game-v58/cinematics/duel-orage-fin-pc.webp",
    "name": "duel-orage-fin-pc.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/duel-orage-fin-pc.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/duel-orage-fin-pc.webp"
  },
  {
    "id": "ffa07ee62c30",
    "path": "game-v58/cinematics/keyframes/duel-cendre-end-mobile.webp",
    "name": "duel-cendre-end-mobile.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/keyframes/duel-cendre-end-mobile.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/keyframes/duel-cendre-end-mobile.webp"
  },
  {
    "id": "86604de5603b",
    "path": "game-v58/cinematics/keyframes/duel-cendre-end-pc.webp",
    "name": "duel-cendre-end-pc.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/keyframes/duel-cendre-end-pc.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/keyframes/duel-cendre-end-pc.webp"
  },
  {
    "id": "a37744dfec67",
    "path": "game-v58/cinematics/keyframes/duel-orage-end-mobile.webp",
    "name": "duel-orage-end-mobile.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/keyframes/duel-orage-end-mobile.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/keyframes/duel-orage-end-mobile.webp"
  },
  {
    "id": "83e942bbbe75",
    "path": "game-v58/cinematics/keyframes/duel-orage-end-pc.webp",
    "name": "duel-orage-end-pc.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/keyframes/duel-orage-end-pc.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/keyframes/duel-orage-end-pc.webp"
  },
  {
    "id": "844d678ba3af",
    "path": "game-v58/cinematics/lot-01/duel-cendre-mobile.webp",
    "name": "duel-cendre-mobile.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/lot-01/duel-cendre-mobile.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/lot-01/duel-cendre-mobile.webp"
  },
  {
    "id": "e0adaf24ab11",
    "path": "game-v58/cinematics/lot-01/duel-cendre-pc.webp",
    "name": "duel-cendre-pc.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/lot-01/duel-cendre-pc.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/lot-01/duel-cendre-pc.webp"
  },
  {
    "id": "a5e79c617ec7",
    "path": "game-v58/cinematics/lot-01/duel-orage-mobile.webp",
    "name": "duel-orage-mobile.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/lot-01/duel-orage-mobile.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/lot-01/duel-orage-mobile.webp"
  },
  {
    "id": "11b77e2666c2",
    "path": "game-v58/cinematics/lot-01/duel-orage-pc.webp",
    "name": "duel-orage-pc.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/lot-01/duel-orage-pc.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/lot-01/duel-orage-pc.webp"
  },
  {
    "id": "4ea226808265",
    "path": "game-v58/cinematics/lot-01/fen-arrivee-mobile.webp",
    "name": "fen-arrivee-mobile.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/lot-01/fen-arrivee-mobile.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/lot-01/fen-arrivee-mobile.webp"
  },
  {
    "id": "37d379068718",
    "path": "game-v58/cinematics/lot-01/fen-arrivee-pc.webp",
    "name": "fen-arrivee-pc.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/lot-01/fen-arrivee-pc.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/lot-01/fen-arrivee-pc.webp"
  },
  {
    "id": "2772cf4aedce",
    "path": "game-v58/cinematics/lot-02/triangulation-alistair-mobile.webp",
    "name": "triangulation-alistair-mobile.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/lot-02/triangulation-alistair-mobile.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/lot-02/triangulation-alistair-mobile.webp"
  },
  {
    "id": "315189f2ffbb",
    "path": "game-v58/cinematics/lot-02/triangulation-alistair-pc.webp",
    "name": "triangulation-alistair-pc.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/lot-02/triangulation-alistair-pc.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/lot-02/triangulation-alistair-pc.webp"
  },
  {
    "id": "5aff75916c2d",
    "path": "game-v58/cinematics/lot-02/triangulation-kaelen-mobile.webp",
    "name": "triangulation-kaelen-mobile.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/lot-02/triangulation-kaelen-mobile.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/lot-02/triangulation-kaelen-mobile.webp"
  },
  {
    "id": "71e909c3c579",
    "path": "game-v58/cinematics/lot-02/triangulation-kaelen-pc.webp",
    "name": "triangulation-kaelen-pc.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/lot-02/triangulation-kaelen-pc.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/lot-02/triangulation-kaelen-pc.webp"
  },
  {
    "id": "9903aa3c8e55",
    "path": "game-v58/cinematics/lot-02/triangulation-solo-mobile.webp",
    "name": "triangulation-solo-mobile.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/lot-02/triangulation-solo-mobile.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/lot-02/triangulation-solo-mobile.webp"
  },
  {
    "id": "4994fff05f50",
    "path": "game-v58/cinematics/lot-02/triangulation-solo-pc.webp",
    "name": "triangulation-solo-pc.webp",
    "group": "game-v58",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/game-v58/cinematics/lot-02/triangulation-solo-pc.webp",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/game-v58/cinematics/lot-02/triangulation-solo-pc.webp"
  },
  {
    "id": "a7ae991e81a0",
    "path": "sources/silas/views/back-right.jpg",
    "name": "back-right.jpg",
    "group": "sources",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/sources/silas/views/back-right.jpg",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/sources/silas/views/back-right.jpg"
  },
  {
    "id": "53cd0d77d51d",
    "path": "sources/silas/views/back.jpg",
    "name": "back.jpg",
    "group": "sources",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/sources/silas/views/back.jpg",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/sources/silas/views/back.jpg"
  },
  {
    "id": "94044d723afb",
    "path": "sources/silas/views/front-left.jpg",
    "name": "front-left.jpg",
    "group": "sources",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/sources/silas/views/front-left.jpg",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/sources/silas/views/front-left.jpg"
  },
  {
    "id": "ad90e65e0683",
    "path": "sources/silas/views/front.jpg",
    "name": "front.jpg",
    "group": "sources",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/sources/silas/views/front.jpg",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/sources/silas/views/front.jpg"
  },
  {
    "id": "1febe2d97faf",
    "path": "sources/silas/views/left.jpg",
    "name": "left.jpg",
    "group": "sources",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/sources/silas/views/left.jpg",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/sources/silas/views/left.jpg"
  },
  {
    "id": "374add18a806",
    "path": "sources/silas/views/right.jpg",
    "name": "right.jpg",
    "group": "sources",
    "url": "https://cdn.jsdelivr.net/gh/Sunstrader/elenya-3d-assets@main/sources/silas/views/right.jpg",
    "fallbackUrl": "https://raw.githubusercontent.com/Sunstrader/elenya-3d-assets/main/sources/silas/views/right.jpg"
  }
]);

// Version pure pour le serveur Node / AI Studio : aucune dépendance à SpreadsheetApp.
function imageReviewerWebBootstrap() {
  const scenes = imageReviewerBuildScenesWeb_();
  const buildVersion = (typeof BUILD_VERSION !== 'undefined' && BUILD_VERSION)
    ? String(BUILD_VERSION) : 'CURRENT';
  return {
    ok:true,
    appVersion:ELENYA_IMAGE_REVIEWER.APP_VERSION,
    buildVersion:buildVersion,
    datasetId:'ELENYA_' + buildVersion + '_' + scenes.length + '_IMAGES',
    sceneCount:scenes.length,
    assetCount:ELENYA_IMAGE_REVIEWER_ASSETS.length,
    scenes:scenes,
    assets:ELENYA_IMAGE_REVIEWER_ASSETS,
    generatedAt:new Date().toISOString()
  };
}

function imageReviewerBuildScenesWeb_() {
  if (typeof applyRefonte_ === 'function') applyRefonte_();
  const out = [];
  imageReviewerAppendDbWeb_(out, (typeof DB !== 'undefined' ? DB : {}), 'DB', 'CLASSIQUE');
  imageReviewerAppendDbWeb_(out, (typeof NGPLUS_DB !== 'undefined' ? NGPLUS_DB : {}), 'NGPLUS_DB', 'NEW GAME+');
  return out;
}

function imageReviewerAppendDbWeb_(out, db, dbName, campaign) {
  Object.keys(db || {}).forEach(function(id) {
    const s = db[id] || {};
    const chapter = Number(s.chapter || imageReviewerInferChapterWeb_(id)) || 0;
    out.push({
      id:String(id),
      dbName:dbName,
      campaign:campaign,
      sceneNumber:imageReviewerPrimitiveWeb_(s.sceneNumber) || String(id),
      chapter:chapter,
      act:imageReviewerActWeb_(id, chapter, campaign),
      title:imageReviewerPrimitiveWeb_(s.title) || String(id),
      mood:imageReviewerPrimitiveWeb_(s.mood),
      choices:imageReviewerExtractChoicesWeb_(s, db),
      currentImages:imageReviewerExtractSceneImages_(s, String(id))
    });
  });
}

function imageReviewerExtractChoicesWeb_(scene, db) {
  let list = [];
  if (Array.isArray(scene.choices)) list = scene.choices;
  else if (typeof scene.getChoices === 'function') {
    return [{key:'DYNAMIC',text:'Choix générés dynamiquement',next:'',target:'',intent:'',images:[]}];
  }
  return list.map(function(choice, i) {
    const c = choice || {};
    let text = '';
    if (typeof c.text === 'string') text = c.text;
    else if (typeof c.getDynamicText === 'function') text = '[Texte dynamique]';
    else text = imageReviewerPrimitiveWeb_(c.text);
    return {
      key:imageReviewerPrimitiveWeb_(c.key) || String(i + 1),
      text:text || '(texte dynamique)',
      next:imageReviewerPrimitiveWeb_(c.next),
      target:imageReviewerPrimitiveWeb_(c.target),
      intent:imageReviewerPrimitiveWeb_(c.intent),
      images:imageReviewerExtractChoiceImages_(db, c, String(c.key || (i + 1)))
    };
  });
}

function imageReviewerPrimitiveWeb_(v) {
  if (v === null || typeof v === 'undefined') return '';
  if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') return String(v);
  return '';
}

function imageReviewerInferChapterWeb_(id) {
  const m = String(id || '').match(/^ACTE(\d+)/i);
  return m ? Number(m[1]) : 0;
}

function imageReviewerActWeb_(id, chapter, campaign) {
  if (campaign === 'NEW GAME+') return 'NEW GAME+';
  if (/^FIN_|^GAME_OVER/i.test(String(id))) return 'FINS';
  return chapter ? 'ACTE ' + chapter : 'AUTRES';
}

function imageReviewerBootstrap() {
  const scenes = imageReviewerBuildScenes_();
  const buildVersion = reviewerBuildVersion_();
  const datasetId = reviewerDatasetId_(buildVersion, scenes) + '_IMAGES';
  const saved = imageReviewerLoadSelections_(datasetId);
  const ss = reviewerEnsureSpreadsheet_();
  imageReviewerEnsureSheet_(ss);
  return {
    ok:true,
    appVersion:ELENYA_IMAGE_REVIEWER.APP_VERSION,
    buildVersion:buildVersion,
    datasetId:datasetId,
    sceneCount:scenes.length,
    assetCount:ELENYA_IMAGE_REVIEWER_ASSETS.length,
    scenes:scenes,
    assets:ELENYA_IMAGE_REVIEWER_ASSETS,
    savedSelections:saved,
    spreadsheetUrl:ss.getUrl(),
    generatedAt:new Date().toISOString()
  };
}

function imageReviewerBuildScenes_() {
  applyRefonte_();
  const out = [];
  imageReviewerAppendDb_(out, (typeof DB !== 'undefined' ? DB : {}), 'DB', 'CLASSIQUE');
  imageReviewerAppendDb_(out, (typeof NGPLUS_DB !== 'undefined' ? NGPLUS_DB : {}), 'NGPLUS_DB', 'NEW GAME+');
  return out;
}

function imageReviewerAppendDb_(out, db, dbName, campaign) {
  Object.keys(db || {}).forEach(function(id) {
    const s = db[id] || {};
    const chapter = Number(s.chapter || reviewerInferChapter_(id)) || 0;
    const rawChoices = Array.isArray(s.choices) ? s.choices : [];
    const normalizedChoices = reviewerExtractChoices_(s);
    const choices = normalizedChoices.map(function(c, i) {
      const raw = rawChoices[i] || {};
      return {
        key:c.key, text:c.text, next:c.next, target:c.target, intent:c.intent,
        images:imageReviewerExtractChoiceImages_(db, raw, String(c.key || (i + 1)))
      };
    });
    out.push({
      id:String(id),
      dbName:dbName,
      campaign:campaign,
      sceneNumber:reviewerPrimitive_(s.sceneNumber) || String(id),
      chapter:chapter,
      act:reviewerAct_(id, chapter, campaign),
      title:reviewerPrimitive_(s.title) || String(id),
      mood:reviewerPrimitive_(s.mood),
      choices:choices,
      currentImages:imageReviewerExtractSceneImages_(s, String(id))
    });
  });
}

function imageReviewerExtractSceneImages_(scene, sceneId) {
  // Une scène n'affiche ici que son état de base. Les variantes déclenchées par
  // un choix sont résolues sur le choix source via imageReviewerExtractChoiceImages_.
  return imageReviewerResolveSceneImagesForState_(
    scene,
    sceneId,
    imageReviewerMockState_([]),
    'scène'
  );
}

function imageReviewerExtractChoiceImages_(db, choice, choiceKey) {
  choice = choice || {};
  const nextId = imageReviewerPrimitiveWeb_(choice.next);
  if (!nextId || nextId === 'END' || nextId === 'RETURN' || !db || !db[nextId]) return [];

  const gs = imageReviewerMockState_([]);
  imageReviewerApplyChoiceEffects_(gs, choice.effects);
  const images = imageReviewerResolveSceneImagesForState_(
    db[nextId],
    nextId,
    gs,
    'après choix ' + String(choiceKey || '')
  );

  return images.map(function(v) {
    return {
      role:v.role,
      variant:v.variant,
      url:v.url,
      source:v.source,
      destinationSceneId:nextId
    };
  });
}

function imageReviewerResolveSceneImagesForState_(scene, sceneId, gs, variantLabel) {
  scene = scene || {};
  const specs = [
    {role:'Image PC', value:scene.image},
    {role:'Image mobile', value:scene.imageMobile},
    {role:'Après transition PC', value:scene.postTransitionImage},
    {role:'Après transition mobile', value:scene.postTransitionImageMobile}
  ];
  const out = [];

  specs.forEach(function(spec) {
    const value = spec.value;
    if (!value) return;
    let resolved = '';

    if (typeof value === 'string') resolved = value;
    else if (typeof value === 'function') {
      try { resolved = value(gs); } catch (err) { resolved = ''; }
    }

    if (typeof resolved === 'string' && resolved.trim()) {
      imageReviewerPushVisual_(out, spec.role, variantLabel || 'résolu', resolved, sceneId, gs);
    }
  });

  const seen = {};
  return out.filter(function(v) {
    const key = [v.role,v.url].join('|');
    if (seen[key]) return false;
    seen[key] = true;
    return true;
  });
}

function imageReviewerApplyChoiceEffects_(gs, effects) {
  if (!gs || !Array.isArray(effects)) return gs;
  effects.forEach(function(effect) {
    if (!effect || typeof effect !== 'object') return;
    const type = String(effect.type || '').toUpperCase();
    const target = String(effect.target || '');
    const value = Number(effect.value || 0);

    if (type === 'SET_FLAG' && target) {
      if (gs.flags.indexOf(target) < 0) gs.flags.push(target);
    } else if ((type === 'CLEAR_FLAG' || type === 'REMOVE_FLAG') && target) {
      const idx = gs.flags.indexOf(target);
      if (idx >= 0) gs.flags.splice(idx, 1);
    } else if (type === 'SET_GLOBAL_FLAG' && target) {
      if (gs.globalFlags.indexOf(target) < 0) gs.globalFlags.push(target);
    } else if (type === 'ADD_GAUGE' && target) {
      gs.gauges[target] = Number(gs.gauges[target] || 0) + value;
    } else if (type === 'SET_GAUGE' && target) {
      gs.gauges[target] = value;
    } else if (type === 'JOIN_COMPANION') {
      if (/^(O|OMBRE|KAELEN)$/i.test(target) && gs.flags.indexOf('avec_ombre') < 0) gs.flags.push('avec_ombre');
      if (/^(E|ECLAIREUR|ALISTAIR)$/i.test(target) && gs.flags.indexOf('avec_eclaireur') < 0) gs.flags.push('avec_eclaireur');
    }
  });
  return gs;
}

function imageReviewerPushVisual_(out, role, variant, rawUrl, sceneId, gs) {
  let url = String(rawUrl || '').trim();
  if (!url || !/^https?:\/\//i.test(url)) return;
  try { url = normalizeAssetRef(url); } catch (e) {}
  try { url = refonteAsset_(url, gs || imageReviewerMockState_([]), sceneId) || url; } catch (e) {}
  if (!/^https?:\/\//i.test(String(url || ''))) return;
  out.push({role:role, variant:variant, url:String(url), source:String(rawUrl || '')});
}

function imageReviewerProfilesForSource_(source) {
  const profiles = [{label:'par défaut',flags:[]}];
  const flags = [];
  const re = /hasFlag\(\s*['"]([^'"]+)['"]\s*\)/g;
  let m;
  while ((m = re.exec(String(source || '')))) {
    if (flags.indexOf(m[1]) < 0) flags.push(m[1]);
  }
  flags.forEach(function(flag) {
    profiles.push({label:'flag: ' + flag, flags:[flag]});
  });
  if (flags.length > 1) profiles.push({label:'flags combinés', flags:flags.slice()});

  // Helpers de l'Acte 1 : leurs conditions vivent dans la fermeture, donc elles
  // ne sont pas visibles dans String(scene.image).
  if (/duelV58|duelFinV58/.test(source)) {
    profiles.push({label:'route orage',flags:['galeries_ozone']});
    profiles.push({label:'route cendre',flags:['galeries_cendre']});
  }
  if (/triangulationV58/.test(source)) {
    profiles.push({label:'route Kaelen',flags:['avec_ombre']});
    profiles.push({label:'route Alistair',flags:['avec_eclaireur']});
    profiles.push({label:'route solo',flags:['voie_solo']});
  }
  if (/echoNeigeV57/.test(source)) {
    profiles.push({label:'réaction ombre',flags:['react_ombre']});
    profiles.push({label:'réaction lumière',flags:['react_lumiere']});
    profiles.push({label:'réaction givre',flags:['react_givre']});
  }

  const uniq = {};
  return profiles.filter(function(p) {
    const k = p.flags.slice().sort().join('|');
    if (uniq[k]) return false;
    uniq[k] = true;
    return true;
  });
}

function imageReviewerMockState_(flags) {
  const list = Array.isArray(flags) ? flags.slice() : [];
  const gauges = {};
  const inventory = [];
  const globalFlags = [];
  return {
    flags:list,
    globalFlags:globalFlags,
    gauges:gauges,
    inventory:inventory,
    hasFlag:function(flag) { return list.indexOf(String(flag)) >= 0; },
    getGauge:function(name) { return Number(gauges[String(name)] || 0); },
    hasItem:function(item) { return inventory.indexOf(String(item)) >= 0; },
    getRep:function() { return 0; },
    getReputation:function() { return 0; },
    getTimer:function() { return 0; }
  };
}

function imageReviewerSave(payload) {
  payload = payload || {};
  const dataset = reviewerClean_(payload.datasetId, 180);
  const sceneId = reviewerClean_(payload.sceneId, 180);
  if (!dataset || !sceneId) throw new Error('Version ou scène manquante.');

  const buildVersion = reviewerClean_(payload.buildVersion, 80) || reviewerBuildVersion_();
  const sceneTitle = reviewerClean_(payload.sceneTitle, 240);
  const act = reviewerClean_(payload.act, 80);
  const action = ['pending','keep','replace','needs-new'].indexOf(String(payload.action || 'pending')) >= 0
    ? String(payload.action || 'pending') : 'pending';
  const currentImage = imageReviewerCleanUrl_(payload.currentImage);
  const selectedImage = imageReviewerCleanUrl_(payload.selectedImage);
  const selectedAssetPath = reviewerClean_(payload.selectedAssetPath, 600);
  const comment = reviewerCleanMultiline_(payload.comment, 16000);
  const targetKey = reviewerClean_(payload.targetKey || 'scene', 180) || 'scene';
  const targetLabel = reviewerClean_(payload.targetLabel || (targetKey === 'scene' ? 'Scène' : targetKey), 240);
  const now = new Date();
  const key = dataset + '|' + sceneId + '|' + targetKey;

  const ss = reviewerEnsureSpreadsheet_();
  const sh = imageReviewerEnsureSheet_(ss);
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const row = reviewerFindRowByFirstColumn_(sh, key);
    const values = [[
      key,dataset,buildVersion,sceneId,sceneTitle,act,action,currentImage,
      selectedImage,selectedAssetPath,comment,now,targetKey,targetLabel
    ]];
    if (row > 1) sh.getRange(row,1,1,values[0].length).setValues(values);
    else sh.appendRow(values[0]);
  } finally {
    lock.releaseLock();
  }
  return {ok:true,sceneId:sceneId,targetKey:targetKey,action:action,updatedAt:now.toISOString()};
}

function imageReviewerLoadSelections_(datasetId) {
  const result = {};
  if (!datasetId) return result;
  const ss = reviewerEnsureSpreadsheet_();
  const sh = imageReviewerEnsureSheet_(ss);
  if (sh.getLastRow() < 2) return result;
  const values = sh.getRange(2,1,sh.getLastRow()-1,ELENYA_IMAGE_REVIEWER.HEADERS.length).getValues();

  values.forEach(function(r) {
    if (String(r[1]) !== String(datasetId)) return;
    const sceneId = String(r[3] || '');
    if (!sceneId) return;
    const targetKey = String(r[12] || 'scene');
    const targetLabel = String(r[13] || (targetKey === 'scene' ? 'Scène' : targetKey));

    if (!result[sceneId]) result[sceneId] = {targets:{}};
    result[sceneId].targets[targetKey] = {
      targetKey:targetKey,
      targetLabel:targetLabel,
      action:String(r[6] || 'pending'),
      currentImage:String(r[7] || ''),
      selectedImage:String(r[8] || ''),
      selectedAssetPath:String(r[9] || ''),
      comment:String(r[10] || ''),
      updatedAt:r[11] instanceof Date ? r[11].toISOString() : String(r[11] || '')
    };
  });
  return result;
}

function imageReviewerEnsureSheet_(ss) {
  return reviewerEnsureSheet_(ss, ELENYA_IMAGE_REVIEWER.SHEET, ELENYA_IMAGE_REVIEWER.HEADERS);
}

function imageReviewerCleanUrl_(value) {
  const url = reviewerClean_(value, 2000);
  if (!url) return '';
  if (!/^https?:\/\//i.test(url)) throw new Error('URL image invalide.');
  return url;
}
