import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateClientsComponent } from './create-clients.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateClientsComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CreateClientsComponent],
})
export class CreateClientsModule {}
