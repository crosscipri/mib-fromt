import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients.component';

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
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./pages/client-info/client-info.module').then(
            (m) => m.ClientInfolModule,
          ),
      },
      {
        path: 'edit/:id',
        loadChildren: () =>
          import('./pages/edit-client/edit-client.module').then(
            (m) => m.EditClientModule,
          ),
      },
      {
        path: 'historic/:id',
        loadChildren: () =>
          import('./pages/historical-rates/historical-rates.module').then(
            (m) => m.HistoricalRatesModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
