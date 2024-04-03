import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { EditRatesComponent } from './edit-rates.component';

@NgModule({
  declarations: [EditRatesComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterModule],
  exports: [EditRatesComponent],
})
export class EditRatesModule {}
