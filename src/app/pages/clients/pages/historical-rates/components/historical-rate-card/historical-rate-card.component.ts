import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  HistoricRateData,
  HistoricalRate,
  PayRate,
} from '../../../../../../interfaces/clients.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PayRateModalComponent } from '../../../../components/pay-rate-modal/pay-rate-modal.component';
import { DeleteModalComponent } from '../../../../../../components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-historical-rate-card',
  templateUrl: './historical-rate-card.component.html',
  styleUrl: './historical-rate-card.component.scss',
})
export class HistoricalRateCardComponent {
  @Output() payRate: EventEmitter<PayRate> = new EventEmitter<PayRate>();
  @Output() deleteRate: EventEmitter<{ clientId: number; rateId: number }> =
    new EventEmitter<{ clientId: number; rateId: number }>();
  @Input() rate!: HistoricRateData;
  @Input() clientId!: number;

  constructor(private modalService: NgbModal) {}

  openPaymentRateModal(clientRateId: number) {
    const modalRef = this.modalService.open(PayRateModalComponent);
    modalRef.closed.subscribe((val) => {
      if (!val) {
        return;
      }

      const payRate: PayRate = {
        clientId: this.clientId,
        rateId: clientRateId,
        paymentDate: val,
      };

      this.payRate.emit(payRate);
    });
  }

  openDeleteModal(clientRateId: number) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.message = 'la tarifa seleccionada';
    modalRef.componentInstance.text = 'tarifa';
    modalRef.closed.subscribe((val) => {
      if (!val) {
        return;
      }
      this.deleteRate.emit({ clientId: this.clientId, rateId: clientRateId });
    });
  }
}
