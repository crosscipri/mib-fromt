import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    children: [
      {
        path: 'create',
        loadChildren: () =>
          import('./pages/create-clients/create-clients.module').then(
            (m) => m.CreateClientsModule,
          ),
        canActivate: [AuthGuard],
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./pages/client-info/client-info.module').then(
            (m) => m.ClientInfolModule,
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'edit/:id',
        loadChildren: () =>
          import('./pages/edit-client/edit-client.module').then(
            (m) => m.EditClientModule,
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'historic/:id',
        loadChildren: () =>
          import('./pages/historical-rates/historical-rates.module').then(
            (m) => m.HistoricalRatesModule,
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
