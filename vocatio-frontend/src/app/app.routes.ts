import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth.routes';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  ...authRoutes,
  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () => import('./features/home/home-page.component').then((m) => m.HomePageComponent)
  },
  {
    path: 'test',
    canActivate: [authGuard],
    loadComponent: () => import('./features/test/test-page/test-page').then((m) => m.TestPage)
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' }
];
