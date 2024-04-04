import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { CreateRatesComponent } from './create-rates.component';
import { CreateRatesRoutingModule } from './create-rates-routing.module';

@NgModule({
  declarations: [CreateRatesComponent],
  imports: [CommonModule, ReactiveFormsModule, CreateRatesRoutingModule],
  exports: [CreateRatesComponent],
})
export class CreateRatesModule {}
