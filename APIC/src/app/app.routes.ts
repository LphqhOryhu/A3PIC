import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'quiz',
    loadComponent: () =>
      import('./pages/quiz.component').then((m) => m.QuizComponent),
  },
  {
    path: 'learn',
    loadComponent: () =>
      import('./pages/learn.component').then((m) => m.LearnComponent),
  },
  {
    path: 'stories',
    loadComponent: () =>
      import('./pages/stories.component').then((m) => m.StoriesComponent),
  },
];
