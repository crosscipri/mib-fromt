import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const PAGES: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./pages/clients/clients.module').then((m) => m.ClientsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'rates',
    loadChildren: () =>
      import('./pages/rates/rates.module').then((m) => m.RatesModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: `/home`,
    pathMatch: 'full',
  },
];

const routes: Routes = [
  { path: '', children: PAGES },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
