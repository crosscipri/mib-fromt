import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditClientComponent } from './edit-client.component';
import { RouterLink, RouterModule } from '@angular/router';
import { EditClientRoutingModule } from './edit-client-routing.module';

@NgModule({
  declarations: [EditClientComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterModule,
    EditClientRoutingModule,
  ],
  exports: [EditClientComponent],
})
export class EditClientModule {}
