import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: 'src/app/modules/auth/auth.module#AuthModule'},
  { path: 'dashboard', loadChildren: 'src/app/modules/dashboard/dashboard.module#DashboardModule'}
];
