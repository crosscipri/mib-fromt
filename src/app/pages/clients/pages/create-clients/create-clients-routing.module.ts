import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateClientsComponent } from './create-clients.component';

const routes = [{ path: '', component: CreateClientsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateClientsRoutingModule {}
