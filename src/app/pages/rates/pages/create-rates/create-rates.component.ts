import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { EMPTY, catchError, first, tap } from "rxjs";
import { CommonModule } from "@angular/common";
import { RateRequestDto } from "../../../../interfaces/rates.interface";
import { RatesService } from "../../services/rates.service";

@Component({
  selector: "app-create-rates",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./create-rates.component.html",
  styleUrl: "./create-rates.component.scss",
})
export class CreateRatesComponent implements OnInit {
  rateForm: FormGroup;
  alertMessage: string | null = null;
  alertType: string = "success";
  durationUnit: string = "Month";
  constructor(
    private fb: FormBuilder,
    private ratesService: RatesService,
    private cdr: ChangeDetectorRef
  ) {
    this.rateForm = this.fb.group({
      name: [null, Validators.required],
      description: [null],
      price: [null, Validators.required],
      duration: [null, Validators.required],
      durationUnit: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.rateForm.get("durationUnit")?.setValue("Month");
    this.rateForm.get("durationUnit")?.valueChanges.subscribe((value) => {
      this.durationUnit = value;
    });
    this.cdr.detectChanges();
  }

  onSubmit() {
    if (this.isFormInvalid()) {
      return;
    }

    this.createRate(this.rateForm.getRawValue());
  }

  private isFormInvalid(): boolean {
    if (this.rateForm.invalid) {
      this.rateForm.markAllAsTouched();
      return true;
    }

    return false;
  }

  private createRate(formData: RateRequestDto) {
    this.ratesService
      .createRate(formData)
      .pipe(
        first(),
        tap((value) => this.showSuccessMessage(value.message)),
        catchError((error) => {
          this.showErrorMessage(error.error.message);
          return EMPTY;
        })
      )
      .subscribe();
  }

  private showSuccessMessage(message: string) {
    this.alertMessage = message;
    this.alertType = "success";
    this.hideMessageAfterDelay();
  }

  private showErrorMessage(message: string) {
    this.alertMessage = message;
    this.alertType = "danger";
    this.hideMessageAfterDelay();
  }

  private hideMessageAfterDelay() {
    setTimeout(() => (this.alertMessage = null), 3000);
  }
}
