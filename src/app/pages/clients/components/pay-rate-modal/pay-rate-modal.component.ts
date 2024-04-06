import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pay-rate-modal',
  templateUrl: './pay-rate-modal.component.html',
  styleUrl: './pay-rate-modal.component.scss',
})
export class PayRateModalComponent implements OnInit {
  payRateForm: FormGroup;
  paymentDate!: Date;

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
  ) {
    this.payRateForm = this.fb.group({
      paymentDate: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.payRateForm.get('paymentDate')?.valueChanges.subscribe((value) => {
      this.paymentDate = value;
    });
  }
}
