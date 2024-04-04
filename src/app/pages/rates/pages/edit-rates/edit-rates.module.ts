import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { EditRatesComponent } from './edit-rates.component';
import { EditRatesRoutingModule } from './edit-rates-routing.module';

@NgModule({
  declarations: [EditRatesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterModule,
    EditRatesRoutingModule,
  ],
  exports: [EditRatesComponent],
})
export class EditRatesModule {}
