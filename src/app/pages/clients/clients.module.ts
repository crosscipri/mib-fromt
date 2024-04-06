import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientCardModule } from './components/client-card/client-card.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateClientsModule } from './pages/create-clients/create-clients.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClientCardModule,
  ],
  exports: [ClientsComponent],
})
export class ClientsModule {}
