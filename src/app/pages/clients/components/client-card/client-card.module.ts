import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCardComponent } from './client-card.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ClientCardComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, ReactiveFormsModule],
  exports: [ClientCardComponent],
})
export class ClientCardModule {}
