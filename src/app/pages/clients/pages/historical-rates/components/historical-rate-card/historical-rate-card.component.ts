import { Component, Input } from '@angular/core';
import {
  HistoricRateData,
  HistoricalRate,
} from '../../../../../../interfaces/clients.interface';

@Component({
  selector: 'app-historical-rate-card',
  templateUrl: './historical-rate-card.component.html',
  styleUrl: './historical-rate-card.component.scss',
})
export class HistoricalRateCardComponent {
  @Input() rate!: HistoricRateData;
}
