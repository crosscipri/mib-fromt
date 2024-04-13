import { Component } from '@angular/core';
import { ClientsService } from './services/clients.service';
import {
  Observable,
  combineLatest,
  startWith,
  map,
  shareReplay,
  BehaviorSubject,
  of,
} from 'rxjs';
import { ClientsResponse, PayRate } from '../../interfaces/clients.interface';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  clients$: Observable<ClientsResponse>;
  filteredClients$: Observable<ClientsResponse>;
  searchForm: FormGroup;
  activeStatus = 'active';

  constructor(
    private clientsService: ClientsService,
    private router: Router,
  ) {
    this.clients$ = this.clientsService.getClients().pipe(shareReplay(1));
    this.searchForm = new FormGroup({
      query: new FormControl(''),
    });

    this.filteredClients$ = combineLatest([
      this.clients$,
      this.searchForm.get('query')?.valueChanges.pipe(startWith('')),
    ]).pipe(
      switchMap(([response, query = '']) =>
        of(this.#filterClients(query, response as any)),
      ),
    );
  }

  isClientsPage(): boolean {
    return this.router.url === '/clients';
  }

  onDeleteClient(clientId: number) {
    this.clientsService.deleteClient(clientId).subscribe(() => {
      this.clients$ = this.clientsService.getClients().pipe(shareReplay(1));
    });
  }

  setActiveStatus(status: string) {
    console.log(status);
    this.activeStatus = status;
    this.searchForm.get('query')?.setValue('');
    this.filteredClients$ = combineLatest([
      this.clients$,
      this.searchForm.get('query')?.valueChanges.pipe(startWith('')),
    ]).pipe(
      switchMap(([response, query = '']) =>
        of(this.#filterClients(query, response as any)),
      ),
    );
  }

  onPayClientRate(data: PayRate) {
    this.clientsService
      .payClientRate(data.clientId, data.rateId, data.paymentDate)
      .subscribe(() => {
        this.clients$ = this.clientsService.getClients().pipe(shareReplay(1));
      });
  }

  #filterClients(query: string, response: ClientsResponse): ClientsResponse {
    const queryWords = query.split(' ');
    return {
      ...response,
      data: response.data.filter((client) => {
        const fullName =
          `${client.client.name} ${client.client.firstLastName} ${client.client.secondLastName}`.toLowerCase();
        const isActive = client.rate !== null;
        const matchesActiveStatus =
          (this.activeStatus === 'active' && isActive) ||
          (this.activeStatus === 'inactive' && !isActive);
        return (
          matchesActiveStatus &&
          queryWords.every((word: string) =>
            fullName.includes(word.toLowerCase()),
          )
        );
      }),
    };
  }
}
