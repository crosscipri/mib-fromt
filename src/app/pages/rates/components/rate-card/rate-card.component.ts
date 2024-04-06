import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Rate } from '../../../../interfaces/rates.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from '../../../../components/delete-modal/delete-modal.component';

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

  constructor(private modalService: NgbModal) {}

  onDeleteRate(rate: Rate) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.message = `la tarifa ${rate.name}`;
    modalRef.componentInstance.text = 'tarifa';
    modalRef.closed.subscribe((val) => {
      console.log(val);
      if (!val) {
        return;
      }
      this.deleteRate.emit(rate.id);
    });
  }
}
