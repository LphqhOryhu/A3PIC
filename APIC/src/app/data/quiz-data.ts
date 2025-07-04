export interface Quiz {
  id: string;
  title: string;
  questions: {
    question: string;
    options: string[];
    answerIndexes: number[];
    multiple: boolean;
    source?: string;
    explanation: string;
  }[];
}

export const QUIZZES: Quiz[] = [
  {
    "id": "password",
    "title": "Créer un mot de passe",
    "questions": [
      {
        "question": "Plusieurs bonnes réponses : Quelles sont de bonnes pratiques pour créer un mot de passe sécurisé ?",
        "options": [
          "Utiliser une combinaison de lettres, chiffres et symboles",
          "Utiliser son prénom suivi de sa date de naissance",
          "Utiliser un gestionnaire de mots de passe",
          "Choisir un mot de passe long et unique"
        ],
        "answerIndexes": [
          0,
          2,
          3
        ],
        "multiple": true,
        "source": "CNIL - Guide des mots de passe (https://www.cnil.fr/fr/generer-un-mot-de-passe-solide)",
        "explanation": "Un mot de passe sécurisé est long, complexe, et unique. Il doit éviter les infos personnelles. L'utilisation d'un gestionnaire est fortement conseillée."
      },
      {
        "question": "Une seule bonne réponse : Lequel de ces mots de passe est le plus sécurisé ?",
        "options": [
          "123456",
          "motdepasse",
          "Az3!kL9%",
          "abcdef"
        ],
        "answerIndexes": [
          2
        ],
        "multiple": false,
        "source": "CNIL - Bonnes pratiques pour les mots de passe (https://www.cnil.fr/fr/mot-de-passe)",
        "explanation": "Un bon mot de passe contient lettres, chiffres et caractères spéciaux. Évitez les suites logiques ou mots communs."
      },
      {
        "question": "Une seule bonne réponse : Quelle pratique est déconseillée ?",
        "options": [
          "Changer de mot de passe régulièrement",
          "Réutiliser le même mot de passe sur plusieurs sites",
          "Utiliser l’authentification à deux facteurs",
          "Utiliser une phrase secrète comme mot de passe"
        ],
        "answerIndexes": [
          1
        ],
        "multiple": false,
        "source": "ANSSI - Recommandations sur l’authentification (https://www.ssi.gouv.fr/publication/recommandations-relatives-a-lauthentification-multifacteur/)",
        "explanation": "Réutiliser un mot de passe sur plusieurs sites augmente fortement les risques en cas de fuite de données."
      },
      {
        "question": "Une seule bonne réponse : Pourquoi est-il déconseillé d’utiliser des mots de passe comme \"123456\" ou \"qwerty\" ?",
        "options": [
          "Ils sont trop longs",
          "Ils sont difficiles à retenir",
          "Ils sont souvent les premiers testés lors des attaques",
          "Ils sont interdits par la CNIL"
        ],
        "answerIndexes": [
          2
        ],
        "multiple": false,
        "source": "CNIL - Mots de passe les plus piratés (https://www.cnil.fr/fr/les-100-mots-de-passe-les-plus-utilises-et-les-plus-vulnerables)",
        "explanation": "Ces mots de passe sont trop communs et figurent souvent en haut des listes testées par les pirates."
      },
      {
        "question": "Plusieurs bonnes réponses : Quelles stratégies facilitent la mémorisation de mots de passe complexes ?",
        "options": [
          "Créer une phrase mnémotechnique",
          "Utiliser uniquement des chiffres",
          "Utiliser des premières lettres d’une phrase connue",
          "Associer des mots inattendus entre eux"
        ],
        "answerIndexes": [
          0,
          2,
          3
        ],
        "multiple": true,
        "source": "CNIL - Astuces pour retenir ses mots de passe (https://www.cnil.fr/fr/mot-de-passe/conseils-pour-se-souvenir)",
        "explanation": "Utiliser une phrase mnémotechnique ou des mots inattendus permet de créer un mot de passe complexe mais mémorisable."
      },
      {
        "question": "Une seule bonne réponse : Quel outil permet de générer et stocker ses mots de passe en toute sécurité ?",
        "options": [
          "Un carnet papier caché",
          "Un gestionnaire de mots de passe",
          "Un fichier texte nommé \"mdp.txt\" sur le bureau",
          "Un email envoyé à soi-même"
        ],
        "answerIndexes": [
          1
        ],
        "multiple": false,
        "source": "CNIL - Gestionnaires de mots de passe (https://www.cnil.fr/fr/les-gestionnaires-de-mots-de-passe)",
        "explanation": "Un gestionnaire de mots de passe stocke et crée des mots de passe forts, à retenir seulement avec un mot de passe maître."
      },
      {
        "question": "Une seule bonne réponse : Que signifie \"authentification à deux facteurs\" ?",
        "options": [
          "Utiliser deux mots de passe différents pour un même site",
          "S’authentifier avec un mot de passe + un autre élément (ex : code par SMS)",
          "Changer son mot de passe deux fois par mois",
          "Avoir deux comptes différents pour le même service"
        ],
        "answerIndexes": [
          1
        ],
        "multiple": false,
        "source": "ANSSI - Authentification multifacteur (https://www.ssi.gouv.fr/publication/recommandations-relatives-a-lauthentification-multifacteur/)",
        "explanation": "L’authentification à deux facteurs combine un mot de passe avec un code reçu ou un appareil de confiance, renforçant la sécurité."
      },
      {
        "question": "Plusieurs bonnes réponses : Quels sont les risques liés à l’utilisation du même mot de passe partout ?",
        "options": [
          "Si un site est piraté, tous vos comptes deviennent vulnérables",
          "C’est plus simple à retenir donc plus sécurisé",
          "Un mot de passe unique facilite les attaques en cascade",
          "Les pirates peuvent tester ce mot de passe sur d’autres sites automatiquement"
        ],
        "answerIndexes": [
          0,
          2,
          3
        ],
        "multiple": true,
        "source": "CNIL - Réutilisation des mots de passe (https://www.cnil.fr/fr/mot-de-passe-les-bonnes-pratiques)",
        "explanation": "Réutiliser un mot de passe rend tous les comptes vulnérables si l’un d’eux est compromis."
      },
      {
        "question": "Une seule bonne réponse : Qu’est-ce qu’un mot de passe \"fort\" selon la CNIL ?",
        "options": [
          "Un mot de passe avec au moins 8 caractères simples",
          "Un mot de passe facile à retenir",
          "Un mot de passe long, complexe et unique",
          "Un mot de passe contenant uniquement des chiffres"
        ],
        "answerIndexes": [
          2
        ],
        "multiple": false,
        "source": "CNIL - Générer un mot de passe solide (https://www.cnil.fr/fr/generer-un-mot-de-passe-solide)",
        "explanation": "Voir la source indiquée pour comprendre pourquoi cette réponse est correcte."
      },
      {
        "question": "Une seule bonne réponse : Pourquoi les gestionnaires de mots de passe sont-ils recommandés ?",
        "options": [
          "Ils permettent de partager facilement ses mots de passe avec ses amis",
          "Ils permettent d’enregistrer des mots de passe faibles",
          "Ils évitent de devoir retenir plusieurs mots de passe complexes",
          "Ils remplacent complètement l’authentification"
        ],
        "answerIndexes": [
          2
        ],
        "multiple": false,
        "source": "CNIL - Gestionnaires de mots de passe (https://www.cnil.fr/fr/les-gestionnaires-de-mots-de-passe)",
        "explanation": "Ces outils permettent de retenir un seul mot de passe maître et stocker les autres de façon sécurisée."
      }
    ]
  },
  {
    "id": "trust",
    "title": "À qui faire confiance ?",
    "questions": [
      {
        "question": "Plusieurs bonnes réponses : Quels comportements permettent d’éviter les tentatives d’arnaque ?",
        "options": [
          "Ignorer les messages suspects",
          "Vérifier l’adresse email de l’expéditeur",
          "Cliquer immédiatement sur les liens inconnus",
          "Contacter directement l’organisme officiel si on a un doute"
        ],
        "answerIndexes": [
          0,
          1,
          3
        ],
        "multiple": true,
        "source": "CNIL - Conseils pour éviter le phishing",
        "explanation": "Vérifier l’expéditeur, ignorer les messages suspects et contacter les organismes par des canaux officiels sont des bons réflexes."
      },
      {
        "question": "Une seule bonne réponse : Un message vous annonce un gain alors que vous n’avez rien fait. Que faire ?",
        "options": [
          "Cliquer sur le lien pour voir",
          "Ignorer ou signaler le message",
          "Répondre pour refuser le gain",
          "Envoyer vos coordonnées pour vérifier"
        ],
        "answerIndexes": [
          1
        ],
        "multiple": false,
        "source": "Service Public - Arnaques par SMS ou email",
        "explanation": "Ne jamais cliquer ni transmettre de données personnelles sans vérification : c’est une méthode classique d’arnaque."
      },
      {
        "question": "Une seule bonne réponse : Une personne inconnue vous demande votre mot de passe. Que faire ?",
        "options": [
          "Le partager si la personne dit travailler dans l’informatique",
          "Vérifier son identité sur les réseaux sociaux",
          "Lui dire poliment non et signaler la demande",
          "Créer un mot de passe temporaire"
        ],
        "answerIndexes": [
          2
        ],
        "multiple": false,
        "source": "CNIL - Bonnes pratiques de sécurité en ligne",
        "explanation": "Ne partagez jamais votre mot de passe, même à quelqu’un disant être un professionnel. Cela peut être une tentative de phishing."
      },
      {
        "question": "Une seule bonne réponse : Quel est un signe courant d’une tentative de phishing (hameçonnage) ?",
        "options": [
          "Un message d’un proche avec des fautes d’orthographe inhabituelles",
          "Une adresse email comportant votre prénom",
          "Un message de votre banque vous appelant par votre nom complet",
          "Un lien vers un site sécurisé (https://) uniquement"
        ],
        "answerIndexes": [
          0
        ],
        "multiple": false,
        "source": "CNIL - Reconnaître un message frauduleux (https://www.cnil.fr/fr/phishing-comment-reconnaitre-un-message-frauduleux)",
        "explanation": "Les fautes d’orthographe, les demandes urgentes ou les messages inattendus sont souvent des signes de phishing."
      },
      {
        "question": "Plusieurs bonnes réponses : Que peut-on faire pour vérifier qu’un site est fiable avant de renseigner des informations ?",
        "options": [
          "Vérifier que l’adresse du site commence par https://",
          "Chercher des avis récents sur internet",
          "Donner ses infos puis vérifier après",
          "Vérifier l’identité de l’entreprise ou de l’organisme"
        ],
        "answerIndexes": [
          0,
          1,
          3
        ],
        "multiple": true,
        "source": "Cybermalveillance.gouv.fr - Vérifier un site web",
        "explanation": "On peut vérifier l’identité du site, chercher des avis récents et s'assurer que l’URL est correcte (https://, mentions légales...)."
      },
      {
        "question": "Une seule bonne réponse : Vous recevez un appel d’un soi-disant conseiller bancaire vous demandant un code reçu par SMS. Que faire ?",
        "options": [
          "Donner le code si l’appel semble sérieux",
          "Raccrocher et appeler votre banque via le numéro officiel",
          "Donner uniquement votre nom et prénom",
          "Envoyer un email à votre banque avec le code"
        ],
        "answerIndexes": [
          1
        ],
        "multiple": false,
        "source": "Cybermalveillance.gouv.fr - Faux conseiller bancaire (https://www.cybermalveillance.gouv.fr/actualites/alerte-faux-conseillers-bancaires)",
        "explanation": "Les banques ne demandent jamais de codes confidentiels par téléphone. Il faut raccrocher et appeler soi-même le bon numéro."
      },
      {
        "question": "Une seule bonne réponse : Un site vous demande de vous connecter avec votre compte Google pour obtenir une réduction. Que faire ?",
        "options": [
          "Accepter si le site semble professionnel",
          "Vérifier que le site est bien celui de Google avant de se connecter",
          "Entrer son mot de passe Google directement sur le site",
          "Utiliser le même mot de passe que d’habitude"
        ],
        "answerIndexes": [
          1
        ],
        "multiple": false,
        "source": "Google - Conseils de sécurité (https://safety.google/intl/fr_fr/security-tips/)",
        "explanation": "Voir la source indiquée pour comprendre pourquoi cette réponse est correcte."
      }
    ]
  },
  {
    "id": "websites",
    "title": "Quels sites sont fiables ?",
    "questions": [
      {
        "question": "Une seule bonne réponse : Quel élément indique qu’un site est sécurisé ?",
        "options": [
          "Présence d’un cadenas dans la barre d’adresse",
          "Des couleurs vives et un design moderne",
          "Un chargement rapide",
          "Un grand logo animé"
        ],
        "answerIndexes": [
          0
        ],
        "multiple": false,
        "source": "CNIL - Conseils pour acheter en ligne en sécurité",
        "explanation": "Le cadenas ou le protocole HTTPS montre que les données envoyées sont chiffrées, mais ce n’est pas une garantie de fiabilité."
      },
      {
        "question": "Plusieurs bonnes réponses : Quels éléments peuvent vous alerter sur un site frauduleux ?",
        "options": [
          "Une URL étrange ou mal orthographiée",
          "Des fautes d’orthographe nombreuses",
          "Un formulaire qui demande immédiatement des informations sensibles",
          "Un site sans politique de confidentialité"
        ],
        "answerIndexes": [
          0,
          1,
          2,
          3
        ],
        "multiple": true,
        "source": "CNIL - Signes d’un site frauduleux",
        "explanation": "Des erreurs d’orthographe, des URL bizarres, l’absence de mentions légales ou une pression à donner ses infos sont des signaux."
      },
      {
        "question": "Une seule bonne réponse : Comment vérifier si un site e-commerce est fiable ?",
        "options": [
          "Demander à un influenceur s’il l’a déjà utilisé",
          "Lire les avis, vérifier les mentions légales et les CGV",
          "Acheter d’abord un petit produit pour voir",
          "Consulter ses publicités sur Instagram"
        ],
        "answerIndexes": [
          1
        ],
        "multiple": false,
        "source": "DGCCRF - Vérifier un site marchand",
        "explanation": "Il faut vérifier les mentions légales, les conditions de vente et la réputation du site avant tout achat."
      },
      {
        "question": "Une seule bonne réponse : Que signifie le \"https://\" au début d’un site web ?",
        "options": [
          "Que le site est hébergé en France",
          "Que le site est certifié par le gouvernement",
          "Que les échanges de données sont chiffrés",
          "Que le site est ouvert 24h/24"
        ],
        "answerIndexes": [
          2
        ],
        "multiple": false,
        "source": "CNIL - HTTPS et sécurité des données (https://www.cnil.fr/fr/le-https-pour-un-site-web-plus-sur)",
        "explanation": "Le 's' dans HTTPS signifie que la communication entre vous et le site est chiffrée, ce qui renforce la sécurité."
      },
      {
        "question": "Plusieurs bonnes réponses : Avant de faire un achat en ligne, que faut-il vérifier ?",
        "options": [
          "La présence de mentions légales et d’une adresse physique",
          "Les conditions de retour ou de remboursement",
          "La présence de photos de célébrités",
          "La clarté des conditions générales de vente (CGV)"
        ],
        "answerIndexes": [
          0,
          1,
          3
        ],
        "multiple": true,
        "source": "DGCCRF - Acheter en ligne en toute sécurité (https://www.economie.gouv.fr/dgccrf/Achat-en-ligne-les-bonnes-pratiques)",
        "explanation": "Voir la source indiquée pour comprendre pourquoi cette réponse est correcte."
      },
      {
        "question": "Une seule bonne réponse : Quelle extension de nom de domaine peut être utilisée par un site frauduleux ?",
        "options": [
          ".gov uniquement",
          "Aucune, toutes les extensions peuvent être utilisées",
          ".fr uniquement",
          ".org uniquement"
        ],
        "answerIndexes": [
          1
        ],
        "multiple": false,
        "source": "Cybermalveillance.gouv.fr - Arnaques et faux sites (https://www.cybermalveillance.gouv.fr/diagnostic/arnaques-informatiques)",
        "explanation": "Des erreurs d’orthographe, des URL bizarres, l’absence de mentions légales ou une pression à donner ses infos sont des signaux."
      },
      {
        "question": "Une seule bonne réponse : Un site vous propose des produits très chers à des prix dérisoires. Que faire ?",
        "options": [
          "Profiter vite de l’offre avant qu’elle expire",
          "Payer avec sa carte bancaire pour sécuriser l’achat",
          "Vérifier l’URL, les mentions légales et chercher des avis",
          "Créer un compte pour recevoir d’autres offres"
        ],
        "answerIndexes": [
          2
        ],
        "multiple": false,
        "source": "CNIL + DGCCRF - Reconnaître une arnaque en ligne",
        "explanation": "Des prix trop beaux pour être vrais sont souvent une arnaque. Il faut vérifier l’identité du vendeur avant d’acheter."
      }
    ]
  },
  {
    "id": "cyberbullying",
    "title": "Cyberharcèlement : que faire ?",
    "questions": [
      {
        "question": "Une seule bonne réponse : Quel comportement constitue du cyberharcèlement ?",
        "options": [
          "Envoyer une blague à un ami",
          "Répondre sèchement à un message",
          "Répéter des moqueries ou insultes sur une personne",
          "Bloquer quelqu’un qui vous importune"
        ],
        "answerIndexes": [
          2
        ],
        "multiple": false,
        "source": "CNIL - Comprendre le cyberharcèlement",
        "explanation": "Le cyberharcèlement se caractérise par des insultes ou moqueries répétées. Il est puni par la loi."
      },
      {
        "question": "Plusieurs bonnes réponses : Que faire si vous êtes témoin ou victime de cyberharcèlement ?",
        "options": [
          "Conserver les preuves (captures, messages...)",
          "En parler à un adulte ou à une personne de confiance",
          "Signaler le compte ou le contenu",
          "Ignorer toujours les attaques sans agir"
        ],
        "answerIndexes": [
          0,
          1,
          2
        ],
        "multiple": true,
        "source": "Service Public - Réagir au harcèlement en ligne",
        "explanation": "Le cyberharcèlement se caractérise par des insultes ou moqueries répétées. Il est puni par la loi."
      },
      {
        "question": "Une seule bonne réponse : Quelle action est recommandée si quelqu’un vous insulte en ligne ?",
        "options": [
          "Répondre en insultant aussi",
          "Supprimer vos comptes",
          "Bloquer la personne et signaler son comportement",
          "Partager les messages à vos amis pour les faire rire"
        ],
        "answerIndexes": [
          2
        ],
        "multiple": false,
        "source": "CNIL - Protéger sa vie en ligne",
        "explanation": "La meilleure réaction est de bloquer, signaler et ignorer. Répondre alimente le conflit et peut aggraver la situation."
      },
      {
        "question": "Une seule bonne réponse : Le cyberharcèlement est puni par la loi. Que risque l’auteur ?",
        "options": [
          "Une simple suppression de son compte",
          "Un rappel à l’ordre uniquement",
          "Des sanctions pouvant aller jusqu’à de la prison",
          "Rien, car c’est sur Internet"
        ],
        "answerIndexes": [
          2
        ],
        "multiple": false,
        "source": "Service-Public.fr - Cyberharcèlement (https://www.service-public.fr/particuliers/vosdroits/F32239)",
        "explanation": "Le cyberharcèlement se caractérise par des insultes ou moqueries répétées. Il est puni par la loi."
      },
      {
        "question": "Plusieurs bonnes réponses : Quelles plateformes ou services peuvent vous aider en cas de cyberharcèlement ?",
        "options": [
          "Le 3018 (numéro national contre le harcèlement)",
          "Les services de signalement des réseaux sociaux",
          "La gendarmerie ou la police",
          "Les forums anonymes non modérés"
        ],
        "answerIndexes": [
          0,
          1,
          2
        ],
        "multiple": true,
        "source": "e-Enfance - https://www.e-enfance.org/ et 3018.fr",
        "explanation": "Le cyberharcèlement se caractérise par des insultes ou moqueries répétées. Il est puni par la loi."
      },
      {
        "question": "Une seule bonne réponse : Que faire si un camarade subit des moqueries en ligne de manière répétée ?",
        "options": [
          "Partager pour dénoncer publiquement le harceleur",
          "Lui conseiller de quitter Internet",
          "Lui dire de se défendre seul",
          "Lui proposer votre soutien et en parler à un adulte"
        ],
        "answerIndexes": [
          3
        ],
        "multiple": false,
        "source": "CNIL - Agir contre le harcèlement (https://www.cnil.fr/fr/cyberharcelement-les-jeunes-face-aux-risques-dinternet)",
        "explanation": "Le soutien humain est essentiel. Il faut en parler et aider la personne à se défendre légalement et émotionnellement."
      },
      {
        "question": "Plusieurs bonnes réponses : Quelles attitudes peuvent aider à prévenir le cyberharcèlement ?",
        "options": [
          "Faire attention à ce qu’on publie sur les autres",
          "Respecter la vie privée des autres",
          "Participer aux moqueries pour ne pas être exclu",
          "Réfléchir avant de commenter ou partager en ligne"
        ],
        "answerIndexes": [
          0,
          1,
          3
        ],
        "multiple": true,
        "source": "Internet Sans Crainte - Guide du respect en ligne (https://www.internetsanscrainte.fr/)",
        "explanation": "Le cyberharcèlement se caractérise par des insultes ou moqueries répétées. Il est puni par la loi."
      }
    ]
  }
];
