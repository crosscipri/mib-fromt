import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateRatesComponent } from './create-rates.component';

const routes = [{ path: '', component: CreateRatesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRatesRoutingModule {}
