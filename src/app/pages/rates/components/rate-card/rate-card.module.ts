import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RateCardComponent } from './rate-card.component';
import { DeleteModalModule } from '../../../../components/delete-modal/delete-modal.module';

@NgModule({
  declarations: [RateCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    DeleteModalModule,
  ],
  exports: [RateCardComponent],
})
export class RateCardModule {}
