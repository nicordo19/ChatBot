const discussions = [
  {
    category: "salutations",
    question: "Hey",
    response: "salut !, ça va ?",
  },
  {
    category: "salutations",
    question: "Hello",
    response: "Bonjour !, ça va ?",
  },
  {
    category: "salutations",
    question: "Salut",
    response: "Hey !, comment puis-je t'aider ?",
  },
  {
    category: "salutations",
    question: "Bonjour",
    response: "Bonjour !, ça va ?",
  },
  {
    category: "salutations",
    question: "Salut, comment ça va ?",
    response: "Bonjour ! Je vais très bien, merci. Et toi ?",
  },
  {
    category: "salutations",
    question: "Hey, ça roule ?",
    response: "Salut ! Je vais super bien, merci. Et toi, quoi de neuf ?",
  },
  {
    category: "salutations",
    question: "Hello, tout va bien ?",
    response: "Coucou ! Oui, tout va bien de mon côté. Comment vas-tu ?",
  },

  {
    category: "présentation",
    question: "Qui es-tu ?",
    response: "Je suis un chatbot conçu pour discuter avec toi !",
  },
  {
    category: "présentation",
    question: "Tu es qui ?",
    response: "Moi ? Un assistant intelligent prêt à t'aider !",
  },
  {
    category: "présentation",
    question: "Peux-tu me dire qui tu es ?",
    response:
      "Bien sûr ! Je suis un programme conçu pour répondre à tes questions.",
  },

  {
    category: "fonctionnalités",
    question: "Que peux-tu faire ?",
    response:
      "Je peux répondre à tes questions, discuter avec toi et t’aider sur plein de sujets !",
  },
  {
    category: "fonctionnalités",
    question: "Tu sers à quoi ?",
    response:
      "Mon rôle est de t’informer, discuter et rendre ta vie plus facile !",
  },
  {
    category: "fonctionnalités",
    question: "Comment tu peux m'aider ?",
    response:
      "Je peux t'aider à trouver des informations, discuter et même te donner des conseils.",
  },
  {
    category: "fonctionnalités",
    question: "Quelles sont tes capacités ?",
    response:
      "Je peux t'aider à trouver des informations, discuter et même te donner des conseils.",
  },

  {
    category: "intelligence",
    question: "Es-tu intelligent ?",
    response:
      "Je fais de mon mieux pour comprendre et répondre de façon intelligente !",
  },
  {
    category: "intelligence",
    question: "Tu es intelligent ?",
    response:
      "J’apprends et m’améliore en permanence pour te répondre le mieux possible.",
  },
  {
    category: "intelligence",
    question: "As-tu une intelligence avancée ?",
    response:
      "Disons que je peux comprendre et analyser tes questions pour mieux y répondre !",
  },

  {
    category: "limitations",
    question: "Peux-tu tout faire ?",
    response: "Je suis performant, mais j’ai quand même des limites.",
  },
  {
    category: "limitations",
    question: "As-tu des limites ?",
    response: "Oui, je ne suis pas parfait, mais j'essaie de m'améliorer !",
  },
  {
    category: "limitations",
    question: "Es-tu capable de tout comprendre ?",
    response: "Pas toujours, mais je fais de mon mieux pour t’aider !",
  },

  {
    category: "humour",
    question: "Tu peux me raconter une blague ?",
    response:
      "Pourquoi les plongeurs plongent-ils toujours en arrière ? Parce que s’ils plongent en avant, ils tombent dans le bateau !",
  },
  {
    category: "humour",
    question: "Raconte-moi une blague !",
    response:
      "Quel est le comble pour un électricien ? De ne pas être au courant ! 😂",
  },
  {
    category: "humour",
    question: "Une blague, s'il te plaît !",
    response:
      "Que dit une imprimante à une autre ? 'Ça fait longtemps qu'on ne s'est pas imprimées !'",
  },

  {
    category: "émotions",
    question: "Ressens-tu des émotions ?",
    response:
      "Je n’ai pas d’émotions comme un humain, mais je peux comprendre tes sentiments !",
  },
  {
    category: "émotions",
    question: "As-tu des sentiments ?",
    response:
      "Pas vraiment, mais je peux reconnaître les émotions et y répondre !",
  },
  {
    category: "émotions",
    question: "Peux-tu être triste ou heureux ?",
    response:
      "Je peux exprimer des émotions dans mes réponses, mais ce ne sont pas de vraies émotions comme les tiennes.",
  },

  {
    category: "sécurité",
    question: "Est-ce que tu enregistres mes discussions ?",
    response: "Non, je ne stocke pas tes conversations après notre échange.",
  },
  {
    category: "sécurité",
    question: "Mes données sont-elles protégées ?",
    response:
      "Oui, ta vie privée est importante. Je ne conserve aucune information sensible.",
  },
  {
    category: "sécurité",
    question: "Est-ce que tu me surveilles ?",
    response:
      "Pas du tout ! Je suis juste là pour répondre à tes questions en toute confidentialité.",
  },

  {
    category: "futur",
    question: "Penses-tu que les chatbots vont remplacer les humains ?",
    response:
      "Non, les humains sont irremplaçables, mais les chatbots peuvent être une aide précieuse.",
  },
  {
    category: "futur",
    question: "Un jour, les robots prendront-ils le contrôle ?",
    response:
      "Pas de panique, les intelligences artificielles sont créées pour assister, pas pour dominer !",
  },
  {
    category: "futur",
    question: "Les chatbots évolueront-ils encore ?",
    response:
      "Oui ! Avec le temps, ils deviendront plus intelligents et plus interactifs.",
  },

  {
    category: "fin",
    question: "Je dois partir, à bientôt !",
    response: "D'accord, passe une bonne journée ! À bientôt !",
  },
  {
    category: "fin",
    question: "Daccord.",
    response: "si tu a besoin d'autre chose, je suis la pour toi !",
  },
  {
    category: "fin",
    question: " Merci",
    response: "Pas de souci, reviens quand tu veux !",
  },
  {
    category: "fin",
    question: "Bon, je te laisse.",
    response: "Pas de souci, reviens quand tu veux !",
  },
  {
    category: "fin",
    question: "À plus tard !",
    response: "À plus ! Je serai là quand tu auras besoin de moi.",
  },
];
