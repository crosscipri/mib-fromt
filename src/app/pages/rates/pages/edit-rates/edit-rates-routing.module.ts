import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditRatesComponent } from './edit-rates.component';

const routes = [{ path: '', component: EditRatesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRatesRoutingModule {}
