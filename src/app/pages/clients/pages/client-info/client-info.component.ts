import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { ClientResponse } from '../../../../interfaces/clients.interface';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrl: './client-info.component.scss',
})
export class ClientInfoComponent {
  client$: Observable<ClientResponse | null> = this.route.paramMap.pipe(
    switchMap((params): Observable<ClientResponse | null> => {
      const id = params.get('id');
      if (id !== null) {
        return this.clientsService.getClientById(+id);
      }
      return of(null);
    }),
  );

  constructor(
    private clientsService: ClientsService,
    private route: ActivatedRoute,
  ) {}
}
