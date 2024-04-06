import { Component } from '@angular/core';
import { ClientsService } from './services/clients.service';
import { Observable, first } from 'rxjs';
import { ClientsResponse } from '../../interfaces/clients.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  clients$: Observable<ClientsResponse>;

  constructor(
    private clientsService: ClientsService,
    private router: Router,
  ) {
    this.clients$ = this.clientsService.getClients();
  }

  isClientsPage(): boolean {
    return this.router.url === '/clients';
  }

  onDeleteClient(clientId: number) {
    this.clientsService
      .deleteClient(clientId)
      .pipe(first())
      .subscribe(() => {
        this.clients$ = this.clientsService.getClients();
      });
  }
}
