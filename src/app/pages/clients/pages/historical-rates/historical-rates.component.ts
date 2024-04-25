import { Component } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { ActivatedRoute } from '@angular/router';
import {
  HistoricalRatesResponse,
  PayRate,
} from '../../../../interfaces/clients.interface';
import { Observable, first, of, switchMap } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-historical-rates',
  templateUrl: './historical-rates.component.html',
  styleUrl: './historical-rates.component.scss',
})
export class HistoricalRatesComponent {
  clientId: number | null = null;
  historicRates$: Observable<HistoricalRatesResponse | null> =
    this.route.paramMap.pipe(
      switchMap((params) => {
        this.clientId = Number(params.get('id'));
        if (this.clientId !== null) {
          return this.clientsService.historicalRates(this.clientId);
        }
        return of(null);
      }),
    );

  constructor(
    private clientsService: ClientsService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  goBack() {
    this.location.back();
  }

  onPayClientRate(data: PayRate) {
    this.clientsService
      .payClientRate(data.clientId, data.rateId, data.paymentDate)
      .pipe(first())
      .subscribe(() => {
        this.historicRates$ = this.clientsService.historicalRates(
          this.clientId ?? 0,
        );
      });
  }

  onDeleteRate(data: { clientId: number; rateId: number }) {
    this.clientsService
      .deleteHistoricalRate(data.clientId, data.rateId)
      .pipe(first())
      .subscribe(() => {
        this.historicRates$ = this.clientsService.historicalRates(
          this.clientId ?? 0,
        );
      });
  }
}
