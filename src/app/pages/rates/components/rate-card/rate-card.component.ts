import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Rate } from '../../../../interfaces/rates.interface';

@Component({
  selector: 'app-rate-card',
  templateUrl: './rate-card.component.html',
  styleUrl: './rate-card.component.scss',
})
export class RateCardComponent {
  @Output() deleteRate: EventEmitter<number> = new EventEmitter<number>();
  @Input()
  set rate(rate: Rate | null) {
    this.#rate = rate;
  }

  get rate(): Rate | null {
    return this.#rate;
  }

  #rate: Rate | null = null;

  onDeleteRate(rateId: number) {
    this.deleteRate.emit(rateId);
  }
}
