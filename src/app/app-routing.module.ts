import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const PAGES: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
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
  },
  {
    path: 'rates',
    loadChildren: () =>
      import('./pages/rates/rates.module').then((m) => m.RatesModule),
  },

  {
    path: '**',
    redirectTo: `/login`,
    pathMatch: 'full',
  },
];

const routes: Routes = [
  { path: '', children: PAGES },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
