import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientInfoComponent } from './client-info.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ClientInfoRoutingModule } from './client-info-routing.module';
import { AssignRateModalModule } from '../../components/assign-rate-modal/assign-rate-modal.module';

@NgModule({
  declarations: [ClientInfoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterModule,
    ClientInfoRoutingModule,
    AssignRateModalModule,
  ],
  exports: [ClientInfoComponent],
})
export class ClientInfolModule {}
