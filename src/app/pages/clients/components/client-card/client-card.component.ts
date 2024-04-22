import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  Client,
  ClientData,
  PayRate,
} from '../../../../interfaces/clients.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../../services/clients.service';
import { RatesService } from '../../../rates/services/rates.service';
import { EMPTY, catchError, first, tap } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AssignRateModalComponent } from '../assign-rate-modal/assign-rate-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from '../../../../components/delete-modal/delete-modal.component';
import { PayRateModalComponent } from '../pay-rate-modal/pay-rate-modal.component';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrl: './client-card.component.scss',
})
export class ClientCardComponent {
  bsModalRef!: BsModalRef;
  @Output() deleteClient: EventEmitter<number> = new EventEmitter<number>();
  @Output() payRate: EventEmitter<PayRate> = new EventEmitter<PayRate>();

  @Input()
  set clientData(clientData: ClientData | null) {
    console.log('clientData', clientData);
    this.#clientData = clientData;
  }

  get clientData(): ClientData | null {
    return this.#clientData;
  }

  #clientData: ClientData | null = null;

  rates$ = this.ratesService.getRates();

  assignRateForm: FormGroup;
  currentClientId!: number;

  constructor(
    private ratesService: RatesService,
    private clientsService: ClientsService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private modalService: NgbModal,
    private location: Location,
  ) {
    this.assignRateForm = this.fb.group({
      rateId: [null, Validators.required],
      startDate: [null, Validators.required],
      paid: [null],
      paymentDate: [null],
    });
  }

  onSubmit(clientId: number) {
    if (this.assignRateForm.invalid) {
      this.assignRateForm.markAllAsTouched();
      return;
    }
    this.clientsService
      .assignRateToClient(clientId, this.assignRateForm.getRawValue())
      .pipe(first())
      .subscribe((value) => {
        this.clientData = value.data;
        this.cdr.markForCheck();
      });
  }

  openAddingRateModal(clientId: number | undefined) {
    if (!clientId) {
      return;
    }

    const modalRef = this.modalService.open(AssignRateModalComponent);
    modalRef.componentInstance.clientId = clientId;
    modalRef.dismissed.subscribe((result) => {
      this.clientData = result.data;
      this.location.reload();
    });
  }

  openDeleteModal(client: Client) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.client = client;
    modalRef.componentInstance.message = 'al cliente';
    modalRef.componentInstance.text = 'cliente';
    modalRef.closed.subscribe((val) => {
      console.log(val);
      if (!val) {
        return;
      }
      this.deleteClient.emit(client.id);
    });
  }

  openPaymentRateModal(data: ClientData) {
    const modalRef = this.modalService.open(PayRateModalComponent);
    modalRef.closed.subscribe((val) => {
      console.log(val);
      if (!val) {
        return;
      }

      const payRate: PayRate = {
        clientId: data.client.id as number,
        rateId: data.rate?.id as number,
        paymentDate: val,
      };

      this.payRate.emit(payRate);
    });
  }
}
