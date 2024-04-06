import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Client, ClientData } from '../../../../interfaces/clients.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../../services/clients.service';
import { RatesService } from '../../../rates/services/rates.service';
import { EMPTY, catchError, first, tap } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AssignRateModalComponent } from '../assign-rate-modal/assign-rate-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from '../../../../components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrl: './client-card.component.scss',
})
export class ClientCardComponent {
  bsModalRef!: BsModalRef;
  @Output() deleteClient: EventEmitter<number> = new EventEmitter<number>();

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
  alertMessage: string | null = null;
  alertType: string = 'success';
  currentClientId!: number;

  constructor(
    private ratesService: RatesService,
    private clientsService: ClientsService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private modalService: NgbModal,
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
      .pipe(
        first(),
        tap(() => this.showSuccessMessage()),
        catchError((error) => {
          this.showErrorMessage(error.error.message);
          return EMPTY;
        }),
      )
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
      if (!result) {
        this.showErrorMessage('No se ha podido asignar la tarifa');
        return;
      }
      this.clientData = result.data;
      this.cdr.detectChanges();
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

  private showSuccessMessage(message: string = 'Cliente creado correctamente') {
    this.alertMessage = message;
    this.alertType = 'success';
    this.hideMessageAfterDelay();
  }

  private showErrorMessage(
    message: string = 'No se ha podido crear el cliente',
  ) {
    this.alertMessage = message;
    this.alertType = 'danger';
    this.hideMessageAfterDelay();
  }

  private hideMessageAfterDelay() {
    setTimeout(() => (this.alertMessage = null), 3000);
  }
}
