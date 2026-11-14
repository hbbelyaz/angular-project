import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';

export const routes: Routes = [
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
