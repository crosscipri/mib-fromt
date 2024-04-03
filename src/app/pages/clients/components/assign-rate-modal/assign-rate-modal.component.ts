import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RatesService } from "../../../rates/services/rates.service";

@Component({
  selector: "app-assign-rate-modal",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./assign-rate-modal.component.html",
  styleUrl: "./assign-rate-modal.component.scss",
})
export class AssignRateModalComponent {
  assignRateForm: FormGroup;
  rates$ = this.ratesService.getRates();
  constructor(
    private fb: FormBuilder,
    private ratesService: RatesService
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

    console.log("Form is valid");
  }

  onModalOpen(data: any) {
    console.log("Modal opened", data);
  }
}
