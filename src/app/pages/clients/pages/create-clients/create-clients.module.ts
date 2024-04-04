import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateClientsComponent } from './create-clients.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateClientsRoutingModule } from './create-clients-routing.module';

@NgModule({
  declarations: [CreateClientsComponent],
  imports: [CommonModule, ReactiveFormsModule, CreateClientsRoutingModule],
  exports: [CreateClientsComponent],
})
export class CreateClientsModule {}
