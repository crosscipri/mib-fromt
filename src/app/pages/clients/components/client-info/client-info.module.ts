import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientInfoComponent } from './client-info.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [ClientInfoComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterModule],
  exports: [ClientInfoComponent],
})
export class ClientInfolModule {}
