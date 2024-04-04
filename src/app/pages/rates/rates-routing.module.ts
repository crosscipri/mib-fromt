import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatesComponent } from './rates.component';

const routes: Routes = [
  {
    path: '',
    component: RatesComponent,
    children: [
      {
        path: 'create',
        loadChildren: () =>
          import('./pages/create-rates/create-rates.module').then(
            (m) => m.CreateRatesModule,
          ),
      },
      {
        path: 'edit/:id',
        loadChildren: () =>
          import('./pages/edit-rates/edit-rates.module').then(
            (m) => m.EditRatesModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatesRoutingModule {}
