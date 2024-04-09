import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricalRatesComponent } from './historical-rates.component';
import { HistoricalRatesRoutingModule } from './historical-rates-routing.module';
import { HistoricalRateCardComponent } from './components/historical-rate-card/historical-rate-card.component';

@NgModule({
  declarations: [HistoricalRatesComponent, HistoricalRateCardComponent],
  imports: [CommonModule, HistoricalRatesRoutingModule],
  exports: [HistoricalRatesComponent],
})
export class HistoricalRatesModule {}
