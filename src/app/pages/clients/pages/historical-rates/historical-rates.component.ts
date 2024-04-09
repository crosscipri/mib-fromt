import { Component } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { ActivatedRoute } from '@angular/router';
import { HistoricalRatesResponse } from '../../../../interfaces/clients.interface';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-historical-rates',
  templateUrl: './historical-rates.component.html',
  styleUrl: './historical-rates.component.scss',
})
export class HistoricalRatesComponent {
  clientId: string | null = null;
  historicRates$: Observable<HistoricalRatesResponse | null> =
    this.route.paramMap.pipe(
      switchMap((params) => {
        this.clientId = params.get('id');
        if (this.clientId !== null) {
          return this.clientsService.historicalRates(+this.clientId);
        }
        return of(null);
      }),
    );

  constructor(
    private clientsService: ClientsService,
    private route: ActivatedRoute,
  ) {}
}
