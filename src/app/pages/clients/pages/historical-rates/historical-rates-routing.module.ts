import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HistoricalRatesComponent } from './historical-rates.component';

const routes = [{ path: '', component: HistoricalRatesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricalRatesRoutingModule {}
