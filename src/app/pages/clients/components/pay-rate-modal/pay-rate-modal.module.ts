import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PayRateModalComponent } from './pay-rate-modal.component';

@NgModule({
  declarations: [PayRateModalComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [PayRateModalComponent],
})
export class PayRateModalModule {}
