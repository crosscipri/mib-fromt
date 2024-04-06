import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RatesService } from '../../../rates/services/rates.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientsService } from '../../services/clients.service';
import { EMPTY, catchError, first } from 'rxjs';
@Component({
  selector: 'app-assign-rate-modal',
  templateUrl: './assign-rate-modal.component.html',
  styleUrl: './assign-rate-modal.component.scss',
})
export class AssignRateModalComponent {
  assignRateForm: FormGroup;
  rates$ = this.ratesService.getRates();
  clientId!: number;
  constructor(
    private fb: FormBuilder,
    private ratesService: RatesService,
    private clientsService: ClientsService,
    public activeModal: NgbActiveModal,
  ) {
    this.assignRateForm = this.fb.group({
      rateId: [null, Validators.required],
      startDate: [null, Validators.required],
      paid: [null],
      paymentDate: [null],
    });
  }

  onSubmit() {
    if (this.assignRateForm.invalid) {
      this.assignRateForm.markAllAsTouched();
      return;
    }

    this.assingRate();
  }

  assingRate() {
    this.clientsService
      .assignRateToClient(this.clientId, this.assignRateForm.value)
      .pipe(
        first(),
        catchError(() => {
          this.activeModal.dismiss(false);
          return EMPTY;
        }),
      )
      .subscribe((result) => {
        this.activeModal.dismiss(result);
      });
  }
}
