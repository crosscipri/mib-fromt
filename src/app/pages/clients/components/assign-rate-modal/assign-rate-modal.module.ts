import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AssignRateModalComponent } from './assign-rate-modal.component';

@NgModule({
  declarations: [AssignRateModalComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AssignRateModalComponent],
})
export class AssignRateModalModule {}
