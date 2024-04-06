import { Component, OnInit } from '@angular/core';
import { Observable, first, tap } from 'rxjs';
import { RatesResponse } from '../../interfaces/rates.interface';
import { RatesService } from './services/rates.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrl: './rates.component.scss',
})
export class RatesComponent {
  rates$: Observable<RatesResponse>;
  isRatesPage: boolean;

  constructor(
    private ratesService: RatesService,
    private router: Router,
  ) {
    this.isRatesPage = this.router.url === '/rates';
    this.rates$ = this.ratesService.getRates();
  }

  deleteRate(rateId: number) {
    console.log(rateId);
    this.ratesService
      .deleteRate(rateId)
      .pipe(
        first(),
        tap(() => (this.rates$ = this.ratesService.getRates())),
      )
      .subscribe();
  }
}
