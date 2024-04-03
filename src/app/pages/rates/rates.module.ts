import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatesComponent } from './rates.component';
import { RatesRoutingModule } from './rates-routing.module';
import { RateCardModule } from './components/rate-card/rate-card.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RatesComponent],
  imports: [CommonModule, RatesRoutingModule, RateCardModule, HttpClientModule],
  exports: [RatesComponent],
})
export class RatesModule {}
