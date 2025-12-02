import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';

export const careersRoutes: Routes = [
  {
    path: 'careers',
    canActivate: [authGuard],
    loadComponent: () => import('./careers-page.component').then(m => m.CareersPageComponent)
  }
];
