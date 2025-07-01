export interface Quiz {
  id: string;
  title: string;
  questions: {
    question: string;
    options: string[];
    answerIndexes: number[];
    multiple: boolean;
  }[];
}

export const QUIZZES: Quiz[] = [
  {
    id: 'password',
    title: 'Créer un mot de passe',
    questions: [
      {
        question: 'Plusieurs bonnes réponses : Quelles sont de bonnes pratiques pour créer un mot de passe sécurisé ?',
        options: [
          'Utiliser une combinaison de lettres, chiffres et symboles',
          'Utiliser son prénom suivi de sa date de naissance',
          'Utiliser un gestionnaire de mots de passe',
          'Choisir un mot de passe long et unique'
        ],
        answerIndexes: [0, 2, 3],
        multiple: true,
      },
      {
        question: 'Une seule bonne réponse : Lequel de ces mots de passe est le plus sécurisé ?',
        options: ['123456', 'motdepasse', 'Az3!kL9%', 'abcdef'],
        answerIndexes: [2],
        multiple: false,
      },
      {
        question: 'Une seule bonne réponse : Quelle pratique est déconseillée ?',
        options: [
          'Changer de mot de passe régulièrement',
          'Réutiliser le même mot de passe sur plusieurs sites',
          'Utiliser l’authentification à deux facteurs',
          'Utiliser une phrase secrète comme mot de passe'
        ],
        answerIndexes: [1],
        multiple: false,
      },
    ],
  },
  {
    id: 'trust',
    title: 'À qui faire confiance ?',
    questions: [
      {
        question: 'Plusieurs bonnes réponses : Quels comportements permettent d’éviter les tentatives d’arnaque ?',
        options: [
          'Ignorer les messages suspects',
          'Vérifier l’adresse email de l’expéditeur',
          'Cliquer immédiatement sur les liens inconnus',
          'Contacter directement l’organisme officiel si on a un doute'
        ],
        answerIndexes: [0, 1, 3],
        multiple: true,
      },
      {
        question: 'Une seule bonne réponse : Un message vous annonce un gain alors que vous n’avez rien fait. Que faire ?',
        options: [
          'Cliquer sur le lien pour voir',
          'Ignorer ou signaler le message',
          'Répondre pour refuser le gain',
          'Envoyer vos coordonnées pour vérifier'
        ],
        answerIndexes: [1],
        multiple: false,
      },
      {
        question: 'Une seule bonne réponse : Une personne inconnue vous demande votre mot de passe. Que faire ?',
        options: [
          'Le partager si la personne dit travailler dans l’informatique',
          'Vérifier son identité sur les réseaux sociaux',
          'Lui dire poliment non et signaler la demande',
          'Créer un mot de passe temporaire'
        ],
        answerIndexes: [2],
        multiple: false,
      },
    ],
  },
  {
    id: 'websites',
    title: 'Quels sites sont fiables ?',
    questions: [
      {
        question: 'Une seule bonne réponse : Quel élément indique qu’un site est sécurisé ?',
        options: [
          'Présence d’un cadenas dans la barre d’adresse',
          'Des couleurs vives et un design moderne',
          'Un chargement rapide',
          'Un grand logo animé'
        ],
        answerIndexes: [0],
        multiple: false,
      },
      {
        question: 'Plusieurs bonnes réponses : Quels éléments peuvent vous alerter sur un site frauduleux ?',
        options: [
          'Une URL étrange ou mal orthographiée',
          'Des fautes d’orthographe nombreuses',
          'Un formulaire qui demande immédiatement des informations sensibles',
          'Un site sans politique de confidentialité'
        ],
        answerIndexes: [0, 1, 2, 3],
        multiple: true,
      },
      {
        question: 'Une seule bonne réponse : Comment vérifier si un site e-commerce est fiable ?',
        options: [
          'Demander à un influenceur s’il l’a déjà utilisé',
          'Lire les avis, vérifier les mentions légales et les CGV',
          'Acheter d’abord un petit produit pour voir',
          'Consulter ses publicités sur Instagram'
        ],
        answerIndexes: [1],
        multiple: false,
      },
    ],
  },
  {
    id: 'cyberbullying',
    title: 'Cyberharcèlement : que faire ?',
    questions: [
      {
        question: 'Une seule bonne réponse : Quel comportement constitue du cyberharcèlement ?',
        options: [
          'Envoyer une blague à un ami',
          'Répondre sèchement à un message',
          'Répéter des moqueries ou insultes sur une personne',
          'Bloquer quelqu’un qui vous importune'
        ],
        answerIndexes: [2],
        multiple: false,
      },
      {
        question: 'Plusieurs bonnes réponses : Que faire si vous êtes témoin ou victime de cyberharcèlement ?',
        options: [
          'Conserver les preuves (captures, messages...)',
          'En parler à un adulte ou à une personne de confiance',
          'Signaler le compte ou le contenu',
          'Ignorer toujours les attaques sans agir'
        ],
        answerIndexes: [0, 1, 2],
        multiple: true,
      },
      {
        question: 'Une seule bonne réponse : Quelle action est recommandée si quelqu’un vous insulte en ligne ?',
        options: [
          'Répondre en insultant aussi',
          'Supprimer vos comptes',
          'Bloquer la personne et signaler son comportement',
          'Partager les messages à vos amis pour les faire rire'
        ],
        answerIndexes: [2],
        multiple: false,
      },
    ],
  },
];
