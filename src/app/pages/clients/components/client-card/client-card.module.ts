import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCardComponent } from './client-card.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AssignRateModalModule } from '../assign-rate-modal/assign-rate-modal.module';
import { DeleteModalModule } from '../../../../components/delete-modal/delete-modal.module';
import { PayRateModalModule } from '../pay-rate-modal/pay-rate-modal.module';

@NgModule({
  declarations: [ClientCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AssignRateModalModule,
    DeleteModalModule,
    PayRateModalModule,
  ],
  exports: [ClientCardComponent],
})
export class ClientCardModule {}
