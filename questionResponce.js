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
];
