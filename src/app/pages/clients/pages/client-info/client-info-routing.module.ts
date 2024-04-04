import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientInfoComponent } from './client-info.component';

const routes = [{ path: '', component: ClientInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientInfoRoutingModule {}
