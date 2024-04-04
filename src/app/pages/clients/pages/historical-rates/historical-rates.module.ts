import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricalRatesComponent } from './historical-rates.component';
import { HistoricalRatesRoutingModule } from './historical-rates-routing.module';

@NgModule({
  declarations: [HistoricalRatesComponent],
  imports: [CommonModule, HistoricalRatesRoutingModule],
  exports: [HistoricalRatesComponent],
})
export class HistoricalRatesModule {}
