import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditClientComponent } from './edit-client.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [EditClientComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterModule],
  exports: [EditClientComponent],
})
export class EditClientModule {}
