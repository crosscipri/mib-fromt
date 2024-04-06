import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCardComponent } from './client-card.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateClientsRoutingModule } from '../../pages/create-clients/create-clients-routing.module';
import { AssignRateModalModule } from '../assign-rate-modal/assign-rate-modal.module';
import { DeleteModalModule } from '../../../../components/delete-modal/delete-modal.module';

@NgModule({
  declarations: [ClientCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AssignRateModalModule,
    DeleteModalModule,
  ],
  exports: [ClientCardComponent],
})
export class ClientCardModule {}
