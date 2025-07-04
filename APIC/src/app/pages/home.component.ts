import {
  Component,
  OnInit,
  OnDestroy,
  HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import {
  trigger,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('scrollReveal', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  parallaxOffset = 0;

  sectionsVisible: Record<string, boolean> = {
    importance: false,
    features: false,
    cta: false
  };

  features = [
    {
      icon: '🎮',
      title: 'Quiz interactifs',
      description: 'Testez vos connaissances sur les bons réflexes numériques avec des questions pratiques et amusantes.'
    },
    {
      icon: '📖',
      title: 'Glossaire simplifié',
      description: 'Comprenez les termes techniques avec des définitions claires et des exemples concrets.'
    },
    {
      icon: '📚',
      title: 'Histoires vraies',
      description: 'Découvrez des cas réels d\'erreurs de sécurité pour apprendre de leurs conséquences.'
    },
    {
      icon: '💡',
      title: 'Conseils pratiques',
      description: 'Des recommandations simples pour sécuriser vos comptes, appareils et habitudes.'
    }
  ];

  private observer!: IntersectionObserver;

  constructor(public theme: ThemeService, private router: Router) {}

  ngOnInit() {
    this.initScrollObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrolled = window.pageYOffset;
    this.parallaxOffset = scrolled * 0.5;
  }

  private initScrollObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const sectionName = target.getAttribute('data-section');

            if (sectionName && this.sectionsVisible.hasOwnProperty(sectionName)) {
              this.sectionsVisible[sectionName] = true;
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    setTimeout(() => {
      this.observeSections();
    }, 100);
  }

  private observeSections() {
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => {
      this.observer.observe(section);
    });
  }
}
