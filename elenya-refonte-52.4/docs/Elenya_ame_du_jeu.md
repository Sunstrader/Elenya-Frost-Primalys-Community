# Elenya — L’âme du jeu

Référence d’écriture, de mise en scène et de développement • 1er octobre 2026
Sources : ZIP `elenya-33(5)`, identique aux 113 fichiers de GitHub au commit `b78ef937`. Dossier `elenya-refonte-52.4/`. Le numéro **52.5.0** du `LISEZ-MOI.md` est une indication documentaire ; le commit identifie précisément la base vérifiée. Cette révision corrige aussi la révélation prématurée de Fen à l’auberge.

**Critère central : après la scène, le joueur doit comprendre ce qui s’est passé et sentir pourquoi cela compte pour la suite.**

## Autorité

Les instructions actuelles du créateur priment. Cette charte guide l’écriture, le ton et le jugement d’une proposition. Les fichiers du jeu établissent les faits, la chronologie, les flags et les contraintes techniques. Les instructions actuelles du créateur priment. Les fichiers sont la source des faits et des contraintes ; la charte guide la révision du style et de la mise en scène, y compris des scènes déjà écrites. Une contradiction existante doit être signalée et corrigée dans le périmètre autorisé, plutôt que devenir une règle de canon. Une fiche de voix ancienne ne prime pas sur cette direction.

Ce document sert à travailler avec une autre IA ou un collaborateur sans réexpliquer l’intention à chaque modification. Il ne sert pas à inventer le lore manquant. Les exemples ci-dessous sont des exemples de ton, pas des répliques automatiquement canoniques. Une fiche de voix ou un skill ancien ne peut pas réimposer un slogan que cette charte écarte.

## 1. Le cœur à préserver

**Elenya doit faire sentir une aventure dangereuse dans laquelle les liens deviennent personnels, tandis que les choix d’Elenya changent réellement la place de chacun.**

Le froid, le pouvoir, les secrets et les rapports de force donnent du poids au monde. Un repas partagé, un rire, une attention ou un silence peuvent donner du poids aux personnages. Ces deux dimensions doivent vivre ensemble. La tendresse ne fait pas disparaître les dangers ; le danger ne doit pas rendre toute conversation solennelle.

Le joueur doit pouvoir raconter une évolution : « Au début, il faisait cela pour son rôle. Plus tard, il le faisait pour moi. Puis nous avons dû décider ce que ce lien signifiait. » Cela se ressent dans les actions et les paroles, pas seulement dans une jauge.

L’objectif est une expérience soignée, vivante et cinématographique. La référence Final Fantasy, particulièrement FF10 pour certains moments de camp et de romance, concerne le rythme, les respirations et la mise en scène. Elle ne consiste pas à copier ses personnages ou son univers. L’ambition de qualité ne constitue pas une preuve de qualité obtenue.

Une respiration ne doit pas annuler une horloge active. Un camp, un repas ou une conversation peuvent ralentir le pas ; ils ne font pas disparaître la rumeur déjà lancée, le nom déjà prononcé, ni l’épreuve déjà ouverte. Si une urgence est en cours dans les fichiers, la scène calme doit la laisser sentir — un regard vers la route, une nouvelle trop tôt, une morsure qui n’est pas refermée — sans transformer chaque pause en discours sur le temps qui presse.

Pressions narratives et compte à rebours doivent être distingués :

| Élément | Source et condition | Ce qu’il établit |
| --- | --- | --- |
| Rumeur du passage destructeur | `ACTE2_05_ARRIVEE_AUBERGE`, branche `silas_mort`, après les branches prioritaires village / prisonnière | Un accueil conditionnel ; pas une rumeur universelle ni un timer |
| Nom des Confrères de Cendre | Même scène, introduction | Une menace et un mystère ; aucun délai chiffré établi par cette phrase |
| Morsure de Fen à la frontière | `ACTE3_01_FRONTIERE_1` | Une épreuve présentée comme un décret de l’esprit de Kalthar ; ne pas en déduire seul un compte à rebours |
| « Délivrés de son venin » sur la rive nord | `ACTE2_11_RIVE_NORD`, branche `kaelen_perdu` | Une parole d’Alistair sur Kaelen ; pas la preuve d’un poison actif |
| Échéance du venin | `timer_venin_check`, `10_Triggers.js` | Le déclencheur exige un `timers.venin` numérique égal à zéro et `urgence_declenchee`, hors fin / game over. Vérifier aussi où le timer est créé et modifié avant tout raccord |

Une respiration respecte une urgence réellement active et les conséquences déjà jouées. Ne pas inventer de deadline à partir d’une menace ou d’une métaphore.

## 2. La place du joueur

Elenya peut désirer, hésiter, refuser, écouter, se tromper, exercer le pouvoir ou prendre de la distance. Le texte doit reconnaître ce que le joueur a choisi.

Ne décide pas qu’elle aime quelqu’un parce qu’elle a accepté une aide. Ne décris pas automatiquement un désir réciproque après un geste amical. Laisse les sensations et les réactions ouvrir une possibilité ; réserve les engagements importants à des choix identifiables.

Les compagnons ont aussi leurs envies, leurs limites et leurs décisions. Ils ne sont ni des récompenses ni des personnages qui attendent toujours un ordre. Ils peuvent proposer, prendre une initiative, être maladroits ou dire ce qu’ils ne peuvent pas accepter. Elenya garde la possibilité de répondre.

Une réponse doit reconnaître l’intention du choix. Accueillir, ralentir et rejeter ne peuvent pas produire trois variantes du même « il sourit et reste ».

### Solo

Le solo est l’autonomie d’Elenya, pas l’effacement des compagnons. Elle peut décider sans s’appuyer sur eux, garder une pensée pour elle, ou refuser un guide. S’ils sont encore là physiquement, le texte ne dit pas qu’elle est seule, sauf écart explicite déjà écrit : chute, départ, refus, ou la solitude intérieure après la dissolution de Fen dans `ACTE4_07_ADIEU_KALTHAR`.

Formes déjà présentes : `V28_SOLO_KAELEN`, `V28_SOLO_ALISTAIR`, `V28_SOLO_ECHO_AUBERGE`, `ACTE3_SOLO_ORAYA`. « Seule avec Alistair » ou « seule dans sa tête » peut être juste. « Tu es seule, pas de Kaelen » ne l’est pas s’il marche encore à côté d’elle.

Choisir le solo ne transforme pas les autres en absents, ni un ami en rival puni. La voie solo se lit dans ce qu’Elenya fait elle-même, pas dans une phrase qui nie le groupe.

## 3. Le ton : simple, sensible, incarné

Écris dans un français clair, avec des actions concrètes, des phrases faciles à suivre et des dialogues qui pourraient être prononcés. Une image forte peut porter un passage ; plusieurs métaphores qui se concurrencent rendent l’émotion difficile à lire.

Le mystère vient de ce qui arrive, de ce que le personnage tait et de ce que le joueur découvre. Il ne dépend pas d’un vocabulaire compliqué. La poésie reste bienvenue lorsqu’elle précise une sensation ou un enjeu.

Privilégie une attention précise : faire sécher une botte, garder une ration, ralentir sur la route, libérer une place dans un abri. L’émotion peut ensuite apparaître dans la façon de donner, d’attendre ou de répondre.

L’émotion se sent d’abord dans les gestes et les réactions. Le narrateur peut nommer une peur ou une émotion lorsque cela aide le vécu ; il évite d’imposer systématiquement une interprétation du lien. Pas de phrase qui nomme le cadre à la place du joueur : « pas une frontière romantique : un inventaire », « amour réel, cadre intact », « réflexe d’Ordre, pas tendresse ». Montrer la main qui s’arrête, la ration gardée, le silence qui dure. Le joueur déduit. Un contraste dans le monde reste possible s’il est vécu (« pas une mine, un sanctuaire ») ; une consigne de lecture, non.

| À éviter | Direction préférable |
| --- | --- |
| Une déclaration abstraite sur la liberté à chaque rapprochement | Un geste qui laisse réellement le choix, puis une phrase adaptée au moment |
| « Contrat », « mission », « cage », « seuil » dans chaque réplique | Ces mots aux moments où ils portent l’arc ; ailleurs, une conversation humaine |
| Plusieurs paragraphes expliquant pourquoi un silence est important | Une action ou une réplique qui fait sentir ce qui a changé |
| Une réponse générique valable pour tous | Une réaction propre au personnage et à votre histoire |
| Une consigne de développement dans le récit | Une action vécue dont le joueur comprend l’enjeu |
| Le narrateur qui impose systématiquement le type de lien | Un geste, un arrêt, une réponse qui laissent déduire |

« Reste » ou prendre une main ne sont pas interdits. Le geste peut revenir si son sens évolue : aider, rassurer, reconnaître un désir, choisir une relation. La répétition devient un problème lorsque la scène ne fait que rejouer le même rapprochement.

## 4. Les personnages : des voix, pas des slogans

### Elenya

Elle est le centre du choix et du vécu. Ne la réduis ni à une souveraine toujours froide ni à une personne dont la seule fonction est de rassurer les compagnons. Laisse de la place à sa curiosité, sa fatigue, son humour et ses réactions, selon le parcours choisi.

### Kaelen

Direct, parfois ironique, avec un rapport marchand au monde qui peut apparaître dans sa voix. Il peut être inquiet, drôle ou tendre sans perdre son identité. Il n’a pas besoin de formuler chaque émotion comme un contrat.

Son évolution doit pouvoir se sentir dans le passage d’un geste justifié par l’utilité à un geste accompli parce qu’il le veut. Conserver sa personnalité ne signifie pas le laisser immobile ; le faire évoluer ne signifie pas lui donner la voix d’Alistair.

Exemple de registre : « J’ai gardé le meilleur morceau. Ne prends pas l’habitude. » Sa manière de le tendre et la réponse d’Elenya donnent le sous-texte.

### Alistair

Réservé, attentif, marqué par sa foi et son rôle. Il peut inviter franchement, sourire, hésiter ou avoir un humour maladroit. La retenue ne doit pas devenir une incapacité permanente à exprimer ce qu’il souhaite.

L’amour ne doit pas remplacer automatiquement sa foi. Son évolution peut modifier sa manière de protéger et sa peur de trop garder Elenya près de lui. Respecter la liberté peut coexister avec une croyance personnelle.

Exemple de registre : « J’aimerais passer cette soirée avec toi. Juste avec toi. » Une invitation claire suffit ; il n’est pas nécessaire de la transformer en discours.

### Fen et les autres

Fen participe à la chaleur, au rythme et à la continuité de l’aventure. Le choisir pour se reposer n’est pas automatiquement rejeter les autres. Respecte son identité et les règles du lore dans les fichiers.

Les personnages secondaires ont une fonction et une histoire propres. Ils ne doivent pas surgir pour commenter une romance, livrer une information ou conduire le joueur ailleurs sans introduction ni transition.

## 5. Révélations à préserver

Repères tirés de cette version. Respecter les conditions de découverte : une scène ou un fragment accessible sur une branche ne donne pas automatiquement cette connaissance à tous les parcours. Ne pas avancer une révélation, ni compléter un motif absent. Une contradiction entre scènes est un défaut à signaler, pas une autorisation de divulguer le secret partout.

| Fait écrit | Où | À ne pas faire |
| --- | --- | --- |
| Oraya a mis Elenya sur la stèle, a dit « Dors, Elenya », a veillé des siècles. Elle n’était pas prêtresse avant ce serment. Le fragment laisse encore ouvert le pourquoi. | `FRAGMENT_4_STELE`, `DATABASE_Fragments.js` | Inventer le motif manquant, ou traiter le nom comme déjà connu avant ce fragment |
| Au trône, le texte dit qu’Oraya l’a scellée pour la protéger du monde, et que le monde l’a réveillée pour la détruire. | `ACTE4_09_TRONE_EBENE`, sous `verite_complete` ; repris dans `FIN_VERITE`, dont le rappel de la stèle lit `_fragment_4_vu` | Adoucir le scellement en simple garde, ou le transformer en trahison non écrite |
| À l’accueil du culte, Oraya appelle Fen « le guide de Kalthar ». Ce n’est pas encore l’identité complète. | `ACTE3_10_ACCUEIL_CULTE_1`, `DATABASE_Acte3.js` | Faire dire à Oraya, avant l’acte 4, que Fen est le roi |
| Fen n’était pas un familier. Il était Kalthar, ou ce qu’il en restait : un roi réduit à un furet, qui rend la couronne puis se dissout. | `ACTE4_07_ADIEU_KALTHAR`, `DATABASE_Acte4.js` | Annoncer cette identité dans un camp, un rêve ou une romance antérieure |
| La morsure de la frontière est écrite comme un décret de l’esprit de Kalthar, pas comme une attaque animale. | `ACTE3_01_FRONTIERE_1`, `DATABASE_Acte3.js` | La réécrire en simple accident, ou en explication complète de Kalthar |
| Le spectre de Kalthar énonce le Pacte des Cendres : un contrat traversant les âges, le sang de Kaelen lié par serment, contrat signé avant sa naissance, qu’il ne sait pas encore. | `REVE_KAELEN`, `DATABASE_Acte2.js` | Faire avouer ce pacte à Kaelen avant la scène qui le lui apprend |
| Le spectre énonce la Cage de Dévotion : la lignée Leonhart purifiée pour produire un geôlier dévot, assez sincère pour ne pas s’en rendre compte. | `REVE_ALISTAIR`, `DATABASE_Acte2.js` | Traiter Alistair comme geôlier dès l’acte 1, ou effacer cette peur dans une romance |
| Alistair peut appliquer le Sceau Solaire. La conscience d’Elenya reste éveillée dans une cage. La fin « La Cage Dorée » existe. | `GAME_OVER_SCELLEE`, `FIN_ECLAIREUR`, `DATABASE_Endings.js` | Recouvrir cette branche d’une tendresse qui annule le sceau |

`FRAGMENT_SERMENT_CENDRES` montre un ancêtre qui signe en disant qu’il préfère porter le serment plutôt que son fils ou son petit-fils. `FRAGMENT_KAELEN_ANCESTRE` est un autre fragment, qui évoque le serment des descendants. Ne pas les fusionner ni résoudre leur tension en inventant une explication. Respecter leurs flags de découverte.

**Incohérence repérée et corrigée dans cette passe :** à l’auberge, le narrateur appelait Fen « l’ancien roi » avant la révélation. La rencontre avec Azaya est conservée, sans cette identité. La révélation explicite demeure dans les scènes d’adieu prévues par le parcours, notamment `ACTE4_07_ADIEU_KALTHAR` ; vérifier aussi ses interceptions et la variante `FEN_ADIEU` avant tout raccord.

## 6. La romance doit évoluer pendant l’aventure

La romance ne doit pas exister uniquement dans des scènes dédiées. Elle change aussi la façon de marcher, de se parler, de partager une garde et d’être ensemble devant les autres.

La progression suivante est un repère, pas un ordre rigide imposé à tous les parcours :

| Étape | Ce que le joueur ressent | Trace possible ensuite |
| --- | --- | --- |
| Curiosité | Une personne encore difficile à comprendre | Une attention remarquée, une question personnelle |
| Complicité | On commence à se connaître | Humour partagé, aisance nouvelle, initiative du compagnon |
| Confiance | Quelque chose de vrai a été confié | Moins de justification, une vulnérabilité respectée |
| Attirance nommée | Le rapprochement devient volontairement amoureux | Une invitation ou une proximité dont le sens est clair |
| Intimité choisie | On assume un désir, ou on pose une limite | Le lendemain reconnaît ce qui a eu lieu |
| Relation éprouvée | Le danger, le pouvoir ou un désaccord teste le lien | Un comportement conforme à la réponse donnée |
| Aboutissement | La relation porte son histoire | Un souvenir précis et un état cohérent dans la fin |

Après une confidence, le changement principal est la confiance. Après une soirée, c’est la complicité. Après un baiser, le désir est reconnu. Ces étapes peuvent partager un objet ou un lieu ; elles ne doivent pas avoir exactement le même sous-texte.

Chaque moment important doit laisser au moins une trace observable plus tard. Cette trace peut être courte. Elle doit dépendre de l’événement réellement joué, de la présence du personnage et de l’état actuel du lien.

Répartis les traces jusqu’aux derniers actes : lendemain, route, village, abri, confrontation, fin. Évite de recommencer la séduction depuis zéro à chaque lieu.

La relation avance aussi par des petites joies : plaisanterie, maladresse, souvenir commun, repas, projet modeste pour après le danger. Elle ne doit pas progresser exclusivement par la peur, le secret et le sacrifice. Ces joies ne coupent pas l’horloge active.

## 7. Amitié, limites et triangle

| Situation | Ce qu’elle signifie | Ce qu’elle ne signifie pas automatiquement |
| --- | --- | --- |
| Aide, écoute, feu partagé | Le lien peut grandir | Une romance ouverte |
| « Pas ce soir » | Un refus ponctuel | Une rupture, une pause durable ou une punition |
| Ralentir, refuser un baiser | Une limite | Une froideur obligatoire |
| « Restons amis » | Une relation amicale assumée | Une absence de chaleur ou de moments à deux |
| Pause romantique | Les accès amoureux sont suspendus | Le lien humain est effacé |
| Conflit, rupture, domination | Un état qui transforme la relation | Une simple hésitation tendre |
| Deux romances ouvertes | Deux attirances à prendre en compte | Un accord à trois |
| Solo | Elenya agit sans s’appuyer sur eux | Les compagnons présents ont disparu |

L’amitié peut inclure une main pour rassurer, une couverture ou une conversation privée. C’est l’intention et le contexte qui comptent. Ne rends pas les amis froids pour mieux distinguer les amoureux.

Un refus doit être entendu. Ne rejoue pas la même invitation immédiatement. Une pause durable n’est rouverte que par une démarche explicite du joueur ; une ancienne jauge élevée ne suffit pas.

Le triangle exige un enjeu amoureux réel. La présence de deux compagnons, ou l’absence d’un flag d’amitié, ne suffit pas à établir une rivalité. Ne pénalise pas un absent ou un ami parce qu’Elenya rejoint quelqu’un d’autre.

Un accord à trois suppose la volonté explicite de chacun. « Je ne choisis pas ce soir » ouvre une discussion ; cela ne vaut pas consentement des trois. Ne transforme pas non plus toute hésitation en jalousie punitive.

## 8. Les branches sombres et les fins

Le jeu peut contenir domination, possession, conflit et choix politiques lourds. Ces branches font partie de sa diversité. Ne les réécris pas toutes pour qu’elles ressemblent à une romance libre et heureuse.

Une ancienne soirée agréable ne doit pas rendre chaleureuse une relation ensuite brisée ou dominée. La relation doit reconnaître sa trajectoire actuelle. L’amitié ne doit pas non plus masquer un conflit encore actif.

Distingue le plan politique du plan relationnel. Une fin amicale n’annule pas un choix concernant le trône, l’Ordre ou le monde. Une phrase intime vient compléter une branche compatible, pas remplacer son prix politique.

La fin doit se souvenir d’un moment précis lorsque ce moment a été joué. Évite l’amour générique collé à tous les parcours. Un compagnon absent, mort ou perdu ne doit pas réapparaître pour livrer une conclusion romantique. Après `ACTE4_07_ADIEU_KALTHAR`, Fen dissous ne revient pas commenter un lien.

## 9. Une scène cohérente : questions à résoudre

Avant d’écrire, retrouve le lieu, le moment, les présents, ce qu’ils savent et ce qui vient de se passer. Lis la scène précédente et les sorties utiles. Ne t’appuie pas uniquement sur le titre de la scène.

Une scène doit apporter une chose nouvelle : initiative, découverte, difficulté, désaccord, rire, réparation, décision ou changement de proximité. Un moment calme peut être utile ; il n’a pas besoin d’ajouter un secret pour justifier son existence. Il ne doit pas non plus faire oublier l’urgence déjà ouverte.

Un secret annoncé doit être révélé ou avoir un effet narratif réel. Sinon, retire la promesse. Ne crée pas un rêve prémonitoire, un passé ou un lien ancestral pour enrichir une romance sans vérifier le lore. Les rêves `REVE_KAELEN` et `REVE_ALISTAIR` existent déjà : ne pas en écrire un second qui dit la même chose plus tôt.

Un choix demande trois éléments : une intention compréhensible, une réaction qui la reconnaît et une conséquence observable pertinente. Plusieurs choix peuvent converger vers la même scène si la différence reste perceptible.

Une scène de retour montre l’effet du choix : nouvelle aisance, regard, petite action, tension ou limite respectée. Elle ne doit pas répéter tout le choix que le joueur vient de lire.

## 10. Mise en scène et lisibilité

Direction visuelle : animé 2.5D, personnages reconnaissables, compositions variées, identité des lieux et cadrages adaptés à l’action. Préserver la cohérence du visage, des cheveux, des cicatrices et des accessoires.

Les moments importants peuvent avoir une illustration ou une cinématique dédiée. Un camp où quelqu’un se rapproche doit montrer un camp et une proximité compatibles avec le texte. Une vidéo doit servir l’émotion ou l’action, pas seulement remplir l’écran.

Avec une illustration complète, éviter les sprites parasites, les personnages géants ou les noms flottants. Sur une scène à sprites, garder un placement lisible et les personnages attendus. Vérifier les versions PC et mobile.

Une réécriture de texte n’autorise pas automatiquement un changement d’images, de sprites ou de cadrage. Conserver les visuels lors d’un correctif narratif, sauf demande explicite ou incohérence à traiter dans le périmètre convenu.

Le texte et les choix doivent se lire facilement, sans bandeaux inutiles ni surcharge. La narration vocale doit rester audible devant musique et effets. La mise en scène doit aider à comprendre qui fait quoi.

## 11. Le code doit respecter ce que le récit promet

Ne confonds pas présence physique, lien humain, ouverture romantique et accès à l’intimité. Une jauge de lien peut monter en amitié. Les conditions d’une scène amoureuse doivent aussi respecter la pause, le refus et la présence.

Contrôle les déclencheurs, les choix directs et les conversations reportées. Bloquer l’invitation dans un seul menu ne suffit pas si le moteur réintroduit un baiser ailleurs. Une voie solo ne se code pas en retirant un compagnon encore présent.

Pour chaque nouveau flag, identifie ce qui le pose, ce qui le lit et la différence observable. Vérifie aussi le comportement quand il est absent d’une ancienne sauvegarde. Réutilise les états existants si cela évite une contradiction.

Conserve les identifiants de scènes, la progression et les sauvegardes. Ne supprime pas l’historique d’un lien pour résoudre une condition mal écrite. Vérifie les objets et leur continuité : cape rendue, insigne déplacé, dague rangée.

Une syntaxe valide ne prouve pas un parcours valide. Une simulation de conditions ne prouve pas un raccord dans le moteur. Un test moteur ne prouve pas le rendu navigateur ni le ressenti humain. Dans une livraison, dis précisément ce qui a été testé.

## 12. Comment juger une proposition

Une proposition convient si elle renforce l’intention du jeu, reste crédible pour le personnage et reconnaît le parcours réellement joué. Elle peut être courte ou longue, douce ou dure : la longueur et l’intensité ne constituent pas, seules, des critères de réussite.

Avant de conserver une modification, vérifie :

1. Sait-on où l’on est, qui est là et ce qui vient de se passer ?
2. Reconnaît-on le personnage sans répéter son symbole à chaque phrase ?
3. Le joueur comprend-il ce qu’il choisit ?
4. Le personnage répond-il à cette intention précise ?
5. La scène apporte-t-elle une sensation ou une chose nouvelle ?
6. Un rapprochement laisse-t-il une trace ? Un refus est-il respecté ?
7. Le texte reste-t-il vrai avec un ami, un absent, une pause, un solo ou un conflit ?
8. Une respiration a-t-elle laissé l’horloge active en place ?
9. Le narrateur laisse-t-il vivre l’émotion sans imposer systématiquement une interprétation du lien ?
10. La suite et la fin reconnaissent-elles ce qui a été vécu ?
11. Une révélation de la section 5 a-t-elle été avancée, adoucie ou complétée ?
12. Le visuel soutient-il l’action et reste-t-il lisible sur PC et mobile ?
13. Les affirmations de compatibilité reposent-elles sur des tests réels ?

Ne transforme pas cette liste en mécanique visible pour le joueur. Elle sert à préparer et vérifier le travail.

## 13. Consigne à transmettre à une autre IA

Travaille à partir de cette référence et de la version actuelle des fichiers. L’instruction actuelle du créateur prime. Cette charte guide l’écriture. Les fichiers établissent les faits et les contraintes techniques.

Préserve l’identité d’Elenya : aventure dangereuse, émotions incarnées, voix distinctes, chaleur quotidienne et choix dont on ressent les conséquences. Lis les raccords avant de réécrire. Ne crée pas de lore manquant comme s’il était établi. Ne révèle pas avant leur scène Oraya sur la stèle, Fen comme Kalthar, le Pacte des Cendres ou la Cage de Dévotion.

Fais évoluer les relations jusqu’à la fin, sans transformer l’amitié en romance, une limite en rupture, une présence en consentement, ou un solo en absence. Une respiration ne coupe pas une horloge active. L’émotion se vit dans les gestes et les réactions ; la nommer ponctuellement reste possible, sans imposer une lecture du lien. Préserve les branches politiques et sombres selon le parcours. Propose des modifications concrètes et limitées au besoin, puis vérifie leur comportement dans le moteur.

**Critère central : après la scène, le joueur doit comprendre ce qui s’est passé et sentir pourquoi cela compte pour la suite.**
