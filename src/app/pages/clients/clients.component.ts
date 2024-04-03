import { Component } from '@angular/core';
import { ClientsService } from './services/clients.service';
import { Observable } from 'rxjs';
import { ClientsResponse } from '../../interfaces/clients.interface';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  clients$: Observable<ClientsResponse>;

  constructor(private clientsService: ClientsService) {
    this.clients$ = this.clientsService.getClients();
  }
}
