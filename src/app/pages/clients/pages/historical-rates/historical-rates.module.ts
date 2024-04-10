import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricalRatesComponent } from './historical-rates.component';
import { HistoricalRatesRoutingModule } from './historical-rates-routing.module';
import { HistoricalRateCardComponent } from './components/historical-rate-card/historical-rate-card.component';
import { HistoricalRatesCardModule } from './components/historical-rate-card/historical-rate-card.module';

@NgModule({
  declarations: [HistoricalRatesComponent],
  imports: [
    CommonModule,
    HistoricalRatesRoutingModule,
    HistoricalRatesCardModule,
  ],
  exports: [HistoricalRatesComponent],
})
export class HistoricalRatesModule {}
