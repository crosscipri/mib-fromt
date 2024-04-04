import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ClientData } from '../../../../interfaces/clients.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../../services/clients.service';
import { RatesService } from '../../../rates/services/rates.service';
import { EMPTY, catchError, first, tap } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AssignRateModalComponent } from '../assign-rate-modal/assign-rate-modal.component';

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
    private modalService: BsModalService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
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
    console.log('clientId', clientId);
    console.log('0', this.currentClientId);
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

  openAddingRateModal() {
    this.bsModalRef = this.modalService.show(AssignRateModalComponent);
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
