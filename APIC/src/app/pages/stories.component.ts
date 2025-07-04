import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Story {
  title: string;
  description: string;
  error: string;
  source: {
    name: string;
    url: string;
  };
}

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css',
})
export class StoriesComponent {
  stories: Story[] = [
    {
      title: 'Mot de passe "solarwinds123" chez SolarWinds',
      description: `En 2019, un mot de passe extrêmement faible ("solarwinds123") a été utilisé pour sécuriser l’accès aux mises à jour du logiciel Orion de SolarWinds. Cette négligence a contribué à l’une des cyberattaques les plus graves de l’histoire moderne.`,
      error: 'Mot de passe faible / réutilisé',
      source: {
        name: 'Specossoft',
        url: 'https://specopssoft.com/fr/blog/le-piratage-de-solarwinds-explique-le-mot-de-passe-faible-solarwinds123-responsable-du-piratage/',
      },
    },
    {
      title: 'Le compte Twitter d\'Elon Musk piraté',
      description: `En 2020, des pirates ont manipulé des employés de Twitter par téléphone pour obtenir des identifiants. Résultat : les comptes de personnalités comme Elon Musk, Barack Obama et Bill Gates ont été détournés.`,
      error: 'Phishing interne (ingénierie sociale)',
      source: {
        name: 'Le Figaro',
        url: 'https://www.lefigaro.fr/secteur/high-tech/un-apparent-piratage-vise-les-comptes-twitter-de-personnalites-et-d-entreprises-20200715',
      },
    },
    {
      title: 'Mark Zuckerberg utilisait "dadada" comme mot de passe',
      description: `En 2016, les comptes Twitter et Pinterest de Mark Zuckerberg ont été compromis car il utilisait le mot de passe "dadada", déjà exposé dans une fuite précédente. Même les fondateurs de Facebook font des erreurs.`,
      error: 'Mot de passe réutilisé / trop simple',
      source: {
        name: 'Presse Citron',
        url: 'https://www.presse-citron.net/mark-zuckerberg-pirate-le-mot-de-passe-aurait-ete-dadada/',
      },
    },
    {
      title: 'Equifax : 147 millions de données exposées',
      description: `En 2017, une faille connue dans Apache Struts n’a pas été corrigée à temps. L’entreprise Equifax a laissé une brèche ouverte durant 2 mois, entraînant le vol d’informations personnelles de la moitié des citoyens américains.`,
      error: 'Mise à jour de sécurité non appliquée',
      source: {
        name: 'Akaoma',
        url: 'https://www.akaoma.com/ressources/cyberattaques/equifax-breach-2017/',
      },
    },
    {
      title: 'Hôpital paralysé à Düsseldorf',
      description: `En 2020, un ransomware a frappé un hôpital allemand. L’origine : un service exposé avec un mot de passe par défaut. L’attaque a indirectement causé la mort d’une patiente redirigée vers un autre hôpital.`,
      error: 'Mot de passe par défaut non changé',
      source: {
        name: 'Bitdefender',
        url: 'https://www.bitdefender.com/fr-fr/blog/hotforsecurity/les-soins-durgence-de-lhopital-universitaire-de-dusseldorf-reportes-apres-une-cyberattaque/',
      },
    }
  ];
}
