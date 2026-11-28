import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';

export const routes: Routes = [
  {
    path: 'catalogue',
    loadComponent: () => import('./home-page/home-page').then((module) => module.HomePage),
  },
  {
    path: 'tasks',
    loadComponent: () => import('./task/task').then((module) => module.Task),
  },
  {
    path: '',
    component: HomePage,
    pathMatch: 'full',
  },
];
