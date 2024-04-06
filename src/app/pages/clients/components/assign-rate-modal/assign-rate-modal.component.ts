import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RatesService } from '../../../rates/services/rates.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-assign-rate-modal',
  templateUrl: './assign-rate-modal.component.html',
  styleUrl: './assign-rate-modal.component.scss',
})
export class AssignRateModalComponent implements OnInit {
  assignRateForm: FormGroup;
  rates$ = this.ratesService.getRates();
  clientId!: number;
  constructor(
    private fb: FormBuilder,
    private ratesService: RatesService,
    public activeModal: NgbActiveModal,
  ) {
    this.assignRateForm = this.fb.group({
      rateId: [null, Validators.required],
      startDate: [null, Validators.required],
      paid: [null],
      paymentDate: [null],
    });
  }

  ngOnInit(): void {
    console.log(this.clientId);
  }

  onSubmit() {
    if (this.assignRateForm.invalid) {
      this.assignRateForm.markAllAsTouched();
      return;
    }

    console.log('Form is valid');
  }

  onModalOpen(data: any) {
    console.log('Modal opened', data);
  }
}
