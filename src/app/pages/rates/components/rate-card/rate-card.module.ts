import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RateCardComponent } from './rate-card.component';

@NgModule({
  declarations: [RateCardComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, ReactiveFormsModule],
  exports: [RateCardComponent],
})
export class RateCardModule {}
