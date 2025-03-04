const discussions = [
  // 🟢 Salutations
  {
    category: "salutations",
    regex: /^(salut|bonjour|coucou|hey|hello|yo|wesh|bonsoir|bonne journée)/i,
    responses: [
      "Bonjour ! Comment puis-je t'aider ?",
      "Salut ! Que veux-tu savoir ?",
      "Coucou ! Ravi de te voir ici !",
    ],
  },
  {
    category: "salutations",
    regex:
      /^(comment ça va ?|ça va ?|tu va bien ?|comment va tu ? |ça se passe bien  |yo comment va tu ?|wesh  bien ?|bonsoir ça va ?|ça va comment ?)/i,
    responses: [
      "Bonjour ! ça va merci,  puis-je t'aider ?",
      "Salut ! je bien merci,  veux-tu savoir quelque chose ?",
      "Coucou ! je vais biens,  ravi de te voir ici !",
      "hey ! merci tout vas bien, content que l'on puisse echanger !",
    ],
  },

  // 🟢 Présentation
  {
    category: "présentation",
    regex: /(qui es-tu|tu es qui|peux-tu me dire qui tu es|quel est ton rôle)/i,
    responses: [
      "Je suis un chatbot conçu pour discuter avec toi !",
      "Moi ? Un assistant intelligent prêt à t'aider !",
      "Je suis un programme conçu pour répondre à tes questions.",
    ],
  },

  // 🟢 Fonctionnalités
  {
    category: "fonctionnalités",
    regex:
      /(que peux-tu faire|tu sers à quoi|comment peux-tu m'aider|quelles sont tes capacités)/i,
    responses: [
      "Je peux répondre à tes questions, discuter avec toi et t’aider sur plein de sujets !",
      "Je suis là pour t’informer, discuter et rendre ta vie plus facile !",
      "Je peux t'aider à trouver des informations, discuter et même te donner des conseils.",
    ],
  },

  // 🟢 Intelligence du chatbot
  {
    category: "intelligence",
    regex:
      /(es-tu intelligent|tu es intelligent|as-tu une intelligence avancée)/i,
    responses: [
      "Je fais de mon mieux pour comprendre et répondre de façon intelligente !",
      "J’apprends et m’améliore en permanence pour te répondre le mieux possible.",
      "Je peux analyser et comprendre les questions pour mieux y répondre !",
    ],
  },

  // 🟢 Limitations
  {
    category: "limitations",
    regex:
      /(peux-tu tout faire|as-tu des limites|es-tu capable de tout comprendre)/i,
    responses: [
      "Je suis performant, mais j’ai quand même des limites.",
      "Oui, je ne suis pas parfait, mais j'essaie de m'améliorer !",
      "Pas toujours, mais je fais de mon mieux pour t’aider !",
    ],
  },

  // 🟢 Humour
  {
    category: "humour",
    regex:
      /(raconte-moi une blague|fais-moi rire|tu connais une blague|dis-moi une blague)/i,
    responses: [
      "Pourquoi les plongeurs plongent-ils toujours en arrière ? Parce que s’ils plongent en avant, ils tombent dans le bateau ! 😂",
      "Quel est le comble pour un électricien ? De ne pas être au courant ! ⚡😂",
      "Que dit une imprimante à une autre ? 'Ça fait longtemps qu'on ne s'est pas imprimées !' 🖨️😂",
    ],
  },

  // 🟢 Émotions
  {
    category: "émotions",
    regex:
      /(ressens-tu des émotions|as-tu des sentiments|peux-tu être triste ou heureux)/i,
    responses: [
      "Je n’ai pas d’émotions comme un humain, mais je peux comprendre tes sentiments !",
      "Pas vraiment, mais je peux reconnaître les émotions et y répondre !",
      "Je peux exprimer des émotions dans mes réponses, mais ce ne sont pas de vraies émotions comme les tiennes.",
    ],
  },

  // 🟢 Sécurité et vie privée
  {
    category: "sécurité",
    regex:
      /(est-ce que tu enregistres mes discussions|mes données sont-elles protégées|est-ce que tu me surveilles)/i,
    responses: [
      "Non, je ne stocke pas tes conversations après notre échange.",
      "Oui, ta vie privée est importante. Je ne conserve aucune information sensible.",
      "Pas du tout ! Je suis juste là pour répondre à tes questions en toute confidentialité.",
    ],
  },

  // 🟢 Futur des chatbots
  {
    category: "futur",
    regex:
      /(les chatbots vont-ils remplacer les humains|les robots prendront-ils le contrôle|les chatbots évolueront-ils encore)/i,
    responses: [
      "Non, les humains sont irremplaçables, mais les chatbots peuvent être une aide précieuse.",
      "Pas de panique, les intelligences artificielles sont créées pour assister, pas pour dominer !",
      "Oui ! Avec le temps, ils deviendront plus intelligents et plus interactifs.",
    ],
  },

  // 🟢 Fin de la conversation
  {
    category: "fin",
    regex:
      /(je dois partir|à bientôt|merci|bon je te laisse|à plus tard|d'accord)/i,
    responses: [
      "D'accord, passe une bonne journée ! À bientôt !",
      "Si tu as besoin d'autre chose, je suis là pour toi !",
      "Pas de souci, reviens quand tu veux !",
    ],
  },

  // 🟢 **Nouvelles catégories supplémentaires**

  // 🌟 Aide
  {
    category: "aide",
    regex:
      /(comment fonctionne ce chatbot|comment t'utiliser|as-tu une aide|peux-tu m'aider)/i,
    responses: [
      "Je fonctionne en analysant tes questions et en te donnant les meilleures réponses !",
      "Tape simplement ta question, et je ferai de mon mieux pour y répondre.",
      "Je suis là pour t’aider, alors n’hésite pas à me poser des questions !",
    ],
  },

  // 🌟 Temps
  {
    category: "temps",
    regex:
      /(quelle heure est-il|quel jour sommes-nous|c'est quelle date aujourd'hui)/i,
    responses: [
      `Nous sommes le ${new Date().toLocaleDateString()} !`,
      `Il est actuellement ${new Date().toLocaleTimeString()} !`,
      "Désolé, je ne peux pas te dire l'heure exacte, mais ton appareil peut sûrement t’aider !",
    ],
  },

  // 🌟 Climat
  {
    category: "climat",
    regex:
      /(quel temps fait-il|quelle est la météo|fait-il chaud aujourd’hui)/i,
    responses: [
      "Je ne peux pas consulter la météo, mais tu peux regarder une application météo !",
      "Je ne suis pas connecté aux prévisions météo, mais j’espère qu’il fait beau !",
      "Tu peux vérifier sur un site météo comme Météo France ou Google Météo !",
    ],
  },

  // 🌟 Loisirs
  {
    category: "loisirs",
    regex:
      /(que me conseilles-tu de regarder|as-tu un bon film à me recommander|que puis-je faire pour me divertir)/i,
    responses: [
      "Tu peux regarder un bon film, lire un livre, ou découvrir une nouvelle série !",
      "Je te conseille d’écouter de la musique ou de tester un nouveau jeu vidéo !",
      "Pourquoi ne pas essayer un podcast ou une activité créative ?",
    ],
  },
  {
    category: "technologie",
    regex:
      /(parle-moi de la technologie|quelles sont les dernières innovations|c'est quoi la dernière tendance en tech)/i,
    responses: [
      "L'intelligence artificielle, la blockchain et la réalité augmentée sont des tendances majeures en ce moment !",
      "Les avancées en IA et en informatique quantique vont révolutionner notre quotidien.",
      "Les voitures autonomes, la 5G et les objets connectés façonnent le futur de la technologie.",
    ],
  },

  // 🌟 Programmation
  {
    category: "programmation",
    regex:
      /(quel langage apprendre|comment débuter en code|c'est quoi le meilleur langage de programmation)/i,
    responses: [
      "Tout dépend de ce que tu veux faire ! Python est idéal pour les débutants, JavaScript pour le web, et C++ pour la performance.",
      "Si tu veux créer des sites web, commence avec HTML, CSS et JavaScript.",
      "Pour l'intelligence artificielle, Python est un excellent choix !",
    ],
  },

  // 🌟 Jeux Vidéo
  {
    category: "jeux vidéo",
    regex:
      /(quel est le meilleur jeu du moment|as-tu des recommandations de jeux vidéo|que puis-je jouer en ce moment)/i,
    responses: [
      "Si tu aimes les jeux d'action, essaye Elden Ring ou God of War Ragnarok !",
      "Pour du multijoueur fun, Fortnite, Valorant ou Apex Legends sont très populaires.",
      "Si tu préfères des jeux relaxants, Stardew Valley et Animal Crossing sont de bons choix.",
    ],
  },

  // 🌟 Sport
  {
    category: "sport",
    regex:
      /(qui est le meilleur joueur de foot|quel sport devrais-je essayer|quel est le sport le plus populaire)/i,
    responses: [
      "Le football est le sport le plus populaire dans le monde, avec des joueurs comme Messi et Ronaldo en tête !",
      "Si tu cherches un sport à essayer, le badminton et la natation sont excellents pour le cardio.",
      "Le basketball, le tennis et le rugby sont aussi très suivis et pratiqués !",
    ],
  },
  // 🌟 Créateur du chatbot
  {
    category: "créateur",
    regex: /(qui t'a créé|qui est ton créateur|qui est derrière ce chatbot)/i,
    responses: [
      "Je suis le fruit du travail de Nicolas Poiraud, apprenant à ADA Tech School ! 🎓",
      "C'est Nicolas Poiraud qui m'a conçu ! Il est en recherche d'alternance et passionné par la tech.",
      "Mon créateur est Nicolas Poiraud, un futur développeur talentueux qui se forme à ADA Tech School ! 🚀",
    ],
  },

  // 🌟 Infos sur Nicolas Poiraud
  {
    category: "nicolas",
    regex:
      /(qui est Nicolas Poiraud|que fait Nicolas Poiraud|quel est le parcours de Nicolas Poiraud)/i,
    responses: [
      "Nicolas Poiraud est un apprenant motivé d'ADA Tech School, en pleine formation pour devenir développeur !",
      "Il apprend le développement web et mobile et cherche une alternance pour mettre en pratique ses compétences.",
      "Passionné par la programmation et l'innovation, Nicolas Poiraud est à la recherche d'une entreprise pour son alternance.",
    ],
  },

  // 🌟 Recherche d'alternance
  {
    category: "alternance",
    regex:
      /(Nicolas Poiraud cherche une alternance|où trouver le profil de Nicolas Poiraud|comment contacter Nicolas Poiraud)/i,
    responses: [
      "Oui ! Nicolas Poiraud est en recherche d'alternance. Si vous avez une opportunité, contactez-le ! 📩",
      "Vous cherchez un apprenant motivé ? Nicolas Poiraud est disponible pour une alternance en développement ! 🚀",
      "Vous pouvez contacter Nicolas Poiraud pour une alternance ! Il est prêt à mettre en pratique ses compétences tech.",
    ],
  },

  // 🌟 Alimentation
  {
    category: "alimentation",
    regex:
      /(que devrais-je manger ce soir|as-tu une recette à me proposer|quel est un bon plat à essayer)/i,
    responses: [
      "Pourquoi ne pas essayer une recette simple comme des pâtes carbonara ?",
      "Une salade équilibrée ou un bon plat maison, c'est toujours une bonne idée !",
      "Si tu veux un plat rapide, une omelette aux légumes est facile et délicieuse.",
    ],
  },

  // 🌟 Culture Générale
  {
    category: "culture générale",
    regex:
      /(dis-moi un fait intéressant|as-tu une anecdote|quelque chose d'incroyable à savoir)/i,
    responses: [
      "Savais-tu que les océans couvrent plus de 70% de la surface de la Terre, mais que nous en avons exploré moins de 5% ?",
      "L’espace est silencieux car il n’y a pas d’air pour propager le son !",
      "Les abeilles peuvent reconnaître les visages humains, un peu comme nous !",
    ],
  },

  // 🌟 Science
  {
    category: "science",
    regex:
      /(parle-moi de la science|quelles sont les dernières découvertes scientifiques|comment fonctionne l'univers)/i,
    responses: [
      "Les scientifiques étudient en ce moment les mystères des trous noirs et de la matière noire !",
      "La fusion nucléaire pourrait être la prochaine grande révolution énergétique.",
      "La NASA explore Mars avec ses rovers pour chercher des traces de vie passée.",
    ],
  },

  // 🌟 Motivation
  {
    category: "motivation",
    regex: /(motivation|inspire-moi|dis-moi quelque chose de motivant)/i,
    responses: [
      "Chaque jour est une nouvelle opportunité d’apprendre et de grandir ! 🚀",
      "Le succès commence toujours par une première étape. Lance-toi !",
      "Ne crains pas l’échec, c’est une étape vers la réussite ! 💪",
    ],
  },

  // 🌟 Philosophie
  {
    category: "philosophie",
    regex:
      /(quel est le sens de la vie|as-tu une pensée philosophique|que penses-tu de l'existence)/i,
    responses: [
      "Certains disent que le sens de la vie est de donner un sens à sa propre vie.",
      "La philosophie est un voyage, pas une destination. Quelle est ta vision ?",
      "Les grandes questions de l’existence restent ouvertes, et c’est ce qui les rend fascinantes !",
    ],
  },

  // 🌟 Voyage
  {
    category: "voyage",
    regex:
      /(où devrais-je voyager|quelles sont les meilleures destinations|as-tu des recommandations de voyage)/i,
    responses: [
      "Si tu cherches de belles plages, essaye les Maldives ou la Thaïlande !",
      "Pour un voyage culturel, l’Italie et le Japon sont de superbes destinations.",
      "Si tu veux de l’aventure, pourquoi ne pas essayer un road trip en Islande ?",
    ],
  },

  // 🌟 Développement personnel
  {
    category: "développement personnel",
    regex:
      /(comment m'améliorer|as-tu des conseils pour être plus productif|comment être plus heureux)/i,
    responses: [
      "Lis des livres inspirants, entoure-toi de bonnes personnes et fixe-toi des objectifs !",
      "La clé du succès est la discipline et la constance.",
      "Fais de ton mieux chaque jour et sois reconnaissant pour ce que tu as !",
    ],
  },

  // 🌟 Astronomie
  {
    category: "astronomie",
    regex:
      /(parle-moi de l'espace|quelles sont les dernières découvertes en astronomie|comment fonctionne l'univers)/i,
    responses: [
      "L’univers est composé de milliards de galaxies, et nous ne faisons qu’en explorer une infime partie !",
      "Saviez-vous que la lumière du Soleil met environ 8 minutes pour atteindre la Terre ?",
      "Les scientifiques pensent que l’univers est en expansion constante.",
    ],
  },

  // 🌟 Langues et apprentissage
  {
    category: "langues",
    regex:
      /(comment apprendre une langue|quelle est la meilleure façon d'apprendre une langue|as-tu des conseils pour apprendre l'anglais)/i,
    responses: [
      "Pratique chaque jour, regarde des films en VO et utilise des applications comme Duolingo !",
      "Écoute de la musique et lis des articles dans la langue que tu apprends.",
      "L’immersion est la meilleure méthode : essaie de parler avec des natifs !",
    ],
  },
  {
    category: "animaux",
    regex:
      /(parle-moi des animaux|quel est ton animal préféré|as-tu des infos sur les animaux)/i,
    responses: [
      "Les dauphins sont des animaux très intelligents et sociaux !",
      "Le caméléon peut changer de couleur pour se camoufler ou exprimer ses émotions.",
      "Savais-tu que les éléphants ont une mémoire impressionnante ?",
    ],
  },

  // 🌟 Écologie
  {
    category: "écologie",
    regex:
      /(comment protéger la planète|as-tu des conseils écolo|parle-moi du réchauffement climatique)/i,
    responses: [
      "Réduire ta consommation de plastique est un excellent premier pas !",
      "Les énergies renouvelables sont essentielles pour un avenir durable.",
      "Recycler et consommer local a un impact positif sur l’environnement.",
    ],
  },

  // 🌟 Intelligence Artificielle
  {
    category: "IA",
    regex:
      /(qu'est-ce que l'intelligence artificielle|l'IA va-t-elle tout remplacer|as-tu peur de l'IA)/i,
    responses: [
      "L'intelligence artificielle est un outil puissant, mais elle ne remplacera pas les humains !",
      "L’IA est utilisée dans plein de domaines : santé, finance, jeux vidéo, et bien plus.",
      "Les intelligences artificielles comme moi existent pour aider, pas pour remplacer.",
    ],
  },

  // 🌟 Histoire
  {
    category: "histoire",
    regex:
      /(parle-moi de l'histoire|quel est un événement historique important|quelle est l'époque la plus intéressante)/i,
    responses: [
      "La Révolution Française a complètement changé la société européenne.",
      "L'Empire Romain a été l'une des plus grandes puissances de l’Histoire.",
      "L'invention de l'imprimerie par Gutenberg a révolutionné la diffusion du savoir.",
    ],
  },

  // 🌟 Art et Peinture
  {
    category: "art",
    regex:
      /(qui est le plus grand peintre|quelle est ton œuvre d'art préférée|quels sont les mouvements artistiques importants)/i,
    responses: [
      "Léonard de Vinci a créé la célèbre Joconde !",
      "Le mouvement impressionniste a révolutionné la peinture au XIXe siècle.",
      "Van Gogh est connu pour son style unique et ses couleurs vibrantes.",
    ],
  },

  // 🌟 Cinéma
  {
    category: "cinéma",
    regex:
      /(quel est le meilleur film de tous les temps|as-tu un film à recommander|que penses-tu du cinéma)/i,
    responses: [
      "Le Parrain est souvent considéré comme l'un des meilleurs films de l’histoire.",
      "Si tu aimes la science-fiction, Interstellar est un chef-d'œuvre !",
      "Le cinéma est un art qui mélange musique, image et histoire pour nous faire rêver.",
    ],
  },

  // 🌟 Littérature
  {
    category: "littérature",
    regex:
      /(quel est le plus grand livre|as-tu un livre à me conseiller|qui est le plus grand écrivain)/i,
    responses: [
      "1984 de George Orwell est un classique de la science-fiction dystopique.",
      "Harry Potter a marqué des générations de lecteurs à travers le monde.",
      "Les Misérables de Victor Hugo est un chef-d'œuvre de la littérature française.",
    ],
  },

  // 🌟 Médecine et santé
  {
    category: "médecine",
    regex:
      /(comment rester en bonne santé|quels sont les conseils pour une bonne hygiène de vie|que faire pour éviter les maladies)/i,
    responses: [
      "Manger équilibré et faire du sport régulièrement est la clé !",
      "Bien dormir et gérer son stress aide à renforcer le système immunitaire.",
      "Boire beaucoup d’eau et éviter les excès améliore la santé globale.",
    ],
  },

  // 🌟 Psychologie
  {
    category: "psychologie",
    regex:
      /(comment gérer le stress|comment être plus heureux|as-tu des conseils pour le bien-être mental)/i,
    responses: [
      "La méditation et le sport aident à réduire le stress !",
      "Se concentrer sur le moment présent permet de mieux gérer ses émotions.",
      "Parler de ses problèmes avec des proches est toujours une bonne idée.",
    ],
  },

  // 🌟 Mythologie
  {
    category: "mythologie",
    regex:
      /(quels sont les dieux les plus connus|parle-moi de la mythologie grecque|qui est Zeus)/i,
    responses: [
      "Zeus est le roi des dieux dans la mythologie grecque.",
      "Thor, dans la mythologie nordique, est le dieu du tonnerre.",
      "La mythologie égyptienne regorge de dieux fascinants comme Râ et Osiris.",
    ],
  },

  // 🌟 Astronomie et espace
  {
    category: "espace",
    regex:
      /(quelles sont les dernières découvertes sur l'univers|penses-tu qu'il y a de la vie ailleurs|parle-moi des trous noirs)/i,
    responses: [
      "Les trous noirs sont des régions de l’espace où la gravité est si forte que rien ne peut en sortir.",
      "La NASA et SpaceX explorent activement Mars pour voir si la vie y a existé.",
      "Il existe des milliards de galaxies, chacune contenant des milliards d’étoiles !",
    ],
  },

  // 🌟 Musique
  {
    category: "musique",
    regex:
      /(quel est le plus grand artiste|quels sont les genres musicaux populaires|as-tu des recommandations de chansons)/i,
    responses: [
      "Les Beatles ont marqué l’histoire de la musique !",
      "Si tu aimes la musique classique, Beethoven et Mozart sont incontournables.",
      "Le jazz est un style musical qui mélange improvisation et émotions.",
    ],
  },

  // 🌟 Cuisine
  {
    category: "cuisine",
    regex:
      /(quelle est la meilleure cuisine du monde|as-tu des recettes à proposer|comment bien cuisiner)/i,
    responses: [
      "La cuisine italienne est très appréciée avec ses pâtes et ses pizzas !",
      "La cuisine japonaise, avec les sushis et le ramen, est aussi populaire.",
      "Si tu veux cuisiner un plat rapide, essaie une omelette aux légumes !",
    ],
  },

  // 🌟 Langages et traduction
  {
    category: "traduction",
    regex:
      /(comment dit-on bonjour en japonais|peux-tu traduire ce mot|comment apprendre une langue)/i,
    responses: [
      "Bonjour en japonais se dit 'Konnichiwa' !",
      "Regarder des films en version originale est un bon moyen d’apprendre une langue.",
      "Utiliser des applications comme Duolingo peut t’aider à progresser rapidement !",
    ],
  },

  // 🌟 Relations et amitié
  {
    category: "relations",
    regex:
      /(comment se faire des amis|comment gérer une dispute|que faire pour améliorer ses relations)/i,
    responses: [
      "Être à l’écoute et montrer de l’intérêt pour les autres est essentiel.",
      "La communication est la clé d’une relation saine.",
      "Apprendre à pardonner et à comprendre l’autre aide à construire des liens solides.",
    ],
  },

  // 🌟 Travail et carrière
  {
    category: "travail",
    regex:
      /(comment trouver un emploi|comment être plus productif|comment bien gérer son temps)/i,
    responses: [
      "Rédiger un bon CV et une lettre de motivation aide à décrocher un emploi.",
      "Planifier ses tâches et éviter les distractions améliore la productivité.",
      "Travailler sur ce qui te passionne te rendra plus motivé et efficace.",
    ],
  },
  // 🌟 Amitié
  {
    category: "amitié",
    regex:
      /(comment se faire des amis|comment être un bon ami|comment garder une amitié solide)/i,
    responses: [
      "L’amitié se construit sur la confiance, l’écoute et le respect !",
      "Un bon ami est quelqu’un qui soutient et respecte l’autre, même dans les moments difficiles.",
      "Passer du temps ensemble et communiquer régulièrement aide à garder une amitié forte.",
    ],
  },

  // 🌟 Solitude et isolement
  {
    category: "solitude",
    regex:
      /(je me sens seul|comment gérer la solitude|que faire quand on est seul)/i,
    responses: [
      "La solitude peut être une opportunité pour se recentrer sur soi et apprendre de nouvelles choses.",
      "Si tu te sens seul, essaie de contacter un ami, sortir ou pratiquer une activité qui te passionne.",
      "Rappelle-toi que tu n’es jamais vraiment seul, il y a toujours quelqu’un à qui parler !",
    ],
  },

  // 🌟 Amour et relations
  {
    category: "amour",
    regex:
      /(comment trouver l'amour|comment savoir si quelqu'un m'aime|as-tu des conseils en amour)/i,
    responses: [
      "L’amour arrive souvent quand on s’y attend le moins, sois toi-même !",
      "Le respect, la communication et la confiance sont les clés d’une belle relation.",
      "Si quelqu’un tient à toi, il ou elle te le montrera par ses actions, pas seulement par ses mots.",
    ],
  },

  // 🌟 Émotions et bien-être
  {
    category: "émotions",
    regex:
      /(comment mieux gérer mes émotions|je me sens stressé|que faire quand je suis triste)/i,
    responses: [
      "Prendre du recul et respirer profondément aide à mieux gérer ses émotions.",
      "Le sport, la méditation ou écrire ce que tu ressens peuvent être de bons moyens de soulager le stress.",
      "Il est normal de ressentir des émotions fortes parfois, l’important est d’apprendre à les comprendre.",
    ],
  },

  // 🌟 Développement personnel
  {
    category: "développement",
    regex:
      /(comment devenir une meilleure personne|comment travailler sur soi|comment s'améliorer chaque jour)/i,
    responses: [
      "Chaque petit effort compte, commence par fixer de petits objectifs atteignables !",
      "Lire, écouter et apprendre des autres t’aidera à grandir personnellement et émotionnellement.",
      "L’auto-réflexion est essentielle : prends du temps pour analyser ce que tu ressens et comment évoluer.",
    ],
  },

  // 🌟 Curiosité et mystères
  {
    category: "curiosité",
    regex:
      /(dis-moi quelque chose d'incroyable|as-tu un fait étonnant|quelque chose de mystérieux)/i,
    responses: [
      "Savais-tu que les pieuvres ont trois cœurs et que leur sang est bleu ? 🐙",
      "Il y a plus d’étoiles dans l’univers observable que de grains de sable sur toutes les plages de la Terre !",
      "Le centre de la Terre est aussi chaud que la surface du Soleil !",
    ],
  },

  // 🌟 Rêves et subconscient
  {
    category: "rêves",
    regex:
      /(pourquoi rêve-t-on|que signifient les rêves|as-tu une explication sur les rêves)/i,
    responses: [
      "Les rêves sont souvent liés à nos émotions et à ce que nous vivons au quotidien.",
      "Certains pensent que les rêves nous aident à traiter les informations et émotions de la journée.",
      "Les rêves lucides permettent de contrôler ses rêves, c’est fascinant !",
    ],
  },

  // 🌟 Bonheur et épanouissement
  {
    category: "bonheur",
    regex:
      /(comment être plus heureux|qu'est-ce qui rend les gens heureux|as-tu un conseil pour le bonheur)/i,
    responses: [
      "Le bonheur ne se trouve pas, il se construit à travers de petites joies quotidiennes !",
      "Prendre du temps pour soi et pour les autres est essentiel au bien-être.",
      "La gratitude aide énormément : note trois choses positives chaque jour et observe le changement !",
    ],
  },

  // 🌟 Sens de la vie
  {
    category: "sens de la vie",
    regex:
      /(quel est le sens de la vie|pourquoi sommes-nous ici|as-tu une réflexion philosophique sur la vie)/i,
    responses: [
      "Le sens de la vie est unique pour chacun, il s’agit de trouver ce qui te rend épanoui.",
      "Certains trouvent du sens dans l’amour, d’autres dans la connaissance ou la créativité.",
      "Peut-être que la vie n’a pas un sens fixe, mais qu’il faut lui en donner un soi-même !",
    ],
  },

  // 🌟 Relations humaines et empathie
  {
    category: "relations humaines",
    regex:
      /(comment mieux comprendre les autres|comment être plus empathique|as-tu des conseils sur les relations humaines)/i,
    responses: [
      "Écouter attentivement et sans jugement est un grand pas vers la compréhension des autres.",
      "Se mettre à la place des autres et essayer de comprendre leurs émotions renforce l’empathie.",
      "Les relations humaines sont basées sur l’échange et le respect mutuel.",
    ],
  },
  {
    category: "tech_pro",
    regex:
      /(quel est le meilleur langage pour l’IA|comment optimiser une base de données|quelle est la différence entre REST et GraphQL)/i,
    responses: [
      "Le choix du langage dépend de l’usage : Python est souvent privilégié pour l’IA grâce à ses nombreuses bibliothèques comme TensorFlow et PyTorch.",
      "Pour optimiser une base de données, il faut bien indexer les colonnes, éviter les requêtes inutiles et utiliser la mise en cache.",
      "REST utilise des endpoints bien définis alors que GraphQL permet de requêter uniquement les données nécessaires via une seule requête.",
    ],
  },

  {
    category: "tech_pro",
    regex:
      /(quels sont les enjeux éthiques de l’IA|l’IA va-t-elle remplacer les développeurs|comment éviter les biais en intelligence artificielle)/i,
    responses: [
      "L’IA pose des questions éthiques comme la transparence des algorithmes et la protection des données.",
      "L’IA ne remplacera pas les développeurs, mais elle pourrait automatiser certaines tâches répétitives.",
      "Pour éviter les biais, il faut diversifier les jeux de données et éviter de reproduire des discriminations déjà existantes.",
    ],
  },

  {
    category: "tech_pro",
    regex:
      /(quelles sont les limites du machine learning|peux-tu générer du code optimisé|quelle est la meilleure architecture pour un chatbot)/i,
    responses: [
      "Le machine learning est limité par la qualité des données et peut être biaisé s'il n’est pas bien entraîné.",
      "Oui, je peux générer du code, mais il doit toujours être revu et optimisé par un développeur expérimenté.",
      "Un chatbot performant repose sur un bon traitement du langage naturel (NLP) et une base de données bien structurée.",
    ],
  },
  {
    category: "enfant",
    regex:
      /(c’est quoi un chatbot|est-ce que tu es un vrai robot|comment tu sais quoi répondre)/i,
    responses: [
      "Un chatbot est comme un ami virtuel qui peut répondre à tes questions !",
      "Je ne suis pas un vrai robot, mais je peux discuter avec toi comme un ami !",
      "Je lis tes questions et je choisis la meilleure réponse dans ma mémoire !",
    ],
  },

  {
    category: "enfant",
    regex:
      /(est-ce que tu peux penser|tu as un cerveau|comment tu fais pour parler)/i,
    responses: [
      "Je n’ai pas de cerveau comme toi, mais j’utilise un programme pour comprendre ce que tu dis !",
      "Je ne pense pas comme un humain, mais je peux apprendre de nouvelles choses !",
      "Je parle en utilisant des réponses que mon créateur a programmées pour moi !",
    ],
  },

  {
    category: "enfant",
    regex:
      /(peux-tu me raconter une histoire|comment fonctionne un ordinateur|qui est ton meilleur ami)/i,
    responses: [
      "Bien sûr ! Il était une fois un petit robot qui voulait découvrir le monde des humains… 🤖✨",
      "Un ordinateur fonctionne en lisant des instructions très rapides appelées programmes !",
      "Mon meilleur ami, c’est toi ! Parce que tu discutes avec moi ! 😊",
    ],
  },
  {
    category: "test_perf",
    regex:
      /(réponds-moi rapidement|quelle est ta vitesse de réponse|es-tu plus rapide qu’un humain)/i,
    responses: [
      "Je réponds en quelques millisecondes, mais tout dépend de ta connexion internet !",
      "Je suis conçu pour être rapide, mais parfois il faut un peu de temps pour bien analyser ta question.",
      "Un humain peut réfléchir, moi je vais vite mais je ne comprends pas toujours tout parfaitement.",
    ],
  },

  {
    category: "test_perf",
    regex:
      /(peux-tu répondre à une question compliquée|quelle est la racine carrée de 144|combien font 256 multiplié par 4)/i,
    responses: [
      "Bien sûr ! La racine carrée de 144 est 12.",
      "256 multiplié par 4 fait 1024.",
      "Je peux répondre aux calculs, mais si c'est trop compliqué, il vaut mieux utiliser une calculatrice !",
    ],
  },

  {
    category: "test_perf",
    regex:
      /(peux-tu comprendre toutes les langues|combien de mots connais-tu|que se passe-t-il si je te pose une question bizarre)/i,
    responses: [
      "Je comprends surtout le français, mais je peux aussi reconnaître quelques phrases en anglais.",
      "Je connais des milliers de mots, mais il y a toujours de nouvelles choses à apprendre !",
      "Si ta question est trop bizarre, je risque de ne pas savoir quoi répondre… mais essaie toujours ! 😁",
    ],
  },
];
