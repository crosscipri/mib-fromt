import { Component } from '@angular/core';
import { EMPTY, Observable, catchError, first } from 'rxjs';
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
  alertMessage: string | null = null;
  alertType: string = 'success';
  constructor(
    private ratesService: RatesService,
    private router: Router,
  ) {
    this.rates$ = this.ratesService.getRates();
  }

  isRatesPage(): boolean {
    return this.router.url === '/rates';
  }

  deleteRate(rateId: number) {
    this.ratesService
      .deleteRate(rateId)
      .pipe(
        first(),
        catchError((error) => {
          this.showErrorMessage(error.error.message);
          return EMPTY;
        }),
      )
      .subscribe((value) => {
        console.log(value);
        this.showSuccessMessage(value.message);
        this.rates$ = this.ratesService.getRates();
      });
  }

  private showSuccessMessage(message: string) {
    this.alertMessage = message;
    this.alertType = 'success';
    this.hideMessageAfterDelay();
  }

  private showErrorMessage(message: string) {
    this.alertMessage = message;
    this.alertType = 'danger';
    this.hideMessageAfterDelay();
  }

  private hideMessageAfterDelay() {
    setTimeout(() => (this.alertMessage = null), 2000);
  }
}
