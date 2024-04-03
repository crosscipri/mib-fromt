import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatesComponent } from './rates.component';
import { RatesRoutingModule } from './rates-routing.module';

@NgModule({
  declarations: [RatesComponent],
  imports: [CommonModule, RatesRoutingModule],
  exports: [RatesComponent],
})
export class RatesModule {}
