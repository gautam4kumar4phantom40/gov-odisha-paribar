import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/public-layout/public-layout').then((m) => m.PublicLayout),

    children: [
      {
        path: '',
        loadComponent: () => import('./features/public/home/pages/home/home').then((m) => m.Home),
      },
    ],
  },
];
