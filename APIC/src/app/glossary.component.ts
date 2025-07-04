import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface GlossaryEntry {
  term: string;
  definition: string;
}

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './glossary.component.html',
})
export class GlossaryComponent {
  searchTerm = '';

  glossary: GlossaryEntry[] = [
    { term: 'Mot de passe sécurisé', definition: 'Un mot de passe difficile à deviner (long, complexe et unique).' },
    { term: 'Gestionnaire de mots de passe', definition: 'Logiciel qui stocke et génère automatiquement des mots de passe.' },
    { term: 'Phrase mnémotechnique', definition: 'Petite phrase inventée qui aide à se souvenir d’un mot de passe.' },
    { term: 'Authentification à deux facteurs (2FA)', definition: 'Méthode de sécurité qui demande un code en plus du mot de passe.' },
    { term: 'Mot de passe maître', definition: 'Le seul mot de passe à retenir pour accéder à tous les autres dans un gestionnaire.' },
    { term: 'Attaque en cascade', definition: 'Si un mot de passe est volé sur un site, il peut être testé sur d’autres automatiquement.' },
    { term: 'Caractères spéciaux', definition: 'Symboles comme !, @, #, %, utilisés pour rendre un mot de passe plus fort.' },
    { term: 'Phishing / Hameçonnage', definition: 'Arnaque qui tente de voler vos infos personnelles par email ou SMS.' },
    { term: 'Adresse email de l’expéditeur', definition: 'L\'email de la personne qui vous envoie un message (à vérifier attentivement).' },
    { term: 'Organisme officiel', definition: 'Une vraie entreprise ou administration identifiable (ex : banque, impôts).' },
    { term: 'Conseiller bancaire frauduleux', definition: 'Personne qui se fait passer pour un employé de banque pour vous arnaquer.' },
    { term: 'Compte Google', definition: 'Identifiant utilisé pour accéder aux services Google (Gmail, YouTube…).' },
    { term: 'HTTPS / Cadenas', definition: 'Signe que la connexion au site est chiffrée (plus sécurisé).' },
    { term: 'Mentions légales / CGV', definition: 'Informations obligatoires d’un site (identité, conditions de vente…).' },
    { term: 'Extension de domaine', definition: 'Partie finale d’une adresse web (ex : .com, .fr, .org).' },
    { term: 'Site frauduleux', definition: 'Faux site qui tente de vous voler ou arnaquer.' },
    { term: 'Prix dérisoire', definition: 'Prix trop bas pour être vrai, souvent signe d’arnaque.' },
    { term: 'Cyberharcèlement', definition: 'Attaques répétées par message, moqueries ou insultes en ligne.' },
    { term: 'Conserver des preuves', definition: 'Garder des captures d’écran ou messages pour prouver les faits.' },
    { term: '3018', definition: 'Numéro gratuit pour les jeunes victimes de harcèlement en ligne.' },
    { term: 'Signaler un compte', definition: 'Avertir la plateforme qu’un utilisateur enfreint les règles.' },
    { term: 'Vie privée', definition: 'Données personnelles à protéger (nom, photos, infos perso…).' },
    { term: 'Respect en ligne', definition: 'Se comporter de façon bienveillante et responsable sur Internet.' },
    {term : 'CNIL', definition:'Commission nationale de l\'informatique et des libertés. Elle veille à la protection des données personnelles en France.'},
    {term : 'Cookies', definition:'Petits fichiers stockés sur votre appareil qui permettent aux sites web de mémoriser vos préférences et activités.'},
    {term : 'VPN (Réseau Privé Virtuel)', definition:'Service qui chiffre votre connexion internet et masque votre adresse IP pour protéger votre vie privée en ligne.'},
    {term : 'Pare-feu (Firewall)', definition:'Système de sécurité qui surveille et filtre le trafic réseau selon des règles prédéfinies.'},
    {term : 'Malware', definition:'Logiciel malveillant conçu pour endommager ou accéder sans autorisation à un système informatique.'},
    {term : 'Ransomware', definition:'Type de malware qui chiffre vos fichiers et exige une rançon pour les déverrouiller.'},
    {term : 'Antivirus', definition:'Logiciel qui détecte, empêche et supprime les logiciels malveillants de votre appareil.'},
    {term : 'Données personnelles', definition:'Informations permettant d\'identifier directement ou indirectement une personne (nom, adresse, email, etc.).'},
    {term : 'RGPD', definition:'Règlement Général sur la Protection des Données, législation européenne qui encadre le traitement des données personnelles.'},
    {term : 'Hacker éthique', definition:'Expert en sécurité informatique qui teste les systèmes avec autorisation pour identifier les vulnérabilités.'},
    {term : 'Spoofing', definition:'Technique consistant à se faire passer pour une autre personne ou entité pour tromper les utilisateurs.'},
    {term : 'Chiffrement', definition:'Processus qui transforme des données lisibles en code illisible sans la clé de déchiffrement appropriée.'},
    {term : 'Backdoor', definition:'Accès secret à un système informatique contournant les mesures de sécurité normales.'},
    {term : 'Botnet', definition:'Réseau d\'ordinateurs infectés contrôlés à distance par un pirate informatique.'},
    {term : 'Clickbait', definition:'Contenu web trompeur conçu pour attirer les clics avec des titres sensationnels.'},
    {term : 'Deepfake', definition:'Vidéo ou audio manipulé par intelligence artificielle pour faire dire ou faire quelque chose à quelqu\'un qu\'il n\'a jamais dit ou fait.'},
    {term : 'Doxxing', definition:'Publication en ligne d\'informations personnelles d\'un individu sans son consentement.'},
    {term : 'Empreinte numérique', definition:'Ensemble des traces laissées en ligne par vos activités sur Internet.'},
    {term : 'Fake news', definition:'Fausses informations présentées comme des faits dans le but de tromper ou manipuler.'},
    {term : 'Keylogger', definition:'Logiciel espion qui enregistre toutes les touches frappées sur un clavier.'},
    {term : 'Mise à jour de sécurité', definition:'Correctif logiciel qui résout des vulnérabilités de sécurité dans un programme.'},
    {term : 'Mode navigation privée', definition:'Fonctionnalité du navigateur qui ne conserve pas l\'historique de navigation, les cookies ou les données de formulaire.'},
    {term : 'Pare-feu applicatif', definition:'Système qui filtre le trafic vers des applications spécifiques plutôt que vers l\'ensemble du réseau.'},
    {term : 'Pharming', definition:'Attaque redirigeant le trafic d\'un site web légitime vers un site frauduleux sans que l\'utilisateur s\'en aperçoive.'},
    {term : 'Proxy', definition:'Serveur intermédiaire qui fait transiter les requêtes entre un client et un serveur cible.'},
    {term : 'Rançongiciel', definition:'Autre nom pour ransomware, logiciel malveillant qui bloque l\'accès aux données et exige une rançon.'},
    {term : 'Rootkit', definition:'Ensemble d\'outils permettant à un pirate de maintenir un accès privilégié à un système informatique.'},
    {term : 'Sextorsion', definition:'Chantage consistant à menacer de publier des contenus intimes d\'une personne pour obtenir de l\'argent ou d\'autres faveurs.'},
    {term : 'Spyware', definition:'Logiciel espion qui collecte des informations sur un utilisateur sans son consentement.'},
    {term : 'Trojan (Cheval de Troie)', definition:'Logiciel malveillant déguisé en programme légitime pour tromper l\'utilisateur.'},
    {term : 'Ver informatique', definition:'Logiciel malveillant qui se reproduit et se propage automatiquement d\'un ordinateur à un autre.'},
    {term : 'Virus informatique', definition:'Programme malveillant qui s\'attache à des fichiers légitimes et s\'exécute lorsque ces fichiers sont ouverts.'},
    {term : 'Wi-Fi public', definition:'Réseau sans fil accessible gratuitement dans des lieux publics, souvent moins sécurisé qu\'un réseau privé.'},
    {term : 'Zero-day', definition:'Vulnérabilité de sécurité inconnue du fabricant du logiciel et donc sans correctif disponible.'},
    {term : 'Biométrie', definition:'Utilisation de caractéristiques physiques uniques (empreintes digitales, visage) pour l\'authentification.'},
    {term : 'Cryptomonnaie', definition:'Monnaie numérique utilisant la cryptographie pour sécuriser les transactions et contrôler la création de nouvelles unités.'},
    {term : 'Dark Web', definition:'Partie d\'Internet accessible uniquement via des logiciels spécifiques et où l\'anonymat est privilégié.'},
    {term : 'Ingénierie sociale', definition:'Manipulation psychologique visant à obtenir des informations confidentielles ou à faire exécuter des actions spécifiques.'},
    {term : 'Pare-feu personnel', definition:'Logiciel de sécurité qui surveille et contrôle le trafic réseau entrant et sortant d\'un ordinateur personnel.'},
    {term : 'Usurpation d\'identité', definition:'Acte consistant à se faire passer pour quelqu\'un d\'autre dans le but de commettre une fraude ou d\'autres actes malveillants.'},
    {term : 'Vulnérabilité', definition:'Faille de sécurité dans un système informatique pouvant être exploitée par des attaquants.'},
  ];

  get filteredGlossary(): GlossaryEntry[] {
    const lower = this.searchTerm.toLowerCase();
    return this.glossary.filter(entry =>
      entry.term.toLowerCase().includes(lower) || entry.definition.toLowerCase().includes(lower)
    );
  }
}
