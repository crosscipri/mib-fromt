import { Component } from '@angular/core';
import { ClientsService } from './services/clients.service';
import { Observable, first, map, startWith, switchMap } from 'rxjs';
import { ClientsResponse, PayRate } from '../../interfaces/clients.interface';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  clients$: Observable<ClientsResponse>;
  filteredClients$: Observable<ClientsResponse>;
  searchQuery: string = '';
  searchForm: FormGroup;
  activeStatus = 'active';

  constructor(
    private clientsService: ClientsService,
    private router: Router,
  ) {
    this.clients$ = this.clientsService.getClients();
    this.filteredClients$ = this.clients$;
    this.searchForm = new FormGroup({
      query: new FormControl(''),
    });

    this.filteredClients$ = this.searchForm.get('query')?.valueChanges.pipe(
      startWith(''),
      switchMap((query) =>
        this.clients$.pipe(
          map((response) => this.#filterClients(query, response)),
        ),
      ),
    ) as Observable<ClientsResponse>;
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
        this.filteredClients$ = this.clients$;
      });
  }

  setActiveStatus(status: string) {
    this.activeStatus = status;
    if (status === 'active') {
      this.filteredClients$.pipe(
        map((response) => {
          return {
            ...response,
            data: response.data.filter((client) => client.rate),
          };
        }),
      );
    } else {
      this.filteredClients$.pipe(
        map((response) => {
          return {
            ...response,
            data: response.data.filter((client) => !client.rate),
          };
        }),
      );
    }
  }

  onSearch(query: string) {
    this.searchQuery = query;
    this.filteredClients$ = this.clients$.pipe(
      map((response) => {
        return {
          ...response,
          data: response.data.filter((client) =>
            client.client.name.includes(this.searchQuery),
          ),
        };
      }),
    );
  }

  onPayClientRate(data: PayRate) {
    this.clientsService
      .payClientRate(data.clientId, data.rateId, data.paymentDate)
      .pipe(first())
      .subscribe(() => {
        console.log('Pago realizado');
        this.clients$ = this.clientsService.getClients();
        this.filteredClients$ = this.clients$;
      });
  }

  #filterClients(query: string, response: ClientsResponse): ClientsResponse {
    const queryWords = query.split(' ');
    return {
      ...response,
      data: response.data.filter((client) => {
        const fullName =
          `${client.client.name} ${client.client.firstLastName} ${client.client.secondLastName}`.toLowerCase();
        return queryWords.every((word: string) =>
          fullName.includes(word.toLowerCase()),
        );
      }),
    };
  }
}
