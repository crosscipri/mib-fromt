import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { HistoricalRatesComponent } from '../../historical-rates.component';
import { HistoricalRateCardComponent } from './historical-rate-card.component';
import { PayRateModalModule } from '../../../../components/pay-rate-modal/pay-rate-modal.module';
import { DeleteModalModule } from '../../../../../../components/delete-modal/delete-modal.module';

@NgModule({
  declarations: [HistoricalRateCardComponent],
  imports: [CommonModule, PayRateModalModule, DeleteModalModule],
  exports: [HistoricalRateCardComponent],
})
export class HistoricalRatesCardModule {}
