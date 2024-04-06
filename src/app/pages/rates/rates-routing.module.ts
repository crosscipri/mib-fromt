import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatesComponent } from './rates.component';
import { AuthGuard } from '../../guards/auth.guard';

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
        canActivate: [AuthGuard],
      },
      {
        path: 'edit/:id',
        loadChildren: () =>
          import('./pages/edit-rates/edit-rates.module').then(
            (m) => m.EditRatesModule,
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
export class RatesRoutingModule {}
